import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

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
        {isLoading ? <ImageGallery /> : <Loader />}
        <Button />
      </div>
    );
  }
}
