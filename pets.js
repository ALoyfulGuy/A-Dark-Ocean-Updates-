// Deep-Sea Creature Pets for A Dark Ocean
const pets = [
  // Common (10)
  {
    name: "Nudibranch",
    rarity: "Common",
    perk: "Adaptive Defense",
    description: "Gives a 5% chance that the player dodges an enemy's special ability."
  },
  {
    name: "Seahorse",
    rarity: "Common",
    perk: "Swift Current",
    description: "Increases the player's dive moves by 5."
  },
  {
    name: "Starfish",
    rarity: "Common",
    perk: "Regenerative Aid",
    description: "Heals the player for 1 health every 5 seconds."
  },
  {
    name: "Sea Slug",
    rarity: "Common",
    perk: "Slime Trail",
    description: "Enemies that hit the player have their attack cooldowns slowed by 10% for 2 seconds."
  },
  {
    name: "Hermit Crab",
    rarity: "Common",
    perk: "Fortify",
    description: "Increases the player's max health by 10%."
  },
  {
    name: "Anemone Shrimp",
    rarity: "Common",
    perk: "Symbiotic Guard",
    description: "Places a small shield on the player that absorbs the next 3 damage. Cooldown: 8 seconds (resets on enemy or player death)"
  },
  {
    name: "Spiny Water Flea",
    rarity: "Common",
    perk: "Piercing Swarm",
    description: "Adds 1 extra damage to the player's attacks."
  },
  {
    name: "Brittle Star",
    rarity: "Common",
    perk: "Cooldown Link",
    description: "Decreases the cooldown of the other equipped pet by 10%."
  },
  {
    name: "Feather Star",
    rarity: "Common",
    perk: "Stealthy Current",
    description: "Decreases enemies chance to hit the player by 10%."
  },
  {
    name: "Sea Urchin",
    rarity: "Common",
    perk: "Spiky Aura",
    description: "Deals 1 damage every time enemies attack the player."
  },
  // Uncommon (10)
  {
    name: "Dumbo Octopus",
    rarity: "Uncommon",
    perk: "Deep Descent",
    description: "Temporarily increases the player's max health by 10% for 15 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Cuttlefish",
    rarity: "Uncommon",
    perk: "Invisibility Ink",
    description: "Grants 2 seconds of invisibility to the player, making enemies miss all their attack for those 2 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Pufferfish",
    rarity: "Uncommon",
    perk: "Cooldown Link",
    description: "Decreases the cooldown of the other equipped pet by 20%."
  },
  {
    name: "Giant Clam",
    rarity: "Uncommon",
    perk: "Protective Shell",
    description: "Creates a temporary shield that absorbs up to 8 damage. Cooldown: 8 seconds (resets on enemy or player death)"
  },
  {
    name: "Sea Turtle",
    rarity: "Uncommon",
    perk: "Enduring Shell",
    description: "Increases defense by 20% for 8 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Leafy Seadragon",
    rarity: "Uncommon",
    perk: "Camouflage",
    description: "The player is harder to spot, enemies have an extra 15% chance to miss their attack."
  },
  {
    name: "Flying Fish",
    rarity: "Uncommon",
    perk: "Evasive Leap",
    description: "The player dodge the first 5 attacks from an enemy. Cooldown: 10 seconds (resets on enemy or player death)"
  },
  {
    name: "Atlantic Blue Tang",
    rarity: "Uncommon",
    perk: "Quick-Heal",
    description: "Increases the effectiveness of all healing items by 20%."
  },
  {
    name: "Vampire Crab",
    rarity: "Uncommon",
    perk: "Sanguine Strike",
    description: "The player's attacks have a 10% chance to heal them back."
  },
  {
    name: "Blue Ringed Octopus",
    rarity: "Uncommon",
    perk: "Venomous Touch",
    description: "A player's critical hit has a 15% chance to apply a powerful poison that deals 7 damage over 3 seconds."
  },
  // Rare (10)
  {
    name: "Lionfish",
    rarity: "Rare",
    perk: "Venomous Spines",
    description: "The player's melee attacks cause a poison effect that deals 2 damage per second for 5 seconds."
  },
  {
    name: "Bobtail Squid",
    rarity: "Rare",
    perk: "Light Pulse",
    description: "A burst of light that blinds enemies for 4 seconds and increases their attack cooldowns by 20%. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Box Jellyfish",
    rarity: "Rare",
    perk: "Venomous Tentacle",
    description: "The player's ranged attacks have a 5% chance to deal 20 bonus poison damage to one target."
  },
  {
    name: "Glass Squid",
    rarity: "Rare",
    perk: "Crystal Shroud",
    description: "The player becomes invulnerable for 1 second. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Bobbit Worm",
    rarity: "Rare",
    perk: "Cooldown Link",
    description: "Decreases the cooldown of the other equipped pet by 15%."
  },
  {
    name: "Sarcastic Fringehead",
    rarity: "Rare",
    perk: "Fierce Territory",
    description: "When the player is on or under 5 health, It deals a constant 2 damage per 2 seconds until the enemy dies or player does."
  },
  {
    name: "Warty Frogfish",
    rarity: "Rare",
    perk: "Angler's Bait",
    description: "Places a lure on a single enemy, causing them to take 20% more damage for 5 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Pink See-Through Fantasia",
    rarity: "Rare",
    perk: "Ethereal Flow",
    description: "Reduces all damage taken from enemies attacks by 25%."
  },
  {
    name: "Strawberry Squid",
    rarity: "Rare",
    perk: "Lightburst",
    description: "A burst of light that disorients a single enemy for 2 seconds and increases their attack cooldowns by 25%. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Flamingo Tongue Snail",
    rarity: "Rare",
    perk: "Deflecting Shell",
    description: "Has a 10% chance to reflect an attack back at the enemy."
  },
  // Epic (10)
  {
    name: "Sea Angel",
    rarity: "Epic",
    perk: "Spirit's Grace",
    description: "Heals the player for 3 health per second for 5 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Yeti Crab",
    rarity: "Epic",
    perk: "Frostbite",
    description: "The player's attacks have a 10% chance to freeze the enemy in place for 2 seconds."
  },
  {
    name: "Comb Jelly",
    rarity: "Epic",
    perk: "Bioluminescent Trail",
    description: "Deals a constant 2 damage per second and increases the attack cooldown of the enemy by 20%."
  },
  {
    name: "Vampire Squid",
    rarity: "Epic",
    perk: "Abyssal Shield",
    description: "Creates a shield that absorbs up to 25 damage. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Barreleye Fish",
    rarity: "Epic",
    perk: "Clarity of Sight",
    description: "Reveals weak points on all enemies, granting a 25% bonus damage multiplier when hit."
  },
  {
    name: "Coelacanth",
    rarity: "Epic",
    perk: "Cooldown Link",
    description: "Decreases the cooldown of the other equipped pet by 20%."
  },
  {
    name: "Bobbit Worm",
    rarity: "Epic",
    perk: "Tunneling Strike",
    description: "The player can burrow into the ground for 2 seconds, making them invulnerable. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Giant Spider Crab",
    rarity: "Epic",
    perk: "Pincer Crush",
    description: "A single, high-damage attack that deals 10 damage and can stun an enemy for 3 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Flashlight Fish",
    rarity: "Epic",
    perk: "Blinding Flash",
    description: "Stuns a single enemy for 2 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Cookiecutter Shark",
    rarity: "Epic",
    perk: "Bite of the Abyss",
    description: "The player's attacks apply a bleed effect that deals 2 damage per second for 1 seconds."
  },
  // Legendary (10)
  {
    name: "Giant Isopod",
    rarity: "Legendary",
    perk: "Hardened Exoskeleton",
    description: "Grants a 50% increase to armor and resistance for 5 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Giant Tube Worm",
    rarity: "Legendary",
    perk: "Ventilation Blast",
    description: "Creates an explosive blast that deals 18 damage to a single enemy. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Snailfish",
    rarity: "Legendary",
    perk: "Evasive Slime",
    description: "Greatly increases the player's dodge chance by 30% for 3 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Moon Jellyfish",
    rarity: "Legendary",
    perk: "Calming Aura",
    description: "Heals the player to 50 health and removes all negative status effects. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Dragonfish",
    rarity: "Legendary",
    perk: "Cooldown Link",
    description: "Decreases the cooldown of the other equipped pet by 25%."
  },
  {
    name: "Pacific Blackdragon",
    rarity: "Legendary",
    perk: "Shadow Meld",
    description: "The player becomes invisible and immune to damage for 3 seconds. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Wobbegong Shark",
    rarity: "Legendary",
    perk: "Ambush Hunter",
    description: "Grants a 40% damage bonus to attacks from behind an enemy."
  },
  {
    name: "Manta Ray",
    rarity: "Legendary",
    perk: "Abyssal Glide",
    description: "The player gains 3 seconds of complete invulnerability by enemy attacks. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Gulper Eel",
    rarity: "Legendary",
    perk: "Lacerating Bite",
    description: "Deals 10 damage. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  {
    name: "Mimic Octopus",
    rarity: "Legendary",
    perk: "Adaptive Mimicry",
    description: "Directs the enemies special ability back at them but with 50% less effectancy. Cooldown: 9 seconds (resets on enemy or player death)"
  },
  // Mythic (2)
  {
    name: "Lion's Mane Jellyfish",
    rarity: "Mythic",
    perk: "Venomous Barrage",
    description: "Unleashes a powerful venomous barrage, dealing 1 damage per second for 20 seconds to a single target. This ability has a 1-time use per encounter."
  },
  {
    name: "Chimaera",
    rarity: "Mythic",
    perk: "Living Fossil",
    description: "Grants a massive, permanent 50% health boost and a 15% reduction to all player attack cooldowns."
  },
  // Secret (1)
  {
    name: "Immortal Jellyfish (Turritopsis dohrnii)",
    rarity: "Secret",
    perk: "Rejuvenation Cycle",
    description: "Upon the player's death, the jellyfish sacrifices itself to revive the player to 100% health and grants a temporary 20% damage boost for 10 seconds. This perk is a one-time per enemy encounter."
  }
];

module.exports = pets;