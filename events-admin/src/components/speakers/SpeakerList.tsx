import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    EditButton,
    ShowButton,
    DeleteButton,
    TopToolbar,
    CreateButton,
    ExportButton,
} from "react-admin";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const ListActions = () => (
    <TopToolbar
        sx={{ gap: 1, p: 0, mb: 1, minHeight: "auto", justifyContent: "flex-end" }}
    >
        <CreateButton
            variant="contained"
            label="Create"
            sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: "#a3ff12",
                color: "#000000",
                "&:hover": { backgroundColor: "#8ce600" },
            }}
        />
        <ExportButton
            variant="outlined"
            sx={{
                borderRadius: "8px",
                textTransform: "none",
                borderColor: "#1f2937",
                color: "#ffffff",
                "&:hover": { borderColor: "#374151" },
            }}
        />
    </TopToolbar>
);

export const SpeakerList = () => (
    <Box
        sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 0",
        }}
    >
        <Box mb={2}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px" }}
            >
                Speakers Registry
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af", mt: 0.5 }}>
                Review, manage, and coordinate your complete speakers pipeline.
            </Typography>
        </Box>

        <List
            actions={<ListActions />}
            title=" "
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                "& .RaList-main": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    margin: 0,
                },
                "& .RaList-content": {
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                    margin: 0,
                },
                "& .MuiToolbar-root": {
                    padding: 0,
                    minHeight: "auto",
                },
            }}
        >
            <Datagrid
                rowClick="edit"
                bulkActionButtons={false}
                sx={{
                    backgroundColor: "#111827",
                    border: "1px solid #1f2937",
                    borderRadius: "12px",
                    overflow: "hidden",
                    "& .MuiTableCell-head": {
                        backgroundColor: "#111827",
                        color: "#9ca3af",
                        fontWeight: 700,
                        padding: "14px 16px",
                        borderBottom: "1px solid #1f2937",
                    },
                    "& .MuiTableRow-root": {
                        backgroundColor: "#111827",
                        borderBottom: "1px solid #1f2937",
                        "&:last-child": { borderBottom: "none" },
                        "&:hover": {
                            backgroundColor: "#1f2937 !important",
                        },
                    },
                    "& .MuiTableCell-body": {
                        padding: "14px 16px",
                        color: "#ffffff",
                        borderBottom: "none",
                        verticalAlign: "middle",
                    },
                }}
            >
                <TextField
                    source="id"
                    label="ID"
                    sx={{ fontFamily: "monospace", color: "#9ca3af" }}
                />

                <FunctionField
                    label="Speaker"
                    render={(record: any) => (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Avatar
                                src={record.photoUrl}
                                alt={record.fullName}
                                sx={{
                                    width: 36,
                                    height: 36,
                                    border: "2px solid #a3ff12",
                                    backgroundColor: "#1f2937",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}
                            >
                                {record.fullName?.charAt(0)?.toUpperCase()}
                            </Avatar>
                            <Typography sx={{ fontWeight: 700, color: "#a3ff12", fontSize: "14px" }}>
                                {record.fullName}
                            </Typography>
                        </Box>
                    )}
                />

                <FunctionField
                    label="Biography"
                    render={(record: any) => (
                        <Typography
                            sx={{
                                color: "#9ca3af",
                                fontSize: "14px",
                                maxWidth: 350,
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                lineHeight: 1.5,
                            }}
                        >
                            {record.bio || "—"}
                        </Typography>
                    )}
                />

                <FunctionField
                    label="Links"
                    render={(record: any) =>
                        record.links ? (
                            <Chip
                                icon={<LinkIcon sx={{ fontSize: "14px !important", color: "#a3ff12 !important" }} />}
                                label={record.links}
                                size="small"
                                sx={{
                                    backgroundColor: "rgba(163,255,18,0.08)",
                                    color: "#a3ff12",
                                    border: "1px solid rgba(163,255,18,0.2)",
                                    borderRadius: "6px",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    maxWidth: 200,
                                }}
                            />
                        ) : (
                            <Typography sx={{ color: "#4b5563", fontSize: "14px" }}>
                                —
                            </Typography>
                        )
                    }
                />

                <ShowButton sx={{ color: "#a3ff12", textTransform: "none" }} />
                <EditButton sx={{ color: "#a3ff12", textTransform: "none" }} />
                <DeleteButton
                    mutationMode="pessimistic"
                    sx={{ color: "#ef4444", textTransform: "none" }}
                />
            </Datagrid>
        </List>
    </Box>
);

