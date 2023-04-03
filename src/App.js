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

import ContentRight from './adminPanel/Contents/ContentRight';
import ContentLeft from './adminPanel/Contents/ContentLeft';
import AdminContactUs from './adminPanel/Sidebar/AdminContactUs';
import AdminServices from './adminPanel/Sidebar/AdminServices';

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
            <Route path="/AdminServices" element={<AdminServices />} />
          </Routes></main>
        </section>
        
        {/* <ContentRight /> */}
        
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
