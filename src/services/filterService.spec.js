import {filter} from "./filterService.js";

describe("Testing filtering Service", () => {

    it("Should filter correctly given data by pattern", () => {
        //GIVEN
        const pattern = "ry";
        const filteredExpectedData = JSON.stringify([{"name": "Uzuzozne", "people": [{"name": "Lillie Abbott", "animals": [{"name": "John Dory"}]}]}, {"name": "Satanwi", "people": [{"name": "Anthony Bruno", "animals": [{"name": "Oryx"}]}]}], null, 2);
        //WHEN
        const filteredData = filter(pattern);
        //THEN
        expect(filteredData).toEqual(filteredExpectedData);
    })

})