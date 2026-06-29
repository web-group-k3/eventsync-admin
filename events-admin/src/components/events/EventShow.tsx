import { 
    Show, SimpleShowLayout, TextField, DateField, 
    ArrayField, Datagrid 
} from 'react-admin';
import { Box, Typography, Divider } from '@mui/material';

const eventShowStyles = {
    margin: "24px 0",
    "& .MuiPaper-root": {
        backgroundColor: "#111827 !important", 
        borderRadius: "24px !important",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2) !important",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "32px",
    },
    "& .RaLabeled-label": {
        color: "#9ca3af !important", 
        fontWeight: 600,
        textTransform: "uppercase",
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
        marginBottom: "6px",
    },
    "& .MuiTypography-body1": {
        color: "#f3f4f6 !important", 
        fontSize: "0.95rem",
    },
    "& .MuiTable-root": {
        backgroundColor: "#0b0f19 !important",
        borderRadius: "12px",
        borderCollapse: "separate",
        border: "1px solid rgba(255, 255, 255, 0.03)",
        overflow: "hidden",
    },
    "& .MuiTableCell-head": {
        backgroundColor: "#1f2937",
        color: "#9ca3af !important",
        fontWeight: 700,
        textTransform: "uppercase",
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
        padding: "16px",
        borderBottom: "none",
    },
    "& .MuiTableCell-body": {
        padding: "16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
        transition: "all 0.2s ease",
    },
    "& .MuiTableRow-root:hover .MuiTableCell-body": {
        backgroundColor: "rgba(163, 230, 53, 0.04)", 
    }
};

export const EventShow = () => (
    <Show 
        sx={eventShowStyles}
        title="Event Details"
        component={Box}
    >
        <SimpleShowLayout>
            <Box display="flex" flexDirection="column" gap={0.5} mb={3}>
                <Typography variant="overline" sx={{ color: '#a3e635', fontWeight: 700, letterSpacing: '0.1em' }}>
                    Live Overview
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                    Event Specifications
                </Typography>
            </Box>

            <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={3} width="100%">
                <Box display="flex" flexDirection="column" gap={2.5}>
                    <TextField source="id" label="Event Identifier" />
                    <TextField source="title" label="Event Title" />
                </Box>
                
                <Box display="flex" flexDirection="column" gap={2.5}>
                    <TextField source="location" label="Venue / Location" />
                    <Box display="flex" gap={4} width="100%">
                        <DateField source="startDate" label="Start" showTime />
                        <DateField source="endDate" label="End" showTime />
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.06)', my: 4 }} />

            <Box width="100%">
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', mb: 2 }}>
                    Timeline & Sessions
                </Typography>

                <ArrayField source="sessions" label=" ">
                    <Datagrid bulkActionButtons={false}>
                        <TextField source="title" label="Session Title" />
                        {/* On affiche ici directement les IDs techniques */}
                        <TextField source="roomId" label="Room ID" />
                        <TextField source="speakerId" label="Speaker ID" />
                        <DateField source="startTime" label="Start" showTime />
                        <DateField source="endTime" label="End" showTime />
                    </Datagrid>
                </ArrayField>
            </Box>
        </SimpleShowLayout>
    </Show>
);