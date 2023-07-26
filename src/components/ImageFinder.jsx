import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export class ImageFinder extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      fetch();
    }
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}
