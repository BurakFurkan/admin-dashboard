"use client"
import ClientsTable from "./ClientsTable";
import ClientInfo from "./ClientInfo";

function Clients() {

  return (
    <div className="p-1 w-[270px] md:w-full flex flex-col md:flex-row justify-between items-start gap-2 ">
      <div className="w-[270px] md:w-[400px] h-[90vh] bg-white-300  flex-1">
        <ClientsTable />
      </div>
      <ClientInfo />
    </div>
  );
}

export default Clients;
