
/**
 * Function to capitalize the first letter of a string
 * @param {String} string 
 */
function capitalize(string) {
    // Grab the first character, capitlalize it, 
    // attach the rest of the string and return the value
    return (string.charAt(0).toUpperCase() + string.slice(1));
}

/**
 * Function to get a list of pokemon from the pokeapi
 * Resource: https://pokeapi.co/
 */
function get_pokemon() {
    // Instantiate the XMLHttpRequest Class
    let xml = new XMLHttpRequest;

    // Create the url
    let url = "https://pokeapi.co/api/v2/pokemon/"

    // Open the HTTP Request using the url
    xml.open('GET', url);

    // Run code while the resource is being loaded
    xml.onload = function(onload){/* console.log(onload); */ }

    // Use a callback function for each time the ready state changes in the request
    xml.onreadystatechange = function() {
        // Run code for each of the ready states
        if (this.readyState = 0) {/* console.log("is at 0"); */ }
        if (this.readyState = 1) {/* console.log("is at 1"); */ }
        if (this.readyState = 2) {/* console.log("is at 2"); */ }
        if (this.readyState = 3) {/* console.log("is at 3"); */ }
        if (this.readyState = 4) {/* console.log("is at 4"); */ }

        if (this.readyState == 4 && this.status == 200) {
            console.log("Ready state is at 4 and HTTP Status is 200");
        }

        // If the request is finished use the data in a new function.
        if (this.readyState == this.DONE){
            console.log('Request finished!');
            let data = JSON.parse(xml.responseText);
            // Run the load_pokemon function to fill the DOM
            // Then run the callbacl function to sort the listbox
            load_list(data.results, function(listbox){
                let options = Array.prototype.slice.call(listbox.childNodes, 0);
                console.log(options);
                options.sort( (a,b) => {
                    if(a.text > b.text) return 1;
                    if(a.text < b.text) return -1;
                    return 0
                });

                listbox.innerHTML = "";
                options.forEach(option => {
                    listbox.appendChild(option);
                })
                listbox.select
                // listbox.append(options);
                // console.log(options);
            });
            console.log(data);    
        }
    }

    // Send the HTTP Request
    xml.send();
}

/**
 * Function to handle the data returned by the original API call
 * @param {Array} data 
 * @param {Function} callback 
 */
function load_list(data, callback){
    // Grab the select element
    let listbox = document.getElementById('list');

    // Declare an iterator variable to be incremented in the forEach
    let numprocessed = 0;

    data.forEach((pokemon, index, array) => {
        let poke_option = document.createElement('option');
        poke_option.value = pokemon.url;
        poke_option.innerText = capitalize(pokemon.name);
        listbox.appendChild(poke_option);
        numprocessed++;
        if(numprocessed === array.length){
            callback(document.getElementById('list'));
        }
    });
}

/**
 * Function to handle a selection change in the select box.
 * @param {Selection} event 
 */
function handle_list_select(event){
    // Grab the url from the value attribute
    let pokemon_url = event.target.value;
    console.log(event.target.value);

    let xml = new XMLHttpRequest();

    xml.open('GET', pokemon_url);

    xml.onreadystatechange = function(){
        if(this.readyState == this.DONE){
            let data = JSON.parse(this.responseText);
            load_pokemon(data);
        }
    }

    xml.send();
}

/**
 * This function will fill the DOM with all of the information.
 * @param {JSON} data 
 */
function load_pokemon(data){
    // Grab the content div to be filled later.
    let content = document.getElementById('content');
    
    // Create a name heading then fill it with the pokemon name.
    let name = document.createElement('h1');
    name.innerText = capitalize(data.name);

    // Create a metadata div.
    let metadata = document.createElement('div')

    // Create paragraph elements for all of the metadata
    let height          = document.createElement('p');
    height.innerText    = `Height: ${data.height}`;
    let base_exp        = document.createElement('p');
    base_exp.innerText  = `Base Experience: ${data.base_experience}`;
    let weight          = document.createElement('p');
    weight.innerText    = `Weight: ${data.weight}`;
    let types           = document.createElement('p');
    types.innerText     = 'Types: '
    data.types.forEach(type => {
        types.innerText += `${type.type.name},`;
    })

    // Append each of the metadata items to
    metadata.append(height, weight, base_exp, types);

    // Append the nodes to the DOM
    content.appendChild(name);
    content.appendChild(metadata)
    console.log(data);
}

/**
 * Build the elements and HTML programmatically
 */
function build_page() {
    let body = document.getElementById('sidebar');

    let selectbox = document.createElement('select');
    selectbox.id = 'list';
    selectbox.onchange = function(event){
        handle_list_select(event);
    }
    let defoption = document.createElement('option');
    defoption.value = 'none';
    defoption.innerText = 'Select a Pokemon...';
    selectbox.appendChild(defoption)
    body.appendChild(selectbox);
}

/**
 * Main function that runs when the Window loads and will run other functions
 */
function main(){
    // Run these functions as the page loads
    get_pokemon();
    build_page();
}

/**
 * When the window loads run the main function
 */
window.onload = main();