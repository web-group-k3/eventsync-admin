import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from "react-admin";

export const SpeakerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <ImageField source="photoUrl" label="Photo" />
            <TextField source="name" label="Nom" />
            <TextField source="company" label="Entreprise" />
            <TextField source="bio" label="Biographie" />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);