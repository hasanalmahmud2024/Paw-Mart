import { Link } from "react-router";


const categories = [
    {
        name: "Pet",
        emoji: "🐶",
        description: "Find pets looking for a loving home",
    },
    {
        name: "Food",
        emoji: "🍖",
        description: "Nutritious food for happy and healthy pets",
    },
    {
        name: "Accessories",
        emoji: "🧸",
        description: "Toys, collars, beds, and more",
    },
    {
        name: "Care Products",
        emoji: "💊",
        description: "Health & hygiene essentials for pets",
    },
];

const Categories = () => {


    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Explore by Category
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link to={`/category-filtered-product/${cat.name}`}>
                            <div
                                key={cat.name}
                                className="cursor-pointer h-full p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                            >
                                <div className="text-5xl mb-4">{cat.emoji}</div>
                                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                                <p className="text-gray-500">{cat.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
