/* =====================================================================
   TEACHING, SECTION 8C — Old Age, the five-aspect grid, part two
   Depression, bipolar disorder, late life psychosis, anxiety,
   substance misuse, other mental disorders
   30 items, 8.5.6.1 to 8.5.11.5
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------- 8.5.6 DEPRESSION ---------- */

TEACH["8.5.6.1"] = { free:true,
  simple:"Depression is not commoner in old age than in middle age, which surprises people. What is commoner is depression that nobody recognises, in a person who has plenty of reason to be sad.",
  teach:[
    "Major depression is no more common in older people than in younger adults, with community prevalence of the order of 2 to 5 per cent, and by some measures slightly lower.",
    "Clinically significant depressive symptoms falling short of major depression are far commoner, affecting around 10 to 15 per cent of older people in the community.",
    "This subthreshold or subsyndromal depression carries real disability, real mortality and real treatment response, and treating only major depression misses most of the burden.",
    "Prevalence rises sharply with setting: around 10 per cent in primary care attenders, 20 to 30 per cent in medical inpatients, and 30 to 40 per cent in care home residents.",
    "Care home prevalence is the highest of any setting, and depression there is very poorly detected and very poorly treated.",
    "The female predominance narrows with age, so the sex ratio in later life is closer to equal than in younger adults.",
    "Depression in older people is under-recognised in primary care, partly through somatic presentation, partly through the assumption that low mood is an understandable response to age, illness or loss.",
    "That assumption is the central clinical error in this area. Understandable and treatable are not alternatives.",
    "Late-onset depression, first episode after around 60, differs from early-onset recurrent depression, with less family history and more vascular and structural brain change."
  ],
  cards:[
    ["Is depression commoner in old age?","Major depression is not, with community prevalence of around 2 to 5 per cent, comparable to or slightly lower than in younger adults. However, clinically significant subthreshold depressive symptoms affect around 10 to 15 per cent, and these carry real disability, mortality and treatment response."],
    ["How does depression prevalence vary by setting in older people?","Around 10 per cent in primary care attenders, 20 to 30 per cent in medical inpatients, and 30 to 40 per cent in care home residents, which is the highest of any setting and the most poorly detected."]
  ],
  note:[
    "The female predominance narrows with age towards an equal ratio.",
    "Subthreshold depression carries the greater share of population burden.",
    "Understandability is not a reason to leave depression untreated.",
    "Late-onset depression has less family history and more vascular and structural change."
  ],
  refs:["oxoldage","nice"] };

TEACH["8.5.6.2"] = { free:false,
  simple:"In older people, depression is more often something happening in the blood vessels of the brain than something happening in the mind. That is a real difference from depression at thirty, and it changes what you expect from treatment.",
  teach:[
    "Genetic loading is lower in late-onset depression than in early-onset recurrent depression, and family history is less often present.",
    "The vascular depression hypothesis, Alexopoulos 1997, proposes that cerebrovascular disease predisposes to, precipitates or perpetuates depression in later life.",
    "Supporting evidence: association with white matter hyperintensities particularly in frontal and subcortical regions, with vascular risk factors, and with the executive dysfunction seen in this group.",
    "The depression-executive dysfunction syndrome describes late-life depression with psychomotor retardation, reduced interest, impaired executive function and poor response to antidepressants.",
    "That syndrome predicts poorer and slower antidepressant response, higher relapse and greater disability, and is a useful clinical prediction.",
    "Structural findings: reduced hippocampal volume, frontal and subcortical white matter change, and reduced frontal lobe volume.",
    "Neuroendocrine: HPA axis dysregulation is more pronounced in late-life depression, with higher cortisol and more frequent dexamethasone non-suppression.",
    "Inflammation: raised inflammatory markers are more consistently found in late-life depression than in younger depression, fitting the vascular and metabolic picture.",
    "Physical illness is a major contributor. Depression is strongly associated with stroke, Parkinson's disease, cardiac disease, cancer, chronic pain, diabetes and hip fracture.",
    "The relationship with physical illness is bidirectional: illness causes depression, and depression worsens the outcome and increases the mortality of physical illness.",
    "Disability, rather than diagnosis, is the strongest illness-related predictor. It is the loss of function and independence, not the disease label, that predicts depression.",
    "Psychosocial: bereavement, particularly within the first year; loss of role after retirement; loss of independence; relocation, especially to residential care; social isolation and loneliness; and caregiving.",
    "Loneliness is distinct from objective isolation and is the stronger predictor of depression, and it is potentially modifiable.",
    "Caregiving for a person with dementia produces high rates of depression, and this is a group readily identified and rarely offered treatment.",
    "Medication: beta-blockers, corticosteroids, some antihypertensives, opioids, and dopamine-depleting agents are implicated, although the evidence for some traditional culprits is weaker than assumed.",
    "Vitamin B12 and folate deficiency, hypothyroidism, hypercalcaemia and anaemia should be excluded, since each can present as depression.",
    "Alcohol is under-recognised in this population and is both a cause and a consequence of late-life depression."
  ],
  cards:[
    ["State the vascular depression hypothesis.","Alexopoulos' 1997 proposal that cerebrovascular disease predisposes to, precipitates or perpetuates depressive syndromes in later life, supported by association with frontal and subcortical white matter hyperintensities, with vascular risk factors, and with the executive dysfunction characteristic of this group."],
    ["What is the depression-executive dysfunction syndrome and why does it matter?","Late-life depression with psychomotor retardation, reduced interest, impaired executive function and poor antidepressant response. It predicts slower and poorer response to medication, higher relapse and greater disability, and directs treatment towards problem-solving therapy and behavioural activation."],
    ["Which illness-related factor best predicts depression in older people?","Disability rather than diagnosis. It is the loss of function and independence, not the specific disease label, that most strongly predicts depression, which is why rehabilitation is an antidepressant intervention."],
    ["How does loneliness differ from isolation, and why does it matter?","Loneliness is the subjective experience of unwanted lack of connection, whereas isolation is objective lack of contact. Loneliness is the stronger predictor of depression, and it is modifiable, so it should be asked about directly rather than inferred from social circumstances."]
  ],
  note:[
    "Genetic loading is lower in late-onset than in early-onset depression.",
    "HPA axis dysregulation and inflammation are more pronounced than in younger depression.",
    "The relationship with physical illness is bidirectional.",
    "B12 and folate deficiency, hypothyroidism, hypercalcaemia and anaemia should be excluded.",
    "Alcohol is under-recognised and is both cause and consequence of late-life depression."
  ],
  refs:["oxoldage","lishman","companion"] };

TEACH["8.5.6.3"] = { free:true,
  simple:"Older people with depression often do not say they are sad. They say they cannot sleep, they have no appetite, their memory has gone, and they hurt. The mood is the last thing they mention, if they mention it at all.",
  teach:[
    "Reported low mood is less prominent than in younger adults. Anhedonia, loss of interest and loss of pleasure are more reliable and should be asked about directly.",
    "Somatic presentation is the norm: fatigue, poor sleep, poor appetite, weight loss, constipation, and pain. Distinguishing these from physical illness is the central diagnostic problem.",
    "Use the substitutive approach: give the diagnostic weight to hopelessness, worthlessness, guilt, anhedonia and suicidal ideation rather than to fatigue, sleep and appetite.",
    "Hypochondriacal preoccupation and health anxiety are commoner presentations of depression in older people than in younger.",
    "Cognitive complaint is common and depressive pseudodementia is the extreme form: subjective memory complaint, don't know answers, abrupt onset, preserved insight, and improvement with treatment.",
    "The person with pseudodementia complains of memory; the person with dementia conceals it. This distinction is imperfect but useful.",
    "A substantial proportion of people with depressive pseudodementia develop dementia within several years, so the resolution of cognitive symptoms does not end the story and follow-up is needed.",
    "Agitation is common and prominent in older people, more so than in younger adults, with pacing, hand-wringing and importuning.",
    "Psychotic depression is proportionately commoner in older people, with mood-congruent delusions of guilt, poverty, nihilism, illness and deserved punishment.",
    "Cotard's syndrome, the nihilistic delusion of being dead or having no organs, is classically described in this group.",
    "Delusions of infestation and of bodily decay occur, and delusional parasitosis in an older person should prompt assessment for depression as well as for organic causes.",
    "Depressive stupor with mutism and immobility occurs and overlaps with catatonia, which should be screened for since it is treatable.",
    "Irritability and behavioural change may be the presenting feature, particularly where dementia coexists.",
    "Rating scales: the Geriatric Depression Scale, in 30, 15 or 4-item forms, which excludes somatic items and is validated in this population; and the Cornell Scale for Depression in Dementia, which is informant-based and is the correct instrument where dementia is present.",
    "The PHQ-9 and HADS are usable but the GDS is better matched to this population.",
    "Always ask about suicidal ideation directly. Older people rarely volunteer it and expect not to be asked.",
    "Always exclude physical causes: thyroid function, B12 and folate, calcium, full blood count, renal and liver function, and a medication review."
  ],
  cards:[
    ["How does depression present differently in older people?","With less reported low mood and more somatic complaint: fatigue, poor sleep, poor appetite, weight loss and pain. Anhedonia, hopelessness, worthlessness, guilt and suicidal ideation carry the diagnostic weight. Agitation, hypochondriacal preoccupation, cognitive complaint and psychotic features are all proportionately commoner than in younger adults."],
    ["Distinguish depressive pseudodementia from dementia.","Pseudodementia shows abrupt onset with a clearer date, complaint of memory difficulty rather than concealment, prominent don't know responses rather than near-miss errors, variable effort and performance, preserved insight, and improvement with antidepressant treatment. A substantial proportion nonetheless develop dementia within several years, so follow-up is required."],
    ["Which rating scales are appropriate in this population?","The Geriatric Depression Scale, available in 30, 15 and 4-item forms, which excludes somatic items and is validated in older people; and the Cornell Scale for Depression in Dementia, which is informant-based and is the correct instrument where dementia is present."],
    ["Which psychotic features are characteristic of depression in old age?","Mood-congruent delusions of guilt, poverty, nihilism, illness and deserved punishment. Cotard's syndrome, the nihilistic delusion of being dead or lacking internal organs, is classically described in this group, and delusions of infestation and bodily decay occur."]
  ],
  note:[
    "Anhedonia is more reliable than reported low mood in this population.",
    "The substitutive approach gives weight to cognitive rather than somatic criteria.",
    "Depressive stupor overlaps with catatonia, which should be screened for as it is treatable.",
    "Older people rarely volunteer suicidal ideation and expect not to be asked.",
    "Exclude thyroid disease, B12 and folate deficiency, hypercalcaemia and anaemia in every case."
  ],
  refs:["oxoldage","oyebode","nice"] };

TEACH["8.5.6.4"] = { free:false,
  simple:"Depression in older people responds to treatment just as well as it does at thirty. It just takes longer to work, needs a smaller starting dose, and requires someone to check that the person is not becoming hyponatraemic.",
  teach:[
    "Older people respond to antidepressants as well as younger people. The belief that they do not is a persistent and harmful clinical myth.",
    "Start low and go slow, but reach a therapeutic dose. Under-dosing is the commonest reason for apparent non-response in this group, and starting low is not a reason for staying low.",
    "Time to response is longer, commonly six to twelve weeks rather than four to six, so treatment should not be abandoned too early.",
    "SSRIs are first-line. Sertraline, citalopram and escitalopram are commonly used; mirtazapine is useful where appetite and sleep are prominent.",
    "Hyponatraemia through SIADH is the specific risk. Older people, women, low body weight, diuretic use and other risk factors increase it, and sodium should be checked at baseline and around two weeks after starting or increasing.",
    "Hyponatraemia presents as confusion, drowsiness, falls and seizures, and is frequently mistaken for worsening depression or for dementia.",
    "Citalopram and escitalopram carry dose-related QT prolongation with lower maximum doses in people over 65: 20 milligrams for citalopram and 10 milligrams for escitalopram.",
    "SSRIs increase the risk of gastrointestinal bleeding, particularly with concurrent NSAIDs, aspirin or anticoagulation, and a proton pump inhibitor should be considered.",
    "SSRIs increase falls and fracture risk, and this must be weighed rather than ignored, though untreated depression also increases falls.",
    "Tricyclics are effective but poorly tolerated: anticholinergic effects, orthostatic hypotension, cardiac conduction effects and danger in overdose. Lofepramine and nortriptyline are better tolerated than amitriptyline.",
    "Avoid amitriptyline for depression in older people. Its anticholinergic burden is substantial and it appears on both Beers and STOPP lists.",
    "Venlafaxine and duloxetine are effective; venlafaxine raises blood pressure at higher doses and requires monitoring.",
    "Mirtazapine is useful for insomnia and poor appetite, and is not associated with sexual dysfunction, but causes sedation and weight gain.",
    "Augmentation: lithium has good evidence in treatment-resistant late-life depression, requires careful monitoring given renal function, and lower target levels are used.",
    "Antipsychotic augmentation with aripiprazole has trial evidence in late-life treatment-resistant depression, and the OPTIMUM trial supported it while showing increased falls.",
    "ECT is highly effective in older people, arguably more so than in younger adults, and is first-line where the depression is life-threatening through food and fluid refusal, or where there is psychotic depression or catatonia.",
    "Age is not a contraindication to ECT. Cognitive adverse effects are more likely, and right unilateral placement reduces them.",
    "Psychological treatment works as well as in younger adults. CBT, problem-solving therapy and behavioural activation all have evidence, with problem-solving therapy particularly suited to executive dysfunction.",
    "Social intervention is frequently the effective treatment: addressing isolation, practical support, day activity, and treating pain and sensory impairment.",
    "Continue treatment longer than in younger adults, for at least a year after remission, since relapse rates are higher."
  ],
  cards:[
    ["What is the specific prescribing risk of SSRIs in older people?","Hyponatraemia through SIADH, with risk increased by female sex, low body weight, diuretic use and other medications. It presents as confusion, drowsiness, falls and seizures, and is frequently mistaken for worsening depression or dementia. Sodium should be checked at baseline and around two weeks after starting or increasing."],
    ["What are the dose limits for citalopram and escitalopram in people over 65?","Twenty milligrams daily for citalopram and ten milligrams daily for escitalopram, because of dose-related QT interval prolongation."],
    ["What is the place of ECT in late-life depression?","Highly effective, arguably more so than in younger adults, and first-line where the depression is life-threatening through refusal of food and fluid, or where there is psychotic depression or catatonia. Age is not a contraindication, though cognitive adverse effects are more likely and right unilateral placement reduces them."],
    ["How does antidepressant treatment differ in older people?","Start at a lower dose but reach a therapeutic dose, since under-dosing is the commonest cause of apparent non-response. Allow longer for response, commonly six to twelve weeks. Continue for at least a year after remission because relapse rates are higher."],
    ["Which antidepressant should be avoided in older people and why?","Amitriptyline, because of substantial anticholinergic burden causing cognitive impairment, falls, urinary retention and constipation, together with orthostatic hypotension and cardiac conduction effects. It appears on both the Beers and STOPP lists."]
  ],
  note:[
    "The belief that older people respond less well to antidepressants is a harmful myth.",
    "SSRIs increase gastrointestinal bleeding risk, particularly with NSAIDs, aspirin or anticoagulants.",
    "Lithium augmentation has good evidence with lower target levels and careful renal monitoring.",
    "The OPTIMUM trial supported aripiprazole augmentation while showing increased falls.",
    "Problem-solving therapy is particularly suited to depression with executive dysfunction."
  ],
  refs:["nice","maudsley","oxoldage"] };

