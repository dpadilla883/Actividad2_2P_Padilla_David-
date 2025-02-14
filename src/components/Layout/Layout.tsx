import React from 'react';
import Navbar from './Navbar';
import { Container, Box } from '@mui/material'; 

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>  
                <Container maxWidth="md" sx={{ mt: 3, flexGrow: 1}}> 
                    {children}
                </Container>
            </Box>
        </>
    );
};

export default Layout;