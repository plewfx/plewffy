import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

import { GithubIcon } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="py-7 fixed top-0 left-0 right-0 bg-background/50 backdrop-blur-sm">
            <div className="mx-auto my-0 max-w-[85%]">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/plewffy.svg"
                            width={40}
                            height={40}
                            alt="Plewffy"
                        />
                    </Link>
                    <div className="flex gap-2 lg:gap-4">
                        <ModeToggle />
                        <Button size="icon" variant="outline" asChild>
                            <Link href="https://github.com/plewfx">
                                <GithubIcon />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}