import { 
    Create, SimpleForm, TextInput, DateTimeInput, 
    required, ReferenceInput, SelectInput, ArrayInput, SimpleFormIterator,
    useNotify, useRedirect
} from 'react-admin';
import { Box, Typography } from '@mui/material';

export const EventCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const validateEventAndSessions = (values: any) => {
        const errors: any = {};

        if (!values.startDate || !values.endDate) return errors;

        const eventStart = new Date(values.startDate).getTime();
        const eventEnd = new Date(values.endDate).getTime();

        if (eventStart >= eventEnd) {
            errors.endDate = "The event must end after its start date.";
        }

        if (values.sessions && values.sessions.length > 0) {
            const sessionErrors: any[] = [];

            values.sessions.forEach((session: any, index: number) => {
                const currentSessionError: any = {};

                if (session.startTime && session.endTime) {
                    const sessionStart = new Date(session.startTime).getTime();
                    const sessionEnd = new Date(session.endTime).getTime();

                    if (sessionStart >= sessionEnd) {
                        currentSessionError.endTime = "The session must end after its start time.";
                    }
                    if (sessionStart < eventStart) {
                        currentSessionError.startTime = "The session cannot start before the event.";
                    }
                    if (sessionEnd > eventEnd) {
                        currentSessionError.endTime = "The session cannot extend past the end of the event.";
                    }
                }

                if (Object.keys(currentSessionError).length > 0) {
                    sessionErrors[index] = currentSessionError;
                }
            });

            if (sessionErrors.length > 0) {
                errors.sessions = sessionErrors;
            }
        }

        return errors;
    };

    const transformEventData = (data: any) => {
        const eventId = data.id || "evt-" + Math.random().toString(36).substring(2, 11);
        const cleanedData = { ...data, id: eventId };

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
                id: "ssn-" + Math.random().toString(36).substring(2, 11),
                title: session.title,
                description: session.description,
                startTime: session.startTime ? new Date(session.startTime).toISOString().split('.')[0] : null,
                endTime: session.endTime ? new Date(session.endTime).toISOString().split('.')[0] : null,
                guestNumber: 0,
                isLive: false,
                
                eventId: eventId, 
                
                roomId: session.roomId ? { id: session.roomId } : null,
                room: session.roomId ? { id: session.roomId } : null,
                
                speakers: session.speakerId ? [{ id: session.speakerId }] : []
            }));
        }

        return cleanedData;
    };

    const onError = (error: any) => {
        notify(error.message || 'Error: Invalid data submitted', { type: 'error' });
    };

    const onSuccess = () => {
        notify('Event created successfully', { type: 'success' });
        redirect('/events');
    };

    return (
        <Create 
            title=" "
            transform={transformEventData} 
            mutationOptions={{ onError, onSuccess }}
            component={Box}
            sx={{
                padding: 4,
                maxHeight: '100%',
                '& .RaCreate-main': { boxShadow: 'none' }
            }}
        >
            <SimpleForm 
                validate={validateEventAndSessions}
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
                            Create New Event
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                            Set up your event details, schedule, and location.
                        </Typography>
                    </Box>

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
                            Sessions Setup
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af', mb: 2 }}>
                            Add one or multiple sessions scheduled inside this event.
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
                                        <SelectInput 
                                            label="Room" 
                                            optionText="name" 
                                            validate={[required()]}
                                            fullWidth
                                        />
                                    </ReferenceInput>

                                    <ReferenceInput source="speakerId" reference="speakers">
                                        <SelectInput 
                                            label="Speaker" 
                                            optionText="fullName" 
                                            validate={[required()]}
                                            fullWidth
                                        />
                                    </ReferenceInput>
                                </Box>

                                <Box display="flex" gap={2} width="100%">
                                    <DateTimeInput source="startTime" label="Start Time" validate={[required()]} style={{ flex: 1 }} />
                                    <DateTimeInput source="endTime" label="End Time" validate={[required()]} style={{ flex: 1 }} />
                                </Box>

                            </SimpleFormIterator>
                        </ArrayInput>
                    </Box>

                </Box>
            </SimpleForm>
        </Create>
    );
};