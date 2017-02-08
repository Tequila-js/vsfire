import Rebase from 're-base';

export const firebase = Rebase.createClass({
    apiKey: "AIzaSyAhVXAL_KEa014DtmgTz0ylHiGfjmy1oEs",
    authDomain: "vsfire-588df.firebaseapp.com",
    databaseURL: "https://vsfire-588df.firebaseio.com/",
    storageBucket: "gs://vsfire-588df.appspot.com"
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

export const firebaseFetch = function (collection, context, asArray = true, queryOptions = {}) {    
    return firebase.fetch( collection, {
            context: context,
            asArray: asArray,
            queryOptions: queryOptions
        }
    )
}

export const firebasePost = function (endpoint, object){
    return firebase.post(endpoint, object);
}