// // Define a function to create a car object with optional options

function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    // Return the created car object
    return car;
}

// Call the function to create a car object
let my_car = create_car("BMW", "Corolla", "color: Black","Sunroof: True");

// Print the car object to ensure all information stored correctly
console.log(my_car);