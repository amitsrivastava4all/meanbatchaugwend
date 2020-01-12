import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {'userid':'',menus:null};
  }
  doLogin(){
    const url = 'http://localhost:1234/ws/login';
    let userid = this.refs.t1.value;
    let pwd = this.refs.t2.value;
    var userObject = {userid, pwd};
    let promise= fetch(url,{
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method:'POST',
      body:JSON.stringify(userObject),

    });
    promise.then(response=>{
      response.json().then(data=>{
        console.log('JSON is ',data);
        this.setState({'userid':data.userid,'message':data.message,'menus':data.menu});
      }).catch(err=>{
        console.log('Error in JSON ',err);
      })
    }).catch(err=>{
      console.log('Server Error ',err);
    })

  }
  printMenus(){
    let jsx = <div></div>;
    if(this.state.menus){
        jsx = this.state.menus.map((menu,index)=>{
          return <a key={index} href="{menu.url}">{menu.name}</a>
        })
    }
    return jsx;
  }
  render(){
    return (
      <div>
        <h1>{this.state.message}</h1>
        {this.printMenus()}
        <input ref="t1" type='text' placeholder='Type Userid Here'/>
        <input ref="t2" type='password' placeholder='Type Password Here'/>
        <button onClick={this.doLogin.bind(this)}>Login</button>
      </div>
    )
  }

}
export default App;
