import About from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroTwo from "@/components/sections/HeroTwo";
import Projects from "@/components/sections/Projects";

export default function Home() {
    return (
        <main className="mx-auto max-w-6xl">
            <Header />

            <HeroTwo />
            <About />
            <Projects />
            <Clients />
            <Experience />
            <Contact />

            <Footer />
        </main>
    );
}
