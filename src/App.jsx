import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import FantasyBooks from "./books/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyWelcome />
      <BookList books={FantasyBooks} />
      <MyFooter />
    </div>
  );
}

export default App;
