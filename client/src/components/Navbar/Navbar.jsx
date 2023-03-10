import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { logOut } from '../../store/actions';

export default function Navbar() {
  const dispatch = useDispatch();

  const [activeItem, setActiveItem] = useState('homepage');

  const username = useSelector((store) => store.user?.username);

  const isAuth = useSelector((store) => store.user?.isAuth);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const handleSignOut = async () => {
    try {
      await fetch('/auth/signout', {
        credentials: 'include',
      });
      dispatch(logOut());
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <Menu inverted>
      { !isAuth ? (
        <>
          <Menu.Item
            style={{ flexGrow: 1 }}
          />
          <Menu.Item
            position="right"
            as={Link}
            to="/signin"
            name="signin"
            active={activeItem === 'signin'}
            onClick={handleItemClick}
          />
          <Menu.Item
            position="right"
            as={Link}
            to="/signup"
            name="signup"
            active={activeItem === 'signup'}
            onClick={handleItemClick}
          />
        </>
      ) : (
        <>
          <Menu.Item
            style={{ flexGrow: 1 }}
          />
          <Menu.Item
            as={Link}
            to="/profile"
            name={username}
            active={activeItem === 'profile'}
          />
          <Menu.Item
            name="signout"
            onClick={handleSignOut}
          />
        </>
      )}
    </Menu>
  );
}
