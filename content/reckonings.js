/* =====================================================================
   THE RECKONING
   =====================================================================
   Striking true stories from the history of psychiatry and medical
   ethics. Every one of them is checked. Nothing here is invented.

   Each entry:
     id     unique
     y      the year, or a range
     cat    "The Cage" | "The Experiment" | "The Cover-Up" | "The Rules" | "The Lives"
     t      the headline
     hook   one line. No jargon. This is what makes somebody click.
     what   what actually happened, in three or four sentences
     turn   what it changed. This is the point of the whole thing
     facts  exact lines a candidate can carry into an exam
     flag   optional. Shown as a red badge, for disputed claims
   ===================================================================== */

var RECKONINGS = [
 {
  "id": "rk01",
  "y": "to 1770",
  "cat": "The Cage",
  "t": "Until 1770, the public could walk in and look at them",
  "hook": "For most of its history, the most famous psychiatric hospital in the world was also a day out.",
  "what": "Bethlem in London was open to the public at set hours, and going to look at the patients was a recognised entertainment. Hogarth painted the scene in 1735. Visitors were not sold a ticket at the door, but boxes stood near the entrance and the porters made it very clear that a donation was expected. In 1770 the hospital stopped casual visiting and required a signed ticket from a Governor. Donations collapsed from around three hundred pounds a year to under thirty.",
  "turn": "That collapse is the whole argument in one number. For two centuries the institution had been part-funded by strangers paying to stare, and when the staring stopped, so did the money.",
  "facts": [
   "Bethlem was founded in 1247 as the Priory of St Mary of Bethlehem. It was not a hospital for the mentally ill at its founding.",
   "Casual public visiting ended in 1770.",
   "The popular claim of a fixed penny entry fee, and the figure of 96,000 visitors a year, are both rejected by historians. Donations were solicited, not charged.",
   "William Battie, 1758: madness is a disease, is often curable, and management matters more than medicine."
  ]
 },
 {
  "id": "rk02",
  "y": "1793-1797",
  "cat": "The Cage",
  "t": "The man who took off the chains was not the doctor",
  "hook": "Everyone remembers Philippe Pinel. At the Bicêtre, it was a former patient turned ward governor who removed the irons.",
  "what": "Philippe Pinel is credited with unchaining the patients at the Bicetre in Paris. He did not invent the idea. He learned it from Jean-Baptiste Pussin, the hospital's lay superintendent, who had himself been admitted there as a patient years earlier, for scrofula rather than mental illness. Pinel arrived as physician in 1793. Pussin removed the irons at the Bicêtre in 1797 and replaced them with strait-waistcoats, and Pinel, who credited him in print, did the same at the Salpêtrière around 1800. The famous scene of Pinel striking off the chains in 1793 is a later legend.",
  "turn": "Moral treatment spread from Paris and from The Retreat at York, where the Quakers had opened in 1796 with no chains, gardens, work and tea with the staff. It is the first time in the record that being decent was proposed as a treatment.",
  "facts": [
   "Pinel worked at the Bicetre and later the Salpetriere, in Paris. Not Great Britain.",
   "The Retreat at York, William Tuke, 1796.",
   "John Conolly abolished mechanical restraint entirely at Hanwell in 1839, in an asylum of more than eight hundred patients.",
   "Russell Barton named institutional neurosis in 1959: the apathy that comes from the building, not the illness."
  ]
 },
 {
  "id": "rk09",
  "y": "1917-1927",
  "cat": "The Cage",
  "t": "They gave patients malaria on purpose, and won a Nobel Prize",
  "hook": "Before penicillin, neurosyphilis was a death sentence. The fever cure was dangerous, and it worked better than anything else available.",
  "what": "General paralysis of the insane, the tertiary neurosyphilis that filled the asylums, was invariably fatal. In 1917 Julius Wagner-Jauregg inoculated patients with vivax malaria, let the fevers run, then aborted the malaria with quinine. Enough patients recovered that it became standard practice worldwide.",
  "turn": "He won the Nobel Prize in 1927. The treatment itself killed roughly fifteen in a hundred. It is a clear example of a dangerous treatment judged worth the risk for a fatal disease, and it stopped being worth it once penicillin arrived.",
  "facts": [
   "Wagner-Jauregg, malaria therapy from 1917. Nobel Prize in Physiology or Medicine, 1927.",
   "Mortality of the treatment commonly cited at around 15 per cent. Published series range roughly 5 to 20 per cent.",
   "Plasmodium vivax was chosen deliberately as the milder species.",
   "It was the first physical treatment in psychiatry that demonstrably worked.",
   "It was the first of two Nobel Prizes for psychiatric treatments. The second, to Egas Moniz in 1949 for leucotomy, is far harder to defend."
  ]
 },
 {
  "id": "rk08",
  "y": "1933-1957",
  "cat": "The Cage",
  "t": "Twenty years of insulin comas, and one trial that ended them",
  "hook": "It had its own wards, its own nurses and a death rate of about one in a hundred. In 1957 a trial found it no better than barbiturate sleep.",
  "what": "Manfred Sakel reported insulin coma therapy for schizophrenia in 1933. Patients were given enough insulin to become hypoglycaemic and comatose, daily, sometimes for months. By 1938 thirty-one British hospitals had insulin units. It was resource-intensive, dangerous, and universally believed in.",
  "turn": "Harold Bourne published The Insulin Myth in the Lancet in 1953, arguing the effect was patient selection plus intensive nursing attention. In 1957 Ackner, Harris and Oldham ran the controlled trial: insulin coma versus barbiturate-induced unconsciousness. No difference.",
  "facts": [
   "Sakel first reported it in 1933, from work begun with insulin in 1927.",
   "Mortality is commonly cited at around 1 per cent, with reported ranges up to about 5 per cent.",
   "Bourne, The Insulin Myth, Lancet 1953. Ackner, Harris and Oldham, Lancet 1957.",
   "The lesson is not that doctors were stupid. It is that twenty years of confident clinical impression lost to one controlled trial."
  ]
 },
 {
  "id": "rk07",
  "y": "1934-1938",
  "cat": "The Cage",
  "t": "Before ECT, the fit came from an injection, and patients felt it coming",
  "hook": "Cardiazol left patients fully conscious for the seconds before the convulsion, and they dreaded it.",
  "what": "Ladislas Meduna began inducing seizures in 1934, first with camphor and then with pentylenetetrazol, on the false belief that epilepsy and schizophrenia were biologically antagonistic. The drug had a latency of seconds to minutes during which the patient stayed fully conscious and experienced overwhelming dread. The convulsions were unmodified and broke bones, including vertebrae.",
  "turn": "Cerletti and Bini used electricity instead in April 1938, because it produced immediate unconsciousness and a stimulus you could control. The first patient asked them not to do it again. ECT remains the most effective acute treatment we have for severe depression.",
  "facts": [
   "Meduna, Budapest, first induced convulsion 23 January 1934, with camphor in oil.",
   "Cerletti and Bini, University of Rome, first human ECT April 1938.",
   "The rationale, that epilepsy protects against schizophrenia, was wrong. The treatment worked anyway.",
   "Modern ECT is given under general anaesthesia with muscle relaxation. Nothing about the 1938 procedure resembles current practice."
  ]
 },
 {
  "id": "rk03",
  "y": "1940-1941",
  "cat": "The Cage",
  "t": "Before the death camps, there was a form, and doctors filled it in",
  "hook": "The first people the Nazis gassed were psychiatric and disabled patients. Selection began with a questionnaire completed by asylum doctors.",
  "what": "Aktion T4 was run by physicians. Psychiatric patients and disabled people were assessed on forms, transported, and killed at six centres fitted with gas chambers. The programme's own internal statistics record 70,273 deaths in the centralised phase alone. The methods, the personnel and the technology were then moved east.",
  "turn": "This is why medical ethics has codes rather than customs. The Nuremberg Doctors' Trial that followed produced the Nuremberg Code, and its first line is that voluntary informed consent is absolutely essential.",
  "facts": [
   "Centralised gassing phase: January 1940 to August 1941. 70,273 recorded deaths.",
   "The wider programme continued to 1945, with estimates of 250,000 to 300,000 deaths.",
   "The Doctors' Trial ran 9 December 1946 to 20 August 1947. 23 defendants, 16 convicted, 7 hanged.",
   "The Nuremberg Code, 1947, has ten principles. Consent, the right to withdraw, prior animal work, and avoidable harm."
  ]
 },
 {
  "id": "rk05",
  "y": "1949-1967",
  "cat": "The Cage",
  "t": "A Nobel Prize, then an ice pick",
  "hook": "Moniz won the 1949 Nobel for leucotomy. In America, the neurologist Walter Freeman went in through the eye socket, once performing 25 in a single day.",
  "what": "Egas Moniz received the Nobel Prize in 1949 for prefrontal leucotomy. Walter Freeman simplified it into a transorbital procedure requiring no operating theatre and no surgeon, first performing it in January 1946. He toured the United States in a van he called the lobotomobile. He was banned from operating in 1967 after a patient died of a haemorrhage.",
  "turn": "Nothing was ever formally prohibited. The operation simply stopped being worth doing once chlorpromazine arrived in 1952. In the UK, psychosurgery was finally brought under statutory safeguards by section 57 of the Mental Health Act 1983.",
  "facts": [
   "Moniz, Nobel Prize in Physiology or Medicine, 1949, shared with Walter Hess.",
   "Freeman performed roughly 3,000 to 3,500 operations, of which about 2,500 were transorbital. Figures vary by source.",
   "Rosemary Kennedy was operated on in 1941, aged 23. She was permanently disabled and institutionalised for the rest of her life.",
   "An estimated 15,000 to 17,000 operations were performed in the UK between 1940 and 1954."
  ]
 },
 {
  "id": "rk06",
  "y": "1950s-1970s",
  "cat": "The Cage",
  "t": "The NHS tried to 'cure' gay men with electric shocks",
  "hook": "It was published in medical journals and taught as treatment. Decades later, patients and the professionals involved described the damage to the BMJ.",
  "what": "Aversion therapy for homosexuality was used in British hospitals through the 1950s and 1960s, pairing images with electric shocks or nausea-inducing drugs. Feldman and MacCulloch ran trials at Crumpsall Hospital in Manchester from 1962. Some men were referred by courts. MacCulloch himself publicly denounced the practice in 1974.",
  "turn": "The American Psychiatric Association removed homosexuality from DSM-II in December 1973. The World Health Organization removed it when the World Health Assembly approved ICD-10 on 17 May 1990, which is why that date is now marked internationally.",
  "facts": [
   "APA Board of Trustees voted December 1973; removed from DSM-II in the 1974 printing, replaced by sexual orientation disturbance.",
   "Ego-dystonic homosexuality persisted in DSM-III (1980) and was removed in DSM-III-R (1987).",
   "WHO: approved 17 May 1990, in use in member states from 1994.",
   "A diagnosis is a decision about what counts as illness. It has always been possible to get that decision wrong."
  ]
 },
 {
  "id": "rk04",
  "y": "1960s-1980s",
  "cat": "The Cage",
  "t": "When disagreeing with the state became a symptom",
  "hook": "Soviet psychiatry stretched one diagnosis so far that dissent itself could look like illness.",
  "what": "Soviet psychiatry greatly broadened an older idea of mild, slowly progressive schizophrenia into a category called sluggish schizophrenia, associated with Andrei Snezhnevsky's Moscow school, and it was then abused. It could be diagnosed in people with no hallucinations, no delusions and no functional decline. Reform delusions, struggle for the truth and perseverance were listed as features. Dissidents were admitted to special psychiatric hospitals run by the Ministry of Internal Affairs.",
  "turn": "The World Psychiatric Association condemned it at the Honolulu congress in 1977, by 90 votes to 88, and adopted the Declaration of Hawaii. The Soviet society withdrew rather than be expelled, and was readmitted in 1989 only after the abuses were acknowledged.",
  "facts": [
   "Term: sluggish schizophrenia. Psychiatrist: Andrei Snezhnevsky.",
   "WPA Honolulu, 1977: condemnation passed 90 to 88, and the Declaration of Hawaii adopted.",
   "The Soviet society announced withdrawal in 1982 and left in early 1983. Readmitted at Athens, 1989.",
   "A diagnosis with no external check becomes an instrument. This is why operational criteria and reliability matter."
  ]
 },
 {
  "id": "rk22",
  "y": "1920",
  "cat": "The Experiment",
  "t": "They taught a baby to fear a white rat, and never undid it",
  "hook": "Little Albert was about eleven months old. Who he grew up to be is still argued over.",
  "what": "John Watson and Rosalie Rayner paired a white rat with a loud noise made by striking a steel bar behind an infant's head. After repeated pairings the rat alone produced fear, and the fear generalised to a rabbit, a dog, a fur coat, cotton wool and a Santa Claus mask. Watson recorded that the child left the hospital before any attempt was made to remove the fear.",
  "turn": "It is the founding demonstration that human emotion can be conditioned, and it is a study that could not be proposed today for a single minute. Who Albert actually was, and whether he was a healthy infant, remains genuinely unresolved.",
  "flag": "Disputed identity",
  "facts": [
   "Watson and Rayner, 1920, Johns Hopkins. Baseline testing at about nine months; conditioning from about eleven months.",
   "He was never deconditioned. The later counterconditioning work was with a different child, Peter, with Mary Cover Jones.",
   "Two candidate identities have been argued: Douglas Merritte, who had congenital hydrocephalus and died aged six, and William Albert Barger, who lived to 87.",
   "There is no consensus. Do not state as fact that the child was disabled."
  ]
 },
 {
  "id": "rk10",
  "y": "1932-1972",
  "cat": "The Experiment",
  "t": "A cure existed from 1947. They were never offered it.",
  "hook": "For 40 years the US Public Health Service watched 399 Black men with syphilis go untreated, telling them only that they had 'bad blood'.",
  "what": "The US Public Health Service enrolled 399 men with latent syphilis and 201 without, and followed them to see what untreated syphilis does. The men were told they were being treated for bad blood. Penicillin became the standard treatment in 1947. It was deliberately withheld, and the researchers acted to keep the men from getting it elsewhere. The study ran for forty years.",
  "turn": "Peter Buxtun, a PHS investigator, took it to the press. Jean Heller of the Associated Press broke it in July 1972. It ended within months, and it produced the entire modern architecture of research governance.",
  "facts": [
   "1932 to 1972, Macon County, Alabama. 399 with syphilis, 201 controls.",
   "Penicillin standard from 1947. Withheld deliberately.",
   "Ad Hoc Advisory Panel final report, 28 April 1973: ethically unjustified from its inception.",
   "National Research Act 1974, then the Belmont Report 1979. President Clinton apologised on 16 May 1997."
  ]
 },
 {
  "id": "rk19",
  "y": "1939",
  "cat": "The Experiment",
  "t": "They told children in an orphanage they were starting to stutter",
  "hook": "It was a 1939 master's thesis, never published in a journal, and later known as the 'Monster Study'. It came to light in 2001.",
  "what": "At the University of Iowa, Wendell Johnson and his graduate student Mary Tudor worked with 22 children from a soldiers' orphans' home. A group of children who did not stutter were repeatedly told they were showing signs of stuttering and were criticised for their speech, over about five months. Several developed lasting speech anxiety and withdrew from speaking.",
  "turn": "It stayed unpublished and largely unknown until the San Jose Mercury News exposed it in 2001. In 2007 the State of Iowa paid 925,000 dollars to six plaintiffs, three surviving participants and three estates.",
  "flag": "Read carefully",
  "facts": [
   "1939. Wendell Johnson and Mary Tudor, University of Iowa. 22 children from the Iowa Soldiers' Orphans' Home.",
   "Not all 22 received the harmful condition. The sample was split, and around six non-stuttering children received the sustained negative labelling.",
   "Whether it induced true stuttering is contested. That it caused psychological harm is not.",
   "Exposed by Jim Dyer, San Jose Mercury News, 2001. Settled August 2007 for 925,000 dollars."
  ]
 },
 {
  "id": "rk18",
  "y": "1946-1948",
  "cat": "The Experiment",
  "t": "A Tuskegee doctor also infected people in Guatemala",
  "hook": "The evidence sat in his own archived papers until a historian researching Tuskegee found them.",
  "what": "The US Public Health Service deliberately infected around 1,300 people in Guatemala with syphilis, gonorrhoea or chancroid, to test prophylaxis. The subjects were prisoners, soldiers, sex workers, orphans and patients at the national psychiatric hospital, aged from about ten to seventy-two. Infection was by inoculation and by deliberately infected sex workers. At least 83 deaths are recorded.",
  "turn": "The historian Susan Reverby found it around 2005 in the papers John Cutler had deposited at the University of Pittsburgh, and made it public in 2010. Hillary Clinton and Kathleen Sebelius issued a formal apology on 1 October 2010. US courts have dismissed the victims' claims. No compensation has been paid.",
  "facts": [
   "1946 to 1948. US Public Health Service, with NIH funding. Around 1,300 deliberately infected; about 5,500 involved overall.",
   "Cutler also worked on Tuskegee. The same officers, the same institution, the same decade.",
   "Uncovered by Susan Reverby, Wellesley College. Made public 2010.",
   "Presidential Commission report, Ethically Impossible, 2011."
  ]
 },
 {
  "id": "rk24",
  "y": "1951",
  "cat": "The Experiment",
  "t": "Her cells are still alive. Nobody asked her.",
  "hook": "HeLa became the first immortal human cell line and helped test the polio vaccine. Her family found out 22 years later.",
  "what": "Henrietta Lacks died of cervical cancer at Johns Hopkins in October 1951, aged 31. Cells taken from her tumour became HeLa, the first immortal human cell line, and were distributed worldwide. Consent for research use was never sought, which was not legally required then. Her family learned in 1973, when researchers approached them for blood samples without adequately explaining why.",
  "turn": "Rebecca Skloot's book in 2010 made it a public argument about tissue, consent and who profits. In 2013 the NIH gave the family a say over controlled access to the HeLa genome. Thermo Fisher settled in July 2023 and Novartis in February 2026, both on confidential terms.",
  "facts": [
   "Cells taken February 1951, cultured by George Gey. She died 4 October 1951.",
   "The family learned in 1973. Press coverage reached them in 1975.",
   "Rebecca Skloot, The Immortal Life of Henrietta Lacks, 2010.",
   "The consent question here is not historical. It is the ongoing argument about biobanking, which is why CIOMS addresses it directly."
  ]
 },
 {
  "id": "rk11",
  "y": "1956-1971",
  "cat": "The Experiment",
  "t": "Children were given hepatitis, and parents were offered a place in exchange",
  "hook": "At Willowbrook, joining the study could be the quickest way into an overcrowded school.",
  "what": "At Willowbrook State School on Staten Island, children with intellectual disability were deliberately infected with hepatitis, initially by being fed extracts made from the stool of infected patients. The defence was that the institution was so overcrowded that almost every child caught hepatitis anyway. Historians say the consent letter read as though the children were to be vaccinated, and when the school closed to new admissions, places were offered through the hepatitis unit.",
  "turn": "Henry Beecher listed it in his 1966 paper as one of twenty-two published studies that had put patients at serious risk without their knowledge. In February 1972 Geraldo Rivera filmed inside the building and called it the last great disgrace.",
  "facts": [
   "Saul Krugman, New York University, mid-1950s to around 1970. Willowbrook State School, Staten Island.",
   "Beecher, Ethics and Clinical Research, New England Journal of Medicine, 1966. Twenty-two examples. Willowbrook is example 16.",
   "The coercion is the ethical failure: consent given under conditions where refusal costs you a place.",
   "Beecher's paper is the direct ancestor of institutional review boards and research ethics committees."
  ]
 },
 {
  "id": "rk16",
  "y": "1957-1964",
  "cat": "The Experiment",
  "t": "The CIA helped pay for a psychiatrist's 'depatterning'",
  "hook": "In Montreal, Ewen Cameron tried to wipe out what he saw as illness, and much of his patients' memory went with it.",
  "what": "Ewen Cameron, director of the Allan Memorial Institute in Montreal and a past president of the American Psychiatric Association, treated patients with intensive daily ECT far above standard dosing, drug-induced sleep lasting days or weeks, LSD, and tape loops of repeated messages played for up to sixteen hours a day. He called it depatterning and psychic driving. Patients had come in with depression and anxiety. Some left unable to recognise their families.",
  "turn": "The funding came through a CIA front, the Society for the Investigation of Human Ecology, as part of MKUltra. It surfaced through Seymour Hersh in 1974 and the Church Committee in 1975. The CIA settled with nine Canadian plaintiffs in 1988, admitting nothing. A Quebec class action was authorised in July 2025.",
  "facts": [
   "Ewen Cameron, Allan Memorial Institute, McGill University, Montreal. CIA funding through MKUltra Subproject 68 ran from 1957 to 1960; the depatterning continued, with Canadian funding, until he left in 1964.",
   "MKUltra approved 13 April 1953, officially halted 1973, files ordered destroyed.",
   "Canadian federal ex gratia payments of one hundred thousand dollars went to 77 people; around 250 applicants were refused.",
   "He was not a fringe figure. He had been president of the American Psychiatric Association. That is the part worth sitting with."
  ]
 },
 {
  "id": "rk12",
  "y": "1961-1962",
  "cat": "The Experiment",
  "t": "Two in three went to 450 volts, in one version of the experiment",
  "hook": "Milgram asked whether ordinary people would follow orders to harm a stranger. The answer was more complicated than the famous number.",
  "what": "At Yale, volunteers were told to deliver escalating electric shocks to a stranger who was screaming in the next room. There were no real shocks. In the baseline condition, 26 of 40 people went to the maximum. Many were visibly distressed and continued anyway, because a man in a grey coat told them the experiment required it.",
  "turn": "Diana Baumrind attacked it in 1964: the distress was severe, foreseeable, and no debriefing could undo it. Milgram's finding and Baumrind's objection are both correct, and modern ethics committees exist to hold the two together.",
  "facts": [
   "August 1961 to May 1962, Yale University. 65 per cent, 26 of 40, went to 450 volts in the baseline condition.",
   "Obedience fell sharply with proximity to the victim, distance from the authority, and loss of institutional prestige.",
   "Diana Baumrind, American Psychologist, 1964, is the canonical ethical critique.",
   "Zimbardo's Stanford prison study, 1971, is the other famous example, and is now heavily criticised on method."
  ]
 },
 {
  "id": "rk15",
  "y": "1963-1979",
  "cat": "The Experiment",
  "t": "Two weeks unconscious, and they called it therapy",
  "hook": "At a private hospital in Sydney, deep sleep therapy was linked to 24 deaths over 16 years before a Royal Commission exposed it.",
  "what": "At Chelmsford Private Hospital, Harry Bailey sedated patients into a coma for up to two weeks, often combined with unmodified electroconvulsive therapy, for conditions including depression, addiction, obesity and premenstrual tension. Around 1,100 patients were treated. Many were not told what would be done to them. People died of pneumonia, thrombosis and drug toxicity.",
  "turn": "A Royal Commission ran from 1988 to 1990 under Justice John Slattery. Bailey died in 1985, before it began. It reshaped private psychiatric regulation and complaint handling in New South Wales.",
  "facts": [
   "Chelmsford Private Hospital, Pennant Hills, Sydney. Deep sleep therapy 1963 to 1979. About 1,100 patients.",
   "At least 24 deaths are directly attributed. Higher totals, up to around 85 including suicides among former patients, are cited by some sources.",
   "Royal Commission 1988 to 1990, Justice John Patrick Slattery.",
   "Nurses and journalists, not doctors, brought it into the open."
  ]
 },
 {
  "id": "rk17",
  "y": "1963",
  "cat": "The Experiment",
  "t": "Live cancer cells, injected into elderly patients, without the word cancer",
  "hook": "Twenty-two chronically ill patients were told it was a skin test. Three junior doctors refused, resigned and spoke out.",
  "what": "At the Jewish Chronic Disease Hospital in Brooklyn, Chester Southam of Sloan-Kettering injected live cultured cancer cells into 22 chronically ill elderly patients to study immune rejection. Consent was not obtained. The patients were told they would receive some cells. The word cancer was deliberately left out on the grounds that it would frighten them.",
  "turn": "Three physicians refused to take part and resigned. The New York Board of Regents found Southam and the hospital's medical director guilty of fraud, deceit and unprofessional conduct in 1966. Their licences were suspended for a year, the suspension stayed, and both were placed on probation. Southam was elected president of the American Association for Cancer Research about two years later.",
  "facts": [
   "1963. Chester M. Southam, with the hospital's medical director Emanuel Mandel. 22 patients.",
   "The cells were a cultured human cancer line, not the patients' own cells.",
   "Beecher listed the case in his 1966 paper. It is one of the twenty-two.",
   "Their licences were not revoked, a detail frequently reported wrongly. The sanction was a stayed suspension and probation."
  ]
 },
 {
  "id": "rk13",
  "y": "1970",
  "cat": "The Experiment",
  "t": "The sociologist who worked as the lookout",
  "hook": "He kept watch so the men inside would feel safe, noted their number plates, then visited their homes a year later in disguise.",
  "what": "Laud Humphreys studied anonymous sexual encounters between men in public lavatories. He took on the role the men themselves called the watchqueen, the lookout who warns of police. He recorded car registration numbers and obtained names and addresses through police contacts. About a year later he changed his appearance and his car, knocked on their doors, and interviewed them under the pretext of an unrelated health survey.",
  "turn": "His findings were humane and were used to argue against policing that ruined lives. His method exposed closeted men, at a time when exposure meant arrest, blackmail and the loss of everything. Both things are true, and that is exactly why the question is hard.",
  "facts": [
   "Tearoom Trade, published 1970. Doctorate awarded by Washington University in St Louis, 1968.",
   "The chancellor attempted, unsuccessfully, to have his doctorate rescinded. The department split and Humphreys left.",
   "The failures: deception, no informed consent, and a foreseeable risk of catastrophic harm.",
   "Good intentions and useful findings do not make a method ethical. This is the whole point of prior independent review."
  ]
 },
 {
  "id": "rk23",
  "y": "1971",
  "cat": "The Experiment",
  "t": "The prison study everyone quotes, and what the archives show",
  "hook": "Recordings show the guards were coached to be tough. The famous lesson rests on a study that was steered from the start.",
  "what": "Philip Zimbardo turned a Stanford basement into a mock prison with 24 students, planned for two weeks, stopped after six days. The conclusion, that situation overwhelms character, entered every textbook. Archived tapes later showed the guards were coached toward toughness rather than arriving at it themselves.",
  "turn": "Thibault Le Texier published the archival analysis in American Psychologist in 2019. The recruitment advert, which specified prison life, has been shown to attract more aggressive and authoritarian volunteers. The BBC Prison Study in 2006 produced the opposite dynamics. Zimbardo has rebutted all of it, and the argument is still live.",
  "flag": "Contested",
  "facts": [
   "August 1971, Stanford University. 24 students, planned two weeks, terminated after six days.",
   "Le Texier, Debunking the Stanford Prison Experiment, American Psychologist, 2019. Ben Blum, The Lifespan of a Lie, 2018.",
   "Carnahan and McFarland, 2007: the advertisement itself selected the sample.",
   "Reicher and Haslam, BBC Prison Study, 2006, failed to replicate and found the reverse."
  ]
 },
 {
  "id": "rk14",
  "y": "1973",
  "cat": "The Experiment",
  "t": "Eight people faked their way into psychiatric hospitals, or did they?",
  "hook": "Rosenhan's 1973 study shook psychiatry. Decades later, a journalist found records that do not match the paper.",
  "what": "David Rosenhan reported that eight pseudopatients presented to twelve hospitals saying they heard a voice saying empty, hollow, thud. All were admitted, all were diagnosed, and they stayed a mean of nineteen days. It was devastating for psychiatric diagnosis and it helped drive the operational criteria of DSM-III.",
  "turn": "In 2019 Susannah Cahalan could verify only two of the eight. She found that one pseudopatient's data had been excluded because his experience of care was positive, and reported discrepancies between the records and the published paper. She concluded some of it was misrepresented and possibly fabricated.",
  "flag": "Contested",
  "facts": [
   "Rosenhan, On being sane in insane places, Science, 1973. Eight pseudopatients, twelve hospitals, mean stay 19 days.",
   "Follow-up: a hospital warned to expect pseudopatients judged 41 of 193 admissions to be fakes. Rosenhan had sent none.",
   "Susannah Cahalan, The Great Pretender, 2019. The excluded pseudopatient was Harry Lando.",
   "The claim that Rosenhan's own record shows more florid symptoms than the paper admits is Cahalan's, and should be attributed to her."
  ]
 },
 {
  "id": "rk20",
  "y": "1967-1969",
  "cat": "The Cover-Up",
  "t": "A nursing assistant went to a newspaper, and changed the NHS",
  "hook": "At Ely Hospital in Cardiff, a complaint about cruelty was brushed aside internally, until the News of the World had it.",
  "what": "A nursing assistant reported cruelty, theft and neglect at Ely Hospital. Internally, nothing happened. The News of the World published it. Geoffrey Howe QC chaired the resulting inquiry and reported in 1969, finding ill-treatment, indifference and a management that had insulated itself from what was happening on its own wards.",
  "turn": "Richard Crossman created the Hospital Advisory Service, reporting directly to the Secretary of State, precisely so that long-stay hospitals could be inspected by somebody the hospital did not employ. Every subsequent UK inspection regime descends from it.",
  "facts": [
   "Report published 1969, Cmnd 3975, chaired by Geoffrey Howe QC.",
   "Led to the Hospital Advisory Service, later the Health Advisory Service.",
   "The pattern repeats: closed institution, low-status patients, internal complaint suppressed, external publication forces change.",
   "Its descendants today are the Care Quality Commission and the duty of candour."
  ]
 },
 {
  "id": "rk25",
  "y": "1998",
  "cat": "The Cover-Up",
  "t": "Held face down for twenty-five minutes after being racially abused",
  "hook": "David 'Rocky' Bennett died on a medium secure unit in 1998. The 2004 inquiry called NHS mental health services institutionally racist.",
  "what": "David Rocky Bennett, 38, was racially abused by another patient at the Norvic Clinic in Norwich in October 1998. He was moved, not the other patient. In the struggle that followed he was restrained face down by up to five nurses for around twenty-five minutes and died of positional asphyxia. The inquest recorded accidental death aggravated by neglect.",
  "turn": "Sir John Blofeld's independent inquiry, published in February 2004, described a festering abscess of racism in the NHS, found that black patients were seen as inherently more dangerous and restrained sooner and harder, and recommended a three-minute limit on prone restraint. The government did not accept that recommendation, nor the institutional racism finding.",
  "facts": [
   "Died 30 October 1998, Norvic Clinic, Norwich. Positional asphyxia after prolonged prone restraint.",
   "Independent inquiry chaired by Sir John Blofeld, published 12 February 2004.",
   "Black people in England are detained under the Mental Health Act at several times the rate of white people. This is examinable and it has not changed.",
   "The 2018 independent review of the Mental Health Act returned to exactly this problem."
  ]
 },
 {
  "id": "rk29",
  "y": "2000-2023",
  "cat": "The Cover-Up",
  "t": "More than 2,000 deaths, one county, and an inquiry that needed legal powers",
  "hook": "When only 11 of about 14,000 staff came forward to give evidence, the Essex inquiry was made statutory.",
  "what": "The Lampard Inquiry is examining the deaths of mental health inpatients in Essex, principally under Essex Partnership University NHS Foundation Trust and its predecessors, between January 2000 and December 2023. More than two thousand deaths are in scope. It began as a non-statutory inquiry and was given statutory powers because too few staff came forward to give evidence.",
  "turn": "It is the largest inquiry into mental health inpatient deaths this country has held, it is still hearing evidence, and it has not yet reported. Whatever it concludes will shape inpatient safety for the next twenty years.",
  "facts": [
   "Chair: Baroness Kate Lampard CBE. Statutory status announced 28 June 2023; Baroness Lampard appointed chair in September 2023.",
   "Scope: 1 January 2000 to 31 December 2023, more than 2,000 deaths.",
   "It succeeded the non-statutory inquiry chaired by Dr Geraldine Strathdee.",
   "Hearings continue in 2026. The final report is not expected before 2027 to 2028."
  ]
 },
 {
  "id": "rk26",
  "y": "2010",
  "cat": "The Cover-Up",
  "t": "He went in voluntarily. Eleven police officers restrained him.",
  "hook": "Olaseni Lewis was 23, and there is now a law with his name on it.",
  "what": "Seni Lewis was a voluntary patient at the Bethlem Royal Hospital. He was restrained face down by up to eleven Metropolitan Police officers across two prolonged periods, in two sets of handcuffs and leg restraints, and struck with batons. He died of cerebral hypoxia. At the 2017 inquest the jury found the force excessive, disproportionate and unreasonable, and a contributory factor. No officer was prosecuted or disciplined.",
  "turn": "His parents campaigned for eight years. The Mental Health Units (Use of Force) Act 2018, known as Seni's Law, received Royal Assent on 1 November 2018 and its main provisions commenced on 31 March 2022.",
  "facts": [
   "Died 2010, aged 23, at the Bethlem Royal Hospital, as an informal patient.",
   "Mental Health Units (Use of Force) Act 2018. A Private Member's Bill by Steve Reed MP.",
   "The Act requires a named responsible person per unit, a published policy on reducing force, staff training, and police body-worn video where practicable.",
   "It requires every use of force to be recorded and published annually, with the patient's ethnicity, age and disability. That data requirement is the point of it."
  ]
 },
 {
  "id": "rk21",
  "y": "2011",
  "cat": "The Cover-Up",
  "t": "He told the hospital. He told the regulator. Then he told the BBC.",
  "hook": "Senior nurse Terry Bryan's warnings about Winterbourne View went unanswered until Panorama filmed what he had described.",
  "what": "Terry Bryan, a nurse at Winterbourne View near Bristol, raised concerns with the management and with the regulator, and nothing was done. He went to the BBC. Panorama sent Joe Casey in undercover as a support worker. The footage broadcast on 31 May 2011 showed adults with learning disabilities being pinned down, slapped, taunted and doused with cold water.",
  "turn": "Eleven staff pleaded guilty in October 2012 and six were jailed. The hospital closed within a month of broadcast. Margaret Flynn's serious case review reported in 2012, and the government's Transforming Care programme followed in December 2012.",
  "facts": [
   "Panorama, Undercover Care: The Abuse Exposed, 31 May 2011. Operator: Castlebeck Care (Teesside) Ltd. Closed 24 June 2011.",
   "Eleven staff pleaded guilty at Bristol Crown Court, 26 October 2012. Six jailed, five suspended.",
   "Serious case review by Dr Margaret Flynn, published August 2012.",
   "Transforming Care, December 2012, then Building the Right Support, 2015. The number of people with learning disability in inpatient units has fallen far more slowly than promised."
  ]
 },
 {
  "id": "rk28",
  "y": "2017-2026",
  "cat": "The Cover-Up",
  "t": "Three hundred thousand hours of CCTV, and the UK's largest adult safeguarding investigation",
  "hook": "Muckamore Abbey. Patients who could not tell anyone what was being done to them.",
  "what": "Allegations of physical assault, punitive seclusion, over-medication and psychological cruelty against adults with severe learning disability at Muckamore Abbey Hospital in Northern Ireland emerged from a safeguarding referral in 2017. Police reviewed around 300,000 hours of CCTV, at one point identifying roughly 1,500 alleged offences on a single ward.",
  "turn": "A statutory public inquiry chaired by Tom Kark KC was established in October 2021 and reported on 18 June 2026 with 106 recommendations, finding systemic abuse, normalised poor practice, and regulation that did not work. Prosecutions continue.",
  "facts": [
   "Belfast Health and Social Care Trust. Safeguarding referral 2017.",
   "Inquiry announced September 2020, chair Tom Kark KC appointed June 2021, established under the Inquiries Act 2005 in October 2021.",
   "Final report 18 June 2026, 106 recommendations.",
   "Described as the largest adult safeguarding investigation in UK history."
  ]
 },
 {
  "id": "rk27",
  "y": "2019",
  "cat": "The Cover-Up",
  "t": "Eight years after Winterbourne, Panorama did it again",
  "hook": "Whorlton Hall had been inspected and rated good. The undercover footage said otherwise.",
  "what": "BBC Panorama broadcast undercover filming from Whorlton Hall in County Durham on 22 May 2019, showing adults with learning disabilities and autism being taunted, provoked and mistreated. The regulator was criticised over a 2015 inspection report that had been critical and was never published.",
  "turn": "Nine staff were charged. In April 2023 four were convicted and five acquitted, and in July 2023 all four received suspended sentences. Two lost appeals in October 2024. The hospital had closed in 2019.",
  "facts": [
   "Panorama, Undercover Hospital Abuse Scandal, 22 May 2019. Operator at broadcast: Cygnet Health Care.",
   "Nine charged with 27 counts. Verdicts at Teesside Crown Court, 27 April 2023: four convicted on ten counts, five acquitted.",
   "All four received suspended sentences in July 2023. No immediate custody.",
   "Winterbourne 2011, Whorlton Hall 2019, Muckamore Abbey through the 2020s. The pattern is the setting, not the individuals."
  ]
 }
];


