import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApiKeyForm = (props) => {
  const [apiKey, setApiKey] = useState(props.apikey);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
    
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      let response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`);
  
      if (response.ok) {
        let data = await response.json();  
        if (data.status === "ok") {
          toast.success('API is correct!', { theme: 'colored' });
          // Perform additional logic here
          props.onApiKeySubmit(apiKey);
          toast.success('All Links Enabled!', { theme: 'colored' });
        } else {
          toast.error('Wrong API!');
        }
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const buttonStyle = {
    backgroundColor: '#E91E63',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'space-around', alignItems: 'center', height: '100vh' ,backgroundImage:'linear-gradient(to right top, #201b1e, #272026, #2c262f, #302c39, #333343, #2e3343, #293342, #243340, #1c2b33, #162226, #121a1b, #0c1010)',color:"white" }}>
    <ToastContainer />
    {apiKey ? (<p>Api key is loaded. {apiKey } </p> 
    ):(<p>First set your api key to read news. just go on the <a href="https://newsapi.org/account" target="_blank" rel="News api website">News api </a> To creat New api. Without api you will not
    be able to click on navbar</p>) }
     <p> <form onSubmit={handleSubmit}>
        <input type="text" value={apiKey} onChange={handleApiKeyChange} placeholder="Enter API Key" />
        <button type="submit">Submit</button>
      </form>
      </p>
      <p style={{color:"#E91E63"}}>
      Requests from the browser are not allowed on the News api Developer plan, except from localhost. We recommend to visit  <a href="https://github.com/Nandu0786b/News-api" target='_blank' style={buttonStyle}>github</a> repo and download locally </p>
      <br />
      <a href="https://github.com/Nandu0786b" target='_blank' style={buttonStyle }>github</a>
      <a href="https://nandu-resume.netlify.app/" target='_blank' style={buttonStyle}>Resume</a>
      <a href="https://algosathi.netlify.app/" target='_blank' style={buttonStyle}>AlgoSathi</a>

    </div>
  );
};

export default ApiKeyForm;
