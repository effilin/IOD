class Logger {
    constructor(sum, id) {
        this.sum = sum;
        this.id = id;
    }
    log = (sum, id) => {
        console.log(`[Calculator :${id} : ${sum}]`)
    }
}

export default Logger;