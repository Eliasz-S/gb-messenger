import './Header.styles.css';
import { NavLink } from 'react-router-dom';
import { isLinkActive } from "../utils/styles";

export const Header = () => {
    return (
        <header className='header'>
        <ul>
          <li>
            <NavLink 
              to="/"
              style={isLinkActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/chat"
              style={isLinkActive}
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile"
              style={isLinkActive}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </header>
    );
};