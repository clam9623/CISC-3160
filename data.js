let canvas1, ctx1, canvas2, ctx2;
function draw()
{
    canvas1 = document.getElementById('canvas1');
    ctx1 = canvas1.getContext('2d');
    horizon();

    canvas2 = document.getElementById('canvas2');
    ctx2 = canvas2.getContext('2d');
    lines();
}
function horizon(){  
new Chart(ctx1, 
          {
    type: 'horizontalBar',
    data: {
      labels: ["Oliva", "Emma", "Chloe", "Sophie", "Mia", "Emily", "Hannah", "Charlotte", "Ella", "Isabella", "Ava"],
      datasets: [
        {
          label: "Names",
          backgroundColor: ["#e8c3b9", "#c45850", "#FF6347", "#FFA500", "#FFD700","#3CB371", "#3cba9f","#3e95cd", "#4169E1","#9370DB", "#BA55D3"],
          data: [136,109,103,86,79,78,77,57,49,46,46]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ['Most Popular Asian American Pacific Islander Baby Girl Names in 2017', 
               ' Made By Christine Lam']
      }
    }
});
}
function lines(){  
new Chart(ctx2, 
{
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
  options: {
     aspectRatio: 1.1,
    title: {
      display: true,
      text: ['Percentages of New York City Population by Borough from 1950-2020', ' Made by Christine Lam']
    }
  }
});
}
