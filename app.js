 const dateOfBirth = document.querySelector("#dateofbirth");
 const luckyNumber = document.querySelector("#luckynumber");
 const checkButton = document.querySelector("#check-button");
 const message = document.querySelector(".show-message");

 checkButton.addEventListener("click",()=>{
    //  console.log(dateOfBirth.value);
    //  console.log(luckyNumber.value);
     const dob = dateOfBirth.value;  // 24-06-1995
     const luckyNumberToCheck = Number(luckyNumber.value); // luckyNumber : 3
     if(dob && luckyNumberToCheck)                           //(24-06-1995 && 3)
     {
         const sumofDate= calculateSum(dob);                // goes to function and return value is  36
         console.log("hiiiii",sumofDate);
        //  console.log(typeof(sumofDate),typeof(luckyNumberToCheck));

         CheckNumberIsLucky(sumofDate,luckyNumberToCheck);     // (36,3)
     }
    else{
        message.innerText =`Please enter both the fields!!!😠😠😠`;
    }

 });

 const calculateSum = (dob) =>
 {
     dob = dob.replaceAll("-","");
     console.log(dob);
     let sum = 0;
     // It also working using for..of loop
    //  for(let digit of dob){
    //      sum = sum + Number(digit);     
    //  }
    for(let i=0; i< dob.length; i++){
        sum= sum + Number(dob.charAt(i));
    }
     return sum;
 }

 const CheckNumberIsLucky = (sumofDate,luckyNumberToCheck) => {

    if(sumofDate % luckyNumberToCheck === 0){            //(36 % 3===0)
        message.innerText=`${luckyNumberToCheck} is a lucky number!!!!🥳🥳🥳🥳🥳🥳`; }

    else{
        message.innerText=`${luckyNumberToCheck} is  not a lucky number!!!☹️☹️☹️☹️`;
    }

 }