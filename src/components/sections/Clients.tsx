import { clientReviews } from "@/constants";

export const Clients = () => {
    return (
        <section className="p-4 md:p-10 rounded-4xl my-20">
            <h3 className="font-ciguatera text-2xl md:text-4xl">
                Ce que disent mes clients
            </h3>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-12">
                {clientReviews.map(({ id, name, review, img, position }) => (
                    <div key={id} className="bg-black p-6 rounded-3xl">
                        <div className="space-y-6">
                            <p className="font-light text-white">{review}</p>

                            <div className="flex items-end justify-between">
                                <div className="flex gap-3">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="size-12 rounded-full"
                                    />

                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">
                                            {name}
                                        </p>
                                        <p className="text-sm text-white-700 md:text-base">
                                            {position}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 self-end">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <img
                                            key={`${name}-star-${i}`}
                                            src="/assets/star.png"
                                            alt="Star"
                                            className="size-4 md:size-5"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
