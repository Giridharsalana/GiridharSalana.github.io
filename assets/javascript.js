<script type="text/javascript">
var text = ["An Electronics Engineer", "An Electronics Hobbyist", "Tech Enthusiast", "A Geeky Coder", "A Curious Being", "An Overthinker"];
var counter = 0;
var elem = document.getElementById("Textchange");
var inst = setInterval(change, 2000);

function change() 
{
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) 
  {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  } 
}

var color = ["green", "red", "blue",];
counter1 = Math.floor(Math.random() * 4);
//var counter1 = 0;
elem1 = document.getElementById("colorchange");
var inst1 = setInterval(colorchange, 1000);
function colorchange() 
{
  elem1.style.color = color[counter1];
  counter1++;
  if (counter1 >= color.length) 
  {
    counter1 = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  } 
}

change()
</script>
