
// FOR MATHS

const Score_Math = document.querySelector('#mathScore');
var gradeM = document.querySelector("#grade1");
const unit_Math = document.querySelector('#mathUnit');

UIbtn = document.querySelector('#btnCell');
UIresult = document.querySelector('#gpaScore');

// 3 credit unit points
const Cred_3unitPointA =  3 * 5, Cred_3unitPointB =  3 * 4, Cred_3unitPointC = 3 * 3  , Cred_3unitPointD = 3 * 2 , Cred_3unitPointE = 3 * 1, Cred_3unitPointF = 3 * 0 ;

Score_Math.addEventListener('blur', function(){
	let math = parseInt(Score_Math.value );
	
	if ( math >= 0 && math <= 39){
		gradeM.textContent = "F";
		unit_Math.textContent = Cred_3unitPointF ;
		gradeM.style.background = "#fff";
		unit_Math.style.background = "#fff";
	}
	else if ( math >= 40 &&  math <= 44 ){
		gradeM.textContent = "E";
		unit_Math.textContent = Cred_3unitPointE;
		gradeM.style.background = "#fff";
		unit_Math.style.background = "#fff";
	}
	else if ( math >= 45 &&  math <= 49 ){
		gradeM.textContent = "D";
		unit_Math.textContent = Cred_3unitPointD ;
		gradeM.style.background = "#fff";
		unit_Math.style.background = "#fff";
	}
	else if ( math >= 50 && math <= 59) {
		gradeM.textContent = "C";
		unit_Math.textContent = Cred_3unitPointC ;
		gradeM.style.background = "#fff";
		unit_Math.style.background = "#fff";
	}
	else if ( math >= 60 && math <= 69){
		gradeM.textContent = "B";
		unit_Math.textContent = Cred_3unitPointB ;
		gradeM.style.background = "#fff";
		unit_Math.style.background = "#fff";
	}
	else if ( math >= 70 && math <= 100){
		gradeM.textContent = "A";
		unit_Math.textContent = Cred_3unitPointA ;
		gradeM.style.background = "#fff";
		unit_Math.style.background = "#fff";
	}
	else if( math < 0 || math > 100){
		gradeM.textContent = "";
		unit_Math.textContent = "" ;
		gradeM.style.background = "red";
		unit_Math.style.background = "red";
	}
	else{
		return false;
	}


})


// FOR ENGLISH

let scorerEng = document.querySelector('#engScore');
const graderEng = document.querySelector("#engGrade");
let unitEng = document.querySelector('#engUnit');

scorerEng.addEventListener('blur', function(){
	let Eng = parseInt(scorerEng.value);

	if ( Eng >= 0 && Eng <= 39){
		graderEng.textContent = "F";
		unitEng.textContent = Cred_3unitPointF;
		graderEng.style.background = "#fff";
		unitEng.style.background = "#fff";
	}
	else if ( Eng >= 40 && Eng <= 44){
		graderEng.textContent = "E";
		unitEng.textContent = Cred_3unitPointE;
		graderEng.style.background = "#fff";
		unitEng.style.background = "#fff";
	}
	else if ( Eng >= 45 && Eng <= 49){
		graderEng.textContent = "D";
		unitEng.textContent = Cred_3unitPointD;
		graderEng.style.background = "#fff";
		unitEng.style.background = "#fff";
	}
	else if ( Eng >= 50 && Eng <= 59){
		graderEng.textContent = "C";
		unitEng.textContent = Cred_3unitPointC;
		graderEng.style.background = "#fff";
		unitEng.style.background = "#fff";
	}
	else if ( Eng >= 60 && Eng <= 69){
		graderEng.textContent = "B";
		unitEng.textContent = Cred_3unitPointB;
		graderEng.style.background = "#fff";
		unitEng.style.background = "#fff";
	}
	else if ( Eng >= 70 && Eng <= 100){
		graderEng.textContent = "A";
		unitEng.textContent = Cred_3unitPointA;
		graderEng.style.background = "#fff";
		unitEng.style.background = "#fff";
	}
	else if( Eng < 0 || Eng > 100){
		graderEng.textContent = "";
		unitEng.textContent = "";
		graderEng.style.background = "red";
		unitEng.style.background = "red";
	}
	else{
		return false;
	}
})


