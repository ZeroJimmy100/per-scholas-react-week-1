let name: string = "Adam";
console.log(name);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

function getInputValue()
{
    let inputVal: number = document.getElementById("myInput").value;

                
    for(let i = 0; i < inputVal; i++)
    {
         //Generate x y coords, offset by the top x,y of the leaf:
         var x = (Math.random()*150);
         var y = (Math.random()*100);
         var x2 = (Math.random()*10);
         var y2 = (Math.random()*10);
         //Translate
        
        ctx.fillStyle = "green";

        ctx.fillRect(x2, y2, x, y);
        
    }
}