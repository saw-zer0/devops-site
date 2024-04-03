"use client"

import React from "react"
import { Navigation } from "../components/nav"
import { Card } from "../components/card"
import { Github, Mail, Twitter } from "lucide-react"

import Link from "next/link"
import Image from "next/image"
import HorizontalScroll from "../components/horizontalScroll"
import { Variants, motion } from "framer-motion"

interface CardWithBackgroundProps {
    image: string
    text: string
}

const CardWithBackground: React.FC<CardWithBackgroundProps> = ({
    image,
    text,
}) => {
    return (
        <div className="relative h-64 w-64">
            <img
                src={image}
                alt="background"
                className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 h-1/2 w-full backdrop-blur-md bg-opacity-30 bg-white flex items-center justify-center">
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}

export default function aboutUs() {
    const members = [
        {
            image: "/portrait_sample.jpg",
            icon: <Twitter size={20} />,
            label: "Hrikiss S. Chitrakar",
            handle: "@chronark_",
        },
        {
            image: "/portrait_sample.jpg",
            icon: <Mail size={20} />,
            label: "Sanil Shakya",
            handle: "dev@chronark.com",
        },
        {
            image: "/portrait_sample.jpg",
            icon: <Twitter size={20} />,
            label: "Hrikiss S. Chitrakar",
            handle: "@chronark_",
        },
        {
            image: "/portrait_sample.jpg",
            icon: <Mail size={20} />,
            label: "Sanil Shakya",
            handle: "dev@chronark.com",
        },
        {
            image: "/portrait_sample.jpg",
            icon: <Twitter size={20} />,
            label: "Hrikiss S. Chitrakar",
            handle: "@chronark_",
        },
        {
            image: "/portrait_sample.jpg",
            icon: <Mail size={20} />,
            label: "Sanil Shakya",
            handle: "dev@chronark.com",
        },
    ]
    const founders = [
        {
            image: "/imgs/found1.jpg",
            icon: <Twitter size={20} />,
            // href: "https://twitter.com/chronark_",
            label: "Hrikiss S. Chitrakar",
            handle: "@chronark_",
            id: 0,
        },
        {
            image: "/imgs/found2.jpg",
            icon: <Mail size={20} />,
            // href: "mailto:dev@chronark.com",
            label: "Sanil Shakya",
            handle: "dev@chronark.com",
            id: 1,
        },
    ]
    const mentor = {
        image: "/imgs/mentor.jpg",
        icon: <Twitter size={20} />,
        // href: "https://twitter.com/chronark_",
        label: "Yamu Poudel",
        handle: "@chronark_",
        id: 0,
    }
    const mentorCardVariant: Variants[] = [
        {
            offscreen: {
                x: -200,
                opacity: 0,
            },
            onscreen: {
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                },
                opacity: 1,
            },
        },
        {
            offscreen: {
                x: 200,
                opacity: 0,
            },
            onscreen: {
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                },
                opacity: 1,
            },
        },
    ]
    const cardVariants: Variants[] = [
        {
            offscreen: {
                x: -300,
                opacity: 0,
            },
            onscreen: {
                x: 50,
                rotate: -10,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                },
                opacity: 1,
            },
        },
        {
            offscreen: {
                x: 300,
                opacity: 0,
            },
            onscreen: {
                x: 50,
                rotate: 10,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                },
                opacity: 1,
            },
        },
    ]
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 ">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Who We Are
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        We are the DevOps Pioneers Community, a branch of Herald
                        DevCorps, where a diverse group of people come together
                        to learn, research, share knowledge, and develop skills
                        in the dynamic field of DevOps.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <div className="w-full mx-auto lg:mx-0">
                    <div className="flex flex-row justify-around align-center mx-auto lg:grid-cols-2 mx-auto w-100">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={mentorCardVariant[0]}
                            className=" "
                        >
                            <Card>
                                <div className="w-[300px] relative flex flex-col items-center gap-4  group md:gap-8   bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
                                    {/* Card content goes here */}
                                    <Image
                                        src={mentor.image}
                                        alt="Picture of our mentor"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="absolute bottom-0 h-1/3 w-full backdrop-blur-md bg-opacity-30 flex flex-col items-center justify-center z-10  ">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {mentor.label}
                                        </span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {mentor.handle}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={mentorCardVariant[1]}
                            className=" mx-4 w-1/2"
                        >
                            <h2 className="text-left text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                                Our Mentor
                            </h2>
                            <br />
                            <p className="text-left text-zinc-400 text-lg duration-150 xl:text-xl group-hover:text-white font-display w-1/2">
                                Experienced IT professional with a BSc. IT
                                degree and a strong background in Software
                                Engineering. <br />
                                MSC.IT specialization in Data Analytics, <br />
                                16 years of expertise from multinational tech
                                companies and a leading ISP. <br />
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                {/* <h2 className=" text-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    The Pioneers
                </h2> */}
                <HorizontalScroll />
                {/* <div className="flex flex-row content-around justify-around mx-auto flex-wrap flex-initial">
                    {members.map((s) => (
                        <div className="w-40 sm:w-1/4  md:w-1/5 lg:w-1/6 xl:w-1/7 mx-2 my-4">
                            <Card>
                                <div className="relative flex flex-col items-center md:gap-8   bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
                                    <Image
                                        src={s.image}
                                        alt="Picture of the founder"
                                        width={200}
                                        height={200}
                                        className="h-full w-full"
                                    />
                                    <div className="absolute bottom-0 h-1/3 w-full backdrop-blur-md bg-opacity-30 flex flex-col items-center justify-center z-10  ">
                                        <span className="lg:text-sm font-medium duration-150 xl:text-lg text-zinc-200 group-hover:text-white font-display">
                                            {s.label}
                                        </span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.handle}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div> */}
                <div className="w-full h-px bg-zinc-800" />
                <h2 className=" text-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Founders
                </h2>
                <div className="flex flex-row justify-around mx-auto lg:grid-cols-2 ">
                    {founders.map((s) => (
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={cardVariants[s.id]}
                        >
                            <Card>
                                <div className=" relative flex flex-col items-center gap-4  group md:gap-8   bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
                                    {/* Card content goes here */}
                                    <Image
                                        src={s.image}
                                        alt="Picture of the founder"
                                        width={200}
                                        height={200}
                                        className="h-full w-full"
                                    />
                                    <div className="absolute bottom-0 h-1/3 w-full backdrop-blur-md bg-opacity-30 flex flex-col items-center justify-center z-10  ">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {s.label}
                                        </span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.handle}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full h-px bg-zinc-800" />
            </div>
        </div>
    )
}
