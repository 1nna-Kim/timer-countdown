import React, { useState } from 'react';
import { CssBaseline, Box, Container, ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import TabMode from './components/TabMode';
import Content from './components/Content';

function App() {
  const [mode, setMode] = useState<'timer' | 'countdown'>('countdown');

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='sm'
          sx={{
            boxShadow: '0px 0px 10px 4px rgba(0,0,0,0.2)',
            padding: '0!important',
          }}
        >
          <TabMode active={mode} onChange={current => setMode(current)} />
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'success.light',
            }}
          >
            <Content mode={mode} />
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
