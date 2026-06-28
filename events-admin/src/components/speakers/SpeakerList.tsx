import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from "react-admin";

export const SpeakerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <ImageField source="photoUrl" label="Photo" />
            <TextField source="fullName" label="Nom complet" />
            <TextField source="bio" label="Biographie" />
            <TextField source="links" label="Liens" />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);