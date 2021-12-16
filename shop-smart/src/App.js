import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewList from "./components/lists/newList";
import Meals from "./components/meals/meals";
import PantryItems from "./components/pantry/pantryItems";
import Calendar from "./components/calendar";
import Shop from "./components/shop";
import OldLists from "./components/lists/oldLists";
import Footer from "./components/footer";
import MealsHomeDisplay from "./components/meals/mealsHomeDisplay";

function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path='/'>
            <div className="lists">
              <OldLists />
            <NewList />
            <MealsHomeDisplay />
            </div>
        </Route>
        <Route path='/meals'>
            <Meals />
        </Route>
        <Route path='/pantry'>
          <PantryItems />
        </Route>
        <Route path='/calendar'>
          <Calendar />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
