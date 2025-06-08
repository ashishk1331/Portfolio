import { getAllBlogs } from "../../utils/blog";
import { format } from "date-fns";

export default function Blog() {
	const allBlogPosts = getAllBlogs();

	return (
		<div className="flex flex-col items-start gap-2 mb-16">
			<h2 className="text-xl mb-2 text-balance">Blog Section</h2>
			<span className="mb-4">
				I usually don't write. Rather, I love to leave soul-crushing
				comments on blogs of others.
			</span>

			<ul className="flex flex-col items-start gap-4">
				{allBlogPosts
					.filter((meta) => !meta.draft)
					.map((post) => (
						<li className="flex items-center gap-2">
							<span className="text-primary">
								{format(post.pubDate, "yyyy MM")}
							</span>
							<a href={"/blog/" + post.slug}>{post.title}</a>
						</li>
					))}
			</ul>
		</div>
	);
}
