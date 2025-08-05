"use client";
import React from 'react'
import { useState, useEffect } from 'react';
// import type { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}



const Chatforum = ({clerkUser,slug}) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const userId = clerkUser.id;
const userName = clerkUser.name;
const userToken = clerkUser.token;

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

   const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

 
  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(slug)+ " Discussions",
      members: [userId],
    });

  

    
    
    setChannel(channel);
    // channel.addMembers([userId])
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default Chatforum


// "use client";
// import React, { useState, useEffect } from 'react';
// import {
//   useCreateChatClient,
//   Chat,
//   Channel,
//   ChannelHeader,
//   MessageInput,
//   MessageList,
//   Thread,
//   Window,
// } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/v2/index.css';

// function capitalize(str) {
//   if (!str) return "";
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const Chatforum = ({ clerkUser, slug }) => {
//   const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
//   const userId = clerkUser.id;
//   const userName = clerkUser.name;
//   const userToken = clerkUser.token;

//   const user = {
//     id: userId,
//     name: userName,
//     image: `https://getstream.io/random_png/?name=${userName}`,
//   };

//   const [channel, setChannel] = useState(null);

//   const client = useCreateChatClient({
//     apiKey,
//     tokenOrProvider: userToken,
//     userData: user,
//   });

//   useEffect(() => {
//     if (!client) return;

//     const initChannel = async () => {
//       try {
//         const channel = client.channel('messaging', slug, {
//           name: `${capitalize(slug)} Discussions`,
//           image: 'https://getstream.io/random_png/?name=react',
//           members: [userId],
//         });

//         await channel.watch(); // 🔥 Required to fetch messages & activate channel
//         setChannel(channel);
//       } catch (err) {
//         console.error("Error initializing Stream channel:", err);
//       }
//     };

//     initChannel();
//   }, [client, slug, userId]);

//   if (!client || !channel) return <div>Setting up chat client...</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default Chatforum;

// /components/Chatforum.js

// 'use client';
// import { useEffect, useState } from 'react';
// import { StreamChat } from 'stream-chat';
// import {
//   Chat,
//   Channel,
//   ChannelHeader,
//   MessageList,
//   MessageInput,
//   Window,
//   LoadingIndicator
// } from 'stream-chat-react';
// import 'stream-chat-react/dist/css/v2/index.css';

// const chatClient = StreamChat.getInstance('r7dtjnrbw5wa'); // Stream App Key

// export default function Chatforum({ slug, clerkUser }) {
//   const [clientReady, setClientReady] = useState(false);

//   useEffect(() => {
//     async function initChat() {
//       const res = await fetch('/api/token');
//       const data = await res.json();

//       if (!data.token) {
//         console.error('Missing token from API');
//         return;
//       }

//       await chatClient.connectUser(
//         {
//           id: clerkUser.id,
//           name: clerkUser.name,
//         },
//         data.token
//       );

//       setClientReady(true);
//     }

//     initChat();

//     return () => {
//       if (chatClient) chatClient.disconnectUser();
//     };
//   }, []);

//   if (!clientReady) return <LoadingIndicator />;

//   const channel = chatClient.channel('messaging', slug, {
//     name: `${slug} Chat Room`,
//     members: [clerkUser.id],
//   });

//   return (
//     <Chat client={chatClient} theme="str-chat__theme-light">
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//       </Channel>
//     </Chat>
//   );
// }
