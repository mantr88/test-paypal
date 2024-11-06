"use client";

import {useState} from "react";

import PaymentMethod from "./PaymentMethod/PaymentMethod";
import OrderOverview from "./OrderOverview/OrderOverview";
import PayPalWidget from "./PayPalWidget";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

const Payment: React.FC = () => {
  const [goToPayPalWidget, setGoToPayPalWidget] = useState(false);

  const handleConfirmedOrder = async (finalOrder: any) => {
    setGoToPayPalWidget(true);
  };

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
    <div className="container">
      <PayPalWidget amount={100} />
      {/* <PaymentMethod />
      <OrderOverview
        handleClose={() => {}}
        // order={order}
        handleConfirmedOrder={handleConfirmedOrder}
      />
      {goToPayPalWidget && <PayPalWidget amount={100} />} */}
    </div>
  );
};

export default Payment;
