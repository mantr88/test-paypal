import PizzaInLoader from "./svgElements/PizzaInLoader";
interface PizzaInLoader {
  additionalStyles?: string;
}
export default function Loader({additionalStyles}: PizzaInLoader) {
  return (
    <div
      className={`z-51 fixed inset-0 flex items-center justify-center bg-black/50 ${additionalStyles}`}
    >
      <div className="relative h-16 w-16 animate-spin rounded-full bg-orange-500 p-2">
        <div className="absolute inset-0 flex items-center justify-center">
          <PizzaInLoader className="h-8 w-8 text-[#2c3e50]" />
        </div>
      </div>
    </div>
  );
}
