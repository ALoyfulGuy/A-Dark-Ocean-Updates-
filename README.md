## README

### Nursery Tab
- Add 2 large horizontally aligned incubator slots, showing egg, timer, "Ready to Hatch!" shake animation, and support clicking to pick from inventory below.
- Egg inventory: row of small boxes, click to select for incubation.

### Pet Catalog
- 53-grid, grouped by rarity, lock blur, hover to enlarge w/ info and equip/unequip, max 2 equipped, shows as icons next to player in dives/combat.

### Merchant Tab
- Show pearls at top, 5 egg boxes (3 up, 2 below in dice-5 shape) each with egg name, big ⬯, price, click to buy if enough pearls, egg added to nursery.

### Egg Prices
- Common: 800 Pearls
- Complex: 2,400 Pearls
- Elite: 8,000 Pearls
- Apocryphal: 20,000 Pearls
- Secret: 32,000 Pearls

### Egg Hatch Timers
- Common: 5m
- Complex: 15m
- Elite: 30m
- Apocryphal: 1h
- Secret: 2h

### Hatching Mechanics
- Animate wheel with pet icons/names, duplicates give 10 pearls, new pets unblur in catalog.
- Command "elonmuskofpearls" sets pearls to 999999 instantly.

### In Dives/Combat
- Equipped pets show as small icons beside player, perks apply (not targetable/destroyed).

### Pets
- Add all 53 pets including name, rarity, perk, icon (first+last letter), and hover info.

### CSS
- All new CSS must match the monochrome style and outlined look. All changes must be non-destructive and preserve existing code/logic unless replaced by above UI/logic. The merchant tab and nursery tab must be visually improved as described, with correct grid layouts. The egg hatching, pet catalog, and equip logic must match the description above.