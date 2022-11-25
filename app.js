console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(1000);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let old = `Congrats ${name}, you can drive! `;
    let young = `Sorry ${name},but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(young) 
    } else{
        console.log(old)
    }
}
checkAge ("Russel", 37);
checkAge ("Russy", 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return "1";
    } else if (x < 0 && y > 0) {
        return "2";
    }else if (x < 0 && y < 0) {
        return "3";
    }else if (x > 0 && y < 0) {
        return "4";
    }else if (x == 0 && y != 0) {
        return "x"
    }else if (x != 0 && y == 0) {
        return "y"
    }else {
        return "null"
    }
}
console.log(quadrant(1,1));
console.log(quadrant(-1,1));
console.log(quadrant(-1,-1));
console.log(quadrant(1,-1));
console.log(quadrant(0,-1));
console.log(quadrant(1,0));
console.log(quadrant(0,0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a, b, c) {
    return a+b > c || a+c > b || b+c >a;
}

function checkTriangle(a, b, c) {
    let valid = isValidTriangle(a, b, c);
    if (valid) {
        if (a==b && b==c) {
            return `Equailateral`;
        }else if (a==b || b==c || a==c) {
            return `Isosceles`;
        } else{
            return `Scalene`;
        }
    }else {
        return `not valid trianlge`;
    }
}

console.log(checkTriangle(2,3,4));
console.log(checkTriangle(2,2,2));
console.log(checkTriangle(1,2,2));
console.log(checkTriangle(1,1,2));

