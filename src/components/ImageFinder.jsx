import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class ImageFinder extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
