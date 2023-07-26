import { Component } from 'react';
//import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
//import { Button } from './Button';
//import { Loader } from './Loader';
import axios from 'axios';

export class ImageFinder extends Component {
  state = {
    isLoading: false,
    data: [],
    isError: false,
  };

  async fetchImages(searchResult) {
    const searchParams = new URLSearchParams({
      key: '37447910-ed3fb6b843fd00e4ff71a16f5',
      q: searchResult,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 12,
    });

    const response = await axios.get(
      'https://pixabay.com/api/?' + searchParams
    );
    return await response.data;
  }

  async componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      this.setState({ isLoading: true });
      try {
        this.setState({ data: this.fetchImages('cat') });
      } catch (error) {
        this.setState({ isError: true, error });
      } finally {
        this.setState({ isLoading: false });
        console.log(this.state.data);
      }
    }
  }

  render() {
    console.log(this.state);
    console.log(this.fetchImages('cat'));

    return (
      <div>
        <ImageGallery imageGalleryItems={this.state.data} />
      </div>
    );
  }
}
/**
 * <Searchbar />
 * <Button />
 * <Modal />
 * 
 *         {this.state.isLoading ? (
          <ImageGallery imageGalleryItems={this.state.data} />
        ) : (
          <Loader />
        )}
 */
