let questions=[

{q:"When working in a team you prefer:",a:["Taking charge","Motivating others","Analyzing details","Supporting quietly"],type:["D","I","C","S"]},

{q:"Your ideal work style:",a:["Fast and competitive","Social and energetic","Careful and precise","Calm and steady"],type:["D","I","C","S"]},

{q:"People describe you as:",a:["Bold","Friendly","Analytical","Patient"],type:["D","I","C","S"]},

{q:"Your decision style:",a:["Quick decisions","Group discussion","Data analysis","Safe choices"],type:["D","I","C","S"]},

{q:"Your communication style:",a:["Direct","Expressive","Thoughtful","Gentle"],type:["D","I","C","S"]},

{q:"In stressful situations you:",a:["Take control","Talk it out","Think logically","Stay patient"],type:["D","I","C","S"]},

{q:"Your biggest strength:",a:["Confidence","Social skills","Accuracy","Stability"],type:["D","I","C","S"]},

{q:"You prefer work that is:",a:["Challenging","Interactive","Detailed","Stable"],type:["D","I","C","S"]},

{q:"Your leadership style:",a:["Commanding","Inspiring","Strategic","Supportive"],type:["D","I","C","S"]},

{q:"You usually make decisions:",a:["Fast","With others","Using data","Slow but safe"],type:["D","I","C","S"]}

];

let scores={D:0,I:0,C:0,S:0};

let current=0;

function startQuiz(){

document.getElementById("landing").style.display="none";
document.getElementById("quiz").style.display="block";

showQuestion();

}

function showQuestion(){

let q=questions[current];

document.getElementById("progress").innerText="Question "+(current+1)+" / "+questions.length;

document.getElementById("progressFill").style.width=((current)/questions.length*100)+"%";

document.getElementById("question").innerText=q.q;

let html="";

q.a.forEach((opt,i)=>{

html+=`<div class="option" onclick="choose('${q.type[i]}')">${opt}</div>`;

});

document.getElementById("options").innerHTML=html;

}

function choose(type){

scores[type]++;

current++;

if(current<questions.length){

showQuestion();

}else{

showResult();

}

}

function showResult(){

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

let max="D";

for(let t in scores){

if(scores[t]>scores[max]) max=t;

}

document.getElementById(max+"box").classList.add("highlight");

let total=questions.length;

document.getElementById("percentages").innerHTML=`

<li>Dominance: ${Math.round(scores.D/total*100)}%</li>
<li>Influence: ${Math.round(scores.I/total*100)}%</li>
<li>Conscientiousness: ${Math.round(scores.C/total*100)}%</li>
<li>Steadiness: ${Math.round(scores.S/total*100)}%</li>

`;

if(max=="D"){

document.getElementById("typeTitle").innerText="Dominance (D) – The Leader";

document.getElementById("typeDesc").innerText="Confident, direct and results-driven.";

document.getElementById("strengths").innerHTML="<li>Leadership</li><li>Confidence</li><li>Decision making</li>";

document.getElementById("weaknesses").innerHTML="<li>Impatient</li><li>Dominating</li>";

document.getElementById("careers").innerHTML="<li>Entrepreneur</li><li>Manager</li><li>CEO</li>";

}

if(max=="I"){

document.getElementById("typeTitle").innerText="Influence (I) – The Socializer";

document.getElementById("typeDesc").innerText="Outgoing, enthusiastic and persuasive.";

document.getElementById("strengths").innerHTML="<li>Communication</li><li>Networking</li>";

document.getElementById("weaknesses").innerHTML="<li>Impulsive</li><li>Disorganized</li>";

document.getElementById("careers").innerHTML="<li>Marketing</li><li>Sales</li><li>Public Relations</li>";

}

if(max=="C"){

document.getElementById("typeTitle").innerText="Conscientiousness (C) – The Analyst";

document.getElementById("typeDesc").innerText="Detail oriented, logical and analytical.";

document.getElementById("strengths").innerHTML="<li>Accuracy</li><li>Problem solving</li>";

document.getElementById("weaknesses").innerHTML="<li>Overthinking</li><li>Perfectionism</li>";

document.getElementById("careers").innerHTML="<li>Engineer</li><li>Data Analyst</li><li>Scientist</li>";

}

if(max=="S"){

document.getElementById("typeTitle").innerText="Steadiness (S) – The Supporter";

document.getElementById("typeDesc").innerText="Calm, supportive and reliable.";

document.getElementById("strengths").innerHTML="<li>Patience</li><li>Loyalty</li>";

document.getElementById("weaknesses").innerHTML="<li>Avoid conflict</li><li>Slow decisions</li>";

document.getElementById("careers").innerHTML="<li>Teacher</li><li>HR</li><li>Counselor</li>";

}

}

function restartTest(){

location.reload();

}