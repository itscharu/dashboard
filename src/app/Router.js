import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../containers/_layout/Layout';


import NotFound404 from '../containers/default_page/404/404';

import LockScreen from '../containers/account/lock_screen/LockScreen';
import LogIn from '../containers/account/log_in/LogIn';
import LogInPhoto from '../containers/account/log_in_photo/LogInPhoto';
import Register from '../containers/account/register/Register';
import RegisterPhoto from '../containers/account/register_photo/RegisterPhoto';

import FitnessDashboard from '../containers/dashboards/fitness/FitnessDashboard';

import Ideas from '../containers/repository/Ideas';
import IdeaDetails from '../containers/repository/IdeaDetails'
import Campaigns from '../containers/repository/campaign/Campaign'


import Introduction from '../containers/documentation/01_introduction/Introduction';
import Installation from '../containers/documentation/02_installation/Installation';
import FileStructure from '../containers/documentation/03_files_structure/FileStructure';
import Components from '../containers/documentation/04_components/Components';
import Form from '../containers/documentation/05_forms/Form';
import ColorThemes from '../containers/documentation/06_change_and_add_color_themes/ColorThemes';
import NavigationItem from '../containers/documentation/07_new_navigation_item/NavigationItem';
import Resources from '../containers/documentation/08_resources/Resources';
import Changelog from '../containers/documentation/09_changelog/Changelog';


const Router = () => (
  <MainWrapper>
    <main>
      <Switch>    
        <Route exact path='/' component={LogIn}/>    
        <Route path='/404' component={NotFound404}/>
        <Route path='/lock_screen' component={LockScreen}/>
        <Route path='/log_in' component={LogIn}/>
        <Route path='/log_in_photo' component={LogInPhoto}/>
        <Route path='/register' component={Register}/>
        <Route path='/register_photo' component={RegisterPhoto}/>  
        <Route path='/' component={wrappedRoutes}/>      
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout/>
    <div className='container__wrap'>
      <Route path='/dashboard' component={FitnessDashboard}/>
      <Route path='/ideas' component={Ideas}/>
      <Route path='/idea/:idea_id' component={IdeaDetails}/>
      <Route path='/campaign' component={Campaigns}/>
      <Route path='/documentation' component={Documentation}/>
    </div>
  </div>
);

const Documentation = () => (
  <Switch>
    <Route path='/documentation/introduction' component={Introduction}/>
    <Route path='/documentation/installation' component={Installation}/>
    <Route path='/documentation/file_structure' component={FileStructure}/>
    <Route path='/documentation/components' component={Components}/>
    <Route path='/documentation/form' component={Form}/>
    <Route path='/documentation/color_themes' component={ColorThemes}/>
    <Route path='/documentation/navigation_item' component={NavigationItem}/>
    <Route path='/documentation/resources' component={Resources}/>
    <Route path='/documentation/changelog' component={Changelog}/>
  </Switch>
);

export default Router;
