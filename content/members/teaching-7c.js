/* =====================================================================
   TEACHING, SECTION 7C — General Adult, the five-aspect disorder grid
   Part two: hypochondriasis, somatisation, dissociative, personality,
   organic psychoses, other disorders, anorexia nervosa, bulimia nervosa
   40 items, 7.1.6.1 to 7.1.11.5 and 7.5.1.1 to 7.5.2.5
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------- 7.1.6 HYPOCHONDRIASIS ---------- */

TEACH["7.1.6.1"] = { free:true,
  simple:"Around one person in fifty is convinced they have a serious illness that doctors keep failing to find. They are not pretending, and they are not reassured by a normal scan, which is the defining feature.",
  teach:[
    "Prevalence estimates vary with definition. In the general population, clinically significant health anxiety affects around 1 to 5 per cent; in medical outpatient settings the figure is far higher, around 10 to 20 per cent.",
    "The sex ratio is approximately equal, which distinguishes it from most anxiety disorders.",
    "Onset is typically in early to middle adulthood, and often follows a personal illness, a bereavement, or a serious illness in someone close.",
    "ICD-11 classifies hypochondriasis within obsessive-compulsive and related disorders, on the basis of the shared intrusive preoccupation, checking and reassurance seeking. This is a change from ICD-10, where it sat with somatoform disorders.",
    "DSM-5 split the old hypochondriasis into two: somatic symptom disorder, where somatic symptoms are prominent, and illness anxiety disorder, where they are minimal or absent.",
    "The DSM-5 split is examinable: around three-quarters of people previously diagnosed with hypochondriasis meet criteria for somatic symptom disorder, and around a quarter for illness anxiety disorder.",
    "Health anxiety is dimensional, and severe hypochondriasis sits at one end of a continuum that includes ordinary and adaptive health concern.",
    "Cyberchondria describes escalation of health anxiety through internet symptom searching, which functions as a checking behaviour and worsens the disorder.",
    "Costs are substantial and largely borne by acute medical services through repeated investigation, and the group is high-utilising rather than treatment-avoidant."
  ],
  cards:[
    ["Where does ICD-11 classify hypochondriasis, and why?","Within obsessive-compulsive and related disorders, on the basis of shared intrusive preoccupation, repetitive checking and reassurance seeking. This is a change from ICD-10, where it was classified with the somatoform disorders."],
    ["How did DSM-5 divide the old category of hypochondriasis?","Into somatic symptom disorder, where distressing somatic symptoms are prominent, and illness anxiety disorder, where somatic symptoms are minimal or absent. Approximately three-quarters of previously diagnosed cases meet criteria for the former."]
  ],
  note:[
    "Prevalence is around 1 to 5 per cent in the community and 10 to 20 per cent in medical outpatients.",
    "The sex ratio is approximately equal, unlike most anxiety disorders.",
    "Onset commonly follows personal illness, bereavement or serious illness in someone close.",
    "Cyberchondria describes escalation through internet symptom searching."
  ],
  refs:["icd11","dsm5","semliaison"] };

TEACH["7.1.6.2"] = { free:false,
  simple:"Everybody's body produces odd sensations all day. Most people ignore them. In health anxiety the sensation gets noticed, interpreted as dangerous, and then checked, and the checking makes the sensation more noticeable.",
  teach:[
    "The cognitive-behavioural model, from Warwick and Salkovskis, is the dominant account and maps closely onto the OCD model.",
    "Dysfunctional assumptions about health, such as bodily changes always signify disease or a good doctor would find a cause, are acquired through early experience of illness in self or family.",
    "A critical incident, such as a friend's diagnosis or an ambiguous symptom, activates the assumptions and produces catastrophic misinterpretation of benign bodily sensation.",
    "Four maintaining processes: selective attention to the body, which increases detection of normal sensation; checking and reassurance seeking; avoidance of illness-related triggers; and physiological arousal producing further symptoms.",
    "Reassurance produces short-term relief and long-term worsening, exactly as a compulsion does. This is the single most important clinical fact in the disorder.",
    "Selective attention explains why a person who monitors their heartbeat detects more ectopics: the sensations are real, and the attention makes them perceptible.",
    "Somatosensory amplification is the trait of experiencing bodily sensation as intense, noxious and disturbing, and is elevated in this group.",
    "Early experience: childhood illness in self or parent, parental health anxiety, and childhood exposure to serious illness or death are risk factors.",
    "Alexithymia, difficulty identifying and describing emotion, is associated with somatic presentation and may explain some of the substitution of bodily for emotional distress.",
    "Iatrogenic factors matter greatly. Ambiguous test results, unexplained findings, over-investigation and inconsistent explanations from clinicians all consolidate the belief.",
    "The doctor is part of the maintaining cycle. Ordering one more test to settle it is participating in the disorder, and this must be said plainly."
  ],
  cards:[
    ["Describe the Warwick and Salkovskis model of health anxiety.","Dysfunctional assumptions about health, acquired through early experience, are activated by a critical incident, producing catastrophic misinterpretation of benign bodily sensations. The condition is maintained by selective attention to the body, checking and reassurance seeking, avoidance, and physiological arousal generating further symptoms."],
    ["Why does reassurance make health anxiety worse?","Because it functions exactly as a compulsion does: it produces short-term relief which negatively reinforces the seeking behaviour, prevents the person from discovering that anxiety would have declined anyway, and consolidates the belief that the question needed answering."],
    ["What is somatosensory amplification?","The trait tendency to experience normal bodily sensation as intense, noxious and disturbing. It is elevated in health anxiety and contributes to the detection and misinterpretation of benign sensation."]
  ],
  note:[
    "Selective attention increases detection of genuinely present but normally unnoticed sensation.",
    "Childhood illness in self or parent and parental health anxiety are risk factors.",
    "Alexithymia is associated with somatic rather than emotional presentation of distress.",
    "Over-investigation and inconsistent clinical explanation consolidate the belief.",
    "The clinician ordering one more test is participating in the maintaining cycle."
  ],
  refs:["semliaison","companion"] };

TEACH["7.1.6.3"] = { free:false,
  simple:"The person is not worried about the symptom. They are worried about what the symptom means. Ask them what they think it is, and they will name a specific disease, usually cancer or a brain tumour.",
  teach:[
    "ICD-11 hypochondriasis requires persistent preoccupation with, or fear of, having one or more serious progressive or life-threatening illnesses, with excessive health-related behaviours or maladaptive avoidance, persisting at least several months.",
    "The preoccupation persists despite appropriate medical evaluation and reassurance. Non-response to reassurance is the diagnostic hallmark.",
    "The person is typically able to name the feared disease specifically, most often cancer, a brain tumour, HIV, multiple sclerosis or motor neurone disease.",
    "Checking behaviours: bodily self-examination, palpating for lumps, monitoring pulse, inspecting the tongue and skin, repeated internet searching, and repeated consultation.",
    "Reassurance seeking from doctors, family and the internet, with relief lasting hours to days before the doubt returns.",
    "Avoidance in some presentations replaces checking entirely: avoiding doctors, avoiding tests, avoiding programmes about illness, and avoiding hospitals.",
    "Insight varies and ICD-11 provides an insight specifier. With absent insight the belief approaches delusional intensity, and hypochondriacal delusion in psychotic depression is the differential.",
    "Distinguish from somatic symptom disorder, where the focus is on the distress and burden of the symptoms themselves rather than on the feared underlying disease.",
    "Distinguish from body dysmorphic disorder, where the preoccupation is with appearance rather than with illness; from OCD, where contamination fears concern acquiring illness rather than already having it; and from generalised anxiety disorder, where health is one worry domain among many.",
    "Distinguish from delusional disorder somatic type, where the belief is held with delusional conviction and is typically bizarre, such as infestation.",
    "Comorbidity is high: depression, generalised anxiety disorder, panic disorder and OCD.",
    "Never conclude the diagnosis without adequate assessment. Health anxiety and genuine undiagnosed disease can coexist, and a change in the pattern of symptoms warrants fresh assessment, not fresh reassurance."
  ],
  cards:[
    ["What is the diagnostic hallmark of hypochondriasis?","Persistence of the preoccupation or fear despite appropriate medical evaluation and reassurance. Non-response to reassurance is the defining feature."],
    ["Distinguish hypochondriasis from somatic symptom disorder.","In hypochondriasis the focus is on the feared underlying disease, with somatic symptoms minimal or absent. In somatic symptom disorder the focus is on the distress and functional burden of the symptoms themselves, regardless of whether a medical explanation exists."],
    ["Distinguish hypochondriasis from contamination OCD.","In hypochondriasis the fear is of already having a disease. In contamination OCD the fear is of acquiring one, and the compulsions are directed at prevention rather than at detection."],
    ["What must never be assumed once health anxiety is diagnosed?","That any new or changed symptom is part of the disorder. Health anxiety and genuine undiagnosed disease can coexist, and a change in the symptom pattern warrants fresh clinical assessment rather than fresh reassurance."]
  ],
  note:[
    "ICD-11 requires several months of preoccupation with excessive health behaviours or maladaptive avoidance.",
    "Cancer, brain tumour, HIV, multiple sclerosis and motor neurone disease are the commonly feared diseases.",
    "Avoidance may replace checking entirely in some presentations.",
    "An insight specifier is provided; with absent insight the differential includes hypochondriacal delusion.",
    "Delusional disorder somatic type involves delusional conviction, often of infestation."
  ],
  refs:["icd11","oyebode","semliaison"] };

TEACH["7.1.6.4"] = { free:false,
  simple:"The treatment is not more tests and it is not less contact. It is a single named doctor, appointments at fixed intervals whether or not there are symptoms, and psychological work on what the sensations are taken to mean.",
  teach:[
    "CBT is the treatment of choice and has the best evidence, with a substantial effect size maintained at follow-up.",
    "The CBT model is shared with the patient explicitly, reframing the problem from is there a disease to why is this worry so persistent and so hard to settle.",
    "Core techniques: identifying catastrophic misinterpretations; behavioural experiments testing the effect of attention on sensation; dropping checking and reassurance seeking; and exposure to illness-related triggers.",
    "The attention experiment is central and powerful: attend deliberately to a body part for two minutes and observe the sensations that appear, demonstrating that attention creates perception rather than detecting pathology.",
    "Reassurance banning, agreed collaboratively and extended to family and to other clinicians, is essential and is the intervention most often omitted.",
    "SSRIs are effective in health anxiety, with evidence for fluoxetine and paroxetine, and are useful particularly where there is comorbid depression or where CBT is refused.",
    "Doses and duration follow OCD rather than depression practice, given the classification and the clinical overlap.",
    "Management within general medicine is often where the work happens: one named consultant, scheduled rather than symptom-triggered appointments, an explicit limit on investigation, and consistent language across the team.",
    "Scheduled appointments break the contingency between symptoms and contact. If contact is only obtainable by reporting symptoms, symptoms will be reported.",
    "Explanations must be positive rather than negative. There is nothing wrong is unhelpful; a positive explanation of how attention, arousal and interpretation generate real symptoms is what the person can use.",
    "Never say it is all in your mind. The symptoms are real; it is the explanation that is wrong.",
    "Group CBT and guided self-help have evidence in mild to moderate presentations and are the low-intensity options in stepped care.",
    "Engagement is the main obstacle, because a psychiatric referral confirms the person's fear of not being believed. Framing the referral as help with the worry rather than with the symptoms improves attendance considerably."
  ],
  cards:[
    ["What is the treatment of choice in health anxiety, and what is its central technique?","Cognitive behavioural therapy, with a substantial effect size maintained at follow-up. The central technique is the behavioural experiment, particularly the attention experiment demonstrating that deliberate attention to a body part generates sensations, showing that attention creates perception rather than detecting pathology."],
    ["How should a health-anxious patient be managed within general medicine?","One named consultant, appointments scheduled at fixed intervals rather than triggered by symptoms, an explicit agreed limit on further investigation, consistent explanatory language across the team, and an agreed limit on reassurance."],
    ["Why are scheduled appointments used?","To break the contingency between reporting symptoms and obtaining medical contact. If contact can only be obtained by reporting symptoms, symptoms will continue to be reported."],
    ["What kind of explanation should be given?","A positive explanation of how attention, physiological arousal and misinterpretation generate genuinely experienced symptoms, rather than a negative statement that nothing is wrong. The symptoms are real; the explanation of them is what is being corrected."]
  ],
  note:[
    "SSRIs are effective, with evidence for fluoxetine and paroxetine, at OCD-style doses and duration.",
    "Reassurance banning must extend to family and to other clinicians.",
    "Never say the symptoms are all in the mind; the symptoms are real.",
    "Group CBT and guided self-help are the low-intensity options.",
    "Framing referral as help with worry rather than with symptoms improves engagement."
  ],
  refs:["nice","semliaison","maudsley"] };

TEACH["7.1.6.5"] = { free:false,
  simple:"Untreated it tends to persist for years and swallow enormous amounts of medical time. Treated, most people improve substantially, which makes the failure to offer treatment the expensive part.",
  teach:[
    "Untreated, the course is typically chronic and fluctuating, with periods of intensification following illness in others, medical news, or new bodily sensations.",
    "Around a third to a half remit substantially over several years without specific treatment, and the remainder run a persistent course.",
    "With CBT, the majority achieve clinically significant improvement, and gains are maintained at follow-up of a year or more.",
    "Poor prognostic factors: longer duration, comorbid personality disorder, comorbid depression, strong conviction with poor insight, high somatosensory amplification, and continued availability of unnecessary investigation.",
    "Good prognostic factors: shorter duration, acute onset following an identifiable precipitant, good insight, and engagement with psychological explanation.",
    "Health service costs are high and are dominated by unnecessary investigation and emergency attendance rather than by mental health treatment.",
    "Iatrogenic harm is a genuine risk: false positive findings, complications of invasive investigation, and consolidation of illness identity through repeated testing.",
    "Functional consequences include work absence, restricted activity through avoidance, and strain on relationships from repeated reassurance demands.",
    "Comorbid depression worsens outcome and raises suicide risk, and should be treated in its own right.",
    "The single most modifiable prognostic factor is the behaviour of the health system around the person."
  ],
  cards:[
    ["Describe the untreated and treated outcome of health anxiety.","Untreated, the course is typically chronic and fluctuating, with roughly a third to a half remitting substantially over several years. With cognitive behavioural therapy the majority achieve clinically significant improvement, maintained at follow-up of a year or more."],
    ["What is the most modifiable prognostic factor?","The behaviour of the health system around the person: whether unnecessary investigation continues, whether explanations are consistent, whether reassurance is repeatedly given, and whether appointments are scheduled rather than symptom-triggered."]
  ],
  note:[
    "Costs are dominated by investigation and emergency attendance, not mental health treatment.",
    "Iatrogenic harm includes false positives and complications of invasive investigation.",
    "Poor insight, long duration and comorbid personality disorder predict worse outcome.",
    "Comorbid depression worsens outcome and raises suicide risk."
  ],
  refs:["semliaison","companion"] };

/* ---------- 7.1.7 SOMATISATION DISORDER ---------- */

TEACH["7.1.7.1"] = { free:true,
  simple:"A large fraction of everyone attending a hospital clinic has symptoms that no disease explains. This is not rare and it is not a diagnosis of exclusion made once a year. It is a substantial part of medicine.",
  teach:[
    "Medically unexplained symptoms account for a very large proportion of secondary care attendances, with figures around a third across medical outpatient clinics.",
    "Rates by specialty are high everywhere: gynaecology, neurology, gastroenterology, cardiology and rheumatology all report figures in the region of a third or more.",
    "Full somatisation disorder as defined in ICD-10, requiring multiple symptoms across systems over years, is uncommon, of the order of 0.1 to 1 per cent.",
    "Subthreshold and abridged somatisation is far commoner, and is where the clinical burden lies.",
    "Female to male ratio is around two to one for the full syndrome, and the disorder typically begins before age thirty.",
    "ICD-11 replaced the somatoform disorders with bodily distress disorder, defined by distressing bodily symptoms with excessive attention directed to them, persisting for several months.",
    "DSM-5 uses somatic symptom disorder, and made a crucial change: the symptoms no longer need to be medically unexplained. The diagnosis rests on disproportionate thoughts, feelings and behaviours about the symptoms.",
    "That change was deliberate. Requiring symptoms to be unexplained made the diagnosis dependent on the limits of current medical knowledge and encouraged endless investigation.",
    "Functional syndromes with high overlap: irritable bowel syndrome, fibromyalgia, chronic fatigue syndrome, non-cardiac chest pain, chronic pelvic pain and temporomandibular disorder. The same patients frequently meet criteria for several.",
    "Health service costs are very high, driven by investigation, repeated referral and inpatient stay, and are several times those of matched controls."
  ],
  cards:[
    ["How did DSM-5 change the approach to somatic symptoms, and why?","Somatic symptom disorder no longer requires symptoms to be medically unexplained. The diagnosis rests on disproportionate and persistent thoughts, feelings and behaviours relating to the symptoms. The change removed the dependence of the diagnosis on the current limits of medical knowledge and reduced the incentive for endless investigation."],
    ["What is bodily distress disorder?","The ICD-11 replacement for the somatoform disorders: distressing bodily symptoms accompanied by excessive attention directed to them, persisting for several months and associated with significant impairment, graded mild, moderate or severe."]
  ],
  note:[
    "Around a third of medical outpatient attendances involve medically unexplained symptoms.",
    "Full ICD-10 somatisation disorder is uncommon at 0.1 to 1 per cent; subthreshold presentations are far commoner.",
    "Female to male ratio is around two to one, with onset before age thirty.",
    "Functional syndromes overlap heavily and the same patients often meet several sets of criteria."
  ],
  refs:["icd11","dsm5","semliaison"] };

