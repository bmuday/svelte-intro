import type { Post } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  //   const formatDate = (date: number) => {
  //     return new Intl.DateTimeFormat("en", { dateStyle: "short" }).format(date);
  //   };

  const id = params.id;
  const res = await fetch(`/api/posts/${id}`);
  const post: Post = await res.json();

  return {
    post,
  };
};
