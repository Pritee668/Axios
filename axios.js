let url="https://api.genderize.io/?name=";
let inp=document.querySelector(".css-input");
let btn=document.querySelector(".myButton");
// console.log(btn);
// console.log(inp);
let gen=document.querySelector(".gender");

async function getGender(name){
    let furl=url+name;
    const res=await axios.get(furl);
    gen.innerHTML=res.data.gender;
    console.log(res);
    console.log(res.data.gender);
};
getGender();
btn.addEventListener("click",()=>{
    let name=inp.value
    getGender(name);
    inp.value="";
    gen.innerHTML="";
   
});