TEACH["7.1.7.2"] = { free:false,
  simple:"Distress has to come out somewhere. In cultures and families where saying I am unhappy is not possible or not useful, it comes out as a body that hurts, and the body is not lying.",
  teach:[
    "Predisposing factors: childhood illness experience, childhood adversity including abuse and neglect, parental illness behaviour, and family communication patterns in which physical complaint receives care and emotional complaint does not.",
    "Childhood sexual and physical abuse is over-represented in severe somatisation, particularly in chronic pelvic pain and in functional gastrointestinal disorders.",
    "Precipitating factors: infection, injury, surgery, life events and bereavement. Many functional syndromes begin after a documented physical illness.",
    "Perpetuating factors: illness beliefs, deconditioning through inactivity, sleep disruption, iatrogenic reinforcement, and the practical and financial consequences of the sick role.",
    "The sick role, from Parsons, involves exemption from ordinary obligations and from blame, in exchange for an obligation to seek help and to want to get well. Secondary gain refers to advantages accruing from occupying it.",
    "Secondary gain must be used carefully. It is not the same as malingering, is usually unconscious, and naming it accusingly destroys the therapeutic relationship.",
    "Somatosensory amplification, alexithymia and negative affectivity are the trait-level contributors.",
    "Central sensitisation provides a genuine physiological account for many functional syndromes: amplification within the central nervous system independent of ongoing peripheral input, demonstrable in fibromyalgia and irritable bowel syndrome.",
    "HPA axis dysregulation and altered autonomic function are demonstrable in several functional syndromes, and these are not disorders without biology.",
    "The predictive processing account is now influential: symptoms arise from strong prior expectations about bodily state overriding sensory input. It explains why symptoms are real and why they do not require peripheral pathology.",
    "Cultural factors: somatic presentation of emotional distress is the global norm, and psychologising is characteristic of educated Western populations. Somatisation is not a deficit of insight.",
    "Iatrogenesis is a major perpetuating factor. Ambiguous investigation findings, contradictory explanations, and referral onwards without a formulation all consolidate the disorder.",
    "The single most useful shift in explanation is from a dualist model, where the symptom is either physical or psychological, to a model in which the symptom is always both."
  ],
  cards:[
    ["Explain the predictive processing account of functional symptoms.","That perception arises from the brain's prior expectations updated by sensory input. Where priors about bodily state are unusually strong or precise, they dominate the sensory evidence, generating genuinely experienced symptoms without peripheral pathology. It explains why the symptoms are real and why they do not require a lesion."],
    ["What is the sick role and how should secondary gain be understood?","Parsons' concept: exemption from ordinary social obligations and from blame for the condition, in exchange for an obligation to seek competent help and to want to recover. Secondary gain refers to advantages accruing from occupying that role. It is usually unconscious, is distinct from malingering, and naming it accusingly destroys the therapeutic relationship."],
    ["What is central sensitisation and where is it demonstrated?","Amplification of sensory processing within the central nervous system, independent of ongoing peripheral input, demonstrated in fibromyalgia, irritable bowel syndrome and other functional pain syndromes. It provides a genuine physiological basis for these disorders."],
    ["Name the predisposing, precipitating and perpetuating factors in somatisation.","Predisposing: childhood illness experience, childhood adversity and abuse, parental illness behaviour, family communication patterns. Precipitating: infection, injury, surgery, life events, bereavement. Perpetuating: illness beliefs, deconditioning, sleep disruption, iatrogenic reinforcement and the consequences of the sick role."]
  ],
  note:[
    "Childhood sexual and physical abuse is over-represented in severe somatisation.",
    "Many functional syndromes begin after a documented physical illness.",
    "Alexithymia, somatosensory amplification and negative affectivity are trait contributors.",
    "Somatic presentation of distress is the global norm, not a deficit of insight.",
    "The useful shift is from a dualist model to one in which the symptom is always both physical and psychological."
  ],
  refs:["semliaison","bhugra","companion"] };

TEACH["7.1.7.3"] = { free:false,
  simple:"The person has a long history, a thick file, several specialties involved, and no diagnosis that has stuck. That pattern is itself the diagnostic information, and it is visible before the first question is asked.",
  teach:[
    "The classical picture: multiple symptoms across multiple organ systems, over years, beginning before age thirty, with a long history of consultation and investigation and no adequate physical explanation.",
    "Symptom clusters classically span gastrointestinal, pain, sexual and pseudoneurological domains, and the multiplicity across systems is more informative than any single symptom.",
    "The history has a characteristic shape: dramatic and vague description, difficulty giving a timeline, symptoms described in extremes, and previous doctors described as either wonderful or useless.",
    "Idealisation and devaluation of clinicians is common and predicts a difficult course, and splitting between team members is a practical hazard.",
    "Briquet's syndrome is the historical name for the severe polysymptomatic form, and the term still appears in examination material.",
    "ICD-11 bodily distress disorder requires bodily symptoms that are distressing, with excessive attention directed to them that is not alleviated by appropriate clinical examination and reassurance, over several months, with severity graded.",
    "DSM-5 somatic symptom disorder requires one or more distressing somatic symptoms with disproportionate and persistent thoughts about their seriousness, persistently high anxiety about health, or excessive time and energy devoted to them, for over six months.",
    "Conversion, or functional neurological, symptoms are classified separately: dissociative neurological symptom disorder in ICD-11, functional neurological symptom disorder in DSM-5. These are covered under 7.1.8.",
    "Factitious disorder is distinguished by intentional production of symptoms to assume the sick role without external incentive; malingering by intentional production for external incentive. Both are distinct from somatisation, in which symptoms are not intentionally produced.",
    "The examination should be conducted properly and once, with positive findings sought rather than absence of findings documented.",
    "Comorbidity is very high: depression, anxiety disorders, personality disorder and substance misuse, and comorbid depression is the most treatable component.",
    "Do not diagnose by exclusion alone. Positive features are required: the characteristic pattern, the attentional and behavioural response, and the disproportionate preoccupation.",
    "A small proportion of patients labelled with functional disorder are later found to have a physical illness, so the diagnosis should be held with appropriate humility and reviewed if the pattern changes."
  ],
  cards:[
    ["What are the diagnostic requirements of DSM-5 somatic symptom disorder?","One or more distressing somatic symptoms, accompanied by disproportionate and persistent thoughts about their seriousness, persistently high anxiety about health, or excessive time and energy devoted to them, persisting for more than six months. The symptoms need not be medically unexplained."],
    ["Distinguish somatisation from factitious disorder and malingering.","In somatisation the symptoms are not intentionally produced. In factitious disorder they are intentionally produced or feigned in order to assume the sick role, with no external incentive. In malingering they are intentionally produced for an identifiable external incentive."],
    ["What is Briquet's syndrome?","The historical term for the severe polysymptomatic form of somatisation disorder, with multiple symptoms across gastrointestinal, pain, sexual and pseudoneurological domains beginning before age thirty."],
    ["Why must somatisation not be diagnosed by exclusion alone?","Because a diagnosis of exclusion depends on the limits of current investigation and offers the patient nothing. Positive features are required: the characteristic multisystem pattern, the disproportionate attentional and behavioural response, and the preoccupation. A proportion of patients so labelled are later found to have physical illness, so the diagnosis is held with humility and reviewed if the pattern changes."]
  ],
  note:[
    "Multiplicity across organ systems is more informative than any single symptom.",
    "Idealisation and devaluation of clinicians predicts a difficult course and produces team splitting.",
    "Conversion symptoms are classified separately as dissociative or functional neurological disorder.",
    "Comorbid depression is the most treatable component.",
    "Examine properly and once, seeking positive findings rather than documenting absence."
  ],
  refs:["icd11","dsm5","semliaison"] };

TEACH["7.1.7.4"] = { free:false,
  simple:"The aim is not to cure the symptoms. The aim is to stop the damage the system is doing, keep the person functioning, and treat the depression underneath. Damage limitation is a legitimate and skilled clinical goal.",
  teach:[
    "The primary intervention is management of the health system's behaviour: one named coordinating clinician, usually the general practitioner, with a clear plan shared across all involved services.",
    "Scheduled appointments at fixed intervals rather than symptom-triggered contact, so that contact is not contingent on new symptoms.",
    "An explicit agreed limit on further investigation, with a stated rationale, and referral onwards only for a defined question.",
    "Do not investigate to reassure. Normal results reassure briefly and consolidate the search, and abnormal incidental findings are actively harmful.",
    "The explanation given must be positive and mechanistic: how attention, arousal, deconditioning, sleep disruption and interpretation produce real symptoms, rather than a statement that nothing is wrong.",
    "Reattribution, from Goldberg and colleagues, is the three-stage primary care approach: feeling understood, broadening the agenda, and making the link between symptoms and psychosocial context.",
    "Feeling understood comes first and cannot be skipped. A person who does not believe they have been taken seriously will not accept any explanation offered afterwards.",
    "CBT has the best evidence in somatoform disorders, targeting symptom-focused attention, illness beliefs, avoidance and activity patterns.",
    "Graded activity is central where deconditioning and boom-and-bust activity patterns are present, aiming for consistent achievable activity rather than symptom-contingent activity.",
    "Antidepressants have evidence in somatoform disorders independent of any effect on depression, with tricyclics and SNRIs having the better evidence, consistent with the pain literature.",
    "Treat comorbid depression and anxiety properly, since they are the most treatable elements and improve both symptoms and function.",
    "Avoid opioids and benzodiazepines. Both entrench the disorder and add dependence to it.",
    "Set functional rather than symptomatic goals. Asking what would you be doing if the symptoms were less of a problem produces workable targets; asking about pain scores does not.",
    "Involve the family, since accommodation and solicitous responding maintain disability in the same way that family accommodation maintains OCD.",
    "Liaison psychiatry input is most effective delivered in the medical setting rather than by referral to a psychiatric clinic, which the person frequently experiences as rejection."
  ],
  cards:[
    ["Describe the reattribution model.","Goldberg's three-stage primary care approach: first ensuring the person feels understood through proper history and examination, then broadening the agenda to include mood and psychosocial factors, then making the link between the physical symptoms and that context. The first stage cannot be skipped."],
    ["Why should investigation not be used to reassure?","Because normal results provide only brief reassurance and consolidate the search for an answer, while incidental abnormal findings cause active harm through further investigation and confirmation of illness identity."],
    ["What kind of treatment goals should be set?","Functional rather than symptomatic goals. Asking what the person would be doing if the symptoms were less of a problem produces workable targets, whereas targeting symptom scores sets an aim that may not be achievable and defines treatment as failing."],
    ["Which medications have evidence in somatoform disorders, and which should be avoided?","Antidepressants have evidence independent of any effect on depression, with tricyclics and SNRIs better supported, consistent with the neuropathic pain literature. Opioids and benzodiazepines should be avoided, as both entrench the disorder and add dependence."]
  ],
  note:[
    "One named coordinating clinician with a plan shared across all services is the primary intervention.",
    "Graded activity addresses deconditioning and boom-and-bust patterns.",
    "Family accommodation maintains disability as it does in OCD.",
    "Liaison input delivered in the medical setting is better received than psychiatric clinic referral.",
    "Explanations must be positive and mechanistic, never a statement that nothing is wrong."
  ],
  refs:["semliaison","nice","maudsley"] };

TEACH["7.1.7.5"] = { free:false,
  simple:"Some people recover completely, particularly if the problem is caught early. The ones who have been through years of investigation rarely do, which is an argument for getting this right the first time rather than the fifth.",
  teach:[
    "Prognosis correlates strongly with duration. Recent-onset functional symptoms have good outcomes; symptoms established over years rarely resolve completely.",
    "Around half of patients with functional symptoms in secondary care are improved at one year, with substantial variation by syndrome and by setting.",
    "Full somatisation disorder of the classical polysymptomatic type has a poor prognosis, with a chronic fluctuating course over decades.",
    "Poor prognostic factors: longer duration, greater number of symptoms, comorbid personality disorder, ongoing litigation or benefit claim, strong conviction of physical cause, and continued investigation.",
    "Good prognostic factors: short duration, single symptom, identifiable precipitant, absence of comorbid personality disorder, acceptance of a psychological component, and engagement with graded activity.",
    "Functional neurological symptoms specifically: outcome is poorer than the classical teaching suggested, with the majority still symptomatic at follow-up, and duration of symptoms before diagnosis being the strongest predictor.",
    "Slater's 1965 study claiming that a third of patients with conversion later developed neurological disease is widely quoted and has been superseded. Modern studies with better imaging show misdiagnosis rates of a few per cent, comparable with other neurological diagnoses.",
    "Correcting the Slater figure matters clinically, because fear of misdiagnosis drives repeated investigation which itself worsens outcome.",
    "Mortality is raised, partly through comorbid depression and suicide and partly through the complications of unnecessary investigation and intervention.",
    "Iatrogenic harm accumulates over the course: unnecessary surgery, adverse drug effects, opioid dependence and radiation exposure from repeated imaging.",
    "Health economic burden persists and is dominated by acute service use, so early effective management is cost-saving as well as clinically preferable."
  ],
  cards:[
    ["What is the status of Slater's finding on misdiagnosis in conversion disorder?","Slater's 1965 report that a third of patients later developed neurological disease has been superseded. Modern studies with contemporary imaging show misdiagnosis rates of a few per cent, comparable with other neurological diagnoses. The correction matters because fear of misdiagnosis drives repeated investigation, which worsens outcome."],
    ["What most strongly determines prognosis in functional and somatoform disorders?","Duration of symptoms before effective management. Recent-onset symptoms have good outcomes; symptoms established over years rarely resolve completely, and duration before diagnosis is the strongest single predictor in functional neurological disorder."]
  ],
  note:[
    "Around half of secondary care patients with functional symptoms are improved at one year.",
    "Classical polysymptomatic somatisation disorder has a chronic course over decades.",
    "Ongoing litigation or benefit claim predicts poorer outcome.",
    "Iatrogenic harm accumulates: unnecessary surgery, opioid dependence, radiation exposure.",
    "Early effective management is cost-saving as well as clinically preferable."
  ],
  refs:["semliaison","companion"] };

/* ---------- 7.1.8 DISSOCIATIVE DISORDERS ---------- */

TEACH["7.1.8.1"] = { free:true,
  simple:"Dissociation is the mind disconnecting parts of experience that normally hang together. Almost everybody does it mildly. A small number of people do it severely, and this is the most contested territory in psychiatry.",
  teach:[
    "Transient dissociative experience is common in the general population: absorption, highway hypnosis, and depersonalisation during stress or fatigue.",
    "Depersonalisation-derealisation disorder has a lifetime prevalence of around 1 to 2 per cent, and is substantially under-recognised.",
    "Dissociative amnesia is uncommon in the general population but is over-represented in the aftermath of trauma and in forensic settings.",
    "Functional neurological symptom disorder, previously conversion disorder, is common: it accounts for a substantial proportion of new neurology outpatient attendances, with figures around 15 per cent, second only to headache in some series.",
    "Non-epileptic attack disorder accounts for a large proportion of referrals to specialist epilepsy services, in the region of 20 to 30 per cent of admissions for refractory seizures.",
    "Dissociative identity disorder prevalence is disputed. Estimates range from around 1 per cent in some community samples to figures that many clinicians regard as implausible, and the diagnosis is applied very unevenly between countries.",
    "The North American and European diagnostic rates for dissociative identity disorder differ substantially, which is itself the strongest argument that diagnostic practice rather than epidemiology is driving the numbers.",
    "Female predominance is marked in dissociative disorders overall, of the order of two to three to one, and is greatest in functional neurological presentations.",
    "Onset is typically in adolescence or early adulthood, and childhood trauma is over-represented across the group.",
    "ICD-11 groups dissociative disorders together, including dissociative neurological symptom disorder, dissociative amnesia, trance disorder, possession trance disorder, dissociative identity disorder, partial dissociative identity disorder and depersonalisation-derealisation disorder."
  ],
  cards:[
    ["How common is functional neurological symptom disorder in neurology clinics?","It accounts for a substantial proportion of new neurology outpatient attendances, around 15 per cent, second only to headache in some series. Non-epileptic attack disorder accounts for roughly 20 to 30 per cent of admissions for apparently refractory seizures."],
    ["Why is the prevalence of dissociative identity disorder contested?","Because diagnostic rates differ substantially between countries, notably between North America and Europe, which suggests that diagnostic practice rather than underlying epidemiology drives the numbers."]
  ],
  note:[
    "Depersonalisation-derealisation disorder has a lifetime prevalence of around 1 to 2 per cent and is under-recognised.",
    "Transient dissociation is common in the general population.",
    "Female predominance is around two to three to one across the group.",
    "ICD-11 includes trance and possession trance disorders within the group.",
    "Childhood trauma is over-represented across the dissociative disorders."
  ],
  refs:["icd11","oyebode","semliaison"] };

TEACH["7.1.8.2"] = { free:false,
  simple:"There are two rival explanations and the argument between them is genuinely unresolved. One says these conditions are caused by trauma. The other says they are caused by suggestion, including by clinicians. The evidence does not settle it cleanly.",
  teach:[
    "Janet introduced dissociation, proposing that overwhelming experience produces a splitting of consciousness into separate streams unavailable to each other.",
    "Freud's account of conversion proposed that unacceptable impulses are repressed and converted into physical symptoms, with primary gain being reduction of intrapsychic conflict and secondary gain the external advantages.",
    "The trauma model, the dominant clinical account, holds that severe childhood trauma, particularly repeated sexual and physical abuse with disorganised attachment, produces chronic dissociation as a defence.",
    "The sociocognitive or fantasy model, associated with Spanos, Lilienfeld and Merckelbach, holds that dissociative identity disorder in particular is a socially constructed presentation shaped by cultural expectation, media portrayal, suggestive therapy and role enactment.",
    "The evidence for each: the trauma model is supported by high rates of reported childhood abuse; the sociocognitive model by the historical epidemic following particular publications and films, the geographic variation, the increase in alter numbers during therapy, and the demonstrable creation of dissociative phenomena by suggestion.",
    "The honest position is that both processes probably operate, that trauma is genuinely over-represented, and that iatrogenic amplification is a demonstrated risk. Teaching either side as settled is inaccurate.",
    "Recovered memory: memory is reconstructive, not a recording. Loftus's work demonstrated the implantation of detailed false memories under suggestive conditions, and the false memory controversy of the 1990s remains the cautionary case.",
    "Suggestive techniques, including hypnosis for memory recovery, guided imagery for abuse recall, and repeated leading questioning, are not appropriate methods for establishing whether abuse occurred.",
    "Neurobiology of functional neurological symptoms: imaging shows abnormal connectivity involving the temporoparietal junction, which supports agency attribution, and hyperactivity in limbic regions with altered connectivity to motor areas.",
    "The current mechanistic account of functional neurological disorder involves abnormally precise prior expectations about the body combined with abnormal allocation of attention, producing symptoms that are genuinely involuntary.",
    "The involuntary nature is central. Functional symptoms are not feigned, and the imaging findings distinguish them from feigning.",
    "Predisposing factors: childhood adversity, previous illness experience, personality factors and prior neurological disease. Precipitating: physical injury, panic attack, illness, or life event. Perpetuating: illness beliefs, avoidance, deconditioning and iatrogenic factors.",
    "Panic is a frequent precipitant of functional neurological symptoms, and dissociation during panic is a common route into a persisting functional presentation."
  ],
  cards:[
    ["Contrast the trauma model and the sociocognitive model of dissociative identity disorder.","The trauma model holds that severe repeated childhood trauma with disorganised attachment produces chronic dissociation as a defence, supported by high rates of reported abuse. The sociocognitive model holds that the presentation is shaped by cultural expectation, media portrayal, suggestive therapy and role enactment, supported by the historical epidemic following particular publications, marked geographic variation, and increases in alter numbers during therapy."],
    ["What does Loftus's work demonstrate, and why does it matter?","That detailed and confidently held false memories can be implanted under suggestive conditions, because memory is reconstructive rather than a recording. It means that hypnosis, guided imagery and repeated leading questioning are not appropriate methods for establishing whether abuse occurred."],
    ["Summarise the current mechanistic account of functional neurological disorder.","Abnormally precise prior expectations about bodily state, combined with abnormal allocation of attention to the affected function, generating symptoms that are genuinely involuntary. Imaging shows altered connectivity involving the temporoparietal junction, which underpins the sense of agency, distinguishing these symptoms from feigning."],
    ["Distinguish primary from secondary gain in the classical account.","Primary gain is the reduction of intrapsychic conflict achieved by converting the unacceptable impulse into a physical symptom. Secondary gain refers to the external advantages that follow from having the symptom."]
  ],
  note:[
    "Janet introduced dissociation as a splitting of consciousness following overwhelming experience.",
    "Both trauma and iatrogenic amplification probably operate; neither account is settled.",
    "Panic is a frequent precipitant of persisting functional neurological symptoms.",
    "Functional symptoms are involuntary and are not feigned.",
    "The false memory controversy of the 1990s remains the cautionary case."
  ],
  refs:["oyebode","semliaison","companion"] };

