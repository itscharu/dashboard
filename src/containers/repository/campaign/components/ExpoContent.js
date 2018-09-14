import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import { connect } from 'react-redux';


class CampaignCard extends PureComponent{
    render (){
        return(
            <Container className='dashboard'>
            <Row>
              
                <p>
                    For more information please go through <a href="https://vox.publicis.sapient.com/groups/expo-2018">this VOX Page</a>
                </p>
            </Row>
            
            </Container>
        );
        
    }

}

export default connect()(CampaignCard);