TEACH["8.5.6.5"] = { free:false,
  simple:"Older people with depression get better as often as younger ones, but they relapse more and they die sooner. The dying sooner is not mainly from suicide; it is from the heart.",
  teach:[
    "Acute treatment response rates are comparable to those in younger adults, at around 50 to 60 per cent, though remission takes longer.",
    "Relapse and recurrence rates are higher than in younger adults, which is the basis for longer maintenance treatment.",
    "The classical rule of thirds at long-term follow-up: around a third remain well, a third relapse and recover repeatedly, and a third have a chronic course or die.",
    "Chronicity is commoner than in younger adults, particularly where there is physical illness, disability, cognitive impairment or persistent social adversity.",
    "Mortality is substantially raised. Depression is an independent predictor of mortality in older people, after adjustment for physical illness and disability.",
    "The excess mortality is predominantly cardiovascular rather than from suicide, although suicide risk is also raised and the male rate in later life is high.",
    "Mechanisms proposed for the cardiovascular excess: reduced adherence to treatment, reduced activity, poorer self-care, autonomic dysregulation, inflammation and platelet activation.",
    "Depression after myocardial infarction and after stroke independently predicts mortality in both conditions.",
    "Poor prognostic factors: greater severity, psychotic features, comorbid physical illness and disability, cognitive impairment particularly executive dysfunction, later onset, persistent social adversity, and poor treatment adherence.",
    "Executive dysfunction is a specific and useful predictor of poor and slow antidepressant response and of early relapse.",
    "Good prognostic factors: earlier onset with a history of previous good recovery, absence of significant physical illness, good social support, and early treatment response.",
    "The relationship with dementia is important: late-life depression is associated with roughly double the subsequent risk of dementia, and depression may be a prodrome, a risk factor, or both.",
    "That association means cognitive follow-up after an episode of late-life depression is appropriate rather than optional.",
    "Functional outcome lags symptomatic recovery, and residual disability is common, which argues for rehabilitation and social intervention alongside symptom treatment.",
    "Quality of life improves with treatment, and treating depression in physically ill older people improves adherence, function and, in several studies, survival."
  ],
  cards:[
    ["Compare treatment response and relapse in late-life depression.","Acute response rates are comparable to younger adults at around 50 to 60 per cent, though remission takes longer. Relapse and recurrence rates are higher, which is the basis for maintenance treatment of at least a year after remission."],
    ["What drives excess mortality in late-life depression?","Predominantly cardiovascular disease rather than suicide, with depression an independent predictor of mortality after adjustment for physical illness and disability. Proposed mechanisms include reduced adherence and activity, poorer self-care, autonomic dysregulation, inflammation and platelet activation."],
    ["What is the relationship between late-life depression and dementia?","Late-life depression is associated with roughly double the subsequent risk of dementia. Depression may be a prodromal feature, an independent risk factor, or both, which makes cognitive follow-up after an episode appropriate rather than optional."],
    ["Which cognitive feature predicts poor outcome?","Executive dysfunction, which predicts slower and poorer antidepressant response, higher relapse and greater residual disability, and directs treatment towards problem-solving therapy and behavioural activation."]
  ],
  note:[
    "Chronicity is commoner than in younger adults, particularly with physical illness and disability.",
    "Depression after myocardial infarction and after stroke independently predicts mortality.",
    "Functional outcome lags symptomatic recovery and residual disability is common.",
    "Treating depression in physically ill older people improves adherence, function and in several studies survival."
  ],
  refs:["oxoldage","nice","companion"] };

/* ---------- 8.5.7 BIPOLAR DISORDER ---------- */

TEACH["8.5.7.1"] = { free:false,
  simple:"Bipolar disorder does not disappear with age, but it changes shape. It becomes more depressive, more frequent, and a substantial number of people have their first manic episode after seventy, which is almost always caused by something in the brain.",
  teach:[
    "Prevalence of bipolar disorder in people over 65 in the community is around 0.5 to 1 per cent, lower than in younger adults.",
    "The apparent decline in prevalence with age is partly real, through excess mortality, and partly artefactual through diagnostic under-recognition.",
    "Despite the lower community prevalence, older people with bipolar disorder account for a disproportionate share of old age psychiatry inpatient beds, of the order of 5 to 10 per cent of admissions.",
    "Around 5 to 10 per cent of new manic presentations occur after the age of 50, and a smaller proportion after 65.",
    "Late-onset mania, with first episode after around 50 to 60, is a distinct group with a high rate of identifiable organic cause and less family history.",
    "Secondary mania, the term for mania caused by an identifiable organic factor, accounts for a substantial proportion of late-onset presentations.",
    "The sex ratio in older people is more equal than in younger adults, or slightly female-predominant in clinical samples.",
    "Numbers are projected to rise substantially with population ageing, and services for this group are poorly developed."
  ],
  cards:[
    ["What proportion of new manic presentations occur late in life, and what does it imply?","Around 5 to 10 per cent occur after age 50, with a smaller proportion after 65. Late-onset mania has a high rate of identifiable organic cause and less family history, so it should prompt thorough investigation rather than being assumed to be primary bipolar disorder."],
    ["Why do older people with bipolar disorder occupy a disproportionate share of beds?","Because although community prevalence is lower than in younger adults, at around 0.5 to 1 per cent, the illness in later life is associated with more frequent episodes, greater physical comorbidity and greater difficulty managing in the community, so admissions are more frequent and longer."]
  ],
  note:[
    "The apparent decline with age is partly real through excess mortality and partly diagnostic under-recognition.",
    "Secondary mania accounts for a substantial proportion of late-onset presentations.",
    "The sex ratio is more equal in older people than in younger adults.",
    "Numbers are projected to rise substantially with population ageing."
  ],
  refs:["oxoldage","companion"] };

TEACH["8.5.7.2"] = { free:false,
  simple:"If someone becomes manic for the first time at seventy-five, the first assumption should not be bipolar disorder. It should be a stroke, a tumour, a drug or a dementia, until you have shown otherwise.",
  teach:[
    "Late-onset mania has weaker genetic loading and less family history than early-onset bipolar disorder, and a higher rate of identifiable neurological cause.",
    "Secondary mania causes: stroke particularly right-sided lesions, tumour, traumatic brain injury, epilepsy, multiple sclerosis, HIV, neurosyphilis, and frontotemporal dementia.",
    "Right hemisphere lesions, particularly right orbitofrontal and basotemporal, are over-represented in secondary mania, in contrast with the classical association of left-sided lesions with depression.",
    "Metabolic and endocrine causes: hyperthyroidism, Cushing's syndrome, B12 deficiency, and uraemia.",
    "Drug causes: corticosteroids, levodopa and dopamine agonists, thyroxine, stimulants, antidepressants, and drug withdrawal.",
    "Corticosteroid-induced mania is dose-related and common, and is the single most frequent iatrogenic cause in this age group.",
    "Vascular mania has been proposed on the same reasoning as vascular depression, with white matter hyperintensity burden greater in late-onset than early-onset bipolar disorder.",
    "Neuroimaging in late-onset bipolar disorder shows greater white matter hyperintensity burden and more silent infarcts, supporting a vascular contribution.",
    "In people with long-standing bipolar disorder growing old, the aetiology is that of bipolar disorder generally, with age-related factors modifying course rather than causing it.",
    "Cognitive impairment accumulates in long-standing bipolar disorder, correlating with the number of previous episodes, which supports a neuroprogressive account.",
    "Whether long-standing bipolar disorder increases dementia risk is debated. Several cohort studies suggest raised risk, with lithium treatment possibly protective, though the evidence is observational.",
    "The lithium and dementia literature is interesting and not settled: observational studies suggest reduced dementia incidence in lithium-treated patients, and lithium has plausible neuroprotective mechanisms including GSK-3 inhibition."
  ],
  cards:[
    ["What causes should be excluded in late-onset mania?","Stroke, particularly right-sided orbitofrontal and basotemporal lesions; tumour; traumatic brain injury; epilepsy; multiple sclerosis; HIV and neurosyphilis; frontotemporal dementia; hyperthyroidism; Cushing's syndrome; B12 deficiency; and drug causes including corticosteroids, levodopa and dopamine agonists, thyroxine and antidepressants."],
    ["Which lesion location is associated with secondary mania?","Right hemisphere lesions, particularly right orbitofrontal and basotemporal, in contrast with the classical though contested association of left anterior lesions with post-stroke depression."],
    ["What is the evidence on lithium and dementia?","Observational cohort studies suggest reduced dementia incidence in lithium-treated patients, with plausible neuroprotective mechanisms including GSK-3 inhibition. The evidence is observational rather than randomised and the question is not settled."]
  ],
  note:[
    "Corticosteroid-induced mania is dose-related and the commonest iatrogenic cause in this age group.",
    "Late-onset bipolar disorder shows greater white matter hyperintensity burden and more silent infarcts.",
    "Cognitive impairment in long-standing bipolar disorder correlates with the number of previous episodes.",
    "Genetic loading and family history are weaker in late-onset presentations."
  ],
  refs:["lishman","oxoldage","maudsley"] };

TEACH["8.5.7.3"] = { free:false,
  simple:"Mania in an old person often looks like confusion rather than elation. They are irritable and disorganised rather than euphoric, and the first thought on the ward is usually delirium or dementia.",
  teach:[
    "Elation is less prominent than in younger adults. Irritability, hostility and querulousness are the more usual presentation.",
    "Confusion and disorientation are common, so mania in an older person is frequently mistaken for delirium, and the two may coexist.",
    "Mixed states are commoner in older people, and the depressive component is more prominent throughout the illness.",
    "Psychotic symptoms occur frequently, and mood-incongruent psychosis is commoner than in younger adults, contributing to misdiagnosis as late-onset psychosis.",
    "Cognitive impairment during episodes is more marked, and does not always fully resolve between episodes.",
    "Grandiosity is often less expansive and more mundane in content, concerning money, property or family matters rather than global themes.",
    "Physical exhaustion develops quickly. Sustained overactivity in an older person produces dehydration, exhaustion, falls and physical deterioration much faster than in a younger patient.",
    "That rapid physical deterioration is the practical reason mania in an older person is more urgent, not less.",
    "Distinguishing mania from delirium: mania has a longer time course, preserved attention relative to the degree of disturbance, a mood-congruent quality to the disorganisation, and often a previous history.",
    "Distinguishing mania from frontotemporal dementia: disinhibition in frontotemporal dementia is not accompanied by elevated mood, reduced sleep need or pressure of speech, and progresses rather than remits.",
    "Distinguishing from delirium and dementia is helped by collateral history establishing whether the person has ever been like this before.",
    "Bipolar depression in older people presents as depression does generally in this age group, with somatic complaint, agitation and cognitive impairment.",
    "Investigation of any first manic episode in later life: full physical examination, bloods including thyroid function and B12, medication review, and structural neuroimaging.",
    "Neuroimaging is indicated in all first-onset mania after around 50, which is a lower threshold than for depression."
  ],
  cards:[
    ["How does mania present differently in older people?","With irritability, hostility and querulousness rather than elation; frequent confusion and disorientation leading to misdiagnosis as delirium; commoner mixed states with a more prominent depressive component; more frequent and more often mood-incongruent psychosis; more marked cognitive impairment; and grandiosity with mundane rather than global content."],
    ["How is mania distinguished from delirium in an older person?","Mania has a longer time course over days to weeks rather than hours, attention is relatively preserved for the degree of behavioural disturbance, the disorganisation has a mood-congruent quality, and there is often a previous psychiatric history. Collateral history establishing whether the person has ever been like this before is decisive."],
    ["Why is mania in an older person more urgent than in a younger one?","Because sustained overactivity produces dehydration, exhaustion, falls and physical deterioration far more rapidly in a physically frail person, so the physical consequences become life-threatening within days."],
    ["What investigation is required in first-onset mania after 50?","Full physical examination, blood tests including thyroid function and B12, a thorough medication review, and structural neuroimaging. The threshold for imaging is lower than in first-onset depression."]
  ],
  note:[
    "Cognitive impairment during episodes may not fully resolve between them.",
    "Disinhibition in frontotemporal dementia lacks elevated mood, reduced sleep need and pressure of speech.",
    "Mood-incongruent psychosis contributes to misdiagnosis as late-onset psychosis.",
    "Mania and delirium may coexist rather than being alternatives."
  ],
  refs:["oxoldage","oyebode","lishman"] };

