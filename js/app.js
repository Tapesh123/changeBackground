const color = ["yellow", 'green', 'blue', 'red'];

const btn = document.getElementById("btn");

// add event listner

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * color.length);
    console.log(random);
    const body = document.body;
    body.style.backgroundColor = color[random];

})