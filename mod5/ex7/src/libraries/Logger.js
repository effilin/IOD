class Logger {
    constructor(sum) {
        this.sum = sum;
    }
    log = (sum) => {
        console.log(`[Calculator : ${sum}]`)
    }
}

export default Logger;