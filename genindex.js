const fs = require('fs');

const vuesrcs = fs.readdirSync("src").filter(file => file.split("\.")[1] === "vue").map(file => file.split("\.")[0]).map(file => [file, file.charAt(0).toUpperCase() + file.slice(1)])

const IMPORT = vuesrcs.map(item =>`import ${item[1]} from './${item[0]}.vue';`).join("\n")

const VUECOMPONENT = vuesrcs.map(item =>`  Vue.component('${item[1]}', ${item[1]});`).join("\n")

const INSTALL = vuesrcs.map(item =>`${[item[1]]}.install = install;`).join("\n")

const EXPORT = "export { " + vuesrcs.map(item =>`${[item[1]]}`).join(", ") + " };"

const index = fs.readFileSync("./src/index.template").toString().replace("IMPORT", IMPORT).replace("VUECOMPONENT", VUECOMPONENT).replace("INSTALL", INSTALL).replace("EXPORT", EXPORT)

fs.writeFileSync("./src/index.js", index)

console.log("written index.js")

const testindexparts = fs.readFileSync("./test/pages/index.vue").toString().split(new RegExp("\/\/ SLOT"))

const imports = "\n" + vuesrcs.map(vuesrc =>  `import ${vuesrc[1]} from "../../src/${vuesrc[0]}.vue"`).join("\n") + "\n"

fs.writeFileSync("./test/pages/index.vue", [testindexparts[0], imports, testindexparts[2]].join("// SLOT").replace("-- Local --", "-- Npm --"))

console.log("written index.vue")

const importsnpm = "\n" + vuesrcs.map(vuesrc =>  `import { ${vuesrc[1]} } from "@publishvue/vuecomps"`).join("\n") + "\n"

fs.writeFileSync("./test/pages/indexnpm.vue", [testindexparts[0], importsnpm, testindexparts[2]].join("// SLOT").replace("-- Local --", "-- Npm --"))

console.log("written indexnpm.vue")