TEACH["7.1.8.3"] = { free:true,
  simple:"The diagnosis is made on positive signs, not on the absence of disease. A functional weakness behaves differently from a neurological one, and the difference can be demonstrated at the bedside in a minute.",
  teach:[
    "Depersonalisation is the experience of detachment from oneself, as if observing from outside, with feelings of unreality about the self. Derealisation is the same detachment applied to surroundings.",
    "Both occur with intact reality testing. The person knows it feels as if, which distinguishes them from psychosis and is the key discrimination.",
    "Dissociative amnesia is inability to recall important autobiographical information, usually of a traumatic or stressful nature, inconsistent with ordinary forgetting.",
    "Dissociative fugue involves purposeful travel or wandering with amnesia for identity or for personal history. ICD-11 treats it as a specifier of dissociative amnesia rather than a separate disorder.",
    "Dissociative identity disorder involves disruption of identity with two or more distinct personality states, with recurrent gaps in recall of everyday events, and marked discontinuity in sense of self and agency.",
    "ICD-11 adds partial dissociative identity disorder, where non-dominant personality states do not recurrently take executive control.",
    "Functional neurological symptom disorder presents with motor or sensory symptoms incompatible with recognised neurological disease, and requires positive clinical signs.",
    "Hoover's sign: weakness of voluntary hip extension with normal involuntary hip extension when the opposite hip is flexed against resistance. It is the classic positive sign for functional leg weakness.",
    "Other positive signs: the give-way or collapsing weakness pattern; drift without pronation in functional arm weakness; the tremor entrainment test, in which a functional tremor entrains to or stops during an externally paced rhythmic movement; and inconsistent findings between formal testing and spontaneous movement.",
    "Non-epileptic attacks: gradual onset, prolonged duration often exceeding two minutes, closed eyes with active resistance to opening, side-to-side head or body movement, pelvic thrusting, waxing and waning course, ictal crying, and preserved awareness during bilateral motor activity.",
    "Absence of postictal confusion, absence of tongue biting on the lateral tongue, and a normal serum prolactin at the appropriate interval support a non-epileptic attack, though none is definitive alone.",
    "La belle indifférence, the apparent lack of concern about a dramatic deficit, is unreliable and should not be used diagnostically. It occurs in organic disease and is absent in most functional presentations.",
    "Trance and possession trance disorders involve narrowing of awareness with stereotyped behaviours experienced as controlled by an external agent, and must be distinguished from culturally sanctioned religious practice, which is not a disorder.",
    "The diagnosis should be given clearly and positively. Telling the person the scan is normal without giving a diagnosis is the commonest and most damaging clinical failure in this area.",
    "Explain the mechanism: the hardware is intact and the software is not running the command correctly, which is a real and treatable problem."
  ],
  cards:[
    ["Describe Hoover's sign.","Weakness of voluntary hip extension on the affected side, with normal involuntary hip extension detected when the opposite hip is flexed against resistance. It is the classic positive sign of functional leg weakness."],
    ["Which features distinguish non-epileptic attacks from epileptic seizures?","Gradual onset, prolonged duration often exceeding two minutes, closed eyes with active resistance to opening, side-to-side head or body movement, pelvic thrusting, waxing and waning course, ictal crying, and preserved awareness during bilateral motor activity. Absence of postictal confusion and of lateral tongue biting supports the diagnosis, though no single feature is definitive."],
    ["What distinguishes depersonalisation from psychosis?","Intact reality testing. The person experiences the detachment as if it were unreal while knowing that it is not, using as if language. In psychosis the conviction is held as fact."],
    ["What is the status of la belle indifférence?","Unreliable and not to be used diagnostically. It occurs in organic neurological disease and is absent in the majority of functional presentations."],
    ["What is the tremor entrainment test?","A functional tremor will entrain to the frequency of, or stop during, an externally paced rhythmic movement performed with the contralateral limb, whereas an organic tremor will not."]
  ],
  note:[
    "ICD-11 treats fugue as a specifier of dissociative amnesia.",
    "Partial dissociative identity disorder is new in ICD-11.",
    "Diagnosis rests on positive signs, not on the absence of disease.",
    "Culturally sanctioned trance practice is not a disorder.",
    "Telling a person only that the scan is normal, without giving a diagnosis, is the commonest clinical failure here."
  ],
  refs:["oyebode","icd11","oxneuropsy"] };

TEACH["7.1.8.4"] = { free:false,
  simple:"For functional neurological symptoms the most powerful treatment is the explanation. A person who understands what is wrong, believes it is real, and believes it can change, is already improving before therapy starts.",
  teach:[
    "The explanation is the intervention, not the preamble to it. Diagnosis delivered clearly, positively and with a mechanism predicts outcome in functional neurological disorder.",
    "Demonstrate the positive sign to the person. Showing them Hoover's sign, and explaining that it proves the pathway works, is more convincing than any amount of assertion.",
    "Say the diagnosis by name, say it is common, say it is real, say it is not their fault, and say it can improve. Missing any of those five is where the explanation usually fails.",
    "Physiotherapy specifically adapted for functional motor symptoms is first-line, focusing on retraining automatic movement, distraction from the affected part, and avoiding attention to the symptom during exercise.",
    "The physiotherapy principle is distinctive: draw attention away from the limb rather than towards it, because attention is part of the mechanism.",
    "CBT has evidence in functional neurological disorder and in non-epileptic attack disorder, targeting illness beliefs, avoidance, arousal and the panic or dissociation that often precedes attacks.",
    "The CODES trial in non-epileptic attack disorder found that CBT did not reduce monthly seizure frequency, the primary outcome, but improved several secondary outcomes including psychosocial functioning and self-rated health.",
    "That result must be reported accurately: it is a negative trial on its primary outcome with positive secondary findings, not a straightforward endorsement.",
    "Multidisciplinary treatment combining physiotherapy, occupational therapy, psychology and psychiatry has the best outcomes in complex presentations.",
    "Treat comorbid depression, anxiety and panic, which are common and are frequently the driver, particularly where attacks are preceded by panic symptoms.",
    "Antidepressants have no specific effect on functional symptoms themselves but treat the comorbidity effectively.",
    "Depersonalisation-derealisation disorder: evidence is limited. Options include CBT adapted for the disorder, SSRIs where there is comorbid anxiety or depression, and lamotrigine, which has some supporting evidence in combination.",
    "Dissociative identity disorder: the phase-oriented approach of safety and stabilisation, then trauma processing, then integration, is the consensus expert model, though the evidence base is weak and consists largely of uncontrolled studies.",
    "Do not use hypnosis or suggestive techniques to recover memories. The therapeutic task is management of present symptoms and functioning, not archaeology.",
    "Iatrogenic harm is a real risk in dissociative identity disorder treatment, including the elaboration of the presentation through therapeutic attention to alters.",
    "Avoid diagnostic labels that imply feigning, avoid the word hysterical, and avoid saying there is nothing wrong. Each of these predicts disengagement and worse outcome."
  ],
  cards:[
    ["What are the five elements of an effective explanation in functional neurological disorder?","Name the diagnosis; state that it is common; state that the symptoms are real; state that it is not the person's fault; and state that it can improve. Demonstrating the positive clinical sign to the person makes the explanation convincing."],
    ["What did the CODES trial find?","That cognitive behavioural therapy for dissociative non-epileptic seizures did not reduce monthly seizure frequency, its primary outcome, but did improve several secondary outcomes including psychosocial functioning and self-rated health. It is a negative trial on its primary endpoint."],
    ["What is distinctive about physiotherapy for functional motor symptoms?","Attention is deliberately drawn away from the affected limb rather than towards it, because attentional focus is part of the symptom mechanism. Treatment retrains automatic rather than consciously attended movement."],
    ["What is the consensus approach in dissociative identity disorder, and what is its evidence base?","A phase-oriented approach of safety and stabilisation, then trauma processing, then integration. The evidence base is weak and consists largely of uncontrolled studies, and iatrogenic elaboration of the presentation through therapeutic attention to alters is a recognised risk."]
  ],
  note:[
    "The explanation is the intervention, not the preamble to it.",
    "Antidepressants treat comorbidity but have no specific effect on functional symptoms.",
    "Lamotrigine has some supporting evidence in depersonalisation-derealisation disorder.",
    "Hypnosis and suggestive memory recovery techniques must not be used.",
    "The words hysterical and nothing wrong predict disengagement and worse outcome."
  ],
  refs:["nice","oxneuropsy","semliaison"] };

TEACH["7.1.8.5"] = { free:false,
  simple:"Outcome is much worse than the textbooks used to say. The old teaching that conversion symptoms clear up on their own came from short follow-up and wishful thinking.",
  teach:[
    "The classical teaching that acute conversion symptoms remit spontaneously applies mainly to symptoms of very short duration with an obvious precipitant.",
    "Long-term follow-up of functional neurological disorder shows that the majority remain symptomatic. Studies with follow-up of a decade or more find persistent symptoms in a substantial majority.",
    "Duration of symptoms before diagnosis is the strongest predictor of outcome, which makes early recognition the most consequential clinical action.",
    "Good prognostic factors: short duration, acute onset with an identifiable precipitant, younger age, absence of comorbid personality disorder, acceptance of the diagnosis, and absence of ongoing litigation or benefit claim.",
    "Poor prognostic factors: long duration, insidious onset, comorbid personality disorder, comorbid chronic pain or fatigue, ongoing litigation, receipt of disability benefit, and rejection of the diagnosis.",
    "Acceptance of the diagnosis is itself a predictor, which is why the explanation matters so much therapeutically.",
    "Non-epileptic attack disorder: around a quarter to a half become attack-free, but many remain disabled by comorbid symptoms, and employment outcomes are poor even in those whose attacks stop.",
    "Iatrogenic harm accumulates before diagnosis: unnecessary antiepileptic drugs, intubation for pseudostatus, repeated admission, and radiation exposure.",
    "Pseudostatus, treated as status epilepticus with escalating anaesthesia and intubation, is a recognised and serious iatrogenic hazard.",
    "Depersonalisation-derealisation disorder tends to be chronic, and the delay to diagnosis is often many years.",
    "Dissociative amnesia following a discrete event usually resolves, often abruptly, whereas chronic generalised amnesia is rare and has a poorer outcome.",
    "Mortality is raised in functional neurological disorder, comparable in some studies to that of the neurological conditions it mimics, driven by comorbidity, suicide and iatrogenic complications.",
    "The disability associated with functional neurological disorder is comparable to that of the organic conditions it resembles, and this fact should be given to anyone who regards these presentations as trivial."
  ],
  cards:[
    ["What is the long-term outcome of functional neurological disorder?","Poorer than classical teaching suggested. The majority remain symptomatic at long-term follow-up, and disability is comparable to that of the organic neurological conditions the disorder mimics. Duration before diagnosis is the strongest predictor of outcome."],
    ["What is pseudostatus and why does it matter?","Prolonged non-epileptic attacks treated as status epilepticus, leading to escalating anaesthesia and intubation. It is a recognised and serious iatrogenic hazard of unrecognised non-epileptic attack disorder."],
    ["Which prognostic factor is directly modifiable by the clinician?","Acceptance of the diagnosis, which predicts outcome and depends on how clearly, positively and convincingly the diagnosis and its mechanism are explained."]
  ],
  note:[
    "Spontaneous remission applies mainly to very short duration symptoms with an obvious precipitant.",
    "A quarter to a half of people with non-epileptic attacks become attack-free, but employment outcomes remain poor.",
    "Ongoing litigation and receipt of disability benefit predict worse outcome.",
    "Mortality in functional neurological disorder is raised.",
    "Dissociative amnesia after a discrete event usually resolves, often abruptly."
  ],
  refs:["oxneuropsy","semliaison","companion"] };

/* ---------- 7.1.9 PERSONALITY DISORDERS ---------- */

TEACH["7.1.9.1"] = { free:true,
  simple:"Around one adult in ten meets criteria for a personality disorder, and in psychiatric services the figure is far higher. In prisons and in secure hospitals it is the majority.",
  teach:[
    "Community prevalence of any personality disorder is around 10 per cent, though estimates vary considerably with instrument and threshold.",
    "Prevalence in primary care attenders is around 20 to 30 per cent; in psychiatric outpatients around 40 to 50 per cent; in psychiatric inpatients higher still.",
    "In prison populations, structured assessment finds personality disorder in the majority, with antisocial personality disorder predominating in men.",
    "Borderline personality disorder has a community prevalence of around 1 to 2 per cent, and accounts for a large share of clinical contact, particularly in emergency and crisis settings.",
    "Antisocial personality disorder has a community prevalence of around 1 to 3 per cent, with a marked male predominance of roughly three to one.",
    "The apparent female predominance in borderline personality disorder in clinical samples, roughly three to one, is not found to the same degree in community samples, which suggests a referral and diagnostic bias.",
    "That discrepancy matters clinically. Women presenting with emotional dysregulation are more likely to be given the diagnosis; men with the same presentation are more likely to be labelled antisocial or to be managed in the criminal justice system.",
    "Personality disorder is associated with substantially reduced life expectancy, of the order of one to two decades, driven by suicide, accidents, substance misuse and physical illness.",
    "Comorbidity with axis I disorders is very high and is the usual reason for presentation. Personality disorder worsens the outcome of every comorbid disorder studied.",
    "Diagnosis is under-recorded in UK services, partly because of the stigma attached and partly because clinicians are reluctant to give a diagnosis they believe carries no treatment."
  ],
  cards:[
    ["Give the prevalence of personality disorder across settings.","Around 10 per cent in the community, 20 to 30 per cent in primary care attenders, 40 to 50 per cent in psychiatric outpatients, higher in inpatients, and the majority in prison populations on structured assessment."],
    ["Why is the sex ratio in borderline personality disorder disputed?","Because the marked female predominance of around three to one seen in clinical samples is not found to the same degree in community samples, indicating referral and diagnostic bias. Women presenting with emotional dysregulation are more likely to receive the diagnosis, while men with similar presentations are more often labelled antisocial or managed within the criminal justice system."]
  ],
  note:[
    "Borderline personality disorder has a community prevalence of around 1 to 2 per cent.",
    "Antisocial personality disorder is around 1 to 3 per cent with a male predominance of about three to one.",
    "Life expectancy is reduced by one to two decades.",
    "Personality disorder worsens the outcome of every comorbid disorder studied.",
    "The diagnosis is under-recorded in UK services because of stigma and therapeutic pessimism."
  ],
  refs:["tyrer11","companion","nice"] };

TEACH["7.1.9.2"] = { free:false,
  simple:"Personality is roughly half inherited and half made, and the made half is mostly about what happened when the person was small and frightened. Nothing about that means it cannot change.",
  teach:[
    "Heritability of personality traits is around 40 to 50 per cent, and of personality disorder categories similar, with the balance attributable to non-shared rather than shared environment.",
    "The non-shared environment finding is important: what makes siblings different from each other matters more than what they have in common.",
    "Temperament is the constitutional substrate. Cloninger's model proposes four temperament dimensions, being novelty seeking, harm avoidance, reward dependence and persistence, and three character dimensions, being self-directedness, cooperativeness and self-transcendence.",
    "Low self-directedness and low cooperativeness in Cloninger's model define the presence of personality disorder, with the temperament dimensions determining its type.",
    "The Five Factor Model, being openness, conscientiousness, extraversion, agreeableness and neuroticism, is the best-established trait model and underlies the dimensional systems in ICD-11 and DSM-5.",
    "Attachment: Bowlby's internal working models, and Ainsworth's Strange Situation classifications of secure, insecure-avoidant and insecure-ambivalent, with Main and Solomon adding disorganised attachment.",
    "Disorganised attachment, associated with a frightened or frightening caregiver, is the pattern most strongly associated with later borderline pathology and dissociation.",
    "Childhood adversity is strongly over-represented in borderline personality disorder: sexual abuse, physical abuse, emotional neglect and invalidation. Emotional neglect may be as important as overt abuse and is more often missed.",
    "Linehan's biosocial theory: constitutional emotional vulnerability, characterised by high sensitivity, high reactivity and slow return to baseline, transacting with an invalidating environment, producing pervasive emotion dysregulation.",
    "Fonagy and Bateman's mentalising account: insecure attachment impairs the development of mentalising, which then collapses under attachment-related arousal, producing the interpersonal chaos of borderline personality disorder.",
    "Kernberg's object relations account: identity diffusion, primitive defences dominated by splitting and projective identification, and variably preserved reality testing define borderline personality organisation.",
    "Antisocial personality disorder: strong association with childhood conduct disorder, which is required by DSM-5 criteria; with callous-unemotional traits, which are highly heritable; and with reduced autonomic reactivity and impaired fear conditioning.",
    "Neurobiology in borderline personality disorder: amygdala hyperreactivity, reduced prefrontal regulation, and altered opioid and oxytocin signalling. Findings are group-level and are not diagnostic.",
    "Gene-environment interaction: the MAOA genotype by childhood maltreatment interaction reported by Caspi in 2002 for antisocial behaviour has replicated better than the 5-HTTLPR depression finding, but remains contested.",
    "Adversity is a risk factor and not a requirement. Many people with severe childhood adversity do not develop personality disorder, and some people with personality disorder report no adversity."
  ],
  cards:[
    ["State Linehan's biosocial theory.","That borderline personality disorder arises from the transaction between a constitutional emotional vulnerability, characterised by high sensitivity to emotional stimuli, high reactivity and slow return to baseline, and an invalidating environment which dismisses or punishes the expression of emotion, producing pervasive emotion dysregulation."],
    ["Describe Cloninger's model.","Four temperament dimensions, novelty seeking, harm avoidance, reward dependence and persistence, and three character dimensions, self-directedness, cooperativeness and self-transcendence. Low self-directedness and low cooperativeness define the presence of personality disorder, while the temperament dimensions determine its type."],
    ["Which attachment pattern is most associated with borderline pathology?","Disorganised attachment, arising from a caregiver who is simultaneously the source of comfort and of fear, which is most strongly associated with later borderline pathology and dissociation."],
    ["Summarise Kernberg's account of borderline personality organisation.","Identity diffusion, dominance of primitive defences particularly splitting and projective identification, and variably preserved reality testing, distinguishing borderline from neurotic and psychotic levels of personality organisation."],
    ["What is the heritability of personality disorder, and what is notable about the environmental component?","Around 40 to 50 per cent heritable. The environmental contribution is largely non-shared rather than shared, meaning that what differs between siblings within a family matters more than what they have in common."]
  ],
  note:[
    "Emotional neglect may be as important as overt abuse in borderline personality disorder and is more often missed.",
    "Callous-unemotional traits are highly heritable and mark a distinct antisocial subgroup.",
    "The MAOA by maltreatment interaction has replicated better than the 5-HTTLPR finding but remains contested.",
    "Neurobiological findings are group-level and not diagnostic.",
    "Adversity is a risk factor, not a requirement, for personality disorder."
  ],
  refs:["tyrer11","gabbard","gross"] };

