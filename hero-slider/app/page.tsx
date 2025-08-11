import HeroSlider from './components/HeroSlider';

export default function Page() {
  const images = [
    { src: '/hero/slide1.png', alt: 'slide1' },
    { src: '/hero/slide2.png', alt: 'slide2' },
    { src: '/hero/slide3.png', alt: 'slide3' },
  ];
  return (
    <>
      <HeroSlider images={images} />
      {/* 必要なら続きに説明カードなど */}
    </>
  );
}
