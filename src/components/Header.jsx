import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
      <header
        className="
      w-full"
      >
        <nav
          className=" 
        w-full 
        flex 
        justify-between 
        items-center
        container
        md:py-9 
        md:px-10 
        md:mx-auto"
        >
          <ul
            className="
          flex 
          justify-between 
          items-center 
          w-3/5
          md:hidden
          lg:hidden
          "
          >
            <Link
              className="
            flex 
            justify-around 
            items-center 
            text-center 
            w-logo-width"
            >
              <img src={logo} alt="اسکیپ" />
              <li
                className="
              text-first-color 
              font-bold text-xl "
              >
                تحریم شکن اسکیپ
              </li>
            </Link>
            <Link
              className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
            >
              <li>پشتیبانی</li>
            </Link>
            <Link
              className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
            >
              <li>گواهینامه ها</li>
            </Link>
            <Link
              className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
            >
              <li>قیمت گذاری</li>
            </Link>
            <Link
              className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
            >
              <li>ابزار ها</li>
            </Link>
            <Link
              className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
            >
              <li> درباره ما</li>
            </Link>
          </ul>
          <div>
            <RxHamburgerMenu
              className="
            hidden 
            text-3xl 
            cursor-pointer 
            hover:text-third-color 
            md:block 
            lg:block "
            />
            {/* <ul
              className="
            hidden 
            md:block 
            lg:block 
            md:w-2/5 
            absolute 
            -right-full 
            top-0 
            w-1/5 
            h-screen 
            text-center 
            flex-col 
            items-center 
            py-8 
            px-8 
            bg-second-border-color 
            border-2 
            rounded-l-radiuse-10 
            transition 
            transform 
            duration-150"
            >
              <Link
                className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300
                "
              >
                <li className="mb-8">پشتیبانی</li>
              </Link>
              <Link
                className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
              >
                <li className="mb-8">گواهینامه ها</li>
              </Link>
              <Link
                className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
              >
                <li className="mb-8">قیمت گذاری</li>
              </Link>
              <Link
                className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
              >
                <li className="mb-8">ابزار ها</li>
              </Link>
              <Link
                className="
                text-second-color
                font-normal
                hover:text-first-color
                transition 
                transform 
                hover:duration-300"
              >
                <li> درباره ما</li>
              </Link>
            </ul> */}
          </div>
          <div className="flex justify-between items-center">
            <Link
              className="
                ml-9 
                text-first-color
                font-semibold
                text-base
                hover:text-third-color
                transition 
                transform 
                hover:duration-300
                "
            >
              ورود
            </Link>
            <Link>
              <button
                className="
                 w-custome-width-btn 
                 h-custome-height-btn
                 border-solid 
                 border-third-color 
                 border-custome-width-border 
                 rounded-radiuse-50
                 text-center
                 items-center
                 text-third-color
                 font-normal
                 hover:bg-third-color
                 hover:text-white
                 transition 
                 transform 
                 hover:duration-300 
                 "
              >
                ثبت نام
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