TEACH["7.1.9.3"] = { free:true,
  simple:"Personality disorder is not about having difficult traits. Everyone has those. It is about a persistent pattern, present since young adulthood, across situations, that damages the person's relationships and their sense of who they are.",
  teach:[
    "The general criteria matter more than the categories: an enduring pattern of inner experience and behaviour deviating markedly from cultural expectation, pervasive and inflexible across situations, stable and of long duration with onset in adolescence or early adulthood, and leading to distress or impairment.",
    "ICD-11 abolished the categorical subtypes entirely. This is the single most examinable change in personality disorder classification.",
    "The ICD-11 system has three steps: first determine whether personality disorder is present at all; then grade severity as mild, moderate or severe; then optionally specify trait domains.",
    "Severity is graded on the degree of disturbance in self functioning, being identity, self-worth, accuracy of self-view and self-direction, and in interpersonal functioning, being the ability to develop and maintain close and mutually satisfying relationships.",
    "The five ICD-11 trait domain qualifiers: negative affectivity, detachment, dissociality, disinhibition and anankastia. A borderline pattern qualifier was retained separately, largely for pragmatic reasons of continuity of care and research.",
    "The retention of the borderline pattern qualifier was a compromise, criticised by those who wanted full dimensionality and welcomed by those who wanted continuity with the treatment evidence base.",
    "DSM-5 kept the ten categorical diagnoses in the main text and placed an alternative dimensional model in Section III, so both systems have moved dimensionally but at different speeds.",
    "The DSM-5 clusters remain examinable: Cluster A odd or eccentric, comprising paranoid, schizoid and schizotypal; Cluster B dramatic, emotional or erratic, comprising antisocial, borderline, histrionic and narcissistic; Cluster C anxious or fearful, comprising avoidant, dependent and obsessive-compulsive.",
    "Borderline personality disorder features: frantic efforts to avoid abandonment, unstable intense relationships alternating between idealisation and devaluation, identity disturbance, impulsivity, recurrent self-harm or suicidal behaviour, affective instability, chronic emptiness, inappropriate intense anger, and transient stress-related paranoid ideation or dissociation.",
    "Transient psychotic and dissociative phenomena under stress are part of the disorder and do not indicate a psychotic illness.",
    "Antisocial personality disorder features: disregard for and violation of the rights of others, deceitfulness, impulsivity, irritability and aggression, reckless disregard for safety, consistent irresponsibility, and lack of remorse, with evidence of conduct disorder before age fifteen.",
    "Psychopathy is not the same as antisocial personality disorder. The PCL-R construct includes the affective and interpersonal features of callousness, superficial charm, grandiosity and lack of empathy, which the DSM antisocial criteria largely omit.",
    "Schizotypal personality disorder is classified with the schizophrenia spectrum in ICD-11 rather than with personality disorders, reflecting its genetic relationship to schizophrenia.",
    "Assessment requires longitudinal information and collateral history. A single crisis presentation is not a basis for the diagnosis, and diagnosing during an acute episode of another disorder is a recognised error.",
    "Assessment instruments: SCID-5-PD, IPDE, and for screening the Standardised Assessment of Personality Abbreviated Scale, SAPAS, which is eight items."
  ],
  cards:[
    ["Describe the ICD-11 approach to personality disorder.","Three steps. First, determine whether personality disorder is present, using general criteria of disturbance in self and interpersonal functioning persisting over at least two years. Second, grade severity as mild, moderate or severe based on the degree of that disturbance. Third, optionally specify trait domains. The categorical subtypes were abolished, with a borderline pattern qualifier retained as a pragmatic compromise."],
    ["Name the five ICD-11 trait domain qualifiers.","Negative affectivity, detachment, dissociality, disinhibition and anankastia."],
    ["Give the DSM-5 clusters and their members.","Cluster A, odd or eccentric: paranoid, schizoid and schizotypal. Cluster B, dramatic, emotional or erratic: antisocial, borderline, histrionic and narcissistic. Cluster C, anxious or fearful: avoidant, dependent and obsessive-compulsive."],
    ["How does psychopathy differ from antisocial personality disorder?","Psychopathy, as measured by the PCL-R, includes affective and interpersonal features of callousness, superficial charm, grandiosity, shallow affect and lack of empathy, which the DSM antisocial criteria largely omit in favour of behavioural indicators. Most people with psychopathy meet antisocial criteria; most people meeting antisocial criteria are not psychopathic."],
    ["Where is schizotypal personality disorder classified in ICD-11?","Within the schizophrenia and other primary psychotic disorders grouping rather than with the personality disorders, reflecting its genetic and phenomenological relationship to schizophrenia."]
  ],
  note:[
    "Severity in ICD-11 is graded on disturbance of self functioning and of interpersonal functioning.",
    "DSM-5 retained the ten categories in the main text with a dimensional alternative in Section III.",
    "Transient stress-related paranoia and dissociation are part of borderline personality disorder.",
    "Diagnosis requires longitudinal information; diagnosing during an acute episode of another disorder is an error.",
    "SAPAS is an eight-item screening instrument."
  ],
  refs:["icd11","dsm5","tyrer11"] };

TEACH["7.1.9.4"] = { free:false,
  simple:"For a long time the answer was that nothing worked and these patients were untreatable. That was wrong. Structured psychological therapy works, and the drugs, which were the main thing offered, largely do not.",
  teach:[
    "The single most important principle: personality disorder is treatable, and therapeutic nihilism causes measurable harm through exclusion from services.",
    "Structured psychological therapy is the treatment. Several models have randomised evidence, and the common factors across them may matter as much as the specific techniques.",
    "The shared features of effective therapies: a clear theoretical model shared with the patient, structure and consistency, an explicit treatment contract, active rather than passive therapists, attention to the therapeutic relationship, and supervision and support for the therapists.",
    "Dialectical Behaviour Therapy has the largest evidence base in borderline personality disorder, particularly for reducing self-harm, and combines individual therapy, group skills training, telephone coaching and a therapist consultation team.",
    "Mentalisation-Based Treatment has randomised evidence including long-term follow-up showing sustained benefit, and works by restoring mentalising rather than by interpreting content.",
    "Transference-Focused Psychotherapy, from Kernberg's group, and Schema-Focused Therapy, from Young, both have randomised support.",
    "Structured Clinical Management, a well-organised generalist approach without a specialist model, performed comparably to MBT in a randomised comparison. That finding matters: structure and consistency may account for much of the benefit.",
    "Therapeutic communities and democratic therapeutic communities have a longstanding role, particularly in severe presentations.",
    "NICE CG78, borderline personality disorder, is explicit that drugs should not be used for the disorder itself or for its individual symptoms, and that polypharmacy should be avoided.",
    "Drugs may be used for comorbid disorders that are diagnosed in their own right, and short-term sedative use during a crisis should be time-limited, ideally under a week.",
    "In practice this population is heavily and inappropriately medicated, frequently on multiple psychotropics, and reducing that is a legitimate treatment goal.",
    "Antisocial personality disorder, NICE CG77: group-based cognitive and behavioural interventions have modest evidence in offender populations, and medication is not indicated for the disorder itself.",
    "Crisis management: a written crisis plan agreed in advance, brief and purposeful admission only where necessary, and a clear position on the risks of prolonged inpatient care, which can worsen self-harm.",
    "Admission should be short, planned and goal-directed. Prolonged admission is associated with regression, escalation of self-harm and loss of function.",
    "Managing the team is part of treatment. Splitting, strong countertransference reactions and inconsistent responses between staff are predictable and require reflective supervision rather than moral disapproval.",
    "Language matters clinically. Describing behaviour as manipulative or attention seeking predicts worse care, and reframing it as communication of distress with the means available changes what staff do."
  ],
  cards:[
    ["What does NICE say about medication in borderline personality disorder?","That drug treatment should not be used specifically for borderline personality disorder or for its individual symptoms or behaviours, and that polypharmacy should be avoided. Medication may be used for comorbid conditions diagnosed in their own right, and short-term sedative use during crisis should be time-limited, ideally to less than a week."],
    ["What did the comparison of Structured Clinical Management with MBT show?","That a well-organised generalist approach performed comparably to a specialist model, indicating that structure, consistency and coherent organisation of care may account for a large part of the benefit of specialist therapies."],
    ["Name the shared features of effective therapies in personality disorder.","A clear theoretical model shared with the patient; structure and consistency; an explicit treatment contract; active rather than passive therapists; sustained attention to the therapeutic relationship; and adequate supervision and support for the therapists."],
    ["Why should admission be short and planned?","Because prolonged inpatient admission in borderline personality disorder is associated with regression, escalation of self-harm and loss of function. Admission should be brief, planned in advance where possible, and directed at a specific goal."],
    ["Which therapies have randomised evidence in borderline personality disorder?","Dialectical Behaviour Therapy, with the largest evidence base particularly for self-harm; Mentalisation-Based Treatment, with long-term follow-up evidence; Transference-Focused Psychotherapy; Schema-Focused Therapy; and Structured Clinical Management."]
  ],
  note:[
    "Therapeutic nihilism causes measurable harm through exclusion from services.",
    "This population is frequently and inappropriately polymedicated; reduction is a treatment goal.",
    "A written crisis plan agreed in advance is standard practice.",
    "Team splitting and strong countertransference are predictable and require reflective supervision.",
    "Describing behaviour as manipulative predicts worse care."
  ],
  refs:["nice","gabbard","tyrer11"] };

TEACH["7.1.9.5"] = { free:false,
  simple:"The most surprising finding in this field is that borderline personality disorder gets better. Most people no longer meet criteria after ten years. What does not recover as reliably is the ability to work and to hold relationships.",
  teach:[
    "The old assumption of lifelong stability was wrong. Longitudinal studies transformed the picture.",
    "The McLean Study of Adult Development, Zanarini, followed patients for up to two decades. Around 85 per cent achieved symptomatic remission of two years or more, and remission was largely sustained, with low rates of subsequent relapse.",
    "The Collaborative Longitudinal Personality Disorders Study found similar improvement, with substantial reduction in criteria met over time across categories.",
    "Symptomatic remission is common; functional recovery is much less so. Only a minority achieve sustained good social and vocational functioning, and this gap is the central prognostic finding.",
    "Impulsive symptoms remit earliest: self-harm, suicide attempts, substance misuse and promiscuity decline substantially over the first years.",
    "Affective symptoms are the most persistent: chronic emptiness, intolerance of aloneness, abandonment fears and affective instability change least.",
    "Suicide is a real risk. Around 8 to 10 per cent of people with borderline personality disorder die by suicide, and risk is highest earlier in the course and in the presence of comorbid depression and substance misuse.",
    "That figure has been reported from specialist samples and may overstate risk for the diagnosis as a whole, but the risk is substantial by any account.",
    "Excess mortality is also driven by physical illness, accidents and substance misuse, and life expectancy is reduced by one to two decades.",
    "Antisocial personality disorder shows a burnout phenomenon: offending and impulsive behaviour decline substantially from the fourth decade, though interpersonal and affective features persist.",
    "Psychopathy as measured by the PCL-R is more stable over time than antisocial personality disorder, with the affective and interpersonal factor changing least.",
    "Cluster A disorders tend to be stable; Cluster C disorders are stable but respond well to treatment for comorbid anxiety disorders.",
    "Prognostic factors for better outcome in borderline personality disorder: absence of childhood sexual abuse, no family history of substance misuse, good premorbid vocational record, absence of comorbid substance misuse, low neuroticism and high agreeableness.",
    "Comorbid substance misuse is the single most important modifiable factor in prognosis.",
    "The clinical implication is a message of realistic hope: symptoms improve, treatment accelerates it, and the work that matters most long-term is functional, being employment, education and relationships, which needs to start early rather than after symptoms settle."
  ],
  cards:[
    ["What did the McLean Study of Adult Development find?","That around 85 per cent of patients with borderline personality disorder achieved symptomatic remission of two years or more over follow-up of up to two decades, with remission largely sustained and low rates of subsequent relapse. Functional recovery was achieved by a much smaller proportion."],
    ["Which symptoms of borderline personality disorder remit earliest and which persist?","Impulsive symptoms remit earliest, including self-harm, suicide attempts, substance misuse and impulsive risk taking. Affective symptoms are most persistent, particularly chronic emptiness, intolerance of aloneness, abandonment fears and affective instability."],
    ["What is the suicide rate in borderline personality disorder?","Around 8 to 10 per cent in specialist follow-up samples, with risk highest earlier in the course and in the presence of comorbid depression and substance misuse. Life expectancy is reduced by one to two decades overall, with physical illness, accidents and substance misuse contributing alongside suicide."],
    ["What is the burnout phenomenon in antisocial personality disorder?","The substantial decline in offending and impulsive behaviour from around the fourth decade onwards, while the interpersonal and affective features persist. Psychopathy as measured by the PCL-R is more stable over time."]
  ],
  note:[
    "Symptomatic remission is common; functional recovery is much less so.",
    "Comorbid substance misuse is the single most important modifiable prognostic factor.",
    "Cluster C disorders are stable but respond well to treatment for comorbid anxiety.",
    "Functional work on employment and education should start early, not after symptoms settle.",
    "The Collaborative Longitudinal Personality Disorders Study replicated the improvement finding across categories."
  ],
  refs:["tyrer11","companion","nice"] };

/* ---------- 7.1.10 ORGANIC PSYCHOSES ---------- */

TEACH["7.1.10.1"] = { free:true,
  simple:"Psychosis caused by physical disease is far commoner than psychiatrists assume, because most of it is seen and treated on medical wards and never reaches a psychiatric service.",
  teach:[
    "Delirium is the commonest organic psychosis by a wide margin. It affects around 20 per cent of general medical inpatients, over half of hip fracture patients, and the majority of ventilated intensive care patients.",
    "Delirium prevalence rises sharply with age and with pre-existing cognitive impairment, and dementia is the strongest single risk factor.",
    "Delirium is missed in a large proportion of cases, particularly the hypoactive form, which is the commonest presentation in the elderly and carries the worse prognosis.",
    "Psychosis in dementia: psychotic symptoms occur in a large minority across dementias, in around a third of Alzheimer's disease, and in the great majority of dementia with Lewy bodies.",
    "Substance-induced psychosis is common, particularly with stimulants, cannabis, synthetic cannabinoids and alcohol, and accounts for a substantial share of first psychotic presentations in young people.",
    "Psychosis in epilepsy: postictal psychosis affects a small percentage of people with epilepsy, and interictal psychosis a similar proportion, with temporal lobe epilepsy over-represented.",
    "Autoimmune encephalitis, particularly anti-NMDA receptor encephalitis, is rare but is increasingly recognised and is a treatable cause of new psychosis in young people.",
    "Steroid-induced psychiatric disturbance is dose-related and common, occurring in a substantial minority at high doses.",
    "Endocrine causes: thyroid disease, Cushing's syndrome, hyperparathyroidism and hypoglycaemia.",
    "The single most useful epidemiological fact is that first-onset psychosis over the age of forty should raise the index of suspicion for an organic cause substantially."
  ],
  cards:[
    ["How common is delirium in the general hospital?","Around 20 per cent of general medical inpatients, over half of patients admitted with hip fracture, and the majority of ventilated intensive care patients. It is missed in a large proportion of cases, particularly the hypoactive form."],
    ["Which age at onset should raise suspicion of an organic psychosis?","First onset over the age of forty, which substantially raises the probability of an organic cause and warrants thorough physical assessment and investigation."]
  ],
  note:[
    "Dementia is the strongest single risk factor for delirium.",
    "Psychotic symptoms occur in around a third of Alzheimer's disease and the great majority of dementia with Lewy bodies.",
    "Substance-induced psychosis accounts for a substantial share of first presentations in young people.",
    "Temporal lobe epilepsy is over-represented in epilepsy-related psychosis.",
    "Steroid-induced psychiatric disturbance is dose-related."
  ],
  refs:["lishman","semliaison","oxneuropsy"] };

