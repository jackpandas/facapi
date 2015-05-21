

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