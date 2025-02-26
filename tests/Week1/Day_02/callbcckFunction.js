
function checkAvailabilit(movieName, callBack)
{
  console.log("Checking the movie");

  setTimeout(()=>
  {
    console.log(`Movie ${movieName} is available `)
      callBack();
    
  },2000);
}

function playMovie()
{
  console.log("Playing the movie");
}

checkAvailabilit("Beast", playMovie);