"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { links } from "@/constants";
import Link from "next/link";
import dynamic from "next/dynamic";

const Globe = dynamic(
    () => import("react-globe.gl").then((mod) => mod.default),
    { ssr: false } // ✅ Désactive SSR
);

export default function About() {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        void navigator.clipboard.writeText(links.contactEmail);

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="my-20" id="about">
            <div className="md:grid p-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6">
                <div className="col-span-1 lg:row-span-3">
                    <div className="bg-black p-4 md:py-4 md:px-6 rounded-3xl h-fit md:h-full">
                        <img
                            src="/assets/grid1.png"
                            alt="Grid 1"
                            className="h-fit w-full object-contain sm:h-69"
                        />

                        <div className="space-y-2">
                            <p className="text-2xl font-bold font-ciguatera">
                                Hello, moi c'est Richy!
                            </p>
                            <p>
                                Avec 03 ans d'expérience, j'ai perfectionné mes
                                compétences en développement front-end et
                                back-end, avec une expertise particulière dans
                                la transmission de mes compétences aux autres.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 lg:row-span-3">
                    <div className="bg-black py-4 px-6 rounded-3xl h-fit md:h-full">
                        <img
                            src="/assets/grid2.png"
                            alt="Grid 2"
                            className="h-fit w-full object-contain sm:w-69"
                        />

                        <div className="space-y-2">
                            <p className="text-2xl font-bold font-ciguatera">
                                Tech Stack
                            </p>
                            <p>
                                Je suis spécialisé en Javascript/Typescript avec
                                un intérêt particulier pour les écosystèmes
                                React et Next.js.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 lg:row-span-4">
                    <div className="bg-black py-4 px-6 rounded-3xl h-fit md:h-full">
                        <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-81.5">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                globeImageUrl="/assets/earth-night.jpg"
                                bumpImageUrl="/assets/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 26.8467,
                                        lng: 80.9462,
                                        text: "I'm here!",
                                        color: "white",
                                        size: 20,
                                    },
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-2xl font-bold font-ciguatera">
                                Je travaille en freelance.
                            </p>

                            <p>
                                Basé au Bénin, je suis disponible pour des
                                mission freelance à distance à travers le monde.
                            </p>

                            <Button asChild className="mt-4 w-full">
                                <Link href="#contact">Contact Moi</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:row-span-3">
                    <div className="bg-black py-4 px-6 rounded-3xl h-fit md:h-full">
                        <img
                            src="/assets/grid3.png"
                            alt="Grid 3"
                            className="h-fit w-full object-contain sm:h-66.5"
                        />

                        <div className="space-y-2">
                            <p className="text-2xl font-bold font-ciguatera">
                                Ma passion pour le code
                            </p>
                            <p>
                                J'aime résoudre des problèmes et construire des
                                choses à travers le code. Le codage n'est pas
                                seulement mon métier - c'est ma passion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 lg:row-span-2">
                    <div className="bg-black py-4 px-6 rounded-3xl h-fit md:h-full">
                        <img
                            src="/assets/grid4.png"
                            alt="Grid 4"
                            className="h-fit w-full object-cover sm:h-69 sm:object-top md:h-31.5"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contactez-moi par e-mail
                            </p>

                            <div className="copy-container">
                                <Button
                                    onClick={handleCopy}
                                    variant="outline"
                                    className="w-full mt-4"
                                >
                                    <img
                                        src={
                                            hasCopied
                                                ? "/assets/tick.svg"
                                                : "/assets/copy.svg"
                                        }
                                        alt={hasCopied ? "Check" : "Copy"}
                                        className="size-5"
                                    />
                                    {hasCopied
                                        ? "Copied to clipboard"
                                        : "Copy Email"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
