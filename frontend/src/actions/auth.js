import axios from "axios";
import * as actionTypes from "./authTypes";

export const address = "http://192.168.1.95:8000/"



// Authentification debut
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
}

// Succès Authentification
export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
}

// Echec Authentification
export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
}


// Deconnexion
export const logout = () => {
  localStorage.removeItem("token");
  //localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}

/*export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};*/


// Connexion
export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(address + "rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        console.log(token)
        //const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        //localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        //dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
}


// Inscription
export const authSignup = (username, email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(address + "rest-auth/registration/", {
        username: username,
        email: email,
        password1: password,
        password2: password
      })
      .then(res => {
        const token = res.data.key;
        //const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        //localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        //dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
}

// Fetch Users
export const userList = () => {
  var list = []
    axios.get(address+"api/list/")
        .then(response => {
            list = response.data
            console.log(list)
        })
        .catch(err => {
          console.log(err)
        })
    return list;
}


// Check
export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    //console.log("token")
    if (token === undefined) {
      dispatch(logout());
    }else {
      /*const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        /*dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }*/
      dispatch(authSuccess(token));
    }
  };
}