TEACH["7.1.10.2"] = { free:false,
  simple:"There is a long list of physical causes of psychosis and remembering it as a list is useless in an emergency. Remember it as a sequence: what is in the blood, what is in the brain, what is on the drug chart.",
  teach:[
    "A workable structure: metabolic and endocrine; infective and inflammatory; structural and neurological; drug-related and toxic; and nutritional.",
    "Metabolic: hyponatraemia, hypercalcaemia, hypoglycaemia, hepatic and renal failure, hypoxia and hypercapnia.",
    "Hyponatraemia deserves specific attention in psychiatry because it is caused by SSRIs, carbamazepine and psychogenic polydipsia, all common in this population.",
    "Endocrine: hyperthyroidism and hypothyroidism, Cushing's syndrome, Addison's disease, hyperparathyroidism, and phaeochromocytoma.",
    "Infective: encephalitis particularly herpes simplex, meningitis, neurosyphilis, HIV, and systemic sepsis producing delirium without central nervous system involvement.",
    "Autoimmune: anti-NMDA receptor encephalitis, systemic lupus erythematosus with cerebral involvement, and other antibody-mediated encephalitides. The NMDA receptor antibody story is important because the disorder is treatable and typically presents first to psychiatry.",
    "Structural: space-occupying lesions particularly frontal and temporal, stroke, subdural haematoma, hydrocephalus including normal pressure hydrocephalus, and traumatic brain injury.",
    "Neurodegenerative: dementia with Lewy bodies, Alzheimer's disease, frontotemporal dementia, Huntington's disease and Parkinson's disease.",
    "Epilepsy: postictal psychosis after a lucid interval, interictal psychosis, and ictal phenomena in temporal lobe seizures.",
    "Drug-related: stimulants, cannabis and synthetic cannabinoids, hallucinogens, corticosteroids, dopamine agonists, anticholinergics, and withdrawal states from alcohol and benzodiazepines.",
    "Nutritional: thiamine deficiency causing Wernicke's encephalopathy, B12 deficiency, folate deficiency, niacin deficiency causing pellagra, and severe malnutrition.",
    "Genetic and metabolic conditions presenting in adults: Wilson's disease, acute intermittent porphyria, metachromatic leukodystrophy and adrenoleukodystrophy.",
    "Wilson's disease is worth remembering because it is treatable, presents psychiatrically in a substantial proportion, and is missed. Check caeruloplasmin and look for Kayser-Fleischer rings in young-onset psychosis with movement abnormality.",
    "Acute intermittent porphyria: abdominal pain, neuropathy and psychiatric disturbance, precipitated by drugs including barbiturates and by fasting.",
    "The mechanism is generally non-specific: diverse insults converge on disturbance of cortical and subcortical networks, and the final common pathway includes dopaminergic dysregulation as in primary psychosis."
  ],
  cards:[
    ["Give a workable framework for the causes of organic psychosis.","Metabolic and endocrine; infective and inflammatory; structural and neurological; drug-related and toxic; and nutritional. Working through the five categories in order is more reliable in an emergency than recalling a flat list."],
    ["Why is anti-NMDA receptor encephalitis important to psychiatrists?","Because it typically presents first with psychiatric symptoms, is frequently misdiagnosed as a primary psychosis, and is treatable with immunotherapy and removal of an associated tumour where present. Suspect it in a young person with new psychosis plus any neurological feature."],
    ["Which treatable metabolic disorder presents psychiatrically in young people with movement abnormality?","Wilson's disease. Check serum caeruloplasmin and examine for Kayser-Fleischer rings. It is treatable and is frequently missed."],
    ["Why does hyponatraemia deserve particular attention in psychiatry?","Because it is caused by SSRIs, by carbamazepine and by psychogenic polydipsia, all of which are common in psychiatric populations, and it produces confusion, seizures and psychosis."]
  ],
  note:[
    "Herpes simplex encephalitis is the infective cause requiring urgent recognition.",
    "Postictal psychosis follows a lucid interval of hours to days.",
    "Acute intermittent porphyria is precipitated by barbiturates and by fasting.",
    "Nutritional causes include thiamine, B12, folate and niacin deficiency.",
    "Diverse insults converge on dopaminergic dysregulation as in primary psychosis."
  ],
  refs:["lishman","oxneuropsy","semliaison"] };

TEACH["7.1.10.3"] = { free:true,
  simple:"Organic psychosis looks different from schizophrenia in ways you can see at the bedside. Consciousness fluctuates, the hallucinations are visual, the person is disorientated, and it started this week rather than over months.",
  teach:[
    "The cardinal discriminator is disturbance of consciousness. Clouded, fluctuating or impaired consciousness indicates an organic cause; primary psychosis occurs in clear consciousness.",
    "Delirium: acute onset over hours to days, fluctuating course typically worse at night, inattention, disorganised thinking, and altered level of consciousness ranging from hyperalert to drowsy.",
    "Inattention is the core feature of delirium and is what should be tested. Serial sevens, months of the year backwards, or digit span are adequate bedside tests.",
    "Three motor subtypes of delirium: hyperactive, hypoactive and mixed. Hypoactive delirium is the commonest in the elderly, is the most often missed, and carries the worst prognosis.",
    "Hallucinations in delirium are typically visual, vivid and often frightening, frequently of animals or people, and may be Lilliputian, meaning miniature figures.",
    "Delusions in organic states are typically poorly systematised, fleeting, persecutory and changeable, in contrast with the elaborated stable delusions of schizophrenia.",
    "Other organic pointers: disorientation in time and place, fluctuating cognition, focal neurological signs, abnormal vital signs, first onset over forty, atypical or mixed symptoms, and absence of family history.",
    "Peduncular hallucinosis is vivid, often pleasant visual hallucination with retained insight, associated with midbrain and thalamic lesions.",
    "Charles Bonnet syndrome is complex visual hallucination in people with visual impairment, occurring with intact cognition and full insight, and is not a psychosis.",
    "Alcoholic hallucinosis occurs in clear consciousness, is predominantly auditory, and follows heavy drinking, distinguishing it from delirium tremens.",
    "Dementia with Lewy bodies: recurrent well-formed visual hallucinations, fluctuating cognition and attention, spontaneous parkinsonism, and REM sleep behaviour disorder, with severe neuroleptic sensitivity.",
    "Postictal psychosis characteristically follows a cluster of seizures after a lucid interval of hours to days, with prominent affective and religious content, and is self-limiting.",
    "Investigation of new psychosis: full blood count, urea and electrolytes, calcium, liver function, thyroid function, glucose, B12 and folate, inflammatory markers, urine drug screen, syphilis and HIV serology where indicated, and neuroimaging in first episode with atypical features.",
    "EEG is useful where delirium, encephalitis or non-convulsive status is suspected. Diffuse slowing supports an organic cause, and a normal EEG in a floridly disturbed patient argues against delirium.",
    "Lumbar puncture and autoantibody testing where encephalitis is suspected. Do not delay treatment of suspected herpes encephalitis while awaiting results."
  ],
  cards:[
    ["What is the cardinal discriminator between organic and primary psychosis?","Disturbance of consciousness. Clouded, fluctuating or impaired consciousness indicates an organic cause, whereas primary psychosis occurs in clear consciousness."],
    ["Name the three motor subtypes of delirium and state which matters most.","Hyperactive, hypoactive and mixed. Hypoactive delirium is the commonest in older people, is the most frequently missed because the patient is quiet, and carries the worst prognosis."],
    ["How do delusions in organic states differ from those in schizophrenia?","Organic delusions are typically poorly systematised, fleeting, changeable and predominantly persecutory, in contrast with the more elaborated and stable delusional systems of schizophrenia."],
    ["Distinguish Charles Bonnet syndrome, peduncular hallucinosis and alcoholic hallucinosis.","Charles Bonnet syndrome is complex visual hallucination in visual impairment, with intact cognition and full insight. Peduncular hallucinosis is vivid, often pleasant visual hallucination with retained insight, associated with midbrain and thalamic lesions. Alcoholic hallucinosis is predominantly auditory, occurs in clear consciousness after heavy drinking, and is distinct from delirium tremens."],
    ["What investigations are indicated in new-onset psychosis?","Full blood count, urea and electrolytes, calcium, liver and thyroid function, glucose, B12 and folate, inflammatory markers, urine drug screen, and syphilis and HIV serology where indicated, with neuroimaging in first episode with atypical features and EEG where delirium, encephalitis or non-convulsive status is suspected."]
  ],
  note:[
    "Inattention is the core feature of delirium and must be tested directly.",
    "Lilliputian hallucinations of miniature figures occur in delirium.",
    "Dementia with Lewy bodies features severe neuroleptic sensitivity.",
    "Postictal psychosis follows a seizure cluster after a lucid interval and is self-limiting.",
    "Do not delay treatment of suspected herpes encephalitis while awaiting investigation results."
  ],
  refs:["lishman","oyebode","oxneuropsy"] };

TEACH["7.1.10.4"] = { free:false,
  simple:"Treat the cause. That sounds obvious and it is constantly not done, because it is quicker to prescribe an antipsychotic for the agitation than to find out why an eighty-year-old suddenly cannot pay attention.",
  teach:[
    "The primary treatment of any organic psychosis is treatment of the underlying cause. Symptomatic management is supportive and buys time; it is not the treatment.",
    "Delirium: identify and treat the precipitants, which are usually multiple. Infection, dehydration, constipation, urinary retention, pain, hypoxia, electrolyte disturbance, and medication.",
    "Review the drug chart in every case. Anticholinergics, opioids, benzodiazepines, steroids and polypharmacy are among the commonest reversible contributors.",
    "Non-pharmacological management is first-line and effective: reorientation, familiar objects and people, adequate lighting with day-night cues, hearing aids and glasses, early mobilisation, hydration, sleep hygiene and avoidance of ward moves.",
    "The HELP programme, a multicomponent non-pharmacological intervention, reduces incident delirium by around a third, which is better than any drug.",
    "NICE CG103 recommends non-pharmacological management first, with short-term low-dose haloperidol considered only where the person is distressed or at risk and verbal and non-verbal de-escalation is ineffective.",
    "Antipsychotics do not shorten delirium or improve outcome, and may prolong it. They treat distress, not the delirium.",
    "Benzodiazepines worsen delirium except where the cause is alcohol or benzodiazepine withdrawal, where they are the treatment.",
    "Dementia with Lewy bodies: antipsychotics can cause severe and irreversible neuroleptic sensitivity reactions including rigidity, autonomic instability and death. Avoid them; use a cholinesterase inhibitor, which improves both hallucinations and cognition.",
    "Rivastigmine and donepezil are effective for the psychotic and cognitive symptoms of dementia with Lewy bodies, and this is one of the clearest treatment indications in old age psychiatry.",
    "Antipsychotics in dementia generally carry a raised risk of stroke and death, and should be used at the lowest dose for the shortest period, with a documented review date.",
    "Psychosis in Parkinson's disease: reduce dopaminergic medication where possible, then consider quetiapine or clozapine, both of which have the least motor worsening. Pimavanserin is licensed in some jurisdictions.",
    "Postictal psychosis: optimise seizure control, and use short-term antipsychotic or benzodiazepine treatment, since the episode is self-limiting.",
    "Autoimmune encephalitis: immunotherapy with steroids, immunoglobulin or plasma exchange, plus tumour removal where an associated teratoma is found. Antipsychotics are poorly tolerated in this group.",
    "Steroid-induced psychosis: reduce the steroid dose where the physical condition permits, and use an antipsychotic short-term. Lithium has evidence in prophylaxis for those who must continue steroids.",
    "Always explain to families. Delirium is frightening to witness, and telling relatives what it is, that it fluctuates, and that it usually improves, is part of the treatment."
  ],
  cards:[
    ["What is the first-line management of delirium?","Identification and treatment of the underlying causes, which are usually multiple, combined with non-pharmacological measures: reorientation, familiar people and objects, day-night lighting cues, glasses and hearing aids, early mobilisation, hydration, sleep hygiene and avoidance of ward moves."],
    ["What does NICE say about antipsychotics in delirium?","That non-pharmacological management comes first, and that short-term low-dose haloperidol should be considered only where the person is distressed or at risk to themselves or others and verbal and non-verbal de-escalation has been ineffective. Antipsychotics do not shorten delirium or improve its outcome."],
    ["Why must antipsychotics be avoided in dementia with Lewy bodies?","Because of severe neuroleptic sensitivity reactions, which may include marked rigidity, autonomic instability, deterioration in cognition and death. A cholinesterase inhibitor such as rivastigmine or donepezil is the appropriate treatment and improves both hallucinations and cognition."],
    ["How is psychosis in Parkinson's disease managed?","By reducing dopaminergic medication where the motor state permits, then using quetiapine or clozapine, which cause least motor worsening. Pimavanserin is licensed in some jurisdictions."],
    ["When are benzodiazepines appropriate in delirium?","Only where the delirium is due to alcohol or benzodiazepine withdrawal, in which case they are the specific treatment. In other causes they worsen delirium."]
  ],
  note:[
    "The HELP multicomponent programme reduces incident delirium by around a third.",
    "Anticholinergics, opioids, benzodiazepines, steroids and polypharmacy are common reversible contributors.",
    "Antipsychotics in dementia raise the risk of stroke and death.",
    "Lithium has evidence in prophylaxis of recurrent steroid-induced psychiatric disturbance.",
    "Explaining delirium to relatives is part of the treatment."
  ],
  refs:["nice","maudsley","oxoldage"] };

TEACH["7.1.10.5"] = { free:false,
  simple:"Delirium was long regarded as a temporary nuisance that resolves when the infection clears. It does not. People who have had delirium are more likely to die, more likely to end up in a care home, and more likely to develop dementia.",
  teach:[
    "Delirium is an independent predictor of mortality. In-hospital mortality is substantially raised, and the excess persists after discharge and after adjustment for illness severity and comorbidity.",
    "Delirium predicts institutionalisation. A large proportion of older people who develop delirium in hospital do not return to their previous accommodation.",
    "Delirium predicts new dementia and accelerates existing cognitive decline. The relationship is dose-dependent on duration and severity of the delirium episode.",
    "The relationship is bidirectional: dementia is the strongest risk factor for delirium, and delirium accelerates dementia. This is one of the most important findings in old age psychiatry over the last two decades.",
    "Persistent delirium is common and under-recognised. A substantial proportion of patients remain delirious at discharge, and many remain so months later.",
    "Full cognitive recovery is not the rule, and the assumption that delirium resolves completely is not supported.",
    "Distress is substantial and lasting. Many patients recall the delirium, and delusional memories are strongly associated with subsequent PTSD, particularly after intensive care.",
    "Post-intensive care PTSD is specifically associated with delusional memories from the admission rather than with factual recall of events.",
    "Substance-induced psychosis: a substantial minority, of the order of a quarter, subsequently receive a diagnosis of schizophrenia, with the conversion rate highest for cannabis-induced psychosis and for younger age at presentation.",
    "That conversion figure should change practice: a person diagnosed with substance-induced psychosis needs follow-up, not discharge.",
    "Postictal psychosis is self-limiting and resolves within days to weeks, but recurs in a majority and can progress to interictal psychosis over time.",
    "Autoimmune encephalitis has a good prognosis with early treatment, and a poor one with delayed treatment, which makes early recognition the determining factor.",
    "Prevention is more effective than treatment. Multicomponent prevention programmes reduce incidence by around a third, and no treatment achieves anything comparable."
  ],
  cards:[
    ["What are the long-term consequences of delirium?","Raised mortality persisting after discharge and after adjustment for illness severity; increased institutionalisation; new dementia and acceleration of existing cognitive decline in a dose-dependent relationship with delirium duration and severity; persistent delirium at and beyond discharge; and lasting psychological distress including PTSD."],
    ["What proportion of people with substance-induced psychosis later receive a diagnosis of schizophrenia?","A substantial minority, of the order of a quarter, with the highest conversion rates following cannabis-induced psychosis and in those presenting at a younger age. This means follow-up rather than discharge is required."],
    ["What is the relationship between delirium and dementia?","Bidirectional. Dementia is the strongest single risk factor for delirium, and an episode of delirium independently predicts new dementia and accelerates existing cognitive decline in proportion to its duration and severity."]
  ],
  note:[
    "A substantial proportion of patients remain delirious at discharge and months afterwards.",
    "Post-intensive care PTSD is associated with delusional rather than factual memories.",
    "Postictal psychosis is self-limiting but recurs in the majority.",
    "Autoimmune encephalitis outcome depends principally on how early treatment starts.",
    "Multicomponent prevention reduces delirium incidence by around a third, exceeding any treatment effect."
  ],
  refs:["oxoldage","semliaison","lishman"] };

/* ---------- 7.1.11 OTHER PSYCHIATRIC DISORDERS ---------- */

TEACH["7.1.11.1"] = { free:false,
  simple:"This line is the College's catch-all. It covers the disorders that do not fit the other headings: reactions to stress, sleep disorders, impulse control problems and the psychiatric disorders of the elderly that general adult services still see.",
  teach:[
    "Post-traumatic stress disorder: lifetime prevalence around 4 to 8 per cent in Western populations, with twelve-month prevalence around 3 per cent. Rates are far higher in populations exposed to conflict, torture and displacement.",
    "Most people exposed to trauma do not develop PTSD. Conditional risk varies markedly by trauma type: highest after rape and torture, lowest after accidents and natural disasters.",
    "Adjustment disorder is common and under-studied, affecting a substantial proportion of people attending primary care and general hospital services after a stressor.",
    "Insomnia disorder affects around 6 to 10 per cent of adults at diagnostic threshold, with insomnia symptoms in around a third.",
    "Obstructive sleep apnoea affects a substantial proportion of middle-aged adults and is heavily under-diagnosed, and is over-represented in psychiatric populations because of obesity and sedation.",
    "Restless legs syndrome affects around 5 to 10 per cent of adults, is worsened by antidepressants and antipsychotics, and is a common cause of apparent akathisia.",
    "Narcolepsy affects around 1 in 2,000, and its psychiatric relevance lies in misdiagnosis as psychosis when hypnagogic hallucinations are prominent.",
    "Intermittent explosive disorder has a lifetime prevalence of around 2 to 5 per cent, is under-recognised, and is more common in men.",
    "Kleptomania and pyromania are rare, with prevalence well under one per cent, and are diagnosed considerably less often than they are invoked in court.",
    "Premenstrual dysphoric disorder affects around 2 to 5 per cent of menstruating women and is included in both ICD-11 and DSM-5.",
    "Chronic fatigue syndrome or myalgic encephalomyelitis affects around 0.2 to 0.4 per cent, has been a site of sustained conflict between psychiatric and patient organisations, and the 2021 NICE guideline substantially revised previous recommendations."
  ],
  cards:[
    ["What is the conditional risk of PTSD after trauma?","Most people exposed to trauma do not develop PTSD. Conditional risk varies markedly by trauma type, being highest after rape, torture and captivity, and lowest after accidents and natural disasters. Lifetime prevalence is around 4 to 8 per cent in Western populations."],
    ["Which sleep disorders are commonly misattributed in psychiatric practice?","Obstructive sleep apnoea, under-diagnosed and over-represented in psychiatric populations through obesity and sedation; restless legs syndrome, worsened by antidepressants and antipsychotics and commonly mistaken for akathisia; and narcolepsy, whose hypnagogic hallucinations may be misdiagnosed as psychosis."]
  ],
  note:[
    "Adjustment disorder is common and under-studied.",
    "Insomnia disorder affects 6 to 10 per cent of adults at diagnostic threshold.",
    "Intermittent explosive disorder has a lifetime prevalence of 2 to 5 per cent.",
    "Premenstrual dysphoric disorder is included in both ICD-11 and DSM-5.",
    "The 2021 NICE guideline on chronic fatigue syndrome substantially revised earlier recommendations."
  ],
  refs:["icd11","nice","companion"] };

