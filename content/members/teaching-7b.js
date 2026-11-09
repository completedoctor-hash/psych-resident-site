/* =====================================================================
   TEACHING, SECTION 7B — General Adult, the five-aspect disorder grid
   Part one: depression, bipolar, schizophrenia, anxiety, OCD
   25 items, 7.1.1.1 to 7.1.5.5
   Each syllabus line is one aspect of one disorder, so each is taught tight.
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------- 7.1.1 UNIPOLAR DEPRESSION ---------- */

TEACH["7.1.1.1"] = { free:true,
  simple:"Depression is common enough that in any room of twenty adults, one is likely to be depressed right now, and about one in six will be at some point in their life.",
  teach:[
    "Point prevalence in the community is of the order of 4 to 5 per cent for major depression; twelve-month prevalence around 6 per cent; lifetime prevalence in the region of 15 to 20 per cent.",
    "Female to male ratio is approximately two to one, and this emerges in adolescence rather than being present in childhood.",
    "The sex difference does not appear before puberty and narrows again in later life, which constrains any explanation based on fixed biology alone.",
    "The Adult Psychiatric Morbidity Survey is the UK source. Common mental disorder overall affects around one in six adults in any given week.",
    "Depression is the leading cause of years lived with disability worldwide in Global Burden of Disease estimates.",
    "Prevalence is markedly higher in the presence of chronic physical illness, roughly two to three times, and in lower socioeconomic groups.",
    "Only a minority of depressed people in the community receive treatment, and of those, most are treated in primary care."
  ],
  cards:[
    ["Give the point, twelve-month and lifetime prevalence of major depression.","Approximately 4 to 5 per cent point prevalence, around 6 per cent twelve-month prevalence, and 15 to 20 per cent lifetime prevalence in community samples."],
    ["What is the sex ratio in depression and when does it emerge?","Approximately two to one, female to male. It is absent before puberty, emerges during adolescence, and narrows again in later life."]
  ],
  note:[
    "Depression is the leading global cause of years lived with disability.",
    "Prevalence is two to three times higher in chronic physical illness.",
    "The Adult Psychiatric Morbidity Survey is the UK epidemiological source.",
    "Most treated depression is managed in primary care."
  ],
  refs:["companion","nice"] };

TEACH["7.1.1.2"] = { free:true,
  simple:"Depression runs in families, but not in the way eye colour does. What is inherited is a susceptibility that only becomes illness when something happens, and the size of the something needed is smaller the more susceptibility you carry.",
  teach:[
    "Heritability of major depression is around 35 to 40 per cent, considerably lower than for bipolar disorder or schizophrenia.",
    "Genetics is polygenic: many common variants of individually tiny effect. Large genome-wide association studies have identified over a hundred loci.",
    "The 5-HTTLPR gene-environment interaction reported by Caspi in 2003 was hugely influential and has failed to replicate in large samples and meta-analysis. Teach it as a cautionary tale, not as a finding.",
    "Brown and Harris, in Social Origins of Depression, distinguished provoking agents, being severe life events and difficulties, from vulnerability factors, which included loss of mother before age eleven, three or more children under fourteen at home, lack of a confiding relationship, and lack of employment.",
    "Kendler's work established that severe life events, particularly those involving loss and humiliation, precede a large proportion of depressive episodes.",
    "The kindling hypothesis, from Post: early episodes require substantial precipitants, later episodes require progressively less, and eventually episodes arise autonomously.",
    "The monoamine hypothesis is inadequate as stated. Moncrieff's 2022 umbrella review found no consistent evidence that depression is caused by low serotonin, and this is now the honest teaching position.",
    "Better-supported biology: HPA axis dysregulation with non-suppression on the dexamethasone suppression test; reduced hippocampal volume in recurrent depression; and inflammatory markers including raised IL-6 and CRP in a subgroup.",
    "The neurotrophic hypothesis proposes reduced BDNF signalling and impaired neuroplasticity, restored by antidepressant treatment, and fits the delayed onset of antidepressant action better than the monoamine account.",
    "Psychological: Beck's cognitive triad and negative schemas; Seligman's learned helplessness and its later attributional reformulation; and Nolen-Hoeksema's response styles theory, in which rumination prolongs episodes and is commoner in women.",
    "Adverse childhood experience is one of the most robust risk factors, with a dose-response relationship to adult depression."
  ],
  cards:[
    ["What did Brown and Harris identify?","Provoking agents, being severe life events and ongoing difficulties, and vulnerability factors, comprising loss of mother before age eleven, three or more children under fourteen at home, absence of a confiding relationship, and lack of employment outside the home."],
    ["What is the current status of the monoamine hypothesis?","Inadequate as an explanation of causation. Moncrieff's 2022 umbrella review found no consistent evidence that depression is caused by reduced serotonin. The neurotrophic and HPA axis accounts fit the evidence better, though antidepressants remain effective regardless of the causal mechanism."],
    ["State the kindling hypothesis.","Post's proposal that early depressive episodes require substantial environmental precipitants, that successive episodes require progressively smaller ones, and that later episodes may arise autonomously without identifiable triggers."],
    ["What is the heritability of major depression?","Approximately 35 to 40 per cent, substantially lower than the heritability of bipolar disorder or schizophrenia. The genetic architecture is polygenic, with over a hundred loci identified in large genome-wide association studies."]
  ],
  note:[
    "The 5-HTTLPR gene-environment interaction failed to replicate and should be taught as a cautionary example.",
    "HPA axis dysregulation shows as dexamethasone non-suppression.",
    "Raised IL-6 and CRP are found in a subgroup of depressed patients.",
    "Nolen-Hoeksema's rumination response style is commoner in women and prolongs episodes.",
    "Adverse childhood experience shows a dose-response relationship with adult depression."
  ],
  refs:["companion","stahl","gross"] };

TEACH["7.1.1.3"] = { free:true,
  simple:"Depression is not just sadness. Some depressed people are not sad at all: they are flat, or irritable, or convinced they are rotting from the inside. What is constant is that nothing gives pleasure and everything costs effort.",
  teach:[
    "ICD-11 requires depressed mood or markedly diminished interest, nearly every day for at least two weeks, with additional characteristic symptoms across affective, cognitive-behavioural and neurovegetative clusters.",
    "Core symptoms: low mood, anhedonia and reduced energy. Anhedonia is the most discriminating and the most useful to ask about directly.",
    "Biological symptoms: early morning wakening, diurnal variation with mood worst in the morning, appetite and weight loss, psychomotor change and loss of libido.",
    "Atypical features run the other way: hypersomnia, hyperphagia with weight gain, leaden paralysis, mood reactivity and rejection sensitivity.",
    "Cognitive symptoms: poor concentration, indecisiveness, guilt, worthlessness, hopelessness and thoughts of death. Hopelessness is the strongest cognitive correlate of suicidal intent.",
    "Psychotic depression: mood-congruent delusions of guilt, poverty, nihilism or deserved punishment, and second-person derogatory auditory hallucinations. It affects a substantial minority of severe inpatient depression.",
    "Cotard's syndrome is the nihilistic delusion of being dead, of not existing, or of having no internal organs, occurring in severe psychotic depression and in some organic states.",
    "Depressive stupor is the extreme, with immobility and mutism, and overlaps with catatonia.",
    "Depressive pseudodementia in older people: cognitive impairment with prominent don't know answers, an abrupt onset, the person complaining of memory rather than concealing it, and improvement with antidepressant treatment.",
    "Masked depression presents with somatic complaint, and is the commonest presentation worldwide. Somatic presentation is the global norm; psychological presentation is characteristic of educated Western populations.",
    "Rating scales: Hamilton Rating Scale for Depression, clinician-rated with a heavy somatic loading; Montgomery-Åsberg, clinician-rated and more sensitive to change; Beck Depression Inventory, self-rated; PHQ-9, self-rated and used in primary care."
  ],
  cards:[
    ["Which symptom is most discriminating in depression?","Anhedonia, the loss of interest or pleasure, which is more specific than low mood, particularly in physically ill and older patients, and should be asked about directly."],
    ["Describe the atypical features of depression.","Hypersomnia, hyperphagia with weight gain, leaden paralysis, preserved mood reactivity and long-standing interpersonal rejection sensitivity. They run in the opposite direction to the classical biological features."],
    ["What is Cotard's syndrome?","A nihilistic delusion of being dead, of not existing, or of having lost internal organs or bodily functions, occurring in severe psychotic depression and in certain organic states."],
    ["How is depressive pseudodementia distinguished from dementia?","Abrupt onset with a clearer date of onset, the person complaining of memory problems rather than concealing them, prominent don't know rather than near-miss answers, variable performance, preserved insight, and improvement with antidepressant treatment."]
  ],
  note:[
    "ICD-11 requires two weeks of near-daily symptoms.",
    "Hopelessness is the strongest cognitive correlate of suicidal intent.",
    "Psychotic depression features mood-congruent delusions of guilt, poverty and nihilism.",
    "Somatic presentation of depression is the global norm.",
    "HAM-D is clinician-rated with heavy somatic loading; MADRS is more sensitive to change; PHQ-9 is self-rated."
  ],
  refs:["oyebode","icd11","companion"] };

TEACH["7.1.1.4"] = { free:false,
  simple:"For mild depression, talking works as well as tablets and has fewer side effects. For severe depression, tablets work and talking alone usually does not. Most of the argument is about the middle.",
  teach:[
    "NICE NG222, 2022, recommends a menu of options for less severe depression with shared decision-making, including guided self-help, group CBT, group behavioural activation, exercise, and individual CBT, with antidepressants not first-line unless the person prefers them.",
    "For more severe depression the recommended options include individual CBT combined with an antidepressant, individual CBT alone, individual behavioural activation, or an antidepressant alone.",
    "SSRIs are the usual first-line pharmacological choice on tolerability rather than superior efficacy. Sertraline and escitalopram performed well on combined efficacy and acceptability in the Cipriani 2018 network meta-analysis of 522 trials.",
    "Antidepressants take two to four weeks for meaningful response and up to six to eight weeks for full response. Assess at two weeks and again at four.",
    "Continue treatment for at least six months after remission, and for at least two years where there have been two or more episodes in the recent past or where there are residual symptoms.",
    "Residual symptoms after treatment are the single strongest predictor of relapse, which is why remission rather than response is the correct target.",
    "STAR*D showed cumulative remission rising with successive steps but with declining returns: roughly a third remit at step one, and cumulative remission approaches two-thirds after four steps, with high relapse rates in those who needed later steps.",
    "Treatment-resistant depression is conventionally defined as failure to respond to two adequate trials of antidepressants of adequate dose and duration.",
    "Augmentation strategies with evidence: lithium, which also reduces suicide; quetiapine, olanzapine and aripiprazole; and liothyronine. Lithium requires monitoring of renal and thyroid function.",
    "Ketamine and esketamine act rapidly, within hours, through glutamatergic mechanisms. Esketamine nasal spray is licensed in treatment-resistant depression but was not recommended by NICE for routine NHS use on cost-effectiveness grounds.",
    "ECT is the most effective treatment in severe depression, particularly psychotic depression, and is first-line where the illness is life-threatening.",
    "Psychotic depression requires an antidepressant combined with an antipsychotic, or ECT. Antidepressant monotherapy is inadequate.",
    "Exercise has genuine antidepressant effect in mild to moderate depression and is recommended in guidance rather than offered as a token.",
    "Discontinuation symptoms occur on stopping, particularly with paroxetine and venlafaxine, and are frequently mistaken for relapse. Taper slowly, and more slowly at the lowest doses.",
    "Do not stop an antidepressant abruptly, do not combine an SSRI with an MAOI, and observe the required washout periods, especially the five-week washout after fluoxetine."
  ],
  cards:[
    ["What did the Cipriani 2018 network meta-analysis show?","That all 21 antidepressants examined were more effective than placebo across 522 trials, with modest differences between them. Sertraline and escitalopram performed well on combined efficacy and acceptability, supporting their use as first-line choices on tolerability grounds."],
    ["How long should an antidepressant be continued after remission?","At least six months after remission for a first episode, and at least two years where there have been two or more episodes in the recent past or where residual symptoms persist."],
    ["Define treatment-resistant depression and name augmentation strategies with evidence.","Failure to respond to two adequate trials of antidepressant at adequate dose and duration. Augmentation options with evidence include lithium, which also reduces suicide; quetiapine, olanzapine and aripiprazole; and liothyronine."],
    ["How is psychotic depression treated?","With an antidepressant combined with an antipsychotic, or with ECT. Antidepressant monotherapy is inadequate, and ECT is highly effective in this presentation."],
    ["What did STAR*D demonstrate?","That remission rates decline with each successive treatment step, roughly a third remitting at step one with cumulative remission approaching two-thirds after four steps, and that those requiring later steps had substantially higher relapse rates."]
  ],
  note:[
    "NICE NG222, 2022, offers a menu with shared decision-making rather than a fixed stepped sequence.",
    "Residual symptoms are the strongest predictor of relapse.",
    "Esketamine is licensed but was not recommended by NICE for routine NHS use.",
    "Paroxetine and venlafaxine cause the most discontinuation symptoms.",
    "Fluoxetine requires a five-week washout before an MAOI."
  ],
  refs:["nice","maudsley","stahl"] };

