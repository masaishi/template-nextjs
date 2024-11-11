'use client';

import React from 'react';
import { Button, CircularProgress } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled || isLoading}
      startIcon={
        isLoading ? <CircularProgress size={20} color="inherit" /> : startIcon
      }
      endIcon={!isLoading ? endIcon : null}
    >
      {isLoading ? 'Loading...' : label}
    </Button>
  );
};

export default CustomButton;
