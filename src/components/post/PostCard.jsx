import { Link } from "react-router-dom";
import notPhoto from "@/assets/images/notPhoto.png";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/post/${post.token}`}
      className="flex min-h-36 items-stretch justify-between gap-3 rounded-md border bg-card p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] hover:bg-accent/40"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1 py-1">
        <h2 className="truncate text-base font-medium">{post.title}</h2>
        {post.status && <p className="truncate text-sm text-muted-foreground">{post.status}</p>}
        {post.price && <p className="truncate text-sm text-muted-foreground">{post.price}</p>}
        <p className="mt-auto truncate text-xs text-muted-foreground">{post.location}</p>
        {post.badge && <p className="truncate text-xs text-primary">{post.badge}</p>}
      </div>
      <img
        src={post.image || notPhoto}
        alt=""
        className="h-32 w-32 shrink-0 rounded-md object-cover"
      />
    </Link>
  );
}
