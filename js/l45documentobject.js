let val;


val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;


// console.log(val);

// html ထဲကlinkအရေတွက်(a)ကိုသိချင်ရင် document.links


val = document.links;//html collection html ကြီးတခုလုံးထွက်လာလိမ်မယ် array nae out

// val = document.links[0];//array လိုပဲindex numberနဲခေါ်ရတယ်
// val = document.links[3];
// val = document.links[3].id;id ko ခေါ်ချင်ရင်
// val = document.links[3].className; //class ကိုခေါ်ချင်ရင် class က stringနဲထွက်လာတယ်

val = document.links[3].classList;//domtokenlist
val = document.links[3].classList[0];
val = document.links[3].classList[1];

//   string နဲမထွက်ဘူး array နဲ့ထွက်လာလိမ့်မယ် ထွက်လာတဲဟာ domtokenlist naeထွက်လာမယ်
//array ဆိုတော့သူကဖြတ်ထူတ်လို့ရတယ်


val = document.forms;//html collection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;//domtokenlist
val = document.forms[0].action;
val = document.forms[0].method;



val = document.images;
val = document.images[0].id;
val = document.images[0].classList;//DOMTOKENLIST
val = document.images[0].className;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].src;

val = document.images[0].getAttribute('type');
// val = document.images[0].getAttribute('src');

// မရှိတဲ့attribute  တွေကို ခေါ်ချင်ရင် getattribute() ko use

//20.5
// scripts ka htmlcollection pay tal သူကjs ထဲမှာရှိတဲ့script 1 ku
// ko ပြောတာ နောက်ပြီးscripts[0]ဆိုသူobject 1 ku lone ya pee

//get attribute ဆိုတာသူတခုပဲရမယ် eg.src ဆိုsrc 1ခုတွက်ပဲရမယ် တကြောင်းလုံးတွက်မရဘူး

val = document.scripts;//htmlcollection
val = document.scripts[0].classList;//DOMTOKENLIST
val = document.scripts[0].className;;
val = document.scripts[0].type;
val = document.scripts[0].src;

val = document.scripts[0].getAttribute('type');
val = document.scripts[0].getAttribute('src');



// console.log(val);
//action ka database ko poe mar

//----------------------------------------------------

//change style

// css ko js mar use chin yin (.style) ko use par 
// နောက်ကနေ.backgroundcolor,.padding....အစရှိသဖြင့်ပြောင်းလို့ရတယ်

//csss mar meaning full ဖြစ်တဲစကားလုံးနစ်ခုကိုဆက်ချင်ရင်- နဲ့join
// js mar ရှေ့စာကားကိုအကြီးပေး eg.backgroundColor


// document.getElementById("tasktitle").style.backgroundColor ="green";
// document.getElementById("tasktitle").style.color ="#fff";
// document.getElementById("tasktitle").style.padding ="5px";


// Change Content
// စာသားပြောင်းနည်း၃နည်းရှိတယ်
// innerHTMl ka html code  တွေထည့်ရေးလို့ရတယ်
// textContent and innerText ka html code တွေထည့်ရေးလို့မရပါ
//textContent ka စာသားတွေပြောင်းချင်ရင်တော့ရတယ်


// document.getElementById("tasktitle").textContent =' "My List" ';
// document.getElementById("tasktitle").innerText =' "My Task" ';
// document.getElementById("tasktitle").innerHTML =' <span style="color:blue;">My jobs</span>';

// Call by Class Name

// getElementsByClassName(); claas mar Elements ko s +
// sထည့်တာက classကmulti call lo ya loe class ကအများကြီးရှိလို့


let lis = document.getElementsByClassName("list-group-item");//HTML Collection
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color ="blue";
// lis[1].textContent ="Have to visit";

// textContent or innerText နဲ့ရေးလိုက်တဲ့ချိန်မှာ အမိူက်တောင်းပုံလေးပြောက်သွားတဲ့အကြောင်း
// အရင်းကတော့ textContent ka အထဲက a tag nae i tag ko ဖြတ်ပြီး
// overwrite လုပ်သွားလိုပါ


// Call by Tag (Element)

// index number 0 nae call ရင်တကြောင်းလုံးရတယ်


let litags = document.getElementsByTagName('li');
// console.log(litags);
// console.log(litags[3]);
// litags[0].style.color="red";
// litags[1].innerText ="Have to cook";


//Query Selector
// id,class,tag တွေကိုပါခေါ်တဲ့သူက query selector

// id ko call yin # ,calss so .  ထည့်ခေါ် 

//tag so ma lo par

// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));


// query selector call yin first line pal out pay tal အားလုံးမထွက်ဘူး

