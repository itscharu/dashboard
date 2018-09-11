import React, {PureComponent} from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import TabContext from '../tabContext';
import { connect } from 'react-redux';


class CampaignCard extends PureComponent{
    render (){
        return(
            <TabContext.Consumer>
            {({activeTab,toggleTab})=>(
              <div onClick={()=>
                toggleTab(this.props.tabId)}>
               <Card inverse>         
                    <CardImg  src={this.props.img} alt="Card image cap" />
                   
            
            
                <CardImgOverlay>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.text}</CardText>            
                </CardImgOverlay>
            </Card>
           </div>
         )}
         </TabContext.Consumer>
        );
        
    }

}

export default connect()(CampaignCard);