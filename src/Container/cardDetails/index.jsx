import React from "react";
import { Link, useParams } from "react-router-dom";

//styles
import style from "./style.module.scss";

//atom
import Button from "../../components/Button";
import Slider from "../../components/Slider";

//img
import bookmark from "../../assets/images/bookmark.svg";
import share from "../../assets/images/share.svg";
import Question from "../../assets/images/Question.svg";
import Exclamation from "../../assets/images/Exclamation.svg";

//redux
import { useGetAllDetailsCardsQuery } from "../../services/rtkQuery";

const CardDetails = () => {
  const param = useParams()
  const token = param.id
  const { data, isLoading, error } = useGetAllDetailsCardsQuery({token});
  const detailsData = data;
    
  return (
    <div className={`' mx-auto px-4 sm:max-w-2xl lg:max-w-5xl  ' ${style.contaner}`}>
      <div className=" flex flex-col justify-center items-center w-auto mx-auto my-0 lg:block ">
        <Link
          to={"/"}
          className="py-8 px-0 flex items-center text-xs leading-loose m-0 overflow-x-auto scroll-smooth opacity-60"
        >
          {detailsData?.sections[0].widgets[0].data.parent_items[0].title} /{" "}
          {detailsData?.sections[0].widgets[0].data.parent_items[1].title}/
          <span className="opacity-50">{detailsData?.seo.web_info.title}</span>
        </Link>
        <div className="flex flex-col items-center w-4/5 lg:w-full lg:flex lg:flex-row lg:items-start">
          <div className={style.right_section}>
            <div className=" flex flex-col items-center justify-center text-center lg:text-right lg:items-start ">
              <div className=" text-2xl font-semibold leading-normal ">
                {detailsData?.share.title}
              </div>
              <div className="mt-5 mb-10 opacity-60 w-max">
                {detailsData?.sections[1].widgets[0].data.subtitle}
              </div>
              <div className="flex items-center my-4 mx-0">
                <Button className="p-2.5 bg-red-800 text-white text-base font-medium h-10 justify-center hover:bg-red-600 items-center inline-flex">
                  <span className=" rounded truncate pointer-events-none">
                    اطلاعات تماس
                  </span>
                </Button>
                <Button className="mr-2 items-center justify-center h-10 hover:bg-gray-100 ">
                  <span className="inline-flex border-solid items-center justify-center border-gray-500 w-36 border-2 h-10 rounded opacity-70">
                    چت
                  </span>
                </Button>
                <span className="mr-auto w-10 h-10 inline-flex items-center justify-center p-0 opacity-60 cursor-pointer hover:bg-gray-200 hover:rounded-full duration-700 hover:duration-700">
                  <img src={bookmark} alt="bookmark" />
                </span>
                <span className="w-10 h-10 inline-flex items-center justify-center p-0 opacity-60 cursor-pointer hover:bg-gray-200 hover:rounded-full duration-700 hover:duration-700">
                  <img src={share} alt="share" />
                </span>
              </div>
              <div>
              </div>
              <div>
                <div className="inline-flex items-start mt-6">
                  <div className="inline-flex items-end mb-4">توضیحات</div>
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
          <div className={`${style.left_section} mt-10 lg:mr-auto lg:mt-0 `}>
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
