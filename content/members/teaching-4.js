/* =====================================================================
   TEACHING, SECTION 4 — Clinical Psychopharmacology
   79 items, 4.1.1 to 4.4.11
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------------- 4.1 GENERAL ---------------- */

TEACH["4.1.1"] = { free:true,
  simple:"Almost every psychiatric drug we have was found by accident, by somebody paying attention to the wrong result. A drug for surgical shock quietened psychotic wards. A failed antipsychotic lifted depression. A tuberculosis drug made patients cheerful. Not one of them was designed from a theory of the illness, and that is why the theories came afterwards.",
  teach:[
    "1949: John Cade gave lithium to a man continuously manic for five years, after testing it on guinea pigs. He published ten cases in the Medical Journal of Australia and the world ignored it for twenty-one years.",
    "1952: Delay and Deniker gave chlorpromazine, developed as an antihistamine and surgical potentiator, to psychiatric patients in Paris. The wards changed within months and the asylums began to empty.",
    "1957: Roland Kuhn tested imipramine as an antipsychotic. It did not work for psychosis; it lifted depression instead. The tricyclics followed.",
    "1950s: iproniazid, an antitubercular drug, was noticed to elevate mood, giving the monoamine oxidase inhibitors.",
    "1960: chlordiazepoxide, then diazepam in 1963, gave a sedative that did not kill in overdose. That safety was the problem: everybody was given them, for years.",
    "1971: clozapine was withdrawn after agranulocytosis deaths in Finland. Kane's 1988 trial showed it worked where everything else had failed, and it returned with mandatory blood monitoring.",
    "1987: fluoxetine was licensed. The SSRIs were not more effective than tricyclics; they were safer in overdose and better tolerated, and that changed prescribing entirely.",
    "2019: esketamine was licensed, the first antidepressant in decades acting within hours rather than weeks, and the first working outside the monoamine system.",
    "The pattern to take from this: mechanism was inferred from drug action, not the reverse. The monoamine hypothesis exists because the drugs worked, which is a weak basis for a theory of illness."
  ],
  cards:[
    ["Who introduced lithium and chlorpromazine to psychiatry, and when?","John Cade gave lithium in 1948 and published in 1949. Delay and Deniker gave chlorpromazine to psychiatric patients in Paris in 1952."],
    ["How was the antidepressant effect of imipramine discovered?","Roland Kuhn tested it in 1957 as a possible antipsychotic. It failed for psychosis but elevated the mood of depressed patients, and he recognised the significance of the unexpected result."],
    ["Why was clozapine withdrawn and why did it return?","It was withdrawn in 1975 after agranulocytosis deaths in Finland. Kane's 1988 trial demonstrated efficacy in treatment-resistant schizophrenia where other drugs had failed, and it returned with mandatory haematological monitoring."]
  ],
  note:[
    "Cade published ten cases in the Medical Journal of Australia, 1949. Lithium was not licensed in the USA until 1970.",
    "Chlorpromazine was synthesised by Charpentier at Rhone-Poulenc; Laborit noticed its effect on surgical patients before Delay and Deniker used it psychiatrically.",
    "The SSRIs were a tolerability and safety advance, not an efficacy advance over tricyclics.",
    "Wagner-Jauregg's malaria therapy for general paralysis of the insane, 1917, won the only Nobel Prize awarded for a psychiatric treatment, in 1927.",
    "The serendipity of psychopharmacology is itself an examinable theme: mechanisms were reverse-engineered from clinical observation."
  ],
  refs:["stahl","maudsley","noptp"] };

TEACH["4.1.2"] = { free:false,
  simple:"Drug classes are named after what people first used them for, not what they do. Antipsychotics treat mania and depression, antidepressants treat anxiety and pain, and anticonvulsants stabilise mood. The names are historical accidents, and taking them literally will mislead you.",
  teach:[
    "Antipsychotics: first-generation, typical, subdivided by potency into high potency such as haloperidol and low potency such as chlorpromazine. Second-generation, atypical, defined loosely by lower extrapyramidal burden at therapeutic doses. Third-generation refers to the dopamine partial agonists: aripiprazole, cariprazine, brexpiprazole.",
    "The typical and atypical distinction is unsatisfactory. It is a spectrum of receptor affinity, not two categories, and CATIE and CUtLASS showed no clear superiority of second-generation drugs other than clozapine.",
    "Antidepressants: tricyclics; monoamine oxidase inhibitors, irreversible and reversible; SSRIs; SNRIs; noradrenergic and specific serotonergic (mirtazapine); noradrenaline-dopamine reuptake inhibitors (bupropion); melatonergic (agomelatine); multimodal (vortioxetine); and the glutamatergic agents (ketamine, esketamine).",
    "Mood stabilisers: lithium; anticonvulsants including valproate, carbamazepine and lamotrigine; and several antipsychotics.",
    "Anxiolytics and hypnotics: benzodiazepines, Z-drugs, buspirone, pregabalin, sedating antihistamines, melatonin, and orexin receptor antagonists.",
    "Cognitive enhancers: cholinesterase inhibitors and memantine.",
    "Drugs used in addiction: acamprosate, naltrexone, disulfiram, nalmefene, methadone, buprenorphine, varenicline, bupropion.",
    "Intra-class differences matter more than class in practice: within the SSRIs, fluoxetine's long half-life, paroxetine's anticholinergic and discontinuation profile, citalopram's QTc, and sertraline's low interaction burden are the reasons to choose one over another."
  ],
  cards:[
    ["Why is the typical and atypical distinction unsatisfactory?","It describes a continuum of receptor binding and extrapyramidal liability rather than two discrete groups. Large pragmatic trials, CATIE and CUtLASS, found no clear overall superiority of second-generation drugs other than clozapine."],
    ["What defines the third-generation antipsychotics?","Dopamine D2 partial agonism rather than antagonism. Aripiprazole, cariprazine and brexpiprazole. This is why aripiprazole can lower rather than raise prolactin."],
    ["Name the main antidepressant classes.","Tricyclics; monoamine oxidase inhibitors, irreversible and reversible; SSRIs; SNRIs; noradrenergic and specific serotonergic agents; noradrenaline-dopamine reuptake inhibitors; melatonergic agents; multimodal agents; and glutamatergic agents."]
  ],
  note:[
    "CATIE (2005) and CUtLASS (2006) are the two pragmatic trials to know: no clear advantage of second-generation antipsychotics other than clozapine, and high all-cause discontinuation across the board.",
    "Clozapine remains the only antipsychotic with demonstrated superiority in treatment resistance.",
    "The term major tranquilliser is obsolete and should not be used.",
    "Cipriani's 2018 network meta-analysis compared 21 antidepressants: all were more effective than placebo, with modest differences between them.",
    "Class labels do not map onto licensed indications: quetiapine is licensed in bipolar depression, and duloxetine in neuropathic pain and stress incontinence."
  ],
  refs:["maudsley","stahl","bnf"] };

TEACH["4.1.3"] = { free:true,
  simple:"The placebo is not nothing. It is what the ritual of treatment does on its own: being taken seriously, being examined, being given something by somebody who believes it will help. In depression and pain that effect is large enough to change the design of every trial you will ever read.",
  teach:[
    "The placebo response is the improvement seen with an inert intervention. It is not the same as spontaneous remission, regression to the mean or natural fluctuation, though trials confound all four.",
    "Mechanisms: expectancy, classical conditioning from prior treatment experience, and the therapeutic relationship itself. Placebo analgesia is opioid-mediated and is reversed by naloxone, which demonstrates a physiological mechanism.",
    "Factors that increase it: injection rather than tablet, larger tablets, branded appearance, more frequent dosing, an enthusiastic and confident prescriber, and a longer consultation.",
    "The placebo response is largest in depression, anxiety and pain, and has risen over decades in antidepressant trials, which is one reason newer drugs struggle to separate from placebo.",
    "Nocebo: adverse effects produced by expectation. It accounts for a substantial proportion of reported side effects, and warning a patient about a specific effect makes it more likely to be reported.",
    "In trials, the placebo arm controls for all of this. Open-label observation cannot distinguish drug effect from placebo, natural history and regression to the mean.",
    "Ethics: deceptive placebo use in clinical practice is not acceptable. Open-label placebo, given with full explanation, has produced positive results in some trials, which is theoretically interesting.",
    "The practical lesson is that how you prescribe is part of the prescription. Confidence, explanation and continuity all increase the drug's measured effect."
  ],
  cards:[
    ["Name four factors that increase the placebo response.","Injection rather than oral administration, branded rather than generic appearance, more frequent dosing, and an enthusiastic confident prescriber. Longer consultations and larger tablets also increase it."],
    ["What is the nocebo effect and why does it matter clinically?","Adverse effects produced by negative expectation rather than by pharmacology. It accounts for a substantial share of reported side effects, and the manner in which risks are communicated directly affects how many are experienced."],
    ["What evidence indicates placebo analgesia has a physiological mechanism?","It is reversed by naloxone, indicating mediation by endogenous opioids, and is accompanied by measurable changes in brain activity in pain-processing regions."]
  ],
  note:[
    "Placebo response in antidepressant trials has increased over successive decades, contributing to the difficulty of demonstrating drug-placebo separation.",
    "Regression to the mean: patients enter trials when at their worst, so improvement is expected regardless of treatment.",
    "Active placebos, which reproduce side effects, reduce the apparent effect size of tricyclics, suggesting unblinding contributes to measured efficacy.",
    "Placebo response is smallest in mania, psychosis and OCD, and largest in depression, anxiety and pain.",
    "Deceptive placebo prescribing breaches informed consent and is not acceptable practice."
  ],
  refs:["maudsley","lawrie","noptp"] };

TEACH["4.1.4"] = { free:false,
  simple:"Roughly half of people on long-term medication for anything do not take it as prescribed, and psychiatry is no exception. The commonest reason is not forgetfulness or lack of insight. It is that the person made a reasonable decision, based on side effects and on what they believe the drug is doing, and did not tell you.",
  teach:[
    "Terminology: compliance implies obedience; adherence implies agreement; concordance describes a negotiated shared decision. The words carry the model of the relationship.",
    "Rates: around 50 per cent of patients on long-term medication for chronic conditions do not take it as prescribed. In schizophrenia estimates of non-adherence range widely, commonly cited around 40 to 50 per cent.",
    "Intentional non-adherence, a deliberate decision, is commoner than unintentional. Both need to be asked about differently.",
    "Predictors of non-adherence: poor insight, side effects particularly sexual dysfunction, akathisia and weight gain, complex regimens, poor therapeutic relationship, substance misuse, cognitive impairment, and beliefs about medication.",
    "The Necessity-Concerns Framework, Horne: adherence depends on the balance between the person's belief in the necessity of the medicine and their concerns about it. This predicts adherence better than knowledge does.",
    "Assessment: ask non-judgmentally and normalise. Many people find it hard to take tablets every day; how many have you missed in the past week. Pill counts, prescription refill data and plasma levels are objective but limited.",
    "Interventions with evidence: simplifying the regimen, once-daily dosing, treating side effects rather than ignoring them, motivational interviewing, and long-acting injectable formulations where covert non-adherence drives relapse.",
    "Psychoeducation alone has weak effects. Insight-focused education does not reliably change behaviour.",
    "The single most useful clinical move is to ask about side effects the patient has not mentioned, particularly sexual ones, because they are the commonest unspoken reason for stopping."
  ],
  cards:[
    ["Distinguish compliance, adherence and concordance.","Compliance implies the patient following instructions. Adherence implies the patient agreeing with an agreed plan. Concordance describes a negotiated partnership in which the patient's beliefs are given equal standing."],
    ["State the Necessity-Concerns Framework.","Horne: adherence is determined by the balance between a person's belief in the necessity of their medication and their concerns about taking it. It predicts adherence better than knowledge or insight alone."],
    ["Which interventions actually improve adherence?","Simplifying the regimen and once-daily dosing, actively identifying and treating side effects, motivational interviewing, a good therapeutic alliance, and long-acting injectable formulations where covert non-adherence drives relapse. Psychoeducation alone has weak effects."]
  ],
  note:[
    "Sexual dysfunction is the commonest side effect patients do not report spontaneously and a leading cause of covert discontinuation.",
    "Long-acting injectables reduce relapse related to covert non-adherence but do not address a considered decision to stop.",
    "Abrupt discontinuation of antipsychotics carries a high relapse risk; gradual reduction is safer where stopping is agreed.",
    "Plasma level monitoring is useful for clozapine and lithium and of limited value for most other psychotropics.",
    "NICE recommends shared decision making and a written record of the agreed plan."
  ],
  refs:["maudsley","nice","semgen"] };

TEACH["4.1.5"] = { free:false,
  simple:"You cannot tell whether a drug is working by asking how the person seems. Measure the same thing, the same way, at intervals, and both of you can see the direction of travel. Without that you will keep drugs going for years on the assumption that they must be doing something.",
  teach:[
    "Efficacy is effect under ideal trial conditions; effectiveness is effect in routine practice; efficiency is effectiveness relative to cost.",
    "Measure at baseline, or you have nothing to compare with. This is the single commonest failure.",
    "Depression scales: HAM-D and MADRS are observer-rated; PHQ-9, BDI and HADS are self-rated. Response is conventionally a 50 per cent reduction in score; remission is a score below a defined threshold, around 7 on HAM-D or 10 on MADRS.",
    "Psychosis: PANSS and BPRS. Mania: Young Mania Rating Scale. Anxiety: GAD-7, HAM-A. OCD: Y-BOCS. Global: Clinical Global Impression.",
    "Tolerability monitoring is not optional. For antipsychotics: weight and waist, blood pressure, fasting glucose or HbA1c, lipids, prolactin where indicated, and ECG where the drug or patient warrants it, at baseline, at 12 weeks, at one year, then annually.",
    "Extrapyramidal side effects: AIMS for tardive dyskinesia, Barnes Akathisia Rating Scale, Simpson-Angus for parkinsonism. Ask specifically; akathisia in particular is missed and mistaken for agitation.",
    "Lithium: level after five to seven days and after every dose change, then every three months in the first year and at least six-monthly thereafter, with U&Es, eGFR, calcium and thyroid function at least every six months.",
    "Clozapine: FBC weekly for 18 weeks, fortnightly to 52 weeks, then monthly, with plasma levels where response or toxicity is in question.",
    "Allow an adequate trial before declaring failure: four to six weeks for antidepressants at a therapeutic dose, six weeks for antipsychotics, and at least twelve weeks at higher doses for OCD."
  ],
  cards:[
    ["Define response and remission in depression trials.","Response is conventionally a 50 per cent or greater reduction in baseline symptom score. Remission is a score falling below a defined threshold, around 7 on the HAM-D or 10 on the MADRS, indicating minimal residual symptoms."],
    ["What physical health monitoring is required for a patient on an antipsychotic?","Weight and waist circumference, blood pressure, fasting glucose or HbA1c, lipid profile, prolactin where indicated, and ECG where the drug or the patient warrants it. At baseline, at 12 weeks, at one year, then annually."],
    ["Name the standard rating scales for extrapyramidal side effects.","AIMS for tardive dyskinesia, the Barnes Akathisia Rating Scale for akathisia, and the Simpson-Angus Scale for drug-induced parkinsonism."]
  ],
  note:[
    "Efficacy is measured in RCTs with selected patients; effectiveness in pragmatic trials such as CATIE and CUtLASS with representative patients.",
    "Number needed to treat translates effect size into a clinically meaningful figure; for antidepressants in moderate to severe depression it is commonly cited around 7 to 9.",
    "Rating scales measure change; they do not make diagnoses.",
    "Residual symptoms after treatment predict relapse and warrant continued optimisation rather than acceptance.",
    "Item 5.2.7 covers rating scales in more detail."
  ],
  refs:["maudsley","nice","lawrie"] };

TEACH["4.1.6.1"] = { free:false,
  simple:"Before a drug reaches a patient it goes through two early stages that most people never hear about. First it is given to a small number of healthy volunteers to find out what the body does to it and what dose is tolerable. Then it is given to a small number of patients to see whether it does anything at all.",
  teach:[
    "Preclinical work comes first: in vitro pharmacology, animal toxicology, and animal models. This precedes any human exposure and is required by the Nuremberg Code and the Declaration of Helsinki.",
    "Phase I: first in human. Typically 20 to 100 healthy volunteers, though patients are used where the drug is too toxic for healthy subjects, as in oncology. Objectives are safety, tolerability, pharmacokinetics, and determination of the maximum tolerated dose. Usually open-label with dose escalation.",
    "Phase I does not assess efficacy. This is a common examination point.",
    "Phase II: first in patients. Typically 100 to 300 patients with the target condition. Objectives are proof of concept, preliminary efficacy, dose finding, and further safety. Often randomised and placebo-controlled. IIa is proof of concept, IIb is dose ranging.",
    "Attrition is enormous. The great majority of compounds entering phase I never reach licensing, and CNS drugs have among the highest failure rates of any therapeutic area.",
    "Ethical requirements: independent research ethics committee approval, informed consent, right to withdraw, and in the UK regulatory approval from the MHRA and registration of the trial.",
    "The TGN1412 disaster in 2006, in which six healthy volunteers suffered life-threatening cytokine release in a first-in-human trial, changed first-in-human dosing practice, introducing sentinel dosing and staggered administration."
  ],
  cards:[
    ["What are the objectives of a phase I trial and who takes part?","Safety, tolerability, pharmacokinetics and determination of the maximum tolerated dose, in typically 20 to 100 healthy volunteers, or in patients where the compound is too toxic for healthy subjects. Efficacy is not assessed."],
    ["What are the objectives of a phase II trial?","Proof of concept, preliminary efficacy, dose finding and further safety assessment, typically in 100 to 300 patients with the target condition, often randomised and placebo-controlled."],
    ["What changed after the TGN1412 trial in 2006?","First-in-human dosing practice, with the introduction of sentinel dosing, staggered administration between participants, and more conservative starting-dose calculation based on minimum anticipated biological effect level."]
  ],
  note:[
    "Preclinical animal work is required before human exposure under both the Nuremberg Code and the Declaration of Helsinki.",
    "Phase IIa is proof of concept; phase IIb is dose ranging.",
    "CNS drug development has among the highest attrition and longest development times of any therapeutic area.",
    "All UK trials require MHRA authorisation and research ethics committee approval, and must be registered before recruitment.",
    "The Declaration of Helsinki requires that the wellbeing of the individual subject takes precedence over the interests of science and society."
  ],
  refs:["lawrie","freeman","noptp"] };

TEACH["4.1.6.2"] = { free:true,
  simple:"The randomised controlled trial exists to answer one question: was it the drug, or would this have happened anyway? Everything in its design, the randomisation, the blinding, the placebo, the analysis, is there to close off a way of being fooled.",
  teach:[
    "Randomisation balances known and unknown confounders between groups. It is the only method that handles the confounders you did not think of.",
    "Allocation concealment prevents the person recruiting from knowing the next allocation, and prevents selection bias at entry. It is distinct from blinding, which prevents performance and detection bias afterwards.",
    "Blinding: single, double or triple. In psychiatry, side effects frequently unblind participants and assessors, which is why active placebos matter and why blinding should be formally assessed.",
    "Endpoints: the primary outcome must be specified in advance and drives the sample size calculation. Multiple secondary outcomes inflate type I error, and reporting a secondary outcome as though it were primary is outcome switching.",
    "Superiority trials test whether the new treatment is better. Non-inferiority trials test whether it is not worse by more than a prespecified margin, and are used when a placebo arm would be unethical. The margin must be justified in advance.",
    "The analysis differs by design. Intention-to-treat preserves randomisation, is conservative for superiority, and is the primary analysis. Per-protocol exaggerates efficacy and is preferred for non-inferiority, where a conservative analysis would favour the wrong conclusion.",
    "Missing data: last observation carried forward biases in the direction of the last measurement and is now discouraged. Mixed models and multiple imputation are preferred, and the amount and pattern of missingness must be reported.",
    "Psychiatry-specific problems: high placebo response, high dropout, short trial durations relative to illness course, symptom scales as surrogate outcomes, exclusion of comorbidity and suicidality producing unrepresentative samples, and industry sponsorship associated with more favourable results.",
    "CONSORT governs reporting. Trial registration before recruitment exists to expose selective outcome reporting."
  ],
  cards:[
    ["Distinguish allocation concealment from blinding.","Allocation concealment hides the upcoming treatment assignment from the person enrolling participants, preventing selection bias at entry. Blinding hides the assigned treatment from participants, clinicians or assessors after randomisation, preventing performance and detection bias."],
    ["Why is intention-to-treat conservative in superiority trials but not in non-inferiority trials?","Intention-to-treat includes non-adherent participants, diluting the treatment effect and making superiority harder to demonstrate. In a non-inferiority trial that dilution pushes the groups together and makes non-inferiority easier to claim falsely, so per-protocol analysis is also required."],
    ["Name three problems specific to randomised trials in psychiatry.","High and rising placebo response; high dropout rates; short trial duration relative to the course of illness; use of symptom rating scales as surrogate outcomes; and exclusion of comorbidity and suicidality producing unrepresentative samples."]
  ],
  note:[
    "CONSORT for trials, PRISMA for systematic reviews, STROBE for observational studies.",
    "Last observation carried forward is discouraged; mixed models for repeated measures and multiple imputation are preferred.",
    "Industry-sponsored trials are more likely to report results favourable to the sponsor, an effect consistent across therapeutic areas.",
    "Cluster randomised trials must account for clustering using the intracluster correlation coefficient.",
    "Section 14 of this syllabus covers critical review in full and carries a third of Paper B."
  ],
  refs:["lawrie","peacock","freeman"] };

TEACH["4.1.7"] = { free:false,
  simple:"A licence tells you what a company was allowed to advertise a drug for, based on the trials they chose to run. It does not tell you what the drug does. Half of psychiatric prescribing for children, and a good deal for adults, is outside the licence, and that is lawful, common and sometimes the only reasonable option.",
  teach:[
    "In the UK, medicines are licensed by the MHRA. A marketing authorisation specifies indication, population, dose and route, based on the evidence the company submitted.",
    "Off-label use is prescribing outside the terms of the licence: different indication, age group, dose or route. Unlicensed use is prescribing a product with no UK marketing authorisation at all.",
    "Off-label prescribing is lawful. GMC guidance requires that you be satisfied there is sufficient evidence or experience to demonstrate safety and efficacy, that you take responsibility, that you record your reasons, and that you inform the patient where the use is off-label and this is relevant to their decision.",
    "It is extremely common in psychiatry: most prescribing in children and adolescents, in intellectual disability, in older adults, and much augmentation strategy in resistant illness, is off-label.",
    "Generic and branded: a generic must demonstrate bioequivalence, conventionally that the 90 per cent confidence interval for AUC and Cmax ratios lies within 80 to 125 per cent of the reference product.",
    "For most drugs generic substitution is unproblematic. For narrow therapeutic index drugs it is not, and lithium is the standing exception in psychiatry: preparations differ in bioavailability and brands should not be switched without re-checking levels.",
    "Antiepileptics are categorised by the MHRA into three risk groups for switching between manufacturers; carbamazepine and phenytoin are in the category where continuity of supply matters most.",
    "Clozapine brands differ in monitoring service arrangements and switching requires coordination, not just a different prescription."
  ],
  cards:[
    ["Distinguish off-label from unlicensed prescribing.","Off-label prescribing uses a licensed product outside the terms of its marketing authorisation, for a different indication, age, dose or route. Unlicensed prescribing uses a product with no UK marketing authorisation at all."],
    ["What does GMC guidance require when prescribing off-label?","Being satisfied there is sufficient evidence or experience of safety and efficacy, taking responsibility for the prescription, recording the reasons in the notes, and informing the patient where the off-label status is relevant to their decision."],
    ["Which psychiatric drug should not be switched between brands without re-checking, and why?","Lithium. Preparations differ in bioavailability, and with its narrow therapeutic index a brand switch can move the plasma level into a toxic or subtherapeutic range. Levels must be rechecked after any change."]
  ],
  note:[
    "Bioequivalence is conventionally demonstrated when the 90 per cent confidence interval for the AUC and Cmax ratio falls within 80 to 125 per cent of the reference product.",
    "The Yellow Card scheme is the UK system for reporting suspected adverse drug reactions.",
    "NICE assesses cost-effectiveness and does not license; the MHRA licenses and does not assess cost-effectiveness.",
    "Most psychotropic prescribing in children and adolescents is off-label because trials in children are scarce.",
    "The black triangle symbol denotes a medicine under additional monitoring, for which all suspected reactions should be reported."
  ],
  refs:["bnf","maudsley","nice"] };

TEACH["4.1.8"] = { free:true,
  simple:"Rational prescribing is not a formula, it is a habit of asking four questions before you write anything. What am I treating, how will I know if it worked, what is the worst thing this could do to this particular person, and when will I stop.",
  teach:[
    "Define the target. Prescribing for a diagnosis is weaker than prescribing for a defined problem with a measurable outcome. Write down what should change and by when.",
    "Choose on the basis of evidence for that indication, the individual's physical health, previous response and previous adverse effects, interactions, and the person's own preference. Previous response is one of the strongest predictors and is routinely not asked about.",
    "Start low and go slow in the elderly, in hepatic and renal impairment, and in intellectual disability, where sensitivity is greater and reporting of adverse effects is harder.",
    "One change at a time. Changing two things simultaneously means you learn nothing from either.",
    "Give an adequate trial at an adequate dose before declaring failure: four to six weeks for antidepressants, six weeks for antipsychotics, twelve weeks at higher doses for OCD.",
    "Risk-benefit appraisal is individual, not generic. The same drug carries different risk in a 24-year-old man, a pregnant woman and an 84-year-old with atrial fibrillation and renal impairment.",
    "Polypharmacy: each additional drug adds interaction risk and adherence burden. High-dose antipsychotic treatment and antipsychotic polypharmacy have no evidence base for routine use and increase adverse effects.",
    "Have a stopping plan from the start. Deprescribing is an active clinical task, not an absence of one, and drugs continued indefinitely by default are a major source of harm.",
    "Document the reasoning. A prescription with no recorded rationale is one that nobody will dare to stop."
  ],
  cards:[
    ["What is the risk-benefit appraisal in rational prescribing?","An individualised judgement weighing the expected benefit for this person's condition and severity against the specific risks their age, physical health, comorbidities, other medication, reproductive status and preferences confer, rather than a generic class-level assessment."],
    ["Why should only one medication change be made at a time?","Because simultaneous changes make it impossible to attribute either benefit or adverse effect to a specific intervention, so nothing is learned and future decisions are made on unreliable information."],
    ["What is the evidence base for high-dose antipsychotic treatment?","There is none for routine use. Doses above the licensed maximum do not improve response and increase adverse effects, including QTc prolongation and extrapyramidal symptoms. Any such prescribing requires documented rationale, consent where possible, and enhanced monitoring."]
  ],
  note:[
    "Previous response and previous adverse effects are among the strongest predictors of future response and are frequently not elicited.",
    "Antipsychotic polypharmacy is common in practice, lacks an evidence base outside clozapine augmentation, and increases metabolic and cardiac risk.",
    "STOMP is the national programme to stop over-medication of people with a learning disability, autism or both.",
    "Every long-term prescription should have a documented review date.",
    "Anticholinergic burden should be calculated in older adults; it increases falls, confusion and mortality."
  ],
  refs:["maudsley","bnf","nice"] };

/* ---------------- 4.2 PHARMACOKINETICS ---------------- */

TEACH["4.2.1.1"] = { free:true,
  simple:"Four verbs, in order: absorb, distribute, metabolise, excrete. Almost every kinetic question is asking which of those four something has interfered with. Get the order in your head and most of them answer themselves.",
  teach:[
    "Absorption: movement from the site of administration into the systemic circulation. Most oral drugs are absorbed in the small intestine by passive diffusion of the unionised lipid-soluble form.",
    "First-pass metabolism: absorbed drug passes through the gut wall and portal circulation to the liver before reaching the systemic circulation. Extensive first-pass metabolism produces low oral bioavailability.",
    "Distribution: from blood into tissues, determined by lipid solubility, protein binding, tissue perfusion and ability to cross membranes including the blood-brain barrier.",
    "Metabolism: usually hepatic. Phase I reactions, oxidation, reduction and hydrolysis, largely by cytochrome P450, introduce or expose a reactive group. Phase II reactions conjugate, usually by glucuronidation, producing a water-soluble compound for excretion.",
    "Metabolites are not always inactive. Fluoxetine gives norfluoxetine, risperidone gives paliperidone, amitriptyline gives nortriptyline, diazepam gives desmethyldiazepam, oxazepam and temazepam. Codeine is a prodrug requiring CYP2D6 conversion to morphine.",
    "Excretion: predominantly renal for water-soluble compounds and their metabolites, with biliary and faecal routes for others. Lithium is the psychiatric exception: not metabolised at all and excreted unchanged by the kidney.",
    "First-order kinetics: a constant proportion is eliminated per unit time, so half-life is constant. This applies to almost all drugs at therapeutic doses.",
    "Zero-order kinetics: a constant amount is eliminated per unit time because the enzyme is saturated. Small dose increases then produce disproportionate rises in concentration. Alcohol, phenytoin, and aspirin at high dose."
  ],
  cards:[
    ["Distinguish phase I from phase II metabolism.","Phase I reactions, oxidation, reduction and hydrolysis, largely mediated by cytochrome P450, introduce or unmask a functional group and may produce active metabolites. Phase II reactions conjugate the compound, usually by glucuronidation, producing an inactive water-soluble product for excretion."],
    ["Which psychotropic is not metabolised at all, and what follows?","Lithium. It is not protein-bound and not metabolised, and is excreted unchanged by the kidney, where it is handled like sodium. Sodium depletion, dehydration, thiazides, NSAIDs and ACE inhibitors therefore raise the level."],
    ["Define zero-order kinetics and name relevant drugs.","A constant amount rather than a constant proportion is eliminated per unit time, because the metabolising enzyme is saturated. Small dose increases produce disproportionately large concentration rises. Alcohol, phenytoin, and aspirin at high dose."]
  ],
  note:[
    "Active metabolites to know: fluoxetine to norfluoxetine, half-life 4 to 16 days; risperidone to paliperidone; amitriptyline to nortriptyline; diazepam to desmethyldiazepam, oxazepam and temazepam.",
    "Lorazepam, oxazepam and temazepam undergo glucuronidation only, with no active metabolites, which is why they are preferred in hepatic impairment.",
    "Codeine is a prodrug requiring CYP2D6; poor metabolisers get no analgesia and ultra-rapid metabolisers risk toxicity.",
    "Gut wall CYP3A4 contributes substantially to first-pass metabolism, which is why grapefruit juice raises levels of some drugs.",
    "Enterohepatic recirculation prolongs the effect of some drugs and is disrupted by antibiotics."
  ],
  refs:["stahl","maudsley","bnf"] };

