export default function parseDate(date) {
    try {
        if (isFinite(date)) {
            return date
        }
        return Date.parse(date)
    } catch (error) {
        return false;
    }
}