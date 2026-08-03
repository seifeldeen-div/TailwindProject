import { aiTypes } from "./aitypesdata"
const tagColors = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
};

function TypeCard() {
    return (
        <>
            {aiTypes.map((card, index) => {
                return (
                    <article key={index} className="ai-type-card">
                        <img
                            className="ai-type-card-image"
                            src={card.image}
                            alt={card.title} />
                        <div className="p-6">
                            <div className="flex item-center mb-3">
                                <div className="ai-type-card-icon">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold">{card.title}</h3>
                            </div>
                            <p className="mt-2 text-gray-600">{card.description}</p>
                            <div className="flex mt-4 gap-x-2 items-center">
                                {card.tags.map((tag) => {
                                    return (
                                        <span className={`ai-type-card-tag ${tagColors[tag.color]}`}
                                            key={tag.text}>{tag.text}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default TypeCard
