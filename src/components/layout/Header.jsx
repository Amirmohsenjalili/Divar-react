import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ChevronDown,
  MapPin,
  MessageSquare,
  Moon,
  Search,
  Sun,
  UserRound,
} from "lucide-react";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryMenu from "@/components/layout/CategoryMenu";
import { closeMenu, setQuery, toggleMenu } from "@/store/categorySlice";
import { toggleTheme } from "@/store/themeSlice";
import { cn } from "@/lib/utils";

export default function Header() {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.category.menuOpen);
  const query = useSelector((state) => state.category.query);
  const dark = useSelector((state) => state.theme.dark);
  const [value, setValue] = useState(query);

  useEffect(() => {
    const next = value.trim();
    if (next === query) return undefined;
    const timer = setTimeout(() => dispatch(setQuery(next)), 400);
    return () => clearTimeout(timer);
  }, [value, query, dispatch]);

  return (
    <header className="sticky top-0 z-30 border-b bg-background shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-2 px-4">
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            className="flex h-12 w-12 items-center justify-center"
            aria-label="دیوار"
          >
            <img src={logo} alt="دیوار" className="h-10 w-10" />
          </Link>
          <span className="mx-2 hidden h-6 w-px bg-border sm:block" />
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            <MapPin className="h-4 w-4" />
            تهران
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            aria-expanded={menuOpen}
            onClick={() => dispatch(toggleMenu())}
          >
            دسته‌ها
            <ChevronDown className={cn("h-4 w-4 transition-transform", menuOpen && "rotate-180")} />
          </Button>
        </div>

        <form
          className="flex h-10 min-w-0 flex-1 items-center rounded-md bg-muted px-2"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(setQuery(value.trim()));
          }}
        >
          <Search className="mx-1 h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="جستجو در همه آگهی‌ها"
            aria-label="جستجو در همه آگهی‌ها"
            className="h-10 border-0 bg-transparent px-1 shadow-none focus-visible:ring-0"
          />
        </form>

        <div className="hidden shrink-0 items-center lg:flex">
          <Button variant="ghost" size="sm">
            <UserRound className="h-4 w-4" />
            دیوار من
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4" />
            چت
          </Button>
          <Button variant="ghost" size="sm">
            پشتیبانی
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={dark ? "حالت روشن" : "حالت تیره"}
            onClick={() => dispatch(toggleTheme())}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button className="mr-1 font-bold">ثبت آگهی</Button>
        </div>
      </div>
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="بستن دسته‌ها"
            className="fixed inset-0 top-16 z-20 cursor-default bg-transparent"
            onClick={() => dispatch(closeMenu())}
          />
          <CategoryMenu />
        </>
      )}
    </header>
  );
}
