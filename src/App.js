import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreateContainer, Header, HomeContainer, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import { CardServices } from './components/CardServices';
import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Sidebar from './adminPanel/Sidebar/Sidebar';
import AdminContactUs from './adminPanel/Sidebar/Slider/SliderForm';
import ContentRight from './adminPanel/Contents/ContentRight';
import ContentLeft from './adminPanel/Contents/ContentLeft';
import ServicesList from './adminPanel/Sidebar/services/ServicesList';
import UpdateServices from './adminPanel/Sidebar/services/UpdateServices';
import SliderList from './adminPanel/Sidebar/Slider/SliderList';
import SliderUpdate from './adminPanel/Sidebar/Slider/SliderUpdate';
import SocialMediaList from './adminPanel/Sidebar/SocialMedia/SocialMediaList';
import SocialMediaUpdate from './adminPanel/Sidebar/SocialMedia/SocialMediaUpdate';
import TeamList from './adminPanel/Sidebar/Team/TeamList';
import TeamUpdate from './adminPanel/Sidebar/Team/TeamUpdate';

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence mode="wait">
      {/* <div className="w-screen h-auto flex flex-col bg-primary scrollbar-none"> */}
      <div className="w-full min-h-screen flex flex-row bg-primary scrollbar-none">
        {/* <Header /> */}
        <Sidebar />

        <section className="flex-1 bg-primary">
          <main className="w-full mt-14 md:mt-20 ml-16">
            <Routes>
              <Route path="/AdminContact" element={<AdminContactUs />} />
              <Route path="/AdminServices" element={<ServicesList />} />
              <Route path="/Update/:id" element={<UpdateServices />} />
              <Route path="/SliderList" element={<SliderList />} />
              <Route path="/UpdateSlider/:id" element={<SliderUpdate />} />
              <Route path="/SocialMediaList" element={<SocialMediaList />} />
              <Route path="/UpdateSocialMedia/:id" element={<SocialMediaUpdate />} />
              <Route path="/TeamList" element={<TeamList />} />
              <Route path="/UpdateTeam/:id" element={<TeamUpdate />} />
              <Route path="/Dashboard" element={<ContentLeft />} />
            </Routes>
          </main>
        </section>

        <ContentRight />

        {/* <main className="mt-14 md:mt-20 px-8 md:px-16 py-4 w-full"> */}
        {/* <main className="w-full mt-14 md:mt-20 "> */}
        {/* <HomeContainer /> */}
        {/* </main> */}
        {/* <Footer /> */}
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/Services" element={<CardServices />} />
          <Route path="/Team" element={<OurTeam />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;
