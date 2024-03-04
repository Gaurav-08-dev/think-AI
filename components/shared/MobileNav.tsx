"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link  from 'next/link';
import Image from 'next/image';  
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { Button } from '../ui/button';

const MobileNav = () => {
    const pathname=usePathname();
  return (
    <header className='header'>
        <Link href='/' className='flex item-center gap-2 md:py-2'>
            <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
            />
        </Link>
        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <Sheet>
                <SheetTrigger>
                    <Image
                    src="/assets/icons/menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent className='sheet-content sm:w-64'>
                   <>
                   <Image
                   src="/assets/images/logo-text.svg"
                   alt="logo"
                   width={152}
                   height={23}
                   />
                   <ul className="header-nav_elements">
                        {
                            navLinks.map((item) => {
                                const isActive = item.route === pathname;

                                return (
                                    <li key={item.route} 
                                    className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                    >
                                        <Link href={item.route} className="sidebar-link cursor-pointer">
                                            <Image src={item.icon} alt="nav-logo"
                                            width={24} height={24}
                                            />
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                   </>
                </SheetContent>
                </Sheet>

            </SignedIn>
            <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav