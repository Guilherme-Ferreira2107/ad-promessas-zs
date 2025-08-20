import { postsData } from "@/data";

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Slug(props: { params: any }) {
  const { params } = props;
  // const post = postsData.find((p) => p?.slug === params?.slug);

  // if (!post) {
  //   notFound();
  // }

  return (
    <main className="w-full min-h-[calc(100vh-156px)] flex justify-center items-center">
      Em construção
    </main>
  );
}
