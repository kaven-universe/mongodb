import json from "./mongodb.json" assert {type: 'json'};
import { open } from "node:fs/promises";

const f = await open("./README.md", "w");

try {
    await f.write(`# Windows MSI\n\n`);

    for (const version of json.components[2].props.data[0].versions) {
        for (const download of version.downloads) {
            if (download.msi) {
                console.info(download.msi);

                await f.write(`* [${download.msi}](${download.msi})\n`);
            }
        }
    }
} finally {
    await f.close();
}
