import { Create, SimpleForm, TextInput } from "react-admin";

export const SpeakerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Nom" fullWidth />
            <TextInput source="company" label="Entreprise" fullWidth />
            <TextInput source="bio" label="Biographie" multiline rows={4} fullWidth />
            <TextInput source="photoUrl" label="Lien vers la photo de profil" fullWidth />
        </SimpleForm>
    </Create>
);