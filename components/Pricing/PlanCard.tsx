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
    return <div style={{backgroundColor: color}}className="flex min-h-[428px] 
    w-[320px] flex-col rounded-3xl p-8"></div>
}