import React, {PureComponent} from 'react';
import LogInForm from './components/LogInForm';
import {Link} from 'react-router-dom';


export default class LogIn extends PureComponent {
  
  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
            <div className='account__head'>
              <h3 className='account__title'><span className='account__logo'>Ideate2<span
                className='account__logo-accent'>Innovate</span></span></h3>
              <h4 className='account__subhead subhead'>Spark your creativity</h4>
            </div>
            <LogInForm onSubmit/>        
            
          </div>
        </div>
      </div>
    )
  }
}