import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  minValue,
} from "react-admin";
import { Box, Typography } from "@mui/material";

export const RoomEdit = () => (
  <Edit
    title=" "
    component={Box}
    sx={{
      padding: 4,
      maxHeight: "100%",
      "& .RaEdit-main": { boxShadow: "none" },
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
            Edit Room
          </Typography>
          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
            Update the room details and capacity.
          </Typography>
        </Box>

        <TextInput source="id" label="ID" disabled fullWidth />

        <TextInput
          source="name"
          label="Room Name"
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
  </Edit>
);
