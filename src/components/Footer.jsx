import logo from "../assets/logo/Logo.svg";
import instagram from "../assets/logo/Instagram.svg";
import twiter from "../assets/logo/Twitter.svg";
import facebook from "../assets/logo/Facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="
        container 
        h-auto 
        flex 
        justify-between 
        relative 
        bottom-16 
        md:px-8 
        md:w-full 
        md:flex-col 
        xl:px-8 
        xl:w-full 
        xl:flex-col"
      >
        <div className="w-width-390">
          <div className=" flex gap-2 items-center mb-7">
            <img src={logo} alt="" />
            <h6 className="font-bold text-xl text-first-color">
              تحریم شکن اسکیپ
            </h6>
          </div>
          <p className="text-base text-second-color mb-8">
            تحریم شکن اسکیپ یک شبکه مجازی خصوصی است که <br /> ویژگی های منحصر به
            فردی دارد و امنیت بالایی دارد.
          </p>
          <div className="w-32 text-right flex relative left-5">
            <img src={instagram} alt="" />
            <img src={twiter} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div>
          <h5
            className="
               text-lg 
               font-semibold 
               text-first-color 
               mb-10 
               md:mb-3 
               xl:mb-3"
          >
            کسب درآمد کنید
          </h5>
          <ul className="md:mb-10 xl:mb-10">
            <Link>
              <li className="text-second-color mb-4">وابسته</li>
            </Link>
            <Link>
              <li className="text-second-color">شریک شوید</li>
            </Link>
          </ul>
        </div>
        <div>
          <h5
            className="
               text-lg 
               font-semibold 
               text-first-color  
               mb-10 
               md:mb-3 
               xl:mb-3"
          >
            مشغول کردن
          </h5>
          <ul className="md:mb-10 xl:mb-10">
            <Link>
              <li className="text-second-color text-base mb-4">اسکیپ</li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">
                سوالات متداول{" "}
              </li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">آموزش ها</li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">درباره ما </li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">
                {" "}
                سیاست حفظ حریم خصوصی{" "}
              </li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">
                {" "}
                شرایط استفاده از خدمات{" "}
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-first-color  mb-10 md:mb-3 xl:mb-3">
            {" "}
            محصولات
          </h5>
          <ul>
            <Link>
              {" "}
              <li className="text-second-color text-base mb-4">دانلود</li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4"> قیمت گذاری </li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4"> مکان ها</li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4"> سرور </li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">کشورها</li>
            </Link>
            <Link>
              <li className="text-second-color text-base mb-4">وبلاگ</li>
            </Link>
          </ul>
        </div>
      </div>
      <h6 className="text-base font-bold text-third-color text-center pb-8 md:pb-5 xl:pb-3">
        توسعه توسط اسکیپ یوآی
      </h6>
    </>
  );
}
export default Footer;
