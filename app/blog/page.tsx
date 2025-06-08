import BlogList from "../../components/BlogList";
import BlogTitle from "../../components/BlogTitle";
import { getAllBlogs } from "../../utils/blog";

export default function Blog() {
	const allBlogPosts = getAllBlogs().filter((meta) => !meta.draft);

	return (
		<div className="flex flex-col items-start gap-2 mb-16">
			<BlogTitle />
			<BlogList blogsMeta={allBlogPosts} />
		</div>
	);
}