TEACH["8.5.7.4"] = { free:false,
  simple:"The same drugs are used but at lower doses and with far more monitoring, because the kidneys are older, the heart is older, and the person is probably taking six other things.",
  teach:[
    "The evidence base is thin. Most bipolar trials exclude older people, so treatment is extrapolated from younger populations, and this should be acknowledged rather than glossed over.",
    "The GERI-BD trial is the principal randomised evidence in older adults, comparing lithium with valproate in late-life mania and finding lithium modestly more effective and reasonably tolerated.",
    "Lithium remains effective in older people and should not be avoided on grounds of age alone.",
    "Lithium in older people: lower doses achieve the same plasma level because of reduced renal clearance, and target levels are lower, commonly 0.4 to 0.8 millimoles per litre.",
    "Monitor more frequently: levels, renal function and thyroid function at least six-monthly and more often where renal function is changing or medication has altered.",
    "Lithium toxicity risk is much higher: reduced renal reserve, dehydration from intercurrent illness or hot weather, and interactions with NSAIDs, thiazides, ACE inhibitors and angiotensin receptor blockers, all of which are commonly prescribed in this age group.",
    "Toxicity presents as coarse tremor, ataxia, dysarthria and confusion, and in an older person is very frequently mistaken for delirium of another cause or for progression of dementia.",
    "Valproate is widely used, is better tolerated by some, and carries risks of sedation, thrombocytopenia, hyperammonaemia and, importantly, an association with parkinsonism and cognitive impairment in older people.",
    "Valproate-induced parkinsonism and cognitive impairment are reversible and under-recognised, and should be considered in any older person on valproate with new movement or cognitive change.",
    "Antipsychotics: effective in acute mania but carry raised stroke and mortality risk in older people, particularly where dementia is present, and metabolic and extrapyramidal effects are more marked.",
    "Quetiapine and olanzapine are commonly used; aripiprazole has a lower metabolic burden; risperidone raises stroke risk and prolactin.",
    "Lamotrigine is useful for depressive relapse prevention and is generally well tolerated in older people, requiring slow titration.",
    "Carbamazepine is problematic: enzyme induction with extensive interactions, hyponatraemia which is already a risk in this group, and cognitive effects.",
    "Antidepressants in bipolar depression carry the same switch concerns, and should be used with an antimanic agent where used at all.",
    "ECT is effective in both poles in older people and is particularly useful in severe mania with physical deterioration, where rapid response is needed.",
    "Physical health monitoring is essential: renal function, thyroid, calcium, weight, glucose, lipids, blood pressure and ECG.",
    "Deprescribing and simplification are legitimate goals. Older people with bipolar disorder frequently accumulate polypharmacy over decades that no longer serves them.",
    "Psychoeducation, routine stabilisation and family involvement work as they do in younger adults, and social factors including isolation and bereavement should be addressed directly."
  ],
  cards:[
    ["What is the GERI-BD trial and what did it show?","The principal randomised trial of treatment in late-life mania, comparing lithium with valproate. It found lithium modestly more effective and reasonably tolerated, supporting the continued use of lithium in older people."],
    ["How does lithium prescribing differ in older people?","Lower doses achieve the same plasma level because of reduced renal clearance, and target levels are lower, commonly 0.4 to 0.8 millimoles per litre. Monitoring must be more frequent, and toxicity risk is much higher through reduced renal reserve, dehydration and interactions with NSAIDs, thiazides, ACE inhibitors and angiotensin receptor blockers."],
    ["What is the specific concern with valproate in older people?","An association with reversible parkinsonism and cognitive impairment, which is under-recognised and should be considered in any older person on valproate developing new movement or cognitive change, alongside sedation, thrombocytopenia and hyperammonaemia."],
    ["How does lithium toxicity present in an older person, and why is it dangerous?","With coarse tremor, ataxia, dysarthria, vomiting and confusion progressing to seizures and coma. It is dangerous because it is very frequently mistaken for delirium of another cause or for progression of dementia, delaying recognition."]
  ],
  note:[
    "Most bipolar trials exclude older people, so treatment is largely extrapolated.",
    "Antipsychotics carry raised stroke and mortality risk in older people, particularly with dementia.",
    "Carbamazepine causes hyponatraemia, which is already a risk in this group.",
    "ECT is effective in both poles and useful in severe mania with physical deterioration.",
    "Deprescribing accumulated polypharmacy is a legitimate treatment goal."
  ],
  refs:["maudsley","nice","oxoldage"] };

TEACH["8.5.7.5"] = { free:false,
  simple:"Bipolar disorder in old age is more relentless than it was earlier: episodes come closer together, more of them are depressive, and cognition does not fully recover between them.",
  teach:[
    "Episode frequency tends to increase with age and with the number of previous episodes, consistent with the kindling model.",
    "The proportion of time spent depressed increases with age, and depression rather than mania dominates the later course.",
    "Interepisode recovery becomes less complete, with residual symptoms and residual cognitive impairment more common.",
    "Cognitive impairment persists between episodes in a substantial proportion, affecting processing speed, executive function and verbal memory, and correlates with cumulative episode number.",
    "Whether this represents neuroprogression, accumulated vascular burden, medication effect or a combination is unresolved, and the honest position is that all probably contribute.",
    "Dementia risk appears raised in long-standing bipolar disorder in several cohort studies, with lithium possibly protective, though the evidence is observational.",
    "Mortality is substantially raised, with life expectancy reduced by around a decade or more.",
    "Excess mortality is dominated by cardiovascular and metabolic disease rather than suicide, though suicide risk remains raised throughout life.",
    "Physical comorbidity is high: obesity, diabetes, cardiovascular disease, chronic obstructive pulmonary disease, and the metabolic consequences of decades of treatment.",
    "Poor prognostic factors: greater cumulative episode number, rapid cycling, mixed states, comorbid substance misuse, poor adherence, cognitive impairment and vascular burden.",
    "Good prognostic factors: good adherence, stable social support, absence of substance misuse, good lithium response, and preserved cognition.",
    "Functional outcome is heterogeneous. Some people function well into late life, and long duration of illness does not by itself predict poor functioning.",
    "Adherence remains the central long-term issue, complicated in later life by polypharmacy, cognitive impairment and physical frailty.",
    "Service transition from adult to old age psychiatry is a recognised point of loss of continuity, and long-standing therapeutic relationships are frequently broken by an arbitrary age boundary."
  ],
  cards:[
    ["How does the course of bipolar disorder change with age?","Episode frequency tends to increase, consistent with kindling; the proportion of time spent depressed increases so that depression dominates the later course; interepisode recovery becomes less complete; and residual cognitive impairment becomes more common, correlating with cumulative episode number."],
    ["What drives excess mortality in older people with bipolar disorder?","Cardiovascular and metabolic disease predominantly, reflecting decades of illness and treatment, with life expectancy reduced by around a decade or more. Suicide risk remains raised throughout life but contributes less to the overall excess."],
    ["Is cognitive impairment in long-standing bipolar disorder explained?","No. Neuroprogression, accumulated vascular burden, cumulative medication effect and shared vulnerability have all been proposed, and all probably contribute. Several cohort studies suggest raised dementia risk, with lithium possibly protective on observational evidence."]
  ],
  note:[
    "Long duration of illness does not by itself predict poor functioning; outcome is heterogeneous.",
    "Adherence is complicated in later life by polypharmacy, cognitive impairment and frailty.",
    "Physical comorbidity includes obesity, diabetes, cardiovascular disease and COPD.",
    "Transition from adult to old age services is a recognised point of loss of continuity."
  ],
  refs:["oxoldage","companion","maudphys"] };

/* ---------- 8.5.8 LATE LIFE PSYCHOSIS ---------- */

TEACH["8.5.8.1"] = { free:true,
  simple:"Some people develop schizophrenia-like illness for the first time in their sixties, seventies or eighties. It is commoner in women, commoner in the deaf, and it was argued about for fifty years before anyone agreed what to call it.",
  teach:[
    "Terminology has a history. Manfred Bleuler coined late-onset schizophrenia in 1943 for onset after 40; Roth described late paraphrenia in 1955 for onset after 60.",
    "An international consensus in 2000 settled on two terms: late-onset schizophrenia for onset between 40 and 60, and very-late-onset schizophrenia-like psychosis for onset after 60.",
    "Around 15 to 20 per cent of people with schizophrenia have onset after 40, and a smaller proportion after 60.",
    "Prevalence of very-late-onset schizophrenia-like psychosis in the community is around 0.5 to 1 per cent of people over 65, rising with age.",
    "Female predominance is marked and increases with age at onset, reaching ratios of the order of five or more to one in the oldest onset group.",
    "That female predominance is the reverse of early-onset schizophrenia, where men predominate, and is one of the strongest arguments that late-onset presentations are a distinct group.",
    "Psychotic symptoms are far commoner overall in old age than schizophrenia-like psychosis alone, since psychosis in dementia and in delirium accounts for a much larger number of cases.",
    "Sensory impairment, particularly deafness, is markedly over-represented, and social isolation is nearly universal in this group.",
    "Never-married status, living alone and childlessness are consistently over-represented, though whether these are cause or consequence is not resolved."
  ],
  cards:[
    ["Give the current terminology for late-onset psychosis.","An international consensus in 2000 defined late-onset schizophrenia for onset between 40 and 60, and very-late-onset schizophrenia-like psychosis for onset after 60. The historical terms are Manfred Bleuler's late-onset schizophrenia from 1943 and Roth's late paraphrenia from 1955."],
    ["What is the sex ratio in very-late-onset schizophrenia-like psychosis?","Markedly female-predominant, with ratios of the order of five or more to one in the oldest onset group, which is the reverse of early-onset schizophrenia and one of the strongest arguments that this is a distinct group."]
  ],
  note:[
    "Around 15 to 20 per cent of people with schizophrenia have onset after 40.",
    "Community prevalence after 65 is around 0.5 to 1 per cent, rising with age.",
    "Deafness and social isolation are markedly over-represented.",
    "Psychosis in dementia and delirium accounts for far more cases overall than late-onset schizophrenia-like psychosis."
  ],
  refs:["oxoldage","companion"] };

TEACH["8.5.8.2"] = { free:false,
  simple:"Deafness and isolation are the two things that keep appearing. If you cannot hear what people are saying and there is nobody to check your interpretation against, an ordinary misunderstanding has nothing to correct it.",
  teach:[
    "Genetic loading is lower than in early-onset schizophrenia, and family history of schizophrenia is less often present, though it is higher than in the general population.",
    "Sensory impairment, particularly acquired conservative deafness of long standing, is strongly associated. It is one of the most consistent findings in this literature.",
    "The proposed mechanism is sensory deprivation with impaired reality testing: reduced sensory input, misperception, and absence of the ordinary corrective feedback of conversation.",
    "Correcting sensory impairment is therefore an intervention, not merely supportive care, and hearing aid provision should be pursued vigorously.",
    "Social isolation is nearly universal, and the same reasoning applies: without other people, an idea has nothing to be tested against.",
    "Whether isolation is cause or consequence is contested, since premorbid personality in this group is frequently described as suspicious, sensitive, solitary and quarrelsome.",
    "Premorbid schizoid and paranoid personality traits are consistently reported and may represent an attenuated lifelong vulnerability.",
    "Structural brain change: some studies find increased white matter hyperintensities and modest structural abnormality, but the changes are less marked than in dementia and do not amount to a neurodegenerative picture.",
    "Cerebrovascular disease contributes in some cases, and vascular risk factor burden is higher than in age-matched controls in several studies.",
    "The relationship with dementia is important: some people diagnosed with very-late-onset schizophrenia-like psychosis subsequently develop dementia, with rates in follow-up studies substantially above expected.",
    "That finding means the diagnosis carries an obligation to follow up cognition rather than to regard the picture as settled.",
    "The oestrogen hypothesis is invoked for the female predominance: withdrawal of oestrogen after the menopause removes a protective dopaminergic modulation, which would also explain the second peak of onset in women.",
    "Migration and minority status raise risk in this group as in younger people, consistent with the social defeat account.",
    "Organic causes must be excluded in every case: delirium, dementia particularly Lewy body disease, stroke, tumour, epilepsy, endocrine disorder, B12 deficiency, and drug causes."
  ],
  cards:[
    ["Why is sensory impairment important in late-onset psychosis?","Because acquired long-standing deafness is one of the most consistent associations, with the proposed mechanism being sensory deprivation producing misperception and impaired reality testing in the absence of ordinary conversational correction. Correcting sensory impairment is therefore a therapeutic intervention rather than supportive care alone."],
    ["What does the oestrogen hypothesis propose?","That oestrogen exerts a protective modulating effect on dopaminergic transmission, so its withdrawal after the menopause removes that protection. It is invoked to explain both the marked female predominance in late-onset psychosis and the second peak of schizophrenia onset in women around the menopause."],
    ["What is the relationship between very-late-onset schizophrenia-like psychosis and dementia?","A substantial proportion subsequently develop dementia at rates above expected in follow-up studies, so the diagnosis carries an obligation to monitor cognition rather than to regard the picture as settled."],
    ["How does the genetic and premorbid picture differ from early-onset schizophrenia?","Genetic loading is lower and family history less often present, though still above population rates. Premorbid schizoid and paranoid personality traits are consistently reported and may represent an attenuated lifelong vulnerability."]
  ],
  note:[
    "Social isolation is nearly universal, though cause and consequence are hard to separate.",
    "Structural change is modest and does not amount to a neurodegenerative picture.",
    "Vascular risk factor burden is higher than in age-matched controls in several studies.",
    "Organic causes must be excluded in every case before the diagnosis is accepted."
  ],
  refs:["oxoldage","lishman","companion"] };

