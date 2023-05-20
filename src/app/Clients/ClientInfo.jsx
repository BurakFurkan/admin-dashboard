import React from "react";
import Avatar from "@mui/material/Avatar";
import {  useAppSelector } from "../Redux/hooks";
import ClientInfoField from "./ClientInfoField";

function ClientInfo() {
  const { selectedClient, isLoading } = useAppSelector(
    (state) => state.clients
  );

  return (
    <div className="text-green-500 pt-2 bg-white-300 flex-1 rounded-md border-2 border-dashed w-[250px] md:w-full min-h-[80vh] border-gray-300 flex flex-col justify-start items-start">
      {!Object.keys(selectedClient || {})?.length > 0 && (
        <div className="flex-1 self-center flex items-center justify-center w-full h-full text-center font-semibold">Please select a user from list to see the details.</div>
      )}
      {isLoading && (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      {!isLoading && Object.keys(selectedClient || {})?.length > 0 && (
        <div className="w-full h-full flex flex-col justify-start items-start pl-1">
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
          <ClientInfoField
            title1="Age"
            content1={selectedClient.age}
            title2="Birthdate"
            content2={selectedClient.birthDate}
          />
          <ClientInfoField
            title1="Address"
            content1={selectedClient.address.address}
            title2="City"
            content2={selectedClient.address.city}
          />
          <ClientInfoField
            title1="E-Mail"
            content1={selectedClient.email}
            title2="Gender"
            content2={selectedClient.gender}
          />
          <ClientInfoField
            title1="Phone"
            content1={selectedClient.phone}
            title2="Company"
            content2={selectedClient.company.name}
          />
          <ClientInfoField
            title1="Username"
            content1={selectedClient.username}
            title2="Password"
            content2={selectedClient.password}
          />
          <ClientInfoField
            title1="Card Number"
            content1={selectedClient.bank.cardNumber}
            title2="IBAN"
            content2={selectedClient.bank.iban}
          />
        </div>
      )}
    </div>
  );
}

export default ClientInfo;
