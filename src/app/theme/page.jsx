"use client"

import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Theme() {
  // State untuk menyimpan tema saat ini
  const [darkMode, setDarkMode] = useState(false);

  // Fungsi untuk mengubah tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Tema gelap dan terang
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  // Set tema saat pertama kali rendering
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Simpan tema saat terjadi perubahan
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333', padding: '20px' }}>
        <h1>Contoh Aplikasi dengan Tema Gelap/Terang</h1>
        <Button variant="contained" color="primary" onClick={toggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        <p>Ini adalah konten aplikasi yang berubah warnanya berdasarkan tema yang dipilih.</p>
      </div>
    </ThemeProvider>
  );
}

export default Theme;
