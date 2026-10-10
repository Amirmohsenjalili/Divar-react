import { useDispatch } from "react-redux";
import { menuColumns } from "@/data/categories";
import { setCategory } from "@/store/categorySlice";
import { Button } from "@/components/ui/button";

export default function CategoryMenu() {
  const dispatch = useDispatch();

  return (
    <div className="absolute inset-x-0 top-16 z-30 border-b bg-background shadow-lg">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-10 gap-y-6 px-6 py-5">
        {menuColumns.map((column) => (
          <div key={column.title} className="min-w-36">
            <h3 className="mb-2 text-sm font-medium">{column.title}</h3>
            <div className="flex flex-col items-start">
              {column.items.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  className="py-1 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => dispatch(setCategory(item.slug))}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="flex w-full justify-end">
          <Button variant="ghost" size="sm" onClick={() => dispatch(setCategory("ROOT"))}>
            همه آگهی‌های دیوار
          </Button>
        </div>
      </div>
    </div>
  );
}
