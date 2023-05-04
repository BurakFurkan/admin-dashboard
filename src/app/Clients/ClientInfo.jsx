import React from "react";
import Avatar from "@mui/material/Avatar";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import ClientInfoField from "./ClientInfoField";

function ClientInfo() {
  const { selectedClient} = useAppSelector(
    (state) => state.clients
  );
  console.log(selectedClient);

  return (
    <div className="text-green-500 pt-2 bg-white-300 flex-1 rounded-md border-2 border-dashed w-[260px] md:w-full border-gray-300 flex flex-col justify-start items-start">
      <h1 className="font-medium self-center text-lg">Details</h1>
      <div className="p-1 flex justify-center items-center font-semibold pl-8 gap-2">
        <Avatar
          className="border-[1px] border-gray-600 p-[1px]"
          src={selectedClient.image}
          alt="User Avatar"
        />
        <h1 className="flex justify-center items-center pt-1">
          {selectedClient.firstName} {selectedClient.lastName}
        </h1>
      </div>
      <ClientInfoField title1="Age" content1={selectedClient.age} title2="Birthdate" content2={selectedClient.birthDate} />
      <ClientInfoField title1="Address" content1={selectedClient.address.address} title2="City" content2={selectedClient.address.city} />
      <ClientInfoField title1="E-Mail" content1={selectedClient.email} title2="Gender" content2={selectedClient.gender} />
      <ClientInfoField title1="Company" content1={selectedClient.phone} title2="Company" content2={selectedClient.company.name} />
      <ClientInfoField title1="Card Number" content1={selectedClient.bank.cardNumber} title2="IBAN" content2={selectedClient.bank.iban} />
    </div>
  );
}

export default ClientInfo;
