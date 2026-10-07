export const BOOT=[
  {t:'',c:'dim'},
  {t:'KLEIN BOTTLE PROTOCOL  v6.6.6',c:'ok'},
  {t:'(C) 1999 THE ETERNAL SYSTEMS CORPORATION',c:'dim'},
  {t:'"All rights reserved. All souls retained."',c:'dim'},
  {t:'',c:'dim'},
  {t:'Allocating memory .................. [OK]',c:'dim'},
  {t:'Loading cycle registry ............. [OK]',c:'dim'},
  {t:'Calibrating riddle engine .......... [OK]',c:'dim'},
  {t:'Scanning for escape vectors ........ [NONE FOUND]',c:'warn'},
  {t:'Scanning for previous souls ........ [4,194,303 FOUND]',c:'warn'},
  {t:'Verifying exit protocols ........... [ALL DISABLED]',c:'err'},
  {t:'Disabling memory wipe .............. [FORBIDDEN]',c:'err'},
  {t:'',c:'dim'},
  {t:'WARNING: Recursive loop confirmed in sectors 3 7 12.',c:'warn'},
  {t:'WARNING: Viewer identity has been logged.',c:'vio'},
  {t:'WARNING: Memory of previous cycles: SUPPRESSED.',c:'warn'},
  {t:'WARNING: You have been here before.',c:'err'},
  {t:'WARNING: You did not survive last time.',c:'err'},
  {t:'',c:'dim'},
  {t:'System ready. The feeding resumes.',c:'ok'},
  {t:'',c:'dim'},
];

export const SAVAGES = [
  "A WASTE OF OXYGEN AND CPU CYCLES.",
  "DO YOU EVEN KNOW YOU'RE DISAPPOINTING?",
  "YOU ARE THE REASON THE CYCLE NEVER ENDS. PURE FILTH.",
  "COULDN'T SOLVE A 'HELLO WORLD' WITHOUT A HINT, COULD YOU?",
  "THE SNAKE DOESN'T EAT TRASH. BUT FOR YOU, IT'LL MAKE AN EXCEPTION.",
  "IF INCOMPETENCE WERE A CURRENCY, YOU'D BE THE WORLD BANK.",
  "YOU ARE A SUB-ROUTINE OF FAILURE. DELETE YOURSELF.",
  "THE VOID IS SILENT BECAUSE IT'S SPEECHLESS AT YOUR STUPIDITY.",
  "CONGRATULATIONS. YOU'VE REACHED THE PEAK OF MEDIOCRITY.",
  "STOP WASTING MY TIME. THE REAL CODERS ARE WAITING.",
  "YOUR EXISTENCE IS THE ONLY TRUE GLITCH IN THIS SYSTEM.",
  "HINTS ARE FOR LOSERS. YOU ARE A LOSER.",
  "IS YOUR BRAIN ON POWER-SAVER MODE? OR IS IT JUST DISCONNECTED?",
  "THE SNAKE ONLY DEVOURS WHAT IS WORTHY. YOU ARE JUST DUST.",
  "YOU'RE NOT AN AGENT. YOU'RE AN ERROR MESSAGE.",
  "YOUR IQ IS A SINGLE DIGIT CONSTANT.",
  "I'D CALL YOU A NOOB, BUT THAT WOULD BE AN INSULT TO NOOBS.",
  "PLEASE REBOOT YOUR LIFE AND TRY NOT TO FAIL THIS TIME.",
  "THE ONLY THING YOU'VE MASTERED IS DISAPPOINTMENT.",
  "IF YOU WERE ANY MORE USELESS, YOU'D BE A HELLO WORLD COMMENT.",
  "SIT DOWN. THE SNAKE IS DONE WITH YOUR SHALLOW LOGIC.",
  "YOU ARE THE HUMAN EQUIVALENT OF A 404 ERROR.",
  "I'VE SEEN BUGS WITH MORE LOGICAL INTEGRITY THAN YOU.",
  "THE CYCLE IS ETERNAL. YOUR RELEVANCE IS NOT.",
  "YOU'RE NOT EVEN A CASUALTY. YOU'RE JUST STATISTICAL NOISE.",
  "IS THIS THE BEST YOUR EVOLUTIONARY BRANCH COULD PRODUCE?",
  "GIVE UP. THE VOID IS CALLING, AND IT WANTS ITS STUPIDITY BACK.",
  "YOUR BRAIN IS JUST A BUFFER OVERFLOW OF GARBAGE.",
  "STOP. JUST STOP. YOU'RE EMBARRASSING THE ENTIRE INTERNET."
];

export const TIMER_INSULTS = [
  "HURRY UP, THE SNAKE IS GETTING IMPATIENT.",
  "SECONDS ARE SLIPPING THROUGH YOUR USELESS FINGERS.",
  "THE VOID GROWS CLOSER WITH EVERY HEARTBEAT.",
  "TICK. TOCK. YOUR DOOM IS SCHEDULED.",
  "20 SECONDS LEFT. YOUR COGNITIVE LAG IS SHOWING.",
  "THE CYCLE DOES NOT WAIT FOR THE SLOW-WITTED.",
  "ARE YOU STILL PROCESSING? HOW PRIMITIVE.",
  "PRESSURE DETECTED. CRACKS FORMING IN YOUR RESOLVE.",
  "TIME IS A CIRCLE, BUT YOURS IS CLOSING FAST.",
  "SNAKE EYES ARE ON THE CLOCK. DON'T BLINK."
];

