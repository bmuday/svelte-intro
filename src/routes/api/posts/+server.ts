import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/supabase";

export const GET: RequestHandler = async () => {
  const { data: posts, error } = await supabase
    .from("post")
    .select()
    .match({ published: true });
  if (error) throw new Error(error.message);
  return json(posts);
};
