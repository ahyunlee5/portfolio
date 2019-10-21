'use strict';

function clickInfoIcon() {
  $('.infoIcon').on('click', function() {
    return $('#aboutMe').slideToggle('hide');
    // console.log('click info');
  });
}

function clickProjectIcon() {
  $('.projectIcon').on('click', function() {
    return $('#projects').slideToggle('hide');
    // console.log('click project');
  });
}

function clickables () {
  clickInfoIcon();
  clickProjectIcon();
}

$(clickables());