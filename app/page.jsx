// "use client"
import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Hero Section */}
        <section className="mt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-teal-300">ChatterBox</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Your new favorite place to chat, connect, and vibe with people in real time.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/forums" >
            <button  className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition duration-300 shadow-lg">
             
              Get Started
            </button> </Link>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-900 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Realtime Chat",
              desc: "Connect instantly with friends or groups using lightning-fast communication.",
              icon: "💬",
            },
            {
              title: "Secure Conversations",
              desc: "Your messages are safe and encrypted for complete privacy.",
              icon: "🔒",
            },
            {
              title: "Custom Profiles",
              desc: "Express yourself with avatars, bios, and more personalization.",
              icon: "🧑‍🎨",
            },
          ].map(({ title, desc, icon }, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-md hover:scale-105 transition transform duration-300"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start chatting?
          </h2>
          <p className="text-gray-300 mb-6">
            Join the ChatterBox community and connect with the world.
          </p>
          
        </section>
      </div>
    </main>
  );
}


export const metadata = {
  title: 'ChatterBox - Your Real-Time Chat App',
  description: 'Experience seamless communication with ChatterBox, your go-to platform for real-time chatting and community engagement.',
  icons: {
    icon: "/favicon.ico", // ✅ Add or replace this line
  },

}


