```meta-bind-button
label: 🔻
icon: ""
hidden: false
class: ""
tooltip: ""
id: hp_hit
style: default
actions:
  - type: js
    file: "Extras/scripts/dnd.js"
    args: {
	    func: "increaseHP",
	    }
```

```meta-bind-button
label: 🔺
icon: ""
hidden: false
class: ""
tooltip: ""
id: hp_heal
style: default
actions:
  - type: js
    file: "Extras/scripts/dnd.js"
    args: {
	    func: "decreseHP",
	    }
```