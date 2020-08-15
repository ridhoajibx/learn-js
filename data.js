// Javascript scope
/*
const myFunctionExp = function() {
    console.log("Hello Ridho");
}

function HalloFunction () {
    console.log("hello world");
}
console.log(HalloFunction());
*/

// Array of Objects
/**
     const todos = [
        {
            text: "Ini adalah tugas1",
            isCompleted: false
        },
        {
            text: "Ini adalah tugas2",
            isCompleted: true
        },
        {
            text: "Ini adalah tugas3",
            isCompleted: true
        },
        {
            text: "Ini adalah tugas4",
            isCompleted: false
        }
    ];

    const unCompletedTask = todos.filter(unCompleted);
    function unCompleted(value) {
        if (value.isCompleted === false) {
            return value;
        }
    }
    console.log(unCompletedTask);

    or use arrow function
    const unCompletedTask = todos.filter(value => {
        if(value.isCompleted === false) {
            return value;
        }
    });
    console.log(unCompletedTask);
 */

//Object
/**
 * contoh pembuatan object
    const person = {
        firstname: "John",
        lastname: "Doe",
        age: "25",
        nationality:"USA"
    }
    const person2 = new Object();
    person2.firstname = "Jane";
    person2.lastname = "Doe";
    person2.age = 27;
    person2.nationality = "USA";
    console.log(person2);

    cara mengakses value pada object
    const person = {
        name: {
            firstname: "John",
            lastname: "Doe",
        },
        age: "25",
        nationality:"USA"
    }
    const personName = person.name.firstname;
    console.log(personName);

    cara menambah properti baru pada object
    const person = {
        name: {
            firstname: "John",
            lastname: "Doe",
        },
        age: "25",
        nationality:"USA"
    }
    person.HairColor = "brown";
    console.log(person);

    cara menghapus properti pada object
    const person = {
        name: {
            firstname: "John",
            lastname: "Doe",
        },
        age: "25",
        nationality:"USA"
    }
    delete person.nationality;
    console.log(person);

    object keys method
    memanggil keys dari masing" properties
    const objects = {a:1, b:3, c:2}
    console.log(Object.keys(objects));

    object assign
    mengkopy semua properties dari 1 object ke object yg lainnya
    const object1 = {a:1, b:3, c:2};
    const object2 = {c:4, d:6};
    Object.assign(object1, object2)
    console.log(object1)

 */

// Array method
/**
 * Array forEach looping
 * const animals = ["beruang", "jerapah", "harimau", "buaya"];
    animals.forEach(myFunction)
    function myFunction(value) {
        console.log(value);
    }
 * 
 * Array map
 * const numbers = [10, 20, 30, 40, 50];
    const numbersMultiplied = numbers.map(numbersMultiply)
    function numbersMultiply(value){
        return value;
    }
    console.log(numbersMultiplied);
 *
 * Array filter
 * memfilter data array sesuai dengan value yang kita ingin kan
 * contoh :
 * const age = [10, 18, 15, 11, 20, 30, 40, 50];
    const filterAge = age.filter(FilFunction)
    function FilFunction(value){
        return value >= 17;
    }
    console.log(filterAge);
 * 
 * 
 *  array.push(parmeter);
 * array push berfungsi menambahkan data array pada bagian belakang
 * contoh :
 * const array = [1, 2, 3, 4, 5]
 * array.push(6);
 * console.log(array);
 * 
 * array.pop(no parameter)
 * array pop berfungsi menghilangkan data array pada posisi belakang
 * contoh :
 * const array = [1, 2, 3, 4, 5]
 * array.pop();
 * console.log(array);
 * 
 * array.unshift(parmeter);
 * array push berfungsi menambahkan data array pada bagian depan
 * contoh :
 * const array = [1, 2, 3, 4, 5]
 * array.unshift(0);
 * console.log(array);
 * 
 * array.shift(no parameter)
 * array pop berfungsi menghilangkan data array pada posisi depan
 * contoh :
 * const array = [1, 2, 3, 4, 5]
 * array.shift();
 * console.log(array);
 * 
 * array.slice(parameter)
 * array slice berfungsi mengambil data array secara terpisah sesuai parameter yang kita pilih dg cara mengcopy,
 * tanpa mengubah data aslinya
 * contoh :
 * const animals = ["beruang", "jerapah", "harimau", "buaya"];
 * let ditangkap = animals.slice(1, 3)
 * console.log(ditangkap);
 * 
 * array.splice(parameter)
 * array splice berfungsi mengubah/menghapus data asli dari array secara terpisah sesuai parameter yang kita pilih
 * tanpa mengubah data aslinya
 * contoh :
 * const animals = ["beruang", "jerapah", "harimau", "buaya"];
 * animals.splice(1, 2, "kucing", "gajah")
 * console.log(animals);
 */