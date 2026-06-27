import { Show, TextField, DateField, useShowContext } from 'react-admin';
import { Box, Typography, Paper, Divider } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagIcon from '@mui/icons-material/Tag';

const EventShowContent = () => {
    const { record } = useShowContext();
    
    if (!record) return null;

    return (
        <Box sx={{ maxWidth: '900px', margin: '0 auto', padding: 4 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
                <TagIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />
                <Typography variant="caption" sx={{ color: '#9ca3af', fontFamily: 'monospace', letterSpacing: 1 }}>
                    {record.id}
                </Typography>
            </Box>

            <Typography variant="h3" sx={{ fontWeight: 800, color: '#f3f4f6', mb: 3 }}>
                {record.title}
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
                        border: '1px solid #1f2937' 
                    }}
                >
                    <CalendarTodayIcon sx={{ color: '#a3ff12', fontSize: '1.1rem' }} />
                    <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 500 }}>
                        <DateField source="startDate" showTime={false} />
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
                        border: '1px solid #1f2937' 
                    }}
                >
                    <AccessTimeIcon sx={{ color: '#a3ff12', fontSize: '1.1rem' }} />
                    <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 500 }}>
                        <DateField source="startDate" label="Time" showDate={false} showTime />
                        {" - "}
                        <DateField source="endDate" label="Time" showDate={false} showTime />
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
                        border: '1px solid #1f2937' 
                    }}
                >
                    <LocationOnIcon sx={{ color: '#a3ff12', fontSize: '1.1rem' }} />
                    <Typography variant="body2" sx={{ color: '#f3f4f6', fontWeight: 500 }}>
                        <TextField source="location" />
                    </Typography>
                </Box>
            </Box>

            <Paper 
                elevation={0} 
                sx={{ 
                    backgroundColor: '#111827', 
                    borderRadius: '16px', 
                    border: '1px solid #1f2937', 
                    padding: 4 
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#f3f4f6', mb: 2 }}>
                    Description
                </Typography>
                <Divider sx={{ borderColor: '#1f2937', mb: 2 }} />
                <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                    {record.description || "No description provided for this event."}
                </Typography>
            </Paper>
        </Box>
    );
};

export const EventShow = () => (
    <Show title=" " component={Box} sx={{ '& .RaShow-main': { boxShadow: 'none' } }}>
        <EventShowContent />
    </Show>
);