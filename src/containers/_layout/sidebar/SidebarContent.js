import React, {PureComponent} from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {changeThemeToDark, changeThemeToLight} from '../../../redux/actions/themeActions';
import {connect} from 'react-redux';

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };
  
  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
    this.hideSidebar();
  };
  
  hideSidebar = () => {
    this.props.onClick();
  };
  
  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
                   
          <SidebarLink title='Dashboard' icon='rocket' new route='/dashboard_fitness'
                       onClick={this.hideSidebar}/>
          
          <SidebarCategory title='Layout' icon='layers'>
            <li className='sidebar__link' onClick={this.changeToLight}>
              <p className='sidebar__link-title'>Light Theme</p>
            </li>
            <li className='sidebar__link' onClick={this.changeToDark}>
              <p className='sidebar__link-title'>Dark Theme</p>
            </li>
          </SidebarCategory>

          <SidebarLink title='Campaign' icon='bullhorn' route='/campaign' onClick={this.hideSidebar}/>
          <SidebarLink title='Ideas' icon='lighter' route='/ideas' onClick={this.hideSidebar}/>

        </ul>
        
        <ul className='sidebar__block'>
          <SidebarLink title='Log Out' icon='exit' route='/log_in'/>
        </ul>
        <ul className='sidebar__block'>
          <SidebarLink title='Documentation' icon='text-align-justify' route='/documentation/introduction'
                       onClick={this.hideSidebar}/>
        </ul>
      </div>
    )
  }
}

export default connect()(SidebarContent);