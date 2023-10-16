import PixelAvatar from "../images/pixel_me.png";
import OriginalAvatar from "../images/original_me.jpg";
import { useEffect } from "react";

const Intro = () => {
	useEffect(() => {
		// https://codepen.io/Coding_Journey/pen/QWdQraQ
		const slider = document.querySelector("#imageComparisonSlider");
		const sliderImgWrapper = document.querySelector(
			"#imageComparisonSlider .imgWrapper"
		);
		const sliderHandle = document.querySelector(
			"#imageComparisonSlider .handle"
		);

		slider.addEventListener("mousemove", sliderMouseMove);
		slider.addEventListener("touchmove", sliderMouseMove);

		function sliderMouseMove(event) {
			if (isSliderLocked) return;

			const sliderLeftX = slider.offsetLeft;
			const sliderWidth = slider.clientWidth;
			const sliderHandleWidth = sliderHandle.clientWidth;

			let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
			if (mouseX < 0) mouseX = 0;
			else if (mouseX > sliderWidth) mouseX = sliderWidth;

			sliderImgWrapper.style.width = `${(
				(1 - mouseX / sliderWidth) *
				100
			).toFixed(4)}%`;
			sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
				4
			)}% - ${sliderHandleWidth / 2}px)`;
		}

		let isSliderLocked = false;

		slider.addEventListener("mousedown", sliderMouseDown);
		slider.addEventListener("touchstart", sliderMouseDown);
		slider.addEventListener("mouseup", sliderMouseUp);
		slider.addEventListener("touchend", sliderMouseUp);
		slider.addEventListener("mouseleave", sliderMouseLeave);

		function sliderMouseDown(event) {
			if (isSliderLocked) isSliderLocked = false;
			sliderMouseMove(event);
		}

		function sliderMouseUp() {
			if (!isSliderLocked) isSliderLocked = true;
		}

		function sliderMouseLeave() {
			if (isSliderLocked) isSliderLocked = false;
		}
	}, []);

	return (
		<>
			<div className="mx-auto max-w-2xl py-32" id="intro">
				<div className="text-center">
					<div className="flex flex-col md:flex-row items-center justify-center gap-6">
						<div className="flex flex-col items-start">
							<p className="text-2xl">Hello 👋</p>
							<p className="text-2xl">I am Jonathan</p>
							<p className="text-2xl">A Software Engineer</p>
						</div>

						<div id="imageComparisonSlider">
							<img src={OriginalAvatar} alt="before" />

							<div className="imgWrapper">
								<img src={PixelAvatar} alt="after" />
							</div>
							<div className="handle">
								<div className="handleLine"></div>
								<div className="handleCircle">
									<i className="fas fa-chevron-left"></i>
									<i className="fas fa-chevron-right"></i>
								</div>
								<div className="handleLine"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
