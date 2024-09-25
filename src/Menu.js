import { NavLink } from "@mantine/core";
import {useNavigate} from 'react-router-dom'
import "@mantine/core/styles/NavLink.css";
export default function Menu() {
  const navigate = useNavigate()    
  return (
    <>
      <NavLink label="usuarios" onClick={()=>navigate('/user')}>
      </NavLink>        
    </>
  );
}
