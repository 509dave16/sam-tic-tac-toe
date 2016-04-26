import React, {Component} from 'react';
import { connect } from 'react-redux'
import Cell from './../presentational/Cell';
import { markGridAction } from './../../actions/view';
import { highOrderFunctionCreator } from './../../helpers/highOrderHelpers';
import styles from './Grid.scss';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
        { this.props.grid.initialized ? this.renderGrid() : ''}
        </tbody>
      </table>
    );
  }

  renderGrid() {
    const rows = [];
    const numOfCells = this.props.grid.cells.length;
    const squareSize = this.props.grid.size;
    let rowCells = [];

    for(let cellIndex = 0; cellIndex < numOfCells; cellIndex++) {
      const cell = this.props.grid.cells[cellIndex];
      if(cellIndex % squareSize === 0) {
        rowCells = [];
        rows.push(<tr key={rows.length}>{rowCells}</tr>);
      }
      const handler = highOrderFunctionCreator(markGridAction, [this.props.present,cellIndex]);
      rowCells.push(<Cell contents={cell} clickHandler={handler} key={cellIndex}/>);
    }

    return rows;
  }
}

Grid.propTypes = {
  grid: React.PropTypes.object.isRequired
};

const mapStoreToProps = (store) => {
  return {
    'grid': store.grid
  };
};

export default connect(mapStoreToProps)(Grid);