import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    ShowButton,
    EditButton,
    DeleteButton,
    TopToolbar,
    CreateButton,
    ExportButton,
} from 'react-admin';
import { Box, Typography, Chip } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ListActions = () => (
    <TopToolbar sx={{ gap: 1, p: 0, mb: 1, minHeight: 'auto', justifyContent: 'flex-end' }}>
        <CreateButton
            variant="contained"
            sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#a3ff12',
                color: '#000000',
                '&:hover': { backgroundColor: '#8ce600' },
            }}
        />
        <ExportButton
            variant="outlined"
            sx={{ borderRadius: '8px', textTransform: 'none', borderColor: '#1f2937', color: '#ffffff' }}
        />
    </TopToolbar>
);

export const RoomList = () => (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
        <Box mb={2}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
                Rooms Registry
            </Typography>
            <Typography variant="body2" sx={{ color: '#9ca3af', mt: 0.5 }}>
                Manage physical locations and venues for your events.
            </Typography>
        </Box>

        <List
            actions={<ListActions />}
            title=" "
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '& .RaList-main': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    margin: 0,
                },
                '& .RaList-content': {
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                    padding: 0,
                    margin: 0,
                },
                '& .MuiToolbar-root': {
                    padding: 0,
                    minHeight: 'auto',
                },
            }}
        >
            <Datagrid
                rowClick="show"
                bulkActionButtons={false}
                sx={{
                    backgroundColor: '#111827',
                    border: '1px solid #1f2937',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    '& .MuiTableCell-head': {
                        backgroundColor: '#111827',
                        color: '#9ca3af',
                        fontWeight: 700,
                        padding: '14px 16px',
                        borderBottom: '1px solid #1f2937',
                    },
                    '& .MuiTableRow-root': {
                        backgroundColor: '#111827',
                        borderBottom: '1px solid #1f2937',
                        '&:last-child': { borderBottom: 'none' },
                        '&:hover': {
                            backgroundColor: '#1f2937 !important',
                        },
                    },
                    '& .MuiTableCell-body': {
                        padding: '14px 16px',
                        color: '#ffffff',
                        borderBottom: 'none',
                    },
                }}
            >
                <TextField
                    source="id"
                    label="ID"
                    sx={{ fontFamily: 'monospace', color: '#9ca3af' }}
                />
                <TextField
                    source="name"
                    label="Room Name"
                    sx={{ fontWeight: 700, color: '#a3ff12' }}
                />
                <FunctionField
                    label="Address"
                    render={(record: any) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />
                            <Typography variant="body2" sx={{ color: '#d1d5db' }}>
                                {record.adress || record.address || '—'}
                            </Typography>
                        </Box>
                    )}
                />
                <FunctionField
                    label="Capacity"
                    render={(record: any) => (
                        <Chip
                            icon={<MeetingRoomIcon sx={{ fontSize: 14, color: '#a3ff12 !important' }} />}
                            label={`${record.capacity ?? '?'} seats`}
                            size="small"
                            sx={{
                                backgroundColor: 'rgba(163, 255, 18, 0.1)',
                                color: '#a3ff12',
                                fontWeight: 600,
                            }}
                        />
                    )}
                />
                <ShowButton sx={{ color: '#a3ff12', textTransform: 'none' }} />
                <EditButton sx={{ color: '#a3ff12', textTransform: 'none' }} />
                <DeleteButton mutationMode="pessimistic" sx={{ color: '#ef4444', textTransform: 'none' }} />
            </Datagrid>
        </List>
    </Box>
);