// FOR BIOLOGY

let scorerBio = document.querySelector('#bioScore');
const graderBio = document.querySelector("#bioGrade");
let unitBio = document.querySelector('#bioUnit');

// 2 credit unit points 
const Cred_2unitPointA =  2 * 5, Cred_2unitPointB =  2 * 4, Cred_2unitPointC = 2 * 3  , Cred_2unitPointD = 2 * 2 , Cred_2unitPointE = 2 * 1, Cred_2unitPointF = 2 * 0 ;


scorerBio.addEventListener('blur', function(){
	let bio = parseInt(scorerBio.value);

	if ( bio >= 0 && bio <= 39){
		graderBio.textContent = "F";
		unitBio.textContent = Cred_2unitPointF;
		graderBio.style.background = "#fff";
		unitBio.style.background = "#fff";
	}
	else if ( bio >= 40 && bio <= 44){
		graderBio.textContent = "E";
		unitBio.textContent = Cred_2unitPointE;
		graderBio.style.background = "#fff";
		unitBio.style.background = "#fff";
	}
	else if ( bio >= 45 && bio <= 49){
		graderBio.textContent = "D";
		unitBio.textContent = Cred_2unitPointD;
		graderBio.style.background = "#fff";
		unitBio.style.background = "#fff";
	}
	else if ( bio >= 50 && bio <= 59){
		graderBio.textContent = "C";
		unitBio.textContent = Cred_2unitPointC;
		graderBio.style.background = "#fff";
		unitBio.style.background = "#fff";
	}
	else if ( bio >= 60 && bio <= 69){
		graderBio.textContent = "B";
		unitBio.textContent = Cred_2unitPointB;
		graderBio.style.background = "#fff";
		unitBio.style.background = "#fff";
	}
	else if ( bio >= 70 && bio <= 100){
		graderBio.textContent = "A";
		unitBio.textContent = Cred_2unitPointA;
		graderBio.style.background = "#fff";
		unitBio.style.background = "#fff";
	}
	else if ( bio < 0 || bio > 100){
		graderBio.textContent = "";
		unitBio.textContent = "";
		graderBio.style.background = "red";
		unitBio.style.background = "red";
	}
	else{
		return false;
	}
})



// FOR CHEMISTRY

let scorerChem = document.querySelector('#chemScore');
const graderChem = document.querySelector("#chemGrade");
let unitChem = document.querySelector('#chemUnit');


scorerChem.addEventListener('blur', function(){
	 let chem = parseInt(scorerChem.value);

	if ( chem >= 0 && chem <= 39){
		graderChem.textContent = "F";
		unitChem.textContent = Cred_2unitPointF;
		graderChem.style.background = "#fff";
		unitChem.style.background = "#fff";
	}
	else if ( chem >= 40 && chem <= 44){
		graderChem.textContent = "E";
		unitChem.textContent = Cred_2unitPointE;
		graderChem.style.background = "#fff";
		unitChem.style.background = "#fff";
	}
	else if ( chem >= 45 && chem <= 49){
		graderChem.textContent = "D";
		unitChem.textContent = Cred_2unitPointD;
		graderChem.style.background = "#fff";
		unitChem.style.background = "#fff";
	}
	else if ( chem >= 50 && chem <= 59){
		graderChem.textContent = "C";
		unitChem.textContent = Cred_2unitPointC;
		graderChem.style.background = "#fff";
		unitChem.style.background = "#fff";
	}
	else if ( chem >= 60 && chem <= 69){
		graderChem.textContent = "B";
		unitChem.textContent = Cred_2unitPointB;
		graderChem.style.background = "#fff";
		unitChem.style.background = "#fff";
	}
	else if ( chem >= 70 && chem <= 100){
		graderChem.textContent = "A";
		unitChem.textContent = Cred_2unitPointA;
		graderChem.style.background = "#fff";
		unitChem.style.background = "#fff";
	}
	else if ( chem < 0 || chem > 100){
		graderChem.textContent = "";
		unitChem.textContent = "";
		graderChem.style.background = "red";
		unitChem.style.background = "red";
	}
	else{
		return false;
	}
})




