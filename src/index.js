import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('brijesh'));
root.render(
    <>
<Navbar/>
<Hero/>
<CTA/>
<Pricing/>
<Team/>
<Testimonial/>
<Footer/>

</>
);