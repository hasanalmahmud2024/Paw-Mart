import React from "react";

const VetCards = () => {
    const vets = [
        {
            id: 1,
            name: "Dr. Emma Snow",
            specialty: "Winter Pet Health & Nutrition",
            experience: "8 Years",
            image: "https://images.unsplash.com/photo-1742436707321-33fed05590bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgxfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            description: "Dr. Emma is a certified veterinarian specializing in winter nutrition planning and immunity care for dogs and cats."
        },
        {
            id: 2,
            name: "Dr. Michael Frost",
            specialty: "Cold Weather Grooming & Paw Safety",
            experience: "10 Years",
            image: "https://plus.unsplash.com/premium_photo-1682141125356-9ebba1fa94ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY3fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            description: "Dr. Frost focuses on paw treatment, grooming safety, and cold-weather skin protection for pets."
        },
        {
            id: 3,
            name: "Dr. Sophia Winter",
            specialty: "Winter Disease Prevention",
            experience: "6 Years",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww",
            description: "Expert in preventing winter-related illnesses like frostbite, dehydration, and cold-stress in small animals."
        }
    ];

    return (
        <div className="px-6 mb-10 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-2">Meet Our Expert Vets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {vets.map((vet) => (
                    <div key={vet.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <figure className="px-6 pt-4">
                            <img
                                src={vet.image}
                                alt={vet.name}
                                className="rounded-xl h-64 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">{vet.name}</h2>
                            <p className="text-sm text-gray-500 mb-2">{vet.specialty}</p>
                            <div className="badge badge-outline mb-2">Experience: {vet.experience}</div>
                            <p className="text-sm">{vet.description}</p>
                            <button className="btn btn-primary btn-md mt-4">Book Appointment</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VetCards;
