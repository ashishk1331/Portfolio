import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "../dev/Footer";
import Parser from "./useParser";

export default function (props) {
	const { blogID } = useParams();
	const [blocks, setBlocks] = useState([]);
	const [blogData, setBlogData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		Promise.all([
			fetch(`../../notion/content/data.json`),
			fetch(`../../notion/content/${blogID}.json`),
		])
			.then(async (values) => {
				let { blogs } = await values[0].json()
				setBlogData(blogs.filter(blog => blog.id === blogID)[0])

				let blocks = await values[1].json()
				setBlocks(blocks);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="container mx-auto p-4 md:p-8">
			<Header blogID={blogID} blogData={blogData} />
			{isLoading ? (
				"fetching blog"
			) : (
				<>
					<h1>{blogData.title}</h1>
					<Parser blocks={blocks} />
				</>
			)}
			<Footer />
		</div>
	);
}
