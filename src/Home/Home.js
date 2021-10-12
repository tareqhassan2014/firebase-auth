import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import LineChart1 from '../Charts/LineCharts/LineChart1';

const Home = () => {
    return (
        <Box my={20} textAlign="center">
            <Typography variant="h1">Home page!</Typography>
            <LineChart1/>
        </Box>
    );
};

export default Home;