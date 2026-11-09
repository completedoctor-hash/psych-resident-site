/* =====================================================================
   TEACHING, SECTION 6 — Organisation and Delivery of Psychiatric Services
   10 items, 6.1 to 6.8
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["6.1"] = { free:true,
  simple:"A hospital ward is not one person deciding things. It is a group of people who each see something the others cannot, sitting in a room once a week and pooling it. The psychiatrist is not the cleverest person there. The psychiatrist is the one who has to sign the decision and carry it legally, which is a different job from being right.",
  teach:[
    "The multidisciplinary team is not a courtesy. Different disciplines see different things: the occupational therapist watches a person cook, the nurse watches them at three in the morning, the social worker sees the housing letter. None of that reaches a ward round otherwise.",
    "Core disciplines: psychiatry, mental health nursing, clinical psychology, occupational therapy, social work, pharmacy, and increasingly peer support workers with lived experience.",
    "The specific role of the psychiatrist: diagnostic formulation, prescribing, assessment and management of physical health in mental illness, statutory duties under mental health legislation, and clinical leadership of the risk formulation.",
    "The Care Programme Approach, introduced in England in 1991, required assessment of need, a written care plan, a named care coordinator and regular review. NHS England replaced it in 2021 with personalised care and support planning, which keeps the four functions and drops the bureaucracy.",
    "Biopsychosocial is not a slogan, it is a checklist. Every formulation should answer: what is happening in the body, what is happening in the mind, what is happening around this person.",
    "Physical treatments: medication, ECT, and the neuromodulation techniques. Psychological treatments: the therapies in section 9. Social treatments: housing, benefits, employment support, carer support, structure and occupation.",
    "Individual Placement and Support is the strongest evidence-based social intervention in severe mental illness. Place the person in real competitive employment first, then support them, rather than training them indefinitely for a job they never get.",
    "Coordination fails at the joins. The commonest failure in serious incident reports is not a wrong decision but an unclear one: nobody knew who was responsible for the next step.",
    "Case management alone, without a clinical team, does not reduce admissions. Assertive community treatment with small caseloads and shared responsibility does, though its advantage narrows where community services are already good."
  ],
  cards:[
    ["What are the four functions of the Care Programme Approach, and what replaced it?","Assessment of health and social care need, a written care plan, a named care coordinator, and regular review. NHS England replaced CPA in 2021 with personalised care and support planning, retaining the four functions."],
    ["What is Individual Placement and Support, and why is it distinctive?","A supported employment model in severe mental illness that places the person into competitive paid employment first and provides ongoing support, rather than the traditional train-then-place approach. It has the strongest evidence base of any vocational intervention in psychiatry."],
    ["Which elements of care are specific to the psychiatrist within a multidisciplinary team?","Diagnostic formulation, prescribing, the assessment and management of physical health in mental illness, statutory duties under mental health legislation, and clinical leadership of the risk formulation."]
  ],
  note:[
    "Care Programme Approach, England, 1991; formally replaced by personalised care and support planning in 2021.",
    "Assertive community treatment reduces admission and improves engagement; its advantage shrinks where standard community care is already well resourced.",
    "Individual Placement and Support: place first, then train, with time-unlimited support and integration into the clinical team.",
    "Serious incident reviews most often identify unclear responsibility at handover rather than an incorrect clinical decision."
  ],
  refs:["semliaison","companion","nice"] };

TEACH["6.2"] = { free:true,
  simple:"You can stop an illness before it starts, stop it early once it has, or stop it from wrecking the rest of someone's life. Those are three different jobs and psychiatry is much better at the third than the first.",
  teach:[
    "Primary prevention stops the disorder arising. Secondary prevention detects it early and shortens it. Tertiary prevention limits the disability that follows.",
    "The other axis, from Gordon: universal interventions offered to everyone, selective interventions offered to a group at raised risk, and indicated interventions offered to people already showing early signs.",
    "Real primary prevention in psychiatry: iodisation of salt, folate fortification, reduction of lead exposure, road traffic legislation reducing head injury, and alcohol pricing policy. Note how few of these are delivered by psychiatrists.",
    "Minimum unit pricing for alcohol in Scotland, introduced 2018, was followed by a fall in alcohol-specific deaths, the clearest recent example of a population-level psychiatric prevention measure.",
    "Suicide prevention by means restriction has the best evidence of any suicide intervention: barriers at jumping sites, catalytic converters, blister packaging of paracetamol, and the removal of ligature points.",
    "The paracetamol pack-size legislation of 1998 was followed by a sustained fall in paracetamol overdose deaths and in liver transplant listings.",
    "Secondary prevention: early intervention in psychosis services reduce duration of untreated psychosis, improve symptomatic and functional outcome, and reduce admission over the first two years.",
    "Duration of untreated psychosis is one of the few modifiable predictors of outcome in schizophrenia, and the relationship holds after adjustment for premorbid function.",
    "Tertiary prevention: relapse prevention with maintenance medication, rehabilitation, supported employment, and physical health screening in severe mental illness, where the mortality gap is largely cardiovascular and largely preventable."
  ],
  cards:[
    ["Distinguish primary, secondary and tertiary prevention, with a psychiatric example of each.","Primary prevention stops the disorder arising, for example alcohol minimum unit pricing. Secondary prevention detects it early and shortens it, for example early intervention in psychosis. Tertiary prevention limits the resulting disability, for example rehabilitation and supported employment."],
    ["Describe Gordon's classification of preventive interventions.","Universal interventions offered to a whole population; selective interventions offered to a subgroup at raised risk; and indicated interventions offered to individuals already showing early signs of disorder."],
    ["Which suicide prevention approach has the strongest evidence base?","Means restriction: barriers at jumping sites, catalytic converters, blister and pack-size limits on analgesics, and removal of ligature points. The UK paracetamol pack-size legislation of 1998 was followed by a sustained fall in paracetamol overdose deaths and liver transplant listings."]
  ],
  note:[
    "Primary, secondary, tertiary prevention map onto before onset, early in course, and limiting disability.",
    "Gordon's classification: universal, selective, indicated.",
    "Means restriction has the strongest evidence base of any suicide prevention measure.",
    "Scotland introduced minimum unit pricing for alcohol in 2018.",
    "The UK paracetamol pack-size legislation dates from 1998.",
    "Duration of untreated psychosis is a modifiable predictor of outcome in first-episode psychosis."
  ],
  refs:["nice","companion","semgen"] };

TEACH["6.3.1"] = { free:true,
  simple:"ECT is a deliberately induced seizure under anaesthetic. It is the fastest treatment psychiatry has for a person who has stopped eating and drinking and is about to die of depression. It also has a reputation built on how it was done in the 1950s, without anaesthetic, which is not how it is done now.",
  teach:[
    "Mechanism: unknown in detail. The candidates are enhanced neuroplasticity and neurotrophic signalling, hippocampal neurogenesis, and modulation of GABAergic and monoaminergic transmission. Anyone who claims certainty here is overstating.",
    "The seizure is the therapeutic element. Subconvulsive stimulation is not effective, which is one of the clearest facts in the field.",
    "NICE indications: severe depression that is life-threatening and a rapid response is required; treatment-resistant severe depression; catatonia; and a prolonged or severe manic episode.",
    "ECT is a first-line, not last-line, treatment where the illness is immediately life-threatening through refusal of food and fluid, or where the person has responded to it before.",
    "Response rate in severe depression is of the order of 70 to 80 per cent, higher than any pharmacological alternative, and highest in psychotic depression.",
    "The relapse rate after successful ECT without continuation treatment is very high, above half within six months, so continuation medication or continuation ECT is essential rather than optional.",
    "There is no absolute contraindication. Raised intracranial pressure is the principal relative contraindication; recent myocardial infarction, cerebral aneurysm and phaeochromocytoma raise the anaesthetic risk.",
    "Mortality is comparable to that of minor surgery under general anaesthesia, in the region of one death per 100,000 treatments, and the risk is anaesthetic rather than convulsive.",
    "Cognitive effects: transient post-ictal confusion in everyone, anterograde memory disturbance that resolves over weeks, and retrograde autobiographical memory loss which is the effect patients most object to and which can persist.",
    "Bilateral electrode placement works faster and slightly better than unilateral; right unilateral at high dose produces less cognitive impairment for similar efficacy over a full course.",
    "The evidence in mania and catatonia is strong. In schizophrenia the effect on core psychotic symptoms is limited, but it is useful in catatonic and treatment-resistant presentations, particularly alongside clozapine."
  ],
  cards:[
    ["State the NICE indications for ECT.","Severe depression that is life-threatening where a rapid response is required; depression that has not responded to adequate trials of other treatments; catatonia; and a prolonged or severe manic episode."],
    ["What is the relapse rate after a successful course of ECT without continuation treatment?","Above fifty per cent within six months, which is why continuation pharmacotherapy or continuation ECT is required rather than optional."],
    ["Compare bilateral and right unilateral electrode placement.","Bilateral placement acts faster and is marginally more effective. High-dose right unilateral achieves comparable efficacy across a full course with significantly less cognitive impairment, particularly less retrograde autobiographical memory loss."],
    ["Is there an absolute contraindication to ECT?","No. Raised intracranial pressure is the principal relative contraindication. Recent myocardial infarction, cerebral aneurysm and phaeochromocytoma increase anaesthetic risk and require specialist assessment."]
  ],
  note:[
    "Subconvulsive stimulation is ineffective; the seizure itself is therapeutic.",
    "Response rates in severe depression are around 70 to 80 per cent, highest in psychotic depression.",
    "Mortality is approximately one per 100,000 treatments and is anaesthetic in origin.",
    "Retrograde autobiographical memory loss is the cognitive effect most likely to persist.",
    "ECT is first-line where the illness is immediately life-threatening or where there has been a previous good response."
  ],
  refs:["ecthandbk","nice","maudsley"] };

TEACH["6.3.2"] = { free:false,
  simple:"Getting the dose right in ECT is like tuning a radio. Too little and nothing happens at all. Far too much and you get the same result with more damage. The right setting is a little above the point at which the person's brain will seize, and that point is different for every person.",
  teach:[
    "Seizure threshold is the minimum stimulus charge producing an adequate generalised seizure. It varies up to fortyfold between individuals and rises across a course of treatment.",
    "Threshold is higher in older people, in men, and with bilateral placement. It is lowered by anything proconvulsant.",
    "Dosing is set relative to threshold: approximately one and a half times threshold for bilateral, and six times threshold for right unilateral, because unilateral placement is ineffective at just above threshold.",
    "Two methods of establishing threshold: empirical titration at the first session, or age-based dosing formulae. Titration is more precise; age-based dosing is quicker and avoids repeated subconvulsive stimulation.",
    "Standard frequency in the UK is twice weekly. Three times weekly acts faster but produces more cognitive impairment.",
    "A typical course is six to twelve treatments. Response is assessed after each, and the course stops when remission is reached rather than at a fixed number.",
    "Bitemporal placement puts electrodes above the midpoint of a line from tragus to lateral canthus. Right unilateral uses the d'Elia position, one electrode right frontotemporal and one just right of the vertex.",
    "Anaesthetic sequence: pre-oxygenation, short-acting induction agent, muscle relaxant, and a bite block. Modern practice with a relaxant means the visible motor seizure is minimal.",
    "Propofol raises seizure threshold and shortens seizures; etomidate and ketamine are alternatives where seizures are inadequate. Suxamethonium is the usual relaxant.",
    "An adequate seizure is judged on EEG rather than motor activity: generalised, with good amplitude, clear postictal suppression, and typically longer than fifteen to twenty seconds of EEG activity.",
    "The Cuff technique isolates one limb from the relaxant with a tourniquet so the motor seizure can be observed directly.",
    "Missed or inadequate seizure: check the stimulus, hyperventilate the patient, consider caffeine pretreatment, reduce or change the anaesthetic agent, and restimulate at a higher dose within the same session.",
    "Prolonged seizure beyond about two minutes is terminated with a benzodiazepine or further anaesthetic agent.",
    "ECTAS, the ECT Accreditation Service, sets UK standards for equipment, training, consent, and monitoring."
  ],
  cards:[
    ["Define seizure threshold and describe how it varies.","The minimum stimulus charge that produces an adequate generalised seizure. It varies up to fortyfold between individuals, rises across a course of treatment, and is higher in older people, in men, and with bilateral electrode placement."],
    ["How is stimulus dose set relative to threshold for each placement?","Approximately one and a half times threshold for bilateral placement, and around six times threshold for right unilateral placement, which is ineffective when given at just above threshold."],
    ["What defines an adequate seizure?","A generalised seizure judged on the EEG rather than on motor activity: good amplitude, clear postictal suppression, and usually more than fifteen to twenty seconds of EEG seizure activity."],
    ["How do you manage a missed or inadequate seizure?","Check the stimulus delivery and electrode contact, hyperventilate the patient, consider caffeine pretreatment, reduce or switch the anaesthetic agent away from propofol, and restimulate at a higher dose within the same session."],
    ["Which anaesthetic agent raises seizure threshold, and what are the alternatives?","Propofol raises threshold and shortens seizure duration. Etomidate and ketamine are alternatives where seizures are inadequate."]
  ],
  note:[
    "UK standard frequency is twice weekly; a typical course is six to twelve treatments.",
    "Right unilateral uses the d'Elia position: right frontotemporal and just right of the vertex.",
    "Suxamethonium is the standard muscle relaxant.",
    "The cuff technique isolates a limb from the relaxant so the motor seizure can be observed.",
    "A seizure beyond about two minutes is terminated pharmacologically.",
    "ECTAS accredits UK ECT clinics."
  ],
  refs:["ecthandbk","maudsley"] };

TEACH["6.3.3"] = { free:false,
  simple:"If medication and ECT have both failed, three other things exist. One puts a magnet against the scalp. One puts an electrode deep inside the brain. One cuts a small bundle of fibres and cannot be undone. They sit in that order of seriousness, and the last is almost never done.",
  teach:[
    "Repetitive transcranial magnetic stimulation, rTMS, uses a magnetic coil on the scalp to induce focal cortical currents. No anaesthetic, no seizure, and the person is awake.",
    "The standard antidepressant protocol is high-frequency stimulation of the left dorsolateral prefrontal cortex; low-frequency right-sided stimulation is an alternative.",
    "NICE, 2015, supports rTMS for depression with normal arrangements for governance and consent, noting no major safety concerns. It is less effective than ECT but far better tolerated and does not impair memory.",
    "Theta burst stimulation shortens the treatment session substantially and is non-inferior to standard protocols in depression.",
    "The main risk of rTMS is seizure induction, which is rare, and scalp discomfort or headache, which is common.",
    "Deep brain stimulation, DBS, implants electrodes into a specific target connected to an implanted pulse generator. It is reversible and adjustable, which distinguishes it fundamentally from ablative surgery.",
    "Psychiatric DBS targets: subcallosal cingulate and nucleus accumbens in depression; ventral capsule and ventral striatum, and subthalamic nucleus, in OCD. Established in Parkinson's disease; still investigational in psychiatry.",
    "Two industry-sponsored randomised DBS trials in depression, BROADEN and the Medtronic subcallosal trial, failed to meet their primary endpoints, which is why the field remains open rather than settled.",
    "Neurosurgery for mental disorder, formerly psychosurgery, is ablative and irreversible. UK procedures are anterior cingulotomy and anterior capsulotomy, for the most severe treatment-refractory depression and OCD.",
    "Under section 57 of the Mental Health Act 1983 in England and Wales, neurosurgery for mental disorder and surgical implantation of hormones require both the patient's valid consent and a second opinion approved doctor. It cannot be given to a detained patient who lacks capacity or refuses.",
    "Section 57 is the highest safeguard in the Act, and the only place where consent and a second opinion are both required.",
    "Numbers are tiny. Only a handful of ablative procedures are performed in the UK in a year, all in one or two centres, after multidisciplinary review."
  ],
  cards:[
    ["What is the standard rTMS protocol for depression?","High-frequency repetitive stimulation of the left dorsolateral prefrontal cortex, with low-frequency right-sided stimulation as an alternative. It is given awake, without anaesthetic or induced seizure."],
    ["Which safeguard governs neurosurgery for mental disorder in England and Wales?","Section 57 of the Mental Health Act 1983, which requires both the patient's valid consent and the agreement of a second opinion appointed doctor. It cannot be given to a patient who lacks capacity or who refuses."],
    ["Name the psychiatric DBS targets in depression and OCD.","Subcallosal cingulate and nucleus accumbens in depression; ventral capsule and ventral striatum, and subthalamic nucleus, in obsessive-compulsive disorder."],
    ["How does DBS differ in principle from ablative neurosurgery?","DBS is reversible and adjustable: the stimulation can be altered or stopped and the device removed. Ablative surgery destroys tissue and cannot be undone."]
  ],
  note:[
    "NICE issued interventional procedures guidance supporting rTMS for depression in 2015.",
    "Theta burst stimulation is non-inferior to standard rTMS protocols and much shorter.",
    "Seizure is the rare serious risk of rTMS; headache and scalp discomfort are common.",
    "UK ablative procedures are anterior cingulotomy and anterior capsulotomy.",
    "Section 57 is the only provision requiring both consent and a second opinion.",
    "Two major randomised trials of DBS in depression failed their primary endpoints."
  ],
  refs:["nice","maudsley","companion"] };

TEACH["6.4"] = { free:false,
  simple:"Before you build a service you have to know how many people need it, which is not the same as how many people are asking for it. Most people who need psychiatric care never reach it, and a service designed around the queue will always be the wrong size.",
  teach:[
    "Bradshaw's taxonomy of need: normative need, defined by an expert; felt need, what people say they want; expressed need, felt need converted into a demand; and comparative need, inferred by comparison with a similar population.",
    "Need is not demand and neither is supply. A service planned on expressed need alone systematically underserves the people least able to ask.",
    "The Goldberg and Huxley filter model describes five levels and four filters between community morbidity and psychiatric inpatient care: the decision to consult, detection by the general practitioner, referral, and admission.",
    "Most psychiatric morbidity never passes the first two filters. GP detection is the largest single loss point, which is why liaison and training in primary care changes population outcome more than expanding specialist beds.",
    "Standardised needs assessment: the Camberwell Assessment of Need, CAN, covers twenty-two domains and records both staff-rated and service-user-rated need, which frequently disagree.",
    "Health economics vocabulary you must have: cost-effectiveness analysis expresses outcomes in natural units; cost-utility analysis uses QALYs; cost-benefit analysis puts everything in money.",
    "The QALY combines length and quality of life. NICE has historically regarded interventions below about £20,000 to £30,000 per QALY as cost-effective, with judgement applied above that.",
    "The cost structure of mental health services is dominated by inpatient beds. A psychiatric bed day costs several hundred pounds; a community contact costs a small fraction of that.",
    "The largest economic cost of mental illness is not treatment but lost productivity and informal care, which typically exceed direct health service costs several times over.",
    "Deinstitutionalisation replaced beds with community teams. Where community provision was funded in advance it worked; where beds closed first, people moved into prisons and homelessness, which is the recurring international finding.",
    "Penrose's hypothesis is the observation of an inverse relationship between psychiatric bed numbers and prison populations, still cited and still contested."
  ],
  cards:[
    ["Describe Bradshaw's four categories of need.","Normative need, defined by an expert against a standard; felt need, what the person perceives; expressed need, felt need converted into demand; and comparative need, inferred by comparing one population with a similar one."],
    ["What are the filters in the Goldberg and Huxley model?","Four filters between five levels: the decision to consult primary care, detection by the general practitioner, referral to specialist services, and admission to a psychiatric bed. GP detection is the largest single loss point."],
    ["Define a QALY and state the usual NICE threshold.","A quality-adjusted life year combines length of life with quality of life, one QALY being one year in full health. NICE has generally regarded interventions costing below about £20,000 to £30,000 per QALY as cost-effective."],
    ["What is the Camberwell Assessment of Need?","A standardised instrument covering twenty-two domains of need in severe mental illness, recording both staff and service-user ratings, which often diverge."]
  ],
  note:[
    "Cost-effectiveness uses natural units, cost-utility uses QALYs, cost-benefit uses money for both sides.",
    "Inpatient beds dominate direct mental health service costs.",
    "Indirect costs, chiefly lost productivity and informal care, exceed direct treatment costs several times over.",
    "Penrose's hypothesis proposes an inverse relationship between psychiatric bed numbers and prison population.",
    "Deinstitutionalisation succeeded where community services were funded before beds closed."
  ],
  refs:["healthecon","drummond","companion"] };

TEACH["6.5"] = { free:false,
  simple:"Rehabilitation is not the ward where nothing happens. It is the specialty for people whose illness did not resolve, whose job is to build the largest possible life around what remains. Its measure is not symptom reduction but what the person can do on a Tuesday.",
  teach:[
    "Rehabilitation psychiatry serves people with complex psychosis: treatment-resistant illness, cognitive impairment, negative symptoms, comorbid substance use, and long histories of admission.",
    "This group is a small proportion of people with severe mental illness but consumes a large share of the mental health budget, mostly in out-of-area placements.",
    "The rehabilitation care pathway runs from high-dependency inpatient rehabilitation, through community rehabilitation units, to supported housing and finally independent living with floating support.",
    "The distinguishing feature is time. Rehabilitation works in months and years, not the weeks of an acute admission, and premature discharge into unsupported accommodation is the commonest cause of failure.",
    "Recovery, in the sense used here, is not symptom remission. It is a life with meaning, connection, hope and identity, which may coexist with continuing symptoms.",
    "The CHIME framework names the elements of personal recovery: Connectedness, Hope, Identity, Meaning and Empowerment.",
    "Core components: optimising medication including clozapine, physical health care, skills training in daily living, structured activity, family work, and supported employment.",
    "Clozapine is central to rehabilitation practice, and its underuse and delayed initiation is one of the clearest quality failures in UK psychiatry.",
    "Cognitive remediation therapy improves cognition and, when combined with vocational support, improves functional outcome.",
    "Social skills training and family intervention reduce relapse; family intervention has among the strongest effect sizes of any psychosocial intervention in schizophrenia.",
    "Around two-thirds of people who pass through a well-run rehabilitation pathway move to more independent accommodation and sustain it.",
    "Out-of-area placement separates a person from family, from their locality and from any prospect of local resettlement, and is a marker of inadequate local provision rather than of clinical need."
  ],
  cards:[
    ["Which patient group does rehabilitation psychiatry serve?","People with complex psychosis: treatment-resistant illness, prominent negative symptoms, cognitive impairment, comorbid substance misuse and long or repeated admissions. A small proportion of people with severe mental illness who consume a disproportionate share of the budget."],
    ["What does CHIME stand for?","Connectedness, Hope and optimism, Identity, Meaning and purpose, and Empowerment: the five processes of personal recovery."],
    ["Describe the rehabilitation care pathway.","High-dependency inpatient rehabilitation, then community rehabilitation units, then supported housing, then independent living with floating support. Progression is measured in months to years."],
    ["Which psychosocial intervention has the strongest effect on relapse in schizophrenia?","Family intervention, which has among the largest effect sizes of any psychosocial intervention in schizophrenia and is recommended by NICE for all families in contact with the person."]
  ],
  note:[
    "Personal recovery is distinct from clinical remission and may coexist with continuing symptoms.",
    "Around two-thirds of people completing a rehabilitation pathway sustain more independent accommodation.",
    "Delayed clozapine initiation is a recognised quality failure in UK practice.",
    "Cognitive remediation improves functional outcome when combined with vocational support.",
    "Out-of-area placement indicates inadequate local provision rather than clinical need."
  ],
  refs:["nice","companion","semgen"] };

TEACH["6.6"] = { free:false,
  simple:"A diagnosis does not remove a person's rights. It changes which questions the law asks about a particular decision, at a particular moment. Someone can be too unwell to consent to an operation on Monday and perfectly able to make a will on Friday.",
  teach:[
    "Capacity is decision-specific and time-specific. There is no such thing as a person who globally lacks capacity, and a diagnosis alone never establishes incapacity.",
    "Testamentary capacity is governed by Banks v Goodfellow, 1870: the person must understand the nature of making a will, the extent of their property, the claims of those who might expect to benefit, and must have no disorder of mind that perverts their sense of right.",
    "Banks v Goodfellow survives the Mental Capacity Act 2005 for wills in England and Wales and remains the operative test.",
    "Capacity to marry is a low threshold. The person must understand the nature of the marriage contract and the duties and responsibilities it creates, but need not understand the finances.",
    "Mental disorder is not itself a ground for divorce in England and Wales; the Divorce, Dissolution and Separation Act 2020 removed fault entirely.",
    "In child custody and contact disputes the welfare of the child is the paramount consideration under the Children Act 1989. Parental mental illness matters only through its effect on parenting, not as a fact in itself.",
    "Property and affairs: the Court of Protection appoints a deputy where a person lacks capacity and has made no Lasting Power of Attorney. A Lasting Power of Attorney must be made while capacity is retained.",
    "Confidentiality is a duty, not an absolute. It may be breached with consent, where required by law, or where there is an overriding public interest.",
    "W v Egdell, 1990, is the English authority: a psychiatrist's disclosure of a report to the hospital and the Home Office was lawful, because a real risk of danger to the public outweighed the duty of confidence.",
    "Tarasoff v Regents of the University of California, 1976, established a duty to protect identifiable third parties in Californian law. It is not English law, and English practice rests on the public interest exception rather than a positive duty to warn.",
    "The GMC position: disclosure without consent may be justified where failure to disclose would expose others to a risk of death or serious harm. The disclosure should be the minimum necessary.",
    "Seclusion is the supervised confinement of a patient alone in a room they cannot leave, used solely to contain severely disturbed behaviour likely to cause harm to others.",
    "Seclusion is never a punishment, never for self-harm alone, and never a substitute for staffing. Under the Mental Health Act Code of Practice it requires named documentation, continuous nursing observation, medical review within one hour, and defined review intervals thereafter.",
    "Long-term segregation differs from seclusion and requires its own multidisciplinary review process and, following the Winterbourne View and subsequent inquiries, external scrutiny."
  ],
  cards:[
    ["State the four limbs of the Banks v Goodfellow test.","The testator must understand the nature and effect of making a will, know the extent of their property, comprehend the claims of those who might expect to benefit, and be free of any disorder of mind that perverts their sense of right in disposing of property."],
    ["What did W v Egdell establish?","That a psychiatrist may lawfully disclose confidential information without consent where there is a real risk of danger to the public, the public interest in disclosure outweighing the duty of confidence. It is the English authority on breaching confidentiality on risk grounds."],
    ["How does Tarasoff differ from English law?","Tarasoff established a duty to protect identifiable third parties in Californian law. There is no equivalent positive duty to warn in English law; disclosure rests on the public interest exception, as in W v Egdell."],
    ["Define seclusion and state its permitted purpose.","The supervised confinement of a patient alone in a room from which they are prevented from leaving, used solely to contain severely disturbed behaviour likely to cause harm to others. It is never a punishment, never used for self-harm alone, and never a substitute for adequate staffing."]
  ],
  note:[
    "Capacity is decision-specific and time-specific; diagnosis never establishes incapacity.",
    "Banks v Goodfellow, 1870, remains the test for testamentary capacity in England and Wales.",
    "Capacity to marry requires understanding of the contract and its duties, not of the finances.",
    "Children Act 1989: the child's welfare is paramount.",
    "A Lasting Power of Attorney must be made while capacity is retained; otherwise the Court of Protection appoints a deputy.",
    "Seclusion under the Code of Practice requires medical review within one hour and continuous nursing observation."
  ],
  refs:["eastman","puriforen","forrester"] };

TEACH["6.7"] = { free:false,
  simple:"Four questions come up again and again in ordinary clinical work and each has a legal answer you are expected to know: is this person being abused, who handles their money, should they be driving, and can they decide this for themselves.",
  teach:[
    "The Mental Capacity Act 2005, England and Wales, has five principles: presume capacity; take all practicable steps to support decision-making; an unwise decision is not incapacity; act in the person's best interests; and choose the least restrictive option.",
    "The two-stage test: first, is there an impairment of or disturbance in the functioning of the mind or brain; second, does it mean the person cannot make this decision.",
    "The functional test has four limbs. The person must be able to understand the information, retain it long enough to decide, use or weigh it, and communicate the decision. Failure of any one limb means incapacity for that decision.",
    "Best interests under section 4 is not what the clinician would choose. It requires consideration of the person's past and present wishes, beliefs and values, and consultation with those close to them.",
    "An Independent Mental Capacity Advocate must be instructed for serious medical treatment or a change of accommodation where the person lacks capacity and has nobody appropriate to consult.",
    "Deprivation of Liberty Safeguards apply where a person lacking capacity is under continuous supervision and control and not free to leave. The Cheshire West acid test, 2014, set that standard and greatly widened its application.",
    "Liberty Protection Safeguards were legislated in 2019 to replace DoLS but implementation was halted in 2023, so DoLS remains in force.",
    "Safeguarding adults: the Care Act 2014 places a statutory duty on local authorities in England to make enquiries where an adult with care and support needs is experiencing or at risk of abuse or neglect.",
    "Categories of abuse under the Care Act: physical, sexual, psychological, financial or material, neglect and acts of omission, discriminatory, organisational, domestic, modern slavery, and self-neglect.",
    "Making Safeguarding Personal is the principle that safeguarding is done with the person, directed by their own desired outcomes, rather than done to them.",
    "Driving: the licence holder, not the doctor, has the legal duty to notify the DVLA. The clinician's duty is to advise clearly and record that advice.",
    "If a patient continues to drive against advice and lacks the capacity or will to stop, the GMC directs the doctor to make every reasonable effort to persuade them, and if that fails to inform the DVLA promptly, telling the patient first.",
    "Standard DVLA psychiatric guidance for Group 1 licences: an acute psychotic episode requires cessation until well and stable, typically for a period of months with insight and adherence; the standards for Group 2 vocational licences are substantially stricter.",
    "Any warning symptom of a condition, and any medication causing sedation sufficient to impair driving, must be considered. Sedating psychotropics are a common and under-discussed cause of impaired driving."
  ],
  cards:[
    ["State the five principles of the Mental Capacity Act 2005.","Presume capacity; take all practicable steps to support the person to decide; an unwise decision does not indicate incapacity; act in the person's best interests; and choose the least restrictive option."],
    ["What are the four limbs of the functional test of capacity?","The ability to understand the relevant information, retain it long enough to make the decision, use or weigh it as part of deciding, and communicate the decision. Failure of any one limb means the person lacks capacity for that decision."],
    ["What is the Cheshire West acid test?","A person lacking capacity is deprived of their liberty if they are under continuous supervision and control and are not free to leave. The 2014 Supreme Court judgment substantially widened the application of the Deprivation of Liberty Safeguards."],
    ["Who has the legal duty to notify the DVLA, and what is the doctor's role?","The licence holder has the legal duty to notify. The doctor must advise clearly, record the advice, and if the patient continues to drive against advice, attempt persuasion and then inform the DVLA, telling the patient first."]
  ],
  note:[
    "Mental Capacity Act 2005 applies in England and Wales; Scotland uses the Adults with Incapacity (Scotland) Act 2000.",
    "An IMCA is required for serious medical treatment or accommodation change where there is nobody appropriate to consult.",
    "Liberty Protection Safeguards were legislated in 2019; implementation was halted in 2023 and DoLS remains in force.",
    "The Care Act 2014 places the statutory safeguarding enquiry duty on local authorities in England.",
    "Making Safeguarding Personal directs safeguarding by the person's own desired outcomes.",
    "Group 2 vocational driving standards are substantially stricter than Group 1."
  ],
  refs:["eastman","nice","companion"] };

TEACH["6.8"] = { free:true,
  simple:"The same illness does not look the same everywhere. In one place low mood is described as sadness, in another as heat in the head or a heavy heart. If you only recognise the version you were taught, you will miss the illness and call the person difficult instead.",
  teach:[
    "Culture shapes how distress is experienced, how it is expressed, what it is attributed to, who is consulted, and what response is expected. It does not usually create new illnesses.",
    "Idioms of distress are culturally shared ways of expressing suffering. Kleinman's distinction is fundamental: disease is the biological process, illness is the person's lived experience of it, and sickness is the social meaning attached.",
    "Explanatory models are the person's own account of what is wrong, why it happened, what will happen, and what should be done. Eliciting it is the single most useful cross-cultural clinical skill.",
    "DSM-5 provides the Cultural Formulation Interview, sixteen questions covering cultural definition of the problem, perceived causes, supports and stressors, cultural factors affecting coping and help-seeking, and factors affecting the clinical relationship.",
    "ICD-11 and DSM-5 both moved from culture-bound syndromes to cultural concepts of distress, recognising that these are not exotic exceptions but the normal cultural shaping of universal processes.",
    "Named presentations: ataque de nervios in Latino populations; dhat, semen-loss anxiety, in South Asia; koro, genital retraction anxiety, in South East Asia; taijin kyofusho, fear of offending others, in Japan; brain fag in West Africa; and susto in Latin America.",
    "Somatic presentation of depression is the global norm rather than the exception. Presenting emotional distress in psychological terms is characteristic of educated Western populations, not of humanity generally.",
    "The AESOP study found markedly raised incidence rates of psychosis in Black Caribbean and Black African populations in England, of the order of several times the White British rate.",
    "The excess is not explained by misdiagnosis or by higher rates in countries of origin. The evidence points to social factors: discrimination, social defeat, migration, urbanicity and adversity.",
    "Black patients in England are substantially more likely to be detained under the Mental Health Act, more likely to be admitted via police contact, and less likely to be referred for psychological therapy.",
    "The Independent Review of the Mental Health Act, 2018, identified racial disparity in detention as one of the four principal problems requiring reform.",
    "Institutional racism, defined in the Macpherson report of 1999, is the collective failure of an organisation to provide an appropriate and professional service to people because of their colour, culture or ethnic origin.",
    "Migration itself is a risk factor, and the risk is higher in second-generation migrants than in first, which points away from selection and towards the experience of living as a minority.",
    "Cultural competence has been criticised for producing checklists about groups. Cultural humility, a stance of enquiry about this particular person, is the more defensible position."
  ],
  cards:[
    ["Distinguish disease, illness and sickness in Kleinman's terms.","Disease is the biological process as defined by the clinician; illness is the person's subjective lived experience of it; sickness is the social meaning and role attached to it by the wider community."],
    ["What is the Cultural Formulation Interview?","A sixteen-question DSM-5 instrument covering the cultural definition of the problem, perceived causes, supports and stressors, cultural factors in coping and help-seeking, and factors affecting the clinical relationship."],
    ["What did the AESOP study find, and how is it explained?","Markedly raised incidence of psychosis in Black Caribbean and Black African populations in England, several times the White British rate. It is not explained by misdiagnosis or by rates in countries of origin; the evidence points to social factors including discrimination, social defeat, migration and urbanicity."],
    ["Name four cultural concepts of distress and their regions.","Ataque de nervios in Latino populations; dhat, semen-loss anxiety, in South Asia; koro, genital retraction anxiety, in South East Asia; taijin kyofusho, fear of offending others, in Japan."]
  ],
  note:[
    "ICD-11 and DSM-5 both use cultural concepts of distress in place of culture-bound syndromes.",
    "Somatic presentation of depression is the global norm; psychologising is characteristic of educated Western populations.",
    "Psychosis risk is higher in second-generation than first-generation migrants.",
    "The Independent Review of the Mental Health Act, 2018, identified racial disparity in detention as a principal driver of reform.",
    "Macpherson, 1999, defined institutional racism as a collective organisational failure.",
    "Cultural humility is preferred to cultural competence as a clinical stance."
  ],
  refs:["bhugra","morgan","icd11","dsm5"] };
