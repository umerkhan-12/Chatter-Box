import { StreamChat } from "stream-chat";
// import { clerkClient } from "@clerk/nextjs/dist/types/server";
import { clerkClient } from "@clerk/nextjs/server"; // ✅ CORRECT


const api_key =  process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

 

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  const token = serverClient.createToken(user.data.id);
  // Create User Token
  console.log("New User has beeen made", token);

  await serverClient.upsertUser({
    id: user.data.id,
  });

  const client = await clerkClient();
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  // Give access to a user to all channels
  const slugs = [
    "Python-chat",
    "Javascript-chat",
    "ML-chat",
    "Web-chat",
    "Cyber-chat",
    "UI/UX-chat",
    "DevOps-chat",
  ]
  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {   
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(item)+ " Discussions",
      created_by_id: user.data.id,
  });
  await channel.create()
  channel.addMembers([user.data.id])
  
})
  return Response.json({ message: "Hello World" });
}
// import { StreamChat } from "stream-chat";
// import { clerkClient } from "@clerk/nextjs/server"; // ✅ Correct import

// const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const api_secret = process.env.STREAM_API_SECRET;

// function capitalize(str) {
//   if (!str) return "";
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// export async function POST(request) {
//   const serverClient = StreamChat.getInstance(api_key, api_secret);
//   const user = await request.json();

//   const userId = user?.data?.id;
//   const userName = user?.data?.name || "Guest";

//   if (!userId) {
//     return Response.json({ error: "Missing user ID" }, { status: 400 });
//   }

//   // Create a Stream Chat user token
//   const token = serverClient.createToken(userId);
//   console.log("✅ Created token for new user:", token);

//   // Upsert user in Stream
//   await serverClient.upsertUser({
//     id: userId,
//     name: userName,
//     image: `https://getstream.io/random_png/?name=${userName}`,
//   });

//   // Save token in Clerk public metadata
//   // await clerkClient.users.updateUserMetadata(userId, {
//   //   publicMetadata: {
//   //     token,
//   //   },
//   await clerkClient.users.updateUserMetadata(userId, {
//   publicMetadata: {
//     streamToken: token, // ✅ Not just 'token'
//   },
//   });

//   // Create and assign user to all channels
//   const slugs = [
//     "Python-chat",
//     "Javascript-chat",
//     "ML-chat",
//     "Web-chat",
//     "Cyber-chat",
//     "UI/UX-chat",
//     "DevOps-chat",
//   ];

//   await Promise.all(
//     slugs.map(async (slug) => {
//       const channel = serverClient.channel("messaging", slug, {
//         image: "https://getstream.io/random_png/?name=react",
//         name: capitalize(slug) + " Discussions",
//         created_by_id: userId,
//       });

//       await channel.create(); // ⚠️ only needs to be created once
//       await channel.addMembers([userId]);
//     })
//   );

//   return Response.json({ message: "User setup complete", token });
// }
// /app/api/token/route.js

// import { auth } from '@clerk/nextjs';
// import { StreamChat } from 'stream-chat';

// const serverClient = StreamChat.getInstance(
//   'r7dtjnrbw5wa',        // Stream App Key (from you)
//   process.env.STREAM_API_SECRET  // You MUST set this in `.env.local`
// );

// export async function GET() {
//   const { userId } = auth();

//   if (!userId) {
//     return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//   }

//   const token = serverClient.createToken(userId);
//   return new Response(JSON.stringify({ token }), { status: 200 });
// }
