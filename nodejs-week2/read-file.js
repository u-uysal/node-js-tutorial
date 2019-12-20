const fs = require("fs").promises;

async function readFile() {
    const fileName2 = process.argv[2] // without arg.
    let text = await fs.readFile(fileName2,"utf-8");
    console.log(fileName2)
    text = text.toUpperCase();

    const writeText = await fs.writeFile(process.argv[3] ,text, "utf-8");

}

readFile();

