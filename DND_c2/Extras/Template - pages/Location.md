---
tags:
  - Location
Land:
---
<%* const folder = 'Game/Locations/';
const number = await tp.system.prompt("Enter city name:");
if (number) {
const noteName = `${number}`;
await tp.file.rename(noteName);
await tp.file.move(folder + noteName);
}
-%>
### Osoby ve Městě
```dataview
table without id
	file.link as Person,
	Class,
	Tasks
from "Game/NPCs/<%number%>"
```

### Budovy


### Popis

