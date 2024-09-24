import { useDisclosure } from '@mantine/hooks';
import { AppShell,Burger } from "@mantine/core";
import { createTheme, MantineProvider } from "@mantine/core";

//import '@mantine/core/styles.css';

import '@mantine/core/styles/AppShell.css'
import '@mantine/core/styles/Burger.css'

//https://mantine.dev/styles/css-files-list/

const theme = createTheme({
  /** Your theme override here */
});
function App() {

  const [opened, { toggle }] = useDisclosure();
  // Navbar and Header will not be rendered when hidden prop is set
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
