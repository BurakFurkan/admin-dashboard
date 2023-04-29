"use client";
import { useEffect } from "react";
import AllClients from "./AllClients";
import ClientInfo from "./ClientInfo";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchAllClients,addClient} from "../Redux/Features/clientSlice";

function Clients() {
  const dispatch = useAppDispatch();
  const {AllClients,isLoading} = useAppSelector((state) => state.clients);

  return (
    <div className="p-1 flex justify-between items-start">
      <button onClick={()=>dispatch(fetchAllClients())}>Fetch</button>
      <button onClick={()=>dispatch(addClient())}>Normal Reducer</button>
      <button onClick={()=>console.log(AllClients)}>Show State</button>
      <button onClick={()=>console.log(isLoading)}>Loading</button>
      {/* < AllClients /> */}
      <ClientInfo />
    </div>
  );
}

export default Clients;
