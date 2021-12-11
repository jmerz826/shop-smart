import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewList from "./components/newList";
import Meals from "./components/meals/meals";
import PantryItems from "./components/pantry/pantryItems";
import Calendar from "./components/calendar";
import Shop from "./components/shop";

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <NewList />
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
    </Router>
  );
}

export default App;