TEACH["7.1.11.2"] = { free:false,
  simple:"Some disorders are defined by what happened to the person rather than by what is wrong with them. Trauma-related disorders are the clearest case, and they are the only diagnoses in psychiatry that name a cause in the definition.",
  teach:[
    "PTSD is unusual in requiring a specified aetiological event, which makes it the only major diagnosis with causation written into the criteria.",
    "Risk factors divide into pretrauma, peritrauma and posttrauma. Peritraumatic and posttraumatic factors are the stronger predictors, which is clinically useful.",
    "Pretrauma factors: female sex, previous psychiatric history, previous trauma, childhood adversity, lower intelligence and lower socioeconomic status.",
    "Peritraumatic factors: severity and duration of the trauma, perceived life threat, peritraumatic dissociation, and interpersonal rather than impersonal trauma.",
    "Posttrauma factors: lack of social support, which is the single strongest predictor in meta-analysis, subsequent life stress, and negative appraisals of the event and of one's own reactions.",
    "The Ehlers and Clark cognitive model: PTSD persists when the person processes the trauma in a way that produces a sense of serious current threat, arising from excessively negative appraisals and from a poorly elaborated, fragmented trauma memory that is inadequately integrated into autobiographical memory.",
    "Fear conditioning models: the trauma is an unconditioned stimulus, cues become conditioned stimuli, and avoidance prevents extinction. Impaired extinction learning is demonstrable in PTSD.",
    "Neurobiology: amygdala hyperreactivity, reduced medial prefrontal regulation, and reduced hippocampal volume. The hippocampal finding is partly a pre-existing vulnerability, shown by the Gilbertson twin study in which the unexposed co-twin also had smaller hippocampi.",
    "That twin study is important because it shows a structural finding can be a risk marker rather than a consequence, which is a general lesson for imaging in psychiatry.",
    "HPA axis findings in PTSD are unusual: cortisol is often low rather than high, with enhanced negative feedback, which distinguishes it from depression.",
    "Adjustment disorder: a maladaptive reaction to an identifiable psychosocial stressor, with preoccupation with the stressor and failure to adapt, arising within a month and, in ICD-11, not persisting beyond six months after the stressor ends.",
    "Sleep disorders: insomnia is maintained by the 3P model of predisposing, precipitating and perpetuating factors, with the perpetuating factors being conditioned arousal, extended time in bed and daytime compensation.",
    "Spielman's 3P model explains why insomnia continues after the original precipitant has gone, and why sleep restriction works.",
    "Impulse control disorders share reduced prefrontal inhibitory control and altered reward processing with the addictions, which is why gambling disorder was reclassified with them."
  ],
  cards:[
    ["What is the single strongest predictor of PTSD after trauma?","Lack of social support afterwards, which is the strongest predictor in meta-analysis. Posttrauma and peritraumatic factors generally predict better than pretrauma factors."],
    ["Summarise the Ehlers and Clark model of PTSD.","That PTSD persists when the trauma is processed in a way that generates a sense of serious current threat, arising from excessively negative appraisals of the event and of one's own reactions, together with a fragmented and poorly elaborated trauma memory that is inadequately integrated into autobiographical memory."],
    ["What did the Gilbertson twin study show, and why does it matter?","That the unexposed identical co-twins of combat veterans with PTSD also had smaller hippocampi, indicating that reduced hippocampal volume is a pre-existing vulnerability marker rather than a consequence of trauma. It is a general lesson about interpreting structural imaging findings in psychiatry."],
    ["Explain Spielman's 3P model of insomnia.","Predisposing traits, a precipitating event, and perpetuating factors comprising conditioned arousal, extended time in bed and daytime compensatory behaviours. It explains why insomnia continues after the original precipitant has resolved, and provides the rationale for sleep restriction therapy."]
  ],
  note:[
    "PTSD is the only major diagnosis with an aetiological event written into the criteria.",
    "Cortisol is often low in PTSD with enhanced negative feedback, unlike in depression.",
    "Interpersonal trauma carries higher conditional risk than impersonal trauma.",
    "ICD-11 adjustment disorder should not persist beyond six months after the stressor ends.",
    "Impulse control disorders share reduced prefrontal inhibition and altered reward processing with addictions."
  ],
  refs:["companion","stahl","icd11"] };

TEACH["7.1.11.3"] = { free:false,
  simple:"The trauma disorders are identified by one thing: the past is not experienced as the past. The memory arrives with the sensory quality and the fear of the original event, as though it were happening now.",
  teach:[
    "ICD-11 PTSD requires three clusters: re-experiencing the event in the here and now, in the form of vivid intrusive memories, flashbacks or nightmares accompanied by fear or horror; deliberate avoidance of reminders; and a persistent sense of current threat with hypervigilance or exaggerated startle.",
    "The ICD-11 formulation is deliberately narrower than DSM-5, which retains four clusters including negative alterations in cognitions and mood.",
    "The here and now quality is the defining feature. Distressing memory alone is not re-experiencing; the sense that it is happening again is.",
    "Complex PTSD in ICD-11 requires the PTSD core plus three disturbances in self-organisation: problems in affect regulation, persistent beliefs about oneself as diminished, defeated or worthless with shame or guilt, and difficulties in sustaining relationships and feeling close to others.",
    "Complex PTSD typically follows prolonged or repeated trauma from which escape was difficult or impossible: childhood abuse, torture, domestic violence, captivity and trafficking.",
    "The distinction from borderline personality disorder is genuinely difficult and contested. Complex PTSD lacks the shifting identity, the frantic efforts to avoid abandonment and the alternation between idealisation and devaluation, and the negative self-concept is stable rather than fluctuating.",
    "Acute stress reaction in ICD-11 is a normal reaction to an exceptional stressor and is not classified as a mental disorder. DSM-5 acute stress disorder is a disorder lasting three days to one month.",
    "That difference between systems is examinable and reflects a real disagreement about whether early distress after trauma should be pathologised.",
    "Adjustment disorder: preoccupation with an identifiable stressor and failure to adapt, with symptoms insufficient for another diagnosis, arising within a month.",
    "Prolonged grief disorder is covered under 7.3.5 and appears in both systems with differing duration thresholds.",
    "Insomnia disorder: dissatisfaction with sleep quantity or quality with difficulty initiating or maintaining sleep or early morning wakening, at least three nights weekly for at least three months, with daytime impairment, despite adequate opportunity to sleep.",
    "Obstructive sleep apnoea: loud snoring, witnessed apnoeas, unrefreshing sleep, morning headache and daytime somnolence. Screen with the Epworth Sleepiness Scale and STOP-BANG, and refer for polysomnography.",
    "Narcolepsy tetrad: excessive daytime sleepiness, cataplexy, sleep paralysis and hypnagogic or hypnopompic hallucinations. Cataplexy, sudden loss of muscle tone triggered by emotion, is the most specific feature.",
    "REM sleep behaviour disorder: loss of normal REM atonia with acting out of dreams. It strongly predicts later alpha-synucleinopathy, particularly dementia with Lewy bodies and Parkinson's disease, and is precipitated by antidepressants.",
    "Intermittent explosive disorder: recurrent outbursts of aggression grossly out of proportion to the provocation, not premeditated and not committed for gain.",
    "Premenstrual dysphoric disorder: mood lability, irritability, dysphoria and anxiety in the final week before menses, improving within a few days of onset and minimal in the week postmenses, confirmed by prospective daily rating over at least two cycles."
  ],
  cards:[
    ["State the three ICD-11 clusters for PTSD and the additional requirements for Complex PTSD.","PTSD requires re-experiencing in the here and now, deliberate avoidance of reminders, and a persistent sense of current threat. Complex PTSD requires those plus three disturbances in self-organisation: affect regulation difficulties, a persistent diminished and worthless self-concept with shame or guilt, and difficulties sustaining relationships."],
    ["How is Complex PTSD distinguished from borderline personality disorder?","Complex PTSD lacks the shifting sense of identity, the frantic efforts to avoid abandonment and the alternation between idealisation and devaluation. Its negative self-concept is stable rather than fluctuating. The distinction remains genuinely contested."],
    ["How do ICD-11 and DSM-5 differ on acute reactions to trauma?","ICD-11 classifies acute stress reaction as a normal reaction to an exceptional stressor and not as a mental disorder. DSM-5 defines acute stress disorder as a disorder lasting from three days to one month, reflecting a real disagreement about whether early post-traumatic distress should be pathologised."],
    ["Give the narcolepsy tetrad and name its most specific feature.","Excessive daytime sleepiness, cataplexy, sleep paralysis, and hypnagogic or hypnopompic hallucinations. Cataplexy, the sudden loss of muscle tone triggered by strong emotion, is the most specific feature."],
    ["Why does REM sleep behaviour disorder matter?","Because loss of normal REM atonia with dream enactment strongly predicts later alpha-synucleinopathy, particularly dementia with Lewy bodies and Parkinson's disease. It is also precipitated by antidepressants."]
  ],
  note:[
    "The here and now quality distinguishes re-experiencing from distressing recall.",
    "Insomnia disorder requires three nights weekly for three months with daytime impairment.",
    "Epworth and STOP-BANG screen for obstructive sleep apnoea; polysomnography confirms it.",
    "Premenstrual dysphoric disorder requires prospective daily rating over at least two cycles.",
    "Intermittent explosive disorder outbursts are unpremeditated and not committed for gain."
  ],
  refs:["icd11","dsm5","oyebode"] };

TEACH["7.1.11.4"] = { free:false,
  simple:"For trauma the treatment is to go back over what happened, in a structured way, with someone who knows what they are doing. For insomnia the treatment is to spend less time in bed, which sounds wrong and works better than any sleeping tablet.",
  teach:[
    "PTSD, NICE NG116: trauma-focused CBT or EMDR are the first-line psychological treatments. Both have substantial evidence and neither is clearly superior.",
    "Trauma-focused CBT includes imaginal reliving, in vivo exposure to avoided situations, cognitive restructuring of appraisals, and updating of the trauma memory with information the person did not have at the time.",
    "EMDR, eye movement desensitisation and reprocessing, involves recalling the trauma while performing bilateral stimulation. It works, and the mechanism of the eye movements remains disputed, with dismantling studies suggesting the eye movements may not be the active ingredient.",
    "Say that honestly: EMDR is effective and its proposed mechanism is not established.",
    "Debriefing after trauma is not recommended. Single-session psychological debriefing does not prevent PTSD and in some trials increased symptoms, which is one of the most important negative findings in the field.",
    "Active monitoring is the correct approach in the first month for people with mild symptoms, since most recover spontaneously.",
    "Medication in PTSD is second-line: venlafaxine or an SSRI where the person prefers medication, declines psychological treatment, or where there is significant comorbidity. Prazosin has evidence for trauma-related nightmares.",
    "Benzodiazepines should be avoided in PTSD. They do not treat it, and there is evidence they impair recovery and interfere with extinction learning.",
    "Complex PTSD: a phased approach with stabilisation and emotion regulation skills before trauma processing, though the evidence for mandatory phasing is weaker than the consensus suggests.",
    "Insomnia disorder: CBT for insomnia is first-line and superior to medication in the long term. Components are sleep restriction, stimulus control, cognitive therapy, sleep hygiene and relaxation.",
    "Sleep restriction is the most powerful component and the least intuitive. Time in bed is limited to actual sleep time, building sleep pressure and re-associating bed with sleep.",
    "Stimulus control: bed for sleep and sex only, get up if awake beyond about twenty minutes, fixed rising time regardless of sleep obtained, no daytime napping.",
    "Hypnotics should be short-term only, at the lowest dose, for no more than two to four weeks, because of tolerance, dependence and rebound insomnia. Z-drugs offer no meaningful advantage over benzodiazepines in this respect.",
    "Melatonin is licensed for short-term use in adults over 55 and has a role in circadian rhythm disorders and in some neurodevelopmental populations.",
    "Obstructive sleep apnoea: refer for polysomnography and CPAP. Treating the apnoea frequently resolves what had been diagnosed as treatment-resistant depression.",
    "Intermittent explosive disorder: CBT with anger management has the best evidence; SSRIs have some support.",
    "Premenstrual dysphoric disorder: SSRIs are effective and, unusually, work within days, so they can be given continuously or only in the luteal phase. Combined oral contraceptives are an alternative."
  ],
  cards:[
    ["What does NICE recommend first-line for PTSD?","Trauma-focused cognitive behavioural therapy or EMDR. Medication, with venlafaxine or an SSRI, is second-line, used where the person prefers it, declines psychological treatment, or has significant comorbidity."],
    ["What is the evidence on psychological debriefing after trauma?","Single-session psychological debriefing does not prevent PTSD and increased symptoms in some trials. It is not recommended. Active monitoring is appropriate in the first month for those with mild symptoms, since most recover spontaneously."],
    ["Name the components of CBT for insomnia and identify the most powerful.","Sleep restriction, stimulus control, cognitive therapy, sleep hygiene and relaxation. Sleep restriction is the most powerful and least intuitive component: time in bed is limited to actual sleep time, building sleep pressure and re-associating the bed with sleep."],
    ["Why should benzodiazepines be avoided in PTSD?","Because they do not treat the disorder and there is evidence that they impair recovery and interfere with the extinction learning on which trauma-focused treatment depends."],
    ["What is unusual about SSRI treatment of premenstrual dysphoric disorder?","It works within days rather than weeks, so an SSRI can be given continuously or restricted to the luteal phase of the cycle."]
  ],
  note:[
    "EMDR is effective and its proposed mechanism is disputed; dismantling studies question the eye movements.",
    "Prazosin has evidence for trauma-related nightmares.",
    "Z-drugs offer no meaningful advantage over benzodiazepines for dependence risk.",
    "Melatonin is licensed for short-term use in adults over 55.",
    "Treating obstructive sleep apnoea frequently resolves apparent treatment-resistant depression."
  ],
  refs:["nice","maudsley","companion"] };

TEACH["7.1.11.5"] = { free:false,
  simple:"Most people recover from trauma without treatment. The ones who do not, and are not treated, are still symptomatic decades later, which makes the failure to offer treatment expensive in every sense.",
  teach:[
    "PTSD: the majority of people who develop symptoms after trauma recover within the first year without specific treatment. Symptoms persisting beyond a year are much less likely to remit spontaneously.",
    "Around a third of people with PTSD develop a chronic course lasting many years, and cases lasting decades after the original event are well documented.",
    "Treated outcome is good. Trauma-focused psychological therapy produces large effect sizes, with the majority no longer meeting criteria after treatment.",
    "Poor prognostic factors: longer duration before treatment, complex or repeated trauma, comorbid depression or substance misuse, ongoing threat or litigation, and persistent avoidance.",
    "Delayed-onset PTSD, with onset more than six months after the trauma, occurs but is uncommon as a true delayed onset; more often there was subthreshold symptomatology throughout.",
    "Comorbidity is the rule: depression, substance misuse, other anxiety disorders and chronic pain, with comorbid depression present in around half.",
    "Suicide risk is raised in PTSD, and the risk is largely mediated by comorbid depression and substance misuse.",
    "Complex PTSD has a more chronic course and greater functional impairment than PTSD, and requires longer treatment.",
    "Adjustment disorder is by definition time-limited, resolving as the person adapts or the stressor resolves, and in ICD-11 should not persist beyond six months after the stressor ends.",
    "Insomnia: untreated chronic insomnia persists for years and independently predicts subsequent depression, which is the argument for treating it in its own right rather than as a symptom.",
    "Gains from CBT for insomnia are maintained at long-term follow-up, unlike gains from hypnotics, which are lost on discontinuation and complicated by rebound.",
    "Untreated obstructive sleep apnoea carries cardiovascular and accident risk and contributes to treatment resistance in mood disorder.",
    "The general prognostic principle across this group is that early identification changes the trajectory more than any refinement of treatment does."
  ],
  cards:[
    ["What is the natural course of PTSD?","The majority of people who develop symptoms after trauma recover within the first year without specific treatment. Symptoms persisting beyond a year are much less likely to remit spontaneously, and around a third develop a chronic course lasting many years."],
    ["Why should chronic insomnia be treated in its own right?","Because untreated it persists for years and independently predicts the subsequent development of depression. Gains from CBT for insomnia are maintained at long-term follow-up, unlike gains from hypnotics, which are lost on discontinuation."],
    ["What is the status of delayed-onset PTSD?","True onset more than six months after the trauma occurs but is uncommon. More often there were subthreshold symptoms present throughout which later crossed the diagnostic threshold."]
  ],
  note:[
    "Trauma-focused psychological therapy produces large effect sizes with most no longer meeting criteria.",
    "Comorbid depression is present in around half of PTSD cases.",
    "Complex PTSD has a more chronic course and greater impairment than PTSD.",
    "Adjustment disorder is time-limited by definition.",
    "Early identification changes the trajectory more than refinement of treatment does."
  ],
  refs:["nice","companion"] };

/* ---------- 7.5.1 ANOREXIA NERVOSA ---------- */

TEACH["7.5.1.1"] = { free:true,
  simple:"Anorexia nervosa is not the commonest eating disorder, but it is the one that kills. It has the highest mortality of any psychiatric disorder, and that single fact should govern how urgently it is treated.",
  teach:[
    "Lifetime prevalence is around 1 to 4 per cent in women and around 0.3 per cent in men, with higher figures in more recent studies using broader DSM-5 criteria.",
    "Point prevalence in young women is around 0.3 to 1 per cent.",
    "Female to male ratio is around ten to one in clinical samples, though community studies suggest the true ratio is closer to three or four to one and that men are under-diagnosed.",
    "Peak age of onset is in adolescence, between about fifteen and nineteen, and onset after thirty is unusual and should prompt consideration of another cause.",
    "Incidence rose through the twentieth century and has been broadly stable in recent decades in adults, with evidence of rising incidence in younger adolescents.",
    "There was a marked rise in eating disorder presentations in adolescents during and after the COVID-19 pandemic, reported across multiple countries.",
    "Higher-risk groups: ballet dancers, models, athletes in weight-dependent and aesthetic sports, and people with type 1 diabetes.",
    "Diabulimia, the deliberate omission of insulin for weight control in type 1 diabetes, is common, dangerous and specifically under-recognised.",
    "Historically anorexia nervosa was described as a disorder of affluent Western societies, and that picture has not held: it occurs across social classes and in non-Western countries, though the fat phobia presentation varies culturally.",
    "Anorexia nervosa has the highest standardised mortality ratio of any psychiatric disorder, with figures commonly cited around five to six times expected, and around a fifth of deaths are by suicide."
  ],
  cards:[
    ["Give the prevalence, sex ratio and age of onset of anorexia nervosa.","Lifetime prevalence around 1 to 4 per cent in women and 0.3 per cent in men. The clinical sex ratio is around ten to one female to male, though community data suggest a true ratio nearer three or four to one with men under-diagnosed. Peak onset is in adolescence between fifteen and nineteen."],
    ["What is diabulimia and why does it matter?","The deliberate omission or reduction of insulin for weight control in type 1 diabetes. It is common, specifically under-recognised, and dangerous, producing rapid deterioration in glycaemic control, ketoacidosis and accelerated microvascular complications."]
  ],
  note:[
    "Anorexia nervosa has the highest standardised mortality ratio of any psychiatric disorder.",
    "Around a fifth of deaths in anorexia nervosa are by suicide.",
    "Higher-risk groups include dancers, models, weight-dependent athletes and people with type 1 diabetes.",
    "Presentations rose markedly in adolescents during and after the COVID-19 pandemic.",
    "Onset after age thirty is unusual and should prompt consideration of another cause."
  ],
  refs:["nice","companion"] };

