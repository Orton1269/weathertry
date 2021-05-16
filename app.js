

var inputval=document.querySelector('#cityinput');
var btn =document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var des=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');

apik = "40571a4cebf8e307234d65638147e50c";

/*function convertion(val){
    return (val-273).toFixed(2)

}*/
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik).then(res => res.json())
    //.then(data=>console.log(data))
    .then(data =>{
        console.log(data);
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var temper=data['main']['temp']
        var wndspd=data['wind']['speed']

        city.innerText=nameval;
        temper=temper-273;
        temper=temper.toFixed(2);
        temper=temper+"ºC"
        temp.innerText=temper;
        des.innerText=descrip;
        wndspd=wndspd+"KMPH"
        wind.innerText=wndspd;
    })
    
    
    .catch(err=>alert("Wrong City"))
});