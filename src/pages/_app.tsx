import { ThemeProvider } from 'styled-components'
import Sidebar from '../components/sections/Sidebar'
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/themes'

import { ContainerDefault, MainDefault } from './styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContainerDefault>
            <Sidebar />
          <MainDefault>
            <Component {...pageProps} />
          </MainDefault>  
        </ContainerDefault>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
