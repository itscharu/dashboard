import React, {PureComponent} from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const CampaignCard = (props) => {
    return (
      <div>
        <Card inverse>
          <CardImg  src={props.img} alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>            
          </CardImgOverlay>
        </Card>
      </div>
    );
  };
  
  export default CampaignCard;