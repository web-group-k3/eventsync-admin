import { Edit, SimpleForm, TextInput } from "react-admin";

export const SpeakerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" label="ID" disabled />
            <TextInput source="name" label="Nom" fullWidth />
            <TextInput source="company" label="Entreprise" fullWidth />
            <TextInput source="bio" label="Biographie" multiline rows={4} fullWidth />
            <TextInput source="photoUrl" label="Lien vers la photo de profil" fullWidth />
        </SimpleForm>
    </Edit>
);