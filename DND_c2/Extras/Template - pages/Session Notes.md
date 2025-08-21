---
tags:
  - Notes
date: dd/mm/yy
Previous Note: 
Next Note:
---
<%*  
const folder = 'Game/Session Notes/';  
var num = 1;  
var noteName = 'Session_n ' + num;  
while(await tp.file.exists(folder + noteName + '.md')) {  
num++;  
noteName = 'Session_n ' + num;  
console.log("hit");  
}  
await tp.file.rename(noteName);  
await tp.file.move(folder + noteName);  
%>
### Day: XX