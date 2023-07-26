import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export class ImageFinder extends Component {
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
