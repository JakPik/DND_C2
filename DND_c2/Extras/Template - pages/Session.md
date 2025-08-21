---
tags:
  - Story
date: dd/mm/yy
---
<%* 
const folder = 'Game/Story/';
var num = 1;
var noteName = 'Session ' + num;
while(await tp.file.exists(folder + noteName + '.md')) {
	num++;
	noteName = 'Session ' + num;
	console.log("hit");
}
await tp.file.rename(noteName);
await tp.file.move(folder + noteName);
%>
### Day: XX


