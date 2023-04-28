let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 50,
    rareCars: 2
}

for (const car in statistics) {
    if(car.startsWith('r') || statistics[car] % 2 == 1){
        console.log(statistics[car]);
    }
}
