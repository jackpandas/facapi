//buttons!!!

function buttonpress(open,hide1,hide2,openbutton,hidebutton1,hidebutton2) {
    var show= document.getElementById(open);
    var other1=document.getElementById(hide1);
    var other2=document.getElementById(hide2);

    show.style.display="block";
    other1.style.display="none";
    other2.style.display="none";

    var buttonSelected=document.getElementById(openbutton);
    buttonSelected.style.backgroundColor="#878787";
    var notSelected1=document.getElementById(hidebutton1);
    notSelected1.style.backgroundColor="white";
    var notSelected2=document.getElementById(hidebutton2);
    notSelected2.style.backgroundColor="white";




};


var htButton = document.getElementById("htbutton");
htButton.addEventListener("click", function(){
  buttonpress("hashtags","users","about","htbutton","abutton","ubutton")
});

var uButton = document.getElementById("ubutton");
uButton.addEventListener("click", function(){
  buttonpress("users","about","hashtags","ubutton","abutton","htbutton")
});

var aButton = document.getElementById("abutton");
aButton.addEventListener("click", function(){
  buttonpress("about","users","hashtags","abutton","ubutton","htbutton")
});




///buttons end!





var usersImageArray = []; // PUTINERHERHERHERHERHERHERHERHEHEHE

function loadtag(){
  var tag = document.getElementById('hashtag1').value;
  // var section='hashtags';
  if (tag){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/tags/" + tag + "/media/recent?access_token=" + accesstoken + "&callback=callbackFunction";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);
  }//end if empty
};//end load


function loaduser(userId){
  var user = userId;
  // var section='users';
  if (user){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/users/" + user + "/media/recent?access_token=" + accesstoken + "&callback=callbackFunction";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);
  }//end if empty
};//end load


function callbackFunction(dataReturned){
  var data=dataReturned.data;
  console.log(dataReturned.data);
  for (var i=0;i<data.length;i++){

    var content = data[i];
    var timestamp = content.caption.created_time;
    console.log(timestamp);

    var div = document.createElement('div');
    var title=document.createElement('p');
    var date=document.createElement('p');
    var image=document.createElement('img');

    title.innerHTML=content.caption.text;
    date.innerHTML=timestamp;

    image.setAttribute('src', content.images.standard_resolution.url);
    image.setAttribute('alt', content.caption.text);

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(date);

    usersImageArray.append
    document.getElementById("hashtags").appendChild(div);////////// HEREREERERERERERE
  };
};

function loadUserArray(){
var usersarray = ['jackpandas','jack.rans','taylorswift','kimkardashian','zooeydeschanel'];

  for (var j = 0; j< usersarray.length;j++){
        var userEncoded = encodeURIComponent( usersarray[j] );
        var apiRequest= "https://api.instagram.com/v1/users/search?q=" + '"' + userEncoded + '"' + "&access_token=" + accesstoken + "&callback=callbackGetUser";
      // console.log(apiRequest);
        var apiscript=document.createElement('script');
        apiscript.setAttribute('src', apiRequest);
        document.body.appendChild(apiscript);
  }

};//end load


function loadUserId(){
  var user = document.getElementById('user1').value;
  var userEncoded = encodeURIComponent(user);
  // var section='hashtags';
  if (user){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/users/search?q=" + '"' + userEncoded + '"' + "&access_token=" + accesstoken + "&callback=callbackGetUser";
      console.log(apiRequest);
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);
  }//end if empty

};//end load

function callbackGetUser (dataReturned){
  var data=dataReturned.data;
    // console.log(dataReturned.data);
  var userId = data[0].id;
    // console.log(userId);
    loaduser(userId);
    // return userId;

}
