import styled from "styled-components";

const SSlide = styled.div`
	width: 100%;
	height: 100%;

	/* Slideshow container */
	.slideshow-container {
		max-width: 1000px;
		position: relative;
		margin: auto;
	}

	/* Hide the images by default */
	.mySlides {
		display: none;
	}

	/* Next & previous buttons */
	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		transition: 0.6s ease;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}

	/* Position the "next button" to the right */
	.next {
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	/* Caption text */
	.text {
		color: #f2f2f2;
		font-size: 15px;
		padding: 8px 12px;
		position: absolute;
		bottom: 8px;
		width: 100%;
		text-align: center;
	}

	/* Number text (1/3 etc) */
	.numbertext {
		color: #f2f2f2;
		font-size: 12px;
		padding: 8px 12px;
		position: absolute;
		top: 0;
	}

	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 15px;
		width: 15px;
		margin: 0 2px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
	}

	.active,
	.dot:hover {
		background-color: #717171;
	}

	/* Fading animation */
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

function Slide() {
	let slideIndex = 0;
	// showSlides();

	(function showSlides() {
		let i;
		const slides = document.getElementsByClassName("mySlides");
		const dots = document.getElementsByClassName("dot");
		// console.log(slides);
		// console.log(dots);
		for (i = 0; i < slides.length; i++) {
			(slides[i] as any).style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) {
			slideIndex = 1;
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		if (slides.length > 1) (slides[slideIndex - 1] as any).style.display = "block";
		if (dots.length > 1) dots[slideIndex - 1].className += " active";
		setTimeout(showSlides, 2000); // Change image every 2 seconds
	})();
	return (
		<SSlide>
			{/* <!-- Slideshow container --> */}
			<div className="slideshow-container">
				{/* <!-- Full-width images with number and caption text --> */}
				<div className="mySlides fade">
					<div className="numbertext">1 / 3</div>
					<img
						src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
						style={{ width: "100%" }}
						alt="iamge"
					/>
					<div className="text">Caption Text</div>
				</div>

				<div className="mySlides fade">
					<div className="numbertext">2 / 3</div>
					<img
						src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
						style={{ width: "100%" }}
						alt="iamge"
					/>
					<div className="text">Caption Two</div>
				</div>

				<div className="mySlides fade">
					<div className="numbertext">3 / 3</div>
					<img
						src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
						style={{ width: "100%" }}
						alt="iamge"
					/>
					<div className="text">Caption Three</div>
				</div>

				{/* <!-- Next and previous buttons --> */}
				<a
					className="prev"
					//   onClick="plusSlides(-1)"
				>
					&#10094;
				</a>
				<a
					className="next"
					//   onClick="plusSlides(1)"
				>
					&#10095;
				</a>
			</div>
			<br />

			{/* <!-- The dots/circles --> */}
			<div style={{ textAlign: "center" }}>
				<span
					className="dot"
					//   onClick="currentSlide(1)"
				></span>
				<span
					className="dot"
					//   onClick="currentSlide(2)"
				></span>
				<span
					className="dot"
					//   onClick="currentSlide(3)"
				></span>
			</div>
		</SSlide>
	);
}

export default Slide;
