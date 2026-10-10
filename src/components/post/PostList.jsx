import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { categoryTitle } from "@/data/categories";
import { parsePrice } from "@/lib/utils";
import { useGetPostsQuery } from "@/services/divarApi";
import PostCard from "@/components/post/PostCard";

export default function PostList() {
  const category = useSelector((state) => state.category.selected);
  const query = useSelector((state) => state.category.query);
  const place = useSelector((state) => state.category.place.trim());
  const minPrice = useSelector((state) => state.category.minPrice);
  const maxPrice = useSelector((state) => state.category.maxPrice);
  const photoOnly = useSelector((state) => state.category.photoOnly);

  const requestKey = `${category}::${query}`;
  const [cursor, setCursor] = useState({ key: requestKey, pagination: null });
  const [pages, setPages] = useState({ key: requestKey, posts: [] });
  const pagination = cursor.key === requestKey ? cursor.pagination : null;
  const posts = pages.key === requestKey ? pages.posts : [];

  const { currentData, isFetching, isError } = useGetPostsQuery({
    category,
    query,
    pagination,
  });
  const pageData =
    currentData &&
    currentData.category === category &&
    currentData.query === query
      ? currentData
      : null;

  useEffect(() => {
    if (!pageData?.posts?.length) return;
    setPages((current) => {
      const base = current.key === requestKey ? current.posts : [];
      const seen = new Set(base.map((post) => post.token));
      const fresh = pageData.posts.filter(
        (post) => post.token && !seen.has(post.token),
      );
      if (current.key === requestKey && fresh.length === 0) return current;
      return { key: requestKey, posts: [...base, ...fresh] };
    });
  }, [pageData, requestKey]);

  const { ref, inView } = useInView({ rootMargin: "240px" });

  useEffect(() => {
    if (!inView || isFetching || !pageData?.hasNext || !pageData.pagination)
      return;
    setCursor((current) => {
      const next = pageData.pagination;
      if (
        current.key === requestKey &&
        current.pagination &&
        current.pagination.page === next.page &&
        current.pagination.search_uid === next.search_uid &&
        current.pagination.last_post_date === next.last_post_date
      ) {
        return current;
      }
      return { key: requestKey, pagination: next };
    });
  }, [inView, isFetching, pageData, requestKey]);

  const min = parsePrice(minPrice);
  const max = parsePrice(maxPrice);
  const visible = posts.filter((post) => {
    if (photoOnly && !post.image) return false;
    if (place && !post.location.includes(place)) return false;
    const amount = parsePrice(post.price);
    if (min != null && (amount == null || amount < min)) return false;
    if (max != null && (amount == null || amount > max)) return false;
    return true;
  });

  const heading =
    category === "ROOT"
      ? "دیوار تهران: انواع آگهی‌ها و خدمات در تهران"
      : `${categoryTitle(category)} در تهران`;

  return (
    <section className="min-w-0 flex-1 px-4 py-4">
      <h1 className="mb-3 text-xs text-muted-foreground">{heading}</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <PostCard key={post.token} post={post} />
        ))}
      </div>
      {isFetching && (
        <p className="py-6 text-center text-sm text-muted-foreground">
          در حال دریافت آگهی‌ها...
        </p>
      )}
      {isError && (
        <p className="py-6 text-center text-sm text-primary">
          دریافت آگهی‌ها انجام نشد. دوباره تلاش کنید.
        </p>
      )}
      {!isFetching && !isError && visible.length === 0 && (
        <p className="py-6 text-center text-sm text-muted-foreground">
          آگهی‌ای پیدا نشد.
        </p>
      )}
      <div ref={ref} className="h-8" />
    </section>
  );
}
