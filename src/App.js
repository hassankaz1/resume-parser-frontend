import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./nav/NavBar";
import ResumeApi from './api';
import UserContext from "./auth/UserContext";
import useLocalStorage from './hooks/useLocalStorage';
import { useHistory, createBrowserHistory } from 'react-router-dom';
import { isExpired, decodeToken } from "react-jwt";



function App() {

  // const history = createBrowserHistory();


  const [currUser, setCurrUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(new Set([]))
  const [token, setToken] = useLocalStorage("token", null);


  /**
   * Create an effect triggered by a state change of the token: 
   * Makes a API call to get info on the newly-logged-in user --> 
   * store it in the currUser state.
   * 
   */
  useEffect(() => {
    async function getcurrUser() {
      if (token) {
        try {
          let { username } = decodeToken(token);
          ResumeApi.token = token;
          let currUser = await ResumeApi.getCurrUser(username);
          setCurrUser(currUser);
          setAppliedJobs(new Set(currUser.applications))
        } catch (err) {
          console.error("Error loading user information.", err);
          setCurrUser(null);
        }
      }
    }
    getcurrUser();
  }, [token])

  /**Log in the user: make API call with log in info --> store the token */
  async function login(data) {
    try {
      let token = await ResumeApi.login(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("log in fail :( !");
      return { success: false, err }
    }
  }

  /**Sign up new user: make API call with new user info --> store the token */
  async function signup(data) {
    try {
      let token = await ResumeApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("sign up fail :( !");
      return { success: false, err }
    }
  }

  /**Sign user out : reset currUser and Token stored */
  function signout() {
    setCurrUser(null);
    setToken(null);
  }


  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ currUser, setCurrUser }}>
          <NavBar signout={signout} />
          <Routes login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

















// import { useState } from 'react'
// import FileUpload from './FileUpload/FileUpload';
// import FileList from './FileList/FileList';
// import PDFList from './PDFList/PDFList';
// import PDFview from './PDFview/PDFview';
// import './App.css';

// function App() {

//   const [files, setFiles] = useState([])

//   const removeFile = (filename) => {
//     setFiles(files.filter(file => file.name !== filename))
//   }


//   return (
//     <>
//       <div className="App">
//         <p className='title'>Upload File</p>
//         <FileUpload files={files} setFiles={setFiles}
//           removeFile={removeFile} />

//         <FileList files={files} removeFile={removeFile} />
//       </div>

//       <div>

//         <PDFList files={files} removeFile={removeFile} />

//       </div>
//     </>
//   );
// }

// export default App;
