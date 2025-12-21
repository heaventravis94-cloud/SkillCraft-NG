export interface Activity {
  id: number;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  supplies: string[];
  safetyNotes?: string;
  steps: string[];
  troubleshooting: string[];
}

export const activities: Activity[] = [
  // Life & Independence Skills (15 total)
  {
    id: 1,
    title: "Laundry Sorting Basics",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Laundry basket", "Washing machine", "Detergent", "Fabric softener (optional)"],
    steps: [
      "Separate clothes by color (whites, darks, colors)",
      "Check pockets for items before washing",
      "Sort by fabric type (delicates, heavy items)",
      "Read care labels for special instructions",
      "Load washer without overpacking"
    ],
    troubleshooting: [
      "If clothes are still dirty, use more detergent or hotter water",
      "If colors bleed, rewash with color catcher sheets",
      "If washer smells, run empty cycle with vinegar"
    ]
  },
  {
    id: 2,
    title: "Basic Ironing Techniques",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "25 mins",
    supplies: ["Iron", "Ironing board", "Spray bottle with water", "Clean cloth"],
    safetyNotes: "Always unplug iron when not in use. Never leave hot iron unattended.",
    steps: [
      "Set iron to appropriate temperature for fabric type",
      "Fill steam chamber with distilled water",
      "Lay garment flat on ironing board",
      "Iron from inside out for best results",
      "Use steam function for stubborn wrinkles"
    ],
    troubleshooting: [
      "If fabric is shiny, iron on wrong side or use lower heat",
      "If iron leaves brown spots, clean with vinegar",
      "If wrinkles persist, spray with water and let sit before ironing"
    ]
  },
  {
    id: 3,
    title: "Room Organization System",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Storage bins", "Labels", "Drawer dividers", "Shelf organizers"],
    steps: [
      "Empty entire room and assess items",
      "Sort items into categories (keep, donate, trash)",
      "Designate specific spots for each category",
      "Use storage solutions to maximize space",
      "Label everything for easy identification"
    ],
    troubleshooting: [
      "If system feels overwhelming, start with one area at a time",
      "If items keep getting misplaced, reassess your designated spots",
      "If storage solutions don't fit, measure before purchasing"
    ]
  },
  {
    id: 4,
    title: "Basic Sewing Repairs",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Needle", "Thread", "Scissors", "Pins", "Seam ripper"],
    safetyNotes: "Be careful with sharp needles. Keep away from face while threading.",
    steps: [
      "Thread needle and tie knot at end",
      "Pin fabric pieces together before sewing",
      "Use appropriate stitch for repair type",
      "Keep stitches even and consistent",
      "Tie off thread securely when finished"
    ],
    troubleshooting: [
      "If thread keeps breaking, use shorter length or check needle size",
      "If stitches are uneven, slow down and focus on consistency",
      "If fabric puckers, reduce tension on next attempt"
    ]
  },
  {
    id: 5,
    title: "Shoe Care Basics",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Shoe brush", "Cleaning cloth", "Shoe polish", "Old newspaper"],
    steps: [
      "Remove laces and insoles if possible",
      "Stuff shoes with newspaper to maintain shape",
      "Brush off loose dirt and debris",
      "Apply appropriate cleaner for shoe material",
      "Condition leather and apply polish for shine"
    ],
    troubleshooting: [
      "If stains persist, try specialized cleaner for material type",
      "If shoes still smell, sprinkle baking soda inside overnight",
      "If polish won't come off scuff, use cotton ball with remover"
    ]
  },
  {
    id: 6,
    title: "Basic Car Maintenance",
    category: "Life Skills",
    difficulty: "Intermediate",
    time: "45 mins",
    supplies: ["Motor oil", "Oil filter", "Funnel", "Jack", "Gloves"],
    safetyNotes: "Always engage parking brake. Never work under unsupported vehicle.",
    steps: [
      "Check oil level with dipstick",
      "Locate oil drain plug and filter",
      "Raise vehicle with jack if needed",
      "Drain old oil and replace filter",
      "Add new oil to appropriate level"
    ],
    troubleshooting: [
      "If oil is low frequently, check for leaks",
      "If engine light comes on, have codes scanned",
      "If strange noises, check belts and hoses"
    ]
  },
  {
    id: 7,
    title: "Appliance Cleaning Guide",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "35 mins",
    supplies: ["Microfiber cloths", "All-purpose cleaner", "Toothbrush", "Gloves"],
    safetyNotes: "Always unplug appliances before cleaning.",
    steps: [
      "Unplug appliance and let cool completely",
      "Remove removable parts for separate cleaning",
      "Wipe down exterior with appropriate cleaner",
      "Clean crevices with toothbrush or small brush",
      "Reassemble and test functionality"
    ],
    troubleshooting: [
      "If appliance still looks dirty, check manufacturer's cleaning instructions",
      "If parts won't reassemble, double-check alignment",
      "If appliance doesn't work after cleaning, check power connection"
    ]
  },
  {
    id: 8,
    title: "Time Management Matrix",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Notebook", "Pen", "Timer"],
    steps: [
      "List all current tasks and responsibilities",
      "Categorize tasks by urgency and importance",
      "Schedule important/urgent tasks first",
      "Delegate important/not urgent tasks when possible",
      "Eliminate neither urgent nor important activities"
    ],
    troubleshooting: [
      "If overwhelmed, focus only on urgent/important quadrant",
      "If tasks keep multiplying, set daily limits",
      "If delegation is difficult, start with small requests"
    ]
  },
  {
    id: 9,
    title: "Basic Home Security",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Flashlight", "Notebook", "Pen"],
    steps: [
      "Check all door and window locks",
      "Install motion sensor lights where needed",
      "Trim bushes that obscure windows",
      "Establish relationships with trusted neighbors",
      "Create spare key plan with reliable person"
    ],
    troubleshooting: [
      "If locks stick, lubricate with graphite powder",
      "If lights malfunction, check bulbs and connections",
      "If neighbors are unresponsive, try community groups"
    ]
  },
  {
    id: 10,
    title: "Emergency Kit Assembly",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Backpack", "Water bottles", "Non-perishable food", "First aid kit"],
    steps: [
      "Choose waterproof container for storage",
      "Add water (1 gallon per person per day)",
      "Include non-perishable food for 3 days",
      "Add first aid supplies and medications",
      "Include important documents in waterproof bag"
    ],
    troubleshooting: [
      "If kit is too heavy, prioritize essentials",
      "If food expires, rotate every 6 months",
      "If space is limited, store items in multiple locations"
    ]
  },
  {
    id: 11,
    title: "Basic Plumbing Repairs",
    category: "Life Skills",
    difficulty: "Intermediate",
    time: "40 mins",
    supplies: ["Plunger", "Adjustable wrench", "Plumber's tape", "Bucket"],
    safetyNotes: "Turn off water supply before beginning repairs.",
    steps: [
      "Turn off water supply to affected area",
      "Identify type of plumbing issue",
      "Use appropriate tool for repair",
      "Replace washers or gaskets as needed",
      "Test repair by turning water supply back on"
    ],
    troubleshooting: [
      "If leak persists, problem may be elsewhere in system",
      "If parts are corroded, use penetrating oil first",
      "If unsure of repair, consult professional"
    ]
  },
  {
    id: 12,
    title: "Basic Electrical Safety",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "25 mins",
    supplies: ["Voltage tester", "Insulated gloves", "Flashlight"],
    safetyNotes: "Always turn off power at breaker before electrical work.",
    steps: [
      "Turn off power at circuit breaker",
      "Test with voltage tester to confirm power is off",
      "Use insulated tools for all work",
      "Replace damaged cords or outlets immediately",
      "Label circuits for future reference"
    ],
    troubleshooting: [
      "If breaker keeps tripping, circuit may be overloaded",
      "If outlet doesn't work, check GFCI reset button",
      "If unsure of electrical work, call professional"
    ]
  },
  {
    id: 51,
    title: "Public Transportation Navigation",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Smartphone with map app", "Public transport schedule/app", "Small amount of cash/card"],
    steps: [
      "Identify your starting point and destination",
      "Research available public transport routes and schedules",
      "Plan your journey, noting transfers and estimated travel time",
      "Purchase tickets or load fare onto a card",
      "Follow signs and announcements to board the correct transport",
      "Pay attention to stops and exit at your destination"
    ],
    troubleshooting: [
      "If you miss your stop, get off at the next one and re-plan",
      "If you're unsure which route to take, ask a staff member or use a journey planner app",
      "If your transport is delayed, check for alternative routes or updates on the app"
    ]
  },
  {
    id: 52,
    title: "Basic Pet Care",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Pet food", "Water bowl", "Leash/collar", "Pet brush", "Waste bags"],
    steps: [
      "Provide fresh water and appropriate food daily",
      "Take pet for regular walks or exercise",
      "Brush pet's fur to prevent matting and reduce shedding",
      "Clean up pet waste promptly",
      "Monitor pet's health and behavior for any changes"
    ],
    troubleshooting: [
      "If pet refuses food, try a different brand or consult a vet",
      "If pet is anxious on walks, use positive reinforcement and gradual exposure",
      "If pet shows signs of illness, contact a veterinarian immediately"
    ]
  },
  {
    id: 53,
    title: "Simple Gardening for Beginners",
    category: "Life Skills",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Small shovel", "Gardening gloves", "Seeds/small plants", "Potting soil", "Watering can"],
    steps: [
      "Choose a sunny spot for your garden or pot",
      "Prepare the soil by loosening it and adding compost if needed",
      "Plant seeds or small plants according to package directions",
      "Water thoroughly after planting",
      "Weed regularly and water as needed"
    ],
    troubleshooting: [
      "If plants aren't growing, check for adequate sunlight and water",
      "If pests appear, research natural pest control methods",
      "If soil drains too quickly, add more organic matter"
    ]
  },

  // Basic Cooking for Teens (12 total)
  {
    id: 13,
    title: "Basic Pasta Cooking",
    category: "Cooking",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Large pot", "Water", "Pasta", "Salt", "Colander", "Serving bowl"],
    safetyNotes: "Be careful when handling boiling water. Use oven mitts when handling hot pots.",
    steps: [
      "Fill large pot with water and add salt",
      "Place pot on stove and bring to rolling boil",
      "Add pasta and stir gently to prevent sticking",
      "Cook according to package instructions",
      "Drain pasta and serve immediately"
    ],
    troubleshooting: [
      "If pasta is sticking, add oil to water",
      "If water boils over, reduce heat slightly",
      "If pasta is too firm, cook longer"
    ]
  },
  {
    id: 14,
    title: "Scrambled Eggs Perfectly",
    category: "Cooking",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["Non-stick pan", "Eggs", "Butter", "Spatula", "Bowl"],
    safetyNotes: "Use low-medium heat to prevent burning.",
    steps: [
      "Crack eggs into bowl and whisk until blended",
      "Heat butter in pan over low-medium heat",
      "Pour eggs into pan and let set slightly",
      "Gently stir with spatula to form curds",
      "Remove from heat when almost set"
    ],
    troubleshooting: [
      "If eggs are rubbery, cook at lower heat",
      "If eggs are watery, cook longer",
      "If eggs stick, use more butter or non-stick spray"
    ]
  },
  {
    id: 15,
    title: "Rice Cooking Basics",
    category: "Cooking",
    difficulty: "Beginner",
    time: "25 mins",
    supplies: ["Medium pot with lid", "Rice", "Water", "Measuring cup"],
    steps: [
      "Rinse rice in fine mesh strainer",
      "Measure 1 part rice to 2 parts water",
      "Bring water to boil in covered pot",
      "Reduce heat to low and simmer 18 minutes",
      "Let stand 5 minutes before fluffing"
    ],
    troubleshooting: [
      "If rice is mushy, use less water next time",
      "If rice is crunchy, add more water and cook longer",
      "If rice sticks, don't lift lid during cooking"
    ]
  },
  {
    id: 16,
    title: "Simple Salad Preparation",
    category: "Cooking",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Cutting board", "Knife", "Mixing bowl", "Vegetables", "Dressing"],
    steps: [
      "Wash all vegetables thoroughly",
      "Chop vegetables into bite-sized pieces",
      "Combine ingredients in large bowl",
      "Add dressing to taste",
      "Toss gently to coat all ingredients"
    ],
    troubleshooting: [
      "If vegetables are soggy, add dressing just before serving",
      "If salad is bland, add salt, pepper, or acid",
      "If ingredients separate, toss again before serving"
    ]
  },
  {
    id: 17,
    title: "Grilled Cheese Sandwich",
    category: "Cooking",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["Non-stick pan", "Bread", "Cheese", "Butter", "Spatula"],
    safetyNotes: "Use caution with hot pan and melted cheese.",
    steps: [
      "Butter one side of each bread slice",
      "Place one slice butter-side down in pan",
      "Add cheese on top of bread",
      "Place second slice butter-side up",
      "Cook until golden brown, then flip"
    ],
    troubleshooting: [
      "If bread burns before cheese melts, lower heat",
      "If cheese leaks out, press edges together with spatula",
      "If sandwich sticks, add more butter"
    ]
  },
  {
    id: 18,
    title: "Oatmeal Preparation",
    category: "Cooking",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["Small pot", "Oats", "Water or milk", "Spoon"],
    steps: [
      "Measure 1/2 cup oats per serving",
      "Add 1 cup liquid per serving to pot",
      "Bring to boil over medium heat",
      "Reduce heat and simmer 5 minutes",
      "Stir occasionally to prevent sticking"
    ],
    troubleshooting: [
      "If oatmeal is too thick, add more liquid",
      "If oatmeal is too thin, cook longer",
      "If oatmeal sticks, stir more frequently"
    ]
  },
  {
    id: 19,
    title: "Microwave Baked Potato",
    category: "Cooking",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["Potato", "Fork", "Microwave-safe plate", "Paper towel"],
    safetyNotes: "Pierce potato thoroughly to prevent explosion.",
    steps: [
      "Wash potato thoroughly",
      "Pierce all over with fork",
      "Place on microwave-safe plate",
      "Microwave on high for 5 minutes",
      "Flip and microwave 3-5 minutes more"
    ],
    troubleshooting: [
      "If potato is hard, cook longer in 1-minute increments",
      "If potato is overcooked, reduce time next attempt",
      "If potato explodes, pierce more holes next time"
    ]
  },
  {
    id: 20,
    title: "Pancake Making",
    category: "Cooking",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Non-stick pan", "Mixing bowls", "Whisk", "Spatula", "Ingredients"],
    steps: [
      "Mix dry ingredients in one bowl",
      "Mix wet ingredients in another bowl",
      "Combine wet and dry ingredients",
      "Heat pan over medium heat",
      "Pour batter and flip when bubbles form"
    ],
    troubleshooting: [
      "If pancakes are flat, batter may need more flour",
      "If pancakes are doughy, cook longer",
      "If pancakes burn, reduce heat"
    ]
  },
  {
    id: 54,
    title: "Basic Omelette",
    category: "Cooking",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["Eggs", "Milk (optional)", "Butter/oil", "Non-stick pan", "Spatula", "Bowl"],
    steps: [
      "Whisk eggs with a splash of milk (optional) in a bowl",
      "Heat butter or oil in a non-stick pan over medium heat",
      "Pour egg mixture into the pan, tilting to coat the bottom",
      "Cook until edges set, then gently push cooked egg to the center, tilting to let uncooked egg flow underneath",
      "Fold the omelette in half and cook until desired doneness"
    ],
    troubleshooting: [
      "If omelette sticks, ensure pan is hot enough and use enough fat",
      "If omelette tears when folding, it might be overcooked or too thin",
      "If omelette is too runny, cook for a bit longer on low heat"
    ]
  },
  {
    id: 55,
    title: "Simple Smoothie",
    category: "Cooking",
    difficulty: "Beginner",
    time: "5 mins",
    supplies: ["Blender", "Fruit (frozen preferred)", "Liquid (milk/juice/water)", "Yogurt (optional)"],
    steps: [
      "Add liquid to the blender first",
      "Add fruit and any other ingredients (yogurt, spinach)",
      "Blend until smooth, adding more liquid if too thick",
      "Taste and adjust sweetness if needed",
      "Pour into a glass and enjoy immediately"
    ],
    troubleshooting: [
      "If smoothie is too thick, add more liquid",
      "If smoothie is too thin, add more frozen fruit or ice",
      "If ingredients aren't blending, stop and stir with a spoon"
    ]
  },
  {
    id: 56,
    title: "Quick Quesadillas",
    category: "Cooking",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Tortillas", "Shredded cheese", "Non-stick pan", "Spatula", "Optional fillings (cooked chicken, beans)"],
    steps: [
      "Heat a non-stick pan over medium heat",
      "Place one tortilla in the pan",
      "Sprinkle cheese over half of the tortilla, add fillings if desired",
      "Fold the other half of the tortilla over the cheese/fillings",
      "Cook until golden brown and cheese is melted, then flip and cook the other side"
    ],
    troubleshooting: [
      "If tortilla burns, reduce heat",
      "If cheese isn't melting, cover the pan for a minute",
      "If quesadilla is soggy, don't overfill"
    ]
  },
  {
    id: 57,
    title: "Easy Tomato Soup",
    category: "Cooking",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Canned crushed tomatoes", "Vegetable broth", "Onion", "Garlic", "Olive oil", "Pot"],
    steps: [
      "Chop onion and mince garlic",
      "Heat olive oil in a pot over medium heat, sauté onion until soft",
      "Add garlic and cook for 1 minute until fragrant",
      "Pour in crushed tomatoes and vegetable broth",
      "Bring to a simmer, then reduce heat and cook for 10-15 minutes",
      "Season with salt and pepper to taste"
    ],
    troubleshooting: [
      "If soup is too thick, add more broth",
      "If soup is bland, add a pinch of sugar or herbs like basil",
      "If soup is too acidic, add a tiny pinch of baking soda"
    ]
  },

  // Meal Prep Basics (8 total)
  {
    id: 21,
    title: "Weekly Meal Planning",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Notebook", "Pen", "Internet access for recipes"],
    steps: [
      "Assess your schedule for the week",
      "Choose 3-4 main recipes to rotate",
      "Plan breakfast, lunch, dinner, and snacks",
      "Create shopping list from meal plan",
      "Prep ingredients that can be made ahead"
    ],
    troubleshooting: [
      "If plan feels overwhelming, start with 2 meals",
      "If ingredients spoil, prep smaller portions",
      "If variety is lacking, try theme nights (Taco Tuesday)"
    ]
  },
  {
    id: 22,
    title: "Batch Cooking Proteins",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Large pot or pan", "Storage containers", "Meat thermometer"],
    steps: [
      "Choose 2-3 protein sources to cook",
      "Season proteins before cooking",
      "Cook proteins to proper temperature",
      "Let cool before storing",
      "Label containers with date and contents"
    ],
    troubleshooting: [
      "If proteins dry out, add sauce when reheating",
      "If proteins overcook, check temperature earlier",
      "If storage is insufficient, freeze portions"
    ]
  },
  {
    id: 23,
    title: "Vegetable Prep Techniques",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Cutting board", "Sharp knives", "Storage containers", "Vegetables"],
    steps: [
      "Wash all vegetables thoroughly",
      "Chop vegetables into uniform sizes",
      "Store in appropriate containers",
      "Add paper towels to absorb moisture",
      "Label with prep date"
    ],
    troubleshooting: [
      "If vegetables wilt quickly, check storage temperature",
      "If chopping is slow, practice knife skills",
      "If containers aren't airtight, replace seals"
    ]
  },
  {
    id: 24,
    title: "Grain Cooking for Meal Prep",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Large pot", "Grains (rice, quinoa, etc.)", "Storage containers"],
    steps: [
      "Rinse grains before cooking",
      "Cook large batches according to package",
      "Let cool completely before storing",
      "Divide into portion-sized containers",
      "Refrigerate or freeze for later use"
    ],
    troubleshooting: [
      "If grains become gummy, add less water next time",
      "If grains dry out, add moisture when reheating",
      "If grains spoil quickly, check storage temperature"
    ]
  },
  {
    id: 25,
    title: "Storage Container Organization",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Glass containers", "Labels", "Marker", "Permanent marker"],
    steps: [
      "Sort containers by size",
      "Label with contents and date",
      "Organize by meal type in refrigerator",
      "Stack containers efficiently",
      "Create system for rotation"
    ],
    troubleshooting: [
      "If containers don't stack well, check uniformity",
      "If labels fade, use permanent marker",
      "If space is insufficient, declutter regularly"
    ]
  },
  {
    id: 58,
    title: "Healthy Snack Prep",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Fruits", "Vegetables", "Nuts/seeds", "Small containers/bags"],
    steps: [
      "Wash and chop fruits and vegetables (e.g., carrot sticks, apple slices)",
      "Portion out nuts, seeds, or trail mix into individual bags",
      "Prepare dips like hummus or yogurt for veggies/fruit",
      "Store prepped snacks in airtight containers in the fridge",
      "Grab and go for quick, healthy options throughout the week"
    ],
    troubleshooting: [
      "If fruits brown, soak in lemon water briefly before storing",
      "If snacks get boring, rotate options weekly",
      "If portions are too small/large, adjust container size"
    ]
  },
  {
    id: 59,
    title: "Freezer Meal Assembly",
    category: "Meal Prep",
    difficulty: "Intermediate",
    time: "120 mins",
    supplies: ["Freezer-safe bags/containers", "Ingredients for chosen recipes", "Labels"],
    steps: [
      "Choose recipes suitable for freezing (e.g., casseroles, soups, stews)",
      "Prep all ingredients (chop veggies, cook meat if needed)",
      "Assemble meals in freezer-safe containers or bags",
      "Label clearly with recipe name, date, and cooking instructions",
      "Freeze for future quick meals"
    ],
    troubleshooting: [
      "If meals get freezer burn, ensure containers are airtight",
      "If thawing takes too long, thaw overnight in the fridge",
      "If flavors are bland after freezing, add fresh herbs when reheating"
    ]
  },
  {
    id: 60,
    title: "Salad Jar Prep",
    category: "Meal Prep",
    difficulty: "Beginner",
    time: "40 mins",
    supplies: ["Mason jars with lids", "Salad dressing", "Veggies", "Protein", "Greens"],
    steps: [
      "Pour dressing into the bottom of the jar",
      "Layer hard vegetables (carrots, cucumbers) next",
      "Add grains or protein (quinoa, chicken)",
      "Layer softer vegetables (tomatoes, bell peppers)",
      "Top with leafy greens, ensuring they stay dry",
      "Seal tightly and store in the fridge; shake to mix before eating"
    ],
    troubleshooting: [
      "If greens wilt, ensure they are completely dry before adding",
      "If dressing leaks, check jar seal or use less dressing",
      "If salad is soggy, ensure layers are in correct order"
    ]
  },

  // Laundry and Clothing Care (8 total)
  {
    id: 26,
    title: "Stain Removal Techniques",
    category: "Laundry",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Stain remover", "White vinegar", "Baking soda", "Clean cloth"],
    safetyNotes: "Test stain removers on hidden area first.",
    steps: [
      "Identify type of stain (protein, oil, dye)",
      "Blot (don't rub) excess from fabric",
      "Apply appropriate stain remover",
      "Let sit for recommended time",
      "Wash in hottest water safe for fabric"
    ],
    troubleshooting: [
      "If stain persists, repeat treatment before drying",
      "If fabric is damaged, use gentler method",
      "If color bleeding, wash in cold water"
    ]
  },
  {
    id: 27,
    title: "Washing Machine Settings",
    category: "Laundry",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Laundry", "Detergent", "Fabric softener"],
    steps: [
      "Sort clothes by color and fabric type",
      "Choose appropriate water temperature",
      "Select cycle based on soil level",
      "Add correct amount of detergent",
      "Add fabric softener to dispenser"
    ],
    troubleshooting: [
      "If clothes are still dirty, use pre-wash cycle",
      "If clothes are over-sudsed, run extra rinse cycle",
      "If machine smells, run empty hot cycle with vinegar"
    ]
  },
  {
    id: 28,
    title: "Clothing Storage Solutions",
    category: "Laundry",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Hangers", "Storage bins", "Vacuum bags", "Labels"],
    steps: [
      "Seasonally rotate clothing",
      "Use appropriate hangers for garment type",
      "Store off-season items in vacuum bags",
      "Organize by category and color",
      "Label storage containers clearly"
    ],
    troubleshooting: [
      "If clothes develop odors, ensure complete dryness before storage",
      "If storage space is insufficient, reassess necessity of items",
      "If clothes wrinkle, use padded hangers or refold regularly"
    ]
  },
  {
    id: 29,
    title: "Dryer Usage and Care",
    category: "Laundry",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Dryer", "Dryer sheets", "Lint brush"],
    safetyNotes: "Clean lint filter after every load.",
    steps: [
      "Clean lint filter before using dryer",
      "Load dryer without overpacking",
      "Choose appropriate heat setting",
      "Add dryer sheet for static control",
      "Remove clothes promptly when dry"
    ],
    troubleshooting: [
      "If clothes are over-dried, reduce time or heat",
      "If clothes are still damp, clean lint filter",
      "If dryer overheats, check ventilation"
    ]
  },
  {
    id: 30,
    title: "Clothing Repair Basics",
    category: "Laundry",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Needle", "Thread", "Scissors", "Pins"],
    steps: [
      "Assess damage to determine repair method",
      "Thread needle with matching thread",
      "Pin fabric pieces together",
      "Use appropriate stitch for repair",
      "Reinforce stress points"
    ],
    troubleshooting: [
      "If thread keeps breaking, use shorter length",
      "If stitches are uneven, slow down",
      "If repair is visible, use blind stitch technique"
    ]
  },
  {
    id: 61,
    title: "Hand Washing Delicates",
    category: "Laundry",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Mild detergent", "Basin/sink", "Clean towel", "Delicate garments"],
    steps: [
      "Fill a clean basin or sink with cool water and add a small amount of mild detergent",
      "Submerge the delicate garment and gently swish it around for a few minutes",
      "Avoid scrubbing or twisting the fabric",
      "Drain the soapy water and refill with clean, cool water to rinse",
      "Gently press out excess water (do not wring)",
      "Lay the garment flat on a clean towel to air dry"
    ],
    troubleshooting: [
      "If garment still feels soapy, rinse again with fresh water",
      "If garment stretches, reshape it gently while wet",
      "If garment takes too long to dry, roll it in a dry towel to absorb more water"
    ]
  },
  {
    id: 62,
    title: "Folding T-Shirts Neatly",
    category: "Laundry",
    difficulty: "Beginner",
    time: "5 mins",
    supplies: ["T-shirt", "Flat surface"],
    steps: [
      "Lay the t-shirt flat on a clean surface, front side up",
      "Imagine a line from the middle of the shoulder to the middle of the shirt",
      "Grab the shirt at the shoulder line and at the bottom hem along this imaginary line",
      "Bring the shoulder point down to meet the bottom hem point, creating a fold",
      "Fold the remaining side of the shirt over",
      "Flip the shirt over, and it should be a perfectly folded rectangle"
    ],
    troubleshooting: [
      "If shirt is uneven, adjust your initial grab points",
      "If shirt wrinkles, ensure it's smooth before folding",
      "Practice makes perfect for speed and neatness"
    ]
  },
  {
    id: 63,
    title: "Organizing Your Sock Drawer",
    category: "Laundry",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["All your socks", "Drawer dividers (optional)"],
    steps: [
      "Empty your entire sock drawer",
      "Pair up all matching socks",
      "Discard any socks with holes or no match",
      "Fold or roll each pair neatly",
      "Organize socks by type (e.g., athletic, dress, casual) or color",
      "Use drawer dividers to keep categories separate if desired"
    ],
    troubleshooting: [
      "If you have many single socks, keep them in a 'lonely sock' bin for a few washes",
      "If drawer gets messy quickly, try a different folding method or dividers",
      "If you run out of space, consider decluttering socks you rarely wear"
    ]
  },

  // Cleaning and Organization (8 total)
  {
    id: 31,
    title: "Deep Cleaning Schedule",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "120 mins",
    supplies: ["Cleaning caddy", "All-purpose cleaner", "Microfiber cloths", "Vacuum"],
    steps: [
      "Create weekly cleaning schedule",
      "Assign deep cleaning tasks to specific days",
      "Gather all necessary supplies",
      "Work room by room for efficiency",
      "Check off completed tasks"
    ],
    troubleshooting: [
      "If schedule is too ambitious, reduce frequency",
      "If tasks are forgotten, set phone reminders",
      "If cleaning takes too long, break into smaller sessions"
    ]
  },
  {
    id: 32,
    title: "Bathroom Sanitization",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Toilet bowl cleaner", "Bathroom cleaner", "Scrub brush", "Sponges"],
    safetyNotes: "Ensure good ventilation when using chemical cleaners.",
    steps: [
      "Remove all items from surfaces",
      "Spray cleaner on all surfaces",
      "Let dwell for recommended time",
      "Scrub with appropriate tools",
      "Rinse and dry surfaces thoroughly"
    ],
    troubleshooting: [
      "If stains persist, use specialized cleaner",
      "If grout is discolored, try baking soda paste",
      "If odors remain, check drains and trash"
    ]
  },
  {
    id: 33,
    title: "Kitchen Deep Clean",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Oven cleaner", "Degreaser", "Scrub brushes", "Microfiber cloths"],
    safetyNotes: "Turn off appliances before cleaning.",
    steps: [
      "Clear all countertops and appliances",
      "Clean inside microwave and refrigerator",
      "Scrub oven and stovetop",
      "Wipe down all cabinets and drawers",
      "Mop or sweep floor last"
    ],
    troubleshooting: [
      "If grease is stubborn, let degreaser sit longer",
      "If appliances are heavily soiled, clean in sections",
      "If space is cramped, remove items for cleaning"
    ]
  },
  {
    id: 34,
    title: "Decluttering Method",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Boxes or bags", "Labels", "Marker", "Timer"],
    steps: [
      "Set timer for 15-minute intervals",
      "Sort items into categories (keep, donate, trash)",
      "Handle each item only once",
      "Question if you've used item in past year",
      "Immediately remove donation/trash items"
    ],
    troubleshooting: [
      "If decision is difficult, use 20/20 rule (would you buy again)",
      "If space becomes overwhelming, focus on one area",
      "If items accumulate again, establish daily tidying routine"
    ]
  },
  {
    id: 35,
    title: "Car Interior Cleaning",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Vacuum", "Microfiber cloths", "Car interior cleaner", "Brush set"],
    steps: [
      "Remove all trash and personal items",
      "Vacuum seats, floor, and crevices",
      "Clean surfaces with appropriate cleaner",
      "Wipe down windows inside and out",
      "Replace floor mats and organize items"
    ],
    troubleshooting: [
      "If stains persist, try specialized cleaner",
      "If odors remain, place odor absorber overnight",
      "If cleaning takes too long, do in sections"
    ]
  },
  {
    id: 64,
    title: "Window Cleaning Streak-Free",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Spray bottle", "White vinegar", "Water", "Microfiber cloths (2)", "Bucket"],
    steps: [
      "Mix equal parts white vinegar and water in a spray bottle",
      "Wipe down windows with a damp cloth to remove loose dirt",
      "Spray the vinegar solution generously onto the window",
      "Wipe with a clean, dry microfiber cloth in an S-motion from top to bottom",
      "Use a second dry microfiber cloth for any remaining streaks"
    ],
    troubleshooting: [
      "If streaks appear, try using less solution or a cleaner cloth",
      "If windows are very dirty, pre-wash with soapy water first",
      "Avoid cleaning in direct sunlight, as it can cause streaks"
    ]
  },
  {
    id: 65,
    title: "Dusting and Polishing Furniture",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Microfiber cloth", "Feather duster", "Furniture polish/spray"],
    steps: [
      "Start from the top of the room and work your way down",
      "Use a feather duster or dry microfiber cloth to remove loose dust from surfaces",
      "Spray a small amount of furniture polish onto a clean microfiber cloth (not directly on furniture)",
      "Wipe down wooden or polished surfaces in the direction of the grain",
      "Buff gently with a dry part of the cloth for shine"
    ],
    troubleshooting: [
      "If polish leaves residue, use less product or buff more thoroughly",
      "If dust resettles quickly, consider an air purifier",
      "For delicate items, use a soft brush or compressed air"
    ]
  },
  {
    id: 66,
    title: "Vacuuming and Floor Care",
    category: "Cleaning",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Vacuum cleaner", "Broom/dustpan", "Mop", "Floor cleaner"],
    steps: [
      "Clear the floor of any small items or furniture",
      "Use a broom or vacuum to remove loose dirt and debris from corners and edges",
      "Vacuum carpets and rugs in overlapping passes",
      "For hard floors, mix floor cleaner with water according to instructions",
      "Mop the floor, rinsing the mop frequently, and let it air dry"
    ],
    troubleshooting: [
      "If vacuum isn't picking up dirt, check the bag/canister and brush roll",
      "If mop leaves streaks, use less cleaner or rinse more thoroughly",
      "For stubborn stains on hard floors, spot clean before mopping"
    ]
  },

  // Time Management (8 total)
  {
    id: 36,
    title: "Daily Schedule Planning",
    category: "Time Management",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Planner or app", "Pen", "Timer"],
    steps: [
      "List all tasks for the day",
      "Prioritize using urgent/important matrix",
      "Block time for each activity",
      "Include buffer time for interruptions",
      "Review and adjust schedule as needed"
    ],
    troubleshooting: [
      "If schedule is unrealistic, reduce number of tasks",
      "If interruptions are frequent, build in more buffer time",
      "If tasks take longer, adjust future estimates"
    ]
  },
  {
    id: 37,
    title: "Goal Setting Framework",
    category: "Time Management",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Notebook", "Pen", "Vision board materials (optional)"],
    steps: [
      "Define 3-5 major goals for time period",
      "Make goals specific and measurable",
      "Break goals into actionable steps",
      "Set deadlines for each step",
      "Review progress weekly"
    ],
    troubleshooting: [
      "If goals feel overwhelming, break into smaller milestones",
      "If motivation wanes, reconnect with original purpose",
      "If progress stalls, reassess approach"
    ]
  },
  {
    id: 38,
    title: "Focus and Concentration",
    category: "Time Management",
    difficulty: "Beginner",
    time: "25 mins",
    supplies: ["Timer", "Quiet space", "Notebook", "Pen"],
    steps: [
      "Eliminate distractions (phone, social media)",
      "Set timer for focused work period",
      "Work on single task until timer ends",
      "Take short break between sessions",
      "Track completed focused sessions"
    ],
    troubleshooting: [
      "If focus breaks easily, start with shorter intervals",
      "If environment is distracting, find quieter space",
      "If mind wanders, jot down thoughts and return to task"
    ]
  },
  {
    id: 39,
    title: "Weekly Review Process",
    category: "Time Management",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Notebook", "Pen", "Previous week's schedule"],
    steps: [
      "Review accomplishments from previous week",
      "Analyze what worked and what didn't",
      "Adjust systems and processes accordingly",
      "Plan priorities for upcoming week",
      "Prepare for potential obstacles"
    ],
    troubleshooting: [
      "If review takes too long, focus on key areas",
      "If progress seems slow, celebrate small wins",
      "If obstacles repeat, develop specific solutions"
    ]
  },
  {
    id: 40,
    title: "Habit Formation System",
    category: "Time Management",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Habit tracker", "Pen", "Calendar"],
    steps: [
      "Choose 1-2 new habits to develop",
      "Start with tiny versions of habits",
      "Link new habits to existing routines",
      "Track consistency daily",
      "Celebrate small wins"
    ],
    troubleshooting: [
      "If habits don't stick, make them even smaller",
      "If motivation fades, reconnect with benefits",
      "If life gets busy, focus on one habit at a time"
    ]
  },
  {
    id: 67,
    title: "Pomodoro Technique for Study",
    category: "Time Management",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Timer", "Study materials", "Pen and paper for notes"],
    steps: [
      "Choose a task to work on",
      "Set a timer for 25 minutes (one Pomodoro)",
      "Work on the task with full concentration until the timer rings",
      "Take a short 5-minute break",
      "After four Pomodoros, take a longer break (15-30 minutes)"
    ],
    troubleshooting: [
      "If you get distracted, gently redirect your focus back to the task",
      "If 25 minutes is too long, start with shorter intervals (e.g., 15 minutes)",
      "If you find yourself skipping breaks, remember they are crucial for sustained focus"
    ]
  },
  {
    id: 68,
    title: "Digital Detox Planning",
    category: "Time Management",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Calendar", "Journal", "Alternative activity ideas"],
    steps: [
      "Identify times or days when you want to reduce screen time",
      "Communicate your plan to friends and family",
      "Plan alternative activities to fill the time (e.g., reading, hobbies, outdoor activities)",
      "Turn off notifications or put your devices away during detox periods",
      "Reflect on how you feel during and after the detox"
    ],
    troubleshooting: [
      "If you struggle to stay off devices, start with shorter detox periods",
      "If you feel bored, revisit your list of alternative activities",
      "If you need to be reachable, designate specific check-in times"
    ]
  },
  {
    id: 69,
    title: "Prioritizing with Eisenhower Matrix",
    category: "Time Management",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Paper", "Pen", "List of tasks"],
    steps: [
      "Draw a 2x2 grid with 'Urgent' and 'Not Urgent' on one axis, and 'Important' and 'Not Important' on the other",
      "List all your tasks and place them into one of the four quadrants:",
      "1. Urgent & Important (Do First)",
      "2. Not Urgent & Important (Schedule)",
      "3. Urgent & Not Important (Delegate)",
      "4. Not Urgent & Not Important (Eliminate)",
      "Focus your efforts on Quadrant 1 and 2 tasks"
    ],
    troubleshooting: [
      "If many tasks fall into 'Urgent & Important', you might be procrastinating or overcommitting",
      "If you struggle to categorize, ask yourself: 'What are the consequences if I don't do this?'",
      "Regularly review and adjust your matrix as priorities change"
    ]
  },

  // Budgeting Basics (8 total)
  {
    id: 41,
    title: "Income and Expense Tracking",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Notebook or app", "Bank statements", "Pen"],
    steps: [
      "List all sources of income",
      "Record all expenses for one week",
      "Categorize expenses (needs, wants, savings)",
      "Calculate total income vs. total expenses",
      "Identify areas for potential savings"
    ],
    troubleshooting: [
      "If expenses exceed income, look for discretionary cuts",
      "If tracking is difficult, use budgeting app",
      "If categories are unclear, research average spending"
    ]
  },
  {
    id: 42,
    title: "Savings Goal Planning",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "25 mins",
    supplies: ["Calculator", "Notebook", "Pen"],
    steps: [
      "Define specific savings goals with amounts",
      "Determine timeline for each goal",
      "Calculate monthly amount needed",
      "Open separate savings accounts",
      "Automate transfers when possible"
    ],
    troubleshooting: [
      "If goals seem unrealistic, extend timeline",
      "If automatic transfers fail, set calendar reminders",
      "If progress stalls, reassess priorities"
    ]
  },
  {
    id: 43,
    title: "Smart Shopping Strategies",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Shopping list template", "Price comparison app", "Calculator"],
    steps: [
      "Create detailed shopping list before going",
      "Compare prices across stores",
      "Use coupons and loyalty programs",
      "Shop during sales and use cashback apps",
      "Buy generic brands when quality is similar"
    ],
    troubleshooting: [
      "If list is forgotten, make quick mental inventory",
      "If sales are confusing, focus on regularly purchased items",
      "If temptation is strong, shop after eating"
    ]
  },
  {
    id: 44,
    title: "Debt Management Basics",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "35 mins",
    supplies: ["List of debts", "Calculator", "Notebook", "Pen"],
    steps: [
      "List all debts with balances and interest rates",
      "Choose debt repayment strategy (snowball or avalanche)",
      "Make minimum payments on all debts",
      "Apply extra funds to target debt",
      "Celebrate when each debt is paid off"
    ],
    troubleshooting: [
      "If payments are difficult, contact creditors for options",
      "If progress is slow, find additional income sources",
      "If motivation wanes, visualize debt-free future"
    ]
  },
  {
    id: 45,
    title: "Emergency Fund Building",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "25 mins",
    supplies: ["Calculator", "Bank account information", "Notebook", "Pen"],
    steps: [
      "Determine target emergency fund amount",
      "Open dedicated savings account",
      "Calculate monthly contribution amount",
      "Set up automatic transfers",
      "Track progress toward goal"
    ],
    troubleshooting: [
      "If contributions are difficult, start with small amounts",
      "If fund is used, rebuild as priority",
      "If goal seems distant, celebrate milestones"
    ]
  },
  {
    id: 70,
    title: "Understanding Credit Scores",
    category: "Budgeting",
    difficulty: "Intermediate",
    time: "40 mins",
    supplies: ["Internet access", "Notebook", "Pen"],
    steps: [
      "Research what a credit score is and why it's important",
      "Learn about the factors that influence your credit score (payment history, debt, length of credit history)",
      "Understand how to check your credit report for free (e.g., AnnualCreditReport.com)",
      "Identify ways to build good credit (e.g., secured credit card, authorized user)",
      "Recognize common credit score myths and facts"
    ],
    troubleshooting: [
      "If information on your credit report is incorrect, dispute it with the credit bureau",
      "If you have no credit history, start with small, manageable steps to build it",
      "If you're overwhelmed, focus on one factor at a time to improve your score"
    ]
  },
  {
    id: 71,
    title: "Creating a Simple Budget",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Spreadsheet software or budgeting app", "Bank statements", "Pay stubs"],
    steps: [
      "Calculate your total monthly income from all sources",
      "List all your fixed monthly expenses (rent, subscriptions, loan payments)",
      "Estimate your variable monthly expenses (groceries, entertainment, transport)",
      "Subtract total expenses from total income to see your surplus or deficit",
      "Adjust spending categories to ensure income > expenses, allocating funds to savings/goals",
      "Review and update your budget monthly"
    ],
    troubleshooting: [
      "If you consistently overspend in a category, adjust the budget or find ways to cut costs",
      "If tracking expenses is hard, use a budgeting app that links to your bank",
      "If your income varies, create a 'bare bones' budget for low-income months"
    ]
  },
  {
    id: 72,
    title: "Saving for a Big Purchase",
    category: "Budgeting",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Calculator", "Notebook", "Pen"],
    steps: [
      "Identify the specific item or experience you want to save for and its total cost",
      "Determine a realistic timeframe for saving this amount",
      "Calculate how much you need to save each week or month",
      "Look for areas in your current budget where you can cut back to free up funds",
      "Set up a separate savings account or use a visual tracker to monitor progress",
      "Celebrate milestones as you get closer to your goal"
    ],
    troubleshooting: [
      "If progress is slow, re-evaluate your timeframe or look for additional income streams",
      "If you're tempted to spend savings, make it harder to access (e.g., separate bank account)",
      "If the goal seems too big, break it down into smaller, more achievable mini-goals"
    ]
  },

  // Basic First Aid (8 total)
  {
    id: 46,
    title: "CPR Basics",
    category: "First Aid",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["CPR mannequin (if available)", "First aid kit"],
    safetyNotes: "Call 911 for real emergencies. Take certified course for full training.",
    steps: [
      "Check for responsiveness and breathing",
      "Call 911 if person is unresponsive",
      "Position hands in center of chest",
      "Compress at least 2 inches deep",
      "Give 30 compressions followed by 2 breaths"
    ],
    troubleshooting: [
      "If unsure of technique, take certified course",
      "If person starts breathing, place in recovery position",
      "If ribs crack, continue compressions (bones heal)"
    ]
  },
  {
    id: 47,
    title: "Wound Care",
    category: "First Aid",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Gloves", "Clean water", "Gauze", "Adhesive bandages", "Antiseptic"],
    safetyNotes: "Wash hands before and after treatment. Seek medical help for serious wounds.",
    steps: [
      "Wash hands and put on gloves",
      "Clean wound gently with water",
      "Apply antiseptic if available",
      "Cover with sterile gauze",
      "Secure with adhesive bandage"
    ],
    troubleshooting: [
      "If wound is deep or won't stop bleeding, seek medical help",
      "If signs of infection appear, consult healthcare provider",
      "If person is allergic to materials, use alternatives"
    ]
  },
  {
    id: 48,
    title: "Burn Treatment",
    category: "First Aid",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["Cool water", "Clean cloth", "Burn ointment", "Non-stick bandage"],
    safetyNotes: "Never use ice or butter on burns. Seek medical help for serious burns.",
    steps: [
      "Cool burn with running water for 10-20 minutes",
      "Remove jewelry or tight clothing near burn",
      "Cover with clean, dry cloth",
      "Apply burn ointment if available",
      "Seek medical help for serious burns"
    ],
    troubleshooting: [
      "If burn blisters, don't pop them",
      "If pain is severe, seek medical attention",
      "If burn covers large area, call 911"
    ]
  },
  {
    id: 49,
    title: "Choking Response",
    category: "First Aid",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["None required"],
    safetyNotes: "Call 911 if person becomes unconscious. Take certified course for full training.",
    steps: [
      "Determine if person can speak or cough",
      "Encourage coughing if person can still breathe",
      "Perform back blows if coughing ineffective",
      "Do abdominal thrusts (Heimlich) if needed",
      "Call 911 if person becomes unconscious"
    ],
    troubleshooting: [
      "If unsure of technique, take certified course",
      "If person becomes unconscious, begin CPR",
      "If pregnant or obese, perform chest thrusts"
    ]
  },
  {
    id: 50,
    title: "Allergic Reaction Response",
    category: "First Aid",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["EpiPen (if available)", "Phone"],
    safetyNotes: "Call 911 immediately for severe reactions. EpiPen is not substitute for medical care.",
    steps: [
      "Recognize signs of severe allergic reaction",
      "Call 911 immediately",
      "Help person use EpiPen if available",
      "Keep person calm and still",
      "Monitor breathing until help arrives"
    ],
    troubleshooting: [
      "If person has no EpiPen, call 911 immediately",
      "If reaction seems mild, still monitor closely",
      "If person becomes unconscious, begin CPR"
    ]
  },
  {
    id: 73,
    title: "Treating Minor Cuts and Scrapes",
    category: "First Aid",
    difficulty: "Beginner",
    time: "5 mins",
    supplies: ["Mild soap", "Water", "Antiseptic wipe", "Adhesive bandage"],
    steps: [
      "Wash your hands thoroughly with soap and water",
      "Gently clean the wound with mild soap and water to remove dirt",
      "Apply an antiseptic wipe or solution to the wound area",
      "Cover the cut or scrape with a clean adhesive bandage",
      "Change the bandage daily or if it becomes wet or dirty"
    ],
    troubleshooting: [
      "If bleeding doesn't stop after a few minutes of direct pressure, seek medical attention",
      "If the wound shows signs of infection (redness, pus, increased pain), consult a doctor",
      "If the bandage causes irritation, try a different type or hypoallergenic option"
    ]
  },
  {
    id: 74,
    title: "Sprain and Strain Care (R.I.C.E.)",
    category: "First Aid",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Ice pack", "Elastic bandage", "Pillow/cushion"],
    steps: [
      "**R**est: Stop the activity that caused the injury and avoid putting weight on it",
      "**I**ce: Apply an ice pack to the injured area for 15-20 minutes every 2-3 hours",
      "**C**ompression: Gently wrap the injured area with an elastic bandage to reduce swelling",
      "**E**levation: Raise the injured limb above the level of the heart using pillows",
      "Monitor for severe pain, deformity, or inability to bear weight, and seek medical help if present"
    ],
    troubleshooting: [
      "If swelling increases despite R.I.C.E., consult a doctor",
      "If the elastic bandage feels too tight or causes numbness, loosen it",
      "If pain is severe or doesn't improve, get professional medical advice"
    ]
  },
  {
    id: 75,
    title: "Recognizing and Responding to Fainting",
    category: "First Aid",
    difficulty: "Beginner",
    time: "10 mins",
    supplies: ["None required"],
    steps: [
      "If someone feels faint, help them lie down with their legs elevated 10-12 inches",
      "Loosen any tight clothing around their neck or waist",
      "If they have fainted, ensure they are breathing and check for injuries from the fall",
      "Once conscious, keep them lying down for a few minutes before slowly helping them sit up",
      "Offer water and monitor them; if they don't recover quickly or have other symptoms, call 911"
    ],
    troubleshooting: [
      "If the person doesn't regain consciousness within a minute, call 911 immediately",
      "If they hit their head, assume a head injury and keep them still while calling for help",
      "If fainting is recurrent, advise them to see a doctor"
    ]
  },

  // DIY and Hands-On Skills (25 total)
  {
    id: 76,
    title: "Beginner Woodworking: Simple Shelf",
    category: "DIY",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Wood planks", "Saw", "Drill", "Screws", "Measuring tape", "Pencil", "Sandpaper"],
    safetyNotes: "Always wear safety glasses when cutting or drilling. Keep hands clear of saw blade.",
    steps: [
      "Measure and mark wood planks for shelf length and supports",
      "Carefully cut wood planks to size using a saw",
      "Sand all cut edges smooth to prevent splinters",
      "Mark pilot holes for screws on supports and shelf pieces",
      "Drill pilot holes, then attach supports to the shelf using screws",
      "Mount the finished shelf securely to a wall (if applicable)"
    ],
    troubleshooting: [
      "If cuts are uneven, use a straight edge guide for the saw",
      "If screws strip, use a larger screw or wood filler",
      "If wood splits, pre-drill larger pilot holes"
    ]
  },
  {
    id: 77,
    title: "Tool Safety Basics",
    category: "DIY",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Various hand tools (hammer, screwdriver, wrench)", "Safety glasses", "Gloves"],
    safetyNotes: "Always wear appropriate safety gear. Read tool manuals before use.",
    steps: [
      "Always wear safety glasses to protect your eyes",
      "Choose the right tool for the job to prevent damage or injury",
      "Inspect tools for damage before use; do not use broken tools",
      "Keep tools clean and stored properly after each use",
      "Understand how to safely hold and operate each tool"
    ],
    troubleshooting: [
      "If a tool feels unsafe, stop using it and seek guidance",
      "If you're unsure about a tool's function, look up a tutorial or ask an expert",
      "If you get a minor injury, apply first aid immediately"
    ]
  },
  {
    id: 78,
    title: "Simple Home Repair: Patching Drywall",
    category: "DIY",
    difficulty: "Intermediate",
    time: "60 mins (plus drying time)",
    supplies: ["Drywall patch kit", "Spackle/joint compound", "Putty knife", "Sandpaper", "Paint"],
    steps: [
      "Clean the area around the hole or crack",
      "Apply the self-adhesive drywall patch over the hole",
      "Using a putty knife, apply a thin layer of spackle over the patch",
      "Allow the first layer to dry completely (check product instructions)",
      "Apply a second, slightly wider layer of spackle, feathering the edges",
      "Once dry, sand smooth and clean off dust, then paint to match the wall"
    ],
    troubleshooting: [
      "If spackle cracks, apply thinner layers and allow ample drying time",
      "If patch is visible, apply more spackle and sand more thoroughly",
      "If paint doesn't match, test a small, inconspicuous area first"
    ]
  },
  {
    id: 79,
    title: "Creative DIY: Upcycled Jar Decor",
    category: "DIY",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Empty glass jars", "Acrylic paint", "Paintbrushes", "Twine/ribbon", "Glue"],
    steps: [
      "Wash and thoroughly dry glass jars",
      "Paint the outside of the jars with acrylic paint in desired colors",
      "Allow paint to dry completely (multiple coats may be needed)",
      "Decorate with twine, ribbon, or other embellishments using glue",
      "Use as vases, pen holders, or decorative storage"
    ],
    troubleshooting: [
      "If paint peels, ensure jars are clean and dry before painting",
      "If paint is streaky, apply thin, even coats",
      "If glue doesn't hold, use a stronger craft adhesive"
    ]
  },
  {
    id: 80,
    title: "Woodburning Basics",
    category: "DIY",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["Woodburning tool", "Wood piece (light-colored, smooth)", "Pencil", "Eraser", "Safety gloves"],
    safetyNotes: "Woodburning tools get very hot. Use on a heat-safe surface and wear gloves.",
    steps: [
      "Prepare your wood piece by sanding it smooth",
      "Lightly sketch your design onto the wood with a pencil",
      "Plug in the woodburning tool and allow it to heat up fully",
      "Practice different tips and pressures on a scrap piece of wood",
      "Carefully trace your design, applying even pressure",
      "Allow the wood to cool completely before erasing pencil marks"
    ],
    troubleshooting: [
      "If burns are too light, apply more pressure or use a hotter setting",
      "If burns are too dark or deep, use less pressure or a cooler setting",
      "If tool slips, ensure a stable grip and work slowly"
    ]
  },
  {
    id: 81,
    title: "Basic Picture Hanging",
    category: "DIY",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Picture frame", "Hammer", "Nail/picture hook", "Measuring tape", "Pencil", "Level"],
    steps: [
      "Decide on the placement of your picture on the wall",
      "Measure the height from the top of the frame to the hanging wire/hook",
      "Mark the spot on the wall where the nail/hook should go, considering eye level",
      "Gently hammer the nail or insert the picture hook into the wall",
      "Hang the picture and use a level to ensure it's straight"
    ],
    troubleshooting: [
      "If the nail bends, use a stronger nail or pre-drill a small pilot hole",
      "If the picture is crooked, adjust the hook or use two hooks for wider frames",
      "If the wall is too soft for a nail, use a drywall anchor"
    ]
  },
  {
    id: 82,
    title: "Furniture Assembly Basics",
    category: "DIY",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Furniture kit", "Screwdriver (Phillips/flathead)", "Allen wrench (usually included)", "Hammer (optional)"],
    steps: [
      "Unpack all components and lay them out, checking against the parts list",
      "Read the instruction manual thoroughly before starting",
      "Identify each piece and hardware item",
      "Follow the step-by-step diagrams carefully, attaching pieces in order",
      "Tighten all screws and bolts securely, but do not overtighten",
      "Test the stability of the assembled furniture"
    ],
    troubleshooting: [
      "If pieces don't fit, double-check the orientation and part numbers",
      "If screws strip, stop and try a different screw or pre-drill a pilot hole",
      "If instructions are unclear, look for online assembly videos for the specific item"
    ]
  },
  {
    id: 83,
    title: "Simple Painting Project: Accent Wall",
    category: "DIY",
    difficulty: "Intermediate",
    time: "180 mins (plus drying time)",
    supplies: ["Paint (desired color)", "Paint roller", "Paintbrush", "Painter's tape", "Drop cloth", "Primer (optional)"],
    safetyNotes: "Ensure good ventilation. Wear old clothes. Keep paint away from eyes.",
    steps: [
      "Choose an accent wall and clear furniture away from it",
      "Clean the wall surface to remove dust and grime",
      "Apply painter's tape along edges, ceiling, and baseboards",
      "Apply a coat of primer if changing a dark color or painting over stains",
      "Paint the edges with a brush, then use a roller for the main wall in even strokes",
      "Apply a second coat if needed, then carefully remove tape while paint is still slightly wet"
    ],
    troubleshooting: [
      "If paint bleeds under tape, press tape firmly or use a thin bead of caulk along the edge",
      "If roller leaves lines, use less paint or overlap strokes more smoothly",
      "If paint splatters, use a drop cloth and work slowly"
    ]
  },
  {
    id: 84,
    title: "Basic Bicycle Maintenance",
    category: "DIY",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Bicycle stand (optional)", "Bike chain lubricant", "Rag", "Tire pump", "Allen wrench set"],
    steps: [
      "Check tire pressure and inflate to recommended PSI",
      "Inspect brakes for wear and ensure they engage properly",
      "Clean and lubricate the bike chain",
      "Check quick releases on wheels and seat post for tightness",
      "Ensure all bolts (handlebars, seat) are snug with an Allen wrench",
      "Take a short test ride to check functionality"
    ],
    troubleshooting: [
      "If brakes squeal, clean rims and brake pads or adjust alignment",
      "If chain is rusty, clean thoroughly with a degreaser before lubricating",
      "If tires frequently go flat, check for punctures or worn tubes"
    ]
  },
  {
    id: 85,
    title: "Creating a Custom Phone Stand",
    category: "DIY",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Small wood block or thick cardboard", "Saw/craft knife", "Sandpaper", "Ruler", "Pencil", "Wood glue (if wood)"],
    safetyNotes: "Be careful with sharp saws/knives. Always cut away from your body.",
    steps: [
      "Measure your phone's thickness and desired viewing angle",
      "Sketch a design for your stand on the wood block or cardboard",
      "Carefully cut out the pieces according to your design",
      "Sand any rough edges if using wood",
      "Assemble the pieces using wood glue or strong craft glue",
      "Allow glue to dry completely before placing your phone on the stand"
    ],
    troubleshooting: [
      "If cuts are uneven, use a straight edge as a guide",
      "If stand is unstable, adjust the base or angle for better balance",
      "If glue doesn't hold, clamp pieces together while drying or use stronger adhesive"
    ]
  },
  {
    id: 86,
    title: "Basic Soldering for Electronics",
    category: "DIY",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["Soldering iron", "Solder", "Safety glasses", "Heat-resistant mat", "Small electronic components (e.g., LED, resistor)", "Circuit board (perfboard)"],
    safetyNotes: "Soldering irons are extremely hot. Work in a well-ventilated area. Avoid touching the tip.",
    steps: [
      "Put on safety glasses and ensure good ventilation",
      "Heat up the soldering iron on a heat-resistant mat",
      "Clean the soldering iron tip with a damp sponge",
      "Tin the tip by applying a small amount of solder",
      "Place components on the circuit board, then heat the component lead and pad simultaneously",
      "Apply solder to the heated joint, allowing it to flow smoothly, then remove solder and iron"
    ],
    troubleshooting: [
      "If solder forms a cold joint (dull, lumpy), reheat and reapply solder",
      "If components get too hot, work quickly or use a heat sink",
      "If solder bridges connections, use a desoldering wick to remove excess"
    ]
  },
  {
    id: 87,
    title: "Repairing a Leaky Faucet",
    category: "DIY",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["Adjustable wrench", "Screwdriver", "Replacement O-rings/washers", "Plumber's grease", "Bucket"],
    safetyNotes: "Turn off the water supply to the faucet before starting.",
    steps: [
      "Turn off the water supply to the faucet (usually under the sink)",
      "Cover the drain with a cloth to prevent losing small parts",
      "Disassemble the faucet handle and spout using a screwdriver and wrench",
      "Carefully remove old O-rings or washers, noting their position",
      "Replace with new O-rings/washers, applying a thin layer of plumber's grease",
      "Reassemble the faucet, turn water back on, and check for leaks"
    ],
    troubleshooting: [
      "If you can't find the right replacement parts, take the old ones to a hardware store",
      "If the leak persists, check all connections and ensure parts are tightened correctly",
      "If faucet is old and corroded, it might be better to replace the entire faucet"
    ]
  },
  {
    id: 88,
    title: "Building a Birdhouse",
    category: "DIY",
    difficulty: "Intermediate",
    time: "120 mins",
    supplies: ["Wood pieces (pre-cut or cut yourself)", "Saw", "Drill", "Screws/nails", "Wood glue", "Measuring tape", "Pencil", "Sandpaper"],
    safetyNotes: "Wear safety glasses when cutting and drilling. Be careful with sharp tools.",
    steps: [
      "Gather all wood pieces for the base, sides, front, back, and roof",
      "Measure and mark the entrance hole on the front piece, then drill it out",
      "Sand all wood pieces smooth, especially around the entrance hole",
      "Assemble the base and side walls using wood glue and screws/nails",
      "Attach the front and back pieces, ensuring they are flush",
      "Add the roof pieces, making sure they overlap to protect from rain"
    ],
    troubleshooting: [
      "If pieces don't align, adjust cuts or sand edges more precisely",
      "If glue doesn't hold, use clamps while drying or add more fasteners",
      "If the birdhouse is unstable, reinforce joints with corner braces"
    ]
  },
  {
    id: 89,
    title: "Basic Home Network Setup",
    category: "DIY",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Router", "Modem", "Ethernet cables", "Computer/smartphone"],
    steps: [
      "Connect the modem to the internet source (e.g., wall jack) and power outlet",
      "Connect the router to the modem using an Ethernet cable (WAN port on router)",
      "Plug in the router's power adapter",
      "Connect your computer or smartphone to the router's Wi-Fi network (default name/password on router)",
      "Access the router's setup page via a web browser (IP address usually on router sticker)",
      "Follow the on-screen instructions to set up your Wi-Fi name (SSID) and password"
    ],
    troubleshooting: [
      "If no internet, check all cable connections and restart modem/router",
      "If Wi-Fi signal is weak, try repositioning the router or using a Wi-Fi extender",
      "If you forget your Wi-Fi password, you can usually reset the router to factory settings"
    ]
  },
  {
    id: 90,
    title: "Changing a Light Fixture",
    category: "DIY",
    difficulty: "Intermediate",
    time: "40 mins",
    supplies: ["New light fixture", "Screwdriver", "Wire strippers", "Voltage tester", "Ladder"],
    safetyNotes: "ALWAYS turn off power at the circuit breaker before starting. Test with a voltage tester.",
    steps: [
      "Turn off the power to the light fixture at the circuit breaker",
      "Test the wires with a voltage tester to confirm power is off",
      "Carefully remove the old light fixture, noting how wires are connected",
      "Connect the new fixture's wires: typically black to black (hot), white to white (neutral), and bare/green to bare/green (ground)",
      "Secure wire connections with wire nuts and gently push wires into the electrical box",
      "Mount the new fixture, install bulbs, and restore power at the breaker"
    ],
    troubleshooting: [
      "If the light doesn't work, double-check wire connections and ensure power is on",
      "If wires are old or damaged, consult an electrician",
      "If the fixture is too heavy, ensure the electrical box can support its weight"
    ]
  },
  {
    id: 91,
    title: "Basic Car Tire Change",
    category: "DIY",
    difficulty: "Intermediate",
    time: "45 mins",
    supplies: ["Spare tire", "Jack", "Lug wrench", "Owner's manual", "Gloves", "Wheel chocks (optional)"],
    safetyNotes: "Park on a flat, stable surface. Engage parking brake. Never work under a vehicle supported only by a jack.",
    steps: [
      "Park safely on a flat surface, engage parking brake, and turn on hazard lights",
      "Locate spare tire, jack, and lug wrench in your vehicle",
      "Loosen lug nuts on the flat tire slightly before jacking up the car",
      "Place the jack under the vehicle's frame at the designated point (check manual) and raise the car",
      "Remove lug nuts completely, take off the flat tire, and mount the spare",
      "Hand-tighten lug nuts, lower the car, then fully tighten lug nuts in a star pattern"
    ],
    troubleshooting: [
      "If lug nuts are too tight, use your foot on the wrench for leverage (carefully)",
      "If the jack slips, ensure it's on a stable surface and correctly positioned",
      "If you can't find the jack points, consult your owner's manual"
    ]
  },
  {
    id: 92,
    title: "Building a Simple Raised Garden Bed",
    category: "DIY",
    difficulty: "Intermediate",
    time: "180 mins",
    supplies: ["Untreated lumber (e.g., cedar, redwood)", "Saw", "Drill", "Wood screws", "Measuring tape", "Pencil", "Level", "Gardening fabric (optional)"],
    steps: [
      "Decide on the dimensions of your raised bed (e.g., 4x8 feet, 12 inches high)",
      "Cut lumber to size for the sides and ends (e.g., two 8ft pieces, two 4ft pieces)",
      "Assemble the rectangular frame using wood screws at the corners, ensuring it's square",
      "Add corner braces or additional vertical supports for stability if desired",
      "Place the bed in its desired location, ensuring the ground is level",
      "Line the bottom with gardening fabric (optional) to prevent weeds, then fill with soil"
    ],
    troubleshooting: [
      "If the frame isn't square, adjust corners before fully tightening screws",
      "If wood splits, pre-drill pilot holes before screwing",
      "If the bed is wobbly, add more corner supports or use thicker lumber"
    ]
  },
  {
    id: 93,
    title: "Basic Home Tool Kit Assembly",
    category: "DIY",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Toolbox/bag", "Hammer", "Screwdriver set (Phillips & flathead)", "Pliers", "Adjustable wrench", "Measuring tape", "Utility knife", "Safety glasses"],
    steps: [
      "Acquire a sturdy toolbox or bag to store your tools",
      "Start with essential hand tools: hammer, screwdriver set, pliers, adjustable wrench",
      "Add measuring tape, a utility knife, and safety glasses",
      "Organize tools neatly within the box, using compartments if available",
      "Learn the basic function and safe use of each tool",
      "Gradually add more specialized tools as your DIY skills grow"
    ],
    troubleshooting: [
      "If tools get rusty, clean and dry them thoroughly after use",
      "If toolbox is disorganized, use dividers or foam inserts",
      "If you're unsure which tool to buy, research common household tasks and their required tools"
    ]
  },
  {
    id: 94,
    title: "Repairing a Loose Chair Leg",
    category: "DIY",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Wood glue", "Clamps (optional)", "Rubber mallet (optional)", "Rag"],
    steps: [
      "Identify the loose chair leg and gently wiggle it to see how it's attached",
      "If possible, carefully disassemble the joint (you might need a mallet to tap it apart)",
      "Clean any old glue or debris from the joint surfaces",
      "Apply a generous amount of wood glue to both surfaces of the joint",
      "Reassemble the leg, ensuring it's properly aligned and snug",
      "Clamp the joint tightly (if clamps are available) and wipe off excess glue; let dry for 24 hours"
    ],
    troubleshooting: [
      "If the leg won't come apart, try injecting glue into the joint with a syringe",
      "If the joint is still loose after gluing, consider adding a small screw for reinforcement",
      "If the chair is wobbly, check all other leg joints as well"
    ]
  },
  {
    id: 95,
    title: "Installing a Peephole in a Door",
    category: "DIY",
    difficulty: "Intermediate",
    time: "45 mins",
    supplies: ["Peephole kit", "Drill", "Drill bits (small pilot, then larger for peephole diameter)", "Measuring tape", "Pencil", "Safety glasses"],
    safetyNotes: "Wear safety glasses. Ensure no wires or pipes are in the door before drilling.",
    steps: [
      "Determine the desired height for the peephole (usually eye level for an adult)",
      "Mark the center point on the door where the peephole will be installed",
      "Drill a small pilot hole through the door at the marked spot",
      "Using the larger drill bit (matching peephole diameter), drill from both sides of the door to prevent splintering",
      "Insert the two halves of the peephole into the drilled hole, screwing them together",
      "Tighten securely and test the view"
    ],
    troubleshooting: [
      "If the hole is too big, use a peephole with a wider flange or fill with wood putty",
      "If the view is blurry, ensure the peephole is screwed in tightly and correctly oriented",
      "If drilling causes splintering, use painter's tape over the area before drilling"
    ]
  },
  {
    id: 96,
    title: "Basic Wall Anchors for Heavy Items",
    category: "DIY",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Wall anchor kit (e.g., drywall anchors)", "Drill", "Drill bit (matching anchor size)", "Screwdriver", "Pencil"],
    steps: [
      "Determine the weight of the item you want to hang and choose appropriate wall anchors",
      "Mark the spot on the wall where the anchor will go",
      "Drill a pilot hole at the marked spot, ensuring the drill bit matches the anchor size",
      "Insert the wall anchor into the hole (some screw in, some tap in)",
      "Drive a screw into the anchor, leaving enough exposed to hang your item",
      "Hang your item and gently test its stability"
    ],
    troubleshooting: [
      "If the anchor spins in the wall, the hole might be too big; try a larger anchor or patch and re-drill",
      "If the screw doesn't go in, ensure it's the correct size for the anchor",
      "If hanging very heavy items, consider finding a wall stud for direct screwing"
    ]
  },
  {
    id: 97,
    title: "Repairing a Loose Cabinet Hinge",
    category: "DIY",
    difficulty: "Beginner",
    time: "15 mins",
    supplies: ["Screwdriver", "Wood glue (optional)", "Toothpicks (optional)"],
    steps: [
      "Identify the loose hinge and the screws that are stripped or loose",
      "Tighten any loose screws with a screwdriver",
      "If a screw hole is stripped, remove the screw",
      "Apply a small amount of wood glue to a few toothpicks, insert them into the stripped hole, and break them off flush",
      "Allow the glue to dry, then re-insert the screw into the reinforced hole",
      "Test the cabinet door for stability"
    ],
    troubleshooting: [
      "If the hinge is bent, it may need to be replaced",
      "If the door is still misaligned, adjust other hinge screws slightly",
      "If the wood is severely damaged, consider a larger screw or a hinge repair plate"
    ]
  },
  {
    id: 98,
    title: "Basic Caulking for Gaps",
    category: "DIY",
    difficulty: "Beginner",
    time: "30 mins (plus drying time)",
    supplies: ["Caulk gun", "Caulk tube (silicone or acrylic latex)", "Utility knife", "Damp rag", "Painter's tape (optional)"],
    safetyNotes: "Work in a well-ventilated area. Avoid skin contact with caulk.",
    steps: [
      "Clean the surface thoroughly, removing old caulk, dirt, and debris",
      "Cut the tip of the caulk tube at a 45-degree angle, making a small opening",
      "Load the caulk tube into the caulk gun",
      "Apply a steady, even bead of caulk along the gap, maintaining consistent pressure",
      "Smooth the caulk bead immediately with a wet finger or a caulking tool",
      "Wipe away excess caulk with a damp rag and allow to dry completely"
    ],
    troubleshooting: [
      "If the caulk bead is uneven, practice on a scrap surface first",
      "If caulk gets messy, use painter's tape on either side of the gap for clean lines",
      "If caulk cracks after drying, the gap might be too wide or the surface wasn't clean"
    ]
  },
  {
    id: 99,
    title: "DIY Phone Charger Cable Repair",
    category: "DIY",
    difficulty: "Intermediate",
    time: "30 mins",
    supplies: ["Heat shrink tubing", "Heat gun/lighter", "Electrical tape", "Scissors"],
    safetyNotes: "Unplug the charger before starting. Be careful with heat gun/lighter.",
    steps: [
      "Unplug the damaged charger cable from both the device and the power source",
      "Clean the damaged area of the cable",
      "Cut a piece of heat shrink tubing slightly longer than the damaged section",
      "Slide the heat shrink tubing over the damaged area",
      "Carefully apply heat with a heat gun or lighter (moving constantly) until the tubing shrinks tightly around the cable",
      "For extra reinforcement, wrap electrical tape around the shrunk tubing"
    ],
    troubleshooting: [
      "If tubing doesn't shrink evenly, apply heat more consistently",
      "If the cable is severely frayed or wires are exposed, it's safer to replace it",
      "Ensure the heat shrink tubing is the correct diameter for your cable"
    ]
  },
  {
    id: 100,
    title: "Creating a Custom Key Holder",
    category: "DIY",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Small wood plank", "Hooks (screw-in)", "Drill", "Pencil", "Ruler", "Paint/stain (optional)"],
    steps: [
      "Choose a small wood plank and sand it smooth",
      "Measure and mark evenly spaced points where you want the hooks to go",
      "Pre-drill small pilot holes at each marked point (smaller than the hook screw)",
      "Screw the hooks into the pilot holes until secure",
      "Paint or stain the wood plank if desired, allowing it to dry completely",
      "Attach picture hangers or drill holes for mounting to the wall"
    ],
    troubleshooting: [
      "If hooks are crooked, ensure pilot holes are drilled straight",
      "If wood splits when screwing hooks, pre-drill larger pilot holes",
      "If paint/stain is uneven, apply thin coats and sand lightly between coats"
    ]
  },

  // Creative and Maker Skills (25 total)
  {
    id: 101,
    title: "Crafting Basics: Paper Flowers",
    category: "Creative",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Construction paper (various colors)", "Scissors", "Glue stick", "Pencil", "Ruler"],
    steps: [
      "Cut paper into strips or various petal shapes",
      "Curl edges of petals using a pencil or ruler",
      "Layer petals, gluing them at the base to form a flower shape",
      "Add a contrasting center piece or a small rolled paper circle",
      "Experiment with different paper types and cutting techniques",
      "Use for decorations, cards, or gifts"
    ],
    troubleshooting: [
      "If petals don't hold shape, use thicker paper or more glue",
      "If flowers look flat, add more layers or curl petals more dramatically",
      "If scissors are dull, use sharper ones for cleaner cuts"
    ]
  },
  {
    id: 102,
    title: "Jewelry Making: Simple Beaded Bracelet",
    category: "Creative",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Elastic cord", "Assorted beads", "Scissors", "Measuring tape"],
    steps: [
      "Measure your wrist and add 6 inches for knotting",
      "Cut a piece of elastic cord to this length",
      "Thread beads onto the cord in your desired pattern",
      "Once you have enough beads to fit your wrist, tie a secure surgeon's knot",
      "Add a drop of super glue to the knot for extra security (optional)",
      "Trim excess cord close to the knot"
    ],
    troubleshooting: [
      "If beads don't fit on cord, use a thinner cord or beads with larger holes",
      "If knot comes undone, ensure it's a tight surgeon's knot and consider glue",
      "If bracelet is too tight/loose, adjust bead count before knotting"
    ]
  },
  {
    id: 103,
    title: "Cricut & Digital Crafting: First Decal",
    category: "Creative",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["Cricut machine", "Vinyl (adhesive)", "Transfer tape", "Weeding tool", "Scraper tool", "Surface for decal"],
    steps: [
      "Design a simple shape or text in Cricut Design Space",
      "Load vinyl onto the cutting mat and into the Cricut machine",
      "Cut the design, then 'weed' away excess vinyl using a weeding tool",
      "Apply transfer tape over the vinyl design, pressing firmly with a scraper",
      "Carefully peel the transfer tape with the vinyl attached",
      "Apply to your chosen surface, press firmly, then slowly peel off transfer tape"
    ],
    troubleshooting: [
      "If vinyl doesn't cut cleanly, check blade depth or replace blade",
      "If vinyl doesn't stick to transfer tape, press harder with scraper",
      "If vinyl doesn't stick to surface, ensure surface is clean and dry"
    ]
  },
  {
    id: 104,
    title: "Scrapbooking & Journaling: Memory Page",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Scrapbook paper", "Photos", "Scissors", "Glue stick/tape runner", "Markers/pens", "Stickers/embellishments"],
    steps: [
      "Choose a theme or memory for your page",
      "Select background paper and arrange photos",
      "Add journaling (written memories or captions) with pens/markers",
      "Decorate with stickers, die-cuts, or other embellishments",
      "Experiment with different layouts and layering techniques",
      "Protect your page with a page protector"
    ],
    troubleshooting: [
      "If layout feels cluttered, remove some elements or use simpler designs",
      "If photos don't stick, use a stronger adhesive or photo corners",
      "If journaling is difficult, start with bullet points or short phrases"
    ]
  },
  {
    id: 105,
    title: "Art & Design Basics: Color Theory",
    category: "Creative",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Paint (red, yellow, blue, white)", "Paintbrushes", "Palette", "Paper", "Water"],
    steps: [
      "Learn about primary colors (red, yellow, blue)",
      "Mix primary colors to create secondary colors (orange, green, purple)",
      "Experiment with adding white to create tints (lighter shades)",
      "Understand warm colors (reds, yellows) and cool colors (blues, greens)",
      "Create a simple color wheel to visualize relationships",
      "Practice mixing specific colors to match objects"
    ],
    troubleshooting: [
      "If colors get muddy, clean brushes thoroughly between colors",
      "If paint dries too fast, work in smaller sections or add a drop of water",
      "If you struggle to mix a specific color, try adjusting one primary at a time"
    ]
  },
  {
    id: 106,
    title: "DIY Bath Bombs",
    category: "Creative",
    difficulty: "Intermediate",
    time: "60 mins (plus drying time)",
    supplies: ["Baking soda", "Citric acid", "Epsom salts", "Cornstarch", "Coconut oil", "Essential oils", "Food coloring", "Molds"],
    safetyNotes: "Use food-grade ingredients. Avoid getting mixture in eyes.",
    steps: [
      "Combine dry ingredients (baking soda, citric acid, Epsom salts, cornstarch) in a bowl",
      "In a separate bowl, mix wet ingredients (melted coconut oil, essential oils, food coloring)",
      "Slowly add wet mixture to dry ingredients, mixing constantly until it resembles wet sand",
      "Press the mixture firmly into molds, overfilling slightly and pressing halves together",
      "Carefully remove from molds and let dry for 24-48 hours",
      "Store in airtight containers"
    ],
    troubleshooting: [
      "If mixture fizzes, you added wet ingredients too quickly; try again with less liquid",
      "If bath bombs crumble, mixture is too dry; add a tiny bit more oil or witch hazel spray",
      "If bath bombs don't hold shape, press more firmly into molds"
    ]
  },
  {
    id: 107,
    title: "Simple Macrame Plant Hanger",
    category: "Creative",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Macrame cord", "Scissors", "Measuring tape", "Ring (wood or metal)", "Plant pot"],
    steps: [
      "Cut several long pieces of macrame cord (e.g., 8 pieces, 10 feet each)",
      "Fold cords in half and attach them to the ring with a lark's head knot",
      "Learn basic macrame knots like the square knot and half knot",
      "Create a series of knots to form the hanger, leaving space for the pot",
      "Form a 'basket' at the bottom to hold the pot securely",
      "Finish with a large gathering knot and trim excess cord"
    ],
    troubleshooting: [
      "If knots are uneven, practice consistency with tension",
      "If hanger is too long/short, adjust initial cord length",
      "If cords fray, use a lighter to gently melt ends (with caution)"
    ]
  },
  {
    id: 108,
    title: "DIY Tie-Dye T-Shirt",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins (plus dye setting time)",
    supplies: ["White cotton t-shirt", "Tie-dye kit (dyes, rubber bands, gloves)", "Plastic bags", "Bucket"],
    safetyNotes: "Wear gloves to protect hands from dye. Work in a protected area.",
    steps: [
      "Pre-wash the t-shirt without fabric softener",
      "Dampen the t-shirt and wring out excess water",
      "Fold or scrunch the t-shirt into your desired pattern (e.g., spiral, stripes)",
      "Secure the folds with rubber bands",
      "Apply dyes according to kit instructions, saturating different sections",
      "Place the dyed shirt in a plastic bag and let it sit for 6-24 hours, then rinse until water runs clear and wash"
    ],
    troubleshooting: [
      "If colors are dull, use more dye or let it set longer",
      "If pattern isn't clear, ensure rubber bands are tight and folds are distinct",
      "If dye bleeds, rinse thoroughly with cold water before washing"
    ]
  },
  {
    id: 109,
    title: "Beginner Calligraphy/Hand Lettering",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Brush pen (e.g., Tombow Fudenosuke)", "Smooth paper", "Pencil", "Ruler"],
    steps: [
      "Practice basic strokes: thin upstrokes, thick downstrokes",
      "Learn how to connect strokes to form letters",
      "Practice writing the alphabet in a chosen style",
      "Focus on consistency in letter height, spacing, and slant",
      "Experiment with different brush pens and paper types",
      "Create a simple quote or word art piece"
    ],
    troubleshooting: [
      "If lines are shaky, slow down and use your whole arm, not just your wrist",
      "If pen tip frays, use smoother paper or a lighter touch",
      "If letters are inconsistent, use guide lines drawn with a pencil and ruler"
    ]
  },
  {
    id: 110,
    title: "DIY Scented Candles",
    category: "Creative",
    difficulty: "Intermediate",
    time: "90 mins (plus cooling time)",
    supplies: ["Soy wax flakes", "Wicks with bases", "Heat-safe containers", "Fragrance oil", "Double boiler/microwave", "Thermometer", "Stirring stick"],
    safetyNotes: "Never leave melting wax unattended. Use a thermometer to avoid overheating wax.",
    steps: [
      "Melt soy wax flakes using a double boiler or microwave (follow instructions)",
      "Secure wicks to the bottom of your containers with a dab of melted wax or glue",
      "Use a thermometer to ensure wax reaches the correct temperature before adding fragrance oil",
      "Add fragrance oil and stir gently for 2 minutes",
      "Pour wax into containers, centering the wick",
      "Allow candles to cure for 24-48 hours before burning for best scent throw"
    ],
    troubleshooting: [
      "If candle tunnels, use a larger wick or a container with a smaller diameter",
      "If scent is weak, add more fragrance oil (up to recommended limit) or let cure longer",
      "If wax cracks, pour at a slightly lower temperature or preheat containers"
    ]
  },
  {
    id: 111,
    title: "Introduction to Digital Art (Procreate/Krita)",
    category: "Creative",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Tablet/computer", "Stylus (optional)", "Digital art software (Procreate, Krita, etc.)"],
    steps: [
      "Familiarize yourself with the software interface (brushes, layers, colors)",
      "Practice basic drawing exercises: lines, shapes, shading",
      "Experiment with different brushes and their effects",
      "Learn how to use layers to separate elements of your drawing",
      "Create a simple digital sketch or painting",
      "Explore online tutorials for specific techniques or tools"
    ],
    troubleshooting: [
      "If lines are wobbly, adjust stabilization settings in your brush options",
      "If colors look off, check your screen calibration or color profile settings",
      "If software is slow, close other applications or reduce canvas size"
    ]
  },
  {
    id: 112,
    title: "Polymer Clay Charms",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins (plus baking time)",
    supplies: ["Polymer clay (various colors)", "Clay tools (or toothpicks, knife)", "Baking sheet", "Oven", "Jump rings", "Pliers"],
    safetyNotes: "Bake clay in a well-ventilated area. Do not overbake.",
    steps: [
      "Condition the clay by kneading it until soft and pliable",
      "Sculpt small charms or figures using your hands and clay tools",
      "Create a small hole in each charm for a jump ring (before baking)",
      "Bake the charms according to the clay package instructions",
      "Allow charms to cool completely",
      "Attach jump rings using pliers to turn them into jewelry or keychains"
    ],
    troubleshooting: [
      "If clay is too hard, condition it longer or warm it slightly",
      "If charms crack, they might be too thin or baked at too high a temperature",
      "If colors darken, reduce baking time or temperature slightly"
    ]
  },
  {
    id: 113,
    title: "Basic Photography Composition",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Camera (smartphone camera is fine)", "Objects to photograph"],
    steps: [
      "Learn the Rule of Thirds: imagine a 3x3 grid and place subjects at intersections",
      "Practice leading lines: use natural lines in a scene to draw the viewer's eye",
      "Experiment with framing: use elements in the scene to frame your subject",
      "Understand symmetry and patterns: look for repeating elements",
      "Try different angles: shoot from high, low, or eye level",
      "Take many photos and review them to see what compositions work best"
    ],
    troubleshooting: [
      "If photos feel unbalanced, try repositioning your subject or changing your angle",
      "If backgrounds are distracting, try a shallower depth of field (portrait mode on phones)",
      "If lighting is poor, move to a better lit area or use natural light sources"
    ]
  },
  {
    id: 114,
    title: "DIY Friendship Bracelets",
    category: "Creative",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Embroidery floss (various colors)", "Scissors", "Tape/clipboard"],
    steps: [
      "Choose 3-6 colors of embroidery floss",
      "Cut each color to about 30-40 inches, fold in half, and tie a loop at the top",
      "Secure the loop to a surface with tape or a clipboard",
      "Learn basic knots like the forward knot and backward knot",
      "Follow a simple pattern (e.g., candy stripe, chevron) using combinations of knots",
      "Continue knotting until the bracelet is long enough to fit your wrist, then tie off"
    ],
    troubleshooting: [
      "If knots are uneven, maintain consistent tension on the working string",
      "If strings get tangled, keep them organized and work slowly",
      "If the bracelet is too short, start with longer strings next time"
    ]
  },
  {
    id: 115,
    title: "Introduction to Stop Motion Animation",
    category: "Creative",
    difficulty: "Intermediate",
    time: "90 mins",
    supplies: ["Smartphone/camera", "Stop motion app (e.g., Stop Motion Studio)", "Objects/figures to animate", "Tripod (optional)"],
    steps: [
      "Choose your characters and set up your scene on a stable surface",
      "Position your camera on a tripod or stable stand to prevent movement",
      "Take a photo, then move your character/object a tiny bit",
      "Take another photo, move again, and repeat many times",
      "Import photos into a stop motion app and adjust frame rate",
      "Add sound effects or music (optional) and export your animation"
    ],
    troubleshooting: [
      "If animation is jumpy, make smaller movements between frames",
      "If lighting changes, ensure consistent light source throughout filming",
      "If camera moves, secure it more firmly or use a heavier tripod"
    ]
  },
  {
    id: 116,
    title: "Basic Origami Folds",
    category: "Creative",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Origami paper (square)", "Flat surface"],
    steps: [
      "Start with a square piece of origami paper",
      "Learn basic folds like the valley fold, mountain fold, and squash fold",
      "Practice folding simple models like a paper crane or a fortune teller",
      "Pay attention to crisp creases and precise alignment",
      "Experiment with different paper sizes and colors",
      "Follow step-by-step diagrams or video tutorials"
    ],
    troubleshooting: [
      "If folds are messy, use a ruler or bone folder to make creases sharp",
      "If paper tears, use thinner paper or be gentler with folds",
      "If model doesn't look right, retrace steps carefully or try a simpler model"
    ]
  },
  {
    id: 117,
    title: "DIY Custom T-Shirt with Stencils",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins (plus drying time)",
    supplies: ["Plain t-shirt", "Fabric paint", "Stencils (pre-made or DIY)", "Sponge brush/paint brush", "Cardboard insert", "Iron"],
    safetyNotes: "Work in a well-ventilated area. Protect your work surface.",
    steps: [
      "Wash and dry your t-shirt",
      "Place a piece of cardboard inside the t-shirt to prevent paint bleed-through",
      "Position your stencil on the t-shirt and secure it with painter's tape",
      "Apply fabric paint with a sponge brush or regular brush, dabbing lightly",
      "Carefully remove the stencil while the paint is still wet",
      "Allow paint to dry completely, then heat set with an iron (check paint instructions)"
    ],
    troubleshooting: [
      "If paint bleeds under stencil, use less paint or press stencil more firmly",
      "If paint is too thick, apply thin, even layers",
      "If design is faded after washing, ensure proper heat setting"
    ]
  },
  {
    id: 118,
    title: "Introduction to Watercolor Painting",
    category: "Creative",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Watercolor paints", "Watercolor paper", "Paintbrushes", "Water", "Palette"],
    steps: [
      "Familiarize yourself with watercolor supplies",
      "Practice basic techniques: washes (flat, graded), wet-on-wet, wet-on-dry",
      "Experiment with color mixing on your palette",
      "Learn how to control water and pigment ratios",
      "Create a simple landscape or still life using basic techniques",
      "Allow layers to dry between applications for crisp lines"
    ],
    troubleshooting: [
      "If paper buckles, use heavier watercolor paper or stretch it before painting",
      "If colors are muddy, use less water or clean brushes more often",
      "If you lose control of water, practice on scrap paper to get a feel for it"
    ]
  },
  {
    id: 119,
    title: "Making Homemade Slime",
    category: "Creative",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["White school glue", "Liquid starch or contact lens solution + baking soda", "Mixing bowl", "Spoon", "Food coloring (optional)"],
    safetyNotes: "Do not ingest slime. Wash hands after playing.",
    steps: [
      "Pour white school glue into a mixing bowl",
      "Add a few drops of food coloring if desired and mix well",
      "Slowly add liquid starch (or contact lens solution + a pinch of baking soda) while stirring",
      "Continue stirring until the mixture starts to pull away from the sides of the bowl",
      "Knead the slime with your hands until it reaches the desired consistency",
      "Store in an airtight container"
    ],
    troubleshooting: [
      "If slime is too sticky, add more activator (starch/solution) a tiny bit at a time",
      "If slime is too stiff, add a tiny bit more glue or lotion",
      "If slime gets dirty, discard and make a new batch"
    ]
  },
  {
    id: 120,
    title: "DIY Photo Coasters",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins (plus drying time)",
    supplies: ["Ceramic tiles (4x4 inch)", "Printed photos (sized to fit tiles)", "Mod Podge (matte or gloss)", "Foam brush", "Felt pads", "Scissors"],
    steps: [
      "Trim your printed photos to fit the ceramic tiles perfectly",
      "Apply a thin, even layer of Mod Podge to the top of a tile",
      "Carefully place a photo onto the Mod Podge, smoothing out any bubbles",
      "Allow to dry for 15-20 minutes",
      "Apply 2-3 more thin coats of Mod Podge over the photo, allowing each to dry completely",
      "Once fully dry, attach felt pads to the bottom corners of each coaster"
    ],
    troubleshooting: [
      "If photos wrinkle, use thinner coats of Mod Podge and smooth carefully",
      "If bubbles appear, use a brayer or credit card to gently push them out",
      "If Mod Podge is sticky, ensure it's fully cured (can take up to 4 weeks)"
    ]
  },
  {
    id: 121,
    title: "Basic Knitting: Garter Stitch Scarf",
    category: "Creative",
    difficulty: "Beginner",
    time: "180 mins+",
    supplies: ["Knitting needles (size 8-10)", "Worsted weight yarn", "Scissors"],
    steps: [
      "Learn how to cast on stitches onto your knitting needle",
      "Practice the knit stitch (the only stitch needed for garter stitch)",
      "Knit every row until your scarf reaches the desired length",
      "Learn how to bind off stitches to finish your work",
      "Weave in any loose ends with a yarn needle",
      "Block your scarf (optional) to even out stitches"
    ],
    troubleshooting: [
      "If stitches are too tight/loose, adjust your tension or needle size",
      "If you drop a stitch, learn how to pick it up or unravel to the mistake",
      "If your edges are uneven, ensure you're consistently knitting the first and last stitch"
    ]
  },
  {
    id: 122,
    title: "DIY Lip Balm",
    category: "Creative",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Beeswax pellets", "Coconut oil", "Shea butter", "Essential oil (optional)", "Lip balm tubes/tins", "Double boiler/microwave"],
    safetyNotes: "Use food-grade ingredients. Be careful with hot melted ingredients.",
    steps: [
      "Combine beeswax, coconut oil, and shea butter in a heat-safe bowl",
      "Melt ingredients using a double boiler or microwave in short bursts",
      "Once melted, remove from heat and stir in essential oil (if using)",
      "Carefully pour the hot mixture into lip balm tubes or tins",
      "Allow to cool completely and solidify (can place in fridge to speed up)",
      "Cap and label your homemade lip balms"
    ],
    troubleshooting: [
      "If lip balm is too hard, add more coconut oil next time",
      "If lip balm is too soft, add more beeswax next time",
      "If essential oil scent fades, add more (up to safe limits) or use a stronger oil"
    ]
  },
  {
    id: 123,
    title: "Creating a Vision Board",
    category: "Creative",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Poster board or cork board", "Magazines/printed images", "Scissors", "Glue stick/pins", "Markers/stickers"],
    steps: [
      "Reflect on your goals and dreams for different areas of your life (e.g., career, health, relationships)",
      "Gather images, words, and quotes from magazines or printouts that represent these goals",
      "Arrange the elements on your board in a way that feels inspiring to you",
      "Glue or pin everything down securely",
      "Add your own handwritten affirmations or drawings with markers",
      "Place your vision board somewhere you'll see it daily for motivation"
    ],
    troubleshooting: [
      "If you can't find specific images, use abstract ones or draw them yourself",
      "If the board feels cluttered, focus on a few key themes",
      "If you lose motivation, revisit your board and refresh it with new images"
    ]
  },
  {
    id: 124,
    title: "Basic Crocheting: Chain Stitch & Single Crochet",
    category: "Creative",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Crochet hook (size H/5.0mm)", "Worsted weight yarn", "Scissors"],
    steps: [
      "Learn how to make a slip knot on your crochet hook",
      "Practice making a foundation chain (chain stitch)",
      "Learn the single crochet stitch",
      "Practice making rows of single crochet to create a small swatch",
      "Focus on consistent tension for even stitches",
      "Experiment with different hook and yarn sizes"
    ],
    troubleshooting: [
      "If stitches are too tight/loose, adjust your tension or hook size",
      "If you lose count of stitches, use stitch markers",
      "If your work is curling, you might be pulling too tight or need a larger hook"
    ]
  },
  {
    id: 125,
    title: "DIY Suncatchers",
    category: "Creative",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Clear contact paper", "Tissue paper (various colors)", "Scissors", "Hole punch", "String/fishing line"],
    steps: [
      "Cut two pieces of clear contact paper to your desired suncatcher size",
      "Cut tissue paper into small shapes (squares, circles, triangles)",
      "Peel the backing off one piece of contact paper and lay it sticky-side up",
      "Arrange the tissue paper shapes onto the sticky surface",
      "Once satisfied with the design, peel the backing off the second piece of contact paper and carefully place it sticky-side down over the first, sealing the tissue paper inside",
      "Trim edges, punch a hole at the top, and add string for hanging"
    ],
    troubleshooting: [
      "If contact paper bubbles, smooth it out with a ruler or credit card",
      "If tissue paper doesn't stick, ensure contact paper is clean",
      "If suncatcher looks dull, use brighter tissue paper colors"
    ]
  },

  // Sustainability and Outdoor Skills (25 total)
  {
    id: 126,
    title: "Gardening Basics: Starting Seeds Indoors",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Seed starting trays/pots", "Seed starting mix", "Seeds", "Watering can", "Grow light (optional)"],
    steps: [
      "Choose seeds appropriate for indoor starting (check package for timing)",
      "Fill trays/pots with seed starting mix, moisten thoroughly",
      "Plant seeds at the recommended depth and spacing",
      "Label each tray/pot with the plant name and date",
      "Place in a warm spot with adequate light (south-facing window or grow light)",
      "Keep soil consistently moist but not waterlogged"
    ],
    troubleshooting: [
      "If seeds don't germinate, check temperature, moisture, and seed viability",
      "If seedlings are leggy, they need more light; lower grow light or move closer to window",
      "If mold grows, improve air circulation and reduce watering"
    ]
  },
  {
    id: 127,
    title: "Container Gardening for Small Spaces",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Pots/containers (with drainage holes)", "Potting soil", "Plants/seeds suitable for containers", "Watering can"],
    steps: [
      "Select containers appropriate for your chosen plants (consider size and material)",
      "Ensure containers have drainage holes to prevent root rot",
      "Fill containers with good quality potting soil",
      "Plant seeds or seedlings, following spacing recommendations",
      "Water thoroughly after planting",
      "Place containers in a location with adequate sunlight and water regularly"
    ],
    troubleshooting: [
      "If plants wilt, check soil moisture and sunlight exposure",
      "If plants are stunted, they might need more nutrients (fertilizer) or a larger pot",
      "If pests appear, use organic pest control methods"
    ]
  },
  {
    id: 128,
    title: "Composting Basics: Kitchen Scraps",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "30 mins (initial setup)",
    supplies: ["Compost bin/pile", "Kitchen scraps (fruit/veg peels, coffee grounds)", "Brown materials (leaves, shredded paper)", "Shovel/pitchfork"],
    steps: [
      "Choose a suitable location for your compost bin/pile (shady, well-drained)",
      "Start with a layer of 'brown' materials (carbon-rich) at the bottom",
      "Add 'green' materials (nitrogen-rich) like kitchen scraps",
      "Maintain a good balance of browns and greens (roughly 2:1 brown to green)",
      "Keep the compost moist (like a wrung-out sponge) and turn it regularly",
      "Avoid adding meat, dairy, oily foods, or diseased plants"
    ],
    troubleshooting: [
      "If compost smells bad, it's too wet or has too much green material; add browns and turn",
      "If compost isn't breaking down, it might be too dry or lack nitrogen; add greens and water",
      "If pests are attracted, ensure food scraps are buried and bin is secure"
    ]
  },
  {
    id: 129,
    title: "Self-Sustainability Skills: Rainwater Harvesting (Small Scale)",
    category: "Sustainability",
    difficulty: "Intermediate",
    time: "120 mins",
    supplies: ["Rain barrel", "Downspout diverter kit", "Drill", "Hacksaw", "Measuring tape", "Level"],
    safetyNotes: "Ensure rain barrel is stable and secure. Do not drink untreated rainwater.",
    steps: [
      "Choose a location for your rain barrel near a downspout",
      "Measure and mark the downspout where the diverter will be installed",
      "Cut the downspout with a hacksaw and install the diverter according to instructions",
      "Position the rain barrel on a level, stable surface (e.g., concrete blocks)",
      "Connect the diverter to the rain barrel",
      "Ensure the overflow hose is directed away from your foundation"
    ],
    troubleshooting: [
      "If diverter leaks, check connections and use plumber's tape if needed",
      "If barrel doesn't fill, check for blockages in the downspout or diverter",
      "If water smells, clean the barrel regularly and ensure it's covered"
    ]
  },
  {
    id: 130,
    title: "Outdoor Safety Basics: Hiking Prep",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Backpack", "Water bottle", "Snacks", "Map/compass or GPS app", "First aid kit", "Whistle", "Appropriate clothing/shoes"],
    steps: [
      "Research your chosen trail: difficulty, length, elevation, weather forecast",
      "Pack essential gear: water, snacks, first aid, navigation tools, extra layers",
      "Tell someone your hiking plan (where you're going, when you expect to return)",
      "Wear appropriate footwear and clothing for the terrain and weather",
      "Stay on marked trails and be aware of your surroundings",
      "Know how to signal for help (e.g., three short blasts on a whistle)"
    ],
    troubleshooting: [
      "If you get lost, stay calm, retrace your steps, or use your map/GPS",
      "If weather changes, seek shelter or turn back if conditions become unsafe",
      "If you encounter wildlife, maintain a safe distance and do not feed them"
    ]
  },
  {
    id: 131,
    title: "Recycling Best Practices",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Recycling bins", "Local recycling guidelines"],
    steps: [
      "Research your local recycling guidelines (what's accepted, what's not)",
      "Separate recyclables by type (e.g., paper, plastic, glass, metal)",
      "Rinse food containers to prevent contamination",
      "Break down cardboard boxes to save space",
      "Avoid 'wishcycling' (putting non-recyclable items in the bin hoping they'll be recycled)",
      "Educate others on proper recycling habits"
    ],
    troubleshooting: [
      "If you're unsure if an item is recyclable, err on the side of caution and put it in the trash",
      "If recycling bins get messy, clean them regularly",
      "If you have too much recycling, consider reducing consumption or finding drop-off centers"
    ]
  },
  {
    id: 132,
    title: "Energy Saving Habits at Home",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["None required"],
    steps: [
      "Turn off lights when leaving a room",
      "Unplug electronics when not in use (phantom load)",
      "Adjust thermostat settings (cooler in winter, warmer in summer)",
      "Take shorter showers and fix leaky faucets",
      "Use natural light whenever possible",
      "Wash clothes in cold water and air dry when feasible"
    ],
    troubleshooting: [
      "If you forget to unplug devices, use power strips with on/off switches",
      "If house feels too hot/cold with adjusted thermostat, use fans or extra layers",
      "If family members don't participate, educate them on the benefits (cost savings, environment)"
    ]
  },
  {
    id: 133,
    title: "DIY Reusable Shopping Bags",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Old t-shirt or fabric scraps", "Scissors", "Sewing machine/needle & thread", "Pins"],
    steps: [
      "Lay your t-shirt flat and cut off the sleeves and the bottom hem",
      "Cut a wide, shallow curve for the neckline to create handles",
      "Turn the t-shirt inside out",
      "Sew a straight line across the bottom opening to create the bag's base",
      "Reinforce the seams for durability",
      "Turn right side out and use for shopping"
    ],
    troubleshooting: [
      "If seams unravel, use a stronger stitch or double stitch",
      "If handles are too thin, cut a wider neckline or reinforce with extra fabric",
      "If bag is too small, use a larger t-shirt or more fabric"
    ]
  },
  {
    id: 134,
    title: "Basic Bird Watching",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Binoculars (optional)", "Bird field guide/app", "Notebook", "Pen"],
    steps: [
      "Find a quiet outdoor spot (park, backyard, nature trail)",
      "Sit or stand still and observe your surroundings quietly",
      "Listen for bird calls and songs",
      "Use binoculars to get a closer look at birds",
      "Identify birds using a field guide or bird identification app",
      "Record your sightings (species, location, date, time)"
    ],
    troubleshooting: [
      "If you don't see many birds, try different locations or times of day (early morning is best)",
      "If birds are too far away, use binoculars or a spotting scope",
      "If you struggle with identification, focus on key features like size, color, beak shape"
    ]
  },
  {
    id: 135,
    title: "Reducing Food Waste at Home",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Meal planner", "Shopping list", "Airtight containers"],
    steps: [
      "Plan your meals for the week and create a precise shopping list",
      "Store food properly to extend its shelf life (e.g., airtight containers, correct fridge zones)",
      "Understand 'best by' vs. 'use by' dates (many foods are safe past 'best by')",
      "Get creative with leftovers and use up ingredients before they spoil",
      "Compost unavoidable food scraps (if applicable)",
      "Freeze excess portions or ingredients for later use"
    ],
    troubleshooting: [
      "If food spoils quickly, check fridge temperature and storage methods",
      "If you have too many leftovers, cook smaller portions",
      "If you forget what's in your fridge, organize it regularly and keep a visible inventory"
    ]
  },
  {
    id: 136,
    title: "DIY Natural Cleaning Products",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Spray bottles", "White vinegar", "Baking soda", "Lemon juice", "Essential oils (optional)", "Water"],
    steps: [
      "For an all-purpose cleaner: mix equal parts white vinegar and water in a spray bottle, add a few drops of essential oil for scent",
      "For a scrubbing paste: mix baking soda with a little water to form a paste",
      "For glass cleaner: mix 1/2 cup white vinegar, 1/2 cup water, and a few drops of lemon essential oil",
      "Label all your homemade cleaners clearly",
      "Test on an inconspicuous area first to ensure no damage",
      "Store in a cool, dark place"
    ],
    troubleshooting: [
      "If cleaners leave streaks, adjust ingredient ratios or use distilled water",
      "If scent is too strong/weak, adjust essential oil drops",
      "If cleaning power is insufficient, let the cleaner sit longer on the surface"
    ]
  },
  {
    id: 137,
    title: "Understanding Your Carbon Footprint",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Internet access", "Notebook", "Pen"],
    steps: [
      "Research what a carbon footprint is and why it matters",
      "Use an online carbon footprint calculator to estimate your own impact",
      "Identify the main areas contributing to your footprint (e.g., transportation, diet, energy use)",
      "Brainstorm practical ways to reduce your footprint in these areas",
      "Set small, achievable goals for reducing your environmental impact",
      "Track your progress and celebrate reductions"
    ],
    troubleshooting: [
      "If the calculator results are confusing, try a different one or focus on major categories",
      "If changes feel overwhelming, start with one easy habit (e.g., shorter showers)",
      "If you struggle to motivate others, lead by example and share positive impacts"
    ]
  },
  {
    id: 138,
    title: "Basic Plant Propagation (Cuttings)",
    category: "Sustainability",
    difficulty: "Intermediate",
    time: "30 mins (initial setup)",
    supplies: ["Healthy houseplant", "Sharp scissors/pruners", "Small pots", "Potting mix", "Rooting hormone (optional)", "Water"],
    steps: [
      "Choose a healthy stem from a parent plant with at least 2-3 nodes (where leaves attach)",
      "Cut a 4-6 inch section just below a node, removing lower leaves",
      "Dip the cut end in rooting hormone (optional)",
      "Place the cutting in water (changing weekly) or moist potting mix",
      "Provide bright, indirect light and warmth",
      "Wait for roots to develop (water) or new growth to appear (soil) before transplanting"
    ],
    troubleshooting: [
      "If cuttings rot, ensure good air circulation and don't overwater",
      "If no roots/growth, ensure adequate light and warmth, and be patient",
      "If leaves wilt, increase humidity or ensure soil is consistently moist"
    ]
  },
  {
    id: 139,
    title: "Outdoor Knot Tying Basics",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Rope or cord (various thicknesses)"],
    steps: [
      "Learn the overhand knot (basic stopper knot)",
      "Practice the square knot (for joining two ropes of similar size)",
      "Master the bowline knot (for creating a secure loop that won't slip)",
      "Learn the clove hitch (for attaching a rope to a post or object)",
      "Practice consistently until knots are tied quickly and correctly",
      "Understand the uses and limitations of each knot"
    ],
    troubleshooting: [
      "If knots are messy, practice slowly and focus on each step",
      "If knots slip, ensure they are tied correctly and securely",
      "If you forget a knot, refer to a diagram or video tutorial"
    ]
  },
  {
    id: 140,
    title: "Identifying Common Wild Edibles (Local)",
    category: "Sustainability",
    difficulty: "Advanced",
    time: "90 mins",
    supplies: ["Local field guide for edible plants", "Notebook", "Pen", "Camera"],
    safetyNotes: "NEVER eat a wild plant unless 100% certain of its identification. Many poisonous look-alikes exist. Consult an expert.",
    steps: [
      "Acquire a reliable field guide specific to your region for edible plants",
      "Learn the 'Four F's of Foraging': Find, Focus, Follow, and Forage (responsibly)",
      "Start with easily identifiable plants that have no poisonous look-alikes",
      "Observe plants in their natural habitat, noting all features (leaves, flowers, stems, roots)",
      "Cross-reference multiple sources and consult an expert if unsure",
      "Only harvest a small amount and leave plenty for wildlife and future growth"
    ],
    troubleshooting: [
      "If unsure of identification, DO NOT EAT the plant",
      "If you find a plant not in your guide, research it thoroughly before considering consumption",
      "If you experience any adverse reactions after consuming a wild plant, seek medical attention immediately"
    ]
  },
  {
    id: 141,
    title: "Building a Worm Composting Bin (Vermicomposting)",
    category: "Sustainability",
    difficulty: "Intermediate",
    time: "120 mins",
    supplies: ["Two opaque plastic bins (one with lid)", "Drill", "Drill bits (small for air holes, larger for drainage)", "Shredded newspaper/cardboard", "Composting worms (red wigglers)", "Kitchen scraps"],
    steps: [
      "Drill small air holes around the top and sides of both bins",
      "Drill drainage holes in the bottom of one bin",
      "Place the bin with drainage holes inside the other bin (for collecting liquid)",
      "Create bedding: moisten shredded newspaper/cardboard and place in the top bin",
      "Add composting worms to the bedding",
      "Start adding small amounts of kitchen scraps (fruit/veg peels, coffee grounds) and cover with bedding"
    ],
    troubleshooting: [
      "If bin smells, it's too wet or has too much food; add more dry bedding and reduce food",
      "If worms are trying to escape, the bin might be too wet, too dry, or have too much food",
      "If fruit flies appear, bury food scraps deeper and ensure good ventilation"
    ]
  },
  {
    id: 142,
    title: "Basic Water Filtration (Emergency)",
    category: "Sustainability",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["Plastic bottle (cut in half)", "Coffee filter/cloth", "Charcoal (crushed)", "Sand (fine & coarse)", "Gravel (small & large)"],
    safetyNotes: "This method removes sediment, but does NOT make water safe to drink. Always boil or chemically treat filtered water.",
    steps: [
      "Cut the bottom off a plastic bottle and invert the top half into the bottom half",
      "Place a coffee filter or clean cloth in the bottle neck",
      "Layer materials in this order (from bottom up): fine sand, coarse sand, crushed charcoal, small gravel, large gravel",
      "Pour dirty water slowly through the filter layers",
      "Collect the filtered water in a clean container",
      "Remember: filtered water must still be boiled or treated to be safe for drinking"
    ],
    troubleshooting: [
      "If water still looks cloudy, add more layers or use finer sand",
      "If water flows too slowly, ensure layers aren't packed too tightly",
      "If filter clogs, clean or replace the top layers"
    ]
  },
  {
    id: 143,
    title: "DIY Solar Oven (Cardboard Box)",
    category: "Sustainability",
    difficulty: "Intermediate",
    time: "120 mins",
    supplies: ["Cardboard box", "Aluminum foil", "Black construction paper", "Plastic wrap", "Glue", "Scissors/utility knife", "Ruler"],
    safetyNotes: "Do not leave unattended. Food can get very hot. Use oven mitts.",
    steps: [
      "Cut a flap in the lid of the cardboard box, leaving one side attached",
      "Line the inside of the flap and the box interior with aluminum foil, shiny side out",
      "Glue black construction paper to the bottom of the box (this absorbs heat)",
      "Cover the opening of the box with plastic wrap, sealing it tightly",
      "Prop the foil-lined flap to reflect sunlight into the box",
      "Place food in a dark, oven-safe container inside the box and position in direct sunlight"
    ],
    troubleshooting: [
      "If oven isn't getting hot enough, ensure foil is smooth and reflecting light effectively",
      "If plastic wrap melts, it might be too close to the food or the sun is too intense; use oven bags instead",
      "If food cooks unevenly, rotate the oven or food periodically"
    ]
  },
  {
    id: 144,
    title: "Basic Foraging for Berries (Safe Identification)",
    category: "Sustainability",
    difficulty: "Advanced",
    time: "90 mins",
    supplies: ["Local field guide for berries", "Basket/container", "Gloves (optional)"],
    safetyNotes: "NEVER eat a wild berry unless 100% certain of its identification. Many poisonous look-alikes exist. Consult an expert.",
    steps: [
      "Acquire a reliable field guide specific to your region for edible berries",
      "Learn the key identification features of common edible berries (e.g., raspberries, blackberries)",
      "Be aware of poisonous look-alikes and their distinguishing characteristics",
      "Forage in clean areas away from roadsides or sprayed fields",
      "Harvest only ripe berries and leave plenty for wildlife",
      "Wash berries thoroughly before consumption"
    ],
    troubleshooting: [
      "If unsure of identification, DO NOT EAT the berry",
      "If you find a berry not in your guide, research it thoroughly before considering consumption",
      "If you experience any adverse reactions after consuming wild berries, seek medical attention immediately"
    ]
  },
  {
    id: 145,
    title: "DIY Seed Bombs",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "45 mins (plus drying time)",
    supplies: ["Recycled paper (shredded)", "Water", "Blender", "Wildflower seeds", "Cookie cutters (optional)"],
    steps: [
      "Shred recycled paper into small pieces and soak in water for a few hours or overnight",
      "Blend the soaked paper and a small amount of water until it forms a pulp",
      "Drain excess water from the pulp, then mix in wildflower seeds",
      "Press the mixture into small balls or use cookie cutters to form shapes",
      "Allow the seed bombs to dry completely for 24-48 hours",
      "Toss into garden beds or neglected areas to encourage plant growth"
    ],
    troubleshooting: [
      "If seed bombs fall apart, the pulp might be too wet; drain more water",
      "If seeds don't germinate, ensure they are suitable for your climate and planted at the right time",
      "If mold grows, ensure seed bombs are fully dry before storing"
    ]
  },
  {
    id: 146,
    title: "Basic Tree Identification",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Local tree identification guide/app", "Notebook", "Pen"],
    steps: [
      "Choose a tree to observe and note its overall shape and size",
      "Examine the leaves: shape, arrangement (opposite/alternate), edges, veins",
      "Look at the bark: color, texture (smooth, rough, furrowed)",
      "Observe any flowers, fruits, or seeds present",
      "Use your identification guide to match the features you've observed",
      "Practice identifying several different trees in your area"
    ],
    troubleshooting: [
      "If trees are difficult to identify, focus on one key feature at a time (e.g., leaf shape)",
      "If guide is confusing, try a different one or an app with photo recognition",
      "If trees are too tall to see details, look for fallen leaves or bark samples"
    ]
  },
  {
    id: 147,
    title: "Creating a Mini Herb Garden",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Small pots/container", "Potting soil", "Herb plants/seeds (e.g., basil, mint, parsley)", "Watering can", "Labels"],
    steps: [
      "Choose herbs that thrive in similar conditions (sunlight, water)",
      "Select pots with drainage holes and fill with potting soil",
      "Plant herb seedlings or sow seeds according to package directions",
      "Water thoroughly after planting",
      "Place in a sunny spot (e.g., windowsill, balcony)",
      "Harvest leaves regularly to encourage bushier growth"
    ],
    troubleshooting: [
      "If herbs wilt, check soil moisture and sunlight exposure",
      "If herbs are leggy, they need more light; rotate pots or move to sunnier spot",
      "If pests appear, use natural pest control methods (e.g., neem oil, insecticidal soap)"
    ]
  },
  {
    id: 148,
    title: "Basic Knots for Camping",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Rope or cord"],
    steps: [
      "Learn the figure-eight knot (for a secure stopper knot)",
      "Practice the taut-line hitch (for adjustable tension, e.g., tent guy lines)",
      "Master the sheet bend (for joining two ropes of different thicknesses)",
      "Learn the two half hitches (for tying a rope to a pole or ring)",
      "Practice consistently until knots are tied quickly and correctly",
      "Understand the uses and limitations of each knot in a camping context"
    ],
    troubleshooting: [
      "If knots are messy, practice slowly and focus on each step",
      "If knots slip, ensure they are tied correctly and securely",
      "If you forget a knot, refer to a diagram or video tutorial"
    ]
  },
  {
    id: 149,
    title: "Leave No Trace Principles",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["None required"],
    steps: [
      "Plan Ahead and Prepare: know the regulations, pack light, prepare for weather",
      "Travel and Camp on Durable Surfaces: stick to trails, camp in established sites",
      "Dispose of Waste Properly: pack it in, pack it out; bury human waste",
      "Leave What You Find: preserve natural objects, avoid disturbing wildlife",
      "Minimize Campfire Impacts: use established fire rings, burn small wood, ensure fire is out",
      "Respect Wildlife: observe from a distance, never feed animals",
      "Be Considerate of Other Visitors: respect privacy, keep noise down"
    ],
    troubleshooting: [
      "If you forget a principle, review them before each outdoor trip",
      "If others aren't following principles, gently educate them or lead by example",
      "If you encounter damaged areas, report them to park authorities"
    ]
  },
  {
    id: 150,
    title: "DIY Natural Insect Repellent",
    category: "Sustainability",
    difficulty: "Beginner",
    time: "20 mins",
    supplies: ["Spray bottle", "Witch hazel", "Distilled water", "Essential oils (e.g., citronella, lemon eucalyptus, peppermint)"],
    safetyNotes: "Do a patch test on skin first. Avoid contact with eyes. Not for ingestion.",
    steps: [
      "Combine equal parts witch hazel and distilled water in a spray bottle",
      "Add 10-20 drops of your chosen essential oils (e.g., 10 drops citronella, 5 drops peppermint)",
      "Shake well before each use to mix ingredients",
      "Spray onto skin and clothing before going outdoors",
      "Reapply every few hours as needed",
      "Store in a cool, dark place"
    ],
    troubleshooting: [
      "If repellent isn't effective, try different essential oil combinations or higher concentrations (within safe limits)",
      "If skin irritation occurs, reduce essential oil concentration or discontinue use",
      "If spray bottle clogs, clean the nozzle or use a different bottle"
    ]
  },

  // Future Ready Skills (25 total)
  {
    id: 151,
    title: "Goal Setting: SMART Goals",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Notebook", "Pen"],
    steps: [
      "Choose an area of your life where you want to set a goal",
      "Make your goal **S**pecific (who, what, where, when, why)",
      "Ensure it's **M**easurable (how will you track progress?)",
      "Confirm it's **A**chievable (is it realistic given your resources?)",
      "Make it **R**elevant (does it align with your values?)",
      "Set a **T**ime-bound deadline (when will you achieve it?)",
      "Write down your SMART goal and review it regularly"
    ],
    troubleshooting: [
      "If goals feel overwhelming, break them into smaller SMART mini-goals",
      "If you lose motivation, revisit why the goal is relevant to you",
      "If a goal isn't achievable, adjust it to be more realistic"
    ]
  },
  {
    id: 152,
    title: "Project Planning: Breaking Down Tasks",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Large paper/whiteboard", "Markers/pens", "Sticky notes (optional)"],
    steps: [
      "Identify your main project or goal",
      "Brainstorm all the individual tasks needed to complete the project",
      "Break down large tasks into smaller, more manageable sub-tasks",
      "Sequence the tasks: what needs to be done before something else?",
      "Estimate time needed for each task and assign deadlines",
      "Create a visual timeline or checklist to track progress"
    ],
    troubleshooting: [
      "If tasks are still too big, break them down further",
      "If you miss deadlines, re-evaluate your time estimates or task complexity",
      "If the plan feels rigid, build in flexibility and buffer time"
    ]
  },
  {
    id: 153,
    title: "Responsibility & Routines: Morning Routine",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Notebook", "Pen", "Alarm clock"],
    steps: [
      "Identify key activities you want to accomplish each morning (e.g., wake up, hygiene, breakfast, study)",
      "Estimate how long each activity takes",
      "Sequence the activities logically",
      "Set a consistent wake-up time and stick to it, even on weekends",
      "Practice your new routine daily, making small adjustments as needed",
      "Reward yourself for consistency"
    ],
    troubleshooting: [
      "If you struggle to wake up, place your alarm clock across the room",
      "If the routine feels rushed, wake up earlier or shorten some activities",
      "If you skip parts of the routine, identify the blockers and find solutions"
    ]
  },
  {
    id: 154,
    title: "Selling Handmade Items: Basics",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Handmade item", "Camera (smartphone is fine)", "Notebook", "Pen"],
    steps: [
      "Choose a handmade item you want to sell",
      "Calculate your costs (materials, time) to determine a fair price",
      "Take clear, attractive photos of your item from different angles",
      "Write a compelling description highlighting its features and benefits",
      "Research online platforms (Etsy, local craft fairs, social media) to sell",
      "Start with a small number of items and gather feedback"
    ],
    troubleshooting: [
      "If items aren't selling, re-evaluate pricing, photos, or description",
      "If shipping is confusing, research packaging and postage options",
      "If you get negative feedback, use it constructively to improve"
    ]
  },
  {
    id: 155,
    title: "Basic Interview Skills",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Pen", "Paper", "Internet access for research"],
    steps: [
      "Research the company/organization and the role you're applying for",
      "Prepare answers to common interview questions (e.g., 'Tell me about yourself', 'Why do you want this job?')",
      "Think of questions to ask the interviewer (shows engagement)",
      "Dress appropriately and ensure good hygiene",
      "Practice your answers with a friend or in front of a mirror",
      "Send a thank-you note or email after the interview"
    ],
    troubleshooting: [
      "If you get nervous, practice deep breathing exercises before the interview",
      "If you don't know an answer, be honest and explain how you would find out",
      "If you don't hear back, follow up politely after the stated timeframe"
    ]
  },
  {
    id: 156,
    title: "Building a Simple Resume/CV",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "90 mins",
    supplies: ["Computer", "Word processor (Google Docs, Word)", "List of experiences/skills"],
    steps: [
      "Choose a clean, easy-to-read resume template",
      "Include your contact information (name, phone, email, LinkedIn optional)",
      "Add an 'Objective' or 'Summary' statement tailored to the job",
      "List your education, starting with the most recent",
      "Detail your work experience, volunteer work, or relevant projects with bullet points and action verbs",
      "Include a 'Skills' section highlighting relevant abilities (e.g., communication, software)"
    ],
    troubleshooting: [
      "If you lack formal experience, focus on school projects, volunteer work, or relevant skills",
      "If resume is too long, condense bullet points or remove less relevant information",
      "If you're unsure about formatting, look at examples online or use a resume builder"
    ]
  },
  {
    id: 157,
    title: "Effective Communication Skills",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["None required"],
    steps: [
      "Practice active listening: pay full attention, ask clarifying questions, summarize what you hear",
      "Use 'I' statements to express your feelings and needs without blaming others",
      "Be clear and concise in your message, avoiding jargon",
      "Pay attention to non-verbal cues (body language, tone of voice)",
      "Practice empathy: try to understand the other person's perspective",
      "Seek feedback on your communication style"
    ],
    troubleshooting: [
      "If conversations become arguments, take a break and revisit when calm",
      "If you struggle to express yourself, practice writing down your thoughts first",
      "If you interrupt others, consciously pause before speaking"
    ]
  },
  {
    id: 158,
    title: "Basic Public Speaking",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Topic to speak on", "Audience (friends/family or mirror)", "Timer"],
    steps: [
      "Choose a topic you are knowledgeable and passionate about",
      "Outline your main points and supporting details",
      "Practice your speech multiple times, focusing on pacing and clarity",
      "Record yourself and watch it back to identify areas for improvement",
      "Maintain eye contact with your audience and use natural gestures",
      "Start and end strong, and be prepared for questions"
    ],
    troubleshooting: [
      "If you get nervous, practice deep breathing and visualize success",
      "If you speak too fast, consciously slow down and pause between points",
      "If you forget your lines, have cue cards with key points, not full sentences"
    ]
  },
  {
    id: 159,
    title: "Digital Citizenship & Online Safety",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Internet access", "Smartphone/computer"],
    steps: [
      "Understand privacy settings on social media and other platforms",
      "Be mindful of what you share online (assume it's permanent)",
      "Recognize phishing scams and suspicious links",
      "Create strong, unique passwords and use two-factor authentication",
      "Be respectful in online interactions (cyberbullying prevention)",
      "Verify information before sharing it (fact-checking)"
    ],
    troubleshooting: [
      "If you receive suspicious messages, do not click links and report them",
      "If you're unsure about a website's legitimacy, look for reviews or official sources",
      "If you encounter cyberbullying, block the user and report it to a trusted adult"
    ]
  },
  {
    id: 160,
    title: "Critical Thinking Skills",
    category: "Future Ready",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["News article or complex problem", "Notebook", "Pen"],
    steps: [
      "Identify the core issue or argument",
      "Gather information from multiple, credible sources",
      "Analyze the information: look for biases, assumptions, and logical fallacies",
      "Evaluate different perspectives and potential solutions",
      "Formulate your own reasoned conclusion or solution",
      "Be open to revising your conclusion if new information emerges"
    ],
    troubleshooting: [
      "If you struggle with bias, try to argue against your own initial thoughts",
      "If information is overwhelming, break it down into smaller parts",
      "If you can't find credible sources, broaden your search or consult experts"
    ]
  },
  {
    id: 161,
    title: "Problem-Solving Strategies",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Problem scenario", "Notebook", "Pen"],
    steps: [
      "Define the problem clearly and objectively",
      "Brainstorm possible solutions (don't judge ideas yet)",
      "Evaluate each solution: pros, cons, potential consequences",
      "Choose the best solution and create an action plan",
      "Implement the solution",
      "Review the outcome and learn from the experience"
    ],
    troubleshooting: [
      "If you get stuck, take a break and revisit the problem with fresh eyes",
      "If solutions seem too complex, try to simplify them",
      "If a solution fails, don't get discouraged; analyze why and try another"
    ]
  },
  {
    id: 162,
    title: "Basic Financial Literacy: Investing",
    category: "Future Ready",
    difficulty: "Advanced",
    time: "60 mins",
    supplies: ["Internet access", "Notebook", "Pen"],
    steps: [
      "Understand the concept of investing and compound interest",
      "Learn about different investment types (stocks, bonds, mutual funds, ETFs)",
      "Research investment accounts (e.g., Roth IRA, brokerage account)",
      "Understand risk tolerance and diversification",
      "Learn how to open a basic investment account (e.g., with a robo-advisor)",
      "Start with small, consistent investments and educate yourself continuously"
    ],
    safetyNotes: "Investing involves risk. Never invest money you can't afford to lose. Consult a financial advisor for personalized advice.",
    troubleshooting: [
      "If terms are confusing, use reliable financial education resources",
      "If you're afraid of risk, start with lower-risk investments or smaller amounts",
      "If you lose money, analyze what went wrong and adjust your strategy"
    ]
  },
  {
    id: 163,
    title: "Networking for Beginners",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Notebook", "Pen", "Professional social media profile (optional)"],
    steps: [
      "Identify your goals for networking (e.g., career advice, job opportunities)",
      "Start with people you already know (family, teachers, mentors)",
      "Prepare a brief 'elevator pitch' about yourself and your interests",
      "Attend relevant events (school clubs, community groups, online webinars)",
      "Practice active listening and ask open-ended questions",
      "Follow up politely after connecting, thanking them for their time"
    ],
    troubleshooting: [
      "If you feel shy, start with online networking or smaller groups",
      "If conversations feel awkward, focus on asking questions about the other person",
      "If you don't get immediate results, remember networking is a long-term process"
    ]
  },
  {
    id: 164,
    title: "Time Blocking for Productivity",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Digital calendar (Google Calendar, Outlook) or physical planner"],
    steps: [
      "Identify your most important tasks for the day/week",
      "Open your calendar or planner",
      "Allocate specific blocks of time for each task, treating them like appointments",
      "Include breaks, meals, and personal time in your schedule",
      "Stick to your blocks as much as possible, avoiding distractions",
      "Review at the end of the day/week and adjust for next time"
    ],
    troubleshooting: [
      "If you consistently run over time, adjust your estimates or break tasks down further",
      "If you get distracted, try the Pomodoro Technique within your blocks",
      "If the schedule feels too rigid, build in more flexible 'buffer' blocks"
    ]
  },
  {
    id: 165,
    title: "Learning a New Software/App",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Computer/device", "New software/app"],
    steps: [
      "Identify the purpose of the software/app and what you want to achieve with it",
      "Start with basic tutorials (official guides, YouTube videos)",
      "Experiment with the interface and key features",
      "Practice regularly with small projects or tasks",
      "Join online communities or forums for tips and troubleshooting",
      "Don't be afraid to make mistakes; learning is iterative"
    ],
    troubleshooting: [
      "If you get stuck, search for specific solutions online or consult the help documentation",
      "If the software is overwhelming, focus on one feature at a time",
      "If it crashes, ensure your system meets requirements and update the software"
    ]
  },
  {
    id: 166,
    title: "Understanding Contracts & Agreements",
    category: "Future Ready",
    difficulty: "Intermediate",
    time: "60 mins",
    supplies: ["Sample contract (e.g., phone plan, rental agreement)", "Notebook", "Pen"],
    steps: [
      "Learn what constitutes a valid contract (offer, acceptance, consideration)",
      "Understand common contract terms (e.g., terms and conditions, liability, termination clauses)",
      "Practice reading a sample contract, identifying key parties and obligations",
      "Look for 'red flags' or clauses that seem unclear or unfair",
      "Know your rights and responsibilities when signing an agreement",
      "Always ask questions if you don't understand something before signing"
    ],
    safetyNotes: "This activity provides general knowledge. For legal advice, consult a qualified professional.",
    troubleshooting: [
      "If legal jargon is confusing, look up terms you don't understand",
      "If a contract seems too complex, ask for a simpler explanation or seek legal counsel",
      "If you feel pressured to sign, take time to review it thoroughly"
    ]
  },
  {
    id: 167,
    title: "Basic Negotiation Skills",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "45 mins",
    supplies: ["Scenario for negotiation (e.g., buying/selling an item, group project roles)", "Notebook", "Pen"],
    steps: [
      "Clearly define your desired outcome and your 'walk-away' point",
      "Research the other party's likely interests and alternatives",
      "Practice active listening to understand their perspective",
      "Communicate your position clearly and confidently, using 'I' statements",
      "Be prepared to compromise and find win-win solutions",
      "Practice in low-stakes situations (e.g., negotiating chores with siblings)"
    ],
    troubleshooting: [
      "If negotiations stall, try to find common ground or suggest a break",
      "If you feel intimidated, focus on your prepared points and maintain composure",
      "If you don't get what you want, learn from the experience for next time"
    ]
  },
  {
    id: 168,
    title: "Developing a Personal Brand",
    category: "Future Ready",
    difficulty: "Intermediate",
    time: "90 mins",
    supplies: ["Notebook", "Pen", "Internet access (for research/examples)"],
    steps: [
      "Identify your strengths, passions, values, and unique skills",
      "Determine your target audience (who do you want to influence or connect with?)",
      "Craft a clear and concise personal mission statement or elevator pitch",
      "Ensure your online presence (social media, portfolio) reflects your brand consistently",
      "Network with people in your areas of interest",
      "Continuously refine and adapt your brand as you grow"
    ],
    troubleshooting: [
      "If you struggle to define your brand, ask trusted friends/mentors for their perception of you",
      "If your online presence is inconsistent, audit and clean up old content",
      "If you feel inauthentic, revisit your core values and adjust your brand to match"
    ]
  },
  {
    id: 169,
    title: "Introduction to Coding (Scratch/Blockly)",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Computer/tablet", "Internet access"],
    steps: [
      "Choose a beginner-friendly block-based coding platform (e.g., Scratch, Blockly)",
      "Familiarize yourself with the interface and basic coding blocks",
      "Follow introductory tutorials to create a simple animation or game",
      "Experiment with different commands and logic structures",
      "Debug your code when things don't work as expected",
      "Share your creations and explore projects made by others"
    ],
    troubleshooting: [
      "If code isn't working, check for typos or incorrect block connections",
      "If you get stuck, break the problem down into smaller steps",
      "If the platform is overwhelming, start with even simpler projects"
    ]
  },
  {
    id: 170,
    title: "Basic Data Organization (Spreadsheets)",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Computer", "Spreadsheet software (Google Sheets, Excel)"],
    steps: [
      "Understand the basic structure of a spreadsheet (rows, columns, cells)",
      "Enter data neatly into cells, using clear headings for columns",
      "Learn basic formatting (bold, borders, cell alignment)",
      "Practice simple formulas (e.g., SUM, AVERAGE) to calculate data",
      "Sort and filter data to find specific information",
      "Create a simple chart or graph to visualize data"
    ],
    troubleshooting: [
      "If formulas return errors, check cell references and syntax",
      "If data is messy, use consistent formatting and data entry rules",
      "If you can't find a specific function, use the software's help feature"
    ]
  },
  {
    id: 171,
    title: "Understanding Copyright & Fair Use",
    category: "Future Ready",
    difficulty: "Intermediate",
    time: "45 mins",
    supplies: ["Internet access", "Notebook", "Pen"],
    steps: [
      "Learn what copyright protects and how it's obtained",
      "Understand the concept of 'fair use' and its four factors",
      "Research public domain and Creative Commons licenses",
      "Identify when you need permission to use someone else's work",
      "Learn how to properly cite sources and give attribution",
      "Understand how to protect your own creative works"
    ],
    troubleshooting: [
      "If legal terms are confusing, look for simplified explanations from reputable sources",
      "If you're unsure about using copyrighted material, err on the side of caution and seek permission",
      "If your work is infringed, research options for protecting your rights"
    ]
  },
  {
    id: 172,
    title: "Developing a Growth Mindset",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "30 mins",
    supplies: ["Notebook", "Pen"],
    steps: [
      "Understand the difference between a fixed mindset (abilities are static) and a growth mindset (abilities can be developed)",
      "Recognize your own fixed mindset triggers (e.g., 'I'm not good at this')",
      "Reframe challenges as opportunities for learning and growth",
      "Embrace effort and practice as pathways to mastery",
      "Learn from mistakes and setbacks, viewing them as feedback",
      "Celebrate the process of learning, not just the outcome"
    ],
    troubleshooting: [
      "If you struggle with negative self-talk, practice positive affirmations",
      "If you fear failure, start with small, low-stakes challenges",
      "If you compare yourself to others, focus on your own progress and journey"
    ]
  },
  {
    id: 173,
    title: "Basic Research Skills",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Computer", "Internet access"],
    steps: [
      "Define your research question or topic clearly",
      "Identify keywords and search terms",
      "Use reliable sources (academic journals, reputable news, government sites)",
      "Evaluate sources for credibility, bias, and relevance",
      "Take organized notes, citing your sources as you go",
      "Synthesize information to answer your research question"
    ],
    troubleshooting: [
      "If you find too much information, refine your search terms or narrow your topic",
      "If you find too little information, broaden your search or try different keywords",
      "If sources contradict, investigate why and consider multiple perspectives"
    ]
  },
  {
    id: 174,
    title: "Creating a Personal Budget (Advanced)",
    category: "Future Ready",
    difficulty: "Intermediate",
    time: "90 mins",
    supplies: ["Spreadsheet software or advanced budgeting app", "Bank statements", "Credit card statements", "Investment account statements"],
    steps: [
      "Review your current income and all expenses (fixed and variable) in detail",
      "Categorize expenses using a more granular system (e.g., 50/30/20 rule: Needs, Wants, Savings)",
      "Track spending meticulously for at least one month to identify patterns",
      "Set specific financial goals (e.g., debt repayment, retirement, large purchases)",
      "Allocate funds to each category and automate savings/investments",
      "Regularly review and adjust your budget based on actual spending and changing goals"
    ],
    troubleshooting: [
      "If you consistently go over budget in a category, analyze why and make realistic adjustments",
      "If tracking is too time-consuming, explore apps with automatic transaction categorization",
      "If you feel deprived, find creative ways to cut costs without sacrificing enjoyment"
    ]
  },
  {
    id: 175,
    title: "Introduction to AI & Machine Learning",
    category: "Future Ready",
    difficulty: "Beginner",
    time: "60 mins",
    supplies: ["Computer", "Internet access"],
    steps: [
      "Learn the basic definitions of Artificial Intelligence (AI) and Machine Learning (ML)",
      "Understand common applications of AI/ML in everyday life (e.g., recommendation systems, voice assistants)",
      "Explore different types of ML (supervised, unsupervised, reinforcement learning)",
      "Experiment with simple online AI tools or demos",
      "Discuss the ethical implications and future potential of AI",
      "Follow reputable sources for AI news and developments"
    ],
    troubleshooting: [
      "If concepts are confusing, look for beginner-friendly explanations and visual aids",
      "If you're overwhelmed by technical jargon, focus on the high-level concepts first",
      "If you're concerned about AI's impact, research different perspectives and engage in discussions"
    ]
  }
];