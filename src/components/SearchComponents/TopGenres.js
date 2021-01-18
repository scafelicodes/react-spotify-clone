import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);

const TopGenres = () => {
	return (
		<div className="TopGenres">
			<h3>Your top genres</h3>

			<Swiper
				className="GenresSlider"
				spaceBetween={20}
				navigation
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide className="SwiperSlide HipHopCard">Hip Hop</SwiperSlide>
				<SwiperSlide className="SwiperSlide ElectronicCard">
					Electronic
				</SwiperSlide>
				<SwiperSlide className="SwiperSlide RNBCard">R&B</SwiperSlide>
				<SwiperSlide className="SwiperSlide AlternativeCard">
					Alternative
				</SwiperSlide>
				<SwiperSlide className="SwiperSlide AfroCard">Afro</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default TopGenres;
