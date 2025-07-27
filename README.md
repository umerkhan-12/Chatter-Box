📢 ChatterBox

ChatterBox is a full-stack chat forum web application designed to facilitate topic-based discussions. It integrates Clerk for authentication and Stream for real-time chat functionalities. Users can join specific forums, engage in conversations, and continue discussions seamlessly.

🚀 Features

👥 Authentication

Clerk Integration: Users log in with secure and scalable authentication.

Credential-based login support.

💬 Real-Time Chat

Stream Chat SDK: Real-time messaging with channels based on forum topics.

Join forums using URL slugs like /forums/react, /forums/ai, etc.

Persistent channels even after refreshing or navigating.

📌 Forums System

Dynamic forum creation based on slug routes.

Custom metadata for each forum (title & description).

Automatically adds the user to the forum channel if not already a member.

🧠 Smart UX

Saves and loads the latest forum from LocalStorage.

Redirects users to their previously joined forum.

Channel view auto-scrolls to the latest message.

🎨 UI & Styling

Built with Next.js 14 App Router.

Styled using Tailwind CSS.

Custom button and link handling.

🛠️ Tech Stack

Layer

Tool/Library

Frontend

React, Next.js 14

Backend

Stream Chat SDK

Authentication

Clerk

Styling

Tailwind CSS

Hosting

Vercel



🔐 Environment Variables

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STREAM_API_KEY=your_stream_key

🧪 How to Use

Install dependencies:

npm install

Run locally:

npm run dev

Visit the homepage at http://localhost:3000

Login using Clerk.

Navigate to forums:

Example: http://localhost:3000/forums/react

You can create your own forums by typing the desired slug.

🔧 Customization

You can customize available forum links via a menu component or homepage.

Modify Chatforum metadata logic to reflect your branding.

🧼 TODOs & Improvements



📸 Screenshots (Optional)

Add relevant screenshots or demo links here

🧑‍💻 Author

Umer Khan

Final year project / learning exercise in full-stack chat systems.

📃 License

MIT

Happy chatting with ChatterBox! 🎉

