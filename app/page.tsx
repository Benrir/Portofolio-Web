import Profile from "@/components/Profile";
import About from "@/components/About";
import Publication from "@/components/Publication";
import "@/styles/globals.css";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="mx-auto bg-[#0a0a0a]">
      <Profile />
      <About />
      <Experience />
      <Publication />
    </main>
  );
}
