/* =====================================================================
   TEACHING, SECTION 8B — Old Age, the five-aspect grid, part one
   Alzheimer's, vascular dementia, DLB and PDD, frontotemporal, delirium
   25 items, 8.5.1.1 to 8.5.5.5
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------- 8.5.1 ALZHEIMER'S DISEASE ---------- */

TEACH["8.5.1.1"] = { free:true,
  simple:"Alzheimer's is the commonest dementia by a wide margin, and the single biggest risk factor for it is simply being old. After 65 the chance roughly doubles every five years.",
  teach:[
    "Alzheimer's disease accounts for around 60 to 70 per cent of all dementia, and mixed Alzheimer and vascular pathology is commoner still at post mortem than either alone.",
    "Prevalence doubles approximately every five years after 65: around 1 to 2 per cent at 65, around 5 per cent at 75, and 20 to 25 per cent or more above 85.",
    "Around 900,000 people in the UK live with dementia, and projections take this above a million within the next decade on current trends.",
    "Women are affected more than men, largely but not entirely explained by greater female longevity.",
    "Age-specific incidence has fallen in several high-income countries over recent decades, attributed to better cardiovascular health and rising educational attainment, while absolute numbers continue to rise.",
    "Down syndrome carries a very high risk: virtually all develop Alzheimer neuropathology by age forty, with clinical dementia typically emerging in the fifties.",
    "Early-onset Alzheimer's disease, before 65, accounts for a small minority, and autosomal dominant familial cases are a small minority of those."
  ],
  cards:[
    ["What proportion of dementia is Alzheimer's disease, and how does prevalence change with age?","Around 60 to 70 per cent of dementia, with mixed Alzheimer and vascular pathology commoner still at post mortem. Prevalence doubles roughly every five years after 65, from 1 to 2 per cent at 65 to over 20 per cent above 85."],
    ["Why does Down syndrome carry such high Alzheimer risk?","Because the amyloid precursor protein gene lies on chromosome 21 and is present in triple dose. Virtually all people with Down syndrome have Alzheimer neuropathology by age forty, with clinical dementia typically emerging in the fifties."]
  ],
  note:[
    "Around 900,000 people in the UK live with dementia.",
    "Women are affected more than men, largely through greater longevity.",
    "Age-specific incidence has fallen while absolute numbers rise.",
    "Early-onset disease before 65 is a small minority, and familial autosomal dominant cases are a minority of those."
  ],
  refs:["oxoldage","nice"] };

TEACH["8.5.1.2"] = { free:false,
  simple:"Two proteins go wrong. One clumps outside the cells and one tangles inside them. The argument for thirty years has been about which one matters, and the drugs built on the first answer have mostly failed.",
  teach:[
    "Pathology: extracellular amyloid beta plaques and intracellular neurofibrillary tangles of hyperphosphorylated tau, with synaptic loss and neuronal death.",
    "Amyloid beta is cleaved from amyloid precursor protein by beta and gamma secretase in the amyloidogenic pathway; alpha secretase cleavage is non-amyloidogenic.",
    "Braak staging describes tau spread: entorhinal cortex first, then hippocampus and limbic regions, then neocortex. Tau distribution correlates with clinical severity far better than plaque burden does.",
    "That correlation is the central problem for the amyloid hypothesis: plaque load correlates poorly with symptoms, and plaques are found in cognitively normal older people.",
    "The amyloid cascade hypothesis holds that amyloid accumulation is the initiating event driving tau pathology, inflammation and neuronal loss. It is supported by the genetics and undermined by the trial record.",
    "Genetics of early-onset autosomal dominant disease: APP on chromosome 21, presenilin 1 on chromosome 14, and presenilin 2 on chromosome 1. All three increase amyloid beta production, which is the strongest evidence for the amyloid hypothesis.",
    "Presenilin 1 mutations are the commonest cause of autosomal dominant Alzheimer's disease and produce the earliest onset.",
    "Late-onset genetics: APOE on chromosome 19 is the major susceptibility gene. The e4 allele raises risk in a dose-dependent way, roughly threefold for one copy and around twelvefold or more for two, while e2 is protective.",
    "APOE e4 is neither necessary nor sufficient, and genetic testing for it is not recommended clinically.",
    "Neurochemistry: cholinergic deficit from degeneration of the nucleus basalis of Meynert underlies the cholinergic hypothesis and the use of cholinesterase inhibitors. Glutamatergic excitotoxicity underlies memantine.",
    "The cholinergic hypothesis explains the symptomatic benefit of cholinesterase inhibitors but not the disease process, and the drugs do not modify progression.",
    "The Lancet Commission on dementia prevention identifies fourteen modifiable risk factors accounting for around 45 per cent of dementia: less education, hearing loss, high LDL cholesterol, depression, traumatic brain injury, physical inactivity, diabetes, smoking, hypertension, obesity, excess alcohol, social isolation, air pollution and untreated visual loss.",
    "That figure is the most useful single fact in this area: nearly half of dementia is potentially preventable at population level.",
    "Cognitive reserve explains why education and complex occupation delay clinical presentation without altering pathology: greater reserve tolerates more pathology before symptoms appear."
  ],
  cards:[
    ["Describe the pathology and staging of Alzheimer's disease.","Extracellular amyloid beta plaques and intracellular neurofibrillary tangles of hyperphosphorylated tau, with synaptic and neuronal loss. Braak staging describes tau spread from entorhinal cortex to hippocampus and limbic regions and then to neocortex. Tau distribution correlates with clinical severity far better than plaque burden does."],
    ["Name the genes in early-onset and late-onset Alzheimer's disease.","Early-onset autosomal dominant disease: amyloid precursor protein on chromosome 21, presenilin 1 on chromosome 14, and presenilin 2 on chromosome 1, all increasing amyloid beta production. Late-onset susceptibility: APOE on chromosome 19, with e4 raising risk in a dose-dependent manner and e2 protective."],
    ["What proportion of dementia is potentially preventable, and through what?","Around 45 per cent, through fourteen modifiable risk factors identified by the Lancet Commission: less education, hearing loss, high LDL cholesterol, depression, traumatic brain injury, physical inactivity, diabetes, smoking, hypertension, obesity, excess alcohol, social isolation, air pollution and untreated visual loss."],
    ["What is cognitive reserve?","The capacity, built through education, occupational complexity and cognitive activity, to tolerate a greater burden of pathology before clinical symptoms appear. It explains why education delays presentation without altering the underlying disease process."],
    ["What is the principal evidence against the amyloid cascade hypothesis?","Plaque burden correlates poorly with clinical severity, amyloid plaques are found in cognitively normal older people, and tau distribution predicts symptoms far better. The trial record of amyloid-directed treatments has also been largely negative."]
  ],
  note:[
    "Presenilin 1 mutations are the commonest autosomal dominant cause and produce the earliest onset.",
    "APOE e4 is neither necessary nor sufficient and is not recommended for clinical testing.",
    "Cholinergic deficit arises from degeneration of the nucleus basalis of Meynert.",
    "Beta and gamma secretase produce amyloid beta; alpha secretase cleavage is non-amyloidogenic.",
    "Cholinesterase inhibitors are symptomatic and do not modify progression."
  ],
  refs:["lishman","semgen","oxoldage"] };

TEACH["8.5.1.3"] = { free:true,
  simple:"It starts with recent memory. Old memories are intact, sometimes vividly, while what happened this morning is gone. Then language goes, then navigation, then recognition, and the personality is preserved longest.",
  teach:[
    "Onset is insidious and progression gradual over years. A clear date of onset argues against Alzheimer's disease.",
    "The earliest and most prominent deficit is episodic memory, particularly anterograde: difficulty learning and retaining new information, with relative preservation of remote memory early on.",
    "The memory deficit is one of encoding and storage rather than retrieval. Cueing and recognition testing do not rescue performance, which distinguishes it from the retrieval deficit of subcortical and depressive presentations.",
    "That distinction is clinically usable: in Alzheimer's disease the information was never stored, so a prompt does not help.",
    "Progression through the four As: amnesia, aphasia, apraxia and agnosia, appearing broadly in that order.",
    "Language: word-finding difficulty and anomia first, then reduced fluency and comprehension, then eventually echolalia and mutism.",
    "Visuospatial: topographical disorientation, getting lost in familiar places, and constructional apraxia. Getting lost while driving a familiar route is a common presenting complaint.",
    "Insight is usually reduced early, so the person minimises while the family is alarmed. The head-turning sign, in which the person turns to the relative to answer questions, is a useful bedside observation.",
    "Neuropsychiatric symptoms occur in the great majority over the course: apathy is commonest, then depression, anxiety, agitation, irritability, and psychosis in around a third.",
    "Delusions in Alzheimer's disease are typically simple and persecutory, most often of theft, and reflect the memory deficit as much as psychosis.",
    "Misidentification syndromes occur: Capgras, believing a familiar person is an impostor; the phantom boarder, believing strangers live in the house; and failure to recognise one's own reflection.",
    "Apathy is the commonest neuropsychiatric symptom throughout and is the most distressing for families, who frequently interpret it as not trying.",
    "Late stage: incontinence, immobility, dysphagia, primitive reflexes and weight loss. Death is typically from pneumonia.",
    "Atypical presentations exist and are frequently misdiagnosed: posterior cortical atrophy with predominant visuospatial failure, logopenic aphasia with predominant language failure, and a frontal variant.",
    "Posterior cortical atrophy typically presents younger, to ophthalmology, with a person unable to read or judge distance despite normal eyes.",
    "Neuroimaging: medial temporal lobe and hippocampal atrophy on MRI, with temporoparietal hypometabolism on FDG-PET. Imaging supports rather than establishes the diagnosis.",
    "Biomarkers: CSF showing reduced amyloid beta 42 with raised total and phosphorylated tau; amyloid PET; and increasingly plasma phosphorylated tau 217, which performs well and is likely to change practice."
  ],
  cards:[
    ["What is the nature of the memory deficit in Alzheimer's disease?","A deficit of encoding and storage rather than retrieval. Cueing and recognition testing do not improve performance, because the information was never stored, which distinguishes it from the retrieval deficits of subcortical dementia and depression."],
    ["Name the four As of Alzheimer's disease.","Amnesia, aphasia, apraxia and agnosia, appearing broadly in that order as the disease progresses."],
    ["Which neuropsychiatric symptom is commonest, and which delusions are characteristic?","Apathy is the commonest throughout the illness and the most distressing for families, who often misinterpret it as lack of effort. Delusions are typically simple and persecutory, most often of theft, and misidentification syndromes including Capgras and the phantom boarder occur."],
    ["Describe posterior cortical atrophy.","An atypical Alzheimer presentation with predominant visuospatial and visuoperceptual failure, typically presenting at a younger age and often first to ophthalmology, with a person unable to read or judge distance despite normal eyes."],
    ["Which biomarkers support the diagnosis?","CSF showing reduced amyloid beta 42 with raised total and phosphorylated tau; amyloid PET imaging; medial temporal atrophy on MRI with temporoparietal hypometabolism on FDG-PET; and increasingly plasma phosphorylated tau 217, which performs well and is likely to change practice."]
  ],
  note:[
    "A clear date of onset argues against Alzheimer's disease.",
    "The head-turning sign, turning to the relative to answer, is a useful bedside observation.",
    "Psychosis occurs in around a third over the course.",
    "Death is typically from pneumonia in the late stage.",
    "Logopenic aphasia and a frontal variant are further atypical presentations."
  ],
  refs:["lishman","oxoldage","nice"] };

