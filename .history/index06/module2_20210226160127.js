var moduleB = (function() {
    var obj = {};
    let name = 'test';
    let age = 19;


    let flag = true;


    obj.flag = flag;
    obj.sum = sum(10, 20);

    console.log(obj);

})();