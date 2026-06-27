import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const EventList = () => (
    <List title="Events Planner">
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="id" label="ID" />
            <TextField source="title" label="Event Name" sx={{ fontWeight: 'bold', color: '#a3ff12' }} />
            <DateField source="startDate" label="Start Date" showTime /> 
            <DateField source="endDate" label="End Date" showTime />
            <TextField source="location" label="Location" />
            <EditButton sx={{ color: '#a3ff12' }} />
            
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);