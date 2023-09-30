import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

//styles
import styles from "./style.module.scss";

//redux
import { useSelector } from "react-redux";
import { useGetAllCardsQuery } from "src/services/rtkQueryAllCards";
//atoms
import ItemCard from "src/components/Card";

import { WebWidgetsData, PostData } from './Main.types';

const Main: React.  FC<WebWidgetsData> = () => {
  const dark = useSelector((state: any) => state.theme.dark);
  const [ page, setPage ] = useState(1)
  const [ lastPostDate, setLastPostDate ] = useState(1695805620904410)
  const { data, isLoading, error } = useGetAllCardsQuery({ page, lastPostDate });
  const [cards, setCards] = useState<PostData[]>(data?.web_widgets?.post_list || [] );
  const hasMore = data?.web_widgets?.post_list?.length > 0;
  const { ref, inView } = useInView({
    threshold: 0,
  });
  
  useEffect(() => {
    if (inView) {
      setPage(page + 1);
      setLastPostDate(data?.last_post_date)
      setCards([...cards, ...data?.web_widgets?.post_list || []])
    }
  }, [inView]);
  return (
    <div
      className={
        dark
          ? `
          ${styles.dark} ' m-auto flex flex-col gap-2 items-center relative top-5 z-0 md:mr-64 lg:mr-96  lg:items-end '`
          : "m-auto flex flex-col gap-2 items-center relative top-5 z-0 md:mr-64 lg:mr-96  lg:items-end"
      }
    >
      <h1 className=" pb-2 text-slate-500 text-xs leading-6 lg:text-left">
        {" "}
        دیوار تهران:‌ انواع آگهی‌ها و خدمات در تهران{" "}
      </h1>
      <div>
        <div
          className={` ' flex flex-col flex-wrap items-center gap-2.5 mb-2.5 lg:flex-row lg:justify-end ' ${styles.main__item} `}
        >
          {cards.map((i, index) => (
            <ItemCard
              key={index}
              title={i.data.title}
              category={i.data.top_description_text}
              footer={i.data.bottom_description_text}
              price={i.data.middle_description_text}
              image={i?.data?.image_url?.[0]?.src}
              token={i.data.token}
            />
          ))}
        </div>
      </div>
        {isLoading && 
            <div className="flex m-auto">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-zinc-500"></div>
            </div>
          }
        {hasMore && (
            <div className="flex m-auto" ref={ref}>
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-zinc-500"></div>
            </div>
        )}
        {error && <div className="m-auto">{error.message}</div>}
    </div>
  );
};

export default Main;
