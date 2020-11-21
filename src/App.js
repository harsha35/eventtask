import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from "./component/signin";
import SignUp from "./component/signup";
import Form from "./component/Form";
import Cards from "./component/card";
import Header from "./component/header";


class App extends React.Component {
   render() {

      return (
         <div>
            <Header />

            <BrowserRouter>
               <Switch>


                  <Route exact path="/" component={SignIn}></Route>
                  <Route exact path="/signup" component={SignUp}></Route>
                  <Route exact path="/Form" component={Form}></Route>
                  <Route exact path="/card" component={Cards}></Route>

               </Switch>
            </BrowserRouter>
            
         </div>
      );
   }

}
export default App;