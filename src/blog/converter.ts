import { Converter } from "showdown";

interface ClassMap {
    [id: string]: string;
}

const classes: ClassMap = {
    h1: 'text-4xl'
};

const bindings = Object.keys(classes).map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classes[key]}" $1>`
}));


/**
 * Load the converter and build the html
 */
const converter = new Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
    extensions: [...bindings]
});

converter.setFlavor('github');

export { converter };