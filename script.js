const url = "https://joke110.p.rapidapi.com/random_joke";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "apikey",
    "X-RapidAPI-Host": "joke110.p.rapidapi.com",
  },
};
var i=0;

const f = async () => {
  const response = await fetch(url, options);
  const result = await response.json();
  type.innerHTML = result.type;
  setup.innerHTML = result.setup;
  punchline.innerHTML = result.punchline;
  i++;
  total.innerHTML=i;
//   id.innerHTML=result.id;
};
f();
document.getElementById("btn").addEventListener("click",f);
document.getElementById("a1").addEventListener("click",()=>
{
    document.getElementById("maja").innerHTML=`ispe kam chal raha hai . <br><br>
    Jaldi hi update hojayega ji !!!! &#128516`
    document.getElementById("custoo").style.visibility="hidden"
})

document.getElementById("a2").addEventListener("click",()=>
{
    document.getElementById("maja").innerHTML=`isme bhiii . <br><br>
    Jaldi hi update hojayega ji !!!! &#128516`
    document.getElementById("custoo").style.visibility="hidden"
})

document.getElementById("s1").addEventListener("click",()=>
{
    document.getElementById("maja").innerHTML=`&#128516 sorry`
    document.getElementById("custoo").style.visibility="hidden"
})