TEACH["7.1.1.5"] = { free:false,
  simple:"Most depressive episodes end. The problem is that most people who have one go on to have another, and each episode makes the next more likely.",
  teach:[
    "The median duration of an untreated episode is around six months; the great majority resolve within a year.",
    "Recurrence is the rule rather than the exception. Around half of those with a first episode have a second; after two episodes the risk of a third is around 70 per cent; after three it is around 90 per cent.",
    "Around 10 to 20 per cent develop a chronic course, defined as persistent symptoms beyond two years.",
    "Residual symptoms after an episode predict early relapse, poorer functioning and a shorter time to the next episode.",
    "Poor prognostic factors: earlier age of onset, greater severity, psychotic features, comorbid personality disorder or substance misuse, chronic physical illness, persisting social adversity, and lack of a confiding relationship.",
    "Mortality is raised. Suicide accounts for part of it, but cardiovascular disease accounts for more, and depression is an independent risk factor for cardiac mortality.",
    "Lifetime suicide risk in depression is often quoted as 15 per cent, which derives from severely ill inpatient samples and substantially overstates the risk across all depression. Figures around 4 to 6 per cent are more defensible for treated populations.",
    "Functional recovery lags symptomatic recovery. People return to symptom thresholds well before they return to work, relationships and previous role functioning.",
    "Mindfulness-based cognitive therapy reduces relapse in those with three or more previous episodes, and is recommended for that specific group.",
    "Maintenance antidepressant treatment substantially reduces relapse, and the effect persists as long as treatment continues."
  ],
  cards:[
    ["State the recurrence risk after successive depressive episodes.","Around 50 per cent after a first episode, around 70 per cent after a second, and around 90 per cent after a third."],
    ["What is the true lifetime suicide risk in depression?","The frequently quoted figure of 15 per cent derives from severely ill inpatient samples and overstates the risk. Figures of approximately 4 to 6 per cent are more defensible across treated depressive populations."],
    ["Which intervention specifically reduces relapse in recurrent depression?","Mindfulness-based cognitive therapy, recommended for people with three or more previous episodes, alongside maintenance antidepressant treatment."]
  ],
  note:[
    "Median untreated episode duration is around six months.",
    "Ten to twenty per cent develop a chronic course beyond two years.",
    "Cardiovascular disease contributes more to excess mortality in depression than suicide does.",
    "Functional recovery lags behind symptomatic recovery.",
    "Residual symptoms predict early relapse and shorter time to the next episode."
  ],
  refs:["companion","nice"] };

/* ---------- 7.1.2 BIPOLAR DISORDER ---------- */

TEACH["7.1.2.1"] = { free:true,
  simple:"Bipolar disorder affects roughly one person in a hundred, and unlike depression it affects men and women equally. It also starts young, usually before twenty-five, which is why it interrupts education and early careers so severely.",
  teach:[
    "Bipolar I, involving at least one manic episode, has a lifetime prevalence of around 1 per cent. Bipolar II, involving hypomania and depression, adds a further 1 per cent or so.",
    "The bipolar spectrum including subthreshold presentations is estimated at around 2 to 4 per cent, though the boundaries are contested.",
    "The sex ratio is approximately equal for bipolar I. Bipolar II and rapid cycling are commoner in women.",
    "Mean age of onset is in the late teens to early twenties, substantially earlier than unipolar depression.",
    "Diagnostic delay is a major clinical problem. The interval from first episode to correct diagnosis is commonly measured in years, most often because a depressive presentation is treated as unipolar.",
    "Prevalence shows little variation across countries and cultures, in contrast with depression, which supports a stronger biological contribution.",
    "Bipolar disorder is over-represented in creative and professional groups in some studies, but this literature is weak and prone to selection bias, and should be stated cautiously."
  ],
  cards:[
    ["Give the prevalence and sex ratio of bipolar disorder.","Bipolar I affects approximately 1 per cent lifetime, with bipolar II adding a further 1 per cent or so. The sex ratio is approximately equal for bipolar I, though bipolar II and rapid cycling are commoner in women."],
    ["Why is diagnosis of bipolar disorder commonly delayed?","Because the first presentation is usually depressive and is treated as unipolar depression. The interval from first episode to correct diagnosis is commonly measured in years."]
  ],
  note:[
    "Mean age of onset is late teens to early twenties, earlier than unipolar depression.",
    "Prevalence varies little across countries, unlike depression.",
    "The bipolar spectrum including subthreshold presentations is estimated at 2 to 4 per cent."
  ],
  refs:["companion","nice"] };

TEACH["7.1.2.2"] = { free:false,
  simple:"Of all the common psychiatric disorders, this is the one where genes matter most. If one identical twin has it, the other has roughly a two in three chance, which is a bigger number than almost anything else in psychiatry.",
  teach:[
    "Heritability is around 70 to 80 per cent, among the highest in psychiatry and higher than for schizophrenia by most estimates.",
    "Monozygotic concordance is around 40 to 70 per cent; dizygotic around 5 to 10 per cent. First-degree relatives carry roughly a tenfold increased risk.",
    "Genetic overlap with schizophrenia is substantial, with shared common variants including CACNA1C and ANK3, which undermines the strict Kraepelinian separation.",
    "CACNA1C encodes a calcium channel subunit, which is of interest given that several mood stabilisers act on ion channels.",
    "Neurotransmitter accounts remain unsatisfying. Dopaminergic overactivity in mania is supported by the manic effects of stimulants and levodopa and by the efficacy of dopamine antagonists.",
    "Kindling and behavioural sensitisation, again from Post, describe episodes becoming more frequent, more autonomous and less clearly precipitated over time.",
    "Circadian and sleep disruption is a genuine causal factor rather than only a symptom. Sleep deprivation reliably precipitates mania, and disrupted social rhythms precede episodes.",
    "The social rhythm hypothesis, underpinning Interpersonal and Social Rhythm Therapy, holds that disruption of daily routine destabilises circadian rhythm and precipitates episodes.",
    "Life events precede first episodes more reliably than later ones, consistent with kindling. Goal-attainment events specifically precede mania, which is a distinctive finding.",
    "Substance misuse, particularly stimulants and alcohol, both precipitates episodes and worsens course, and is present in a large minority.",
    "Postpartum period is the single highest-risk window for a first or recurrent manic episode in women with bipolar disorder.",
    "Antidepressant-induced switching into mania is real but its frequency is contested; the risk is higher with tricyclics and venlafaxine than with SSRIs."
  ],
  cards:[
    ["What is the heritability of bipolar disorder and the twin concordance?","Heritability is approximately 70 to 80 per cent, among the highest in psychiatry. Monozygotic concordance is around 40 to 70 per cent, dizygotic around 5 to 10 per cent, and first-degree relatives carry roughly a tenfold increased risk."],
    ["What does the genetic overlap with schizophrenia imply?","That the strict Kraepelinian separation of the two disorders is not supported at the genetic level. Shared common variants including CACNA1C and ANK3 are associated with both."],
    ["Explain the social rhythm hypothesis.","That disruption of regular daily routines destabilises circadian rhythm and precipitates mood episodes. It underpins Interpersonal and Social Rhythm Therapy, and is supported by the reliable precipitation of mania by sleep deprivation."],
    ["Which life events specifically precede mania?","Goal-attainment events, such as achieving a promotion or completing a major project, distinctively precede manic episodes, in contrast with the loss events preceding depression."]
  ],
  note:[
    "CACNA1C encodes a calcium channel subunit, of interest given ion channel effects of mood stabilisers.",
    "Sleep deprivation reliably precipitates mania.",
    "The postpartum period is the highest-risk window for episodes in women with bipolar disorder.",
    "Antidepressant switch risk is higher with tricyclics and venlafaxine than with SSRIs.",
    "Kindling predicts that later episodes are less clearly precipitated."
  ],
  refs:["semgen","companion","stahl"] };

