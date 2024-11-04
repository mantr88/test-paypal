import {ProductToOrder} from "@/types/order";
import Sixteen from "../../ui/svgElements/Sixteen";

interface IProduct {
  id: number;
  name: string;
  additionalInfo: string;
  price: number;
  isAlcohol: boolean;
}

interface IProductListProps {
  productsInOrder: ProductToOrder[];
}
const ProductList: React.FC<IProductListProps> = ({productsInOrder}) => {
  return (
    <ul className="mt-4 flex flex-col items-start gap-2.5 pb-4 sm:mt-5 sm:gap-2 sm:pb-4 md:mt-3 md:divide-y md:divide-dashed md:divide-grey-100 md:pb-2 lg:gap-3 lg:pb-[18px] xl:mt-6 xl:border-t xl:border-dashed xl:border-grey-100">
      {productsInOrder?.map((product) => (
        <li
          key={product.id}
          className="w-full md:pt-2 lg:pt-3 xl:pt-6"
        >
          <div className="mb-[3px] flex justify-between gap-1 text-s1l text-grey-800 sm:mb-[6px] sm:text-m md:mb-1 md:text-sm2 lg:text-xl xl:mb-[10px] xl:text-2xlm">
            <div className="flex items-center sm:gap-1.5 xl:font-medium">
              {product.name}
              {product.isAlcohol && <Sixteen className="ml-1 size-4" />}
            </div>
            <div className="sm:font-medium">
              {product.amount.toLocaleString("de-DE", {
                minimumFractionDigits: 2,
              })}
              €
            </div>
          </div>
          {!product.cartTitle && (
            <span className="text-xs text-grey-60 first-letter:uppercase sm:text-s md:text-sm lg:text-sm2 xl:text-lg">
              {Object.values(product.options).filter(Boolean).join(", ")}
            </span>
          )}
          {product.cartTitle && (
            <span className="text-xs capitalize text-grey-60 sm:text-s md:text-sm lg:text-sm2 xl:text-lg">
              {product.cartTitle}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
