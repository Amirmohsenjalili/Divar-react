import { useDispatch } from "react-redux";
import { menuColumns } from "@/data/categories";
import { setCategory } from "@/store/categorySlice";
import buildings from "@/assets/images/ctg.png";

export default function CategoryMenu() {
  const dispatch = useDispatch();

  return (
    <div className="absolute start-6 top-full z-30 w-[min(980px,calc(100%-3rem))] overflow-hidden rounded-b-xl border border-t-0 bg-background shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-[minmax(0,1fr)_200px]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 px-8 py-6">
          {menuColumns.map((column) => (
            <div key={column.title} className="min-w-0">
              <h3 className="mb-2 text-xs font-medium">{column.title}</h3>
              <div className="flex flex-col items-start">
                {column.items.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    className="py-1 text-start text-xs leading-6 text-muted-foreground hover:text-foreground"
                    onClick={() => dispatch(setCategory(item.slug))}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-end pb-3 pe-3">
          <img src={buildings} alt="" className="h-40 w-auto object-contain" />
          <button
            type="button"
            className="px-2 py-2 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => dispatch(setCategory("ROOT"))}
          >
            همه آگهی‌های دیوار
          </button>
        </div>
      </div>
    </div>
  );
}
