import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

export class ImageFinder extends Component {
  state = {
    isLoading: false,
  };

  componentDidUpdate;

  render() {
    return (
      <div>
        <Searchbar />
        {isLoading ? <ImageGallery /> : <Loader />}
        <Button />
        <Modal />
      </div>
    );
  }
}
