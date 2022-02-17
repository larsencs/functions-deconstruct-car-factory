const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}
const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}
const addWheels = (chassisObject) =>{
    //adds wheels to the object
    chassisObject.wheels = 4
    //returns object
    return chassisObject
}
const addEngine = (chassisObject) =>{
    //adds an engine to the object
    chassisObject.engine = "4.8L"
    //returns object
    return chassisObject
}
const addSteeringWheel = (chassisObject) =>{
    //adds steering wheel
    chassisObject.steeringWheel = "Tilting"
    //returns object
    return chassisObject
}
const addDriveTrain = (chassisObject) =>{
    //adds a drive train
    chassisObject.driveTrain = "Two wheel drive"
    //returns object
    return chassisObject
}
//calls functions in order to build car
const build = () => {
    const car = createChassis()
    addWheels(car)
    addEngine(car)
    addSteeringWheel(car)
    addBody(car)
    addDriveTrain(car)

    return car
}

const newCar = build()
console.log(newCar)
