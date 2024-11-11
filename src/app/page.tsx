'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
import CustomButton from '@/components/CustomButton';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ minHeight: '100vh', padding: '20px' }}>
      <Typography variant="h1" align="center">
        Title
      </Typography>
      <CustomButton label="Click me" onClick={() => console.log('clicked')} />
    </Container>
  );
};

export default HomePage;