TEACH["7.1.2.3"] = { free:true,
  simple:"Mania is not happiness. It is a state in which everything is speeded up and nothing is filtered, so a person spends money they do not have, says things they cannot take back, and cannot understand why anyone is worried.",
  teach:[
    "Mania requires elevated, expansive or irritable mood with increased activity or energy, lasting at least one week or requiring hospitalisation, with marked impairment.",
    "Irritable mania is common and is frequently missed because clinicians look for elation. Irritability rather than euphoria is the predominant mood in a substantial proportion.",
    "Core features: grandiosity, reduced need for sleep, pressure of speech, flight of ideas, distractibility, increased goal-directed activity, and excessive involvement in activities with a high potential for painful consequences.",
    "Hypomania differs from mania in degree and duration: at least four consecutive days, a clear change observable by others, but without marked impairment, without psychosis and without requiring admission.",
    "Psychosis occurs in mania and does not indicate schizophrenia. Delusions are typically mood-congruent and grandiose, though mood-incongruent delusions occur and worsen prognosis.",
    "Schneiderian first-rank symptoms occur in mania and therefore have no diagnostic specificity for schizophrenia, which is why both ICD-11 and DSM-5 removed them from the definition.",
    "Speech in mania: pressure of speech, flight of ideas with retained but loosening connections, clang associations, punning and distractibility. Formal thought disorder in mania preserves more logical linkage than in schizophrenia.",
    "Insight is characteristically absent in mania and characteristically present in hypomania, which is why hypomania is more often reported retrospectively.",
    "Mixed states: depressive and manic features simultaneously. ICD-11 retains a mixed episode category; DSM-5 uses a with mixed features specifier applied to an episode of either polarity.",
    "Mixed states carry the highest suicide risk of any phase of the illness, because depressive cognition coexists with the energy and impulsivity to act.",
    "Bipolar depression differs from unipolar in probabilistic ways: earlier onset, more episodes, more atypical features with hypersomnia and hyperphagia, more psychomotor retardation, more psychosis, and a family history of bipolar disorder.",
    "Rapid cycling is four or more episodes in twelve months. It is commoner in women, associated with hypothyroidism and with antidepressant exposure, and predicts poorer response to lithium."
  ],
  cards:[
    ["Distinguish mania from hypomania.","Mania lasts at least one week or requires hospitalisation, causes marked impairment, may include psychosis, and is characterised by absent insight. Hypomania lasts at least four consecutive days, represents an observable change from baseline, but causes no marked impairment, involves no psychosis, and does not require admission."],
    ["Why do first-rank symptoms lack diagnostic specificity?","Because they occur in mania and in organic states as well as in schizophrenia. Both ICD-11 and DSM-5 have removed them from the definition of schizophrenia on this basis."],
    ["Which phase of bipolar illness carries the highest suicide risk, and why?","Mixed states, because depressive cognition and hopelessness coexist with the energy, agitation and impulsivity required to act."],
    ["Which features suggest that a depressive episode is bipolar rather than unipolar?","Earlier age of onset, a greater number of previous episodes, atypical features with hypersomnia and hyperphagia, marked psychomotor retardation, psychotic features, postpartum onset, and a family history of bipolar disorder."]
  ],
  note:[
    "Irritability rather than elation is the predominant mood in a substantial proportion of manic episodes.",
    "Rapid cycling is four or more episodes in twelve months, commoner in women, and predicts poorer lithium response.",
    "Flight of ideas retains logical linkage; schizophrenic thought disorder does not.",
    "Mood-incongruent delusions in mania worsen prognosis.",
    "DSM-5 uses a mixed features specifier; ICD-11 retains a mixed episode category."
  ],
  refs:["oyebode","icd11","dsm5"] };

TEACH["7.1.2.4"] = { free:false,
  simple:"Lithium remains the best drug in psychiatry for this illness, seventy years after it was introduced, and it is the only one that reliably reduces suicide. It also needs blood tests forever, which is why it is prescribed less than it should be.",
  teach:[
    "Acute mania: an antipsychotic is first-line for speed, with haloperidol, olanzapine, quetiapine, risperidone and aripiprazole all effective. Any antidepressant should be stopped.",
    "Lithium and valproate are effective in acute mania but act more slowly than antipsychotics. Combination of an antipsychotic with lithium or valproate is more effective than either alone in severe mania.",
    "Bipolar depression is the harder problem. Quetiapine, olanzapine with fluoxetine, and lamotrigine have the best evidence. Lurasidone is effective and licensed in some jurisdictions.",
    "Antidepressant monotherapy in bipolar depression is not recommended, given the switch risk and limited efficacy. If used, it should be combined with an antimanic agent.",
    "Long-term prophylaxis: lithium is first-line and remains the most effective agent overall, with the strongest evidence for preventing both poles.",
    "Lithium is the only psychotropic with good evidence for reducing suicide and all-cause mortality in mood disorder, and this is its single most important property.",
    "Lithium monitoring: level twelve hours post-dose, weekly after initiation or dose change until stable, then every three months; renal and thyroid function every six months; calcium periodically.",
    "Therapeutic range is approximately 0.6 to 0.8 mmol per litre for maintenance, and up to 1.0 for acute mania or inadequate response. Toxicity occurs above 1.5 and is life-threatening above 2.0.",
    "Lithium adverse effects: tremor, polyuria and polydipsia from nephrogenic diabetes insipidus, hypothyroidism, weight gain, hyperparathyroidism with hypercalcaemia, and long-term reduction in renal function.",
    "Interactions raising lithium levels: NSAIDs, thiazide diuretics, ACE inhibitors and angiotensin receptor blockers, and dehydration from any cause.",
    "Valproate must not be used in women of childbearing potential unless the pregnancy prevention programme conditions are met, because of major malformation and neurodevelopmental risk.",
    "Lamotrigine prevents depressive relapse better than manic relapse. It must be titrated slowly because of the risk of Stevens-Johnson syndrome, and the dose is halved when combined with valproate, which inhibits its metabolism.",
    "Carbamazepine is a potent enzyme inducer, reduces the effectiveness of oral contraception and many other drugs, and requires attention to interactions.",
    "Psychological treatment: psychoeducation has good evidence for relapse prevention; CBT, family-focused therapy and Interpersonal and Social Rhythm Therapy all have supporting evidence.",
    "Relapse prevention practicalities: identifying the person's own early warning signs, protecting sleep, maintaining routine, avoiding stimulants and alcohol, and an agreed plan for what happens when warning signs appear."
  ],
  cards:[
    ["What is lithium's unique property?","It is the only psychotropic with good evidence for reducing suicide and all-cause mortality in mood disorder, in addition to being the most effective agent overall for preventing relapse of both poles."],
    ["State the lithium therapeutic and toxic ranges and the monitoring schedule.","Maintenance range approximately 0.6 to 0.8 mmol per litre, up to 1.0 in acute mania or inadequate response. Toxicity occurs above 1.5 and is life-threatening above 2.0. Levels twelve hours post-dose, weekly after initiation or dose change until stable, then three-monthly, with renal and thyroid function six-monthly."],
    ["Which drugs raise lithium levels?","NSAIDs, thiazide diuretics, ACE inhibitors and angiotensin receptor blockers, together with dehydration from any cause including intercurrent illness and hot weather."],
    ["What is distinctive about lamotrigine in bipolar disorder?","It prevents depressive relapse more effectively than manic relapse. It requires slow titration because of the risk of Stevens-Johnson syndrome, and the dose must be halved when combined with valproate, which inhibits its metabolism."],
    ["How should bipolar depression be treated?","With quetiapine, olanzapine combined with fluoxetine, or lamotrigine, which have the best evidence. Antidepressant monotherapy is not recommended because of switch risk and limited efficacy; if an antidepressant is used it should be combined with an antimanic agent."]
  ],
  note:[
    "Antipsychotics act faster than lithium or valproate in acute mania.",
    "Combination of an antipsychotic with lithium or valproate exceeds either alone in severe mania.",
    "Valproate is prohibited in women of childbearing potential outside the pregnancy prevention programme.",
    "Carbamazepine is a potent enzyme inducer and reduces oral contraceptive efficacy.",
    "Psychoeducation has good evidence for relapse prevention."
  ],
  refs:["nice","maudsley","bnf"] };

TEACH["7.1.2.5"] = { free:false,
  simple:"This is a lifelong illness that people live with rather than recover from, and the striking thing about the long term is how much of it is spent depressed rather than manic. The depression is what disables people.",
  teach:[
    "Bipolar disorder is recurrent in almost all cases. More than 90 per cent of those with a single manic episode have further episodes.",
    "The proportion of time spent symptomatic is high, and depressive symptoms account for roughly three times as much of that time as manic symptoms. This is the single most important prognostic fact.",
    "Depression, not mania, is the principal cause of functional impairment, disability and mortality in bipolar disorder.",
    "Only a minority achieve full functional recovery between episodes, and functional recovery lags symptomatic recovery substantially.",
    "Cognitive impairment persists between episodes in a substantial proportion, affecting attention, executive function and verbal memory, and correlates with the number of previous episodes.",
    "Suicide risk is high. Lifetime suicide risk is of the order of 6 to 7 per cent, and standardised mortality ratios for suicide are around twenty times the general population.",
    "Excess mortality is not chiefly from suicide. Cardiovascular and metabolic disease account for the majority of the reduced life expectancy, which is of the order of a decade or more.",
    "Poor prognostic factors: earlier onset, rapid cycling, mixed states, psychotic features, comorbid substance misuse, poor adherence, and a greater number of previous episodes.",
    "Good prognostic factors: later onset, predominantly manic polarity, good interepisode functioning, adherence to treatment, stable social support, and good response to lithium.",
    "Lithium responders may constitute a distinct subgroup, characterised by episodic course with full interepisode recovery, absence of rapid cycling, and a family history of lithium-responsive illness.",
    "Adherence is the central long-term clinical problem, since people miss hypomania, dislike the adverse effects, and feel well.",
    "Physical health monitoring is not optional: weight, blood pressure, lipids, glucose or HbA1c, renal and thyroid function, given both the illness and the drugs used to treat it."
  ],
  cards:[
    ["How is time distributed between the poles in the long-term course of bipolar disorder?","Depressive symptoms account for roughly three times as much symptomatic time as manic symptoms, and depression is the principal cause of functional impairment, disability and mortality."],
    ["What is the lifetime suicide risk in bipolar disorder?","Approximately 6 to 7 per cent, with standardised mortality ratios for suicide around twenty times the general population rate. Excess mortality overall is dominated by cardiovascular and metabolic disease rather than suicide."],
    ["Which features characterise the lithium-responsive subgroup?","An episodic course with full recovery between episodes, absence of rapid cycling, absence of prominent mixed states, and a family history of lithium-responsive bipolar illness."]
  ],
  note:[
    "Over 90 per cent of those with a single manic episode have further episodes.",
    "Interepisode cognitive impairment correlates with the number of previous episodes.",
    "Life expectancy is reduced by a decade or more, largely through cardiovascular disease.",
    "Adherence is the central long-term clinical problem.",
    "Physical health monitoring is required by both the illness and its treatment."
  ],
  refs:["companion","nice","maudphys"] };

/* ---------- 7.1.3 SCHIZOPHRENIA ---------- */

