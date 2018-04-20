import React, {Component} from 'react'
// import cx from 'classnames'
// import classNames from 'classnames/bind'
import stylos from './index.css'


export default class LikeButton extends Component {
    state={
        on: true,
        totalLikes : 100,
    }

    handleClick = e=>{
        e.preventDefault()
        // this.setState(
        //     currentState=>{
        //         return {'on':!currentState.on}
        //     },
        //     ()=>{ this.props.onToggle(this.state.on) }
        // )
        this.setState(
            (currentState,props)=> ({'on': !currentState.on})

        )
    }
handleIncrement = (state,props)=>{
  return {totalLikes: state.totalLikes++ }
}
handleDecrement = (state,props)=>{
  return {totalLikes: state.totalLikes-- }
}




    render(){
        // console.log(styles);
        // console.log(this.props);
        const {totalLikes } = this.state
        console.log(stylos)
        let btnClass = cx(stylos.btn)
        console.log(btnClass);
        return(
            <div>
            <button onClick={this.handleClick}
              className={btnClass}>
                {`Like |`}
                <span> {totalLikes} </span>
            </button >
            </div>
        )
    }
}

// 
// let styles = `
// .btn {
//   background: #3498db;
//   background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
//   background-image: -moz-linear-gradient(top, #3498db, #2980b9);
//   background-image: -ms-linear-gradient(top, #3498db, #2980b9);
//   background-image: -o-linear-gradient(top, #3498db, #2980b9);
//   background-image: linear-gradient(to bottom, #3498db, #2980b9);
//   -webkit-border-radius: 28;
//   -moz-border-radius: 28;
//   border-radius: 28px;
//   font-family: Arial;
//   color: #ffffff;
//   font-size: 20px;
//   padding: 10px 20px 10px 20px;
//   text-decoration: none;
// }
//
// .btn:hover {
//   background: #3cb0fd;
//   background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
//   background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
//   background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
//   background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
//   background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
//   text-decoration: none;
// }
// `
