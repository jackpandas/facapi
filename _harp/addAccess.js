
var accesstoken="";


function loadtag(){
  var tag = document.getElementById('hashtag1').value;
  var section='hashtags';
  if (tag){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/tags/" + tag + "/media/recent?access_token=" + accesstoken + "&callback=callbackFunction";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);
  }//end if empty
  return section;
};//end load

function loaduser(){
  var user = document.getElementById('user1').value;
  var section='users';
  if (user){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/users/" + user + "/media/recent?access_token=" + accesstoken + "&callback=callbackFunction";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);
  }//end if empty
  return section;
};//end load


function callbackFunction(dataReturned){
  var data=dataReturned.data;
  for (var i=0;i<data.length;i++){
    var content = data[i];
    var div = document.createElement('div');
    var image=document.createElement('img');
    var title=document.createElement('p');
    title.innerHTML=content.caption.text;
    image.setAttribute('src', content.images.standard_resolution.url);
    image.setAttribute('alt', content.caption.text);
    div.appendChild(title);
    div.appendChild(image);
    document.getElementById(section).appendChild(div);
  };
};
