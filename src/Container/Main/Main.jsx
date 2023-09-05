import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FixedSizeGrid as Grid } from 'react-window';

//styles
import styles from "./Main.module.scss";

//redux
import { useSelector, useDispatch } from "react-redux";
//atoms
import ItemCard from "../../components/atoms/Card/ItemCard";
import { fetchData } from "../../store/cards/cardsSlice";

const Main = () => {

  const dark = useSelector((state) => state.theme.dark);
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.cards.loading);
  const hasMore = useSelector((state) => state.cards.hasMore);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const cardIndex = rowIndex * 3 + columnIndex;
    const card = cards[cardIndex];
    if (!card) {
      return null;
    }
    return (
      <div style={{...style, direction:'rtl'}
      }>
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
          className={` ' flex flex-col flex-wrap items-center gap-2.5 mb-2.5 lg:flex-row lg:justify-end ' ${styles.main__item} `}
          >
               <Grid
               columnCount={3}
               columnWidth={400}
               height={800}
               rowCount={cards.length}
               rowHeight={200}
               width={1500}
               >
               {Cell}
             </Grid>
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