// JavaScript Document
'use strict';

var applicationTitle = 'My name is Jimmy De Jesus';

var applicationTagLine = '"There is only one happiness in this life, to love and be loved." George Sand.';

window.addEventListener('load', initializeApplication);

function initializeApplication() {

    document.title = applicationTitle;

    document.body.style.backgroundColor = '#BBB';
    document.body.style.textAlign = 'center';
    document.body.style.fontSize = '3em';

    var elWrapper = document.createElement('div');
    elWrapper.id = 'applicationWrapper';
    document.body.appendChild(elWrapper);

    var elHeader = document.createElement('header');
    elWrapper.appendChild(elHeader);

    var elHeaderTitle = document.createElement('h1');
    elHeaderTitle.innerHTML = applicationTitle;
    elHeader.appendChild(elHeaderTitle);

    var elHeaderTagLine = document.createElement('h2');
    elHeaderTagLine.textContent = applicationTagLine;
/*400-0 This line adds a style to the header so that it is at .4em */
    elHeaderTagLine.style.fontSize = '.4em';
    elHeader.appendChild(elHeaderTagLine);
/*400-0 this var elMain populates the main section of the HTML with HTML*/
    var elMain = document.createElement('main');
    elMain.innerHTML = '<p>Communication is Beautiful...</p>';
    elWrapper.appendChild(elMain);
/*400-0 This var elFooter auto populates the footer area with HTML*/
    var elFooter = document.createElement('footer');
    elFooter.innerHTML = '<h4>get excited about learning JavaScript...</h4>';
    elWrapper.appendChild(elFooter);

/*400-0 Animations Begin VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV*/

/*400-0 make a class name on the header title so it animates bounceInDown*/
    elHeaderTitle.className = 'animated bounceInDown';
/*400-0 creates the element headertagline with a class and animates it to bounceInLeft*/
    elHeaderTagLine.className = 'animated bounceInLeft';
/*400-0 creates the element Main and makes a class so we can animate it to zoomin*/
    elMain.className = 'animated zoomIn';
/*400-0 creates a element footer with a class so we can animate it to bounceInRight*/
    elFooter.className = 'animated bounceInRight';
}
