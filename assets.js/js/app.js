// JavaScript Document
'use strict';

var applicationTitle = 'My name is Jimmy De Jesus';

var applicationTagLine = '"There is only one happiness in this life, to love and be loved." George Sand.';
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
}
