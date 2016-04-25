import React, {Component} from 'react';
import styles from './SingleInputForm.scss';

class SingleInputForm extends Component {
  constructor(props) {
    super(props);
    this.defaultInputText = props.defaultInputText ? props.defaultInputText : '';
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.submitHandler(this.refs.text.value);
    this.refs.text.value = '';
  }

  render() {
    return (
      <form className={`${styles.form}`}>
        <input  placeholder={this.defaultInputText} ref='text' type="text"/>
        <button className={`${styles.unselected}`} onClick={this.onClick}>{this.props.submitButtonText}</button>
      </form>
    );
  }
}

SingleInputForm.propTypes = {
  defaultInputText: React.PropTypes.string,
  submitButtonText: React.PropTypes.string,
  submitHandler: React.PropTypes.func.isRequired
};

export default SingleInputForm