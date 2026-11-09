/* =====================================================================
   THE COLLEGE READING LIST
   =====================================================================
   Royal College of Psychiatrists, Reading lists for MRCPsych
   examinations. Reproduced here as a bibliography so that every
   teaching item on this site can name the source a candidate should
   check it against.

   REF[key] gives the full citation. Each curriculum section names the
   keys the College lists against it.
   ===================================================================== */

var REF = {

/* ---- Classification and assessment ---- */
"oyebode":   { a:"Oyebode F", t:"Sims' Symptoms in the Mind: An Introduction to Descriptive Psychopathology", y:2008, p:"Saunders", tag:"CAP" },
"fish":      { a:"Casey P, Kelly B", t:"Fish's Clinical Psychopathology: Signs and Symptoms in Psychiatry", y:2024, p:"Cambridge University Press", tag:"CAP" },
"tyrer11":   { a:"Tyrer P, ed.", t:"Making Sense of the ICD-11: For Mental Health Professionals", y:2023, p:"Royal College of Psychiatrists", tag:"CAP" },
"icd11":     { a:"World Health Organization", t:"ICD-11 for Mortality and Morbidity Statistics", y:"current", p:"icd.who.int", tag:"CAP", url:"https://icd.who.int/en" },
"dsm5":      { a:"American Psychiatric Association", t:"Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition", y:2013, p:"American Psychiatric Publishing", tag:"CAP" },

/* ---- Behavioural science, development, socio-cultural ---- */
"gross":     { a:"Gross R", t:"Psychology: The Science of Mind and Behaviour, 8th edition", y:2020, p:"Hodder Education", tag:"BSHD" },
"atkinson":  { a:"Nolen-Hoeksema S et al.", t:"Atkinson and Hilgard's Introduction to Psychology, 16th edition", y:2015, p:"Cengage", tag:"BSHD" },
"bhugra":    { a:"Bhugra D, Bhui K, eds.", t:"Textbook of Cultural Psychiatry, 2nd edition", y:2018, p:"Cambridge University Press", tag:"BSHD" },
"morgan":    { a:"Morgan C, Bhugra D, eds.", t:"Principles of Social Psychiatry, 2nd edition", y:2010, p:"Wiley-Blackwell", tag:"BSHD" },

/* ---- Neurosciences ---- */
"agrawal":   { a:"Agrawal N, Poole N, eds.", t:"Essential Neuroscience for Psychiatrists", y:2024, p:"Cambridge University Press", tag:"NEURO" },
"lynall":    { a:"Lynall M-E, Jones PB, Stahl SM", t:"Cambridge Textbook of Neuroscience for Psychiatrists", y:2023, p:"RCPsych Publications", tag:"NEURO" },
"nnci":      { a:"National Neuroscience Curriculum Initiative", t:"Online teaching resources", y:"current", p:"nncionline.org", tag:"NEURO", url:"https://nncionline.org/" },

/* ---- Psychopharmacology ---- */
"maudsley":  { a:"Taylor DM, Barnes TRE, Young AH", t:"The Maudsley Prescribing Guidelines in Psychiatry, 14th edition", y:2021, p:"Wiley-Blackwell", tag:"PHARM" },
"maudphys":  { a:"Taylor DM et al.", t:"The Maudsley Practice Guidelines for Physical Health Conditions in Psychiatry", y:2020, p:"Wiley-Blackwell", tag:"PHARM" },
"bnf":       { a:"Joint Formulary Committee", t:"British National Formulary", y:"current", p:"NICE", tag:"PHARM", url:"https://bnf.nice.org.uk/" },
"stahl":     { a:"Stahl SM", t:"Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Application, 5th edition", y:2021, p:"Cambridge University Press", tag:"PHARM" },

/* ---- General reference ---- */
"noptp":     { a:"Geddes JR, Andreasen NC, Goodwin GM, eds.", t:"New Oxford Textbook of Psychiatry, 3rd edition", y:2020, p:"Oxford University Press", tag:"GEN" },
"companion": { a:"Johnstone EC, Owens DC et al.", t:"Companion to Psychiatric Studies, 8th edition", y:2010, p:"Churchill Livingstone", tag:"GEN" },
"kaplanc":   { a:"Boland R, Verduin M", t:"Kaplan and Sadock's Concise Textbook of Clinical Psychiatry", y:2022, p:"Wolters Kluwer", tag:"GEN" },
"kaplan":    { a:"Sadock BJ, Sadock VA, Ruiz P", t:"Kaplan and Sadock's Comprehensive Textbook of Psychiatry, 10th edition", y:2017, p:"Wolters Kluwer", tag:"GEN" },
"oxhandbk":  { a:"Semple D, Smyth R", t:"Oxford Handbook of Psychiatry, 4th edition", y:2019, p:"Oxford University Press", tag:"GEN" },
"shorter":   { a:"Harrison PJ, Cowen P, Burns T, Fazel M", t:"Shorter Oxford Textbook of Psychiatry, 7th edition", y:2018, p:"Oxford University Press", tag:"GEN" },
"lishman":   { a:"David AS, Fleminger S, Kopelman M, Lovestone S, Mellers J", t:"Lishman's Organic Psychiatry, 4th edition", y:2011, p:"Wiley-Blackwell", tag:"GEN" },
"oxneuropsy":{ a:"Agarwal N, Faruqui R, Bodani M, eds.", t:"Oxford Textbook of Neuropsychiatry", y:2020, p:"Oxford University Press", tag:"GEN" },
"nice":      { a:"National Institute for Health and Care Excellence", t:"NICE guidance", y:"current", p:"nice.org.uk", tag:"GEN", url:"https://www.nice.org.uk/guidance" },

/* ---- Paper B specialties ---- */
"ecthandbk": { a:"Ferrier IN, Waite J, eds.", t:"The ECT Handbook, 4th edition", y:2019, p:"Cambridge University Press", tag:"ORG" },
"semgen":    { a:"Kingdon D, Rowlands P, Stein G, eds.", t:"Seminars in General Adult Psychiatry, 3rd edition", y:2024, p:"Cambridge University Press", tag:"GA" },
"semliaison":{ a:"Thomasson R, Guthrie E, House A, eds.", t:"Seminars in Consultation-Liaison Psychiatry", y:2023, p:"Cambridge University Press", tag:"GA" },
"oxoldage":  { a:"Dening T, Thomas A, eds.", t:"Oxford Textbook of Old Age Psychiatry, 3rd edition", y:2020, p:"Oxford University Press", tag:"OA" },
"gabbard":   { a:"Gabbard GO, Beck JS, Holmes J, eds.", t:"Oxford Textbook of Psychotherapy", y:2005, p:"Oxford University Press", tag:"PSYCHOTH" },
"rutter":    { a:"Thapar A et al., eds.", t:"Rutter's Child and Adolescent Psychiatry, 6th edition", y:2018, p:"Wiley-Blackwell", tag:"CAMHS" },
"semaddict": { a:"Day E, ed.", t:"Seminars in Addiction Psychiatry, 2nd edition", y:2021, p:"Cambridge University Press", tag:"SUB" },
"addmed":    { a:"Saunders J, Conigrave K, Latt N et al.", t:"Addiction Medicine, 2nd edition", y:2016, p:"Oxford University Press", tag:"SUB" },
"puriforen": { a:"Puri BK, Treasaden IH", t:"Forensic Psychiatry", y:2017, p:"CRC Press", tag:"FOREN" },
"eastman":   { a:"Eastman N et al.", t:"Forensic Psychiatry", y:2023, p:"Oxford University Press", tag:"FOREN" },
"oxid":      { a:"Bhaumik S, Alexander R, eds.", t:"Oxford Textbook of the Psychiatry of Intellectual Disability", y:2020, p:"Oxford University Press", tag:"ID" },
"semid":     { a:"Scheepers M, Kerr M, eds.", t:"Seminars in the Psychiatry of Intellectual Disability, 3rd edition", y:2019, p:"Cambridge University Press", tag:"ID" },
"ssbp":      { a:"Society for the Study of Behavioural Phenotypes", t:"Syndrome sheets", y:"current", p:"ssbp.org.uk", tag:"ID", url:"https://ssbp.org.uk/syndrome-sheets/" },

/* ---- Critical review ---- */
"lawrie":    { a:"Lawrie SM, McIntosh AM, Rao S", t:"Critical Appraisal for Psychiatrists", y:2000, p:"Churchill Livingstone", tag:"CR" },
"peacock":   { a:"Peacock JL, Peacock PJ", t:"Oxford Handbook of Medical Statistics, 2nd edition", y:2020, p:"Oxford University Press", tag:"CR" },
"kirkwood":  { a:"Kirkwood BR, Sterne JAC", t:"Essential Medical Statistics, 2nd edition", y:2010, p:"Wiley-Blackwell", tag:"CR" },
"petrie":    { a:"Petrie A, Sabin C", t:"Medical Statistics at a Glance, 4th edition", y:2020, p:"Wiley-Blackwell", tag:"CR" },
"bland":     { a:"Bland M", t:"An Introduction to Medical Statistics, 4th edition", y:2015, p:"Oxford University Press", tag:"CR" },
"gosall":    { a:"Gosall NK, Gosall GS", t:"The Doctor's Guide to Critical Appraisal, 4th edition", y:2015, p:"PasTest", tag:"CR" },
"drummond":  { a:"Drummond MF et al.", t:"Methods for the Economic Evaluation of Health Care Programmes, 4th edition", y:2015, p:"Oxford University Press", tag:"CR" },
"brownwilk": { a:"Brown TM, Wilkinson G, eds.", t:"Critical Reviews in Psychiatry, 4th edition", y:2005, p:"RCPsych Publications", tag:"CR" },
"freeman":   { a:"Freeman C, Tyrer P, eds.", t:"Research Methods in Psychiatry, 3rd edition", y:2006, p:"Gaskell", tag:"CR" },
"forrester": { a:"Forrester MA, Sullivan C, eds.", t:"Doing Qualitative Research in Psychology: A Practical Guide, 2nd edition", y:2020, p:"SAGE", tag:"CR" },
"healthecon":{ a:"Jackson D", t:"Healthcare Economics Made Easy, 2nd edition", y:2019, p:"Scion", tag:"CR" }
};

