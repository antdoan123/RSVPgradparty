import '../styles/globals.css'
import Form from './components/Form';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Gift from './components/Gift';
import About from './components/About';
import Footer from './components/Footer';

function MyApp() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Menu />
      <About />
      <Form />
      <Footer />
    </div>
  );
  
}

export default MyApp