TEACH["7.1.3.1"] = { free:true,
  simple:"About one person in a hundred develops schizophrenia. That figure is quoted everywhere and it hides something important: the risk is not the same everywhere or for everyone, and where it varies tells you what causes it.",
  teach:[
    "Lifetime risk is conventionally given as around 1 per cent, though careful reviews suggest lifetime morbid risk closer to 0.7 per cent.",
    "Incidence is around 15 per 100,000 per year, and shows considerable variation between places and groups, which the old teaching of uniform incidence understated.",
    "The McGrath systematic reviews established that incidence varies fivefold between sites, and that this variation is systematic rather than noise.",
    "Sex: incidence is somewhat higher in men, with a ratio around 1.4 to 1. Onset is earlier in men, in the early twenties, against the late twenties in women, and women show a second smaller peak around the menopause.",
    "The oestrogen hypothesis proposes that oestrogen is protective, explaining both the later female onset and the postmenopausal peak.",
    "Urban birth and urban upbringing raise risk, with a dose-response relationship to the degree of urbanicity and to the duration of urban residence in childhood.",
    "Migration raises risk substantially, and the risk is higher in second-generation migrants than first, and higher where the person is a visible minority in the area they live.",
    "The AESOP study found incidence several times higher in Black Caribbean and Black African populations in England than in the White British population, not explained by misdiagnosis or by rates in countries of origin.",
    "The ethnic density effect: risk for a minority individual falls as the proportion of their own group in the local area rises, which points to social experience rather than to ethnicity itself.",
    "Winter and spring birth carries a small excess risk, of the order of 5 to 10 per cent, replicated in northern hemisphere studies and reversed in the southern hemisphere.",
    "Prevalence is lower than cumulative incidence would predict because of raised mortality and because some people recover.",
    "Socioeconomic status: both social causation, in which adversity causes illness, and social drift, in which illness causes downward mobility, contribute, and the classic Goldberg and Morrison study supported drift by examining fathers' occupations."
  ],
  cards:[
    ["What is the lifetime risk and incidence of schizophrenia, and how much does incidence vary?","Lifetime morbid risk is around 0.7 to 1 per cent and incidence around 15 per 100,000 per year. The McGrath reviews established that incidence varies approximately fivefold between sites, systematically rather than randomly."],
    ["Describe the sex differences in schizophrenia.","Incidence is somewhat higher in men, with a ratio of about 1.4 to 1. Onset is earlier in men, in the early twenties, compared with the late twenties in women, and women show a second smaller peak of onset around the menopause, consistent with the oestrogen protection hypothesis."],
    ["What is the ethnic density effect?","The observation that the risk of psychosis for a member of an ethnic minority falls as the proportion of their own ethnic group in the local area rises, which points to social experience rather than to ethnicity itself as the operative factor."],
    ["Distinguish social causation from social drift.","Social causation holds that socioeconomic adversity contributes to causing the illness. Social drift holds that the illness causes downward socioeconomic mobility. Goldberg and Morrison supported drift by showing that patients' fathers' occupational status was not lowered, while the patients' own was."]
  ],
  note:[
    "Urban birth and upbringing show a dose-response relationship with risk.",
    "Second-generation migrants carry higher risk than first-generation.",
    "Winter and spring birth carries a small excess risk, reversed in the southern hemisphere.",
    "AESOP found incidence several times higher in Black Caribbean and Black African populations in England.",
    "Prevalence is lower than cumulative incidence because of raised mortality and some recovery."
  ],
  refs:["morgan","companion","bhugra"] };

TEACH["7.1.3.2"] = { free:false,
  simple:"Nobody knows what causes schizophrenia, and anyone who says otherwise is selling something. What is known is a list of things that raise the risk, most of which act very early, long before anyone becomes unwell.",
  teach:[
    "Heritability is around 80 per cent. Monozygotic concordance is around 40 to 50 per cent, dizygotic around 10 to 15 per cent, and a child of one affected parent has a risk of around 13 per cent, rising to around 40 per cent with two affected parents.",
    "The monozygotic concordance being well under 100 per cent is the crucial fact: genes are necessary for the risk, and insufficient for the illness.",
    "Genetic architecture: highly polygenic, with over two hundred common variant loci of tiny individual effect, plus rare copy number variants of large effect.",
    "The strongest single common-variant signal is in the major histocompatibility complex region on chromosome 6, and has been linked to complement component 4 and to synaptic pruning.",
    "Copy number variants of large effect include 22q11.2 deletion, which carries a risk of schizophrenia of around a quarter to a third, and is the single strongest known genetic risk factor.",
    "The neurodevelopmental hypothesis holds that an early insult to brain development produces a vulnerability that manifests as illness only when the brain matures in adolescence.",
    "Supporting evidence: obstetric complications raising risk; premorbid delays in developmental milestones; subtle motor and cognitive abnormalities in childhood home videos of people who later develop the illness; and the absence of gliosis on neuropathology, which indicates a developmental rather than degenerative process.",
    "Prenatal risk factors: maternal infection particularly influenza, maternal malnutrition as shown by the Dutch Hunger Winter cohort, maternal stress, and obstetric complications including hypoxia.",
    "Advanced paternal age raises risk, attributed to accumulated de novo mutations in the male germline.",
    "Cannabis is associated with a dose-response increase in risk, stronger with high-potency preparations and earlier age of first use. The association is robust; the causal contribution is probable but confounding by shared vulnerability is not fully excluded.",
    "Childhood adversity, particularly sexual abuse, physical abuse and bullying, is associated with psychosis with a dose-response relationship, and this literature has strengthened considerably.",
    "The dopamine hypothesis in its current form: presynaptic dopamine synthesis capacity is elevated in the associative striatum, demonstrated by imaging, and this is the final common pathway rather than the cause.",
    "The aberrant salience model, from Kapur, proposes that dysregulated dopamine assigns significance to irrelevant stimuli, and that delusions are the person's attempt to explain that experience. It links the biology to the phenomenology better than any competing account.",
    "Glutamate: NMDA receptor hypofunction is supported by the fact that ketamine and phencyclidine reproduce positive, negative and cognitive symptoms, whereas amphetamine reproduces only positive symptoms.",
    "Structural findings: enlarged lateral ventricles, reduced whole brain and grey matter volume, and reduced hippocampal and temporal lobe volume. Effects are small, present at first episode, and partly confounded by antipsychotic exposure in chronic samples.",
    "Social factors: the social defeat hypothesis proposes that chronic experience of exclusion and subordinate position sensitises the dopamine system, and it unifies the migration, urbanicity and ethnic density findings.",
    "Expressed emotion does not cause schizophrenia but strongly predicts relapse, and the family intervention evidence follows from it."
  ],
  cards:[
    ["Give the genetic risk figures for schizophrenia.","Heritability around 80 per cent. Monozygotic concordance 40 to 50 per cent, dizygotic 10 to 15 per cent, one affected parent around 13 per cent, two affected parents around 40 per cent, general population around 1 per cent."],
    ["State the current form of the dopamine hypothesis.","Presynaptic dopamine synthesis and release capacity is elevated in the associative striatum, demonstrated by molecular imaging. This is understood as a final common pathway through which diverse risk factors act, rather than as the primary cause."],
    ["Explain the aberrant salience model.","Kapur's proposal that dysregulated dopamine transmission assigns motivational significance to irrelevant internal and external stimuli, producing a state of heightened but meaningless significance. Delusions are the person's cognitive attempt to explain that experience, which accounts for the link between the biology and the phenomenology."],
    ["What is the evidence for NMDA receptor hypofunction?","Ketamine and phencyclidine, which are NMDA antagonists, reproduce positive, negative and cognitive symptoms of schizophrenia, whereas amphetamine, which acts on dopamine, reproduces only positive symptoms. This suggests glutamatergic dysfunction is closer to the primary abnormality."],
    ["Which single genetic variant carries the greatest risk of schizophrenia?","The 22q11.2 deletion, velocardiofacial syndrome, which carries a risk of schizophrenia of approximately a quarter to a third."]
  ],
  note:[
    "Absence of gliosis on neuropathology indicates a developmental rather than degenerative process.",
    "The Dutch Hunger Winter cohort demonstrated the effect of prenatal malnutrition.",
    "Advanced paternal age raises risk through de novo mutations in the male germline.",
    "The strongest common-variant signal lies in the MHC region and involves complement component 4.",
    "The social defeat hypothesis unifies migration, urbanicity and ethnic density findings.",
    "Expressed emotion predicts relapse rather than causing the illness."
  ],
  refs:["semgen","lynall","stahl","morgan"] };

TEACH["7.1.3.3"] = { free:true,
  simple:"There are two kinds of symptom and they behave completely differently. Positive symptoms are things that have been added: voices, beliefs, disorganisation. Negative symptoms are things that have been taken away: motivation, speech, emotion. The drugs work on the first and barely touch the second.",
  teach:[
    "ICD-11 requires at least two symptoms from a specified list, one of which must be a core positive symptom, persisting for at least one month.",
    "The core symptom groups: persistent delusions; persistent hallucinations; disorganised thinking; experiences of influence, passivity or control; negative symptoms; grossly disorganised behaviour; and psychomotor disturbance.",
    "ICD-11 abolished the subtypes of schizophrenia, including paranoid, hebephrenic and catatonic, because they lacked stability over time and predictive validity. DSM-5 did the same. This is a change frequently examined.",
    "Positive symptoms: delusions, hallucinations, and formal thought disorder. Hallucinations in schizophrenia are typically auditory, in the third person, with running commentary, and occur in clear consciousness.",
    "Delusional perception is the attribution of abnormal significance to a normally perceived object, in two stages, and is the most specific of the first-rank symptoms.",
    "Passivity phenomena: made actions, made feelings, made impulses and somatic passivity, all involving loss of the sense of ownership of one's own mental or bodily activity.",
    "Formal thought disorder: loosening of associations, derailment or knight's move thinking, tangentiality, neologism, word salad in severe cases, and thought block.",
    "Negative symptoms: the five domains are blunted affect, alogia, avolition, anhedonia and asociality. They divide into diminished expression and avolition-apathy factors.",
    "Primary negative symptoms are intrinsic to the illness. Secondary negative symptoms arise from depression, from antipsychotic-induced parkinsonism, from institutionalisation or from persistent positive symptoms, and are treatable by removing the cause.",
    "Distinguishing primary from secondary negative symptoms is a routine and important clinical task, since the second is remediable and the first largely is not.",
    "Cognitive impairment is a core feature, not a complication. It affects processing speed, working memory, verbal learning, attention and executive function, is present before onset, and predicts functional outcome better than positive symptoms do.",
    "Catatonia is now classified separately in both ICD-11 and DSM-5, applicable across diagnoses rather than being a subtype of schizophrenia.",
    "The prodrome typically involves social withdrawal, declining function, odd beliefs and perceptual abnormalities, and is recognised in retrospect far more reliably than prospectively.",
    "Insight is best regarded dimensionally, comprising awareness of illness, attribution of symptoms and acceptance of treatment need, which can vary independently."
  ],
  cards:[
    ["What happened to the subtypes of schizophrenia?","ICD-11 and DSM-5 both abolished them, including paranoid, hebephrenic and catatonic types, because they lacked temporal stability, predictive validity and treatment implications. Catatonia is now classified separately and applies across diagnoses."],
    ["Name the five domains of negative symptoms and distinguish primary from secondary.","Blunted affect, alogia, avolition, anhedonia and asociality. Primary negative symptoms are intrinsic to the illness. Secondary negative symptoms arise from depression, antipsychotic-induced parkinsonism, institutionalisation or untreated positive symptoms, and are remediable by treating the cause."],
    ["What is delusional perception?","The attribution of abnormal and highly personal significance to a normally perceived object or event, occurring in two stages: normal perception followed by delusional interpretation. It is the most specific of Schneider's first-rank symptoms."],
    ["What is the status of cognitive impairment in schizophrenia?","A core feature rather than a complication. It affects processing speed, working memory, verbal learning, attention and executive function, is detectable before illness onset, and predicts functional outcome better than positive symptoms."]
  ],
  note:[
    "ICD-11 requires at least two symptoms including one core positive symptom, for at least one month.",
    "Auditory hallucinations in schizophrenia are typically third person with running commentary, in clear consciousness.",
    "Passivity phenomena involve loss of ownership of one's own mental or bodily activity.",
    "The prodrome is recognised reliably in retrospect and unreliably in prospect.",
    "Insight is dimensional, comprising awareness, attribution and acceptance of treatment need."
  ],
  refs:["oyebode","fish","icd11"] };

