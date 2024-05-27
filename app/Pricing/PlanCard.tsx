interface PlanCardProps {
    name: string;
    description: string;
    btnText?: string;
    price?: string;
    features: string[];
    color: string;
}

export default function PlanCard({
    name,
    description,
    price,
    features,
    color,
    btnText = 'Start Trial',
}: PlanCardProps) {
    return (
        <div
            style={{ backgroundColor: color }}
            className="flex h-[600px] w-[320px] flex-col items-center rounded-3xl p-8"
        >
            <h2 className="mb-5 text-xl font-medium">{name}</h2>
            <div className="mb-5 text-2xl font-black">
                ${price}
            </div>
            <button className="rounded-xl bg-black py-2 px-10 text-lg font-medium text-white">
                {btnText}
            </button>
            <p className="mb-5 font-black text-center">{description}</p>
            <ul className="mb-10 flex flex-col gap-y-2 overflow-y-auto">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-3 h-4 w-4 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="flex-1">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}