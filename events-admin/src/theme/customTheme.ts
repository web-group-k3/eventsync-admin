import { defaultTheme } from "react-admin";
import { alpha } from "@mui/material/styles";

export const customTheme = {
  ...defaultTheme,
  palette: {
    mode: "dark" as const,
    primary: {
      main: "#a3ff12",
    },
    background: {
      default: "#0b0f19",
      paper: "#111827",
    },
    text: {
      primary: "#f3f4f6",
      secondary: "#9ca3af",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: "#111827",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none" as const,
          fontWeight: 600,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: alpha("#a3ff12", 0.04),
          },
        },
      },
    },
  },
};
