import HomeContainer from "./HomeContainer";
import { CardServices } from "./CardServices";
import OurTeam from "./OurTeam";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />
      <section className="w-full my-6 mt-10">
        <CardServices />
      </section>
      <OurTeam />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainContainer;
