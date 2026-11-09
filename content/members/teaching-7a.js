/* =====================================================================
   TEACHING, SECTION 7A — General Adult Psychiatry, the named topics
   12 items: perinatal, general hospital, emergency, psycho-sexual
   The 65 five-aspect disorder rows are in teaching-7b.js
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["7.2"] = { free:true,
  simple:"Having a baby is the single largest psychiatric risk event in a woman's life. The risk of becoming psychotic in the month after childbirth is many times higher than at any other time, and the illness that follows can move from normal to dangerous in a day.",
  teach:[
    "Postpartum psychosis affects roughly one to two per thousand deliveries. Onset is early, usually within the first two weeks and often within the first few days.",
    "It is a psychiatric emergency. Presentation is characteristically fluctuating, with confusion, perplexity, mood lability, delusions frequently concerning the baby, and rapid change over hours.",
    "The relationship to bipolar disorder is close. A woman with bipolar disorder has a risk of the order of one in four to one in two of a severe postpartum episode, and a personal or family history of postpartum psychosis raises it further.",
    "Treatment is admission, ideally to a mother and baby unit, with antipsychotic and mood stabiliser treatment. ECT is highly effective and works quickly, and is used where the illness is severe or the woman is not eating or drinking.",
    "Prognosis for the individual episode is good, with most women recovering fully. Recurrence risk in subsequent pregnancies is high, of the order of one in two to one in three.",
    "Postnatal depression affects around one in ten women, with onset typically within the first three months. It is not distinguishable in symptom profile from depression at other times.",
    "The Edinburgh Postnatal Depression Scale is the standard screening instrument, ten items, with a threshold conventionally around 13, though it is a screening rather than a diagnostic tool. Item 10 asks about self-harm and must always be reviewed.",
    "The baby blues affect the majority of women, peak around days three to five, are self-limiting within about ten days, and require reassurance rather than treatment. Distinguishing this from emerging illness is a routine clinical task.",
    "Effects on the child are real. Maternal depression is associated with impaired mother-infant interaction and with later cognitive and emotional difficulty in the child, mediated largely through the interaction rather than directly.",
    "Perinatal anxiety disorders are at least as common as depression and are systematically under-detected. Postpartum OCD with intrusive thoughts of harming the infant is specifically under-recognised and specifically treatable.",
    "Intrusive harm thoughts in OCD are ego-dystonic, resisted and distressing, and are not associated with increased risk to the child. Distinguishing them from psychotic thoughts about the baby is one of the most important discriminations in perinatal psychiatry.",
    "Suicide is a leading cause of maternal death in the year after birth in the UK, and the MBRRACE-UK reports have made this a recurrent national finding.",
    "Prescribing in pregnancy is about relative risk, not zero risk. Untreated severe mental illness carries its own substantial risk to mother and baby, and stopping medication abruptly on discovering pregnancy is a common and harmful error.",
    "Sodium valproate must not be used in any woman of childbearing potential unless the conditions of the pregnancy prevention programme are met. It carries a high risk of major congenital malformation and of neurodevelopmental impairment.",
    "Lithium in the first trimester is associated with a raised risk of cardiac malformation including Ebstein's anomaly, though the absolute risk is lower than once believed. Levels must be monitored closely, and around delivery the risk of toxicity rises with fluid shifts.",
    "Paroxetine has been associated with cardiac malformation and is generally avoided; SSRIs as a class are associated with a small increase in persistent pulmonary hypertension of the newborn and with neonatal adaptation syndrome.",
    "Breastfeeding: most antidepressants and antipsychotics are compatible. Lithium is relatively contraindicated because of significant infant exposure; clozapine is contraindicated because of agranulocytosis risk in the infant.",
    "Service structure: specialist perinatal community teams, mother and baby units admitting mother and infant together, and a pre-conception counselling role for women with existing severe mental illness."
  ],
  cards:[
    ["Describe postpartum psychosis and its relationship to bipolar disorder.","A psychiatric emergency affecting one to two per thousand deliveries, with onset usually within the first two weeks, characterised by fluctuating confusion, perplexity, mood lability and delusions often concerning the infant. A woman with bipolar disorder has a risk of the order of one in four to one in two, and recurrence risk in a subsequent pregnancy is around one in two to one in three."],
    ["What is the Edinburgh Postnatal Depression Scale?","A ten-item screening instrument for perinatal depression with a conventional threshold around 13. It is a screening rather than a diagnostic tool, and item 10, which asks about self-harm, must always be reviewed individually."],
    ["Distinguish postpartum OCD harm thoughts from psychotic thoughts about the infant.","OCD intrusive harm thoughts are ego-dystonic, actively resisted, distressing to the mother, and not associated with increased risk to the child. Psychotic thoughts are ego-syntonic or delusionally held, may be acted upon, and constitute an emergency. This is among the most important discriminations in perinatal psychiatry."],
    ["State the position on sodium valproate in women of childbearing potential.","It must not be used unless the conditions of the pregnancy prevention programme are met, because of a high risk of major congenital malformation and of neurodevelopmental impairment in the child."],
    ["Which psychotropics are problematic in breastfeeding?","Lithium is relatively contraindicated because of significant infant exposure and the need for infant monitoring. Clozapine is contraindicated because of the risk of agranulocytosis in the infant. Most other antidepressants and antipsychotics are compatible."]
  ],
  note:[
    "Baby blues peak at days three to five and resolve within about ten days without treatment.",
    "Suicide is a leading cause of maternal death in the year after birth in the UK.",
    "Lithium in the first trimester raises the risk of cardiac malformation including Ebstein's anomaly.",
    "SSRIs are associated with a small increase in persistent pulmonary hypertension of the newborn.",
    "ECT is highly effective and rapid in severe postpartum psychosis.",
    "Abrupt cessation of medication on discovering pregnancy is a common and harmful error."
  ],
  refs:["maudsley","nice","semliaison"] };

TEACH["7.3.1"] = { free:true,
  simple:"On a medical ward the question is almost never what psychiatric illness does this person have. It is which of these three things is happening: they are physically ill and confused, they are physically ill and frightened, or they had a psychiatric illness before any of this started.",
  teach:[
    "Rates of psychiatric disorder in the general hospital are high. Depression, anxiety, delirium, alcohol problems and cognitive impairment together affect a large minority of medical inpatients.",
    "Delirium first. Any new disturbance of consciousness, attention or cognition in a physically ill person is delirium until proven otherwise, and it is missed in a large proportion of cases.",
    "Attention is the discriminating feature. A person who cannot sustain attention long enough to complete a simple sequence has delirium; a person with intact attention and low mood does not.",
    "Diagnosing depression in physical illness is complicated by somatic overlap. Fatigue, poor appetite, sleep disturbance and weight loss all arise from the illness itself.",
    "Two solutions to the overlap: the inclusive approach counts every symptom regardless of cause, which over-diagnoses; the substitutive approach replaces somatic items with cognitive ones such as hopelessness, worthlessness, anhedonia and suicidal thinking, which is more useful clinically.",
    "Anhedonia, hopelessness, guilt and suicidal ideation carry the diagnostic weight in a physically ill patient. Tiredness carries almost none.",
    "Screening instruments designed for this setting: the Hospital Anxiety and Depression Scale, which deliberately excludes somatic items, and the PHQ-9 and GAD-7 which do not.",
    "Always take a medication history. Corticosteroids, interferon, some antivirals, dopamine agonists, opioids, antimuscarinics and benzodiazepines all cause psychiatric symptoms directly.",
    "Always take an alcohol and substance history. Undeclared alcohol dependence presenting as postoperative agitation on day three is a classic and dangerous scenario.",
    "Capacity assessment is the commonest specific request in liaison work, usually about refusal of treatment or of discharge destination. Assess the decision in question, not the person in general.",
    "A person may refuse treatment for a reason that seems irrational, and still have capacity. The Mental Capacity Act principle that an unwise decision is not incapacity is the point most often forgotten by referring teams.",
    "The Mental Health Act cannot be used to treat a physical illness, except where the physical treatment is treatment for the mental disorder or its consequences, such as refeeding in anorexia nervosa or treating the consequences of an overdose taken as a symptom of the mental disorder.",
    "Medically unexplained symptoms are common and are not the same as feigning. ICD-11 uses bodily distress disorder; DSM-5 uses somatic symptom disorder, which notably no longer requires the symptoms to be medically unexplained.",
    "Examination and investigation are part of a psychiatric assessment here: vital signs, oxygen saturation, glucose, electrolytes including sodium and calcium, renal and liver function, thyroid function, B12 and folate, infection screen, and imaging where indicated.",
    "Collateral history is essential and frequently omitted. What this person was like a week ago is the single most useful piece of information on a medical ward."
  ],
  cards:[
    ["How should depression be diagnosed in a physically ill patient?","Using the substitutive approach: replace somatic criteria that overlap with the physical illness, such as fatigue, appetite and sleep change, with cognitive criteria including anhedonia, hopelessness, worthlessness, guilt and suicidal ideation, which carry the diagnostic weight."],
    ["What is the discriminating clinical feature of delirium?","Inattention. A disturbance of attention and awareness developing acutely and fluctuating over the day, with an additional disturbance in cognition, in the context of a physiological cause. Any new cognitive disturbance in a physically ill patient is delirium until proven otherwise."],
    ["Can the Mental Health Act be used to treat a physical illness?","Only where the physical treatment is treatment for the mental disorder or its consequences, for example refeeding in anorexia nervosa or treating the physical consequences of an overdose taken as a manifestation of the mental disorder. It cannot be used to treat unrelated physical illness."],
    ["Which screening instrument is designed for the general hospital and why?","The Hospital Anxiety and Depression Scale, which deliberately excludes somatic items so that the score is not inflated by symptoms arising from the physical illness itself."]
  ],
  note:[
    "Corticosteroids, interferon, dopamine agonists, opioids and antimuscarinics all cause psychiatric symptoms directly.",
    "Undeclared alcohol dependence presenting as postoperative agitation is a classic scenario.",
    "An unwise decision does not indicate incapacity.",
    "ICD-11 uses bodily distress disorder; DSM-5 somatic symptom disorder no longer requires symptoms to be medically unexplained.",
    "Collateral history describing the person a week earlier is the most useful single piece of ward information."
  ],
  refs:["semliaison","oxhandbk","icd11"] };

TEACH["7.3.2"] = { free:false,
  simple:"Each medical specialty produces its own psychiatric problems, and a liaison psychiatrist is expected to know which ones. Oncology brings adjustment and delirium. Renal brings depression and capacity. Cardiology brings anxiety that looks like heart disease.",
  teach:[
    "Oncology: adjustment disorder is the commonest diagnosis, followed by depression and delirium. Distress screening with the Distress Thermometer is standard practice.",
    "Depression in cancer is under-treated because it is regarded as understandable. Understandable and treatable are not alternatives.",
    "Steroid-induced psychiatric disorder is common in oncology and neurology. Effects are dose-related, may be depressive, manic or psychotic, and typically begin within the first week.",
    "Cardiology: depression after myocardial infarction is common, is an independent predictor of mortality, and remains under-treated. Sertraline has the best cardiac safety evidence, from the SADHART trial.",
    "Citalopram and escitalopram carry dose-related QT prolongation with specified maximum doses, lower in the elderly and in hepatic impairment. This matters in cardiology and in overdose.",
    "Panic disorder presents repeatedly to cardiology with chest pain and palpitation, and coronary disease and panic frequently coexist rather than being alternatives.",
    "Renal medicine: high rates of depression, and complex prescribing. Lithium is contraindicated in significant renal impairment; most psychotropics need dose reduction; and dialysis removes some drugs and not others.",
    "Renal transplantation raises specific psychiatric questions about capacity, adherence and living donation.",
    "Hepatology: hepatic encephalopathy presents as fluctuating cognition and personality change and is often mistaken for a primary psychiatric disorder. Look for asterixis and check ammonia.",
    "Alcohol-related liver disease raises questions about transplantation and abstinence periods, in which psychiatric assessment of relapse risk is routinely requested.",
    "Endocrinology: hypothyroidism presents as depression and cognitive slowing; hyperthyroidism as anxiety, and in the elderly as apathetic thyrotoxicosis. Cushing's syndrome causes depression far more often than euphoria. Addison's causes apathy and depression. Hyperparathyroidism causes depression and cognitive change through hypercalcaemia.",
    "Neurology: epilepsy, stroke, Parkinson's disease, multiple sclerosis and traumatic brain injury each carry high psychiatric morbidity and are covered under 7.3.3.",
    "HIV medicine: high rates of depression; HIV-associated neurocognitive disorder; and important interactions, with ritonavir-boosted regimens inhibiting cytochrome enzymes and raising levels of many psychotropics.",
    "Intensive care: delirium affects the majority of ventilated patients and predicts long-term cognitive impairment. Post-intensive care PTSD is common and specifically associated with delusional memories from the admission.",
    "Obstetrics and gynaecology: perinatal psychiatry, termination, infertility treatment, and premenstrual dysphoric disorder.",
    "Surgery: preoperative anxiety, postoperative delirium in the elderly, body dysmorphic disorder presenting to cosmetic surgery, and the psychiatric assessment required before bariatric surgery.",
    "The general rule when advising another specialty: answer the question asked, in their language, on the same day, with a written plan naming who does what."
  ],
  cards:[
    ["Which antidepressant has the best evidence after myocardial infarction, and from which trial?","Sertraline, supported by the SADHART trial, which demonstrated cardiac safety in patients with depression following acute myocardial infarction or unstable angina."],
    ["Which endocrine disorders present as depression?","Hypothyroidism, Cushing's syndrome, which causes depression far more often than euphoria, Addison's disease, and hyperparathyroidism through hypercalcaemia. Hyperthyroidism presents as anxiety, or as apathetic thyrotoxicosis in the elderly."],
    ["What is the significance of delirium in intensive care?","It affects the majority of ventilated patients and independently predicts long-term cognitive impairment. Post-intensive care PTSD is common and is specifically associated with delusional memories formed during the admission."],
    ["Which antiretroviral interaction matters most in psychiatric prescribing?","Ritonavir-boosted regimens inhibit cytochrome P450 enzymes and raise plasma levels of many psychotropic drugs, requiring dose adjustment."]
  ],
  note:[
    "Steroid-induced psychiatric disorder is dose-related and usually begins within the first week.",
    "Citalopram and escitalopram carry dose-related QT prolongation with specified maxima.",
    "Lithium is contraindicated in significant renal impairment.",
    "Hepatic encephalopathy presents as fluctuating cognition with asterixis and is often mistaken for primary psychiatric illness.",
    "Depression after myocardial infarction independently predicts mortality.",
    "Answer a referring team's question the same day, in writing, naming who does what."
  ],
  refs:["semliaison","maudsley","maudphys"] };

TEACH["7.3.3"] = { free:false,
  simple:"Damage to different parts of the brain produces different personalities, and the pattern is consistent enough to locate the lesion from the behaviour. That is the whole content of neuropsychiatry, and it is heavily examined.",
  teach:[
    "Frontal lobe syndromes divide into three. Dorsolateral prefrontal damage produces the dysexecutive syndrome: poor planning, perseveration, poor set-shifting and reduced verbal fluency.",
    "Orbitofrontal damage produces disinhibition, impulsivity, tactlessness, emotional lability and loss of social judgement, with intelligence often preserved. This is the Phineas Gage picture.",
    "Medial frontal and anterior cingulate damage produces apathy, abulia and, at the extreme, akinetic mutism.",
    "Temporal lobe: dominant lesions produce receptive dysphasia and verbal memory impairment; non-dominant lesions produce non-verbal memory impairment and impaired facial recognition.",
    "Klüver-Bucy syndrome follows bilateral temporal lobe damage: hyperorality, hypersexuality, placidity, visual agnosia and hypermetamorphosis, the compulsion to attend to every visual stimulus.",
    "Parietal lobe: dominant lesions give Gerstmann's syndrome, being dysgraphia, dyscalculia, finger agnosia and left-right disorientation. Non-dominant lesions give hemispatial neglect, anosognosia, dressing apraxia and constructional apraxia.",
    "Occipital lobe: cortical blindness, and Anton's syndrome, which is denial of blindness with confabulation. Charles Bonnet syndrome is complex visual hallucination in visual impairment with retained insight.",
    "Stroke: depression affects around a third of survivors, is commonest in the first year, and is associated with worse functional recovery and higher mortality independent of severity.",
    "The old claim that left anterior lesions specifically cause post-stroke depression has not held up in meta-analysis and should be stated with caution.",
    "Emotionalism, or pathological crying and laughing, occurs after stroke and in motor neurone disease and multiple sclerosis, is distinct from depression, and responds well and rapidly to low-dose antidepressants.",
    "Traumatic brain injury: post-concussion syndrome with headache, dizziness, irritability and poor concentration; raised rates of depression, anxiety and PTSD; personality change; and a raised long-term risk of dementia.",
    "Post-traumatic amnesia duration is the best single predictor of outcome after head injury, better than initial Glasgow Coma Scale score.",
    "Epilepsy: prodromal irritability; ictal phenomena including déjà vu, jamais vu, fear, olfactory and gustatory hallucination in temporal lobe seizures; postictal psychosis after a lucid interval of hours to days; and interictal psychosis resembling schizophrenia but with better preserved affect and personality.",
    "Forced normalisation, described by Landolt, is the emergence of psychosis as the EEG normalises and seizures are controlled, and is the phenomenon behind the old idea of antagonism between epilepsy and psychosis.",
    "Non-epileptic attack disorder is common, frequently coexists with genuine epilepsy, and is distinguished by features such as gradual onset, prolonged duration, closed eyes with resistance to opening, side-to-side head movement, pelvic thrusting, and preserved awareness during bilateral motor activity.",
    "Parkinson's disease: depression in around forty per cent, often preceding motor symptoms; visual hallucinations from disease and from dopaminergic treatment; impulse control disorders from dopamine agonists; and dementia in the majority with long disease duration.",
    "Multiple sclerosis: depression, a raised suicide rate, fatigue, cognitive impairment particularly in processing speed, and euphoria in advanced disease.",
    "Huntington's disease: autosomal dominant CAG expansion on chromosome 4, with depression, irritability, apathy, psychosis, a high suicide rate, chorea and subcortical dementia. Psychiatric symptoms frequently precede motor signs by years."
  ],
  cards:[
    ["Describe the three frontal lobe syndromes.","Dorsolateral prefrontal damage produces the dysexecutive syndrome with poor planning, perseveration, impaired set-shifting and reduced verbal fluency. Orbitofrontal damage produces disinhibition, impulsivity, tactlessness and loss of social judgement with intelligence preserved. Medial frontal and anterior cingulate damage produces apathy, abulia and akinetic mutism."],
    ["What is Klüver-Bucy syndrome?","A syndrome following bilateral temporal lobe damage comprising hyperorality, hypersexuality, placidity, visual agnosia and hypermetamorphosis, the compulsion to attend to every visual stimulus."],
    ["Give the components of Gerstmann's syndrome and name the lesion site.","Dysgraphia, dyscalculia, finger agnosia and left-right disorientation, from a lesion of the dominant parietal lobe, classically the angular gyrus."],
    ["What is forced normalisation?","Landolt's description of the emergence of psychosis as the electroencephalogram normalises and seizures come under control, underlying the historical notion of a biological antagonism between epilepsy and psychosis."],
    ["What best predicts outcome after traumatic brain injury?","The duration of post-traumatic amnesia, which predicts outcome better than the initial Glasgow Coma Scale score."],
    ["What is emotionalism and how is it treated?","Pathological crying or laughing occurring after stroke and in motor neurone disease and multiple sclerosis, distinct from depression. It responds well and rapidly to low-dose antidepressants."]
  ],
  note:[
    "Anton's syndrome is denial of cortical blindness with confabulation.",
    "Charles Bonnet syndrome is complex visual hallucination in visual impairment with retained insight.",
    "The claim that left anterior lesions specifically cause post-stroke depression has not survived meta-analysis.",
    "Postictal psychosis follows a lucid interval of hours to days.",
    "Non-epileptic attacks frequently coexist with genuine epilepsy.",
    "Huntington's disease psychiatric symptoms often precede motor signs by years."
  ],
  refs:["lishman","oxneuropsy","semliaison"] };

TEACH["7.3.4"] = { free:false,
  simple:"Pain is not a reading from a damage meter. It is what the brain decides the body needs to be told, and it can be turned up or down by attention, mood, meaning and expectation. That is not a claim that pain is imaginary. It is a claim about how it is produced.",
  teach:[
    "The gate control theory, Melzack and Wall 1965, proposed a gating mechanism in the dorsal horn modulated by descending input from the brain. It ended the idea of pain as simple transmission and is the foundational concept in this field.",
    "Melzack's later neuromatrix theory holds that pain is an output of a distributed brain network, which explains phantom limb pain, in which there is no periphery at all.",
    "Acute and chronic pain are different phenomena, not the same phenomenon at different durations. Chronic pain involves central sensitisation, with amplification within the central nervous system independent of ongoing peripheral input.",
    "Chronic primary pain, in ICD-11, is pain persisting beyond three months with emotional distress or functional disability, not better accounted for by another condition. It is a diagnosis in its own right rather than a symptom.",
    "Fibromyalgia, chronic widespread pain, irritable bowel syndrome and temporomandibular disorder are grouped as central sensitivity syndromes, with overlapping populations.",
    "Depression and chronic pain are bidirectional. Each raises the risk of the other, they share serotonergic and noradrenergic descending modulation, and this is why the same drugs treat both.",
    "Catastrophising, comprising rumination, magnification and helplessness, is the strongest psychological predictor of pain-related disability, stronger than pain intensity itself.",
    "Fear-avoidance model: pain leads to catastrophic interpretation, then to fear of movement or kinesiophobia, then to avoidance, then to deconditioning and disability, which increases pain. It is the model behind graded activity treatment.",
    "Operant factors matter. Solicitous responses from a partner, and rest contingent on pain, reinforce pain behaviour. Fordyce's operant model is the origin of behavioural pain management.",
    "Pharmacology: for neuropathic pain, amitriptyline, duloxetine, gabapentin and pregabalin are first-line under NICE, with tramadol for acute rescue only, and carbamazepine specifically for trigeminal neuralgia.",
    "Duloxetine and amitriptyline act on descending noradrenergic and serotonergic inhibition, which is why noradrenergic action matters and why SSRIs are relatively ineffective in pain.",
    "Gabapentin and pregabalin have significant misuse potential and were reclassified as Class C controlled drugs in the UK in 2019. Their use in non-neuropathic pain is not supported.",
    "Opioids in chronic non-cancer pain have poor evidence for long-term benefit and clear evidence of harm, including tolerance, dependence and opioid-induced hyperalgesia. Reduction is a legitimate clinical goal.",
    "Psychological treatment: CBT for chronic pain, targeting catastrophising, activity pacing and graded exposure to feared movement, with a modest but genuine effect. Acceptance and Commitment Therapy is increasingly used with comparable evidence.",
    "Pain management programmes are multidisciplinary, group-based and function-focused, aiming at improved functioning rather than at pain elimination, which is the crucial expectation to set.",
    "Placebo analgesia is real and mediated by endogenous opioids: it is reversed by naloxone. Expectation is a physiological variable, not an artefact to be subtracted."
  ],
  cards:[
    ["State the gate control theory and its significance.","Melzack and Wall, 1965, proposed a gating mechanism in the dorsal horn of the spinal cord modulated by descending input from the brain, so that pain transmission can be facilitated or inhibited centrally. It replaced the model of pain as simple peripheral transmission."],
    ["What is the fear-avoidance model?","Pain leads to catastrophic interpretation, which produces fear of movement, which produces avoidance, which produces deconditioning and disability, which in turn increases pain. It provides the rationale for graded activity and graded exposure treatment."],
    ["Which drugs are first-line for neuropathic pain, and why do SSRIs underperform?","Amitriptyline, duloxetine, gabapentin and pregabalin. They act through descending noradrenergic and serotonergic inhibition, and because noradrenergic action is required, SSRIs are relatively ineffective in pain."],
    ["What is the strongest psychological predictor of pain-related disability?","Catastrophising, comprising rumination, magnification and helplessness, which predicts disability more strongly than reported pain intensity."],
    ["What is the evidence for opioids in chronic non-cancer pain?","Poor evidence of long-term benefit, with clear evidence of harm including tolerance, dependence and opioid-induced hyperalgesia. Dose reduction is a legitimate clinical goal."]
  ],
  note:[
    "Melzack's neuromatrix theory explains phantom limb pain as a brain output without a periphery.",
    "ICD-11 recognises chronic primary pain as a diagnosis in its own right.",
    "Gabapentin and pregabalin became Class C controlled drugs in the UK in 2019.",
    "Carbamazepine is specifically indicated in trigeminal neuralgia.",
    "Pain management programmes target function rather than pain elimination.",
    "Placebo analgesia is opioid-mediated and reversed by naloxone."
  ],
  refs:["semliaison","nice","maudphys"] };

TEACH["7.3.5"] = { free:false,
  simple:"Grief is not an illness and treating it as one causes harm. But a small proportion of bereaved people get stuck in a way that does not resolve on its own, and telling the difference is the clinical skill.",
  teach:[
    "Normal grief involves yearning, sadness, preoccupation with the deceased, and often transient hallucinatory experiences of the person's voice or presence, which are normal and should not be pathologised.",
    "Guilt in normal grief concerns the circumstances of the death. Pervasive worthlessness and global guilt point towards depression rather than grief.",
    "Stage models, from Kübler-Ross onwards, describe denial, anger, bargaining, depression and acceptance. They were derived from dying patients, not the bereaved, and the empirical evidence does not support fixed sequential stages.",
    "Better-supported models: Worden's four tasks of mourning, being to accept the reality of the loss, to process the pain, to adjust to a world without the deceased, and to find an enduring connection while embarking on a new life.",
    "Stroebe and Schut's dual process model describes oscillation between loss-oriented and restoration-oriented coping. Oscillation, rather than progression, is the adaptive pattern.",
    "Prolonged grief disorder is now a diagnosis in both systems. ICD-11 requires persistent and pervasive longing or preoccupation with the deceased, with intense emotional pain, persisting at least six months after the loss and clearly exceeding cultural norms.",
    "DSM-5-TR added prolonged grief disorder in 2022 with a twelve-month threshold in adults. The differing thresholds between systems are examinable.",
    "The diagnosis was contested precisely because of the risk of medicalising ordinary grief, and the requirement that the reaction exceed the person's own cultural norms is doing important work in the criteria.",
    "Risk factors for prolonged grief: sudden, violent or unexpected death, death of a child, close and dependent relationship, lack of social support, and previous psychiatric history.",
    "Routine grief counselling for all bereaved people does not improve outcome and may worsen it for those who would have recovered without it. This is an important negative finding.",
    "Targeted intervention for those with prolonged grief disorder does work, with grief-focused CBT having the best evidence.",
    "Antidepressants treat comorbid depression in bereavement but do not treat grief itself. DSM-5 removed the bereavement exclusion for major depression, which was and remains controversial.",
    "Care of the dying: the psychiatric questions are depression, delirium, capacity, existential distress, and desire for hastened death.",
    "Depression in terminal illness is not universal and should not be regarded as expected. It is treatable, and untreated it is a major cause of desire for hastened death.",
    "Desire for hastened death correlates more strongly with depression, hopelessness and poorly controlled symptoms than with the physical severity of illness, which is the single most important finding in this literature.",
    "Delirium affects the great majority of patients in the last days of life and is frequently mistaken for pain or for distress.",
    "Anticipatory grief in families and complicated bereavement in survivors are both legitimate targets of support, and the family is part of the unit of care in palliative practice."
  ],
  cards:[
    ["How do ICD-11 and DSM-5-TR differ on prolonged grief disorder?","ICD-11 requires persistent and pervasive longing for or preoccupation with the deceased with intense emotional pain, persisting at least six months and exceeding cultural norms. DSM-5-TR, which added the diagnosis in 2022, uses a twelve-month threshold in adults."],
    ["Describe the dual process model of grief.","Stroebe and Schut's model, in which the bereaved person oscillates between loss-oriented coping, engaging with the grief, and restoration-oriented coping, attending to the practical demands of a changed life. Oscillation rather than linear progression is the adaptive pattern."],
    ["What is the evidence for routine grief counselling?","Routine counselling offered to all bereaved people does not improve outcome and may worsen it for those who would have recovered unaided. Targeted grief-focused CBT for those meeting criteria for prolonged grief disorder is effective."],
    ["What correlates with desire for hastened death in terminal illness?","Depression, hopelessness and poorly controlled physical symptoms correlate far more strongly than the objective severity of the physical illness."],
    ["Name Worden's four tasks of mourning.","To accept the reality of the loss; to process the pain of grief; to adjust to a world without the deceased; and to find an enduring connection with the deceased while embarking on a new life."]
  ],
  note:[
    "Transient hallucinatory experiences of the deceased are normal in grief.",
    "Global worthlessness and pervasive guilt indicate depression rather than grief.",
    "Kübler-Ross stages were derived from dying patients, not the bereaved, and are not empirically supported as sequential.",
    "DSM-5 removed the bereavement exclusion for major depression, which remains contested.",
    "Delirium affects most patients in the last days of life and is often mistaken for pain."
  ],
  refs:["semliaison","icd11","dsm5"] };

TEACH["7.4.1"] = { free:true,
  simple:"You cannot predict who will kill themselves. The research on this is unusually clear and unusually ignored. What you can do is understand why this person is in danger now, and change some part of it.",
  teach:[
    "Suicide is rare at population level, which is why prediction fails. Around 5,000 to 6,000 people die by suicide each year in the UK, roughly three-quarters of them men.",
    "The male to female ratio in completed suicide is around three to one; the ratio is reversed for self-harm and attempted suicide. This is the gender paradox of suicide.",
    "Risk factors: male sex, older age, previous self-harm, mental illness particularly depression, psychosis and substance misuse, physical illness and pain, social isolation, unemployment, bereavement, recent discharge from psychiatric care, and access to means.",
    "Previous self-harm is the strongest single predictor, with risk of subsequent suicide many times the general population rate, and highest in the first year after an episode.",
    "The two weeks after discharge from a psychiatric inpatient bed carry a very high risk, and the first three days are the highest of all. The National Confidential Inquiry has made follow-up within three days a standard.",
    "Risk scales do not work. NICE guidance is explicit that risk assessment tools and scales should not be used to predict suicide or self-harm, or to determine who should receive treatment.",
    "The reason is statistical: with a rare outcome, any scale produces enormous numbers of false positives and still misses many of those who die. Most people who die by suicide are not in the high-risk category.",
    "What replaces scoring is a clinical formulation: why this person, why now, what is driving it, what is protective, what could change it, and what specific plan follows.",
    "NICE NG225, self-harm 2022, requires a psychosocial assessment for everyone presenting with self-harm, regardless of whether they are judged low risk, and prohibits using risk stratification to deny that assessment.",
    "Self-harm is not attempted suicide, but it is not benign either. Motivations include relief of unbearable affect, self-punishment, communication of distress, and dissociation, and the presence of these does not exclude suicidal intent.",
    "Assess intent through the circumstances: planning, precautions against discovery, timing, final acts such as notes or wills, perceived lethality, and the person's reaction to survival.",
    "Perceived lethality matters more than actual lethality. Someone who took eight paracetamol believing it would kill them has high intent.",
    "Protective factors are weak protection when acute risk is high. Children at home, religious belief and future plans reduce risk at population level and cannot be relied on to prevent an act during acute crisis.",
    "Means restriction is the intervention with the best evidence: removing ligature points, restricting paracetamol pack sizes, barriers at jumping sites, and safe storage or removal of medication and firearms.",
    "The safety plan is a collaborative written document naming warning signs, personal coping strategies, people and places that provide distraction, people to contact for help, professionals to contact, and steps taken to make the environment safe.",
    "Interventions with evidence: DBT reduces self-harm in borderline personality disorder; brief contact interventions such as follow-up calls and postcards show promise; and safety planning is associated with reduced subsequent attempts.",
    "Ask directly. Asking about suicide does not increase risk, and this has been examined repeatedly. Vague questioning produces vague answers and misses the plan."
  ],
  cards:[
    ["What does NICE say about suicide risk assessment tools?","That risk assessment tools and scales should not be used to predict future suicide or self-harm, or to determine who should be offered treatment. A psychosocial assessment and clinical formulation replace risk stratification."],
    ["Why does statistical prediction of suicide fail?","Because suicide is a rare outcome. With a low base rate, any instrument generates very large numbers of false positives while still missing many of those who go on to die, and most people who die by suicide are not classified as high risk."],
    ["Which single historical factor most strongly predicts suicide, and when is risk highest?","Previous self-harm, which raises the risk of subsequent suicide many times above the general population rate, with the risk highest in the first year after an episode."],
    ["What are the components of a safety plan?","Recognition of personal warning signs; internal coping strategies; people and social settings that provide distraction; individuals who can be asked for help; professionals and services to contact in crisis; and specific steps taken to make the environment safer by restricting means."],
    ["When is risk highest after psychiatric discharge?","In the first two weeks after discharge, with the first three days carrying the highest risk of all. Follow-up within three days of discharge is a national standard."]
  ],
  note:[
    "Around 5,000 to 6,000 people die by suicide annually in the UK, roughly three-quarters of them men.",
    "The gender paradox: men die more often, women self-harm and attempt more often.",
    "Perceived lethality is more informative than actual lethality.",
    "NICE NG225 requires a psychosocial assessment for everyone presenting with self-harm.",
    "Asking directly about suicide does not increase risk.",
    "Means restriction has the strongest evidence of any suicide prevention intervention."
  ],
  refs:["nice","companion","semgen"] };

TEACH["7.4.2"] = { free:false,
  simple:"Crisis teams exist on one idea: that most people in a mental health emergency get better faster at home, if someone comes to the house every day, than they would on a ward. The evidence for that is reasonable. Whether services deliver it is another matter.",
  teach:[
    "Caplan's crisis theory, 1964, describes crisis as a temporary state of disequilibrium when a person's usual coping fails in the face of a problem they can neither solve nor avoid.",
    "Caplan's phases: initial rise in tension, failure of usual coping with further rise, mobilisation of internal and external resources, and finally either resolution or breakdown into disorganisation.",
    "Crisis is time-limited, classically four to six weeks, and is a period of both heightened vulnerability and heightened openness to change. That combination is the therapeutic opportunity.",
    "Principles of crisis intervention: rapid access, focus on the present problem, active and directive stance, mobilisation of the person's own supports, restoration of previous functioning as the goal, and a defined ending.",
    "Crisis Resolution and Home Treatment teams provide intensive daily contact, medication supervision, practical support, and a gatekeeping function for all admissions.",
    "Gatekeeping is the mechanism that actually reduces admission. Where the team assesses every prospective admission, bed use falls; where it does not, the team becomes an add-on rather than an alternative.",
    "Evidence: crisis teams reduce admissions and improve patient satisfaction. Effects on symptoms are similar to inpatient care, and family burden is not increased, though this last finding depends on the level of support provided to families.",
    "Fidelity matters. Teams delivering the model with high fidelity, including twenty-four hour availability, daily visiting where needed and true gatekeeping, achieve the outcomes; partial implementations do not.",
    "Indications for home treatment rather than admission: adequate social support, an environment that is safe enough, ability to engage with the plan, and risk that can be managed with daily contact.",
    "Indications for admission: risk that cannot be managed at home, absence of any support, need for detention under the Mental Health Act, need for intensive physical monitoring, or the person's own wish for admission where clinically appropriate.",
    "Alternatives beyond the standard pair: crisis houses, which provide short residential stay in a non-hospital setting; safe havens and crisis cafés for out-of-hours support without an assessment threshold; and the Open Dialogue model.",
    "Open Dialogue, developed in Western Lapland, involves immediate response, network meetings including family from the outset, tolerance of uncertainty, and continuity of the same team. Reported outcomes in first-episode psychosis were striking, though the UK randomised trial did not replicate the effect on its primary outcome.",
    "The report of the ODDESSI trial is worth knowing: enthusiasm for a model must survive its randomised test, and this one did not show superiority on the primary outcome.",
    "Serious limitations of home treatment in practice: staffing shortfalls reducing visits to telephone contact, carer burden where families are effectively delivering the care, and the fact that a home is not always a safe place."
  ],
  cards:[
    ["Describe Caplan's phases of crisis.","An initial rise in tension in response to the problem; failure of usual coping with a further rise in tension; mobilisation of internal and external resources; and finally either resolution or breakdown into disorganisation. Crisis is time-limited, classically four to six weeks."],
    ["Which feature of crisis teams actually reduces admissions?","Gatekeeping: the requirement that the crisis team assesses every prospective admission. Where gatekeeping operates, bed use falls; where it does not, the team functions as an addition to services rather than an alternative to admission."],
    ["What is Open Dialogue, and what did the UK trial show?","A model developed in Western Lapland involving immediate response, network meetings including the family from the outset, tolerance of uncertainty and continuity of the same team. The UK ODDESSI randomised trial did not demonstrate superiority on its primary outcome."],
    ["What are the principles of crisis intervention?","Rapid access, focus on the present problem, an active and directive stance, mobilisation of the person's own supports, restoration of previous functioning as the goal, and a clearly defined ending."]
  ],
  note:[
    "Caplan described crisis theory in 1964.",
    "Crisis teams reduce admission and improve satisfaction, with symptom outcomes comparable to inpatient care.",
    "High model fidelity, including 24-hour availability and true gatekeeping, is required for the outcomes.",
    "Crisis houses, safe havens and crisis cafés are non-hospital alternatives.",
    "A home is not always a safe place, and carer burden is a real limitation of home treatment."
  ],
  refs:["nice","companion"] };

TEACH["7.4.3"] = { free:false,
  simple:"In an emergency the first job is not to name the psychiatric diagnosis. It is to rule out the physical causes that will kill the person tonight if you decide this is a mental health problem and stop looking.",
  teach:[
    "The acutely disturbed patient has a differential that runs organic first, always: hypoglycaemia, hypoxia, head injury, intracranial bleed, infection including sepsis and encephalitis, metabolic derangement, thyroid storm, and drug intoxication or withdrawal.",
    "Delirium is the great mimic. It presents as agitation, psychosis, mood change or apparent catatonia, and the discriminating features are acute onset, fluctuation, impaired attention and altered conscious level.",
    "Red flags for an organic cause: age over forty at first presentation, abnormal vital signs, focal neurology, visual hallucinations as the predominant modality, disorientation, and any fluctuation in conscious level.",
    "Visual hallucinations point towards organic causes; purely auditory hallucinations in clear consciousness point towards a primary psychiatric disorder. This is a robust and heavily examined discriminator.",
    "Every acutely disturbed patient needs glucose, oxygen saturation, temperature, pulse, blood pressure and a neurological assessment before any psychiatric formulation is accepted.",
    "Wernicke's encephalopathy must be considered in any confused patient with a history of alcohol misuse, poor nutrition or vomiting, and treated on suspicion with parenteral thiamine.",
    "Anti-NMDA receptor encephalitis presents with a prodrome, then psychiatric symptoms, then seizures, movement disorder and autonomic instability. It is treatable and it is misdiagnosed as a functional psychosis. Consider it in a young person with new psychosis plus any neurological sign.",
    "Neuroleptic malignant syndrome: hyperthermia, rigidity, autonomic instability, altered consciousness and a raised creatine kinase, developing over days after antipsychotic exposure or dose increase.",
    "Serotonin syndrome: onset over hours, with neuromuscular hyperactivity, clonus especially inducible ankle clonus, hyperreflexia, agitation and autonomic instability. Clonus and hyperreflexia distinguish it from the rigidity of NMS.",
    "Anticholinergic toxicity: hot, dry, flushed, dilated pupils, urinary retention, tachycardia and delirium. Mad as a hatter, dry as a bone, red as a beet, hot as a hare, blind as a bat.",
    "Acute dystonia, particularly oculogyric crisis and laryngeal dystonia, is frightening, misread as hysteria, and reversed within minutes by intramuscular procyclidine.",
    "Lithium toxicity: coarse tremor, ataxia, dysarthria, vomiting and diarrhoea, progressing to confusion, seizures and coma. Precipitated by dehydration, NSAIDs, diuretics, ACE inhibitors and intercurrent illness.",
    "Catatonia is under-diagnosed in emergency settings and is a medical emergency in its malignant form, which presents with fever and autonomic instability and can be fatal.",
    "Excited delirium as a term is contested and should be used with great caution, given its association with restraint-related deaths and with racial disparity in its application.",
    "Differentiating functional from organic is not a binary. The correct stance is to treat the organic possibilities while the psychiatric assessment proceeds, not sequentially."
  ],
  cards:[
    ["Which hallucination modality suggests an organic cause?","Visual hallucinations, particularly when predominant, suggest an organic cause. Auditory hallucinations occurring in clear consciousness suggest a primary psychiatric disorder."],
    ["Distinguish neuroleptic malignant syndrome from serotonin syndrome.","NMS develops over days after antipsychotic exposure with lead-pipe rigidity, hyperthermia, autonomic instability, altered consciousness and raised creatine kinase. Serotonin syndrome develops over hours with neuromuscular hyperactivity, clonus particularly inducible ankle clonus, hyperreflexia, agitation and autonomic instability. Clonus and hyperreflexia are the discriminating features."],
    ["When should anti-NMDA receptor encephalitis be considered?","In a young person presenting with new psychiatric symptoms accompanied by any neurological feature such as seizures, movement disorder, autonomic instability or reduced consciousness, often following a viral-type prodrome. It is treatable and is frequently misdiagnosed as a primary psychosis."],
    ["List the red flags for an organic cause of acute disturbance.","First presentation over the age of forty, abnormal vital signs, focal neurological signs, predominantly visual hallucinations, disorientation, and any fluctuation in conscious level."],
    ["Describe the features of anticholinergic toxicity.","Hyperthermia, dry skin and mucous membranes, flushing, dilated pupils, urinary retention, tachycardia and delirium: hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter."]
  ],
  note:[
    "Glucose, oxygen saturation, temperature, pulse, blood pressure and neurological examination precede any psychiatric formulation.",
    "Treat Wernicke's on suspicion with parenteral thiamine.",
    "Acute dystonia is reversed within minutes by intramuscular procyclidine.",
    "Lithium toxicity is precipitated by dehydration, NSAIDs, diuretics and ACE inhibitors.",
    "Malignant catatonia presents with fever and autonomic instability and can be fatal.",
    "Excited delirium is a contested term associated with restraint-related deaths."
  ],
  refs:["oxhandbk","maudsley","semliaison"] };

TEACH["7.4.4"] = { free:false,
  simple:"When someone has to be treated against their will there are two laws and they answer different questions. One asks whether the person can decide. The other does not care whether they can decide, only whether they have a mental disorder and need treating for it.",
  teach:[
    "De-escalation comes first and is not a formality. Space, posture, tone, removing the audience, offering choices, and addressing the actual grievance resolve most incidents without restraint.",
    "Rapid tranquillisation is the use of medication to calm a person quickly where de-escalation has failed and there is risk of harm. NICE NG10 governs it.",
    "First-line rapid tranquillisation under NICE: intramuscular lorazepam alone, or intramuscular haloperidol combined with intramuscular promethazine. Haloperidol is not given intramuscularly without an ECG unless the risk of delay outweighs it.",
    "Flumazenil must be available wherever intramuscular lorazepam is used, for benzodiazepine-induced respiratory depression. Procyclidine must be available where haloperidol is used, for acute dystonia.",
    "Monitoring after rapid tranquillisation: pulse, blood pressure, respiratory rate, temperature, level of consciousness and hydration, every fifteen minutes for the first hour and then at least hourly until the person is ambulatory.",
    "Physical restraint carries genuine risk of death. Prone restraint is specifically discouraged, restraint of the neck or chest that impedes breathing is prohibited, and the death of David Bennett while restrained prone led directly to policy change.",
    "The Mental Capacity Act applies where the person lacks capacity for the decision in question, and permits acts in their best interests, including reasonable restraint, provided it is necessary and proportionate to the risk of harm to the person themselves.",
    "The Mental Capacity Act cannot be used to restrain a person in order to protect others, and cannot authorise treatment for mental disorder that the person is refusing with capacity.",
    "The Mental Health Act applies to treatment for mental disorder and does not require incapacity. A person with full capacity refusing treatment may be detained and treated under it, which is the essential difference from the Mental Capacity Act.",
    "Section 2 is for assessment, lasting up to 28 days, requiring two doctors and an approved mental health professional. Section 3 is for treatment, lasting up to six months and renewable, and requires appropriate treatment to be available.",
    "Section 4 is emergency admission for assessment on one medical recommendation, lasting 72 hours, used only where waiting for a second doctor would cause undesirable delay. It should be uncommon.",
    "Section 5(2) is the doctor's holding power for an inpatient already in hospital, lasting 72 hours. Section 5(4) is the nurse's holding power, lasting six hours, exercisable by a registered mental health or learning disability nurse.",
    "Holding powers apply only to inpatients, not to people in the emergency department, and this is a very common error.",
    "Section 136 permits police to remove a person from a public place to a place of safety; section 135 requires a warrant for private premises. Both were amended by the Policing and Crime Act 2017.",
    "Section 62 permits urgent treatment without the usual second opinion safeguards where treatment is immediately necessary to save life, to prevent a serious deterioration, to alleviate serious suffering, or to prevent the patient behaving violently or being a danger.",
    "Common law and the doctrine of necessity remain available for immediate action to prevent serious harm where neither Act applies at that moment, but they are a bridge to a lawful framework, not a substitute for one.",
    "The Mental Health Act does not apply in prison healthcare, so a prisoner requiring compulsory treatment must be transferred to hospital."
  ],
  cards:[
    ["What is the essential difference between the Mental Health Act and the Mental Capacity Act?","The Mental Capacity Act applies only where the person lacks capacity for the decision in question and permits acts in their best interests, principally to protect the person themselves. The Mental Health Act applies to treatment for mental disorder regardless of capacity, so a person with full capacity who refuses treatment may still be detained and treated."],
    ["State the first-line options for rapid tranquillisation under NICE.","Intramuscular lorazepam alone, or intramuscular haloperidol combined with intramuscular promethazine. Haloperidol should not be given intramuscularly without an ECG unless the risk of delay outweighs it. Flumazenil must be available where lorazepam is used and procyclidine where haloperidol is used."],
    ["Compare sections 5(2) and 5(4).","Section 5(2) is the doctor's holding power for a patient already admitted to hospital, lasting up to 72 hours. Section 5(4) is the nurse's holding power, exercisable by a registered mental health or learning disability nurse, lasting up to six hours. Neither applies to a person in the emergency department, who is not an inpatient."],
    ["What does section 62 permit?","Urgent treatment without the usual second opinion safeguards where treatment is immediately necessary to save life, to prevent a serious deterioration, to alleviate serious suffering, or to prevent the patient behaving violently or being a danger to themselves or others."],
    ["What monitoring is required after rapid tranquillisation?","Pulse, blood pressure, respiratory rate, temperature, level of consciousness and hydration, recorded every fifteen minutes for the first hour and then at least hourly until the person is ambulatory."]
  ],
  note:[
    "Section 2 lasts 28 days for assessment; section 3 lasts six months for treatment and is renewable.",
    "Section 4 is emergency admission on one recommendation for 72 hours and should be uncommon.",
    "Prone restraint is discouraged; the death of David Bennett led directly to policy change.",
    "The Mental Capacity Act cannot be used to restrain a person in order to protect others.",
    "The Mental Health Act does not apply in prison healthcare.",
    "Common law necessity is a bridge to a lawful framework, not a substitute for one."
  ],
  refs:["nice","eastman","maudsley"] };

TEACH["7.6.1"] = { free:false,
  simple:"Sexual problems are extremely common, rarely asked about, and often entirely treatable. A great many of them are caused by the drugs psychiatrists prescribe, and a great many of those go unreported because nobody asks.",
  teach:[
    "The classical human sexual response cycle, from Masters and Johnson, has four phases: excitement, plateau, orgasm and resolution. Kaplan added desire as a preceding phase, giving the triphasic model of desire, excitement and orgasm.",
    "Basson proposed a circular model, particularly for women in long-term relationships, in which responsive desire follows arousal rather than preceding it. This changed how low desire is understood and treated.",
    "ICD-11 classifies sexual dysfunctions in a chapter on conditions related to sexual health, shared with the sexual health specialty rather than sitting only in the mental disorders chapter.",
    "Categories: hypoactive sexual desire dysfunction; sexual arousal dysfunctions, being female sexual arousal dysfunction and male erectile dysfunction; orgasmic dysfunctions, being anorgasmia, male early ejaculation and male delayed ejaculation; and the sexual pain disorders.",
    "Sexual pain-penetration disorder in ICD-11 replaces the older separate categories of vaginismus and dyspareunia, in line with DSM-5's genito-pelvic pain penetration disorder.",
    "Diagnosis requires that the difficulty be persistent or recurrent, be associated with clinically significant distress, and not be better accounted for by another condition, by relationship factors, or by a substance.",
    "Assessment must establish whether the problem is lifelong or acquired, generalised or situational. Situational and acquired difficulties point strongly to psychological or relational factors; lifelong and generalised difficulties raise the likelihood of organic contribution.",
    "The presence of morning erections and of erection with masturbation, in erectile dysfunction, points to a psychogenic rather than an organic cause.",
    "Organic causes are common and must be excluded: diabetes, cardiovascular disease, hyperprolactinaemia, hypogonadism, thyroid disease, neurological disease, pelvic surgery and radiotherapy.",
    "Erectile dysfunction is an early marker of cardiovascular disease and should prompt cardiovascular risk assessment rather than a prescription alone.",
    "Drug causes are the psychiatrist's specific responsibility. SSRIs cause sexual dysfunction in a very large proportion of those taking them, affecting desire, arousal and orgasm.",
    "Antipsychotics cause dysfunction directly and through hyperprolactinaemia. Risperidone, amisulpride and the first-generation drugs raise prolactin most; aripiprazole, quetiapine and olanzapine much less.",
    "Post-SSRI sexual dysfunction, persisting after discontinuation, is now formally recognised by the European Medicines Agency and by the MHRA and should not be dismissed.",
    "Alternatives with lower sexual adverse effect burden include mirtazapine, agomelatine, bupropion where available, vortioxetine and moclobemide.",
    "Psychological treatment: sensate focus, developed by Masters and Johnson, is a graded programme of non-demand touching with a temporary ban on intercourse, removing performance demand.",
    "Specific techniques: the stop-start and squeeze techniques for early ejaculation; graded vaginal trainers with relaxation for penetration difficulty; and directed masturbation programmes for anorgasmia.",
    "Pharmacological treatment: phosphodiesterase-5 inhibitors for erectile dysfunction, which must not be combined with nitrates; topical anaesthetics or an SSRI, including on-demand dapoxetine, for early ejaculation; and testosterone only where hypogonadism is demonstrated.",
    "Ask about it. Sexual adverse effects are a leading cause of covert non-adherence to psychiatric medication and are almost never volunteered."
  ],
  cards:[
    ["Describe Basson's model and why it matters.","A circular model of sexual response, developed particularly for women in long-term relationships, in which sexual desire arises responsively following arousal rather than preceding it. It reframed low spontaneous desire as normal rather than as a dysfunction requiring treatment."],
    ["Which features suggest a psychogenic rather than organic erectile dysfunction?","Preserved morning erections, preserved erection with masturbation or with a different partner, sudden onset, and a situational rather than generalised pattern. Lifelong, generalised and gradually progressive difficulty raises the likelihood of an organic cause."],
    ["Which antipsychotics most raise prolactin?","Risperidone, amisulpride and the first-generation antipsychotics raise prolactin most. Aripiprazole, quetiapine and olanzapine raise it substantially less, and aripiprazole can be used to lower prolactin raised by another agent."],
    ["What is sensate focus?","A graded behavioural programme developed by Masters and Johnson in which couples engage in structured non-demand touching with a temporary prohibition on intercourse, removing performance demand and rebuilding physical intimacy in stages."],
    ["What is post-SSRI sexual dysfunction?","Sexual dysfunction that persists after discontinuation of an SSRI. It is formally recognised by the European Medicines Agency and the MHRA and should not be dismissed as a residual symptom of the original disorder."]
  ],
  note:[
    "Masters and Johnson: excitement, plateau, orgasm, resolution. Kaplan added desire.",
    "ICD-11 places sexual dysfunctions in the conditions related to sexual health chapter.",
    "Sexual pain-penetration disorder replaces separate vaginismus and dyspareunia categories.",
    "Erectile dysfunction is an early marker of cardiovascular disease.",
    "Phosphodiesterase-5 inhibitors must never be combined with nitrates.",
    "Sexual adverse effects are a leading cause of covert non-adherence."
  ],
  refs:["icd11","maudsley","companion"] };

TEACH["7.6.2"] = { free:false,
  simple:"The College syllabus names this section using older terms. The classification has changed substantially since, in a direction that matters clinically: distress about the mismatch is no longer treated as a mental disorder in itself.",
  teach:[
    "Terminology has moved and the exam expects the current position. ICD-10 used gender identity disorders and transsexualism; ICD-11 uses gender incongruence and moved it out of the mental and behavioural disorders chapter entirely.",
    "ICD-11 places gender incongruence in a new chapter on conditions related to sexual health. The stated purpose was to preserve access to care while removing the classification of being transgender as a mental disorder.",
    "DSM-5 uses gender dysphoria, and locates the diagnosis in the distress rather than in the identity itself. A transgender person without distress does not meet criteria.",
    "Gender incongruence in ICD-11 requires a marked and persistent incongruence between experienced gender and assigned sex, of several months' duration. Gender variant behaviour alone is not sufficient.",
    "ICD-11 distinguishes gender incongruence of adolescence or adulthood from gender incongruence of childhood, and specifically states that the childhood diagnosis cannot be made before the onset of puberty.",
    "Transvestism, in the older terminology, referred to cross-dressing. ICD-11 removed dual-role transvestism as a diagnosis entirely. Fetishistic transvestic disorder remains only where there is associated distress or risk to others, under paraphilic disorders.",
    "Cross-dressing in itself is not a disorder in either current system, and this change is examinable.",
    "Epidemiology is uncertain and rising in recorded terms. Referrals to UK gender services increased very substantially over the last decade, with a marked change in the demographic profile, particularly among adolescents assigned female at birth.",
    "The reasons for that change are genuinely contested, with increased social acceptance and help-seeking, diagnostic broadening, and social factors all proposed. Honest teaching states the uncertainty rather than resolving it.",
    "Mental health comorbidity is high in this population: depression, anxiety, self-harm, suicidality, eating disorders and autism are all over-represented, and autism co-occurrence in adolescent referrals is substantial.",
    "The minority stress model attributes much of this comorbidity to discrimination, rejection, concealment and expectation of rejection rather than to gender identity itself, and has good empirical support in other minority populations.",
    "Care pathways in adults: specialist gender identity clinic assessment, social transition, cross-sex hormone therapy, speech and language therapy, and surgery for those who seek it. Waiting times in the UK are very long.",
    "The Cass Review, published in 2024, examined gender identity services for children and young people in England. It concluded that the evidence base underpinning medical intervention in this group was weak, and recommended a fundamentally different service model.",
    "Following the review's interim findings, the routine prescription of puberty blockers outside research was restricted in England, and NHS England commissioned a research protocol. This is contested territory and must be described accurately rather than partisanly.",
    "The general psychiatrist's role is not to gatekeep identity. It is to assess and treat coexisting mental illness properly, to avoid attributing every symptom to gender, and to avoid the opposite error of ignoring the distress that gender-related difficulty causes.",
    "The Gender Recognition Act 2004 provides the legal route to changing legal gender in the UK, and requires a diagnosis of gender dysphoria and two years living in the acquired gender. The Equality Act 2010 protects gender reassignment as a protected characteristic."
  ],
  cards:[
    ["How do ICD-11 and DSM-5 classify gender-related diagnoses?","ICD-11 uses gender incongruence and moved it out of the mental and behavioural disorders chapter into a new chapter on conditions related to sexual health, preserving access to care while removing the mental disorder classification. DSM-5 uses gender dysphoria and locates the diagnosis in the distress rather than in the identity."],
    ["What happened to transvestism in ICD-11?","Dual-role transvestism was removed as a diagnosis entirely. Cross-dressing in itself is not a disorder. Fetishistic transvestic disorder remains under paraphilic disorders only where there is associated distress or risk to others."],
    ["What did the Cass Review conclude?","Published in 2024, it examined gender identity services for children and young people in England and concluded that the evidence base underpinning medical intervention in this group was weak, recommending a fundamentally different model of service. Routine prescription of puberty blockers outside research was subsequently restricted in England."],
    ["What is the minority stress model?","The account attributing raised rates of psychiatric morbidity in minority populations to discrimination, rejection, concealment and the expectation of rejection, rather than to the minority characteristic itself."],
    ["What does the Gender Recognition Act 2004 require?","A diagnosis of gender dysphoria and evidence of having lived in the acquired gender for two years, in order to obtain a Gender Recognition Certificate changing legal gender in the UK."]
  ],
  note:[
    "ICD-11 states that gender incongruence of childhood cannot be diagnosed before the onset of puberty.",
    "Autism co-occurrence in adolescent gender service referrals is substantial.",
    "UK referrals rose substantially over the last decade with a marked demographic shift.",
    "The reasons for that rise are genuinely contested and should be described as such.",
    "The Equality Act 2010 makes gender reassignment a protected characteristic.",
    "The clinical role is to treat coexisting illness properly, neither attributing everything to gender nor ignoring gender-related distress."
  ],
  refs:["icd11","dsm5","nice"] };
