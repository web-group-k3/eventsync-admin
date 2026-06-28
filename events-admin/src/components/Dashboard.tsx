import { useGetList } from 'react-admin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Card, Box, Typography, Grid as Grid, Button, Table, TableBody, TableContainer, TableHead, Container } from '@mui/material';

export const Dashboard = () => {
    const { total: totalEvents, isLoading: loadingEvents } = useGetList('events', { pagination: { page: 1, perPage: 1 } });
    const { total: totalSessions, isLoading: loadingSessions } = useGetList('sessions', { pagination: { page: 1, perPage: 1 } });
    const { total: totalSpeakers, isLoading: loadingSpeakers } = useGetList('speakers', { pagination: { page: 1, perPage: 1 } });

    const { data: allEvents, isLoading: loadingList } = useGetList('events', {
        pagination: { page: 1, perPage: 10 },
        sort: { field: 'id', order: 'DESC' }
    });

    const today = new Date();
    const ongoingEvents = allEvents?.filter((event: any) => {
        const start = new Date(event.startDate);
        const end = event.endDate ? new Date(event.endDate) : start;
        today.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        return today >= start && today <= end;
    }) || [];

    const recentEvents = allEvents?.slice(0, 3) || [];

    return (
        <Container maxWidth={false} sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#0b0f19', minHeight: '100vh', color: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
            
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
                        Hello, <span style={{ color: '#a3ff12' }}>Admin</span>
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#9ca3af', mt: 0.5 }}>
                        Welcome to your EventSync overview.
                    </Typography>
                </Box>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />}
                    onClick={() => window.location.hash = '#/events/create'}
                    sx={{ 
                        backgroundColor: '#a3ff12', 
                        color: '#0b0f19', 
                        fontWeight: 700, 
                        borderRadius: '10px',
                        padding: '10px 20px',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#bdff42' }
                    }}
                >
                    Create Event
                </Button>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#9ca3af', letterSpacing: '0.5px' }}>
                LIVE METRICS & STATUS
            </Typography>
            <Grid container spacing={3} mb={5} alignItems="stretch">
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: 3, boxShadow: 'none', height: '100%', boxSizing: 'border-box' }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box sx={{ backgroundColor: 'rgba(163, 255, 18, 0.1)', borderRadius: '12px', p: 1.5, display: 'flex' }}>
                                <CalendarMonthIcon sx={{ color: '#a3ff12', fontSize: '2rem' }} />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600 }}>TOTAL EVENTS</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
                                    {loadingEvents ? '...' : String(totalEvents).padStart(2, '0')}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: 3, boxShadow: 'none', height: '100%', boxSizing: 'border-box' }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', p: 1.5, display: 'flex' }}>
                                <ConfirmationNumberIcon sx={{ color: '#ffffff', fontSize: '2rem' }} />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600 }}>ACTIVE SESSIONS</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
                                    {loadingSessions ? '...' : String(totalSessions).padStart(2, '0')}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: 3, boxShadow: 'none', height: '100%', boxSizing: 'border-box' }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', p: 1.5, display: 'flex' }}>
                                <GroupIcon sx={{ color: '#ffffff', fontSize: '2rem' }} />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600 }}>TOTAL SPEAKERS</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
                                    {loadingSpeakers ? '...' : String(totalSpeakers).padStart(2, '0')}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: "16px 24px", boxShadow: 'none', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
                        {loadingList ? (
                            <Typography variant="caption" sx={{ color: '#9ca3af' }}>Loading status...</Typography>
                        ) : ongoingEvents.length > 0 ? (
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box sx={{ overflow: 'hidden', pr: 1 }}>
                                    <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ONGOING NOW</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 800, color: '#ffffff', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', mt: 0.5 }}>
                                        {ongoingEvents[0].title || ongoingEvents[0].name}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, backgroundColor: 'rgba(163, 255, 18, 0.1)', px: 1.2, py: 0.6, borderRadius: '8px', flexShrink: 0 }}>
                                    <RadioButtonCheckedIcon sx={{ color: '#a3ff12', fontSize: '0.8rem', animation: 'blink 1.5s infinite alternate' }} />
                                    <Typography variant="caption" sx={{ color: '#a3ff12', fontWeight: 700, fontSize: '0.75rem' }}>LIVE</Typography>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" alignItems="center" gap={1.5}>
                                <RadioButtonCheckedIcon sx={{ color: '#9ca3af', fontSize: '1.2rem', opacity: 0.4 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600 }}>LIVE STATUS</Typography>
                                    <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 600, mt: 0.5 }}>No events today</Typography>
                                </Box>
                            </Box>
                        )}
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '20px', padding: 3, boxShadow: 'none', width: '100%', boxSizing: 'border-box' }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                Recent Registered Events
                            </Typography>
                            <Button 
                                size="small" 
                                onClick={() => window.location.hash = '#/events'}
                                sx={{ color: '#a3ff12', textTransform: 'none', fontWeight: 600 }}
                            >
                                View All Events &gt;
                            </Button>
                        </Box>

                        {loadingList ? (
                            <Typography sx={{ color: '#9ca3af', py: 2 }}>Loading pipeline data...</Typography>
                        ) : (
                            <TableContainer>
                                <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                                    <TableHead>
                                        <tr style={{ borderBottom: '1px solid #1f2937' }}>
                                            <th style={{ textAlign: 'left', padding: '12px', color: '#9ca3af', fontSize: '0.85rem', width: '45%' }}>EVENT NAME</th>
                                            <th style={{ textAlign: 'left', padding: '12px', color: '#9ca3af', fontSize: '0.85rem', width: '25%' }}>LOCATION</th>
                                            <th style={{ textAlign: 'left', padding: '12px', color: '#9ca3af', fontSize: '0.85rem', width: '18%' }}>START DATE</th>
                                            <th style={{ textAlign: 'right', padding: '12px', color: '#9ca3af', fontSize: '0.85rem', width: '12%' }}>ACTIONS</th>
                                        </tr>
                                    </TableHead>
                                    <TableBody>
                                        {recentEvents.map((event: any) => (
                                            <tr key={event.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                                                <td style={{ padding: '16px 12px', fontWeight: 600, color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {event.title || event.name || `Event #${event.id}`}
                                                </td>
                                                <td style={{ padding: '16px 12px', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {event.location || 'N/A'}
                                                </td>
                                                <td style={{ padding: '16px 12px' }}>
                                                    <span style={{ backgroundColor: 'rgba(163, 255, 18, 0.05)', color: '#a3ff12', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                                                        {event.startDate ? new Date(event.startDate).toLocaleDateString() : 'N/A'}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '16px 12px', textAlign: 'right' }}>
                                                    <Button 
                                                        size="small"
                                                        startIcon={<VisibilityIcon sx={{ fontSize: '1rem !important' }} />}
                                                        onClick={() => window.location.hash = `#/events/${event.id}/show`}
                                                        sx={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', textTransform: 'none', fontSize: '0.8rem', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                                                    >
                                                        Details
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </Card>
                </Grid>
            </Grid>

            <style>{`
                @keyframes blink {
                    0% { opacity: 0.4; }
                    100% { opacity: 1; }
                }
            `}</style>
        </Container>
    );
};