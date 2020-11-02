import React from 'react';
import * as Icon from 'react-feather';
import MessageBodyContent from './MessageBodyContent';

class ChatContentChatBody extends React.Component{
  state = {
  
    text:'',
    message:[]
  }
  onSearchSubmit = e =>{
    e.preventDefault();
    const{message} = this.state;
   message.push({msgText:this.state.text})
    this.setState({message,})
    this.setState({text:''});
    
  }
   render(){

    return(
      <div className="chat-body">
      <div className="chat-body-header">
        <div className="avatar avatar-xs avatar-online"><span className="avatar-initial rounded-circle bg-dark">g</span></div>

        <h6 className="tx-14 tx-color-01 mg-b-0 mg-l-10">George Winslett</h6>

        <div className="chat-body-options">
          <a href="" data-toggle="tooltip" title="Search messages"><Icon.Search/></a>
          <a href="" data-toggle="tooltip" title="Call"><Icon.Phone/></a>
          <a href="" data-toggle="tooltip" title="Video Call"><Icon.Video/></a>
          <a href="" data-toggle="tooltip" title="Info"><Icon.Info/></a>
        </div>
      </div>
      
        
      <MessageBodyContent messages={this.state.message}/>
     
        
      

      <div className="chat-body-footer">
        <div className="chat-body-options">
          <a href="" data-toggle="tooltip" title="Add Image"><Icon.Image/>></a>
          <a href="" data-toggle="tooltip" title="Add Gift"><Icon.Gift/></a>
          <a href="" data-toggle="tooltip" title="Add Emoticon"><Icon.Smile/></a>
        </div>
        <div className="form-group">
          <form onSubmit={this.onSearchSubmit}>
            <input type="text" class="form-control" placeholder="Type something..." value={this.state.text} onChange ={e=>this.setState({text:e.target.value})}/>
          </form>
          
        </div>
        <button className="btn btn-icon"><Icon.Send/></button>
      </div>
    </div>
  )
   }
}
export default ChatContentChatBody