TEACH["7.5.1.2"] = { free:false,
  simple:"Nobody develops anorexia because of a magazine. Thinness ideals are everywhere and almost nobody develops the illness, which means the interesting question is what makes a small number of people vulnerable to something everyone is exposed to.",
  teach:[
    "Heritability is substantial, in the region of 50 to 60 per cent, considerably higher than was assumed when this was regarded as a purely sociocultural disorder.",
    "Genome-wide association work has reframed the illness. The 2019 study by Watson and colleagues identified eight loci and found genetic correlations both with psychiatric traits, particularly OCD, anxiety and depression, and with metabolic and anthropometric traits including insulin-glucose metabolism and body mass index.",
    "That finding led to anorexia nervosa being reconceptualised as a metabo-psychiatric disorder rather than a purely psychiatric one, which is a genuinely important recent change.",
    "Personality and temperament: perfectionism, obsessionality, rigidity, harm avoidance, high self-control and low novelty seeking are consistently associated and often precede onset.",
    "Perfectionism and rigid cognitive style persist after recovery, supporting their status as trait vulnerability rather than as consequences of starvation.",
    "The Minnesota Starvation Experiment, Keys 1944, is essential. Healthy volunteers subjected to semi-starvation developed food preoccupation, ritualised eating, hoarding, irritability, depression, social withdrawal, reduced concentration and binge eating on refeeding.",
    "The implication is that a large share of the psychopathology of anorexia nervosa is a consequence of starvation rather than its cause, which is why weight restoration must come before psychological work can be effective.",
    "Sociocultural: internalisation of the thin ideal, media exposure, peer environment and weight-related teasing. These are risk factors of small effect operating on a vulnerable minority, not causes.",
    "The Becker study in Fiji, following the introduction of television, showed a measurable rise in disordered eating attitudes, and is the strongest natural experiment in the sociocultural literature.",
    "Family factors: the older accounts of the anorexogenic family and Minuchin's psychosomatic family have not been supported as causal, and blaming families is now recognised as harmful and clinically counterproductive.",
    "Developmental and psychological accounts: Bruch's description of a pervasive sense of ineffectiveness and difficulty identifying internal states; and Crisp's account of the illness as a retreat from the demands of adolescence and adulthood.",
    "Maintenance model, Schmidt and Treasure's cognitive-interpersonal model: perfectionism, experiential avoidance, pro-anorexic beliefs, and the responses of close others in the form of accommodation and expressed emotion maintain the illness.",
    "Starvation itself is powerfully maintaining: it produces anxiolysis in some people, narrows attention, and provides a sense of control and achievement that becomes self-reinforcing.",
    "Trauma and adversity are over-represented but are non-specific risk factors rather than specific causes."
  ],
  cards:[
    ["What did the Minnesota Starvation Experiment demonstrate, and why does it matter?","That healthy volunteers subjected to semi-starvation developed food preoccupation, ritualised eating, food hoarding, irritability, depression, social withdrawal, impaired concentration and binge eating on refeeding. It shows that much of the psychopathology of anorexia nervosa is a consequence of starvation rather than its cause, which is why weight restoration must precede effective psychological work."],
    ["How has genetic research reframed anorexia nervosa?","The 2019 genome-wide association study found genetic correlations both with psychiatric traits, particularly OCD, anxiety and depression, and with metabolic and anthropometric traits including insulin-glucose metabolism and body mass index. This led to reconceptualisation as a metabo-psychiatric disorder rather than a purely psychiatric one."],
    ["Which temperamental traits precede and persist beyond anorexia nervosa?","Perfectionism, obsessionality, cognitive rigidity, harm avoidance, high self-control and low novelty seeking. Their persistence after recovery supports their status as trait vulnerabilities rather than consequences of starvation."],
    ["What is the status of family causation theories?","Not supported. The older concepts of the anorexogenic family and Minuchin's psychosomatic family have not been substantiated as causal, and attributing the illness to family dysfunction is recognised as harmful and clinically counterproductive."]
  ],
  note:[
    "Heritability is around 50 to 60 per cent.",
    "The Becker study in Fiji is the strongest natural experiment in the sociocultural literature.",
    "Bruch described a pervasive sense of ineffectiveness and difficulty identifying internal states.",
    "Crisp described the illness as a retreat from the demands of adolescence.",
    "Starvation is itself powerfully maintaining through anxiolysis and a sense of control."
  ],
  refs:["nice","companion","semgen"] };

TEACH["7.5.1.3"] = { free:true,
  simple:"The person is starving and does not experience themselves as starving. That gap between what the body is doing and what the person perceives is the illness, and it is why simply pointing out the weight achieves nothing.",
  teach:[
    "ICD-11 requires significantly low body weight for the person's height, age and developmental stage, not due to another condition or unavailability of food; a persistent pattern of behaviour to prevent weight restoration; and either excessive preoccupation with weight or shape, or, in some presentations, no such preoccupation.",
    "ICD-11 uses a BMI threshold of under 18.5 in adults, or under the fifth percentile in children and adolescents, with a separate category of anorexia nervosa with dangerously low body weight below BMI 14.",
    "ICD-11 and DSM-5 both allow diagnosis without fat phobia, recognising the non-fat-phobic presentation described particularly in Chinese and other non-Western populations.",
    "DSM-5 subtypes: restricting type and binge-eating or purging type. DSM-5 also removed the amenorrhoea criterion, since it excluded men, prepubertal girls and women on hormonal contraception.",
    "Physical signs of starvation: bradycardia, hypotension, hypothermia, lanugo hair, dry skin, hair loss, acrocyanosis, peripheral oedema and delayed capillary refill.",
    "Signs of purging: Russell's sign, being calluses on the dorsum of the hand from induced vomiting; dental enamel erosion particularly of the lingual surfaces; parotid enlargement; and subconjunctival haemorrhage.",
    "Biochemical: hypokalaemia particularly with purging, hyponatraemia, hypophosphataemia, hypoglycaemia, hypomagnesaemia, raised urea if dehydrated, deranged liver function, and low white cell count.",
    "Endocrine: low luteinising and follicle stimulating hormone with low oestradiol producing amenorrhoea; low T3 with sick euthyroid pattern; raised cortisol; and raised growth hormone with low IGF-1.",
    "Cardiac: bradycardia, prolonged QT, arrhythmia, reduced cardiac muscle mass and mitral valve prolapse. Sudden cardiac death is a principal mechanism of mortality.",
    "Bone: osteopenia and osteoporosis develop early and are not fully reversible, making duration of amenorrhoea a key clinical variable.",
    "Cognition: concentration and flexibility are impaired by starvation, which limits psychological therapy at very low weight.",
    "Assessment tools: SCOFF is the five-item screen; the Eating Disorder Examination is the reference standard interview; and the MEED guidance, Medical Emergencies in Eating Disorders, replaced MARSIPAN in 2022 as the UK risk assessment framework.",
    "The SUSS test, sit up squat stand, assesses proximal myopathy and is part of physical risk assessment.",
    "Weight and BMI alone are inadequate for risk assessment. Rate of weight loss, cardiovascular parameters, biochemistry, muscle power and engagement all contribute, and a person can be at high risk at a BMI that appears acceptable."
  ],
  cards:[
    ["What are the ICD-11 requirements for anorexia nervosa?","Significantly low body weight for height, age and developmental stage, not due to another condition or to food unavailability, with BMI under 18.5 in adults or under the fifth percentile in children; a persistent pattern of behaviours to prevent weight restoration; and excessive preoccupation with weight or shape, though a non-fat-phobic presentation is recognised. Anorexia nervosa with dangerously low body weight is specified below BMI 14."],
    ["Name the physical signs of starvation and of purging.","Starvation: bradycardia, hypotension, hypothermia, lanugo hair, dry skin, hair loss, acrocyanosis and peripheral oedema. Purging: Russell's sign of calluses on the dorsum of the hand, dental enamel erosion particularly lingual, parotid enlargement and subconjunctival haemorrhage."],
    ["What is MEED and what did it replace?","Medical Emergencies in Eating Disorders, the 2022 Royal College of Psychiatrists guidance which replaced MARSIPAN as the UK framework for assessing and managing physical risk in eating disorders."],
    ["Why is BMI alone inadequate for risk assessment?","Because risk depends on the rate of weight loss, cardiovascular parameters including heart rate, blood pressure and postural drop, biochemistry particularly potassium and phosphate, muscle power measured by the sit up squat stand test, and engagement. A person can be at high physical risk at a BMI that appears acceptable."],
    ["Which endocrine changes occur in anorexia nervosa?","Low LH and FSH with low oestradiol producing amenorrhoea; low T3 in a sick euthyroid pattern; raised cortisol; and raised growth hormone with low IGF-1, reflecting peripheral growth hormone resistance."]
  ],
  note:[
    "DSM-5 removed the amenorrhoea criterion and retains restricting and binge-purge subtypes.",
    "Both systems allow diagnosis without fat phobia.",
    "Osteopenia develops early and is not fully reversible; duration of amenorrhoea is the key variable.",
    "SCOFF is the five-item screen; the Eating Disorder Examination is the reference standard.",
    "Sudden cardiac death is a principal mechanism of mortality."
  ],
  refs:["icd11","nice","maudphys"] };

TEACH["7.5.1.4"] = { free:false,
  simple:"You cannot do therapy with a starving brain. Weight has to come up before anything psychological can take hold, and bringing it up too fast can kill the person, which is the central tension in treating this illness.",
  teach:[
    "NICE NG69 first-line psychological treatments in adults: individual eating-disorder-focused CBT known as CBT-ED, the Maudsley Anorexia Nervosa Treatment for Adults known as MANTRA, and Specialist Supportive Clinical Management.",
    "In children and young people, anorexia-nervosa-focused family therapy, FT-AN, is first-line and has the strongest evidence in this age group.",
    "Family therapy for adolescents does not treat the family as the cause. It mobilises parents to take temporary charge of refeeding and then hands control back in stages.",
    "Weight restoration is a precondition rather than a goal to be reached after psychological work, because starvation impairs the cognitive flexibility that therapy requires.",
    "Refeeding syndrome is the principal acute danger: on reintroduction of carbohydrate, insulin release drives phosphate, potassium and magnesium intracellularly, producing hypophosphataemia, arrhythmia, cardiac failure, rhabdomyolysis, seizures and death.",
    "Risk factors for refeeding syndrome: very low BMI, minimal intake for more than five days, rapid recent weight loss, low baseline electrolytes, and alcohol or diuretic use.",
    "Prevention: start feeding cautiously, monitor phosphate, potassium and magnesium daily during the early phase, correct before and during feeding, and give thiamine and other B vitamins before feeding starts.",
    "The opposite error is underfeeding syndrome, in which excessive caution produces continued weight loss in hospital. Both errors kill, and MEED addresses the balance explicitly.",
    "There is no medication with established efficacy for the core symptoms of anorexia nervosa. Olanzapine produces modest weight gain but does not address the core psychopathology.",
    "Antidepressants do not aid weight restoration and are not effective for depressive symptoms at very low weight, because those symptoms are substantially a consequence of starvation.",
    "Treat comorbidity after weight restoration where possible, since much of it resolves with refeeding.",
    "Physical monitoring: heart rate, postural blood pressure, temperature, ECG for QT interval, electrolytes including phosphate and magnesium, glucose, liver function and full blood count.",
    "Bone health: DEXA scanning where amenorrhoea has persisted, with weight restoration being the effective treatment. Oestrogen replacement does not restore bone density in adults and should not substitute for weight gain.",
    "Compulsory treatment: anorexia nervosa is a mental disorder under the Mental Health Act, and feeding is treatment for the mental disorder, so nasogastric feeding may lawfully be given under section 3 or section 63.",
    "Capacity in anorexia nervosa is complex. A person may understand and retain the information yet be unable to weigh it because the illness distorts the value assigned to the outcome, and the case law reflects this.",
    "Admission indications: physical risk on MEED criteria, rapid weight loss, failure of outpatient treatment, and significant comorbidity or suicide risk.",
    "Compulsory treatment saves lives but has poorer long-term outcomes than voluntary engagement, so it is used where necessary and not as a substitute for engagement."
  ],
  cards:[
    ["What are the NICE first-line psychological treatments for anorexia nervosa?","In adults: individual eating-disorder-focused CBT, the Maudsley Anorexia Nervosa Treatment for Adults, and Specialist Supportive Clinical Management. In children and young people, anorexia-nervosa-focused family therapy is first-line."],
    ["Describe refeeding syndrome and its prevention.","On reintroduction of carbohydrate after starvation, insulin release drives phosphate, potassium and magnesium into cells, producing hypophosphataemia, arrhythmia, cardiac failure, rhabdomyolysis, seizures and death. Prevent it by feeding cautiously at first, monitoring phosphate, potassium and magnesium daily during the early phase, correcting deficits before and during feeding, and giving thiamine and B vitamins before feeding begins."],
    ["What is underfeeding syndrome?","Continued weight loss and physical deterioration in hospital resulting from excessive caution about refeeding. It is as dangerous as refeeding syndrome, and MEED guidance addresses the balance between the two explicitly."],
    ["Can nasogastric feeding be given under the Mental Health Act?","Yes. Anorexia nervosa is a mental disorder under the Act, and feeding is treatment for that mental disorder, so nasogastric feeding may lawfully be given under section 3 or section 63 where the criteria are met."],
    ["What is the evidence for medication in anorexia nervosa?","There is no medication with established efficacy for the core symptoms. Olanzapine produces modest weight gain without addressing the core psychopathology. Antidepressants do not aid weight restoration and are ineffective for depressive symptoms at very low weight, since those symptoms are largely a consequence of starvation."]
  ],
  note:[
    "Family therapy mobilises parents to take temporary charge of refeeding, not to accept blame.",
    "Weight restoration is a precondition for effective psychological work.",
    "Oestrogen replacement does not restore bone density in adults; weight gain does.",
    "Capacity may be impaired through inability to weigh information despite understanding it.",
    "Compulsory treatment saves lives but has poorer long-term outcomes than voluntary engagement."
  ],
  refs:["nice","maudphys","maudsley"] };

TEACH["7.5.1.5"] = { free:false,
  simple:"Roughly half recover fully, a quarter improve, and a quarter stay ill for life. The mortality is the highest in psychiatry, and it comes from two directions: the body giving out, and suicide.",
  teach:[
    "The broad picture at long-term follow-up: around 45 to 50 per cent achieve full recovery, around 30 per cent improve partially, and around 20 per cent run a chronic course.",
    "Recovery is slow. Median time to recovery is measured in years, and studies with follow-up under five years systematically understate eventual recovery rates.",
    "The corollary is important clinically: long duration of illness does not mean recovery is impossible, and treatment should not be withdrawn on grounds of chronicity alone.",
    "Standardised mortality ratio is around five to six times expected, the highest of any psychiatric disorder. Crude mortality is around 5 per cent per decade of illness.",
    "Around a fifth of deaths are by suicide, and the remainder are from medical complications, principally cardiac.",
    "Suicide risk is markedly raised, with completed suicide more likely than in most psychiatric disorders, partly because methods used are of high lethality.",
    "Poor prognostic factors: longer duration before treatment, lower minimum weight achieved, binge-purge subtype, vomiting and laxative misuse, comorbid personality disorder or substance misuse, older age at presentation, and poor family functioning.",
    "Good prognostic factors: shorter duration, younger age at onset within the adolescent range, early treatment response particularly early weight gain, and family involvement in adolescents.",
    "Early weight gain in the first weeks of treatment is one of the strongest predictors of eventual outcome, which supports assertive early intervention.",
    "Crossover to bulimia nervosa occurs in a substantial minority, whereas crossover from bulimia to anorexia is less common.",
    "Physical sequelae in those who recover: osteoporosis is the principal irreversible consequence, and fertility is often preserved but pregnancy carries higher risk.",
    "Severe and enduring anorexia nervosa, conventionally defined as illness beyond seven years with failed treatment attempts, is now recognised as requiring a different approach oriented towards quality of life and harm reduction.",
    "The concept of terminal anorexia nervosa has been proposed and is strongly contested, with critics arguing it risks withdrawing treatment from people who could still recover. It should be described as contested."
  ],
  cards:[
    ["Give the long-term outcome figures for anorexia nervosa.","Approximately 45 to 50 per cent achieve full recovery, around 30 per cent improve partially, and around 20 per cent run a chronic course. Recovery is slow, with median time measured in years, so short follow-up studies understate eventual recovery."],
    ["What is the mortality of anorexia nervosa?","A standardised mortality ratio of around five to six times expected, the highest of any psychiatric disorder, with crude mortality around 5 per cent per decade of illness. Approximately a fifth of deaths are by suicide and the remainder from medical complications, principally cardiac."],
    ["Which early treatment variable best predicts eventual outcome?","Early weight gain in the first weeks of treatment, which is among the strongest predictors of eventual recovery and supports assertive early intervention."],
    ["What is severe and enduring anorexia nervosa, and what is contested about it?","Illness conventionally persisting beyond seven years with failed treatment attempts, now recognised as requiring an approach oriented to quality of life and harm reduction. The related concept of terminal anorexia nervosa is strongly contested, critics arguing that it risks withdrawing treatment from people who could still recover."]
  ],
  note:[
    "Long duration does not preclude recovery and is not grounds for withdrawing treatment.",
    "Crossover to bulimia nervosa occurs in a substantial minority.",
    "Osteoporosis is the principal irreversible physical consequence.",
    "Binge-purge subtype, vomiting and laxative misuse predict poorer outcome.",
    "Completed suicide is more likely than in most psychiatric disorders, partly through high-lethality methods."
  ],
  refs:["nice","companion","maudphys"] };

