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
    return <div 
        style={{backgroundColor: color}} 
        className="flex min-h-[428px] w-[320px] 
        flex-col items-center rounded-3xl p-8"
        >
            <h2 className="mb-5 text-xl font-medium">{name}</h2>
            <div className="mb-5 flex text-12 font-black">
                {price ? (
                    <>
                        <div>${price}</div>
                    </>
                ) : (
                    '$9.99'
            )}
            </div>
            <p className="mb-5 font-black">{description}</p>
            <ul className="mb-10 flex flex-col gap-y-2">{features.map((feature) => (
                <li className="flex items-center">
                    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
                </li>
            ))}
            </ul>
            <button className="mt-auto rounded-xl bg-black py03 px-6 text-lg font-medium
             text-white">{btnText}</button>
    </div>
}