/* ---- second batch ---- */



/* Order: by category, then by the first year in the label. */
(function(){
  var order = ["The Cage","The Experiment","The Cover-Up"];
  RECKONINGS.sort(function(a,b){
    var d = order.indexOf(a.cat) - order.indexOf(b.cat);
    if(d !== 0) return d;
    return (parseInt((a.y.match(/\d{4}/)||["0"])[0],10)) - (parseInt((b.y.match(/\d{4}/)||["0"])[0],10));
  });
})();

/* ------------------------------------------------------------------ */
/* THE RULES                                                           */
/* the documents, in order. shown as a separate timeline                */
/* ------------------------------------------------------------------ */

var CODES = [

{ y:1947, t:"The Nuremberg Code", who:"US Nuremberg Military Tribunal",
  born:"Written into the verdict of the Doctors' Trial, 19 August 1947.",
  core:"Ten principles. The voluntary informed consent of the human subject is absolutely essential. Prior animal work. An absolute right to withdraw at any moment. Avoid all unnecessary suffering.",
  why:"The first time in history that consent was stated as a requirement rather than a courtesy." },

{ y:1948, t:"The Declaration of Geneva", who:"World Medical Association",
  born:"Adopted at the 2nd General Assembly, Geneva, September 1948.",
  core:"A modern secular rewrite of the Hippocratic Oath. The health of my patient will be my first consideration. I will not use my medical knowledge to violate human rights and civil liberties, even under threat.",
  why:"Written by doctors who had just watched other doctors do the opposite. Revised repeatedly, most recently in 2017." },

{ y:1964, t:"The Declaration of Helsinki", who:"World Medical Association",
  born:"18th General Assembly, Helsinki. Revised many times since.",
  core:"Turns Nuremberg into workable research practice. Independent ethics committee review before the study starts. The wellbeing of the individual subject takes precedence over the interests of science and society. Standards for surrogate consent and for placebo controls.",
  why:"This is where research ethics committees and institutional review boards come from." },

{ y:1966, t:"Beecher, Ethics and Clinical Research", who:"Henry K. Beecher",
  born:"New England Journal of Medicine, 1966.",
  core:"Twenty-two published studies in which patients were put at serious risk without their knowledge or consent. Willowbrook is example 16. The Jewish Chronic Disease Hospital study is another.",
  why:"An insider naming his own profession's journals. It made federal oversight of clinical trials unavoidable." },

{ y:1973, t:"The Tuskegee Advisory Panel Report", who:"US Department of Health, Education and Welfare",
  born:"Final report, 28 April 1973.",
  core:"Found the study ethically unjustified from its inception and condemned the deliberate withholding of penicillin.",
  why:"Triggered the National Research Act of 1974, which created the commission that wrote Belmont." },

{ y:1979, t:"The Belmont Report", who:"US National Commission for the Protection of Human Subjects",
  born:"Commissioned after Tuskegee. Published 1979.",
  core:"Three principles. Respect for persons, meaning autonomy and informed consent, with extra protection for those with reduced autonomy. Beneficence, meaning maximise benefit and minimise harm. Justice, meaning the people who bear the burden of research should be the people who get the benefit.",
  why:"The three sentences that sit under every ethics application you will ever fill in." },

{ y:1982, t:"The CIOMS International Guidelines", who:"CIOMS with the World Health Organization",
  born:"Proposed guidelines 1982. Revised 1993, 2002 and 2016.",
  core:"How to apply Helsinki in multinational and low-resource settings. Protection against exploitation, community engagement, post-trial access to interventions, and biobanking.",
  why:"Because a consent form that works in Helsinki does not automatically work everywhere else." },

{ y:1984, t:"The Warnock Report", who:"UK Committee of Inquiry into Human Fertilisation and Embryology",
  born:"Chaired by Mary Warnock. Reported 1984.",
  core:"Set the fourteen-day limit on human embryo research, at the appearance of the primitive streak, and proposed the regulator that became the HFEA.",
  why:"A demonstration that a public inquiry can draw a line that the rest of the world then adopts." },

{ y:2005, t:"UNESCO Universal Declaration on Bioethics and Human Rights", who:"UNESCO",
  born:"Adopted by acclamation, 19 October 2005, Paris.",
  core:"The first international bioethics instrument built on human rights law. Extends beyond research to genetic discrimination, access to healthcare, and environmental bioethics.",
  why:"Moves the argument from what researchers may do to what people are owed." },

{ y:2012, t:"The Menlo Report", who:"US Department of Homeland Security",
  born:"Published 3 August 2012.",
  core:"Belmont rewritten for computers. Adds a fourth principle: respect for law and public interest, meaning legal due diligence, transparency of method, and accountability.",
  why:"Because the modern research subject is often a user who never met a researcher." }
];

