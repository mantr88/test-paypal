import React, {useEffect, useState} from "react";
import Script from "next/script";
// import {ENDPOINTS} from "@/app/api/api-config";
import CustomModal from "../ui/CustomModal";
import {PaymentStatus} from "./Payment";
// import {fetcher} from "@/app/api/fetcher";

declare global {
  interface Window {
    SumUpCard: any;
  }
}

interface ISumUpCardWidgetProps {
  orderId: number | undefined;
  amount: number | undefined;
  cashback?: number | undefined;
  selectPaymentStatus: (status: PaymentStatus) => void;
  close: () => void;
  exit?: () => void;
}

const SumUpCardWidget = ({
  orderId,
  amount,
  selectPaymentStatus,
  close,
  cashback = 0,
  exit,
}: ISumUpCardWidgetProps) => {
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  useEffect(() => {
    const fetchCheckoutId = async () => {
      // const response = await fetcher(
      //   `${process.env.NEXT_PUBLIC_SERVER_ROOT}${ENDPOINTS.CREATE_CHECKOUT.replace(":orderId", orderId ? orderId.toString() : "")}`,
      //   "POST",
      //   {
      //     amount,
      //   }
      // );
      const response = {checkoutId: "123"};
      const data = response;
      setCheckoutId(data.checkoutId);
    };
    fetchCheckoutId();
  }, [amount, orderId]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.SumUpCard) {
      window.SumUpCard.mount({
        checkoutId,
        containerId: "sumup-card",
        locale: "de-DE",
        country: "DE",
        onResponse: async (
          type: any,
          body: {[key: string]: string | number}
        ) => {
          console.log(Date.now().toLocaleString());
          console.log("body: ", body);
          console.log("type: ", type);
          if (type === "sent") return;
          if (type === "auth-screen") return;
          if (type === "success") {
            console.log("first if ", body);
            // if (body.status === "PAID") {
            selectPaymentStatus(PaymentStatus.SUCCESS);
            // await fetcher(
            //   `${process.env.NEXT_PUBLIC_SERVER_ROOT}${ENDPOINTS.UPDATE_ORDER.replace(":id", orderId ? orderId.toString() : "")}`,
            //   "PATCH",
            //   {
            //     status: "paid",
            //     paymentStatus: true,
            //     orderCashback: cashback,
            //   }
            // );
            console.log("Платіж пройшов успішно");
            close();
            return;

            // }

            // selectPaymentStatus(PaymentStatus.ERROR);
            // close();
          } else {
            console.error("Помилка при платежі");
            selectPaymentStatus(PaymentStatus.ERROR);
          }
        },
      });
    }
  }, [cashback, checkoutId, close, orderId, selectPaymentStatus]);

  if (!orderId || !amount) {
    return null;
  }
  return (
    <CustomModal onClose={exit || (() => {})}>
      <div
        id="sumup-card"
        className="relative z-[51]"
      ></div>
      <Script
        src="https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js"
        strategy="afterInteractive"
      />
    </CustomModal>
  );
};

export default SumUpCardWidget;
