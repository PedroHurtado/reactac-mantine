//import { NavLink } from "@mantine/core";
import {Link} from 'react-router-dom'
import "@mantine/core/styles/NavLink.css";
export default function Menu() {
  
  return (
    <>  
      <Link to="/user">
        Usuarios
      </Link>    
    </>
  );
}
