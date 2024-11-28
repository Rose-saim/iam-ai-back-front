import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

if (!SOCKET_URL) {
  throw new Error('Missing Socket.IO URL');
}

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  withCredentials: true,
});

// Connection management
export const connectSocket = (token: string) => {
  socket.auth = { token };
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};

// Message handlers
export const onNewMessage = (callback: (message: any) => void) => {
  socket.on('new_message', callback);
};

export const sendMessage = (message: any) => {
  socket.emit('send_message', message);
};

// Notification handlers
export const onNotification = (callback: (notification: any) => void) => {
  socket.on('notification', callback);
};

// Mission updates
export const onMissionUpdate = (callback: (update: any) => void) => {
  socket.on('mission_update', callback);
};

// Training updates
export const onTrainingUpdate = (callback: (update: any) => void) => {
  socket.on('training_update', callback);
};