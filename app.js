let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (isNaN(obj[key])) continue;
        obj[key] *= num;
    }
}

multiplyNumeric(menu, 3)
console.log(menu);