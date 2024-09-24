import { MantineProvider, createTheme } from '@mantine/core';

import MetaRoutes from './MetaRoutes';

//https://mantine.dev/styles/css-files-list/

const theme = createTheme({
  /** Your theme override here */
});
function App() {  
  return (
    <MantineProvider theme={theme}>
     <MetaRoutes/>
    </MantineProvider>
  );
}

export default App;
