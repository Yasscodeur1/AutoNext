import SectionFor from "../../components/SectionFor";
import SectionTree from "../../components/SectionTree";
import SectionTwo from "../../components/SectionTwo";
import ForwardElement from "../../components/ForwardElement";
import Carousel from "../../components/Carousel";


export default function Home() {

  return (
    <main>
      <Carousel fallbackCars={[]} />
      <ForwardElement/>
      <SectionTwo/>
      <SectionTree/>
      <SectionFor/>
    </main>
  );
}

