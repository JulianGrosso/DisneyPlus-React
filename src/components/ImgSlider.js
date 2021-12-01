import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ---- Component ----

const ImgSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Carousel {...settings}>
			<Wrap>
				<img alt="" src="/images/slider-badag.jpg" />
			</Wrap>
			<Wrap>
				<img alt="" src="/images/slider-scale.jpg" />
			</Wrap>
			<Wrap>
				<img alt="" src="/images/slider-scales.jpg" />
			</Wrap>
			<Wrap>
				<img alt="" src="/images/slider-badging.jpg" />
			</Wrap>
		</Carousel>
	);
};

export default ImgSlider;

// ---- Style ----

const Carousel = styled(Slider)`
	margin-top: 20px;

	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button:before {
		color: white;
	}

	.slick-list {
		overflow: visible;
	}

	button {
		z-index: 1;
	}
`;

const Wrap = styled.div`
	cursor: pointer;
	padding-left: 10px;
	padding-right: 10px;

	img {
		border: 4px solid transparent;
		border-radius: 4px;
		width: 100%;
		height: 100%;

		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		transition-duration: 300ms;

		&:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		}
	}
`;
