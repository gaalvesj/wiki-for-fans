import path from 'path';
import { buildSchema } from "graphql";

async function main() {
    const schema = await buildSchema({
        resolvers: [],
        emitSchemaFile: path.resolve(, "schema.gpl"),
    })
}

main();