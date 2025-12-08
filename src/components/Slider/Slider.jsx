import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const imageUrls = [
    "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZyUyMGNhcmV8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1611173622933-91942d394b04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwY2FyZXxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1719752585472-ddc1cc7edbf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwY2FyZXxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1597603413826-cd1c06b05222?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jvb21pbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1625279138876-8910c2af9a30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb29taW5nfGVufDB8fDB8fHwy",
    "https://images.unsplash.com/photo-1625279138836-e7311d5c863a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jvb21pbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1528846104175-4fd300ee59da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBldCUyMGNhcmV8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwY2FyZXxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1625321150203-cea4bee44b54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1759164955427-14ca448a839d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBldCUyMGNhcmV8ZW58MHx8MHx8fDI%3D",
]

const Slider = () => {
    return (
        <div className=''>
            <Swiper modules={[Autoplay, Pagination]} autoplay pagination={{ clickable: true }} loop={true}>
                {imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={url}
                            className="object-cover w-full h-64 lg:h-96"
                            alt={`pet image ${index}`} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Slider;