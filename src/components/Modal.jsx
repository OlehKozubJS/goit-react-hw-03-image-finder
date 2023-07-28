import { Component } from 'react';
import ModalCSS from './styles/Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal.bind(this));
  }

  closeModal = event => {
    if (
      event.type === 'click' ||
      (event.type === 'keydown' && event.key === 'Escape')
    ) {
      this.setState({ isModal: false });
    }
  };

  render() {
    return (
      <div onClick={this.closeModal} className={ModalCSS.Overlay}>
        <div className={ModalCSS.Modal}>
          <img src={this.props.imageLink} alt="" />
        </div>
      </div>
    );
  }
}
