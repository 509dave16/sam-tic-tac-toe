import React, {Component} from 'react';
import Cell from './Cell';
import styles from './Grid.scss';

const Grid = ({grid,
              clickHandler}) => {
  const renderGrid = () => {
    const rows = [];
    const numOfCells = grid.cells.length;
    const squareSize = grid.size;
    let rowCells = [];

    for (let cellIndex = 0; cellIndex < numOfCells; cellIndex++) {
      const cell = grid.cells[cellIndex];
      if (cellIndex % squareSize === 0) {
        rowCells = [];
        rows.push(<tr key={rows.length}>{rowCells}</tr>);
      }
      rowCells.push(<Cell contents={cell} clickHandler={() => clickHandler(cellIndex)} key={cellIndex}/>);
    }

    return rows;
  };

  return (
    <table>
      <tbody>
      { grid.initialized ? renderGrid() : ''}
      </tbody>
    </table>
  );
};

Grid.propTypes = {
  grid: React.PropTypes.object.isRequired,
  clickHandler: React.PropTypes.func.isRequired
};

export default Grid;