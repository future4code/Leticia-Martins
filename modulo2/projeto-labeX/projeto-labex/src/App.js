import React from 'react'
import {AdminHomePage} from './pages/AdminHomePage'
import {HomePage} from './pages/HomePage'
import {LoginPage} from './pages/LoginPage'
import {ListTripsPage} from './pages/ListTripsPage'
import {ApplicationFormPage} from './pages/ApplicationFormPage'
import {TripDetailsPage} from './pages/TripDetailsPage'
import {CreateTripPage} from './pages/CreateTripPage'
import {BrowserRouter, Switch, Route} from 'react'


function App() {
  return (
    <BrowserRouter>
      <Switch>
      
  
      <Route exact path = {"/"}>
        <HomePage/>
      </Route>

      <Route exact path = {"/ListTripsPage"}>
        <ListTripsPage/>
      </Route>

      <Route exact path = {"/ApplicationFormPage"}>
        <ApplicationFormPage/>
      </Route>

      <Route exact path = {"/LoginPage"}>
        <LoginPage/>
      </Route>
      
      <Route exact path = {"/AdminHomePage"}>
        <AdminHomePage/>
      </Route>

      <Route exact path = {"/TripDetailsPage"}>
        <TripDetailsPage/> 
      </Route>

      <Route exact path = {"/CreateTripPage"}>
        <CreateTripPage/>
      </Route>
      
           
      </Switch>
        </BrowserRouter>

    )


}

export default App




