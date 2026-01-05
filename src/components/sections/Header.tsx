import BubbleMenu from "@/components/BubbleMenu";

export default function Header() {
    const items = [
        {
            label: "Accueil",
            href: "#hero",
            ariaLabel: "Home",
            rotation: -8,
            hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
        },
        {
            label: "A propos",
            href: "#about",
            ariaLabel: "About",
            rotation: 8,
            hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
        },
        {
            label: "Projets",
            href: "#projects",
            ariaLabel: "Projects",
            rotation: 8,
            hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
        },
        {
            label: "Contact",
            href: "#",
            ariaLabel: "Contact",
            rotation: -8,
            hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
        },
    ];

    return (
        <BubbleMenu
            logo={
                <span className="text-lg text-background font-bold font-ciguatera py-2">
                    Hermann Richy
                </span>
            }
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={true}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
        />
    );
}
