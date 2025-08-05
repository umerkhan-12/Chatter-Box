// import { StreamChat } from "stream-chat";
// // import { clerkClient } from "@clerk/nextjs/dist/types/server";
// import { clerkClient } from "@clerk/nextjs/server"; // ✅ CORRECT


// const api_key =  process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const api_secret = process.env.STREAM_API_SECRET;

 

// function capitalize(str) {
//   if (!str) return "";
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// export async function POST(request) {
//   // Initialize a Server Client
//   const serverClient = StreamChat.getInstance(api_key, api_secret);
//   const user = await request.json();
//   const token = serverClient.createToken(user.data.id);
//   // Create User Token
//   console.log("New User has beeen made", token);

//   await serverClient.upsertUser({
//     id: user.data.id,
//   });

//   const client = await clerkClient();
//   await client.users.updateUserMetadata(user.data.id, {
//     publicMetadata: {
//       token: token,
//     },
//   });

//   // Give access to a user to all channels
//   const slugs = [
//     "Python-chat",
//     "Javascript-chat",
//     "ML-chat",
//     "Web-chat",
//     "Cyber-chat",
//     "UI/UX-chat",
//     "DevOps-chat",
//   ]
//   slugs.forEach(async (item) => {
//     const channel = serverClient.channel("messaging", item, {   
//       image: "https://getstream.io/random_png/?name=react",
//       name: capitalize(item)+ " Discussions",
//       created_by_id: user.data.id,
//   });
//   await channel.create()
//   channel.addMembers([user.data.id])
  
// })
//   return Response.json({ message: "Hello World" });
// }
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  if (!user?.data?.id) {
    return Response.json({ error: "User ID is missing" }, { status: 400 });
  }

  const token = serverClient.createToken(user.data.id);
  console.log("New User Token:", token);

  await serverClient.upsertUser({
    id: user.data.id,
  });

  // ✅ Fix: Don't call clerkClient as a function
  await clerkClient.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  const slugs = [
    "Python-chat",
    "Javascript-chat",
    "ML-chat",
    "Web-chat",
    "Cyber-chat",
    "UI/UX-chat",
    "DevOps-chat",
  ];

  // Add user to channels
  for (const item of slugs) {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: `${capitalize(item)} Discussions`,
      created_by_id: user.data.id,
    });
    await channel.create();
    await channel.addMembers([user.data.id]);
  }

  return Response.json({ message: "User setup complete" });
}
