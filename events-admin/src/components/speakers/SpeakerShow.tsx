import { Show, useRecordContext } from "react-admin";
import { Box, Avatar, Typography, Chip, Paper, Stack } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const speakerShowStyles = {
    "& .RaShow-card": {
        backgroundColor: "transparent !important",
        boxShadow: "none !important",
    },
    "& .RaShow-main": {
        backgroundColor: "transparent",
    },
    "& .MuiButton-textPrimary, & .MuiButton-outlinedPrimary": {
        color: "#a3e635 !important",
    },
    "& .MuiButton-textPrimary .MuiSvgIcon-root, & .MuiButton-outlinedPrimary .MuiSvgIcon-root": {
        color: "#a3e635 !important",
    },
};

// Contenu de la fiche détaillée, lit le speaker actuel via useRecordContext
const SpeakerDetail = () => {
    const record = useRecordContext();
    if (!record) return null;

    return (
        <Paper
            sx={{
                backgroundColor: "#13131a !important",
                borderRadius: "20px !important",
                border: "1px solid rgba(255,255,255,0.08)",
                p: 4,
                maxWidth: 560,
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <Avatar
                    src={record.photoUrl}
                    alt={record.fullName}
                    sx={{
                        width: 140,
                        height: 140,
                        border: "4px solid #a3e635",
                        boxShadow: "0 0 24px rgba(163, 230, 53, 0.25)",
                        fontSize: "3rem",
                        backgroundColor: "#1a1a22",
                    }}
                >
                    {record.fullName?.charAt(0)?.toUpperCase()}
                </Avatar>
            </Box>

            <Typography
                variant="h5"
                sx={{ color: "#f5f5f5", fontWeight: 800, textAlign: "center", mb: 0.5 }}
            >
                {record.fullName}
            </Typography>

            <Typography
                variant="caption"
                sx={{
                    display: "block",
                    textAlign: "center",
                    color: "#71717a",
                    mb: 3,
                }}
            >
                ID&nbsp;: {record.id}
            </Typography>

            {record.links && (
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <Chip
                        icon={<LinkIcon sx={{ fontSize: 16, color: "#a3e635 !important" }} />}
                        label={record.links}
                        component="a"
                        href={record.links}
                        target="_blank"
                        rel="noopener noreferrer"
                        clickable
                        sx={{
                            backgroundColor: "rgba(163, 230, 53, 0.12)",
                            color: "#a3e635",
                            fontWeight: 600,
                        }}
                    />
                </Box>
            )}

            <Stack spacing={1}>
                <Typography
                    variant="overline"
                    sx={{ color: "#a3e635", fontWeight: 700, letterSpacing: "0.06em" }}
                >
                    Biographie
                </Typography>
                <Typography sx={{ color: "#d4d4d8", lineHeight: 1.7 }}>
                    {record.bio || "Aucune biographie renseignée."}
                </Typography>
            </Stack>
        </Paper>
    );
};

export const SpeakerShow = () => (
    <Show title="Speaker details" sx={speakerShowStyles}>
        <SpeakerDetail />
    </Show>
);