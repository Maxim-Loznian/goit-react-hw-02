// src/components/Feedback/Feedback.jsx
import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => (
  <div className={styles.feedback}>
    <h2 className={styles.title}>Statistics</h2>
    <ul className={styles.list}>
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutral: {neutral}</li>
      <li className={styles.item}>Bad: {bad}</li>
      <li className={styles.item}>Total: {totalFeedback}</li>
      <li className={styles.item}>Positive feedback: {positiveFeedback}%</li>
    </ul>
  </div>
);

export default Feedback;
