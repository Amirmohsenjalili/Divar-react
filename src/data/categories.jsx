import {
  Briefcase,
  Car,
  Dices,
  Hammer,
  Home,
  Lamp,
  Smartphone,
  Users,
  Watch,
  Wrench,
} from "lucide-react";

export const sidebarCategories = [
  { slug: "real-estate", title: "املاک", icon: Home },
  { slug: "vehicles", title: "وسایل نقلیه", icon: Car },
  { slug: "electronic-devices", title: "کالای دیجیتال", icon: Smartphone },
  { slug: "home-kitchen", title: "خانه و آشپزخانه", icon: Lamp },
  { slug: "services", title: "خدمات", icon: Hammer },
  { slug: "personal", title: "وسایل شخصی", icon: Watch },
  { slug: "leisure-hobbies", title: "سرگرمی و فراغت", icon: Dices },
  { slug: "community", title: "اجتماعی", icon: Users },
  { slug: "tools-materials-equipment", title: "تجهیزات و صنعتی", icon: Wrench },
  { slug: "jobs", title: "استخدام و کاریابی", icon: Briefcase },
];

export const menuColumns = [
  {
    title: "فروش مسکونی",
    items: [
      { title: "آپارتمان", slug: "apartment-sell" },
      { title: "خانه و ویلا", slug: "house-villa-sell" },
      { title: "زمین و کلنگی", slug: "plot-old" },
    ],
  },
  {
    title: "اجاره مسکونی",
    items: [
      { title: "آپارتمان", slug: "apartment-rent" },
      { title: "خانه و ویلا", slug: "house-villa-rent" },
    ],
  },
  {
    title: "فروش اداری و تجاری",
    items: [
      { title: "دفتر کار، اتاق اداری و مطب", slug: "office-sell" },
      { title: "مغازه و غرفه", slug: "shop-sell" },
      { title: "صنعتی، کشاورزی و تجاری", slug: "industry-agriculture-business-sell" },
    ],
  },
  {
    title: "اجاره اداری و تجاری",
    items: [
      { title: "دفتر کار، اتاق اداری و مطب", slug: "office-rent" },
      { title: "مغازه و غرفه", slug: "shop-rent" },
    ],
  },
  {
    title: "اجاره کوتاه‌مدت",
    items: [
      { title: "آپارتمان و سوئیت", slug: "suite-apartment" },
      { title: "ویلا و باغ", slug: "villa" },
      { title: "اجاره کوتاه‌مدت", slug: "temporary-rent" },
    ],
  },
  {
    title: "پروژه‌های ساخت و ساز",
    items: [
      { title: "مشارکت در ساخت", slug: "partnership" },
      { title: "پیش‌فروش", slug: "presell" },
    ],
  },
];

export function categoryTitle(slug) {
  if (slug === "ROOT") return "همه آگهی‌ها";
  const fromSidebar = sidebarCategories.find((item) => item.slug === slug);
  if (fromSidebar) return fromSidebar.title;
  for (const column of menuColumns) {
    const match = column.items.find((item) => item.slug === slug);
    if (match) return match.title;
  }
  return "آگهی‌ها";
}
