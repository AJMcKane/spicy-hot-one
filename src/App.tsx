import React from 'react';
import './App.scss';
import _ from 'lodash';
import Header from './components/Header/header';
import { BrowserRouter, Route } from "react-router-dom";
import ControlPanelPage from './components/ControlPanelPage/controlpanelpage';
import Footer from 'components/Footer/footer';
import './App.scss';
import Switch from 'react-bootstrap/esm/Switch';
import LoginPage from 'components/LoginPage/loginpage';
import { Container } from 'react-bootstrap';

export class App extends React.Component {


  public render() {
    return (
      <BrowserRouter>
        <Header />         
        <Switch>
          <Container fluid={true} className="page-wrapper">               
            <Route exact path="/controlpanel" component={ControlPanelPage} />        
            <Route exact path="/login" component={LoginPage}  />
          </Container>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}


export default App;
