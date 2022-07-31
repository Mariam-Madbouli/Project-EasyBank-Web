import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';
import SectionOne from './components/sectionOne/sectionOne';
import SectionTwo from './components/sectionTwo/sectionTwo';
import SectionThree from './components/sectionThree/sectionThree';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
      
    </div>
  );
}

export default App;
