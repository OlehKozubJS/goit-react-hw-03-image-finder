import { Component } from 'react';
import ModalCSS from './styles/Modal.module.css';
import propTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.clickFunction.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.props.clickFunction.bind(this)
    );
  }

  render() {
    return (
      <div onClick={this.props.clickFunction} className={ModalCSS.Overlay}>
        <div className={ModalCSS.Modal}>
          <img src={this.props.imageLink} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  clickFunction: propTypes.func.isRequired,
  imageLink: propTypes.string.isRequired,
};
