import React, {PureComponent} from 'react';
import {Card, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import Campaigns from './Campaigns';
import TabContext from './tabContext';

export default class Campaign extends PureComponent {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      toggleTab:this.toggle,
    };
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    return (
        <TabContext.Provider value={this.state}>
      <Col md={12} lg={12} xl={8}>
        <Card>
          <div className='profile__card tabs tabs--bordered-bottom'>
            <div className='tabs__wrap'>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '1'})}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '2'})}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    Expo 2018
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '3'})}
                    onClick={() => {
                      this.toggle('3');
                    }}
                  >
                    Hackovation 2.0
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId='1'>
                  <Campaigns/>
                </TabPane>
                <TabPane tabId='2'>
                  <h5>Expo 2018 content </h5>
                </TabPane>
                <TabPane tabId='3'>
                  <h5>content for hackovation</h5> 
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Card>
      </Col>
      </TabContext.Provider>
    )
  }
}