import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosNotifications } from 'react-icons/io';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import NotificationsLists from './NotificationsList';
import {markAllAsRead} from "../../store/notificationSlice";

// Styled component for the icon
const StyledIcon = styled(IoIosNotifications)`
    color: darkorange;
    font-size: 2em;
    margin-top: 10px;
    cursor: pointer;
`;

const Icon = () => {
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.notification);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleIconClick = (event) => {
        setAnchorEl(event.currentTarget);
        dispatch(markAllAsRead());

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Badge badgeContent={count} color="secondary">
                <StyledIcon onClick={handleIconClick} />
            </Badge>
            <NotificationsLists
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
            />
        </div>
    );
};

export default Icon;
