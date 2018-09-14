import React from 'react';
import {Modal, ModalHeader, ModalBody,Button,Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import UpdateIdeaForm from '../../../repository/components/UpdateIdeaForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllIdeas,deleteIdea,updateIdea} from '../../../../redux/actions/ideasActions'
import Pagination from '../../../../components/Pagination';

class DataTable extends React.Component {
  constructor(){
    super();
    this.state={modal: false,ideaToUpdate:{},ideas:[]}
  }
  componentWillMount(){
    const {getAllIdeas}=this.props.actions;
    getAllIdeas();
  }
  toggle=()=>{
    this.setState({
      modal: !this.state.modal
    });
  }
  showResults=(values)=>{
    console.log(values)
    const {updateIdea}=this.props.actions
    if(values.tags!=undefined)
    values.tags=values.tags.map(tag => {
      return tag.label
    });
    if(values.coAuthors!=undefined){
      values.coAuthors=values.coAuthors.split(/\s*,\s*/)
      values.coAuthors=values.coAuthors.map((coAuthor)=>{
        return {
          'emailId':coAuthor
        }
      })
    }
    if(values.mentors!=undefined){
    values.mentors=values.mentors.split(/\s*,\s*/)
    values.mentors=values.mentors.map((mentor)=>{
      return {
        'emailId':mentor
      }
    })
  }
  if(values.gitRepos!=undefined){
  values.gitRepos=values.gitRepos.split(/\s*,\s*/)
  values.gitRepos=values.gitRepos.map((gitRepo)=>{
    return gitRepo
  })
}
  if(values.sponsors!=undefined){
  values.sponsors=values.sponsors.split(/\s*,\s*/)
  values.sponsors=values.sponsors.map((sponsor)=>{
    return {
      'emailId':sponsor
    }
  })
}
  updateIdea(values);
  this.toggle();
  }

  handleRowClick=(ideaToUpdate)=>{   
    if(ideaToUpdate.coAuthors!=undefined){
      ideaToUpdate.coAuthors=ideaToUpdate.coAuthors.map((coAuthor)=>{
        return coAuthor.emailId;
      })
    }
    this.setState({modal:!this.state.modal,ideaToUpdate})
  }

  componentWillReceiveProps(nextProps){
    this.setState({ideas:nextProps.ideas})
  }
  //ideally this should be index but right now don't have it
  handleIdeaDelete(id){
    const {deleteIdea}=this.props.actions
    deleteIdea(id);
  }
  RenderData=()=>{
    let coAuthors=[];
    if(this.state.ideas.length>0){
      return this.state.ideas.map((idea,index)=>{
       console.log(idea)
       if(idea.coAuthors!=undefined){
         coAuthors=idea.coAuthors.map((coAuthor)=>{
           return coAuthor.emailId;
         })
       }
       
        return(<React.Fragment key={index}>
      <Col sm={6} md={4} lg={4}>
      <Card body outline color="danger">
        <CardBody>
          <CardTitle style={{fontWeight:'bolder'}}>{idea.subject}</CardTitle>
          <CardSubtitle style={{fontStyle:'italic'}}>{idea.author?idea.author.emailId:'No Author'}</CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{idea.description?idea.description.toString().substring(0,100):'No description available'}</CardText>
          <Link  to={`/idea/${idea.id}`}>Details</Link>
        </CardBody>
      </Card>
      </Col>   
        </React.Fragment>
        )
        })
    }
    else{
     return <React.Fragment>No ideas available</React.Fragment>
    }
     
  }

  render(){
    return(<div>
   <div>{this.state.modal&&<Modal style={{maxWidth:'70%'}} isOpen={this.state.modal} toggle={this.toggle}>
   <ModalHeader toggle={this.toggle}></ModalHeader>
   <ModalBody>
   <UpdateIdeaForm initialValues={this.state.ideaToUpdate} onSubmit={this.showResults}/>
   </ModalBody>
 </Modal>}</div> 
    <Row><this.RenderData/></Row>
    

</div>)
  }
  
}
const mapDispatchToProps=(dispatch)=>{
  return {
    actions: bindActionCreators({
      getAllIdeas,
      deleteIdea,
      updateIdea
    }, dispatch)
  };
}
const mapStateToProps=(state)=>{
  console.log(state)
  return {
    ideas: state.ideas
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(DataTable);
