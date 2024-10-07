function checkAll(){
    
    checkName();
}

function checkName(){
    let name= document.getElementById("name");
    let asd = document.getElementById("NameError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(name.value.length<10){

        //<div>Name too short!</div>
        let d = document.createElement('div');
        d.innerHTML = "Name too short!";
        d.id = "NameError";
        document.getElementById("sanyi").prepend(d);

    }
}