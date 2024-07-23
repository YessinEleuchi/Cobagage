// src/store/notificationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notifications: [], // List of notifications
        count: 0, // Number of unread notifications
    },
    reducers: {
        showNotification: (state, action) => {
            state.notifications.push({
                id: new Date().getTime(), // Unique ID for each notification
                message: action.payload,
                read: false,
            });
            state.count += 1; // Increase count for unread notifications
        },
        markAllAsRead: (state) => {
            // Mark all notifications as read
            state.notifications = state.notifications.map(notification => ({
                ...notification,
                read: true
            }));
            state.count = 0; // Reset count
        },

    },
});

export const { showNotification, markAllAsRead, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
