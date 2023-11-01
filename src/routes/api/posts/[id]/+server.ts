import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/supabase";

export const GET: RequestHandler = async ({ params }) => {
  const id = params.id;
  const { data, error } = await supabase
    .from("post")
    .select()
    .match({ id, published: true });
  if (error) throw new Error(error.message);
  if (!data) {
    throw new Error("Post not found!");
  } else {
    const post = data[0];
    return json(post);
  }
};
