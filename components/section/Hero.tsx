import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Hero() {
  return (
    <section className='flex justify-center items-center h-[600px] relative '>
      <div className="flex flex-col gap-3 justify-center items-center -mt-16">

        <Image src={'/hadi.jpg'} className=" rounded-full" width={300} height={300} alt='profile' />

        <h1 className="font-semibold text-2xl">Abdullah Al Hadi</h1>
        <p className=" text-foreground/75">Full stack javascript developer</p>
        <div className="flex flex-row justify-center items-center gap-3">
          <Link href={'https://www.facebook.com/abdullahal.hadi1'}>
            <FaFacebook size={30} />
          </Link>
          <Link href={"https://github.com/Hadi4234"}>
            <FaGithub size={30} />
          </Link>

          <FaTwitter size={30} />

          <Link href={"https://www.linkedin.com/in/abdullah-hadi-264100138/"}>
            <FaLinkedin size={30} />
          </Link>

        </div>


      </div>
    </section>
  )
}
