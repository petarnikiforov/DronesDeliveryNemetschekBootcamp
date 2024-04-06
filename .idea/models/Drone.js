export class Drone{
    constructor(id, wareHouseId,batteryCapacity, wattConsumption) {
        this.id = id;
        this.warehouseId= wareHouseId;
        this.batteryCapacity = batteryCapacity;
        this.wattConsumption = wattConsumption;
        this.batteryLevel = batteryCapacity;
        this.timesUsed = 0;
        this.minutesUsed = 0;
        this.chargeTime = 0;

    }
}