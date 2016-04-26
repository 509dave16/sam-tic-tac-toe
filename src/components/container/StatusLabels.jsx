import React, {Component} from 'react'
import { connect } from 'react-redux'
import LabelKeyValue from './../presentational/LabelKeyValue';
import styles from './StatusLabels.scss';
//TODO Make this an actual ES6 Component that will accept present and use a high order function for the click handler

class StatusLabels extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.statusLabelsList}`}>
        {this.filteredStatuses()}
      </div>
    );
  }

  filteredStatuses() {
    const statuses = [];
    for(const statusKey in this.props.statuses) {
      const statusValue = this.props.statuses[statusKey];
      if(statusValue) {
        statuses.push(<LabelKeyValue key={statusKey} keyValue={statusKey} value={statusValue} />);
      }
    }
    return statuses;
  }
}


const mapStoreToProps = (store) => {
  return {
    'statuses' : {
      'Session:': store.session,
      'Player:': store.player,
      'Game Status:': store.gameStatus
    }
  };
};

export default connect(mapStoreToProps)(StatusLabels);