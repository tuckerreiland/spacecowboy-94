import { cn } from "@/lib/utils";
import HeroImage from "../HeroImage";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";

const { default: HeroImageContainer } = require("../HeroImageContainer")

const ImageSwiper = ({product, images, activeImage, setActiveImage, className}) => {
    return (
    <HeroImageContainer
        className={cn(
            className,
            'max-h-[calc(75vh)]'
        )}
    > 
        <Swiper
            slidesPerView='auto'
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            centeredSlides={false}
            style={{
                "paddingLeft":"12px",
                "paddingRight":"12px",
                "maxHeight":"75vh",
                "--swiper-pagination-color": "#999999",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": ".33",
                "--swiper-pagination-bullet-size": "6px",
            }}
        >
            {images.map((image)=>{
                return(
                    <SwiperSlide style={{
                        "display": "flex",
                        "justify-content": "center",
                        "align-items": "stretch",
                        "width":"95%",
                        "height":"100%",
                        "paddingLeft":"6px",
                        "paddingRight":"6px",
                        "translate": "2.5%",
                        "maxHeight":"75vh",
                    }}>
                        <HeroImage
                            width="810"
                            height="1080"
                            src={image}
                            alt={`${product.name} - Image ${activeImage}`}
                            className={cn(
                                'max-h-[calc(75vh)]'
                            )}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </HeroImageContainer>
  )
};

export default ImageSwiper