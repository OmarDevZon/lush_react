import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/Home/About";
import { Aspects } from "./components/Home/Aspects";
import { ContactUs } from "./components/Home/ContactUs";
import { Banner } from "./components/Home/Hero/Banner";
import { Service } from "./components/Home/Service";
import { Navbar } from "./components/Navbar/Navbar";
import { Button } from "./utils/Button";

function App() {
  return (
    <div className="container mx-auto">
      <Button />
      <Navbar />
      <Banner />
      <Service />
      <Aspects />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
