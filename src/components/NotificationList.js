import React, { Component } from 'react'
import { connect } from 'react-redux'
class NotificationList extends Component {
    render() {
        return (
            <div style={{display:"flex", flexDirection: "row", overflowX: "scroll"}}>
                {this.props.notifications.map((value,index)=>{
                    return(
                        <div style={{flexDirection:"column" }}>
                            <img src={value.image} style={{width: "100px", height: "auto"}}/>
                            <a href={value.link}>Click here</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}



export default connect(
    state=>({
        notifications: state.Notification.catImages
    }),
    {

    }
)(NotificationList);