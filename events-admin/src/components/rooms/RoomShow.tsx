import { Show, TextField, useShowContext } from 'react-admin';
import { Box, Typography, Paper, Divider } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagIcon from '@mui/icons-material/Tag';

const RoomShowContent = () => {
    const { record } = useShowContext();

    if (!record) return null;

    return (
        <Box sx={{ maxWidth: '900px', margin: '0 auto', padding: 4 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
                <TagIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />
                <Typography
                    variant="caption"
                    sx={{ color: '#9ca3af', fontFamily: 'monospace', letterSpacing: 1 }}
                >
                    {record.id}
                </Typography>
            </Box>

            <Typography variant="h3" sx={{ fontWeight: 800, color: '#f3f4f6', mb: 3 }}>
                {record.name}
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    sx={{
                        backgroundColor: '#111827',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid #1f2937',
                    }}
                >
                    <MeetingRoomIcon sx={{ color: '#a3ff12', fontSize: '1.1rem' }} />
                    <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 500 }}>
                        Capacity: <strong>{record.capacity ?? '?'}</strong> seats
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    sx={{
                        backgroundColor: '#111827',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid #1f2937',
                    }}
                >
                    <LocationOnIcon sx={{ color: '#a3ff12', fontSize: '1.1rem' }} />
                    <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 500 }}>
                        <TextField source="adress" />
                    </Typography>
                </Box>
            </Box>

            <Paper
                elevation={0}
                sx={{
                    backgroundColor: '#111827',
                    borderRadius: '16px',
                    border: '1px solid #1f2937',
                    padding: 4,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#f3f4f6', mb: 2 }}>
                    Room Details
                </Typography>
                <Divider sx={{ borderColor: '#1f2937', mb: 2 }} />
                <Box display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                            Name
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 600 }}>
                            {record.name}
                        </Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#1f2937' }} />
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                            Address
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 600 }}>
                            {record.adress || record.address || '—'}
                        </Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#1f2937' }} />
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                            Capacity
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 600 }}>
                            {record.capacity ?? '—'} seats
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export const RoomShow = () => (
    <Show title=" " component={Box} sx={{ '& .RaShow-main': { boxShadow: 'none' } }}>
        <RoomShowContent />
    </Show>
);