TEACH["8.5.8.3"] = { free:false,
  simple:"The delusions are usually about the immediate physical world: people coming through the walls, things being moved, neighbours watching. Everything else about the person, the personality, the warmth, the way they talk, is intact.",
  teach:[
    "Persecutory delusions dominate and are typically well systematised, highly specific, and concerned with the immediate physical environment and with neighbours.",
    "Partition delusions are characteristic and near-diagnostic: the belief that people, objects, gases or radiation pass through what should be solid barriers, walls, floors, ceilings and doors.",
    "Partition delusions occur in a substantial proportion and are far commoner than in early-onset schizophrenia, which is one of the strongest phenomenological arguments for a distinct syndrome.",
    "Hallucinations are common, most often auditory, and are frequently derogatory or running commentary. Visual, olfactory and tactile hallucinations occur more often than in early-onset schizophrenia.",
    "Multimodal hallucinations, involving more than one sensory modality, are commoner than in younger patients and should prompt careful exclusion of organic causes rather than being accepted at face value.",
    "Negative symptoms and formal thought disorder are notably uncommon, in sharp contrast with early-onset schizophrenia.",
    "Personality and affect are well preserved. The person remains warm, socially appropriate and engaged outside the delusional system, which is why the presentation can be startling.",
    "Cognitive impairment is present but is milder than in dementia, and any progressive impairment should prompt reconsideration of the diagnosis.",
    "Insight is absent within the delusional system but functioning outside it is frequently maintained, and the person may continue to manage independently.",
    "The differential is wide and must be worked through: delirium, dementia particularly Lewy body disease, psychotic depression, delusional disorder, mania, substance-induced psychosis, and Charles Bonnet syndrome.",
    "Charles Bonnet syndrome is distinguished by intact insight, absence of delusion, and complex visual hallucination in the setting of visual impairment.",
    "Delusional disorder is distinguished by a circumscribed non-bizarre delusional system without prominent hallucinations, and by preserved functioning elsewhere.",
    "Delusional parasitosis, the belief of infestation with parasites, occurs in older people and requires exclusion of organic causes, drug causes including stimulants, and depression.",
    "Investigation: cognitive assessment, bloods including B12, folate, thyroid, calcium and inflammatory markers, medication review, hearing and vision assessment, and neuroimaging in first presentation.",
    "Hearing and vision assessment is not optional in this group and is frequently omitted."
  ],
  cards:[
    ["What are partition delusions?","The belief that people, objects, gases or radiation pass through what should be solid barriers such as walls, floors, ceilings and doors. They occur in a substantial proportion of very-late-onset schizophrenia-like psychosis, are far commoner than in early-onset schizophrenia, and are near-diagnostic of the syndrome."],
    ["How does the symptom profile differ from early-onset schizophrenia?","Persecutory delusions are well systematised and concerned with the immediate physical environment; hallucinations are common and more often multimodal; negative symptoms and formal thought disorder are notably uncommon; and personality and affect are well preserved outside the delusional system."],
    ["Distinguish late-onset psychosis from Charles Bonnet syndrome.","Charles Bonnet syndrome features complex visual hallucinations in a person with visual impairment, with full insight, intact cognition and no delusional interpretation. Late-onset psychosis involves delusional conviction, typically persecutory, with absent insight within the delusional system."],
    ["What investigations are required at first presentation?","Cognitive assessment, blood tests including B12, folate, thyroid function, calcium and inflammatory markers, a full medication review, formal hearing and vision assessment, and structural neuroimaging. Hearing and vision assessment is frequently omitted and should not be."]
  ],
  note:[
    "Multimodal hallucinations should prompt careful exclusion of organic causes.",
    "Progressive cognitive impairment should prompt reconsideration of the diagnosis.",
    "The person may continue to function independently outside the delusional system.",
    "Delusional parasitosis requires exclusion of organic causes, stimulants and depression."
  ],
  refs:["oyebode","oxoldage","lishman"] };

TEACH["8.5.8.4"] = { free:false,
  simple:"Antipsychotics work, at a fraction of the usual dose, and the hardest part is not the prescribing. It is getting someone who believes the neighbours are gassing them to accept a tablet from a stranger.",
  teach:[
    "Antipsychotics are effective, with response rates broadly comparable to early-onset schizophrenia, though the evidence base is limited by exclusion of older people from trials.",
    "Doses required are substantially lower, commonly a quarter to a half of those used in younger adults, and starting doses lower still.",
    "Start low and go slow, but titrate to effect. Both under-treatment and over-treatment are common in this group.",
    "Second-generation antipsychotics are preferred for lower extrapyramidal risk. Amisulpride, risperidone, olanzapine, quetiapine and aripiprazole are all used.",
    "Older people are more sensitive to extrapyramidal effects, and tardive dyskinesia incidence is several times higher than in younger adults, rising with age and with duration of exposure.",
    "That tardive dyskinesia risk is the strongest argument for the lowest effective dose and for periodic review of whether treatment remains necessary.",
    "Other adverse effects of concern: orthostatic hypotension and falls, sedation, anticholinergic effects, QT prolongation, metabolic effects, and stroke risk where dementia coexists.",
    "Where dementia coexists the raised stroke and mortality risk applies and changes the risk-benefit calculation substantially.",
    "Depot preparations are useful where adherence is poor, which it frequently is given absent insight, and low-dose depots are well tolerated.",
    "Engagement is the central clinical problem. The person is by definition suspicious, frequently isolated, and often does not regard themselves as unwell.",
    "Practical engagement strategies: persistence over time, a single consistent worker, meeting on the person's terms and in their home, addressing the practical concerns they raise, and avoiding confrontation of the delusion.",
    "Do not argue with the delusion and do not collude with it. Acknowledge the distress it causes and work on what can be agreed.",
    "Correct sensory impairment. Hearing aid provision and vision correction are therapeutic interventions in this group and are frequently the most useful thing done.",
    "Address isolation directly: day services, befriending, and re-establishing contact with family are meaningful interventions rather than adjuncts.",
    "Rehousing is sometimes proposed for partition delusions and generally fails, since the delusions follow the person to the new address.",
    "Compulsory treatment under the Mental Health Act is sometimes necessary and is more often used in this group than in early-onset psychosis because of absent insight and non-engagement.",
    "Monitor for tardive dyskinesia at every review using a structured examination, and consider dose reduction or withdrawal periodically."
  ],
  cards:[
    ["How do antipsychotic doses differ in late-onset psychosis?","Doses required are commonly a quarter to a half of those used in younger adults, with starting doses lower still. Titration should nonetheless reach an effective dose, since both under-treatment and over-treatment are common."],
    ["What is the principal long-term prescribing risk?","Tardive dyskinesia, whose incidence in older people is several times that in younger adults and rises with age and duration of exposure. This is the strongest argument for the lowest effective dose, structured monitoring at every review, and periodic reconsideration of whether treatment remains necessary."],
    ["What is the central clinical difficulty and how is it approached?","Engagement, since the person is by definition suspicious, usually isolated and typically without insight. The approach is persistence over time, a single consistent worker, meeting on the person's own terms and in their home, addressing the practical concerns they raise, and neither arguing with nor colluding with the delusion."],
    ["Which non-pharmacological interventions are genuinely therapeutic here?","Correction of sensory impairment, particularly hearing aid provision, and direct action on social isolation through day services, befriending and re-establishing family contact. Both are therapeutic interventions rather than supportive extras. Rehousing generally fails, as partition delusions follow the person."]
  ],
  note:[
    "Second-generation agents are preferred for lower extrapyramidal risk.",
    "Where dementia coexists, raised stroke and mortality risk alters the calculation substantially.",
    "Low-dose depot preparations are useful where adherence is poor and are well tolerated.",
    "Compulsory treatment is used more often than in early-onset psychosis because of non-engagement.",
    "Orthostatic hypotension, falls, QT prolongation and anticholinergic effects require monitoring."
  ],
  refs:["maudsley","nice","oxoldage"] };

TEACH["8.5.8.5"] = { free:false,
  simple:"The symptoms respond well to treatment and the person usually stays themselves. What does not resolve is the isolation, and a proportion turn out to have been in the early stages of a dementia.",
  teach:[
    "Symptomatic response to antipsychotic treatment is good, with the majority showing substantial improvement in positive symptoms.",
    "Functional outcome is better than in early-onset schizophrenia, because negative symptoms and cognitive deterioration are absent or mild and premorbid functioning was intact.",
    "The absence of the deteriorating course seen in early-onset schizophrenia is one of the clearest differences between the groups.",
    "Relapse on stopping medication is common, and long-term treatment is usually required, though at the lowest effective dose.",
    "Adherence is the main determinant of relapse, and absent insight makes it the central long-term problem.",
    "Social outcome is frequently poor despite symptomatic improvement, because the isolation that preceded the illness persists and is often deepened by it.",
    "Conversion to dementia occurs in a proportion at rates above expected in follow-up studies, so cognitive monitoring should continue.",
    "Where cognitive decline emerges, the original diagnosis should be revisited, since a proportion of late-onset psychosis represents the prodrome of a neurodegenerative process, particularly Lewy body disease.",
    "Poor prognostic factors: cognitive impairment at presentation, structural brain abnormality, sensory impairment left uncorrected, poor adherence, and complete social isolation.",
    "Good prognostic factors: preserved cognition, correction of sensory impairment, engagement with services, and some maintained social contact.",
    "Mortality is raised relative to age-matched peers, attributable to self-neglect, physical comorbidity and reduced healthcare engagement rather than to the psychosis itself.",
    "Self-neglect is a specific risk in this group, given isolation, suspicion of services and absent insight, and safeguarding considerations frequently arise.",
    "The overall message is more optimistic than for early-onset schizophrenia, provided the person can be engaged and kept on a low dose of medication."
  ],
  cards:[
    ["How does the outcome of late-onset psychosis compare with early-onset schizophrenia?","Symptomatic response to antipsychotics is good and functional outcome is better, because negative symptoms and cognitive deterioration are absent or mild and premorbid functioning was intact. The deteriorating course characteristic of early-onset schizophrenia is absent."],
    ["What is the main long-term risk after symptomatic recovery?","Relapse through non-adherence, given absent insight, together with persisting social isolation that symptomatic improvement does not address, and conversion to dementia in a proportion at rates above expected, requiring continued cognitive monitoring."],
    ["When should the original diagnosis be revisited?","Where progressive cognitive decline emerges, since a proportion of apparent late-onset psychosis represents the prodrome of a neurodegenerative process, particularly Lewy body disease."]
  ],
  note:[
    "Long-term treatment is usually required, at the lowest effective dose.",
    "Social outcome is frequently poor despite symptomatic improvement.",
    "Mortality is raised through self-neglect, comorbidity and reduced healthcare engagement.",
    "Self-neglect is a specific risk and safeguarding considerations frequently arise."
  ],
  refs:["oxoldage","companion"] };

/* ---------- 8.5.9 ANXIETY DISORDERS ---------- */

