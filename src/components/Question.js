import React, { useEffect, useState } from "react";

function Question({ onAnswered }){
const [timeRemaining, setTimeRemaining] = useState(10);




useEffect(() =>{


  const timer = setTimeout(()=>{
  setTimeRemaining(timeRemaining -1);

  }, 1000);



  return () =>{

  clearTimeout(timer);
  };
}, [timeRemaining]);






useEffect(()=>{

if(timeRemaining == 0){
setTimeRemaining(10)
onAnswered(false)


}
}, [timeRemaining, onAnswered]);

return(


  <div>

<p>Time Remaining:{timeRemaining}</p>
<p>Here's  thequestion...</p>

  </div>
)
}



///In this implementation, we're using two separate useEffect hooks. The first one sets up a timer using setTimeout that decrements timeRemaining by 1 every second. We're also returning a cleanup function from this useEffect that clears the timeout when the component unmounts or when the timeRemaining state changes.

//The second useEffect hook watches for changes to timeRemaining and triggers some behavior when timeRemaining reaches 0. In this case, we're resetting timeRemaining back to 10 and calling the onAnswered callback with a value of false.

//Note that we're including both timeRemaining and onAnswered as dependencies in the second useEffect hook to ensure that the hook runs whenever either of those values change. This is necessary to ensure that the cleanup function for the first useEffect hook runs properly when the component unmounts.
export default Question;
