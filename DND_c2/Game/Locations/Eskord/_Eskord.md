---
tags:
  - Land
---
### Osoby v Kraji
```dataview
table without id
	file.link as Person,
	Class,
	Tasks
from "Game/NPCs/Eskord"
```

### Města
```dataview
list
from #Location and "Game/Locations/Eskord"
where
	!(contains(file.name, "_Eskord"))
```

### Popis

