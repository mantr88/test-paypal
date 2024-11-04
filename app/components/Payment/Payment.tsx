"use client";

import {useState} from "react";
import dynamic from "next/dynamic";
// import useSWR from "swr";

import {IBreadcrumbsData} from "@/types/breadcrumbsData";
import Breadcrumbs from "../ui/Breadcrumbs";
import ButtonBack from "../buttons/ButtonBack";
import TimePicker from "./TimePicker/TimePicker";
import NewsletterSubscription from "./NewsletterSubscription";
import Stepper from "./Stepper";
import VaucherCode from "./VaucherCode";
import PersonalDataForm from "./PersonalData/PersonalDataForm";
import Tips from "./Tips";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import OrderOverview from "./OrderOverview/OrderOverview";
import ButtonBackMobile from "../buttons/ButtonBackMobile";
import OurAdress from "./DeliveryAdress/OurAdress";
import ChangeDeliveryAdress from "./DeliveryAdress/ChangeDeliveryAdress";
// import {useOrder} from "@/app/hooks/useOrder";
import {Order} from "@/types/order";
import Loader from "../ui/Loader";
// import {fetcher} from "@/app/api/fetcher";
// import {ENDPOINTS} from "@/app/api/api-config";
// import {useUtilsContext} from "@/app/context/UtilsContext";
// import {useOrderContext} from "@/app/context/OrderContext";
import {DeliveryMethod, OrderStatus} from "@/app/interfaces/order";
import PayPalWidget from "./PayPalWidget";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
// import {useUserBalance} from "@/app/hooks/useUserBalance";
// import {useUserContext} from "@/app/context/UserContext";

const SumUpCardWidget = dynamic(() => import("./SumUpCardWidget"), {
  ssr: false,
});

// const SuccessModal = dynamic(() => import("../modals/SuccessModal"), {
//   ssr: false,
// });

export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface IPaymentProps {
  // close: () => void;
  // orderId: number;
}

const breadcrumbsData: IBreadcrumbsData = {
  isBreadcrumbsShown: true,
  breadcrumbs: [
    {name: "Startseite", key: "/"},
    {name: "Warenkorb", key: "/"},
    {name: "Bezahlung der Bestellung", key: ""},
  ],
};

const steps = [
  {label: "Meine Bestellung"},
  {label: "Kontakt & Zahlung"},
  {label: "Ihre Bestellung wurde erfolgreich aufgegeben"},
];

