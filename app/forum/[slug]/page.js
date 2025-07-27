// import Chatforum from '@/components/Chatforum';
// import { Chat, useCreateChatClient } from 'stream-chat-react';
// import { currentUser } from '@clerk/nextjs/server'




// export default async function Page({ params }) {
   


//   const user = await currentUser()
//   const { slug } = await params
//   return <Chatforum slug={slug} clerkUser={{id: user.id,name: user.firstName,token:user.publicMetadata.token}}/>

// }
import Chatforum from '@/components/Chatforum';
import { currentUser } from '@clerk/nextjs/server';

// 📌 Page component
export default async function Page({ params }) {
  const user = await currentUser();
  
  const { slug } = params;

  if (!user || !user.publicMetadata?.token) {
    return <div>Unauthorized or missing token.</div>;
  }

  return (
    <Chatforum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName || user.username || 'Anonymous',
        token: user.publicMetadata.token,
      }}
    />
  );
}

// 📌 Dynamic Metadata export
export async function generateMetadata({ params }) {
  const { slug } = params;

  const formattedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `ChatterBox – ${formattedSlug} Forum`,
    description: `Join the ${formattedSlug} chat forum to discuss and connect with others.`,
    openGraph: {
      title: `ChatterBox – ${formattedSlug} Forum`,
      description: `Join the ${formattedSlug} chat forum to discuss and connect with others.`,
      url: `https://yourdomain.com/forums/${slug}`,
      siteName: 'ChatterBox',
      type: 'website',
    },
  };
}