/* Which sources the College lists against each curriculum section. */
var SECTION_REFS = {
  1:  ["gross","atkinson","bhugra","morgan","noptp","kaplanc"],
  2:  ["gross","atkinson","noptp","kaplanc","rutter"],
  3:  ["agrawal","lynall","nnci","noptp","lishman"],
  4:  ["maudsley","maudphys","bnf","stahl","noptp"],
  5:  ["oyebode","fish","tyrer11","icd11","dsm5"],
  6:  ["ecthandbk","oxhandbk","nice","noptp"],
  7:  ["semgen","semliaison","shorter","oxhandbk","nice","maudsley"],
  8:  ["oxoldage","lishman","oxneuropsy","nice"],
  9:  ["gabbard","noptp","nice"],
  10: ["rutter","nice","oxhandbk"],
  11: ["semaddict","addmed","nice","maudsley"],
  12: ["puriforen","eastman","noptp"],
  13: ["oxid","semid","ssbp"],
  14: ["lawrie","peacock","kirkwood","petrie","bland","gosall","drummond","brownwilk","freeman","forrester","healthecon"]
};

/* Journals the College names for critical review practice. */
var JOURNALS = [
  "The British Journal of Psychiatry",
  "BJPsych Open",
  "BJPsych Bulletin",
  "BMJ Mental Health",
  "The Lancet",
  "The BMJ",
  "International Journal of Epidemiology"
];

function refLine(key){
  var r = REF[key];
  if(!r) return "";
  return r.a.replace(/\.$/,"") + ". " + r.t + ". " + (r.y === "current" ? "" : r.y + ". ") + r.p + ".";
}
