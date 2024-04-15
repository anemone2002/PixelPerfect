import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Portfolio  from '../components/Portfolio';
function HomePage() {
    return (
        <div className="HomePage">
        <Header />
        <Home/>
        <Services />
        <Portfolio/>
        <Contact/>
        <Footer />
      </div>
        
    );
}

export default HomePage;