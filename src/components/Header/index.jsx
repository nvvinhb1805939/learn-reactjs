import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [title, setTitle] = useState('Album');
  const handleNavLinkClick = e => {
    const newTitle = e.target.innerHTML;
    setTitle(newTitle);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <header className='header'>
      <nav className='header-nav'>
        <NavLink onClick={handleNavLinkClick} to='/album'>
          Album
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/avatar'>
          Avatar
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/colorbox'>
          Color Box
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/courses'>
          Courses
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/digital-clock'>
          Digital Clock
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/magic-box'>
          Magic Box
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/todo'>
          Todo
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/new-todo'>
          New Todo
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/posts'>
          Posts
        </NavLink>
        <NavLink onClick={handleNavLinkClick} to='/categories'>
          Categories
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
