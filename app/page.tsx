"use client";

import { useQuery } from "convex/react";

import { api } from "../convex/_generated/api";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
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

import { techs } from "@/technologies.ts";

export default function Home() {
  const projects = useQuery(api.projects.get);

  const renderedProjects = projects?.map((project) => (
    <li key={project._id}>
      <Tooltip>
        <TooltipTrigger>
          <Card>
            <CardHeader>
              <Image
                src={"/projects" + project.img}
                width={300}
                height={100}
                alt={project.name}
                className="rounded-lg mb-5"
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
            {project.technologies.map((technology) => {
              const tech = techs.find((t) => t.name === technology);
              return (
                <li key={technology} className="hover:text-primary">
                  <Link href={tech.url}>{technology}</Link>
                </li>
              );
            })}
          </ul>
        </TooltipContent>
      </Tooltip>
    </li>
  ));

  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="mx-auto my-0 max-w-[85%]">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold capitalize">
              Young <span>frontend</span> developer <br /> form{" "}
              <span>Kazakhstan</span>
            </h1>
            <p>
              My name is <span>Akhmet Mukhammedali</span> (Plewffy is just a
              pseudonym). I am 15 y.o.
              <br />
              And I am interested in Web development. I can create applications
              using{" "}
              <span className="hover:underline">
                <Link href="#stack">in-demand technologies</Link>
              </span>
            </p>
            <Button asChild>
              <Link href="#projects">Look at portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20" id="stack">
        <div className="mx-auto my-0 max-w-[85%]">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-5xl font-bold capitalize text-center">
              My <span>technical stack</span>
            </h2>
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
            <ul className="flex flex-wrap">
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
