fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((json) => {
    json.forEach((element) => {
    let newCat = element.category;
    options.data.push(newCat)
     })
    })
// use this JSON to find and set correct option data for the chart
.then(() => {
// Display the chart
myChart.setOption(options);
})
// Initialize the echarts instance based on the prepared div
let myChart = echarts.init(document.getElementById('main'));