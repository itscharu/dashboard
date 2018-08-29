import React, {PureComponent} from 'react';
import CodeHighlither from '../../../../components/CodeHighlither';
import {Card, CardBody} from 'reactstrap';
import Table from '../../../../components/table/Table';

export default class Notifications extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody>
          <div className='card__title'>
            <h5 className='bold-text'>Notifications</h5>
          </div>
          <p>Notifications are based on <a
            href='https://github.com/igorprado/react-notification-system'>react-notification-system</a>. Example of
            using this component here:</p>
          <CodeHighlither>
            {`import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';
import Notification from 'template/src/components/Notification';

export default class Example extends PureComponent {
  render() {
    return (
      <Notification title='Remember!' position='tl'
                    message='Learning day desirous informed expenses material returned six the.'>
        <Button outline>Left Up</Button>
      </Notification>
    )
  }
}`}
          </CodeHighlither>
          <p>Props of Notification (more props <a href='https://github.com/igorprado/react-notification-system'>here</a>):
          </p>
          <Table responsive className='table--bordered table--head-accent'>
            <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>position (<span className='red-text'>isRequired</span>)</td>
              <td>string</td>
              <td><span className='red-text'>'tr'</span> - top right, <span className='red-text'>'tl'</span> - top
                left, <span className='red-text'>'tc'</span> - top center (full width), <span
                  className='red-text'>'br'</span> - bottom right, <span className='red-text'>'bl'</span> - bottom left
              </td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>message</td>
              <td>string</td>
              <td>Content of notification</td>
            </tr>
            <tr>
              <td>img</td>
              <td>string</td>
              <td>Path to image</td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>You can choose one of four colors: <span className='red-text'>'info'</span>, <span
                className='red-text'>'primary'</span>, <span className='red-text'>'warning'</span> or <span
                className='red-text'>'danger'</span>
              </td>
            </tr>
            </tbody>
          </Table>
          <p>Stylesheet: <b>template/src/scss/components/notification.scss</b></p>
        </CardBody>
      </Card>
    )
  }
}