import "@/styles/globals.css"
import Profile from "@/components/Profile"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experiences from "@/components/Experiences"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <Experiences/>
    </main>
  )
}
