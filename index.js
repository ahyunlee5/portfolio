'use strict';

function clickInfoIcon() {
  $('.infoIcon').on('click', function() {
    $('#projects').slideUp();
    return $('#aboutMe').slideToggle('hide');
    // console.log('click info');
  });
}

function clickProjectIcon() {
  $('.projectIcon').on('click', function() {
    $('#aboutMe').slideUp();
    return $('#projects').slideToggle('hide');
    // console.log('click project');
  });
}

function clickables () {
  clickInfoIcon();
  clickProjectIcon();
}

$(clickables());
// function clickIcon () {
//   $('.icon').on('click', function(event) {
//     const targetIcon = $(event.currentTarget);
//     const notTargetIcon = $('.icon').not(targetIcon);
//     notTargetIcon.slideToggle('hide');
//     targetIcon.slideToggle('hide');

//     console.log('working?');
//   });
// }

// $(clickIcon);