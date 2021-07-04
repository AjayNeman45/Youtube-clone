import React, { useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/SearchScreen';
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen';

import './_app.scss'

import { Route, Switch, Redirect } from 'react-router-dom';
import ChannelScreen from './screens/channelScreen/ChannelScreen';


//this function is used as a component in below app function.
const Layout = ({ children }) =>
{

  const [sidebar, toggleSidebar] = useState(false);
 
  const handleToggleBar = () =>
  {
    toggleSidebar(value => !value)
  }

  return (
    <>
      <Header handleToggleBar={handleToggleBar} />
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          handleToggleBar={handleToggleBar}
        />
        <Container className="app__main">
          {children}
        </Container>
      </div>
    </>
  )
}

const App = () =>
{
  const {accessToken, loading} = useSelector(state=>state.auth);
  const history = useHistory();

  //redirect to the login page when there is no accesstoken
  useEffect(()=>{
    if(!loading && !accessToken) {
      history.push('/auth')
    }
    
  },[accessToken,loading,history])




  return (
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search/:query">
          <Layout>
            <SearchScreen />
          </Layout>
        </Route>
        <Route path="/watch/:id">
          <Layout>
             <WatchScreen />
          </Layout>
        </Route>
        <Route path='/feed/subscriptions'>
            <Layout>
               <SubscriptionsScreen />
            </Layout>
         </Route>
         <Route path='/channel/:channelId'>
            <Layout>
               <ChannelScreen />
            </Layout>
         </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
  )
}

export default App;
