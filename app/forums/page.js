"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const dataList = [
  {
    title: "Python",
    description:
      "Join discussions, share ideas, and connect with the community in our forums.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    slug: "Python-chat",
  },
  {
    title: "JavaScript",
    description:
      "Explore the dynamic world of JavaScript development, frameworks, and trends.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    slug: "Javascript-chat",
  },
  {
    title: "Machine Learning",
    description:
      "Dive into algorithms, models, and real-world ML applications with fellow enthusiasts.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    slug: "ML-chat",
  },
  {
    title: "Web Development",
    description:
      "Discuss front-end, back-end, and full-stack web technologies and best practices.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    slug: "Web-chat",
  },
  {
    title: "Cybersecurity",
    description:
      "Learn about ethical hacking, vulnerabilities, and securing digital environments.",
    img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", // custom icon (security padlock)
    slug: "Cyber-chat",
  },
  {
    title: "UI/UX Design",
    description:
      "Share design inspirations, Figma tricks, and talk about creating delightful experiences.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // figma icon
    slug: "UI/UX-chat",
  },
  {
    title: "DevOps",
    description:
      "Discuss CI/CD, cloud infrastructure, automation, and modern DevOps practices.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    slug: "DevOps-chat",
  },
];



export default function ForumsSection() {
  const router = useRouter();
  const handleClick = (slug) => {
    localStorage.setItem("lastForumSlug", slug);
    router.push(`/forum/${slug}`);
  };
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Community Forums</h2>
        <p className="text-gray-300 text-lg">
          Discover and connect with passionate communities across different tech
          domains.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {dataList.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300"
          >
            <div className="flex flex-col items-center justify-center pt-6">
              <img
                src={item.img}
                alt={item.title}
                className="h-16 w-16 object-contain mb-4"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-teal-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
              {/* <Link href={`/forum/${item.slug}`}>
                <Button
                  className="mt-4 inline-block px-4 py-2 text-sm font-semibold rounded-xl bg-teal-500 hover:bg-teal-400 text-white transition"
                >
                  Explore Forum
                </Button>
              </Link> */}
              <Button
                className="mt-4 inline-block px-4 py-2 text-sm font-semibold rounded-xl bg-teal-500 hover:bg-teal-400 text-white transition"
                onClick={() => handleClick(item.slug)}
                >
                console.log(`Navigating to forum: ${item.slug}`)
                Explore Forum
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// export const metadata = {
//   title: "ChatterBox Forums",
//   description:
//     "Join our vibrant community forums to discuss, learn, and share knowledge on various tech topics.",
// };
