"use client";
import React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import { useUser } from '@clerk/nextjs';




export default function Navbar() {
  // const user = useUser();
  // console.log(user.user?.id)
  const router = useRouter();
  const handleForumClick = () => {
    const lastForumSlug = localStorage.getItem('lastForumSlug') || 'Python-chat'; // fallback if empty
    router.push(`/forum/${lastForumSlug}`);
  };
  // const [slug, setSlug] = useState(null);

  // useEffect(() => {
  //   const savedSlug = localStorage.getItem('lastForumSlug');
  //   if (savedSlug) {
  //     setSlug(savedSlug);
  //   }
  // }, []);

  // const handleForumClick = () => {
  //   if (slug) {
  //     router.push(`/forum/${slug}`);
  //   } else {
  //     router.push('/forum'); // fallback if none stored
  //   }
  // };
  return (
    <header className="sticky top-0 z-50 bg-indigo-950/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-teal-400 flex items-center justify-center gap-2">
          <Image
            alt='ChatterBox Logo'
            src={"/pic.png"}
            width={50}
            height={50}
            className='mb-6 cursor-pointer '
          />
          ChatterBox
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-teal-300 transition">
            Home
          </Link>
          <Link href="/forums" className="hover:text-teal-300 transition">
            Forums
          </Link >
          {/* <Link href="/forums" className="hover:text-teal-300 transition">
            Chat
          </Link> */}
          
          <button
            onClick={handleForumClick}
            className=" mb-2 hover:text-teal-300 transition "
          >
            Chat
          </button>

          {/* <a href="#" onClick={handleChatClick}> Chat </a> */}
          <UserButton className='mb-3' />
          
        </nav>

      </div>
    </header>
  );
}


