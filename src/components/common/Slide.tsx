import { useEffect, useState } from "react";
import styled from "styled-components";
import NextArrow from "../../assets/images/NextArrow";
import PrevArrow from "../../assets/images/PrevArrow";

const SSlide = styled.div`
	width: 100%;
	height: 100%;

	.slideshow-container {
		max-width: 1000px;
		position: relative;
		margin: auto;
		height: 300px;
	}

	.slides {
		@media (max-width: 1199px) {
			height: 183px;
			border-radius: 3px 3px 0 0;
			padding: 0 18px;
		}
		height: 100%;
		> img {
			width: 100%;
			height: 100%;
			border-radius: 4px;
			object-fit: cover;
		}
	}

	.prev,
	.next {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 120px;
		width: 30px;
		height: 60px;
		opacity: 0.5;
		border-radius: 15px;
		background-color: #fff;
		color: rgb(51, 51, 51);
		font-size: 16px;
		@media (max-width: 1199px) {
			top: 60px;
		}
	}

	.prev {
		left: calc((100% - 1210px) / 2);
		@media (max-width: 1300px) {
			left: calc((100% - 1100px) / 2);
		}
		@media (max-width: 1100px) {
			display: none;
		}
	}

	.next {
		right: calc((100% - 1200px) / 2);
		@media (max-width: 1300px) {
			right: calc((100% - 1100px) / 2);
		}
		@media (max-width: 1100px) {
			display: none;
		}
	}

	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	.area-text {
		@media (max-width: 1199px) {
			position: static;
			width: 100%;
			text-align: center;
		}
		position: absolute;
		bottom: 28px;
		width: 330px;
		height: 146px;
		border-radius: 4px;
		background-color: #fff;
		/* opacity: 0; */
		text-align: left;
		left: 34px;
		.title {
			@media (max-width: 1199px) {
				margin: 20px 0 0;
				margin-top: 20px;
				font-size: 18px;
				line-height: 1;
				font-weight: 700;
				color: #333;
				width: "auto";
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			margin: 20px 20px 0px;
			font-size: 20px;
			line-height: 1.5;
			font-weight: 700;
		}
		.description {
			@media (max-width: 1199px) {
				margin-top: 6px;
				font-size: 13px;
				font-weight: 500;
				line-height: 1.15;
				color: #666;
				width: "auto";
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				height: 15px;
			}
			margin: 0 20px;
			height: 44px;
			font-size: 14px;
			line-height: 1.64;
			color: #333;
		}
		.divider {
			@media (max-width: 1199px) {
				display: none;
			}
			height: 1px;
			margin: 0;
			border: none;
			-webkit-flex-shrink: 0;
			-ms-flex-negative: 0;
			flex-shrink: 0;
			background-color: #ececec;
		}
		.a {
			@media (max-width: 1199px) {
				margin: 0 auto;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 64px;
			}
			display: block;
			margin: 12px 0 0 13px;
			padding: 6px 8px;
			font-size: 14px;
			font-weight: 700;
			line-height: 1;
			color: #36f;
			text-decoration: none;
		}
	}

	.fade {
		-webkit-animation-name: fade;
		-webkit-animation-duration: 1.5s;
		animation-name: fade;
		animation-duration: 1.5s;
	}

	@-webkit-keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}
`;
// 쟝소: 1060ㅔㅌ
export interface Item {
	title: string;
	description: string;
	link: string;
	image: string;
}
interface SlideProps {
	itemList: Item[];
	interval: number;
}

const Slide: React.FC<SlideProps> = ({ itemList, interval = 2000 }) => {
	const [slideIndex, setSlideIndex] = useState<number>(1);

	let maxLength = 0;

	let timer: NodeJS.Timeout | null = null;

	useEffect(() => {
		showSlides();
	}, [slideIndex]);

	function showSlides() {
		let i;
		const slides = document.getElementsByClassName("slides");
		maxLength = slides.length;
		for (i = 0; i < slides.length; i++) {
			(slides[i] as HTMLDivElement).style.display = "none";
		}
		(slides[slideIndex - 1] as HTMLDivElement).style.display = "block";
		timer = setTimeout(() => {
			if (slideIndex === slides.length) {
				setSlideIndex(1);
			} else {
				setSlideIndex(slideIndex + 1);
			}
		}, interval);
	}
	function plusSlides(n: number) {
		timer && clearTimeout(timer);
		if (slideIndex === 1) {
			if (Math.sign(n) === -1) {
				setSlideIndex(maxLength);
			} else {
				setSlideIndex(slideIndex + 1);
			}
		} else {
			if (slideIndex + n > maxLength) {
				setSlideIndex(slideIndex + n - maxLength);
				return;
			}
			setSlideIndex(slideIndex + n);
		}
	}

	return (
		<SSlide>
			<div className="slideshow-container">
				{itemList.map((item, index) => {
					const onMove = (link: string) => {
						window.location.href = link;
					};
					return (
						<div className="slides fade" key={index}>
							<img
								src={item.image}
								alt="iamge"
								style={{ cursor: "pointer" }}
								onClick={() => onMove(item.link)}
							/>
							<div className="area-text">
								<h2 className="title">{item.title}</h2>
								<div className="description">{item.description}</div>
								<hr className="divider" />
								<a className="a" href={item.link}>
									바로가기 &#62;
								</a>
							</div>
						</div>
					);
				})}

				<a className="prev" onClick={() => plusSlides(-1)}>
					<PrevArrow />
				</a>
				<a className="next" onClick={() => plusSlides(1)}>
					<NextArrow />
				</a>
			</div>
		</SSlide>
	);
};

export default Slide;
