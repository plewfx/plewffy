"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { HelpCircle } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { techs, stack } from "@/constants";

export default function Home() {
  const projects = useQuery(api.projects.get);

  const renderedProjects = projects?.map((project) => (
    <li key={project._id}>
      <Link href={project._id}>
        <Tooltip>
          <TooltipTrigger>
            <Card>
              <CardHeader>
                <Image
                  src={"/projects" + project.img}
                  width={300}
                  height={213}
                  alt={project.name}
                  className="rounded-lg mb-5 w-[300px] h-[213px]"
                />
                <CardTitle className="text-start">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" asChild>
                  <Link href={project.url}>Live app</Link>
                </Button>
              </CardFooter>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <ul className="flex items-center gap-2 flex-wrap">
              {project.technologies.map((technology: string) => {
                const tech = techs.find((t) => t.name === technology);

                if (tech) {
                  return (
                    <li key={technology} className="hover:text-primary">
                      <Link href={tech.url}>{technology}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </TooltipContent>
        </Tooltip>
      </Link>
    </li>
  ));

  const handleScrollToProjects = () => {
    const nextSection = document.getElementById("projects");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToStack = () => {
    const nextSection = document.getElementById("stack");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="mx-auto my-0 max-w-[85%]">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold capitalize">
              Young <span>frontend</span> developer <br /> from{" "}
              <span>Kazakhstan</span>
            </h1>
            <p>
              My name is <span>Akhmet Mukhammedali</span>. I am 15 y.o.
              <br />
              And I am interested in Web development. I can create applications
              using{" "}
              <span className="hover:underline cursor-pointer" onClick={handleScrollToStack}>in-demand technologies
              </span>
            </p>
            <Button onClick={handleScrollToProjects}>
              Look at portfolio
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20" id="stack">
        <div className="mx-auto my-0 max-w-[85%]">
          <div className="flex flex-col items-center gap-7">
            <h2 className="text-4xl lg:text-5xl font-bold capitalize text-center">
              My <span>technical stack</span>
            </h2>
            <ul className="w-full flex flex-col items-start gap-6">
              {stack.map((item) => (
                <li key={item.name} className="w-full flex flex-col gap-4">
                  <h3 className="text-white/50 font-semibold">{item.name}</h3>
                  <ul className="flex justify-start gap-3 flex-wrap">
                    {item.techs.map((technology) => (
                      <Link key={technology.name} href={technology.url}>
                        <li className="flex flex-col gap-3 items-center border rounded-lg p-4 hover:text-primary">
                          <Image
                            src={"/stack" + technology.icon}
                            width={100}
                            height={100}
                            alt={technology.name}
                            className="rounded-lg w-[100px] h-[100px] object-contain"
                          />
                          {technology.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20" id="projects">
        <div className="mx-auto my-0 max-w-[85%]">
          <div className="flex flex-col items-center gap-7 lg:gap-10">
            <div className="flex w-full items-center justify-center text-center relative">
              <h2 className="text-4xl lg:text-5xl font-bold capitalize">
                My <span>best projects</span>
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute lg:right-[20%] lg:block hidden">
                    <HelpCircle color="gray" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>just hover a card to see the used technologies</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <ul className="flex flex-wrap gap-5 lg:gap-8">
              <TooltipProvider>
                {projects ? (
                  renderedProjects
                ) : (
                  <>
                    <div className="w-[350px] h-[420px] border rounded-lg">
                      <div className="flex flex-col space-y-1.5 p-6">
                        <Skeleton className="w-[300px] h-[213px] mb-5" />
                        <Skeleton className="w-[150px] h-[24px]" />
                      </div>
                      <div className="p-6 pt-0">
                        <Skeleton className="w-[300px] h-[20px]" />
                      </div>
                      <div className="flex items-center p-6 pt-0">
                        <Skeleton className="w-[100px] h-[20px]" />
                      </div>
                    </div>
                  </>
                )}
              </TooltipProvider>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}