console.log(document.querySelector("li"));
document.querySelector("li").style.color="red";
document.querySelector("ul li").style.color="blue";
document.querySelector("ul li:nth-child(odd)").style.background="silver";//1
// document.querySelector("ul li:nth-child(even)").style.background = "grey";//2 
// document.querySelector("ul li:last-of-type").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").textContent = "Have to read";




//23.5
//နောက်ကဟာကရှိသမျှulထဲကliကိုခေါ်တာမို့လိုhtml collection နဲ့ထွက် ရှေကဟာကulကိုပဲခေါ်တာ



let listitems = document.querySelector("ul").getElementsByClassName("list-group-item");//result:HTML collection
 // listitems = document.querySelector("ul").querySelector(".list-group-item");//သူကတော့ul ထဲ့က list-group-itemကိုပဲခေါ်တာ//result:first li
console.log(listitems);
// console.log(listitems[2]);

// console.log(typeof listitems);




// array so looping pat lo ya
//forEach mar array ma hote yin forEach is not function
//ko pya mal

//HTML COLLECTION lo see yin looping pat lol ma ya so.. array ko change mal

// array ko change tal type ka (Array.from) 

// let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem,idx){
// 	console.log(arritems);

// 	arritem.textContent = "hello";

// 	arritem.innerText =`${idx} : Hello`;
// });




//query Selector all

// querySelector ka array nae out lar tal
//အကုန်ထုတ်ပေးတယ် nodelist  နဲ့ထွက်လာတယ်


let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its);

let itms = document.querySelectorAll("ul.list-group li.list-group-item");//nodelist
// console.log(itms);
// console.log(itms[3]);

// itms.forEach(function(itm,idx){
// 	// console.log(itm);
// 	// itm.textContent = "Hello";
// 	itm.innerText = `${idx} : Hello world`;
// });


const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);

const lievens = document.querySelectorAll("li:nth-child(even)");
// console.log(lievens);

// liodds.forEach(function(liodds,idx){
// 	 // console.log(liodds);
// 	 liodds.style.background = "green";
// });

// for(let i=0; i < lievens.length; i++){
	// console.log(i);

	// console.log(lievens[i]);


	// lievens[i].style.background = "silver";
// }


//Children;


let chl;

const getul = document.querySelector("ul.list-group");
// console.log(getful);

const getli = document.querySelector("li.list-group-item:first-child");
//console.log(getli);

chl = getul.children;//HTML Collection
// console.log(chl);
// console.log(chl[3]);

//getul.children[1].innerText = "Have to eat";
// getul.children[1].innerHTML =`Have to read <a href="#" id="delete-item1" class="delete-item" >
 					// <i class="far fa-trash-alt"></i></a>`;


// children to children


chl = getul.children;
chl = getul.children[1];
chl = getul.children[1].children;
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");

//       //ul      li        a          HTMLCollection
// // chl = getul.children[1].children[0].children;

//       //ul      li        a          i
// // chl = getul.children[1].children[0].children[0];

console.log(chl);

//First Element Child

//chi = getul.querySelector('li');
chl = getul.firstElementChild;
//console.log(chl);

//last Element Child
// chl = getul.querySelector("li:last-child");
chl = getul.lastElementChild;
// console.log(chl);


// child Element Count
chl = getul.children.length;
chl = getul.childrElementCount;

chl = getul.children[0].childrElementCount;
chl = getul.children[0].children[0].childrElementCount;
// console.log(chl);


//parent Element parent ko ပြန်ခေါ်တာ

const getfirstli = document.querySelector("li.list-group-item:first-child");
// console.log(getfirstli);

 let par = getfirstli.parentElement;
// console.log(par);


// Next Element Sibling

		// list item 1		list item 2
let sbl = getfirstli.nextElementSibling;
		// list item 1		list item 2			list item 3
	sbl = getfirstli.nextElementSibling.nextElementSibling;
		// list item 1		list item 2			list item 3       list item 4
	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
			// list item 1		list item 2			list item 3       list item 4		 list item 5
	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(sbl);


//Previous element sibiling
	// list item 1   list item 2   list item 3          list item 2
let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(psbl);

// 24.5
// Creat element

// element တွေကိုjs ka nay built mal

// element ကိုယူချင်ရင်getelement lo call

// ဖန်တီးတည်ဆောက်ချင်ရင်creatElement လို့ခေါ်

const newli = document.createElement("li");
// <li></li> တခုယူလိုက်တာနဲတူတူပဲ

//add id reolad နစ်ခါလုပ်ရမယ်
//<li id="new-item"></li>
newli.id = "new-item";



//add class
newli.className = "list-group-item";
//<li id="new-item" class="list-group-item"></li>
// sar thar twe add chin yin
// className nae add yin  တခါထည့်ရင်တခါရေးရတယ်