TEACH["7.1.3.4"] = { free:false,
  simple:"Every antipsychotic blocks dopamine D2 receptors and they are all roughly equally effective, except one. Clozapine works when nothing else has, nobody fully understands why, and it is prescribed years later than it should be.",
  teach:[
    "All effective antipsychotics are D2 receptor antagonists or partial agonists, and clinical potency correlates with D2 affinity. Around 65 to 70 per cent striatal D2 occupancy gives antipsychotic effect; above about 80 per cent extrapyramidal side effects appear.",
    "The first-generation and second-generation distinction is pharmacologically crude. The meaningful differences are in adverse effect profile rather than in efficacy.",
    "CATIE and CUtLASS both found no clear efficacy advantage of second-generation over first-generation antipsychotics, other than for clozapine. High discontinuation rates in CATIE were the headline finding.",
    "Clozapine is the exception. It is the only antipsychotic with demonstrated superiority in treatment-resistant schizophrenia, established by Kane's 1988 trial, and its mechanism remains unexplained.",
    "Treatment resistance is defined as failure to respond to two adequate trials of different antipsychotics at adequate dose for adequate duration, at least one being a second-generation agent.",
    "Around a third of people with schizophrenia are treatment-resistant, and clozapine produces meaningful response in roughly a third to a half of those.",
    "Clozapine adverse effects: agranulocytosis in around 1 per cent, requiring mandatory blood monitoring; myocarditis particularly in the first two months; seizures at higher doses; severe constipation which can be fatal through ileus; hypersalivation; sedation; and marked weight gain and metabolic effects.",
    "Constipation is the most under-recognised lethal complication of clozapine, and prophylactic laxatives are appropriate practice.",
    "Clozapine levels rise sharply on smoking cessation, because tobacco smoke induces CYP1A2. A patient who stops smoking abruptly, including on admission to a smoke-free ward, can become toxic.",
    "Delaying clozapine worsens outcome. Response rates fall with longer duration of treatment resistance, so early initiation is a quality standard rather than a preference.",
    "Extrapyramidal side effects: acute dystonia within hours to days; akathisia within days to weeks; parkinsonism within weeks; and tardive dyskinesia after months to years.",
    "Akathisia is associated with distress and with suicide, is frequently misread as agitation or as worsening psychosis, and is made worse by increasing the antipsychotic dose.",
    "Metabolic adverse effects are the principal cause of the mortality gap. Olanzapine and clozapine carry the highest metabolic burden; aripiprazole, lurasidone and ziprasidone the lowest.",
    "Hyperprolactinaemia: highest with risperidone, amisulpride and first-generation agents. Consequences include amenorrhoea, galactorrhoea, sexual dysfunction and reduced bone mineral density.",
    "Long-acting injectable formulations reduce relapse associated with covert non-adherence and should be offered rather than reserved as a sanction.",
    "Psychological and social treatment: family intervention reduces relapse and is recommended for all families in contact; CBT for psychosis is recommended by NICE though its effect on positive symptoms is smaller than once claimed; cognitive remediation improves cognition and, with vocational support, function.",
    "Early intervention in psychosis services improve outcomes over the first years and reduce admission, and duration of untreated psychosis is a modifiable predictor of outcome.",
    "Physical health monitoring at baseline and at least annually: weight and waist, blood pressure, fasting glucose or HbA1c, lipids, prolactin where indicated, and ECG where indicated by the drug or by risk factors."
  ],
  cards:[
    ["What is the D2 occupancy window for antipsychotic effect?","Approximately 65 to 70 per cent striatal D2 receptor occupancy produces antipsychotic effect, while occupancy above around 80 per cent produces extrapyramidal side effects. Clinical potency correlates with D2 affinity across the class."],
    ["Define treatment-resistant schizophrenia and state clozapine's place.","Failure to respond to two adequate trials of different antipsychotics at adequate dose and duration, at least one a second-generation agent. Clozapine is the only antipsychotic with demonstrated superiority in this group, established by Kane in 1988, and produces meaningful response in roughly a third to a half of those treated."],
    ["List the serious adverse effects of clozapine.","Agranulocytosis in around one per cent requiring mandatory blood monitoring; myocarditis, particularly in the first two months; seizures at higher doses; severe constipation which can be fatal through ileus; hypersalivation; sedation; and marked weight gain with metabolic disturbance."],
    ["Why do clozapine levels rise on smoking cessation?","Tobacco smoke induces CYP1A2, which metabolises clozapine. Abrupt cessation, including admission to a smoke-free ward, removes that induction and can produce toxic plasma levels."],
    ["What did CATIE and CUtLASS establish?","That second-generation antipsychotics offer no clear efficacy advantage over first-generation agents, with the exception of clozapine, and that discontinuation rates across all antipsychotics are high."],
    ["Give the time course of extrapyramidal side effects.","Acute dystonia within hours to days; akathisia within days to weeks; parkinsonism within weeks to months; and tardive dyskinesia after months to years of exposure."]
  ],
  note:[
    "Akathisia is associated with suicide, misread as agitation, and worsened by raising the dose.",
    "Olanzapine and clozapine carry the highest metabolic burden; aripiprazole and lurasidone the lowest.",
    "Risperidone, amisulpride and first-generation agents raise prolactin most.",
    "Constipation is the most under-recognised lethal clozapine complication.",
    "Delay to clozapine reduces the likelihood of response.",
    "Family intervention has among the largest effect sizes of any psychosocial intervention in schizophrenia."
  ],
  refs:["maudsley","nice","stahl","lawrie"] };

TEACH["7.1.3.5"] = { free:false,
  simple:"The old teaching was that a third get better, a third stay the same and a third get worse. It is roughly right and it hides the more important fact: people with this illness die about fifteen to twenty years early, and mostly from heart disease rather than from psychiatry.",
  teach:[
    "The classical rule of thirds is approximately supported: around a fifth to a third achieve good long-term outcome, a similar proportion have a severe deteriorating course, and the remainder fall between.",
    "Outcome is heterogeneous, and pessimistic prediction at first presentation is not justified by the data.",
    "Good prognostic factors: acute onset, presence of a clear precipitant, good premorbid functioning, prominent affective symptoms, later onset, female sex, being married, short duration of untreated psychosis, and good early treatment response.",
    "Poor prognostic factors: insidious onset, prominent negative symptoms, poor premorbid adjustment, early onset, male sex, social isolation, substance misuse, poor adherence and long duration of untreated psychosis.",
    "The WHO International Pilot Study of Schizophrenia and the subsequent Determinants of Outcome study reported better outcomes in developing countries. The finding is celebrated and contested, with criticisms about case ascertainment, follow-up and diagnostic comparability.",
    "Relapse: without maintenance medication, most people relapse within one to two years. Maintenance treatment substantially reduces this, and the question of who can safely discontinue remains unresolved.",
    "Discontinuation and dose reduction trials, including the Wunderink long-term follow-up, suggest that a subgroup may achieve better functional outcome on reduced dose, but the evidence is not sufficient to change routine practice and relapse rates were higher in the short term.",
    "Mortality: life expectancy is reduced by roughly fifteen to twenty years, and the gap has widened rather than narrowed over recent decades.",
    "The excess mortality is mostly cardiovascular and respiratory. Smoking, obesity, diabetes, dyslipidaemia, sedentary behaviour, antipsychotic effects and inferior physical health care all contribute.",
    "Suicide accounts for a smaller share, with lifetime risk around 5 per cent, highest early in the illness and in those with good insight and preserved cognition.",
    "Diagnostic overshadowing operates here as it does in intellectual disability: physical symptoms are attributed to the mental illness and are investigated less thoroughly.",
    "Functional outcome: employment rates are very low, of the order of ten to twenty per cent in most UK services, despite most people wanting to work and despite Individual Placement and Support being effective.",
    "Recovery in the personal sense, meaning a life with meaning and connection, is achievable independently of symptomatic remission, and is what most service users prioritise."
  ],
  cards:[
    ["State the good prognostic factors in schizophrenia.","Acute onset, an identifiable precipitant, good premorbid functioning, prominent affective symptoms, later age at onset, female sex, being married, short duration of untreated psychosis, and good early response to treatment."],
    ["Describe the mortality gap in schizophrenia and its causes.","Life expectancy is reduced by approximately fifteen to twenty years and the gap has widened over recent decades. The excess is predominantly cardiovascular and respiratory, driven by smoking, obesity, diabetes, dyslipidaemia, sedentary behaviour, antipsychotic effects and inferior physical health care. Suicide accounts for a smaller share, with lifetime risk around 5 per cent."],
    ["What did the WHO cross-national studies report, and what is the criticism?","Better outcomes in developing than in developed countries in the International Pilot Study of Schizophrenia and the Determinants of Outcome study. The finding is contested on grounds of case ascertainment, differential loss to follow-up and diagnostic comparability."],
    ["What is the relapse risk without maintenance antipsychotic treatment?","Most people relapse within one to two years without maintenance medication. Maintenance treatment substantially reduces this, though which individuals might safely discontinue remains unresolved."]
  ],
  note:[
    "The rule of thirds is approximately supported and outcome is genuinely heterogeneous.",
    "Wunderink suggested a subgroup may function better on reduced dose, with higher short-term relapse.",
    "Suicide risk is highest early in the illness and in those with preserved insight and cognition.",
    "Employment rates are of the order of ten to twenty per cent despite effective supported employment models.",
    "Personal recovery is achievable independently of symptomatic remission."
  ],
  refs:["companion","nice","maudphys"] };

/* ---------- 7.1.4 ANXIETY DISORDERS ---------- */

TEACH["7.1.4.1"] = { free:true,
  simple:"Anxiety disorders are the commonest psychiatric disorders there are, more common than depression, and they are the ones least likely to reach any treatment at all.",
  teach:[
    "Anxiety disorders as a group have the highest twelve-month and lifetime prevalence of any psychiatric category, with lifetime prevalence estimates in the region of a quarter to a third.",
    "Specific phobia is the commonest individual anxiety disorder, with lifetime prevalence around 10 per cent, followed by social anxiety disorder at around 10 to 12 per cent lifetime.",
    "Generalised anxiety disorder has a twelve-month prevalence of around 3 per cent and lifetime around 5 to 6 per cent.",
    "Panic disorder has a lifetime prevalence of around 2 to 4 per cent; agoraphobia around 1 to 2 per cent.",
    "Female to male ratio is approximately two to one across most anxiety disorders, with social anxiety disorder showing a more equal ratio.",
    "Age of onset is early. Specific phobia and separation anxiety begin in childhood, social anxiety in adolescence with a median around age thirteen, and generalised anxiety and panic disorder in the twenties and thirties.",
    "Comorbidity is the rule. Most people with one anxiety disorder have another, and around half have comorbid depression at some point.",
    "The treatment gap is large. Anxiety disorders have long delays to treatment, often more than a decade for social anxiety disorder, and a substantial proportion never present at all.",
    "In primary care, anxiety commonly presents somatically with palpitations, chest pain, dizziness, gastrointestinal symptoms and headache, and is investigated physically for a long time before being recognised."
  ],
  cards:[
    ["Which is the commonest psychiatric disorder category, and which the commonest individual anxiety disorder?","Anxiety disorders as a group have the highest lifetime prevalence of any psychiatric category, in the region of a quarter to a third. Specific phobia is the commonest individual anxiety disorder at around 10 per cent lifetime prevalence."],
    ["Give the typical ages of onset across the anxiety disorders.","Specific phobia and separation anxiety in childhood; social anxiety disorder in adolescence with a median around age thirteen; generalised anxiety disorder and panic disorder in the twenties and thirties."]
  ],
  note:[
    "Female to male ratio is around two to one, more equal in social anxiety disorder.",
    "Generalised anxiety disorder has around 3 per cent twelve-month prevalence.",
    "Delay to treatment in social anxiety disorder commonly exceeds a decade.",
    "Somatic presentation in primary care leads to prolonged physical investigation."
  ],
  refs:["companion","nice"] };

