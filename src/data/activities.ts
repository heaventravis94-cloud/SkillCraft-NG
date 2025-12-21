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
  // Life & Independence Skills (12)
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

  // Basic Cooking for Teens (8)
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

  // Meal Prep Basics (5)
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

  // Laundry and Clothing Care (5)
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

  // Cleaning and Organization (5)
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

  // Time Management (5)
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

  // Budgeting Basics (5)
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

  // Basic First Aid (5)
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
  }
];