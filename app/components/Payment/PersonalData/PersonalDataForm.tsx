"use client";

import React from "react";
import {useRouter} from "next/navigation";

import PersonalDataInput from "./PersonalDataInput";
// import {useUserContext} from "@/app/context/UserContext";

const PersonalDataForm: React.FC = () => {
  const router = useRouter();

  // const {user} = useUserContext();

  const handleClickSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("account/change-info?flow=checkout");
  };

  return (
    <form className="relative w-full">
      <h4 className="textGray mb-3 text-xl font-medium sm:mb-5 sm:text-3xl sm:font-semibold md:text-xl md:font-medium lg:text-4m xl:mb-[30px]">
        Persönliche Daten:
      </h4>
      <div className="flex w-full flex-col justify-between sm:flex-row md:flex-col">
        <div className="mb-4 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
          <PersonalDataInput
            label="Name der Firma"
            placeholder="Calimero"
            styles="md:w-full w-[212px]"
            // value={user?.companyName ?? ""}
          />
        </div>
        <div className="mb-4 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
          <PersonalDataInput
            label="Vorname"
            styles="md:w-full w-[212px]"
            placeholder="Super"
            // value={user?.firstName ?? ""}
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between sm:flex-row md:flex-col">
        <div className="mb-4 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
          <PersonalDataInput
            label="Nachname"
            styles="md:w-full w-[212px]"
            placeholder="Pizzaservice"
            // value={user?.lastName ?? ""}
          />
        </div>
      </div>
      {/* <div className="">
        <div className="mb-4 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
          <PersonalDataInput
            label="Telefonnummer"
            addedInfo=""
            placeholder="+49 33 456 783 23"
            value={
              user?.phoneNumber && user?.phoneCountryCode ?
                `${user?.phoneCountryCode}${user?.phoneNumber ?? ""}`
              : ""
            }
            errorMessage={
              !user?.phoneNumber && !user?.phoneCountryCode ?
                "Bitte geben Sie eine gültige Telefonnummer ein."
              : ""
            }
          />
        </div>
        <div className="mb-4 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
          <PersonalDataInput
            label="E-Mail"
            styles="md:w-full w-[212px]"
            placeholder="IchLiebeCalimeroSuperPizza@mail.com"
            value={user?.email ?? ""}
          />
        </div>
      </div> */}
      <div className="mt-5 flex flex-col items-center gap-3 sm:gap-4 md:gap-2 lg:mt-[30px] lg:flex-row lg:justify-between lg:gap-0 xl:mt-10">
        <p className="self-center text-s text-grey-60 sm:text-m2 md:text-sm2 lg:pr-5 lg:text-m2 xl:text-xl">
          Sie können Ihre Daten ändern, indem Sie auf die Schaltfläche
        </p>
        <button
          className="flex w-full flex-shrink-0 justify-center truncate rounded-full bg-blue-400 px-10 pb-3 pt-2 text-center text-s text-white transition hover:bg-blue-700 focus:outline-none sm:pb-[14px] sm:pt-[10px] sm:text-m lg:w-auto lg:text-2xl1"
          onClick={(e) => handleClickSubmit(e)}
        >
          Daten ändern
        </button>
      </div>
    </form>
  );
};

export default PersonalDataForm;
