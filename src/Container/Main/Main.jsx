import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FixedSizeList as List } from "react-window";

//styles
import styles from "./Main.module.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/cards/cardsSlice";

//atoms
import ItemCard from "../../components/atoms/Card/ItemCard";


const Main = () => {

  const dark = useSelector((state) => state.theme.dark);
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.cards.loading);
  const hasMore = useSelector((state) => state.cards.hasMore);
  const dispatch = useDispatch();

  const Row = ({ index, style, data }) => {
    const card = data[index];
    return (
      <div style={{ 
        ...style, 
        display: "gride",
        width: "fit-content",

      }} key={index}>
        <ItemCard
          title={card.data.title}
          category={card.data.top_description_text}
          footer={card.data.bottom_description_text}
          price={card.data.middle_description_text}
          image={card?.data?.image_url?.[0]?.src}
        />
      </div>
    );
  };
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      dispatch(fetchData());
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
          className={`' flex flex-col flex-wrap items-center gap-2.5 mb-2.5 lg:flex-col lg:justify-end ' ${styles.main__item} `}
        >
              <List
                width={400}
                height={800}
                itemCount={cards.length}
                itemSize={200}
                itemData={cards}
                style={{direction:"rtl"}}
              >
                {Row}
              </List>
        </div>
        {loading && <div className="m-auto">...Loading data</div>}
        {hasMore && (
          <div className="m-auto" ref={ref}>
            ...loading more data
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

