import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  minValue,
} from "react-admin";
import { Box, Typography } from "@mui/material";

export const RoomCreate = () => (
  <Create
    title=" "
    component={Box}
    sx={{
      padding: 4,
      maxHeight: "100%",
      "& .RaCreate-main": { boxShadow: "none" },
    }}
  >
    <SimpleForm
      sx={{
        backgroundColor: "#111827",
        borderRadius: "16px",
        border: "1px solid #1f2937",
        padding: "24px",
        "& .MuiCardContent-root": { padding: 0 },
      }}
    >
      <Box display="flex" flexDirection="column" width="100%" gap={3}>
        <Box mb={1}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#f3f4f6" }}>
            Create New Room
          </Typography>
          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
            Set up a physical location for your event activities.
          </Typography>
        </Box>

        <TextInput
          source="name"
          label="Room Name"
          validate={[required()]}
          fullWidth
        />

        <TextInput
          source="adress"
          label="Address"
          validate={[required()]}
          fullWidth
        />

        <NumberInput
          source="capacity"
          label="Capacity"
          validate={[required(), minValue(1)]}
          fullWidth
          sx={{ "& .MuiInputBase-root": { backgroundColor: "#0b0f19" } }}
        />
      </Box>
    </SimpleForm>
  </Create>
);
