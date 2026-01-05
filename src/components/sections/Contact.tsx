"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const validateForm = () => {
        // form fields
        const { name, email, message } = form;

        interface Current {
            name: boolean;
            email: boolean;
            message: boolean;
        }

        // Error message
        const nameError = document.querySelector("#name-error")!;
        const emailError = document.querySelector("#email-error")!;
        const messageError = document.querySelector("#message-error")!;
        const current: Current = { name: false, email: false, message: false };

        // validate name
        if (name.trim().length < 3) {
            nameError.classList.remove("hidden");
            current.name = false;
        } else {
            nameError.classList.add("hidden");
            current.name = true;
        }

        // prettier-ignore
        const email_regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // valiate email
        if (!email_regex.exec(email.trim().toLowerCase())) {
            emailError.classList.remove("hidden");
            current.email = false;
        } else {
            emailError.classList.add("hidden");
            current.email = true;
        }

        // validate message
        if (message.trim().length < 5) {
            messageError.classList.remove("hidden");
            current.message = false;
        } else {
            messageError.classList.add("hidden");
            current.message = true;
        }

        // True if all fields are validated
        return Object.keys(current).every(
            (k) => current[k as keyof typeof current]
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID!, // ✅ NEXT_PUBLIC_ prefix pour client
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    from_name: form.name,
                    to_name: "Hermann Richy",
                    from_email: form.email,
                    to_email: process.env.NEXT_PUBLIC_EMAIL!, // ✅ NEXT_PUBLIC_ si client-side
                    message: form.message,
                },
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
                }
            );

            setForm({
                name: "",
                email: "",
                message: "",
            });

            toast.success("Votre message a été envoyé!");
        } catch (error) {
            console.error(error);

            toast.error("Quelque chose s'est mal passé!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="my-20" id="contact">
            <div className="p-4 md:p-10">
                <h3 className="font-ciguatera text-4xl text-primary">
                    Contactez-moi !
                </h3>

                <p className="mt-3 text-lg text-white-600 md:w-2/5">
                    Vous avez un projet en tête ou souhaitez simplement dire
                    bonjour? N&apos;hésitez pas à me contacter en remplissant le
                    formulaire ci-dessous.
                </p>

                <form
                    ref={formRef}
                    onSubmit={(e) => void handleSubmit(e)}
                    className="mt-12 flex flex-col space-y-7 md:w-2/5"
                >
                    <label className="flex flex-col space-y-3">
                        <span className="field-label">Nom complet</span>

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border border-white/20 p-4 rounded-lg"
                            placeholder="John Doe"
                            autoCapitalize="on"
                            disabled={isLoading}
                        />

                        <span className="hidden text-red-400" id="name-error">
                            Nom invalide!
                        </span>
                    </label>

                    <label className="flex flex-col space-y-3">
                        <span className="field-label">Email</span>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="border border-white/20 p-4 rounded-lg"
                            placeholder="john.doe@email.com"
                            autoCapitalize="off"
                            disabled={isLoading}
                        />

                        <span className="hidden text-red-400" id="email-error">
                            Email invalide!
                        </span>
                    </label>

                    <label className="flex flex-col space-y-3">
                        <span className="field-label">Votre message</span>

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            className="border border-white/20 p-4 rounded-lg"
                            placeholder="Salut, je souhaite vous contacter pour..."
                            autoCapitalize="on"
                            disabled={isLoading}
                        />

                        <span
                            className="hidden text-red-400"
                            id="message-error"
                        >
                            Message invalide!
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 mt-4 bg-primary/90 text-black px-6 py-3 rounded-lg font-bold hover:bg-primary transition duration-300"
                        disabled={isLoading}
                    >
                        {isLoading ? "Envoi..." : "Envoyer Message"}

                        {!isLoading && (
                            <img
                                src="/assets/arrow-up.png"
                                alt="Arrow"
                                className="w-4 h-4"
                            />
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
