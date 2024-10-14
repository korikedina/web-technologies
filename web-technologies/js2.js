function checkAll(){
    checkJobDescription();
    checkSalary();
    checkWorkPlace();
    checkAge();
    checkName();
}

function checkName(){
    let name= document.getElementById("name");
    let asd = document.getElementById("NameError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(name.value.length<10){
        let d = document.createElement('div');
        d.innerHTML = "Name must be at least 10 characters.";
        d.id = "NameError";
        document.getElementById("sanyi").prepend(d);
        name.classList.add('error');
    }
}

function checkAge(){
    let age= document.getElementById("age");
    let asd = document.getElementById("AgeError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(age.value<0 || age.value>120){
        let d = document.createElement('div');
        d.innerHTML = "Age must be between 0 and 120.";
        d.id = "AgeError";
        document.getElementById("sanyi").prepend(d);
        age.classList.add('error');


    }
}

function checkWorkPlace(){
    let wp= document.getElementById("wp");
    let asd = document.getElementById("WPError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(wp.value.length<5){
        let d = document.createElement('div');
        d.innerHTML = "Workplace must be at least 5 characters.";
        d.id = "WPError";
        document.getElementById("sanyi").prepend(d);
        wp.classList.add('error');


    }
}

function checkSalary(){
    let salary= document.getElementById("salary");
    let asd = document.getElementById("SError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(salary.value<200){
        let d = document.createElement('div');
        d.innerHTML = "Salary must be at least 200(K).";
        d.id = "SError";
        document.getElementById("sanyi").prepend(d);
        salary.classList.add('error');
    }
}

function checkJobDescription(){
    let jd= document.getElementById("jd");
    let asd = document.getElementById("JDError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(jd.value.length<200){
        let d = document.createElement('div');
        d.innerHTML = "Job description must be at least 200 characters.";
        d.id = "JDError";
        document.getElementById("sanyi").prepend(d);
        jd.classList.add('error');
    }
}

function checkGender(){
    let jd= document.getElementById("jd");
    let asd = document.getElementById("JDError");
    if(asd != null) document.getElementById("sanyi").removeChild(asd);
    if(jd.value.length<200){
        let d = document.createElement('div');
        d.innerHTML = "Job description must be at least 200 characters.";
        d.id = "JDError";
        document.getElementById("sanyi").prepend(d);
        jd.classList.add('error');
    }
}