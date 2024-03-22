import NavBar from './Components/Navbar'
import worship from './Components/assets/worship1.jpg'
import { motion } from "framer-motion";
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ backgroundImage: `url(${worship})`, height:'90vh', backgroundSize:'cover',backgroundPosition: 'center' }} className='d-flex align-items-center justify-content-center text-light'><motion.h1 initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='fontSize jomhuria-regular'>Heart of Worship</motion.h1></div>
    </div>
  );
}

export default App;
