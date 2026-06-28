import { Edit, SimpleForm, TextInput } from "react-admin";

export const SpeakerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" label="ID" disabled />
            <TextInput source="fullName" label="Nom complet" fullWidth />
            <TextInput source="bio" label="Biographie" multiline rows={4} fullWidth />
            <TextInput source="photoUrl" label="Lien vers la photo de profil" fullWidth />
            <TextInput source="links" label="Liens (réseaux sociaux, site...)" fullWidth />
        </SimpleForm>
    </Edit>
);