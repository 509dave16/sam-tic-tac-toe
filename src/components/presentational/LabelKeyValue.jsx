import styles from './LabelKeyValue.scss';
import React from 'react';

const LabelKeyValue = ({
  keyValue,
  value
}) => {
  return (
    <div className={`${styles.pair}`}>
      <span>{keyValue}</span><span>{value}</span>
    </div>
  );
};

LabelKeyValue.propTypes = {
  keyValue: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
};

export default LabelKeyValue;