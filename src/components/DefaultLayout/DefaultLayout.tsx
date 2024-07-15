import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { SingleMovProvider } from '../../contexts/SingleMovies/SingleMovContext';
import { SeriesMovProvider } from '../../contexts/SeriesMovies/SeriesMovContext';
import { AnimationMovProvider } from '../../contexts/AnimationMovies/AnimationMovProvider';
import { TvShowsProvider } from '../../contexts/TvShows/TvShowsContext';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className='relative max-w-7xl mx-auto'>
      <TvShowsProvider>
      <AnimationMovProvider>
      <SeriesMovProvider>
      <SingleMovProvider>
        <Header/>
          <main className="bg-[#020817] text-[#fff] px-5 ">{children}</main>
        <Footer/>
      </SingleMovProvider>
      </SeriesMovProvider>
      </AnimationMovProvider>
      </TvShowsProvider>
     </div>
  );
};

export default DefaultLayout;