TEACH["4.2.1.2"] = { free:false,
  simple:"How a drug gets in decides how fast it works and how much of it survives the journey. Swallow it and the liver takes a cut before it reaches the brain. Inject it and there is no cut at all, which is why the intramuscular dose of many drugs is smaller than the tablet.",
  teach:[
    "Intravenous: 100 per cent bioavailability by definition, immediate onset, no absorption phase and no first-pass metabolism. It is the reference against which other routes are measured.",
    "Oral: convenient, and subject to variable absorption, food effects, gut motility and first-pass metabolism. Onset over 30 minutes to hours.",
    "Intramuscular: bypasses first pass, faster and more predictable than oral, and the reason parenteral doses are often lower. Absorption depends on perfusion of the injected muscle, which falls in shock and in the very sedated.",
    "Sublingual and buccal: absorbed into the systemic circulation directly, bypassing first pass. Asenapine is given sublingually for this reason and is ineffective if swallowed.",
    "Rectal: partial first-pass bypass, since the lower rectal veins drain to the systemic circulation. Diazepam by this route in seizures.",
    "Transdermal: bypasses first pass, gives steady levels and avoids peaks. Rivastigmine patch reduces gastrointestinal adverse effects; selegiline patch at low dose avoids the dietary tyramine restriction of oral MAOIs.",
    "Intranasal: rapid absorption across a highly vascular mucosa with direct access to the systemic circulation. Esketamine and naloxone are given this way.",
    "Depot and long-acting injectable antipsychotics: an oily or aqueous suspension released slowly from the injection site, giving weeks to months of cover. Absorption is rate-limiting, so the apparent half-life reflects release rather than elimination.",
    "Clinical translation: the route changes the dose, the onset, the peak and the predictability. It is not a matter of patient preference alone."
  ],
  cards:[
    ["Which routes bypass first-pass metabolism?","Intravenous, intramuscular, sublingual and buccal, transdermal, intranasal, and to a substantial extent rectal administration."],
    ["Why must asenapine be given sublingually?","It undergoes extensive first-pass metabolism, so oral bioavailability if swallowed is negligible. Sublingual absorption bypasses the liver and gives adequate systemic exposure."],
    ["What determines the apparent half-life of a depot antipsychotic?","The rate of release from the injection site rather than the rate of elimination. Absorption is rate-limiting, which is why steady state takes months and why adverse effects persist long after an injection is stopped."]
  ],
  note:[
    "Intramuscular absorption is reduced in shock, dehydration and profound sedation because muscle perfusion falls.",
    "Intramuscular olanzapine must not be given within one hour of parenteral benzodiazepine because of the risk of severe cardiorespiratory depression.",
    "Depot antipsychotics may require months to reach steady state; a loading regimen or oral cover is used at initiation.",
    "Transdermal selegiline at low dose does not require dietary tyramine restriction, unlike oral irreversible MAOIs.",
    "Grapefruit juice inhibits intestinal CYP3A4 and raises the bioavailability of affected oral drugs."
  ],
  refs:["maudsley","bnf","stahl"] };

TEACH["4.2.1.3"] = { free:false,
  simple:"Most drugs travel through the blood stuck to proteins, and only the unstuck fraction does anything. That matters when the protein runs low, as in liver disease, pregnancy or malnutrition, because the same total level now contains more free drug.",
  teach:[
    "Acidic drugs bind mainly to albumin. Basic drugs bind mainly to alpha-1 acid glycoprotein. Only the free, unbound fraction is pharmacologically active and available for metabolism and excretion.",
    "Highly protein-bound psychotropics include most antipsychotics, tricyclics, SSRIs, valproate, diazepam and phenytoin. Lithium is the notable exception with essentially no protein binding.",
    "Hypoalbuminaemia in liver disease, nephrotic syndrome, malnutrition, burns, pregnancy and old age increases the free fraction of highly bound drugs.",
    "Total plasma level then becomes misleading. In hypoalbuminaemia a total phenytoin or valproate level within the reference range may correspond to a toxic free concentration. Free level measurement or correction formulae are needed.",
    "Displacement interactions, where one drug displaces another from protein binding, are less clinically important than traditionally taught, because the freed drug is also more available for clearance and a new equilibrium is reached rapidly. They matter chiefly for narrow therapeutic index drugs with limited clearance capacity.",
    "Alpha-1 acid glycoprotein is an acute phase protein and rises in inflammation, surgery and myocardial infarction, reducing the free fraction of basic drugs.",
    "Protein binding also limits distribution: a highly bound drug has a lower volume of distribution than its lipid solubility alone would predict.",
    "Practical point in psychiatry: in a malnourished patient with anorexia nervosa or chronic alcohol-related liver disease, standard doses of highly bound drugs produce higher free concentrations than expected."
  ],
  cards:[
    ["Which plasma proteins bind acidic and basic drugs?","Acidic drugs bind principally to albumin; basic drugs bind principally to alpha-1 acid glycoprotein."],
    ["Why can a total plasma level mislead in hypoalbuminaemia?","Because only the unbound fraction is active. With reduced albumin the free fraction rises, so a total concentration within the reference range may correspond to a toxic free concentration. Free levels or correction formulae are required."],
    ["Which psychotropic has negligible protein binding?","Lithium, which is neither protein-bound nor metabolised and is excreted unchanged by the kidney."]
  ],
  note:[
    "Displacement interactions are less clinically significant than classically taught because increased free drug is also more rapidly cleared.",
    "Alpha-1 acid glycoprotein rises as an acute phase reactant, reducing the free fraction of basic drugs in acute illness.",
    "Pregnancy reduces albumin and increases volume of distribution, both altering free drug concentrations.",
    "Free level measurement is available for phenytoin and valproate and is indicated in hypoalbuminaemia.",
    "Highly protein-bound drugs are poorly removed by dialysis; lithium, being unbound, is dialysable, which is why haemodialysis is used in severe lithium toxicity."
  ],
  refs:["maudsley","bnf","maudphys"] };

TEACH["4.2.1.4"] = { free:true,
  simple:"Four numbers describe what a drug does over time. How high it goes, how quickly it gets there, how long it takes to halve, and the total exposure. Half-life is the one that decides your dosing interval, how long to steady state, and how bad the discontinuation will be.",
  teach:[
    "Half-life, t½, is the time for the plasma concentration to fall by half. With first-order kinetics it is constant regardless of concentration.",
    "Steady state is reached after approximately four to five half-lives of regular dosing. The same applies on stopping: it takes four to five half-lives to clear.",
    "This one rule governs practice. Fluoxetine, with norfluoxetine's half-life of 4 to 16 days, takes weeks to reach steady state and weeks to clear, requiring a long washout before an MAOI. Paroxetine and venlafaxine, with short half-lives and no long-acting metabolite, produce the worst discontinuation symptoms.",
    "Tmax is the time to peak plasma concentration and reflects absorption rate. Cmax is the peak concentration and relates to peak-related adverse effects such as sedation and postural hypotension.",
    "Modified-release formulations lower Cmax and lengthen Tmax, reducing peak-related side effects, which is the rationale for slow-release preparations of venlafaxine, quetiapine and lithium.",
    "Volume of distribution is the theoretical volume needed to contain the total amount of drug at the measured plasma concentration. A high value indicates extensive tissue distribution rather than a real anatomical space; lipophilic drugs have high values.",
    "Area under the curve represents total systemic exposure over time, and is the measure used for bioequivalence and for many drug interaction studies.",
    "Clearance is the volume of plasma cleared of drug per unit time and, with the dosing rate, determines steady-state concentration.",
    "A drug with a high volume of distribution is poorly removed by dialysis, because most of it is not in the plasma."
  ],
  cards:[
    ["How many half-lives are needed to reach steady state, and why does it matter both ways?","Approximately four to five. The same applies on stopping, so a drug with a long half-life takes weeks to reach steady state and weeks to clear, which determines washout periods before switching."],
    ["Which SSRIs cause the worst discontinuation symptoms and why?","Paroxetine and venlafaxine, because they have short half-lives with no long-acting active metabolite, so plasma levels fall rapidly on omission. Fluoxetine causes the least because of norfluoxetine's half-life of 4 to 16 days."],
    ["What does a large volume of distribution indicate, and what is the practical consequence?","Extensive distribution into tissues rather than confinement to plasma, characteristic of lipophilic drugs. Such drugs are poorly removed by haemodialysis because little of the total body burden is in the plasma compartment."]
  ],
  note:[
    "Fluoxetine requires a washout of at least five weeks before starting an irreversible MAOI; other SSRIs require around two weeks.",
    "Lithium has a low volume of distribution and no protein binding, which is why haemodialysis is effective in severe toxicity.",
    "Cmax relates to peak-related adverse effects; modified-release preparations reduce them by lowering the peak.",
    "Bioequivalence is assessed on AUC and Cmax, with the 90 per cent confidence interval required to fall within 80 to 125 per cent of the reference.",
    "Loading doses are calculated from volume of distribution; maintenance doses from clearance."
  ],
  refs:["stahl","maudsley","bnf"] };

TEACH["4.2.1.5"] = { free:false,
  simple:"For nearly every drug, doubling the dose roughly doubles the level. For a few, doubling the dose can quadruple it or worse, because the enzyme that clears it is already working flat out. Those are the drugs that catch people out.",
  teach:[
    "First-order (linear) kinetics: a constant fraction of drug is eliminated per unit time. Half-life is constant, and concentration is proportional to dose. This describes almost all drugs at therapeutic concentrations.",
    "Zero-order (saturation) kinetics: a constant amount is eliminated per unit time because the metabolising enzyme is saturated. Half-life is not constant, and small dose increases produce disproportionate rises in concentration.",
    "Michaelis-Menten kinetics describes the transition. A drug follows first-order kinetics at low concentrations and shifts towards zero-order as the enzyme saturates.",
    "Phenytoin is the classic example and follows zero-order kinetics within the therapeutic range, which is why small dose increments require level monitoring and why toxicity appears abruptly.",
    "Alcohol follows zero-order kinetics at all but the lowest concentrations, eliminating roughly one unit per hour, which is why blood alcohol falls linearly with time and cannot be accelerated.",
    "Aspirin follows first-order kinetics at therapeutic dose and zero-order in overdose, which is why salicylate poisoning worsens over hours.",
    "Clinical consequence: for zero-order drugs, dose increases must be small and level-guided, and toxicity is not proportionate to the dose change.",
    "Population pharmacokinetic modelling uses data from many patients to estimate the effect of covariates such as weight, age, renal function and smoking on clearance, and underpins modern dosing guidance."
  ],
  cards:[
    ["Contrast first-order and zero-order kinetics.","First-order: a constant proportion is eliminated per unit time, half-life is constant, and concentration is proportional to dose. Zero-order: a constant amount is eliminated per unit time because the enzyme is saturated, half-life is not constant, and small dose increases produce disproportionate concentration rises."],
    ["Why does phenytoin require careful dose titration?","It follows zero-order kinetics within the therapeutic range because its metabolising enzymes saturate, so small dose increments can produce large and unpredictable rises in plasma concentration and abrupt toxicity."],
    ["At what rate is alcohol eliminated and what kinetics does it follow?","Zero-order kinetics at all but the lowest concentrations, at roughly one unit per hour, so blood alcohol concentration falls linearly with time and cannot be accelerated."]
  ],
  note:[
    "Michaelis-Menten kinetics describes the concentration-dependent transition between first- and zero-order elimination.",
    "Fluoxetine and paroxetine show non-linear kinetics at higher doses because they inhibit their own metabolism through CYP2D6.",
    "Zero-order kinetics is the reason phenytoin toxicity presents abruptly rather than gradually.",
    "Therapeutic drug monitoring is most valuable for drugs with a narrow therapeutic index, non-linear kinetics, or wide interindividual variability in clearance.",
    "There is no method of accelerating alcohol elimination; coffee, food and activity do not alter the rate."
  ],
  refs:["bnf","maudsley","stahl"] };

TEACH["4.2.1.6"] = { free:false,
  simple:"Most drugs are broken down by a family of liver enzymes called cytochrome P450. Some drugs jam those enzymes, and levels of everything else shoot up within a day. Others make the liver build more of them, and levels quietly fall over a fortnight. Fast up, slow down: that asymmetry is the whole of the clinical risk.",
  teach:[
    "The clinically important isoenzymes in psychiatry are CYP1A2, CYP2C9, CYP2C19, CYP2D6 and CYP3A4. CYP3A4 metabolises the largest number of drugs; CYP2D6 is the most polymorphic.",
    "Inhibition is competitive and rapid, occurring within hours to a day or two. Levels of the substrate rise. This is where acute toxicity comes from.",
    "Induction requires synthesis of new enzyme and takes one to three weeks to develop and a similar time to reverse. Levels of the substrate fall gradually, and rise again when the inducer is stopped.",
    "The inhibitors to know: fluoxetine and paroxetine inhibit CYP2D6 potently; fluvoxamine inhibits CYP1A2 and CYP2C19 potently; sertraline and citalopram are comparatively weak, which is a major reason sertraline is preferred in the medically complex.",
    "The inducers to know: carbamazepine, phenytoin, phenobarbital, rifampicin, and St John's wort. Carbamazepine also induces its own metabolism, so levels fall over the first weeks, which is called autoinduction.",
    "Smoking induces CYP1A2 through polycyclic aromatic hydrocarbons in the tar, not through nicotine. Clozapine and olanzapine levels are therefore lower in smokers. When a patient stops smoking, including on admission to a smoke-free ward, levels can rise sharply and produce toxicity within days. Nicotine replacement does not prevent this.",
    "CYP2D6 polymorphism: poor, intermediate, extensive and ultra-rapid metabolisers. Around 7 to 10 per cent of white European populations are poor metabolisers. This affects tricyclics, many antipsychotics, and codeine, which requires CYP2D6 to become morphine.",
    "Grapefruit juice inhibits intestinal CYP3A4 and raises the bioavailability of affected drugs.",
    "Practical rule: whenever adding or stopping any drug in a patient on clozapine, lithium, a tricyclic or an anticonvulsant, check interactions before writing it."
  ],
  cards:[
    ["Why do enzyme inhibition and induction differ in time course, and why does it matter?","Inhibition is competitive and occurs within hours to a day or two, causing rapid rises in substrate levels and acute toxicity. Induction requires synthesis of new enzyme, taking one to three weeks to develop and to reverse, so levels fall and later rise gradually."],
    ["What happens to clozapine levels when a patient stops smoking, and why?","They rise, sometimes to toxic concentrations within days, because tobacco tar induces CYP1A2 and that induction is lost on cessation. Nicotine replacement does not prevent this because nicotine is not the inducing agent."],
    ["Which SSRIs are the most and least potent enzyme inhibitors?","Fluoxetine and paroxetine potently inhibit CYP2D6, and fluvoxamine potently inhibits CYP1A2 and CYP2C19. Sertraline, citalopram and escitalopram are comparatively weak inhibitors."]
  ],
  note:[
    "Carbamazepine autoinduction means levels fall over the first two to four weeks and the dose usually needs increasing.",
    "St John's wort is a potent CYP3A4 inducer and reduces the efficacy of oral contraceptives, ciclosporin, warfarin and antiretrovirals.",
    "Caffeine is a CYP1A2 substrate; heavy caffeine use interacts with clozapine.",
    "Codeine is a prodrug requiring CYP2D6; poor metabolisers gain no analgesia and ultra-rapid metabolisers risk opioid toxicity.",
    "Lamotrigine is glucuronidated, not a CYP substrate: valproate inhibits its glucuronidation so the dose is halved, and carbamazepine induces it so the dose is roughly doubled."
  ],
  refs:["maudsley","bnf","stahl"] };

TEACH["4.2.2"] = { free:false,
  simple:"The same dose does different things at different points in a life. A pregnant woman clears some drugs twice as fast. An eighty-year-old clears them half as fast and holds fat-soluble ones for far longer. The prescription that was right last year may be wrong now for reasons that have nothing to do with the illness.",
  teach:[
    "Neonates and infants: immature hepatic enzymes and reduced renal clearance, higher total body water, and an immature blood-brain barrier. Prolonged half-lives and greater CNS penetration.",
    "Children: proportionally larger liver relative to body weight and higher metabolic capacity, so weight-adjusted clearance is often higher than in adults and mg per kg doses may exceed adult equivalents.",
    "Pregnancy: increased plasma volume and total body water, reduced albumin, increased renal blood flow and glomerular filtration, delayed gastric emptying, and altered CYP activity, with CYP3A4 and CYP2D6 induced and CYP1A2 inhibited. Net effect for many psychotropics is reduced plasma concentration, particularly in the third trimester, so relapse may reflect kinetics rather than non-adherence.",
    "Lithium clearance increases substantially in pregnancy and falls abruptly at delivery, which is why levels must be monitored through pregnancy and the dose reviewed immediately postpartum.",
    "Lamotrigine clearance rises markedly in pregnancy through induced glucuronidation and falls rapidly after delivery, requiring planned dose adjustment both ways.",
    "Old age: reduced hepatic mass and blood flow, reduced renal clearance, reduced albumin, reduced total body water and increased body fat. Lipophilic drugs such as diazepam have a much longer half-life; water-soluble drugs have a smaller volume of distribution and higher peak concentrations.",
    "Renal impairment: accumulation of renally cleared drugs. Lithium, amisulpride, sulpiride and paliperidone are substantially renally cleared and require dose reduction or avoidance.",
    "Hepatic impairment: reduced first-pass metabolism raises bioavailability, reduced albumin raises free fraction, and reduced clearance prolongs half-life. Prefer lorazepam, oxazepam and temazepam, which undergo glucuronidation only.",
    "Cardiac failure and shock reduce hepatic and renal perfusion and reduce intramuscular absorption."
  ],
  cards:[
    ["What happens to lithium clearance in pregnancy and at delivery?","Renal clearance increases substantially through raised glomerular filtration, lowering plasma levels, then falls abruptly at delivery with the loss of the expanded plasma volume, risking toxicity. Levels must be monitored throughout and the dose reviewed immediately postpartum."],
    ["Why do lipophilic drugs have prolonged half-lives in older people?","Body fat increases and total body water falls with age, increasing the volume of distribution of lipophilic drugs such as diazepam and prolonging their elimination half-life, so they accumulate with repeated dosing."],
    ["Which benzodiazepines are preferred in hepatic impairment and why?","Lorazepam, oxazepam and temazepam, because they undergo phase II glucuronidation only, which is relatively preserved in liver disease, and have no active metabolites."]
  ],
  note:[
    "Lamotrigine clearance rises markedly in pregnancy and falls rapidly postpartum; planned adjustment in both directions is required to avoid seizures and then toxicity.",
    "Renally cleared psychotropics: lithium, amisulpride, sulpiride, paliperidone, and gabapentin and pregabalin.",
    "Anticholinergic burden is a major cause of falls, confusion and mortality in older people and should be actively calculated.",
    "Reduced first-pass metabolism in cirrhosis can markedly increase the bioavailability of high-extraction drugs.",
    "Children require weight-based dosing and often higher mg per kg doses than adults because of greater metabolic capacity."
  ],
  refs:["maudsley","maudphys","bnf"] };

TEACH["4.2.3.1"] = { free:false,
  simple:"To act on the brain a drug has to be greasy enough to cross a fatty barrier. That greasiness is also why it hangs around in body fat, why it sedates, and why an obese patient and a thin one do not behave the same way on the same dose.",
  teach:[
    "Lipophilic drugs cross membranes readily, including the blood-brain barrier, by passive diffusion. Hydrophilic drugs do not, and require a transporter or must act peripherally.",
    "Most psychotropics are lipophilic by necessity: they have to reach the brain. Lithium is the exception, a small hydrophilic ion that enters via sodium channels and transporters.",
    "Consequences of lipophilicity: large volume of distribution, accumulation in adipose tissue, prolonged elimination half-life with repeated dosing, extensive hepatic metabolism required before renal excretion, poor removal by dialysis, and greater CNS penetration.",
    "Redistribution explains short duration after a single dose of a very lipophilic drug: thiopental and diazepam given intravenously act briefly because they redistribute from brain to fat, not because they are eliminated.",
    "Ionisation matters alongside lipid solubility. Only the unionised form crosses membranes, and the proportion unionised depends on the drug's pKa and the local pH.",
    "Weak bases such as amphetamine are excreted faster in acid urine; weak acids such as aspirin and phenobarbital are excreted faster in alkaline urine, which is the basis of urinary alkalinisation in salicylate poisoning.",
    "Clinical relevance in obesity: lipophilic drugs have a larger volume of distribution, so loading doses may need to be higher while maintenance doses depend on clearance rather than volume.",
    "Peripherally acting drugs are deliberately hydrophilic: domperidone crosses the blood-brain barrier poorly, which is why it causes less extrapyramidal effect than metoclopramide."
  ],
  cards:[
    ["Why does a single intravenous dose of diazepam or thiopental act briefly despite a long half-life?","Because of redistribution from brain to peripheral fat, which terminates the CNS effect long before elimination occurs. Repeated dosing saturates the fat and the long half-life then becomes apparent."],
    ["Which psychotropic is hydrophilic and how does it enter cells?","Lithium, a small monovalent cation that enters cells through sodium channels and transporters rather than by passive lipid diffusion."],
    ["How does urinary pH affect drug excretion?","Only the unionised form is reabsorbed from the renal tubule. Alkaline urine ionises weak acids such as aspirin and phenobarbital and accelerates their excretion; acid urine ionises weak bases such as amphetamine and accelerates theirs."]
  ],
  note:[
    "Domperidone is deliberately poorly CNS-penetrant, which is why it causes fewer extrapyramidal effects than metoclopramide.",
    "Highly lipophilic drugs are poorly dialysed; lithium, being hydrophilic with a small volume of distribution, is readily dialysed.",
    "Urinary alkalinisation is used in salicylate poisoning; urinary acidification is no longer recommended for amphetamine toxicity because of rhabdomyolysis risk.",
    "Loading doses depend on volume of distribution; maintenance doses depend on clearance.",
    "Second-generation antipsychotics vary widely in lipophilicity, which contributes to differences in sedation and in half-life."
  ],
  refs:["stahl","bnf","maudsley"] };

TEACH["4.2.3.2"] = { free:true,
  simple:"The brain has a wall around it. Capillaries elsewhere in the body leak; in the brain they are sealed shut and guarded by pumps that throw foreign molecules back out. That wall is the reason most drugs do nothing psychiatric, and the reason some drugs suddenly do when a person is very ill.",
  teach:[
    "Structure: continuous capillary endothelium with tight junctions, no fenestrations, minimal pinocytosis, surrounded by pericytes and astrocyte end-feet, with a basement membrane. Astrocytes induce and maintain the barrier.",
    "Crossing it: small lipophilic unionised molecules cross by passive diffusion. Larger or hydrophilic molecules require carrier-mediated transport, as for glucose via GLUT1 and amino acids via LAT1. L-DOPA crosses on the amino acid transporter, which is why it is given rather than dopamine.",
    "Efflux transporters actively remove substrates back into the blood. P-glycoprotein is the most important, and many psychotropics are substrates. Genetic and drug-induced variation in P-glycoprotein activity alters brain exposure independently of plasma level.",
    "Circumventricular organs lack a barrier by design: the area postrema, allowing the chemoreceptor trigger zone to detect toxins and induce vomiting; the median eminence; and the organum vasculosum for osmoreception.",
    "The barrier is not fixed. It is disrupted by inflammation, infection, seizures, hypoxia, trauma and hypertension, which is why drug effects and delirium can appear in acutely unwell patients at doses previously tolerated.",
    "It is immature in the neonate, which increases CNS exposure, and becomes more permeable with age and in dementia.",
    "Clinical translation: domperidone acts peripherally because it is a poor CNS penetrant; second-generation antihistamines are non-sedating because they are P-glycoprotein substrates excluded from the brain; and loperamide is a peripherally restricted opioid for the same reason, until the efflux pump is overwhelmed in overdose.",
    "Drug delivery across the barrier remains the central obstacle to CNS therapeutics, and is why monoclonal antibodies achieve only around 0.1 per cent brain penetration."
  ],
  cards:[
    ["Describe the structure of the blood-brain barrier.","Continuous non-fenestrated capillary endothelium joined by tight junctions with minimal pinocytosis, surrounded by pericytes, a basement membrane and astrocyte end-feet, which induce and maintain barrier properties."],
    ["What is P-glycoprotein and why does it matter?","An ATP-dependent efflux transporter in the blood-brain barrier endothelium that actively pumps substrates back into the blood. Many psychotropics are substrates, so variation in its activity alters brain drug concentration independently of plasma level."],
    ["Name three circumventricular organs and their functions.","The area postrema, containing the chemoreceptor trigger zone for emesis; the median eminence, for release of hypothalamic hormones into the portal system; and the organum vasculosum of the lamina terminalis, for osmoreception."]
  ],
  note:[
    "L-DOPA is given rather than dopamine because it crosses on the large neutral amino acid transporter; peripheral decarboxylase inhibitors prevent its conversion before it reaches the brain.",
    "Second-generation antihistamines are non-sedating largely because they are P-glycoprotein substrates.",
    "Loperamide is a peripherally restricted opioid; in massive overdose the efflux system is overwhelmed and central and cardiac toxicity occur.",
    "Barrier disruption in inflammation, sepsis and seizure increases CNS drug exposure and contributes to delirium.",
    "Monoclonal antibodies achieve roughly 0.1 per cent brain penetration, which is the central obstacle for anti-amyloid therapies."
  ],
  refs:["agrawal","stahl","bnf"] };

TEACH["4.2.4"] = { free:false,
  simple:"Two people given the same dose can end up with wildly different levels, because they inherited different versions of the enzyme that clears it. Testing for that is now possible and cheap. Whether it improves outcomes is a different question, and the honest answer is that the evidence is thin.",
  teach:[
    "Pharmacogenetics studies the effect of single gene variants on drug response. Pharmacogenomics is the broader study of the whole genome's contribution.",
    "The best-established variation is in CYP2D6, which is highly polymorphic with over a hundred alleles including gene deletions and duplications. Phenotypes are poor, intermediate, extensive (normal) and ultra-rapid metaboliser.",
    "Around 7 to 10 per cent of white European populations are CYP2D6 poor metabolisers. Frequencies of ultra-rapid metabolism are higher in North African and Middle Eastern populations, which is clinically relevant and often omitted.",
    "CYP2D6 substrates in psychiatry include most tricyclics, risperidone, aripiprazole, haloperidol, venlafaxine, fluoxetine and paroxetine.",
    "CYP2C19 variation affects citalopram, escitalopram, sertraline and diazepam. Poor metaboliser status raises exposure, which matters for citalopram given its dose-dependent QTc prolongation.",
    "HLA-B*15:02 is strongly associated with carbamazepine-induced Stevens-Johnson syndrome and toxic epidermal necrolysis in people of Han Chinese, Thai and other South East Asian ancestry, and testing before starting carbamazepine is recommended in those populations. This is the clearest example of clinically actionable pharmacogenetic testing in psychiatry.",
    "HLA-A*31:01 is associated with carbamazepine hypersensitivity in European populations, with weaker evidence for routine testing.",
    "Commercial combinatorial pharmacogenomic panels are marketed widely. Evidence that they improve clinical outcomes is limited and trials have been methodologically weak. They should not be presented to patients as predictive of which antidepressant will work.",
    "Where genotyping is unavailable, therapeutic drug monitoring achieves much of the same purpose empirically."
  ],
  cards:[
    ["Which pharmacogenetic test has the clearest clinical indication in psychiatry?","HLA-B*15:02 testing before starting carbamazepine in people of Han Chinese, Thai and other South East Asian ancestry, because of the strong association with Stevens-Johnson syndrome and toxic epidermal necrolysis."],
    ["Name the four CYP2D6 metaboliser phenotypes and the approximate frequency of poor metabolisers in European populations.","Poor, intermediate, extensive or normal, and ultra-rapid. Around 7 to 10 per cent of white European populations are poor metabolisers."],
    ["What is the evidence for commercial pharmacogenomic panels guiding antidepressant choice?","Limited and methodologically weak. Trials have generally been unblinded or industry-funded with modest effects, and the panels should not be presented as predicting which antidepressant will work."]
  ],
  note:[
    "CYP2D6 gene duplication produces ultra-rapid metabolism, with treatment failure at standard doses and risk of morphine toxicity from codeine.",
    "CYP2C19 poor metaboliser status raises citalopram exposure and therefore QTc risk.",
    "Clozapine response and agranulocytosis have HLA associations but none is used clinically for prediction.",
    "Therapeutic drug monitoring provides a phenotypic answer where genotyping is unavailable.",
    "Ancestry-related differences in allele frequency mean testing recommendations differ between populations, which is a clinically and ethically important point."
  ],
  refs:["maudsley","bnf","stahl"] };

TEACH["4.2.5"] = { free:true,
  simple:"For most psychiatric drugs a blood level tells you almost nothing useful, because the level does not correlate with whether the person is getting better. For three of them it tells you a great deal, and for one of those it prevents deaths.",
  teach:[
    "Therapeutic drug monitoring is indicated when the drug has a narrow therapeutic index, non-linear kinetics, wide interindividual variation in clearance, an established concentration-effect relationship, or where toxicity is hard to distinguish from the illness.",
    "Lithium is the clearest case. Sample twelve hours post-dose. Therapeutic range 0.4 to 1.0 mmol/L, commonly 0.6 to 0.8 for maintenance and higher in acute mania. Toxicity above 1.5 and severe above 2.0.",
    "Lithium monitoring schedule: level after five to seven days and after every dose change, then every three months in the first year and at least six-monthly thereafter, with U&Es, eGFR, calcium and thyroid function at least every six months.",
    "Clozapine: a plasma level above about 350 micrograms per litre is associated with better response. Levels are used to assess adherence, to investigate non-response before declaring treatment failure, to investigate suspected toxicity, and after any change in smoking status. Seizure risk rises above about 600.",
    "Anticonvulsants used as mood stabilisers: valproate levels correlate poorly with mood response and are used chiefly for adherence and toxicity. Carbamazepine levels are more useful, particularly given autoinduction.",
    "Antidepressants and antipsychotics generally: routine level monitoring is not indicated because the concentration-response relationship is weak. Exceptions are suspected toxicity, non-response despite adequate dosing, suspected non-adherence, and specific drugs such as nortriptyline, which has a therapeutic window with reduced efficacy above it.",
    "The limitations that matter: plasma level is not brain level, P-glycoprotein and receptor occupancy vary between individuals, timing of the sample is frequently wrong, and a level taken before steady state is uninterpretable.",
    "A level is a clinical tool, not a target. Treating the number rather than the patient is the standard error."
  ],
  cards:[
    ["Give the therapeutic and toxic lithium levels and the correct sampling time.","Therapeutic 0.4 to 1.0 mmol/L, commonly 0.6 to 0.8 for maintenance. Toxicity above 1.5 and severe toxicity above 2.0. The sample is taken twelve hours after the last dose."],
    ["When should a clozapine plasma level be measured?","When response is inadequate despite an apparently adequate dose, when non-adherence is suspected, when toxicity is suspected, and after any change in smoking status. A level above about 350 micrograms per litre is associated with better response."],
    ["Why is routine therapeutic drug monitoring unhelpful for most antidepressants and antipsychotics?","Because the relationship between plasma concentration and clinical response is weak for most of these drugs, so the level does not guide dosing. Plasma concentration also does not reliably reflect brain concentration or receptor occupancy."]
  ],
  note:[
    "A lithium level taken before steady state, less than five days after a dose change, cannot be interpreted.",
    "Nortriptyline has a therapeutic window, with reduced efficacy above as well as below the range.",
    "Clozapine seizure risk rises above about 600 micrograms per litre; prophylactic valproate is sometimes added at high levels.",
    "Every patient on lithium should hold a lithium alert card, a record book and information on toxicity.",
    "NICE requires that lithium is not started unless there are arrangements for reliable monitoring."
  ],
  refs:["maudsley","nice","bnf"] };

/* ---------------- 4.3 PHARMACODYNAMICS ---------------- */

