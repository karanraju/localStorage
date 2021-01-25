const inpkey=document.getElementById("inpkey");

const inpvalue=document.getElementById("inpvalue");

const btnInsert=document.getElementById("btnInsert");

const  isOutput=document.getElementById("isOutput").innerHTML;


btnInsert.onclick=function(){
    const  key=inpkey.value;
    const  Value=inpvalue.value;


    if(key&&Value)
    {
        localStorage.setItem(key,Value);
        location.reload();
    }

};

for(i=0;i<localStorage.length;i++)
{
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);
     

    document.getElementById('isOutput').innerHTML += `${key}: ${value}</br>`;

}