TEACH["8.5.9.1"] = { free:false,
  simple:"Anxiety in older people is common, disabling, and almost invisible in services, partly because it is assumed to be a normal reaction to being old and frail.",
  teach:[
    "Anxiety disorders remain common in later life, with community prevalence estimates of around 5 to 10 per cent for any anxiety disorder, though estimates vary widely with method.",
    "Anxiety symptoms below diagnostic threshold are much commoner, affecting perhaps 15 to 20 per cent, and carry real disability.",
    "Generalised anxiety disorder is the commonest anxiety disorder in older people, in contrast with younger adults where specific phobia predominates.",
    "Most anxiety disorders in later life represent continuation or recurrence of a disorder that began earlier. True first onset in old age is less common and should prompt a search for a cause.",
    "New-onset anxiety in an older person should prompt consideration of depression, physical illness, medication, alcohol, and early dementia rather than being accepted as primary.",
    "Anxiety is a common early feature of dementia and may precede cognitive complaint.",
    "Comorbidity with depression is very high, higher than in younger adults, and mixed anxiety and depression is the commonest clinical picture.",
    "Anxiety is markedly under-detected and under-treated in older people. Referral rates to psychological therapy services are disproportionately low.",
    "Fear of falling is a specific and prevalent late-life anxiety, affecting a large proportion of older people including many who have never fallen, and it produces activity restriction that itself increases falls risk.",
    "The fear of falling cycle is a genuine clinical target: fear leads to avoidance, avoidance leads to deconditioning, deconditioning leads to falls, which confirms the fear.",
    "Post-traumatic stress disorder occurs in older people, including delayed presentations and reactivation in later life, and is under-recognised in cohorts with wartime or childhood trauma."
  ],
  cards:[
    ["Which anxiety disorder is commonest in older people?","Generalised anxiety disorder, in contrast with younger adults where specific phobia predominates. Most anxiety disorders in later life are continuations or recurrences of disorders beginning earlier, so true first onset should prompt a search for a cause."],
    ["What should new-onset anxiety in an older person prompt?","Consideration of depression, physical illness, medication effects, alcohol, and early dementia, since anxiety is a common early feature of dementia and may precede cognitive complaint."],
    ["Describe the fear of falling cycle.","Fear of falling produces activity restriction and avoidance, which produces physical deconditioning and loss of balance and strength, which increases actual falls risk, which confirms and intensifies the fear. It affects a large proportion of older people including many who have never fallen and is a legitimate clinical target."]
  ],
  note:[
    "Community prevalence of any anxiety disorder is around 5 to 10 per cent, with subthreshold symptoms much commoner.",
    "Comorbidity with depression is higher than in younger adults.",
    "Referral rates to psychological therapy services are disproportionately low in this group.",
    "PTSD occurs in older people, including delayed presentation and later-life reactivation."
  ],
  refs:["oxoldage","nice"] };

TEACH["8.5.9.2"] = { free:false,
  simple:"Older people have more genuinely frightening things to worry about, and less capacity to escape them. Distinguishing reasonable concern from disorder is a matter of proportion and of what the worry is doing to the person's life.",
  teach:[
    "Aetiology differs from younger adults chiefly in the prominence of physical and situational contributors rather than in different mechanisms.",
    "Physical illness is a major contributor: cardiac and respiratory disease directly produce symptoms indistinguishable from anxiety, and chronic illness produces realistic apprehension.",
    "Chronic obstructive pulmonary disease is particularly associated, with breathlessness and panic reinforcing one another in a cycle closely resembling panic disorder.",
    "Medication and substances: bronchodilators, corticosteroids, thyroxine, caffeine, and withdrawal from alcohol, benzodiazepines and gabapentinoids.",
    "Benzodiazepine withdrawal is a common and under-recognised cause of anxiety in older people, arising from dose reduction, hospital admission or supply interruption.",
    "Neurobiology: the same amygdala-prefrontal circuitry applies, with evidence that emotion regulation capacity is relatively preserved into later life, which is part of why anxiety does not increase with age.",
    "The positivity effect describes older adults' relative bias towards positive over negative information, and is one explanation for stable or declining anxiety prevalence with age.",
    "Psychological contributors: loss of control and autonomy; anticipated dependency; fear of being a burden; and realistic threats including illness, bereavement and financial insecurity.",
    "Loss of control is the recurring theme, and interventions that restore any degree of agency have disproportionate effect.",
    "Personality: lifelong trait neuroticism remains the strongest individual predictor, as at any age.",
    "Cognitive impairment contributes. Anxiety in early dementia may reflect awareness of failing abilities, and repetitive questioning is frequently anxiety rather than memory failure alone.",
    "Sensory impairment contributes through reduced ability to interpret the environment, producing genuine uncertainty rather than distorted appraisal.",
    "Trauma: cohort effects mean many older people experienced war, displacement or childhood adversity in eras with no available treatment, and reactivation in later life is a recognised phenomenon.",
    "Reactivation triggers include retirement removing distraction, bereavement, physical illness reactivating helplessness, and institutional care resembling earlier confinement."
  ],
  cards:[
    ["Why does anxiety not increase with age despite increasing adversity?","Emotion regulation capacity is relatively preserved into later life, and older adults show a positivity effect, a relative bias towards positive over negative information. These are among the explanations offered for stable or declining anxiety disorder prevalence with age."],
    ["Which physical condition most closely mimics and reinforces anxiety in older people?","Chronic obstructive pulmonary disease, in which breathlessness and panic reinforce one another in a cycle closely resembling panic disorder, with each producing and intensifying the other."],
    ["What is late-life PTSD reactivation?","The re-emergence of post-traumatic symptoms decades after the original trauma, triggered by retirement removing distraction, bereavement, physical illness reactivating helplessness, or institutional care resembling earlier confinement. It is under-recognised in cohorts who experienced war, displacement or childhood adversity when no treatment existed."],
    ["Why does anxiety present as repetitive questioning in early dementia?","Because the person is aware of failing abilities and uncertain of information they can no longer retain, so questioning is an attempt to reduce anxiety rather than a purely mnemonic failure. Treating it as anxiety changes the response."]
  ],
  note:[
    "Benzodiazepine withdrawal is a common under-recognised cause, often precipitated by admission.",
    "Bronchodilators, corticosteroids, thyroxine and caffeine are common pharmacological contributors.",
    "Loss of control is the recurring psychological theme, and restoring agency has disproportionate effect.",
    "Sensory impairment produces genuine environmental uncertainty rather than distorted appraisal.",
    "Trait neuroticism remains the strongest individual predictor at any age."
  ],
  refs:["oxoldage","companion","semliaison"] };

TEACH["8.5.9.3"] = { free:false,
  simple:"Older people rarely say they are anxious. They say their heart is racing, they cannot go out, they need someone with them, and they have been to the doctor about their chest four times this year.",
  teach:[
    "Somatic presentation predominates. Palpitations, breathlessness, dizziness, gastrointestinal symptoms, tremor and chest discomfort lead the presentation, and psychological symptoms are volunteered last if at all.",
    "The overlap with genuine cardiac and respiratory disease makes discrimination difficult, and both may be present simultaneously rather than as alternatives.",
    "Worry content is more realistic and more focused on health, finances, family welfare and dependency than the free-floating worry typical of younger patients.",
    "That realism is a diagnostic trap. Worry about a genuine problem can still be disproportionate, uncontrollable and disabling, and realistic content does not exclude the disorder.",
    "The test is proportion and function: is the worry excessive relative to the risk, is it uncontrollable, and is it restricting the person's life.",
    "Avoidance is often the most visible feature: not going out, not travelling, not being alone, not using stairs, refusing appointments.",
    "Avoidance in older people is easily attributed to physical frailty, which conceals the anxiety and prevents treatment.",
    "Reassurance seeking from family and from services is prominent, and repeated attendance is a common presentation.",
    "Panic attacks are less frequently reported and more often presented as cardiac events, so a person may have attended the emergency department repeatedly.",
    "Generalised anxiety disorder presents with worry, restlessness, muscle tension, poor sleep and irritability, with sleep disturbance frequently the presenting complaint.",
    "Agoraphobia may present as apparent immobility or as refusal to leave the house, and may be mistaken for depression or for physical incapacity.",
    "Anxiety in dementia presents behaviourally: repetitive questioning, following the carer from room to room, distress on separation, agitation and increased confusion.",
    "Shadowing, following the carer constantly, is a common and exhausting manifestation of anxiety in dementia and is frequently misread as demanding behaviour.",
    "Rating scales: GAD-7 is usable; the Geriatric Anxiety Inventory is designed for this population; and the Rating Anxiety in Dementia scale is used where dementia is present.",
    "Always exclude physical mimics: thyrotoxicosis, arrhythmia, hypoglycaemia, respiratory disease, phaeochromocytoma, and medication or withdrawal effects."
  ],
  cards:[
    ["How does anxiety present in older people?","Predominantly somatically, with palpitations, breathlessness, dizziness, gastrointestinal symptoms and chest discomfort, with psychological symptoms volunteered last. Avoidance is often the most visible feature and is easily misattributed to physical frailty, which conceals the disorder."],
    ["Why is realistic worry content a diagnostic trap?","Because worry about a genuine problem can still be excessive relative to the actual risk, uncontrollable, and disabling. The test is proportion and functional impact, not whether the subject of the worry is real."],
    ["How does anxiety present in dementia?","Behaviourally: repetitive questioning, shadowing the carer from room to room, distress on separation, agitation and increased confusion. Shadowing is exhausting for carers and is frequently misread as demanding behaviour rather than recognised as anxiety."],
    ["Which rating scales are appropriate?","GAD-7 is usable; the Geriatric Anxiety Inventory is designed for older people; and the Rating Anxiety in Dementia scale is used where dementia is present."]
  ],
  note:[
    "Cardiac or respiratory disease and anxiety frequently coexist rather than being alternatives.",
    "Panic attacks are often presented as cardiac events with repeated emergency attendance.",
    "Sleep disturbance is frequently the presenting complaint in generalised anxiety disorder.",
    "Exclude thyrotoxicosis, arrhythmia, hypoglycaemia, respiratory disease and withdrawal states."
  ],
  refs:["oxoldage","oyebode","nice"] };

TEACH["8.5.9.4"] = { free:false,
  simple:"The treatment is the same as at any age with one large exception: do not reach for a benzodiazepine. In an older person they cause the falls, the confusion and the fractures that everyone was trying to prevent.",
  teach:[
    "Psychological treatment is first-line and works as well in older people as in younger, though delivery requires the adaptations described under psychotherapy in later life.",
    "CBT has the best evidence, with effect sizes comparable to those in younger adults, and relaxation training has evidence in this age group specifically.",
    "Guided self-help and computerised CBT are effective but require attention to digital access, vision and confidence with technology.",
    "SSRIs are first-line pharmacologically, with sertraline, citalopram and escitalopram commonly used, at lower starting doses with slower titration and the same hyponatraemia monitoring as in depression.",
    "Response takes longer in anxiety than in depression at any age, and longer still in older people, so allow up to twelve weeks before concluding non-response.",
    "Warn explicitly about the initial increase in anxiety on starting an SSRI. In an older person who is already frightened of bodily sensations, an unexplained increase guarantees discontinuation.",
    "Benzodiazepines should be avoided. They cause falls, hip fracture, cognitive impairment, delirium, road traffic accidents and dependence, and appear on both Beers and STOPP lists.",
    "If a benzodiazepine is genuinely unavoidable, use a short course of a short-acting agent at the lowest dose with an explicit stop date, and never start one during a hospital admission without a clear indication.",
    "Deprescribing long-term benzodiazepines is a legitimate and achievable goal. Gradual reduction with psychological support is more effective than abrupt cessation, and withdrawal is slow at low doses.",
    "Pregabalin has evidence in generalised anxiety disorder but causes sedation, dizziness, oedema and falls in older people, and is a controlled drug with misuse potential.",
    "Beta-blockers are of limited use, may cause bradycardia and fatigue, and should not be used routinely.",
    "Buspirone has modest evidence and is sometimes used where benzodiazepines must be avoided.",
    "Treat comorbid depression, which is usually present, since treating one without the other rarely succeeds.",
    "Treat the physical contributors: optimise cardiac and respiratory disease, treat pain, correct sensory impairment, and review medication.",
    "Fear of falling responds specifically to combined physiotherapy-based strength and balance training with cognitive behavioural techniques, and this combination has better evidence than either alone.",
    "Address the practical: falls alarms, home adaptation, transport, and company all reduce anxiety more reliably than any medication where the underlying threat is real.",
    "Anxiety in dementia responds to routine, familiar environment, reduction of demands, and reassurance, and antipsychotics should not be used for it."
  ],
  cards:[
    ["Why should benzodiazepines be avoided in older people with anxiety?","Because they cause falls, hip fracture, cognitive impairment, delirium, road traffic accidents and dependence, and appear on both the Beers and STOPP lists of drugs to avoid in this group. If unavoidable, use a short course of a short-acting agent at the lowest dose with an explicit stop date."],
    ["How should SSRI treatment be managed in an anxious older person?","Start at a low dose with slow titration, warn explicitly about the initial increase in anxiety, allow up to twelve weeks for full response, and monitor sodium at baseline and around two weeks. Failure to warn about early worsening reliably produces discontinuation."],
    ["What is the specific treatment for fear of falling?","Combined physiotherapy-based strength and balance training with cognitive behavioural techniques, which has better evidence than either component alone because it addresses both the deconditioning and the fear that maintain the cycle."],
    ["How should anxiety in dementia be managed?","Through routine, a familiar environment, reduction of demands and consistent reassurance, alongside treatment of physical contributors. Antipsychotics should not be used for anxiety in dementia."]
  ],
  note:[
    "CBT effect sizes in older adults are comparable to those in younger adults.",
    "Deprescribing long-term benzodiazepines is achievable with gradual reduction and psychological support.",
    "Pregabalin causes sedation, dizziness, oedema and falls and is a controlled drug.",
    "Practical measures such as alarms, adaptation and company reduce anxiety where the threat is real.",
    "Comorbid depression is usually present and treating one without the other rarely succeeds."
  ],
  refs:["nice","maudsley","oxoldage"] };

