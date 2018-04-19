git init -create new repository
git add .       //all files
git commit -m "message"
git log
git status 
git commit -am "message' (together add and commit -only if there are no new files , only modified)

/////////// (GitHub password => Lika1987)
copy local repository to remote:
1) git remote add origin  git"github.com/kdobrovolska/react-course-2-expensify-app.git
2)git push -u origin master  (only first time)

git remote  - look to GitHub
git push  - send changes to GitHub

//heroku (heroku password => Lika1987!!)
1)heroku login 
2)git push heroku master    (send data to heroku)
3)heroku logs     -log file of heroku
4)heroku open     - start application
5)heroku config:set  FIREBASE_API_KEY=AIzaSyDlc2Kdek065jRsLG8ia05sy4eKHt8uetY  FIREBASE_AUTH_DOMAIN=expensify-b3796.firebaseapp.com    FIREBASE_DATABASE_URL=https://expensify-b3796.firebaseio.com    FIREBASE_PROJECT_ID=expensify-b3796    FIREBASE_STORAGE_BUCKET=expensify-b3796.appspot.com    FIREBASE_MESSAGING_SENDER_ID=147317392471
     
     to connect to database (data from file .env.development)

6) heroku config  - to look configuration
7) heroky config:unset KEY  - to delete KEY from configuration


//to work with production version:
1)yarn run build:prod       ( "webpack -p --env production")
2) yarn run start           ("node server/server.js")

// to work locally
yarn run dev-server

//install programm (for instace chalk) for devDependencies:
yarn add chalk --dev

// install all from package.json for production mode 
//(after deleting node_modules)
yarn install --production

// install all from package.json 
//(after deleting node_modules)
yarn install

//start testing
1) yarn test   - one time
2) yarn test --watch    - one start and after that when changes were made
3) yarn run -- --watch - start only if changes were made
4) yarn test -u      delete old snapshot



-----------------------
start to work with github
1) in google.com 
     "connect to GitHub with ssh"
2) execut instructions
3)in console:
-->git remote add origin ...
  (SSH for instance - git@github.com:kdobrovolska/ReactReduxTablesApp.git)
4)check 1:
   --> git remote
   should be : origin
5)check 2:
--> git remotem -v

6) create master branch  (only first time)
-->git push -u origin master

