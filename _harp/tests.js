test("Hash tag style is set to block", function(assert) {
var done = assert.async; 
  setTimeout(function(){
    var value = document.getElementById('hashtags').style.display; 
    equal(value, "block", 'Pass');
  }, 1000);
      done(); 
});
    
//test("check to see that the other divs are hidden", function(assert) {
//    var userDiv = document.getElementById('users').style.display;
//    
//    equal(userDiv, "none", "Div hidden"); 
//    console.log(userDiv); 
//});