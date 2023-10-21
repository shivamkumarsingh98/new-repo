import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Companant/Footer';
import Main from './Companant/Main';


function App() {

  // let productArr= [
  //   {id:1001,title:'Shoes',price:50, Instock:4},
  //   {id:1001,title:'Shirt',price:30, Instock:8},
  //   {id:1001,title:'Sicesser',price:70, Instock:6},
  //   {id:1001,title:'Shop',price:90, Instock:7},
  //   {id:1001,title:'Sadhe',price:500, Instock:8}
  // ]
  return (
    <>
      <Header />
      <Main />

      <Footer />

    </>
  );
}

export default App;
