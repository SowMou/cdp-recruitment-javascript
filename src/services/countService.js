import data from "../repository/data.js";

export function count() {
    console.info("Start counting");

    data.map(country => {
        country.name = `${country.name} [${country.people.length}]`;
        country.people.map(value => {
            value.name = `${value.name} [${value.animals.length}]`
            return value
        })
        return country;
    });

    return JSON.stringify(data, null, 2);
}