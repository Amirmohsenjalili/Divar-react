import { Link, useParams } from "react-router-dom";
import { Bookmark, CircleHelp, Share2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import PostGallery from "@/components/post/PostGallery";
import { useGetPostQuery } from "@/services/divarApi";

export default function PostPage() {
  const { token } = useParams();
  const { data, isFetching, isError } = useGetPostQuery(token, { skip: !token });

  if (isFetching && !data) {
    return <p className="py-16 text-center text-sm text-muted-foreground">در حال دریافت آگهی...</p>;
  }

  if (isError || !data) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-primary">این آگهی پیدا نشد.</p>
        <Link to="/" className="mt-4 inline-block text-sm text-muted-foreground">
          بازگشت به آگهی‌ها
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-5xl px-4 py-6">
      <Link to="/" className="mb-6 flex flex-wrap gap-1 text-xs text-muted-foreground">
        {data.breadcrumbs.join(" / ")}
      </Link>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <section className="min-w-0 lg:w-[46%]">
          <h1 className="text-2xl font-semibold leading-normal">{data.title}</h1>
          {data.subtitle && <p className="mt-3 text-sm text-muted-foreground">{data.subtitle}</p>}
          <div className="mt-4 flex items-center gap-2">
            <Button>اطلاعات تماس</Button>
            <Button variant="outline" className="w-36">
              چت
            </Button>
            <span className="mr-auto flex">
              <Button variant="ghost" size="icon" aria-label="نشان کردن">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="اشتراک‌گذاری">
                <Share2 className="h-4 w-4" />
              </Button>
            </span>
          </div>
          <h2 className="mb-2 mt-8 text-sm">توضیحات</h2>
          <p className="whitespace-pre-line text-sm leading-8">{data.description}</p>
        </section>
        <aside className="min-w-0 lg:w-1/2">
          <PostGallery images={data.images} />
          <label className="mt-4 block">
            <textarea
              rows={5}
              placeholder="یادداشت شما..."
              className="w-full rounded-md border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <span className="mt-2 block text-xs text-muted-foreground">
              یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.
            </span>
          </label>
          <div className="mt-8 border-t">
            <button type="button" className="flex w-full items-center gap-3 py-3 text-sm text-muted-foreground">
              <CircleHelp className="h-4 w-4" />
              راهنمای خرید امن
            </button>
            <button type="button" className="flex w-full items-center gap-3 border-t py-3 text-sm text-muted-foreground">
              <TriangleAlert className="h-4 w-4" />
              ثبت تخلف و مشکل آگهی
            </button>
          </div>
        </aside>
      </div>
    </article>
  );
}