TEACH["7.1.4.2"] = { free:false,
  simple:"Anxiety is a survival system that has become oversensitive. The alarm works, it is just going off at the wrong things, and the more you avoid whatever set it off, the more convinced the system becomes that it was right.",
  teach:[
    "Heritability across the anxiety disorders is moderate, of the order of 30 to 50 per cent, with panic disorder at the higher end. Much of what is inherited is a general vulnerability rather than a disorder-specific one.",
    "The shared vulnerability is best described as trait neuroticism or negative affectivity, which loads onto both anxiety and depression and largely explains their genetic correlation.",
    "Behavioural inhibition in infancy, described by Kagan, is a temperamental style of withdrawal from novelty. It is stable, heritable and predicts later social anxiety disorder specifically.",
    "Neurobiology: the amygdala generates the fear response; the medial prefrontal cortex normally inhibits it. Anxiety disorders show amygdala hyperreactivity with reduced prefrontal regulation.",
    "The hippocampus provides contextual modulation, which explains why fear generalises inappropriately when context processing fails.",
    "Neurotransmitters: GABA is inhibitory and is the target of benzodiazepines; serotonergic and noradrenergic systems modulate; and the locus coeruleus is the noradrenergic source implicated in panic.",
    "Panic-specific theory: Klein's false suffocation alarm hypothesis, supported by carbon dioxide and sodium lactate infusion provoking panic selectively in panic disorder patients.",
    "Clark's cognitive model of panic: catastrophic misinterpretation of benign bodily sensations produces a vicious circle of escalating anxiety, maintained by safety behaviours that prevent disconfirmation.",
    "Conditioning: Mowrer's two-factor theory explains phobia acquisition by classical conditioning and maintenance by operant reinforcement of avoidance.",
    "Preparedness theory, from Seligman, explains why phobias cluster around evolutionarily relevant threats such as snakes, spiders, heights and blood, rather than around modern dangers.",
    "Little Albert, Watson and Rayner 1920, is the classic conditioning demonstration and is methodologically weak and ethically indefensible; teach it with those caveats.",
    "Learning by modelling and by information transmission, from Rachman's three pathways, accounts for phobias acquired without any direct aversive experience.",
    "Generalised anxiety disorder models: the intolerance of uncertainty model; Borkovec's avoidance theory, in which worry as verbal-linguistic activity suppresses distressing imagery and therefore prevents emotional processing; and Wells' metacognitive model of positive and negative beliefs about worry.",
    "Life events, particularly threat events rather than loss events, precede anxiety disorders, which mirrors the loss-depression association.",
    "Parenting factors: overprotection and low warmth are associated with anxiety disorders, though the direction of effect is not established and the child's temperament shapes parental behaviour too."
  ],
  cards:[
    ["What is behavioural inhibition and what does it predict?","Kagan's temperamental style of withdrawal from and distress at novelty, observable in infancy. It is stable and heritable, and specifically predicts later social anxiety disorder."],
    ["Describe the neurocircuitry of anxiety.","Amygdala hyperreactivity generating the fear response, with reduced regulatory input from the medial prefrontal cortex, and impaired hippocampal contextual modulation which permits inappropriate generalisation of fear."],
    ["What is Klein's false suffocation alarm hypothesis?","The proposal that panic disorder involves a hypersensitive brainstem suffocation monitor, supported by the selective provocation of panic in patients but not controls by carbon dioxide inhalation and sodium lactate infusion."],
    ["Explain preparedness theory.","Seligman's proposal that humans are evolutionarily prepared to acquire fear of certain stimuli, such as snakes, spiders, heights and blood, more readily than of others, which explains why phobias cluster around ancestral rather than modern dangers."],
    ["Summarise Borkovec's avoidance theory of worry.","That worry, as predominantly verbal-linguistic activity, suppresses the vivid imagery and autonomic arousal associated with feared outcomes, thereby functioning as cognitive avoidance and preventing the emotional processing that would allow habituation."]
  ],
  note:[
    "Heritability across anxiety disorders is around 30 to 50 per cent, highest in panic disorder.",
    "Trait neuroticism largely explains the genetic correlation between anxiety and depression.",
    "Rachman's three pathways: direct conditioning, modelling, and information transmission.",
    "Threat life events precede anxiety; loss events precede depression.",
    "Little Albert is methodologically weak and ethically indefensible and should be taught with caveats."
  ],
  refs:["gross","companion","stahl"] };

TEACH["7.1.4.3"] = { free:true,
  simple:"Every anxiety disorder has the same physical symptoms. What tells them apart is what the person is frightened of, and what they do to avoid it.",
  teach:[
    "The autonomic symptoms are common to all: palpitations, sweating, tremor, dry mouth, breathlessness, chest tightness, nausea, dizziness, paraesthesiae, hot flushes and chills.",
    "Discrimination is by cognitive content and by behaviour. Ask what the person fears will happen, and what they do to stop it.",
    "Generalised anxiety disorder: excessive worry about multiple everyday domains, difficult to control, present more days than not, with restlessness, fatigue, poor concentration, irritability, muscle tension and sleep disturbance. ICD-11 requires several months.",
    "Panic disorder: recurrent unexpected panic attacks with a discrete surge of intense fear peaking within minutes, plus persistent concern about further attacks or a maladaptive change in behaviour. The fear is of the attack itself.",
    "The distinguishing feature of panic disorder is fear of the bodily sensations and their catastrophic meaning: heart attack, suffocation, fainting, madness or loss of control.",
    "Agoraphobia is fear of situations from which escape might be difficult or help unavailable, typically public transport, open spaces, enclosed spaces, queues and crowds, and being outside the home alone.",
    "In ICD-11 agoraphobia is a diagnosis in its own right and no longer defined by its relationship to panic.",
    "Social anxiety disorder: fear of scrutiny and of negative evaluation in social or performance situations, with fear of showing anxiety symptoms visibly. Blushing, tremor, sweating and fear of these being noticed are central.",
    "Clark and Wells' model identifies the maintaining processes: shifting to self-focused attention, constructing a negative image of how one appears, safety behaviours, anticipatory anxiety and post-event processing.",
    "Specific phobia: marked fear of a circumscribed object or situation, with immediate anxiety on exposure and avoidance. Blood-injection-injury phobia is distinctive in producing a biphasic vasovagal response with fainting rather than sustained tachycardia.",
    "Applied tension is the specific treatment for blood-injection-injury phobia, because the mechanism is a drop in blood pressure rather than sympathetic arousal.",
    "Separation anxiety disorder and selective mutism are both classified with the anxiety disorders in ICD-11 and DSM-5, and separation anxiety may be diagnosed in adults.",
    "Health anxiety, hypochondriasis, sits with obsessive-compulsive and related disorders in ICD-11 rather than with the anxiety disorders, and is covered under 7.1.6.",
    "Always exclude physical mimics: thyrotoxicosis, arrhythmia, phaeochromocytoma, hypoglycaemia, asthma, and stimulant or caffeine use. Also consider alcohol and benzodiazepine withdrawal, which present with prominent anxiety.",
    "Rating scales: GAD-7 for generalised anxiety, the Hamilton Anxiety Rating Scale, the Beck Anxiety Inventory, and the Liebowitz Social Anxiety Scale."
  ],
  cards:[
    ["How are the anxiety disorders distinguished from one another?","By cognitive content and by behaviour rather than by autonomic symptoms, which are common to all. Ask what the person fears will happen and what they do to prevent it: fear of the panic attack itself in panic disorder, fear of negative evaluation in social anxiety, fear of inability to escape in agoraphobia, and diffuse worry across multiple domains in generalised anxiety disorder."],
    ["What is distinctive about blood-injection-injury phobia?","It produces a biphasic vasovagal response with an initial rise then a fall in heart rate and blood pressure, leading to fainting rather than sustained tachycardia. Applied tension, which raises blood pressure, is therefore the specific treatment rather than relaxation."],
    ["Summarise the Clark and Wells maintaining processes in social anxiety.","A shift to self-focused attention, construction of a negative observer-perspective image of how one appears, use of safety behaviours which prevent disconfirmation, anticipatory anxiety before events, and post-event processing which rehearses and consolidates the negative appraisal."],
    ["Which physical conditions mimic anxiety disorders?","Thyrotoxicosis, cardiac arrhythmia, phaeochromocytoma, hypoglycaemia and asthma, together with stimulant and caffeine use and alcohol or benzodiazepine withdrawal."]
  ],
  note:[
    "ICD-11 makes agoraphobia a diagnosis in its own right, independent of panic.",
    "Separation anxiety disorder may be diagnosed in adults in both current systems.",
    "Health anxiety sits with obsessive-compulsive and related disorders in ICD-11.",
    "A panic attack peaks within minutes; the fear is of the attack itself.",
    "GAD-7, HAM-A, BAI and the Liebowitz scale are the standard instruments."
  ],
  refs:["icd11","oyebode","nice"] };

