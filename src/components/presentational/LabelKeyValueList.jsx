import React, {Component} from 'react'
import LabelKeyValue from './LabelKeyValue';
import styles from './LabelKeyValueList.scss';

const LabelKeyValueList = ({keyValuePairs}) => {
  const filteredKeyValuePairs = () => {
    const list = [];
    for(const key in keyValuePairs) {
      const value = keyValuePairs[key];
      if(value) {
        list.push(<LabelKeyValue key={key} keyValue={key} value={value} />);
      }
    }
    return list;
  };

  return (
    <div className={`${styles.list}`}>
      {filteredKeyValuePairs()}
    </div>
  );
};

LabelKeyValueList.propTypes = {
  keyValuePairs: React.PropTypes.object.isRequired
};

export default LabelKeyValueList;
