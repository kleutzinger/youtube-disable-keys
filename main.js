
function run (debugStr) {
  console.log('ran keyblocker on ' + debugStr);
  $('#player').find('*').focus((e) => {
    $(e.target).blur();
  });
}

run('pageload');

$( document ).ready(function() {
  run('docready');
})

window.addEventListener('yt-navigate-finish', function (event) {
  run('new navigation');
});

window.addEventListener('spfdone', function (e) {
  run('old navigation');
});
