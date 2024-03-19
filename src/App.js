import Navbar from './components/Navbar';
import Popular  from './components/popular';
import Saleimage from './components/Saleimages';
import Topics from './components/Topics';
import Categories from './components/Categories';
import Footer from './components/Footer';


function App(){
  return(
    <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimage></Saleimage>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
    </div>
  )
}
export default App