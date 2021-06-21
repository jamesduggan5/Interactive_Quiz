



var count = 0;// setting the count tally 


function check(){//function to check the question and add to the count variable if its right

			

				var q1 = document.sportsquiz.q1.value;//taking the value that has the "q1" id.
				if(q1 =="a"){
					count++//adding a mark to the total if the question is correct.
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong, the correct answer was 'a'");//Letting them know what the right answer was 
				}

				
			}

function check2(){//function to check the question and add to the count variable if its right
				

				var q2 = document.sportsquiz.q2.value;

				if(q2 =="a"){
					count++
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong, the correct answer was 'a'");//Letting them know what the right answer was 
				}

				
			}

function check3(){//function to check the question and add to the count variable if its right
				

				var q3 = document.sportsquiz.q3.value;
				if(q3 == "a"){
					count++
					alert("Correct");//Letting them know they got the question correct.


				}
				else{
					alert("Wrong, the correct answer was 'a'");//Letting them know what the right answer was 
				}
				
			}
function check4(){//function to check the question and add to the count variable if its right
				
				var q4 = document.sportsquiz.q4.value;
				
				if(q4 == "b"){
					count++
					alert("Correct");//Letting them know they got the question correct.

				}
				else{
					alert("Wrong, the correct answer was 'b'");//Letting them know what the right answer was 
				}
				
			}
function check5(){//function to check the question and add to the count variable if its right
					
				var q5 = document.sportsquiz.q5.value;
				
				if(q5== "b"){
					count++
					alert("Correct");//Letting them know they got the question correct.


				}
				else{
					alert("Wrong, the correct answer was 'b'");//Letting them know what the right answer was 
				}
				
			}
function check6(){//function to check the question and add to the count variable if its right
					
				var q6 = document.sportsquiz.q6.value;
					
				if(q6=="b"){

					count++
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong, the correct answer was 'b'");//Letting them know what the right answer was 
				}
				
			}

function check7(){//function to check the question and add to the count variable if its right
				
				var q7 = document.sportsquiz.q7.value;
					
				if(q7=="d"){
					count++
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong, the correct answer was 'd'");//Letting them know what the right answer was 
				}

			}

function check8(){//function to check the question and add to the count variable if its right
				
				var q8 = document.sportsquiz.q8.value;
				
				if(q8 == "a"){
					count++
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong, the correct answer was 'a'");//Letting them know what the right answer was 
				}

				
			}


function check9(){//function to check the question and add to the count variable if its right
				
				var q9 = document.sportsquiz.q9.value;
					
				if(q9=="c"){
					count++
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong, the correct answer was 'c'");//Letting them know what the right answer was 
				}

			}




function check10(){//function to check the question and add to the count variable if its right
				
				var q10 = document.sportsquiz.q10.value;
					
				if(q10=="a"){
					count++
					alert("Correct");//Letting them know they got the question correct.
				}
				else{
					alert("Wrong the correct answer was 'a'");//Letting them know what the right answer was 
				}{
					alert("You are now done the quiz, click below to recieve your score ");//Tells the user to click the interactive feature below to recieve final score
				}

			}

function finalscore()//Shows the user what their final score in the quiz was.
{

	document.getElementById("demo").innerHTML = " You got </br>"  + count + " out of 10 questions right </br>" + "Thanks for playing!";//Code for displaying the final score.
}








				
				
			

			