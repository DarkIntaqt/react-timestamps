import { errorMessages } from "./config"
import parseDate from "./parseDate"
import formatDate from "./formatDate"

export default function timestampToString(parameters) {

    let date = 0;
    let type = "relative";

    function isset(issetVar) {
        if (typeof issetVar === "undefined") {
            return false
        }
        return true
    }

    if (Object.keys(parameters).length > 2) {
        console.warn(errorMessages[0]);
    }

    if (!isset(parameters["date"])) {
        throw new Error(errorMessages[1]);
    }

    date = parameters["date"];

    if (isset(parameters["type"])) {
        type = parameters["type"];
    }

    const parsedDate = parseDate(date);

    if (typeof parsedDate === "boolean") {
        console.error(errorMessages[2] + date)
        return ""
    }

    return formatDate(date, type);

}