import { Edit, SimpleForm, TextInput } from "react-admin";
import { useWatch } from "react-hook-form";
import { Box, Avatar, Typography, Paper } from "@mui/material";

const speakerFormStyles = {
    "& .MuiPaper-root": {
        backgroundColor: "#13131a !important",
        borderRadius: "16px !important",
        boxShadow: "none !important",
        border: "1px solid rgba(255,255,255,0.08)",
    },
    "& .MuiFormLabel-root": { color: "#a1a1aa !important" },
    "& .MuiFormLabel-root.Mui-focused": { color: "#a3e635 !important" },
    "& .MuiInputBase-input": { color: "#f5f5f5 !important" },
    "& .MuiFilledInput-root": { backgroundColor: "#1a1a22 !important" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.15)" },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a3e635 !important",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a3e635 !important",
    },
    "& .MuiButton-containedPrimary": {
        backgroundColor: "#a3e635 !important",
        color: "#0a0a0a !important",
        borderRadius: "999px",
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0 0 12px rgba(163, 230, 53, 0.35)",
    },
    "& .MuiButton-containedPrimary:hover": {
        backgroundColor: "#bef264 !important",
        boxShadow: "0 0 18px rgba(163, 230, 53, 0.55)",
    },
};

// Aperçu de la photo en direct, basé sur la valeur actuelle du formulaire
const PhotoPreview = () => {
    const fullName: string = useWatch({ name: "fullName" }) || "";
    const photoUrl: string = useWatch({ name: "photoUrl" }) || "";

    return (
        <Paper
            sx={{
                backgroundColor: "#0a0a0f !important",
                border: "1px dashed rgba(163, 230, 53, 0.35)",
                borderRadius: "16px",
                p: 3,
                textAlign: "center",
                position: { md: "sticky" },
                top: { md: 24 },
            }}
        >
            <Typography variant="overline" sx={{ color: "#a1a1aa" }}>
                Aperçu
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                <Avatar
                    src={photoUrl || undefined}
                    sx={{
                        width: 120,
                        height: 120,
                        border: "3px solid #a3e635",
                        fontSize: "2.5rem",
                        backgroundColor: "#1a1a22",
                    }}
                >
                    {fullName?.charAt(0)?.toUpperCase() || "?"}
                </Avatar>
            </Box>
            <Typography sx={{ color: "#f5f5f5", fontWeight: 700 }}>
                {fullName || "Nom du speaker"}
            </Typography>
        </Paper>
    );
};

export const SpeakerEdit = () => (
    <Edit sx={speakerFormStyles} title="Edit Speaker">
        <SimpleForm>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 280px" },
                    gap: 4,
                    width: "100%",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextInput source="id" label="ID" disabled fullWidth />
                    <TextInput source="fullName" label="Nom complet" fullWidth />
                    <TextInput source="bio" label="Biographie" multiline rows={4} fullWidth />
                    <TextInput source="photoUrl" label="Lien vers la photo de profil" fullWidth />
                    <TextInput source="links" label="Liens (réseaux sociaux, site...)" fullWidth />
                </Box>
                <PhotoPreview />
            </Box>
        </SimpleForm>
    </Edit>
);