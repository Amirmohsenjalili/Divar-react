export async function onRequestGet({ params }) {
  return fetch(`https://api.divar.ir/v8/posts-v2/web/${params.token}`, {
    headers: { Accept: "application/json" },
  });
}
