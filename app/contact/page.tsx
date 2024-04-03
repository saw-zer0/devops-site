"use client"
import React from "react"
import { Navigation } from "../components/nav"
import { Github, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import { Card } from "../components/card"

export default function Contact() {
    const socials = [
        {
            icon: <Instagram size={20} />,
            href: "https://www.instagram.com/heralddevcorps.devops/",
            label: "Instagram",
            handle: "heralddevcorps.devops",
        },
        {
            icon: <Mail size={20} />,
            href: "mailto:devopspioneer@heraldcollege.edu.np",
            label: "Email",
            handle: "devopspioneer@heraldcollege.edu.np",
        },
        {
            icon: <Github size={20} />,
            href: "https://github.com/chronark",
            label: "Github",
            handle: "chronark",
        },
    ]
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen w-full md:w-max px-4 mx-auto">
                <div className="flex flex-col items-center">
                    {socials.map((s) => (
                        <div className="w-full sm:w-full my-3 sm:mx-3">
                            <Card>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    className="px-2 py-4 relative flex flex-row items-center gap-4 duration-700 group sm:p-12"
                                >
                                    <span
                                        className="absolute h-px w-4/5 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                        {s.icon}
                                    </span>{" "}
                                    <div className="z-10 flex flex-col items-start">
                                        <span className="text-sm md:text-xl font-medium duration-150 md:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {s.handle}
                                        </span>
                                        <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
