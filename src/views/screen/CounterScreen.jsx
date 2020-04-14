import React from 'react'
import './bootstrap.css'
// import { ReactComponent } from '*.svg'

// const CounterScreen = ()=>{
//     return (
//         <div>
//             <h1></h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
    state = {
        counter:1
    }
  render() {
      
      return(
        // <div>
        //     <h1>HAlo</h1>
        //     {/* <h1>{this.props.saya}</h1>
        //     <h1>{this.props.wisnu}</h1> */}
        //     <h1>{this.props.cek}</h1>
        // </div>
        <>
            <h1>{this.state.counter}</h1>
            <input 
            className="btn btn-primary"
            value="klik saya" 
            onClick={()=>this.setState({counter:2})}
            />
        </>
      )
  }
}

export default CounterScreen