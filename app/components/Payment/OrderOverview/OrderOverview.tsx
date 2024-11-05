import {use, useEffect, useMemo, useState} from "react";
import clsx from "clsx";

import ButtonBack from "../../buttons/ButtonBack";
import ButtonOrderNow from "./ButtonOrderNow";
import CostsList from "./CostsList";
import PlusMinusCoins from "./PlusMinusCoins";
import ProductList from "./ProductList";
import Advice from "../../ui/svgElements/Advice";
// import {useUserBalance} from "@/app/hooks/useUserBalance";
import {Order} from "@/types/order";
// import {useDeliveryContext} from "@/app/context/DeliveryContext";
import Warning from "../../ui/Warning";
// import {useOrderContext} from "@/app/context/OrderContext";
// import {useUtilsContext} from "@/app/context/UtilsContext";
import {ProductinCart} from "@/types/cartItem";
import {Taxes} from "@/types/taxes";

interface IOrderOverview {
  handleClose: () => void;
  order?: Order;
  handleConfirmedOrder: (finalOrder: any) => void;
}

const OrderOverview = ({
  handleClose = () => {},
  handleConfirmedOrder,
  order,
}: IOrderOverview) => {
  const [isOrderError, setIsOrderError] = useState(false);
  const [isDeliveryError, setIsDeliveryError] = useState(false);
  // const {productsAmount, productToOrder} = order;

  const [containsAlcohol, setContainsAlcohol] = useState(false);

  // const {
  //   euroQuantity,
  //   coinsQuantity,
  //   setEuroQuantity,
  //   setCoinsQuantity,
  //   userEuro,
  //   userCoins,
  //   coinsDiscount,
  //   setUserEarnedCoins,
  // } = useUserBalance();

  // const {shippingCost, minOrderAmount} = useDeliveryContext();

  // const {orderOptions, setOrderBalanсe} = useOrderContext();

  // const {getCartQuantity, cartItems} = useUtilsContext();

  // const totalItemsInCart = getCartQuantity();

  // const maxCoinsDiscount = Math.min(coinsDiscount, 50);

  // const isInOrderProductOnSale = productToOrder?.some(
  //   (product) => product.isOnSale
  // );

  // useEffect(() => {
  //   if (isInOrderProductOnSale) {
  //     setCoinsQuantity(0);
  //   }
  // }, [isInOrderProductOnSale, setCoinsQuantity]);

  // const earnedCoins = useMemo(() => {
  //   if (!productToOrder || !Array.isArray(productToOrder)) return 0;
  //   const coins = productToOrder.reduce((acc, product) => {
  //     if (!product.isOnSale && product.amount > 0) {
  //       return acc + product.amount;
  //     }
  //     return acc;
  //   }, 0);

  //   const finalCashback = Math.max(
  //     coins - euroQuantity - coinsDiscount + shippingCost,
  //     0
  //   );

  //   return Math.floor(finalCashback);
  // }, [productToOrder, euroQuantity, coinsDiscount, shippingCost]);

  // useEffect(() => {
  //   setUserEarnedCoins(earnedCoins);
  // }, [earnedCoins, setUserEarnedCoins]);

  // useEffect(() => {
  //   // Check if any product in the order contains alcohol
  //   const alcoholProduct = productToOrder?.some((product) => product.isAlcohol);
  //   setContainsAlcohol(alcoholProduct);
  // }, [productToOrder]);

  const confirmBtnHandler = () => {
    if (isOrderError) return;
    // setUserEarnedCoins(earnedCoins);

    const finalOrder = {
      amount: 100,
    };
    handleConfirmedOrder(finalOrder);
  };

  // useEffect(() => {
  //   if (
  //     orderOptions?.deliveryMethod === "delivery" &&
  //     !orderOptions?.deliveryAddress
  //   ) {
  //     setIsDeliveryError(true);
  //     return;
  //   }
  //   setIsDeliveryError(false);
  // }, [orderOptions]);

  // const tipAmount = useMemo(() => {
  //   if (!orderOptions?.tipPercentage) return 0;
  //   const result = (order.productsAmount * orderOptions.tipPercentage) / 100;
  //   return Math.round((result + Number.EPSILON) * 100) / 100;
  // }, [orderOptions?.tipPercentage]);

  // const deposits = cartItems.reduce(
  //   (acc: Record<string, number>, item: ProductinCart) => {
  //     if (item.category.name !== "Getränke" || !item.characteristics?.deposit)
  //       return acc;

  //     const deposit = item.characteristics?.deposit;
  //     const depositCost = deposit.slice(6, 10);

  //     if (!acc[depositCost]) {
  //       acc[depositCost] = 0;
  //     }
  //     acc[depositCost] += item.quantity;
  //     return acc;
  //   },
  //   {} as Record<string, number>
  // );

  // let amountCostsOfProductsByTypeOfTax = {
  //   tax7: 0,
  //   tax19: 0,
  // };

  // const taxes = cartItems.reduce((acc:Taxes, item: ProductinCart) => {
  //   const productPrice = item.newPrice ?? item.price;
  //   const productAmount = item.quantity * productPrice;
  //   if (
  //     item.category.name !== "Getränke" &&
  //     item.category.name !== "Gutschein"
  //   ) {
  //     amountCostsOfProductsByTypeOfTax.tax7 += productAmount;
  //     const tax = productAmount * 0.07;
  //     const roundedTax = Math.round((tax + Number.EPSILON) * 100) / 100;

  //     if (!acc.tax7) {
  //       acc.tax7 = roundedTax;
  //     } else {
  //       acc.tax7 += roundedTax;
  //     }
  //   } else {
  //     amountCostsOfProductsByTypeOfTax.tax19 += productAmount;
  //     const tax = productAmount * 0.19;
  //     const roundedTax = Math.round((tax + Number.EPSILON) * 100) / 100;

  //     if (!acc.tax19) {
  //       acc.tax19 = roundedTax;
  //     } else {
  //       acc.tax19 += roundedTax;
  //     }
  //   }
  //   return acc;
  // }, {} as Taxes);

  // const taxOfDelivery =
  //   (
  //     amountCostsOfProductsByTypeOfTax.tax7 >
  //     amountCostsOfProductsByTypeOfTax.tax19
  //   ) ?
  //     Math.round((shippingCost * 0.07 + Number.EPSILON) * 100) / 100
  //   : Math.round((shippingCost * 0.19 + Number.EPSILON) * 100) / 100;

  // const depositsAmount = useMemo(() => {
  //   return Object.keys(deposits).reduce((acc, deposit) => {
  //     const depositCost = Number(deposit.replace(",", "."));
  //     return acc + Number(deposits[deposit]) * depositCost;
  //   }, 0);
  // }, [deposits]);

  // const subtotal = useMemo(() => {
  //   return (
  //     productsAmount + shippingCost + tipAmount + depositsAmount + taxOfDelivery
  //   );
  // }, [productsAmount, shippingCost, tipAmount, depositsAmount, taxOfDelivery]);

  // const orderAmount = useMemo(() => {
  //   const coinsUsed = maxCoinsDiscount;
  //   const totalOrderAmount = subtotal - coinsUsed - euroQuantity;
  //   const remainingAmount = Math.max(totalOrderAmount, minOrderAmount);

  //   if (totalOrderAmount < remainingAmount) {
  //     setIsOrderError(true);
  //     return totalOrderAmount;
  //   } else {
  //     setIsOrderError(false);
  //     return remainingAmount;
  //   }
  // }, [subtotal, minOrderAmount, maxCoinsDiscount, euroQuantity]);

  // useEffect(() => {
  //   setOrderBalanсe((prevState) => {
  //     if (
  //       prevState?.tipAmount === tipAmount &&
  //       prevState?.taxOfDelivery === taxOfDelivery &&
  //       prevState?.tax7 === taxes.tax7 &&
  //       prevState?.tax19 === taxes.tax19 &&
  //       JSON.stringify(prevState?.deposits) === JSON.stringify(deposits) &&
  //       prevState?.costOfDelivery === shippingCost
  //     ) {
  //       return prevState;
  //     }

  //     return {
  //       ...prevState,
  //       tipAmount,
  //       taxOfDelivery,
  //       tax7: taxes.tax7,
  //       tax19: taxes.tax19,
  //       deposits,
  //       costOfDelivery: shippingCost,
  //     };
  //   });
  // }, [
  //   tipAmount,
  //   taxOfDelivery,
  //   taxes.tax7,
  //   taxes.tax19,
  //   deposits,
  //   setOrderBalanсe,
  //   shippingCost,
  // ]);

  return (
    <div>
      {/* <div className="mb-3 flex flex-col rounded-[12px] bg-white px-4 pb-5 pt-3 shadow-5xl sm:mb-5 sm:rounded-[20px] sm:px-5 sm:pb-7 sm:pt-5 md:rounded-[20px] md:pb-[32px] md:pt-4 lg:px-6 lg:pt-6 xl:rounded-[30px] xl:px-10 xl:pb-[50px] xl:pt-7">
        <div className="border-b-2 border-dashed border-grey-60">
          <h3 className="textGrey text-sm4 font-medium sm:mb-1 sm:text-xl md:mb-0 md:text-lg2 md:font-medium lg:text-2xlm xl:text-3xls">
            Bestellübersicht
            <span className="hidden xl:inline"> Preise in EUR:</span>
          </h3>
          <p className="hidden text-xml text-grey-60 xl:inline">
            inkl. Steuern (falls zutreffend)
          </p>
          {containsAlcohol && (
            <div className="mt-4 border-b-[1px] border-dashed border-grey-100 sm:mt-5 md:mt-3 xl:mt-6">
              <div className="flex rounded-[12px] border-[2px] border-red-600 px-3 pb-[18px] pt-3 text-s2 text-red-600 sm:text-sm lg:px-4 lg:pb-4 lg:text-s xl:rounded-5xl xl:pb-6 xl:pl-5 xl:pr-6 xl:pt-[14px] xl:text-sm3">
                <Advice className="mr-1 size-[18px] flex-shrink-0 text-red-600 xl:mr-[10px] xl:size-7" />
                <span>
                  Mit dem Klick auf &apos;Jetzt bestellen&apos; bestätigen Sie,
                  dass Sie das 16. Lebensjahr vollendet haben.
                </span>
              </div>
            </div>
          )}
          <ProductList productsInOrder={productToOrder} />
        </div>
        <div className="py-4 sm:py-5 xl:py-6">
          <div className={clsx(isInOrderProductOnSale && "opacity-30", "mb-3")}>
            <div className="mb-2 flex items-center justify-between text-sm1 text-grey-800 sm:text-m md:text-s md:font-medium lg:text-lg2 xl:text-2xlm">
              <p className="">Ihr Guthaben beträgt:</p>
              <span className="font-medium lg:font-medium xl:font-normal">
                {userCoins - coinsQuantity} Coins
              </span>
            </div>
            <PlusMinusCoins
              isEuro={false}
              euroQuantity={euroQuantity}
              userEuro={userEuro}
              userCoins={userCoins}
              coinsQuantity={coinsQuantity}
              setEuroQuantity={setEuroQuantity}
              setCoinsQuantity={setCoinsQuantity}
              isMinOrderAmount={
                orderAmount <= minOrderAmount || isInOrderProductOnSale
              }
              tooltipMessage="„1 Calimero Coin = 1 Cent (100 Coins = 1 Euro). "
            />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between text-sm1 text-grey-800 sm:text-m md:text-s md:font-medium lg:text-lg2 xl:text-2xlm">
              <p className="">Ihr Guthaben beträgt:</p>
              <span className="font-medium lg:font-medium xl:font-normal">
                {userEuro - euroQuantity} €
              </span>
            </div>
            <PlusMinusCoins
              isEuro={true}
              euroQuantity={euroQuantity}
              userEuro={userEuro}
              userCoins={userCoins}
              coinsQuantity={coinsQuantity}
              setEuroQuantity={setEuroQuantity}
              setCoinsQuantity={setCoinsQuantity}
              isMinOrderAmount={orderAmount <= minOrderAmount}
              tooltipMessage="„Euro-Guthaben aus Gutscheinen oder
                Aktionen verrechnen. "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <CostsList
            coinsDiscount={coinsDiscount}
            productsAmount={productsAmount}
            orderCashback={earnedCoins}
            shippingCost={shippingCost}
            orderAmount={orderAmount}
            isOrderError={isOrderError}
            tipPercentage={orderOptions?.tipPercentage ?? 0}
            tipAmount={tipAmount}
            deposits={deposits}
            taxes={taxes}
            subtotal={subtotal}
            euroQuantity={euroQuantity}
          />
          {isOrderError && (
            <Warning
              textColor="text-red-600"
              bgColor="bg-color-white"
              borderColor="border-red-600"
              addedStyles="mb-3 text-xss !mt-0 sm:text-s !font-normal md:text-xs md:!pt-[10px] md:!mb-0 md:!pb-[14px] md:items-center md:mb-6 lg:mb-5 lg:!rounded-[20px] lg:!pt-[10px] lg:!pb-[14px]  xl:text-l xl:!pt-[14px] xl:!pb-[23px] xl:mb-[30px]"
            >
              Der Mindestbestellwert wurde nicht erreicht!
            </Warning>
          )}
          {isDeliveryError && (
            <Warning
              textColor="text-red-600"
              bgColor="bg-color-white"
              borderColor="border-red-600"
              addedStyles="mb-3 text-xss !mt-0 sm:text-s !font-normal md:text-s2 lg:text-sm2 md:!pt-[10px] md:!mb-0 md:!pb-[14px] md:items-center md:mb-6 lg:mb-5 lg:!rounded-[20px] lg:!pt-[10px] lg:!pb-[14px]  xl:text-l xl:!pt-[14px] xl:!pb-[23px] xl:mb-[30px]"
            >
              Keine Lieferadresse eingegeben!
            </Warning>
          )}
        </div>
      </div> */}
      <div className="flex flex-row items-center justify-between gap-[10px]">
        {/* <ButtonBack
          handleClick={handleClose}
          addStyles="lg:h-[50px] lg:px-[30px] lg:text-l md:px-4 "
        >
          Zurück
        </ButtonBack> */}
        <ButtonOrderNow
          handleClick={confirmBtnHandler}
          isOrderError={isOrderError || isDeliveryError}
          addStyles="truncate"
        >
          Bestellung abschließen
        </ButtonOrderNow>
      </div>
    </div>
  );
};

export default OrderOverview;
