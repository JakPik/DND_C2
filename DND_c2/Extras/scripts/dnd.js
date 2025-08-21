// Define functions
function increaseHP() {
    const activeFile = app.workspace.getActiveFile();

    if (activeFile) {
        const fileCache = app.metadataCache.getFileCache(activeFile);
        const frontmatter = fileCache ? fileCache.frontmatter : null; // Retrieve the frontmatter

        if (frontmatter) {
            var hp = Number(frontmatter.hp) || 0;
            var cur = Number(frontmatter.cur) || 0;
            var max = Number(frontmatter.hp_max) || 0;

            var newHp = hp + cur;
            if(newHp > max) {
                newHp = max;
            }

            app.fileManager.processFrontMatter(activeFile, (frontmatter) => {
                frontmatter['hp'] = newHp;
                frontmatter['cur'] = null;
            });
        }
    }
}

function decreaseHP() {
    const activeFile = app.workspace.getActiveFile();

    if (activeFile) {
        const fileCache = app.metadataCache.getFileCache(activeFile);
        const frontmatter = fileCache ? fileCache.frontmatter : null; // Retrieve the frontmatter

        if (frontmatter) {
            const hp = Number(frontmatter.hp) || 0;
            const cur = Number(frontmatter.cur) || 0;

            var newHp = hp - cur;
            if(newHp < 0) {
                newHp = 0;
            }

            app.fileManager.processFrontMatter(activeFile, (frontmatter) => {
                frontmatter['hp'] = newHp;
                frontmatter['cur'] = null;
            });
        }
    }
}

const arg = context.args || {};

const { func, ...extra } = arg;

switch(func) {
    case 'increaseHP':
        return increaseHP();
        break;
    case 'decreaseHP':
        return decreaseHP();
        break;
    default:
        console.log("no function selected");
}

