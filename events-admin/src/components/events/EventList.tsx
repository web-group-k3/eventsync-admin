import { List, Datagrid, TextField, DateField, EditButton, ShowButton, DeleteButton, TopToolbar, CreateButton, ExportButton } from 'react-admin';
import { Box, Typography } from '@mui/material';

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
                '&:hover': { backgroundColor: '#8ce600' }
            }} 
        />
        <ExportButton variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', borderColor: '#1f2937', color: '#ffffff' }} />
    </TopToolbar>
);

export const EventList = () => (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
        <Box mb={2}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
                Events Registry
            </Typography>
            <Typography variant="body2" sx={{ color: '#9ca3af', mt: 0.5 }}>
                Review, manage, and coordinate your complete events pipeline.
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
                    margin: 0 
                },
                '& .RaList-content': { 
                    boxShadow: 'none', 
                    backgroundColor: 'transparent',
                    padding: 0,
                    margin: 0
                },
                '& .MuiToolbar-root': { 
                    padding: 0,
                    minHeight: 'auto'
                }
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
                        borderBottom: '1px solid #1f2937'
                    },
                    '& .MuiTableRow-root': {
                        backgroundColor: '#111827',
                        borderBottom: '1px solid #1f2937',
                        '&:last-child': { borderBottom: 'none' },
                        '&:hover': {
                            backgroundColor: '#1f2937 !important',
                        }
                    },
                    '& .MuiTableCell-body': {
                        padding: '14px 16px',
                        color: '#ffffff',
                        borderBottom: 'none'
                    }
                }}
            >
                <TextField source="id" label="ID" sx={{ fontFamily: 'monospace', color: '#9ca3af' }} />
                <TextField source="title" label="Event Name" sx={{ fontWeight: 700, color: '#a3ff12' }} />
                <DateField source="startDate" label="Start Date" showTime /> 
                <DateField source="endDate" label="End Date" showTime />
                <TextField source="location" label="Location" />
                
                <ShowButton sx={{ color: '#a3ff12', textTransform: 'none' }} />
                <EditButton sx={{ color: '#a3ff12', textTransform: 'none' }} />
                <DeleteButton mutationMode="pessimistic" sx={{ color: '#ef4444', textTransform: 'none' }} />
            </Datagrid>
        </List>
    </Box>
);