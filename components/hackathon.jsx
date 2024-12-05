"use client"
import Link
 from "next/link"
import { usePathname } from "next/navigation"
 const Links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'General-info',
        path: '/services',
    },
    {
        name: 'history',
        path: '/resume',
    },
    {
        name: 'types-optical_fibre',
        path: '/work',
    },
    {
        name: 'latest-technologies',
        path: '/contact',
    },
 ]
const Nav = () => {
   const pathname = usePathname();
   
  return (
    <nav className="flex gap-8">
      {Links.map((link, index)=> {
        return (
        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2"} capitalize font-medium hover:text-accent translate-all`}>{link.name}</Link>
    )
})}
    </nav>
  )
}

export default Nav