TEACH["4.3.1.1"] = { free:true,
  simple:"Learn seven receptors and you can predict the side effects of almost any psychiatric drug without looking them up. Block histamine and the person is sedated and gains weight. Block muscarinic and the mouth dries. Block alpha-1 and they faint standing up. The side effect list is just the receptor list read out loud.",
  teach:[
    "Dopamine D1 to D5. D1-like (D1, D5) are Gs-coupled; D2-like (D2, D3, D4) are Gi-coupled. D2 blockade gives antipsychotic effect, extrapyramidal side effects and hyperprolactinaemia.",
    "Serotonin, fourteen subtypes. 5-HT1A: autoreceptor desensitisation underlies antidepressant delay; partial agonism gives anxiolysis. 5-HT2A: blockade contributes to atypicality and improves sleep continuity; agonism is how psychedelics work. 5-HT2C: blockade increases appetite and weight. 5-HT3: the only ionotropic subtype, blockade is antiemetic.",
    "Noradrenaline. Alpha-1 blockade causes postural hypotension, dizziness, nasal congestion and priapism. Alpha-2 is an inhibitory autoreceptor; blockade by mirtazapine increases noradrenaline and serotonin release. Beta blockade is used for akathisia and somatic anxiety.",
    "Histamine H1 blockade causes sedation, weight gain and increased appetite. This single receptor explains most of the sedation across psychiatry.",
    "Muscarinic M1 to M5 blockade causes dry mouth, blurred vision, constipation, urinary retention, tachycardia, and centrally confusion and memory impairment. Anticholinergic burden is a leading cause of falls and delirium in older people.",
    "Glutamate: AMPA, NMDA, kainate ionotropic; mGluR metabotropic. NMDA antagonism by ketamine and memantine.",
    "GABA-A ionotropic chloride channel, the site of benzodiazepines, barbiturates, Z-drugs and alcohol. GABA-B metabotropic, the site of baclofen.",
    "Transporters are targets too, not receptors: SERT for SSRIs, NET for reboxetine and part of SNRI action, DAT for methylphenidate and cocaine, VMAT2 for tetrabenazine.",
    "The clinical method: take any drug, list its receptor affinities, and the adverse effect profile follows. That is how to answer these questions rather than memorising lists."
  ],
  cards:[
    ["Which receptor blockade produces sedation and weight gain?","Histamine H1 blockade produces sedation and, with 5-HT2C blockade, increased appetite and weight gain."],
    ["What are the consequences of alpha-1 adrenoceptor blockade?","Postural hypotension, dizziness, reflex tachycardia, nasal congestion, and priapism, which is the mechanism behind trazodone-associated priapism."],
    ["List the peripheral and central effects of muscarinic blockade.","Peripheral: dry mouth, blurred vision, constipation, urinary retention and tachycardia. Central: confusion, impaired memory and, at higher burden, delirium."]
  ],
  note:[
    "Antipsychotic efficacy requires roughly 60 to 70 per cent D2 occupancy; extrapyramidal effects above about 80 per cent; hyperprolactinaemia from around 72 per cent.",
    "Anticholinergic burden scales exist and should be used in older adults; higher burden predicts falls, cognitive decline and mortality.",
    "5-HT2A blockade with D2 blockade is the classical explanation of atypicality, though clozapine's superiority is not explained by it.",
    "Priapism from trazodone is a urological emergency requiring immediate referral.",
    "Beta-blockade with propranolol is the best-evidenced pharmacological treatment for akathisia."
  ],
  refs:["stahl","maudsley","bnf"] };

TEACH["4.3.1.2.1"] = { free:false,
  simple:"Most receptors in the brain do not open a hole. They ring a bell inside the cell, and the bell is a G protein. Slower than a hole, but much longer lasting, and able to change what genes the cell reads. That is how a tablet taken today alters a brain over the next month.",
  teach:[
    "G-protein coupled receptors are seven-transmembrane proteins, the largest receptor superfamily and the target of a large proportion of all drugs.",
    "Mechanism: ligand binding produces a conformational change, GDP is exchanged for GTP on the G alpha subunit, and the heterotrimer dissociates. Both G alpha and G beta-gamma act on effectors. Intrinsic GTPase activity terminates the signal.",
    "Gs stimulates adenylyl cyclase, raising cAMP and activating protein kinase A. Gi inhibits adenylyl cyclase. Gq activates phospholipase C, producing IP3 and diacylglycerol, mobilising calcium and activating protein kinase C.",
    "Couplings worth memorising: D1-like Gs, D2-like Gi; 5-HT1 Gi, 5-HT2 Gq, 5-HT4/6/7 Gs; alpha-1 Gq, alpha-2 Gi, beta Gs; M1/M3/M5 Gq, M2/M4 Gi; H1 Gq; GABA-B Gi; mGluR group I Gq, groups II and III Gi.",
    "Signal amplification: one activated receptor activates many G proteins, each generating many second messenger molecules, so low ligand concentrations produce large intracellular effects.",
    "Desensitisation: G-protein receptor kinases phosphorylate the occupied receptor, beta-arrestin binds, signalling is uncoupled and the receptor is internalised. This is the molecular basis of pharmacodynamic tolerance.",
    "Biased agonism: a ligand can preferentially activate G-protein or beta-arrestin pathways at the same receptor, which is an active area in opioid and antipsychotic development.",
    "Downstream, protein kinase A phosphorylates CREB, driving transcription of genes including BDNF. This is the standard account of why antidepressant effects take weeks."
  ],
  cards:[
    ["Describe the G-protein activation cycle.","Ligand binding causes a conformational change, GDP is exchanged for GTP on the alpha subunit, and the heterotrimer dissociates into G alpha-GTP and G beta-gamma, both of which act on effectors. Intrinsic GTPase activity hydrolyses GTP and terminates signalling."],
    ["Give the second messenger consequences of Gs, Gi and Gq coupling.","Gs stimulates adenylyl cyclase, raising cAMP and activating protein kinase A. Gi inhibits adenylyl cyclase, lowering cAMP. Gq activates phospholipase C, generating IP3 which mobilises intracellular calcium, and diacylglycerol which activates protein kinase C."],
    ["What is beta-arrestin and why does it matter?","A protein that binds phosphorylated occupied receptors, uncoupling them from G proteins and mediating internalisation. It underlies receptor desensitisation and tolerance, and biased ligands can selectively engage G-protein or arrestin pathways."]
  ],
  note:[
    "G-protein coupled receptors are the target of a large proportion of all licensed medicines.",
    "Lithium acts downstream of receptors, on inositol monophosphatase and GSK-3 beta, rather than at a receptor.",
    "Constitutive activity, signalling without ligand, is what makes inverse agonism possible.",
    "Receptor upregulation follows chronic antagonism and underlies supersensitivity phenomena such as tardive dyskinesia and rebound psychosis.",
    "CREB and BDNF are the downstream endpoint linking receptor pharmacology to neuroplasticity."
  ],
  refs:["stahl","agrawal"] };

TEACH["4.3.1.2.2"] = { free:false,
  simple:"The other kind of receptor is a hole in the wall with a lock on it. The transmitter is the key, the hole opens, ions rush through, and the whole thing is over in milliseconds. Fast, simple, and the target of every sedative you will ever prescribe.",
  teach:[
    "Ionotropic receptors are ligand-gated ion channels. Binding opens the pore directly, with millisecond onset and offset. No second messengers are involved.",
    "GABA-A: a pentamer, usually two alpha, two beta and one gamma subunit, forming a chloride channel. Opening hyperpolarises the cell. Benzodiazepines bind at the alpha-gamma interface as positive allosteric modulators and increase the frequency of channel opening. Barbiturates increase the duration of opening and at high dose can open the channel without GABA, which is why they kill in overdose.",
    "GABA-A subunit selectivity: alpha-1 mediates sedation, amnesia and anticonvulsant effect; alpha-2 and alpha-3 mediate anxiolysis and muscle relaxation. Z-drugs are relatively alpha-1 selective.",
    "Glycine receptors are the other major inhibitory ionotropic receptor, chiefly in brainstem and spinal cord, and are blocked by strychnine.",
    "Glutamate: AMPA mediates fast excitatory transmission and is sodium and potassium permeable. NMDA requires glutamate, a co-agonist glycine or D-serine, and depolarisation to relieve the magnesium block, and is calcium permeable, making it the coincidence detector for plasticity. Kainate is the third.",
    "Nicotinic acetylcholine receptors are pentameric cation channels. Neuronal and neuromuscular subtypes differ in subunit composition, which is why muscle relaxants do not act centrally.",
    "5-HT3 is the only ionotropic serotonin receptor, a cation channel, blocked by ondansetron and by mirtazapine.",
    "Purinergic P2X receptors are ionotropic ATP-gated channels.",
    "The clinical shortcut: if a drug works in seconds to minutes it is probably acting at an ionotropic receptor or a transporter; if it takes weeks it is acting through metabotropic signalling and downstream plasticity."
  ],
  cards:[
    ["How do benzodiazepines and barbiturates differ at the GABA-A receptor?","Benzodiazepines increase the frequency of channel opening and require GABA to be present. Barbiturates increase the duration of channel opening and at high concentrations can open the channel directly without GABA, which is why they are far more dangerous in overdose."],
    ["Name the ionotropic glutamate receptors and the unique requirements of NMDA.","AMPA, NMDA and kainate. NMDA requires glutamate, a co-agonist glycine or D-serine, and membrane depolarisation sufficient to expel the magnesium block, and is permeable to calcium."],
    ["Which GABA-A subunit mediates sedation and which anxiolysis?","Alpha-1 mediates sedation, amnesia and anticonvulsant action; alpha-2 and alpha-3 mediate anxiolysis and muscle relaxation. Z-drugs are relatively alpha-1 selective."]
  ],
  note:[
    "Flumazenil is a competitive antagonist at the benzodiazepine site and reverses benzodiazepine but not barbiturate or alcohol effects.",
    "Alcohol potentiates GABA-A and inhibits NMDA; chronic use produces compensatory changes explaining withdrawal seizures.",
    "Ketamine and phencyclidine are non-competitive NMDA channel blockers; memantine is uncompetitive with moderate affinity and fast off-rate, which is why it is tolerated.",
    "Strychnine blocks glycine receptors, producing convulsions with preserved consciousness.",
    "5-HT3 antagonism explains the antiemetic effect of mirtazapine and ondansetron."
  ],
  refs:["stahl","agrawal","maudsley"] };

TEACH["4.3.1.3"] = { free:false,
  simple:"Affinity is how tightly a drug holds on. Efficacy is what it does once it is holding on. A drug can hold on beautifully and do absolutely nothing, and that drug is an antagonist. Keeping those two ideas separate solves most pharmacodynamics questions.",
  teach:[
    "Affinity is the tendency of a drug to bind its receptor, expressed as the dissociation constant Kd. A low Kd means high affinity. Ki is the inhibition constant from competition binding.",
    "Efficacy, or intrinsic activity, is the ability to produce a response once bound. Full agonist 1, partial agonist between 0 and 1, antagonist 0, inverse agonist below 0.",
    "Potency is the dose required for a given effect, expressed as EC50 or ED50. It combines affinity and efficacy and says nothing about maximum achievable effect.",
    "Emax is the maximal effect and reflects efficacy. A more potent drug is not a better drug; it simply works at a lower dose.",
    "Occupancy: the proportion of receptors bound at a given concentration. In psychiatry the key figures are antipsychotic D2 occupancy of roughly 60 to 70 per cent for efficacy, above 80 per cent for extrapyramidal effects, and around 72 per cent for hyperprolactinaemia.",
    "Assessment methods: radioligand binding assays measure affinity in vitro, producing the receptor affinity tables in textbooks. Functional assays measure efficacy. PET with displaceable radioligands measures occupancy in living human brain, which is how the D2 occupancy figures were established.",
    "Fast dissociation, Kapur and Seeman: clozapine and quetiapine dissociate rapidly from D2 receptors, so transient occupancy is achieved without sustained blockade. This is one explanation for their low extrapyramidal burden.",
    "In vitro affinity does not translate directly to clinical effect. Brain penetration, P-glycoprotein efflux, active metabolites and receptor reserve all intervene."
  ],
  cards:[
    ["Distinguish affinity, efficacy and potency.","Affinity is the tendency to bind the receptor, measured by Kd or Ki. Efficacy is the ability to produce a response once bound, from full agonist through partial agonist to antagonist and inverse agonist. Potency is the dose required for a given effect and combines both."],
    ["What D2 occupancy figures should be known for antipsychotics?","Roughly 60 to 70 per cent for antipsychotic efficacy, above approximately 80 per cent for extrapyramidal side effects, and around 72 per cent for hyperprolactinaemia."],
    ["How is receptor occupancy measured in living human brain?","Positron emission tomography with a displaceable radioligand, comparing binding before and during drug administration. This is how the antipsychotic D2 occupancy thresholds were established."]
  ],
  note:[
    "A low Kd indicates high affinity; this direction catches people out.",
    "Fast dissociation from D2, Kapur and Seeman, is one explanation for the low extrapyramidal burden of clozapine and quetiapine.",
    "Receptor reserve means that a maximal response may be achieved with less than full occupancy in some systems.",
    "Radioligand binding tables describe in vitro affinity and do not predict clinical effect on their own.",
    "Potency determines the dose in milligrams and has no bearing on clinical superiority."
  ],
  refs:["stahl","maudsley"] };

TEACH["4.3.1.4"] = { free:false,
  simple:"You do not need to memorise side effect lists if you know each drug's receptor profile. Olanzapine hits histamine hard, so it sedates and adds weight. Haloperidol hits D2 hard and little else, so it causes movement problems and few metabolic ones. The profile predicts the patient's experience.",
  teach:[
    "Haloperidol: high-affinity D2 antagonist with little else. High extrapyramidal burden, hyperprolactinaemia, QTc prolongation especially intravenously, low metabolic burden, little sedation.",
    "Chlorpromazine: D2 plus substantial H1, alpha-1 and muscarinic blockade. Sedation, postural hypotension, anticholinergic effects, photosensitivity, and lower extrapyramidal burden than haloperidol at equivalent antipsychotic effect.",
    "Olanzapine: D2, 5-HT2A, and marked H1 and 5-HT2C. The most sedating and among the most metabolically harmful of the commonly used drugs, with low extrapyramidal burden and modest prolactin effect.",
    "Risperidone: potent D2 and 5-HT2A with alpha-1 blockade. Dose-dependent extrapyramidal effects above about 6 mg, and the highest prolactin elevation of the second-generation drugs alongside amisulpride and paliperidone.",
    "Quetiapine: low and transient D2 occupancy with strong H1 and alpha-1 blockade, and an active metabolite norquetiapine with noradrenaline reuptake inhibition and 5-HT2C antagonism explaining its antidepressant effect. Sedating, hypotensive, low extrapyramidal and prolactin burden.",
    "Aripiprazole: D2 and 5-HT1A partial agonist, 5-HT2A antagonist. Low metabolic burden, lowers prolactin, but akathisia is common and activation and insomnia occur.",
    "Clozapine: weak D2, high D4, 5-HT2A, H1, muscarinic and alpha-1. Uniquely effective in treatment resistance and the most dangerous drug in psychiatry: agranulocytosis, myocarditis, constipation which can be fatal, seizures, hypersalivation despite anticholinergic action, and severe metabolic effects.",
    "Amitriptyline: serotonin and noradrenaline reuptake inhibition plus H1, muscarinic and alpha-1 blockade, and sodium channel effects that make it cardiotoxic in overdose.",
    "Mirtazapine: alpha-2, 5-HT2 and 5-HT3 antagonism with strong H1 blockade. Sedating and appetite-increasing, most so at low doses because noradrenergic effects offset histaminergic sedation as the dose rises. Low sexual dysfunction."
  ],
  cards:[
    ["Explain why mirtazapine is more sedating at low doses than at high doses.","At low doses H1 antagonism predominates. As the dose rises, increased noradrenergic transmission from alpha-2 blockade produces an alerting effect that partially offsets the histaminergic sedation."],
    ["Which antipsychotics carry the highest and lowest metabolic burden?","Highest: clozapine and olanzapine. Intermediate: quetiapine and risperidone. Lowest: aripiprazole, lurasidone, ziprasidone and amisulpride."],
    ["Why does quetiapine have antidepressant efficacy?","Its active metabolite norquetiapine inhibits noradrenaline reuptake and antagonises 5-HT2C, mechanisms shared with established antidepressants, which is why quetiapine is licensed in bipolar depression and used as antidepressant augmentation."]
  ],
  note:[
    "Risperidone's extrapyramidal burden is dose-dependent and rises steeply above about 6 mg daily.",
    "Aripiprazole partial agonism can precipitate psychotic worsening if switched abruptly from a potent D2 antagonist.",
    "Clozapine hypersalivation occurs despite anticholinergic properties, attributed to M4 agonism and alpha-2 antagonism.",
    "QTc: highest risk with intravenous haloperidol, pimozide and sertindole; lowest with aripiprazole and lurasidone.",
    "Lurasidone must be taken with food of at least 350 calories or absorption falls by more than half."
  ],
  refs:["maudsley","stahl","bnf"] };

TEACH["4.3.1.5.1"] = { free:false,
  simple:"Intrinsic activity is a number between zero and one describing what a drug does after it has bound. One means it does everything the natural transmitter would. Zero means it does nothing at all. The interesting drugs sit in between.",
  teach:[
    "Intrinsic activity, or intrinsic efficacy, is the ability of a bound ligand to activate the receptor and produce a response.",
    "Scale: full agonist 1, partial agonist between 0 and 1, neutral antagonist 0, inverse agonist negative.",
    "The concept requires that receptors have constitutive activity, some signalling in the absence of ligand. Without that, inverse agonism cannot exist.",
    "A partial agonist behaves differently depending on the prevailing tone. Where endogenous transmitter is low, it acts as an agonist and raises signalling. Where transmitter is high, it competes with the full agonist and reduces signalling, acting as a functional antagonist.",
    "Aripiprazole is the clinical demonstration. As a D2 partial agonist it reduces excessive mesolimbic dopamine signalling while maintaining tuberoinfundibular and nigrostriatal tone, which is why it lowers rather than raises prolactin and has low extrapyramidal burden.",
    "Buprenorphine is the other key example: a partial mu agonist with a ceiling on respiratory depression, safer in overdose, but able to displace a full agonist and precipitate withdrawal if given too early.",
    "Ceiling effect: because maximal response is submaximal, increasing the dose of a partial agonist beyond receptor saturation produces no further effect. This is a safety property and a therapeutic limitation.",
    "Practical consequence: switching from a potent D2 antagonist directly to aripiprazole can precipitate agitation or psychotic worsening, so cross-titration is required."
  ],
  cards:[
    ["Why does a partial agonist behave differently in high and low transmitter states?","Where endogenous agonist tone is low it produces net receptor activation and acts as an agonist. Where tone is high it competes with the full agonist and produces a lower maximal response, acting as a functional antagonist."],
    ["Why can aripiprazole lower prolactin?","As a D2 partial agonist it maintains dopaminergic tone at tuberoinfundibular receptors rather than blocking them, so prolactin inhibition is preserved and prolactin falls rather than rises."],
    ["What is the clinical significance of buprenorphine's ceiling effect?","Its partial mu agonism produces a ceiling on respiratory depression, making it considerably safer than methadone in overdose. Its high receptor affinity means it can displace full agonists and precipitate withdrawal if given too soon after opioid use."]
  ],
  note:[
    "Cariprazine and brexpiprazole are also D2 partial agonists; cariprazine has relative D3 preference.",
    "Switching abruptly from a potent D2 antagonist to aripiprazole risks agitation and psychotic worsening; cross-titrate.",
    "Buprenorphine must be started only when objective withdrawal has begun, guided by a withdrawal scale.",
    "Varenicline is a nicotinic partial agonist, reducing craving while blunting the reward of smoking.",
    "Buspirone is a 5-HT1A partial agonist, non-sedating and non-dependence-forming, taking weeks to work."
  ],
  refs:["stahl","maudsley","semaddict"] };

TEACH["4.3.1.5.2"] = { free:true,
  simple:"Four words that get muddled constantly. An agonist switches the receptor on. An antagonist blocks it and does nothing itself. A partial agonist switches it partly on. An inverse agonist switches off activity that was happening even without a transmitter.",
  teach:[
    "Agonism: binding produces the same response as the endogenous transmitter. Full agonists produce the maximal response.",
    "Antagonism: binding produces no response and prevents agonist binding. A neutral antagonist has affinity and zero efficacy.",
    "Competitive antagonism is surmountable. It shifts the dose-response curve to the right with the same maximum, and can be overcome by increasing agonist concentration. Naloxone at the mu receptor.",
    "Non-competitive or irreversible antagonism is insurmountable. It lowers the maximum response and shifts the curve down. Phenoxybenzamine at alpha receptors; irreversible MAOIs, where recovery requires new enzyme synthesis, which is why a two-week washout is needed.",
    "Partial agonism: submaximal maximal response, acting as agonist in low tone and antagonist in high tone.",
    "Inverse agonism: reduces constitutive receptor activity below baseline, producing an effect opposite to that of an agonist. Many drugs classified as antagonists are in fact inverse agonists. Rimonabant, a CB1 inverse agonist, was withdrawn because of depression and suicidality.",
    "Allosteric modulation acts at a site distinct from the orthosteric site. Positive allosteric modulators such as benzodiazepines enhance the effect of the endogenous transmitter without activating the receptor alone, which is the reason for their overdose safety.",
    "Physiological antagonism is opposition through a different receptor system, as adrenaline opposes histamine in anaphylaxis. Chemical antagonism is direct inactivation, as chelation.",
    "Naming caution: naloxone at mu is competitive and surmountable, so in overdose with a very high opioid load repeated doses or an infusion are needed."
  ],
  cards:[
    ["Distinguish competitive from non-competitive antagonism on a dose-response curve.","Competitive antagonism shifts the curve to the right with an unchanged maximum and is surmountable by increasing agonist concentration. Non-competitive or irreversible antagonism lowers the maximum response and cannot be overcome by more agonist."],
    ["What is an inverse agonist and give a clinical example.","A ligand that reduces constitutive receptor activity below its baseline, producing an effect opposite to an agonist. Rimonabant, a CB1 inverse agonist licensed for obesity, was withdrawn because of depression, anxiety and suicidality."],
    ["Why are benzodiazepines safer than barbiturates in overdose, in terms of allosteric action?","Benzodiazepines are positive allosteric modulators that enhance the effect of GABA and cannot open the channel without it, so their effect has a ceiling. Barbiturates can directly open the channel at high concentrations, producing unbounded CNS depression."]
  ],
  note:[
    "Irreversible MAOIs require a two-week washout because recovery depends on synthesis of new enzyme; moclobemide is reversible and needs only about 24 hours.",
    "Naloxone has a shorter half-life than most opioids, so repeated doses or an infusion may be required.",
    "Flumazenil reverses benzodiazepines but may precipitate seizures in mixed overdose or benzodiazepine dependence.",
    "Physiological antagonism, such as adrenaline in anaphylaxis, works through a different receptor system rather than at the same receptor.",
    "Many drugs historically described as antagonists are inverse agonists at constitutively active receptors."
  ],
  refs:["stahl","bnf","maudsley"] };

TEACH["4.3.1.6"] = { free:false,
  simple:"When a receptor is switched on, the message does not stop at the wall. It runs inside, gets amplified, and can end up changing which genes the cell reads. That is why a drug taken today can still be changing the brain a month later.",
  teach:[
    "Second messengers: cAMP from adenylyl cyclase, activating protein kinase A; IP3 releasing intracellular calcium; diacylglycerol activating protein kinase C; and calcium acting through calmodulin and CaMKII.",
    "Protein kinases phosphorylate target proteins, altering ion channel behaviour, receptor sensitivity, cytoskeletal structure and transcription factor activity.",
    "CREB, cAMP response element binding protein, is the key transcription factor. Phosphorylated CREB drives expression of genes including BDNF, and this is the standard molecular account of the delayed action of antidepressants.",
    "BDNF acts at TrkB receptors, activating the MAP kinase and PI3K-Akt-mTOR pathways, promoting neuronal survival, dendritic growth and synaptogenesis.",
    "Lithium acts entirely at this level rather than at a receptor: inhibition of inositol monophosphatase producing inositol depletion, and inhibition of GSK-3 beta, which sits at the junction of several survival pathways.",
    "Valproate is a histone deacetylase inhibitor, acting directly on chromatin and therefore on gene expression.",
    "Ketamine's rapid antidepressant effect is attributed to a burst of glutamate acting at AMPA receptors, activating mTOR and producing rapid synaptogenesis in prefrontal cortex, bypassing the slow monoamine route entirely.",
    "Delta FosB accumulates in the nucleus accumbens with repeated drug exposure and is proposed as a molecular switch for the persistence of addiction.",
    "The unifying point: receptor events happen in milliseconds, signalling cascades in minutes, and transcriptional and structural change over days to weeks. Clinical timescales match the last of these, not the first."
  ],
  cards:[
    ["Trace the pathway from a Gs-coupled receptor to a change in gene expression.","Receptor activates Gs, which stimulates adenylyl cyclase, raising cAMP, which activates protein kinase A, which phosphorylates CREB, which acts as a transcription factor promoting expression of genes including BDNF."],
    ["Which intracellular targets are proposed for lithium?","Inositol monophosphatase, whose inhibition depletes inositol and dampens phosphatidylinositol signalling, and glycogen synthase kinase 3 beta, whose inhibition affects multiple survival and plasticity pathways."],
    ["How does ketamine produce a rapid antidepressant effect?","Through a glutamate surge acting at AMPA receptors, activating the mTOR pathway and producing rapid synaptogenesis in prefrontal cortex, bypassing monoamine transporters and the slow adaptive changes they require."]
  ],
  note:[
    "The mismatch between millisecond receptor events and weeks-long clinical response is the central argument for downstream mechanisms.",
    "BDNF falls with stress and rises with antidepressants, exercise and ECT.",
    "Valproate's histone deacetylase inhibition links mood stabilisation directly to epigenetic mechanisms.",
    "Delta FosB is proposed as a molecular switch in addiction because of its unusual stability.",
    "mTOR inhibition with rapamycin blocks ketamine's antidepressant effect in animals, supporting the mechanism."
  ],
  refs:["stahl","agrawal","lynall"] };

TEACH["4.3.2.1"] = { free:true,
  simple:"Every antipsychotic ever licensed does one thing: it turns down dopamine at the D2 receptor. Everything else about them, the sedation, the weight, the movement problems, is what else they happen to bump into on the way.",
  teach:[
    "The shared mechanism is D2 receptor antagonism, or partial agonism for aripiprazole, cariprazine and brexpiprazole. No licensed antipsychotic lacks D2 activity.",
    "Occupancy thresholds: roughly 60 to 70 per cent for antipsychotic effect, above about 80 per cent for extrapyramidal effects, around 72 per cent for hyperprolactinaemia.",
    "Onset is not immediate. Receptor blockade is immediate but clinical response develops over days to weeks, with depolarisation block of dopamine neurones and downstream adaptation proposed as the explanation.",
    "5-HT2A antagonism combined with D2 antagonism is the classical explanation of atypicality: 5-HT2A blockade increases dopamine release in nigrostriatal and mesocortical pathways, reducing extrapyramidal effects and possibly helping negative symptoms.",
    "Fast dissociation, Kapur and Seeman: clozapine and quetiapine leave the D2 receptor rapidly, giving transient rather than sustained blockade and low extrapyramidal burden.",
    "Partial agonism stabilises rather than blocks, reducing signalling where dopamine is high and maintaining it where dopamine is low.",
    "Clozapine remains unexplained. It has low D2 occupancy, high D4, 5-HT2A, muscarinic, histaminergic and alpha-adrenergic activity, and is uniquely effective in treatment resistance. No current model accounts for this.",
    "Glutamatergic and muscarinic mechanisms are the current frontier. Xanomeline-trospium, a muscarinic M1/M4 agonist paired with a peripherally restricted antagonist, is the first non-D2 antipsychotic mechanism to reach licensing in the United States.",
    "The mechanistic point for the exam: efficacy against positive symptoms tracks D2 occupancy; efficacy against negative and cognitive symptoms does not, and that is the unsolved problem."
  ],
  cards:[
    ["What is the shared mechanism of all licensed antipsychotics?","D2 receptor antagonism, or D2 partial agonism in the case of aripiprazole, cariprazine and brexpiprazole."],
    ["State the classical explanation of atypicality.","Combined 5-HT2A antagonism with D2 antagonism. 5-HT2A blockade increases dopamine release in nigrostriatal and mesocortical pathways, reducing extrapyramidal effects at antipsychotic doses."],
    ["Why is clozapine's efficacy mechanistically unexplained?","It achieves relatively low D2 occupancy yet is uniquely effective in treatment-resistant schizophrenia. Its high affinity for D4, 5-HT2A, muscarinic, histaminergic and alpha-adrenergic receptors has not been shown to account for the difference."]
  ],
  note:[
    "There is no evidence that exceeding licensed doses improves response; adverse effects rise without benefit.",
    "Depolarisation block of dopamine neurones over two to three weeks is one proposed explanation for delayed onset.",
    "Amisulpride is a selective D2 and D3 antagonist with preferential limbic action and, at low dose, presynaptic autoreceptor blockade used for negative symptoms.",
    "CATIE and CUtLASS found no clear superiority of second-generation drugs other than clozapine.",
    "Cariprazine has relative D3 preference and is licensed for predominant negative symptoms in some jurisdictions."
  ],
  refs:["stahl","maudsley","semgen"] };

TEACH["4.3.2.2"] = { free:true,
  simple:"Antidepressants raise serotonin or noradrenaline within hours, and people get better in weeks. That gap is the most important fact about them. Whatever they do that helps, it is not the immediate chemical change; it is what the brain does in response over the following month.",
  teach:[
    "SSRIs block the serotonin transporter, raising synaptic serotonin immediately. Somatodendritic 5-HT1A autoreceptors initially suppress raphe firing; their desensitisation over two to four weeks permits increased forebrain transmission. This is the standard explanation of the delay.",
    "SNRIs block serotonin and noradrenaline transporters. Venlafaxine is predominantly serotonergic at low dose and adds noradrenergic action above about 150 mg. Duloxetine is dual across its range.",
    "Tricyclics block both transporters plus H1, muscarinic and alpha-1 receptors, and sodium channels, which is why they sedate, cause anticholinergic effects and are cardiotoxic in overdose.",
    "MAOIs inhibit monoamine oxidase, increasing stored and released monoamines. Irreversible inhibitors require a two-week washout and dietary tyramine restriction; moclobemide is reversible and selective for MAO-A.",
    "Mirtazapine blocks alpha-2 auto- and heteroreceptors, increasing noradrenaline and serotonin release, with 5-HT2 and 5-HT3 blockade directing serotonin towards 5-HT1A. Strong H1 blockade gives sedation and appetite increase.",
    "Bupropion inhibits noradrenaline and dopamine reuptake, with no serotonergic action, hence minimal sexual dysfunction and no weight gain, but lowered seizure threshold.",
    "Agomelatine is an MT1 and MT2 agonist and 5-HT2C antagonist, resynchronising circadian rhythm; it requires liver function monitoring.",
    "Vortioxetine combines transporter inhibition with multiple direct receptor actions.",
    "Ketamine and esketamine act at NMDA receptors, producing effect within hours through AMPA throughput and mTOR-dependent synaptogenesis, which is the strongest evidence that plasticity rather than monoamine level is the mechanism.",
    "Downstream, all of these converge on CREB, BDNF and increased synaptic plasticity, which is the neurotrophic account."
  ],
  cards:[
    ["Explain the delay in SSRI response.","Transporter blockade raises synaptic serotonin at once, but somatodendritic 5-HT1A autoreceptors initially inhibit raphe firing. Their desensitisation over two to four weeks allows increased forebrain serotonergic transmission and downstream neuroplastic change."],
    ["Describe mirtazapine's mechanism.","Antagonism of alpha-2 auto- and heteroreceptors increases noradrenaline and serotonin release. 5-HT2 and 5-HT3 blockade directs serotonergic transmission towards 5-HT1A and reduces nausea and sexual dysfunction. Strong H1 blockade produces sedation and appetite increase."],
    ["Why is ketamine's mechanism theoretically significant?","It produces antidepressant effect within hours without acting on monoamine transporters, through glutamatergic AMPA throughput and mTOR-dependent synaptogenesis, indicating that synaptic plasticity rather than monoamine availability is the therapeutic mechanism."]
  ],
  note:[
    "Venlafaxine becomes meaningfully noradrenergic above about 150 mg daily.",
    "Bupropion is contraindicated in eating disorders and in seizure disorder because it lowers seizure threshold.",
    "Agomelatine requires liver function tests at baseline and periodically because of hepatotoxicity.",
    "Cipriani's 2018 network meta-analysis found all 21 antidepressants studied more effective than placebo, with modest differences between them.",
    "Antidepressants can precipitate a switch to mania in bipolar disorder and should not be used unopposed."
  ],
  refs:["stahl","maudsley","nice"] };

