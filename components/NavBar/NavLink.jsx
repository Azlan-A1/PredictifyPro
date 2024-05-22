"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link}) => {
    const pathName = usePathname()

    return (
        <Link href={link.href} key={link.key} className="regular-16 text-black-200 
            flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
        </Link>
    )
}

export default NavLink