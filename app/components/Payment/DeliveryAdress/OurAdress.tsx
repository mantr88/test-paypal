import Link from "next/link";
import Location from "../../ui/svgElements/Location";

const OurAdress: React.FC = () => {
  return (
    <div className="sm:grid-cols-[1fr, auto] relative grid grid-cols-1 items-center gap-y-3 sm:gap-y-5 md:gap-y-4 lg:gap-y-5 xl:gap-y-[30px]">
      <h4 className="textGray order-1 text-xl font-medium sm:text-3xl sm:font-semibold md:text-xl md:font-medium lg:text-3xls xl:text-4m">
        Unsere Adresse
      </h4>
      <Link
        href="https://maps.app.goo.gl/uxijMy7hDBszJkgt7"
        className="lg:sefl-end xl:flex-grow-1 order-3 flex items-center justify-center gap-2 truncate rounded-full bg-blue-400 px-4 pb-3 pt-2 text-center text-s text-white transition hover:bg-blue-700 focus:outline-none sm:order-2 sm:flex-grow-0 sm:gap-1 sm:pb-[14px] sm:pt-[10px] sm:text-m lg:gap-2 lg:px-6 lg:text-xl xl:text-2xl1"
      >
        <Location className="size-[18px] flex-shrink-0 text-white lg:size-6" />
        <span>Auf Karte anzeigen</span>
      </Link>
      <div className="grid-rows-auto order-2 col-span-2 row-span-1 grid w-full grid-cols-[auto,1fr] items-center rounded-[12px] border-none bg-white px-4 pb-4 pt-[10px] shadow-3xl sm:order-3 sm:rounded-5xl sm:px-5 sm:pb-6 sm:pt-4 md:px-5 md:pb-5 md:pt-3 lg:px-6 lg:pb-6 lg:pt-4 xl:rounded-[30px] xl:px-10 xl:pb-6 xl:pt-[18px]">
        <span className="col-span-1 row-span-1 mb-1 text-sm text-grey-500 sm:col-span-2 sm:text-sm2 lg:text-lg xl:text-xl">
          Calimero Pizzaservice
        </span>

        <span className="order-3 text-sm2 font-medium text-blue-900 sm:order-2 sm:text-2xlm md:text-lg2 lg:text-2xlm xl:text-3xl xl:font-semibold">
          Wittenberger Str, 56
        </span>
        <span className="order-2 text-right text-sm text-grey-60 sm:order-3 sm:text-sm2 lg:text-lg xl:text-xl">
          04129, Leipzig
        </span>
      </div>
    </div>
  );
};

export default OurAdress;
