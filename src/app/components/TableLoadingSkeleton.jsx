import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function TableLoadingSkeleton() {
  return (
    <Box
      sx={{
        height: "100%",
        width:"100%"
      }}
    >
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
    </Box>
  );
}

export default TableLoadingSkeleton;
