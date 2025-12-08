import React from "react";

const WinterCareTips = () => {
    const tips = [
        {
            id: 1,
            title: "Keep Your Pets Warm Indoors",
            description: "Always provide warm bedding and avoid letting pets sleep on cold floors.",
            icon: "🔥"
        },
        {
            id: 2,
            title: "Protect Paws Before Walks",
            description: "Use a paw balm or boots to avoid frostbite and salt irritation.",
            icon: "🐾"
        },
        {
            id: 3,
            title: "Keep Them Hydrated",
            description: "Pets can get dehydrated in winter too. Ensure clean water is always available.",
            icon: "💧"
        },
        {
            id: 4,
            title: "Avoid Leaving Pets Outside",
            description: "Limit outdoor time during freezing temperatures to prevent hypothermia.",
            icon: "❄️"
        },
        {
            id: 5,
            title: "Adjust Their Diet",
            description: "Some pets need extra calories in winter—consult a vet for proper winter nutrition.",
            icon: "🍖"
        }
    ];

    return (
        <div className="p-6 min-h-[90vh] mb-10">
            <h2 className="text-4xl font-bold text-center mb-8">Winter Care Tips for Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border border-base-200"
                    >
                        <div className="card-body items-center text-center p-4">
                            <div className="text-4xl mb-3">{tip.icon}</div>
                            <h3 className="card-title text-lg font-semibold mb-2">{tip.title}</h3>
                            <p className="text-sm text-gray-600">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WinterCareTips;
