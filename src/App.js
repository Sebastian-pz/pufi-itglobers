import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Sections from './components/Sections/Sections';
import Collage from './components/Collage/Collage';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <Sections />
        <Collage />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
