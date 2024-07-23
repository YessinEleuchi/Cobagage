import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

const NotificationsLists = ({ anchorEl, open, handleClose }) => {
    const { notifications } = useSelector(state => state.notification);


    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    maxHeight: 300,
                    width: '20ch',
                },
            }}
        >
            {notifications.length > 0 && notifications.map(notification => (
                <MenuItem key={notification.id}>
                    <div>
                        <strong>{notification.message.title}</strong>
                        <div>{notification.message.body}</div>
                    </div>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default NotificationsLists;