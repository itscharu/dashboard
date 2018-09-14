import React, {PureComponent} from 'react';
import {Col, Container, Row,TabContent, TabPane, Nav, NavItem, NavLink,Button} from 'reactstrap';
import { connect } from 'react-redux';
import {deleteIdea,updateIdea} from '../../redux/actions/ideasActions'
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'
import classnames from 'classnames';

class IdeaDetails extends PureComponent {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  DetailedIdea=()=>{
      let detailedIdeas;
       if(this.props.match.params.idea_id!=undefined){
        if(this.props.ideas.length>0){
            detailedIdeas=this.props.ideas.filter((idea)=>{
                return idea.id==this.props.match.params.idea_id
            });
        }
        else{
            return <Link to={`/ideas`}>Please select an idea first</Link>
        }
        return detailedIdeas.map((detailedIdea,index)=>{
          let coAuthors=[];
            if(detailedIdea.coAuthors!=undefined){
                coAuthors= detailedIdea.coAuthors.map((coAuthor)=>{
                            return coAuthor.emailId;
                    })
            }
            return(<div key={index}>
            <Link to={`/ideas`}>Go back</Link>
            <p style={{textAlign:'right'}}><Button color="danger" size="sm" onClick={()=>{this.handleIdeaDelete(detailedIdea.id)}}>Delete</Button></p>
                <h1>{detailedIdea.subject}</h1>
                <p><i className="fa fa-user"></i>Posted by <a href="">{detailedIdea.author?detailedIdea.author.emailId:'No Author'}</a></p>
                <p><i className="fa fa-user"></i>Co-Authors <a href="">{coAuthors?coAuthors.toString():''}</a></p>
                <hr/>
                <p><i className="fa fa-calendar"></i>{`Posted on ${new Date(detailedIdea.updated).toDateString()}`}</p>
				<p><i className="fa fa-tags"></i> {`Tags: ${detailedIdea.tags?detailedIdea.tags.toString():`No tags`}`}</p>
                <hr/>
                <p>{detailedIdea.description?detailedIdea.description.toString():'No description available'}</p>
                <hr/>
                <div className="well">
                    <h4><i className="fa fa-paper-plane-o"></i> Leave a Comment:</h4>
                    <form role="form">
                        <div className="form-group">
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary"><i className="fa fa-reply"></i> Submit</button>
                    </form>
                </div>
              </div>
                )
        })       
       }
       else{
           
        return detailedIdeas=<div>No idea selected...</div>
       }   
      
  }
  handleIdeaDelete(id){
    const {deleteIdea}=this.props.actions
    deleteIdea(id);
  }
 
  render() {
    return (
      <Container className='dashboard'>
        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Idea Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Mentorship
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Repository
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Sponsorship
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="11">
               <this.DetailedIdea/>
              </Col>
              <Col>
              
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
        <div>Mentorship</div>
          </TabPane>
          <TabPane tabId="3">
        <div>Repository</div>
          </TabPane>
          <TabPane tabId="4">
        <div>Sponsorship</div>
          </TabPane>
        </TabContent>
      </div>
      </Container>    
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
    return {
      actions: bindActionCreators({    
        deleteIdea,
        updateIdea
      }, dispatch)
    };
  }

const mapStateToProps=(state)=>{
return {
    ideas:state.ideas
}
}


export default connect(mapStateToProps,mapDispatchToProps)(IdeaDetails);
