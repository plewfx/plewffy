"use client"

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

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

import Image from "next/image";
import Link from "next/link";

import { techs } from "@/constants";

export default function Page({ params }: { params: { slug: string } }) {
    const projects = useQuery(api.projects.get);
    const project = projects?.find(p => p._id === params.slug);
    console.log(project);

    return (
        <section className="py-10 lg:py-20">
            <div className="mx-auto my-0 max-w-[85%]">
                <div className="flex flex-col items-center">
                    {project ? (
                        <Card className="w-full">
                            <CardHeader className="w-full flex flex-col">
                                <Image
                                    src={"/projects" + project?.img}
                                    width={1000}
                                    height={550}
                                    alt={project?.name}
                                    className="rounded-lg mb-5 w-full"
                                />
                                <CardTitle className="text-start">{project?.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{project?.description}</CardDescription>
                                <div className="flex flex-col">
                                    <ul className="mt-5 flex flex-col gap-2">
                                        <h4 className="font-semibold">Features:</h4>
                                        {project?.features.map((feature: string) => (
                                            <li key={feature} className="text-foreground/50 list-disc ml-4 hover:text-primary">{feature}</li>
                                        ))}
                                    </ul>
                                    <ul className="mt-5 flex flex-col gap-2">
                                        <h4 className="font-semibold">Used technologies:</h4>
                                        {project?.technologies.map((technology: string) => {
                                            const tech = techs.find((t) => t.name === technology);
                                            
                                            if (tech) {
                                                return <li key={technology} className="text-foreground/50 list-disc ml-4 hover:text-primary">
                                                    <Link href={tech.url}>
                                                        {tech.name}
                                                    </Link>
                                                </li>
                                            }
                                        })}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" asChild>
                                    <Link href={project?.url}>Live app</Link>
                                </Button>
                            </CardFooter>
                        </Card>) : (
                        <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                            <div className="w-full">
                                <Skeleton className="rounded-lg mb-5 w-[100%] h-[50vw]" />
                                <Skeleton className="h-[24px] w-[40%]" />
                            </div>
                            <div className="mt-6">
                                <Skeleton className="h-[20px] w-[100%]" />
                                <div className="flex flex-col">
                                    <ul className="mt-5 flex flex-col gap-2">
                                        <Skeleton className="h-[20px] w-[25%]" />
                                        <Skeleton className="h-[18px] w-[50%]" />
                                        <Skeleton className="h-[18px] w-[50%]" />
                                    </ul>
                                    <ul className="mt-5 flex flex-col gap-2">
                                        <Skeleton className="h-[20px] w-[25%]" />
                                        <Skeleton className="h-[18px] w-[50%]" />
                                        <Skeleton className="h-[18px] w-[50%]" />
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Skeleton className="h-[40px] w-[100px] mt-6" />
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}