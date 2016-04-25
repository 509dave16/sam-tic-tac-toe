import styles from './RoundButtonGroup.scss';
import React from 'react';

const RoundButtonGroup = ({
  selected,
  buttons,
  clickHandler
}) => {
  return (
    <div className={`${styles.list} ${selected ? '' : styles.selectable}`}>
      {buttons.map((button, index) => {
        const selectedClass = selected === button ? styles.selection : '';
        return <span className={`${styles.item} ${selectedClass}`} key={index} onClick={() => clickHandler(button)}>{button}</span>
      })}
    </div>
  );

};

RoundButtonGroup.propTypes = {
  selected: React.PropTypes.string.isRequired,
  buttons: React.PropTypes.array.isRequired,
  clickHandler: React.PropTypes.func.isRequired
};

export default RoundButtonGroup;