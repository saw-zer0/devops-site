import { motion, useTransform, useScroll } from "framer-motion"
import Image from "next/image"
import { PropsWithChildren, use, useRef } from "react"
import { Github, Mail, Twitter } from "lucide-react"

import { Card } from "../components/card"

// const Example: React.FC<PropsWithChildren> = ({ children }) => {
//     return (
//         <div className="bg-neutral-800">
//             <div className="flex h-48 items-center justify-center">
//                 <span className="font-semibold uppercase text-neutral-500">
//                     Scroll down
//                 </span>
//             </div>
//             <HorizontalScrollCarousel />
//             <div className="flex h-48 items-center justify-center">
//                 <span className="font-semibold uppercase text-neutral-500">
//                     Scroll up
//                 </span>
//             </div>
//         </div>
//     )
// }

const members1 = [
    {
        image: "/imgs/mem1.jpg",
        icon: <Twitter size={20} />,
        label: "Hrikiss S. Chitrakar",
        handle: "@chronark_",
    },
    {
        image: "/imgs/mem2.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem3.jpg",
        icon: <Twitter size={20} />,
        label: "Hrikiss S. Chitrakar",
        handle: "@chronark_",
    },
    {
        image: "/imgs/mem4.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem5.jpg",
        icon: <Twitter size={20} />,
        label: "Hrikiss S. Chitrakar",
        handle: "@chronark_",
    },
    {
        image: "/imgs/mem6.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem15.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem14.jpeg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
]
const members2 = [
    {
        image: "/imgs/mem7.jpg",
        icon: <Twitter size={20} />,
        label: "Hrikiss S. Chitrakar",
        handle: "@chronark_",
    },
    {
        image: "/imgs/mem8.jpeg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem9.jpg",
        icon: <Twitter size={20} />,
        label: "Hrikiss S. Chitrakar",
        handle: "@chronark_",
    },
    {
        image: "/imgs/mem10.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem11.jpg",
        icon: <Twitter size={20} />,
        label: "Hrikiss S. Chitrakar",
        handle: "@chronark_",
    },
    {
        image: "/imgs/mem12.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
    {
        image: "/imgs/mem13.jpg",
        icon: <Mail size={20} />,
        label: "Sanil Shakya",
        handle: "dev@chronark.com",
    },
]

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll()
    const xright = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
    const xleft = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 2])
    const blur = useTransform(
        scrollYProgress,
        [0, 1],
        ["blur(10px)", "blur(0px)"]
    )

    return (
        <section ref={targetRef} className="relative h-[120vh] ">
            <div className="sticky top-[100px] flex flex-col gap-y-8 h-screen items-center">
                <h2 className="my-6 text-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Our Pioneers
                </h2>
                <motion.div
                    style={{ x: xright, opacity }}
                    className="flex gap-4"
                >
                    {members1.map((s) => (
                        <Card>
                            <div className="group relative w-[160px] overflow-hidden w-[220px] ">
                                {/* Card content goes here */}
                                <Image
                                    src={s.image}
                                    alt="Picture of the founder"
                                    width={300}
                                    height={300}
                                    // className="w-full h-full"
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
                    ))}
                </motion.div>
                <motion.div
                    style={{ x: xleft, opacity }}
                    className="flex gap-4"
                >
                    {members2.map((s) => (
                        // <div className="w-40 sm:w-1/4  md:w-1/5 lg:w-1/6 xl:w-1/7 mx-2 my-4">
                        <Card>
                            <div className="group relative w-[160px] overflow-hidden bg-neutral-200 md:w-[220px] ">
                                {/* Card content goes here */}
                                <Image
                                    src={s.image}
                                    alt="Picture of the founder"
                                    width={300}
                                    height={300}
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
                        // </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

// const CardWrapper = ({ card }: { card: any }) => {
//     return (
//         <Card>
//             <div className="relative flex flex-col items-center md:gap-8   bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
//                 {/* Card content goes here */}
//                 <Image
//                     src={s.image}
//                     alt="Picture of the founder"
//                     width={200}
//                     height={200}
//                     className="h-full w-full"
//                 />
//                 <div className="absolute bottom-0 h-1/3 w-full backdrop-blur-md bg-opacity-30 flex flex-col items-center justify-center z-10  ">
//                     <span className="lg:text-sm font-medium duration-150 xl:text-lg text-zinc-200 group-hover:text-white font-display">
//                         {s.label}
//                     </span>
//                     <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
//                         {s.handle}
//                     </span>
//                 </div>
//             </div>
//         </Card>
//     )
// }

export default HorizontalScrollCarousel

// const cards = [
//     {
//         url: "/imgs/abstract/1.jpg",
//         title: "Title 1",
//         id: 1,
//     },
//     {
//         url: "/imgs/abstract/2.jpg",
//         title: "Title 2",
//         id: 2,
//     },
//     {
//         url: "/imgs/abstract/3.jpg",
//         title: "Title 3",
//         id: 3,
//     },
//     {
//         url: "/imgs/abstract/4.jpg",
//         title: "Title 4",
//         id: 4,
//     },
//     {
//         url: "/imgs/abstract/5.jpg",
//         title: "Title 5",
//         id: 5,
//     },
//     {
//         url: "/imgs/abstract/6.jpg",
//         title: "Title 6",
//         id: 6,
//     },
//     {
//         url: "/imgs/abstract/7.jpg",
//         title: "Title 7",
//         id: 7,
//     },
// ]
