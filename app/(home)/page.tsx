// import CarouselProducts from "@/components/carousel.products";
// import HeaderProducts from "@/components/Header.products";
import SectionFor from "@/components/SectionFor";
import SectionTree from "@/components/SectionTree";
import SectionTwo from "@/components/SectionTwo";
import ForwardElement from "../../components/forward.element";
import Carousel from "@/components/Carousel";


export default function Home() {

  return (
    <main>
      {/* <HeaderProducts/> */}
      <Carousel fallbackCars={[]} />
      <ForwardElement/>

      <SectionTwo/>
      <SectionTree/>
      <SectionFor/>
      {/* <CarouselProducts/> */}
    </main>
  );
}

