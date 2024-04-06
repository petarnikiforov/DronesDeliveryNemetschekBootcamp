  export class Calculating {
    static calculateDeliveryTimes(warehouses, customers, orders) {
        let totalTime = 0;
        let orderTimes = [];
        orders.forEach((order) => {
            let customer = customers.find(c => c.id === order.customerId);
            let warehouse = this.findNearestWarehouse(warehouses);// finding the nearest warehouse to the customer location
            if (warehouse && customer) {
                let distance = Calculating.calculateDistance(warehouse.coordinates, customer.coordinates);

                let deliveryTime = distance;
                orderTimes.push(deliveryTime);
                totalTime += deliveryTime;
            }
        });
        console.log("The times are " + orderTimes + " minutes");
        return orderTimes;
    }
    static findNearestWarehouse(warehouses, customer){
        let nearestWarehouse;
        let minimumDistance = 9999999999999;
        for(let i = 0; i <warehouses.length; i++){
            if(Calculating.calculateDistance(warehouses[i], customer) < minimumDistance){
                minimumDistance = Calculating.calculateDistance(warehouses[i], customer);
                nearestWarehouse = warehouses[i];
            }
        }
        return nearestWarehouse;
    }
    static CalculatingTotalDeliveryTime(orderTimes){
        let totalTime = 0;
        orderTimes.forEach((orderTime) => {totalTime += orderTime});
        return totalTime;
    }

   static calculateDistance(warehouse, customer) {
        if (warehouse && customer && warehouse.hasOwnProperty('x') && warehouse.hasOwnProperty('y') && customer.hasOwnProperty('x') && customer.hasOwnProperty('y')) {
            let dx = (customer.x - warehouse.x) ** 2;
            let dy = (customer.y - warehouse.y) ** 2;
            let squaredDistance = dx + dy;
            return Math.sqrt(squaredDistance);
        } else {
            return null; // When there are missing coordinates
        }
    }

    static calculateUsedDrones(warehouses, orders) {
        let totalUsedDrones = 0;

        orders.forEach(order => {
            const warehouseName = order.warehouse;
            const warehouse = warehouses.find(w => w.name === warehouseName);

            if (warehouse && warehouse.drones.length > 0) {
                totalUsedDrones++;
            }
        });

        return totalUsedDrones;
    }
    static findBiggestBatteryLevel(warehouse){
        let HighestBatteryLevel = 0;
        let DroneWithHighestBatteryLevel;
        warehouse.freeDrones.forEach((drone) =>
        {if(drone.batteryLevel > HighestBatteryLevel){
            HighestBatteryLevel = drone.batteryLevel;
            DroneWithHighestBatteryLevel = drone;
        }})
        return DroneWithHighestBatteryLevel;
    }
    static hasEnoughBattery(distance, drone){
        if(drone.batteryLevel > distance*2){// trqbva da se updeitne sprqmo kilowatite
            return true;
        }else{
            this.charge(drone);
            return false;
        }
    }
    static charge(drone){
        drone.chargeTime += 20;// trqbva da se updeitne sled 20 che e out of use i sled 20 min da se vurne na free.
    }

    static simulate(warehouses, customers, orders){
        orders.forEach((order) => {
            let customer = customers.find(c => c.id === order.customerId);
            let warehouse = this.findNearestWarehouse(warehouses, customer);// finding the nearest warehouse to the customer location
            let freeDrones = warehouse.freeDrones;
            let dronesInUse = warehouse.dronesInUse;
            let distance = this.calculateDistance(warehouse, customer);
            let drone = this.findBiggestBatteryLevel(warehouse);
            if(this.hasEnoughBattery(distance, drone)){
                this.sendDrone(drone, distance, freeDrones, dronesInUse);
            }
        });
        warehouses.forEach((warehouse) => {
            let count = 1;
            warehouse.freeDrones.forEach((drone) => {
                console.log("Charakteristics for drone " + count + " in warehouse " + warehouse.name +
                    "\n Drone's times used " + drone.timesUsed +
                    "\n Drone's minutes used " + drone.minutesUsed +
                    "\n Drone's charged time " + drone.chargeTime + "\n")
            })
        })
    }
    static sendDrone(drone, distance, freeDrones, dronesInUse){
        drone.batteryLevel === drone.batteryLevel - distance*2;
        drone.timesUsed += 1;
        dronesInUse.push(drone);
        freeDrones.pop(drone);
    }
    // static kWConsumption(warehouses, drones) {
    //     let consumption
    //     let diff
    //     let deliveryTimeList
    //     let warehouse = warehouses.find(w => w.listDrones === drones);
    //     if (warehouse != null) {
    //         drones.forEach((drone) => {
    //             deliveryTimeList.forEach((deliveryTime) => {
    //                 consumption = drone.kWPerMinute * deliveryTime
    //             });
    //             diff = drone.kW - consumption
    //             if (diff > 0 && warehouse.listDrones.includes(drone)) {
    //                 warehouse.listDrones = warehouse.listDrones.filter((d) => d !== drone);
    //             }
    //
    //         });
    //     }
    //     console.log(warehouse);
    // }
}