TEACH["7.1.4.4"] = { free:false,
  simple:"For all of these, the treatment is the same in principle: stop avoiding the thing. Medication makes that easier to bear, and in the disorders where avoidance is central, the medication alone rarely finishes the job.",
  teach:[
    "CBT is first-line for every anxiety disorder in NICE guidance, with disorder-specific protocols rather than a generic package.",
    "Exposure is the active ingredient wherever avoidance is present. It must be graded, prolonged, repeated and without safety behaviours.",
    "Generalised anxiety disorder, NICE CG113 stepped care: education and active monitoring; low-intensity psychological intervention such as guided self-help; then high-intensity CBT or applied relaxation, or drug treatment; then specialist input.",
    "Drug treatment in generalised anxiety disorder: an SSRI first-line, usually sertraline as the most cost-effective, then an alternative SSRI or SNRI, then pregabalin.",
    "Benzodiazepines should not be used beyond two to four weeks in anxiety disorders because of tolerance and dependence, and specifically should not be used in panic disorder, where NICE advises against them.",
    "Panic disorder: CBT based on the Clark model, dropping safety behaviours and conducting behavioural experiments including interoceptive exposure, deliberately inducing the feared sensations.",
    "Interoceptive exposure, such as hyperventilating deliberately or spinning to induce dizziness, is the specific technique of panic treatment and distinguishes it from generic relaxation.",
    "Social anxiety disorder: individual CBT based on the Clark and Wells model is first-line and is more effective than medication. Video feedback is used to correct the distorted self-image.",
    "Drug treatment in social anxiety disorder: SSRIs, particularly escitalopram, sertraline and paroxetine, or venlafaxine. Beta-blockers are useful only for discrete performance anxiety and not for the disorder.",
    "Specific phobia: exposure therapy is highly effective and often brief. Single-session treatments of two to three hours achieve lasting results in specific phobia, which is unusual in psychiatry.",
    "Applied tension for blood-injection-injury phobia, applied relaxation for generalised presentations.",
    "SSRIs in anxiety disorders often cause an initial increase in anxiety, so start low, warn the patient explicitly, and titrate slowly. Failure to warn is the commonest reason for early discontinuation.",
    "Effective doses in anxiety disorders are often higher and the time to response longer than in depression, commonly up to twelve weeks for full effect.",
    "Continue medication for at least twelve months after response in anxiety disorders, longer than the six months used in depression, because relapse rates on early discontinuation are high.",
    "Digital and low-intensity interventions have a real evidence base in mild to moderate anxiety and are the entry point in stepped care.",
    "Relapse prevention rests on continuing exposure after treatment ends, and on the person understanding that anxiety returning is not the same as treatment failing."
  ],
  cards:[
    ["What is interoceptive exposure and where is it used?","Deliberate induction of the feared bodily sensations, for example by voluntary hyperventilation, spinning or exercise, so that the catastrophic interpretation can be disconfirmed. It is the technique specific to panic disorder treatment."],
    ["What does NICE recommend for social anxiety disorder?","Individual CBT based on the Clark and Wells model as first-line, which is more effective than medication. Pharmacological options are SSRIs, particularly escitalopram, sertraline or paroxetine, or venlafaxine. Beta-blockers are useful only for discrete performance anxiety, not for the disorder."],
    ["How long should medication be continued after response in an anxiety disorder?","At least twelve months, longer than the six months conventionally used in depression, because relapse rates following early discontinuation are high."],
    ["What must patients be warned about when starting an SSRI for anxiety?","That anxiety commonly increases initially before improving. Failure to give this warning is the commonest reason for early discontinuation. Start at a low dose and titrate slowly."],
    ["What is the NICE position on benzodiazepines in anxiety disorders?","They should not be used beyond two to four weeks because of tolerance and dependence, and specifically should not be used in panic disorder."]
  ],
  note:[
    "Exposure must be graded, prolonged, repeated and free of safety behaviours.",
    "Single-session exposure of two to three hours achieves lasting results in specific phobia.",
    "Pregabalin is a later-line option in generalised anxiety disorder.",
    "Effective antidepressant doses in anxiety are often higher than in depression, with response up to twelve weeks.",
    "Video feedback corrects the distorted self-image in social anxiety disorder."
  ],
  refs:["nice","maudsley","companion"] };

TEACH["7.1.4.5"] = { free:false,
  simple:"Untreated, these disorders tend to persist for years and shrink a person's life quietly rather than dramatically. Treated properly, most people improve substantially, which makes the low treatment rate the real problem.",
  teach:[
    "Anxiety disorders tend to run a chronic fluctuating course when untreated, with symptoms waxing and waning around a persistently raised baseline.",
    "Generalised anxiety disorder has a particularly chronic course, with low spontaneous remission rates and frequent relapse after remission.",
    "Panic disorder has a more variable course. A proportion remit fully, but relapse is common and agoraphobic avoidance, once established, predicts a worse and more disabling course.",
    "Social anxiety disorder is among the most chronic, with onset in adolescence and a course frequently lasting decades. Spontaneous remission in adulthood is uncommon.",
    "Specific phobia is chronic if untreated but responds so well to exposure that prognosis with treatment is excellent.",
    "Comorbid depression worsens prognosis across all the anxiety disorders and is the commonest reason for eventual presentation.",
    "Anxiety disorders frequently precede depression developmentally, and treating anxiety early may reduce subsequent depression, though the preventive evidence is not conclusive.",
    "Functional consequences are substantial: reduced educational attainment, underemployment relative to ability, restricted social networks, and in agoraphobia, complete housebound states.",
    "Substance misuse is a common complication, particularly alcohol used as self-medication for social anxiety, and it worsens the course of both conditions.",
    "Suicide risk is raised in anxiety disorders, particularly panic disorder, though much of the risk is attributable to comorbid depression and substance misuse.",
    "Predictors of good outcome: shorter duration before treatment, absence of comorbidity, absence of a personality disorder, good adherence to exposure work, and continued application after treatment ends.",
    "Health economic burden is dominated by lost productivity rather than by treatment costs, which is the argument underlying the expansion of talking therapies services."
  ],
  cards:[
    ["Which anxiety disorders have the most chronic courses?","Generalised anxiety disorder and social anxiety disorder, both of which have low spontaneous remission rates and frequently persist for decades. Specific phobia is chronic untreated but responds excellently to exposure."],
    ["What most worsens prognosis across the anxiety disorders?","Comorbid depression, comorbid substance misuse particularly alcohol used as self-medication, established agoraphobic avoidance, comorbid personality disorder, and a long duration of untreated illness."]
  ],
  note:[
    "Anxiety disorders frequently precede depression developmentally.",
    "Agoraphobic avoidance, once established, predicts a more disabling course.",
    "Suicide risk is raised, particularly in panic disorder, largely through comorbidity.",
    "Economic burden is dominated by lost productivity rather than treatment cost."
  ],
  refs:["companion","nice"] };

/* ---------- 7.1.5 OCD ---------- */

TEACH["7.1.5.1"] = { free:true,
  simple:"OCD affects about two people in a hundred, which is far more than most clinicians see, because people hide it. The average person waits over ten years before telling anyone, usually because the thoughts feel shameful.",
  teach:[
    "Lifetime prevalence is around 2 to 3 per cent; twelve-month prevalence around 1 to 1.5 per cent.",
    "The sex ratio is approximately equal in adults. In childhood-onset OCD boys predominate.",
    "Bimodal age of onset: an early peak around age ten to twelve, commoner in boys and more associated with tics, and a later peak in the early twenties.",
    "Onset after age thirty-five is unusual and should prompt consideration of an organic cause or another diagnosis.",
    "Delay to treatment is long, commonly more than a decade, driven by shame about the content of obsessions and by lack of recognition in primary care.",
    "OCD was ranked by the World Health Organization among the leading causes of disability worldwide, which surprises people given how little service resource it receives.",
    "Familial aggregation is clear: first-degree relatives have a substantially raised risk, higher for early-onset cases.",
    "ICD-11 created a grouping of obsessive-compulsive and related disorders, containing OCD, body dysmorphic disorder, olfactory reference disorder, hypochondriasis, hoarding disorder, and body-focused repetitive behaviour disorders such as trichotillomania and excoriation disorder."
  ],
  cards:[
    ["Give the prevalence, sex ratio and age of onset pattern in OCD.","Lifetime prevalence around 2 to 3 per cent, with an approximately equal adult sex ratio and male predominance in childhood-onset cases. Onset is bimodal, with an early peak around age ten to twelve associated with tics, and a later peak in the early twenties."],
    ["Which disorders are grouped with OCD in ICD-11?","Body dysmorphic disorder, olfactory reference disorder, hypochondriasis, hoarding disorder, and the body-focused repetitive behaviour disorders including trichotillomania and excoriation disorder."]
  ],
  note:[
    "Delay to treatment commonly exceeds a decade, driven by shame about obsessional content.",
    "Onset after age thirty-five should prompt consideration of an organic cause.",
    "OCD ranks among the leading global causes of disability.",
    "First-degree relative risk is raised, particularly for early-onset cases."
  ],
  refs:["icd11","companion","nice"] };

TEACH["7.1.5.2"] = { free:false,
  simple:"Everybody has intrusive horrible thoughts. The difference in OCD is not the thought, it is what the person concludes about themselves for having had it, and what they then do to make sure it does not come true.",
  teach:[
    "Heritability is around 40 to 50 per cent, higher in early-onset cases, where estimates reach 65 per cent.",
    "OCD shows familial and genetic overlap with tic disorders, particularly Tourette syndrome, and early-onset tic-related OCD may be a distinct subtype.",
    "The cortico-striato-thalamo-cortical circuit is the neuroanatomical model. Hyperactivity in the orbitofrontal cortex, anterior cingulate and caudate nucleus is the most replicated imaging finding in psychiatry.",
    "Functional imaging shows this hyperactivity at rest, increasing on symptom provocation and normalising after successful treatment with either SSRIs or CBT. That last point is important: psychological treatment changes the biology.",
    "Serotonergic involvement is inferred from treatment response, since only serotonergic antidepressants work in OCD, while noradrenergic ones do not. This is a rare instance of pharmacological specificity.",
    "Glutamatergic abnormality is supported by imaging and by the partial evidence for glutamate-modulating augmentation agents.",
    "PANDAS, paediatric autoimmune neuropsychiatric disorders associated with streptococcal infection, proposes abrupt-onset OCD and tics following group A streptococcal infection through molecular mimicry. It remains contested and is now often subsumed under the broader PANS category.",
    "Salkovskis' cognitive model is the dominant psychological account: intrusive thoughts are universal, and OCD arises from an inflated sense of responsibility for preventing harm, which turns a normal intrusion into a personal duty.",
    "Thought-action fusion is the belief that thinking something is morally equivalent to doing it, or that thinking makes it more likely to happen. It maintains the appraisal.",
    "Rachman's account of obsessions: catastrophic misinterpretation of the significance of one's own intrusive thoughts, particularly as revealing something about one's character.",
    "Compulsions are maintained by negative reinforcement. The ritual reduces anxiety, which reinforces the ritual and prevents the person from discovering that the anxiety would have fallen anyway.",
    "Neutralising, reassurance seeking and mental rituals function exactly as overt compulsions do, and missing covert rituals is a common reason treatment fails.",
    "Not-just-right experiences and incompleteness, rather than harm avoidance, drive a substantial proportion of symmetry and ordering symptoms, and respond less well to standard harm-focused treatment.",
    "Life events, particularly increased responsibility such as becoming a parent, commonly precede onset, which fits the responsibility model."
  ],
  cards:[
    ["Describe the neurocircuitry model of OCD.","Hyperactivity in the cortico-striato-thalamo-cortical circuit, particularly the orbitofrontal cortex, anterior cingulate cortex and caudate nucleus, seen at rest, increasing on symptom provocation, and normalising after successful treatment with either SSRIs or CBT."],
    ["Summarise Salkovskis' cognitive model.","Intrusive thoughts are universal. OCD arises when they are appraised through an inflated sense of personal responsibility for preventing harm, converting a normal intrusion into a moral obligation to act, which drives neutralising and compulsive behaviour."],
    ["What is thought-action fusion?","The belief that having a thought is morally equivalent to performing the corresponding act, or that thinking about an event makes it more likely to occur. It maintains the catastrophic appraisal of intrusive thoughts."],
    ["Why does the pharmacological response in OCD support serotonergic involvement?","Because only serotonergic antidepressants, the SSRIs and clomipramine, are effective in OCD, while noradrenergic antidepressants are not. This pharmacological specificity is unusual in psychiatry."],
    ["What is PANDAS?","Paediatric autoimmune neuropsychiatric disorders associated with streptococcal infection: the proposal that abrupt-onset OCD and tics may follow group A streptococcal infection through molecular mimicry. It remains contested and is often subsumed under the broader PANS category."]
  ],
  note:[
    "Heritability is around 40 to 50 per cent, reaching 65 per cent in early-onset cases.",
    "Genetic and familial overlap exists with tic disorders including Tourette syndrome.",
    "Compulsions are maintained by negative reinforcement of anxiety relief.",
    "Covert rituals and reassurance seeking function as compulsions and are commonly missed.",
    "Increased responsibility events, such as becoming a parent, commonly precede onset."
  ],
  refs:["companion","stahl","nice"] };

