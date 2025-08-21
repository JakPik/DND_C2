---
tags:
  - Hráč
name: Algaar
stat:
  STR: 15
  DEX: 13
  CON: 14
  INT: 13
  WIS: 15
  CHA: 13
skillprof:
  sk1: false
  sk2: true
  sk3: false
  sk4: true
  sk5: false
  sk6: false
  sk7: false
  sk8: false
  sk9: false
  sk10: false
  sk11: true
  sk12: false
  sk13: false
  sk14: false
  sk15: false
  sk16: false
  sk17: false
  sk18: true
saving_throw:
  st1: false
  st2: false
  st3: false
  st4: true
  st5: true
  st6: false
proficiency: 2
hp: 24
cur: 
hp_max: 32
num:
  Sn: 0
  Cu: 3
  Ag: 0
  Au: 2
  Pt: 0
ac: 12
---
```meta-bind-button
label: 🔻
icon: ""
hidden: true
class: ""
tooltip: ""
id: hit
style: default
actions:
  - type: js
    file: "Extras/scripts/dnd.js"
    args: {
	    func: "decreaseHP",
	    }
```

```meta-bind-button
label: 🔺
icon: ""
hidden: true
class: ""
tooltip: ""
id: heal
style: default
actions:
  - type: js
    file: "Extras/scripts/dnd.js"
    args: {
	    func: "increaseHP",
	    }
```

> [!infobox|right] 
> # Algaar Thornwood
> `VIEW[!\[\[{name}.png\]\]][text(renderMarkdown)]`
>
>
> > [!infobox]+ **Senses**
> > |Value| Type|
> > |:---:|:---|
> > |12|Passive Perception|
> > |11|Passive Investigation|
> > |12|Passive Insight|
> 
> # Proficiencies
> > [!info|clean no-i] **Armor**
> > - Light Armor, Medium Armor, Shields
> 
> > [!info|clean no-i] **Weapons**
> > - Club, Dagger, Dart, Javelin, Mace, Quarterstaff, Scimitar, Sickle, Sling, Spear
>
> > [!info|clean no-i] **Tools**
> > - Herbalism Kit, Woodcarver's Tools
>
> > [!info|clean no-i] **Languages**
> > - Common, Draconic, Druidic, Elvish
> 

# Dragonborn - Circle of the Moon Druid
> [!column|alt-line no-i no-t]
> > [!info|clean] **Přehled**
> > *Algaar Thornwood* je mladý drakorozený. Už od mladí aspirovat k moci přírody, k níž ho jeho otec vedl. S věkem získával zkušenosti a tím rostla i jeho touha po dobrodružství. Se svou sestrou se dostával do šlamastik a během jejich vyrůstání vyvedli spoustu nekalostí. Kvůli jedné z nich byla jeho sestra vyhoštěna z [[Kriegurd|Kriegurdu]]. To vedlo k Algaarovým pochybám o jeho úsudku. Vinil se kvůli hloupé sázce.
> > 
> > Od té doby se snažil Algaar sebrat odvahu a vydat se také do světa, avšak netušil že toto jeho přání se mu vyplní tak brzy. Lenninthon, vládce země se rozhodl vyslat posli do jižních krajů aby předali požadavek na kapitulaci. Algaar tento úkol přijal s jistou hrdostí, nejisto stí, odhodláním a smutkem. Věděl že se mu konečně vyplní sen o dobrodružství, zároveň litoval že nebude na oslavy slunovratu.
>
> > [!info|clean no-i] **Popis**
> > Algaar je 20-ti letý drakorozený. Váží 113 kg, 193 cm. Size medium.
> > 
> > Je dobrodužný, avšak opatrný, uvědomuje si že ne všichni jsou tak přátelští jako jeho lidé. Snaží se působit sebevědomě čímž se snaží zakrýt vlastní nejistoty, což ho však vede občas unáhleným rozhodnutím. Jeden z důvodů proč pochybuje je velká důvěra od Prapala. Algaar je ale taky velmi loajální.
> > 
> > Jeden ze zvyků které pochytil během svých učení je že rád vyřezává dřevěné sošky, zvířat v něž je schopen se proměnit. Dodávají mu sílu.
> > 
> > Algaar převážně uctívá Sylvanaxe - Strážce Prastarých Lesů

# Class Features
>[!column|flex 2 clean no-i no-t]
>> [!info|clean no-i no-t]  
>>- Spell save - `VIEW[8 + {proficiency} + round(floor(({stat.WIS} - 10) / 2))]`
>>- Spell attack modifier - `VIEW[{proficiency} + round(floor(({stat.WIS} - 10) / 2))]`
>>- [[Game/Players/Algaar/WildShape|WildShape]]
>
>> [!info|clean no-i] **Money**
>> Sn `INPUT[number(class(nb-mb-css)):num.Sn]`
>> Cu `INPUT[number(class(nb-mb-css)):num.Cu]`
>> Ag `INPUT[number(class(nb-mb-css)):num.Ag]`
>> Au `INPUT[number(class(nb-mb-css)):num.Au]`
>> Pt `INPUT[number(class(nb-mb-css)):num.Pt]`

# Quests
```dataview
table without id
	file.link as Quest,
	Odkoho,
	Odkud,
	Odměna,
	Status
from "Game/Quests"
SORT choice(Status = "In Progress", 1 , choice(Status = "Abandoned", 2 , choice(Status = "Completed", 3 , choice(Status = "Failed", 4 , "other"))))
where Status != "NA"
```

# Společníci
- [[Krag]]
- [[Lyba]]
- [[Sadosu]]
- [[Tohru]]
