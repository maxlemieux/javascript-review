function callback() {
    console.log("This callback function is running");
}

function main(callback) {
    callback();
}

main(callback);