"use client";
import {DataGrid} from "@mui/x-data-grid";

export default function CustomToolbarGrid() {
  const rows = [
    { id: 1, col1: "1", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, col1: "2", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, col1: "3", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, col1: "4", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, col1: "5", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, col1: "6", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, col1: "7", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, col1: "8", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 9, col1: "9", col2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 10, col1: "10", col2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  ];

  const columns = [
    { field: "col1", headerName: "Number", headerClassName:"Number",headerAlign:"center",flex:1,align:"center" },
    { field: "col2", headerName: "Task",headerAlign:"center",flex:2,textAlign:"center",align:"center" },
  ];

  return (
    <div className="md:h-full md:w-4/5 h-[120px] w-[250px] flex justify-center items-center p-0">
      <DataGrid
        sx={{
            width:"100%",
            height:"100%",
            color:"#10564F",
        }}
        rows={rows}
        columns={columns}
        hideFooter={true}
        getRowHeight={() => 'auto'}
        columnHeaderHeight={25}
      />
    </div>
  );
}
