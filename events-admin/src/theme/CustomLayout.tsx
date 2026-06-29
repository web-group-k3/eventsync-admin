import { Layout } from "react-admin";
import { Box } from "@mui/material";

export const CustomLayout = (props: any) => (
  <Layout
    {...props}
    sx={{
      backgroundColor: "#0b0f19",
      "& .RaLayout-content": {
        backgroundColor: "#0b0f19",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
      "& .RaLayout-appFrame": {
        backgroundColor: "#0b0f19",
      },
      "& .MuiPaper-root": {
        boxShadow: "none !important",
      },
    }}
  />
);
