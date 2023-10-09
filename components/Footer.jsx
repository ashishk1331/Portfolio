import Icon from "@/components/icon_set";

export default function (props) {
	return (
		<>
			<hr />
			<footer className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 my-8 text-center">
				<Icon name="ArrowUp" className="w-6 h-6" />
				<div>
					Thank you for visiting!
					Crafted by{" "}
					<a
						href="https://twitter.com/ashishk1331"
						className="font-normal no-underline border-b-2 mr-1"
					>
						ashishk1331
					</a>
					for the sixth time.
				</div>
			</footer>
		</>
	);
}
