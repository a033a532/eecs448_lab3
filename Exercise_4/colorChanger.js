document.addEventListener("DOMContentLoaded", () =>
{
    function updateText(){
      let borderObject = {red: document.querySelector ("#bRed"), blue: document.querySelector ("#bBlue"), green: document.querySelector ("#bGreen"),  width: document.querySelector ("#bWidth")};
      let backgroundObject = {red: document.querySelector ("#bgRed"), blue: document.querySelector ("#bgBlue"), green: document.querySelector ("#bgGreen")};
      document.getElementById("p").style.backgroundColor = 'rgb(' + backgroundObject.red.value + ',' + backgroundObject.green.value + ',' + backgroundObject.blue.value + ')';
      document.getElementById("p").style.border = borderObject.width.value + ' solid ' + 'rgb(' + borderObject.red.value + ',' + borderObject.green.value + ',' + borderObject.blue.value + ')';
    }
    document.getElementById('updateText').addEventListener('click', function(){
      updateText();
    })
})
