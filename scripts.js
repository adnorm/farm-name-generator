
var adjective = ["Crooked", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Winding", "Fresh", "Verdant", "Rolling", "Babbling", "Jumping", "Old", "Willow", "Shady", "Calm", "Lucky", "Sunny", "Green", "Sleeping","Windy","Victory","Freedom","Deep", "Whisper","Liberty","Early","Morning","Spring","Blooming", "Dancing","Hidden","Golden","Rich","Quiet","Wandering","Honest","Truthful","Sliding","Singing","Fruitful","Lost","Roaming","Wild","Bucking","Sun","Moon","Flying","Sweet","Muddy","Joyful","Sylvan","Friendly"]


var object = ["Acres", "Pastures", "Grove", "Crest", "Fields", "Pines", "Stone", "Hollow", "Hickory","Roost", "Barn", "Willow", "Run", "Harvest","Trails", "Vista","Trace", "Cottage","Passage","Dream","Boots","Work"]
var list;

function generator() {
  var geoFeatures = $("input.geofeatures:checked").map(function(){
      return $(this).val();
    }).get();

  var pluralOrNot = $("input.plural:checked").map(function(){
      return $(this).val();
    }).get();

  var farmType = $("input.farmtype:checked").map(function(){
      return $(this).val();
    }).get();

var secondWord = object.concat(geoFeatures);

 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + secondWord[Math.floor(Math.random() * secondWord.length)]+ " " + farmType[Math.floor(Math.random() * farmType.length)]+ pluralOrNot[Math.floor(Math.random() * pluralOrNot.length)];;;


}



window.onkeyup = function(event) {
   if (event.keyCode == 32) {
      generator()
   }
}
