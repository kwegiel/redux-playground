export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
      }
};
export function minusNumber(number) {
    return {
        type: "SUBSTRACT",
        payload: number
      }
};
export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
      }
};
export function setAge(number) {
    return {
        type: "SET_AGE",
        payload: number
      }
};