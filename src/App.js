import './App.css';
import AllTheBooks from './AllTheBooks.jsx';
import MyFooter from './MyFooter.jsx';
import MyNav from './MyNav.jsx';
import Welcome from './Welcome.jsx';

function App() {
  return (
    <div>
        <Welcome/>
        <MyNav/>
        <AllTheBooks/>
        <MyFooter/>
   </div>
  );
}

export default App;