TEACH["8.5.1.4"] = { free:false,
  simple:"There are two old drugs that help a little for a while, and two new ones that clear the plaques and were judged not worth the money or the risk. The most effective interventions in dementia are still not drugs.",
  teach:[
    "Cholinesterase inhibitors: donepezil, rivastigmine and galantamine, recommended by NICE for mild to moderate Alzheimer's disease. They are symptomatic, produce modest improvement in cognition and function, and do not alter progression.",
    "Adverse effects are predominantly cholinergic: nausea, vomiting, diarrhoea, anorexia, bradycardia, syncope and vivid dreams. Bradycardia and syncope matter most, and an ECG is prudent before starting.",
    "Rivastigmine also inhibits butyrylcholinesterase and is available as a patch, which reduces gastrointestinal effects and is useful where adherence is a problem.",
    "Memantine, an NMDA receptor antagonist, is recommended for severe Alzheimer's disease and for moderate disease where cholinesterase inhibitors are not tolerated or contraindicated.",
    "Combination of a cholinesterase inhibitor with memantine is used in moderate to severe disease with modest supporting evidence.",
    "Do not stop cholinesterase inhibitors solely on the basis of disease severity. NICE is explicit on this, and abrupt withdrawal can produce marked deterioration.",
    "Lecanemab and donanemab are anti-amyloid monoclonal antibodies which clear amyloid and slow decline modestly in early Alzheimer's disease. Both were licensed by the MHRA but NICE did not recommend them for NHS use in 2025, on cost-effectiveness grounds.",
    "ARIA, amyloid-related imaging abnormalities, comprising oedema and microhaemorrhage, is the principal safety concern with these agents, is commoner in APOE e4 homozygotes, and requires MRI monitoring.",
    "The honest summary is that the benefit is real but small, the monitoring burden substantial, and the cost effectiveness not established. That is the position to state rather than either enthusiasm or dismissal.",
    "Non-pharmacological interventions come first and have better evidence than most people assume. Cognitive stimulation therapy is NICE-recommended with evidence for cognition and quality of life.",
    "Physical exercise, structured group activity, reminiscence work, music therapy and occupational therapy for activities of daily living all have supporting evidence.",
    "Behavioural and psychological symptoms: assess for physical cause first. Pain, constipation, urinary retention, infection, dehydration and medication account for a large proportion.",
    "Pain is the single most under-recognised cause of agitation in dementia, and a trial of analgesia is an appropriate and evidence-based intervention before any psychotropic.",
    "Antipsychotics in dementia raise the risk of stroke and death. Risperidone alone holds a UK licence, for short-term treatment of persistent aggression in Alzheimer's disease unresponsive to non-pharmacological approaches.",
    "Where an antipsychotic is used: lowest effective dose, defined target symptom, documented review date, and a plan to withdraw. The DART-AD study showed increased mortality with continued antipsychotic use and no deterioration in most on withdrawal.",
    "Antidepressants for depression in dementia have disappointing evidence. The HTA-SADD trial found sertraline and mirtazapine no better than placebo for depression in Alzheimer's disease.",
    "That trial result is important and is frequently ignored in practice. It supports psychosocial intervention first rather than reflexive prescribing.",
    "Carer support is a treatment for the patient as well as the carer, since carer strain predicts institutionalisation. START and similar manualised interventions have good evidence.",
    "Advance care planning should begin early while capacity is retained, covering preferences for treatment, place of care, Lasting Power of Attorney for both health and welfare and property and affairs, and any advance decision to refuse treatment."
  ],
  cards:[
    ["What did the HTA-SADD trial show?","That sertraline and mirtazapine were no better than placebo for depression in Alzheimer's disease, with more adverse events. It supports psychosocial intervention rather than reflexive antidepressant prescribing for depression in dementia."],
    ["What is the position on anti-amyloid antibodies in the UK?","Lecanemab and donanemab clear amyloid and modestly slow decline in early Alzheimer's disease. Both were licensed by the MHRA but NICE did not recommend them for NHS use in 2025 on cost-effectiveness grounds. The principal safety concern is ARIA, amyloid-related imaging abnormalities comprising oedema and microhaemorrhage, commoner in APOE e4 homozygotes and requiring MRI monitoring."],
    ["What should be assessed before prescribing for agitation in dementia?","Physical causes: pain, constipation, urinary retention, infection, dehydration and medication effects. Pain is the single most under-recognised cause, and a trial of analgesia is an appropriate evidence-based intervention before any psychotropic."],
    ["What did DART-AD demonstrate?","Increased mortality associated with continued antipsychotic treatment in Alzheimer's disease, with most patients showing no deterioration on withdrawal. It underpins the requirement for a defined review date and a withdrawal plan whenever an antipsychotic is used."],
    ["Which antipsychotic is licensed in dementia in the UK, and for what?","Risperidone, for short-term treatment of persistent aggression in Alzheimer's disease that has not responded to non-pharmacological approaches and where there is a risk of harm to the person or others."]
  ],
  note:[
    "Cholinesterase inhibitors should not be stopped solely because of disease severity.",
    "Rivastigmine also inhibits butyrylcholinesterase and is available as a patch.",
    "An ECG is prudent before starting a cholinesterase inhibitor because of bradycardia and syncope.",
    "Cognitive stimulation therapy is NICE-recommended with evidence for cognition and quality of life.",
    "Advance care planning should begin while capacity is retained."
  ],
  refs:["nice","maudsley","oxoldage"] };

TEACH["8.5.1.5"] = { free:false,
  simple:"Alzheimer's disease shortens life by several years and the end is usually pneumonia rather than the dementia itself. Recognising it as a terminal illness changes what good care looks like.",
  teach:[
    "Median survival from diagnosis is around seven to ten years, with wide variation. Survival is shorter with later age at diagnosis, male sex, greater severity at diagnosis, and comorbidity.",
    "Rate of decline is variable and cannot be predicted reliably at diagnosis, which is worth saying to families who ask.",
    "Death is most commonly from pneumonia, frequently aspiration pneumonia related to dysphagia in the late stage.",
    "Dementia is a terminal illness, and framing it that way is necessary for appropriate end-of-life care. Recognition of the terminal phase is often too late, resulting in burdensome interventions.",
    "Percutaneous endoscopic gastrostomy feeding in advanced dementia does not prolong survival, does not prevent aspiration pneumonia, and does not improve quality of life. Careful hand feeding is preferred.",
    "That evidence is well established and frequently unknown to referring teams, and stating it clearly is a specific contribution of the psychiatrist.",
    "Hospital admission in advanced dementia carries high risk of delirium, functional decline and death, and should be weighed against the benefit of the intervention proposed.",
    "Institutionalisation: a large proportion enter residential care during the illness, and carer strain predicts this more strongly than the severity of cognitive impairment.",
    "Mild cognitive impairment progresses to dementia at around 10 to 15 per cent per year in clinical samples, considerably lower in community samples, and a proportion revert to normal cognition.",
    "That reversion rate matters when counselling: a diagnosis of mild cognitive impairment is not a diagnosis of early dementia.",
    "Quality of life in dementia correlates more strongly with mood, pain, social engagement and relationship quality than with cognitive severity, which should direct where effort is spent.",
    "Advance decisions and Lasting Power of Attorney made while capacity is retained substantially improve end-of-life care, and the window for making them is early."
  ],
  cards:[
    ["What is the median survival in Alzheimer's disease and the usual cause of death?","Around seven to ten years from diagnosis with wide variation, shorter with later age at diagnosis, male sex, greater severity at diagnosis and comorbidity. Death is most commonly from pneumonia, frequently aspiration pneumonia associated with late-stage dysphagia."],
    ["What is the evidence on PEG feeding in advanced dementia?","It does not prolong survival, does not prevent aspiration pneumonia, and does not improve quality of life. Careful hand feeding is preferred, and stating this clearly is a specific contribution the psychiatrist can make."],
    ["What proportion of mild cognitive impairment progresses to dementia?","Around 10 to 15 per cent per year in clinical samples, considerably lower in community samples, with a proportion reverting to normal cognition. A diagnosis of mild cognitive impairment is therefore not a diagnosis of early dementia."],
    ["What correlates with quality of life in dementia?","Mood, pain, social engagement and relationship quality, more strongly than cognitive severity. This should direct where clinical effort is concentrated."]
  ],
  note:[
    "Rate of decline cannot be reliably predicted at diagnosis.",
    "Dementia is a terminal illness and the terminal phase is often recognised too late.",
    "Hospital admission in advanced dementia carries high risk of delirium and functional decline.",
    "Carer strain predicts institutionalisation more strongly than cognitive severity.",
    "Advance decisions and Lasting Power of Attorney should be made early, while capacity is retained."
  ],
  refs:["oxoldage","nice"] };

/* ---------- 8.5.2 VASCULAR DEMENTIA ---------- */

TEACH["8.5.2.1"] = { free:true,
  simple:"This is the dementia you can do something about before it happens, because the things that damage the heart damage the brain in exactly the same way.",
  teach:[
    "Vascular dementia is the second commonest dementia, accounting for around 15 to 20 per cent of cases as a pure diagnosis.",
    "Mixed Alzheimer and vascular pathology is more common at post mortem than either pure form, and pure vascular dementia is less common than clinical diagnosis suggests.",
    "Prevalence rises with age, though the relative contribution of vascular pathology to dementia is greater in the young-old and in men.",
    "Male predominance is present, in contrast with Alzheimer's disease, reflecting the distribution of cardiovascular risk factors.",
    "Incidence is higher in populations with a high burden of cardiovascular disease, including South Asian and Black populations in the UK, and in areas of higher deprivation.",
    "Around a quarter to a third of stroke survivors have significant cognitive impairment, and stroke roughly doubles the risk of subsequent dementia.",
    "Vascular dementia incidence has fallen in high-income countries alongside improvements in blood pressure control, statin use and smoking reduction, which is the clearest natural experiment in dementia prevention."
  ],
  cards:[
    ["What proportion of dementia is vascular, and what is more common than either pure form?","Around 15 to 20 per cent as a pure diagnosis. Mixed Alzheimer and vascular pathology is more common at post mortem than either pure form alone."],
    ["What evidence supports vascular dementia as preventable?","Its incidence has fallen in high-income countries alongside improvements in blood pressure control, statin use and smoking reduction, which is the clearest natural experiment in dementia prevention."]
  ],
  note:[
    "Male predominance contrasts with Alzheimer's disease.",
    "Stroke roughly doubles the risk of subsequent dementia.",
    "A quarter to a third of stroke survivors have significant cognitive impairment.",
    "Incidence is higher in populations with greater cardiovascular disease burden and in deprived areas."
  ],
  refs:["oxoldage","lishman"] };