TEACH["8.5.9.5"] = { free:false,
  simple:"Untreated, anxiety in later life persists and shrinks the person's world one activity at a time. Treated, it responds as well as at any age, but almost nobody is offered treatment.",
  teach:[
    "The untreated course is chronic and fluctuating, with generalised anxiety disorder in particular showing low rates of spontaneous remission.",
    "Anxiety in older people is more persistent than in younger adults in longitudinal studies, partly because the situational contributors do not resolve.",
    "Treated outcome is good, with response rates comparable to those in younger adults for both psychological and pharmacological treatment.",
    "The gap between what treatment achieves and how rarely it is offered is the central issue in this area.",
    "Functional consequences accumulate: activity restriction, loss of independence, social withdrawal, and reduced engagement with healthcare.",
    "Anxiety independently predicts functional decline, falls, disability and reduced quality of life in older people.",
    "Anxiety predicts subsequent depression, and comorbid anxiety and depression has worse outcome than either alone, with higher chronicity and higher suicide risk.",
    "Anxiety is associated with increased mortality in older people, mediated partly by cardiovascular disease and partly by reduced self-care and healthcare engagement.",
    "Late-life anxiety is associated with increased risk of subsequent dementia in cohort studies, though whether it is a risk factor, a prodrome or both remains unresolved.",
    "Fear of falling independently predicts actual falls, functional decline and admission to residential care, independently of objective balance impairment.",
    "Poor prognostic factors: comorbid depression, comorbid physical illness and disability, cognitive impairment, benzodiazepine dependence, persistent isolation and unresolved practical threats.",
    "Good prognostic factors: shorter duration, absence of depression, engagement with psychological treatment, correction of sensory and physical contributors, and restoration of activity.",
    "Restoration of activity is both a treatment and an outcome measure, and functional goals are more useful than symptom scores in this population."
  ],
  cards:[
    ["What is the course and outcome of anxiety in later life?","Untreated it is chronic and fluctuating with low spontaneous remission, and more persistent than in younger adults because the situational contributors do not resolve. Treated outcome is good with response rates comparable to younger adults, so the central problem is that treatment is rarely offered."],
    ["What does anxiety independently predict in older people?","Functional decline, falls, disability, reduced quality of life, subsequent depression, and increased mortality mediated partly by cardiovascular disease and partly by reduced self-care and healthcare engagement. Late-life anxiety is also associated with increased subsequent dementia risk in cohort studies."],
    ["What does fear of falling predict?","Actual falls, functional decline and admission to residential care, independently of objectively measured balance impairment, because the avoidance it produces causes the deconditioning that leads to falling."]
  ],
  note:[
    "Comorbid anxiety and depression has worse outcome than either alone.",
    "Benzodiazepine dependence is a specific poor prognostic factor.",
    "Restoration of activity is both a treatment and an outcome measure.",
    "Functional goals are more useful than symptom scores in this population."
  ],
  refs:["oxoldage","nice"] };

/* ---------- 8.5.10 SUBSTANCE MISUSE ---------- */

TEACH["8.5.10.1"] = { free:false,
  simple:"Substance misuse in old age is mostly two things: alcohol, and the tablets a doctor prescribed thirty years ago and nobody ever stopped.",
  teach:[
    "Substance misuse in older people is substantially under-detected. Screening tools were developed in younger populations and the classical social consequences, such as job loss and offending, do not apply to a retired person.",
    "Alcohol is the dominant substance. Around 10 to 20 per cent of older people drink above recommended limits, with higher rates in men.",
    "Rates of hazardous drinking in older people have risen over recent decades, particularly in women and in the young-old, reflecting cohort effects as heavier-drinking generations age.",
    "This is a rising rather than a stable problem, and the cohort now entering old age drinks more than the one before it.",
    "Two patterns are described: early-onset, around two-thirds, with a lifelong history and established physical and social consequences; and late-onset, around a third, beginning after 60 in response to bereavement, retirement, isolation, pain or illness.",
    "Late-onset drinkers have better premorbid functioning, less family history, less physical damage and better treatment outcomes, which is a genuinely useful prognostic distinction.",
    "Benzodiazepine and Z-drug use is the other major problem. A substantial proportion of long-term users are over 65, and most were started years or decades earlier for a temporary indication.",
    "Prescribed dependence differs from misuse: the person is taking a prescribed dose as directed and is dependent, without any drug-seeking behaviour.",
    "Opioid prescribing for chronic pain in older people has risen substantially, with corresponding dependence, cognitive effects and falls risk.",
    "Illicit drug use in older people is increasing as the cohort who used drugs in the 1960s and 1970s ages, and older opioid users are a growing and highly morbid group.",
    "Tobacco remains a major contributor to mortality in this age group, and smoking cessation continues to produce benefit at any age.",
    "Recommended limits are effectively lower in older people because of reduced lean body mass, reduced total body water and reduced hepatic metabolism, so the same intake produces higher blood alcohol concentrations."
  ],
  cards:[
    ["Distinguish early-onset from late-onset alcohol misuse in older people.","Early-onset, around two-thirds, involves a lifelong drinking history with established physical, cognitive and social consequences. Late-onset, around a third, begins after around 60 in response to bereavement, retirement, isolation, pain or illness, and has better premorbid functioning, less family history, less physical damage and better treatment outcomes."],
    ["Why does the same alcohol intake affect older people more?","Because of reduced lean body mass, reduced total body water and reduced hepatic metabolism, so a given intake produces a higher blood alcohol concentration. Recommended limits are effectively lower in older people."],
    ["What is prescribed dependence?","Dependence on a medication taken at the prescribed dose exactly as directed, without drug-seeking behaviour, most often on benzodiazepines or Z-drugs started years or decades earlier for a temporary indication and never reviewed."]
  ],
  note:[
    "Screening tools developed in younger populations under-detect in older people.",
    "Hazardous drinking rates have risen, particularly in women and the young-old, through cohort effects.",
    "Around 10 to 20 per cent of older people drink above recommended limits.",
    "Older opioid users are a growing and highly morbid group.",
    "Smoking cessation produces benefit at any age."
  ],
  refs:["semaddict","oxoldage","addmed"] };

TEACH["8.5.10.2"] = { free:false,
  simple:"Older bodies handle drugs differently, so the same amount does more. Add loneliness, pain, bereavement and a doctor who never reviewed the prescription, and the picture makes itself.",
  teach:[
    "Pharmacokinetic changes: reduced total body water and lean mass raise the concentration of water-soluble drugs including alcohol; increased body fat prolongs the half-life of lipid-soluble drugs including benzodiazepines.",
    "Reduced hepatic mass and blood flow slow phase I oxidative metabolism, while phase II glucuronidation is relatively preserved, which is why lorazepam and oxazepam are preferred.",
    "Reduced renal clearance prolongs the elimination of renally excreted drugs and their metabolites.",
    "Pharmacodynamic changes: increased central nervous system sensitivity means older people experience greater sedation, greater cognitive impairment and greater postural instability at the same plasma concentration.",
    "The combination of pharmacokinetic and pharmacodynamic change means that an older person receives a substantially larger effective dose from the same nominal dose.",
    "Psychosocial precipitants of late-onset misuse: bereavement, retirement, loss of role, isolation, boredom, chronic pain, insomnia, physical illness and disability.",
    "Bereavement is the commonest single identified precipitant of late-onset drinking.",
    "Iatrogenic factors are central: repeat prescriptions continued without review, absence of a stop date, prescribing across multiple prescribers, and hospital admission where a hypnotic is started and never stopped.",
    "Hospital admission is a recognised origin of long-term hypnotic use. A drug started for one disturbed night is frequently on the discharge summary and on the repeat list a decade later.",
    "Ageism contributes. Clinicians are reluctant to address drinking or dependence in an older person on the grounds that it is one of few remaining pleasures, or that it is too late to matter.",
    "That reasoning is not supported. Older people respond to treatment for alcohol problems at least as well as younger people, and often better.",
    "Cognitive impairment complicates the picture in both directions: it results from alcohol, and it impairs the person's ability to monitor and moderate their own intake.",
    "Polypharmacy interacts: alcohol with benzodiazepines, opioids, antihypertensives and hypoglycaemics produces effects far beyond either alone."
  ],
  cards:[
    ["How do pharmacokinetic changes in ageing affect alcohol and benzodiazepines?","Reduced total body water and lean mass raise the concentration of water-soluble drugs including alcohol. Increased body fat prolongs the half-life of lipid-soluble drugs including benzodiazepines. Reduced hepatic mass and blood flow slow phase I oxidative metabolism while phase II glucuronidation is preserved, which is why lorazepam and oxazepam are preferred."],
    ["Why does hospital admission contribute to long-term hypnotic use?","Because a hypnotic started for one or two disturbed nights in hospital is frequently carried onto the discharge summary and from there onto the repeat prescription list, where it may remain unreviewed for years or decades."],
    ["What is the commonest precipitant of late-onset drinking?","Bereavement, alongside retirement, loss of role, isolation, chronic pain, insomnia and physical illness."],
    ["Why is therapeutic pessimism about older drinkers unjustified?","Because older people respond to treatment for alcohol problems at least as well as younger people, and frequently better, particularly in the late-onset group with better premorbid functioning."]
  ],
  note:[
    "Increased CNS sensitivity means greater effect at the same plasma concentration.",
    "The combined kinetic and dynamic changes mean the same nominal dose is a larger effective dose.",
    "Prescribing across multiple prescribers without review is a central iatrogenic factor.",
    "Cognitive impairment both results from alcohol and impairs self-monitoring of intake.",
    "Alcohol interacts with benzodiazepines, opioids, antihypertensives and hypoglycaemics."
  ],
  refs:["semaddict","maudsley","oxoldage"] };

TEACH["8.5.10.3"] = { free:false,
  simple:"It presents as falls, confusion, poor sleep and self-neglect. Nobody presents saying they drink too much, and nobody asks, so it is found when the person is admitted and starts withdrawing on the second night.",
  teach:[
    "Presentation is atypical and non-specific. Falls, confusion, cognitive impairment, self-neglect, malnutrition, incontinence, insomnia and depression are the usual routes in.",
    "Falls are the commonest presentation of alcohol misuse in older people, and alcohol should be considered in every unexplained fall.",
    "Withdrawal on admission is a frequent mode of discovery. Confusion appearing on the second or third day of an admission for something else is alcohol withdrawal until proven otherwise.",
    "Withdrawal in older people is more severe, more prolonged and more likely to include delirium and seizures than in younger patients.",
    "Cognitive impairment: alcohol-related brain damage covers Wernicke-Korsakoff syndrome, alcohol-related dementia and cerebellar degeneration, and is frequently misattributed to Alzheimer's disease.",
    "Alcohol-related brain damage is potentially partially reversible with abstinence and nutrition, unlike neurodegenerative dementia, so distinguishing it matters.",
    "Wernicke's encephalopathy must be considered in any confused older person with poor nutrition, and treated on suspicion, since the classical triad is present in a minority.",
    "Screening: the standard tools under-detect. The MAST-G, Michigan Alcohol Screening Test Geriatric version, and the AUDIT-5 are adapted for this population, and lower AUDIT thresholds should be used.",
    "CAGE performs particularly poorly in older people, since it captures dependence features rather than hazardous consumption.",
    "Ask about intake directly, in units, in the context of a general health enquiry, and ask about timing relative to medication.",
    "Benzodiazepine dependence presents as falls, cognitive impairment, daytime sedation, and paradoxically as worsening anxiety and insomnia as tolerance develops.",
    "Tolerance produces interdose withdrawal, so the person experiences anxiety and insomnia that they attribute to needing more of the drug that is causing it.",
    "Opioid problems present as constipation, cognitive impairment, falls, respiratory depression and paradoxical hyperalgesia, alongside inadequate pain control despite escalating doses.",
    "Physical examination: signs of chronic liver disease, peripheral neuropathy, cerebellar signs, malnutrition, bruising and injury.",
    "Investigation: full blood count with MCV, liver function with gamma-GT, clotting, B12 and folate, magnesium, and glucose.",
    "Collateral history is essential and is frequently the only route to accurate information, since concealment is common and shame is high in this generation."
  ],
  cards:[
    ["How does alcohol misuse present in older people?","Atypically and non-specifically: falls, confusion, cognitive impairment, self-neglect, malnutrition, incontinence, insomnia and depression. Falls are the commonest presentation, and alcohol should be considered in every unexplained fall."],
    ["What should confusion appearing on day two or three of an admission suggest?","Alcohol withdrawal until proven otherwise. Withdrawal in older people is more severe, more prolonged and more likely to include delirium and seizures than in younger patients."],
    ["Which screening tools are appropriate in older people?","The MAST-G, the geriatric version of the Michigan Alcohol Screening Test, and AUDIT with lower thresholds or the AUDIT-5. CAGE performs particularly poorly because it captures dependence features rather than hazardous consumption."],
    ["How does benzodiazepine tolerance present?","As worsening anxiety and insomnia, because interdose withdrawal produces the very symptoms the drug was prescribed for. The person attributes this to needing a higher dose of the drug that is causing it, alongside falls, cognitive impairment and daytime sedation."],
    ["Why does distinguishing alcohol-related brain damage from Alzheimer's disease matter?","Because alcohol-related brain damage, including Wernicke-Korsakoff syndrome and alcohol-related dementia, is potentially partially reversible with sustained abstinence and nutritional replacement, whereas neurodegenerative dementia is not."]
  ],
  note:[
    "Wernicke's encephalopathy must be treated on suspicion; the classical triad is present in a minority.",
    "Opioid problems present with constipation, falls, respiratory depression and paradoxical hyperalgesia.",
    "Investigation includes MCV, gamma-GT, clotting, B12, folate, magnesium and glucose.",
    "Collateral history is often the only route to accurate information given shame and concealment."
  ],
  refs:["semaddict","lishman","oxoldage"] };

