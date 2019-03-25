// JavaScript Document
'use strict';


/*401-0 We've created a variable (appData) where we can pull in other objects*/
var appData = {
  /*401-0 added both the title and tagLine objects to be able to pull from multiple sources in the JS file*/
  title: 'My name is Jimmy De Jesus',
  tagLine: '"There is only one happiness in this life, to love and be loved." George Sand.'
};

window.addEventListener('load', initializeApplication);

function initializeApplication() {

  document.title = appData.title;

  document.body.style.backgroundColor = '#BBB';
  document.body.style.textAlign = 'center';
  document.body.style.fontSize = '3em';

  var elWrapper = document.createElement('div');
  elWrapper.id = 'applicationWrapper';
  document.body.appendChild(elWrapper);

  var elHeader = document.createElement('header');
  elWrapper.appendChild(elHeader);

  var elHeaderTitle = document.createElement('h1');
  /*401-0 replaced applicationTitle with appData.title for better javascript functionality*/
  elHeaderTitle.innerHTML = appData.title;
  elHeader.appendChild(elHeaderTitle);
  /*400-0 make a class name on the header title so it animates bounceInDown*/
  /*401-0 moved closer to elHeaderTitle location of js page for better readabilaty*/
  elHeaderTitle.className = 'animated bounceInDown';

  var elHeaderTagLine = document.createElement('h2');
  /*401-0 replaced applicationTagLine with appData.tagLine for better javascript functionality*/
  elHeaderTagLine.textContent = appData.tagLine;
  /*400-0 This line adds a style to the header so that it is at .4em */
  elHeaderTagLine.style.fontSize = '.4em';
  elHeader.appendChild(elHeaderTagLine);
  /*400-0 creates the element headertagline with a class and animates it to bounceInLeft*/
  /*401-0 moved closer to elHeaderTagLine location of js page for better readabilaty*/
  elHeaderTagLine.className = 'animated bounceInLeft';

  /*400-0 this var elMain populates the main section of the HTML with HTML*/
  var elMain = document.createElement('main');
  elMain.innerHTML = '<p>Communication is Beautiful...</p>';
  elWrapper.appendChild(elMain);
  /*400-0 creates the element Main and makes a class so we can animate it to zoomin*/
  /*401-0 moved closer to elMain location of js page for better readabilaty*/
  elMain.className = 'animated zoomIn';

  /*400-0 This var elFooter auto populates the footer area with HTML*/
  var elFooter = document.createElement('footer');
  elFooter.innerHTML = '<h4>get excited about learning JavaScript...</h4>';
  elWrapper.appendChild(elFooter);
  /*400-0 creates a element footer with a class so we can animate it to bounceInRight*/
  /*401-0 moved closer to elFooter location of js page for better readabilaty*/
  elFooter.className = 'animated bounceInRight';
/*401-1 we are populaiting the main tag in the html with the bootstrap code we  */
  elMain.innerHTML += '<div style="width: 40%; margin: auto; padding:10px; margin-bottom: 20px;"><div class="progress" style="height: 20px;"><div id="loaderProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div></div></div>';
   displayPB();}
/*401-1 the timer in the loading bar*/
   var timerCount = 0;

function displayPB() {
    if (timerCount <= 100) {
        var x = (timerCount < 25) ? '' : (timerCount < 45) ? timerCount + '%' : (timerCount < 65) ? 'Loading ' + timerCount + '%' : 'Loading Application ' + timerCount + '%';
        document.getElementById("loaderProgressBar").innerHTML = x;
        document.getElementById('loaderProgressBar').setAttribute('aria-valuenow', timerCount);
        document.getElementById('loaderProgressBar').style.width = timerCount + '%    ';
        timerCount++;
        setTimeout(displayPB, 75);
    } else {
        timerCount = 0;
        document.body.innerHTML = formLogin();
        return false;
    }
}
/*402.0 function formLogin lets us call the login screen*/
function formLogin() {
    return '<form id="loginFrm" name="loginFrm" action="#" class="animated zoomIn"><div class="form-group"><label for="email">Email address:</label><input type="email" class="form-control" id="email" value="me@there.com"></div><div class="form-group"><label for="pwd">Password:</label><input type="password" class="form-control" id="pwd" value="dfdf"></div><div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Remember me </label></div><button id="loginBtn" type="submit" class="btn btn-primary" onclick="validateLogin()">Submit</button></form>';
}
/*402.0 redirecting form when the login is correct or not*/
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    if (email !== '' && password !== '') {
        document.body.innerHTML = '<main class="animated zoomIn"><h1 id="inNow">We are in now</h1></main>';
        //applicationUserInterface();
    } else {
        alert('bad');
            return false;
    }
    return false;
}
