/* =====================================================================
   TEACHING, SECTION 11 — Substance Misuse and Addictions
   10 items, 11.1 to 11.10
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["11.1"] = { free:true,
  simple:"Every drug of misuse ends up doing one thing: raising dopamine in a small structure behind the eyes called the nucleus accumbens. They take completely different routes to get there, and the route is what determines the withdrawal, the overdose and the treatment.",
  teach:[
    "The common final pathway is the mesolimbic dopamine system, from the ventral tegmental area to the nucleus accumbens. Every substance of misuse increases dopamine there, directly or indirectly.",
    "Alcohol: potentiates GABA-A and inhibits NMDA glutamate receptors. Chronic use downregulates GABA and upregulates NMDA, so withdrawal is a glutamate-driven hyperexcitable state. That single fact explains withdrawal seizures, delirium tremens, and why benzodiazepines are the treatment.",
    "Alcohol is metabolised by alcohol dehydrogenase to acetaldehyde, then by aldehyde dehydrogenase to acetate. Disulfiram inhibits the second step, so acetaldehyde accumulates and the person feels poisoned.",
    "Zero-order kinetics: alcohol is eliminated at a fixed rate of roughly one unit per hour regardless of concentration, because the enzymes are saturated.",
    "UK epidemiology: around one in five adults drinks above the low-risk guideline of fourteen units a week for both sexes. Alcohol dependence affects a much smaller proportion, in the low single figures per cent.",
    "Cannabis: delta-9-tetrahydrocannabinol is a partial agonist at CB1 receptors. Cannabidiol is not intoxicating and may be mildly antipsychotic. The THC to CBD ratio has risen sharply in illicit cannabis over three decades.",
    "High-potency cannabis is associated with a substantially raised odds of psychotic disorder in case-control work, notably the South London studies, with a dose-response relationship. Causality remains contested but the association is robust.",
    "Synthetic cannabinoids are full CB1 agonists, unlike THC, which is why they produce far more severe toxicity including seizures, psychosis and death.",
    "Stimulants: cocaine blocks reuptake of dopamine, noradrenaline and serotonin. Amphetamines additionally reverse the dopamine transporter and displace vesicular stores, producing a larger and longer release.",
    "Cocaine's short half-life, around one hour, drives compulsive redosing and binge patterns. Crack, the freebase, is smoked, reaches the brain in seconds, and is more addictive for that reason alone.",
    "Cocaine causes coronary vasospasm and myocardial infarction in young people with normal arteries. Beta-blockers are traditionally avoided in acute cocaine chest pain because of unopposed alpha stimulation; benzodiazepines are first line.",
    "Phentermine, diethylpropion and pemoline are older stimulant-type agents. Pemoline was withdrawn for hepatotoxicity; the anorectic stimulants carry cardiovascular and pulmonary hypertension risks.",
    "Hallucinogens: LSD, psilocybin and mescaline are agonists at 5-HT2A receptors. They produce tolerance rapidly, cause no physical dependence and no withdrawal syndrome.",
    "Hallucinogen persisting perception disorder is the recurrence of perceptual disturbance long after the drug has cleared, and is a recognised ICD and DSM diagnosis.",
    "Solvents: toluene, butane and related volatile substances are lipid-soluble CNS depressants with rapid onset and offset. Sudden sniffing death is due to sensitisation of the myocardium to catecholamines, producing arrhythmia.",
    "Nitrites, poppers, are vasodilators rather than CNS depressants. Their specific hazard is methaemoglobinaemia, and they are lethal in combination with phosphodiesterase inhibitors.",
    "MDMA releases serotonin massively through transporter reversal, with dopamine and noradrenaline release as well. Its dangers are hyperthermia, hyponatraemia from excess water intake with SIADH, and serotonin syndrome.",
    "Benzodiazepines are positive allosteric modulators at GABA-A, increasing the frequency of chloride channel opening. Barbiturates increase channel opening duration and, unlike benzodiazepines, open the channel directly at high dose, which is why barbiturate overdose is lethal and benzodiazepine overdose usually is not.",
    "Opiates: agonists at mu, kappa and delta receptors. Mu mediates analgesia, euphoria, respiratory depression and dependence. Respiratory depression is the cause of death in overdose, and the pinpoint pupil is the diagnostic sign.",
    "Heroin, diamorphine, is a prodrug, more lipid-soluble than morphine and therefore faster into the brain. Methadone is a full mu agonist with a long half-life; buprenorphine is a partial agonist with a ceiling on respiratory depression and very high receptor affinity."
  ],
  cards:[
    ["What is the common final pathway for all substances of misuse?","Increased dopamine transmission in the mesolimbic pathway from the ventral tegmental area to the nucleus accumbens, reached by different mechanisms for each substance."],
    ["Explain the neurochemistry of alcohol withdrawal.","Chronic alcohol potentiates GABA-A and inhibits NMDA receptors. The brain compensates by downregulating GABA and upregulating NMDA. On withdrawal the unopposed glutamatergic drive produces a hyperexcitable state causing tremor, seizures and delirium tremens, which is why benzodiazepines are the treatment."],
    ["How do benzodiazepines and barbiturates differ at the GABA-A receptor, and why does it matter?","Benzodiazepines increase the frequency of chloride channel opening and require GABA to be present. Barbiturates increase the duration of opening and at high dose open the channel directly without GABA. This absence of a ceiling makes barbiturate overdose lethal where benzodiazepine overdose alone usually is not."],
    ["Contrast methadone and buprenorphine pharmacologically.","Methadone is a full mu agonist with a long half-life and no ceiling on respiratory depression. Buprenorphine is a partial mu agonist with very high receptor affinity and a ceiling effect on respiratory depression, making it safer in overdose but capable of precipitating withdrawal if given too early."],
    ["What is sudden sniffing death?","Fatal cardiac arrhythmia in volatile substance misuse, caused by sensitisation of the myocardium to catecholamines, typically precipitated by sudden exertion or fright during or shortly after inhalation."]
  ],
  note:[
    "Alcohol follows zero-order kinetics, eliminated at approximately one unit per hour.",
    "Disulfiram inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation.",
    "UK low-risk drinking guideline is fourteen units per week for both sexes.",
    "THC is a partial CB1 agonist; synthetic cannabinoids are full agonists and far more toxic.",
    "Cocaine has a half-life of about one hour, driving binge redosing.",
    "Hallucinogens produce rapid tolerance, no physical dependence and no withdrawal syndrome.",
    "MDMA deaths result from hyperthermia, hyponatraemia with SIADH, and serotonin syndrome.",
    "Pinpoint pupils and respiratory depression are the signs of opioid overdose."
  ],
  refs:["semaddict","stahl","addmed"] };

TEACH["11.2"] = { free:false,
  simple:"There is a long argument in addiction medicine about whether you should give a person the drug they are addicted to. One side says it keeps them alive and in contact. The other says it keeps them addicted. The evidence sides fairly clearly with the first, and the law sits somewhere in the middle.",
  teach:[
    "Harm reduction accepts that some people will continue to use and works to reduce the damage: needle and syringe programmes, take-home naloxone, opioid substitution, drug checking, and supervised consumption.",
    "Abstinence-oriented treatment aims at cessation. The two are not opposites; a good service offers both and moves people between them.",
    "The case for opioid substitution treatment: it reduces mortality, reduces injecting and blood-borne virus transmission, reduces criminal activity, and retains people in services. The mortality benefit is large and is the strongest single argument.",
    "Mortality in opioid dependence falls substantially while a person is in substitution treatment and rises sharply in the weeks immediately after leaving it, particularly the first four weeks.",
    "The case against: substitution maintains dependence, diverted methadone causes deaths in opioid-naive people including children, and the treatment can become indefinite without review.",
    "Methadone induction is the highest-risk period, because of its long and variable half-life and accumulation over the first days. Deaths cluster in the first two weeks of treatment.",
    "Buprenorphine is safer in overdose and easier to withdraw from, but can precipitate withdrawal if given before the person is in established withdrawal, and diversion is easier because it is sublingual.",
    "Injectable heroin-assisted treatment has good evidence in people who have repeatedly failed oral substitution, and is available in a small number of UK services.",
    "Naloxone is a competitive mu antagonist with a shorter half-life than most opioids, so re-narcotisation after an initial response is a real risk and observation is required. Take-home naloxone distribution reduces overdose deaths.",
    "Legal framework: the Misuse of Drugs Act 1971 classifies drugs as A, B or C, determining criminal penalties. The Misuse of Drugs Regulations 2001 place drugs in Schedules 1 to 5, determining what doctors may lawfully prescribe.",
    "The distinction is examinable. Class governs penalty; Schedule governs prescribing. Schedule 1 drugs have no recognised medical use and need a Home Office licence; Schedule 2 includes heroin, methadone, cocaine and amphetamine, with full controlled drug requirements.",
    "A specific Home Office licence is required to prescribe heroin, dipipanone or cocaine for the treatment of addiction. Any doctor may prescribe methadone or buprenorphine for addiction, and any doctor may prescribe heroin for organic pain.",
    "The Psychoactive Substances Act 2016 banned the production and supply, though not the possession, of any psychoactive substance not otherwise regulated, replacing the previous game of banning novel compounds one at a time.",
    "Controlled drug prescription requirements for Schedule 2 and 3: the form and strength, the total quantity in words and figures, the dose, and the prescriber's signature and date, with a thirty-day maximum recommended for instalment prescribing."
  ],
  cards:[
    ["Distinguish drug Class from drug Schedule.","Class, under the Misuse of Drugs Act 1971, is A, B or C and determines criminal penalties. Schedule, under the Misuse of Drugs Regulations 2001, is 1 to 5 and determines what a doctor may lawfully prescribe and under what controls."],
    ["Which drugs require a Home Office licence to prescribe for addiction?","Heroin, dipipanone and cocaine. Any doctor may prescribe methadone or buprenorphine for the treatment of addiction, and any doctor may prescribe heroin for the relief of organic pain."],
    ["State the principal argument for opioid substitution treatment.","It substantially reduces mortality, reduces injecting and blood-borne virus transmission, reduces offending and retains people in contact with services. Mortality rises sharply in the weeks after leaving treatment, particularly the first four."],
    ["Why is methadone induction the highest-risk period?","Methadone has a long and variable half-life and accumulates over the first days of treatment, so a dose that is tolerated on day one may be fatal by day four. Deaths cluster in the first two weeks."]
  ],
  note:[
    "Take-home naloxone distribution reduces overdose deaths.",
    "Naloxone has a shorter half-life than most opioids, so re-narcotisation requires observation.",
    "Buprenorphine can precipitate withdrawal if given before established withdrawal.",
    "The Psychoactive Substances Act 2016 bans production and supply, not possession, of unregulated psychoactive substances.",
    "Injectable heroin-assisted treatment has evidence in repeated failure of oral substitution.",
    "Schedule 1 drugs have no recognised medical use and require a Home Office licence."
  ],
  refs:["addmed","bnf","semaddict"] };

TEACH["11.3"] = { free:true,
  simple:"There is a difference between someone whose drinking is causing problems and someone whose body now needs alcohol to work normally. The first is a problem drinker. The second is dependent, and stopping suddenly can kill them.",
  teach:[
    "Edwards and Gross described the alcohol dependence syndrome in 1976, and its seven elements remain the framework for both ICD and DSM.",
    "The seven elements: narrowing of the drinking repertoire; salience of drink-seeking behaviour; increased tolerance; repeated withdrawal symptoms; relief or avoidance of withdrawal by further drinking; subjective compulsion to drink; and reinstatement after abstinence.",
    "ICD-11 requires two of three core features over twelve months: impaired control, increasing priority given to substance use, and physiological features of tolerance or withdrawal.",
    "Problem drinking is defined by consequence rather than by physiology: harm to health, relationships, work or the law, without necessarily any dependence.",
    "UK guidance: low risk is up to fourteen units per week for both sexes, spread over three or more days, with several drink-free days. Increasing risk and higher risk categories sit above this.",
    "One UK unit is 10 millilitres, or 8 grams, of pure alcohol. Units equal volume in litres multiplied by percentage ABV.",
    "Screening: AUDIT is the fully validated ten-item instrument, with a score of eight or more indicating hazardous drinking. AUDIT-C is the three-item consumption subset used in primary care. CAGE is brief but insensitive to hazardous drinking short of dependence.",
    "Alcohol-related physical disability: fatty liver, alcoholic hepatitis, cirrhosis and hepatocellular carcinoma; pancreatitis; cardiomyopathy; hypertension; peripheral neuropathy; and increased risk of oropharyngeal, oesophageal, breast and colorectal cancer.",
    "Alcohol-related brain damage: Wernicke's encephalopathy, Korsakoff's syndrome, cerebellar degeneration, central pontine myelinolysis, Marchiafava-Bignami disease and alcohol-related dementia.",
    "Wernicke's triad is confusion, ataxia and ophthalmoplegia, and all three are present in only a small minority. Treat on suspicion. It is a clinical diagnosis and untreated it progresses to Korsakoff's in most survivors.",
    "Parenteral thiamine is required in suspected Wernicke's because oral absorption is unreliable in this population. Never give glucose before thiamine, since a carbohydrate load can precipitate the encephalopathy.",
    "Withdrawal timeline: tremor, sweating, nausea and anxiety from six to twelve hours; seizures typically at twelve to forty-eight hours; alcoholic hallucinosis around twelve to twenty-four hours; delirium tremens characteristically at forty-eight to seventy-two hours.",
    "Alcoholic hallucinosis is usually auditory, occurs in clear consciousness, and is distinct from delirium tremens, which involves clouded consciousness and typically visual hallucinations.",
    "Delirium tremens carries appreciable mortality even when treated, historically much higher, and is a medical emergency.",
    "Detoxification regimens use a long-acting benzodiazepine, chlordiazepoxide in the UK, either fixed-dose reducing or symptom-triggered against a scale such as CIWA-Ar. Symptom-triggered regimens use less total drug and shorten admission.",
    "In significant hepatic impairment, lorazepam or oxazepam are preferred, being metabolised by glucuronidation without oxidative first-pass metabolism.",
    "Inpatient detoxification is indicated for a history of withdrawal seizures or delirium tremens, very high consumption typically above thirty units daily, significant comorbid physical or psychiatric illness, and lack of any social support. Otherwise community detoxification is safe and preferred."
  ],
  cards:[
    ["Name the seven elements of the alcohol dependence syndrome.","Narrowing of the drinking repertoire; salience of drink-seeking behaviour; increased tolerance; repeated withdrawal symptoms; relief or avoidance of withdrawal by further drinking; subjective compulsion to drink; and reinstatement after a period of abstinence. Described by Edwards and Gross in 1976."],
    ["Give the timeline of alcohol withdrawal.","Tremor, sweating, nausea and anxiety at six to twelve hours; seizures at twelve to forty-eight hours; alcoholic hallucinosis at twelve to twenty-four hours; and delirium tremens characteristically at forty-eight to seventy-two hours."],
    ["State Wernicke's triad and the rule about glucose.","Confusion, ataxia and ophthalmoplegia, all three present in only a minority, so treatment is given on suspicion. Parenteral thiamine must be given before any glucose load, since carbohydrate can precipitate the encephalopathy."],
    ["Which benzodiazepines are preferred in hepatic impairment and why?","Lorazepam and oxazepam, because they are metabolised by glucuronidation and do not undergo oxidative hepatic metabolism, so they do not accumulate in liver disease."],
    ["What are the indications for inpatient rather than community alcohol detoxification?","A history of withdrawal seizures or delirium tremens, very high consumption typically above thirty units daily, significant comorbid physical or psychiatric illness, and absence of social support."]
  ],
  note:[
    "One UK unit is 10 millilitres or 8 grams of pure alcohol.",
    "AUDIT is ten items; a score of eight or more indicates hazardous drinking. AUDIT-C is the three-item consumption subset.",
    "Alcoholic hallucinosis occurs in clear consciousness and is usually auditory; delirium tremens involves clouded consciousness and visual hallucinations.",
    "Symptom-triggered detoxification against CIWA-Ar uses less total benzodiazepine than fixed-dose regimens.",
    "Chlordiazepoxide is the standard UK detoxification agent.",
    "Untreated Wernicke's encephalopathy progresses to Korsakoff's syndrome in most survivors."
  ],
  refs:["semaddict","lishman","nice","maudsley"] };

TEACH["11.4"] = { free:false,
  simple:"People do not start using drugs because they want to be addicted. They start because it does something for them that nothing else was doing, and they continue for reasons that change completely once dependence has set in. The reason for starting and the reason for continuing are almost never the same reason.",
  teach:[
    "Initiation is driven by availability, peer group, curiosity, and the social meaning of the substance. Continuation is driven by reinforcement, both positive, the reward, and negative, the relief of withdrawal and distress.",
    "The distinction between liking and wanting is central. Robinson and Berridge's incentive sensitisation theory holds that with repeated use dopaminergic wanting sensitises while opioid-mediated liking does not, producing intense craving for a drug that is no longer enjoyed.",
    "Self-medication accounts for a real proportion of continuation. Stimulants in undiagnosed ADHD, alcohol in social anxiety, opioids in trauma-related distress and cannabis in insomnia are the common patterns.",
    "UK patterns: cannabis is the most used illicit drug by a wide margin. Powder cocaine use has risen markedly in young adults. Heroin use is concentrated in an ageing cohort with high mortality.",
    "The ageing UK heroin cohort is a specific public health problem. Deaths have risen because the same people are older, sicker and have longer injecting histories, not because more young people are starting.",
    "Recognition: injection sites and track marks, unexplained pupillary change, weight loss, epistaxis and septal perforation in intranasal use, dental erosion, and abrupt changes in function, finances or company.",
    "Investigations: urine drug screen is the standard, with immunoassay screening confirmed by chromatography. Hair testing gives a months-long window; saliva testing a very short one.",
    "Detection windows in urine, approximate: cocaine metabolites two to three days; opioids two to three days; amphetamines two to four days; benzodiazepines from days to several weeks with long-acting agents; cannabis up to three days in occasional use but several weeks in heavy chronic use because of fat solubility.",
    "Problem drug use is defined by the harm and the loss of control, not by the substance or the quantity, and this framing matters when a person's use is legal or prescribed.",
    "Dependence patterns differ. Opioids and alcohol produce clear physiological dependence with a defined withdrawal syndrome. Cocaine and cannabis produce psychological dependence with milder physical withdrawal; cocaine withdrawal is dominated by dysphoria, hypersomnia and craving rather than autonomic features.",
    "Biological explanations: dopaminergic reward, opioid and endocannabinoid signalling, and heritability. Twin and adoption studies give substantial heritability for substance use disorders, generally around half, with both substance-specific and general vulnerability components.",
    "ALDH2 deficiency, common in East Asian populations, causes flushing and nausea with alcohol and is strongly protective against alcohol dependence. It is the clearest single-gene protective effect in psychiatry.",
    "Psychological explanations: classical conditioning of cues, operant reinforcement, social learning and modelling, expectancy, and the role of adverse childhood experience.",
    "Socio-cultural explanations: availability and price, deprivation, social exclusion, cultural norms about intoxication, and drug policy itself. Price elasticity is real; consumption falls when real price rises.",
    "Alexander's Rat Park experiments suggested that isolated caged rats self-administered far more morphine than rats in an enriched social environment. Frequently cited, methodologically limited, and not straightforwardly replicated, but the environmental point stands.",
    "Cultural factors shape which drugs are used, how, and with what meaning: khat in Somali communities, alcohol abstinence norms in some faith communities, and the different social framing of cannabis across generations."
  ],
  cards:[
    ["Explain incentive sensitisation theory.","Robinson and Berridge's account in which repeated substance use sensitises the dopaminergic wanting system while the opioid-mediated liking system does not sensitise. The result is intense craving for a drug that is no longer experienced as pleasurable."],
    ["Give approximate urinary detection windows for the common drugs.","Cocaine metabolites two to three days; opioids two to three days; amphetamines two to four days; benzodiazepines days to several weeks depending on half-life; cannabis up to three days in occasional use but several weeks in heavy chronic use owing to fat solubility."],
    ["Which genetic variant is strongly protective against alcohol dependence?","ALDH2 deficiency, common in East Asian populations, which impairs acetaldehyde metabolism and produces flushing and nausea after alcohol. It is the clearest single-gene protective effect in psychiatry."],
    ["How does cocaine withdrawal differ from opioid withdrawal?","Cocaine withdrawal is predominantly psychological, characterised by dysphoria, hypersomnia, increased appetite and intense craving, without prominent autonomic features. Opioid withdrawal produces a marked autonomic syndrome with lacrimation, rhinorrhoea, piloerection, myalgia, diarrhoea and mydriasis."]
  ],
  note:[
    "Heritability of substance use disorders is around fifty per cent in twin and adoption studies.",
    "Cannabis is the most used illicit drug in the UK; powder cocaine use has risen in young adults.",
    "UK heroin-related deaths reflect an ageing cohort with long injecting histories.",
    "Urine immunoassay screening should be confirmed by chromatography.",
    "Hair testing gives a months-long detection window; saliva a very short one.",
    "Price elasticity is real: consumption falls as real price rises."
  ],
  refs:["semaddict","addmed","bhugra"] };

TEACH["11.5"] = { free:false,
  simple:"A great many people with serious mental illness also use drugs, and each condition makes the other worse. Services have historically dealt with this by sending the person back and forth between two teams, each saying the other should go first.",
  teach:[
    "Dual diagnosis, or comorbidity, is the co-occurrence of substance misuse with another mental disorder. It is the norm rather than the exception in severe mental illness.",
    "Rates: around half of people with a psychotic illness have a lifetime substance use disorder, several times the general population rate. Rates in personality disorder and bipolar disorder are also high.",
    "Four explanatory models: substance use causes the disorder; the disorder leads to substance use, the self-medication hypothesis; a shared vulnerability underlies both; and the two interact bidirectionally over time. All four are probably true of different people.",
    "Cannabis and psychosis: a dose-response association, stronger with high-potency preparations and earlier age of first use, with the AKT1 and possibly COMT genotype proposed as moderators. Evidence for causal contribution has strengthened, though confounding by shared vulnerability is not fully excluded.",
    "Substance-induced psychotic disorder is distinguished from a primary psychosis by temporal relationship and by resolution, conventionally within a month of abstinence. A substantial minority of people given this diagnosis go on to receive a diagnosis of schizophrenia within a few years.",
    "Substance use in schizophrenia worsens outcome: more relapse, more admission, poorer adherence, more violence, more suicide, and worse physical health.",
    "Alcohol and depression: heavy drinking causes depressive symptoms directly, and much apparent depression in dependent drinkers resolves within two to four weeks of abstinence without antidepressants. Assess after a period of abstinence before treating.",
    "Alcohol is present in a large proportion of completed suicides and markedly increases impulsive self-harm, being both a chronic risk factor and an acute disinhibitor.",
    "Classification: ICD-11 and DSM-5 both allow independent diagnoses to be recorded alongside a substance use disorder, and both provide substance-induced disorder categories where the causal link is clear.",
    "Medical complications: blood-borne viruses, hepatitis C above all, with injecting drug use the dominant transmission route in the UK; endocarditis; deep vein thrombosis and injection site infection; and overdose.",
    "Public health: injecting drug use drives hepatitis C prevalence, and direct-acting antivirals have made elimination a realistic target in people who inject drugs where services can reach them.",
    "Social complications: homelessness, unemployment, offending, child safeguarding concerns, and domestic violence. Parental substance misuse is one of the commonest features of serious case reviews.",
    "Service models: serial treatment, one after the other; parallel treatment, both at once by separate teams; and integrated treatment, one team addressing both. Integrated treatment is the recommended model and the one least often available.",
    "The recurring failure is exclusion. A person is refused mental health treatment until they stop using, and refused substance treatment until their mental state is stable, so they receive nothing."
  ],
  cards:[
    ["Name the four explanatory models of dual diagnosis.","Substance use causes the psychiatric disorder; the psychiatric disorder leads to substance use, the self-medication hypothesis; a common vulnerability underlies both; and the two interact bidirectionally over time."],
    ["How should depression in a dependent drinker be assessed?","After a period of abstinence, conventionally two to four weeks, since a large proportion of depressive symptoms in heavy drinkers resolve with abstinence alone and do not require antidepressant treatment."],
    ["Distinguish substance-induced psychosis from a primary psychotic disorder.","Substance-induced psychosis has a clear temporal relationship to intoxication or withdrawal and resolves, conventionally within a month of abstinence. A substantial minority of those so diagnosed subsequently receive a diagnosis of schizophrenia."],
    ["Compare serial, parallel and integrated treatment models.","Serial treatment addresses one disorder then the other; parallel treatment addresses both simultaneously through separate teams; integrated treatment addresses both within a single team. Integrated treatment is recommended and least often available."]
  ],
  note:[
    "Around half of people with a psychotic illness have a lifetime substance use disorder.",
    "Cannabis and psychosis show a dose-response relationship, stronger with high-potency preparations and earlier onset of use.",
    "Injecting drug use is the dominant route of hepatitis C transmission in the UK.",
    "Alcohol is present in a large proportion of completed suicides.",
    "Parental substance misuse is among the commonest features in serious case reviews.",
    "Exclusion from both services is the characteristic system failure in dual diagnosis."
  ],
  refs:["semaddict","addmed","nice"] };

TEACH["11.6"] = { free:false,
  simple:"Assessing a drug user is mostly arithmetic and honesty: what, how much, how often, by what route, since when, and what happens when they stop. Get that wrong and every treatment decision downstream is wrong too.",
  teach:[
    "The core history: substance by substance, the quantity, the frequency, the route, the duration, the time of last use, the pattern across a typical day, and the money involved.",
    "Route matters more than quantity for risk. Injecting brings overdose, blood-borne virus, endocarditis and thrombosis; smoking brings respiratory harm; intranasal brings septal damage.",
    "Ask about periods of abstinence and what ended them, previous treatment episodes and their outcome, and previous overdoses, which are the strongest predictor of future overdose.",
    "Assess dependence explicitly against ICD-11 criteria rather than inferring it from quantity. Severity of Dependence Scale and the Leeds Dependence Questionnaire are the usual instruments.",
    "Examination: injection sites, signs of intoxication or withdrawal, pupils, nasal septum, dentition, and the physical complications of the specific substance.",
    "Investigations: urine drug screen before prescribing any substitution, blood-borne virus screening with consent, liver function, full blood count, and pregnancy testing where relevant.",
    "Opioid withdrawal signs: lacrimation, rhinorrhoea, yawning, piloerection, mydriasis, myalgia, abdominal cramps, diarrhoea, vomiting, tachycardia and hypertension. Objective and scored with COWS or the objective opiate withdrawal scale.",
    "Opioid withdrawal is deeply unpleasant but not usually life-threatening in a physically healthy adult. This distinguishes it from alcohol and benzodiazepine withdrawal, both of which can kill.",
    "Opioid withdrawal timeline: heroin, onset six to twelve hours, peak thirty-six to seventy-two hours, resolving over five to seven days. Methadone, onset one to three days, peak later, and a course lasting several weeks because of the long half-life.",
    "Stimulant withdrawal: the crash, with dysphoria, hypersomnia, hyperphagia, agitation and intense craving. No specific pharmacological treatment has good evidence.",
    "Benzodiazepine withdrawal: anxiety, insomnia, perceptual hypersensitivity, tremor, and seizures. Withdraw by switching to an equivalent dose of diazepam and reducing slowly, over months where necessary.",
    "Opioid substitution: methadone initiated at a low dose, commonly 10 to 30 milligrams, increased cautiously over days with supervised consumption during induction. Buprenorphine started only in established withdrawal to avoid precipitated withdrawal.",
    "Detoxification from opioids uses lofexidine, an alpha-2 agonist, for autonomic symptoms, or a tapered course of buprenorphine or methadone. Symptomatic treatment for cramps, diarrhoea and nausea alongside.",
    "Relapse prevention: naltrexone, an opioid antagonist, for a motivated abstinent person, after opioid-free confirmation, since it will otherwise precipitate withdrawal.",
    "Tolerance loss after abstinence is the mechanism behind most opioid deaths. Release from prison, discharge from hospital and completion of detoxification are the three highest-risk moments, and every person should leave those settings with naloxone.",
    "Psychosocial treatment alongside is not optional. Contingency management has the best evidence in stimulant use disorder, where no effective pharmacotherapy exists."
  ],
  cards:[
    ["List the signs of opioid withdrawal and name a scale.","Lacrimation, rhinorrhoea, yawning, piloerection, mydriasis, myalgia, abdominal cramps, diarrhoea, vomiting, tachycardia and hypertension. Scored with the Clinical Opiate Withdrawal Scale or the objective opiate withdrawal scale."],
    ["Which withdrawal syndromes can kill, and which cannot?","Alcohol and benzodiazepine withdrawal can be fatal through seizures and delirium. Opioid withdrawal is severely unpleasant but not usually life-threatening in a physically healthy adult."],
    ["When are people at highest risk of fatal opioid overdose?","At moments of lost tolerance following abstinence: release from prison, discharge from hospital, and completion of detoxification. Naloxone should be supplied at each of these transitions."],
    ["Why must buprenorphine be started only in established withdrawal?","Because it is a partial agonist with very high receptor affinity, it displaces full agonists from the mu receptor while producing less activation, precipitating an acute withdrawal syndrome if given while a full agonist is still occupying receptors."],
    ["Which psychosocial treatment has the best evidence in stimulant use disorder?","Contingency management, the provision of tangible incentives for verified abstinence, which is the best-evidenced intervention where no effective pharmacotherapy exists."]
  ],
  note:[
    "Previous overdose is the strongest predictor of future overdose.",
    "Heroin withdrawal peaks at 36 to 72 hours; methadone withdrawal is later and lasts weeks.",
    "Lofexidine is an alpha-2 agonist used for the autonomic symptoms of opioid withdrawal.",
    "Naltrexone precipitates withdrawal unless the person is confirmed opioid-free.",
    "Benzodiazepine withdrawal is managed by switching to diazepam and reducing slowly.",
    "Stimulant withdrawal has no pharmacological treatment with good evidence."
  ],
  refs:["addmed","maudsley","nice"] };

TEACH["11.7"] = { free:false,
  simple:"With alcohol the assessment has one extra question that everything else hangs on: if this person stops today, will they have a seizure. That answer decides where they are treated, how fast, and whether they can be sent home.",
  teach:[
    "History: units per day and per week, pattern across the day, time of the first drink, time of the last drink, and the longest recent period of abstinence and what happened during it.",
    "Morning drinking, relief drinking and drinking to prevent shakes are the practical markers of physiological dependence and matter more than the total quantity.",
    "Previous withdrawal seizures or delirium tremens is the single most important question in the history, because it predicts recurrence and determines the setting of detoxification.",
    "Kindling: repeated cycles of withdrawal produce progressively more severe withdrawal, so the fifth detoxification is more dangerous than the first. Untreated withdrawal is not benign.",
    "Screening instruments: AUDIT, ten items, hazardous drinking at eight or more; AUDIT-C, three items; SADQ, the Severity of Alcohol Dependence Questionnaire, which grades dependence and guides starting benzodiazepine dose; and CIWA-Ar for monitoring withdrawal.",
    "Examination and investigation: stigmata of chronic liver disease, neuropathy, cerebellar signs, and cognitive screening. Bloods for full blood count with MCV, liver function with gamma-GT, clotting, urea and electrolytes, magnesium and glucose.",
    "Biological markers: raised gamma-GT and raised MCV are the classical pair but neither is specific. Carbohydrate-deficient transferrin is more specific for sustained heavy drinking. All are supportive rather than diagnostic.",
    "Detoxification: chlordiazepoxide is the UK standard, either fixed-dose reducing over five to seven days or symptom-triggered against CIWA-Ar. Diazepam is an alternative; lorazepam or oxazepam in hepatic impairment.",
    "Thiamine: oral prophylaxis for all, and parenteral thiamine, as Pabrinex, for anyone with suspected Wernicke's or with risk factors including poor diet, vomiting, hepatic impairment or acute illness. Give thiamine before glucose.",
    "Anaphylaxis to parenteral thiamine is rare but real, so it is given where resuscitation facilities are available. This is not a reason to withhold it.",
    "Relapse prevention pharmacotherapy: acamprosate, thought to modulate glutamatergic transmission, started as soon as abstinence is achieved; naltrexone, an opioid antagonist reducing the reward of drinking and useful in reducing heavy drinking days; and disulfiram, an aversive agent requiring supervision and full understanding.",
    "Nalmefene is licensed for reduction of consumption rather than abstinence, taken as needed on days when drinking is anticipated.",
    "Disulfiram must never be started until the person has been alcohol-free for at least 24 hours, and the reaction with alcohol includes flushing, vomiting, tachycardia, hypotension and, rarely, cardiovascular collapse.",
    "Psychosocial treatment: motivational interviewing, CBT-based relapse prevention, behavioural couples therapy, social behaviour and network therapy, and facilitated referral to mutual aid.",
    "Brief interventions in non-specialist settings work. Screening plus five to ten minutes of structured advice reduces consumption in hazardous drinkers, one of the best-evidenced and least-delivered interventions in medicine.",
    "Assess and record cognitive function before concluding that a person is unmotivated. Alcohol-related brain damage frequently presents as apparent non-engagement."
  ],
  cards:[
    ["What is kindling in alcohol withdrawal?","The phenomenon whereby repeated cycles of withdrawal produce progressively more severe withdrawal on each occasion, so that later detoxifications carry higher risk of seizure and delirium than earlier ones."],
    ["Name the three principal relapse prevention drugs in alcohol dependence and their mechanisms.","Acamprosate, which modulates glutamatergic transmission and is started on achieving abstinence; naltrexone, an opioid antagonist that reduces the rewarding effect of drinking; and disulfiram, an aldehyde dehydrogenase inhibitor acting as an aversive agent and requiring supervision."],
    ["Which single history item most determines the setting of detoxification?","A previous withdrawal seizure or episode of delirium tremens, which predicts recurrence and indicates inpatient rather than community detoxification."],
    ["Which biological markers support a history of heavy drinking?","Raised gamma-GT and raised mean corpuscular volume, neither specific, and carbohydrate-deficient transferrin, which is more specific for sustained heavy consumption. All are supportive rather than diagnostic."],
    ["What must be true before disulfiram is started?","The person must have been alcohol-free for at least 24 hours, must fully understand the reaction, and ideally should have supervised administration. The disulfiram-alcohol reaction includes flushing, vomiting, tachycardia, hypotension and rarely cardiovascular collapse."]
  ],
  note:[
    "SADQ grades severity of dependence and guides the starting benzodiazepine dose.",
    "CIWA-Ar is the monitoring scale for symptom-triggered regimens.",
    "Parenteral thiamine carries a rare risk of anaphylaxis but must not be withheld on that basis.",
    "Nalmefene is licensed for reduction of consumption rather than abstinence.",
    "Brief intervention in non-specialist settings reduces consumption in hazardous drinkers.",
    "Apparent non-engagement in alcohol dependence may be alcohol-related brain damage."
  ],
  refs:["nice","maudsley","semaddict","addmed"] };

TEACH["11.8"] = { free:false,
  simple:"Prevention campaigns that tell young people drugs are terrible do not work, and some make things worse. What works is less dramatic: making the drug harder to get, more expensive, and less normal.",
  teach:[
    "The evidence hierarchy in prevention is close to inverted against public expectation. Population-level structural measures work; individual fear-based education largely does not.",
    "Price and availability are the strongest levers. Minimum unit pricing, taxation, restricted licensing hours and reduced outlet density all reduce consumption and harm.",
    "Scotland's minimum unit pricing, 2018, was followed by a fall in alcohol-specific deaths and in off-trade sales, with the effect concentrated in the heaviest-drinking households.",
    "Fear arousal and shock tactics have consistently failed and can increase use by making the substance appear exciting or exaggerating perceived prevalence.",
    "Information-only education raises knowledge without changing behaviour. This is one of the most replicated null findings in prevention research.",
    "Social norms approaches work by correcting overestimates. Young people systematically overestimate how much their peers drink and use, and correcting that estimate reduces their own use.",
    "Life skills and resistance skills training, delivered over multiple sessions with booster sessions, has modest but real effects; single one-off sessions do not.",
    "Family-based programmes that improve parental monitoring and family communication have among the better evidence in adolescents.",
    "DARE, the American school programme, is the standard cautionary example: enormously popular, extensively delivered, and repeatedly shown to have no effect on subsequent substance use.",
    "Cultural appropriateness is not decoration. A campaign delivered in the wrong language, through the wrong channel, or against the grain of a community's own norms achieves nothing and can damage trust.",
    "Work with existing community structures: faith leaders, community elders, and community organisations, rather than around them. This is the practical meaning of culturally appropriate prevention.",
    "Khat provides a concrete UK example: use is concentrated in Somali, Yemeni and Ethiopian communities, was banned as a Class C drug in 2014, and the community held divided views on whether the ban helped or drove use underground.",
    "Different communities have different baselines. Alcohol abstinence is normative in some faith communities, so prevention there addresses concealment and late presentation rather than consumption.",
    "Harm reduction is prevention too: needle exchange prevents hepatitis C, naloxone prevents death, and drug checking at festivals prevents poisoning. These are preventive interventions that do not require anyone to stop using first."
  ],
  cards:[
    ["Which prevention approaches have the strongest evidence, and which have failed?","Structural population measures work: price, taxation, restricted availability and outlet density. Fear-based shock tactics and information-only education have consistently failed, and fear arousal can increase use. DARE is the standard example of a popular programme repeatedly shown to be ineffective."],
    ["How does the social norms approach work?","Young people systematically overestimate the prevalence and quantity of peer substance use. Presenting accurate local data corrects this overestimate and reduces the individual's own consumption."],
    ["What does culturally appropriate prevention mean in practice?","Delivery through the community's own structures, in its own language and idiom, working with faith leaders, elders and community organisations rather than around them, and addressing the community's actual baseline rather than an assumed one."]
  ],
  note:[
    "Scottish minimum unit pricing, 2018, was followed by falls in alcohol-specific deaths.",
    "Information-only education raises knowledge without changing behaviour.",
    "Multi-session skills training with boosters has modest effects; one-off sessions do not.",
    "Family programmes improving parental monitoring have good adolescent evidence.",
    "Khat was made a Class C drug in the UK in 2014.",
    "Needle exchange, naloxone and drug checking are preventive measures that do not require abstinence."
  ],
  refs:["semaddict","bhugra","nice"] };

TEACH["11.9"] = { free:false,
  simple:"You can become addicted to something you never swallow. Gambling is the one everyone agrees on, because it produces the same craving, the same tolerance, the same withdrawal and the same brain changes as a drug does, without a substance anywhere in the story.",
  teach:[
    "Gambling disorder is the only behavioural addiction with full status in both systems. DSM-5 moved it in 2013 from the impulse control disorders into Substance-Related and Addictive Disorders, the first non-substance addiction so classified.",
    "The justification was empirical: shared clinical features of tolerance, withdrawal, craving and loss of control, shared genetics, shared mesolimbic dopamine involvement, and shared response to treatment.",
    "ICD-11 recognises gambling disorder and, separately, gaming disorder, both under disorders due to addictive behaviours, and both specified as predominantly online or predominantly offline.",
    "Gaming disorder in ICD-11 requires impaired control over gaming, increasing priority given to gaming over other interests, and continuation despite negative consequences, normally over at least twelve months.",
    "The inclusion of gaming disorder was contested. Critics argued the evidence base was thinner than for gambling and that pathologising a common activity risks false positives, particularly in adolescents.",
    "Compulsive sexual behaviour disorder appears in ICD-11 under impulse control disorders, deliberately not as an addiction, because the working group judged the addiction evidence insufficient.",
    "Internet addiction, shopping addiction and exercise addiction have no formal diagnostic status in either system.",
    "Gambling epidemiology: problem gambling affects well under one per cent of UK adults, with a considerably larger group at risk. Rates are higher in men, in younger adults, and in those with mental illness.",
    "Gambling carries a markedly raised suicide risk, higher than for most substance use disorders, and this is under-recognised in general psychiatric practice.",
    "Fixed odds betting terminals, online in-play betting and smartphone access have changed the risk profile by shortening the event frequency, which is the single strongest structural determinant of harm.",
    "Dopamine agonist therapy in Parkinson's disease causes impulse control disorders including pathological gambling, hypersexuality, compulsive shopping and binge eating, in a substantial minority of treated patients. This is examinable and clinically important.",
    "Aripiprazole, a dopamine partial agonist, has a recognised association with pathological gambling and other impulse control disorders, carrying a specific warning.",
    "Treatment: CBT has the best evidence in gambling disorder. Naltrexone and nalmefene have some evidence, particularly where there is a family history of alcohol dependence.",
    "Self-exclusion schemes, GAMSTOP for online operators in the UK, and mutual aid through Gamblers Anonymous.",
    "Always ask about gambling in debt, in unexplained financial crisis, and in anyone on dopamine agonists or aripiprazole. It is not volunteered."
  ],
  cards:[
    ["Which behavioural addictions have formal diagnostic status, and where?","Gambling disorder in both DSM-5, moved in 2013 into Substance-Related and Addictive Disorders, and ICD-11. Gaming disorder in ICD-11 only. Compulsive sexual behaviour disorder appears in ICD-11 under impulse control disorders, deliberately not as an addiction."],
    ["Which drugs are associated with iatrogenic impulse control disorders?","Dopamine agonists used in Parkinson's disease, causing pathological gambling, hypersexuality, compulsive shopping and binge eating in a substantial minority; and aripiprazole, a dopamine partial agonist, which carries a specific warning for pathological gambling."],
    ["What is the strongest structural determinant of gambling harm?","Event frequency: the shorter the interval between stake and outcome, the greater the harm. Fixed odds betting terminals, in-play betting and smartphone access have all shortened it."],
    ["Which treatments have evidence in gambling disorder?","Cognitive behavioural therapy has the best evidence. Naltrexone and nalmefene have some support, particularly where there is a family history of alcohol dependence. Self-exclusion schemes and mutual aid are used alongside."]
  ],
  note:[
    "DSM-5 moved gambling disorder out of impulse control disorders in 2013.",
    "ICD-11 gaming disorder normally requires a twelve-month duration and was contested on evidence grounds.",
    "Problem gambling affects well under one per cent of UK adults but carries markedly raised suicide risk.",
    "Internet, shopping and exercise addiction have no formal diagnostic status.",
    "GAMSTOP is the UK online self-exclusion scheme.",
    "Gambling is not volunteered; it must be asked about directly."
  ],
  refs:["icd11","dsm5","semaddict","maudsley"] };

TEACH["11.10"] = { free:true,
  simple:"If you tell someone why they should stop drinking, they will explain why they cannot. If you ask them why they might want to, they explain it to themselves, and people believe themselves. That reversal is the whole of motivational interviewing.",
  teach:[
    "Motivational interviewing was developed by William Miller and Stephen Rollnick. It is a collaborative conversation style for strengthening a person's own motivation and commitment to change.",
    "The founding observation was that therapist style predicted client outcome. Confrontational counselling produced more resistance and worse drinking outcomes; empathic counselling produced better ones.",
    "Ambivalence is treated as normal, not as denial or pathology. Almost everyone with a substance problem simultaneously wants to change and wants to continue.",
    "The spirit of MI has four elements: partnership, acceptance, compassion and evocation. Evocation is the crucial one: the motivation is drawn out of the person rather than installed by the clinician.",
    "The four processes, in order: engaging, focusing, evoking and planning. They are recursive rather than strictly sequential.",
    "The core skills, OARS: Open questions, Affirmations, Reflective listening, and Summaries.",
    "Change talk is any statement by the person favouring change, and it predicts actual behaviour change. Sustain talk favours the status quo.",
    "The DARN-CAT taxonomy of change talk: preparatory change talk is Desire, Ability, Reason and Need; mobilising change talk is Commitment, Activation and Taking steps. Mobilising change talk is the stronger predictor.",
    "The righting reflex is the clinician's instinct to correct and to argue for change. Following it reliably produces sustain talk, because the person then argues the other side.",
    "Rolling with resistance, later reframed as working with discord, means not opposing it directly. Reflect it, reframe it, or shift focus.",
    "Developing discrepancy between present behaviour and the person's own stated values or goals is the engine of change. The discrepancy must be the person's own, not the clinician's.",
    "Supporting self-efficacy is a core task, since a person who wants to change but believes they cannot will not attempt it. Past successes, however small, are the material.",
    "MI is often paired with Prochaska and DiClemente's stages of change: precontemplation, contemplation, preparation, action, maintenance, and relapse as part of the cycle rather than as failure. The two models are independent and the stage model is empirically contested.",
    "MI evidence: effective in alcohol and drug use, and in medication adherence and health behaviour change generally. Effect sizes are modest but it is brief, teachable and generalisable.",
    "Adaptations: brief MI in emergency and primary care; motivational enhancement therapy, the four-session manualised version tested in Project MATCH; and MI combined with CBT or with contingency management.",
    "Project MATCH found broadly equivalent outcomes for motivational enhancement therapy, CBT and twelve-step facilitation, despite the shorter duration of the motivational arm.",
    "MI is a style, not a technique set. Delivered as a checklist of questions without the underlying spirit it does not work, and this is the commonest failure in practice."
  ],
  cards:[
    ["What are the four processes and the four elements of spirit in motivational interviewing?","Processes: engaging, focusing, evoking and planning. Spirit: partnership, acceptance, compassion and evocation."],
    ["What does OARS stand for?","Open questions, Affirmations, Reflective listening, and Summaries: the four core micro-skills of motivational interviewing."],
    ["Give the DARN-CAT taxonomy of change talk.","Preparatory change talk is Desire, Ability, Reason and Need. Mobilising change talk is Commitment, Activation and Taking steps. Mobilising change talk is the stronger predictor of actual behaviour change."],
    ["What is the righting reflex and why does it matter?","The clinician's instinct to correct the person and argue for change. Acting on it predictably elicits sustain talk, because the person takes up the opposing side of the argument, so the intervention produces the reverse of its intention."],
    ["What did Project MATCH find?","Broadly equivalent outcomes for motivational enhancement therapy, cognitive behavioural coping skills therapy and twelve-step facilitation, despite motivational enhancement therapy being delivered in only four sessions."]
  ],
  note:[
    "Miller and Rollnick developed MI; the founding observation was that therapist style predicted client drinking outcome.",
    "Ambivalence is treated as normal rather than as denial.",
    "Discrepancy must be between the person's behaviour and their own values, not the clinician's.",
    "Prochaska and DiClemente's stages of change are a separate and empirically contested model.",
    "Motivational enhancement therapy is the four-session manualised adaptation.",
    "MI delivered as technique without spirit does not work."
  ],
  refs:["semaddict","addmed","nice"] };
