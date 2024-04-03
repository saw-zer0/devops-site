"use client"
import { Github, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { Navigation } from "../components/nav"
import { Card } from "../components/card"

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <script
                    src="https://static.elfsight.com/platform/platform.js"
                    data-use-service-core
                    defer
                ></script>
                <div
                    className="elfsight-app-2e15ab70-c750-4ca3-b82d-b31f0ef5fd05"
                    data-elfsight-app-lazy
                ></div>
            </div>
        </div>
    )
}
