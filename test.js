test("this bit should describe, to a human, what the test is for", function() {
    equal( 1, 1);
});


test("testing on header", function() {
    var iframe = document.getElementById('if-index');

    var target = iframe.contentDocument || iframe.contentWindow.document;

    var initial = target.getElementById('heading');

    var upper = getComputedStyle(initial,null).textTransform;

    // if you have a property like text-transform must use textTransform instead

    equal(initial.innerHTML, 'The test of both worlds', 'header text is right and exists');

    equal(upper, "uppercase", 'uppercase been used');
});



test("add function", function() {
    var x=Math.floor(Math.random()*1000);
    var y=Math.floor(Math.random()*1000);
    equal(add(x,y), x+y, 'it works');
    equal(add(10,2),12)


});

test("Is there an image on the page", function(){
var iframe = document.getElementById('if-index');
var target = iframe.contentDocument || iframe.contentWindow.document;
var testimage = target.getElementsByTagName("img")[0].alt;

notEqual(testimage, "", "yeah");

});

test("check that a tiger shows up", function() {
    var iframe= document.getElementById('if-index');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var initial= target.getElementById('tiger').src;

    equal(initial, 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg', 'tiger match')

});











// test("Has the CSS loaded?", function() {
// } )
