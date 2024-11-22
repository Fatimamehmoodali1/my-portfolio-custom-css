'use client';
import { useState } from "react";
import { UserInfo, HeaderItems } from "@/constants/constants";
import { NavItems } from "@/models/Header";
import { IoMenu } from "react-icons/io5";
import { Link as ScrollLinkCustom } from 'react-scroll';


export default function Header() {
    const [showNavItems, setShowNavItems] = useState<boolean>(false); // State to toggle nav items

    return (
        <header className="bg-pink-900 p-6 justify-between fixed top-0 md:flex w-full z-10">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Fatima Mehmood Ali</h2>
                <IoMenu size={30} className="md:hidden" onClick={() => setShowNavItems(prev => !prev)} />
            </div>
            <div className={`mr-8 md:space-x-6 md:mt-0 md:block hover:font-bold ${showNavItems ? 'block' : 'hidden'}`}>
                {
                    Object.keys(HeaderItems).map(item => (
                        <ScrollLinkCustom
                            to={HeaderItems[item as keyof NavItems].page}
                            className="block md:inline-block cursor-pointer " key={HeaderItems[item as keyof NavItems].label}
                            spy={true}
                            smooth={true}
                        >

                            {HeaderItems[item as keyof NavItems].label}
                        </ScrollLinkCustom>
                    ))
                }
            </div>
        </header>
    );
}
