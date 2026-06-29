import { 
    Edit, SimpleForm, TextInput, DateTimeInput, 
    required, ReferenceInput, SelectInput, ArrayInput, SimpleFormIterator 
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const eventEditStyles = {
    padding: 4,
    maxHeight: '100%',
    '& .RaEdit-main': { boxShadow: 'none' },
    "& .MuiTable-root": { backgroundColor: "#0b0f19" }
};

export const EventEdit = () => {
    const transformEventData = (data: any) => {
        const cleanedData = { ...data };

        if (cleanedData.startDate) {
            cleanedData.startDate = new Date(cleanedData.startDate).toISOString().split('.')[0];
        }
        if (cleanedData.endDate) {
            cleanedData.endDate = new Date(cleanedData.endDate).toISOString().split('.')[0];
        }

        if (!cleanedData.sessions) {
            cleanedData.sessions = [];
        } else {
            cleanedData.sessions = cleanedData.sessions.map((session: any) => ({
                ...session,
                startTime: session.startTime ? new Date(session.startTime).toISOString().split('.')[0] : null,
                endTime: session.endTime ? new Date(session.endTime).toISOString().split('.')[0] : null,
            }));
        }

        return cleanedData;
    };

    return (
        <Edit 
            title="Edit Event"
            transform={transformEventData} 
            component={Box}
            sx={eventEditStyles}
        >
            <SimpleForm 
                sx={{
                    backgroundColor: '#111827',
                    borderRadius: '16px',
                    border: '1px solid #1f2937',
                    padding: '24px',
                    '& .MuiCardContent-root': { padding: 0 }
                }}
            >
                <Box display="flex" flexDirection="column" width="100%" gap={3}>
                    
                    <Box mb={1}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#f3f4f6' }}>
                            Modify Event & Timeline
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                            Update the main parameters and redistribute the inside sessions.
                        </Typography>
                    </Box>

                    <TextInput source="id" label="Event ID" disabled fullWidth sx={{ fontFamily: 'monospace' }} />

                    <TextInput source="title" label="Event Title" validate={[required()]} fullWidth />
                    <TextInput source="description" label="Full Description" multiline rows={3} fullWidth />
                    
                    <Box display="flex" gap={3} width="100%">
                        <DateTimeInput 
                            source="startDate" 
                            label="Start Date & Time" 
                            validate={[required()]} 
                            sx={{ flex: 1, '& .MuiInputBase-root': { backgroundColor: '#0b0f19' } }} 
                        />
                        <DateTimeInput 
                            source="endDate" 
                            label="End Date & Time" 
                            validate={[required()]} 
                            sx={{ flex: 1, '& .MuiInputBase-root': { backgroundColor: '#0b0f19' } }} 
                        />
                    </Box>

                    <TextInput 
                        source="location" 
                        label="Venue / Location" 
                        validate={[required()]} 
                        fullWidth
                        sx={{ '& .MuiInputBase-root': { backgroundColor: '#0b0f19' } }} 
                    />

                    <hr style={{ border: '0.5px solid rgba(255,255,255,0.1)', margin: '12px 0' }} />

                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#a3e635', mb: 1 }}>
                            Sessions Management
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af', mb: 2 }}>
                            You can add new sessions, fix current ones, or remove them.
                        </Typography>

                        <ArrayInput source="sessions">
                            <SimpleFormIterator 
                                inline
                                sx={{
                                    gap: 2,
                                    mb: 2,
                                    padding: '16px',
                                    backgroundColor: '#1f2937',
                                    borderRadius: '8px',
                                    '& .RaSimpleFormIterator-form': { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }
                                }}
                            >
                                <TextInput source="title" label="Session Title" fullWidth required />
                                <TextInput source="description" label="Session Description" multiline rows={2} fullWidth />
                                
                                <Box display="flex" gap={2} width="100%">
                                    <ReferenceInput source="roomId" reference="rooms">
                                        <SelectInput label="Room" optionText="name" validate={[required()]} fullWidth />
                                    </ReferenceInput>

                                    <ReferenceInput source="speakerId" reference="speakers">
                                        <SelectInput label="Speaker" optionText="fullName" validate={[required()]} fullWidth />
                                    </ReferenceInput>
                                </Box>

                                <Box display="flex" gap={2} width="100%">
                                    <DateTimeInput source="startTime" label="Heure Début" validate={[required()]} style={{ flex: 1 }} />
                                    <DateTimeInput source="endTime" label="Heure Fin" validate={[required()]} style={{ flex: 1 }} />
                                </Box>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </Box>

                </Box>
            </SimpleForm>
        </Edit>
    );
};