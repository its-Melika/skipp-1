import premium from ".././assets/logo/Premium.svg";
import check from "../assets/logo/Group 1235.svg";

function ServiceBox() {
  return (
    <>
      <div
        className="
         flex 
         justify-between 
         items-center 
         pt-9 
         md:flex-col 
         md:space-y-1 
         xl:flex-wrap 
         xl:space-y-3 
         xl:space-x-2"
      >
        <div
          className="
         w-width-330 
         h-height-760 
         bg-white 
         rounded-radiuse-10 
         border-2 
         border-solid 
         border-second-border-color 
         transition 
         transform 
         hover:duration-300 
         hover:border-third-color 
         pt-24 
         px-10  
         mb-20 
         xl:m-0"
        >
          <img src={premium} alt="" className="mx-auto mb-9" />
          <h4 className="font-normal text-lg text-first-color">طرح حق بیمه</h4>
          <ul className="px-8 py-7 text-right">
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                پهنای باند نامحدود
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                اتصال رمزگذاری شده
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                بله سیاهه های ترافیک
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                روی همه دستگاه ها کار می کند
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                اتصال سریع
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                دریافت ویژگی های جدید
              </p>
              <img src={check} alt="" />
            </li>
          </ul>
          <h4
            className="
            mb-3 
            text-first-color"
          >
            <span className="font-normal text-2xl">۳۰۰۰۰ </span>
            تومان
          </h4>
          <button
            className="
            w-width-177 
            h-height-45 
            border-solid 
            border-2 
            border-third-color 
            text-third-color 
            rounded-radiuse-50 
            transition 
            transform 
            hover:duration-300 
            hover:scale-105 
            hover:bg-third-color 
            hover:text-white 
            hover:shadow-2xl
          hover:shadow-third-color"
          >
            انتخاب
          </button>
        </div>
        <div
          className="
         w-width-330 
         h-height-760 
         bg-white 
         rounded-radiuse-10 
         border-2 
         border-solid 
         border-second-border-color 
         transition 
         transform 
         hover:duration-300 
         hover:border-third-color 
         pt-24 
         px-10 
         mb-20 "
        >
          <img src={premium} alt="" className="mx-auto mb-9" />
          <h4 className="font-normal text-lg text-first-color">
            {" "}
            طرح استاندارد
          </h4>
          <ul className="px-8 py-7 text-right">
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                پهنای باند نامحدود
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                اتصال رمزگذاری شده
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                بله سیاهه های ترافیک
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                اتصال سریع
              </p>
              <img src={check} alt="" />
            </li>
          </ul>
          <div className="relative top-24">
            <h4
              className="
            mb-3 
            text-first-color"
            >
              <span className="font-normal text-2xl">۳۰۰۰۰ </span>
              تومان
            </h4>
            <button
              className="w-width-177 
            h-height-45 
            border-solid 
            border-2 
            border-third-color 
            text-third-color 
            rounded-radiuse-50 
            transition 
            transform 
            hover:duration-300 
            hover:scale-105 
            hover:bg-third-color 
            hover:text-white 
            hover:shadow-2xl
          hover:shadow-third-color"
            >
              انتخاب
            </button>
          </div>
        </div>
        <div
          className="
         w-width-330 
         h-height-760 
         bg-white 
         rounded-radiuse-10 
         border-2 
         border-solid 
         border-second-border-color 
         transition 
         transform 
         hover:duration-300 
         hover:border-third-color 
         pt-24 
         px-10 
         mb-20 "
        >
          <img src={premium} alt="" className="mx-auto mb-9" />
          <h4 className="font-normal text-lg text-first-color">طرح رایگان</h4>
          <ul className="px-8 py-7 text-right">
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                پهنای باند نامحدود
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                اتصال رمزگذاری شده
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                بله سیاهه های ترافیک
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                بدون گزارش ترافیک
              </p>
              <img src={check} alt="" />
            </li>
            <li className=" flex justify-between items-center mb-4">
              <p className="font-semibold text-sm text-second-color">
                همه جا کار می کند
              </p>
              <img src={check} alt="" />
            </li>
          </ul>
          <div className="relative top-14">
            <h4 className="mb-3 text-first-color font-normal text-2xl">
              رایگان
            </h4>
            <button
              className="
            w-width-177 
            h-height-45 
            border-solid 
            border-2 
            border-third-color 
            text-third-color 
            rounded-radiuse-50 
            transition 
            transform 
            hover:duration-300 
            hover:scale-105 
            hover:bg-third-color 
            hover:text-white 
            hover:shadow-2xl
          hover:shadow-third-color"
            >
              انتخاب
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceBox;
