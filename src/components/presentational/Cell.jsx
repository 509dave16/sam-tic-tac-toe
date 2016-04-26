import React, {Component} from 'react';

const Cell = ({
  contents,
  clickHandler
}) => {
    return (
      <td onClick={clickHandler}>
        {contents}
      </td>
    );
};

Cell.propTypes = {
  contents: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired
};

export default Cell