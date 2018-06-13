import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA360xAj6wjqKbh0jUkVe8SO5lIoDT4sKQ",
    authDomain: "react-practice-project-97c19.firebaseapp.com",
    databaseURL: "https://react-practice-project-97c19.firebaseio.com",
    projectId: "react-practice-project-97c19",
    storageBucket: "react-practice-project-97c19.appspot.com",
    messagingSenderId: "622975740441"
};
var fire = firebase.initializeApp(config);

var ref = fire.database().ref('/');
export default fire;

export function render(){
    return new Promise((res,rej)=>{
        ref.child('posts').once('value',(snapshot)=>{
           console.log(snapshot);
            res(snapshotToArray(snapshot));
        })
    })
}

export function add(obj) {
    return new Promise((res, rej) => {
        const abc = ref.child('posts').push(obj,()=>{
            res(abc.key)
        });
        
        console.log(abc, 'abccccc')
        // ref.child('posts').child(abc.key).update(obj, () => {
        //     // console.log('objkkkk', obj)
        //     res(abc.key)
        // })
 
})
}
export function deleted(key){
    return new Promise((res,rej)=>{
        ref.child('posts').child(key).remove(()=>{
            res(key)
        })
        
    })
}
export function update(key,value){
    console.log("firebase fun",key,value)
    return new Promise ((res,rej)=>{
        ref.child('posts').child(key).update({task:value},()=>{
            res({key,task:value});
        })
    })

}
function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val())
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};
