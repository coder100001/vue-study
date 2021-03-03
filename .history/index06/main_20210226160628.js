var moduleA = (function() {
    var obj = {};
    let name = 'test';
    let age = 19;

    function sum(a, b) {
        return a + b;
    }

    let flag = true;


    obj.flag = flag;
    obj.sum = sum(10, 20);

    return obj;
})();


console.log(moduleA.)