TEACH["8.5.10.4"] = { free:false,
  simple:"Older people do well in treatment, often better than younger ones. The obstacles are that nobody asks, nobody refers, and services are designed for people forty years younger.",
  teach:[
    "Older people respond to treatment for alcohol problems at least as well as younger people, with better retention and better outcomes in several studies.",
    "Age-specific treatment produces better engagement and outcomes than mixed-age services, where older people frequently feel out of place and drop out.",
    "Brief intervention works. Screening plus five to ten minutes of structured advice reduces consumption in older hazardous drinkers, and is markedly under-delivered in primary care.",
    "Detoxification requires care: withdrawal is more severe and prolonged, doses need adjustment, and the threshold for inpatient rather than community detoxification is lower.",
    "Chlordiazepoxide is used with dose reduction; lorazepam or oxazepam are preferred where there is hepatic impairment, which is common in this group.",
    "Symptom-triggered regimens using CIWA-Ar are appropriate but require reliable assessment, which can be difficult where cognitive impairment is present.",
    "Thiamine: parenteral replacement for anyone with suspected Wernicke's or risk factors, and oral prophylaxis thereafter. The threshold for parenteral treatment should be low in this group.",
    "Relapse prevention medication: acamprosate and naltrexone are both usable, with dose adjustment for renal function, and disulfiram is generally avoided because of cardiovascular risk and the danger of the reaction in a frail person.",
    "Psychosocial treatment: motivational interviewing works well, CBT-based relapse prevention is effective, and mutual aid attendance is beneficial where the person will engage.",
    "Address the precipitants directly. Late-onset drinking follows bereavement, isolation, pain and insomnia, and treating those addresses the drinking more effectively than focusing on consumption alone.",
    "Benzodiazepine withdrawal: convert to an equivalent dose of diazepam and reduce very slowly, typically over months, with slower reduction at lower doses.",
    "In frail older people, or where the dose is low and stable and the person is functioning well, careful continuation with monitoring may be preferable to a destabilising withdrawal, and this judgement should be individual.",
    "Withdrawal from long-term benzodiazepines in older people succeeds in a substantial proportion when done gradually with support, and improves cognition and reduces falls.",
    "Opioid reduction in chronic non-cancer pain follows the same principles: slow reduction, explanation of hyperalgesia, and psychological and physical support alongside.",
    "Treat comorbid depression and anxiety, which are usually present and are frequently both cause and consequence.",
    "Address the practical: isolation, bereavement support, day activity, pain management and sleep, since these are what maintain the drinking."
  ],
  cards:[
    ["How do older people respond to alcohol treatment?","At least as well as younger people, with better retention and better outcomes in several studies. Age-specific treatment produces better engagement than mixed-age services, where older people frequently feel out of place and drop out."],
    ["How does alcohol detoxification differ in older people?","Withdrawal is more severe and prolonged, doses require reduction, the threshold for inpatient rather than community detoxification is lower, and lorazepam or oxazepam are preferred where there is hepatic impairment. The threshold for parenteral thiamine should be low."],
    ["How should long-term benzodiazepine withdrawal be conducted?","By conversion to an equivalent dose of diazepam followed by very slow reduction, typically over months, with slower reduction at lower doses. It succeeds in a substantial proportion when done gradually with support, and improves cognition and reduces falls."],
    ["When might continuation of a benzodiazepine be preferable to withdrawal?","In a frail older person on a low, stable, long-established dose who is functioning well, where the destabilisation of withdrawal may outweigh the benefit. This is an individual judgement rather than a blanket rule."],
    ["Which relapse prevention drugs are used, and which is avoided?","Acamprosate and naltrexone are both usable with dose adjustment for renal function. Disulfiram is generally avoided because of cardiovascular risk and the danger of the disulfiram-alcohol reaction in a frail person."]
  ],
  note:[
    "Brief intervention reduces consumption in older hazardous drinkers and is under-delivered.",
    "Symptom-triggered regimens require reliable assessment, which cognitive impairment complicates.",
    "Treating bereavement, isolation, pain and insomnia addresses late-onset drinking more effectively than focusing on consumption.",
    "Opioid reduction requires explanation of hyperalgesia alongside slow tapering and support."
  ],
  refs:["semaddict","addmed","maudsley"] };

TEACH["8.5.10.5"] = { free:false,
  simple:"The outlook is better than most clinicians expect, especially for the person who started drinking late after a bereavement. The damage that has already been done to the brain is what limits recovery.",
  teach:[
    "Treatment outcomes in older people are good, and better than in younger populations in several studies, with higher completion and higher abstinence rates.",
    "Late-onset drinkers have substantially better outcomes than early-onset drinkers, with less physical damage, better social support and better premorbid functioning.",
    "Early-onset drinkers reaching old age represent a selected surviving group with accumulated physical, cognitive and social damage, and outcomes are correspondingly poorer.",
    "Cognitive recovery with abstinence is real but partial and slow. Improvement continues over months to years, and the extent depends on the degree of established damage.",
    "Korsakoff's syndrome, once established, shows limited recovery, with around a quarter improving substantially, a quarter showing no change, and the remainder somewhere between.",
    "Mortality in older problem drinkers is high, from liver disease, cardiovascular disease, cancer, falls and injury, and suicide.",
    "Abstinence produces measurable benefit at any age: falls reduce, cognition improves, blood pressure falls, sleep improves and mood improves.",
    "Continued drinking accelerates cognitive decline and increases dementia risk, while moderate drinking has been claimed to be protective in observational studies that are heavily confounded by the sick quitter effect.",
    "The sick quitter effect describes the inclusion of people who stopped drinking because of illness in the abstainer group, making abstinence appear harmful. It is the standard explanation for the apparent J-shaped curve.",
    "Benzodiazepine withdrawal in older people improves cognition, reduces falls and improves daytime alertness, with benefits sustained where withdrawal is completed.",
    "Poor prognostic factors: early-onset pattern, established cognitive impairment, severe physical comorbidity, complete social isolation, and continued access without any structure.",
    "Good prognostic factors: late-onset pattern, identifiable precipitant that can be addressed, preserved cognition, social support, and engagement with age-appropriate treatment.",
    "The single most important message is that therapeutic pessimism in this group is not evidence-based and costs lives."
  ],
  cards:[
    ["How do outcomes differ between early-onset and late-onset older drinkers?","Late-onset drinkers have substantially better outcomes, with less physical damage, better social support, better premorbid functioning and an identifiable precipitant that can be addressed. Early-onset drinkers reaching old age are a selected surviving group with accumulated physical, cognitive and social damage."],
    ["What is the sick quitter effect?","The inclusion, in the abstainer group of observational studies, of people who stopped drinking because they had become ill. This makes abstinence appear harmful and is the standard explanation for the apparent J-shaped curve suggesting moderate drinking is protective."],
    ["What is the outcome of Korsakoff's syndrome?","Limited recovery once established, with roughly a quarter improving substantially, a quarter showing no change, and the remainder somewhere between. This contrasts with the partial but real cognitive recovery seen with abstinence in less severe alcohol-related brain damage."],
    ["What benefits follow abstinence in an older person?","Reduced falls, improved cognition over months to years, lower blood pressure, improved sleep and improved mood. Benefit is measurable at any age, which is why therapeutic pessimism is unjustified."]
  ],
  note:[
    "Treatment completion and abstinence rates are higher in older than younger populations in several studies.",
    "Mortality is high from liver disease, cardiovascular disease, cancer, falls, injury and suicide.",
    "Benzodiazepine withdrawal improves cognition, reduces falls and improves daytime alertness.",
    "Continued drinking accelerates cognitive decline and increases dementia risk."
  ],
  refs:["semaddict","oxoldage","lishman"] };

/* ---------- 8.5.11 OTHER MENTAL DISORDERS ---------- */

TEACH["8.5.11.1"] = { free:false,
  simple:"This heading covers what is left: the conditions that turn up in old age psychiatry without a chapter of their own, and two of them are far commoner than anyone records.",
  teach:[
    "Self-neglect and squalor: Diogenes syndrome, or severe domestic squalor, affects around 0.5 per 1,000 older people per year, and presentation is usually through neighbours, housing or environmental health rather than through health services.",
    "Hoarding disorder affects around 2 to 6 per cent of the population, with prevalence rising with age and severity increasing over the life course.",
    "Hoarding in older people is more disabling because of the physical risks: fire, falls, inability to reach a bed or a toilet, and inability of emergency services to enter.",
    "Somatoform and functional disorders continue into old age and are frequently missed because symptoms are attributed to age or to comorbid physical disease.",
    "Personality disorder in older people is covered under 8.7, and remains present at around 10 per cent in community samples.",
    "Adjustment disorder is common and follows the specific stressors of later life: diagnosis, loss of licence, relocation, and loss of independence.",
    "Delusional disorder including delusional parasitosis and morbid jealousy occurs and is over-represented in older people.",
    "Late-onset obsessive-compulsive disorder is rare and, when it occurs, should prompt investigation for an organic cause, particularly frontal or basal ganglia pathology.",
    "Eating disorders in older people are under-recognised. Anorexia nervosa can persist into old age or, rarely, present late, and food refusal in an older person is more often depression, dementia, physical illness or dysphagia.",
    "Learning disability in older people is a growing population, since life expectancy in intellectual disability has risen substantially, and this group ages earlier with earlier onset of dementia.",
    "Elder abuse is the most important and least examined item under this heading, and is considered in the following items."
  ],
  cards:[
    ["What is Diogenes syndrome and how does it present?","Severe domestic squalor with self-neglect, affecting around 0.5 per 1,000 older people per year. It presents through neighbours, housing services or environmental health rather than through health services, and the person characteristically does not seek help."],
    ["Why does hoarding matter more in older people?","Because of the physical consequences: fire risk, falls, inability to reach a bed, cooking facilities or a toilet, inability of emergency services to enter the property, and consequent risk of eviction. Prevalence rises with age and severity increases over the life course."],
    ["What should late-onset obsessive-compulsive disorder prompt?","Investigation for an organic cause, particularly frontal lobe or basal ganglia pathology, since genuine first-onset OCD in later life is rare."]
  ],
  note:[
    "Hoarding disorder affects around 2 to 6 per cent of the population.",
    "Food refusal in an older person is more often depression, dementia, physical illness or dysphagia than an eating disorder.",
    "People with intellectual disability age earlier with earlier onset of dementia.",
    "Delusional parasitosis and morbid jealousy are over-represented in older people."
  ],
  refs:["oxoldage","icd11","oxid"] };

TEACH["8.5.11.2"] = { free:false,
  simple:"Self-neglect on this scale is not laziness and it is not usually dementia. It is most often a lifelong personality pattern of extreme self-sufficiency meeting the point at which self-sufficiency stops working.",
  teach:[
    "Diogenes syndrome, named by Clark in 1975, comprises severe self-neglect, domestic squalor, social withdrawal, refusal of help, and frequently hoarding or syllogomania.",
    "The name is a misnomer. Diogenes the Cynic chose poverty deliberately as a philosophical position and was gregarious, which is the opposite of the syndrome named after him.",
    "The preferred term is severe domestic squalor or senile squalor syndrome, though Diogenes syndrome persists in the literature.",
    "Around half of cases are primary, occurring without another psychiatric disorder, in people with a characteristic premorbid personality.",
    "The characteristic personality is described as aloof, suspicious, stubborn, emotionally detached, and marked by extreme self-sufficiency and rejection of outside help.",
    "Secondary cases occur in the context of dementia, particularly frontal and frontotemporal presentations, depression, psychosis, alcohol misuse and intellectual disability.",
    "Frontal lobe dysfunction is implicated in a proportion, with impaired executive function, loss of insight and impaired judgement.",
    "Intelligence is frequently above average and many had successful occupational histories, which surprises people and argues against a simple deficit account.",
    "Precipitants: bereavement, loss of a supporting relative, physical illness, and any event removing the external structure that had compensated for the personality.",
    "Hoarding disorder aetiology overlaps but is distinct: excessive acquisition and difficulty discarding driven by beliefs about the value and future usefulness of possessions and by emotional attachment to objects.",
    "Hoarding is associated with information-processing deficits in attention, categorisation and decision-making, and with a strong association with childhood deprivation and loss in some accounts.",
    "The distinction matters: in hoarding disorder the person is distressed by the situation and by the prospect of discarding; in Diogenes syndrome the person is characteristically indifferent to the squalor.",
    "Indifference to the squalor, rather than distress about it, is the discriminating feature and the reason engagement is so difficult."
  ],
  cards:[
    ["Describe Diogenes syndrome and its aetiology.","Severe self-neglect with domestic squalor, social withdrawal, refusal of help and frequently hoarding. Around half of cases are primary, occurring in people with a characteristic premorbid personality of aloofness, suspicion, stubbornness and extreme self-sufficiency. Secondary cases occur in dementia, particularly frontal presentations, depression, psychosis, alcohol misuse and intellectual disability."],
    ["Why is the name Diogenes syndrome a misnomer?","Because Diogenes the Cynic chose poverty deliberately as a philosophical position and was notably gregarious, which is the opposite of the withdrawn, help-rejecting presentation named after him. Severe domestic squalor is the preferred term."],
    ["How is Diogenes syndrome distinguished from hoarding disorder?","In hoarding disorder the person is distressed by the accumulation and by the prospect of discarding possessions. In Diogenes syndrome the person is characteristically indifferent to the squalor, which is the discriminating feature and the reason engagement is so difficult."],
    ["What typically precipitates severe domestic squalor?","Bereavement, loss of a supporting relative, or physical illness, each removing the external structure that had compensated for a lifelong personality pattern of extreme self-sufficiency."]
  ],
  note:[
    "Clark named the syndrome in 1975.",
    "Intelligence is frequently above average with successful occupational histories.",
    "Frontal lobe dysfunction with impaired executive function is implicated in a proportion.",
    "Hoarding is associated with deficits in attention, categorisation and decision-making."
  ],
  refs:["oxoldage","icd11","lishman"] };

