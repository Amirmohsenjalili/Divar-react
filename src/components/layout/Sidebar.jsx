import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import { sidebarCategories } from "@/data/categories";
import { Input } from "@/components/ui/input";
import {
  setCategory,
  setMaxPrice,
  setMinPrice,
  setPlace,
  togglePhotoOnly,
} from "@/store/categorySlice";
import { cn } from "@/lib/utils";

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t py-1">
      <button
        type="button"
        className="flex h-10 w-full items-center gap-2 text-xs"
        onClick={() => setOpen((value) => !value)}
      >
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        {title}
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  );
}

export default function Sidebar() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.category.selected);
  const place = useSelector((state) => state.category.place);
  const minPrice = useSelector((state) => state.category.minPrice);
  const maxPrice = useSelector((state) => state.category.maxPrice);
  const photoOnly = useSelector((state) => state.category.photoOnly);

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 overflow-y-auto px-4 py-4 md:block">
      <p className="mb-3 text-xs font-medium">دسته‌ها</p>
      <div className="mb-4 flex flex-col">
        {sidebarCategories.map((item) => {
          const Icon = item.icon;
          const active = selected === item.slug;
          return (
            <button
              key={item.slug}
              type="button"
              className={cn(
                "flex h-9 items-center gap-2 text-xs text-muted-foreground hover:text-foreground",
                active && "font-medium text-foreground"
              )}
              onClick={() => dispatch(setCategory(item.slug))}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </button>
          );
        })}
      </div>

      <FilterSection title="محل">
        <Input
          value={place}
          onChange={(event) => dispatch(setPlace(event.target.value))}
          placeholder="تعیین محل"
          className="h-8 text-xs"
        />
      </FilterSection>

      <FilterSection title="قیمت">
        <label className="mb-2 block text-[11px] text-muted-foreground">
          حداقل
          <Input
            value={minPrice}
            inputMode="numeric"
            onChange={(event) => dispatch(setMinPrice(event.target.value))}
            placeholder="مثلاً ۷۰۰۰۰۰۰"
            className="mt-1 h-8 text-xs"
          />
        </label>
        <label className="block text-[11px] text-muted-foreground">
          حداکثر
          <Input
            value={maxPrice}
            inputMode="numeric"
            onChange={(event) => dispatch(setMaxPrice(event.target.value))}
            placeholder="مثلاً ۷۰۰۰۰۰۰"
            className="mt-1 h-8 text-xs"
          />
        </label>
      </FilterSection>

      <FilterSection title="وضعیت آگهی">
        <button
          type="button"
          role="switch"
          aria-checked={photoOnly}
          className="flex w-full items-center justify-between py-2 text-xs"
          onClick={() => dispatch(togglePhotoOnly())}
        >
          فقط عکس‌دار
          <span
            className={cn(
              "relative h-4 w-8 rounded-full bg-muted-foreground/30",
              photoOnly && "bg-primary"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 h-3 w-3 rounded-full bg-white",
                photoOnly ? "left-0.5" : "right-0.5"
              )}
            />
          </span>
        </button>
      </FilterSection>
    </aside>
  );
}
