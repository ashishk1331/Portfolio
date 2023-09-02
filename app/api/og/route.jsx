import { ImageResponse } from "next/server";

export const runtime = "edge";

const colors = {
	primary: "#E384FF",
	secondary: "#111010",
};

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	let author = searchParams.get("author") || "AshishK";
	let title = searchParams.get("title") || "AshishK has settled.";
	let date = searchParams.get("date") || new Date().toDateString();

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 40,
					color: "whitesmoke",
					background: colors.secondary,
					width: "100%",
					height: "100%",
					textAlign: "center",
					justifyContent: "center",
					alignItems: "center",
				}}
				tw="flex p-12"
			>
				<div tw="border-4 border-zinc-800 w-full h-full flex flex-col items-center p-4 px-12 gap-8 rounded-2xl">
					<div tw="w-full flex items-center justify-between text-2xl border-b-4 border-zinc-800">
						<p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="#e384ff"
								viewBox="0 0 256 256"
								tw="mr-2 "
							>
								<path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"></path>
							</svg>
							{date}
						</p>
						<p>by {author}</p>
					</div>
					<h1 tw="text-left">{title}</h1>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
