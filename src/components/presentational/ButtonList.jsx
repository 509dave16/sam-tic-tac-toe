import React, {Component} from 'react';
import styles from './ButtonList.scss';

const ButtonList = ({buttons}) => {
  return (
    <div className={`${styles.list}`}>
      {
        buttons.map((button, index) => {
          if(button.show) {
            return <button onClick={button.clickHandler} key={index}>{button.name}</button>
          }
        })
      }
    </div>
  );
};

ButtonList.propTypes = {
  buttons: React.PropTypes.array.isRequired
};

export default ButtonList;