TEACH["8.5.2.2"] = { free:false,
  simple:"There are several different diseases hiding under one label. A single stroke in the wrong place, dozens of tiny strokes, or a slow strangling of the small vessels deep in the brain all end up called vascular dementia.",
  teach:[
    "Subtypes: multi-infarct dementia from multiple cortical infarcts; strategic single infarct dementia; small vessel disease with subcortical ischaemic changes; hypoperfusion dementia; and haemorrhagic causes.",
    "Subcortical small vessel disease is the commonest form and the one most often missed, producing gradual rather than stepwise decline and therefore mimicking Alzheimer's disease.",
    "Binswanger's disease is the name given to extensive subcortical white matter ischaemic change with dementia.",
    "Strategic infarcts producing dementia from a single lesion: thalamus, angular gyrus, basal forebrain, and caudate. A small lesion in the right place can produce a large syndrome.",
    "Risk factors are the cardiovascular ones: hypertension, which is the most important, diabetes, hyperlipidaemia, smoking, atrial fibrillation, obesity and physical inactivity.",
    "Midlife hypertension is the single strongest modifiable risk factor for later vascular cognitive impairment, and the association is with blood pressure in the forties and fifties rather than in old age.",
    "Late-life low blood pressure is associated with cognitive decline, which is why aggressive lowering in the very old requires care and why the midlife window matters most.",
    "CADASIL, cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy, is caused by NOTCH3 mutations and presents with migraine with aura, recurrent subcortical strokes, mood disorder and dementia in midlife.",
    "CADASIL is worth knowing because it presents young, has prominent psychiatric features, and is a genetic diagnosis with implications for the family.",
    "Cerebral amyloid angiopathy causes lobar haemorrhage and cognitive impairment, overlaps with Alzheimer pathology, and is relevant to the bleeding risk of anti-amyloid therapy and of anticoagulation.",
    "Mechanism: cumulative loss of tissue, disruption of frontal-subcortical circuits, and white matter disconnection producing the characteristic executive and processing speed deficits.",
    "The frontal-subcortical circuit disruption explains why the cognitive profile is executive rather than amnestic, and why apathy is so prominent."
  ],
  cards:[
    ["Name the subtypes of vascular dementia and identify the commonest.","Multi-infarct dementia from multiple cortical infarcts; strategic single infarct dementia; subcortical small vessel disease; hypoperfusion dementia; and haemorrhagic causes. Subcortical small vessel disease is the commonest and is most often missed, because it produces gradual rather than stepwise decline."],
    ["Which sites produce dementia from a single strategic infarct?","Thalamus, angular gyrus, basal forebrain and caudate. A small lesion in one of these locations can produce a substantial cognitive syndrome."],
    ["What is CADASIL?","Cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy, caused by NOTCH3 mutations, presenting in midlife with migraine with aura, recurrent subcortical strokes, mood disorder and dementia. It has implications for the wider family."],
    ["Which is the strongest modifiable risk factor, and when does it operate?","Hypertension, and specifically midlife hypertension in the forties and fifties rather than blood pressure in old age. Late-life low blood pressure is itself associated with cognitive decline."]
  ],
  note:[
    "Binswanger's disease describes extensive subcortical white matter ischaemic change with dementia.",
    "Cerebral amyloid angiopathy causes lobar haemorrhage and overlaps with Alzheimer pathology.",
    "Frontal-subcortical circuit disruption explains the executive rather than amnestic profile.",
    "Atrial fibrillation is a specific and treatable risk factor."
  ],
  refs:["lishman","oxneuropsy","oxoldage"] };

TEACH["8.5.2.3"] = { free:true,
  simple:"The pattern is different from Alzheimer's. Memory is relatively preserved but everything is slow, planning is impossible, the person is apathetic, and the gait went wrong before the memory did.",
  teach:[
    "Classical description: abrupt onset, stepwise deterioration, fluctuating course, focal neurological signs, and preservation of personality until late. This applies to multi-infarct disease and not to the commoner small vessel form.",
    "Small vessel subcortical disease produces gradual decline, which is why the classical description misleads and why vascular dementia is under-diagnosed.",
    "Cognitive profile: prominent executive dysfunction, reduced processing speed, impaired attention and set-shifting, with memory relatively preserved and responsive to cueing.",
    "The cueing response distinguishes it from Alzheimer's disease: in vascular cognitive impairment the material was encoded but is hard to retrieve, so a prompt helps.",
    "Physical signs: gait disturbance, often early and often preceding cognitive complaint; urinary symptoms; pseudobulbar palsy; focal weakness; extrapyramidal signs; and brisk reflexes with extensor plantars.",
    "Early gait disturbance is one of the most useful discriminating features, and gait change preceding cognitive change points away from Alzheimer's disease.",
    "Neuropsychiatric features: depression is very common and more so than in Alzheimer's disease, apathy is prominent, and emotionalism with pathological crying occurs.",
    "Insight is often better preserved than in Alzheimer's disease, which contributes to the higher rate of depression.",
    "Imaging: infarcts, extensive white matter hyperintensities, lacunes and microbleeds. Fazekas grading describes white matter change severity.",
    "White matter hyperintensities are common in normal ageing, so their presence alone does not establish the diagnosis; the burden and the clinical correlation matter.",
    "Diagnostic criteria: NINDS-AIREN requires dementia, cerebrovascular disease on examination and imaging, and a relationship between the two demonstrated by onset within three months of a stroke or by abrupt or stepwise course.",
    "The Hachinski Ischaemic Score, an older bedside instrument, scores features favouring vascular over degenerative dementia including abrupt onset, stepwise deterioration, fluctuation, nocturnal confusion, preserved personality, depression, somatic complaints, emotional incontinence, hypertension, stroke history, atherosclerosis and focal signs.",
    "Vascular cognitive impairment is the preferred current umbrella term, covering the whole spectrum from mild impairment to dementia, and reflecting that the vascular contribution is usually part of a mixed picture."
  ],
  cards:[
    ["Contrast the cognitive profile of vascular and Alzheimer dementia.","Vascular cognitive impairment produces prominent executive dysfunction, reduced processing speed and impaired attention, with relatively preserved memory that improves with cueing because the material was encoded but is hard to retrieve. Alzheimer's disease produces an encoding and storage deficit in which cueing does not help."],
    ["Which physical sign most usefully discriminates vascular dementia?","Early gait disturbance, often preceding cognitive complaint. Gait change before memory change points away from Alzheimer's disease. Urinary symptoms, pseudobulbar palsy and focal neurological signs also support the diagnosis."],
    ["What are the NINDS-AIREN criteria?","Dementia, plus cerebrovascular disease demonstrated on examination and imaging, plus a demonstrated relationship between the two, shown by onset within three months of a recognised stroke or by an abrupt or stepwise deteriorating course."],
    ["What is the Hachinski Ischaemic Score?","An older bedside instrument scoring clinical features favouring vascular over degenerative dementia, including abrupt onset, stepwise deterioration, fluctuating course, nocturnal confusion, relative preservation of personality, depression, somatic complaints, emotional incontinence, hypertension, history of stroke and focal neurological signs."]
  ],
  note:[
    "The classical abrupt stepwise picture applies to multi-infarct disease, not to the commoner small vessel form.",
    "Depression is commoner than in Alzheimer's disease, partly because insight is better preserved.",
    "Fazekas grading describes white matter hyperintensity severity.",
    "White matter change is common in normal ageing and does not alone establish the diagnosis.",
    "Vascular cognitive impairment is the preferred umbrella term."
  ],
  refs:["lishman","oxoldage","nice"] };

TEACH["8.5.2.4"] = { free:false,
  simple:"There is no drug for vascular dementia. What there is instead is the whole of cardiovascular medicine, applied properly, which is more useful than any dementia drug currently available.",
  teach:[
    "Cholinesterase inhibitors and memantine are not recommended by NICE for pure vascular dementia. They are used only where there is suspected comorbid Alzheimer's disease, dementia with Lewy bodies or Parkinson's disease dementia.",
    "That restriction is frequently ignored, and prescribing a cholinesterase inhibitor for pure vascular dementia is not supported by guidance.",
    "Secondary prevention is the treatment: blood pressure control, statin therapy, antiplatelet or anticoagulation where indicated, glycaemic control, smoking cessation, and physical activity.",
    "Atrial fibrillation is a specific target. Anticoagulation reduces stroke and is under-prescribed in older people, often through unjustified concern about falls.",
    "The falls-versus-anticoagulation calculation is well established: a person would need to fall an implausible number of times per year for the risk of subdural haematoma to outweigh the stroke reduction.",
    "Blood pressure control in midlife has the greatest preventive effect. In the very old, aggressive lowering requires caution because of cerebral hypoperfusion and falls.",
    "The SPRINT MIND trial found that intensive blood pressure lowering reduced mild cognitive impairment, with a non-significant reduction in probable dementia, which is the best trial evidence available for prevention.",
    "Depression is common and treatable, and should be treated actively rather than accepted as understandable.",
    "Emotionalism responds well and rapidly to low-dose antidepressants and should be distinguished from depression.",
    "Cognitive rehabilitation and occupational therapy targeting specific functional goals are more useful than generic cognitive exercises.",
    "Multidisciplinary stroke rehabilitation improves function, and cognitive impairment should not be a reason to exclude someone from it.",
    "Behavioural and psychological symptoms are managed as in other dementias, with physical causes excluded first and non-pharmacological approaches used before medication.",
    "Antipsychotic risk is if anything higher in vascular dementia, given the underlying cerebrovascular disease, which makes the threshold for use higher still."
  ],
  cards:[
    ["What does NICE say about cholinesterase inhibitors in vascular dementia?","They are not recommended for pure vascular dementia, and should be used only where comorbid Alzheimer's disease, dementia with Lewy bodies or Parkinson's disease dementia is suspected."],
    ["What is the treatment of vascular dementia?","Vascular secondary prevention: blood pressure control, statin therapy, antiplatelet or anticoagulation where indicated, glycaemic control, smoking cessation and physical activity, alongside treatment of depression and functional rehabilitation."],
    ["What did SPRINT MIND show?","That intensive blood pressure lowering reduced the incidence of mild cognitive impairment, with a non-significant reduction in probable dementia. It is the best available trial evidence for blood pressure control as dementia prevention."],
    ["Why is anticoagulation for atrial fibrillation under-prescribed in older people?","Because of unjustified concern about falls. The calculation is well established: a person would need to fall an implausible number of times per year for the risk of subdural haematoma to outweigh the reduction in stroke risk."]
  ],
  note:[
    "Antipsychotic risk is if anything higher in vascular dementia given the underlying cerebrovascular disease.",
    "Emotionalism responds rapidly to low-dose antidepressants and is distinct from depression.",
    "Cognitive impairment is not a reason to exclude someone from stroke rehabilitation.",
    "Aggressive blood pressure lowering in the very old requires caution because of hypoperfusion and falls."
  ],
  refs:["nice","oxoldage","maudsley"] };

