import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {Link} from 'react-router-dom';

const Ava1 = process.env.PUBLIC_URL + '/img/11.png';
const Ava2 = process.env.PUBLIC_URL + '/img/12.png';
const Ava3 = process.env.PUBLIC_URL + '/img/14.png';
const Ava4 = process.env.PUBLIC_URL + '/img/15.png';
const Ava5 = process.env.PUBLIC_URL + '/img/photo_notification.png';
const Ava6 = process.env.PUBLIC_URL + '/img/ava.png';

export default class TopIdeas extends PureComponent {
  render() {
    return (
      <Panel lg={5} xl={3} md={12} xs={12} title='Top Ideas'>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Idea 4</p>
            <span class="badge badge-success">Delivered</span>
          </div>
        </Link>
        <Link className='dashboard__competitor' to='/account/profile'>
        <div className='dashboard__competitor-info'>
          <p className='dashboard__competitor-name'>Idea 6</p>
          <span class="badge badge-primary">Active</span>
        </div>
      </Link>
      
</Panel>
    )
  }
}