export function isOvernight(date: Date): boolean {
    return date.getHours() >= 22;
}

export function isSunday(date: Date): boolean {
    return date.getDay() === 0;
}

export function calculateRide(distance: number, date: Date): number {
    const OVERNIGHT_RATE = 3.90;
    const SUNDAY_RATE = 2.90;
    const DEFAULT_RATE = 2.10;

    if (typeof distance !== 'number' || distance < 0) {
        throw new Error ('Invalid parameter distance');
    }

    if (!(date instanceof Date)) {
        throw new Error ('Invalid parameter date');
    }
    
    if (isOvernight(date)) {
        return distance * OVERNIGHT_RATE;
    } 

    if (isSunday(date)) {
        return distance * SUNDAY_RATE;
    } 

    return distance * DEFAULT_RATE;
}