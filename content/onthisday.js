/* =====================================================================
   TODAY IN PSYCHIATRY
   =====================================================================
   The one line at the top of the front page. It changes every day.

   EXACT  entries have a real day and month. When the calendar matches,
          that entry wins and the line reads "On this day in ...".
   POOL   entries are year only. One is chosen each day, in rotation,
          and the line reads "From the timeline".

   To add one: copy a line. That is the whole job.
   ===================================================================== */

var ON_THIS_DAY_EXACT = [
  ["09-13", 1848, "an iron bar was blown through the front of Phineas Gage's skull, and he sat up and spoke within minutes."],
  ["11-25", 1901, "Auguste Deter was admitted in Frankfurt. Asked to write her name, she said, I have lost myself."],
  ["11-03", 1906, "Alois Alzheimer presented her case in Tübingen. The room asked no questions."],
  ["04-08", 1906, "Auguste Deter died, aged 55. Her brain and her notes were sent to Munich."],
  ["03-29", 1948, "John Cade gave lithium to a man who had been continuously manic for five years. Within weeks he went home."],
  ["01-01", 2022, "ICD-11 came into force, replacing categorical personality disorder with a single dimensional diagnosis."],
  ["05-21", 1860, "Phineas Gage died of status epilepticus, twelve years after the accident that made him famous."],
  ["07-05", 1948, "the National Health Service began. British psychiatric epidemiology became possible."]
];

var ON_THIS_DAY_POOL = [
  [1758, "William Battie argued in print that madness is a disease, is often curable, and that management matters more than medicine."],
  [1793, "Philippe Pinel took the chains off at the Bicêtre in Paris, having learned the practice from Jean-Baptiste Pussin, a former patient."],
  [1796, "the Quakers opened The Retreat at York, with no chains, gardens, work, and tea with the staff."],
  [1839, "John Conolly abolished mechanical restraint entirely in an asylum of more than eight hundred patients."],
  [1868, "William Gull named anorexia nervosa and insisted the cause was not gastric."],
  [1874, "Carl Wernicke, aged twenty-six, localised comprehension to the superior temporal gyrus and predicted a third aphasia."],
  [1895, "Breuer and Freud published the case of Anna O. She had named the method herself: the talking cure."],
  [1899, "Emil Kraepelin split the psychoses in two, by their course rather than their symptoms."],
  [1908, "Eugen Bleuler renamed dementia praecox schizophrenia, to make the point that it neither always dements nor always begins early."],
  [1917, "Julius Wagner-Jauregg treated neurosyphilis by giving patients malaria. It was the first physical treatment in psychiatry that worked."],
  [1935, "Bill Wilson and Robert Smith founded Alcoholics Anonymous in Akron, Ohio."],
  [1938, "Cerletti and Bini induced a seizure with electricity rather than chemicals. The first patient asked them not to do it again."],
  [1943, "Leo Kanner described eleven children with autistic disturbances of affective contact."],
  [1949, "John Cade published ten cases in the Medical Journal of Australia. The world ignored it for twenty-one years."],
  [1952, "Delay and Deniker gave chlorpromazine to psychiatric patients in Paris, and the wards changed within months."],
  [1957, "Roland Kuhn found that imipramine, developed as an antipsychotic, lifted depression instead."],
  [1959, "Russell Barton named institutional neurosis: the apathy that comes from the building rather than the illness."],
  [1961, "Erving Goffman published Asylums, and Enoch Powell promised to demolish them."],
  [1967, "Aaron Beck set out to prove the psychoanalytic account of depression, found the opposite, and followed the data."],
  [1969, "Mary Ainsworth watched toddlers in a room with a door, and found four ways a child greets a mother coming back."],
  [1971, "the Medico-Psychological Association received its Royal Charter as the Royal College of Psychiatrists."],
  [1979, "Gerald Russell described bulimia nervosa, and the callus on the knuckles that gives it away."],
  [1980, "DSM-III replaced clinical impression with operational criteria, and admitted PTSD."],
  [1988, "John Kane showed clozapine worked in patients who had failed everything else. It came back with weekly blood tests."],
  [1991, "Marsha Linehan published the first trial of DBT. Twenty years later she disclosed she had been a patient herself."],
  [2019, "esketamine was licensed, the first antidepressant in decades to work in hours rather than weeks."]
];

function todayInPsychiatry(){
  var d = new Date();
  var key = ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0"+d.getDate()).slice(-2);
  for (var i=0;i<ON_THIS_DAY_EXACT.length;i++){
    if (ON_THIS_DAY_EXACT[i][0] === key)
      return { lab:"On this day", txt:"In " + ON_THIS_DAY_EXACT[i][1] + ", " + ON_THIS_DAY_EXACT[i][2] };
  }
  var start = new Date(d.getFullYear(),0,0);
  var day = Math.floor((d - start) / 86400000);
  var pick = ON_THIS_DAY_POOL[day % ON_THIS_DAY_POOL.length];
  return { lab:"From the timeline", txt:"In " + pick[0] + ", " + pick[1] };
}
