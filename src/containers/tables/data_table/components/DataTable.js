import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import EditTable from '../../../../components/table/EditableTable';
import Pagination from '../../../../components/Pagination';

export default class DataTable extends PureComponent {
  
  constructor(props) {
    super(props);
    this.heads = [
      {
        key: 'id',
        name: '#',
        width: 80
      },
      {
        key: 'title',
        name: 'Title',
        sortable: true
      },
      {
        key: 'author',
        name: 'Submitted by',
        sortable: true
      },
      {
        key: 'stage',
        name: 'Stage',
        sortable: true
      },
      {
        key: 'date',
        name: 'Date',
        sortable: true
      },
      {
        key: 'campaign',
        name: 'Campaign',
        sortable: true
      },
      {
        key: 'tag',
        name: 'Tags',
        sortable: true
      }
    ];
    
    this.state = {
      rows: this.createRows(23),
      pageOfItems: []
    };
    this.createRows = this.createRows.bind(this);
    this.getRandomDate = this.getRandomDate.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  
  onChangePage(pageOfItems) {
    this.setState({pageOfItems: pageOfItems});
  }
  
  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };
  
  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows + 1; i++) {
      rows.push({
        id: i,
        title: ['First Idea', 'Second Idea  ', 'Third Idea'][Math.floor((Math.random() * 3))],
        author: ['Amit Yadav', 'Charu Agarwal  ', 'Prashant Poddar'][Math.floor((Math.random() * 3))],
        stage: ['Accepted', 'In Progress', 'Delivered'][Math.floor((Math.random() * 3))],
        date: this.getRandomDate(new Date(2018, 3, 1), new Date(2018, 9, 1)),
        campaign: ['Expo 2018', 'Ideathon 2018', 'Hackovation 2018'][Math.floor((Math.random() * 3))],
        tag: ['tech process', 'devops process', 'java performance', 'aws performance', 'process'][Math.floor((Math.random() * 5))]
      });
    }
    return rows;
  };
  
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>data table</h5>
              <h5 className='subhead'>Use table with column's option <span className='red-text'>sortable</span></h5>
            </div>
            <p>Show
              <select className='select-options'>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
              </select>
              entries
            </p>
            <EditTable heads={this.heads} rows={this.state.rows}/>
            <Pagination items={this.state.rows} onChangePage={this.onChangePage}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}