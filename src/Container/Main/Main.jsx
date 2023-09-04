import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FixedSizeList as List } from "react-window";

//styles
import styles from "./Main.module.scss";

//redux
import { useSelector } from "react-redux";
//atoms
import ItemCard from "../../components/atoms/Card/ItemCard";

import UserService from "./UserService";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPostDate, setLastPostData] = useState(1693322601442276);
  const dark = useSelector((state) => state.theme.dark);

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
      loadData(page, lastPostDate);
    }
  }, [inView]);

  const loadData = (page, lastPostDate) => {
    UserService.lastPostList(page, lastPostDate)
      .then((res) => {
        const newPage = page + 1;
        const newList = products.concat(res.product);
        const newLastPostData = res.lastPostDate;
        setLastPostData(newLastPostData);
        setProducts(newList);
        setPage(newPage);
        if (res.data.length === 0) {
          setHasMore(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                itemCount={products.length}
                itemSize={200}
                itemData={products}
                style={{direction:"rtl"}}
              >
                {Row}
              </List>
          {hasMore && (
            <div className="m-auto" ref={ref}>
              loading data...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;