/* ------------------------------------------------------------------ */
/* THE LIVES                                                           */
/* Written to the safe messaging standard. No methods. No             */
/* romanticising. The illness, and what changed afterwards.            */
/* ------------------------------------------------------------------ */

var LIVES = [

{ id:"lv01", n:"Vincent van Gogh", y:"1853 to 1890", t:"He wrote 900 letters and sold almost nothing",
  what:"Van Gogh had episodes of severe disturbance with periods of complete lucidity between them, and he described them himself, in writing, in extraordinary detail. He spent a year voluntarily at the asylum at Saint-Remy and painted The Starry Night from its window.",
  learn:"Every retrospective diagnosis offered for him, from epilepsy to bipolar disorder to porphyria, is speculation. What is not speculation is that his letters are among the best first-person accounts of psychiatric illness anybody has written." },

{ id:"lv02", n:"Virginia Woolf", y:"1882 to 1941", t:"She described the illness better than her doctors did",
  what:"Woolf had recurrent episodes of severe mood disturbance from adolescence, with periods of intense productivity and periods in which she could not work at all. She wrote about the experience of being ill with a precision the medicine of her time could not match.",
  learn:"Her account of the rest cure, and of being managed rather than heard, is still the sharpest patient critique of paternalistic psychiatry in English." },

{ id:"lv03", n:"Sylvia Plath", y:"1932 to 1963", t:"The Bell Jar is a clinical document",
  what:"Plath had severe recurrent depression, was treated with unmodified electroconvulsive therapy as a young woman, and wrote about it. She died in February 1963, weeks after the publication of the novel that describes it.",
  learn:"The Bell Jar is on reading lists because the phenomenology is accurate: the flattening, the loss of the future tense, the sense of being sealed off. Read it as a description, not as a mood." },

{ id:"lv04", n:"Marilyn Monroe", y:"1926 to 1962", t:"Everybody knew, and nobody helped",
  what:"Monroe had a documented history of psychiatric treatment, unstable early care including periods in foster homes and an orphanage, and substantial prescribed sedative use. Her death in August 1962 was ruled probable suicide.",
  learn:"The pattern is not glamour. It is childhood instability, prescribed sedatives, an industry with a financial interest in her continuing to work, and treatment fragmented across several doctors who were not talking to one another." },

{ id:"lv05", n:"Ian Curtis", y:"1956 to 1980", t:"Epilepsy, phenobarbital, and twenty-three years old",
  what:"The Joy Division singer had epilepsy diagnosed in his late teens and was treated with anticonvulsants including phenobarbital. He had seizures on stage. He died in May 1980, on the eve of the band's first American tour.",
  learn:"Depression is common in epilepsy and is under-treated. Some older anticonvulsants, phenobarbital among them, carry their own risk of depressed mood. Both facts are examinable and both were relevant here." },

{ id:"lv06", n:"Kurt Cobain", y:"1967 to 1994", t:"Chronic pain, opioids and undiagnosed illness",
  what:"Cobain had chronic abdominal pain that was never satisfactorily diagnosed, longstanding depression, and heroin dependence that he described as self-medication for the pain. He died in April 1994, aged 27.",
  learn:"Untreated chronic pain is a substance misuse risk factor, and the two conditions maintain each other. Treating one without the other rarely works." },

{ id:"lv07", n:"Amy Winehouse", y:"1983 to 2011", t:"Alcohol, not the drugs everybody assumed",
  what:"Winehouse had bulimia from her teens, depression, and severe alcohol dependence. She died in July 2011. The inquest recorded death by misadventure, from alcohol toxicity, with a blood alcohol level of 416 milligrams per decilitre.",
  learn:"She had stopped using illicit drugs. It was alcohol, and specifically the return to heavy drinking after a period of abstinence, that killed her. Loss of tolerance after abstinence is the single most dangerous moment in dependence." },

{ id:"lv08", n:"Robin Williams", y:"1951 to 2014", t:"He was told it was Parkinson's. It was not.",
  what:"In his final year Williams developed anxiety, paranoia, insomnia, delusions and a collapse in his ability to remember lines. He was diagnosed with early Parkinson's disease in May 2014. He died in August 2014. The autopsy found diffuse Lewy body disease, which the reviewing neuropathologist described as among the most severe he had seen.",
  learn:"His widow Susan Schneider Williams published the account in the journal Neurology in 2016, titled The terrorist inside my husband's brain. Read it. Then remember that fluctuating cognition, visual hallucinations, REM sleep behaviour disorder and parkinsonism are one disease, and that antipsychotics can be catastrophic in it." },

{ id:"lv09", n:"Chester Bennington", y:"1976 to 2017", t:"Childhood abuse, addiction, and the year he seemed well",
  what:"Bennington spoke publicly about sexual abuse in childhood, longstanding depression and alcohol and drug dependence. He died in July 2017, two months after the death of a close friend, and during a period in which those around him believed he was doing better.",
  learn:"Adverse childhood experiences show a dose-response relationship with adult mental illness. And apparent improvement is not the same as safety: a period of increased energy against persisting hopelessness is a recognised high-risk window." },

{ id:"lv10", n:"Anthony Bourdain", y:"1956 to 2018", t:"The one who told everybody else to ask for help",
  what:"Bourdain had a history of heroin and cocaine dependence in his twenties and spoke openly about depression across his career. He died in June 2018, in France, while filming.",
  learn:"Being articulate about mental illness is not protective. Neither is success, nor being loved, nor knowing exactly where the help is. This is worth saying out loud to trainees who assume insight equals safety." },

{ id:"lv11", n:"Caroline Flack", y:"1979 to 2020", t:"What a prosecution and a press cycle do to a person",
  what:"Flack had a documented history of depression. She died in February 2020, while awaiting trial, during sustained tabloid and social media coverage. Her family released a statement she had written but not published.",
  learn:"Legal proceedings, public humiliation and loss of role are acute risk factors, and they are modifiable ones. The inquest and the surrounding debate changed how the Crown Prosecution Service and sections of the press discuss mental health in ongoing cases." }
];

var LIVES_NOTE = "These are real people and the point of including them is what medicine failed to see, " +
  "not how they died. No method is described here and none should be. If you are struggling, " +
  "please speak to your GP, your occupational health service, or a crisis line in your country. " +
  "Doctors in England can contact NHS Practitioner Health, and the Royal College of Psychiatrists " +
  "runs a support service for psychiatrists and psychiatric trainees.";
