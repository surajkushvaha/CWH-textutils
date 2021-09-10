// import logo from './logo.svg';
import './App.css';
import React,{ useState }  from 'react'
import Navbar from './components/navbar';
import TextUtils from './components/textutils';

import $ from 'jquery';
import Alert from './components/alert';
function App() {
    const [mxmode, setmxode] = useState('primary');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: mxmode
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
    }


    const removeClassBody=()=>{
      $('body').removeClass('bg-primary');
      $('body').removeClass('bg-danger');
      $('body').removeClass('bg-info');
      $('body').removeClass('bg-dark');
      $('body').removeClass('bg-light');
      $('body').removeClass('bg-warning');
      $('nav').removeClass('bg-primary');
      $('nav').removeClass('bg-danger');
      $('nav').removeClass('bg-info');
      $('nav').removeClass('bg-dark');
      $('nav').removeClass('bg-light');
      $('nav').removeClass('bg-warning');
      $('nav').removeClass('navbar-dark');
    }
  const changeMode=(Mode)=>{
    setmxode(Mode);
    let mkstr= 'bg-'+Mode;
    removeClassBody();
    if(Mode==='light'){
        $('nav').addClass('navbar-light');
        $('body').addClass('text-dark')

    }else{
        $('nav').addClass('navbar-dark');
        $('body').removeClass('text-dark').addClass('text-white');
    }

    $('body').addClass(mkstr);
    $('nav').addClass(mkstr);


  }
  return (
      <div className="App">
        <Navbar changeMode={changeMode}/>
        <Alert alert={alert} />
        <TextUtils showAlert={showAlert} />
      </div>

  );
}

export default App;
