import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Join}></Route>
        <Route exact path="/chat" component={Chat}></Route>
      </Router>
    </div>
  );
};

export default App;
