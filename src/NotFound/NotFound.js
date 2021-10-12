import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
    return (
        <Box my={20} textAlign="center">
            <Typography variant="h1">404! <br /> Page Not Found</Typography>
        </Box>
    );
};

export default NotFound;