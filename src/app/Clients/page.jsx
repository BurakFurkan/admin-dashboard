"use client";
import ClientsTable from "./ClientsTable";
import ClientInfo from "./ClientInfo";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";


function Clients() {
  const dispatch = useAppDispatch();
  const { selectedClient } = useAppSelector((state) => state.clients);

  return (
    <div className="p-1 w-[270px] md:w-full flex flex-col md:flex-row justify-between items-start gap-2 ">
      <div className="w-full h-[90vh] bg-white-300  flex-1">
        <ClientsTable />
      </div>
      {selectedClient && <ClientInfo />}
    </div>
  );
}

export default Clients;
