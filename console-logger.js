const debug = true;

exports.log = (log) => {
    if (debug) {
        console.log(log);
    }
};

exports.noDebug = (log) => {
    console.log(log);
};
