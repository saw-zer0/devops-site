import Link from "next/link"
import React from "react"
import Particles from "./components/particles"

const navigation = [
    { name: "Posts", href: "/socialMedia" },
    { name: "Contact", href: "/contact" },
]

export default function Home() {
    return (
        <>
            <div className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                <nav className="py-8 z-50 animate-fade-in fixed top-0 backdrop-blur-lg  w-screen">
                    <ul className="flex items-center justify-center gap-4 text-white">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-col items-center justify-center w-screen h-screen ">
                    <div className="hidden w-screen h-px animate-glow duration-500 md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                    <div className="px-10 py-4">
                        <h1 className="filter-none z-10 text-4xl text-transparent duration-300 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl lg:text-9xl whitespace-nowrap bg-clip-text ">
                            DevOps Pioneers
                        </h1>
                    </div>
                    <div className="hidden w-screen h-px animate-glow duration-500 md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                    <div className="my-16 text-center animate-fade-in">
                        <Link
                            href={"/aboutUs"}
                            className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 p-3 border-2  border-zinc-500 hover:border-heraldgreen rounded-xl"
                        >
                            Know More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
