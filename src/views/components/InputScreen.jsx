import React from 'react'
import "./bootstrap.css"
import "./bootstrap.min.css"
import "./style.css"

class InputScreen extends React.Component{

 
  state={
        username:[],
        password:[],
        user :'',
        pass :'',
        passRepeat:'',
        userLogin:'',
        passLogin:'',
        isLogin:false,
        berhasilLogin:'',

    }
  
  
  

render(){

    const {username,password,user,pass,passRepeat,userLogin,isLogin,passLogin,berhasilLogin}=this.state

    const inputHandler = (event,field)=>{
        this.setState({[field]:event.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if (pass==passRepeat){
        this.setState({username:[...username,user]})
        this.setState({password:[...password,pass]})
        //untuk clear input
        this.refs.user.value = '';
        this.refs.pass.value = '';
        this.refs.repeat.value = '';
        }
        else{
            alert(`Password anda belum sama`)
        }
    }

   const validasi=(e)=>{
        e.preventDefault()
       let cariUser=username.findIndex(val=>val==userLogin)
      
       if(password[cariUser]==passLogin)
        {
            this.setState({berhasilLogin:userLogin})
        }
        else{
          alert("Pass salah atau user tidak ada")
        }
        this.refs.userLogin.value = '';
        this.refs.passLogin.value = '';
   }

    return (
      
    <div className="border border-primary badan ">
        {/* <h1>Input Screen</h1>
        <h3>Welcome {username}</h3>
        <h3>Email: {email}</h3>
        <br/>
        <input type="text" placeholder="username" onChange={(e)=>inputHandler(e,"username")}/>
        <br/>
        <input type="text" placeholder="email" onChange={(e)=>inputHandler(e,"email")}/>
        <br/>
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>inputHandler(e,"sisa")}></textarea>
        <p>{`${sisa.length}/140`}</p> */}
   
            <div className="container ">
                <h4>Register</h4>
                <form >
                    <div class="form-group">
                    <label>Username: </label>
                        <input type="text" class="form-control" placeholder="Enter Username"
                        onChange={(e)=>inputHandler(e,"user")} ref="user"
                        />
                    </div>
                    <div class="form-group">
                        <label>Password:</label>
                        <input type="text" class="form-control" placeholder="Enter password"
                        onChange={(e)=>inputHandler(e,"pass")} ref="pass"
                        />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Repeat password"
                        onChange={(e)=>inputHandler(e,"passRepeat")} ref="repeat"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary"
                    onClick={(e)=>onSubmit(e)}>Register</button>
              
                </form>
            </div>
           
            <div className="container mt-5 ">
                <h4>Login</h4>
                <form action="">
                <div class="form-group">
                    <label>Username:</label>
                    <input type="text" class="form-control" placeholder="Enter Username"
                     onChange={(e)=>inputHandler(e,"userLogin")} ref="userLogin"
                    />
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="text" class="form-control" placeholder="Enter password" 
                     onChange={(e)=>inputHandler(e,"passLogin")} ref="passLogin"
                    />
                </div>
               
                <button type="submit" class="btn btn-primary" 
                onClick={(e)=>validasi(e)}>Login</button>
                {
                   berhasilLogin? <h3>{`Welcome ${berhasilLogin}`}</h3>:null
                }
                </form>
            </div>
        
    </div>
    )
}

}
export default InputScreen