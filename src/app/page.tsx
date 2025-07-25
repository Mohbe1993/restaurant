import Feat from "./components/Feat";
import Offer from "./components/Offer";
import Slider from "./components/Slider";

export const metadata = {
  title: 'Restaurant',
  description: 'Arabic Food',
}
export default function Home() {

  return (
    <>
      <Slider />
      <Feat />
      <Offer />

    </>
  );
}