TEACH["4.3.2.3"] = { free:false,
  simple:"Mood stabilisers are the odd group, because they do not share a receptor. Lithium is a salt, valproate is an anticonvulsant, lamotrigine is another, and several antipsychotics qualify. What they share is not a target but an effect further inside the cell.",
  teach:[
    "Lithium acts intracellularly, not at a receptor. Two main hypotheses: inhibition of inositol monophosphatase producing inositol depletion and dampening of phosphatidylinositol signalling; and inhibition of glycogen synthase kinase 3 beta, affecting circadian, apoptotic and plasticity pathways.",
    "Lithium also increases BDNF and grey matter volume in imaging studies, and is neuroprotective in animal models.",
    "Sodium valproate: blocks voltage-gated sodium channels, increases GABA availability by inhibiting GABA transaminase, blocks T-type calcium channels, and inhibits histone deacetylase, acting directly on gene expression.",
    "Carbamazepine: use-dependent blockade of voltage-gated sodium channels, stabilising them in the inactivated state. Potent enzyme inducer with autoinduction.",
    "Lamotrigine: sodium channel blockade with reduction of presynaptic glutamate release. Better in bipolar depression and depressive relapse prevention than in mania.",
    "Antipsychotics as mood stabilisers: quetiapine, olanzapine, aripiprazole, risperidone and asenapine, acting through D2 and, for quetiapine, noradrenergic and 5-HT2C actions of norquetiapine.",
    "The kindling hypothesis, Post, provided the original rationale for anticonvulsants in mood disorder, by analogy with epileptogenesis.",
    "Clinical hierarchy: lithium has the best long-term prophylactic evidence and is the only agent with good evidence for reducing suicide. Valproate is effective in mania and is contraindicated in women of childbearing potential outside the Pregnancy Prevention Programme. Lamotrigine is for the depressive pole."
  ],
  cards:[
    ["Name the two principal intracellular hypotheses for lithium's action.","Inhibition of inositol monophosphatase, producing inositol depletion and reduced phosphatidylinositol signalling; and inhibition of glycogen synthase kinase 3 beta."],
    ["Name four mechanisms of sodium valproate.","Blockade of voltage-gated sodium channels; increased GABA availability through inhibition of GABA transaminase; T-type calcium channel blockade; and histone deacetylase inhibition affecting gene expression."],
    ["Which mood stabiliser is most effective for the depressive pole and what limits its use?","Lamotrigine, which prevents depressive relapse and treats bipolar depression. Its use is limited by the need for slow titration because of the risk of Stevens-Johnson syndrome, and by interactions requiring dose halving with valproate and doubling with carbamazepine."]
  ],
  note:[
    "Lithium is the only mood stabiliser with good evidence for reducing suicide in mood disorders.",
    "Abrupt lithium discontinuation causes rebound mania; withdraw over at least four weeks where possible.",
    "Lamotrigine dose is halved when combined with valproate, which inhibits its glucuronidation, and roughly doubled with carbamazepine, which induces it.",
    "Carbamazepine autoinduction means levels fall over the first two to four weeks.",
    "Valproate must not be used in women and girls of childbearing potential unless the conditions of the Pregnancy Prevention Programme are met."
  ],
  refs:["maudsley","stahl","nice"] };

TEACH["4.3.2.4"] = { free:false,
  simple:"Sedatives all work on the same brake pedal in the brain, the GABA-A receptor. Benzodiazepines press it harder when the natural transmitter is already there. Barbiturates can press it themselves, with nobody's permission, which is exactly why they kill people and benzodiazepines mostly do not.",
  teach:[
    "Benzodiazepines bind at the alpha-gamma interface of the GABA-A receptor as positive allosteric modulators, increasing the frequency of chloride channel opening. They require GABA to be present, which gives their effect a ceiling.",
    "Barbiturates increase the duration of channel opening and at higher concentrations open the channel directly without GABA. There is no ceiling, hence respiratory depression and death in overdose.",
    "Subunit selectivity: alpha-1 mediates sedation, amnesia and anticonvulsant action; alpha-2 and alpha-3 mediate anxiolysis and muscle relaxation. Z-drugs are relatively alpha-1 selective, which is why they are hypnotics rather than anxiolytics.",
    "Zopiclone, zolpidem and zaleplon act at the same receptor complex. Their dependence potential is real, not absent, and this is regularly misunderstood.",
    "Alcohol also potentiates GABA-A and inhibits NMDA, which is why cross-tolerance exists and why benzodiazepines are used in alcohol withdrawal.",
    "Tolerance develops to sedative and anticonvulsant effects faster than to anxiolytic effects, through receptor downregulation and subunit changes.",
    "Withdrawal: anxiety, insomnia, tremor, sweating, perceptual hypersensitivity, depersonalisation and seizures. Onset within one to two days for short-acting and up to a week for long-acting drugs.",
    "Buspirone is different: a 5-HT1A partial agonist, non-sedating, without dependence potential, taking two to four weeks to work and ineffective for acute anxiety or for benzodiazepine withdrawal.",
    "Melatonin and the orexin receptor antagonists, suvorexant and daridorexant, act outside the GABA system entirely."
  ],
  cards:[
    ["How do benzodiazepines and barbiturates differ at GABA-A, and what follows clinically?","Benzodiazepines increase frequency of channel opening and require GABA, giving a ceiling effect and relative overdose safety. Barbiturates increase duration of opening and can open the channel without GABA, producing unbounded CNS and respiratory depression in overdose."],
    ["Which benzodiazepines are preferred in hepatic impairment?","Lorazepam, oxazepam and temazepam, which undergo glucuronidation only and have no active metabolites."],
    ["Describe buspirone's mechanism and its limitations.","A 5-HT1A partial agonist. It is non-sedating and has no dependence potential, but takes two to four weeks to act, is ineffective for acute anxiety, and does not prevent or treat benzodiazepine withdrawal."]
  ],
  note:[
    "Benzodiazepines should be prescribed for no more than two to four weeks, at the lowest effective dose, intermittently where possible.",
    "Withdrawal: switch to an equivalent dose of diazepam and reduce by around an eighth of the dose every two to four weeks.",
    "Paradoxical disinhibition occurs in children, older people and those with learning disability or brain injury.",
    "Flumazenil reverses benzodiazepines but may precipitate seizures in dependence or mixed overdose.",
    "Pregabalin is licensed for generalised anxiety disorder, is a controlled drug, and has genuine misuse and dependence potential."
  ],
  refs:["maudsley","bnf","nice"] };

TEACH["4.3.2.5"] = { free:false,
  simple:"The dementia drugs do not stop the disease. They borrow function from the neurones that are still alive, and the loan comes due. That is not a reason to withhold them, but it is the honest way to describe them to a family who are hoping for more.",
  teach:[
    "Cholinesterase inhibitors: donepezil, rivastigmine and galantamine. They inhibit acetylcholinesterase, increasing synaptic acetylcholine, on the basis of the cholinergic deficit from nucleus basalis of Meynert degeneration.",
    "Donepezil is a reversible selective acetylcholinesterase inhibitor with a long half-life allowing once-daily dosing. Rivastigmine inhibits both acetylcholinesterase and butyrylcholinesterase and is available as a patch, which reduces gastrointestinal effects. Galantamine additionally modulates nicotinic receptors allosterically.",
    "Licensed for mild to moderate Alzheimer's disease. Rivastigmine is also licensed for Parkinson's disease dementia. Benefits are symptomatic, of modest effect size, and do not modify disease progression.",
    "Adverse effects follow the pharmacology: nausea, vomiting, diarrhoea, anorexia, bradycardia, syncope, vivid dreams, muscle cramps, and worsening of peptic ulcer and asthma. Caution in cardiac conduction disease.",
    "Memantine is an uncompetitive NMDA receptor antagonist with moderate affinity and fast off-rate, blocking pathological tonic glutamate activation while permitting physiological phasic signalling. This is why it is tolerated where ketamine would not be.",
    "Memantine is licensed for moderate to severe Alzheimer's disease, or where cholinesterase inhibitors are contraindicated or not tolerated. It may be combined with a cholinesterase inhibitor.",
    "In dementia with Lewy bodies and Parkinson's disease dementia, cholinesterase inhibitors work better than in Alzheimer's disease, particularly for hallucinations and fluctuating cognition.",
    "Cholinesterase inhibitors are not indicated in frontotemporal dementia and may worsen behaviour, and are not recommended in pure vascular dementia.",
    "Anti-amyloid antibodies lecanemab and donanemab are disease-modifying rather than symptomatic. Both hold MHRA licences; NICE final draft guidance in June 2025 did not recommend either for NHS use."
  ],
  cards:[
    ["Name the cholinesterase inhibitors and their licensed indications.","Donepezil, rivastigmine and galantamine, licensed for mild to moderate Alzheimer's disease. Rivastigmine is additionally licensed for Parkinson's disease dementia."],
    ["Why is memantine tolerated when other NMDA antagonists are not?","It is an uncompetitive antagonist with moderate affinity and a fast off-rate, blocking pathological tonic glutamate activation while allowing physiological phasic signalling to proceed, so it does not produce the dissociative effects of high-affinity blockers."],
    ["In which dementia do cholinesterase inhibitors work best, and in which should they be avoided?","They are most effective in dementia with Lewy bodies and Parkinson's disease dementia, particularly for hallucinations and fluctuation. They are not indicated in frontotemporal dementia, where they may worsen behaviour, or in pure vascular dementia."]
  ],
  note:[
    "Cholinesterase inhibitors have modest symptomatic benefit and do not modify disease course.",
    "Bradycardia and syncope with cholinesterase inhibitors can lead to falls, pacemaker insertion and fractures; take a cardiac history and consider an ECG.",
    "Antipsychotics in dementia raise stroke risk roughly threefold and increase mortality; avoid entirely in Lewy body disease where possible.",
    "ARIA is the key adverse effect of anti-amyloid antibodies, commonest in APOE e4 homozygotes.",
    "There is no licensed cognitive treatment for vascular dementia; manage vascular risk factors."
  ],
  refs:["nice","oxoldage","maudsley"] };

TEACH["4.3.2.6"] = { free:false,
  simple:"Opioids work because the brain already has its own opioid system for damping pain and producing relief. The drugs simply do it harder and for longer. Everything else about them, the constipation, the euphoria, the deaths, follows from the same receptor.",
  teach:[
    "Three receptor types, all G-protein coupled and Gi-linked: mu, delta and kappa. Endogenous ligands are endorphins, enkephalins and dynorphins.",
    "Mu receptor activation produces analgesia, euphoria, respiratory depression, miosis, constipation, cough suppression, and physical dependence. Almost all clinically relevant opioid effect is mu-mediated.",
    "Kappa activation produces analgesia with dysphoria and, at high levels, psychotomimetic effects. This is why kappa antagonism is an antidepressant target and why kappa agonists failed as analgesics.",
    "Mechanism at the cell: Gi coupling reduces cAMP, opens potassium channels causing hyperpolarisation, and closes voltage-gated calcium channels reducing transmitter release.",
    "In the ventral tegmental area, mu agonists inhibit GABA interneurones, disinhibiting dopamine neurones and increasing nucleus accumbens dopamine. That is the reward mechanism.",
    "Tolerance develops rapidly to analgesia, euphoria and respiratory depression, and barely at all to constipation and miosis, which is why chronic users remain constipated and pinpoint.",
    "Methadone is a full mu agonist with a long and variable half-life, effective for retention in treatment, more dangerous in overdose, and prolongs the QTc.",
    "Buprenorphine is a partial mu agonist and kappa antagonist with high receptor affinity: a ceiling on respiratory depression makes it safer in overdose, but it can displace full agonists and precipitate withdrawal if given too early.",
    "Naloxone is a competitive mu antagonist with a shorter half-life than most opioids, so repeated doses or infusion may be required. Naltrexone is the long-acting oral equivalent used in relapse prevention.",
    "Opioid-induced hyperalgesia means escalating the dose in chronic pain can increase pain rather than relieve it."
  ],
  cards:[
    ["Which opioid receptor mediates the clinically important effects, and what are they?","Mu. Analgesia, euphoria, respiratory depression, miosis, constipation, cough suppression and physical dependence."],
    ["Compare methadone and buprenorphine.","Methadone is a full mu agonist with a long variable half-life, good treatment retention, greater overdose risk and QTc prolongation. Buprenorphine is a high-affinity partial mu agonist and kappa antagonist with a ceiling on respiratory depression, safer in overdose, but liable to precipitate withdrawal if started too soon."],
    ["Why do chronic opioid users remain constipated and have pinpoint pupils?","Tolerance develops rapidly to analgesia, euphoria and respiratory depression but minimally to constipation and miosis, so those effects persist throughout treatment."]
  ],
  note:[
    "Loss of tolerance after abstinence, following prison release or detoxification, is the commonest setting for fatal opioid overdose.",
    "Take-home naloxone should be offered to anyone at risk of opioid overdose and to those around them.",
    "Kappa agonism produces dysphoria, which is why kappa antagonists are being developed as antidepressants.",
    "Opioid-induced hypogonadism is common with long-term use and causes fatigue, low mood and reduced libido.",
    "Long-term opioids for chronic non-cancer pain have poor evidence of benefit and clear evidence of harm."
  ],
  refs:["semaddict","stahl","bnf"] };

TEACH["4.3.2.7"] = { free:false,
  simple:"Stimulants all raise dopamine and noradrenaline, but they do it in two different ways, and the difference decides how dangerous they are. One blocks the door so the transmitter cannot get back in. The other kicks the door open and empties the room.",
  teach:[
    "Methylphenidate blocks the dopamine and noradrenaline transporters, preventing reuptake. Its effect depends on ongoing release, which limits the maximum achievable increase.",
    "Amphetamines block the transporters and additionally reverse their direction and displace transmitter from vesicles via VMAT2, producing much larger and release-independent increases. This is why amphetamines have higher abuse potential.",
    "Lisdexamfetamine is a prodrug requiring enzymatic conversion by red blood cells, giving slower onset and lower abuse liability than immediate-release amphetamine.",
    "Cocaine blocks dopamine, noradrenaline and serotonin transporters and is also a local anaesthetic through sodium channel blockade, which contributes to its cardiac toxicity.",
    "In ADHD, the therapeutic effect follows the inverted U: prefrontal catecholamine signalling is optimised at moderate levels and impaired by both deficiency and excess.",
    "Modafinil has a less well-defined mechanism involving weak dopamine transporter inhibition and effects on orexin and histamine systems; it is licensed for narcolepsy.",
    "Non-stimulants: atomoxetine is a selective noradrenaline reuptake inhibitor with delayed onset over weeks and no abuse potential. Guanfacine is an alpha-2A adrenoceptor agonist strengthening prefrontal network connectivity.",
    "Adverse effects of stimulants: appetite suppression, insomnia, weight loss, growth suppression in children, raised pulse and blood pressure, and rarely tics or psychosis.",
    "Treating ADHD with stimulants does not increase, and may reduce, later substance misuse. This finding matters clinically and is regularly asked."
  ],
  cards:[
    ["How do methylphenidate and amphetamine differ pharmacologically?","Methylphenidate blocks the dopamine and noradrenaline transporters, so its effect depends on ongoing release. Amphetamine additionally reverses transporter direction and displaces transmitter from vesicles via VMAT2, producing larger release-independent increases and greater abuse potential."],
    ["What is lisdexamfetamine and why was it designed that way?","A prodrug of dexamfetamine requiring enzymatic conversion by red blood cells, giving a slower onset, smoother profile and lower abuse liability than immediate-release amphetamine."],
    ["Does stimulant treatment of ADHD increase the risk of later substance misuse?","No. Treatment does not increase and may reduce the risk, in contrast to untreated ADHD, which is itself associated with increased substance misuse."]
  ],
  note:[
    "Monitoring on stimulants: height, weight, pulse and blood pressure at baseline and every six months.",
    "Atomoxetine carries warnings about hepatic injury and suicidal ideation, and takes several weeks to act.",
    "Stimulants are contraindicated in significant cardiovascular disease; take a cardiac and family history before prescribing.",
    "Stimulant-induced psychosis usually resolves within days to weeks of cessation.",
    "Cocaine's sodium channel blockade contributes to arrhythmia and to its use historically as a local anaesthetic."
  ],
  refs:["maudsley","nice","semaddict"] };

TEACH["4.3.2.8"] = { free:false,
  simple:"Cannabis works because the brain makes its own version already, and that system runs backwards: the receiving cell releases a chemical that travels back to the sending cell and tells it to slow down. Flooding that system with THC is why the effects are so diffuse.",
  teach:[
    "The endocannabinoid system: endogenous ligands anandamide and 2-arachidonoylglycerol, acting at CB1 and CB2 receptors, both Gi-coupled.",
    "CB1 is the most abundant G-protein coupled receptor in the brain, located presynaptically. Endocannabinoids are synthesised on demand by the postsynaptic cell and travel backwards across the synapse, which is retrograde signalling, inhibiting further transmitter release.",
    "CB2 is predominantly on immune cells including microglia and mediates immunomodulatory effects.",
    "Delta-9-tetrahydrocannabinol is a partial agonist at CB1, producing euphoria, altered time perception, impaired short-term memory and coordination, and at higher doses anxiety, paranoia and psychosis.",
    "Cannabidiol is not intoxicating, has low CB1 affinity, and has been studied as an antipsychotic and anxiolytic with mixed results. It is licensed in the UK as an antiepileptic in specific childhood epilepsies.",
    "Synthetic cannabinoid receptor agonists are full CB1 agonists, unlike THC, which is why they carry a far higher risk of severe agitation, psychosis, seizures and death.",
    "Cannabis and psychosis: a dose-response relationship, greatest with high-potency preparations and adolescent onset. The association is robust; causation is supported but not proven, and reverse causation and confounding cannot be entirely excluded.",
    "Cannabis withdrawal is recognised in ICD-11 and DSM-5: irritability, anxiety, sleep disturbance, appetite change and craving.",
    "Rimonabant, a CB1 inverse agonist licensed for obesity, was withdrawn because of depression, anxiety and suicidality, which is strong evidence that the system has an important role in mood."
  ],
  cards:[
    ["What is retrograde signalling in the endocannabinoid system?","Endocannabinoids are synthesised on demand by the postsynaptic neurone and travel backwards across the synapse to act on presynaptic CB1 receptors, inhibiting further neurotransmitter release."],
    ["Why are synthetic cannabinoids more dangerous than cannabis?","They are full agonists at CB1 whereas THC is a partial agonist, so they produce far greater receptor activation, with a high risk of severe agitation, psychosis, seizures, hyperthermia and death."],
    ["Summarise the evidence linking cannabis to psychosis.","A dose-response relationship, strongest for daily use of high-potency preparations and for adolescent onset, with consistent findings across cohort studies. Causation is supported but not proven; confounding and reverse causation cannot be entirely excluded."]
  ],
  note:[
    "CB1 is the most abundant GPCR in the brain and is largely absent from the brainstem, which is why cannabis does not cause fatal respiratory depression.",
    "Cannabidiol is licensed in the UK for seizures in Lennox-Gastaut and Dravet syndromes and in tuberous sclerosis.",
    "The rimonabant withdrawal is the strongest evidence for endocannabinoid involvement in mood regulation.",
    "Cannabis use is associated with earlier onset of psychosis and with poorer outcome in established illness.",
    "Cannabis hyperemesis syndrome, with cyclical vomiting relieved by hot bathing, is increasingly recognised."
  ],
  refs:["semaddict","stahl","agrawal"] };

TEACH["4.3.2.9"] = { free:false,
  simple:"The classical psychedelics all do one thing: they switch on a particular serotonin receptor in the cortex. That single action loosens the brain's habit of predicting what it is about to see, which is why the world looks unfamiliar and why people describe the self dissolving.",
  teach:[
    "Classical psychedelics, LSD, psilocybin, mescaline and DMT, are 5-HT2A receptor agonists. 5-HT2A agonism is necessary for the subjective effect: pretreatment with a 5-HT2A antagonist such as ketanserin abolishes it.",
    "5-HT2A receptors are densely expressed on layer V cortical pyramidal neurones, and their activation increases glutamatergic activity and cortical excitability.",
    "Neuroimaging shows reduced default mode network integrity and increased global connectivity between networks that do not normally communicate. This is the leading account of ego dissolution.",
    "Predictive processing account: psychedelics reduce the precision of high-level priors, allowing sensory and bottom-up information to dominate, which produces both the perceptual effects and the sense of insight.",
    "Dissociatives are a separate class: ketamine and phencyclidine are NMDA receptor antagonists, producing dissociation, depersonalisation and, at higher doses, a state resembling catatonia.",
    "MDMA is principally a serotonin releaser acting via SERT reversal, with dopamine and noradrenaline release. Risks are hyperthermia, hyponatraemia from SIADH plus water loading, serotonin syndrome and, with chronic use, serotonergic neurotoxicity.",
    "Salvinorin A is a kappa opioid agonist, producing dysphoric hallucinogenic effects by a completely different mechanism.",
    "Adverse effects: acute anxiety and panic, transient psychosis, hallucinogen persisting perception disorder, and precipitation of psychosis in vulnerable individuals. Physiological toxicity is low and dependence does not develop, with tolerance appearing rapidly.",
    "Therapeutic research: psilocybin-assisted therapy for depression, and MDMA-assisted therapy for PTSD, have produced promising early trials. Blinding is very difficult, expectancy effects are large, and neither is licensed in the UK. Present this honestly rather than enthusiastically."
  ],
  cards:[
    ["What receptor mediates the effects of classical psychedelics, and what is the evidence?","5-HT2A receptor agonism. Pretreatment with the 5-HT2A antagonist ketanserin abolishes the subjective effects of psilocybin and LSD, establishing the receptor as necessary."],
    ["How do psychedelics and dissociatives differ pharmacologically?","Classical psychedelics such as LSD and psilocybin are 5-HT2A agonists. Dissociatives such as ketamine and phencyclidine are NMDA receptor antagonists, producing dissociation and depersonalisation rather than the classical psychedelic state."],
    ["What are the principal acute risks of MDMA?","Hyperthermia, hyponatraemia from combined SIADH and excessive water intake, serotonin syndrome particularly with serotonergic drugs, and cardiovascular events."]
  ],
  note:[
    "Hallucinogen persisting perception disorder involves recurrent perceptual disturbance after cessation and is recognised in both ICD-11 and DSM-5.",
    "Tolerance to psychedelics develops rapidly with repeated dosing and there is cross-tolerance between them; dependence does not occur.",
    "Blinding is close to impossible in psychedelic trials, which is the major methodological criticism of the therapeutic literature.",
    "Psilocybin and MDMA-assisted therapies are not licensed in the UK.",
    "Psychedelics can precipitate prolonged psychosis in vulnerable individuals and are excluded in trials for people with a personal or family history of psychosis."
  ],
  refs:["semaddict","stahl","agrawal"] };

TEACH["4.3.2.10"] = { free:false,
  simple:"Novel psychoactive substances were designed to sit just outside the law, which meant they were designed by chemists who had never tested them on anybody. That is why they are more dangerous than the drugs they imitate, not less.",
  teach:[
    "Definition: substances designed to reproduce the effects of controlled drugs while falling outside existing legislation. The Psychoactive Substances Act 2016 in the UK reversed the approach by prohibiting any psychoactive substance not specifically exempted.",
    "Synthetic cannabinoid receptor agonists, including Spice and Black Mamba, are full CB1 agonists unlike THC's partial agonism. They cause severe agitation, psychosis, seizures, hyperthermia, acute kidney injury and death, and are prevalent in prison and homeless populations.",
    "Synthetic cathinones, mephedrone and related compounds, act like amphetamines through monoamine release and reuptake inhibition, causing sympathomimetic toxicity, agitation and psychosis.",
    "Novel benzodiazepines such as etizolam and flualprazolam are highly potent, of uncertain content, and implicated in a large number of drug-related deaths, particularly in combination with opioids.",
    "Nitazenes are synthetic opioids substantially more potent than heroin and increasingly present in the UK drug supply. They require higher and repeated naloxone doses.",
    "Nitrous oxide inactivates vitamin B12 by irreversibly oxidising its cobalt ion, causing functional B12 deficiency with subacute combined degeneration of the cord. B12 levels may be normal; check homocysteine and methylmalonic acid.",
    "Clinical problems specific to this group: unknown content and potency, no established toxidrome, drugs not detected on standard toxicology screens, rapid turnover of compounds, and limited evidence for management.",
    "Management is supportive and symptom-led: benzodiazepines for agitation and seizures, active cooling for hyperthermia, fluids and monitoring for rhabdomyolysis and renal failure, and naloxone for suspected opioid content, at higher doses than usual.",
    "Take a specific history. Patients frequently do not consider these substances to be drugs, and standard questions miss them."
  ],
  cards:[
    ["Why are synthetic cannabinoids more dangerous than cannabis?","They are full agonists at CB1 receptors whereas THC is a partial agonist, producing far greater receptor activation with severe agitation, psychosis, seizures, hyperthermia, acute kidney injury and death."],
    ["What neurological complication follows nitrous oxide misuse and how is it detected?","Functional vitamin B12 deficiency from irreversible oxidation of the cobalt ion, causing subacute combined degeneration of the cord. Serum B12 may be normal, so homocysteine and methylmalonic acid should be measured."],
    ["What are nitazenes and what is the clinical implication?","Synthetic opioids substantially more potent than heroin, increasingly present in the UK supply. Overdose requires higher and repeated doses of naloxone, and take-home naloxone provision is correspondingly more important."]
  ],
  note:[
    "The Psychoactive Substances Act 2016 prohibits any psychoactive substance not specifically exempted, reversing the previous compound-by-compound approach.",
    "Standard urine drug screens do not detect most novel psychoactive substances.",
    "Synthetic cannabinoid use is disproportionately prevalent in prison and homeless populations.",
    "Novel benzodiazepines are frequently mis-sold as diazepam and are implicated in a large share of drug-related deaths in Scotland.",
    "Management is supportive and symptom-led; there are no specific antidotes for most of these compounds."
  ],
  refs:["semaddict","bnf","maudsley"] };

TEACH["4.3.3.1"] = { free:true,
  simple:"The dopamine hypothesis has been rewritten three times, and each version was forced by evidence that the previous one could not explain. The current version is not that there is too much dopamine, but that it is released at the wrong moments, so ordinary things arrive feeling important.",
  teach:[
    "Version I, too much dopamine: based on all antipsychotics blocking D2, on the correlation between clinical potency and D2 affinity, and on amphetamine producing psychosis.",
    "Problems with version I: post-mortem D2 elevation was confounded by treatment, and negative and cognitive symptoms did not improve and sometimes worsened with D2 blockade.",
    "Version II, regional specificity: mesolimbic hyperdopaminergia produces positive symptoms; mesocortical hypodopaminergia produces negative and cognitive symptoms. This explained the asymmetry of treatment response.",
    "Problems with version II: it did not explain the origin of the dysregulation, nor the failure of D2 blockade in a third of patients, nor clozapine's superiority at low D2 occupancy.",
    "Version III, Howes and Kapur: the final common pathway is presynaptic striatal dopamine dysregulation, with increased synthesis and release capacity demonstrated on PET, present in the prodrome and in those at ultra-high risk, and greatest in the dorsal rather than the ventral striatum.",
    "Multiple upstream routes, genetic, obstetric, social and drug-related, converge on that final pathway, which is why so many different risk factors produce one syndrome.",
    "Aberrant salience is the phenomenological bridge: dysregulated dopamine assigns significance to stimuli that do not merit it, and the delusion is the person's explanation for that experience. This is why antipsychotics reduce conviction rather than correct the belief.",
    "The unresolved problems: treatment resistance may involve normal striatal dopamine, suggesting a mechanistically distinct group; and negative and cognitive symptoms remain untreated by any dopaminergic strategy."
  ],
  cards:[
    ["State version III of the dopamine hypothesis and its key evidence.","Howes and Kapur: the final common pathway is presynaptic striatal dopamine dysregulation with increased dopamine synthesis and release capacity, demonstrated by PET, present in the prodromal and ultra-high-risk states, and most marked in the dorsal striatum."],
    ["Why did version I of the dopamine hypothesis fail?","Post-mortem receptor findings were confounded by antipsychotic treatment, and it could not explain why negative and cognitive symptoms fail to improve or worsen with D2 blockade, nor why a substantial minority of patients do not respond."],
    ["How does aberrant salience link pharmacology to phenomenology?","Dysregulated dopamine release assigns motivational significance to irrelevant stimuli, producing an abnormal experience of significance. The delusion is the explanatory framework the person constructs for it, which is why antipsychotics dampen conviction rather than argue the belief away."]
  ],
  note:[
    "PET studies show elevated dopamine synthesis capacity in the prodrome, before frank psychosis.",
    "Treatment-resistant patients may show normal striatal dopamine synthesis capacity, suggesting a distinct mechanism.",
    "Amphetamine challenge produces greater striatal dopamine release in patients than controls.",
    "The hypothesis explains positive symptoms well and negative and cognitive symptoms poorly.",
    "Kapur, Psychosis as a state of aberrant salience, American Journal of Psychiatry, 2003."
  ],
  refs:["stahl","semgen","agrawal"] };

TEACH["4.3.3.2"] = { free:false,
  simple:"The biogenic amine hypothesis says depression is a shortage of serotonin, noradrenaline and dopamine. It was built backwards from the fact that the drugs worked, and it has one problem it has never solved: the chemicals go up in hours and people get better in weeks.",
  teach:[
    "Origin: reserpine, which depletes monoamines by blocking VMAT2, was associated with depression; iproniazid and imipramine, which raise monoamines, relieved it. Schildkraut formalised the catecholamine hypothesis in 1965.",
    "The core claim: depression results from a functional deficiency of serotonin, noradrenaline or dopamine at central synapses.",
    "Supporting evidence: tryptophan depletion transiently reverses response in SSRI-treated remitted patients; catecholamine depletion with alpha-methyl-para-tyrosine does the same in noradrenergically treated patients; and low CSF 5-HIAA is associated with impulsivity and suicide.",
    "Crucially, tryptophan depletion does not cause depression in healthy people. It reverses treatment response. That distinction is examinable and is frequently misstated.",
    "The objections: the therapeutic delay; the failure to demonstrate consistent monoamine deficiency in untreated patients; the efficacy of tianeptine, which enhances rather than blocks serotonin reuptake; and ketamine's rapid effect without monoamine action.",
    "The 2022 umbrella review by Moncrieff and colleagues concluded there is no consistent evidence of an association between serotonin and depression. It attracted substantial methodological criticism. The honest teaching position is that the simple chemical imbalance account is not supported, that this does not mean antidepressants do not work, and that efficacy and mechanism are separate questions.",
    "The current synthesis: monoamines are the entry point to a system whose therapeutic change occurs downstream, in receptor adaptation, CREB, BDNF and synaptic plasticity.",
    "Clinical implication: telling a patient they have a chemical imbalance is inaccurate and has been shown to increase pessimism about recovery and reliance on medication."
  ],
  cards:[
    ["What are the principal objections to the biogenic amine hypothesis?","The delay between biochemical and clinical effect; failure to demonstrate consistent monoamine deficiency in untreated patients; the efficacy of tianeptine, which enhances serotonin reuptake; and ketamine's rapid antidepressant action without monoamine involvement."],
    ["What does tryptophan depletion actually show?","It transiently reverses antidepressant response in remitted patients treated with serotonergic drugs. It does not induce depression in healthy volunteers, so it demonstrates a role for serotonin in maintaining response rather than a serotonin deficiency causing depression."],
    ["Should patients be told they have a chemical imbalance?","No. The simple chemical imbalance account is not supported by evidence, and studies show that this explanation increases pessimism about recovery, reduces belief in the value of psychological treatment and increases perceived dependence on medication."]
  ],
  note:[
    "Schildkraut, catecholamine hypothesis of affective disorders, American Journal of Psychiatry, 1965.",
    "Moncrieff et al., Molecular Psychiatry, 2022, umbrella review; heavily debated and methodologically criticised.",
    "Efficacy and mechanism are separate questions: antidepressants can work without the monoamine hypothesis being correct.",
    "Tianeptine enhances serotonin reuptake and is an effective antidepressant, which the simple hypothesis cannot accommodate.",
    "The neurotrophic and network accounts have largely superseded the deficiency account in research."
  ],
  refs:["stahl","noptp","maudsley"] };