TEACH["8.5.2.5"] = { free:false,
  simple:"Survival is shorter than in Alzheimer's disease, because the same vessels that damaged the brain also supply the heart. People die of the underlying disease as much as of the dementia.",
  teach:[
    "Median survival is shorter than in Alzheimer's disease, commonly cited as around three to five years from diagnosis, reflecting cardiovascular comorbidity.",
    "Death is frequently from myocardial infarction or further stroke rather than from the complications of dementia itself.",
    "Course is variable. Multi-infarct disease progresses in steps with plateaus between; small vessel disease progresses more gradually and continuously.",
    "Plateaus between steps are clinically important. A person may be stable for a long period, which is worth telling families rather than describing inexorable decline.",
    "Effective vascular secondary prevention can slow or halt progression, which is not true of any other dementia, and is the practical argument for treating risk factors aggressively.",
    "Poor prognostic factors: greater burden of white matter disease, recurrent stroke, uncontrolled hypertension, diabetes, atrial fibrillation and comorbid Alzheimer pathology.",
    "Depression is common, persistent and associated with worse functional outcome and higher mortality independent of stroke severity.",
    "Falls and fractures are more common than in other dementias because of gait disturbance, and contribute substantially to loss of independence.",
    "Institutionalisation occurs earlier than in Alzheimer's disease in some studies, driven by physical dependency rather than by cognitive severity.",
    "Post-stroke cognitive impairment may improve over the first months, so early assessment can overestimate long-term impairment, and diagnosis of dementia should not be made too soon after a stroke."
  ],
  cards:[
    ["How does survival in vascular dementia compare with Alzheimer's disease, and why?","It is shorter, commonly cited as around three to five years from diagnosis, because of cardiovascular comorbidity. Death is frequently from myocardial infarction or further stroke rather than from complications of the dementia itself."],
    ["What is unique about the prognosis of vascular dementia?","Effective vascular secondary prevention can slow or halt progression, which is not true of any other dementia. This is the practical argument for aggressive risk factor treatment."],
    ["Why should dementia not be diagnosed too soon after a stroke?","Because post-stroke cognitive impairment may improve substantially over the first months, so early assessment overestimates long-term impairment."]
  ],
  note:[
    "Multi-infarct disease progresses in steps with plateaus; small vessel disease progresses gradually.",
    "Plateaus should be described to families rather than inexorable decline.",
    "Falls and fractures are commoner than in other dementias because of gait disturbance.",
    "Depression is persistent and associated with worse functional outcome and higher mortality."
  ],
  refs:["oxoldage","lishman"] };

/* ---------- 8.5.3 DLB AND PDD ---------- */

TEACH["8.5.3.1"] = { free:true,
  simple:"This is the dementia that is most often missed and where getting it wrong is most dangerous, because giving the wrong drug can kill the person.",
  teach:[
    "Dementia with Lewy bodies accounts for around 5 to 15 per cent of dementia in clinical series and around 15 to 20 per cent at post mortem, so it is substantially under-diagnosed in life.",
    "It is probably the second or third commonest neurodegenerative dementia, and the discrepancy between clinical and pathological rates is one of the largest in the field.",
    "Parkinson's disease dementia develops in the majority of people with Parkinson's disease of long duration, with cumulative incidence exceeding 75 per cent at twenty years.",
    "Together, the Lewy body dementias account for a substantial share of dementia and a disproportionate share of the clinical difficulty.",
    "Male predominance is present in dementia with Lewy bodies, in contrast with Alzheimer's disease.",
    "Mean age of onset is broadly similar to Alzheimer's disease, in the mid-seventies, though presentation is often later relative to symptom onset because of diagnostic delay.",
    "REM sleep behaviour disorder in an older person carries a very high risk of subsequent Lewy body disease, with conversion in the majority over sufficient follow-up.",
    "Under-diagnosis matters clinically because of neuroleptic sensitivity, which makes the missed diagnosis actively dangerous rather than merely inaccurate."
  ],
  cards:[
    ["How common is dementia with Lewy bodies and why does under-diagnosis matter?","Around 5 to 15 per cent of dementia in clinical series but 15 to 20 per cent at post mortem, indicating substantial under-diagnosis in life. It matters because of severe neuroleptic sensitivity, which makes the missed diagnosis dangerous rather than merely inaccurate."],
    ["What proportion of people with Parkinson's disease develop dementia?","The majority with long disease duration, with cumulative incidence exceeding 75 per cent at twenty years."]
  ],
  note:[
    "Male predominance contrasts with Alzheimer's disease.",
    "REM sleep behaviour disorder in an older person carries very high risk of subsequent Lewy body disease.",
    "The gap between clinical and pathological diagnosis rates is among the largest in dementia.",
    "Mean age of onset is in the mid-seventies."
  ],
  refs:["oxoldage","lishman"] };

TEACH["8.5.3.2"] = { free:false,
  simple:"The same abnormal protein clumps in the same way in both conditions. The only thing that separates them is which symptom came first, which is a genuinely arbitrary distinction that everyone acknowledges and nobody has replaced.",
  teach:[
    "Both are alpha-synucleinopathies. Lewy bodies are intracytoplasmic inclusions composed principally of aggregated alpha-synuclein, with ubiquitin.",
    "Distribution determines the syndrome: brainstem-predominant Lewy bodies produce Parkinson's disease; cortical and limbic distribution produces dementia.",
    "Multiple system atrophy is the third alpha-synucleinopathy, with glial rather than neuronal inclusions.",
    "The one-year rule separates dementia with Lewy bodies from Parkinson's disease dementia on the basis of the interval between motor and cognitive onset. It is arbitrary, is acknowledged as arbitrary, and persists for research comparability.",
    "Pathologically the two are not distinguishable, and many authorities regard them as a single disease presenting at different points.",
    "Cholinergic deficit is more severe in dementia with Lewy bodies than in Alzheimer's disease, which explains the greater response to cholinesterase inhibitors.",
    "Dopaminergic deficit from nigrostriatal degeneration produces the parkinsonism and underlies the reduced dopamine transporter uptake seen on DaTscan.",
    "Neuroleptic sensitivity arises from combined dopaminergic depletion and D2 receptor blockade, producing severe extrapyramidal reactions, autonomic instability and marked deterioration.",
    "Concomitant Alzheimer pathology is present in a large proportion of dementia with Lewy bodies cases and predicts faster decline and a less typical clinical picture.",
    "Genetics: GBA mutations, which cause Gaucher disease in the homozygous state, are the strongest genetic risk factor for Lewy body disease, and SNCA and LRRK2 variants also contribute.",
    "GBA carriers have earlier onset and faster cognitive decline, which is clinically relevant and increasingly tested for in research settings.",
    "Prodromal disease is now recognised: REM sleep behaviour disorder, hyposmia, constipation, orthostatic hypotension and depression may precede the dementia by a decade or more.",
    "Braak's staging hypothesis for Parkinson's disease proposes ascending spread from the olfactory bulb and dorsal motor nucleus of the vagus, which fits the prodromal autonomic and olfactory symptoms."
  ],
  cards:[
    ["What is the pathological basis of the Lewy body dementias?","Aggregation of alpha-synuclein into Lewy bodies, intracytoplasmic inclusions also containing ubiquitin. Brainstem-predominant distribution produces Parkinson's disease; cortical and limbic distribution produces dementia. Multiple system atrophy is the third alpha-synucleinopathy, with glial rather than neuronal inclusions."],
    ["Why does neuroleptic sensitivity occur?","Because dopaminergic neurons are already depleted by nigrostriatal degeneration, so D2 receptor blockade by an antipsychotic produces severe extrapyramidal reactions, autonomic instability, marked cognitive deterioration and, in some cases, death."],
    ["Which genetic variant is the strongest risk factor for Lewy body disease?","GBA mutations, which in the homozygous state cause Gaucher disease. Carriers have earlier onset and faster cognitive decline. SNCA and LRRK2 variants also contribute."],
    ["What are the recognised prodromal features?","REM sleep behaviour disorder, hyposmia, constipation, orthostatic hypotension and depression, which may precede dementia by a decade or more. Braak's ascending spread hypothesis from the olfactory bulb and dorsal motor nucleus of the vagus fits this pattern."]
  ],
  note:[
    "The one-year rule is acknowledged as arbitrary and persists for research comparability.",
    "The two conditions are not distinguishable pathologically.",
    "Cholinergic deficit is more severe than in Alzheimer's disease, explaining the greater treatment response.",
    "Concomitant Alzheimer pathology predicts faster decline and a less typical picture."
  ],
  refs:["lishman","oxneuropsy","semgen"] };

TEACH["8.5.3.3"] = { free:true,
  simple:"Look for four things: attention that comes and goes over hours, detailed visual hallucinations of people or animals, stiffness and slowness, and acting out dreams. Three of the four and the diagnosis is close to certain.",
  teach:[
    "The 2017 consensus criteria specify four core clinical features: fluctuating cognition with pronounced variation in attention and alertness; recurrent well-formed and detailed visual hallucinations; REM sleep behaviour disorder, which may precede cognitive decline; and one or more spontaneous cardinal features of parkinsonism.",
    "Two core features, or one core feature plus one indicative biomarker, gives probable dementia with Lewy bodies.",
    "Indicative biomarkers: reduced dopamine transporter uptake on SPECT or PET, which is the DaTscan; abnormal MIBG myocardial scintigraphy; and polysomnographic confirmation of REM sleep without atonia.",
    "Fluctuation is the most difficult feature to elicit and the most useful. It occurs over minutes to hours, not over days, with episodes of staring, unresponsiveness and disorganised speech resembling delirium.",
    "Ask the carer specifically: are there times when he seems switched off, or stares into space, and are those times different from other times on the same day.",
    "Visual hallucinations are typically well formed, detailed and recurrent, most often of people, children or animals, and are often not frightening. Insight into them is variable.",
    "Parkinsonism in dementia with Lewy bodies is typically symmetrical, with less tremor and more axial rigidity and postural instability than idiopathic Parkinson's disease.",
    "Cognitive profile: attention, executive function and visuospatial impairment dominate, with memory relatively preserved early. This differs sharply from Alzheimer's disease.",
    "Visuospatial impairment is prominent and early. The pentagon copy and clock drawing are affected disproportionately.",
    "Supportive features: severe neuroleptic sensitivity; repeated falls and syncope; transient unexplained loss of consciousness; autonomic dysfunction with orthostatic hypotension, constipation and urinary incontinence; hypersomnia; hyposmia; depression; and systematised delusions.",
    "Autonomic dysfunction is often prominent and under-recognised, and orthostatic hypotension contributes substantially to falls.",
    "Parkinson's disease dementia presents with the same cognitive and neuropsychiatric profile, differing only in the order of onset.",
    "Delirium is frequently the presenting event, and delirium that fails to resolve in an older person should raise suspicion of underlying Lewy body disease.",
    "Imaging: relative preservation of medial temporal lobe structures on MRI, in contrast with Alzheimer's disease, and occipital hypometabolism on FDG-PET with the cingulate island sign."
  ],
  cards:[
    ["Name the four core clinical features in the 2017 consensus criteria.","Fluctuating cognition with pronounced variation in attention and alertness; recurrent well-formed and detailed visual hallucinations; REM sleep behaviour disorder, which may precede cognitive decline; and one or more spontaneous cardinal features of parkinsonism."],
    ["What are the indicative biomarkers?","Reduced dopamine transporter uptake in the basal ganglia on SPECT or PET, the DaTscan; abnormal MIBG myocardial scintigraphy; and polysomnographic confirmation of REM sleep without atonia."],
    ["How should fluctuation be elicited?","By asking the carer directly whether there are periods when the person seems switched off or stares into space, and whether those periods differ from other times on the same day. Fluctuation occurs over minutes to hours rather than days and resembles delirium."],
    ["Contrast the cognitive profile with Alzheimer's disease.","Dementia with Lewy bodies produces early and prominent impairment of attention, executive function and visuospatial ability, with memory relatively preserved. Alzheimer's disease produces early and prominent episodic memory impairment. Pentagon copying and clock drawing are disproportionately affected in Lewy body disease."],
    ["Which imaging features support the diagnosis?","Relative preservation of medial temporal lobe structures on MRI, in contrast with Alzheimer's disease, and occipital hypometabolism on FDG-PET with the cingulate island sign of preserved posterior cingulate metabolism."]
  ],
  note:[
    "Two core features, or one core feature with an indicative biomarker, gives probable DLB.",
    "Parkinsonism is typically symmetrical with less tremor and more axial rigidity.",
    "Visual hallucinations are typically of people, children or animals and are often not frightening.",
    "Autonomic dysfunction with orthostatic hypotension contributes substantially to falls.",
    "Delirium that fails to resolve should raise suspicion of underlying Lewy body disease."
  ],
  refs:["lishman","oxoldage","nice"] };

