import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import axios from 'axios';

export class ImageFinder extends Component {
  state = {
    isLoading: false,
  };

  async componentDidUpdate() {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.setState({ isLoading: true });

      try {
        const articles = await axios.get();
      } catch (error) {
        this.setState({ isError: true, error });
      } finally {
        this.setState({ isLoading: true });
      }
    }
  }

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