TEACH["4.3.3.3"] = { free:false,
  simple:"Give a healthy young person a drug that blocks acetylcholine and they will fail memory tests like an old person. Take it away and they recover. That experiment is why we thought boosting acetylcholine would treat Alzheimer's disease, and why the treatments we have do help a little.",
  teach:[
    "The cholinergic hypothesis of cognition: central cholinergic transmission is required for attention and for encoding new memories, and its loss produces the cognitive deficit of Alzheimer's disease.",
    "Anatomy: nucleus basalis of Meynert projecting to neocortex, and medial septal nucleus and diagonal band projecting to hippocampus.",
    "Evidence: severe loss of nucleus basalis neurones and of choline acetyltransferase activity in Alzheimer's disease, correlating with cognitive severity and plaque density; and the reproduction of an amnestic syndrome in healthy volunteers by scopolamine, reversed by physostigmine.",
    "Therapeutic consequence: cholinesterase inhibitors produce modest symptomatic benefit in mild to moderate Alzheimer's disease and do not modify disease progression.",
    "The limitation: cholinergic loss is a consequence of the disease process rather than its cause, which is why replacing acetylcholine helps symptomatically and changes nothing underneath.",
    "The cholinergic deficit is greater in dementia with Lewy bodies than in Alzheimer's disease, which is why cholinesterase inhibitors work better there, particularly for hallucinations and fluctuation.",
    "Anticholinergic burden is the clinical corollary and is modifiable. Drugs with antimuscarinic activity impair cognition, precipitate delirium, increase falls and are associated with increased dementia risk in observational studies.",
    "Practical rule: before adding a cholinesterase inhibitor, subtract the anticholinergics. Prescribing one while continuing the other is common and self-defeating.",
    "Nicotinic mechanisms are also implicated: nicotinic receptor loss occurs in Alzheimer's disease, galantamine has allosteric nicotinic activity, and the high rate of smoking in schizophrenia has been interpreted as self-medication of nicotinic dysfunction."
  ],
  cards:[
    ["What experimental evidence supports the cholinergic hypothesis of cognition?","Scopolamine, a muscarinic antagonist, reproduces an amnestic syndrome in healthy volunteers that is reversed by the cholinesterase inhibitor physostigmine, and post-mortem studies show loss of nucleus basalis neurones and choline acetyltransferase activity correlating with cognitive severity."],
    ["Why do cholinesterase inhibitors help symptomatically without modifying disease?","The cholinergic deficit is a downstream consequence of the underlying neurodegenerative process. Augmenting acetylcholine improves function in surviving neurones but does not affect amyloid, tau or neuronal loss."],
    ["What is anticholinergic burden and why does it matter in dementia?","The cumulative antimuscarinic effect of all a patient's medication. It impairs cognition, precipitates delirium, increases falls and is associated with increased dementia risk, and it directly opposes cholinesterase inhibitor treatment."]
  ],
  note:[
    "The cholinergic deficit is greater in dementia with Lewy bodies than in Alzheimer's disease.",
    "Anticholinergic burden scales exist and should be calculated in older adults.",
    "Galantamine has allosteric nicotinic modulation in addition to cholinesterase inhibition.",
    "Nicotinic receptor abnormalities have been proposed to underlie the very high smoking rates in schizophrenia.",
    "Prescribing an anticholinergic alongside a cholinesterase inhibitor is common, illogical and worth actively reviewing."
  ],
  refs:["oxoldage","stahl","nice"] };

TEACH["4.3.3.4"] = { free:false,
  simple:"An older idea about mood: it is not the level of any one chemical that matters but the balance between two of them. Too much acetylcholine relative to noradrenaline gives depression; the reverse gives mania. It is largely superseded, but it explains several things the simpler hypothesis cannot.",
  teach:[
    "Janowsky's cholinergic-adrenergic balance hypothesis, 1972: depression reflects relative cholinergic predominance and mania relative adrenergic predominance.",
    "Supporting evidence: cholinergic agonists such as physostigmine can induce depressive symptoms and can transiently reverse mania. Anticholinergic drugs can produce elevated mood and are misused for that effect.",
    "REM sleep is cholinergically driven, and the reduced REM latency and increased REM density of depression are consistent with cholinergic overactivity. Cholinergic agonists shorten REM latency further.",
    "Scopolamine, a muscarinic antagonist, has produced rapid antidepressant effects in small trials, which is direct if limited support.",
    "The hypothesis fell out of favour because the monoamine account was simpler, because physostigmine's effects are non-specific and unpleasant, and because no useful treatment emerged from it.",
    "Its residual value: it introduced the idea that balance between systems matters more than the absolute level of any one, which survives in current thinking about excitation-inhibition balance.",
    "Clinical echoes: anticholinergic drugs are misused for euphoria; abrupt anticholinergic withdrawal can produce cholinergic rebound with agitation, nausea, insomnia and worsening mood; and this contributes to discontinuation symptoms with paroxetine and with tricyclics.",
    "Teach it as a historically important hypothesis with specific supporting observations, not as a current model."
  ],
  cards:[
    ["State the cholinergic-adrenergic balance hypothesis and its author.","Janowsky, 1972: depression reflects relative cholinergic predominance over adrenergic transmission, and mania the reverse. Balance between the systems rather than absolute levels determines mood state."],
    ["What evidence supports a cholinergic contribution to depression?","Physostigmine can induce depressive symptoms and transiently reverse mania; REM sleep is cholinergically driven and the reduced REM latency of depression is consistent with cholinergic overactivity; and scopolamine has produced rapid antidepressant effects in small trials."],
    ["What is cholinergic rebound and where is it seen clinically?","Symptoms following abrupt withdrawal of an anticholinergic drug, including agitation, nausea, sweating, insomnia and low mood. It contributes to discontinuation symptoms with paroxetine, tricyclics and antiparkinsonian anticholinergics."]
  ],
  note:[
    "Anticholinergic drugs such as procyclidine are misused for their euphoriant effect, particularly in inpatient and forensic settings.",
    "Reduced REM latency is one of the most consistent biological findings in depression.",
    "Scopolamine's rapid antidepressant effect is real in small trials but limited by cognitive and peripheral adverse effects.",
    "The idea of inter-system balance persists in current excitation-inhibition models.",
    "This hypothesis is examinable chiefly by name and by its predictions."
  ],
  refs:["stahl","noptp","agrawal"] };

TEACH["4.3.3.5"] = { free:true,
  simple:"Give a healthy volunteer ketamine and they will produce every kind of symptom of schizophrenia: the voices, the odd beliefs, the flatness and the thinking problems. Give them amphetamine and they will only produce the voices and the beliefs. That difference is the strongest single argument for the glutamate hypothesis.",
  teach:[
    "The core claim: NMDA receptor hypofunction underlies schizophrenia, particularly the negative and cognitive symptoms that dopaminergic models fail to explain.",
    "The founding evidence: phencyclidine and ketamine, non-competitive NMDA antagonists, produce positive, negative and cognitive symptoms in healthy volunteers and exacerbate symptoms in patients. Dopamine agonists produce only positive symptoms.",
    "The mechanism: NMDA receptors on fast-spiking parvalbumin GABA interneurones are particularly sensitive. Their hypofunction disinhibits downstream pyramidal neurones, producing excessive and disorganised cortical glutamate release and impaired gamma synchrony.",
    "This links to dopamine rather than competing with it. Cortical disinhibition disrupts descending regulation of subcortical dopamine neurones, producing the striatal dopamine dysregulation of version III. Glutamate is upstream; dopamine is the final common pathway.",
    "Supporting evidence: reduced parvalbumin interneurone markers and reduced GAD67 expression post-mortem; genetic association with GRIN2A and other glutamatergic genes; and anti-NMDA receptor encephalitis producing a florid psychotic presentation.",
    "Anti-NMDA receptor encephalitis is the clinical proof of principle. Antibodies against the NMDA receptor produce psychosis, then seizures, movement disorder and autonomic instability, and it is treatable.",
    "Therapeutic attempts have largely failed. Glycine, D-serine and D-cycloserine augmentation produced inconsistent results, and the mGluR2/3 agonist pomaglumetad failed in phase III.",
    "The amyloid of psychiatry problem applies here: a strong mechanistic hypothesis that has not yet produced a treatment.",
    "The exception worth knowing: ketamine's antidepressant action shows that manipulating this system therapeutically is possible, just not yet in schizophrenia."
  ],
  cards:[
    ["What is the strongest evidence for the glutamate hypothesis of schizophrenia?","NMDA receptor antagonists such as ketamine and phencyclidine reproduce positive, negative and cognitive symptoms in healthy volunteers and exacerbate symptoms in patients, whereas dopamine agonists reproduce only positive symptoms."],
    ["How does NMDA hypofunction produce cortical disinhibition?","NMDA receptors on fast-spiking parvalbumin GABA interneurones are especially sensitive to blockade. Their hypofunction reduces inhibition of pyramidal neurones, producing excessive disorganised glutamate release and impaired gamma oscillatory synchrony."],
    ["How do the glutamate and dopamine hypotheses relate?","They are complementary rather than competing. Cortical NMDA hypofunction and disinhibition disrupt descending regulation of subcortical dopamine neurones, producing the presynaptic striatal dopamine dysregulation that constitutes the final common pathway."]
  ],
  note:[
    "Reduced GAD67 and parvalbumin interneurone markers are among the most replicated post-mortem findings in schizophrenia.",
    "Anti-NMDA receptor encephalitis is treatable and must be excluded in atypical first-episode psychosis, particularly in young women with seizures or movement disorder.",
    "Glutamatergic treatments for schizophrenia have consistently failed in phase III despite strong preclinical rationale.",
    "GRIN2A is among the glutamatergic genes reaching genome-wide significance.",
    "Ketamine's antidepressant effect demonstrates that the glutamate system is therapeutically tractable in other conditions."
  ],
  refs:["stahl","agrawal","semgen"] };

TEACH["4.3.3.6"] = { free:false,
  simple:"For thirty years the plan was simple: amyloid causes Alzheimer's disease, so remove the amyloid. The amyloid came out and the patients did not get much better. That is the most expensive negative result in the history of medicine, and the field is still arguing about what it means.",
  teach:[
    "The hypothesis, Hardy and Higgins 1992: accumulation of amyloid-beta, particularly Abeta42, is the initiating event, leading to tau hyperphosphorylation, neurofibrillary tangles, inflammation, synaptic loss and dementia.",
    "Amyloid precursor protein is cleaved either by alpha-secretase, the non-amyloidogenic route, or by beta- and gamma-secretase, producing amyloid-beta. Abeta42 aggregates preferentially.",
    "Genetic support is strong: mutations in APP, PSEN1 and PSEN2 all increase amyloid production and cause early-onset autosomal dominant disease; trisomy 21 produces APP gene dosage excess with near-universal pathology by the fifth decade; and APOE e4 impairs amyloid clearance.",
    "The problems: amyloid burden correlates poorly with cognitive severity; a substantial minority of cognitively normal older people are amyloid positive; tau correlates far better with decline; and successive amyloid-lowering trials failed.",
    "Partial rescue: lecanemab and donanemab clear amyloid and slow decline by a modest amount. Both hold MHRA licences, donanemab from October 2024. NICE final draft guidance in June 2025 did not recommend either for NHS use, on cost-effectiveness and the modest size of benefit.",
    "ARIA, amyloid-related imaging abnormalities with oedema or haemorrhage, is the key adverse effect, commonest in APOE e4 homozygotes, requiring MRI monitoring.",
    "Revisions to the hypothesis: soluble oligomers rather than fibrillar plaques may be the toxic species, and intervention may need to occur years before symptoms.",
    "Competing accounts: tau-centred models, neuroinflammation, vascular contribution with mixed pathology being the norm, and metabolic accounts.",
    "The honest teaching position: amyloid is necessary but not sufficient, and prevention through modifiable risk factors currently offers more than disease modification."
  ],
  cards:[
    ["State the amyloid cascade hypothesis and name its authors.","Hardy and Higgins, 1992: accumulation of amyloid-beta is the initiating event in Alzheimer's disease, leading to tau hyperphosphorylation, neurofibrillary tangles, inflammation, synaptic loss, neuronal death and dementia."],
    ["Give three lines of genetic evidence supporting the amyloid hypothesis.","Mutations in APP, PSEN1 and PSEN2 all increase amyloid-beta production and cause early-onset autosomal dominant disease; trisomy 21 produces APP gene dosage excess with near-universal Alzheimer pathology; and APOE e4, which impairs amyloid clearance, is the major late-onset risk allele."],
    ["What is the current UK availability of anti-amyloid antibodies?","Lecanemab and donanemab both hold MHRA licences, donanemab from October 2024, but NICE final draft guidance in June 2025 did not recommend either for NHS use, so neither is available on the NHS."]
  ],
  note:[
    "Tau pathology follows Braak staging and correlates with cognitive decline considerably better than amyloid burden.",
    "Soluble amyloid oligomers rather than fibrillar plaques are increasingly regarded as the toxic species.",
    "Mixed pathology is the commonest post-mortem finding in older people with dementia.",
    "Amyloid PET positivity in a cognitively normal person does not establish a diagnosis.",
    "The Lancet Commission modifiable risk factors offer the largest current population-level opportunity."
  ],
  refs:["oxoldage","nice","agrawal"] };

TEACH["4.3.4.1"] = { free:true,
  simple:"Most side effects are not mysterious. They are the drug doing exactly what it does, in a part of the body where you did not want it. Block histamine and the person is sleepy. Block alpha-1 and they faint standing up. Learn the receptors and you can predict the complaint before the patient makes it.",
  teach:[
    "Postural hypotension: alpha-1 blockade. Worst with chlorpromazine, clozapine, quetiapine, risperidone and tricyclics. Highest risk in the elderly and on initiation or dose increase. Causes falls and fractures. Manage by slow titration, dose reduction, adequate hydration and reviewing antihypertensives.",
    "Sedation: H1 blockade, with alpha-1 and muscarinic contributions. Greatest with clozapine, olanzapine, quetiapine, chlorpromazine and mirtazapine. Often useful early and unwanted later; consider evening dosing before switching.",
    "Sexual dysfunction: multifactorial. Serotonergic 5-HT2 stimulation with SSRIs; hyperprolactinaemia with D2 blockade; alpha-1 blockade impairing ejaculation; and anticholinergic effects. Affects 30 to 70 per cent on SSRIs. It is the commonest unreported reason for stopping medication, so ask directly.",
    "Weight gain and metabolic dysfunction: H1 and 5-HT2C antagonism, with muscarinic M3 blockade impairing insulin secretion. Greatest with clozapine and olanzapine; least with aripiprazole, lurasidone, ziprasidone and amisulpride. Most weight is gained in the first months, which is when to intervene.",
    "Metabolic monitoring is mandatory: weight and waist, blood pressure, fasting glucose or HbA1c, and lipids at baseline, 12 weeks, one year, then annually. Metformin has the best evidence for mitigation, and switching to a lower-risk drug is effective.",
    "QTc prolongation: blockade of the hERG potassium channel delaying repolarisation, risking torsades de pointes. Highest with intravenous haloperidol, pimozide and sertindole; citalopram and escitalopram are dose-capped, more strictly in the elderly. Lowest with aripiprazole and lurasidone.",
    "QTc above 500 ms, or an increase of more than 60 ms from baseline, requires action. Correct potassium and magnesium, review all QT-prolonging drugs including antiemetics and antibiotics, and seek cardiology advice.",
    "Anticholinergic effects: dry mouth, blurred vision, constipation, urinary retention, tachycardia, and centrally confusion and memory impairment. Constipation on clozapine can progress to ileus and death and must be asked about at every review.",
    "The clinical habit worth forming: match every complaint to a receptor before assuming it is psychological."
  ],
  cards:[
    ["Which receptor actions produce weight gain, and which drugs are worst and best?","Histamine H1 and 5-HT2C antagonism, with muscarinic M3 blockade contributing to metabolic dysfunction. Worst: clozapine and olanzapine. Best: aripiprazole, lurasidone, ziprasidone and amisulpride."],
    ["What QTc findings require action?","A QTc above 500 ms, or an increase of more than 60 ms from baseline. Correct potassium and magnesium, review all QT-prolonging drugs, reduce or switch the offending drug, and seek cardiology advice."],
    ["Why must constipation be asked about at every clozapine review?","Clozapine causes severe gastrointestinal hypomotility which can progress to ileus, bowel obstruction, perforation and death. It causes more clozapine-related deaths than agranulocytosis and is frequently not volunteered by patients."]
  ],
  note:[
    "Most antipsychotic weight gain occurs in the first three to six months, which is the window for intervention.",
    "Metformin has the best evidence for mitigating antipsychotic-induced weight gain; GLP-1 agonists are under study.",
    "Sexual dysfunction is the commonest unreported cause of covert discontinuation; ask directly and at baseline.",
    "Hypokalaemia and hypomagnesaemia markedly increase torsades risk and are common in eating disorders and alcohol misuse.",
    "Anticholinergic burden should be calculated in older adults and reduced wherever possible."
  ],
  refs:["maudsley","maudphys","bnf"] };

TEACH["4.3.4.2"] = { free:true,
  simple:"Two emergencies that look alike and are managed in opposite ways. One builds over days with the muscles locked rigid, after a drug that blocks dopamine. The other arrives in hours with the reflexes jumping and the feet clonic, after a drug that raises serotonin. Feel the ankles and you will usually know which.",
  teach:[
    "Extrapyramidal syndromes and their time course: acute dystonia in hours to days; akathisia in days to weeks; parkinsonism in weeks to months; tardive dyskinesia after months to years.",
    "Acute dystonia: sustained muscle contraction, torticollis, oculogyric crisis, trismus, and laryngeal dystonia which can obstruct the airway. Young men on high-potency drugs are at highest risk. Treat with procyclidine 5 to 10 mg intramuscularly or intravenously; effect within minutes.",
    "Akathisia: subjective inner restlessness with inability to keep still, worst in the legs. It is associated with suicidal ideation and is routinely mistaken for agitation, leading to a dose increase that makes it worse. Reduce the dose or switch; propranolol has the best evidence; anticholinergics do not help.",
    "Tardive dyskinesia: choreoathetoid movements, classically orofacial. Risk rises with age, female sex, duration, first-generation drugs, diabetes and previous acute extrapyramidal effects. Anticholinergics worsen it. Reduce or switch, ideally to clozapine; tetrabenazine and VMAT2 inhibitors are options.",
    "Neuroleptic malignant syndrome: hyperthermia, lead-pipe rigidity, autonomic instability, altered consciousness, and very high creatine kinase, with leucocytosis and raised transaminases. Onset over 24 to 72 hours. Follows dopamine blockade or abrupt dopamine withdrawal, including levodopa cessation.",
    "NMS management: stop the antipsychotic, transfer to medical care, cool, rehydrate aggressively, monitor for rhabdomyolysis, acute kidney injury and DIC. Consider dantrolene, bromocriptine or lorazepam. Mortality is around 10 per cent. Rechallenge after at least two weeks with a structurally different lower-potency drug at low dose.",
    "Serotonin syndrome: onset within hours of a serotonergic drug or dose increase. The triad is neuromuscular excitation, autonomic instability and altered mental state. Hyperreflexia and clonus, particularly ocular and lower limb, with tremor, diarrhoea and agitation. The Hunter criteria are the diagnostic standard.",
    "The distinction in one line: NMS is rigid, hyporeflexic and slow; serotonin syndrome is clonic, hyperreflexic and fast. Serotonin syndrome has diarrhoea; NMS does not.",
    "Serotonin syndrome management: stop the serotonergic drug, supportive care, benzodiazepines for agitation and rigidity, active cooling, and cyproheptadine in severe cases."
  ],
  cards:[
    ["Distinguish neuroleptic malignant syndrome from serotonin syndrome.","NMS: onset over 24 to 72 hours, lead-pipe rigidity, hyporeflexia, bradykinesia, very high creatine kinase, following dopamine blockade or dopamine withdrawal. Serotonin syndrome: onset within hours, hyperreflexia and clonus especially ocular and lower limb, tremor, diarrhoea and agitation, following a serotonergic drug or dose increase."],
    ["How is acute dystonia treated and who is at highest risk?","Procyclidine 5 to 10 mg intramuscularly or intravenously, effective within minutes. Highest risk in young men, on high-potency antipsychotics, with rapid dose escalation, in the first hours to days of treatment."],
    ["How is akathisia managed and what does not work?","Reduce the dose or switch antipsychotic. Propranolol has the best evidence; low-dose clonazepam is an alternative. Anticholinergics are ineffective. Recognising it matters because it is regularly mistaken for agitation and treated with a dose increase."]
  ],
  note:[
    "NMS mortality is around 10 per cent, mainly from rhabdomyolysis, renal failure, respiratory failure and DIC.",
    "NMS can follow abrupt withdrawal of levodopa or of dopamine agonists, not only antipsychotic administration.",
    "The Hunter criteria are more sensitive and specific than the Sternbach criteria for serotonin syndrome.",
    "Akathisia is associated with suicidal ideation and with non-adherence.",
    "Rating scales: AIMS, Barnes Akathisia Rating Scale, Simpson-Angus."
  ],
  refs:["maudsley","bnf","semgen"] };

TEACH["4.3.4.3"] = { free:false,
  simple:"Some adverse effects are not dose-related and not predictable from the pharmacology. They happen to a small number of people for reasons largely to do with their immune system, and the only defence is knowing which drug does which, and acting the moment a patient reports the right symptom.",
  teach:[
    "Idiosyncratic reactions are not dose-dependent, are not predictable from the drug's receptor profile, and often have an immunological or genetic basis.",
    "Clozapine and neutropenia: agranulocytosis occurs in around 0.8 per cent, most in the first 18 weeks. Mandatory monitoring is FBC weekly for 18 weeks, fortnightly to 52 weeks, then monthly. Any fever or sore throat requires an urgent FBC. Benign ethnic neutropenia is important to recognise so that patients of African ancestry are not wrongly excluded.",
    "Clozapine and myocarditis: typically within the first eight weeks, presenting with fever, tachycardia, chest pain, breathlessness or flu-like illness. Check troponin, CRP and ECG. It is a leading cause of clozapine-related death and is missed because the symptoms look like a viral illness.",
    "Carbamazepine and lamotrigine and severe cutaneous reactions: Stevens-Johnson syndrome and toxic epidermal necrolysis. Any rash on lamotrigine requires immediate cessation and assessment. Risk is greatest in the first eight weeks and with rapid titration or concurrent valproate.",
    "HLA-B*15:02 is strongly associated with carbamazepine-induced Stevens-Johnson syndrome in people of Han Chinese, Thai and other South East Asian ancestry, and testing is recommended before starting in those populations.",
    "Hepatotoxicity: valproate can cause fatal hepatic failure, particularly in children under three and in mitochondrial disease. Agomelatine requires liver function monitoring. Chlorpromazine causes cholestatic jaundice.",
    "Blood dyscrasias beyond clozapine: carbamazepine causes aplastic anaemia and agranulocytosis; mirtazapine has rare reports of agranulocytosis.",
    "Other named reactions: valproate-induced pancreatitis and hyperammonaemic encephalopathy; lithium-induced nephrogenic diabetes insipidus and, rarely, interstitial nephritis; and antipsychotic-associated venous thromboembolism.",
    "The clinical rule: any new fever, sore throat, rash, jaundice, bruising or breathlessness in a patient on clozapine, carbamazepine, lamotrigine or valproate is a drug reaction until proven otherwise."
  ],
  cards:[
    ["Give the clozapine monitoring schedule and the two reactions it is designed to catch.","FBC weekly for 18 weeks, fortnightly to 52 weeks, then monthly. It monitors for neutropenia and agranulocytosis. Myocarditis, typically in the first eight weeks, is not detected by FBC monitoring and requires clinical vigilance with troponin, CRP and ECG."],
    ["What must be done if a rash develops on lamotrigine?","Stop the drug immediately and assess urgently for Stevens-Johnson syndrome and toxic epidermal necrolysis. Risk is greatest in the first eight weeks, with rapid titration, and with concurrent valproate, which inhibits lamotrigine metabolism."],
    ["Which genetic test is recommended before carbamazepine in specific populations, and why?","HLA-B*15:02 testing in people of Han Chinese, Thai and other South East Asian ancestry, because of the strong association with carbamazepine-induced Stevens-Johnson syndrome and toxic epidermal necrolysis."]
  ],
  note:[
    "Benign ethnic neutropenia is common in people of African ancestry and requires adjusted clozapine monitoring thresholds rather than exclusion from treatment.",
    "Clozapine myocarditis presents within the first eight weeks and is easily mistaken for viral illness.",
    "Valproate hepatotoxicity is greatest in children under three and in mitochondrial disease, particularly POLG mutations.",
    "Lamotrigine titration must be slow, and dose is halved with valproate and roughly doubled with carbamazepine.",
    "All suspected adverse reactions should be reported through the Yellow Card scheme."
  ],
  refs:["maudsley","bnf","nice"] };

TEACH["4.3.5"] = { free:true,
  simple:"Every prescribing decision in pregnancy is a comparison, never a choice between a risk and no risk. Untreated severe mental illness harms both mother and baby, and stopping a drug is itself a decision with consequences. The one absolute is valproate.",
  teach:[
    "Sodium valproate is the clearest teratogen in psychiatry: roughly 10 per cent risk of major congenital malformation including neural tube defects, and around 30 to 40 per cent risk of neurodevelopmental disorder in exposed children. It must not be used in women and girls of childbearing potential unless the conditions of the Pregnancy Prevention Programme are met.",
    "Lithium: increased risk of cardiac malformation including Ebstein's anomaly. The relative risk is substantially raised but the absolute risk remains low, of the order of one in a thousand or lower for Ebstein's. It requires specialist counselling, level monitoring across pregnancy, and dose review immediately postpartum because clearance falls abruptly at delivery.",
    "Carbamazepine: neural tube defects and craniofacial abnormalities; folate supplementation is advised. Lamotrigine has the most reassuring profile of the anticonvulsants in pregnancy but requires dose adjustment because clearance rises markedly and falls rapidly postpartum.",
    "Antidepressants: SSRIs are not major teratogens. Paroxetine has been associated with a small increase in cardiac defects, though the evidence is inconsistent. Third-trimester exposure is associated with neonatal adaptation syndrome, with jitteriness, respiratory distress and feeding difficulty, usually resolving within two weeks, and with a small absolute increase in persistent pulmonary hypertension of the newborn.",
    "Antipsychotics: no consistent evidence of major teratogenicity. Olanzapine and quetiapine increase gestational diabetes risk, so glucose tolerance testing is needed. Late exposure can cause extrapyramidal and withdrawal signs in the neonate.",
    "Benzodiazepines: floppy infant syndrome and neonatal withdrawal with third-trimester or intrapartum exposure. The older association with cleft palate is not well supported.",
    "Timing: organogenesis occurs in the first trimester, weeks three to eight, which is the window for structural malformation. Later exposure affects growth, neurodevelopment and neonatal adaptation.",
    "Breastfeeding: sertraline and paroxetine have low milk transfer. Fluoxetine accumulates because of its long half-life. Lithium is generally avoided. Clozapine is contraindicated because of the risk of neonatal agranulocytosis.",
    "The counselling standard: give absolute risks, not relative ones, discuss the risk of untreated illness explicitly, involve perinatal mental health services early, and document the discussion."
  ],
  cards:[
    ["What are the risks of sodium valproate in pregnancy and what is the regulatory position?","Around 10 per cent risk of major congenital malformation including neural tube defects, and 30 to 40 per cent risk of neurodevelopmental disorder in exposed children. It must not be used in women and girls of childbearing potential unless the conditions of the Pregnancy Prevention Programme are met."],
    ["What is neonatal adaptation syndrome?","A self-limiting syndrome after third-trimester SSRI exposure comprising jitteriness, irritability, respiratory distress, temperature instability and feeding difficulty, usually resolving within two weeks."],
    ["Why must lithium levels be monitored through pregnancy and reviewed at delivery?","Renal clearance rises substantially in pregnancy, lowering levels, and falls abruptly at delivery with the loss of the expanded plasma volume, creating a risk of toxicity in the immediate postpartum period."]
  ],
  note:[
    "Organogenesis occurs in weeks three to eight of gestation, the window for structural malformation.",
    "The absolute risk of Ebstein's anomaly with lithium remains low despite a markedly raised relative risk; counsel with absolute figures.",
    "Lamotrigine clearance rises markedly in pregnancy and falls rapidly postpartum; plan adjustment in both directions.",
    "Clozapine is contraindicated in breastfeeding because of neonatal agranulocytosis risk.",
    "The risk of untreated illness, including relapse, self-neglect, suicide and effects on the infant, must be part of every discussion."
  ],
  refs:["maudsley","nice","bnf"] };

TEACH["4.3.6.1"] = { free:false,
  simple:"Anticholinergics are prescribed to fix the movement problems that antipsychotics cause. They work well for two of those problems, do nothing for a third, and make a fourth worse. They also quietly impair memory and are traded on wards for their euphoriant effect.",
  teach:[
    "Procyclidine, orphenadrine, trihexyphenidyl and benztropine are muscarinic antagonists used for drug-induced parkinsonism and acute dystonia.",
    "They work for acute dystonia, dramatically and within minutes when given parenterally, and for drug-induced parkinsonism. They do not work for akathisia and they worsen tardive dyskinesia.",
    "Mechanism: antipsychotic D2 blockade in the striatum disinhibits cholinergic interneurones. Antimuscarinic drugs restore the dopamine-acetylcholine balance.",
    "Adverse effects: dry mouth, blurred vision, constipation, urinary retention, tachycardia, and centrally confusion, memory impairment and, at higher doses, delirium with visual hallucinations.",
    "Anticholinergic burden is cumulative across all a patient's medication and predicts falls, cognitive decline and mortality in older people. It is directly opposed to cholinesterase inhibitor treatment in dementia.",
    "Misuse: procyclidine and trihexyphenidyl are misused for euphoria and are traded in inpatient and prison settings. Ask about it rather than assuming.",
    "Abrupt withdrawal causes cholinergic rebound with agitation, nausea, sweating, insomnia and worsening of extrapyramidal symptoms.",
    "Routine prophylactic prescribing with antipsychotics is not recommended. Prescribe when needed, review regularly, and attempt withdrawal, because a substantial proportion of patients no longer need them.",
    "Hyoscine and other antimuscarinics are used for clozapine hypersalivation; hyoscine hydrobromide crosses the blood-brain barrier and adds to cognitive burden, whereas hyoscine butylbromide does not."
  ],
  cards:[
    ["For which drug-induced movement disorders are anticholinergics effective, ineffective, and harmful?","Effective for acute dystonia and drug-induced parkinsonism. Ineffective for akathisia. Harmful in tardive dyskinesia, which they worsen."],
    ["What is the mechanism of anticholinergics in drug-induced parkinsonism?","Antipsychotic D2 blockade in the striatum disinhibits cholinergic interneurones, disturbing the dopamine-acetylcholine balance. Muscarinic antagonism restores that balance."],
    ["Why should prophylactic anticholinergic prescribing be avoided?","It adds anticholinergic burden with cognitive impairment, falls and delirium risk, has misuse potential, and is unnecessary in many patients. Prescribe when indicated, review regularly, and attempt withdrawal."]
  ],
  note:[
    "Procyclidine 5 to 10 mg intramuscularly or intravenously relieves acute dystonia within minutes.",
    "Anticholinergics are misused for euphoria in inpatient and forensic settings.",
    "Abrupt withdrawal produces cholinergic rebound; taper rather than stop.",
    "Anticholinergic burden scales should be used in older adults.",
    "Hyoscine butylbromide does not cross the blood-brain barrier and is preferred to hydrobromide for hypersalivation where cognition matters."
  ],
  refs:["maudsley","bnf","oxoldage"] };

