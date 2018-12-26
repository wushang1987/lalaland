// in src/users.js
import React from 'react';
import MyUrlField from './MyUrlField';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
           <UrlField source="website" />
          <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);