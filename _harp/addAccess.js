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





//
//
//
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
//
//
// function callbackFunction(dataReturned){
//   var data=dataReturned;
//   //console.log(dataReturned.data);
//   for (var i=0;i<data.length;i++){
//
//     var content = data[i];
//     var timestamp = content.caption.created_time;
//     console.log(timestamp);
//
//     var div = document.createElement('div');
//     var title=document.createElement('p');
//     var date=document.createElement('p');
//     var image=document.createElement('img');
//
//     title.innerHTML=content.caption.text;
//     date.innerHTML=timestamp;
//
//     image.setAttribute('src', content.images.standard_resolution.url);
//     image.setAttribute('alt', content.caption.text);
//
//     div.appendChild(title);
//     div.appendChild(image);
//     div.appendChild(date);
//
//     usersImageArray.append
//     document.getElementById("hashtags").appendChild(div);////////// HEREREERERERERERE
//   };
// };
//


function loadUserArray(){
var usersarray = ['jack.rans','taylorswift','kimkardashian','zooeydeschanel','jackpandas']; //currently hardcoded

  for (var j = 0; j< usersarray.length;j++){
        var userEncoded = encodeURIComponent( usersarray[j] ); //may not be necessary, This is to ensure no errors on unknown characters in users names
        var apiRequest= "https://api.instagram.com/v1/users/search?q=" + '"' + userEncoded + '"' + "&access_token=" + accesstoken + "&callback=callbackGetUser"; //sends api request of this user to seek out the user id as a number
      // console.log(apiRequest);
        var apiscript=document.createElement('script');
        apiscript.setAttribute('src', apiRequest);
        document.body.appendChild(apiscript); //appends to script to get info send to the callbackGetUser function
  }
    console.log(usersImageArray);
};//end load


function callbackGetUser (dataReturned){
  var data=dataReturned.data;
    // console.log(dataReturned.data);
  var userId = data[0].id; // access the user_id (number) and gives it to the loaduser function
    // console.log(userId);
    loaduser(userId);
    // return userId;
};


function loaduser(userId){
  var user = userId;
  // var section='users';
  if (user){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/users/" + user + "/media/recent?access_token=" + accesstoken + "&callback=fillRecentArray";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript); //creates script element for each user which gets data and returns it to the fill RecentArray fucntion
  };//end if empty
};//end load

var usersImageArray = []; // Will hold all recent photos from all users

//This function fills the usersImageArray with recent media
function fillRecentArray(recentMediaData) {
    var data = recentMediaData.data;
    for (var k=0; k<data.length;k++) {
        var content = data[k];
        usersImageArray.push(content); //loops through the users images (max 20)
    };
    //console.log(usersImageArray);
};

  ///sorted in code below



// this needs to be called!
function displayinitalusers(usersImageArray) {

  var arrayByTime=sortByTime(usersImageArray);
  for (var i=0;i<arrayByTime.length;i++){
  var imageobj = arrayByTime[i];
  var timestamp = imageobj.caption.created_time;
  
  var div = document.createElement('div');
  var author = document.createElement('p');
  var title=document.createElement('p');
  var date=document.createElement('p');
  var image=document.createElement('img');

  title.innerHTML=imageobj.caption.text;
  date.innerHTML=timestamp;
  author.innerHTML=imageobj.user.username;

  image.setAttribute('src', imageobj.images.standard_resolution.url);
  image.setAttribute('alt', imageobj.caption.text);

  div.appendChild(author).id = "author";
  div.appendChild(image).id = "image";
  div.appendChild(title).id = "caption";
  //div.appendChild(date).id = "date";

  document.getElementById("user-content").appendChild(div);////////// HEREREERERERERERE
  };
};
//!



/////sorting process


function pivotSort (array){ //quicksort of array in highlest to lowest
    var n =array.length;
    if (n<2){
        return array;
    }
    else if (n===2){
        if (array[0][1]>array[1][1]){return array;}
        else {return [array[1],array[0]]};
    }
    else {
        var lower=[];
        var equal=[];
        var higher=[];
        var pivot =Math.floor(n/2);
        var pivValue=array[pivot][1];
        for (var j=0;j<n;j++){
            if (array[j][1]<pivValue){lower.push(array[j]);}
            else if (array[j][1]===pivValue){equal.push(array[j]);}
            else {higher.push(array[j]);}
        };
        return pivotSort(higher).concat(equal.concat(pivotSort(lower)));
    };
};

//

function sortByTime(array){
    var n= array.length; //number of objects in array
    var sortArray=[];
    for (var i=0;i<n;i++){
        var timestamp = parseInt(array[i].created_time);
        sortArray[i]=[array[i], (timestamp==null) ? 1 : timestamp];
    };
    var preresult=pivotSort(sortArray);
    var result =[];
    for (var k=0;k<n;k++){
        result[k]=preresult[k][0];
    };
    return result;
};
