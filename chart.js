let fruits = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 3, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 8, color: "purple" }
];
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    fruits.forEach((fruit, index) =>
    {
        // Bar
        ctx.fillStyle = fruit.color;
        ctx.fillRect(index * 100, canvas.height - (fruit.quantity * 30), canvas.width / fruits.length, canvas.height);

        // Caption
        ctx.fillStyle = 'black';
        ctx.font = 'bold 24px serif';
        ctx.textAlign = 'center';
        ctx.fillText(fruit.quantity, (index * 100) + 50, canvas.height - 50, canvas.width / fruits.length);
        ctx.fillText(fruit.name, (index * 100) + 50, canvas.height - 25, canvas.width / fruits.length);
    });
}
  }
