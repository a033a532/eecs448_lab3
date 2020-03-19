document.addEventListener("DOMContentLoaded", () =>
{
  var count = 0;
  function changePic(n)
  {
    if (n > 4)
    {
      n = 0;
    }
    if (n < 0)
    {
      n = 4;
    }
    switch(n){
      case 0:
        document.getElementById("image").src = "dog.jpg";
        break;
      case 1:
        document.getElementById("image").src = "cat.jpg";
        break;
      case 2:
        document.getElementById("image").src = "turtles.jpg";
        break;
      case 3:
        document.getElementById("image").src = "lamb.jpg";
        break;
      case 4:
        document.getElementById("image").src = "download.jpg";
        break;

    }
    count = n;
  }
  document.getElementById('previous').addEventListener('click', function(){
    changePic(count - 1);
  })
  document.getElementById('next').addEventListener('click', function(){
    changePic(count + 1);
  })
})
