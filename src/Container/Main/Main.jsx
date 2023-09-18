import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

//styles
import styles from "./Main.module.scss";

//redux
import { useSelector } from "react-redux";
import { useGetAllCardsQuery } from "../../services/rtkQuery";
//atoms
import ItemCard from "../../components/atoms/Card/ItemCard";

const Main = () => {
  const dark = useSelector((state) => state.theme.dark);
  const [ page, setPage ] = useState(1)
  const [ lastPostDate, setLastPostDate ] = useState(1694525384153440)
  const { data, isLoading, error } = useGetAllCardsQuery({ page, lastPostDate });
  const [cards, setCards] = useState(data?.web_widgets?.post_list || [] );
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
        {isLoading && <div className="m-auto">...Loading data</div>}
        {hasMore && (
          <div className="m-auto" ref={ref}>
            ...loading more data
          </div>
        )}
        {error && <div className="m-auto">{error.message}</div>}
      </div>
    </div>
  );
};

export default Main;
