/* =====================================================================
   THE PAPER  ·  everything in the free, public sections
   =====================================================================

   Eight columns. Each piece belongs to exactly one.

     The Story                  Monday      1,500 words
     The Word                   Tuesday       200 words
     Explained Simply           Wednesday     700 words
     One Minute on the Ward     Thursday      150 words
     The Notebook               Friday        400 words
     From the Question Bank     Saturday      300 words
     Remarkable People          Monthly       800 words
     The Correction             Monthly       500 words

   LEVELS. Put one or both. This is what lets a professor and a
   sixteen year old read the same paper without either feeling wrong.

     "anyone"    no medical training needed
     "trainee"   assumes a medical degree
     "exam"      criteria, trials, years, numbers

   To add a piece: copy a block, paste it at the TOP, change the lines.
   Keep type: "story". Keep the column name exactly as spelled above.
   ===================================================================== */

var STORIES = [

  {
    id:"c007", type:"story", paper:"Story", column:"The Correction",
    level:["trainee","exam"],
    title:"The bell is not the unconditioned stimulus",
    topic:"A reversal printed in half the revision texts in circulation",
    date:"2026-09-06", access:"free",
    summary:"Food never had to be taught. The bell did. Get those two the wrong way round and every classical conditioning item in the paper goes with it.",
    file:"content/c007-correction-pavlov.html"
  },

  {
    id:"c006", type:"story", paper:"Story", column:"Remarkable People",
    level:["anyone","exam"],
    title:"Bertha Pappenheim",
    topic:"The woman the textbooks call Anna O",
    date:"2026-09-05", access:"free",
    summary:"She named the talking cure, was not cured by it, recovered anyway, and then built one of the largest women's organisations in Europe. Psychiatry remembers her by an initial.",
    file:"content/c006-remarkable-bertha-pappenheim.html"
  },

  {
    id:"c005", type:"story", paper:"Story", column:"Explained Simply",
    level:["anyone","trainee"],
    title:"Why an antidepressant takes six weeks",
    topic:"The drug hits its target on day one. So what is everybody waiting for?",
    date:"2026-09-04", access:"free",
    summary:"Your brain has a thermostat, and it spends a month refusing to let the change through. The waiting is the brain letting go, not the drug failing.",
    file:"content/c005-explained-six-weeks.html"
  },

  {
    id:"c004", type:"story", paper:"Story", column:"The Notebook",
    level:["exam"],
    title:"Serotonin syndrome against neuroleptic malignant syndrome",
    topic:"Two hyperthermic emergencies, one examination",
    date:"2026-09-03", access:"free",
    summary:"Clonus means serotonin. Rigidity means neuroleptic. Everything else they have in common.",
    file:"content/c004-notebook-serotonin-nms.html"
  },

  {
    id:"c003", type:"story", paper:"Story", column:"One Minute on the Ward",
    level:["anyone"],
    title:"The man who would not sit down",
    topic:"Eleven days into treatment, and the plan was to give him more",
    date:"2026-09-02", access:"free",
    summary:"He was written up as agitated and non-compliant. The whole intervention turned out to be a single question.",
    file:"content/c003-ward-would-not-sit-down.html"
  },

  {
    id:"c002", type:"story", paper:"Story", column:"The Word",
    level:["anyone","exam"],
    title:"Derealisation",
    topic:"And why it is not depersonalisation",
    date:"2026-09-01", access:"free",
    summary:"One is about the self. The other is about the world. Half of all adults have felt one of them, and almost nobody knows there is a name for it.",
    file:"content/c002-the-word-derealisation.html"
  },

  {
    id:"c001", type:"story", paper:"Story", column:"The Word",
    level:["anyone","exam"],
    title:"Akathisia",
    topic:"From the Greek: not able to sit down",
    date:"2026-08-31", access:"free",
    summary:"Constantly mistaken for anxiety, and then treated by raising the dose. One question separates them.",
    file:"content/c001-the-word-akathisia.html"
  },

  {
    id:"s005", type:"story", paper:"Story", column:"The Story",
    level:["anyone","exam"],
    title:"The drug that emptied the asylums",
    topic:"Laborit, Delay and Deniker, and the accident that made modern psychiatry",
    date:"2026-08-30", access:"free",
    summary:"A French surgeon noticed that his patients had stopped minding, and would not let the psychiatrists ignore it.",
    file:"content/s005-the-drug-that-emptied-the-asylums.html"
  },

  {
    id:"s004", type:"story", paper:"Story", column:"The Story",
    level:["anyone","exam"],
    title:"The tamping iron",
    topic:"Phineas Gage, the frontal lobe, and a story medicine has told wrong for a century",
    date:"2026-08-29", access:"free",
    summary:"An iron bar went through the front of a man's brain in 1848 and he sat up and spoke. What happened next has been exaggerated ever since.",
    file:"content/s004-the-tamping-iron.html"
  },

  {
    id:"s003", type:"story", paper:"Story", column:"The Story",
    level:["anyone","exam"],
    title:"I have lost myself",
    topic:"Auguste Deter, Alois Alzheimer and the disease that took her name",
    date:"2026-08-28", access:"free",
    summary:"In 1901 a fifty-one year old woman in Frankfurt told her doctor she had lost herself. He wrote it down, waited five years, and looked at her brain.",
    file:"content/s003-i-have-lost-myself.html"
  },

  {
    id:"s002", type:"story", paper:"Story", column:"The Story",
    level:["anyone","exam"],
    title:"The guinea pigs and the salt",
    topic:"John Cade, a hospital pantry, and the most effective drug psychiatry has",
    date:"2026-08-27", access:"free",
    summary:"A prisoner of war came home with a theory that was almost entirely wrong, and it put the right substance in his hand.",
    file:"content/s002-the-guinea-pigs-and-the-salt.html"
  },

  {
    id:"s001", type:"story", paper:"Story", column:"The Story",
    level:["anyone","exam"],
    title:"The madhouse that chose kindness",
    topic:"Battie, Tuke, Goffman and two hundred years of getting it wrong and right",
    date:"2026-08-26", access:"free",
    summary:"A grieving widow died behind a locked door in York in 1790, and nobody would say how. What followed rebuilt the whole idea of what a hospital is for.",
    file:"content/s001-the-madhouse-that-chose-kindness.html"
  }

];

/* The eight columns, in publishing order. Used by the section page. */
var COLUMNS = [
  ["The Story",              "Monday",    "The flagship. Five parts, from a human moment to the exam facts."],
  ["The Word",               "Tuesday",   "One term. Where it came from, what it means, what it gets confused with."],
  ["Explained Simply",       "Wednesday", "One hard idea, one metaphor, no history."],
  ["One Minute on the Ward", "Thursday",  "A single clinical moment, and what the psychiatrist actually did."],
  ["The Notebook",           "Friday",    "Pure high yield. No narrative."],
  ["From the Question Bank", "Saturday",  "One examined pattern, and how often it has appeared."],
  ["Remarkable People",      "Monthly",   "The people who changed psychiatry. Including the patients."],
  ["The Correction",         "Monthly",   "One thing that is taught wrong, corrected in public, with the source."]
];
