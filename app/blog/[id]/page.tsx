import { format } from "date-fns";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { default: Post, metadata } = await import(`../../../blogs/${id}.md`);

  return (
    <>
      <div className="my-16 space-y-6">
        <h1 className="text-3xl underline decoration-primary decoration-wavy underline-offset-4 lg:text-4xl">
          {metadata.title}
        </h1>
        <div className="flex items-center gap-4 text-sm">
          <p>{metadata.author}</p>
          <div className="dot"></div>
          <p>{format(metadata.pubDate, "dd MMM yyyy")}</p>
        </div>
      </div>
      <Post />
    </>
  );
}
