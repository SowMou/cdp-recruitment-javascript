import {argv} from "node:process"
import {filter} from "./src/services/filterService.js";
import {count} from "./src/services/countService.js";

const args = argv.slice(2)
const countReg = /--count/;
const filterReg = /^(--filter=)[a-zA-Z-0-9]/;

if (countReg.test(args[0])) {
    console.log(count());
} else if (filterReg.test(args[0])) {
    const pattern = args[0].split("=")[1];
    console.log(filter(pattern))
} else {
    console.log("you must give at least a correct argument to do filtering or counting \n"
        + "like node app.js --filter=ry or node app.js --count ")
}




