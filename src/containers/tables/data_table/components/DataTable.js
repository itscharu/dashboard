import React, {PureComponent} from 'react';
import {Modal, ModalHeader, ModalBody,Button} from 'reactstrap';
import UpdateIdeaForm from '../../../repository/components/UpdateIdeaForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteIdea,updateIdea} from '../../../../redux/actions/ideasActions'
import Pagination from '../../../../components/Pagination';

const campaign=['expo 2018','hackovation','expo 2019'];
const stage=['active','delivered','accepted'];
class DataTable extends React.Component {
  constructor(){
    super();
    this.state={modal: false,ideaToUpdate:{},ideas:[]}
  }
  toggle=()=>{
    this.setState({
      modal: !this.state.modal
    });
  }
  showResults=(values)=>{
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }

  handleRowClick=(idea)=>{
    const {updateIdea}=this.props.actions
  this.setState({modal:!this.state.modal})
  }

  componentWillReceiveProps(nextProps){
    this.setState({ideas:nextProps.ideas})
  }
  //ideally this should be index but right now don't have it
  handleIdeaDelete(subject){
    console.log('in delete')
    const {deleteIdea}=this.props.actions
    deleteIdea(subject);
  }
  renderData=()=>{
    let tags;
    if(this.state.ideas.length>0){
      return this.state.ideas.map((idea,index)=>{
        if(idea.tags!=null){
          tags=idea.tags.map((tag)=>{return tag.label}).toString();
        }
        else{
          tags=''
        }
        return(<React.Fragment>
        <tr onClick={()=>{this.handleRowClick(idea)}} key={index}>
        <th scope="row">{Math.floor(Math.random()*10)}</th>
        <td>{idea.subject}</td>
        <td>{idea.author}</td>
        <td>{stage[Math.floor(Math.random()*3)]}</td>
        <td>{new Date().toDateString()}</td>
        <td>{campaign[Math.floor(Math.random()*3)]}</td>
        <td>{tags}</td>
        </tr>
        <Button onClick={()=>{this.handleIdeaDelete(idea.subject)}} color="danger" size="sm">Delete</Button>
        </React.Fragment>
        )
        })
    }
    else{
     return <tr><td>No ideas available</td></tr>
    }
     
  }

  render(){
    return(<div>
   <div>{this.state.modal&&<Modal style={{maxWidth:'70%'}} isOpen={this.state.modal} toggle={this.toggle}>
   <ModalHeader toggle={this.toggle}></ModalHeader>
   <ModalBody>
   <UpdateIdeaForm onSubmit={this.showResults}/>
   </ModalBody>
 </Modal>}</div> 
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Submitted by</th>
      <th scope="col">Stage</th>
      <th scope="col">Date</th>
      <th scope="col">Campaign</th>
      <th scope="col">tags</th>
    </tr>
  </thead>
  <tbody>
{this.renderData()}
  </tbody>
</table>
</div>)
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
    ideas: state.ideas
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(DataTable);
