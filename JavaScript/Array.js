// let student = ["Mridul" , "aman" , "rahul"];
// console.log(student);
// console.log(student[0]);
// console.log(student[0][0]);
// console.log(student[1][4]);
// console.log(student.length);
// console.log(student[0].length);


// Arrays ar mutable
// let fruits =["mango" , "apple"];
// console.log(fruits);
// fruits[0] = "banana";
// console.log(fruits);


// Arrays methods 
// 1 -> push

// let cars = ["Maruti" , "Audi" , "BMW"];
// console.log(cars , cars.length);
// cars.push("Toyota");
// console.log(cars , cars.length); 

//2 ->  pop method

// let cars = ["Maruti" , "Audi" , "BMW"];
// console.log(cars , cars.length);
// cars.push("Toyota");
// console.log(cars , cars.length); 
// console.log(cars.pop());
// console.log(cars , cars.length);


// 3  -> unshift

// let cars = ["Maruti" , "Audi" , "BMW"];
// console.log(cars , cars.length);
// cars.unshift("Toyota");
// console.log(cars , cars.length); 


// 4 -> shift
// let cars = ["Maruti" , "Audi" , "BMW"];
// console.log(cars , cars.length);
// cars.unshift("Toyota");
// console.log(cars , cars.length); 
// let ucars = cars.shift();
// console.log(ucars , ucars.length);
// console.log(cars , cars.length);


// Practice question
// let month  = ["January" , "july" , "march" , "august"];
// console.log(month);
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);


// 4-> indexof method  
// let student = ["mridul" , "akshit" , "manan"];
// console.log(student.indexOf("mridul"));
// console.log(student.indexOf("Hazel"));


// 5 -> includes method
// let color = ["red" , "yellow","blue"];
// console.log(color.includes("yellow"));
// console.log(color.includes("black"));


// 6-> concat method - merge 2 arrays

// let primary = ["red" , "yellow"];
// let secondary =["orange" , "green"];
// let merge = primary.concat(secondary);
// console.log(merge);


// 7 -> reverse
// let color = ["red" , "yellow" , "blue"];
// console.log(color);
// color.reverse();
// console.log(color);


// 8 -> Slice
// let color = ["red" , "yellow" , "blue" , "orange" , "green"];
// console.log(color.slice(2));
// console.log(color.slice(2,4));
// console.log(color.slice(1));
// console.log(color.slice(-3));


// Splice
// let color = ["red" , "yellow" , "blue" , "orange" , "green" , "pink" , "whilte"];
// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,1));
// console.log(color);
// console.log(color.splice(0,2, "black" , "grey"));
// console.log(color);
// console.log(color.splice(color.length-1));
// console.log(color);


// Practice question

// let month  = ["January" , "july" , "march" , "august"];
// console.log(month.splice(0,2,"july" , "june"));
// console.log(month);

// let languages = ["c" , "c++" , "html" , "javascript" , "python","java" , "c#" , "sql"];
// console.log(languages.reverse());
// console.log(languages.indexOf("javascript"));


// Array refrence

// let arr = ['a','b','c'];
// let arrCopy = arr;
// // console.log(arr == arrCopy);
// arr.pop('c');
// arrCopy.push('d');
// console.log(arr);
// console.log(arrCopy);


// Nested arrays

// let arr = [[2,3],[4,6],[4,8]];
// console.log(arr.length);
// console.log(arr[1][1]);


// Practice question

let game = [['x','','o'] , ['','x',''] , ['o','','x']];
console.log(game);