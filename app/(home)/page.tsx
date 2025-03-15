import CarouselProducts from "@/Components/carousel.products";
import HeaderProducts from "@/Components/Header.products";
import SectionFor from "@/Components/SectionFor";
// import SectionOne from "@/Components/SectionOne";
import SectionTree from "@/Components/SectionTree";
import SectionTwo from "@/Components/SectionTwo";
import ForwardElement from "../../Components/forward.element";

export default function Home() {



  return (
    <main>
      <HeaderProducts/>
      <ForwardElement/>
      {/* <SectionOne/> */}
      <SectionTwo/>
      <SectionTree/>
      <SectionFor/>
      <CarouselProducts/>
    </main>
  );
}

