var gala = new Apple('Gala', 0.49, 'red');

console.log(gala);


function build_page(){
    let sidebar = document.getElementById('sidebar');

    let form = document.createElement('div');
    form.style.padding = '2%';

    let name = document.createElement('input');
    name.type = 'text';
    name.id = 'name_in';
    name.name = 'name';
    let name_label = document.createElement('label');
    name_label.htmlFor = 'name_in';
    name_label.innerText = 'Name: ';
    
    let price_in = document.createElement('input');
    price_in.id = 'price_in';
    price_in.type = 'text';
    price_in.name = 'price';
    let price_label = document.createElement('label');
    price_label.htmlFor = 'price_in';
    price_label.innerText = 'Price: ';
    
    let color_in = document.createElement('input');
    color_in.id = 'color_in';
    color_in.type = 'text';
    color_in.name = 'color';
    let color_label = document.createElement('label');
    color_label.htmlFor = 'color_in';
    color_label.innerText = 'Color: ';

    let button = document.createElement('button');
    button.innerText = 'Create Apple';
    button.onclick = create_apple();

    form.append(name_label, name, price_label, price_in, color_label, color_in, button);
    sidebar.append(form);
}

function create_apple(){
    
}

function main() {
    build_page();
}

window.onload = main();