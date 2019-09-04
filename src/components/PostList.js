import React,{Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/postActions';

const {
    loadPost
} = actions;


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
            </div>
        )
    }
}
const mapStateToProps = state =>({
    posts: state.Posts.list
})

const mapDispatchToProps = {
    loadPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)