// FOR PHYSICS

let scorerPhy = document.querySelector('#phyScore');
const graderPhy = document.querySelector("#phyGrade");
let unitPhy = document.querySelector('#phyUnit');


scorerPhy.addEventListener('blur', function(){
	 let phy = parseInt(scorerPhy.value);

	if ( phy >= 0 && phy <= 39){
		graderPhy.textContent = "F";
		unitPhy.textContent = Cred_2unitPointF;
		graderPhy.style.background = "#fff";
		unitPhy.style.background = "#fff";
	}
	else if ( phy >= 40 && phy <= 44){
		graderPhy.textContent = "E";
		unitPhy.textContent = Cred_2unitPointE;
		graderPhy.style.background = "#fff";
		unitPhy.style.background = "#fff";
	}
	else if ( phy >= 45 && phy <= 49){
		graderPhy.textContent = "D";
		unitPhy.textContent = Cred_2unitPointD;
		graderPhy.style.background = "#fff";
		unitPhy.style.background = "#fff";
	}
	else if ( phy >= 50 && phy <= 59){
		graderPhy.textContent = "C";
		unitPhy.textContent = Cred_2unitPointC;
		graderPhy.style.background = "#fff";
		unitPhy.style.background = "#fff";
	}
	else if ( phy >= 60 && phy <= 69){
		graderPhy.textContent = "B";
		unitPhy.textContent = Cred_2unitPointB;
		graderPhy.style.background = "#fff";
		unitPhy.style.background = "#fff";
	}
	else if ( phy >= 70 && phy <= 100){
		graderPhy.textContent = "A";
		unitPhy.textContent = Cred_2unitPointA;
		graderPhy.style.background = "#fff";
		unitPhy.style.background = "#fff";
	}
	else if ( phy < 0 || phy > 100){
		graderPhy.textContent = "";
		unitPhy.textContent = "";
		graderPhy.style.background = "red";
		unitPhy.style.background = "red";
	}
	else{
		return false;
	}
})


// GPA CALCULATOR

// credit unit




// grade unit point
UIbtn.addEventListener('click', function gpaCalc(){

	let mathPoint = parseInt(document.querySelector('#mathUnit').textContent);
	let engPoint = parseInt(document.querySelector('#engUnit').textContent);
	let bioPoint = parseInt(document.querySelector('#bioUnit').textContent);
	let chemPoint = parseInt(document.querySelector('#chemUnit').textContent);
	let phyPoint = parseInt(document.querySelector('#phyUnit').textContent);

	

	const mathUnix = parseInt(document.querySelector('#unitMath').innerText);
	const engUnix = parseInt(document.querySelector('#unitEng').innerText) ;
	const bioUnix = parseInt(document.querySelector('#unitBio').innerText) ;
	const chemUnix = parseInt(document.querySelector('#unitChem').innerText) ;
	const phyUnix = parseInt(document.querySelector('#unitPhy').innerText) ;

	let unitPoint_Sum = parseInt( mathPoint + engPoint + bioPoint + chemPoint + phyPoint );
	let credUnit_Sum = parseInt(mathUnix + engUnix + bioUnix +chemUnix + phyUnix );

	let gpa = (unitPoint_Sum / credUnit_Sum).toFixed(2);

	UIresult.innerText = gpa;
})
