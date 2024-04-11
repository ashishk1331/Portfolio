import bannerImage from "/public/Banner.svg";
import bannerImageVertical from "/public/Banner-vertical.svg";

export default function (props) {
	return (
		<div className="w-full mx-auto">
			<a href="https://100-days-of-code-ten.vercel.app/" target="blank">
				<div className="relative bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center rounded-lg text-center">
					<div className="z-50">
						<img
							src={bannerImage.src}
							className="hidden md:inline-block md:w-2/3 lg:w-1/2 mx-auto p-4"
						/>
						<img
							src={bannerImageVertical.src}
							className="sm:hidden p-8"
						/>
					</div>
				</div>
			</a>
		</div>
	);
}
