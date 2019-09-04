import React,{Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/appActions';

const {
    load,
    mountComponent
} = actions;

class AppList extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
            this.props.load()
    }
    handleClick= ()=>{
        this.props.mountComponent();
    }
    render(){
        return (
            <div style={{padding: "20px"}}>
                <h1>App Name</h1>
                <p>Subtext </p>
                <button onClick={this.handleClick}>Fire mount</button>
                <p>{JSON.stringify(this.props.app)}</p>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    app: state.App
})

const mapDispatchToProps = {
    load,
    mountComponent
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList)