// CARGAMOS EL DOCUMENTO
document.addEventListener("DOMContentLoaded", () => {
  // PROCESO GET PARA CONECTAR AL API
  axios.get('https://jsonplaceholder.typicode.com/users')
  // MANEJAMOS LA RESPUESTA QUE NOS DARA
  .then(response => {
    const data = response.data;
    // HACEMOS RECORRIDO POR LAS ARRAYS (MAP)
  const labels = data.map(user => user.name);
  const values = data.map(user => user.id);


  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          label: "users",
          data: values,
        },
      ],
    },
  });

  })

});
