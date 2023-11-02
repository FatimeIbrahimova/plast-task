import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as SvgTriangle } from "../ContactUs/WhiteTriangle.svg";
import "./Corousel.scss";
import OurProducts from "../../../components/OurProducts/OurProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { ourProducts } from "../../../Data/Data";
import { ReactComponent as Line } from "../../../imgs/Line 1.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Corousel = () => {
	const [atBeginning, setAtBeginning] = useState(true);

	const swiperRef = useRef(null);

	useEffect(() => {
		const swiper = swiperRef.current.swiper;

		swiper.on("slideChange", () => {
			if (swiper.isBeginning) {
				setAtBeginning(true);
			} else if (swiper.isEnd) {
				setAtBeginning(false);
			}
		});

		swiper.slideTo(0);
	}, []);

	const handleNextSlide = () => {
		const swiper = swiperRef.current.swiper;
		swiper.slideNext();
		setAtBeginning(false);
	};
	const handlePreviousSlide = () => {
		const swiper = swiperRef.current.swiper;
		swiper.slidePrev();
	};

	const { t } = useTranslation();
	return (
		<div className="ourProducts-section">
			<div className="ourProducts-section_title">
				<h2>
					{t("BİZİM_")} <span>{t("MƏHSULLARIMIZ")}</span>.
				</h2>
			</div>
			<div className="triangle">
				<SvgTriangle />
			</div>

			<div className="products-container">
				<Swiper
					ref={swiperRef}
					slidesPerView={1}
					spaceBetween={40}
					freeMode={true}
					pagination={{
						clickable: true,
						marginTop: 20,
					}}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 5,
						},
					}}
					modules={[FreeMode, Pagination]}
					className="mySwiper"
				>
					{ourProducts?.map((item) => (
						<SwiperSlide key={item.id}>
							<OurProducts itemCorousel={item} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="carousel-bottom">
					<i
						className={`fa-solid fa-arrow-left-long${
							atBeginning ? " inactive" : ""
						}`}
						onClick={handlePreviousSlide}
					></i>
					<i
						className="fa-solid fa-arrow-right-long"
						onClick={handleNextSlide}
					></i>
					<Line className="corousel-line" />
				</div>
			</div>
		</div>
	);
};

export default Corousel;
