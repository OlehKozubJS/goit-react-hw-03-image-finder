import { Component } from 'react';
//import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
//import { Button } from './Button';
import { Loader } from './Loader';
import axios from 'axios';

export class ImageFinder extends Component {
  state = {
    isLoading: false,
    data: [],
    isError: false,
  };

  async componentDidUpdate(prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.setState({ isLoading: true });

      try {
        let articles = await axios.get(
          'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
        );
        articles = await articles.data;
        this.setState({ data: articles.filter(article => !!article.title) });
      } catch (error) {
        this.setState({ isError: true, error });
      } finally {
        this.setState({ isLoading: false });
        console.log(this.state.data);
      }
    }
  }

  render() {
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
