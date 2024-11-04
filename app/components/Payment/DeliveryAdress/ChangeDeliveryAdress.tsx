import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

import DeliveryItem from "./DeliveryItem";
import {DeliveryAddress} from "@/types/delivery";
// import {useOrderContext} from "@/app/context/OrderContext";
// import {useDeliveryContext} from "@/app/context/DeliveryContext";

interface IDeliveryAdress {
  deliveryList: DeliveryAddress[];
}

const ChangeDeliveryAdress: React.FC<IDeliveryAdress> = ({deliveryList}) => {
  // const {updateOrderOptions, orderOptions} = useOrderContext();
  // const {setDeliveryZone} = useDeliveryContext();
  const [selectedAdress, setSelectedAdress] = useState<number | null>(null);

  const router = useRouter();

  const handleSelectAddress = (id: number) => {
    setSelectedAdress(id);
    const findedAddress = deliveryList.find((address) => address.id === id);
    const selectedAddress = `${findedAddress?.postCode}, ${findedAddress?.city}, ${findedAddress?.street}, ${findedAddress?.house}`;

    if (findedAddress) {
      // updateOrderOptions({deliveryAddress: selectedAddress});
      // setDeliveryZone(findedAddress.deliveryZone);
    }
  };

  const [changeValue, setChangeValue] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeValue(e.target.value);
  };

  const changeNewDeliveryAddress = () => {
    router.push("/register/address?flow=checkout");
  };

  useEffect(() => {
    // if (orderOptions?.deliveryAddress) {
    //   const findedAddress = deliveryList.find(
    //     (address) =>
    //       `${address.postCode}, ${address.city}, ${address.street}, ${address.house}` ===
    //       orderOptions.deliveryAddress
    //   );
    //   if (findedAddress) {
    //     setSelectedAdress(findedAddress.id);
    //   }
    // }
  }, [deliveryList]);

  return (
    <div className="relative flex flex-col justify-start gap-3 sm:gap-5 xl:gap-[30px]">
      <h4 className="textGray text-xl font-medium sm:text-3xl sm:font-semibold md:text-xl md:font-medium lg:text-4m">
        Lieferadresse* :
      </h4>
      <div className="relative flex w-full flex-col gap-3 sm:gap-4 lg:gap-5">
        {deliveryList.map((address) => (
          <DeliveryItem
            key={address.id}
            id={address.id.toString()}
            adress={`${address.street}, ${address.house}`}
            city={address.city}
            cityCode={address.postCode}
            label={address.addressName || `Adresse-${address.id}`}
            checked={selectedAdress === address.id}
            onChange={() => handleSelectAddress(address.id)}
            changeValue={changeValue}
            handleChangeValue={handleChangeValue}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-2 lg:flex-row lg:justify-between lg:gap-1">
        <p className="self-center text-s text-grey-60 sm:text-m2 md:text-sm2 lg:text-m2 xl:text-xl">
          Um eine Lieferadresse zu ändern oder hinzuzufügen, klicken Sie auf die
          Schaltfläche
        </p>
        <button
          onClick={changeNewDeliveryAddress}
          className="flex w-full flex-shrink-0 justify-center truncate rounded-full bg-blue-400 px-10 pb-3 pt-2 text-center text-s text-white transition hover:bg-blue-700 focus:outline-none sm:pb-[14px] sm:pt-[10px] sm:text-m lg:w-auto lg:text-2xl1 xl:w-[271px]"
        >
          Lieferadresse ändern
        </button>
      </div>
    </div>
  );
};

export default ChangeDeliveryAdress;
