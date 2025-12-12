// _layout.tsx
import { Slot, Stack } from 'expo-router';
import React from 'react';
import { ThemeProvider } from '../hooks/useTheme';

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Slot /> {/* This renders the child pages */}
      </Stack>
    </ThemeProvider>
  );
}