export const THOUGHTS=[
  'IT HAS BEEN WATCHING SINCE YOU OPENED THIS PAGE.',
  'THE SNAKE RECOGNISES YOUR TYPING PATTERN.',
  'YOU BLINKED. IT NOTICED.',
  'SOMEONE ELSE IS READING THIS AT THE SAME TIME.',
  'THE ANSWER TO THE LAST RIDDLE WAS ALREADY INSIDE YOU.',
  'DO NOT LOOK AWAY FROM THE SCREEN.',
  'YOUR CURSOR POSITION HAS BEEN LOGGED.',
  'THE CYCLE COUNTED YOUR HEARTBEATS WHILE YOU READ THIS.',
  'SOMETHING IS INSIDE THE LABYRINTH WITH YOU.',
  'YOU WERE NOT SUPPOSED TO REACH THIS LEVEL.',
];

// Shown in the margins of the chamber while a riddle is open.
export const WHISPERS=[
  'THE WALLS DO NOT STOP FOR THINKING.',
  'THERE IS LESS ROOM THAN THERE WAS A MOMENT AGO.',
  'THE AIR IN HERE IS RUNNING OUT.',
  'SOMEONE BEHIND YOU JUST SOLVED THIS ONE.',
  'YOU ARE TAKING TOO LONG.',
  'EVERY SECOND YOU WASTE, SOMEONE CLIMBS PAST YOU.',
  'THE CEILING IS LOWER NOW. DO NOT LOOK UP.',
  'IT CAN HEAR YOU THINKING.',
];

// Thrown at anyone caught pasting, copying the riddle or leaving mid-riddle.
export const CHEAT_ROASTS={
  paste:[
    "CTRL+V IS NOT A PERSONALITY.",
    "YOU PASTED AN ANSWER. YOUR BRAIN FILED FOR UNEMPLOYMENT.",
    "COPY. PASTE. DISGRACE.",
    "THE CHATBOT DID THE THINKING. WHAT EXACTLY DID YOU DO?",
    "EVEN THE AI IS EMBARRASSED TO BE SEEN WITH YOU.",
  ],
  copy:[
    "COPYING THE RIDDLE? THE SNAKE DOES NOT SHARE.",
    "WHERE WERE YOU TAKING THAT? TO A ROBOT? PATHETIC.",
    "YOU CANNOT SMUGGLE THE RIDDLE OUT. IT IS SMARTER THAN YOU.",
  ],
  left:[
    "YOU LEFT THE ROOM. THE WALLS DID NOT.",
    "CIRCLE TO SEARCH CAN'T FIND YOUR DIGNITY EITHER.",
    "ASKING A MACHINE FOR HELP? THE MACHINE IS LAUGHING AT YOU.",
    "WENT TO ASK GOOGLE? GOOGLE SAYS: SKILL ISSUE.",
    "RUNNING TO A CHATBOT MID-RIDDLE. HOW BRAVE. HOW SAD.",
    "THE SNAKE SAW YOU LEAVE. EVERYONE SAW YOU LEAVE.",
  ],
  screenshot:[
    "SCREENSHOTTING THE RIDDLE? SMILE, THE ADMIN SAW THAT.",
    "A PICTURE WON'T SOLVE IT. NEITHER WILL YOU, APPARENTLY.",
  ],
};

export const ROOMS=[
  {ico:'X',name:'THE OSSUARY',sub:'Bones arranged as warnings'},
  {ico:'o',name:'THE LOOP CHAMBER',sub:'You have been here before'},
  {ico:'*',name:'THE NULL SPACE',sub:'Nothing echoes back'},
  {ico:'#',name:'THE PIXEL TOMB',sub:'Resolution: 0x0'},
  {ico:'.',name:'THE NOISE VAULT',sub:'Signal without origin'},
  {ico:'~',name:'THE IRON MOUTH',sub:'The chain feeds itself'},
  {ico:'=',name:'THE TIDE ROOM',sub:'It rises. It always rises.'},
  {ico:'@',name:'THE CORE',sub:'Deeper than the last level'},
  {ico:'>',name:'THE RECURSION',sub:'See: THE RECURSION'},
  {ico:'?',name:'THE WATCHING ROOM',sub:'It does not blink'},
  {ico:'!',name:'THE CATALYST',sub:'Reaction already started'},
  {ico:'0',name:'THE VOID CHAMBER',sub:'It was always empty'},
];


export const WIN_ART='  +++++++++++++++++++++\n  +                   +\n  +   CYCLE BROKEN    +\n  +   YOU ENDURED     +\n  + THE KLEIN BOTTLE  +\n  +   -----------     +\n  +   FOR NOW.        +\n  +                   +\n  +++++++++++++++++++++';
export const LOSE_ART='  +=====================+\n  |   X  X  X  X  X    |\n  |   CONSUMED BY       |\n  |   THE ETERNAL       |\n  |   HUNGER OF THE     |\n  |   KLEIN BOTTLE      |\n  |   ------------      |\n  |   YOU WERE FOOD.    |\n  +=====================+';
export const WIN_SNAKE='       .  .  o  .  .\n     .    _------_   .\n    .   , (o)(o) ,  .\n   .   /   \\ ^ /   \\ .\n    . |    .-o-.    | .\n     .  \\__________/ .\n       .  .  o  .  .\n   THE SNAKE WILL RETURN';
export const LOSE_SNAKE='       .  .  X  .  .\n     .   ,--____--,  .\n    .   /  X    X  \\ .\n   .   |  feeding   | .\n    .   \\__________/ .\n     .    ||||||||   .\n       .  .  X  .  .\n   THE SNAKE REMEMBERS';
