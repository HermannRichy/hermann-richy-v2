"use client";

import LaserFlow from "@/components/LaserFlow";
import { useRef, useEffect } from "react";
import HeroTwo from "./HeroTwo";

// Image Example Interactive Reveal Effect
export default function Hero() {
    return (
        <section
            style={{
                height: "100vh",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <LaserFlow fogScale={0.53} />

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "86%",
                    height: "60%",
                    backgroundColor: "#060010",
                    borderRadius: "20px",
                    border: "2px solid #b0fc51",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "2rem",
                    zIndex: 6,
                }}
            >
                <HeroTwo />
            </div>
        </section>
    );
}
