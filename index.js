'use strict';

function clickInfoIcon() {
  $('.infoIcon').on('click', function() {
    let toggledInfo = $('#aboutMe').toggleClass('hide');
    toggledInfo.slideToggle();
    console.log('click info');
  });
}

function clickProjectIcon() {
  $('.projectIcon').on('click', function() {
    let toggledProject = $('#projects').toggleClass('hide');
    toggledProject.slideToggle();
    console.log('click project');
  });
}

function clickables () {
  clickInfoIcon();
  clickProjectIcon();
}

$(clickables());