TEACH["8.5.11.3"] = { free:false,
  simple:"Elder abuse is common, hidden, and usually committed by someone the person depends on. It is asked about far less often than child abuse and is detected far less often too.",
  teach:[
    "Elder abuse affects a substantial minority of older people, with prevalence estimates around 10 per cent in community samples and considerably higher in institutional settings.",
    "The World Health Organization defines it as a single or repeated act, or lack of appropriate action, occurring within any relationship where there is an expectation of trust, which causes harm or distress to an older person.",
    "The expectation of trust is the defining element. Being assaulted by a stranger is a crime; being neglected by a son is elder abuse.",
    "Categories: physical, psychological or emotional, financial or material, sexual, neglect and acts of omission, discriminatory, organisational, and self-neglect.",
    "Financial abuse is the commonest form and the most under-recognised, encompassing theft, coercion over wills and property, misuse of Power of Attorney, and scams targeting older people.",
    "Neglect is the commonest form in institutional settings and includes failure to provide food, fluid, continence care, pressure area care, medication and social contact.",
    "Risk factors in the victim: cognitive impairment, physical dependency, social isolation, female sex, older age, and shared living arrangements with the abuser.",
    "Risk factors in the perpetrator: carer stress and burden, mental illness, substance misuse, financial dependency on the older person, and a history of family violence.",
    "Financial dependency of the perpetrator on the victim is a particularly strong and often overlooked risk factor.",
    "Presentation: unexplained or inconsistent injury, injuries in unusual sites, delayed presentation, malnutrition and dehydration, poor hygiene, pressure ulcers, medication non-adherence or over-sedation, fearfulness in the presence of a particular person, and unexplained financial change.",
    "Behavioural indicators: withdrawal, depression, anxiety, agitation, and reluctance to speak in front of a carer.",
    "Always see the person alone. Abuse is very rarely disclosed with the abuser present, and refusal by a carer to leave the room is itself an indicator.",
    "Sedation as a form of restraint, chemical restraint, is a recognised form of institutional abuse and is under-detected.",
    "Institutional abuse: Winterbourne View, Mid Staffordshire and Whorlton Hall demonstrated that systemic abuse arises from closed cultures, poor leadership, low staffing, inadequate training and absent external scrutiny rather than from individual cruelty alone.",
    "Whistleblowing and inspection are the principal safeguards, and both failed in each of those cases before the abuse was exposed by covert filming or by external complaint."
  ],
  cards:[
    ["How does the WHO define elder abuse, and what is the defining element?","A single or repeated act, or lack of appropriate action, occurring within any relationship where there is an expectation of trust, which causes harm or distress to an older person. The expectation of trust is the defining element: assault by a stranger is a crime, whereas neglect by a relative or carer is elder abuse."],
    ["Which forms of elder abuse are commonest?","Financial abuse is the commonest form in the community and the most under-recognised, including theft, coercion over wills and property, misuse of Power of Attorney and targeted scams. Neglect is the commonest form in institutional settings."],
    ["Name the risk factors in the perpetrator.","Carer stress and burden, mental illness, substance misuse, financial dependency on the older person, and a history of family violence. Financial dependency of the perpetrator on the victim is a strong and frequently overlooked factor."],
    ["Why must the person always be seen alone?","Because abuse is very rarely disclosed in the presence of the abuser, who is usually the person accompanying them. A carer's refusal to leave the room is itself an indicator warranting further attention."],
    ["What did the institutional abuse inquiries demonstrate?","That systemic abuse at Winterbourne View, Mid Staffordshire and Whorlton Hall arose from closed cultures, poor leadership, low staffing, inadequate training and absent external scrutiny, rather than from individual cruelty alone, and that whistleblowing and inspection had failed in each case before exposure."]
  ],
  note:[
    "Prevalence is around 10 per cent in community samples and higher in institutions.",
    "Chemical restraint through sedation is a recognised and under-detected form of abuse.",
    "Cognitive impairment, dependency, isolation and shared living with the abuser raise victim risk.",
    "Unexplained injury, delayed presentation, over-sedation and financial change are presenting indicators."
  ],
  refs:["eastman","oxoldage","nice"] };

TEACH["8.5.11.4"] = { free:false,
  simple:"When you suspect abuse, the safeguarding process is not something you hand over and forget. It is a clinical intervention, and the person's own wishes have to be at the centre of it unless they cannot be.",
  teach:[
    "The Care Act 2014 places a statutory duty on local authorities in England to make enquiries where an adult with care and support needs is experiencing, or is at risk of, abuse or neglect and is unable to protect themselves.",
    "The three conditions must all be met for the statutory duty: care and support needs, experiencing or at risk of abuse or neglect, and unable to protect themselves as a result of those needs.",
    "The six safeguarding principles: empowerment, prevention, proportionality, protection, partnership and accountability.",
    "Making Safeguarding Personal is the operating principle: safeguarding is done with the person and directed by their own desired outcomes, not done to them.",
    "Capacity determines the pathway. Where the person has capacity and declines intervention, their decision must generally be respected, unless others are at risk, a criminal offence has occurred, or there is a public interest justification.",
    "That is the hardest part of this work: a person with capacity may choose to remain in an abusive situation, and the clinician's role becomes maintaining contact and reducing harm rather than removing them.",
    "Where the person lacks capacity, act in their best interests under the Mental Capacity Act, involving an Independent Mental Capacity Advocate where there is nobody appropriate to consult.",
    "Coercion and undue influence complicate capacity assessment. A person may appear to have capacity but be acting under such control that the decision is not truly their own, and the inherent jurisdiction of the High Court exists for these situations.",
    "The inherent jurisdiction can be used to protect a vulnerable adult who has capacity but whose decision-making is compromised by coercion or constraint, and is worth knowing as the residual protective route.",
    "Practical steps: ensure immediate safety, document precisely and contemporaneously including verbatim quotes and body maps, see the person alone, make a safeguarding referral, and inform the police where a criminal offence may have occurred.",
    "Documentation matters disproportionately here, because it may become evidence, and vague notes fail the person later.",
    "Financial abuse: involve the Office of the Public Guardian where a Power of Attorney or deputyship is being misused, and consider the Court of Protection.",
    "The Office of the Public Guardian investigates concerns about registered attorneys and deputies, and referral is a specific and under-used action.",
    "Support the carer where carer stress is the driver. Respite, practical support and treatment of carer mental illness may resolve the situation more effectively than confrontation.",
    "Distinguish carer stress from deliberate exploitation. The response differs completely, and assuming the first when it is the second leaves the person in danger.",
    "Prevention: carer assessment and support, reducing isolation, regular review, advance planning for finances, and attention to the quality of care settings.",
    "Institutional abuse requires organisational response: raise through safeguarding, inform the Care Quality Commission, and understand that whistleblowing protection exists but is imperfect."
  ],
  cards:[
    ["What are the three conditions triggering the Care Act safeguarding duty?","The adult has care and support needs; is experiencing or at risk of abuse or neglect; and is unable to protect themselves from that abuse or neglect as a result of those needs. All three must be met for the statutory duty on the local authority to make enquiries."],
    ["Name the six safeguarding principles.","Empowerment, prevention, proportionality, protection, partnership and accountability. Making Safeguarding Personal is the operating principle: safeguarding is directed by the person's own desired outcomes."],
    ["What is the inherent jurisdiction and when is it relevant?","The residual protective jurisdiction of the High Court, which can be used to protect a vulnerable adult who has capacity but whose decision-making is compromised by coercion, undue influence or constraint. It is the route available where the Mental Capacity Act does not apply because capacity is present."],
    ["What should be done where financial abuse involves a Power of Attorney?","Refer to the Office of the Public Guardian, which investigates concerns about registered attorneys and deputies, and consider an application to the Court of Protection. This referral is specific and markedly under-used."],
    ["What happens when a person with capacity declines safeguarding intervention?","Their decision must generally be respected, unless others are at risk, a criminal offence has occurred, or there is a public interest justification. The clinical role then becomes maintaining contact, reducing harm and keeping the door open rather than removing the person."]
  ],
  note:[
    "Documentation must be contemporaneous and precise, including verbatim quotes and body maps.",
    "An IMCA must be involved where the person lacks capacity and has nobody appropriate to consult.",
    "Distinguishing carer stress from deliberate exploitation determines the entire response.",
    "Institutional concerns require safeguarding referral and notification of the Care Quality Commission."
  ],
  refs:["eastman","nice","oxoldage"] };

TEACH["8.5.11.5"] = { free:false,
  simple:"Squalor, hoarding and abuse all have poor outcomes, and all of them have better outcomes if someone keeps turning up. The single most effective intervention across this whole group is persistence.",
  teach:[
    "Severe domestic squalor has a poor prognosis. Mortality is high, with figures around 45 per cent within five years reported in some series, driven by physical neglect, malnutrition, hypothermia and untreated illness.",
    "Recurrence after clearance is very common where the underlying problem is untreated. Cleaning the house without addressing the person achieves nothing and can be experienced as a violation.",
    "Forced clearance is associated with distress and with rapid re-accumulation, and is sometimes necessary on public health grounds but should not be mistaken for treatment.",
    "Engagement is the determining variable. Where a persistent, non-judgemental relationship is established over months, outcomes improve substantially.",
    "Hoarding disorder responds to CBT specifically adapted for hoarding, addressing beliefs about possessions, decision-making and acquisition, though effect sizes are modest and dropout is high.",
    "Insight in hoarding disorder is variable, and the poorer the insight the worse the outcome, with absent insight predicting non-engagement.",
    "Hoarding tends to worsen over the life course without treatment, so the older person is usually presenting at the most severe point of a long trajectory.",
    "Elder abuse outcomes: abuse independently predicts increased mortality, with substantial excess risk in cohort studies even after adjusting for comorbidity and disability.",
    "That mortality finding is the strongest argument for treating elder abuse as a serious clinical priority rather than a social work matter.",
    "Abuse also predicts depression, anxiety, PTSD, hospital admission and admission to residential care.",
    "Recurrence of abuse is common where the situation is unchanged. A single safeguarding episode without change in the underlying circumstances predicts repetition.",
    "Interventions with evidence: carer support and respite where carer stress is the driver; financial protection through Power of Attorney oversight; and removal from the situation where necessary and consented to.",
    "Prevention is more effective than response, and reduction of isolation is the common protective factor across squalor, hoarding, self-neglect and abuse.",
    "Multi-agency working is essential across all of these, involving housing, environmental health, social care, primary care, the fire service and the police, and single-agency responses reliably fail.",
    "The recurring clinical principle across this whole group is that outcome depends far more on continuity of relationship than on any specific intervention."
  ],
  cards:[
    ["What is the prognosis of severe domestic squalor?","Poor, with mortality figures around 45 per cent within five years reported in some series, driven by physical neglect, malnutrition, hypothermia and untreated illness. Recurrence after forced clearance is very common where the underlying problem is untreated."],
    ["What does elder abuse independently predict?","Increased mortality, with substantial excess risk in cohort studies even after adjustment for comorbidity and disability, together with depression, anxiety, PTSD, hospital admission and admission to residential care. Recurrence is common where the underlying circumstances are unchanged."],
    ["Why does forced clearance fail in hoarding and squalor?","Because it addresses the accumulation rather than the person. It is associated with distress, is frequently experienced as a violation, and is followed by rapid re-accumulation. It may be necessary on public health grounds but is not treatment."],
    ["What is the common determinant of outcome across squalor, hoarding, self-neglect and abuse?","Continuity of relationship. A persistent, non-judgemental worker who keeps turning up over months predicts outcome more strongly than any specific intervention, and multi-agency working is required since single-agency responses reliably fail."]
  ],
  note:[
    "Poorer insight in hoarding disorder predicts non-engagement and worse outcome.",
    "Hoarding worsens over the life course without treatment.",
    "CBT adapted for hoarding has modest effect sizes and high dropout.",
    "Reduction of isolation is the common protective factor across this whole group.",
    "Multi-agency working involves housing, environmental health, social care, primary care, fire service and police."
  ],
  refs:["oxoldage","nice","eastman"] };
