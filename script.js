function bmi(){
    var weight=document.getElementById("weight").value
    var height=document.getElementById("height").value
    if(weight==""&&height=="")
    {
        alert("Please enter weight and height");
        return
    }
    else if(weight=="")
    {
        alert("Please enter weight");
        return
    }
    else if(height=="")
    {
        alert("Please enter height");
        return
    }
    var b;
    b=(weight/((height)*(height)));
    if(b<18.5)
    {
        var q=document.getElementById("demo1").innerHTML="You are <b>Underweight</b>..Please take care of your health";
    }
   else if(b>=18.5&&b<=24.9)
    {
        var q=document.getElementById("demo1").innerHTML="You are <b>Healthy</b>..Keep going on";
    }
   else if(b>=25.0&&b<=29.9)
    {
        var q=document.getElementById("demo1").innerHTML="You are <b>Overweight</b>..Please take care on your health";
    }
    else if(b>=30.0)
    {
        var q=document.getElementById("demo1").innerHTML="You are in <b>Obesity condition</b>..Plaese Consult a doctor";
    }
    
    var p=document.getElementById("demo").innerHTML="Your BMI is "+b;
}