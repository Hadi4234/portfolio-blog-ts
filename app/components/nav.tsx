import { ModeToggle } from '@/components/theme-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaHamburger } from 'react-icons/fa'
import DownloadButton from '@/components/download-button'


const navItems = {
  '/blog': {
    name: 'Blog',
  },

  '/contact': {
    name: 'Contact',
  }

}

export function Navbar() {
  return (

    <div className=" my-10">
      <nav
        className=" flex  items-center flex-row justify-between align-baseline"
        id="nav"
      >
        <Link href={"/"} className='text-2xl font-bold'>Abdullah Al Hadi</Link>
        <div className=" hidden md:flex flex-row gap-4 items-center ">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className=""
              >
                {name}
              </Link>
            )
          })}

          <DownloadButton />

        </div>
        <div className=' md:hidden'>
          <DropdownMenu >
            <DropdownMenuTrigger> <FaHamburger /> </DropdownMenuTrigger>
            <DropdownMenuContent className='flex flex-col justify-center items-center w-full'>


              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <DropdownMenuItem key={path}>
                    <Link

                      href={path}
                      className=""
                    >
                      {name}
                    </Link>
                  </DropdownMenuItem>
                )
              })}

              <DownloadButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>

  )
}
