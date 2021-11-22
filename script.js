
let myBtn = document.getElementById("myBtn")

myBtn.addEventListener ("click" , function(){

    console.log("klick")
    let minAlder = document.getElementById("minAlder").value;

    var rattAlder = parseInt(minAlder, 10);

    console.log(rattAlder);

    if(rattAlder < 18){

        alert("du är för ung!");

    }else if(rattAlder >= 18 && rattAlder < 65){
  
            alert("välkommen in!");
    } else{
 
        alert("du är för gammal!");
    }
});

