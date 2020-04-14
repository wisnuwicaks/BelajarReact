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
        counter1:0,
        counter2:0,
        counter3:0
    }
   
    
  render() {
       const {counter1,counter2,counter3} = this.state
   
    
    
      return(
        // <div>
        //     <h1>HAlo</h1>
        //     {/* <h1>{this.props.saya}</h1>
        //     <h1>{this.props.wisnu}</h1> */}
        //     <h1>{this.props.cek}</h1>
        // </div>
        <>
     
            
            <h1>{this.state.counter1 }</h1>
            <input 
            className="btn btn-primary mr-2"
            value="+" 
            onClick={()=>this.setState({counter1:this.state.counter1 + 1})}
            />
             <input 
            className="btn btn-primary"
            value="-" 
            onClick={()=>this.setState({counter1:this.state.counter1 - 1})}
            />

            <h1>{this.state.counter2 }</h1>
            <input 
            className="btn btn-primary mr-2"
            value="+" 
            onClick={()=>this.setState({counter2:this.state.counter2 + 1})}
            />
             <input 
            className="btn btn-primary"
            value="-" 
            onClick={()=>this.setState({counter2:this.state.counter2 - 1})}
            />

            <h1>{this.state.counter3}</h1>
            <input 
            className="btn btn-primary mr-2"
            value="+" 
            onClick={()=>this.setState({counter3:this.state.counter3 + 1})}
            />
             <input 
            className="btn btn-primary"
            value="-" 
            onClick={()=>this.setState({counter3:this.state.counter3 - 1})}
            />

        <h1>All counter</h1>
            <input 
            className="btn btn-primary mr-2"
            value="+" 
            onClick={()=>this.setState({counter3:this.state.counter3 + 1,
                                        counter2:this.state.counter2 + 1,
                                        counter1:this.state.counter1 + 1
            })}
            />
             <input 
            className="btn btn-primary"
            value="-" 
            onClick={()=>this.setState({counter3:this.state.counter3 - 1,
                                        counter2:this.state.counter2 - 1,
                                        counter1:this.state.counter1 - 1})}
            />
            <br/>
            <input 
            className="btn btn-primary mt-2"
            value="RESET" 
            onClick={()=>this.setState({counter3:0,counter2:0,counter1:0})}
            />
        </>
      )
  }
}

export default CounterScreen