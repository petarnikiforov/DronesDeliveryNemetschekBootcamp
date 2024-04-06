export class Warehouse {
    constructor(id, name, xCoordinate, yCoordinate, productList, freeDrones) {
        this.id = id;
        this.name = name;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.productList = productList;
        this.freeDrones = freeDrones;
        this.dronesInUse = [];

    }
}
