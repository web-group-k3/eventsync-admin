import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const RoomList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="location" />
            <EditButton />
        </Datagrid>
    </List>
);