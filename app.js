function cipher (){
  text = prompt("Ingresa el texto.");

  var first=String.fromCharCode((0+33)%26);

  var position=first.charCodeAt();

  var x = text.slice(0,position);

  var y = text.slice(position,text.length);


    console.log(y+x);


}

cipher();