TEACH["4.3.6.2"] = { free:false,
  simple:"Psychiatrists prescribe anticonvulsants for reasons that have nothing to do with seizures, and they also inherit patients already on them. Both directions require knowing that these drugs interact with almost everything and that some of them cause psychiatric symptoms of their own.",
  teach:[
    "Non-mood-stabilising anticonvulsants encountered in psychiatry include levetiracetam, topiramate, gabapentin, pregabalin, phenytoin and phenobarbital.",
    "Levetiracetam binds synaptic vesicle protein 2A. It causes irritability, aggression, depression and, uncommonly, psychosis in a substantial minority, and is a common cause of behavioural disturbance in patients with epilepsy. Pyridoxine is sometimes used to mitigate this.",
    "Topiramate blocks sodium channels, potentiates GABA and antagonises AMPA and kainate. It causes cognitive slowing and word-finding difficulty, paraesthesia, weight loss, renal stones and metabolic acidosis. It is used off-label for antipsychotic-associated weight gain.",
    "Gabapentin and pregabalin bind the alpha-2-delta subunit of voltage-gated calcium channels, reducing transmitter release. Pregabalin is licensed for generalised anxiety disorder and neuropathic pain. Both are controlled drugs in the UK with genuine misuse and dependence potential, and are implicated in drug-related deaths in combination with opioids.",
    "Phenytoin follows zero-order kinetics within the therapeutic range, is a potent enzyme inducer, and causes gum hypertrophy, hirsutism, cerebellar signs and, chronically, cognitive impairment.",
    "Phenobarbital is a barbiturate: sedating, strongly enzyme-inducing, dependence-forming, and dangerous in overdose. It causes depression and, in children and older people, paradoxical excitation.",
    "The interaction principle: enzyme-inducing anticonvulsants, carbamazepine, phenytoin and phenobarbital, reduce levels of many psychotropics, oral contraceptives and anticoagulants. Sodium valproate is an inhibitor and raises lamotrigine levels.",
    "Seizure threshold: clozapine, chlorpromazine, bupropion and clomipramine lower it most. Among antidepressants, SSRIs are relatively safer, and untreated depression itself worsens seizure control.",
    "Practical rule: when a psychiatric symptom appears in a patient with epilepsy, consider the anticonvulsant, the seizures themselves including postictal and interictal states, and the psychosocial burden of the condition, before adding another drug."
  ],
  cards:[
    ["Which anticonvulsant most commonly causes behavioural disturbance, and what form does it take?","Levetiracetam, causing irritability, aggression, depression and occasionally psychosis in a substantial minority of patients. Pyridoxine is sometimes used to mitigate it."],
    ["What is the legal and clinical status of pregabalin and gabapentin in the UK?","Both are controlled drugs. They have genuine misuse and dependence potential and are implicated in drug-related deaths, particularly in combination with opioids. Pregabalin is licensed for generalised anxiety disorder and neuropathic pain."],
    ["Which psychotropics lower the seizure threshold most?","Clozapine, chlorpromazine, bupropion and clomipramine. SSRIs are comparatively safer, and untreated depression itself worsens seizure control."]
  ],
  note:[
    "Enzyme-inducing anticonvulsants reduce the efficacy of oral contraceptives, which must be discussed with any woman of childbearing potential.",
    "Topiramate is used off-label for antipsychotic-associated weight gain but its cognitive effects limit tolerability.",
    "Clozapine seizure risk is dose- and level-dependent; prophylactic valproate is sometimes added above about 600 micrograms per litre.",
    "Postictal psychosis follows a lucid interval of hours to days after a seizure cluster and remits within days to weeks.",
    "Forced normalisation, Landolt: psychosis emerging as the EEG normalises with seizure control."
  ],
  refs:["maudsley","bnf","lishman"] };

TEACH["4.3.6.3"] = { free:false,
  simple:"Pain and psychiatric illness feed each other, and the drugs cross over in both directions. Antidepressants relieve pain at doses too low to treat depression, and opioids prescribed for pain produce depression, low testosterone and dependence over the long term.",
  teach:[
    "Non-opioid analgesics: paracetamol, and NSAIDs which increase gastrointestinal bleeding risk substantially when combined with SSRIs, since SSRIs deplete platelet serotonin. Consider gastroprotection when both are prescribed.",
    "Antidepressants as analgesics: amitriptyline and duloxetine act on descending inhibitory pathways from periaqueductal grey through rostral ventromedial medulla to the dorsal horn, using serotonin and noradrenaline. Analgesia occurs at doses below the antidepressant range, which is why 10 to 75 mg amitriptyline is used in neuropathic pain.",
    "Gabapentin and pregabalin bind the alpha-2-delta calcium channel subunit and are first-line for neuropathic pain alongside amitriptyline and duloxetine.",
    "Opioids: mu agonism gives analgesia with euphoria, constipation, respiratory depression and dependence. Tolerance to analgesia develops rapidly; tolerance to constipation does not.",
    "Long-term opioids for chronic non-cancer pain have poor evidence of benefit and clear evidence of harm: dependence, opioid-induced hyperalgesia, hypogonadism, immunosuppression, falls in older people, and overdose death.",
    "Tramadol is a mu agonist plus serotonin and noradrenaline reuptake inhibitor. It lowers seizure threshold and can precipitate serotonin syndrome with SSRIs, SNRIs and MAOIs, which is a genuine and common prescribing hazard.",
    "Codeine is a prodrug requiring CYP2D6 conversion to morphine. Poor metabolisers get no analgesia; ultra-rapid metabolisers risk toxicity. Fluoxetine and paroxetine inhibit CYP2D6 and therefore reduce codeine's efficacy.",
    "Pethidine with an MAOI can produce a severe and potentially fatal reaction with hyperthermia and excitation. Morphine is preferred where an MAOI is in use.",
    "Clinical translation: treat pain and mood together, avoid long-term opioids where possible, and check every analgesic against the psychotropic list before prescribing."
  ],
  cards:[
    ["Why do amitriptyline and duloxetine relieve neuropathic pain at low doses?","They act on the descending inhibitory pathway from periaqueductal grey through the rostral ventromedial medulla to the dorsal horn, using serotonin and noradrenaline. This analgesic mechanism operates at doses below the antidepressant range."],
    ["What are the specific hazards of tramadol in psychiatric patients?","It is a mu agonist and serotonin and noradrenaline reuptake inhibitor, so it lowers the seizure threshold and can precipitate serotonin syndrome when combined with SSRIs, SNRIs, tricyclics or MAOIs."],
    ["Why do SSRIs and NSAIDs together require caution?","SSRIs deplete platelet serotonin and impair platelet aggregation, and combined with the gastric effects of NSAIDs this substantially increases upper gastrointestinal bleeding risk. Gastroprotection should be considered."]
  ],
  note:[
    "Codeine requires CYP2D6 for conversion to morphine; fluoxetine and paroxetine inhibit this and reduce its efficacy.",
    "Pethidine with an MAOI can cause a severe hyperthermic reaction; morphine is the safer choice.",
    "Opioid-induced hyperalgesia means dose escalation can worsen chronic pain.",
    "Opioid-induced hypogonadism is common, under-recognised, and causes fatigue and low mood.",
    "NICE guidance on chronic primary pain does not recommend initiating opioids, and recommends exercise, psychological therapy and acupuncture."
  ],
  refs:["bnf","maudphys","nice"] };

TEACH["4.3.6.4"] = { free:false,
  simple:"Beta-blockers do not treat anxiety. They treat the body's version of it: the pounding heart, the shaking hands, the sweating. For a musician before a performance that is exactly what is needed. For a person with generalised anxiety it treats the symptom and leaves the disorder.",
  teach:[
    "Beta-adrenoceptor antagonists reduce peripheral sympathetic manifestations: tachycardia, tremor, palpitations and sweating. They do not treat the cognitive component of anxiety.",
    "Propranolol is non-selective and lipophilic, crossing the blood-brain barrier. Atenolol is cardioselective and hydrophilic, with less CNS penetration.",
    "Akathisia is the strongest psychiatric indication. Propranolol has the best evidence of any pharmacological treatment for akathisia, typically at 30 to 80 mg daily.",
    "Performance anxiety: propranolol taken before a specific predictable event reduces tremor and tachycardia and improves performance in musicians. It is not a treatment for social anxiety disorder as a condition, for which CBT and SSRIs are first line.",
    "Lithium tremor responds to propranolol, and this is a recognised use.",
    "Adverse effects: bradycardia, hypotension, fatigue, cold extremities, vivid dreams and sleep disturbance. Contraindicated in asthma, and used with caution in diabetes because it masks the adrenergic warning signs of hypoglycaemia.",
    "The depression question: an association between beta-blockers and depression was long asserted, particularly for lipophilic agents. Systematic reviews have not supported a causal link, and this claim should now be treated as not established.",
    "Interaction: propranolol raises chlorpromazine and thioridazine levels. Abrupt withdrawal after prolonged use causes rebound tachycardia and hypertension, so taper.",
    "Clonidine and guanfacine are alpha-2 agonists rather than beta-blockers, used in ADHD, tics and opioid withdrawal, and are worth distinguishing."
  ],
  cards:[
    ["What is the strongest psychiatric indication for propranolol?","Akathisia, for which it has the best evidence of any pharmacological treatment, typically at 30 to 80 mg daily."],
    ["What do beta-blockers treat in anxiety, and what do they not treat?","They reduce peripheral autonomic symptoms such as tremor, palpitations, tachycardia and sweating. They do not treat the cognitive or worry component, and are not a treatment for generalised or social anxiety disorder."],
    ["Is the association between beta-blockers and depression established?","No. Although long asserted, particularly for lipophilic agents such as propranolol, systematic reviews have not supported a causal association, and it should not be treated as established."]
  ],
  note:[
    "Propranolol is lipophilic and CNS-penetrant; atenolol is hydrophilic and cardioselective.",
    "Beta-blockers are contraindicated in asthma and mask adrenergic warning signs of hypoglycaemia in diabetes.",
    "Propranolol inhibits the metabolism of chlorpromazine and thioridazine, raising their levels.",
    "Abrupt withdrawal after prolonged use causes rebound tachycardia and hypertension.",
    "Propranolol has been studied in reconsolidation blockade for PTSD, with mixed results."
  ],
  refs:["maudsley","bnf","nice"] };

TEACH["4.3.6.5"] = { free:false,
  simple:"Dopamine agonists are the mirror image of antipsychotics. Where one blocks dopamine and causes stiffness and flatness, the other floods it and causes hallucinations and gambling. Seeing them as opposite ends of one dial makes both sets of side effects predictable.",
  teach:[
    "Drugs: levodopa with a peripheral decarboxylase inhibitor, and direct agonists ropinirole, pramipexole, rotigotine and, historically, cabergoline and bromocriptine.",
    "Uses: Parkinson's disease, restless legs syndrome, hyperprolactinaemia including antipsychotic-induced, and NMS.",
    "Psychiatric adverse effects follow directly from dopaminergic excess: visual hallucinations, delusions, confusion, and dopaminergic psychosis, particularly in older patients and those with cognitive impairment.",
    "Impulse control disorders are the examinable point. Pathological gambling, hypersexuality, compulsive shopping and binge eating occur in a substantial minority on dopamine agonists, more than on levodopa. They resolve on withdrawal, and patients rarely volunteer them, so ask directly.",
    "This is a human demonstration of the reward circuit: manipulate mesolimbic dopamine pharmacologically and you produce addictive behaviour in people with no prior history.",
    "Dopamine dysregulation syndrome describes compulsive overuse of dopaminergic medication with cycles of euphoria and dysphoria, resembling a substance use disorder.",
    "Managing psychosis in Parkinson's disease: reduce the dopaminergic load where possible, then use quetiapine or clozapine. Clozapine has the best evidence. All other antipsychotics worsen motor symptoms, and severe neuroleptic sensitivity in Lewy body disease can be fatal.",
    "Cholinesterase inhibitors, particularly rivastigmine, help both cognition and hallucinations in Parkinson's disease dementia.",
    "Cabergoline and bromocriptine, ergot-derived agonists, carry a risk of cardiac valvulopathy and fibrotic reactions, which is why non-ergot agonists are preferred."
  ],
  cards:[
    ["What impulse control disorders occur with dopamine agonists, and how should they be identified?","Pathological gambling, hypersexuality, compulsive shopping and binge eating, occurring in a substantial minority, more often with direct agonists than with levodopa. Patients rarely disclose them, so ask directly and repeatedly, and warn before prescribing."],
    ["How should psychosis in Parkinson's disease be managed?","Reduce dopaminergic medication where possible, then use quetiapine or, with better evidence, clozapine. Other antipsychotics worsen motor symptoms, and severe neuroleptic sensitivity in Lewy body disease can be fatal."],
    ["What is dopamine dysregulation syndrome?","Compulsive overuse of dopaminergic medication beyond that needed for motor control, with cycles of euphoria and dysphoria and withdrawal on reduction, resembling a substance use disorder."]
  ],
  note:[
    "Ergot-derived agonists, cabergoline and bromocriptine, carry a risk of cardiac valvulopathy and retroperitoneal fibrosis.",
    "Bromocriptine is used in neuroleptic malignant syndrome and cabergoline for antipsychotic-induced hyperprolactinaemia where switching is not possible.",
    "Abrupt withdrawal of dopaminergic medication can precipitate a neuroleptic malignant-like syndrome.",
    "Rivastigmine is licensed for Parkinson's disease dementia and helps hallucinations as well as cognition.",
    "Impulse control disorders on dopamine agonists resolve on withdrawal, which is diagnostically useful."
  ],
  refs:["bnf","oxoldage","maudsley"] };

TEACH["4.3.6.6"] = { free:false,
  simple:"Adrenergic agonists are prescribed in psychiatry for two opposite reasons: to calm a child with ADHD, and to steady a person coming off opioids. Both work by turning down the same over-firing noradrenergic nucleus in the brainstem.",
  teach:[
    "Alpha-2 agonists clonidine and guanfacine act on presynaptic autoreceptors, reducing noradrenaline release, and postsynaptically in prefrontal cortex, where guanfacine's alpha-2A selectivity strengthens network connectivity.",
    "Guanfacine is licensed for ADHD in children and adolescents where stimulants are unsuitable or ineffective. It is non-stimulant, has no abuse potential, and causes sedation, hypotension and bradycardia.",
    "Clonidine is used for tics and Tourette syndrome, for ADHD, and for opioid withdrawal, where it suppresses the noradrenergic overactivity from locus coeruleus disinhibition that produces sweating, agitation, cramps and diarrhoea. Lofexidine is the licensed UK alternative with less hypotension.",
    "Alpha-1 antagonism, the opposite action, is used therapeutically: prazosin for trauma nightmares in PTSD, on the basis of noradrenergic overactivity during sleep. Trial evidence is mixed but it remains widely used.",
    "Beta agonists such as salbutamol commonly cause tremor, palpitations, anxiety and insomnia, and are a frequent cause of apparent anxiety in patients with asthma.",
    "Sympathomimetics in over-the-counter preparations, pseudoephedrine and phenylephrine, cause anxiety, insomnia and rarely psychosis, and interact dangerously with MAOIs.",
    "The MAOI interaction is a genuine emergency: indirectly acting sympathomimetics, including those in cold remedies, and dietary tyramine can precipitate a hypertensive crisis with severe headache, hypertension and risk of intracranial haemorrhage. Patients on irreversible MAOIs must be given written dietary and medication advice.",
    "Adrenaline is used in anaphylaxis and is an example of physiological rather than receptor antagonism, opposing histamine through a different receptor system.",
    "Abrupt clonidine withdrawal causes rebound hypertension, so taper."
  ],
  cards:[
    ["How do clonidine and guanfacine act, and what are their psychiatric uses?","They are alpha-2 adrenoceptor agonists, reducing noradrenaline release presynaptically and, for guanfacine's alpha-2A selectivity, strengthening prefrontal network signalling. Uses include ADHD, tics and Tourette syndrome, and opioid withdrawal."],
    ["Why is clonidine effective in opioid withdrawal?","Opioid withdrawal releases the locus coeruleus from mu-mediated inhibition, producing noradrenergic overactivity with sweating, agitation, cramps and diarrhoea. Alpha-2 agonism suppresses that overactivity. Lofexidine is the licensed UK alternative with less hypotension."],
    ["What is the tyramine reaction and which drugs precipitate it?","A hypertensive crisis in patients on irreversible MAOIs, precipitated by dietary tyramine or indirectly acting sympathomimetics including those in over-the-counter cold remedies. It presents with severe headache and hypertension and risks intracranial haemorrhage."]
  ],
  note:[
    "Prazosin is used off-label for PTSD nightmares; trial evidence is mixed but clinical use is widespread.",
    "Salbutamol and other beta agonists commonly produce tremor and anxiety and should be considered in apparent anxiety in asthma.",
    "Abrupt clonidine withdrawal causes rebound hypertension.",
    "Patients on irreversible MAOIs must receive written dietary and medication advice and carry a card.",
    "Moclobemide is reversible and selective for MAO-A and does not require dietary restriction at normal doses."
  ],
  refs:["bnf","maudsley","semaddict"] };

TEACH["4.3.7"] = { free:true,
  simple:"ECT is the most effective treatment we have for severe depression and nobody can say exactly why it works. What is clear is that it is not simply the seizure. It changes the receptors, raises the growth factors and, uniquely among our treatments, appears to grow new cells in the hippocampus.",
  teach:[
    "Monoamines: ECT increases the sensitivity of postsynaptic 5-HT1A receptors and downregulates beta-adrenoceptors, changes shared with antidepressants but produced faster.",
    "Dopamine: ECT enhances dopaminergic transmission, which is why it is effective in Parkinson's disease with depression and in catatonia and neuroleptic malignant syndrome.",
    "GABA: ECT increases GABAergic transmission, and the rising seizure threshold across a course is attributed to this. This is also the leading account of its anticonvulsant and therapeutic action.",
    "The anticonvulsant hypothesis: the therapeutic effect correlates with the rise in seizure threshold and the shortening of seizures across a course, suggesting that the brain's inhibitory response to the seizure, not the seizure itself, is therapeutic.",
    "Neurotrophic: ECT produces the largest increase in BDNF of any antidepressant treatment and increases hippocampal neurogenesis in animals. Hippocampal and amygdala volume increase measurably in humans over a course.",
    "Neuroendocrine: ECT normalises the dysregulated HPA axis, with restoration of dexamethasone suppression accompanying clinical response.",
    "Network effects: reduced functional connectivity in the subgenual cingulate and altered default mode network connectivity following a course.",
    "Clinical facts that follow: bilateral placement is more effective and more cognitively costly than right unilateral; efficacy relates to the electrical dose relative to seizure threshold, not merely to producing a seizure; and the anaesthetic agent matters, since propofol raises seizure threshold.",
    "Adverse effects: retrograde and anterograde memory disturbance, with autobiographical memory most affected. Most recovers over weeks to months, and a minority report persistent gaps."
  ],
  cards:[
    ["State the anticonvulsant hypothesis of ECT.","The therapeutic effect correlates with the progressive rise in seizure threshold and shortening of seizure duration across a course, suggesting that the brain's endogenous inhibitory, largely GABAergic, response to repeated seizures is therapeutic rather than the seizure itself."],
    ["What neurotrophic changes does ECT produce?","The largest increase in BDNF of any antidepressant treatment, increased hippocampal neurogenesis in animal models, and measurable increases in hippocampal and amygdala volume in humans over a course of treatment."],
    ["Why is ECT effective in Parkinson's disease and catatonia?","It enhances dopaminergic transmission, which improves motor symptoms in Parkinson's disease and is thought to underlie its efficacy in catatonia and in neuroleptic malignant syndrome."]
  ],
  note:[
    "Bitemporal placement is more effective and more cognitively costly than right unilateral; high-dose right unilateral narrows the gap.",
    "Propofol raises seizure threshold; the choice of anaesthetic affects seizure adequacy.",
    "ECT remains the most effective acute treatment for severe depression, particularly with psychotic features, stupor or refusal of food and fluid.",
    "Autobiographical memory is the domain most affected; most recovers over weeks to months.",
    "The ECT Handbook, Ferrier and Waite, is the College-listed reference. Item 6.3.1 and 6.3.2 cover the clinical aspects."
  ],
  refs:["ecthandbk","stahl","nice"] };

/* ---------------- 4.4 THERAPEUTICS ---------------- */

TEACH["4.4.1.1"] = { free:true,
  simple:"Before you write anything, answer one question: what should be different in six weeks, and how will we both know. If you cannot answer it, you are not treating anything, you are hoping. And a drug started without a target is a drug nobody will ever dare stop.",
  teach:[
    "Define the target symptom or syndrome, not just the diagnosis. Sleep, appetite, concentration, agitation and suicidal thinking respond at different rates and are worth naming separately.",
    "Set a measurable outcome and a time frame. Record a baseline score. Without a baseline you cannot demonstrate improvement or its absence, and this is the commonest failure in routine practice.",
    "Distinguish the phases of treatment, because the goal changes with each: acute treatment aims at response and then remission; continuation prevents relapse of the same episode; maintenance prevents recurrence of a new episode.",
    "Response is conventionally a 50 per cent reduction in symptom score; remission is a fall below a defined threshold with minimal residual symptoms. Residual symptoms predict relapse and should not be accepted as an endpoint.",
    "Agree the goal with the patient, and include their goal. A patient's target is often function, sleep or being able to work, not a score.",
    "Include a tolerability goal. A treatment that removes symptoms and produces intolerable sexual dysfunction or weight gain has not succeeded.",
    "Set a review date and a stopping plan at the outset. Deprescribing is an active clinical task, and drugs continued by default cause substantial harm.",
    "Document the rationale. A prescription with no recorded reason will be continued indefinitely by clinicians who do not know why it was started.",
    "Where the goal is symptom control rather than cure, say so plainly. In dementia, in chronic psychosis and in personality disorder, honesty about what medication can and cannot do is part of the treatment."
  ],
  cards:[
    ["Name the three phases of treatment and the goal of each.","Acute treatment, aiming at response then remission; continuation treatment, preventing relapse of the current episode; and maintenance treatment, preventing recurrence of a new episode."],
    ["Why is recording a baseline essential?","Without a baseline measurement, improvement or its absence cannot be demonstrated, response cannot be judged, and decisions about continuing, switching or stopping are made on impression rather than evidence."],
    ["Why do residual symptoms matter after treatment?","They predict relapse and poorer functional outcome, so remission with minimal residual symptoms rather than mere response should be the target, and persistent residual symptoms warrant further optimisation."]
  ],
  note:[
    "Every long-term prescription should carry a documented indication and a review date.",
    "Functional recovery lags symptomatic recovery and should be measured separately.",
    "Shared decision making is explicit in NICE guidance and improves adherence.",
    "Patient-defined goals frequently differ from clinician-defined goals and should be elicited.",
    "A tolerability goal is part of the treatment goal, not a separate consideration."
  ],
  refs:["nice","maudsley","semgen"] };

TEACH["4.4.1.2.1"] = { free:false,
  simple:"The same diagnosis does not mean the same prescription. Mild depression and severe depression with psychosis are the same word and different illnesses, and the difference decides not just the dose but whether a drug is the right treatment at all.",
  teach:[
    "Severity determines whether medication is indicated at all. In mild depression, antidepressants have a poor risk-benefit balance and NICE recommends psychological or low-intensity interventions first. Drug-placebo difference increases with baseline severity.",
    "Depression: for moderate to severe illness an SSRI is first line, with psychological therapy. Psychotic depression requires an antidepressant plus an antipsychotic, or ECT; an antidepressant alone is inadequate.",
    "Bipolar disorder: the diagnosis changes everything. Antidepressant monotherapy risks switching to mania and is avoided. Acute mania is treated with an antipsychotic, or lithium or valproate. Bipolar depression is treated with quetiapine, olanzapine with fluoxetine, lamotrigine or lurasidone.",
    "Schizophrenia: any antipsychotic other than clozapine as first line, chosen on adverse effect profile and patient preference. Clozapine is indicated after failure of two adequate trials, at least one a second-generation drug, each of at least six weeks at a therapeutic dose.",
    "Anxiety disorders: SSRIs are first line for most, at doses that may need to be higher than in depression, with longer to respond. OCD requires higher doses and at least twelve weeks.",
    "PTSD: trauma-focused psychological therapy is first line; drugs are second line.",
    "Personality disorder: no drug is licensed for the disorder itself. Medication treats comorbidity or short-term crisis, and polypharmacy in this group is a recognised harm.",
    "Dementia: cholinesterase inhibitors and memantine by severity band. Antipsychotics for behavioural symptoms only where there is severe distress or risk, having excluded a physical cause.",
    "The general rule: diagnosis sets the class, severity sets whether and how aggressively, and comorbidity and physical health set which drug within the class."
  ],
  cards:[
    ["Why are antidepressants not first line in mild depression?","The drug-placebo difference increases with baseline severity and is small in mild depression, so the risk-benefit balance is unfavourable. NICE recommends psychological and low-intensity interventions first."],
    ["What defines treatment-resistant schizophrenia and what follows?","Failure to respond to adequate trials of two antipsychotics, at least one a second-generation drug, each given for at least six weeks at a therapeutic dose with confirmed adherence. Clozapine is then indicated and should not be delayed."],
    ["How does treatment of psychotic depression differ from non-psychotic depression?","It requires an antidepressant combined with an antipsychotic, or ECT. An antidepressant alone is inadequate, and ECT is particularly indicated where there is stupor, food refusal or high suicide risk."]
  ],
  note:[
    "Delay in starting clozapine after criteria are met is common and is associated with poorer response.",
    "Antidepressant monotherapy in bipolar disorder risks switching and rapid cycling.",
    "OCD requires higher SSRI doses and at least twelve weeks before judging response.",
    "No drug is licensed for personality disorder itself; medication targets comorbidity or crisis.",
    "In dementia, exclude pain, infection, constipation and urinary retention before prescribing for behavioural symptoms."
  ],
  refs:["nice","maudsley","semgen"] };

TEACH["4.4.1.2.2"] = { free:false,
  simple:"The same drug is used differently at three points in an illness: getting somebody well, keeping them well through the current episode, and stopping the next one. Most relapses happen because treatment stopped at the end of the first phase.",
  teach:[
    "Acute phase: aims at response then remission. Antidepressants are judged at four to six weeks at a therapeutic dose; antipsychotics at six weeks; OCD at twelve weeks.",
    "Continuation phase: the same dose that achieved remission is continued to prevent relapse of the same episode. In depression, at least six months after remission for a first episode.",
    "Maintenance phase: prevention of a new episode. In depression, at least two years for those at high risk of recurrence, and often longer. Risk of recurrence rises with each episode: roughly 50 per cent after one, 70 per cent after two, 90 per cent after three.",
    "The dose that achieved remission is the dose that maintains it. Reducing the dose for maintenance is a common error and increases relapse.",
    "Schizophrenia: continue antipsychotic treatment for at least one to two years after a first episode. Discontinuation carries a high relapse rate, and each relapse is associated with poorer functional recovery and longer time to remission.",
    "Bipolar disorder: prophylaxis is the central task, and lithium has the best long-term evidence. Abrupt lithium discontinuation causes rebound mania, so withdraw over at least four weeks.",
    "Subacute phase considerations: early treatment adverse effects, activation and akathisia, are commonest in the first two weeks and are a major cause of early discontinuation and of increased suicidal ideation in young people.",
    "Monitoring intensity changes with phase: frequent early review during initiation and dose change, less frequent but never absent during maintenance.",
    "Discontinuation is a phase in its own right and needs a plan: taper over weeks to months, warn about discontinuation symptoms, and distinguish those from relapse."
  ],
  cards:[
    ["How long should antidepressant treatment continue after remission?","At least six months after remission for a first episode, and at least two years for those at high risk of recurrence, at the dose that achieved remission."],
    ["Give the risk of recurrence after one, two and three depressive episodes.","Approximately 50 per cent after one episode, 70 per cent after two, and 90 per cent after three."],
    ["Why is the first two weeks of antidepressant treatment a high-risk period?","Activation, akathisia, anxiety and insomnia are commonest then and are associated with early discontinuation and with increased suicidal ideation in young people, which is why early and frequent review is required."]
  ],
  note:[
    "The dose that achieved remission is the dose that maintains it; dose reduction for maintenance increases relapse.",
    "Abrupt lithium discontinuation causes rebound mania; taper over at least four weeks.",
    "Each relapse in schizophrenia is associated with longer time to remission and poorer functional recovery.",
    "Distinguish discontinuation symptoms, which start within days and resolve on reinstatement, from relapse, which starts later and does not.",
    "Maintenance treatment decisions should be revisited periodically, not made once."
  ],
  refs:["nice","maudsley","semgen"] };

TEACH["4.4.1.2.3"] = { free:false,
  simple:"The physical health of a psychiatric patient decides which drug is safe far more often than the psychiatric diagnosis decides which drug is effective. A patient with a long QT, chronic kidney disease and diabetes has already narrowed your options before you have thought about symptoms.",
  teach:[
    "Cardiac: avoid or use with caution QT-prolonging drugs where there is existing QT prolongation, bradycardia, heart failure or electrolyte disturbance. Aripiprazole and lurasidone have the lowest QT burden. Citalopram and escitalopram are dose-capped. Tricyclics are contraindicated after recent myocardial infarction and are cardiotoxic in overdose; sertraline is the usual choice post-infarction.",
    "Renal: lithium, amisulpride, sulpiride and paliperidone are substantially renally cleared and require dose reduction or avoidance. Lithium is relatively contraindicated in significant renal impairment. Gabapentin and pregabalin also accumulate.",
    "Hepatic: reduced first-pass metabolism raises bioavailability and reduced albumin raises free drug. Prefer lorazepam, oxazepam and temazepam. Avoid or monitor closely valproate, agomelatine and duloxetine.",
    "Diabetes and metabolic syndrome: avoid olanzapine and clozapine where alternatives exist; prefer aripiprazole, lurasidone or amisulpride. Beta-blockers mask hypoglycaemic warning signs.",
    "Epilepsy: clozapine, chlorpromazine, bupropion and clomipramine lower seizure threshold most. SSRIs are relatively safer. Untreated depression itself worsens seizure control.",
    "Respiratory: caution with sedatives in significant respiratory disease and obstructive sleep apnoea. Beta-blockers are contraindicated in asthma. Cholinesterase inhibitors can worsen asthma and COPD.",
    "Bleeding risk: SSRIs impair platelet aggregation; combined with NSAIDs, anticoagulants or antiplatelets they increase gastrointestinal bleeding, so consider gastroprotection.",
    "Glaucoma and prostatism: anticholinergic drugs precipitate acute angle-closure glaucoma and urinary retention.",
    "The practical method: list the comorbidities and the current drugs first, exclude the unsafe options, and choose from what remains. This is the reverse of how it is usually done."
  ],
  cards:[
    ["Which antidepressant is preferred after myocardial infarction and why?","Sertraline. It has minimal effect on the QT interval, few interactions, and safety data in cardiac populations. Tricyclics are avoided because of cardiotoxicity and arrhythmia risk, and citalopram is dose-limited by QT prolongation."],
    ["Which psychotropics require dose reduction or avoidance in renal impairment?","Lithium, which is relatively contraindicated in significant impairment, together with amisulpride, sulpiride, paliperidone, gabapentin and pregabalin, all substantially renally cleared."],
    ["Why do SSRIs increase bleeding risk, and what should be done?","They deplete platelet serotonin and impair platelet aggregation. Combined with NSAIDs, anticoagulants or antiplatelet agents this substantially increases gastrointestinal bleeding risk, so gastroprotection should be considered."]
  ],
  note:[
    "Correct potassium and magnesium before attributing QT prolongation to a drug.",
    "Anticholinergic drugs precipitate acute angle-closure glaucoma and urinary retention in prostatism.",
    "Cholinesterase inhibitors can cause bradycardia and syncope; take a cardiac history before prescribing.",
    "The Maudsley Practice Guidelines for Physical Health Conditions in Psychiatry is the College-listed reference for this material.",
    "People with severe mental illness die 15 to 20 years early, predominantly of physical disease, which is why this item matters more than its size suggests."
  ],
  refs:["maudphys","maudsley","bnf"] };

