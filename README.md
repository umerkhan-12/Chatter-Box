# 📢 ChatterBox

**ChatterBox** is a full-stack, topic-based chat forum application. Users can join discussion forums via dynamic URLs and chat in real-time — thanks to seamless integration with **Clerk** for secure authentication and **Stream Chat** for instant messaging.

---

## 🚀 Features

### 🔐 Authentication
- **Clerk Integration**: Scalable, secure login.
- Supports **credential-based login**.

### 💬 Real-Time Chat
- **Stream Chat SDK** for fast messaging.
- Channels based on dynamic forum topics (e.g., `/forums/react`, `/forums/ai`).
- Messages persist even after refreshing or navigating.

### 🧵 Forum System
- Dynamic forum creation from slug-based routes.
- Custom forum metadata (title + description).
- Auto-joins new users to selected channels.

### 🧠 Smart UX
- Remembers last visited forum using `localStorage`.
- Auto-redirects to last active forum.
- Auto-scrolls to the latest message on load.

### 🎨 UI & Styling
- Built with **Next.js 14 App Router**.
- Styled using **Tailwind CSS**.
- Clean, minimal components for buttons, links, and layouts.

---

## 🛠️ Tech Stack

| Layer         | Tech                  |
| ------------- | --------------------- |
| **Frontend**  | Next.js 14 (React)    |
| **Backend**   | Stream Chat SDK       |
| **Auth**      | Clerk.dev             |
| **Styling**   | Tailwind CSS          |
| **Hosting**   | Vercel                |

---

## 🔐 Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret
