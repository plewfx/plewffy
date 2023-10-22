"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/spinner";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const projects = useQuery(api.projects.get);

  const renderedProjects = projects?.map((project) => (
    <li key={project._id}>
      <Card>
        <CardHeader>
          <Image
            src={project.img}
            width={300}
            height={100}
            alt={project.name}
            className="rounded-lg mb-5"
          />
          <CardTitle>{project.name}</CardTitle>
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
    </li>
  ));

  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="mx-auto my-0 max-w-[85%]">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold capitalize">
              Young <span>front-end</span> developer <br /> form{" "}
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
            <h2 className="text-4xl lg:text-5xl font-bold capitalize text-center">
              My <span>best projects</span>
            </h2>
            <ul className="flex flex-wrap">
              {projects ? renderedProjects : <Spinner size="lg" />}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
