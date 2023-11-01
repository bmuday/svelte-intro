// Running on the server (data fetched in the scope of  the posts folder)
import type { Post } from "$lib/types";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch }) => {
  const res = await fetch("/api/posts");
  const posts: Post[] = await res.json();
  return { posts };
};
