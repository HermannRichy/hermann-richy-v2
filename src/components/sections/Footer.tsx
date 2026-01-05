import { socialLinks } from "@/constants";

export default function Footer() {
    return (
        <footer className="p-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 border-t border-black-300 pb-3 pt-7">
            <div className="text-white-500">
                &copy; {new Date().getFullYear()}{" "}
                <strong className="text-primary">Hermann Richy</strong>. Tous
                droits reservés.
            </div>

            <div className="flex gap-3">
                {socialLinks.map(({ icon, name, url }) => (
                    <a
                        href={url}
                        key={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        title={name}
                        className="social-icon"
                    >
                        <img src={icon} alt={name} className="w-6 h-6" />
                    </a>
                ))}
            </div>
        </footer>
    );
}
