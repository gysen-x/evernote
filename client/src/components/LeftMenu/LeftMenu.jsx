import React, { useState } from 'react';
import {
  Menu, Icon, Dropdown,
} from 'semantic-ui-react';

import Search from '../Search/Search';

export default function LeftMenu() {
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

  return (
    <Menu
      inverted
      vertical
      style={{
        height: '80vh',
      }}
    >
      <Menu.Item>
        <Search />
      </Menu.Item>
      <Dropdown item text="Notebooks">
        <Dropdown.Menu>
          <Dropdown.Item icon="edit" text="Edit Profile" />
          <Dropdown.Item icon="globe" text="Choose Language" />
          <Dropdown.Item icon="settings" text="Account Settings" />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        <Menu.Menu>
          <Menu.Item
            name="add"
            active={activeItem === 'add'}
            onClick={handleItemClick}
          >
            <Icon
              name="book"
            />
            New notebook
          </Menu.Item>
          <Menu.Item
            name="edit"
            active={activeItem === 'edit'}
            onClick={handleItemClick}
          >
            <Icon
              name="edit"
            />
            Edit
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item
        name="browse"
        active={activeItem === 'browse'}
        onClick={handleItemClick}
      >
        <Icon name="grid layout" />
        Homepage
      </Menu.Item>
      <Menu.Item
        name="messages"
        active={activeItem === 'messages'}
        onClick={handleItemClick}
      >
        Labels
      </Menu.Item>

    </Menu>
  );
}
