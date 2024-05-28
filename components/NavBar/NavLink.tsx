"use client"

import Link from 'next/link'


interface LinkProps {
    href: string
    key: string
    label: string
  }
interface NavLinkProps {
    link: LinkProps
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
    return (
        <Link href={link.href} key={link.key} className="regular-16 text-black-200 
            flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
        </Link>
    )
}

export default NavLink