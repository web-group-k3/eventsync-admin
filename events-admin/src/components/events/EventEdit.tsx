import { Edit, SimpleForm, TextInput, DateTimeInput, BooleanInput, required } from 'react-admin';
import { Box } from '@mui/material';

export const EventEdit = () => (
    <Edit title="Mettre à jour l'événement">
        <SimpleForm>
            <Box display="flex" flexDirection="column" width="100%" gap={2}>
                <TextInput source="id" disabled label="Référence Unique" />
                <TextInput source="title" label="Titre" validate={[required()]} fullWidth />
                <TextInput source="description" label="Description" multiline rows={4} fullWidth />
                
                <Box display="flex" gap={2}>
                    <DateTimeInput source="date" label="Date et Heure" validate={[required()]} sx={{ flex: 1 }} />
                    <TextInput source="location" label="Lieu" validate={[required()]} sx={{ flex: 1 }} />
                </Box>
                
                <BooleanInput source="isLive" label="Événement en Cours (Live)" />
            </Box>
        </SimpleForm>
    </Edit>
);