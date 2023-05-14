"use client";
import {DataGrid, gridClasses} from "@mui/x-data-grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchAllClients,addClient} from "../Redux/Features/clientSlice";
import {BsSendCheck} from "react-icons/bs";
import Avatar from '@mui/material/Avatar';

export default function CustomToolbarGrid() {
  const dispatch = useAppDispatch();
  const {AllClients,isLoading} = useAppSelector((state) => state.clients);

  useEffect(() => {
    if(!AllClients.length>0) dispatch(fetchAllClients())
  })

  function SendBtn(){
    return <button className="group cursor-pointer flex justify-center items-center rounded-md hover:shadow-icon transition-all duration-150 hover:bg-white-300 px-6 py-2 "><BsSendCheck className="group-hover:animate-bounce"/></button>
  }
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 50,align:"left",flex:1,editable:false, },
    { field: 'avatar', headerName: 'Avatar', width: 50,align:"center",flex:1,editable:false, renderCell: (params)=>{
      return (
        <div>
          <Avatar src={params.row.avatar} alt='User Avatar' className="border-[1px] border-gray-600 p-[1px]"/>
        </div>
      )
    } },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
      editable: true,
      align:"left",
      flex:2
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
      editable: true,
      align:"left",
      flex:2
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 60,
      editable: true,
      align:"left",
      headerAlign:"left",
      flex:1
    },
    {
      field: 'msgButton',
      headerName: 'Send Message',
      width: 60,
      editable: true,
      align:"center",
      flex:2,
      editable:false,
      renderCell:() => SendBtn()
    }
  ];

  function generateRow(){
    const fetchedRow=[]
    AllClients.map((client)=>{
       const myRow = {
        id:client.id,
        avatar:client.image,
        lastName:client.lastName,
        firstName:client.firstName,
        age:client.age,
       }

       fetchedRow.push(myRow)
    })

    return fetchedRow
  }
  
  const rows = generateRow();

  return (
    <div className="md:h-full md:w-full h-[120px] w-[250px] flex justify-center items-center p-0">
      <DataGrid
        sx={{
            width:"100%",
            height:"100%",
            color:"#10564F",
            [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
              outline: "none"
            },
            [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
              outline: "none"
            }
        }}
        rows={rows}
        columns={columns}
        hideFooter={true}
        getRowHeight={() => 'auto'}
        columnHeaderHeight={30}
        loading={isLoading}
        columnBuffer={0}

      />
    </div>
  );
}
