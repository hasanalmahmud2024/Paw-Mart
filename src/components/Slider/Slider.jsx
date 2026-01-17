import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";


const slides = [
    {
        title: "Find Your Pet Today 🐶",
        description:
            "Discover pets for adoption and connect with trusted local pet owners near you.",
        image:
            "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=1200&auto=format&fit=crop&q=80",
    },
    {
        title: "Adopt, Don't Shop ❤️",
        description:
            "Give a loving home to pets who need care, warmth, and compassion.",
        image:
            "https://imgs.search.brave.com/VEVgOp3ffmapTZ0JAXrVp9y2eRrNA-_Hm-HKNHQmR0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hc3NvcnRlZC1j/YXRzLWRvZ3Mtc3R1/ZGlvLXdoaXRlLWJh/Y2tncm91bmQtd2l0/aC1jb3B5LXNwYWNl/LXZlcnNhdGlsZS1k/ZXNpZ25zXzE3NDUz/My02NDYzOC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA",
    },
    {
        title: "Everything Your Pet Needs 🐾",
        description:
            "Shop quality food, toys, accessories, and care products for happy pets.",
        image:
            "https://imgs.search.brave.com/QlLeLkR0n3m6pTsPyY6nLXQ8oNPJk9MneY0nb6fuOhU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wbGVu/dHktcGV0LXByb2R1/Y3RzLXdoaXRlLWJh/Y2tncm91bmQtdG9w/LXZpZXcta2liYmxl/cy1jYW5uZWQtZm9v/ZC1ib25lLXRveXMt/YnJ1c2gtbGVhc2gt/bnV0cml0aW9uLWNh/cmUteW91ci1jYXQt/MTQwNDY3OTcwLmpw/Zw",
    },
    {
        title: "Happy Owners, Happy Pets 😄",
        description:
            "Join our community of loving pet owners and share unforgettable moments with your furry friends.",
        image:
            "https://images.unsplash.com/photo-1642112312529-7c870afa6382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldCUyMG93bmVyfGVufDB8MHwwfHx8Mg%3D%3D",
    },
];

const Slider = () => {
    return (
        <section className="w-full mb-5">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className='md:h-[60vh] h-[30vh] rounded-md'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="h-full bg-cover bg-center flex items-center"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            <div className="bg-black/50 w-full h-full flex items-center">
                                <div className="max-w-7xl mx-auto px-12 text-white">
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="max-w-xl text-sm md:text-lg mb-6">{slide.description}</p>
                                    {/* <button
                                        className={`${slide.buttonColor} px-6 py-3 transition rounded-lg font-semibold`}
                                    >
                                        {slide.buttonText}
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;