const Payment: React.FC<IPaymentProps> = (
  {
    // close,
    // orderId
  }
) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComment, setOrderComment] = useState("");
  const [goToSumUpWidget, setGoToSumUpWidget] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(
    null
  );
  const [goToPayPalWidget, setGoToPayPalWidget] = useState(false);

  // const {user, refreshUser} = useUserContext();

  // const {order, updateOrder, isLoading, error} = useOrder(orderId);

  // const {clearCart} = useUtilsContext();

  // const {orderOptions, clearOrderOptions, clearOrderBalanсe} =
  //   useOrderContext();

  // const {clearBalanceData} = useUserBalance();

  // const handleUpdateOrder = async (updates: Partial<Order>) => {
  //   try {
  //     await updateOrder(updates);
  //     console.log("Order updated successfully");
  //   } catch (error) {
  //     console.error("Failed to update order:", error);
  //   }
  // };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOrderComment(e.target.value);
  };

  const handleConfirmedOrder = async (finalOrder: any) => {
    // if (
    //   orderOptions?.deliveryMethod === "delivery" &&
    //   !orderOptions?.deliveryAddress
    // )
    //   return;

    // updateOrder({...finalOrder, ...orderOptions, comment: orderComment});
    setGoToSumUpWidget(true);
  };

  // const handleCloseWidget = async () => {
  //   try {
  //     setGoToSumUpWidget(false);

  //     const earnedCoins =
  //       typeof window !== "undefined" ?
  //         Number(localStorage.getItem("userEarnedCoins")) ?? 0
  //       : 0;

  //     const coinsQuantity =
  //       typeof window !== "undefined" ?
  //         Number(localStorage.getItem("coinsQuantity")) ?? 0
  //       : 0;

  //     const euroQuantity =
  //       typeof window !== "undefined" ?
  //         Number(localStorage.getItem("euroQuantity")) ?? 0
  //       : 0;

  //     const orderBalanсe =
  //       typeof window !== "undefined" ?
  //         JSON.parse(localStorage.getItem("orderBalanсe") ?? "{}")
  //       : {};

  //     const updates = {
  //       orderCashback: earnedCoins,
  //       cashbackUsed: Math.floor(coinsQuantity),
  //       eurosUsed: euroQuantity,
  //       status: OrderStatus.PAID,
  //       paymentStatus: true,
  //       tipAmount: orderBalanсe?.tipAmount,
  //       tax7: orderBalanсe?.tax7,
  //       tax19: orderBalanсe?.tax19,
  //       taxOfDelivery: orderBalanсe?.taxOfDelivery,
  //       deposits: orderBalanсe?.deposits,
  //       costOfDelivery: orderBalanсe?.costOfDelivery,
  //     };

  //     await updateOrder(updates);

  //     if (user) {
  //       const response = await fetcher(
  //         ENDPOINTS.USER_BALANCE.replace(":id", user.id),
  //         "PATCH",
  //         {
  //           coins: Math.floor((user?.coins ?? 0) - coinsQuantity),
  //           userWallet: Math.floor((user?.userWallet ?? 0) - euroQuantity),
  //         }
  //       );

  //       if (response) {
  //         refreshUser();
  //       }
  //     }

  //     // clearCart();
  //     // clearOrderOptions();
  //     // clearOrderBalanсe();
  //     // clearBalanceData();
  //   } catch (error) {
  //     console.error("Failed to update order on server:", error);
  //   }
  // };

  // const {
  //   data: deliveryList,
  //   isLoading: isDeliveryListLoad,
  //   error: isDeliveryListLoadError,
  // } = useSWR(`${ENDPOINTS.DELIVERY}`, fetcher);

  // const renderDeliveryAdress = () => {
  //   if (isDeliveryListLoad) {
  //     return <Loader />;
  //   }

  //   if (isDeliveryListLoadError) {
  //     return <p>Error loading delivery list</p>;
  //   }

  //   return <ChangeDeliveryAdress deliveryList={deliveryList} />;
  // };

  // if (isLoading) {
  //   return <Loader />;
  // }

  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    "enable-funding": "venmo",
    "disable-funding": "card",
    "buyer-country": "DE",
    currency: "EUR",
    components: "buttons",
  };

  if (typeof window !== "undefined") {
    console.log(window.paypal);
    console.log("window.paypal?.Buttons", window.paypal?.Buttons);
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      {/* <div className="flex flex-col items-start justify-between md:mb-10 md:flex-row md:items-center xl:mb-[60px]">
        <div className="order-2 flex flex-col items-start md:order-1 lg:gap-5 xl:gap-[30px]">
          <ButtonBack
            addStyles="mb-5 xl:mb-[30px]"
            handleClick={() => {}}
          >
            <span className="hidden lg:inline">Zurück</span>
            <span className="lg:hidden">Zurückgehen</span>
          </ButtonBack>

          <h2 className="mb-5 text-xl font-medium text-textDarkGray sm:mb-[30px] sm:text-3xl sm:font-semibold md:mb-[10px] md:text-3xls md:font-medium lg:text-5xl lg:font-normal xl:text-6xl">
            Bestellung aufgeben
          </h2>
          <Breadcrumbs data={breadcrumbsData} />
        </div>
        <div className="order-1 mb-[30px] flex w-full flex-row items-center justify-between sm:mb-[32px] md:order-2 md:mb-0 md:w-[358px] lg:w-[395px] xl:w-[561px]">
          <ButtonBackMobile handleClick={() => {}} />{" "}
          <Stepper
            steps={steps}
            currentStep={currentStep}
          />
        </div>
      </div> */}
      {/* <div className="flex flex-col justify-between md:flex-row">
        <div className="w-full space-y-10 sm:space-y-[50px] md:max-w-[358px] lg:max-w-[476px] lg:space-y-[64px] xl:max-w-[556px] xl:space-y-[80px]">
          <TimePicker isPreOrder={!!orderOptions?.isPreOrder} />
          <PersonalDataForm />
          {orderOptions?.deliveryMethod === DeliveryMethod.DELIVERY ?
            renderDeliveryAdress()
          : <OurAdress />}*/}
      <PaymentMethod />
      {/* </div>
        <div className="mt-10 w-full space-y-10 sm:mt-[50px] sm:space-y-[50px] md:mt-0 md:max-w-[316px] md:space-y-[30px] lg:max-w-[395px] lg:space-y-[50px] xl:max-w-[556px] xl:space-y-[60px]">
          <NewsletterSubscription />
          <VaucherCode />
          <div className="relative w-full">
            <h4 className="mb-3 text-xl font-medium text-textGray sm:mb-5 sm:text-3xl sm:font-semibold md:mb-3 md:text-xl md:font-medium lg:mb-5 lg:text-2xlm xl:mb-[30px] xl:text-4m">
              ✍️ Anmerkungen zur Bestellung :
            </h4>
            <textarea
              name="order-comment"
              value={orderComment}
              className="w-full rounded-[12px] border-none bg-white px-4 pb-3 pt-2 text-sm text-textGray shadow-3xl placeholder:text-sm placeholder:text-grey-60 sm:pb-4 sm:text-m2 sm:placeholder:text-m2 md:px-5 md:pb-4 md:pt-3 md:text-sm2 md:placeholder:text-sm2 lg:rounded-[18px] lg:px-[30px] lg:pb-6 lg:pt-[18px] lg:text-xl lg:placeholder:text-xl xl:px-10 xl:text-2xl1 xl:placeholder:text-2xl1"
              placeholder="Ihre Wünsche oder Hinweise für die Lieferung bitte hier eintragen."
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <Tips />
          {order && (*/}
      <OrderOverview
        handleClose={() => {}}
        // order={order}
        handleConfirmedOrder={handleConfirmedOrder}
      />
      {/*)}
        </div>
      </div> */}
      {goToPayPalWidget && <PayPalWidget amount={100} />}
    </PayPalScriptProvider>
  );
};

export default Payment;
