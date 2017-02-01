import Rebase from 're-base';

export const firebase = Rebase.createClass({
    apiKey: "AIzaSyAlZ73daEohcIL5ONW9_PlCNhK2syqf-Nw",
    authDomain: "logintest-6a46c.firebaseapp.com",
    databaseURL: "https://logintest-6a46c.firebaseio.com/",
    //storageBucket: "qwales1-test.appspot.com",
});



export const firebaseLogin = function () {
    return firebase.authWithOAuthPopup('facebook', (e, u) => {
        if (e) {
            throw 'error';
        }
    });
}

export const getCurrentUser = function () {
    return new Promise((fullfil, reject) => {
        var currentUser = null
        firebase.onAuth((user) => {
            fullfil(user);
        });
    });
}

export const firebaseLogout = function () {
    firebase.unauth();
}
