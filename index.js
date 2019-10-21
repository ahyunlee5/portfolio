'use strict';

function clickInfoIcon() {
  $('.infoIcon').on('click', function() {
    let toggledInfo = $('#aboutMe').slideToggle('hide');
    console.log('click info');
  });
}

function clickProjectIcon() {
  $('.projectIcon').on('click', function() {
    let toggledProject = $('#projects').slideToggle('hide');
    console.log('click project');
  });
}

function clickables () {
  clickInfoIcon();
  clickProjectIcon();
}

$(clickables());