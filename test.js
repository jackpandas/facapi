//
// test("testing on header", function() {
//     var iframe = document.getElementById('if-index');
//
//     var target = iframe.contentDocument || iframe.contentWindow.document;
//
//     var initial = target.getElementById('heading');
//
//     var upper = getComputedStyle(initial,null).textTransform;
//
//     // if you have a property like text-transform must use textTransform instead
//
//     equal(initial.innerHTML, 'The test of both worlds', 'header text is right and exists');
//
//     equal(upper, "uppercase", 'uppercase been used');
// });

test("Divs exist and in correct order", function(){
var iframe = document.getElementById('if-index');
var target = iframe.contentDocument || iframe.contentWindow.document;
var first = target.getElementsByTagName("div")[0].id;
var second = target.getElementsByTagName("div")[1].id;
var box1 = target.getElementsByTagName("div")[2].id;
var box2 = target.getElementsByTagName("div")[3].id;
var box3 = target.getElementsByTagName("div")[4].id;
var last = target.getElementsByTagName("div")[5].id;
equal(first, "header", "header div present and on top");
equal(second, "navigation", "navigation div present and on top");
equal(box1, "hashtags", "header div present and on top");
equal(box2, "users", "navigation div present and on top");
equal(box3, "about", "header div present and on top");
equal(last, "footer", "header div present and on top");
});

// test("check logo present", function() {
//     var iframe= document.getElementById('if-index');
//     var target= iframe.contentDocument || iframe.contentWindow.document;
//     var logo= target.getElementById('logo').alt;
//
//     equal(logo, 'InstaCognito logo', 'logo image present and given alternative text name')
//
// });

test("buttons in nav bar", function() {
    var iframe= document.getElementById('if-index');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var navigationcontents=target.getElementById('navigation').children;
    var numberbuttons=navigationcontents.length;
    var bool =true;
    if (numberbuttons==0){console.log('number'); bool=false;}
    else {
      for (var i=0; i<numberbuttons; i++){
        if (navigationcontents[i].tagName != "BUTTON"){bool=false};
      };
    };
    //button testing, they are all buttons, if one not true will turn flag false
    equal(3, numberbuttons, '3 elements present');
    equal(bool,true,"buttons are buttons and have right width and height");


});
