const default_grid = 16;
const default_squares = Math.pow(16,2);

for (let index = 0; index < default_squares; index++) {
    let new_div = document.createElement('div');
        document.getElementsByClassName('container')[0].appendChild(new_div);
}
document.getElementsByClassName('container')[0].style.cssText = 'grid-template-columns: repeat(' + default_grid + ', 1fr); grid-template-rows: repeat(' + default_grid + ', 1fr)';

function remove_default(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function creategrid(event) {
    // let container = document.querySelector('.container');
    remove_default(document.getElementsByClassName('container')[0]);
    const gridsize = document.getElementById('gridsize').value;
    const grid = Math.pow(gridsize,2);

    for (let index = 0; index < grid; index++) {
        let new_div = document.createElement('div');
        document.getElementsByClassName('container')[0].appendChild(new_div);
    }
    document.getElementsByClassName('container')[0].style.cssText = 'grid-template-columns: repeat(' + gridsize + ', 1fr); grid-template-rows: repeat(' + gridsize + ', 1fr)';
    event.preventDefault();
}



form.addEventListener('submit', creategrid);

document.querySelector('.container').addEventListener('mouseover', function(event) {
    
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    let color = event.target.style.background;

    event.target.style.background = rgb;
  
    
    document.querySelector('.container').style.background = 'white';

    // event.target.style.cssText = 'background-color:rgb(15,68,158)';
    // event.target.style.background = 'rgb(126,18,165)'
})



