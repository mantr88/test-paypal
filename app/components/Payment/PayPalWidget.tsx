import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import CustomModal from "../ui/CustomModal";
import {PaymentStatus} from "./Payment";
// import {ENDPOINTS} from "@/app/api/api-config";
// import {fetcher} from "@/app/api/fetcher";
import {useEffect, useState} from "react";
import Loader from "../ui/Loader";

interface PayPalWidgetProps {
  orderId?: number | undefined;
  amount: number | undefined;
  cashback?: number | undefined;
  selectPaymentStatus?: (status: PaymentStatus) => void;
  close?: () => void;
  exit?: () => void;
}

const PayPalButtonsWrapper = ({createOrder, onApprove}: any) => {
  const [{isPending, isResolved}] = usePayPalScriptReducer();
  console.log("isResolved: ", isResolved);

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (isResolved) {
      setCanRender(true);
    }
  }, [isResolved]);
  console.log(window.paypal);

  if (!canRender) {
    return <Loader />;
  }

  // if (isPending) return <Loader />;
  // if (window.paypal) return <Loader />;

  return (
    <PayPalButtons
      style={{
        shape: "pill",
        layout: "vertical",
        color: "blue",
        label: "paypal",
      }}
      createOrder={createOrder}
      onApprove={onApprove}
      onError={(error) => {
        console.error("PayPal Button Error:", error);
      }}
    />
  );
};

console.log(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
function PayPalWidget({
  exit,
  orderId,
  amount,
  cashback,
  selectPaymentStatus,
  close,
}: PayPalWidgetProps) {
  const createOrder = async () => {
    try {
      // const response = await fetcher(ENDPOINTS.PAYPAL_CREATE_CHECKOUT, "POST", {
      //   amount,
      // });
      const response = await fetch("/my-server/create-paypal-order", {
        method: "POST",
        body: JSON.stringify({
          amount,
        }),
      });

      const orderData = await response.json();

      if (!orderData.id) {
        const errorDetail = orderData.details[0];
        const errorMessage =
          errorDetail ?
            `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : "Unexpected error occurred, please try again.";

        throw new Error(errorMessage);
      }

      return orderData.id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (
    data: any
  ) => {
    // Capture the funds from the transaction.
    const response = await fetch("/my-server/capture-paypal-order", {
      method: "POST",
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    });

    const details = await response.json();

    // Show success message to buyer
    alert(`Transaction completed by ${details.payer.name.given_name}`);
  };

  return (
    <CustomModal onClose={() => {}}>
      <PayPalButtonsWrapper
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </CustomModal>
  );
}

export default PayPalWidget;
