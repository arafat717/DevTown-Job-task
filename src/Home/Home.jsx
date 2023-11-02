import Card from "../components/Card/Card";
import LargerFooter from "../components/Footer/LargerFooter";
import Navbar from "../components/Navbar/NavbarWrapper";
// import ProductUI from "../components/ShortAndFilter/ProductUI";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Card></Card>
           <LargerFooter></LargerFooter>
        </div>
    );
};

export default Home;