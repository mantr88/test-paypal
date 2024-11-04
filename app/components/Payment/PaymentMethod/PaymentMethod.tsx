import React, {useEffect, useState} from "react";

import cart from "@/public/images/payments/cart.png";
import paypalimg from "@/public/images/payments/payPalPayment.png";
import PaymentItem from "./PaymentItem";
// import {useOrderContext} from "@/app/context/OrderContext";
import {PaymentMethodEnum} from "@/types/paymentMethod";

const paymentMethods = [
  // {
  //   id: "cash",
  //   value: "cash",
  //   label: "Barzahlung beim Kurier ",
  //   icon: cash,
  // },
  {
    id: "online",
    value: "online",
    label: "Onlinebezahlung",
    icon: cart,
  },
  {
    id: "paypal",
    value: "paypal",
    label: "Sicher mit PayPal bezahlen",
    icon: paypalimg,
  },
];

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodEnum>(
    PaymentMethodEnum.ONLINE
  );
  const [changeValue, setChangeValue] = useState("");

  // const {updateOrderOptions} = useOrderContext();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeValue(e.target.value);
  };

  const handlePaymentChange = (value: string) => {
    switch (value) {
      case "cash":
        setSelectedMethod(PaymentMethodEnum.CASH);
        // updateOrderOptions({paymentMethod: PaymentMethodEnum.CASH});
        break;
      case "online":
        setSelectedMethod(PaymentMethodEnum.ONLINE);
        // updateOrderOptions({paymentMethod: PaymentMethodEnum.ONLINE});
        break;
      case "paypal":
        setSelectedMethod(PaymentMethodEnum.PAYPAL);
        // updateOrderOptions({paymentMethod: PaymentMethodEnum.PAYPAL});
        break;
      default:
        setSelectedMethod(PaymentMethodEnum.ONLINE);
        // updateOrderOptions({paymentMethod: PaymentMethodEnum.ONLINE});
        break;
    }
  };

  return (
    <div className="">
      <h4 className="textGray mb-3 text-xl font-medium sm:mb-5 sm:text-3xl sm:font-semibold md:text-xl md:font-medium lg:text-4m xl:mb-[30px]">
        Wählen Sie Ihre bevorzugte Zahlungsmethode
      </h4>
      <div className="relative w-full space-y-[10px] sm:space-y-3 lg:space-y-5">
        {paymentMethods.map((method) => (
          <PaymentItem
            key={method.id}
            id={method.id}
            name="payment"
            value={method.value}
            label={method.label}
            icon={method.icon}
            checked={selectedMethod === method.value}
            onChange={() => handlePaymentChange(method.value)}
          >
            {method.value === "cash" && selectedMethod === "cash" && (
              <div className="ml-7 mt-1 sm:ml-10 sm:mt-2 lg:ml-12">
                <input
                  id="change"
                  typeof="text"
                  value={changeValue}
                  className="w-full rounded-[12px] border-none bg-white px-4 pb-3 pt-2 text-sm text-textGray shadow-3xl placeholder:text-grey-60 sm:pb-4 sm:text-m2 md:pb-5 md:pt-4 md:text-sm2 lg:rounded-[18px] lg:px-10 lg:pb-5 lg:pt-4 lg:text-xl xl:px-10 xl:pb-5 xl:pt-4 xl:text-2xl1"
                  placeholder="Wie viel Wechselgeld?"
                  onChange={handleChangeValue}
                ></input>
              </div>
            )}
          </PaymentItem>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