TEACH["4.4.1.2.4"] = { free:true,
  simple:"Start low and go slow is not a slogan, it is arithmetic. An eighty-year-old clears drugs at half the rate, holds fat-soluble ones far longer, and has a brain that is more sensitive to every one of them. The same tablet is not the same dose.",
  teach:[
    "Children and adolescents: most psychotropic prescribing is off-label because trials are scarce. Weight-adjusted clearance is often higher than in adults, so mg per kg doses may exceed adult equivalents. Fluoxetine is the only antidepressant with a favourable balance in this age group and is used with psychological therapy and close early monitoring for suicidal ideation.",
    "Adolescents require particular attention to activation and akathisia in the first weeks, when suicidal ideation risk is highest.",
    "Adults: standard dosing, with attention to reproductive status in anyone of childbearing potential. Valproate must not be used in women and girls of childbearing potential outside the Pregnancy Prevention Programme.",
    "Older adults: reduced hepatic mass and blood flow, reduced renal clearance, reduced albumin, reduced total body water and increased body fat. Lipophilic drugs such as diazepam accumulate markedly; water-soluble drugs reach higher peak concentrations.",
    "Older adults are more sensitive to anticholinergic, sedative, orthostatic and extrapyramidal effects at any given concentration, independent of pharmacokinetics.",
    "Specific risks in old age: hyponatraemia from SSRI-induced SIADH, commonest in the first month; falls from sedation and postural hypotension; and increased stroke and mortality risk from antipsychotics in dementia.",
    "Start at a half to a third of the adult dose in older people, titrate slowly, and review often. But do not undertreat: therapeutic nihilism in old age psychiatry is as harmful as overprescribing, and depression in older people responds well to adequate treatment.",
    "Anticholinergic burden should be actively calculated and reduced in older adults, as it predicts falls, delirium, cognitive decline and mortality.",
    "Intellectual disability: greater sensitivity, greater difficulty reporting adverse effects, and a high rate of inappropriate long-term prescribing. STOMP is the national programme addressing this."
  ],
  cards:[
    ["Which antidepressant is first line in children and adolescents, and why?","Fluoxetine, the only antidepressant with a favourable risk-benefit balance in this age group, used alongside psychological therapy with close monitoring for suicidal ideation in the early weeks."],
    ["Why do older people require lower doses, beyond reduced clearance?","Increased body fat and reduced total body water alter distribution, and there is increased pharmacodynamic sensitivity at the receptor level, so older people experience greater anticholinergic, sedative, orthostatic and extrapyramidal effects at any given plasma concentration."],
    ["Name three specific prescribing risks in older adults.","Hyponatraemia from SSRI-induced SIADH, commonest in the first month; falls from sedation and postural hypotension; and increased stroke and mortality risk from antipsychotics prescribed in dementia."]
  ],
  note:[
    "Therapeutic nihilism in older adults is as harmful as overprescribing; depression in old age responds well to adequate treatment including ECT.",
    "STOMP addresses over-medication of people with a learning disability, autism or both.",
    "Anticholinergic burden scales should be used routinely in older adults.",
    "Valproate must not be used in women and girls of childbearing potential outside the Pregnancy Prevention Programme.",
    "Most psychotropic prescribing in children is off-label; document the rationale and inform the family."
  ],
  refs:["maudsley","nice","oxoldage"] };

TEACH["4.4.1.3"] = { free:false,
  simple:"There is no such thing as a safe drug, only a drug whose risks are worth taking for this person. The comparison is never with no risk. It is with the risk of leaving the illness untreated, and that risk is usually the larger one.",
  teach:[
    "The comparison must be explicit: the risk of the drug against the risk of the untreated condition, not against zero. Untreated severe depression carries a substantial mortality; untreated psychosis carries deterioration, disengagement and risk.",
    "Individualise. The same drug carries different risk in a 24-year-old man, a woman planning pregnancy, and an 84-year-old with atrial fibrillation and renal impairment.",
    "Quantify where you can. Give absolute risks, not relative ones. A doubling of a risk of one in ten thousand is not the same conversation as a doubling of a risk of one in ten.",
    "Numbers needed to treat and to harm are the honest way to present this. If NNT is 7 and NNH for a serious effect is 200, that is a defensible ratio and can be explained.",
    "Consider the reversibility of harm. Weight gain is reversible; tardive dyskinesia may not be. Sexual dysfunction usually resolves; agranulocytosis can kill.",
    "Consider the person's own weighting. Some patients will accept substantial metabolic risk to avoid sedation; others the reverse. Their weighting, not yours, should drive the choice where efficacy is comparable.",
    "Capacity and consent: where the person has capacity, the decision is theirs. Where capacity is absent, best interests under the Mental Capacity Act, taking account of past and present wishes. Treatment for mental disorder under the Mental Health Act is a separate legal route with its own safeguards.",
    "Document the appraisal. What you considered, what you discussed, what was decided and why. This is both good practice and the only defence if the risk materialises.",
    "Review the appraisal. Risk changes as the person ages, becomes physically unwell, becomes pregnant or recovers. A decision that was right three years ago may be wrong now."
  ],
  cards:[
    ["Against what should the risk of a psychotropic be compared?","Against the risk of leaving the condition untreated, never against zero. Untreated severe mental illness carries substantial morbidity and mortality that must be part of the comparison."],
    ["Why should absolute rather than relative risk be communicated?","Relative risk exaggerates the perceived magnitude of harm when the baseline risk is low. A doubling of a one in ten thousand risk is a very different clinical proposition from a doubling of a one in ten risk, and patients cannot weigh relative figures meaningfully."],
    ["What should be documented in a risk-benefit appraisal?","What alternatives were considered, the risks and benefits discussed, the patient's own priorities and concerns, the decision reached, the reasoning, and the arrangements for review."]
  ],
  note:[
    "Reversibility of harm is a distinct dimension from probability and should be weighed separately.",
    "Where efficacy is comparable, the patient's own weighting of adverse effects should determine the choice.",
    "Treatment for mental disorder under the Mental Health Act follows a separate legal route from best interests under the Mental Capacity Act.",
    "Risk-benefit appraisals should be reviewed as circumstances change, not made once.",
    "Number needed to treat and number needed to harm together give the clearest honest summary."
  ],
  refs:["maudsley","nice","noptp"] };

TEACH["4.4.2.1"] = { free:true,
  simple:"Two of the commonest mistakes in psychiatry are giving too little for too short a time and then calling the drug a failure, and giving more than the maximum in the belief that more must work better. Both come from not knowing the numbers.",
  teach:[
    "Minimum effective dose: the lowest dose that produces the therapeutic effect. For many antipsychotics and SSRIs the dose-response curve is flat above this, so increasing the dose adds side effects without adding benefit.",
    "Antipsychotics: haloperidol 4 to 6 mg, olanzapine 10 mg, risperidone 4 mg and aripiprazole 10 mg daily are around the effective dose for most patients with first-episode psychosis. Exceeding licensed maxima has no evidence base.",
    "Antidepressants: SSRIs have a relatively flat dose-response curve for depression above the starting dose, so increasing beyond the standard dose helps a minority. In OCD and in some anxiety disorders higher doses genuinely are needed.",
    "Time to response: some improvement is usually visible by two weeks and predicts eventual response. Judge antidepressants at four to six weeks at a therapeutic dose, antipsychotics at six weeks, and OCD at twelve weeks.",
    "Early improvement at two weeks is one of the better predictors of eventual response, so absence of any change by then is a reason to review dose and adherence rather than to wait passively.",
    "Lithium: therapeutic 0.4 to 1.0 mmol/L, commonly 0.6 to 0.8 for maintenance, higher in acute mania, measured twelve hours post-dose.",
    "Clozapine: plasma levels above about 350 micrograms per litre are associated with better response; seizure risk rises above about 600.",
    "Before declaring a treatment failure, check three things: was the dose adequate, was the duration adequate, and was the drug actually taken. Failure of any of these is far commoner than true non-response.",
    "Titrate to effect and tolerability, not to the maximum in the formulary."
  ],
  cards:[
    ["What must be verified before declaring a drug ineffective?","That the dose was adequate, that the duration was adequate, and that the drug was actually taken. Non-adherence and inadequate trials are far commoner than true non-response."],
    ["How long should an antidepressant, an antipsychotic and an OCD trial run before judging response?","Antidepressants four to six weeks at a therapeutic dose, antipsychotics six weeks, and OCD at least twelve weeks at a higher dose."],
    ["What is the evidence for exceeding licensed antipsychotic doses?","There is none for routine use. The dose-response curve is flat above the effective range, so higher doses add adverse effects including QT prolongation and extrapyramidal symptoms without improving efficacy."]
  ],
  note:[
    "Early improvement at two weeks predicts eventual response and should prompt review if absent.",
    "SSRIs have a relatively flat dose-response curve in depression but a steeper one in OCD.",
    "Lithium level is taken twelve hours post-dose; a level before steady state cannot be interpreted.",
    "Clozapine levels guide dosing where response is inadequate or toxicity is suspected.",
    "High-dose antipsychotic treatment requires documented rationale, consent where possible, and enhanced monitoring including ECG."
  ],
  refs:["maudsley","nice","bnf"] };

TEACH["4.4.2.2"] = { free:true,
  simple:"When somebody does not get better, the temptation is to add another drug. The better move almost every time is to go back and check whether the first one was ever given a fair chance, because inadequate treatment looks exactly like resistance.",
  teach:[
    "Pseudoresistance is the first consideration: inadequate dose, inadequate duration, non-adherence, wrong diagnosis, untreated comorbidity such as substance misuse or a physical condition, and unaddressed psychosocial maintaining factors.",
    "Treatment-resistant depression: conventionally failure to respond to two antidepressants of adequate dose and duration. Options are switching within or between classes, augmentation, combination, ECT, and specialist interventions.",
    "Augmentation in depression: lithium has the longest evidence; an atypical antipsychotic, quetiapine or aripiprazole, is licensed for augmentation; liothyronine is an option. Combination of an SSRI with mirtazapine is used.",
    "ECT remains the most effective acute treatment for severe depression, and is particularly indicated with psychotic features, stupor, food refusal or high suicide risk.",
    "Newer options: ketamine and esketamine, licensed under supervision, and repetitive transcranial magnetic stimulation, approved by NICE for treatment-resistant depression.",
    "Treatment-resistant schizophrenia: failure to respond to two antipsychotics, at least one a second-generation drug, each at a therapeutic dose for at least six weeks, with adherence confirmed. Clozapine is then indicated.",
    "Clozapine should not be delayed. Delay after criteria are met is common and is associated with poorer response, and around a third of patients who would benefit never receive it.",
    "Clozapine augmentation, where clozapine alone is inadequate at an adequate plasma level, has a weak evidence base. Amisulpride and ECT have the least poor evidence.",
    "STAR*D taught the shape of the problem: about a third remitted at step one and around two thirds cumulatively across four steps, with declining remission and rising relapse at each successive step."
  ],
  cards:[
    ["What is pseudoresistance and what does it comprise?","Apparent treatment resistance caused by inadequate dose, inadequate duration, non-adherence, incorrect diagnosis, untreated comorbidity including substance misuse and physical illness, or unaddressed psychosocial maintaining factors."],
    ["Define treatment-resistant schizophrenia and state the consequence.","Failure to respond to adequate trials of two antipsychotics, at least one second-generation, each for at least six weeks at a therapeutic dose with adherence confirmed. Clozapine is then indicated and should be offered without delay."],
    ["What augmentation strategies have evidence in treatment-resistant depression?","Lithium augmentation, atypical antipsychotic augmentation with quetiapine or aripiprazole, liothyronine, combination with mirtazapine, ECT, and specialist options including ketamine or esketamine and rTMS."]
  ],
  note:[
    "STAR*D: approximately a third remitted at step one, around two thirds cumulatively over four steps, with declining remission at each step.",
    "Delay in initiating clozapine after criteria are met is associated with poorer response.",
    "Around a third of patients who meet criteria for clozapine never receive it.",
    "Clozapine augmentation has a weak evidence base; check the plasma level and adherence first.",
    "Reassess the diagnosis in any apparently resistant case; bipolar depression treated as unipolar is a common cause."
  ],
  refs:["maudsley","nice","semgen"] };

TEACH["4.4.2.3"] = { free:false,
  simple:"Swapping one drug for another sounds simple and is the point at which many patients get worse. Stop the first too fast and you get discontinuation symptoms or relapse. Overlap carelessly and you get serotonin syndrome. The method matters as much as the choice.",
  teach:[
    "Four strategies: direct switch, stopping one and starting the other next day; cross-taper, reducing one while introducing the other; taper and immediate switch; and taper with a washout before starting.",
    "Cross-tapering is usually preferred because it avoids both discontinuation symptoms and a period without cover. It requires care where the two drugs have overlapping toxicity.",
    "Absolute washouts: at least two weeks between an irreversible MAOI and most other antidepressants in either direction, and at least five weeks after fluoxetine before an MAOI because of norfluoxetine's long half-life. Moclobemide, being reversible, needs about 24 hours.",
    "Serotonin syndrome is the risk when overlapping serotonergic drugs. Avoid combining an SSRI or SNRI with an MAOI, tramadol, linezolid, triptans in high dose, or St John's wort.",
    "Switching antipsychotics: cross-taper over one to four weeks. Watch for cholinergic rebound when reducing a strongly anticholinergic drug such as clozapine or chlorpromazine, and for rebound psychosis and dystonia.",
    "Switching to aripiprazole from a potent D2 antagonist requires particular care, since partial agonism at newly upregulated receptors can precipitate agitation or psychotic worsening. Cross-taper slowly.",
    "Switching from a depot: absorption continues for weeks after the last injection, so the oral drug is introduced gradually as depot levels fall.",
    "Within-class versus between-class switching in depression: evidence does not clearly favour either, and the choice is usually made on adverse effect profile and patient preference.",
    "Whatever the strategy, warn the patient what to expect, review early, and record the plan clearly so that the next clinician can follow it."
  ],
  cards:[
    ["What washout is required between fluoxetine and an irreversible MAOI, and why?","At least five weeks, because fluoxetine's active metabolite norfluoxetine has a half-life of four to sixteen days and must be substantially eliminated before MAOI exposure to avoid serotonin syndrome."],
    ["Why does switching to aripiprazole from a potent D2 antagonist require care?","Chronic D2 blockade upregulates receptors, and aripiprazole's partial agonism at those upregulated receptors can produce a relative increase in dopaminergic signalling, precipitating agitation or psychotic worsening. Cross-taper slowly."],
    ["Name the four switching strategies.","Direct switch; cross-taper; taper and immediate switch; and taper with a drug-free washout period before starting the new drug."]
  ],
  note:[
    "Moclobemide, being a reversible MAO-A inhibitor, requires only about 24 hours washout, unlike irreversible MAOIs which require two weeks.",
    "Cholinergic rebound on reducing clozapine or chlorpromazine causes agitation, nausea, sweating and insomnia; taper slowly.",
    "Depot antipsychotics continue to release drug for weeks after the last injection.",
    "Within-class and between-class antidepressant switching show broadly similar outcomes.",
    "The Maudsley Prescribing Guidelines contain the standard switching tables and are the reference for this material."
  ],
  refs:["maudsley","bnf","nice"] };

TEACH["4.4.3"] = { free:true,
  simple:"Monitoring is where psychiatry most often fails its patients, and it is not because anybody forgets that clozapine needs bloods. It is because nobody weighed the patient at the start, so nobody can tell that they have gained twenty kilograms.",
  teach:[
    "Antipsychotics: weight and waist circumference, blood pressure, pulse, fasting glucose or HbA1c, lipid profile, prolactin where indicated, and ECG where the drug or the patient warrants it. Timing is baseline, 12 weeks, one year, then annually. Weight should be checked more often in the first months, when most gain occurs.",
    "Clozapine: FBC weekly for 18 weeks, fortnightly to 52 weeks, then monthly, through the registered monitoring service. Plus troponin, CRP and ECG at baseline and in the first eight weeks for myocarditis, plasma levels where indicated, and enquiry about constipation at every review.",
    "Lithium: level after five to seven days and after every dose change, then every three months for the first year and at least six-monthly thereafter. U&Es, eGFR, calcium and thyroid function at baseline and at least every six months. Weight and ECG where indicated.",
    "Valproate: FBC and liver function at baseline and after six months; weight; and, in anyone of childbearing potential, annual review under the Pregnancy Prevention Programme.",
    "Lamotrigine: no routine bloods, but explicit warning about rash and immediate cessation if one develops.",
    "Antidepressants: sodium at baseline and after two weeks in older people or those on diuretics; review at one to two weeks in under-25s and anyone at increased suicide risk; blood pressure with venlafaxine; liver function with agomelatine.",
    "Cholinesterase inhibitors: pulse and cardiac history at baseline, with ECG where conduction disease is suspected.",
    "Extrapyramidal effects: ask and examine at every review, using AIMS, the Barnes Akathisia Rating Scale and Simpson-Angus. Akathisia in particular will not be volunteered.",
    "The principle: a monitoring schedule that is not written down and not owned by a named clinician will not happen. Physical health monitoring in severe mental illness is repeatedly shown to be poor, and the life expectancy gap is the consequence."
  ],
  cards:[
    ["Give the full clozapine monitoring requirements.","FBC weekly for 18 weeks, fortnightly to 52 weeks, then monthly through the registered service. Baseline and first eight weeks monitoring for myocarditis with troponin, CRP and ECG. Plasma levels where response or toxicity is in question, and enquiry about constipation at every review."],
    ["Give the lithium monitoring schedule.","Level after five to seven days and after every dose change, then three-monthly for the first year and at least six-monthly thereafter. U&Es, eGFR, calcium and thyroid function at baseline and at least every six months."],
    ["What antipsychotic monitoring is required and when?","Weight and waist, blood pressure, pulse, fasting glucose or HbA1c, lipids, prolactin where indicated, and ECG where warranted, at baseline, 12 weeks, one year and then annually, with more frequent weight monitoring in the first months."]
  ],
  note:[
    "Most antipsychotic weight gain occurs in the first three to six months, so early frequent weighing is what matters.",
    "Physical health monitoring in severe mental illness is consistently poor in audit, and the 15 to 20 year life expectancy gap is the consequence.",
    "Lamotrigine requires no routine bloods but requires explicit rash counselling.",
    "Venlafaxine requires blood pressure monitoring at higher doses.",
    "A monitoring plan needs a named responsible clinician, or it does not happen."
  ],
  refs:["maudsley","nice","maudphys"] };

TEACH["4.4.4.1"] = { free:true,
  simple:"Alcohol withdrawal can kill and opioid withdrawal cannot. That single asymmetry decides how you manage the ward: the shaking alcoholic needs urgent treatment, and the sweating opioid user needs comfort and a plan.",
  teach:[
    "Alcohol withdrawal: tremor, sweating, anxiety and nausea at 6 to 12 hours; seizures typically 12 to 48 hours; delirium tremens at 48 to 72 hours, occasionally later. Delirium tremens carries a mortality of a few per cent even when treated.",
    "Mechanism: chronic alcohol potentiates GABA-A and inhibits NMDA, producing compensatory GABA-A downregulation and NMDA upregulation. On withdrawal, unopposed glutamatergic excitation lowers the seizure threshold.",
    "Management: a reducing regimen of chlordiazepoxide, either fixed-dose or symptom-triggered using CIWA-Ar. Lorazepam is preferred in significant hepatic impairment because it undergoes glucuronidation only.",
    "Parenteral thiamine must be given before any carbohydrate load, to prevent Wernicke's encephalopathy. Do not wait for the full triad of confusion, ophthalmoplegia and ataxia, which is present in only a minority.",
    "Alcoholic hallucinosis occurs in clear consciousness, usually auditory, and is distinct from delirium tremens.",
    "Opioid withdrawal: yawning, lacrimation, rhinorrhoea, sweating, dilated pupils, piloerection, myalgia, abdominal cramps, diarrhoea, vomiting, insomnia and craving. Highly unpleasant, rarely dangerous in the physically well, but dangerous in pregnancy where it risks miscarriage and premature labour.",
    "Opioid management: substitution with methadone or buprenorphine, or symptomatic treatment with lofexidine, antiemetics, antidiarrhoeals and analgesics.",
    "Benzodiazepine and stimulant withdrawal: benzodiazepine withdrawal can cause seizures and requires a slow taper. Stimulant withdrawal produces hypersomnia, hyperphagia, dysphoria and craving, and is not physically dangerous but carries suicide risk.",
    "Loss of tolerance after abstinence is the most dangerous moment. Fatal opioid overdose most often occurs after prison release or inpatient detoxification, which is why take-home naloxone belongs in the discharge plan."
  ],
  cards:[
    ["Give the time course of alcohol withdrawal.","Tremor, sweating and anxiety at 6 to 12 hours; seizures typically at 12 to 48 hours; delirium tremens at 48 to 72 hours, occasionally later."],
    ["What must be given before any carbohydrate in alcohol withdrawal, and why?","Parenteral thiamine, to prevent Wernicke's encephalopathy. Glucose administration in a thiamine-deficient patient can precipitate it. Treat on suspicion, since the full triad is present in only a minority."],
    ["When is opioid withdrawal genuinely dangerous?","In pregnancy, where it risks miscarriage and premature labour, and in those with significant physical comorbidity. In the physically well it is severely unpleasant but not usually life-threatening, unlike alcohol or benzodiazepine withdrawal."]
  ],
  note:[
    "CIWA-Ar guides symptom-triggered alcohol withdrawal regimens and reduces total benzodiazepine exposure.",
    "Lorazepam, oxazepam and temazepam are preferred in hepatic impairment.",
    "Delirium tremens shows fast EEG activity, unlike other deliria which show slowing.",
    "Take-home naloxone should be provided at discharge from detoxification and on prison release.",
    "Benzodiazepine withdrawal can cause seizures and requires a slow taper, typically over months."
  ],
  refs:["semaddict","nice","maudsley"] };

TEACH["4.4.4.2"] = { free:true,
  simple:"Coming off a prescribed psychiatric drug can be genuinely hard, and for years the profession said it was not. Discontinuation symptoms are real, they can be severe and prolonged, and telling a patient the illness has returned when it is actually withdrawal does real harm.",
  teach:[
    "Antidepressant discontinuation symptoms: flu-like symptoms, insomnia, vivid dreams, nausea, imbalance, sensory disturbance including electric-shock sensations often described as brain zaps, and hyperarousal with anxiety and irritability.",
    "Onset is within days of reduction or omission, and symptoms resolve rapidly on reinstatement. That timing distinguishes them from relapse, which develops over weeks and does not resolve immediately on restarting.",
    "Paroxetine and venlafaxine are worst because of short half-lives with no long-acting metabolite. Fluoxetine is least affected because norfluoxetine has a half-life of four to sixteen days.",
    "The evidence base changed. Guidance previously described discontinuation as mild and self-limiting over one to two weeks. Current NICE guidance recognises that symptoms can be severe and prolonged in a substantial minority, and recommends slow tapering, often over months, with hyperbolic dose reduction, taking proportionally smaller steps at lower doses because receptor occupancy falls steeply at the bottom of the dose range.",
    "Benzodiazepine withdrawal: anxiety, insomnia, tremor, sweating, perceptual hypersensitivity, depersonalisation and seizures. Onset within one to two days for short-acting drugs and up to a week for long-acting ones. Switch to an equivalent dose of diazepam and reduce by around an eighth every two to four weeks, guided by the patient.",
    "Antipsychotic discontinuation: cholinergic rebound with agitation, nausea, sweating and insomnia; withdrawal dyskinesias; and supersensitivity psychosis. Abrupt discontinuation carries a high relapse risk.",
    "Lithium: abrupt discontinuation causes rebound mania. Withdraw over at least four weeks where stopping is agreed.",
    "The clinical duty: warn before starting, not only when stopping. Patients who are told to expect discontinuation symptoms cope far better and are less likely to conclude that they cannot manage without the drug.",
    "Deprescribing is an active clinical task requiring time, a plan and follow-up, and should not be attempted in a crisis or at a single appointment."
  ],
  cards:[
    ["How are antidepressant discontinuation symptoms distinguished from relapse?","Discontinuation symptoms begin within days of dose reduction or omission and resolve rapidly on reinstatement. Relapse develops over weeks, involves the original depressive symptoms, and does not resolve immediately on restarting."],
    ["What is hyperbolic tapering and why is it recommended?","Reducing by proportionally smaller absolute amounts as the dose falls, because receptor occupancy declines steeply at the bottom of the dose range. Linear reductions therefore produce disproportionately large pharmacological changes at low doses."],
    ["How should benzodiazepine withdrawal be managed?","Switch to an equivalent dose of diazepam and reduce by around one eighth of the dose every two to four weeks, guided by the patient's symptoms, over months rather than weeks."]
  ],
  note:[
    "Paroxetine and venlafaxine cause the most severe discontinuation symptoms; fluoxetine the least.",
    "NICE guidance now recognises that discontinuation symptoms can be severe and prolonged in a substantial minority.",
    "Supersensitivity psychosis after abrupt antipsychotic withdrawal reflects D2 receptor upregulation.",
    "Abrupt lithium discontinuation causes rebound mania; taper over at least four weeks.",
    "Warn patients about discontinuation before starting, not when stopping."
  ],
  refs:["nice","maudsley","bnf"] };

TEACH["4.4.5.1"] = { free:false,
  simple:"Almost nothing we prescribe for children has been properly tested in children. That is not a reason to withhold treatment, but it is a reason to prescribe slowly, monitor closely and say honestly what is and is not known.",
  teach:[
    "Most psychotropic prescribing in children and adolescents is off-label. Say so, record the reasoning, and involve the family in the decision.",
    "Depression: fluoxetine is first line and the only antidepressant with a favourable risk-benefit balance in this age group. It is used alongside psychological therapy, not instead of it. Sertraline and citalopram are second line.",
    "The suicidality warning: antidepressants in under-18s are associated with a small increase in suicidal thinking and behaviour, without an increase in completed suicide. Review at one week, then weekly for the first month.",
    "ADHD: parent training and environmental measures first in younger children. Methylphenidate is first-line medication, with lisdexamfetamine as an alternative. Monitor height, weight, pulse and blood pressure at baseline and six-monthly.",
    "Psychosis: antipsychotics are used at lower starting doses. Young people are more sensitive to extrapyramidal effects, to weight gain and to prolactin elevation, and metabolic monitoring matters more, not less, because exposure will be lifelong.",
    "Anxiety and OCD: psychological therapy first. SSRIs where therapy is insufficient, at lower starting doses with slow titration.",
    "Autism: no medication treats the core condition. Risperidone and aripiprazole are licensed for associated irritability and aggression only, after behavioural and environmental approaches.",
    "Benzodiazepines are avoided other than very short term, because of disinhibition, which is commoner in children.",
    "Consent: Gillick competence permits a child under 16 with sufficient understanding to consent. Refusal by a competent young person can, in law, be overridden by those with parental responsibility or the court, which is a legal position worth knowing and using sparingly."
  ],
  cards:[
    ["Which antidepressant is first line in under-18s and how should it be used?","Fluoxetine, in combination with psychological therapy, with review at one week and weekly for the first month because of the small increase in suicidal thinking associated with antidepressants in this age group."],
    ["What monitoring is required for a child on stimulant medication?","Height, weight, pulse and blood pressure at baseline and at least every six months, with growth plotted, because of appetite suppression, growth effects and cardiovascular effects."],
    ["Do any medications treat core autism?","No. Risperidone and aripiprazole are licensed for associated irritability and aggression only, and should follow behavioural and environmental interventions rather than replace them."]
  ],
  note:[
    "Most psychotropic prescribing in children is off-label because trials in children are scarce.",
    "Antidepressants in under-18s increase suicidal thinking slightly without increasing completed suicide; the risk of untreated depression is greater.",
    "Weight-adjusted clearance is often higher in children, so mg per kg doses may exceed adult equivalents.",
    "Paradoxical disinhibition with benzodiazepines is commoner in children.",
    "Gillick competence permits consent by a competent under-16; refusal of life-saving treatment can be overridden by those with parental responsibility or the court."
  ],
  refs:["rutter","nice","maudsley"] };

TEACH["4.4.5.2"] = { free:true,
  simple:"Start low, go slow, review often, and do not confuse caution with abandonment. Older people are more sensitive to every psychiatric drug, and they are also the group most likely to be left with untreated depression because somebody decided they were too frail to treat.",
  teach:[
    "Pharmacokinetic changes: reduced hepatic mass and blood flow, reduced renal clearance, reduced albumin, reduced total body water and increased body fat. Lipophilic drugs accumulate; hydrophilic drugs reach higher peaks.",
    "Pharmacodynamic changes: greater sensitivity at any given concentration to anticholinergic, sedative, orthostatic and extrapyramidal effects.",
    "Start at a half to a third of the adult dose and titrate slowly, but titrate. Underdosing to an ineffective level is not caution, it is exposure to risk without benefit.",
    "Antidepressants: sertraline, citalopram at reduced maximum dose, and mirtazapine are commonly used. Check sodium at baseline and after two weeks; SSRI-induced hyponatraemia is commonest in older women in the first month.",
    "Antipsychotics in dementia: increase stroke risk roughly threefold and increase mortality. Use only for severe distress or risk, at the lowest dose, time-limited, with documented review. Avoid entirely in Lewy body disease and Parkinson's disease dementia where possible.",
    "Benzodiazepines: strongly associated with falls, fractures and confusion. Prefer short-acting agents if unavoidable, and for the shortest possible time.",
    "Anticholinergic burden should be calculated across the whole prescription and reduced. It predicts falls, delirium, cognitive decline and mortality, and directly opposes cholinesterase inhibitor treatment.",
    "Lithium in older people: reduced renal clearance means lower doses and more frequent monitoring, with a lower target level, and greater vulnerability to dehydration and to interacting drugs.",
    "ECT is effective and well tolerated in severe late-life depression, particularly with psychosis, stupor or food refusal, and should be considered earlier rather than as a last resort."
  ],
  cards:[
    ["What are the risks of antipsychotics in dementia?","An approximately threefold increase in stroke risk and an increase in all-cause mortality. They should be used only for severe distress or risk, at the lowest effective dose, time-limited and reviewed, and avoided in Lewy body disease where possible."],
    ["What monitoring is specifically required when starting an SSRI in an older person?","Serum sodium at baseline and after approximately two weeks, because of the risk of hyponatraemia from SIADH, which is commonest in older women, in those on diuretics, and in the first month of treatment."],
    ["Why is anticholinergic burden particularly important in older adults?","It predicts falls, delirium, cognitive decline and mortality, accumulates across all prescribed drugs including those prescribed by other specialties, and directly opposes cholinesterase inhibitor treatment in dementia."]
  ],
  note:[
    "Therapeutic nihilism is a real harm; late-life depression responds well to adequate treatment including ECT.",
    "Lipophilic benzodiazepines such as diazepam accumulate markedly in older people.",
    "Falls risk should be assessed before and after any sedative or antihypertensive-acting psychotropic is started.",
    "Deprescribing reviews are a core part of old age psychiatry practice.",
    "Antipsychotic prescribing in care homes remains a recognised quality problem."
  ],
  refs:["oxoldage","nice","maudsley"] };

