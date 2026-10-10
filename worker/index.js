export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/search" && request.method === "POST") {
      return fetch("https://api.divar.ir/v8/postlist/w/search", {
        method: "POST",
        headers: {
          "Content-Type": request.headers.get("Content-Type") || "application/json",
          Accept: "application/json",
        },
        body: request.body,
      });
    }

    const postMatch = url.pathname.match(/^\/api\/posts\/([^/]+)$/);
    if (postMatch && request.method === "GET") {
      return fetch(`https://api.divar.ir/v8/posts-v2/web/${postMatch[1]}`, {
        headers: { Accept: "application/json" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
