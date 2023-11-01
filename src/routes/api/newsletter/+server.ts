import type { RequestHandler } from "./$types";

// List posts
export const GET: RequestHandler = async () => {
  const options: ResponseInit = {
    status: 418,
    headers: {
      x: "Gon give it to ya!",
    },
  };
  return new Response("Hello", options);
};

// Create a post
export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData();
  const email = data.get("email");
  console.log("email", email);

  // suscribe the user to the newsletter
  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
