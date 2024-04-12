// Define a function to create a car object with options...
function make_car(manufacturer:string,model:string, ...options:{[key:string]:any}[]):{manufacturer: string, model: string,option:{[key:string]:any}}{

// Initialize a car object with manufacturer and model
  const car:{manufacturer:string,model:string,option:{[key:string]:any}}=
  {
    manufacturer: manufacturer,
    model : model,
    option : {}
  };
  // Add additional option to the car object
  for(const option of options){
    for(const key in option){
      car.option[key]=option[key];
    }
  }
  return car;
}

// Call the function to create a car object
const car = make_car("Toyota", "Corolla", {color: 'blue'}, {sunroof: true});

// Print all the information is stored correctly in the car object
console.log(car);
      