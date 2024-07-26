// src/components/Options/Options.jsx
import React from 'react';
import styles from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => (
  <div className={styles.options}>
    <h2 className={styles.title}>Please leave your feedback about our service by selecting one of the options below.</h2>
    <div className={styles.buttons}>
      <button onClick={() => updateFeedback('good')} className={styles.button}>
        Good
      </button>
      <button onClick={() => updateFeedback('neutral')} className={styles.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} className={styles.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.resetButton}>
          Reset
        </button>
      )}
    </div>
  </div>
);

export default Options;
