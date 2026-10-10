import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function widgetsOf(post) {
  return (post?.sections ?? []).flatMap((section) => section.widgets ?? []);
}

function widgetData(post, type) {
  return widgetsOf(post).find((widget) => widget.widget_type === type)?.data;
}

function toCard(widget) {
  const data = widget.data ?? {};
  return {
    token: data.token,
    title: data.title ?? "",
    status: data.top_description_text ?? "",
    price: data.middle_description_text ?? "",
    location: data.bottom_description_text ?? "",
    badge: data.red_text ?? "",
    image: data.image_url || "",
  };
}

function toPostList(raw) {
  return {
    posts: (raw.list_widgets ?? [])
      .filter((widget) => widget.widget_type === "POST_ROW")
      .map(toCard),
    hasNext: Boolean(raw.pagination?.has_next_page),
    pagination: raw.pagination?.data ?? null,
    title: raw.seo_details?.headline || raw.seo_details?.title || "",
  };
}

function toPostDetail(raw) {
  const breadcrumb = widgetData(raw, "BREADCRUMB");
  const images = widgetData(raw, "IMAGE_CAROUSEL")?.items ?? [];
  const descriptions = widgetsOf(raw)
    .filter((widget) => widget.widget_type === "DESCRIPTION_ROW")
    .map((widget) => widget.data?.text || "")
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  const web = raw.seo?.web_info ?? {};
  const subtitle =
    widgetData(raw, "EXPANDABLE_SECTION")?.title ||
    [web.district_persian, web.city_persian].filter(Boolean).join("، ");

  return {
    title: raw.share?.title || widgetData(raw, "LEGEND_TITLE_ROW")?.title || "",
    subtitle,
    breadcrumbs: [
      ...(breadcrumb?.parent_items ?? []).map((item) => item.title),
      breadcrumb?.current_page_title || web.title,
    ].filter(Boolean),
    description: descriptions[0] || "",
    images: images
      .map((item) => ({
        url: item.image?.url,
        alt: item.image?.alt || raw.share?.title || "",
      }))
      .filter((item) => item.url),
  };
}

function searchBody({ category, query, pagination }) {
  return {
    city_ids: ["1"],
    source_view: "SEARCH",
    pagination_data: pagination ?? {
      "@type": "type.googleapis.com/post_list.PaginationData",
      page: 1,
      layer_page: 1,
    },
    search_data: {
      form_data: {
        data: {
          category: { str: { value: category || "ROOT" } },
        },
      },
      ...(query ? { query } : {}),
    },
  };
}

export const divarApi = createApi({
  reducerPath: "divarApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (args) => ({
        url: "/search",
        method: "POST",
        body: searchBody(args),
      }),
      transformResponse: (raw, _meta, arg) => ({
        ...toPostList(raw),
        category: arg.category,
        query: arg.query || "",
      }),
    }),
    getPost: builder.query({
      query: (token) => `/posts/${token}`,
      transformResponse: toPostDetail,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = divarApi;
