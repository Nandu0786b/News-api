import React,{useState} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import{BrowserRouter as Router,Switch,Route,} from 'react-router-dom'
import ApiKeyForm from './ApiKeyPopup'; 

const App =()=> {
  const [apikey, setApiKey] = useState(null);

  const onApiKeySubmit = (newApiKey) => {
    setApiKey(newApiKey);
  };
  const [progress,setProgress]=useState(0)
    const pageSize=6;
    return (
      <div >
      <Router>
      <NavBar apikey={apikey}/>
      
      <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
      <Switch>
          <Route exact path="/">
          
          <ApiKeyForm  onApiKeySubmit={onApiKeySubmit} apikey={apikey} />
          
          </Route>
          <Route exact path="/home">
          <News setProgress={setProgress}  key='general' pageSize={pageSize} country='us' category='general' apikey={apikey}/>
          </Route>
          <Route exact path="/general">
          <News setProgress={setProgress}  key='general' pageSize={pageSize} country='us' category='general' apikey={apikey}/>
          </Route>
          <Route exact path="/entertainment">
          <News setProgress={setProgress}  key='entertainment' pageSize={pageSize} country='us' category='entertainment' apikey={apikey}/>
          </Route>
          <Route exact path="/health">
          <News setProgress={setProgress}  key='health' pageSize={pageSize} country='us' category='health' apikey={apikey}/>
          </Route>
          <Route exact path="/science">
          <News setProgress={setProgress}  key='science' pageSize={pageSize} country='us' category='science' apikey={apikey}/>
          </Route>
          <Route exact path="/sports">
          <News setProgress={setProgress}  key='health' pageSize={pageSize} country='us' category='sports' apikey={apikey}/>
          </Route>
          <Route exact path="/technology"> 
          <News setProgress={setProgress}  key='technology' pageSize={pageSize} country='us' category='technology' apikey={apikey}/>
          </Route>
          <Route exact path="/business">
          <News setProgress={setProgress}  key='business' pageSize={pageSize} country='us' category='business' apikey={apikey}/>
          </Route>
        </Switch>
      </Router>
    </div>
    )
}
export default App



