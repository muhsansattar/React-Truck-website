"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        <div>
          <Image
            src="/slider.png"
            alt="Description of Image 1"
            width={1110}
            height={558}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src="/slider.png"
            alt="Description of Image 2"
            width={1110}
            height={558}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
