import {count} from "./countService.js";

describe("Testing counting Service", () => {

    it("Should Count correctly given data ", () => {
        //WHEN
        const countedData = count();
        //THEN
        expect(JSON.parse(countedData).length).toBe(5);
        expect(JSON.parse(countedData)[0].name).toBe("Dillauti [5]");
        expect(JSON.parse(countedData)[0].people[0].name).toBe("Winifred Graham [6]");
        expect(JSON.parse(countedData)[0].people[0].animals.length).toBe(6);
        expect(JSON.parse(countedData)[0].people[1].name).toBe("Blanche Viciani [8]");
        expect(JSON.parse(countedData)[0].people[1].animals.length).toBe(8);
    });

})