TEACH["8.5.3.4"] = { free:false,
  simple:"The single most important instruction in this whole section is: do not give an antipsychotic. If you must, use quetiapine or clozapine at a tiny dose, and expect trouble anyway.",
  teach:[
    "Severe neuroleptic sensitivity occurs in a substantial proportion, up to half, and may be irreversible or fatal. It comprises marked rigidity, autonomic instability, sudden cognitive deterioration and reduced consciousness.",
    "Avoid all antipsychotics where possible. Where absolutely necessary, quetiapine or clozapine at very low dose are least likely to worsen the motor state, and even these carry risk.",
    "Never use typical antipsychotics or risperidone in suspected Lewy body disease. This is one of the few near-absolute prohibitions in psychiatry.",
    "Cholinesterase inhibitors are the treatment of choice. Rivastigmine and donepezil improve cognition, reduce visual hallucinations and reduce apathy, with a larger effect than in Alzheimer's disease.",
    "NICE recommends donepezil or rivastigmine for mild to moderate dementia with Lewy bodies, and galantamine if those are not tolerated. Memantine is an option in moderate to severe disease.",
    "The response to cholinesterase inhibitors is often striking, and a trial is warranted before any consideration of antipsychotic treatment for hallucinations.",
    "Parkinsonism: levodopa may be used cautiously, at the lowest effective dose, accepting that it may worsen hallucinations. Dopamine agonists, anticholinergics and amantadine are best avoided because of neuropsychiatric effects.",
    "The therapeutic dilemma is intrinsic: treating the motor symptoms worsens the psychiatric ones and vice versa, so treatment is a negotiated compromise led by which symptom troubles the person most.",
    "REM sleep behaviour disorder: melatonin is first-line, with low-dose clonazepam as an alternative, alongside making the sleep environment safe.",
    "Orthostatic hypotension: review antihypertensives, increase fluid and salt where safe, use compression stockings, and consider fludrocortisone or midodrine.",
    "Depression is common and treated with an SSRI, avoiding tricyclics because of anticholinergic burden and orthostatic hypotension.",
    "Constipation and urinary symptoms should be managed actively, avoiding oxybutynin and other anticholinergics, which worsen cognition.",
    "Falls prevention is a core part of management given the combination of parkinsonism, orthostatic hypotension, syncope and fluctuating attention.",
    "Delirium risk is high and antipsychotics used for hospital delirium are a common route to harm, so the diagnosis must be communicated clearly to any admitting team and recorded prominently.",
    "Carer education is essential: explaining fluctuation prevents the assumption that the person is choosing not to try, and explaining hallucinations prevents alarm."
  ],
  cards:[
    ["What is the treatment of choice in dementia with Lewy bodies?","Cholinesterase inhibitors, specifically donepezil or rivastigmine, which improve cognition, reduce visual hallucinations and reduce apathy with a larger effect than in Alzheimer's disease. A trial is warranted before any consideration of antipsychotic treatment."],
    ["Describe neuroleptic sensitivity and its management implications.","A severe reaction occurring in up to half of patients, comprising marked rigidity, autonomic instability, sudden cognitive deterioration and reduced consciousness, which may be irreversible or fatal. Typical antipsychotics and risperidone must be avoided; if an antipsychotic is unavoidable, quetiapine or clozapine at very low dose carry least risk."],
    ["How is REM sleep behaviour disorder managed?","Melatonin first-line, with low-dose clonazepam as an alternative, alongside practical measures to make the sleep environment safe for the patient and bed partner."],
    ["What is the intrinsic therapeutic dilemma in Lewy body disease?","Dopaminergic treatment of the motor symptoms worsens hallucinations and psychosis, while dopamine blockade for psychosis worsens the motor state and risks neuroleptic sensitivity. Treatment is a negotiated compromise directed by which symptom troubles the person most."]
  ],
  note:[
    "Dopamine agonists, anticholinergics and amantadine are best avoided in this group.",
    "Avoid oxybutynin and other anticholinergics for urinary symptoms.",
    "Orthostatic hypotension is managed with medication review, fluid and salt, stockings, and fludrocortisone or midodrine.",
    "The diagnosis must be recorded prominently to protect the person during any hospital admission.",
    "Explaining fluctuation to carers prevents the assumption that the person is choosing not to try."
  ],
  refs:["nice","maudsley","oxoldage"] };

TEACH["8.5.3.5"] = { free:false,
  simple:"Decline is faster than in Alzheimer's disease and the burden on families is heavier, because on top of the memory problems there are falls, hallucinations, and a person who is present one hour and absent the next.",
  teach:[
    "Median survival from diagnosis is shorter than in Alzheimer's disease, commonly cited around five to seven years, with some series reporting shorter.",
    "Cognitive decline is faster than in Alzheimer's disease, and functional decline faster still because of the motor and autonomic components.",
    "Carer burden is higher than in Alzheimer's disease at equivalent cognitive severity, driven by hallucinations, fluctuation, falls and sleep disturbance.",
    "Institutionalisation occurs earlier, again driven by physical dependency, falls and neuropsychiatric symptoms rather than by cognition alone.",
    "Falls, syncope and fractures are major contributors to morbidity and to loss of independence.",
    "Hospital admission is particularly hazardous: high risk of delirium, of inappropriate antipsychotic prescription, and of rapid functional decline.",
    "Poor prognostic factors: prominent parkinsonism, severe autonomic dysfunction, marked fluctuation, concomitant Alzheimer pathology, and GBA mutation carriage.",
    "Response to cholinesterase inhibitors is associated with better outcome, and the response is often more marked than in Alzheimer's disease.",
    "Depression and apathy persist and contribute substantially to reduced quality of life, more so than cognitive severity.",
    "Advance care planning is particularly important because fluctuation means capacity varies within a single day, and decisions should be revisited at a time when the person is at their best.",
    "Recording the diagnosis prominently, with an explicit warning about antipsychotics, is one of the most protective interventions available and should be done at diagnosis."
  ],
  cards:[
    ["How does prognosis compare with Alzheimer's disease?","Median survival is shorter, commonly cited around five to seven years, with faster cognitive decline and faster functional decline still because of the motor and autonomic components. Carer burden is higher at equivalent cognitive severity and institutionalisation occurs earlier."],
    ["Why is hospital admission particularly hazardous in Lewy body disease?","Because of high risk of delirium, the likelihood of inappropriate antipsychotic prescription by teams unaware of the diagnosis, and rapid functional decline. Recording the diagnosis prominently with an explicit antipsychotic warning is protective."],
    ["What is significant about capacity assessment in this condition?","Fluctuating cognition means capacity may vary within a single day, so assessment should be undertaken when the person is at their best and decisions should be revisited rather than settled once."]
  ],
  note:[
    "Falls, syncope and fractures are major contributors to loss of independence.",
    "GBA mutation carriage predicts faster decline.",
    "Response to cholinesterase inhibitors is associated with better outcome.",
    "Depression and apathy reduce quality of life more than cognitive severity does."
  ],
  refs:["oxoldage","lishman"] };

/* ---------- 8.5.4 FRONTOTEMPORAL DEMENTIA ---------- */

TEACH["8.5.4.1"] = { free:true,
  simple:"This is the dementia of people who are too young to have dementia. It starts in the fifties, memory is often fine, and the family has usually been told for years that it is a midlife crisis or depression.",
  teach:[
    "Frontotemporal dementia is the second commonest cause of dementia in people under 65, after Alzheimer's disease, and accounts for a substantial proportion of young-onset dementia.",
    "Overall prevalence is low, of the order of 15 to 20 per 100,000 in the 45 to 65 age group, but it is over-represented in specialist young-onset services.",
    "Mean age of onset is in the late fifties, though the range extends from the twenties to the eighties.",
    "The sex ratio is approximately equal, with some evidence of male predominance in the behavioural variant.",
    "Around 40 per cent have a family history, and around 10 to 20 per cent have an autosomal dominant pattern, which is far higher than in Alzheimer's disease.",
    "Diagnostic delay is long, commonly several years, because the presentation is behavioural and is attributed to psychiatric illness, relationship problems or personality.",
    "Frontotemporal dementia is a leading cause of misdiagnosis in psychiatry, with people receiving diagnoses of depression, bipolar disorder, personality disorder or midlife crisis before the correct diagnosis is made."
  ],
  cards:[
    ["How common is frontotemporal dementia and in whom?","It is the second commonest cause of dementia under the age of 65 after Alzheimer's disease, with prevalence of the order of 15 to 20 per 100,000 in the 45 to 65 age group. Mean age of onset is in the late fifties."],
    ["What proportion is familial?","Around 40 per cent have a family history and 10 to 20 per cent show an autosomal dominant pattern, far higher than in Alzheimer's disease."]
  ],
  note:[
    "Diagnostic delay commonly runs to several years.",
    "It is a leading cause of psychiatric misdiagnosis, being labelled depression, bipolar disorder or personality disorder.",
    "The sex ratio is approximately equal with possible male predominance in the behavioural variant.",
    "The age range extends from the twenties to the eighties."
  ],
  refs:["lishman","oxneuropsy"] };

