import './App.css';
import AddBook from './components/Book/AddBook/AddBook';
import BookList from './components/Book/BookList/BookList'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Registration from './components/User/Registration/Registration';
import Login from './components/User/Login/Login'
function App() {
  return (
    <div className="App">
      {/* <h2>Book Keeping App</h2>
      <BookList/>
      <AddBook/> */}
      <Router>
        <Navbar/>
        <Route exact path="/"component={BookList}/>
        <Route  path="/addbook"component={AddBook}/>
        <Route  path="/books"component={BookList}/>
        <Route  path="/register"component={Registration}/>
        <Route  path="/login"component={Login}/>
      </Router>
      


    </div>
  );
}

export default App;
