import { EmailForm } from "../EmailForm";

export default function ContactForm() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center ">
      <h1 className="text-5xl text-pretty font-semibold p-10">Contact Form</h1>

      <EmailForm />

    </div>
  )
}
