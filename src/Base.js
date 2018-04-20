import React, {Component} from 'react'
import cx from 'classnames'
// import  stylo from  './index.css'



export default class BaseComponent extends Component {
  state={
    counter: 150,
    clicked: false
  }

//this will take care of the main
  handleClick = ()=>{
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
      this.handleTwoClick()
    } else {
      this.timeout = setTimeout(() => {
        this.handleOneClick()
        this.timeout = null
      }, 200)
    }

  }

  toggleClicked = (state, props)=>{
    return {clicked: true, counter: state.counter + 1}
  }

  handleOneClick = ()=>this.setState(this.toggleClicked)

  doubleClick = (state, props)=>{
    return {counter: state.counter - 1, clicked: false}
    // return {counter: state.counter - 1 }
  }

  handleTwoClick = ()=> this.setState(this.doubleClick)
  render() {
    let misClases = cx('btn',{btnred:this.state.clicked})
    // setInterval(()=>console.log('uno '),2000)
    return (
        <div>
        <style dangerouslySetInnerHTML={{__html:`
          .btn {
            background: #3498db;
            background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
            background-image: -moz-linear-gradient(top, #3498db, #2980b9);
            background-image: -ms-linear-gradient(top, #3498db, #2980b9);
            background-image: -o-linear-gradient(top, #3498db, #2980b9);
            background-image: linear-gradient(to bottom, #3498db, #2980b9);
            -webkit-border-radius: 28;
            -moz-border-radius: 28;
            border-radius: 28px;
            font-family: Arial;
            color: #ffffff;
            font-size: 20px;
            padding: 10px 20px 10px 20px;
            text-decoration: none;
          }
          .btn:hover {
            background: #3cb0fd;
            background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
            background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
            background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
            background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
            background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
            text-decoration: none;
          }

          .btnred {
            background: #d93434;
            background-image: -webkit-linear-gradient(top, #d93434, #b82b2b);
            background-image: -moz-linear-gradient(top, #d93434, #b82b2b);
            background-image: -ms-linear-gradient(top, #d93434, #b82b2b);
            background-image: -o-linear-gradient(top, #d93434, #b82b2b);
            background-image: linear-gradient(to bottom, #d93434, #b82b2b);
            -webkit-border-radius: 28;
            -moz-border-radius: 28;
            border-radius: 28px;
            font-family: Courier New;
            color: #ffffff;
            font-size: 20px;
            padding: 10px 20px 10px 20px;
            text-decoration: none;
          }

          .btnred:hover {
            background: #fc3c3c;
            background-image: -webkit-linear-gradient(top, #fc3c3c, #d93434);
            background-image: -moz-linear-gradient(top, #fc3c3c, #d93434);
            background-image: -ms-linear-gradient(top, #fc3c3c, #d93434);
            background-image: -o-linear-gradient(top, #fc3c3c, #d93434);
            background-image: linear-gradient(to bottom, #fc3c3c, #d93434);
            text-decoration: none;
          }

          `}}>
        </style>


        <button className={misClases}
          onClick={this.handleClick}
          >{`Like | `}
          <span style={{color:'white'}}>{this.state.counter}</span>
        </button>
      </div>
    )
  }
}
