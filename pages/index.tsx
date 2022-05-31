import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import YoutubeEmbed from '../components/utility/video-embed/YoutubeEmbed';
import AparatEmbed from '../components/utility/video-embed/AparatEmbed';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <>
    <h1>SepDek</h1>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