TEACH["8.5.4.2"] = { free:false,
  simple:"Three proteins account for nearly all of it, and one gene mutation is shared with motor neurone disease, which is why the two diseases turn up in the same families.",
  teach:[
    "Frontotemporal lobar degeneration is the pathological term; frontotemporal dementia is the clinical syndrome. The relationship between the two is not one to one.",
    "Three principal molecular pathologies: FTLD-tau in around 40 per cent, FTLD-TDP with TDP-43 inclusions in around 50 per cent, and FTLD-FUS in a small minority.",
    "Pick's disease is a specific tau pathology with argyrophilic Pick bodies, and the term should be reserved for that pathology rather than used for the clinical syndrome.",
    "Genetics: three genes account for most autosomal dominant cases. MAPT on chromosome 17, encoding tau; GRN, also on chromosome 17, encoding progranulin; and C9orf72 on chromosome 9.",
    "C9orf72 hexanucleotide repeat expansion is the commonest single genetic cause and is shared with amyotrophic lateral sclerosis, which explains the co-occurrence of frontotemporal dementia and motor neurone disease in families and in individuals.",
    "C9orf72 cases more often have psychotic features, which contributes to psychiatric misdiagnosis, and may present with delusions and hallucinations before the dementia is apparent.",
    "MAPT mutations produce tau pathology with earlier onset and more prominent behavioural features. GRN mutations produce TDP-43 pathology, often asymmetrical, with later onset and more variable presentation.",
    "Around 10 to 15 per cent of people with frontotemporal dementia develop motor neurone disease, and a similar proportion of people with motor neurone disease develop frontotemporal dementia.",
    "The FTD-MND overlap carries a substantially worse prognosis, with survival often under three years.",
    "Pathology is asymmetrical and focal in distribution, affecting frontal and anterior temporal lobes with relative posterior preservation, which is visible on imaging and is the basis of the syndromic distinctions.",
    "Overlap syndromes with corticobasal degeneration and progressive supranuclear palsy exist and share tau pathology, forming a spectrum rather than discrete diseases.",
    "There is no association with APOE e4, and vascular risk factors are not implicated, distinguishing the aetiology sharply from Alzheimer's and vascular dementia."
  ],
  cards:[
    ["Name the three principal molecular pathologies of frontotemporal lobar degeneration.","FTLD-tau in around 40 per cent, FTLD-TDP with TDP-43 inclusions in around 50 per cent, and FTLD-FUS in a small minority. Pick's disease refers specifically to a tau pathology with argyrophilic Pick bodies."],
    ["Name the three principal genes and their significance.","MAPT on chromosome 17 encoding tau, producing earlier onset with prominent behavioural features; GRN on chromosome 17 encoding progranulin, producing TDP-43 pathology often asymmetrical with later onset; and C9orf72 on chromosome 9, the commonest single genetic cause, shared with amyotrophic lateral sclerosis."],
    ["What is the FTD-MND overlap?","Around 10 to 15 per cent of people with frontotemporal dementia develop motor neurone disease and a similar proportion of people with motor neurone disease develop frontotemporal dementia, largely explained by shared C9orf72 pathology. The overlap carries a substantially worse prognosis, with survival often under three years."],
    ["Why do C9orf72 cases contribute to psychiatric misdiagnosis?","Because they more often present with psychotic features including delusions and hallucinations, which may precede any apparent cognitive decline and lead to a diagnosis of a primary psychotic or affective disorder."]
  ],
  note:[
    "Frontotemporal lobar degeneration is the pathology; frontotemporal dementia is the clinical syndrome.",
    "Pathology is asymmetrical and focal, affecting frontal and anterior temporal lobes with posterior preservation.",
    "Corticobasal degeneration and progressive supranuclear palsy share tau pathology on the same spectrum.",
    "There is no APOE e4 association and vascular risk factors are not implicated."
  ],
  refs:["semgen","lishman","oxneuropsy"] };

TEACH["8.5.4.3"] = { free:true,
  simple:"The person changes rather than forgets. They become rude, or indifferent, or eat sweets constantly, or do the same thing at the same time every day, and they cannot see that anything has changed.",
  teach:[
    "Three main clinical syndromes: behavioural variant frontotemporal dementia, semantic variant primary progressive aphasia, and non-fluent agrammatic variant primary progressive aphasia.",
    "Behavioural variant accounts for around half of cases and is the presentation most likely to reach psychiatry.",
    "The Rascovsky criteria require three of six features: early behavioural disinhibition; early apathy or inertia; early loss of sympathy or empathy; early perseverative, stereotyped or compulsive behaviour; hyperorality and dietary change; and a neuropsychological profile of executive deficits with relative sparing of memory and visuospatial function.",
    "Loss of empathy is often the earliest and most distressing change for families, described as the person becoming cold or no longer caring.",
    "Disinhibition takes the form of tactless remarks, socially inappropriate behaviour, impulsive spending, sexual disinhibition, shoplifting and criminal behaviour. New offending in middle age warrants consideration of this diagnosis.",
    "Hyperorality and dietary change: a marked preference for sweet foods is characteristic, with overeating, altered food preference, and sometimes consumption of inedible objects.",
    "Stereotyped and ritualistic behaviour: fixed daily routines, repetitive phrases, hoarding, and compulsions that resemble OCD but lack the anxiety and the ego-dystonic quality.",
    "Insight is absent from early on, which is a discriminating feature and explains why the person is brought by others and denies any problem.",
    "Memory and visuospatial function are relatively preserved early, so a normal MMSE is common and is a frequent cause of false reassurance.",
    "Standard bedside cognitive tests are insensitive. Frontal assessment requires verbal fluency, Luria three-step, go no-go, cognitive estimates and tests of social cognition.",
    "The Frontal Assessment Battery and the Cambridge Behavioural Inventory are useful, and informant-based behavioural measures are more sensitive than patient-performed cognitive tests.",
    "Semantic variant: fluent speech with loss of word meaning, anomia, impaired single word comprehension, surface dyslexia, and loss of object knowledge, with predominantly left anterior temporal atrophy.",
    "Non-fluent agrammatic variant: effortful halting speech, agrammatism, apraxia of speech, with preserved single word comprehension, and left posterior frontoinsular atrophy.",
    "Right temporal variant presents with prosopagnosia, loss of person knowledge, and prominent behavioural change including rigidity and loss of empathy.",
    "Imaging: frontal and anterior temporal atrophy on MRI, often markedly asymmetrical, with corresponding hypometabolism on FDG-PET. Imaging is more informative here than in most dementias.",
    "The phenocopy syndrome describes people, typically men, with behavioural features but no progression and no imaging change over years. Its nature is disputed and it is a genuine diagnostic trap."
  ],
  cards:[
    ["State the Rascovsky criteria for behavioural variant frontotemporal dementia.","Three of six features: early behavioural disinhibition; early apathy or inertia; early loss of sympathy or empathy; early perseverative, stereotyped or compulsive behaviour; hyperorality and dietary change; and a neuropsychological profile of executive deficits with relative sparing of memory and visuospatial function."],
    ["Why is a normal MMSE common in frontotemporal dementia?","Because memory and visuospatial function are relatively preserved early while the deficits are behavioural and executive. Standard bedside tests are insensitive, and frontal assessment with verbal fluency, Luria three-step, go no-go, cognitive estimates and social cognition tasks is required, alongside informant-based behavioural measures."],
    ["Distinguish the two aphasic variants.","Semantic variant produces fluent speech with loss of word meaning, anomia, impaired single word comprehension, surface dyslexia and loss of object knowledge, with left anterior temporal atrophy. Non-fluent agrammatic variant produces effortful halting speech, agrammatism and apraxia of speech with preserved single word comprehension, and left posterior frontoinsular atrophy."],
    ["What is the phenocopy syndrome?","A presentation, typically in men, with the behavioural features of frontotemporal dementia but no progression and no imaging change over years of follow-up. Its nature is disputed and it constitutes a genuine diagnostic trap."],
    ["Which behavioural change is often earliest and most distressing to families?","Loss of empathy and sympathy, described as the person becoming cold, indifferent or no longer caring about others, frequently preceding any cognitive complaint."]
  ],
  note:[
    "Insight is absent from early on, which is a discriminating feature.",
    "A marked preference for sweet foods is characteristic of hyperorality.",
    "New offending in middle age warrants consideration of this diagnosis.",
    "Right temporal variant presents with prosopagnosia and loss of person knowledge.",
    "Imaging is more informative in this dementia than in most others."
  ],
  refs:["lishman","oxneuropsy","oyebode"] };

TEACH["8.5.4.4"] = { free:false,
  simple:"There is no treatment for the disease. What there is instead is management of behaviour that is genuinely dangerous, and support for a family watching someone become a stranger while still physically well.",
  teach:[
    "No disease-modifying treatment exists. Cholinesterase inhibitors are not recommended and may worsen behaviour, since there is no cholinergic deficit in this disease.",
    "Prescribing a cholinesterase inhibitor in frontotemporal dementia is a common error arising from the assumption that dementia drugs treat all dementia.",
    "Memantine is not effective and is not recommended.",
    "SSRIs have the best evidence for behavioural symptoms, particularly disinhibition, compulsions, overeating and stereotyped behaviour, with trazodone, sertraline, citalopram and paroxetine all having some support.",
    "The serotonergic rationale is that serotonergic deficit is demonstrable in this disease, unlike cholinergic deficit.",
    "Antipsychotics are used with great caution. Extrapyramidal sensitivity is high, particularly in cases with parkinsonian overlap, and the same mortality concerns apply as in other dementias.",
    "Non-pharmacological management is the mainstay: structured routine, environmental modification, removal of triggers, redirection rather than confrontation, and use of the person's own perseverative routines constructively.",
    "Working with rather than against stereotyped routines is effective. A fixed routine can be redirected to a harmless or useful activity more easily than it can be stopped.",
    "Financial protection is urgent and often the most important early intervention: disinhibited spending, susceptibility to scams and impulsive financial decisions can destroy family finances before diagnosis.",
    "Establish Lasting Power of Attorney for property and affairs early, and consider whether capacity is already lost, which it frequently is by the time of presentation.",
    "Driving must be addressed early. Impaired judgement, disinhibition and loss of insight make this group dangerous drivers, and they will not accept the assessment.",
    "Legal issues arise from disinhibited behaviour: shoplifting, sexual disinhibition and public order offences. A psychiatric report explaining the diagnosis is frequently required.",
    "Carer support is central and the burden is exceptional: carers are younger, often still working, often have dependent children, and face a person who is physically well but behaviourally transformed.",
    "Young-onset dementia services exist precisely because the needs differ: employment, mortgages, children, and services designed for people forty years older.",
    "Genetic counselling should be offered where there is a family history or young onset, since a mutation has implications for children.",
    "Speech and language therapy in the aphasic variants provides communication strategies and, later, augmentative communication."
  ],
  cards:[
    ["Why are cholinesterase inhibitors not used in frontotemporal dementia?","Because there is no cholinergic deficit in this disease. They are not recommended, are ineffective, and may worsen behaviour. Prescribing them is a common error arising from the assumption that dementia drugs treat all dementias."],
    ["Which medications have evidence for behavioural symptoms?","SSRIs, with trazodone, sertraline, citalopram and paroxetine having support for disinhibition, compulsions, overeating and stereotyped behaviour. The rationale is a demonstrable serotonergic deficit in this disease."],
    ["What is the most urgent early practical intervention?","Financial protection. Disinhibited spending, susceptibility to scams and impulsive financial decisions can destroy family finances before the diagnosis is made. Lasting Power of Attorney for property and affairs should be established early, though capacity is frequently already lost at presentation."],
    ["How should stereotyped routines be managed?","By working with them rather than against them. A fixed routine can be redirected towards a harmless or useful activity far more easily than it can be interrupted or stopped, and confrontation reliably escalates the behaviour."]
  ],
  note:[
    "Antipsychotics carry high extrapyramidal sensitivity, particularly with parkinsonian overlap.",
    "Driving must be addressed early; impaired judgement and absent insight make this group dangerous drivers.",
    "Disinhibited behaviour frequently produces legal problems requiring a psychiatric report.",
    "Young-onset dementia services exist because employment, mortgages and dependent children change the needs.",
    "Genetic counselling should be offered where there is family history or young onset."
  ],
  refs:["nice","maudsley","oxneuropsy"] };

