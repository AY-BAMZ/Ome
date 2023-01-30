import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import URI_MAP from "../uri/URI_MAP";

export const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [apiErrorMsg, setApiErrorMsg] = useState("")

//   sign up request
  const handleRegister = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    isAgent,
  }) => {
   setIsLoading(true)
    try {
      const response = await axios.post(
        URI_MAP.ome.register,
        {
            first_name: firstName,
            last_name: lastName,
          email: email,
          password1: password,
          password2: confirmPassword,
          is_agent: isAgent
        }, {
            headers: {
                'Content-Type': 'application/json'
                }
        }
      );
      setIsLoading(false)
      const data = response.data;
      setUser(data.user)
      console.log('response', response.data)
    } catch (error) {
        console.log('error', error.response)
        if (!err?.response) {
          setApiErrorMsg("No Server Response");
        } else if (err.response?.status === 409) {
          setApiErrorMsg("User Already Exist");
        } else {
          setApiErrorMsg("Registration Failed");
        }
        
      }
      setIsLoading(false)
  };
  console.log('apiErrorMsg', apiErrorMsg)


//   Login Request
  const handleLogIn = async ({
    email,
    password,
  }) => {

   setIsLoading(true)
   try {
      const response = await axios.post(
        URI_MAP.ome.login,
        {
          email: email,
          password: password,
        }, {
            headers: {
                'Content-Type': 'application/json'
                }
        }
      );
      setIsLoading(false)
      const data = response.data;
      setUser(data.user)
      console.log('response', response)
    //   props.onLoggedIn(data);
      console.log('response', user)
    } catch (error) {
        console.log('error', error)
      setIsLoading(false)
    }
  };

  // forgot password
  const handleResetPassword = async ({
    email,
  }) => {

   setIsLoading(true)
   try {
      const response = await axios.post(
        URI_MAP.ome.forgotpassword,
        {
          email: email,
        }, {
            headers: {
                'Content-Type': 'application/json'
                }
        }
      );
      setIsLoading(false)
      const data = response.data;
      // setUser(data.user)
      console.log('response', response)
    //   props.onLoggedIn(data);
      // console.log('response', user)
    } catch (error) {
        console.log('error', error)
      setIsLoading(false)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleRegister,
        handleLogIn,
        isLoading,
        setIsLoading,
        handleResetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  //   if (!context) throw new Error("useAuthContext must be used in HouseProvider");

  return context;
};
export default AuthProvider;
