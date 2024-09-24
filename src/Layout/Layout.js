import { useDisclosure } from '@mantine/hooks';
import { AppShell,Burger } from "@mantine/core";
import Menu from '../Menu'
import '@mantine/core/styles/AppShell.css'
import '@mantine/core/styles/Burger.css'
import { Outlet } from 'react-router-dom';

export default function Layout(){
    const [opened, { toggle }] = useDisclosure();
    return(

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

        <AppShell.Navbar p="md">
          <Menu/>
        </AppShell.Navbar>

        <AppShell.Main>
            <Outlet/>
        </AppShell.Main>
      </AppShell>
    )
}