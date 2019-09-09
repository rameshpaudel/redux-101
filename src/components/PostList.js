import React,{Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/postActions';
import notificationActions from '../redux/notificationActions';

const {
    loadPost
} = actions;

const {
    loadNotification,
    loadNotificationFromRemote
} = notificationActions

class PostList extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.loadPost() // Event is being fired from here
    }
  
    render(){
        return (
            <div style={{padding: "20px"}}>
                 { this.props.posts.map((value,index)=>{
                   return (
                       <h4 key={index}>{value.company}</h4>
                   )
               })}
               <button onClick={() => this.props.loadNotification() }>Load Notification</button>
               <button onClick={() => this.props.loadNotificationFromRemote() }>AJAXX</button>
               <h1>Notifications</h1>
               {JSON.stringify(this.props.nKeys)}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    posts: state.Posts.list,
    notification: state.Notification.list,
    nKeys: state.Notification
})

const mapDispatchToProps = {
    loadPost,
    loadNotification,
    loadNotificationFromRemote
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)