// import {formatPrice} from "@/app/helpers/formatPrice";
import React from "react";
import TooltipForPayment from "../TooltipForPayment";
import Advice from "../../ui/svgElements/Advice";
import clsx from "clsx";
import Coin from "../../ui/svgElements/Coin";
import {Taxes} from "@/types/taxes";

interface ICostsListProps {
  coinsDiscount: number;
  productsAmount: number;
  orderCashback: number;
  shippingCost: number;
  orderAmount: number;
  tipPercentage: number;
  tipAmount: number;
  isOrderError: boolean;
  deposits: Record<string, number>;
  taxes: Taxes;
  subtotal: number;
  euroQuantity: number;
}

function CostsList({
  coinsDiscount,
  orderCashback,
  shippingCost,
  orderAmount,
  isOrderError,
  tipPercentage,
  tipAmount,
  deposits,
  taxes,
  subtotal,
  euroQuantity,
}: ICostsListProps) {
  const formatPrice = (price: number) => price.toFixed(2).replace(".", ","); // костиль
  return (
    <>
      <div className="flex items-start justify-between border-b-2 border-t-2 border-dashed border-grey-60 py-2 text-sm4 font-medium text-textBlack sm:py-2.5 sm:text-xl md:py-3 md:text-lg2 lg:py-2.5 lg:text-xl xl:text-3xls">
        <div className="items-center sm:flex md:inline-block lg:flex">
          <p className="items-center">
            Zwischensumme
            <span className="sm:hidden md:inline lg:hidden">:</span>{" "}
          </p>
          <span className="text-s2 font-light italic sm:text-xl md:text-lg2 xl:text-2xl2">
            (inkl. Pfand)
            <span className="hidden sm:inline md:hidden lg:inline">:</span>
          </span>
        </div>
        <span className="pt-0.5">{formatPrice(subtotal)} €</span>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5 divide-y-[1px] divide-dashed divide-grey-100 border-b-2 border-dashed border-grey-60 pb-3 text-s text-grey-800 sm:gap-[10px] sm:pb-4 sm:text-m2 md:mt-3.5 md:gap-2 md:text-sm2 lg:mt-5 lg:text-lg xl:text-2xl1 [&>li:not(:first-child)]:pt-2.5 [&>li]:flex [&>li]:items-center [&>li]:justify-between">
        <li key="Trinkgeld">
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-start text-blue-600">
              {`Trinkgeld (${tipPercentage ? tipPercentage : 0}%):`}
              <TooltipForPayment
                isShowTooltipArrow={true}
                addStyles="!-left-[335%] !bottom-[145%] border-2 md:-left-[406%] md:w-[206px]"
                message={
                  <>
                    „Trinkgeld ist steuerfrei.
                    <a
                      href="/"
                      className="underline"
                    >
                      {" "}
                      Mehr in den FAQs“
                    </a>
                  </>
                }
              >
                <Advice className="ml-1 size-6 flex-shrink-0 rounded-full text-blue-900" />
              </TooltipForPayment>
            </div>
          </div>
          <span className="font-medium">{formatPrice(tipAmount)} €</span>
        </li>
        {Object.keys(deposits).length > 0 &&
          Object.keys(deposits).map((deposit) => (
            <li
              className=""
              key={deposits[deposit]}
            >
              <p className="">{`Pfand ${deposit} x ${deposits[deposit]}`}</p>
              <span className="font-medium">
                {formatPrice(
                  Number(deposits[deposit]) * Number(deposit.replace(",", "."))
                )}{" "}
                €
              </span>
            </li>
          ))}
        <li key="Gesamptrabatt">
          <p className="text-blue-600">Gesamptrabatt:</p>
          <span className="font-medium text-grey-800">
            - {formatPrice(coinsDiscount + euroQuantity)} €
          </span>
        </li>
        <li key="Liefergebühren">
          <p className="">Liefergebühren:</p>
          <span className="font-medium">{formatPrice(shippingCost)} €</span>
        </li>
      </ul>
      <ul className="mt-3 divide-y divide-dashed divide-grey-100 border-b-2 border-dashed border-grey-60 pb-3 text-s text-textBlack sm:mt-3.5 sm:text-m2 md:mt-4 xl:text-2xl1 [&>li]:flex [&>li]:items-center [&>li]:justify-between">
        {taxes.tax7 && (
          <li
            key="7%"
            className="pb-1 sm:pb-1.5"
          >
            <p>MwSt. 1 (7%):</p>
            <span className="font-medium">{formatPrice(taxes.tax7)} €</span>
          </li>
        )}
        {taxes.tax19 && (
          <li
            key="19%"
            className="pt-2.5"
          >
            <p>MwSt. 2 (19%):</p>
            <span className="font-medium">{formatPrice(taxes.tax19)} €</span>
          </li>
        )}
      </ul>
      <div
        className={clsx(
          isOrderError && "!text-red-600",
          "flex items-start justify-between border-b-2 border-dashed border-grey-60 py-2 text-sm4 font-medium text-textBlack sm:py-3.5 sm:text-xl md:text-lg2 lg:text-2xl1 xl:py-5 xl:text-3xls"
        )}
      >
        <div>
          <p>Rechnungsbetrag</p>
          <span className="text-s2 font-light italic sm:text-sm2 xl:text-l">
            (inkl. MwSt.)
          </span>
        </div>
        <span className="pt-0.5">{formatPrice(orderAmount)} €</span>
      </div>
      <div className="mt-4 flex items-center justify-between text-blue-600 sm:mt-5">
        <p className="text-s1 font-medium sm:text-xl md:text-s md:font-normal lg:text-xl xl:text-2xlm">
          Verdiente Calimero-Coins:
        </p>
        <div className="flex h-[38px] min-w-[80px] items-center justify-center rounded-full bg-blue-150 px-[15px] pb-2 pt-[5px] text-lg sm:h-[42px] sm:gap-1 sm:px-5 sm:pb-[10px] sm:pt-[6px] sm:text-l md:h-[38px] md:px-3 md:pb-[10px] md:pt-2 md:text-lg lg:gap-2 lg:px-4 lg:text-l xl:h-[48px] xl:gap-1 xl:px-5 xl:text-2xl1">
          <span>+</span>
          <span className="ml-[5px] flex items-center justify-center pt-0.5 sm:text-l md:ml-[2px] md:mr-[-2px] md:text-lg lg:mr-[-4px] lg:text-l xl:ml-1 xl:mr-[-5px] xl:text-2xl1">
            <span>{orderCashback}</span>
            <Coin className="mt-0.5 size-4 sm:mt-0 sm:size-[18px] md:mt-[3px] md:size-4 lg:mt-0.5 xl:size-5" />
          </span>
        </div>
      </div>
    </>
  );
}

export default CostsList;