TEACH["7.1.5.3"] = { free:true,
  simple:"An obsession is a thought you cannot get rid of and do not want. A compulsion is what you do to make the thought go away. The relief lasts minutes, and then it comes back stronger, which is the trap.",
  teach:[
    "Obsessions are recurrent, persistent, intrusive and unwanted thoughts, images or urges, experienced as the person's own, that cause marked anxiety or distress and are resisted.",
    "The person recognises them as a product of their own mind. This distinguishes obsessions from thought insertion, which is the classic examination discrimination.",
    "Compulsions are repetitive behaviours or mental acts the person feels driven to perform in response to an obsession or according to rigid rules, aimed at reducing distress or preventing a feared event, and not realistically connected or clearly excessive.",
    "Common obsessional themes: contamination, harm to self or others, symmetry and order, forbidden sexual or religious thoughts, and doubt.",
    "Common compulsions: washing and cleaning, checking, counting, ordering and arranging, repeating, and mental rituals such as praying, counting or reviewing.",
    "Insight is variable, and both ICD-11 and DSM-5 provide an insight specifier including poor or absent insight, which is important because absent insight can be mistaken for delusion.",
    "OCD with absent insight is still OCD. The distinguishing feature from psychosis is the presence of driven ritual and the ego-dystonic history.",
    "Resistance is characteristic but not universal, and diminishes with chronicity, so its absence in longstanding illness does not exclude the diagnosis.",
    "Avoidance is central and often overlooked. A person who never enters the kitchen has no visible compulsion but severe OCD.",
    "Ego-dystonic and ego-syntonic: obsessions are ego-dystonic, felt as alien to the person's values. Obsessive-compulsive personality disorder features are ego-syntonic, felt as reasonable, and the two are distinct diagnoses that co-occur less often than the naming suggests.",
    "Body dysmorphic disorder: preoccupation with a perceived defect in appearance not observable or slight to others, with repetitive checking, comparing, camouflaging or reassurance seeking, and a high rate of cosmetic procedure and of suicide.",
    "Hoarding disorder: persistent difficulty discarding possessions regardless of value, due to a perceived need to save and distress at discarding, resulting in accumulation that compromises living space.",
    "Trichotillomania and excoriation disorder are body-focused repetitive behaviours, characterised by pleasure or relief rather than by anxiety reduction from an obsession.",
    "Assessment instrument: the Yale-Brown Obsessive Compulsive Scale, Y-BOCS, with a symptom checklist and ten severity items scoring obsessions and compulsions separately on time, interference, distress, resistance and control."
  ],
  cards:[
    ["How is an obsession distinguished from thought insertion?","An obsession is recognised by the person as a product of their own mind, however unwanted. Thought insertion involves the belief that the thought has been placed in the mind by an external agency and is not the person's own."],
    ["Describe the Y-BOCS.","The Yale-Brown Obsessive Compulsive Scale: a symptom checklist plus ten severity items rating obsessions and compulsions separately across time occupied, interference, distress, resistance and degree of control. It is the standard severity and outcome measure in OCD."],
    ["Distinguish ego-dystonic from ego-syntonic, and OCD from OCPD.","Obsessions are ego-dystonic, experienced as alien to the person's own values and resisted. Obsessive-compulsive personality disorder traits are ego-syntonic, experienced as reasonable and consistent with the self. They are distinct diagnoses and co-occur less often than the shared name implies."],
    ["What is body dysmorphic disorder?","Preoccupation with a perceived defect in physical appearance that is unobservable or slight to others, accompanied by repetitive behaviours such as mirror checking, comparing, camouflaging or reassurance seeking. It carries high rates of cosmetic procedure and of suicide."]
  ],
  note:[
    "Both ICD-11 and DSM-5 include an insight specifier; absent insight does not exclude OCD.",
    "Resistance diminishes with chronicity and its absence does not exclude the diagnosis.",
    "Avoidance may replace visible compulsions entirely.",
    "Hoarding disorder is defined by difficulty discarding, not by acquisition alone.",
    "Trichotillomania and excoriation involve relief or pleasure rather than obsession-driven anxiety reduction."
  ],
  refs:["oyebode","icd11","nice"] };

TEACH["7.1.5.4"] = { free:false,
  simple:"There is one psychological treatment that works in OCD and it is uncomfortable by design: touch the thing, do not wash, and wait. The waiting is the treatment, because the anxiety comes down on its own and the person finds out that it does.",
  teach:[
    "Exposure and response prevention is the specific psychological treatment: exposure to the trigger combined with prevention of the compulsive response, allowing habituation without the ritual.",
    "ERP works because it disconfirms the belief that the feared outcome will occur without the ritual, and because anxiety habituates if the ritual is not performed.",
    "Cognitive therapy targets the appraisal, particularly inflated responsibility and thought-action fusion, and is combined with ERP in practice.",
    "NICE CG31 stepped care: low-intensity CBT with ERP for mild impairment; then more intensive CBT with ERP, or an SSRI; then combined treatment; then specialist multidisciplinary services.",
    "SSRIs are effective in OCD but require higher doses and longer duration than in depression. Full response commonly takes ten to twelve weeks, sometimes longer.",
    "Doses used in OCD are typically at the upper end of the licensed range, for example fluoxetine 60 milligrams or sertraline 200 milligrams, and under-dosing is a common cause of apparent non-response.",
    "Clomipramine, a tricyclic with potent serotonergic action, is as effective as the SSRIs and in some analyses marginally more so, but is less well tolerated and more dangerous in overdose. It is second-line.",
    "Noradrenergic antidepressants are ineffective in OCD, which is a diagnostically useful pharmacological fact.",
    "Augmentation for non-response: an antipsychotic, most commonly aripiprazole or risperidone, has the best evidence, particularly where tics are present.",
    "Combining an SSRI with clomipramine is used in specialist practice but requires ECG monitoring and attention to serotonin syndrome risk.",
    "Continue effective medication for at least twelve months after response, since relapse on discontinuation is high, and taper slowly.",
    "Relapse rates on stopping medication without having completed ERP are high. ERP produces more durable benefit, which is the argument for prioritising it.",
    "Family accommodation is a major maintaining factor. Relatives providing reassurance, performing rituals or arranging life around the symptoms sustain the disorder, and family work to reduce accommodation is part of treatment.",
    "Reassurance is a compulsion by proxy. Clinicians giving repeated reassurance are participating in the disorder, and this must be named explicitly at the outset.",
    "For severe treatment-refractory OCD, specialist inpatient services, deep brain stimulation of the ventral capsule and ventral striatum, and in rare cases anterior capsulotomy or cingulotomy under section 57 safeguards.",
    "OCD in pregnancy and the postpartum period frequently features harm obsessions about the infant, which are ego-dystonic, resisted and not associated with risk to the child, and must be distinguished from psychotic ideas."
  ],
  cards:[
    ["What is exposure and response prevention, and why does it work?","Exposure to the obsessional trigger combined with prevention of the compulsive response. It works because anxiety habituates when the ritual is not performed, and because the feared outcome fails to occur, disconfirming the belief that the ritual is necessary."],
    ["How does SSRI treatment in OCD differ from treatment of depression?","Higher doses are required, typically at the upper end of the licensed range such as fluoxetine 60 milligrams or sertraline 200 milligrams, and the time to full response is longer, commonly ten to twelve weeks or more. Under-dosing is a common cause of apparent non-response."],
    ["Which augmentation strategy has the best evidence in OCD?","Addition of an antipsychotic, most commonly aripiprazole or risperidone, particularly where comorbid tics are present."],
    ["What is family accommodation and why does it matter?","The provision of reassurance, participation in rituals, or reorganisation of family life around the person's symptoms by relatives. It is a major maintaining factor, predicts poorer outcome, and reducing it is an explicit part of treatment."],
    ["Which antidepressants are ineffective in OCD?","Noradrenergic antidepressants. Only serotonergic agents, the SSRIs and clomipramine, are effective, which is a pharmacologically distinctive feature of the disorder."]
  ],
  note:[
    "Clomipramine is as effective as SSRIs but less well tolerated and more dangerous in overdose.",
    "Continue medication at least twelve months after response and taper slowly.",
    "ERP produces more durable benefit than medication alone.",
    "Clinician reassurance is a compulsion by proxy and must be named at the outset.",
    "Neurosurgery for OCD requires section 57 safeguards in England and Wales.",
    "Perinatal harm obsessions are ego-dystonic and not associated with risk to the infant."
  ],
  refs:["nice","maudsley","stahl"] };

TEACH["7.1.5.5"] = { free:false,
  simple:"Left alone, OCD tends to stay. Treated properly, most people improve a great deal, though a fair number keep some symptoms. The single biggest determinant of outcome is whether anyone did proper exposure work.",
  teach:[
    "The untreated course is typically chronic with fluctuating severity. Complete spontaneous remission is uncommon, occurring in a minority.",
    "Course patterns: chronic with fluctuation is commonest, episodic with clear remissions occurs in a minority, and a small proportion follow a deteriorating course.",
    "Treated outcome is substantially better. The majority of those completing adequate ERP achieve clinically significant improvement, though residual symptoms are common.",
    "Around 30 to 40 per cent do not respond adequately to first-line treatment, and around 10 per cent remain severely impaired despite everything.",
    "Poor prognostic factors: earlier age of onset, longer duration before treatment, hoarding symptoms, comorbid tic disorder, poor insight, comorbid personality disorder, and high family accommodation.",
    "Hoarding symptoms specifically predict poorer response to standard OCD treatment, which contributed to hoarding disorder being separated out as its own diagnosis.",
    "Good prognostic factors: later onset, shorter duration, good insight, absence of personality disorder, engagement with ERP, and low family accommodation.",
    "Comorbidity is high and affects outcome: major depression in a large proportion, other anxiety disorders, tic disorders, and eating disorders.",
    "Suicidality is higher than commonly recognised, particularly where obsessions have violent, sexual or religious content that the person finds shameful, and it should be asked about directly.",
    "Functional impact is substantial. Time occupied by rituals, avoidance, and the secrecy involved all restrict education, employment and relationships.",
    "Early recognition and treatment improves outcome, which makes the decade-long average delay to treatment the most consequential modifiable factor in the whole disorder."
  ],
  cards:[
    ["Describe the untreated and treated course of OCD.","Untreated, the course is typically chronic with fluctuating severity and complete spontaneous remission is uncommon. With adequate exposure and response prevention the majority achieve clinically significant improvement, though residual symptoms are common and around 30 to 40 per cent do not respond adequately to first-line treatment."],
    ["Which symptom dimension predicts poorer treatment response?","Hoarding symptoms, which respond less well to standard OCD treatment. This contributed to the separation of hoarding disorder as a distinct diagnosis in ICD-11 and DSM-5."],
    ["List the poor prognostic factors in OCD.","Earlier age of onset, longer duration of untreated illness, hoarding symptoms, comorbid tic disorder, poor or absent insight, comorbid personality disorder, and high levels of family accommodation."]
  ],
  note:[
    "A chronic fluctuating course is commonest; a small proportion deteriorate.",
    "Around 10 per cent remain severely impaired despite full treatment.",
    "Suicidality is higher than commonly recognised, particularly with shameful obsessional content.",
    "The decade-long average delay to treatment is the most consequential modifiable factor."
  ],
  refs:["companion","nice"] };
