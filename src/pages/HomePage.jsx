import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Home from "../components/Home";
function HomePage() {
    return (
        <div className="HomePage">
        <Header />
        <Home/>
        <Services />
        <Contact/>
        <Footer />
      </div>
        
    );
}

export default HomePage;