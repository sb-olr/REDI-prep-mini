function doNothingProductively() {
    console.log("I'm being productive... I think.");
    
    let workDone = 0;
    for (let i = 0; i < 100; i++) {
        workDone += i;
    }
    return "Absolutely nothing accomplished!";
}

doNothingProductively();
