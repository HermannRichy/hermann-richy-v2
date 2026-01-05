import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import HeroTwo from "@/components/sections/HeroTwo";

export default function Home() {
    return (
        <main className="mx-auto max-w-6xl">
            <Header />
            <HeroTwo />
            <About />
        </main>
    );
}
