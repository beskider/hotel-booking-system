import { theme } from 'assets/styles/colors';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
    
  );
}