// classlist ka  ဖြည့်စွက်ပေးတာ ထည့်ရေးစရာမလိုဘူး
// ADD class
// newli.className = "list-group-item";
// newli.className = "delete-me";
// newli.className = "list-group-item delete-me";
// newli.classList.add("delete-me","hide-me");

// console.log(newli);



//add attribute = setAttribute(qulifiedName, value)mar parameter 2 ku have
//<li id="new-item" class="list-group-item" title="newitem"></li>
// newli.setAttribute("title","newitem");

// newli.textContent = "hay";//keyword
// newli.innerText = "hi";
// newli.innerHTMl = `List Item 6<a href="#" id="delete-item1" class="delete-item" >
//  					<i class="far fa-trash-alt"></i>
//  				</a>`;

// စာသားထည့်ချင်ရင် Create Text Node အသစ်လုပ်မယ်စာသားလေးကို ထည့်ချင်တဲ့ဟာမှာ
//appendChild(); အနေနဲ့ထည့်မယ်

// Creat Text Node; 

// newli.appendChild(document.createTextNode("Save Myanmar"));//menthod



// console.log(newli);


const newlink = document.createElement("a");

//add href
newlink.href = "#";

// add id
newlink.id = "delete-item6";

//add class
newlink.classList.add("delete-item");

newlink.innerHTMl = `<i class="far fa-tash-alt"><i>`;

console.log(newlink);


// <a href='#' id='delete-item6' class='delete-item'></a>

newli.appendChild(newlink);
console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);

//replace element

const newtitleh2 = document.createElement("h2");

newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode("All My Lists");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4)



//replaceChild(new,old)

const getcardaction = document.querySelector(".card-action");

getcardaction.replaceChild(newtitleh2,oldtitleh4);



//Remove Element (self)

const getlis = document.querySelectorAll("li");//Node list
// console.log(getlis);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[5].remove();


//Remove child Element child ko pal delete mal

const getfirstul = document.querySelector("ul");
// console.log(getfirstul);

// getfirstul.remove();

// getfirstul.removeChild(getlis[0]);

// className vs classList 

const firstli = document.querySelector("li:first-child");
// console.log(firstli);
// console.log(firstli.children); //HTML collection
// console.log(firstli.children[0]);

let firstlink;

firstlink = firstli.children[0];
console.log(firstli.children[0].className);

//a
//firstlink.className = "delete-myself";
//firstlink.className = "delete-myself delete-item";
// firstlink.className = "delete-item delete-me delete-myself";


// firstlink = firstlink.classList;//DOM Token List
//console.log(firstlink);
//console.log(firstlink[0]);
//console.log(firstlink[1]);


// //a 
// firstlink.classList.add("delete-ourserve");
// firstlink.classList.add("delete-myself");
// firstlink.classList.add("delete-myself","delete-ourserve");


// firstlink.className = "delete-item delete-me delete-myself delete-ourserve";
// firstlink.className = "delete-item delete-me delete-myself";

//firstlink.classlist.remove('delete-myself');
//firstlink.classlist.remove('delete-myself','delete-ourserve');

//replace(old,new);
// firstlink.className = "delete-item delete-myself";
// firstlink.classList.replace("delete-item"," delete-myself");
// firstlink.classList.replace("delete-item", "delete-ourserve");

// if(firstlink.classList.contains("delete-myself")){
// 	console.log("yes");

// }else{
// 	console.log("no");

// }



// if(firstlink.className === "delete-item delete-me"){
// 	console.log("yes");

// }else{
// 	console.log("no")

// }
// console.log(firstlink.className);


// 25.5
// Attribute();

let getatt = firstlink.href;
getatt = firstlink.getAttribute("href");
console.log(getatt);
firstlink.setAttribute("href","https://google.com");

getatt =firstlink.hasAttribute("href");
console.log(getatt);//true
getatt =firstlink.hasAttribute("title");
console.log(getatt);//false


// add EventLisetener(eventtype,function)


const clearbtn = document.querySelector(".clear-tasks");

//Method1
// clearbtn.addEventListener('click',function(e){
	// console.log('hay i am working');

	// console.log(e);
	// console.log(e.target);
	// console.log(this);

	// e.preventDefault();

// });

// clearbtn.addEventListener('click',()=>{
// 	// console.log('hay i am working');

// 	console.log(e);
// 
	
// });




// method 2
// clearbtn.addEventListener("click",myclick);

// console.log(clearbtn.className);

