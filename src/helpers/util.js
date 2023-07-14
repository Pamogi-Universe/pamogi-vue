export function checkNested(obj, property) {
    for (var key in obj) {
        if (key === property) {
            return obj[key]
            return true;
        }

        if (typeof obj[key] === "object" && obj[key] !== null) {
            var found = checkNested(obj[key], property);
            if (found) {
                return obj[key][property];
            }
        }
    }
    return false;
}