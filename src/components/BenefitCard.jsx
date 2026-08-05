import { benefits } from "./benefitsData"
const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
};

export default function BenefitCard() {
    return (
        <>
            {benefits.map((card, index) => {
                return (
                    <>
                        <div className="benefit-card">
                            <div className={`benefit-card-icon ${colorClasses[card.color]}`}>
                                {card.icon}
                            </div>
                            <div className="bottom">
                                <h2 className="font-bold">{card.title}</h2>
                                <p className="text-gray-400 tracking-tight">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
