"use client";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchAllTeamMembers, memberDetailHandler} from "../Redux/Features/teamSlice";
import { BsSearch } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";

export default function TeamTable() {
  const dispatch = useAppDispatch();
  const { AllTeamMembers, isLoading } = useAppSelector((state) => state.team);

  useEffect(() => {
    if (!AllTeamMembers.length > 0) dispatch(fetchAllTeamMembers());
  });

  const handleCellClick = (params) => {
    params.field === "details" ? dispatch(memberDetailHandler(params.id)) : null;
  };

  function SendBtn() {
    return (
      <button className="group cursor-pointer flex justify-center w-full h-full items-center rounded-md hover:shadow-icon transition-all duration-150 hover:bg-white-300 px-6 py-2 ">
        <BsSearch className="group-hover:animate-bounce min-w-[30px]" />
      </button>
    );
  }

  const columns = [
    { field: "id", headerName: "ID", width: 50, align: "left", flex: 1,editable:false, },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 50,
      align: "center",
      flex: 1,
      editable:false,
      renderCell: (params) => {
        return (
          <div>
            <Avatar src={params.row.avatar} alt="User Avatar" className="border-[1px] border-gray-600 p-[1px]"/>
          </div>
        );
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 100,
      editable: true,
      align: "left",
      flex: 2,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 100,
      editable: true,
      align: "left",
      flex: 2,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 60,
      editable: true,
      align: "left",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "details",
      headerName: "Details",
      width: 60,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 2,
      editable:false,
      renderCell: () => SendBtn(),
    },
  ];

  function generateRow() {
    const fetchedRow = [];
    AllTeamMembers.map((member) => {
      const myRow = {
        id: member.id,
        avatar: member.image,
        lastName: member.lastName,
        firstName: member.firstName,
        age: member.age,
      };

      fetchedRow.push(myRow);
    });
    return fetchedRow;
  }

  const rows = generateRow();

  return (
    <div className="relative w-full h-full flex   justify-center items-center p-0">
      <DataGrid
        sx={{
          width: "100%",
          height: "100%",
          color: "#10564F",
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
            outline: "none"
          },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
            outline: "none"
          }
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 15 } },
        }}
        getRowHeight={() => "auto"}
        columnHeaderHeight={30}
        loading={isLoading}
        columnBuffer={0}
        pageSizeOptions={[15, 20, 30]}
        rowSelection={false}
        onCellClick={handleCellClick}
        draggable
      />
    </div>
  );
}
