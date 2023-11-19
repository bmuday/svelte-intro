import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/supabase";

export const GET: RequestHandler = async ({ url }) => {
  const limit = Number(url.searchParams.get("limit")) || 30;
  const order = url.searchParams.get("order") || "asc";
  const ascending = order === "asc";

  const { data: posts, error } = await supabase
    .from("post")
    .select()
    .match({ published: true })
    .order("id", { ascending })
    .limit(limit);

  if (error) throw new Error(error.message);
  return json(posts);
};
