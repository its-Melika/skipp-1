import Header from "../../components/Header";
import Box from "../../components/Box";
import illustration1 from "../../assets/illustration/Illustration 1.svg";
import illustration2 from "../../assets/illustration/Illustration 2.svg";
import check from "../../assets/logo/Group 1123.svg";
import ServiceBox from "../../components/ServiceBox";
import map from "../../assets/illustration/Huge Global.svg";
import FeedbackBox from "../../components/FeedbackBox";
import Footer from "../../components/Footer";
import CompanyLogos from "../../components/CompanyLogos";
import JoinBox from "../../components/JoinBox";

function Home() {
  return (
    <>
      <Header />
      <section
        className="
      container 
      flex 
      justify-between 
      text-center 
      items-center
      md:flex-col
      md:space-y-9
      xl:px-8
      xl:mt-8
      xl:flex
      xl:justify-between"
      >
        <div
          className="
        w-1/2 
        text-right
        md:text-center
        md:w-full
        "
        >
          <h5
            className="
          text-size-50 
          font-semibold 
          mb-5
          md:text-2xl 
          xl:text-3xl
          "
          >
            با تحریم شکن <span className="font-black"> اسکیپ</span> اسان باشد
          </h5>
          <p
            className="
          text-base 
          font-normal 
          text-second-color
          md:text-sm 
          xl:text-xl"
          >
            با استفاده از اسکیپ، شبکه ای را برای تمام نیازهای خود با سهولت و
            سرگرمی فراهم کنید، ویژگی های جالبی را از ما کشف کنید.
          </p>
          <button
            className="
          w-start-btn 
          h-start-btn 
          bg-third-color 
          text-gray-50 
          text-base 
          rounded-radiuse-10 
          mt-16
          shadow-2xl
          shadow-third-color
          transition 
          transform 
          hover:duration-500 
          hover:scale-105
          md:mb-6
          "
          >
            شروع کنید
          </button>
        </div>
        <div>
          <img src={illustration1} alt="" />
        </div>
      </section>
      <div className="container">
        <Box />
      </div>
      <section
        className="
      container 
      flex 
      justify-between 
      text-center 
      items-center
      md:flex-col
      md:space-y-5
      md:w-full
      xl:px-8
      xl:flex
      xl:justify-between
       
      "
      >
        <div>
          <img src={illustration2} alt="" />
        </div>
        <div className="w-3/6 text-right px-16 md:w-full">
          <h5
            className="
          text-first-color 
          font-semibold 
          text-4xl 
          mb-7 
          md:text-2xl 
          md:mt-10 
          xl:text-3xl"
          >
            ما ویژگی های بسیاری را ارائه می دهیم
          </h5>
          <p className="mb-7 text-second-color font-normal text-base">
            می‌توانید ویژگی‌هایی را که ما با سرگرمی ارائه می‌دهیم
          </p>
          <ul>
            <li className="flex mb-5  text-second-color">
              <img src={check} alt="" />
              <p>حفاظت آنلاین قدرتمند</p>
            </li>
            <li className="flex mb-5  text-second-color">
              <img src={check} alt="" />
              <p>اینترنت بدون مرز</p>
            </li>
            <li className="flex mb-5  text-second-color">
              <img src={check} alt="" />
              <p>تحریم شکن پر سرعت</p>
            </li>
            <li className="flex mb-5  text-second-color">
              <img src={check} alt="" />
              <p>بدون محدودیت زمانی خاص</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-28 text-center bg-second-bg md:px-8 md:w-full">
        <h3
          className="
        font-semibold 
        text-4xl 
        text-first-color 
        mb-8 
        md:text-2xl 
        xl:text-3xl "
        >
          برنامه خود را انتخاب کنید
        </h3>
        <h4
          className="
        font-normal 
        text-base 
        text-second-color 
        md:text-sm 
        xl:text-xl"
        >
          بیایید بسته ای را انتخاب کنیم که برای شما بهترین است و آن را با
          خوشحالی و شادی
          <br /> کشف کنیم.
        </h4>
        <div className="container xl:px-8 xl:w-full">
          <ServiceBox />
        </div>
      </section>
      <section className="bg-white md:px-8 md:w-full xl:px-8 xl:w-full">
        <h3
          className="
        text-first-color 
        font-semibold 
        text-4xl 
        text-center 
        mt-20 
        mb-10  
        md:text-2xl 
        xl:text-3xl"
        >
          شبکه جهانی عظیم
          <br /> تحریم شکن سریع
        </h3>
        <p
          className="
        text-second-color 
        text-center 
        mb-32 
        md:text-sm 
        md:mb-7 
        xl:text-xl 
        xl:mb-7"
        >
          تحریم شکن اسکیپ را در همه جا ببینید تا هنگام جابجایی مکان ها برای شما{" "}
          <br /> آسان تر شود.
        </p>
        <div className="container md:px-8 md:w-full xl:px-8 xl:w-full">
          <img src={map} alt="نقشه" className="mb-10" />
          <CompanyLogos className="mb-40 md:mb-8 xl:mb-8" />
        </div>
      </section>
      <section className="mb-60 md:px-8 md:w-full">
        <h3
          className="
        text-first-color 
        font-semibold 
        text-4xl 
        text-center 
        mt-20 
        mb-10 
        md:text-2xl 
        xl:text-3xl"
        >
          مورد اعتماد هزاران مشتری <br />
          خوشحال
        </h3>
        <p
          className="
        text-second-color 
        text-center mb-32 
        md:text-sm 
        xl:mb-20 
        xl:text-xl "
        >
          {" "}
          اینها داستان های مشتریان ما است که هنگام استفاده از این ویژگی دیوانه
          کننده با <br /> کمال میل به ما ملحق شده اند.{" "}
        </p>
        <FeedbackBox />
      </section>
      <section className="bg-second-bg">
        <JoinBox />
        <Footer />
      </section>
    </>
  );
}
export default Home;
