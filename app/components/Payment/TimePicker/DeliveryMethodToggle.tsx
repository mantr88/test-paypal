import React, {useEffect, useState} from "react";
import clsx from "clsx";
import {DeliveryMethod} from "@/app/interfaces/order";
// import {useOrderContext} from "@/app/context/OrderContext";
// import {useDeliveryContext} from "@/app/context/DeliveryContext";

const DeliveryMethodToggle = () => {
  // const {updateOrderOptions} = useOrderContext();
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(
    DeliveryMethod.DELIVERY
  );

  // const {setDeliveryType} = useDeliveryContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMethod = localStorage.getItem("deliveryType");
      if (savedMethod === "pickup") {
        setDeliveryMethod(DeliveryMethod.PICKUP);
        // updateOrderOptions({deliveryMethod: DeliveryMethod.PICKUP});
      } else {
        setDeliveryMethod(DeliveryMethod.DELIVERY);
        // updateOrderOptions({deliveryMethod: DeliveryMethod.DELIVERY});
        // setDeliveryType(DeliveryMethod.DELIVERY);
      }
    }
  }, []);

  const handleDeliveryMethodChange = (deliveryMethod: DeliveryMethod) => {
    // setDeliveryType(deliveryMethod);
    setDeliveryMethod(deliveryMethod);
    // updateOrderOptions({deliveryMethod});
  };
  return (
    <div className="switcher-container-2 relative mb-3 w-max grid-cols-2 sm:mb-4 xl:mb-5">
      <div
        className={clsx(
          "switcher-active-2 absolute h-full w-1/2 before:block before:h-full before:w-full before:rounded-full before:bg-white before:shadow-5xl",
          deliveryMethod === DeliveryMethod.PICKUP && "!translate-x-[97%]"
        )}
      ></div>
      <button
        className={clsx(
          "z-10 rounded-full",
          deliveryMethod === DeliveryMethod.DELIVERY && "textGray"
        )}
        onClick={() => handleDeliveryMethodChange(DeliveryMethod.DELIVERY)}
      >
        Lieferung
      </button>
      <button
        className={clsx(
          "z-10 rounded-full",
          deliveryMethod === DeliveryMethod.PICKUP && "textGray"
        )}
        onClick={() => handleDeliveryMethodChange(DeliveryMethod.PICKUP)}
      >
        Selbstabholer
      </button>
    </div>
  );
};

export default DeliveryMethodToggle;
