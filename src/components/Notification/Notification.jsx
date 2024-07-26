// src/components/Notification/Notification.jsx
import React from 'react';
import styles from './Notification.module.css';

const Notification = () => (
  <div className={styles.notification}>
    <p className={styles.message}>No feedback given yet.</p>
  </div>
);

export default Notification;