TEACH["8.5.4.5"] = { free:false,
  simple:"It is faster than Alzheimer's disease and the people affected are younger, so more years of life are lost. The family carries the burden for longer while still working and raising children.",
  teach:[
    "Median survival is around six to eight years from symptom onset, and around three to four years from diagnosis given the typical diagnostic delay.",
    "Survival is shorter than in Alzheimer's disease, and the FTD-MND overlap has the worst prognosis of all, often under three years.",
    "Semantic variant has the longest survival of the syndromes; behavioural variant and the FTD-MND overlap the shortest.",
    "Death is usually from pneumonia, or from respiratory failure where motor neurone disease coexists.",
    "The disease progresses to involve all cognitive domains eventually, so the initially focal syndrome becomes a global dementia.",
    "Years of life lost are greater than in Alzheimer's disease because of the younger age at onset, which is the argument for the disproportionate research and service attention the condition receives.",
    "Carer burden is exceptionally high, exceeding that in Alzheimer's disease, driven by behavioural symptoms, the person's physical fitness, absent insight, and the carer's competing responsibilities.",
    "Carers of people with behavioural variant frontotemporal dementia report higher rates of depression and burden than carers in any other dementia.",
    "Institutionalisation is often earlier and is frequently driven by behaviour rather than by dependency, and placements break down more often.",
    "Finding a care setting is genuinely difficult: the person is physically fit, behaviourally disturbed, and too young for most homes.",
    "Poor prognostic factors: motor neurone disease features, earlier onset, behavioural variant, and greater executive impairment at diagnosis.",
    "Genetic status matters for the family rather than for the individual's prognosis, and predictive testing should be offered with proper counselling."
  ],
  cards:[
    ["What is the survival in frontotemporal dementia?","Around six to eight years from symptom onset and three to four years from diagnosis, given the typical diagnostic delay. Survival is shorter than in Alzheimer's disease, and the frontotemporal dementia with motor neurone disease overlap has the worst prognosis, often under three years."],
    ["Why is carer burden exceptionally high in this condition?","Because behavioural symptoms are prominent, the person remains physically fit, insight is absent, and carers are typically younger, still working and often raising dependent children. Carers of people with behavioural variant frontotemporal dementia report higher depression and burden than carers in any other dementia."],
    ["Which syndrome has the longest survival?","Semantic variant primary progressive aphasia. Behavioural variant and the frontotemporal dementia with motor neurone disease overlap have the shortest."]
  ],
  note:[
    "Death is usually from pneumonia, or respiratory failure where motor neurone disease coexists.",
    "The initially focal syndrome becomes a global dementia as the disease progresses.",
    "Years of life lost exceed those in Alzheimer's disease because of younger onset.",
    "Placements break down more often and are harder to find for a physically fit younger person.",
    "Predictive genetic testing should be offered with proper counselling where a mutation is identified."
  ],
  refs:["oxneuropsy","lishman","oxoldage"] };

/* ---------- 8.5.5 DELIRIUM ---------- */

TEACH["8.5.5.1"] = { free:true,
  simple:"Delirium is the commonest complication of being old and in hospital, and it is missed more often than it is found. Two out of three cases go unrecognised, mostly the quiet ones.",
  teach:[
    "Prevalence on admission is around 15 to 20 per cent in older medical inpatients, and incidence during admission adds a similar proportion again.",
    "Prevalence is around 50 per cent after hip fracture, up to 50 per cent after cardiac surgery, and over 70 per cent in ventilated intensive care patients.",
    "In nursing homes prevalence is around 15 per cent, and in the palliative care setting delirium affects the great majority in the last days of life.",
    "Around two-thirds of cases are not recognised, and the hypoactive form accounts for most of the missed cases.",
    "Hypoactive delirium is the commonest subtype in older people, is quiet and therefore unnoticed, and carries the worst prognosis.",
    "Risk factors divide into predisposing, being characteristics of the person, and precipitating, being the acute insults. The relationship is inverse: a very vulnerable person needs only a small insult.",
    "Predisposing: age over 65, existing cognitive impairment or dementia, frailty, sensory impairment, multiple comorbidities, polypharmacy, previous delirium, and depression.",
    "Dementia is the single strongest predisposing factor, raising risk around fivefold, and delirium superimposed on dementia is the commonest presentation in older inpatients.",
    "Precipitating: infection, surgery, dehydration, electrolyte disturbance, hypoxia, pain, constipation, urinary retention, medication and drug withdrawal, and change of environment.",
    "Delirium is a marker of vulnerability as much as of the acute insult, which is why it predicts poor outcome so strongly."
  ],
  cards:[
    ["Give the prevalence of delirium across settings.","Around 15 to 20 per cent on admission in older medical inpatients with a similar incidence during admission; around 50 per cent after hip fracture and after cardiac surgery; over 70 per cent in ventilated intensive care patients; around 15 per cent in nursing homes; and the great majority of patients in the last days of life."],
    ["What proportion of delirium is missed, and which subtype accounts for it?","Around two-thirds of cases go unrecognised, with the hypoactive subtype accounting for most of the missed cases. Hypoactive delirium is the commonest form in older people and carries the worst prognosis."],
    ["Describe the relationship between predisposing and precipitating factors.","It is inverse. A person with high predisposing vulnerability, such as advanced dementia and frailty, requires only a minor precipitant such as constipation, whereas a robust younger person requires a major insult. Delirium is therefore a marker of vulnerability as much as of the acute illness."]
  ],
  note:[
    "Dementia is the single strongest predisposing factor, raising risk around fivefold.",
    "Delirium superimposed on dementia is the commonest presentation in older inpatients.",
    "Precipitants include infection, surgery, dehydration, hypoxia, pain, constipation, retention and medication.",
    "Sensory impairment, polypharmacy and previous delirium are important predisposing factors."
  ],
  refs:["nice","oxoldage","semliaison"] };

TEACH["8.5.5.2"] = { free:false,
  simple:"Nobody fully knows what delirium is at the level of the brain. The best current account is that inflammation from somewhere else in the body reaches an already vulnerable brain and the networks that sustain attention fall apart.",
  teach:[
    "No single mechanism accounts for delirium. Several converging pathways are proposed and probably all contribute.",
    "The neuroinflammatory hypothesis is the leading account: systemic inflammation from infection, surgery or injury produces cytokine signalling to the brain, microglial activation and neuronal dysfunction.",
    "Primed microglia in an ageing or already damaged brain respond excessively to a peripheral inflammatory signal, which explains why dementia predisposes so strongly.",
    "Neurotransmitter accounts: cholinergic deficiency is the best supported, given that anticholinergic drugs cause delirium and cholinesterase inhibition was expected to help.",
    "The cholinergic hypothesis is undermined by the failure of cholinesterase inhibitors in trials. The MIND-USA and related studies found no benefit, and rivastigmine increased mortality in the van Eijk ICU trial, which was stopped early.",
    "That trial result matters: it is a case where a plausible mechanism produced a harmful intervention, and cholinesterase inhibitors should not be used to treat delirium.",
    "Dopaminergic excess is proposed and underlies the use of antipsychotics, alongside evidence that dopaminergic drugs precipitate delirium.",
    "Other implicated systems: glutamate, GABA, serotonin and melatonin, with circadian disruption a consistent finding.",
    "Oxidative stress and impaired oxidative metabolism, the neuronal ageing hypothesis, propose that reduced cerebral oxidative metabolism produces the failure of attention.",
    "Network disconnection: functional imaging shows breakdown of connectivity in the default mode network and in the networks subserving attention, which fits the clinical picture better than any single transmitter account.",
    "Stress and HPA axis: raised cortisol contributes, and glucocorticoids precipitate delirium, particularly in the vulnerable.",
    "Common precipitating medications: anticholinergics, opioids, benzodiazepines, corticosteroids, dopaminergic drugs, antiepileptics and antibiotics, particularly quinolones.",
    "Withdrawal states are a specific and reversible cause: alcohol, benzodiazepines and, increasingly, gabapentinoids.",
    "The practical implication of the mechanistic uncertainty is that treatment remains removal of the cause and support of the brain, not correction of a transmitter."
  ],
  cards:[
    ["What is the leading mechanistic account of delirium?","The neuroinflammatory hypothesis: systemic inflammation from infection, surgery or injury generates cytokine signalling to the brain and microglial activation, producing neuronal dysfunction. Primed microglia in an ageing or already damaged brain respond excessively, which explains why dementia is such a strong predisposing factor."],
    ["What happened when the cholinergic hypothesis was tested therapeutically?","Cholinesterase inhibitors failed in trials of delirium treatment, and rivastigmine increased mortality in the van Eijk intensive care trial, which was stopped early. They should not be used to treat delirium."],
    ["Which medications commonly precipitate delirium?","Anticholinergics, opioids, benzodiazepines, corticosteroids, dopaminergic drugs, antiepileptics and some antibiotics, particularly quinolones. Withdrawal from alcohol, benzodiazepines and gabapentinoids is a specific reversible cause."]
  ],
  note:[
    "Functional imaging shows breakdown of default mode and attentional network connectivity.",
    "Raised cortisol contributes, and glucocorticoids precipitate delirium in the vulnerable.",
    "Circadian disruption is a consistent finding.",
    "Mechanistic uncertainty means treatment remains removal of the cause rather than transmitter correction."
  ],
  refs:["semliaison","lishman","nice"] };

