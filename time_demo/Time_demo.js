/**
 * Created by lc on 2016/5/10.
 */
var aWeekName=
    [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven"
    ];


function toDouble(time){
    if(time<10){
        return '0'+time;
    }
    else{
        return ''+time;
    }
}
function getTimeArray() {
    var aNumber=[];
    var oDate = new Date();
    var oYear = oDate.getFullYear();
    var oMonth = oDate.getMonth();
    var oDay = oDate.getDate();//ÈÕ
    var oHour = oDate.getHours();
    var oMin = oDate.getMinutes();
    var oSec = oDate.getSeconds();

    var oWeek = (oDate.getDay()+6)%7;//ÐÇÆÚ
    //alert(oWeek);
    var str=''+(oYear)+' '+toDouble(oMonth+1)+' '+toDouble(oDay)+' '+toDouble(oHour)+' '+toDouble(oMin)+' '+toDouble(oSec)+' '+oWeek;
    //alert(str)   ;
    //alert(aWeekName[oWeek]);
    //return str;

    var aChar=str.split('');
    for(i=0;i<aChar.length-1;i++)
    {
        aNumber[i]=parseInt(aChar[i]);
    }
    var day_d=aWeekName[oWeek];
   aNumber[aChar.length-1]=day_d;
    //alert(aNumber);

    var aImage=document.getElementsByTagName("img");
    for(var i=0;i<aImage.length-1;i++){
        if(!isNaN(parseInt(aImage[i].alt)))
        {
            aImage[i].src="images/" +aNumber[i]+".png";
        }
    }
    if(i==aImage.length-1){
        aImage[i].src="images/" + aNumber[i]+ ".png";
    }
    //return aNumber;

}

window.onload=function(){
    setInterval(getTimeArray,1000);
    getTimeArray();

};



