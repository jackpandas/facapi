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
    var apiRequest= "https://api.instagram.com/v1/users/" + user + "/media/recent?access_token=" + accesstoken + "&callback=fillRecentArray";
    var apiscript=document.createElement('script');
    apiscript.setAttribute('src', apiRequest);
    document.body.appendChild(apiscript);
  }//end if empty
};//end load


function callbackFunction(dataReturned){
  var data=dataReturned;
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

    usersImageArray.append
    document.getElementById("hashtags").appendChild(div);////////// HEREREERERERERERE
  };
};


function loadUserArray(){
var usersarray = ['jack.rans','taylorswift','kimkardashian','zooeydeschanel','jackpandas'];

  for (var j = 0; j< usersarray.length;j++){
        var userEncoded = encodeURIComponent( usersarray[j] );
        var apiRequest= "https://api.instagram.com/v1/users/search?q=" + '"' + userEncoded + '"' + "&access_token=" + accesstoken + "&callback=callbackGetUser";
      // console.log(apiRequest);
        var apiscript=document.createElement('script');
        apiscript.setAttribute('src', apiRequest);
        document.body.appendChild(apiscript);
  }
    console.log(usersImageArray);
};//end load


function loadUserId(){
  var user = document.getElementById('user1').value;
  var userEncoded = encodeURIComponent(user);
  // var section='hashtags';
  if (user){//checking to see if empty
    var apiRequest= "https://api.instagram.com/v1/users/search?q=" + '"' + userEncoded + '"' + "&access_token=" + accesstoken + "&callback=fillRecentArray";
      //console.log(apiRequest);
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



//This function fills the usersImageArray with recent media
function fillRecentArray(recentMediaData) {
    var data = recentMediaData.data;
    for (var k=0; k<data.length;k++) {
        var content = data[k];
        usersImageArray.push(content);
    }
    //console.log(usersImageArray);

}
//This function parseInts every timestamp in the array (failed)
//function timeStampParse(array) {
//    var that = [];
//    for (var p = 0; p < array.length;p++){
//        var time = parseInt(array[p].created_time);
//        that[p].created_time = time;
//    } return that
//    
//}


//This function sorts the usersImageArray by timestamp of individual pictures
//function sortArray(array) {
//    var len = array.length,
//        value,
//        i,
//        j;
//    for (i=0; i < len; i++) {
//        value = parseInt(array[i].created_time);
//        for (j=i-1; j > -1 && array[j] > value; j--) {
//            parseInt(array[j+1]).created_time = parseInt(array[j].created_time);
//   }
//       parseInt(array[j+1]).created_time = value;
//    
//         
//        }
//        return array;
//}


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





function sortbytime (array){
    var n= array.length; //number of objects in array
    var sortArray=[];
    for (var i=0;i<n;i++){
        sortArray[i]=[array[i],parseInt(array[i].created_time)];
    };
    var preresult=pivotSort(sortArray);
    var result =[];
    for (var k=0;k<n;k++){
        result[k]=preresult[k][0];
    };
    return result;
    

    
};
    
    
    





//function insertionSort(items) {
//
//    var len     = items.length,     // number of items in the array
//        value,                      // the value currently being compared
//        i,                          // index into unsorted section
//        j;                          // index into sorted section
//    
//    for (i=0; i < len; i++) {
//    
//        // store the current value because it may shift later
//        value = items[i];
//        
//        /*
//         * Whenever the value in the sorted section is greater than the value
//         * in the unsorted section, shift all items in the sorted section over
//         * by one. This creates space in which to insert the value.
//         */
//        for (j=i-1; j > -1 && items[j] > value; j--) {
//            items[j+1] = items[j];
//        }
//
//        items[j+1] = value;
//    }
//    
//    return items;
//}
//
////console.log(parseInt(usersImageArray[0].created_time))
//


