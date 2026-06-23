import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const EventList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <TextField source="title" label="Titre de l'événement" />
            <TextField source="description" label="Description" />
            <TextField source="startDate" label="Date de début" />
            <TextField source="endDate" label="Date de fin" />
            <TextField source="location" label="Lieu" />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);