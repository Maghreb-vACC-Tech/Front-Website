import { useState } from 'react';
// import { useState , Redirect } from 'react';
import { Navigate } from 'react-router-dom';


function LoginBtn() {

    const [authRedirect, setAuthRedirect] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
    
    let authorizeUrl = ''
  
    const prod = false
    setAuthRedirect('')
    if ( prod ) {
  
      authorizeUrl = `https://auth.vatsim.net/oauth/authorize?
        client_id=1284&
        redirect_uri=https://www.vatsim.ma/& 
        response_type=code&
        scope=full_name+vatsim_details+email+country`;
        
    }
    else{
      
      authorizeUrl = `https://auth-dev.vatsim.net/oauth/authorize?
        client_id=619&
        redirect_uri=http://localhost:1000/authcode&
        response_type=code&
        scope=full_name+vatsim_details+email+country`;
  
    }
      
  
      window.location.href = authorizeUrl;
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Login"/>  
        </form>
  
        {authRedirect && 
          <Navigate 
            to={`/callback?code=${authRedirect}`}
          />
        }
      </div>
    );
  }
  
export default LoginBtn;