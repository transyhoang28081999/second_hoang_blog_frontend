import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Create from './components/Create/Create';
import Show from './components/Show/Show';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/blog" exact component={Posts}/>
          <Route path="/blog/create" exact component={Create}/>
          <Route path="/blog/:id" exact component={Show}/>
          <Route path="/blog/:id/edit" exact component={Edit}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
