function myPrompt(){
    var txt;
    var name = prompt("What's your name,friend?", "คนสวย");
    if(name == null || name == ""){  
      txt = "No problem And You can go to my site.";  
    } else {  
    txt = name ;
    }
  
  document.getElementById("res").innerHTML = txt;
  
  }