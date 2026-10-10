import Sidebar from "@/components/layout/Sidebar";
import PostList from "@/components/post/PostList";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[1440px] items-start">
      <Sidebar />
      <PostList />
    </div>
  );
}
