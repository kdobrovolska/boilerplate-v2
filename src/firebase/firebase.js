import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);
  const database=firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export { firebase, googleAuthProvider, database as default};

 /* database.ref('expenses').once('value').then((snapshot)=>{
   const expenses=[];
   snapshot.forEach((childSnapshot)=>{
     expenses.push({id:childSnapshot.key,...childSnapshot.val()});
   });
   console.log('expenses:',expenses);
 }); */
 /* database.ref('expenses').on(
    'value',
    (snapshot)=>{
      const expenses=[];
      snapshot.forEach((childSnapshot)=>{
        expenses.push({id:childSnapshot.key,...childSnapshot.val()});
      }); 
      console.log('expenses::',expenses);
    },
    (e)=>{console.log('error:'+e);}
  ); */

 /*  setTimeout(()=>{
    database.ref('expenses').push({...expenses[0],amount:expenses[0].amount+100});
  },3500); */

 /*  database.ref('expenses').on(
    'child_removed',(snapshot)=>{
      console.log('removed:',snapshot.key,":",snapshot.val());
    });

    database.ref('expenses').on(
      'child_changed',(snapshot)=>{
        console.log('updated:',snapshot.key,":",snapshot.val());
      });

      database.ref('expenses').on(
        'child_added',(snapshot)=>{
          console.log('added:',snapshot.key,":",snapshot.val());
        }); */
 
       
      /*    database.ref().remove().then(()=>{
            let exp;
          expenses.map((exp)=>{database.ref('expenses').push(exp);});
            
      });  */

  //add data
  /* database.ref().set({
      name :'cat',
      age : 58,
      isSingle: false,
      location:{
          city: 'Kiev',
          country: 'Ukraine'
      }
    }).then(()=>{console.log('data was saved!');}).
    catch((error)=>{console.log('error was received__:', error)});
    database.ref('attributesAdd').set({
        activity: 'yoga',
        hobby: 'walking'
       });
  
    database.ref('age').set(28).then(()=>{console.log('28 data was saved!');}).
    catch((error)=>{console.log('28 error was received__:', error)});
    database.ref('location/city').set('smela').then(()=>{console.log('smela data was saved!');}).
    catch((error)=>{console.log('smela error was received__:', error)}); 
    database.ref('attributes/height').set(169).then(()=>{console.log('169 data was saved!');}).
    catch((error)=>{console.log('169 error was received__:', error)});; 
    database.ref('attributes/weight').set(64).then(()=>{console.log('64 data was saved!');}).
    catch((error)=>{console.log('64 error was received__:', error)}); 
    */
   //remove data
  /*  var adaRef = firebase.database().ref().remove().then(()=> {
    console.log(" Remove succeeded.")
  })
  .catch((error) =>{
    console.log(" Remove failed: " + error.message)
  }); */
   /* var adaRef = firebase.database().ref('isSingle');
    adaRef.remove().then(function() {
    console.log("isSingle Remove succeeded.")
  })
  .catch(function(error) {
    console.log("isSingle Remove failed: " + error.message)
  }); */
  /* database.ref('attributes/weight').set(null).then(()=>{console.log('weight data was removed!');}).
  catch((error)=>{console.log('weight remove error was received__:', error)}); */

  /* database.ref('attributes/weight').set(null).then(()=>{console.log('weight data was removed!');}).
  catch((error)=>{console.log('weight remove error was received__:', error)});  */
  // update

  /*  database.ref().update({
      stressLevel: 8,
      'job/company' : 'Amazon',
      'location/city' : 'Seatle'
      }).then(()=>{console.log('data was updated!');}).
    catch((error)=>{console.log('update error was received__:', error)});
   */
  
   // fetch data
 /*   database.ref('location/city').once('value')
   .then((snapshot)=>{
       const val=snapshot.val();

       console.log('fetch:',val);
    }).
  catch((error)=>{console.log('fetch error was received__:', error)});
 */  
   
 /* const onValueChaange1=(snapshot)=>{
    const val=snapshot.val();

    console.log(val.name+' is '+ val.job.title +' in '+val.job.company);
 };
 const onValueChaange = database.ref().on('value',(snapshot)=>{
        const val=snapshot.val();
    
        console.log('fetch:',val);
     },(e)=>{console.log('error:'+e)});
    database.ref().on('value',onValueChaange1);

   setTimeout(()=>{
    database.ref('job/title').set('baker') ;
   },3500);
   setTimeout(()=>{
    database.ref('job/company').set('GOOGLe') ;
   },6500);

   setTimeout(()=>{
    database.ref().off('value',onValueChaange) ;
   },7000);

   setTimeout(()=>{
    database.ref('name').set('tanya') ;
   },11000);

   setTimeout(()=>{
    database.ref('job/title').set('cleaner') ;
   },15000); */


   