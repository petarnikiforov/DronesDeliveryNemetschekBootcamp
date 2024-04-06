import { Customer } from '../models/Customer.js';
import { Drone } from '../models/Drone.js';
import { Warehouse } from '../models/Warehouse.js';
import { Calculating } from '../service/Calculating.js';

// const calculatingInstance = new Calculating();

const productList1 = ["tomatoes", "cucumbers" , "onion" , "meat" , "eggs"]
const productList2 = ["meat", "eggs", "milk" ,"sugar"]
const productList3 = ["milk", "pears", "tomatoes", "ketchup"]
const productList4 = ["milk", "pears", "tomatoes", "ketchup"]
const productList5 = ["milk", "pears", "tomatoes", "ketchup"]
const productList6 = ["milk", "pears", "tomatoes", "ketchup"]
const productList7 = ["milk", "pears", "tomatoes", "ketchup"]
const productList8 = ["milk", "pears", "tomatoes", "ketchup"]
const productList9 = ["milk", "pears", "tomatoes", "ketchup"]
const productList10 = ["milk", "pears", "tomatoes", "ketchup"]


const customers = [
    new Customer(1, "Ivan", 120,50),
    new Customer(2, "Ivan4", 100,50),
    new Customer(3, "Ivan5", 120,60),
    new Customer(4, "IvanG", 130,80),
    new Customer(5, "IvanS", 100,90),
    new Customer(6, "IvanD", 20,50),
    new Customer(7, "IvanK", 40,80),
    new Customer(8, "IvanP", 50,50),
    new Customer(9, "IvanA", 65,45),
    new Customer(10, "IvanE", 150,100),
];

const orders = [
    { orderId: 1,customerId: 1, productList: productList1 },
    { orderId: 2,customerId: 2, productList: productList2 },
    { orderId: 3,customerId: 3, productList: productList3 },
    { orderId: 4,customerId: 4, productList: productList4 },
    // { orderId: 5,customerId: 5, productList: productList5 },
    // { orderId: 6,customerId: 6, productList: productList6 },
    // { orderId: 7,customerId: 7, productList: productList7 },
    // { orderId: 8,customerId: 8, productList: productList8 },
    // { orderId: 9,customerId: 9, productList: productList9 },
    // { orderId: 10,customerId: 10, productList: productList10 }
];

const drones = [
    new Drone(1,1, 1000,2),
    new Drone(2,1, 500, 2),
    new Drone(3,1, 750, 2)
];
const drones2 = [
    new Drone(4,2, 1000,2),
    new Drone(5,2, 500, 2),
    new Drone(6,2, 750, 2)
];

const drones3 = [
    new Drone(7,3, 1000,2),
    new Drone(8,3, 500, 2),
    new Drone(9,3, 750, 2)
];

const warehouses = [
    new Warehouse(1,"Warehouse", 80,100 , productList1,drones),
    new Warehouse(2,"Warehouse2", 70,120, productList2,drones2),
    new Warehouse(3,"Warehouse3", 160,80, productList3,drones3)
];

const warehouse = new Warehouse(4,"abcd", 90, 100 );
const customer = new Customer(2, "Peter", 100, 110 )


Calculating.calculateDeliveryTimes(warehouses, customers, orders);
Calculating.simulate(warehouses,customers,orders)
// Calculating.kWConsumption(warehouses,drones)