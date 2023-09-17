import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//styles
import style from "./CardDetails.module.scss";

//atom
import Buttons from "../../components/atoms/Button/Buttons";

//img
import bookmark from "../../assets/images/bookmark.svg";
import share from "../../assets/images/share.svg";
import Question from "../../assets/images/Question.svg";
import Exclamation from "../../assets/images/Exclamation.svg";

//redux
import { useGetAllDetailsCardsQuery } from "../../services/rtkQueryDitals";
import Slider from "../../components/atoms/Slider/Slider";

const CardDetails = () => {
  
    const { data, isLoading, error } = useGetAllDetailsCardsQuery();
    const detailsData = data;
    
  return (
    <div className={`' mx-auto px-4 ' ${style.contaner}`}>
      <div>
        <Link
          to={"/"}
          className="py-8 px-0 flex items-center text-xs leading-loose m-0 overflow-x-auto scroll-smooth opacity-60"
        >
          {detailsData?.sections[0].widgets[0].data.parent_items[0].title} /{" "}
          {detailsData?.sections[0].widgets[0].data.parent_items[1].title}/
          <span className="opacity-50">{detailsData?.seo.web_info.title}</span>
        </Link>
        <div className="flex flex-wrap -mx-2">
          <div className={style.right_section}>
            <div>
              <div className=" text-2xl font-semibold leading-normal ">
                {detailsData?.share.title}
              </div>
              <div className="mt-5 mb-10 opacity-60 w-max">
                {detailsData?.sections[1].widgets[0].data.subtitle}
              </div>
              <div className="flex items-center my-4 mx-0">
                <Buttons className="p-2.5 bg-red-800 text-white text-base font-medium h-10 justify-center hover:bg-red-600 items-center inline-flex">
                  <span className=" rounded truncate pointer-events-none">
                    اطلاعات تماس
                  </span>
                </Buttons>
                <Buttons className="mr-2 items-center justify-center h-10 hover:bg-gray-100 ">
                  <span className="inline-flex border-solid items-center justify-center border-gray-500 w-36 border-2 h-10 rounded opacity-70">
                    چت
                  </span>
                </Buttons>
                <span className="mr-auto w-10 h-10 inline-flex items-center justify-center p-0 opacity-60 cursor-pointer hover:bg-gray-200 hover:rounded-full duration-700 hover:duration-700">
                  <img src={bookmark} alt="bookmark" />
                </span>
                <span className="w-10 h-10 inline-flex items-center justify-center p-0 opacity-60 cursor-pointer hover:bg-gray-200 hover:rounded-full duration-700 hover:duration-700">
                  <img src={share} alt="share" />
                </span>
              </div>
              <div>
                <div className="flex items-start mt-6">
                  <div className="flex items-end">توضیحات</div>
                </div>
                <div>
                  <div className="min-w-0">
                    <p className="text-xs tracking-widest leading-loose font-normal whitespace-pre-line break-words">
                      {detailsData?.sections[2].widgets[1].data.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.left_section}>
            <Slider cardImage={detailsData?.sections[3]?.widgets[0]?.data?.items} />
            <div className="my-4 flex flex-col w-auto">
              <textarea
                name="type"
                id=""
                cols="30"
                rows="10"
                placeholder="یادداشت شما ..."
                className="border-solid border-2 h-32 p-2"
              ></textarea>
              <span className="text-xs mt-2 opacity-70">
                یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد
                شد.
              </span>
            </div>
            <div className="mt-16">
              <div className=" text-sm flex justify-start items-center gap-3 opacity-70 my-4 py-2 cursor-pointer">
                <img src={Question} alt="Question" />
                <span>راهنمای خرید امن</span>
              </div>
              <hr />
              <div className=" text-sm flex justify-start items-center gap-3 opacity-70 my-4 py-2 cursor-pointer">
                <img src={Exclamation} alt="Exclamation" />
                <span>ثبت تخلف و مشکل آگهی</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      {isLoading && <div className="m-auto">...Loading data</div>}
      {error && <div className="m-auto">{error.message}</div>}
    </div>
  );
};

export default CardDetails;
