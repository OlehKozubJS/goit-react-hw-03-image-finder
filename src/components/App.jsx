import { ImageFinder } from './ImageFinder';
import ImageFinderCSS from './styles/ImageFinder.module.css';
export const App = () => {
  return (
    <div className={ImageFinderCSS.App}>
      <ImageFinder />
    </div>
  );
};
