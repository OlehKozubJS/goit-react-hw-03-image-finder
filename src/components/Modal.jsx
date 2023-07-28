import { Component } from 'react';
import ModalCSS from './styles/Modal.module.css';
import propTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleEvents.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleEvents.bind(this));
  }

  handleEvents = event => {
    if (
      event.type === 'click' ||
      (event.type === 'keydown' && event.key === 'Escape')
    ) {
      this.props.eventFunction();
    }
  };

  render() {
    return (
      <div onClick={this.handleEvents} className={ModalCSS.Overlay}>
        <div className={ModalCSS.Modal}>
          <img src={this.props.imageLink} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  eventFunction: propTypes.func.isRequired,
  imageLink: propTypes.string.isRequired,
};
