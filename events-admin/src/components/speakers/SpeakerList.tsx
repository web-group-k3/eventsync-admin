import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    ShowButton,
    EditButton,
    DeleteButton,
    TopToolbar,
    CreateButton,
    ExportButton,
} from "react-admin";
import { Avatar, Chip, Typography, Box } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const ListActions = () => (
    <TopToolbar>
        <CreateButton label="Add speaker" />
        <ExportButton />
    </TopToolbar>
);

// Style local appliqué uniquement à la page Speakers (n'affecte pas Events/Rooms)
const speakerListStyles = {
    "&.RaList-root": {
        backgroundColor: "transparent",
    },
    "& .MuiButton-textPrimary, & .MuiButton-outlinedPrimary": {
        color: "#a3e635 !important",
    },
    "& .MuiButton-textPrimary .MuiSvgIcon-root, & .MuiButton-outlinedPrimary .MuiSvgIcon-root": {
        color: "#a3e635 !important",
    },
    "& .RaList-content": {
        backgroundColor: "#13131a !important",
        borderRadius: "16px !important",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06) !important",
        overflow: "hidden",
    },
    "& .RaDatagrid-tableWrapper": {
        backgroundColor: "#13131a",
    },
    "& .RaDatagrid-table": {
        backgroundColor: "#13131a",
    },
    "& .RaDatagrid-headerRow": {
        backgroundColor: "#181820",
    },
    "& .RaDatagrid-headerCell": {
        color: "#a3e635 !important",
        fontWeight: 700,
        fontSize: "0.78rem",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        borderBottom: "2px solid rgba(163, 230, 53, 0.35) !important",
        py: "14px",
    },
    "& .RaDatagrid-tbody .MuiTableRow-root": {
        transition: "background-color 0.15s ease",
    },
    "& .RaDatagrid-tbody .MuiTableRow-root:hover": {
        backgroundColor: "rgba(163, 230, 53, 0.07) !important",
        cursor: "pointer",
    },
    "& .MuiTableCell-root": {
        color: "#f0f0f3 !important",
        borderBottom: "1px solid rgba(255,255,255,0.05) !important",
        py: "14px !important",
    },
    "& .RaList-title, & .RaList-title *": {
        color: "#f5f5f5 !important",
        fontWeight: 800,
    },
    "& .MuiButton-root": {
        borderRadius: "999px",
        textTransform: "none",
        fontWeight: 600,
    },
};

export const SpeakerList = () => (
    <List sx={speakerListStyles} title="Speakers" actions={<ListActions />}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <FunctionField
                label="Speaker"
                render={(record: any) => (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Avatar
                            src={record.photoUrl}
                            alt={record.fullName}
                            sx={{
                                width: 40,
                                height: 40,
                                border: "2px solid #a3e635",
                                backgroundColor: "#1a1a22",
                                fontSize: "0.95rem",
                            }}
                        >
                            {record.fullName?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        <Typography sx={{ color: "#f5f5f5", fontWeight: 600 }}>
                            {record.fullName}
                        </Typography>
                    </Box>
                )}
            />
            <FunctionField
                label="Biographie"
                render={(record: any) => (
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#a1a1aa",
                            maxWidth: 320,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {record.bio}
                    </Typography>
                )}
            />
            <FunctionField
                label="Liens"
                render={(record: any) =>
                    record.links ? (
                        <Chip
                            icon={<LinkIcon sx={{ fontSize: 14, color: "#a3e635 !important" }} />}
                            label={record.links}
                            size="small"
                            sx={{
                                backgroundColor: "rgba(163, 230, 53, 0.1)",
                                color: "#a3e635",
                                maxWidth: 180,
                                fontWeight: 500,
                            }}
                        />
                    ) : (
                        <Typography variant="body2" sx={{ color: "#52525b" }}>
                            —
                        </Typography>
                    )
                }
            />
            <TextField source="id" label="ID" sx={{ color: "#71717a !important", fontSize: "0.8rem" }} />
            <ShowButton label="Voir" />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);