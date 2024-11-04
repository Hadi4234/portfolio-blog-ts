import About from "@/components/section/About";
import ContactForm from "@/components/section/ContactForm";
import Education from "@/components/section/Education";
import Hero from "@/components/section/Hero";
import { Project } from "@/components/section/project"
import { ProjectIdea } from "@/components/section/project-idea";

import Skill from "@/components/section/Skill";


export default function Page() {
  return (
    <>
      <Hero />
      <Skill />
      <Project />
      <ProjectIdea />
      <ContactForm />
    </>
  )
}
