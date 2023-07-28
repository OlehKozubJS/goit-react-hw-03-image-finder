import { Component } from 'react';
import ModalCSS from './styles/Modal.module.css';

export class Modal extends Component {
  state = {
    isModal: true,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModal.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal.bind(this));
  }

  render() {
    return (
      this.state.isModal && (
        <div onClick={this.closeModal} className={ModalCSS.Overlay}>
          <div className={ModalCSS.Modal}>
            <img src={this.props.imageLink} alt="" />
          </div>
        </div>
      )
    );
  }
}
