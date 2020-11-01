function sum(){
    var a,b,c,d,e,f,g,h,i,j,sum;
    
    a = document.getElementById('pa').value;
    
    b=document.getElementById('cr').value;

    c=document.getElementById('cn').value;

    d=document.getElementById('v').value;

    e=document.getElementById('mv').value;

    f=document.getElementById('d').value;

    g=document.getElementById('i').value;

    h=document.getElementById('o').value;

    i=document.getElementById('p').value;

    j=document.getElementById('od').value

    sum = ((10*a) + (100*b) + (100*c) + (15*d) + (30*e) + (25*f) + (7*g) + (10*h) + (12*i) + (40*j));

    document.getElementById('bills').innerHTML = sum;

}
function reset(){
     
     document.getElementById('pa').value = "";
    
    document.getElementById('cr').value="";

    document.getElementById('cn').value="";

    document.getElementById('v').value="";

    document.getElementById('mv').value="";

    document.getElementById('d').value="";

    document.getElementById('i').value="";

    document.getElementById('o').value="";

    document.getElementById('p').value="";

    document.getElementById('od').value="";

    document.getElementById('bills').innerHTML = "";
}
     
  

var calculateButton = document.getElementById('calculate');
var resetButton = document.getElementById('reset');


calculateButton.addEventListener('click',sum);
resetButton.addEventListener('click',reset);
