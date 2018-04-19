import { firebase, googleAuthProvider} from '../firebase/firebase'

export const login=(uid)=>{
    return {
        type:'LOGIN',
        uid
    }
}
export const startLogin =()=>{
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout=()=>{
    return {
        type:'LOGOUT'
    }
}
export const startLogout =()=>{
    return () => {
        alert('firebase:logout');
        return firebase.auth().signOut();
    };
};
