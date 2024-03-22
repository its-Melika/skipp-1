function JoinBox() {
  return (
    <>
      <div
        className="
          container 
          relative 
          bottom-36 
          md:px-8 
          md:w-full 
          xl:px-8 
          xl:w-full"
      >
        <div
          className="
           w-width-1000 
           h-height-230 
           bg-white 
           rounded-radiuse-10 
           p-14 
           flex 
           justify-between 
           items-center 
           shadow-2xl 
           md:w-full 
           md:h-full
           md:flex-col 
           md:space-y-5 
           md:text-center 
           xl:w-full 
           xl:h-full
           xl:flex-col 
           xl:space-y-5 
           xl:text-center "
        >
          <div>
            <h2
              className="
                text-4xl 
                font-normal 
                text-first-color 
                mb-5 
                md:text-2xl 
                xl:text-3xl"
            >
              برای دریافت ویژگی های <br /> ویژه، اکنون مشترک شوید!
            </h2>
            <p
              className="
                text-base 
                font-normal 
                text-second-color 
                md:text-sm 
                xl:text-xl"
            >
              بیایید با ما مشترک شوید و لذت ببرید.
            </p>
          </div>
          <button
            className="
            w-64 
            h-16 
            bg-third-color 
            text-white 
            font-bold 
            text-base 
            rounded-radiuse-10 
            shadow-2xl
            shadow-third-color 
            transition 
            transform 
            hover:duration-500 
            hover:scale-105 "
          >
            مشترک شدن
          </button>
        </div>
      </div>
    </>
  );
}
export default JoinBox;
