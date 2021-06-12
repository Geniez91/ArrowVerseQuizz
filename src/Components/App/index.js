import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Bienvenue from '../Bienvenue/'
import Login from '../Login'
import Inscription from '../Inscription';
import ErrorPage from '../ErrorPage';
import MotPasseOublie from '../MotPasseOublie'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '/React/arrowversequizz/src/App.css';
import {IconContext} from 'react-icons'
import Profil from '../Profil';




function App() {
  return (
    <div className="App">
      {///Redirection dans les différentes page selon l'ur}
}
<BrowserRouter>
<IconContext.Provider value={{style:{verticalAlign:'middle'}}}>
        <Header></Header>
        <Switch>
          <Route  exact path='/' component={Landing}></Route>
          <Route path='/Bienvenue' component={Bienvenue}></Route>
          <Route path='/Login' component={Login}></Route>
          <Route path='/Inscription' component={Inscription}></Route>
          <Route path='/Profil' component={Profil}></Route>
          <Route path='/MotPasseOublie' component={MotPasseOublie}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
        <Footer></Footer>
        </IconContext.Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
