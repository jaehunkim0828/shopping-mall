import type { NextPage } from 'next';

import style from '../styles/Home.module.scss';
import HomeSlide from '../components/HomeSlide';
import { slideImage } from '../fakeData';

const Home: NextPage = () => {
  return (
    <div className={style.homeContainer}>
      <HomeSlide size={400} hei={'50vw'} wid={'80vw'} images={slideImage} />
      <div>Best Items</div>
    </div>
  )
}

export default Home
