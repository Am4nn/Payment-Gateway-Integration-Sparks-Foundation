import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import Btn from './components/Btn/Btn';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.logo} />
      <NavBar />
      <Footer />
      <SideBar />
      <div className={classes.Btn}>
        <Btn />
      </div>
    </div>
  );
}

export default App;
