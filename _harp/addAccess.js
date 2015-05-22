//buttons!!!

document.onscroll=function(){
  var scrollpos = document.getElementById("users").scrollHeight;
  var scrolledcurrent = window.pageYOffset;
  // console.log(scrollpos);
  // console.log(scrolledcurrent);
  if(scrolledcurrent>(scrollpos-550)){
  displayinitialusers(usersImageArray);
};

};




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






var flag=false;

function loadtag(){
  var tag = document.getElementById('hashtag1').value;
  document.getElementById("imagecontainer").innerHTML='';
  // var section='hashtags';
  if (tag){//checking to see if empty
    flag=true;
    var apiRequest= "https://api.instagram.com/v1/tags/" + tag + "/media/recent?access_token=" + accesstoken + "&callback=callbackFunction";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);

    console.log(apiscript);
  };//end if empty

};//end load




function callbackFunction(dataReturned){
  if (flag){var data=dataReturned.data;  flag=false;} //tags
  else {var data=dataReturned}; //users
  //console.log(dataReturned.data);
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

    document.getElementById("imagecontainer").appendChild(div);////////// HEREREERERERERERE
  };
};




var usersarray = ['jack.rans','taylorswift','mileycyrus','jackpandas','schwarzengger','ladygaga','privatekanye','peteburnsicon','denniskeithrodman','mariahcary','parishilton','joeyessex90'];  //currently hardcoded

function loadUserArray(){
  for (var j = 0; j< usersarray.length;j++){
        var userEncoded = encodeURIComponent( usersarray[j] ); //may not be necessary, This is to ensure no errors on unknown characters in users names
        var apiRequest= "https://api.instagram.com/v1/users/search?q=" + '"' + userEncoded + '"' + "&access_token=" + accesstoken + "&callback=callbackGetUser"; //sends api request of this user to seek out the user id as a number
      // console.log(apiRequest);
        var apiscript=document.createElement('script');
        apiscript.setAttribute('src', apiRequest);
        document.body.appendChild(apiscript); //appends to script to get info send to the callbackGetUser function
  }
};//end load


function callbackGetUser (dataReturned){
  var data=dataReturned.data;
    // console.log(dataReturned.data);
  var userId = data[0].id; // access the user_id (number) and gives it to the loaduser function
    // console.log(userId);
    loaduser(userId);
    // return userId;
};

var userscalled = 0;


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
    userscalled+=1;
    var data = recentMediaData.data;
    for (var k=0; k<data.length;k++) {
        var content = data[k];
        usersImageArray.push(content);
        if (k==data.length-1 && userscalled==usersarray.length){displayinitialusers(usersImageArray)};
         //loops through the users images (max 20)
    };
    //console.log(usersImageArray);
};

  ///sorted in code below

var k=0;

// this needs to be called!
function displayinitialusers(usersImageArray) {

  var arrayByTime=sortByTime(usersImageArray);
  for (var i=k;i<arrayByTime.length && i<k+20;i++){
  var imageobj = arrayByTime[i];
  var timestamp;
  var title=document.createElement('p');
  var image=document.createElement('img');
  var author = document.createElement('p');
  if (imageobj.caption==null){
    title.innerHTML="no caption";
    timestamp=1;
  }
  else{
    timestamp = imageobj.caption.created_time;
    title.innerHTML=imageobj.caption.text;
    image.setAttribute('alt', imageobj.caption.text);
  }

  author.innerHTML=imageobj.user.username;

  var div = document.createElement('div');

  var date=document.createElement('p');




  date.innerHTML=timestamp;

  image.setAttribute('src', imageobj.images.standard_resolution.url);


  author.setAttribute('class','author');
  image.setAttribute('class','image');
  title.setAttribute('class','title');


  div.appendChild(author);
  div.appendChild(image);
  div.appendChild(title);

  document.getElementById("users").appendChild(div);////////// HEREREERERERERERE
  };
  k+=20;
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
        if (array[i].created_time==null){array[i].created_time=1};
        sortArray[i]=[array[i], parseInt(array[i].created_time)];
    };
    var preresult=pivotSort(sortArray);
    var result =[];
    for (var k=0;k<n;k++){
        result[k]=preresult[k][0];
    };
    return result;
};
