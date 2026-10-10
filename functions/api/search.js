export async function onRequestPost({ request }) {
  return fetch("https://api.divar.ir/v8/postlist/w/search", {
    method: "POST",
    headers: {
      "Content-Type": request.headers.get("Content-Type") || "application/json",
      Accept: "application/json",
    },
    body: request.body,
  });
}
