# دیوار

فرانت‌اند آگهی‌های تهران، با چیدمان [divar.ir](https://divar.ir/s/tehran). داده از API عمومی دیوار می‌آید و این پروژه بک‌اند جدا ندارد.

## امکانات

- لیست آگهی‌های تهران با اسکرول صفحهٔ بعد
- جستجو و انتخاب دسته
- فیلتر محل، قیمت و «فقط عکس‌دار» روی آگهی‌های بارگذاری‌شده
- صفحهٔ جزئیات هر آگهی با گالری، توضیحات و یادداشت
- تم روشن و تیره

دیوار من، چت و ثبت آگهی فقط دکمه‌های هدر هستند. ورود و ساخت آگهی در این پروژه نیست.

## تکنولوژی

- React 18 و Vite
- Redux Toolkit و RTK Query
- React Router
- Tailwind CSS و کامپوننت‌های `Button` و `Input`
- nginx برای سرو نسخهٔ ساخته‌شده در داکر

## ساختار

```
src/
  app/            روت‌ها و پوسته
  pages/          صفحهٔ اصلی و صفحهٔ آگهی
  components/
    layout/       هدر، منوی دسته، سایدبار
    post/         کارت، لیست و گالری
    ui/           قطعه‌های پایه
  services/       درخواست‌های دیوار
  store/          تم و فیلترها
  data/           دسته‌ها
  styles/         توکن‌ها و استایل سراسری
```

## اجرای محلی

```bash
pnpm install
pnpm start
```

اپ روی [http://localhost:3006](http://localhost:3006) باز می‌شود. در حالت توسعه، Vite این مسیرها را به دیوار پروکسی می‌کند:

- `POST /api/search` به `https://api.divar.ir/v8/postlist/w/search`
- `GET /api/posts/:token` به `https://api.divar.ir/v8/posts-v2/web/:token`

اسکریپت‌ها:

| دستور          | کار                       |
| -------------- | ------------------------- |
| `pnpm start`   | سرور توسعه                |
| `pnpm build`   | خروجی تولید در `dist`     |
| `pnpm preview` | پیش‌نمایش خروجی ساخته‌شده |

`pnpm preview` پروکسی API ندارد. برای دیدن آگهی‌های واقعی بعد از بیلد، از داکر استفاده کنید.

## داکر

ایمیج دو مرحله‌ای است: ابتدا Vite خروجی را می‌سازد، بعد nginx همان فایل‌ها را سرو می‌کند و پروکسی API را هم انجام می‌دهد.

```bash
docker compose up --build
```

سپس [http://localhost:3006](http://localhost:3006) را باز کنید.

ساخت و اجرا بدون Compose:

```bash
docker build -t divar .
docker run --rm -p 3006:80 divar
```