function myclick(e){
   // console.log('hay i am working');

	// console.log(e);
	// console.log(e.target);
	// console.log(this);

  let val;
  val = e.target.className;
  val = e.target.classList;//DOM TOken List
  val = e.target.id;
  // console.log(val);

  // e.target.innerText = "Finished";

  //Event Type
  val = e.type;


  // coordinate event - relative to the window
  val = e.clientX;
  // val = e.clientY;

  // coordinate event - relative to the element
  val = e.offsetX;
  val = e.offsetY;


  console.log(val);

}


//Mouse event
const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const cardactionarea = document.querySelector(".card-action");
// const headingh2 = document.querySelector('h2');





//single click
// clbtn.addEventListener('click',mouseeventtype);

// double click
// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

//30.5
//mouse enter
// card.addEventListener("mouseenter",mouseeventtype);

//mouseover(action to each childs mouse hover)
// cardactionarea.addEventListener("mouseover",mouseeventtype);

//mouseleave
// card.addEventListener("mouseleave",mouseeventtype);

//mouseout (action to each childs mouse out)
// cardactionarea.addEventListener("mouseout",mouseeventtype);

//mousemove
// card.addEventListener('mousemove',mouseeventtype);


// function mouseeventtype(e){
// 	console.log(`Event type = ${e.type}`);

// 	//headingh2.textContent = `MouseX: ${e.clientX} MouseY:${e.clientY}`;
// 	// headingh2.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;

// 	// document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1`;



// }

// const formel = document.querySelector("form");

// formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
// 	console.log(`Event Type = ${e.type}`);

// 	e.preventDefault();

// }


const inputtask = document.getElementById("task");
const geth2 = document.querySelector("h2");

//keydown
// inputtask.addEventListener('keydown',inputeventype);

//keypress
// inputtask.addEventListener('keypress',inputeventype);

//keyup
// inputtask.addEventListener('keyup',inputeventype);

//input
// inputtask.addEventListener('input',inputeventype);



//focus
// inputtask.addEventListener('focus',inputeventype);

//blur
// inputtask.addEventListener('blur',inputeventype);

//cut
// inputtask.addEventListener('cut',inputeventype);

//paste
// inputtask.addEventListener('paste',inputeventype);

//copy
// inputtask.addEventListener('copy',inputeventype);




// function inputeventype(e){
// 	console.log(`Event Type = ${e.type}`)

// 	// console.log(inputtask.value);
// 	// geth2.textContent = inputtask.value;

// 	console.log(e.target.value);
// 	geth2.textContent = e.target.value;



// }


// Event bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('i am card');
// });


// 2.6
//Event Delegation
// const deleitem = document.querySelector(".delete-item");

// deleitem.addEventListener("click",deleteitem);

// function deleteitem(e){
// 	console.log("i am delete item");

// 	console.log(e.target);

// 	e.preventDefault();
// }



// document.body.addEventListener('click',evendeleg);

function evendeleg(e){

	// console.log('i am working');

	// console.log(e.target);

	// 	//i
	// if(e.target.className === "far fa-tash-alt"){
	// 	console.log("hay i am trash can");
	// }

			//i  a အောက်ကဟာ
	// if(e.target.parentElement.className === "delete-item"){
	// 	console.log("hay i am delete item by a tag");
	// }

      //i a အပါ်ကတခု
	// if(e.target.parentElement.className === "delete-item delete-me"){
	// 	console.log("hay i am delete item by a tag")
	// }


			//i    a
     if(e.target.parentElement.classList.contains('delete-item')){
    // 	console.log("hay i am delete item by a tag");

    		//i.    a             li
       e.target.parentElement.parentElement.remove();
    }


	e.preventDefault();

}


document.querySelector("form").addEventListener("submit",function(e){

	// console.log("hay i am working")

	const getnewtask = document.getElementById("task").value;
	// console.log(getnewtask);

	//localStorage.setItem('mytask',getnewtask);

	let alltasks;

	if(localStorage.getItem('mytasks') === null){
		alltasks = [];
	}else{
		alltasks = JSON.parse(localStorage.getItem("mytasks"));
	}

	//["have to eat"]

	alltasks.push(getnewtask);

	//["have to eat","have to cook"];

	localStorage.setItem("mytasks",JSON.stringify(alltasks));

	console.log(alltasks);




	e.preventDefault();

});

//console.log(localStorage.getItem("mytasks"));
//console.log(typeof localStorage.getItem("mytasks"));

//console.log(JSON.parse(localStorage.getItem("my tasks")));
//console.log(typeof JSON.parse(localStorage.getItem("my tasks")));




let getalltasks = localStorage.getItem("mytasks");
    getalltasks = JSON.parse(getalltasks);
    console.log(getalltasks);


    getalltasks.forEach(function(getalltasks){
    	console.log(getalltasks);
    });




















