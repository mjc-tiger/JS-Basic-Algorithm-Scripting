function factorialize(num) {

 var ctr = 1;
    for (var i = 1; i <= num ; i++) {
        ctr *= i;
    }
    return ctr;
}
factorialize(5);