TEACH["8.5.5.3"] = { free:true,
  simple:"The person cannot hold their attention on anything, it started this week, and it is worse in the evening than it was this morning. Those three things are the diagnosis.",
  teach:[
    "The four defining elements: acute onset over hours to days; fluctuating course; disturbance of attention and awareness; and additional disturbance in cognition, all in the context of a physiological cause.",
    "Inattention is the core feature and must be tested directly. Months of the year backwards, serial sevens, digit span, or simply whether the person can sustain a conversation.",
    "Fluctuation over the course of a day is the most characteristic feature and is best established from nursing observation and from family, since a single assessment may catch a lucid period.",
    "A person who appears entirely normal at eleven in the morning may be floridly delirious at eight in the evening, which is why single assessments mislead.",
    "Three motor subtypes: hyperactive with agitation, restlessness and hypervigilance; hypoactive with lethargy, reduced activity and withdrawal; and mixed.",
    "Hypoactive delirium is commonest in older people, is most often missed, is frequently mistaken for depression or for dementia progression, and has the worst prognosis.",
    "Additional features: disorganised thinking with rambling or incoherent speech; perceptual disturbance, typically visual illusions and hallucinations; fleeting poorly systematised persecutory delusions; disorientation; emotional lability; and disturbed sleep-wake cycle with nocturnal worsening.",
    "Sleep-wake cycle reversal is characteristic and precedes the frank delirium in many cases.",
    "Assessment tools: the 4AT is brief, requires no training and is recommended for routine use, scoring alertness, AMT4 orientation, attention by months backwards, and acute change or fluctuation.",
    "The Confusion Assessment Method, CAM, requires acute onset with fluctuation and inattention, plus either disorganised thinking or altered level of consciousness. CAM-ICU is the intensive care version.",
    "Differentiating delirium from dementia: onset over hours to days rather than months to years; fluctuation within a day; impaired attention and consciousness; and a reversible physiological cause.",
    "Differentiating delirium from depression: hypoactive delirium mimics depression closely, and attention testing plus the acute time course separates them.",
    "Delirium superimposed on dementia is the hardest and commonest problem. The key is change from the person's own baseline, which requires collateral history.",
    "Investigation: full examination and observations, blood glucose, full blood count, urea and electrolytes, calcium, liver function, C-reactive protein, urinalysis and culture, chest radiograph, ECG, and imaging or lumbar puncture where indicated.",
    "Urine dipstick alone must not be used to diagnose urinary tract infection in older people, since asymptomatic bacteriuria is very common and treating it causes harm without benefit."
  ],
  cards:[
    ["State the four defining elements of delirium.","Acute onset over hours to days; a fluctuating course; disturbance of attention and awareness; and an additional disturbance in cognition, occurring in the context of an underlying physiological cause."],
    ["What is the 4AT?","A brief delirium assessment requiring no special training, recommended for routine use, scoring alertness, AMT4 orientation questions, attention tested by reciting the months backwards, and evidence of acute change or fluctuating course."],
    ["How is delirium distinguished from dementia?","By onset over hours to days rather than months to years, fluctuation within a single day, impaired attention and altered level of consciousness, and the presence of a reversible physiological cause. Where delirium is superimposed on dementia, the key is change from the person's own recent baseline, which requires collateral history."],
    ["Why must urine dipstick not be used alone to diagnose urinary tract infection in older people?","Because asymptomatic bacteriuria is very common in this population, so a positive dipstick does not indicate infection. Treating it exposes the person to antibiotic harm without benefit and diverts attention from the true precipitant of the delirium."],
    ["Which subtype is commonest in older people and why does it matter?","Hypoactive delirium, characterised by lethargy, reduced activity and withdrawal. It is the most frequently missed, is commonly mistaken for depression or dementia progression, and carries the worst prognosis."]
  ],
  note:[
    "Sleep-wake cycle reversal is characteristic and often precedes frank delirium.",
    "A single assessment may catch a lucid interval, so nursing and family observation are essential.",
    "CAM requires acute onset with fluctuation and inattention plus disorganised thinking or altered consciousness.",
    "Perceptual disturbance is typically visual; delusions are fleeting and poorly systematised.",
    "Investigation includes glucose, electrolytes, calcium, inflammatory markers, culture, imaging and ECG."
  ],
  refs:["nice","oyebode","oxoldage"] };

TEACH["8.5.5.4"] = { free:false,
  simple:"Almost everything that works in delirium is not a drug. Get the glasses on, get the lights right, get the person up and walking, find the infection, stop the anticholinergic, and let them sleep at night.",
  teach:[
    "Treat the cause, and expect there to be more than one. Delirium in an older person is usually multifactorial, so finding one precipitant does not end the search.",
    "Medication review is mandatory. Stop or reduce anticholinergics, opioids where possible, benzodiazepines, and any recently started drug.",
    "Non-pharmacological management is first-line and effective: reorientation, clocks and calendars, familiar objects and people, glasses and hearing aids, adequate daytime lighting with darkness at night, early mobilisation, hydration and nutrition, and avoidance of ward moves and catheters.",
    "The HELP programme, a multicomponent non-pharmacological intervention, reduces incident delirium by around a third. No drug achieves anything comparable.",
    "Prevention is far more effective than treatment, and the same measures used to prevent delirium are used to manage it.",
    "NICE CG103: consider short-term haloperidol at the lowest effective dose only where the person is distressed or a risk to themselves or others and verbal and non-verbal de-escalation is ineffective, and review at least every 24 hours.",
    "Antipsychotics do not shorten delirium, do not improve outcome and may prolong it. They treat distress rather than the delirium itself, and this distinction must be understood.",
    "The MIND-USA trial found no benefit for haloperidol or ziprasidone on delirium duration in critically ill patients, which is the strongest evidence available.",
    "Avoid haloperidol in Parkinson's disease and in dementia with Lewy bodies. Use quetiapine or clozapine at very low dose if a drug is unavoidable.",
    "Benzodiazepines worsen delirium and should be avoided except in alcohol or benzodiazepine withdrawal, where they are the specific treatment.",
    "Melatonin and ramelteon have been studied for prevention with mixed results and are not established.",
    "Sleep: protect it non-pharmacologically. Reduce night-time noise and light, avoid overnight observations and drug rounds where safe, and open curtains during the day.",
    "Pain must be treated. Untreated pain is a common cause of agitation in delirium, and undertreating pain for fear of opioids frequently makes the delirium worse rather than better.",
    "Restraint should be avoided. It escalates distress, increases injury and prolongs delirium; enhanced observation and one-to-one nursing are preferable.",
    "Explain to the family. Delirium is frightening to witness, and telling relatives what it is, that it fluctuates, that the person is not going mad and that it usually improves, is part of the treatment.",
    "Involve the family in care. Familiar people reorientate more effectively than any staff member and their presence reduces distress.",
    "Follow up after resolution. Delirium requires cognitive reassessment several weeks later, since persistent impairment and undiagnosed dementia are common."
  ],
  cards:[
    ["What is the most effective intervention in delirium?","Multicomponent non-pharmacological prevention and management: reorientation, familiar objects and people, glasses and hearing aids, day-night lighting, early mobilisation, hydration, sleep protection and avoidance of ward moves and catheters. The HELP programme reduces incident delirium by around a third, which no drug approaches."],
    ["What did the MIND-USA trial show?","That neither haloperidol nor ziprasidone reduced the duration of delirium in critically ill patients, providing the strongest available evidence that antipsychotics do not treat delirium itself but only the distress associated with it."],
    ["When are antipsychotics appropriate in delirium?","Only where the person is distressed or poses a risk to themselves or others and verbal and non-verbal de-escalation has been ineffective. Short-term low-dose haloperidol is used with review at least every 24 hours, avoided entirely in Parkinson's disease and dementia with Lewy bodies."],
    ["Why must pain be treated actively in delirium?","Because untreated pain is a common cause of agitation, and withholding analgesia for fear of opioid-induced delirium frequently worsens rather than improves the delirium."],
    ["What follow-up is required after delirium resolves?","Cognitive reassessment several weeks later, because persistent cognitive impairment is common and previously undiagnosed dementia is frequently revealed."]
  ],
  note:[
    "Delirium in older people is usually multifactorial, so one precipitant does not end the search.",
    "Benzodiazepines worsen delirium except in alcohol or benzodiazepine withdrawal.",
    "Restraint escalates distress, increases injury and prolongs delirium.",
    "Melatonin for prevention has mixed evidence and is not established.",
    "Family presence reorientates more effectively than staff and reduces distress."
  ],
  refs:["nice","maudsley","oxoldage"] };

TEACH["8.5.5.5"] = { free:false,
  simple:"Delirium was treated for decades as a temporary nuisance. It is not. People who have had it die sooner, lose their independence, and are more likely to develop dementia, and the longer it lasts the worse all of that gets.",
  teach:[
    "In-hospital mortality is substantially raised, and the excess persists for months after discharge, after adjustment for age, illness severity, comorbidity and pre-existing cognitive impairment.",
    "Delirium is an independent predictor of mortality rather than simply a marker of severe illness, which is the crucial epidemiological point.",
    "Length of stay is prolonged, and hospital-acquired complications including falls, pressure ulcers and infection are more common.",
    "Institutionalisation: a substantial proportion of older people who develop delirium in hospital do not return to their previous accommodation.",
    "New dementia: delirium independently predicts subsequent dementia, with risk raised severalfold, and accelerates the decline in those who already have dementia.",
    "The relationship is dose-dependent. Longer and more severe delirium produces greater subsequent cognitive decline, which is the argument for treating it as urgently as any other organ failure.",
    "Persistent delirium is common and under-recognised. A substantial proportion remain delirious at discharge and a smaller but significant proportion months later.",
    "The assumption that delirium resolves completely on treating the cause is not supported by follow-up data.",
    "Distress is substantial and lasting. Many patients recall the experience, describing fear, paranoia and helplessness, and a proportion develop PTSD.",
    "Post-intensive care PTSD is specifically associated with delusional memories from the period of delirium rather than with factual recall of events.",
    "Carer and staff distress is also significant and is rarely addressed. Witnessing delirium in a relative is frequently described as more distressing than the physical illness.",
    "Poor prognostic factors: hypoactive subtype, longer duration, greater severity, pre-existing dementia, and multiple precipitants.",
    "Prevention remains the intervention with the best evidence and the best return, reducing incidence by around a third where multicomponent programmes are implemented properly."
  ],
  cards:[
    ["What are the long-term consequences of delirium?","Independently raised mortality persisting for months after discharge; prolonged length of stay and more hospital complications; increased institutionalisation; a severalfold increase in subsequent dementia with acceleration of existing decline; persistent delirium in a substantial proportion; and lasting psychological distress including PTSD."],
    ["What is the significance of delirium duration?","The relationship with subsequent cognitive decline is dose-dependent: longer and more severe delirium produces greater long-term cognitive impairment. This is the argument for treating delirium as urgently as any other form of organ failure."],
    ["Which subtype carries the worst prognosis?","Hypoactive delirium, which is the commonest in older people, the most frequently missed, and associated with higher mortality and worse cognitive outcome than the hyperactive form."]
  ],
  note:[
    "Delirium independently predicts mortality rather than simply marking severe illness.",
    "A substantial proportion remain delirious at discharge and months later.",
    "Post-intensive care PTSD is associated with delusional rather than factual memories.",
    "Carer and staff distress is significant and rarely addressed.",
    "Prevention reduces incidence by around a third and remains the best-evidenced intervention."
  ],
  refs:["nice","oxoldage","semliaison"] };
