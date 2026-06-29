import {
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  required,
} from "react-admin";
import { Box, Typography } from "@mui/material";

export const EventCreate = () => {
  const transformEventData = (data: any) => {
    const cleanedData = { ...data };

    if (cleanedData.startDate) {
      cleanedData.startDate = new Date(cleanedData.startDate)
        .toISOString()
        .split(".")[0];
    }

    if (cleanedData.endDate) {
      cleanedData.endDate = new Date(cleanedData.endDate)
        .toISOString()
        .split(".")[0];
    }
    cleanedData.sessions = [];

    return cleanedData;
  };

  return (
    <Create
      title=" "
      transform={transformEventData}
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
              Create New Event
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
              Set up your event details, schedule, and location.
            </Typography>
          </Box>

          <TextInput
            source="title"
            label="Event Title"
            validate={[required()]}
            fullWidth
          />
          <TextInput
            source="description"
            label="Full Description"
            multiline
            rows={4}
            fullWidth
          />

          <Box display="flex" gap={3} width="100%">
            <DateTimeInput
              source="startDate"
              label="Start Date & Time"
              validate={[required()]}
              sx={{
                flex: 1,
                "& .MuiInputBase-root": { backgroundColor: "#0b0f19" },
              }}
            />
            <DateTimeInput
              source="endDate"
              label="End Date & Time"
              validate={[required()]}
              sx={{
                flex: 1,
                "& .MuiInputBase-root": { backgroundColor: "#0b0f19" },
              }}
            />
          </Box>

          <TextInput
            source="location"
            label="Venue / Location"
            validate={[required()]}
            fullWidth
            sx={{ "& .MuiInputBase-root": { backgroundColor: "#0b0f19" } }}
          />
        </Box>
      </SimpleForm>
    </Create>
  );
};
