import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input,Col,Button } from 'reactstrap';
class Sabiqgram extends React.Component {
  state={
    paragraph:"",
    id:0,
    likes:"",
    store:[],
    

  }

   storeDuplicate=[]

   post = () => {

     this.state.id += 1;
     let obj={}
     obj={id:this.state.id,paragraph:this.state.paragraph}
    //  this.state.obj=obj;
    // console.log("this.state.obj",this.state.obj)

     
     
     this.storeDuplicate.push(obj)
     console.log("this.state.storeDuplicate",this.storeDuplicate)
    //  this.setState({store:storeDuplicate})
     this.setState({store:this.storeDuplicate})
     
    //  console.log(this.state.store)
    // [ …this.state.store, …this.storeDulipicare ]
    
     
   }
  
  render() { 
    
    return (
      <div>
      
      <h1>Sabiqgram</h1>
      <Col md="4">

       <Input type="textarea" value={this.state.paragraph} onChange={(text)=>{this.setState({paragraph: text.target.value} )}}></Input>
    
       <Button color="primary" onClick={()=> this.post() }>POST</Button>
      </Col>
          
          {this.state.store.map(para=>{
            return <p>{para}</p>
            
          })}

    </div>
    );
  }
}
 
export default Sabiqgram;