const ctx =
document
.getElementById("myChart");

let chart =
new Chart(ctx,{

type:"bar",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"Mei"
],

datasets:[{

label:
"Data Aktivitas",

data:[
120,
230,
180,
300,
260
]

}]

},

options:{
responsive:true
}

});


function updateDashboard(){

let user =
Math.floor(
Math.random()*5000
);

let project =
Math.floor(
Math.random()*100
);

let task =
Math.floor(
Math.random()*1000
);

document
.getElementById("users")
.innerText=user;

document
.getElementById("projects")
.innerText=project;

document
.getElementById("tasks")
.innerText=task;


chart.data.datasets[0].data=[

Math.random()*300,
Math.random()*300,
Math.random()*300,
Math.random()*300,
Math.random()*300

];

chart.update();

}