TEACH["4.4.5.3"] = { free:false,
  simple:"In severe eating disorders the danger is not the drug, it is the body it is going into. A starved heart has a long QT, low potassium and no reserve, and the drug that would be routine anywhere else can be the thing that stops it.",
  teach:[
    "Physiological context: bradycardia, hypotension, hypokalaemia, hypomagnesaemia, hypophosphataemia, prolonged QTc, and hepatic impairment from starvation. All increase drug risk.",
    "No drug treats anorexia nervosa itself. Weight restoration and psychological therapy are the treatment. Medication addresses comorbidity, and this must be said clearly to families hoping otherwise.",
    "Anorexia nervosa: eating-disorder-focused CBT, MANTRA or specialist supportive clinical management in adults; anorexia-focused family therapy in children and adolescents. Olanzapine is sometimes used off-label for severe rumination and anxiety around eating, with modest evidence and no established effect on weight gain.",
    "Bulimia nervosa: guided self-help based on CBT, then CBT-ED. Fluoxetine 60 mg has evidence, a higher dose than in depression.",
    "Bupropion is absolutely contraindicated in eating disorders because of markedly increased seizure risk.",
    "QT-prolonging drugs must be used with great caution. Citalopram and escitalopram are relatively contraindicated in severe cases; correct electrolytes first and obtain an ECG.",
    "Absorption and pharmacokinetics are altered by delayed gastric emptying, reduced body mass and hypoalbuminaemia, which raises the free fraction of highly protein-bound drugs.",
    "Refeeding syndrome is the acute danger. The shift to anabolism drives phosphate, potassium and magnesium into cells; hypophosphataemia is the hallmark, with risk of cardiac failure, arrhythmia, seizures and rhabdomyolysis. Refeed cautiously with thiamine and daily electrolyte monitoring.",
    "Compulsory treatment under the Mental Health Act may be lawful where refusal of food is a manifestation of the disorder, and this is one of the few settings in which feeding is treatment for mental disorder."
  ],
  cards:[
    ["Which antidepressant is contraindicated in eating disorders and why?","Bupropion, because it lowers the seizure threshold and the risk of seizures is markedly increased in patients with eating disorders, particularly with electrolyte disturbance and purging."],
    ["What is refeeding syndrome and what is its hallmark?","A shift to anabolic metabolism on reintroduction of nutrition drives phosphate, potassium and magnesium intracellularly. Hypophosphataemia is the hallmark, with risk of cardiac failure, arrhythmia, seizures and rhabdomyolysis. Refeed slowly with thiamine and daily electrolyte monitoring."],
    ["What is the role of medication in anorexia nervosa?","No drug treats the disorder. Weight restoration and psychological therapy are the treatment. Olanzapine is used off-label for severe anxiety and rumination around eating with modest evidence and no established effect on weight gain."]
  ],
  note:[
    "Anorexia nervosa has the highest mortality of any psychiatric disorder, with a standardised mortality ratio of around five to six.",
    "Correct potassium and magnesium before and during any QT-prolonging treatment.",
    "Hypoalbuminaemia raises the free fraction of highly protein-bound drugs, so standard doses produce higher active concentrations.",
    "Fluoxetine 60 mg is the evidenced dose in bulimia nervosa, higher than the depression dose.",
    "MEED, the RCPsych guidance on medical emergencies in eating disorders, is the standard UK reference for physical risk management."
  ],
  refs:["nice","maudphys","maudsley"] };

TEACH["4.4.5.4"] = { free:false,
  simple:"When the liver or the kidney is failing, the drug does not leave. When the heart is failing, the drug that prolongs the QT has much less margin. In each case the answer is the same: pick the drug that does not depend on the failing organ.",
  teach:[
    "Hepatic impairment: reduced first-pass metabolism raises bioavailability; reduced albumin raises free drug; reduced clearance prolongs half-life; and encephalopathy risk means sedatives must be used with great care.",
    "In hepatic impairment prefer drugs cleared by glucuronidation or renally: lorazepam, oxazepam and temazepam among benzodiazepines. Avoid or use very cautiously valproate, agomelatine, duloxetine and chlorpromazine. Start at low doses and monitor liver function.",
    "Renal impairment: lithium is relatively contraindicated in significant impairment and requires close monitoring where used. Amisulpride, sulpiride and paliperidone are substantially renally cleared and require dose reduction. Gabapentin and pregabalin accumulate.",
    "In renal impairment prefer hepatically cleared drugs: most antipsychotics other than those listed, and sertraline among antidepressants.",
    "Cardiovascular disease: avoid QT-prolonging drugs where the QTc is already prolonged. Tricyclics are contraindicated after recent myocardial infarction. Sertraline is the usual antidepressant choice, with mirtazapine as an alternative. Aripiprazole and lurasidone have the lowest QT burden among antipsychotics.",
    "Depression after myocardial infarction independently predicts mortality and should be treated actively, not observed.",
    "Heart failure: caution with drugs causing fluid retention, with tricyclics, and with anything worsening postural hypotension.",
    "Correct reversible contributors before blaming the drug: potassium, magnesium, thyroid function, anaemia and hypoxia all affect both cardiac risk and mental state.",
    "The method: identify which organ is failing, identify which route each candidate drug depends on, and choose the one that does not use the failing route."
  ],
  cards:[
    ["Which benzodiazepines are preferred in hepatic impairment and why?","Lorazepam, oxazepam and temazepam, because they undergo phase II glucuronidation only, which is relatively preserved in liver disease, and have no active metabolites."],
    ["Which antipsychotics require dose reduction in renal impairment?","Amisulpride, sulpiride and paliperidone, which are substantially renally cleared. Lithium is relatively contraindicated in significant renal impairment."],
    ["Which antidepressant is preferred in cardiac disease and which are avoided?","Sertraline is generally preferred, with mirtazapine as an alternative. Tricyclics are avoided because of cardiotoxicity and arrhythmia risk, and citalopram and escitalopram are dose-limited by QT prolongation."]
  ],
  note:[
    "Depression after myocardial infarction independently predicts mortality and warrants active treatment.",
    "Hepatic encephalopathy is precipitated by sedatives; use the lowest effective dose of a glucuronidated benzodiazepine if unavoidable.",
    "Correct potassium and magnesium before attributing QT prolongation to a psychotropic.",
    "The Maudsley Practice Guidelines for Physical Health Conditions in Psychiatry is the reference text for this item.",
    "Liaison psychiatry input in the general hospital reduces length of stay and readmission."
  ],
  refs:["maudphys","maudsley","semliaison"] };

TEACH["4.4.5.5"] = { free:true,
  simple:"There is no risk-free option in pregnancy. Treating carries risk to the baby and not treating carries risk to both. The only wrong answer is to stop a drug abruptly the moment a pregnancy test is positive, which is the commonest thing that happens.",
  teach:[
    "The framing: every decision is a comparison between the risk of the drug and the risk of untreated illness. Relapse in pregnancy and the postpartum period carries risk of self-neglect, suicide, and harm to the developing child through maternal illness.",
    "Abrupt discontinuation on discovering pregnancy is common, is usually the wrong decision, and frequently precipitates relapse at the point of greatest vulnerability. Organogenesis is largely complete by week eight, so stopping on a positive test rarely prevents malformation.",
    "Valproate is the one near-absolute: roughly 10 per cent major malformation and 30 to 40 per cent neurodevelopmental disorder in exposed children. It must not be used in women and girls of childbearing potential outside the Pregnancy Prevention Programme.",
    "Lithium: cardiac malformation including Ebstein's anomaly, with markedly raised relative but low absolute risk. If continued, monitor levels through pregnancy as clearance rises, obtain fetal echocardiography, and reduce or withhold around delivery with prompt review because clearance falls abruptly.",
    "Antidepressants: SSRIs are not major teratogens. Sertraline is commonly preferred. Third-trimester exposure gives neonatal adaptation syndrome and a small absolute increase in persistent pulmonary hypertension of the newborn.",
    "Antipsychotics: no consistent evidence of major teratogenicity. Olanzapine and quetiapine increase gestational diabetes risk, requiring glucose tolerance testing.",
    "Postpartum: this is the highest-risk period. Postpartum psychosis affects one to two per thousand deliveries, usually within two weeks, with risk raised more than twentyfold in bipolar disorder and around 50 per cent after a previous episode. Prophylaxis should be planned before delivery.",
    "Breastfeeding: sertraline and paroxetine have low milk transfer. Fluoxetine accumulates in the infant. Lithium is generally avoided. Clozapine is contraindicated because of neonatal agranulocytosis risk.",
    "Practical requirement: involve perinatal mental health services early, ideally before conception. Preconception counselling is where these decisions should be made, not in the first antenatal appointment."
  ],
  cards:[
    ["Why is stopping a psychotropic on discovering pregnancy usually wrong?","Organogenesis is largely complete by week eight, so stopping on a positive test rarely prevents malformation, while abrupt discontinuation risks relapse at a period of high vulnerability with consequences for both mother and child."],
    ["What are the risks of lithium in pregnancy and how is it managed if continued?","Increased risk of cardiac malformation including Ebstein's anomaly, with high relative but low absolute risk. Management includes specialist counselling, level monitoring through pregnancy as clearance rises, fetal echocardiography, and dose review around delivery when clearance falls abruptly."],
    ["What is the risk of postpartum psychosis and in whom?","One to two per thousand deliveries in the general population, raised more than twentyfold in women with bipolar disorder, and around 50 per cent after a previous episode of postpartum psychosis. Prophylaxis should be planned before delivery."]
  ],
  note:[
    "Valproate must not be used in women and girls of childbearing potential outside the Pregnancy Prevention Programme.",
    "Suicide is a leading cause of maternal death in the UK; MBRRACE-UK is the source.",
    "Mother and baby units exist so that admission does not separate mother and infant.",
    "Lamotrigine clearance rises markedly in pregnancy and falls rapidly postpartum, requiring planned adjustment both ways.",
    "Preconception counselling is where these decisions should be made; NICE CG192 covers antenatal and postnatal mental health."
  ],
  refs:["nice","maudsley","semgen"] };

TEACH["4.4.6"] = { free:true,
  simple:"You cannot detoxify somebody into recovery, but you can keep them alive long enough to have the chance. That is the honest case for substitution treatment, and the evidence for it is among the strongest in psychiatry.",
  teach:[
    "Alcohol relapse prevention. Acamprosate modulates glutamatergic transmission and reduces craving; start soon after detoxification. Naltrexone, an opioid antagonist, reduces the reward of drinking and is useful for reducing heavy drinking as well as maintaining abstinence. Disulfiram inhibits aldehyde dehydrogenase, causing an aversive reaction with flushing, nausea, tachycardia and hypotension; it requires supervision and motivation. Nalmefene is licensed for reduction of heavy drinking.",
    "Alcohol withdrawal: chlordiazepoxide reducing regimen, or lorazepam in significant hepatic impairment, with parenteral thiamine before carbohydrate.",
    "Opioid substitution. Methadone is a full mu agonist with good retention in treatment, a long variable half-life, greater overdose risk, and QTc prolongation. Buprenorphine is a high-affinity partial mu agonist with a ceiling on respiratory depression, safer in overdose, less sedating, but able to precipitate withdrawal if started too soon.",
    "Opioid substitution treatment reduces mortality, illicit use, injecting risk behaviour, blood-borne virus transmission and criminal activity. Retention in treatment is the outcome that matters most.",
    "Naltrexone is used for opioid relapse prevention after detoxification in motivated patients, and requires full detoxification first or it precipitates withdrawal.",
    "Naloxone reverses opioid overdose. Its half-life is shorter than most opioids, so repeated doses or an infusion may be needed, and more is required for synthetic opioids such as nitazenes. Take-home naloxone should be offered widely.",
    "Smoking cessation: varenicline, a nicotinic partial agonist, has the best efficacy; bupropion and nicotine replacement are alternatives. Stopping smoking raises clozapine and olanzapine levels, which must be anticipated.",
    "Stimulant dependence: no licensed substitution therapy exists. Contingency management, which provides incentives for verified abstinence, has the best evidence.",
    "Harm reduction is treatment: needle exchange, blood-borne virus screening and hepatitis B vaccination, take-home naloxone, and supervised consumption where available."
  ],
  cards:[
    ["Name the drugs used in alcohol relapse prevention and their mechanisms.","Acamprosate, a glutamatergic modulator reducing craving. Naltrexone, an opioid antagonist reducing the reward of drinking. Disulfiram, an aldehyde dehydrogenase inhibitor producing an aversive reaction. Nalmefene, licensed for reduction of heavy drinking."],
    ["What outcomes does opioid substitution treatment improve?","Mortality, retention in treatment, illicit opioid use, injecting risk behaviour, blood-borne virus transmission and criminal activity. Retention in treatment is the outcome most closely linked to reduced mortality."],
    ["What treatment has the best evidence in stimulant dependence?","Contingency management, providing incentives for verified abstinence. There is no licensed substitution therapy for stimulant dependence."]
  ],
  note:[
    "Naltrexone requires full opioid detoxification before starting or it precipitates withdrawal.",
    "Varenicline has the best efficacy for smoking cessation; earlier neuropsychiatric concerns were not substantiated by the EAGLES trial.",
    "Stopping smoking raises clozapine and olanzapine levels through loss of CYP1A2 induction.",
    "Disulfiram requires supervision, motivation and clear warning about the reaction, including with alcohol in foods and toiletries.",
    "Loss of tolerance after abstinence is the commonest setting for fatal opioid overdose; provide take-home naloxone."
  ],
  refs:["semaddict","nice","maudsley"] };

TEACH["4.4.7"] = { free:true,
  simple:"Rapid tranquillisation is the last item on the list and the first thing people reach for. Before any of it: check the glucose, the observations and whether this is delirium, withdrawal, pain or a head injury. An agitated person who is sedated is an agitated person whose diagnosis has just been hidden.",
  teach:[
    "Exclude a medical cause first: hypoglycaemia, hypoxia, sepsis, head injury, intoxication or withdrawal, pain, urinary retention, constipation, and delirium from any cause. Check a capillary glucose and basic observations.",
    "The sequence: de-escalation, then oral medication, then parenteral as a last resort. De-escalation means space, one person talking, reduced stimulation, an offer of something concrete such as food or a phone call, and an offer of oral medication.",
    "Oral options: lorazepam, or promethazine, or an oral antipsychotic such as olanzapine, haloperidol or risperidone, depending on local policy and prior response.",
    "Parenteral: lorazepam intramuscularly, or an intramuscular antipsychotic. Intramuscular olanzapine must not be given within one hour of parenteral benzodiazepine because of the risk of severe cardiorespiratory depression.",
    "Haloperidol requires an ECG before or as soon as practicable after parenteral use, because of QT prolongation. Intravenous haloperidol carries the highest torsades risk and is avoided.",
    "Monitoring after parenteral administration: pulse, blood pressure, respiratory rate, temperature, oxygen saturation and level of consciousness, at intervals set by local policy, and more frequently if the patient is asleep. Flumazenil must be available where a benzodiazepine has been given.",
    "Restraint is a medical event with medical consequences: positional asphyxia, rhabdomyolysis and cardiac arrest. Prone restraint is particularly dangerous. Someone must be watching the airway throughout, and the David Bennett and Seni Lewis inquiries followed restraint deaths.",
    "Legal basis: treatment without consent requires the Mental Health Act, or common law and the Mental Capacity Act in an emergency where capacity is absent. Record which applies.",
    "Debrief afterwards, with the team and with the patient. This is part of the intervention. Ask about akathisia, which is regularly the cause of the agitation being treated."
  ],
  cards:[
    ["What must be excluded before treating agitation as psychiatric?","Hypoglycaemia, hypoxia, sepsis, head injury, intoxication or withdrawal, pain, urinary retention, constipation and delirium from any cause. Check capillary glucose and basic observations."],
    ["What monitoring is required after parenteral rapid tranquillisation?","Pulse, blood pressure, respiratory rate, temperature, oxygen saturation and level of consciousness at intervals defined by local policy, more frequently if the patient is asleep or has received intramuscular medication, with flumazenil available where a benzodiazepine has been given."],
    ["What is the interaction warning for intramuscular olanzapine?","It must not be given within one hour of parenteral benzodiazepine because of the risk of severe cardiorespiratory depression, hypotension and death."]
  ],
  note:[
    "Akathisia is regularly mistaken for agitation and treated with a dose increase, which worsens it. Ask about inner restlessness.",
    "Prone restraint carries a risk of positional asphyxia; the David Bennett and Olaseni Lewis inquiries followed restraint deaths.",
    "The Mental Health Units (Use of Force) Act 2018 requires recording and annual publication of every use of force with patient characteristics.",
    "NICE NG10 covers violence and aggression and short-term management.",
    "Local rapid tranquillisation policy must be known before being on call, not looked up during an incident."
  ],
  refs:["nice","maudsley","semgen"] };

TEACH["4.4.8"] = { free:false,
  simple:"When a drug does something unexpected and harmful, somebody has to write it down somewhere that other people will see. That system is the Yellow Card, it depends entirely on clinicians bothering, and most of us do not.",
  teach:[
    "The Yellow Card scheme, run by the MHRA, is the UK system for reporting suspected adverse drug reactions. Reports can be made by health professionals, patients and carers.",
    "What to report: all suspected reactions for black triangle medicines, which are under additional monitoring; all serious suspected reactions for established medicines; and all suspected reactions in children, in the elderly and in pregnancy.",
    "Serious means fatal, life-threatening, disabling, causing or prolonging hospitalisation, or a congenital abnormality.",
    "Certainty is not required. The threshold is suspicion, not proof. Waiting until you are sure means the report is never made, and the whole system depends on aggregating uncertain signals.",
    "Under-reporting is the central weakness. It is estimated that only a small fraction of serious adverse reactions are reported.",
    "Why it matters: post-marketing surveillance is how rare and delayed adverse effects are detected, because pre-licensing trials are too small and too short. Practolol's oculomucocutaneous syndrome, benfluorex and rofecoxib were all detected this way.",
    "Classification of adverse reactions: type A, augmented, dose-related and predictable from the pharmacology, such as postural hypotension; type B, bizarre, not dose-related and unpredictable, such as agranulocytosis; type C, chronic; type D, delayed such as tardive dyskinesia; type E, end of use such as discontinuation symptoms; type F, failure of therapy.",
    "Local duties: incident reporting, the duty of candour after a notifiable safety incident, and reporting to the coroner where a death may be drug-related.",
    "Practical habit: report from the ward at the time. A Yellow Card takes a few minutes and is the only mechanism by which your patient's experience reaches anyone else."
  ],
  cards:[
    ["What must be reported through the Yellow Card scheme?","All suspected reactions to black triangle medicines under additional monitoring; all serious suspected reactions to established medicines; and all suspected reactions in children, older people and pregnancy. Certainty is not required, only suspicion."],
    ["Classify adverse drug reactions from type A to type F.","Type A augmented, dose-related and predictable. Type B bizarre, not dose-related and unpredictable. Type C chronic. Type D delayed. Type E end of use, on withdrawal. Type F failure of therapy."],
    ["Why is post-marketing surveillance essential?","Pre-licensing trials are too small and too short to detect rare or delayed adverse effects. Rare reactions occurring in fewer than one in a thousand exposures, and delayed effects such as tardive dyskinesia, can only be identified after widespread use."]
  ],
  note:[
    "The black triangle symbol denotes a medicine under additional monitoring for which all suspected reactions should be reported.",
    "Under-reporting is the principal weakness of spontaneous reporting systems.",
    "Patients and carers can submit Yellow Card reports directly.",
    "The duty of candour applies after a notifiable safety incident.",
    "Agranulocytosis with clozapine is a type B reaction; postural hypotension is type A; tardive dyskinesia is type D."
  ],
  refs:["bnf","maudsley","nice"] };

TEACH["4.4.9"] = { free:true,
  simple:"Nobody thinks to ask, and then somebody has a crash. Sedating medication, the illness itself and alcohol all impair driving, and there are legal duties on both the patient and on you that most doctors could not state if asked.",
  teach:[
    "The legal position in the UK: the driver has the duty to inform the DVLA of a relevant condition. The doctor's duty is to advise the patient of that obligation, to record the advice, and to advise them not to drive where appropriate.",
    "If a patient continues to drive when unfit, and cannot or will not inform the DVLA, GMC guidance permits disclosure to the DVLA medical adviser in the public interest, after making every reasonable effort to persuade the patient and telling them of your intention to disclose.",
    "DVLA standards vary by condition and are set out in the Assessing Fitness to Drive guidance, which is updated regularly and should be consulted rather than remembered.",
    "Broad principles: acute psychosis, mania and severe depression with impaired concentration or psychotic features require cessation of driving until stable and well; the person must be stable for a specified period and comply with treatment before relicensing.",
    "Dementia: mild cognitive impairment does not automatically preclude driving, and the assessment concerns function and safety rather than diagnosis alone. On-road assessment is often needed.",
    "Alcohol and drug dependence: persistent misuse or dependence requires licence revocation, with a defined period of controlled use or abstinence before relicensing, and different periods for cars and for vocational licences.",
    "Medication: sedating drugs impair driving, particularly in the first days and after dose increase. It is an offence to drive while impaired by prescribed medication, and there are specified blood limits for certain drugs including benzodiazepines and methadone, with a statutory medical defence where they are taken as prescribed.",
    "Advise patients not to drive when starting or increasing a sedating drug, and to avoid alcohol.",
    "Other complex behaviours: operating machinery, working at height, caring responsibilities, and shift work all carry the same considerations and are almost never discussed. Document what you advised."
  ],
  cards:[
    ["Whose duty is it to inform the DVLA, and what is the doctor's role?","The driver has the legal duty to inform the DVLA. The doctor's duty is to advise the patient of that obligation, advise them not to drive where appropriate, and record the advice given."],
    ["When may a doctor disclose to the DVLA without consent?","Where the patient continues to drive when unfit and cannot or will not inform the DVLA, disclosure to the DVLA medical adviser is permitted in the public interest, after every reasonable effort to persuade the patient and after informing them of the intention to disclose."],
    ["What is the legal position on driving while taking prescribed sedating medication?","It is an offence to drive while impaired by any drug, including prescribed medication. Specified blood limits exist for certain drugs including benzodiazepines and methadone, with a statutory medical defence where the drug is taken as prescribed and the driver is not impaired."]
  ],
  note:[
    "DVLA Assessing Fitness to Drive is updated regularly and should be consulted rather than recalled from memory.",
    "Vocational licence standards are considerably stricter than for cars and motorcycles.",
    "Advise against driving when starting or increasing any sedating medication.",
    "Record the advice given; failure to advise is the commonest medicolegal criticism in this area.",
    "The same considerations apply to machinery, working at height and caring responsibilities, and are rarely discussed."
  ],
  refs:["bnf","maudsley","noptp"] };

TEACH["4.4.10.1"] = { free:true,
  simple:"Most dangerous drug interactions in psychiatry are one drug jamming the enzyme that clears another. Levels rise within a day and the patient becomes toxic while everybody is still congratulating themselves on treating the chest infection.",
  teach:[
    "Kinetic interactions occur at absorption, distribution, metabolism or excretion. Metabolism is where most clinically important ones happen.",
    "Enzyme inhibition is rapid, within hours to a day or two, and raises substrate levels. Enzyme induction takes one to three weeks to develop and a similar time to reverse, and lowers them.",
    "The inhibitors: fluoxetine and paroxetine at CYP2D6; fluvoxamine at CYP1A2 and CYP2C19; and among non-psychotropics, macrolides, azole antifungals, ritonavir and grapefruit juice at CYP3A4.",
    "The inducers: carbamazepine, phenytoin, phenobarbital, rifampicin and St John's wort. Smoking induces CYP1A2 through tar, not nicotine.",
    "The clozapine examples worth memorising. Fluvoxamine can raise clozapine levels several-fold. Ciprofloxacin and erythromycin raise them. Stopping smoking raises them, sometimes to toxicity within days. Carbamazepine lowers them and must not be combined because of additive bone marrow suppression.",
    "Lithium is not metabolised, so its interactions are renal. Thiazides, NSAIDs and ACE inhibitors reduce renal clearance and raise lithium levels. Sodium depletion from dehydration, vomiting, diarrhoea or a low-salt diet does the same. This is the commonest route to lithium toxicity.",
    "Lamotrigine is glucuronidated, not a CYP substrate. Valproate inhibits its glucuronidation, so the dose is halved; carbamazepine induces it, so the dose is roughly doubled.",
    "Absorption interactions: antacids, iron and calcium reduce absorption of some drugs; anticholinergics slow gastric emptying.",
    "The habit: before adding any drug to a patient on clozapine, lithium, an anticonvulsant or a tricyclic, check the interaction. Before stopping one, check it again, because stopping an inhibitor lowers levels and stopping an inducer raises them."
  ],
  cards:[
    ["What raises clozapine levels, and by which mechanisms?","Fluvoxamine and ciprofloxacin through CYP1A2 inhibition, erythromycin through CYP3A4, and smoking cessation through loss of CYP1A2 induction by tobacco tar. Caffeine also contributes."],
    ["Which drugs raise lithium levels and why?","Thiazide diuretics, NSAIDs and ACE inhibitors, all of which reduce renal lithium clearance. Sodium depletion from dehydration, vomiting, diarrhoea or a low-salt diet has the same effect, because lithium is handled like sodium."],
    ["How must lamotrigine dosing change with valproate and with carbamazepine?","Valproate inhibits lamotrigine glucuronidation, so the lamotrigine dose is approximately halved. Carbamazepine induces it, so the dose is approximately doubled."]
  ],
  note:[
    "Stopping an enzyme inhibitor lowers substrate levels; stopping an inducer raises them. Both directions matter.",
    "Carbamazepine should not be combined with clozapine because of additive bone marrow suppression.",
    "St John's wort is a potent CYP3A4 inducer and reduces the efficacy of oral contraceptives, anticoagulants, ciclosporin and antiretrovirals.",
    "Smoke-free ward policies have precipitated clozapine toxicity; anticipate and monitor levels.",
    "Lithium toxicity most commonly follows dehydration or the addition of a diuretic, NSAID or ACE inhibitor."
  ],
  refs:["maudsley","bnf","stahl"] };

TEACH["4.4.10.2"] = { free:false,
  simple:"The other kind of interaction needs no enzyme at all. Two drugs that both raise serotonin, or both prolong the QT, or both sedate, simply add up. Nothing changes in the liver; the effects meet in the patient.",
  teach:[
    "Pharmacodynamic interactions occur when drugs act on the same system, additively, synergistically or antagonistically, without any change in plasma concentration.",
    "Serotonergic: combining SSRIs or SNRIs with MAOIs, tramadol, linezolid, triptans, St John's wort, lithium or other serotonergic agents risks serotonin syndrome. The MAOI combination is the most dangerous and requires the washouts described earlier.",
    "QT prolongation: additive across antipsychotics, citalopram and escitalopram, methadone, ondansetron, macrolides, quinolones and antifungals. Hypokalaemia and hypomagnesaemia add further. This is a common and preventable hazard, particularly on medical wards.",
    "CNS depression: benzodiazepines, opioids, alcohol, sedating antipsychotics, antihistamines, gabapentinoids and anaesthetics are additive. The combination of opioids with benzodiazepines or pregabalin is implicated in a large proportion of drug-related deaths.",
    "Anticholinergic burden is additive across antipsychotics, tricyclics, antiparkinsonian drugs, antihistamines, oxybutynin and many others, producing confusion, falls and delirium.",
    "Antagonistic interactions: antipsychotics oppose the effect of levodopa and dopamine agonists in Parkinson's disease; cholinesterase inhibitors oppose anticholinergics, and prescribing both is common and self-defeating.",
    "Hyponatraemia is additive: SSRIs, carbamazepine, diuretics and antipsychotics all contribute, and the risk is greatest in older women in the first month.",
    "Bleeding: SSRIs with NSAIDs, anticoagulants or antiplatelets increase gastrointestinal bleeding through platelet serotonin depletion.",
    "Bone marrow suppression: clozapine with carbamazepine, co-trimoxazole or cytotoxics is additive and must be avoided.",
    "The habit worth forming: for every new drug, ask which of these five it adds to, serotonergic, QT, sedative, anticholinergic and bleeding, before writing it."
  ],
  cards:[
    ["Name the drug classes that combine additively to prolong the QT interval.","Antipsychotics, citalopram and escitalopram, methadone, ondansetron, macrolide antibiotics, quinolones and azole antifungals, with hypokalaemia and hypomagnesaemia adding further risk."],
    ["Which combinations risk serotonin syndrome?","SSRIs or SNRIs with MAOIs, tramadol, linezolid, triptans, St John's wort, lithium or other serotonergic drugs. The MAOI combination is the most dangerous and requires a two-week washout, or five weeks after fluoxetine."],
    ["Which combination is implicated in a large proportion of drug-related deaths?","Opioids combined with benzodiazepines or with pregabalin or gabapentin, through additive respiratory depression."]
  ],
  note:[
    "Clozapine must not be combined with carbamazepine, co-trimoxazole or cytotoxics because of additive bone marrow suppression.",
    "Prescribing an anticholinergic alongside a cholinesterase inhibitor is common, illogical, and worth actively reviewing.",
    "Hyponatraemia risk is additive across SSRIs, carbamazepine, diuretics and antipsychotics.",
    "Antipsychotics oppose dopaminergic treatment in Parkinson's disease and can produce severe deterioration.",
    "Check five domains for every new drug: serotonergic, QT, sedative, anticholinergic and bleeding."
  ],
  refs:["maudsley","bnf","maudphys"] };

TEACH["4.4.11"] = { free:false,
  simple:"Before you diagnose depression in a medical patient, look at the drug chart. Steroids, interferon, some heart drugs and several antibiotics all produce psychiatric symptoms, and stopping the drug is a better treatment than adding another one.",
  teach:[
    "Corticosteroids: euphoria, insomnia and irritability commonly; mania or psychosis at higher doses; depression with chronic use. Risk rises markedly above about 40 mg prednisolone daily. Steroid psychosis usually resolves on dose reduction.",
    "Interferon-alpha: causes depression in a substantial minority and is the strongest human causal evidence linking inflammation to depression.",
    "Isotretinoin: an association with depression and suicide has been reported and remains debated; the regulatory position is to warn and monitor.",
    "Levodopa and dopamine agonists: visual hallucinations, delusions, confusion, and impulse control disorders including pathological gambling and hypersexuality.",
    "Anticonvulsants: levetiracetam causes irritability, aggression and depression in a substantial minority; topiramate causes cognitive slowing and word-finding difficulty; vigabatrin has been associated with depression and psychosis.",
    "Antibiotics and antimicrobials: quinolones can cause confusion, psychosis and seizures; isoniazid causes pyridoxine deficiency with seizures and mood change; mefloquine causes vivid dreams, anxiety and psychosis; efavirenz causes vivid dreams, mood change and occasionally psychosis.",
    "Cardiovascular drugs: digoxin toxicity causes confusion and visual disturbance; the long-asserted association between beta-blockers and depression is not supported by systematic reviews.",
    "Others: varenicline, where earlier neuropsychiatric concerns were not substantiated by the EAGLES trial; montelukast, with neuropsychiatric reactions including agitation and suicidal thinking, particularly in children; anticholinergics, causing delirium; and opioids, causing depression and hypogonadism with long-term use.",
    "The clinical rule: in any new psychiatric presentation in a physically unwell patient, review the drug chart before the mental state, and consider the timing of the symptom against the timing of the prescription."
  ],
  cards:[
    ["Which drug provides the strongest human evidence that inflammation can cause depression?","Interferon-alpha, which causes depression in a substantial minority of patients treated for hepatitis C, with a clear temporal relationship and resolution on withdrawal."],
    ["What psychiatric effects do corticosteroids produce and at what dose does risk rise?","Euphoria, insomnia and irritability commonly, with mania or psychosis at higher doses and depression with chronic use. Risk rises markedly above approximately 40 mg prednisolone daily."],
    ["Name three non-psychotropic drug classes that commonly cause psychiatric symptoms.","Corticosteroids; dopaminergic drugs including levodopa and dopamine agonists; and anticonvulsants such as levetiracetam. Quinolone antibiotics, mefloquine, efavirenz and montelukast are further examples."]
  ],
  note:[
    "Montelukast carries a regulatory warning for neuropsychiatric reactions, particularly in children.",
    "The beta-blocker and depression association is not supported by systematic review and should not be taught as established.",
    "The EAGLES trial did not substantiate earlier neuropsychiatric concerns about varenicline.",
    "Impulse control disorders on dopamine agonists resolve on withdrawal and are rarely volunteered by patients.",
    "In a physically unwell patient with new psychiatric symptoms, review the drug chart before the mental state."
  ],
  refs:["maudphys","bnf","semliaison"] };