/* ---------- 7.5.2 BULIMIA NERVOSA ---------- */

TEACH["7.5.2.1"] = { free:true,
  simple:"Bulimia is commoner than anorexia and far less visible, because most people with it are a normal weight. That is precisely why it goes undetected for years.",
  teach:[
    "Lifetime prevalence is around 1 to 2 per cent in women and around 0.5 per cent in men.",
    "Bulimia nervosa is more common than anorexia nervosa, and binge eating disorder is more common than both, with lifetime prevalence around 2 to 3 per cent.",
    "Female to male ratio in clinical samples is around ten to one, with community data again suggesting substantial under-diagnosis in men.",
    "Peak age of onset is later than anorexia nervosa, typically in the late teens to early twenties.",
    "Most people with bulimia nervosa are of normal weight, which is the principal reason for delayed detection, and average duration before presentation is several years.",
    "Incidence rose sharply from the 1970s, when the disorder was first described by Russell in 1979, peaked in the 1990s, and has declined somewhat since in several countries.",
    "Russell's original 1979 paper described bulimia nervosa as an ominous variant of anorexia nervosa, and the eponym Russell's sign comes from the same work.",
    "Comorbidity is very high: depression, anxiety disorders, substance misuse and personality disorder, with substance misuse notably more common than in anorexia nervosa.",
    "Childhood sexual abuse and other adversity are over-represented, more so than in anorexia nervosa, though they remain non-specific risk factors.",
    "Mortality is raised but substantially less than in anorexia nervosa, with standardised mortality ratios around twice expected."
  ],
  cards:[
    ["Compare the prevalence of the eating disorders.","Binge eating disorder is the most common at around 2 to 3 per cent lifetime, followed by bulimia nervosa at around 1 to 2 per cent in women, with anorexia nervosa the least common. Bulimia nervosa has a later peak age of onset than anorexia nervosa, in the late teens to early twenties."],
    ["Why is bulimia nervosa detected late?","Because most people with the disorder are of normal weight, so there is no visible sign, and the behaviours are concealed through shame. Average duration before presentation is several years."]
  ],
  note:[
    "Russell first described bulimia nervosa in 1979 as an ominous variant of anorexia nervosa.",
    "Incidence rose from the 1970s, peaked in the 1990s, and has declined somewhat since.",
    "Substance misuse comorbidity is notably higher than in anorexia nervosa.",
    "Standardised mortality is around twice expected, substantially lower than in anorexia nervosa.",
    "Community data suggest substantial under-diagnosis in men."
  ],
  refs:["nice","companion"] };

TEACH["7.5.2.2"] = { free:false,
  simple:"The engine of bulimia is dieting. Restriction creates the physiological and psychological conditions for a binge, the binge produces shame, the shame produces more restriction, and the cycle powers itself.",
  teach:[
    "Heritability is around 50 to 60 per cent, similar to anorexia nervosa, with shared genetic vulnerability across the eating disorders.",
    "Dietary restraint is the central maintaining mechanism. Restriction, both caloric and the imposition of rigid rules, creates physiological hunger and cognitive preoccupation that make binge eating far more likely.",
    "Abstinence violation effect: the person holding rigid all-or-nothing dietary rules who breaks one abandons control entirely, producing the binge. This is Polivy and Herman's counter-regulation.",
    "Fairburn's transdiagnostic cognitive-behavioural model is the dominant account. The core psychopathology is the over-evaluation of shape, weight and their control as the dominant basis of self-worth.",
    "Everything else follows from that core: strict dieting follows from the over-evaluation; binge eating follows from the dieting; compensatory behaviour follows from the binge; and each reinforces the over-evaluation.",
    "The model adds four maintaining mechanisms in some patients: clinical perfectionism, core low self-esteem, mood intolerance, and interpersonal difficulties. These define the broad version of CBT-E.",
    "Mood intolerance is important: binge eating and purging function as affect regulation, providing immediate relief from unbearable emotional states, which is why the behaviour is so hard to relinquish.",
    "Purging maintains bingeing by removing the deterrent. A person who believes vomiting undoes the binge will binge more, and correcting that belief with the actual figures is a specific intervention.",
    "Vomiting removes only around half of ingested calories at most, and laxatives affect almost none, since absorption occurs in the small bowel and laxatives act on the colon.",
    "That fact is used therapeutically. Most weight change from laxatives is fluid, which is why weight rebounds and why laxative cessation causes oedema.",
    "Risk factors: dieting, obesity in childhood, early menarche, parental obesity, critical comments about weight from family, childhood sexual abuse and other adversity, and low self-esteem.",
    "Neurobiological findings: altered serotonergic function, supported by the efficacy of fluoxetine, and altered reward processing, though findings are less consistent than in the anxiety disorders.",
    "The efficacy of fluoxetine at a dose of 60 milligrams, higher than the antidepressant dose and effective independently of depression, is the strongest pharmacological evidence for serotonergic involvement."
  ],
  cards:[
    ["Describe Fairburn's transdiagnostic model of eating disorders.","The core psychopathology is over-evaluation of shape, weight and their control as the dominant basis of self-worth. This drives strict dieting, which produces binge eating, which produces compensatory behaviour, each reinforcing the core over-evaluation. Four additional maintaining mechanisms operate in some patients: clinical perfectionism, core low self-esteem, mood intolerance, and interpersonal difficulties."],
    ["What is the abstinence violation effect?","Polivy and Herman's counter-regulation: a person holding rigid all-or-nothing dietary rules who breaks one abandons dietary control entirely rather than partially, producing a binge. It explains why rigid restriction generates bingeing."],
    ["How effective are vomiting and laxatives at preventing absorption, and why does it matter therapeutically?","Vomiting removes at most around half of ingested calories, and laxatives affect almost none, since absorption occurs in the small bowel while laxatives act on the colon. Sharing these figures removes the perceived safety of purging, which otherwise maintains bingeing by removing its deterrent."],
    ["Why does mood intolerance matter in bulimia nervosa?","Because binge eating and purging function as affect regulation, providing immediate relief from unbearable emotional states. The behaviour is maintained by that relief, which is why it persists despite the shame and physical consequences."]
  ],
  note:[
    "Heritability is around 50 to 60 per cent with shared vulnerability across eating disorders.",
    "Dietary restraint is the central maintaining mechanism.",
    "Laxative-related weight change is almost entirely fluid, hence rebound oedema on cessation.",
    "Fluoxetine at 60 milligrams is effective independently of depression, supporting serotonergic involvement.",
    "Childhood sexual abuse is over-represented, more so than in anorexia nervosa."
  ],
  refs:["nice","companion","stahl"] };

TEACH["7.5.2.3"] = { free:true,
  simple:"A binge is not simply eating too much. It is eating an unmistakably large amount in a short time, alone, with a sense of being unable to stop, followed by shame and by something done to undo it.",
  teach:[
    "ICD-11 bulimia nervosa requires frequent recurrent episodes of binge eating, recurrent inappropriate compensatory behaviours to prevent weight gain, excessive preoccupation with body weight or shape, and marked distress or impairment, over at least one month.",
    "A binge is defined by two elements: eating an amount definitely larger than most people would eat in a similar period and circumstance, and a sense of loss of control over the eating.",
    "Subjective binges, where the person feels out of control but the amount is not objectively large, are common and are clinically important but do not meet the strict definition.",
    "Compensatory behaviours: self-induced vomiting, laxative misuse, diuretic misuse, fasting, excessive exercise, and omission or reduction of insulin in type 1 diabetes.",
    "DSM-5 requires the binges and compensatory behaviours to occur at least once weekly for three months, having reduced the threshold from twice weekly in DSM-IV.",
    "The distinguishing feature from anorexia nervosa binge-purge subtype is body weight. If the person is significantly underweight, the diagnosis is anorexia nervosa regardless of the binge-purge behaviour.",
    "Binge eating disorder involves binge eating without regular compensatory behaviour, with marked distress, and is associated with obesity though it is not defined by it.",
    "Physical signs: Russell's sign on the dorsum of the hand, dental enamel erosion of the lingual surfaces, parotid and submandibular enlargement, subconjunctival haemorrhage, and oesophagitis.",
    "Electrolyte disturbance is the principal danger. Vomiting produces hypokalaemia and hypochloraemic metabolic alkalosis; laxative misuse produces hypokalaemia with metabolic acidosis.",
    "Hypokalaemia causes cardiac arrhythmia and is the mechanism of sudden death in bulimia nervosa. A potassium below 3.0 requires urgent attention and below 2.5 is an emergency.",
    "Other complications: Mallory-Weiss tears, oesophageal rupture which is rare and often fatal, gastric dilatation and rupture during a binge, cardiomyopathy from ipecac misuse, and menstrual irregularity.",
    "Laxative cessation causes rebound fluid retention and oedema, which the person experiences as weight gain and which commonly precipitates relapse. Warn about it explicitly.",
    "Comorbid self-harm and impulsive behaviour are common, and the multi-impulsive subtype, with substance misuse, self-harm and sexual disinhibition, carries a poorer prognosis.",
    "Screening: SCOFF, five items, with two or more positive answers indicating likely eating disorder. Ask directly about vomiting and laxatives; they are not volunteered."
  ],
  cards:[
    ["Define a binge.","Eating, in a discrete period, an amount of food definitely larger than most people would eat under similar circumstances, accompanied by a sense of loss of control over the eating. Both elements are required; a subjective binge without the objectively large amount does not meet the strict definition."],
    ["What are the electrolyte consequences of vomiting and of laxative misuse?","Vomiting produces hypokalaemia with hypochloraemic metabolic alkalosis. Laxative misuse produces hypokalaemia with metabolic acidosis. Hypokalaemia causes cardiac arrhythmia and is the mechanism of sudden death; a potassium below 3.0 requires urgent attention and below 2.5 is an emergency."],
    ["How is bulimia nervosa distinguished from the binge-purge subtype of anorexia nervosa?","By body weight. If the person is significantly underweight, the diagnosis is anorexia nervosa binge-purge subtype regardless of the presence of binge eating and purging."],
    ["Why must patients be warned before stopping laxatives?","Because laxative cessation causes rebound fluid retention and oedema, which the person experiences as rapid weight gain and which commonly precipitates relapse. Explaining that the change is fluid, not fat, prevents this."]
  ],
  note:[
    "DSM-5 reduced the frequency threshold to once weekly for three months.",
    "Binge eating disorder involves bingeing without regular compensatory behaviour.",
    "Oesophageal rupture is rare and often fatal; gastric rupture can occur during a binge.",
    "The multi-impulsive subtype carries a poorer prognosis.",
    "SCOFF has five items, with two or more positive answers indicating likely eating disorder."
  ],
  refs:["icd11","nice","maudphys"] };

TEACH["7.5.2.4"] = { free:false,
  simple:"Bulimia responds better to treatment than almost anything else in psychiatry. There is a specific therapy that works, a self-help version that works nearly as well, and a drug that works, and most people never receive any of them.",
  teach:[
    "NICE NG69 first-line for adults: bulimia-nervosa-focused guided self-help, based on a cognitive behavioural self-help programme with brief supportive sessions.",
    "If guided self-help is unacceptable, contraindicated or ineffective after four weeks, individual eating-disorder-focused CBT, CBT-ED, is offered.",
    "For children and young people, bulimia-nervosa-focused family therapy, FT-BN, is first-line.",
    "CBT-E, enhanced cognitive behaviour therapy, is delivered in twenty sessions over twenty weeks for people who are not significantly underweight, in four stages.",
    "Stage one establishes real-time self-monitoring, weekly weighing in session, and regular eating of three meals and two or three snacks, with nothing longer than four hours between them.",
    "Regular eating alone, established in the first weeks, substantially reduces binge frequency before any cognitive work is done, because it removes the physiological and psychological drivers of the binge.",
    "Stage two reviews progress and identifies barriers. Stage three addresses the maintaining mechanisms, principally the over-evaluation of shape and weight, dietary rules, and event and mood-related eating. Stage four addresses relapse prevention.",
    "Body checking and body avoidance are addressed specifically, since both maintain the over-evaluation, one by generating apparent evidence and the other by preventing disconfirmation.",
    "Broad CBT-E adds modules for clinical perfectionism, core low self-esteem, mood intolerance and interpersonal difficulties where these maintain the disorder.",
    "Fluoxetine 60 milligrams daily is the only medication with a licence in bulimia nervosa. It reduces binge and purge frequency, works independently of depression, and requires the higher dose.",
    "Fluoxetine is less effective than CBT and its effects are less durable, so it is an adjunct or an alternative rather than a first choice.",
    "Bupropion is contraindicated in bulimia nervosa and in anorexia nervosa because of a substantially increased seizure risk in purging patients.",
    "Physical management: monitor potassium and other electrolytes, dental review and advice not to brush immediately after vomiting, and gradual rather than abrupt laxative withdrawal where use is heavy.",
    "Advise rinsing with water or a fluoride mouthwash rather than brushing after vomiting, since brushing enamel softened by acid accelerates erosion.",
    "Interpersonal psychotherapy is effective in bulimia nervosa but works more slowly than CBT, reaching comparable outcomes at longer follow-up.",
    "Binge eating disorder: guided self-help based on CBT is first-line, with lisdexamfetamine licensed in some jurisdictions but not recommended by NICE.",
    "Most people with bulimia nervosa never reach treatment, and improving detection in primary care and dentistry would achieve more than any refinement of the therapies themselves."
  ],
  cards:[
    ["What does NICE recommend first-line for bulimia nervosa in adults?","Bulimia-nervosa-focused guided self-help based on a cognitive behavioural programme with brief supportive sessions. If this is unacceptable, contraindicated or ineffective after four weeks, individual eating-disorder-focused CBT is offered. In children and young people, bulimia-nervosa-focused family therapy is first-line."],
    ["What is achieved in stage one of CBT-E, and why does it work?","Real-time self-monitoring, collaborative weekly weighing in session, and establishment of regular eating with three meals and two or three snacks and no gap longer than four hours. Regular eating substantially reduces binge frequency before any cognitive work, because it removes the physiological and psychological drivers of bingeing."],
    ["What is the evidence for fluoxetine in bulimia nervosa?","Fluoxetine at 60 milligrams daily is the only licensed medication. It reduces binge and purge frequency and works independently of any effect on depression, but is less effective and less durable than CBT, so it is an adjunct or alternative rather than a first choice."],
    ["Which antidepressant is contraindicated in eating disorders and why?","Bupropion, because of a substantially increased risk of seizures in patients who purge."],
    ["What dental advice should be given?","To rinse with water or a fluoride mouthwash after vomiting rather than brushing, because brushing enamel that has been softened by gastric acid accelerates erosion. Regular dental review should be arranged."]
  ],
  note:[
    "CBT-E runs to twenty sessions over twenty weeks in patients who are not significantly underweight.",
    "Body checking and body avoidance are both addressed, as each maintains the over-evaluation.",
    "Interpersonal psychotherapy is effective but works more slowly than CBT.",
    "Lisdexamfetamine is licensed for binge eating disorder in some jurisdictions but not recommended by NICE.",
    "Laxative withdrawal should be gradual where use is heavy."
  ],
  refs:["nice","maudsley","companion"] };

TEACH["7.5.2.5"] = { free:false,
  simple:"Of all the eating disorders this is the one with the best outlook. Around half recover fully with proper treatment, and the ones who respond usually respond early, which tells you quickly whether the plan is working.",
  teach:[
    "Around 45 to 50 per cent achieve full recovery, around 25 to 30 per cent improve partially, and around 20 per cent run a chronic course.",
    "Outcome is considerably better than in anorexia nervosa, and treatment response is faster.",
    "Early response predicts final outcome strongly. Reduction in purging frequency of around 70 per cent by session four or six of CBT is among the best predictors of eventual remission.",
    "That early-response finding is clinically useful: it justifies changing the treatment plan early rather than persisting with an approach that is not working.",
    "Relapse occurs in a substantial minority, most commonly within the first year after treatment, which is why relapse prevention forms a defined stage of CBT-E.",
    "Poor prognostic factors: longer duration, greater severity and frequency of bingeing and purging, comorbid personality disorder particularly borderline, substance misuse, childhood obesity, low self-esteem, and the multi-impulsive presentation.",
    "Good prognostic factors: shorter duration, earlier age at presentation, absence of comorbid personality disorder or substance misuse, early treatment response, and higher self-esteem.",
    "Crossover to other eating disorders occurs, most often to binge eating disorder or to eating disorder not otherwise specified presentations. Crossover to anorexia nervosa is less common than the reverse.",
    "Mortality is raised, with standardised mortality ratios around twice expected, considerably lower than in anorexia nervosa. Suicide contributes substantially to the excess.",
    "Physical sequelae in those who recover: dental erosion is permanent, and gastrointestinal problems including constipation from prolonged laxative use may persist.",
    "Fertility and pregnancy: active bulimia nervosa is associated with pregnancy complications and with postpartum depression, and pregnancy is a recognised period of both improvement and relapse.",
    "Many people recover without ever receiving treatment, and community studies show higher spontaneous remission than clinical samples suggest, which is a general lesson about clinical sample bias.",
    "The largest determinant of population outcome remains detection, since most cases never present."
  ],
  cards:[
    ["Give the outcome figures for bulimia nervosa.","Approximately 45 to 50 per cent achieve full recovery, 25 to 30 per cent improve partially, and around 20 per cent run a chronic course. Outcome is considerably better and treatment response faster than in anorexia nervosa."],
    ["Which early treatment variable predicts outcome in bulimia nervosa, and why is it useful?","A reduction in purging frequency of around 70 per cent by session four to six of CBT is among the strongest predictors of eventual remission. It is useful because it justifies changing the treatment plan early rather than persisting with an ineffective approach."],
    ["What are the poor prognostic factors in bulimia nervosa?","Longer duration, greater severity and frequency of bingeing and purging, comorbid borderline personality disorder, substance misuse, childhood obesity, low self-esteem, and the multi-impulsive presentation."]
  ],
  note:[
    "Relapse occurs most commonly within the first year after treatment.",
    "Standardised mortality is around twice expected, with suicide contributing substantially.",
    "Dental erosion is permanent in those who recover.",
    "Community studies show higher spontaneous remission than clinical samples suggest.",
    "Detection remains the largest determinant of population outcome."
  ],
  refs:["nice","companion","maudphys"] };
