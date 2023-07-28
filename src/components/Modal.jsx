import { Component } from 'react';
import ModalCSS from './styles/Modal.module.css';
import propTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleEvents.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.props.clickFunction.bind(this)
    );
  }

  handleEvents = event => {
    if (
      event.type === 'click' ||
      (event.type === 'keydown' && event.key === 'Escape')
    ) {
      this.setState({ isModal: false });
    }
  };

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
