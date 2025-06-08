import { PropsWithChildren } from "react";

export default function Prose({ children }: PropsWithChildren) {
	return (
		<article className="prose prose-lg prose-zinc max-w-none pb-8 leading-8 marker:text-primary/75 prose-h2:font-normal prose-h3:font-normal prose-a:font-normal prose-blockquote:border-primary/75 prose-blockquote:pr-4 prose-blockquote:text-2xl prose-blockquote:font-thin prose-blockquote:italic prose-hr:border-primary/70 md:pb-12 text-balance">
			{children}
		</article>
	);
}
