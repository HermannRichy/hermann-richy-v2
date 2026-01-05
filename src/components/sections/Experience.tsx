"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { CanvasLoader } from "@/components/CanvasLoader";
import { workExperiences } from "@/constants";
import { Developer } from "@/components/Developer";

export default function Experience() {
    const [animationName, setAnimationName] = useState<
        "idle" | "salute" | "clapping" | "victory"
    >("idle");

    return (
        <section className="p-4 my-20" id="work">
            <div className="w-full text-white-600">
                <h3 className="font-ciguatera text-3xl md:text-4xl">
                    Mon expérience professionnelle
                </h3>

                <div className="flex flex-col lg:flex-row lg:gap-10 mt-12">
                    <div className="md:w-1/3 h-125 lg:h-150 w-full mb-10 lg:mb-0 bg-black rounded-3xl">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                            />
                            <directionalLight
                                position={[10, 10, 10]}
                                intensity={1}
                            />

                            <OrbitControls
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2}
                            />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer
                                    position-y={-3}
                                    scale={3}
                                    animationName={animationName}
                                />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="bg-black rounded-3xl md:w-2/3 w-full">
                        <div className="px-2.5 py-5 sm:px-5 sm:py-10">
                            {workExperiences.map(
                                ({
                                    animation,
                                    duration,
                                    icon,
                                    id,
                                    name,
                                    pos,
                                    title,
                                }) => (
                                    <div
                                        key={id}
                                        className="flex group"
                                        onClick={() =>
                                            setAnimationName(animation)
                                        }
                                        onPointerOver={() =>
                                            setAnimationName(animation)
                                        }
                                        onPointerOut={() =>
                                            setAnimationName("idle")
                                        }
                                    >
                                        <div className="flex w-2/12 flex-col items-center justify-start py-2">
                                            <div className="work-content_logo">
                                                <img
                                                    src={icon}
                                                    alt={name}
                                                    className="w-10 h-10"
                                                />
                                            </div>

                                            <div className="border-l h-full border-white/20" />
                                        </div>

                                        <div className="w-10/12 px-2.5 py-5 sm:p-5">
                                            <p className="font-bold text-white-800">
                                                {name}
                                            </p>

                                            <p className="mb-5 text-sm">
                                                {pos} &bull; {duration}
                                            </p>

                                            <div className="transition duration-500 ease-in-out group-hover:text-white">
                                                {title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
