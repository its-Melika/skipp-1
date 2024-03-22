import star from "../assets/logo/Group 1164.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function FeedbackBox() {
  return (
    <>
      <div
        className="
        w-full 
        flex 
        justify-between 
        container 
        md:px-8 
        md:w-full 
        md:flex-col 
        md:space-y-4 
        md:items-center   
        xl:px-8 
        xl:w-full 
        xl:flex-col 
        xl:space-y-4 
        xl:items-center"
      >
        <div
          className="
            w-width-400 
            h-60 
            px-8 
            py-7 
            bg-white 
            border-second-border-color 
            border-solid 
            border-2 
            rounded-radiuse-10 
            transition 
            transform 
            hover:duration-300 
            hover:border-third-color 
            xl:w-full"
        >
          <div className="flex justify-between mb-6 ">
            <div className="pr-16">
              <h6 className="text-first-color text-lg">محمدرضا حسینی</h6>
              <p className="text-sm text-second-color">ایران _ مازندران</p>
            </div>
            <img src={star} alt="" />
          </div>
          <p>
            این برای تجارت من که در حال حاضر به یک شبکه خصوصی مجازی با امنیت
            بالا نیاز دارد، بسیار غیرمعمول است.
          </p>
        </div>
        <div
          className="
            w-width-400 
            h-60 
            px-8 
            py-7 
            bg-white 
            border-second-border-color 
            border-solid 
            border-2 
            rounded-radiuse-10 
            transition 
            transform 
            hover:duration-300 
            hover:border-third-color 
            xl:w-full"
        >
          <div className="flex justify-between mb-6 ">
            <div className="pr-16">
              <h6 className="text-first-color text-lg">سارا محمدی</h6>
              <p className="text-sm text-second-color">ایران _ گلستان</p>
            </div>
            <img src={star} alt="" />
          </div>
          <p>
            من آن را دوست دارم زیرا دوست دارم راه دور سفر کنم و هنوز می توانم با
            سرعت بالا ارتباط برقرار کنم.
          </p>
        </div>
        <div
          className="
            w-width-400
             h-60 
             px-8 
             py-7 
             bg-white 
             border-second-border-color 
             border-solid border-2 
             rounded-radiuse-10 
             transition 
             transform 
             hover:duration-300 
             hover:border-third-color 
             xl:w-full"
        >
          <div className="flex justify-between mb-6 ">
            <div className="pr-16">
              <h6 className="text-first-color text-lg"> علیرضا وفایی</h6>
              <p className="text-sm text-second-color">ایران _ تهران</p>
            </div>
            <img src={star} alt="" />
          </div>
          <p>
            وای... من بسیار خوشحالم که از این تحریم شکن استفاده می کنم، معلوم شد
            که بیش از انتظار من بود و تا کنون هیچ مشکلی وجود نداشته است. اسکیپ
            همیشه بهترین است.
          </p>
        </div>
      </div>
      <div
        className="
        container 
        flex 
        justify-between 
        md:px-8 
        md:w-full 
        md:items-center  
        xl:px-8 
        xl:w-full 
        xl:items-center "
      >
        <div>
          <button className="w-11 h-4 bg-btn-color rounded-radiuse-50 ml-2 active:bg-third-color"></button>
          <button className="w-4 h-4 bg-btn-color rounded-radiuse-50 ml-2 active:bg-third-color"></button>
          <button className="w-4 h-4 bg-btn-color rounded-radiuse-50 ml-2 active:bg-third-color"></button>
          <button className="w-4 h-4 bg-btn-color rounded-radiuse-50 ml-2 active:bg-third-color"></button>
        </div>
        <div className="w-36 flex justify-between">
          <button
            className="
                w-width-60 
                h-start-btn 
                flex 
                justify-center 
                items-center 
                rounded-radiuse-50 
                bg-transparent 
                border-solid 
                border-2 
                border-third-color 
                transition 
                transform 
                hover:duration-300 
                hover:bg-third-color "
          >
            <FaArrowRight className="text-third-color text-xl hover:text-white" />
          </button>
          <button
            className="
                w-width-60 
                h-start-btn 
                flex 
                justify-center 
                items-center 
                rounded-radiuse-50 
                bg-transparent 
                border-solid 
                border-2 
                border-third-color 
                transition 
                transform 
                hover:duration-300 
                hover:bg-third-color "
          >
            <FaArrowLeft className="text-third-color text-xl hover:text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
export default FeedbackBox;
