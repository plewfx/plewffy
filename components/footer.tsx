import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

import { GithubIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 lg:py-10">
      <div className="mx-auto my-0 max-w-[85%]">
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex items-center justify-between">
            <Image src="/plewffy.svg" width={50} height={50} alt="Plewffy" />
            <Button size="icon" variant="outline" asChild>
              <Link href="https://github.com/plewfx">
                <GithubIcon />
              </Link>
            </Button>
          </div>
          <p className="text-foreground/50 text-center">© 2025 Plewffy</p>
        </div>
      </div>
    </footer>
  );
};
