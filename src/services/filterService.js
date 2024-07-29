import data from "../repository/data.js";

export function filter(pattern) {
    console.info("Start filtering by : " + pattern);

    let results = [];
    data.forEach(country => {
        let filteredPeople = [];
        country.people.forEach(value => {
            const filteredAnimals = value.animals.filter(animal => animal.name.includes(pattern))
            if (filteredAnimals.length !== 0) {
                filteredPeople.push(
                    {
                        name: value.name,
                        animals: filteredAnimals
                    })
            }
        })
        if (filteredPeople.length !== 0) {
            results.push(
                {
                    name: country.name,
                    people: filteredPeople
                }
            )
        }

    });

    return JSON.stringify(results, null, 2);
}