/* =====================================================================
   TEACHING, SECTION 5 — Classification and Assessment in Psychiatry
   17 items, 5.1.1 to 5.2.8.2
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["5.1.1"] = { free:true,
  simple:"In the 1960s the same patients were called schizophrenic far more often in New York than in London. Not different patients. The same ones, on film, watched by both sets of psychiatrists. That study is why we have operational criteria, and why classification is not a filing exercise but the thing that makes psychiatry a science at all.",
  teach:[
    "Purpose of classification: communication between clinicians, prediction of course and treatment response, and research that can be replicated. It is a tool, not a description of nature.",
    "Kraepelin, 1899: split the psychoses by longitudinal course rather than cross-sectional symptoms, distinguishing dementia praecox from manic-depressive insanity. Every classification since argues with him and none escapes him.",
    "Bleuler, 1908 and 1911: renamed dementia praecox schizophrenia because it neither always dements nor always begins early. His four As are associations, affect, ambivalence and autism.",
    "Schneider's first-rank symptoms: thought insertion, withdrawal and broadcasting; third-person auditory hallucinations; running commentary; delusional perception; passivity of affect, impulse and volition; and somatic passivity. Historically pathognomonic, now known to occur in mania and organic states, and removed from the definition in both ICD-11 and DSM-5.",
    "The US-UK Diagnostic Project showed enormous transatlantic disagreement, and drove the operational criteria movement.",
    "DSM-III, 1980: operational criteria, a multiaxial system, and the admission of PTSD. It transformed reliability at the cost of an unresolved argument about validity.",
    "Reliability is agreement between observers; validity is whether the category corresponds to something real. A diagnosis can be perfectly reliable and still not carve nature at a joint.",
    "Categorical classification assigns to a discrete class; dimensional places on a continuum. ICD-11 personality disorder is dimensional; ICD-10 was categorical. Most psychiatric phenomena are dimensional and are forced into categories for practical reasons.",
    "Comorbidity is the standing embarrassment: if categories were valid, they would not co-occur as often as they do."
  ],
  cards:[
    ["What did Kraepelin contribute, and on what basis?","He distinguished dementia praecox from manic-depressive insanity in 1899 on the basis of longitudinal course and outcome rather than cross-sectional symptoms, establishing course as a validating principle."],
    ["Name Schneider's first-rank symptoms and state their current status.","Thought insertion, withdrawal and broadcasting; third-person auditory hallucinations; running commentary; delusional perception; passivity of affect, impulse and volition; and somatic passivity. They occur in mania and organic states, lack diagnostic specificity, and have been removed from the definition of schizophrenia in ICD-11 and DSM-5."],
    ["Distinguish reliability from validity in diagnosis.","Reliability is the extent to which different observers reach the same diagnosis. Validity is whether the diagnostic category corresponds to a genuine entity, predicting course, treatment response and aetiology. A category can be highly reliable and still lack validity."]
  ],
  note:[
    "The US-UK Diagnostic Project demonstrated that the same patients were diagnosed with schizophrenia far more often in New York than in London.",
    "Robins and Guze proposed five validators: clinical description, laboratory study, delimitation from other disorders, follow-up study and family study.",
    "DSM-III, 1980, introduced operational criteria and is the single most consequential event in modern psychiatric classification.",
    "Cohen's kappa measures agreement beyond chance; above 0.8 is very good and 0.6 to 0.8 good.",
    "Research Domain Criteria, RDoC, is a research framework of dimensional constructs across diagnoses, not a clinical classification."
  ],
  refs:["tyrer11","icd11","dsm5"] };

TEACH["5.1.2"] = { free:false,
  simple:"There is a difference between what is wrong with an organ, what a person cannot do because of it, and what their life is like as a result. Confusing the three is why services measure the wrong thing and why two people with identical illnesses can have entirely different lives.",
  teach:[
    "The older WHO framework, ICIDH 1980: impairment, a loss or abnormality of structure or function; disability, restriction in performing an activity; handicap, the social disadvantage resulting from either.",
    "The criticism: it was linear and located the problem entirely in the person, treating disadvantage as an inevitable consequence of impairment rather than of how society is arranged.",
    "The replacement, ICF 2001, the International Classification of Functioning, Disability and Health: body functions and structures, activities, and participation, each interacting with environmental factors and personal factors.",
    "The shift is conceptual. Disability in the ICF arises from the interaction between a health condition and contextual factors, not from the condition alone. A wheelchair user is disabled by stairs, not by the wheelchair.",
    "The medical model locates the problem in the individual and seeks cure. The social model locates it in barriers, attitudes and exclusion, and seeks removal of those barriers. The biopsychosocial model attempts to hold both.",
    "In psychiatry this matters directly: stigma, unemployment, poor housing and exclusion account for much of the disadvantage experienced by people with severe mental illness, independently of symptom severity.",
    "Statementing was the English process by which a local authority assessed a child's special educational needs and issued a statutory statement of provision. It was replaced under the Children and Families Act 2014 by Education, Health and Care plans, which cover ages 0 to 25.",
    "The EHC plan is the mechanism by which a child with a neurodevelopmental or mental health condition obtains educational provision, and psychiatrists are regularly asked to contribute evidence to it.",
    "Practical relevance: recovery-oriented practice, supported employment and individual placement and support all follow from taking the participation dimension seriously."
  ],
  cards:[
    ["Distinguish impairment, disability and handicap in the ICIDH framework.","Impairment is a loss or abnormality of psychological, physiological or anatomical structure or function. Disability is a restriction in ability to perform an activity in the manner considered normal. Handicap is the resulting social disadvantage limiting fulfilment of a normal role."],
    ["How does the ICF differ conceptually from the ICIDH?","The ICF replaces a linear impairment-to-handicap sequence with an interactive model in which body functions and structures, activities and participation interact with environmental and personal factors, so disability arises from the interaction between health condition and context rather than from the condition alone."],
    ["What replaced statementing in England and what does it cover?","Education, Health and Care plans, introduced under the Children and Families Act 2014, covering children and young people from birth to age 25 with special educational needs and disabilities."]
  ],
  note:[
    "ICF, 2001, replaced ICIDH, 1980.",
    "The social model of disability holds that disability is created by barriers and attitudes rather than by impairment.",
    "Individual placement and support outperforms prevocational training for employment outcomes in severe mental illness.",
    "Psychiatrists contribute evidence to EHC plans and to disability benefit assessments and should know what the questions actually ask.",
    "Much of the disadvantage in severe mental illness is attributable to social exclusion rather than to symptom severity."
  ],
  refs:["icd11","morgan","oxid"] };

TEACH["5.2.1"] = { free:true,
  simple:"The history is the investigation. There is no blood test and no scan that makes a psychiatric diagnosis, so the interview is the instrument, and how carefully you use it decides what you find. Take it in a fixed order so that nothing is lost in a difficult conversation.",
  teach:[
    "Structure of the history: presenting complaint and its history; past psychiatric history; past medical history; drug history including over-the-counter, illicit and herbal; family history; personal and developmental history; social circumstances; forensic history; and premorbid personality.",
    "Premorbid personality is what the person was like when well, obtained from them and from an informant, and it is the baseline against which everything else is judged. It is routinely omitted and its absence makes change impossible to demonstrate.",
    "Collateral history is not optional where insight is impaired, in cognitive presentations, in mania, and in children. Record what you could not obtain and why.",
    "The mental state examination is what you observe now, not what the patient reports about the past. That distinction is the commonest error in written examinations.",
    "MSE headings: appearance and behaviour; speech; mood and affect; thought, comprising form, content and possession; perception; cognition; and insight. Risk is recorded alongside.",
    "Mood is the sustained subjectively reported emotional state; affect is the observed moment-to-moment emotional expression, described by range, reactivity, congruity and stability.",
    "Thought form is how thinking is organised; content is what is thought; possession is whether the person experiences their thoughts as their own.",
    "Insight is not present or absent. It has three components: awareness that something is wrong, attribution of that to illness, and willingness to accept treatment. They dissociate, and describing which components are present is more useful than a single word.",
    "Formulation, not just diagnosis: predisposing, precipitating, perpetuating and protective factors, across biological, psychological and social domains. The diagnosis names the disorder; the formulation explains why this person has this problem now."
  ],
  cards:[
    ["Name the headings of the mental state examination.","Appearance and behaviour; speech; mood and affect; thought, comprising form, content and possession; perception; cognition; and insight, with risk recorded alongside."],
    ["Distinguish mood from affect.","Mood is the sustained, subjectively reported emotional state. Affect is the observed, moment-to-moment emotional expression, described in terms of range, reactivity, congruity and stability."],
    ["What are the three components of insight?","Awareness that something is wrong; attribution of that abnormality to mental illness; and acceptance of the need for treatment. They can be present or absent independently."]
  ],
  note:[
    "The mental state examination describes what is observed at interview; historical symptoms belong in the history.",
    "Premorbid personality provides the baseline and is routinely omitted.",
    "Formulation uses the four Ps across biological, psychological and social domains.",
    "Record what collateral information could not be obtained and why.",
    "Document what was asked and the answer given, not only your conclusion; the note is read later by people who were not there."
  ],
  refs:["oyebode","oxhandbk","fish"] };

TEACH["5.2.2.1"] = { free:true,
  simple:"The most frightening symptom in psychiatry is not hearing voices. It is the loss of the boundary between you and everything else: the sense that your thoughts are being put in, taken out, or broadcast so that strangers know them. That is a disorder of the self, and it is the core of schizophrenia.",
  teach:[
    "The self has several aspects that can be disturbed independently: awareness of activity, unity, continuity over time, and the boundary between self and not-self. Jaspers set these out.",
    "Thought alienation: thought insertion, the experience that thoughts are placed in one's mind by an external agency; thought withdrawal, that they are removed; thought broadcasting, that they are accessible to others.",
    "Passivity phenomena, also called made experiences: made actions, made feelings, made impulses, and somatic passivity, in which bodily sensations are experienced as imposed from outside.",
    "The critical feature is the loss of the sense of agency and ownership, not the content. The patient does not think their thoughts are being read; they experience the thoughts as not theirs.",
    "These are Schneiderian first-rank symptoms. They are not pathognomonic, occurring in mania and organic states, and have been removed from the diagnostic definition in ICD-11 and DSM-5, but remain highly characteristic.",
    "Depersonalisation: a distressing sense of unreality or detachment from oneself, as though observing oneself from outside, with insight retained. Derealisation applies the same quality to the surroundings.",
    "Depersonalisation occurs in health under fatigue and stress, in anxiety and panic, in temporal lobe epilepsy, in dissociative disorders and with drugs, particularly cannabis and ketamine.",
    "Autoscopy is seeing one's own body from outside. A Doppelganger experience is the sense of a double.",
    "Dissociative identity disorder involves disruption of identity with distinct personality states. It is genuinely contested, culturally patterned, and should be described carefully and without either dismissal or enthusiasm."
  ],
  cards:[
    ["Define thought insertion and state what makes it a disorder of the self.","The experience that thoughts in one's own mind are not one's own but have been placed there by an external agency. It is a disorder of the self because what is lost is the sense of ownership and agency for the thought, not merely the belief about its origin."],
    ["Define depersonalisation and derealisation.","Depersonalisation is a distressing sense of unreality, detachment or being an observer of oneself, with insight retained. Derealisation is the same quality of unreality applied to the surroundings, which may seem flat, artificial or lifeless."],
    ["Name the passivity phenomena.","Made actions, made feelings, made impulses, and somatic passivity, in which movements, emotions, impulses or bodily sensations are experienced as imposed by an external agency."]
  ],
  note:[
    "Depersonalisation occurs in health, in anxiety and panic, in temporal lobe epilepsy, in dissociative disorders and with cannabis and ketamine.",
    "Insight is characteristically preserved in depersonalisation, which distinguishes it from psychotic experience.",
    "The first-rank symptoms are highly characteristic but not pathognomonic and are no longer part of the diagnostic definition.",
    "Sims' Symptoms in the Mind and Fish's Clinical Psychopathology are the College-listed texts for this material.",
    "Describe the phenomenon in the patient's own words before naming it; the term should follow the description, not replace it."
  ],
  refs:["oyebode","fish","icd11"] };

TEACH["5.2.2.2"] = { free:true,
  simple:"Mood is the weather and affect is what you can see out of the window at this moment. A patient can report feeling nothing while looking distressed, or describe devastation while smiling. Those mismatches are the finding, not a failure of the interview.",
  teach:[
    "Mood is the sustained, pervasive, subjectively experienced emotional state. Affect is the observed, moment-to-moment expression of emotion.",
    "Describe affect by four qualities: range, from full to restricted or blunted to flat; reactivity, whether it changes appropriately with content; congruity, whether it matches what is being said; and stability, whether it is labile.",
    "Blunted affect is a reduction in the intensity of emotional expression. Flat affect is its virtual absence. Both are negative symptoms of schizophrenia and are distinguished from depressive anhedonia by the absence of subjective misery.",
    "Incongruity of affect is emotional expression that does not match the content, such as laughing while describing a bereavement. It is characteristic of schizophrenia and must be distinguished from embarrassment and from cultural difference.",
    "Lability of affect is rapid fluctuation. Emotional incontinence, or pathological laughing and crying, is uncontrollable emotional expression disproportionate to any felt emotion, seen in pseudobulbar palsy, stroke, multiple sclerosis and motor neurone disease.",
    "Anhedonia is loss of the capacity for pleasure, distinguished into anticipatory and consummatory forms. Apathy is loss of motivation without subjective distress. Alexithymia is difficulty identifying and describing one's own feelings.",
    "Belle indifference is an apparent lack of concern about a serious symptom, historically associated with conversion disorder. It is neither sensitive nor specific and should not be used as diagnostic evidence.",
    "Anxiety, in descriptive terms, is fear without an identified object; phobic anxiety is fear attached to a specific object or situation and is out of proportion, cannot be reasoned away, and leads to avoidance.",
    "Elation must be distinguished from ordinary happiness by its persistence, its independence from circumstances, its infectiousness or irritability, and the accompanying changes in energy, sleep and judgement."
  ],
  cards:[
    ["By which four qualities should affect be described?","Range, from full through restricted and blunted to flat; reactivity, whether it changes appropriately with content; congruity, whether it matches what is being described; and stability, whether it is labile."],
    ["Distinguish blunted affect from depressive anhedonia.","Blunted affect is a reduction in the outward intensity of emotional expression, a negative symptom, typically without subjective distress. Anhedonia is a subjectively experienced loss of the capacity for pleasure and is accompanied by distress."],
    ["What is emotional incontinence and where is it seen?","Uncontrollable laughing or crying disproportionate to, or in the absence of, corresponding felt emotion. It occurs in pseudobulbar palsy, stroke, multiple sclerosis and motor neurone disease, and may respond to low-dose SSRIs."]
  ],
  note:[
    "Belle indifference is neither sensitive nor specific and should not be used as diagnostic evidence for conversion disorder.",
    "Incongruity of affect must be distinguished from embarrassment, from cultural difference and from the effect of medication.",
    "Apathy is a distinct construct from depression and from anhedonia, and is prominent in frontal syndromes and dementia.",
    "Alexithymia is associated with somatisation and with adverse childhood experience.",
    "Pathological laughing and crying may respond to low-dose SSRIs."
  ],
  refs:["oyebode","fish","lishman"] };

TEACH["5.2.2.3"] = { free:true,
  simple:"A delusion is not simply a false belief. Plenty of people hold false beliefs perfectly normally, and some delusions turn out to be true. What makes it a delusion is how it is held: with absolute conviction, on inadequate grounds, unshakeable by evidence, and arrived at in a way nobody else can follow.",
  teach:[
    "Jaspers' criteria for a delusion: held with extraordinary conviction and incorrigible certainty; impervious to counter-argument or experience; and with content that is impossible or false, out of keeping with the person's cultural and educational background.",
    "The husband whose wife really is unfaithful may still have a delusion of infidelity, if the belief is held on delusional grounds. Truth of content does not exclude it.",
    "Primary delusions arise de novo and are un-understandable: delusional mood, a sense that something is going on; delusional perception, a normal perception given delusional meaning in two stages; and sudden delusional idea, or autochthonous delusion.",
    "Secondary delusions arise understandably from another experience, most often mood. Guilt, poverty and nihilistic delusions in depression; grandiose delusions in mania.",
    "Named delusional syndromes: Capgras, that a familiar person has been replaced by an impostor; Fregoli, that a persecutor is disguising themselves as different people; Cotard, nihilistic delusions of being dead or of the organs rotting; de Clerambault, erotomania; Othello, morbid jealousy; and Ekbom, delusional infestation.",
    "Overvalued idea: a comprehensible, acceptable belief pursued beyond reason, which comes to dominate life, but is not held with delusional conviction and is not resisted. Seen in anorexia nervosa, morbid jealousy, hypochondriasis and querulous behaviour.",
    "Obsession: an intrusive recurrent thought, image or impulse, recognised as one's own, resisted, and regarded as senseless. The three distinguishing features are ownership, resistance and insight.",
    "Formal thought disorder is disorder of the form rather than the content: derailment or knight's move thinking; tangentiality; circumstantiality; neologism; word salad or verbigeration; thought block; and perseveration.",
    "Flight of ideas belongs to mania and has understandable connections, including clang associations, punning and distraction. Loosening of associations belongs to schizophrenia and does not.",
    "Poverty of speech is reduced quantity; poverty of content is normal quantity conveying little. Both are negative symptoms."
  ],
  cards:[
    ["Give Jaspers' three criteria for a delusion.","Held with extraordinary conviction and incorrigible certainty; impervious to counter-argument and contrary experience; and with impossible or false content that is out of keeping with the person's cultural and educational background."],
    ["Distinguish an overvalued idea, an obsession and a delusion.","An overvalued idea is comprehensible and acceptable but pursued beyond reason, dominating life, without delusional conviction and without resistance. An obsession is intrusive, recognised as one's own, resisted, and regarded as senseless. A delusion is held with unshakeable conviction on inadequate grounds and is not resisted."],
    ["How does flight of ideas differ from loosening of associations?","Flight of ideas retains understandable connections between thoughts, including clang associations, punning and distraction by external stimuli, and occurs in mania. Loosening of associations lacks understandable connection and occurs in schizophrenia."]
  ],
  note:[
    "Delusional perception is a two-stage phenomenon: a normal perception followed by an un-understandable delusional interpretation. It is a first-rank symptom.",
    "Truth of the content does not exclude a delusion; what matters is the grounds and the manner in which the belief is held.",
    "Capgras and Fregoli are delusional misidentification syndromes and occur in organic as well as functional disorders.",
    "Cotard syndrome occurs in severe depression, particularly in older people, and responds to ECT.",
    "Culture must be considered before calling a belief delusional; religious and culturally sanctioned beliefs are not delusions."
  ],
  refs:["oyebode","fish","icd11"] };

TEACH["5.2.2.4"] = { free:true,
  simple:"A hallucination is a perception with nothing there. Not a vivid image, not a strong impression, but something the person hears or sees in the world outside them, with the full force of a real perception, and which they cannot switch off. Getting that definition exactly right is worth several marks every sitting.",
  teach:[
    "Hallucination: a percept arising without an external stimulus, experienced in external objective space, with the full force and clarity of a true perception, and not subject to voluntary control.",
    "Pseudohallucination: experienced in inner subjective space, recognised as not real, and lacking the substantiality of a true perception. The distinction is about the space in which it occurs and the insight retained, not the vividness.",
    "Illusion: a misperception of a real external stimulus. Completion, affect and pareidolia are the three types.",
    "Auditory hallucinations: elementary sounds, or verbal. Second-person voices address the patient and occur in mood disorder and schizophrenia. Third-person voices discuss the patient, and running commentary describes their actions; both are first-rank symptoms.",
    "Visual hallucinations should prompt a search for an organic cause: delirium, Lewy body disease, occipital pathology, epilepsy, or substance intoxication or withdrawal. They are less typical of schizophrenia.",
    "Olfactory and gustatory hallucinations suggest temporal lobe epilepsy. Tactile hallucinations, formication, occur in cocaine and alcohol withdrawal and in delusional infestation.",
    "Special forms: functional hallucination, where a real stimulus in the same modality triggers the hallucination and both are perceived together; reflex hallucination, where a stimulus in one modality triggers a hallucination in another; extracampine hallucination, occurring outside the sensory field, such as a voice from another city.",
    "Hypnagogic hallucinations occur while falling asleep and hypnopompic on waking. Both occur in health and are not pathological.",
    "Charles Bonnet syndrome: complex visual hallucinations in a person with visual impairment, with insight retained and no psychiatric illness. Musical hallucinosis is the auditory equivalent with deafness.",
    "Autoscopy is seeing oneself. Peduncular hallucinosis follows midbrain or thalamic lesions and produces vivid visual hallucinations often with insight."
  ],
  cards:[
    ["Give the full definition of a hallucination.","A percept arising in the absence of any external stimulus, experienced in external objective space, with the full force and clarity of a true perception, and not subject to voluntary control."],
    ["Distinguish a functional from a reflex hallucination.","In a functional hallucination a real stimulus triggers a hallucination in the same modality and both are perceived simultaneously, such as a voice heard whenever a tap runs. In a reflex hallucination a stimulus in one modality triggers a hallucination in another."],
    ["What is Charles Bonnet syndrome?","Complex, well-formed visual hallucinations occurring in a person with visual impairment, with insight preserved and in the absence of psychiatric illness or cognitive impairment."]
  ],
  note:[
    "The pseudohallucination distinction rests on inner subjective space and retained insight, not on vividness.",
    "Visual hallucinations should raise the question of an organic cause before a psychiatric one.",
    "Hypnagogic and hypnopompic hallucinations occur in health and are part of the narcolepsy tetrad.",
    "Extracampine hallucinations occur outside the sensory field and are not in themselves diagnostic of psychosis.",
    "Describe the experience fully in the patient's own words before applying the term."
  ],
  refs:["oyebode","fish","lishman"] };

TEACH["5.2.2.5"] = { free:false,
  simple:"Some of the most striking things in psychiatry are not said, they are done. A patient who lets you place their arm in the air and leaves it there, or who repeats every word you say, is showing you a catatonic sign, and catatonia is treatable and dangerous if missed.",
  teach:[
    "Catatonia is a syndrome of psychomotor disturbance occurring in mood disorders, schizophrenia, and organic and medical conditions. It is commoner in mood disorder than in schizophrenia, which is not what most people expect.",
    "Signs: stupor, mutism, negativism, waxy flexibility (catalepsy), posturing, ambitendency, automatic obedience, echolalia and echopraxia, mannerisms, stereotypies, and mitgehen.",
    "Waxy flexibility is the maintenance of an imposed posture against gravity with a sensation of bending wax. Negativism is motiveless resistance to instruction or to attempts to be moved.",
    "Ambitendency is alternating between starting and stopping a movement. Automatic obedience is excessive compliance with instruction. Mitgehen is movement of a limb in response to the slightest pressure despite instruction to resist.",
    "Malignant catatonia adds hyperthermia, autonomic instability and rigidity, and is clinically indistinguishable from neuroleptic malignant syndrome. It is a medical emergency.",
    "Treatment: lorazepam is first line, often in high doses, with response frequently within hours. ECT is the definitive treatment where lorazepam fails or in malignant catatonia. Antipsychotics may worsen catatonia and precipitate neuroleptic malignant syndrome.",
    "ICD-11 recognises catatonia as a standalone grouping rather than only as a subtype of schizophrenia, which is a significant change.",
    "Drug-induced movement disorders: acute dystonia, akathisia, parkinsonism and tardive dyskinesia. Distinguish these from catatonia and from the illness.",
    "Other movement abnormalities: tics, which are suppressible with a premonitory urge; chorea; myoclonus; stereotypies, which are repetitive purposeless and rhythmic; and mannerisms, which are goal-directed movements performed oddly."
  ],
  cards:[
    ["Name six catatonic signs.","Stupor, mutism, negativism, waxy flexibility, posturing, ambitendency, automatic obedience, echolalia, echopraxia, mannerisms and stereotypies."],
    ["How is catatonia treated and what must be avoided?","Lorazepam is first line, often at high doses, with response frequently within hours. ECT is definitive where lorazepam fails or in malignant catatonia. Antipsychotics may worsen catatonia and precipitate neuroleptic malignant syndrome."],
    ["Distinguish a stereotypy from a mannerism.","A stereotypy is a repetitive, purposeless, rhythmic movement without evident goal. A mannerism is a goal-directed movement performed in an odd or exaggerated way."]
  ],
  note:[
    "Catatonia is commoner in mood disorders than in schizophrenia.",
    "Malignant catatonia is clinically indistinguishable from neuroleptic malignant syndrome and is a medical emergency.",
    "The Bush-Francis Catatonia Rating Scale is the standard instrument, and a lorazepam challenge test is diagnostic as well as therapeutic.",
    "ICD-11 classifies catatonia as a standalone grouping.",
    "Tics are suppressible and preceded by a premonitory urge, which distinguishes them from chorea and from stereotypies."
  ],
  refs:["oyebode","fish","maudsley"] };

TEACH["5.2.2.6"] = { free:false,
  simple:"Cognition is tested, not asked about. A patient who says their memory is terrible usually has depression. A patient who says their memory is fine while their family looks stricken usually has dementia. The complaint points one way and the truth often points the other.",
  teach:[
    "Domains: orientation, attention and concentration, memory (immediate, recent and remote; verbal and visual), language, praxis, visuospatial function, and executive function.",
    "Consciousness and attention come first, because impairment of these invalidates every subsequent test. A patient who cannot attend cannot be tested for memory.",
    "Orientation in time, place and person. Time is lost first and person last; disorientation for person alone, with preserved orientation for time and place, suggests a dissociative rather than an organic cause.",
    "Attention: serial sevens, months of the year backwards, digit span. Digit span is around 6 plus or minus 1 forwards.",
    "Memory: immediate registration; short-term recall of three items at five minutes; and remote autobiographical and semantic memory. Test recognition as well as free recall, because the difference is diagnostic.",
    "The key distinction: in Alzheimer's disease the deficit is in encoding and storage, so cueing does not help and recognition is impaired. In normal ageing and in depressive pseudodementia the deficit is in retrieval, so cueing helps and recognition is preserved.",
    "Language: fluency, comprehension, repetition, naming, reading and writing. Dysphasia is a disorder of language; dysarthria is a disorder of articulation; dysphonia is a disorder of voice production.",
    "Praxis and visuospatial function: intersecting pentagons, clock drawing, cube copying. Apraxia is inability to perform a learned motor act despite intact power, sensation and comprehension.",
    "Executive function: verbal fluency, Luria three-step, alternating sequences, go/no-go, cognitive estimates, proverb interpretation, and frontal release signs.",
    "Confabulation is the production of false memories without intent to deceive, associated with frontal and basal forebrain damage, classically in Korsakoff syndrome."
  ],
  cards:[
    ["How does the memory deficit of Alzheimer's disease differ from that of depressive pseudodementia?","Alzheimer's disease produces an encoding and storage deficit, so cueing does not help and recognition is impaired. Depressive pseudodementia produces a retrieval deficit, so cueing helps, recognition is preserved, and the patient typically complains of memory and answers I don't know."],
    ["Distinguish dysphasia, dysarthria and dysphonia.","Dysphasia is a disorder of language, affecting comprehension, expression, naming or repetition. Dysarthria is a disorder of articulation with intact language. Dysphonia is a disorder of voice production."],
    ["What is confabulation and where is it seen?","The production of false memories without any intention to deceive, filling gaps in recall. It is associated with frontal and basal forebrain damage and is classically seen in Korsakoff syndrome."]
  ],
  note:[
    "Test attention before memory; impaired attention invalidates memory testing.",
    "Disorientation for person with preserved orientation for time and place suggests a dissociative rather than organic cause.",
    "The MMSE is insensitive to frontal and executive dysfunction and is biased by education; MoCA is more sensitive to mild impairment.",
    "ACE-III scores out of 100 and covers attention, memory, fluency, language and visuospatial function.",
    "Always exclude delirium, depression, sensory impairment and medication effects before diagnosing dementia."
  ],
  refs:["oyebode","lishman","oxoldage"] };

TEACH["5.2.2.7"] = { free:false,
  simple:"A handful of rare syndromes carry names, and they get asked about constantly because they are memorable. Each one is a single striking idea: the impostor, the pursuer in disguise, the person who believes they are dead, the person convinced somebody famous loves them.",
  teach:[
    "Capgras syndrome: the delusion that a familiar person has been replaced by an identical impostor. Delusional misidentification, occurring in schizophrenia and in organic disorder, particularly right hemisphere and frontal pathology.",
    "Fregoli syndrome: the delusion that a persecutor is taking on the appearance of different people, so strangers are the same person in disguise. The reverse of Capgras.",
    "Cotard syndrome: nihilistic delusions of being dead, of not existing, or of the organs rotting or being absent. Occurs in severe depression, particularly in older people, and responds well to ECT.",
    "De Clerambault syndrome, erotomania: the delusion that another person, usually of higher status, is in love with the patient. Relevant forensically because it can lead to stalking.",
    "Othello syndrome, morbid jealousy: the delusional belief that a partner is unfaithful, pursued with relentless searching for evidence. It carries a significant risk of violence and homicide and is a genuine forensic emergency.",
    "Ekbom syndrome, delusional infestation: the belief that one is infested with parasites, often with the matchbox sign, where the patient brings specimens. Associated with cocaine and amphetamine use and with older age.",
    "Folie a deux, or induced delusional disorder: a delusion transferred from a dominant person to a passive one in a close relationship, typically socially isolated. Separation of the two often resolves it in the passive partner.",
    "Couvade syndrome: pregnancy symptoms in the partner of a pregnant woman. Ganser syndrome: approximate answers, clouding of consciousness, somatic conversion and hallucinations, classically described in prisoners.",
    "De Fregoli, Capgras, intermetamorphosis and subjective doubles are collectively the delusional misidentification syndromes.",
    "Practical point: all of these require exclusion of an organic cause, particularly the misidentification syndromes, which have a high rate of underlying neurological pathology."
  ],
  cards:[
    ["Distinguish Capgras from Fregoli syndrome.","In Capgras syndrome a familiar person is believed to have been replaced by an identical impostor. In Fregoli syndrome a persecutor is believed to be taking on the appearance of different people, so strangers are identified as that one person in disguise."],
    ["What is Othello syndrome and why does it matter?","Morbid jealousy, the delusional belief that a partner is being unfaithful, pursued with relentless checking and searching for evidence. It carries a significant risk of violence and homicide and requires urgent risk assessment."],
    ["Describe Cotard syndrome and its treatment.","Nihilistic delusions of being dead, not existing, or of the organs having rotted or disappeared, occurring in severe depression particularly in older people. It responds well to ECT."]
  ],
  note:[
    "Delusional misidentification syndromes have a high rate of underlying organic pathology and warrant imaging.",
    "The matchbox sign in delusional infestation refers to the patient presenting specimens of supposed parasites.",
    "Folie a deux typically resolves in the passive partner on separation.",
    "Ganser syndrome involves approximate answers, vorbeireden, and was classically described in prisoners.",
    "Erotomania and morbid jealousy are both forensically important because of stalking and violence risk."
  ],
  refs:["oyebode","fish","puriforen"] };

TEACH["5.2.3"] = { free:false,
  simple:"Descriptive psychopathology asks what the symptom is. Dynamic psychopathology asks what it is for. Both are legitimate questions, and confusing them, or dismissing the second, leaves you unable to understand why a patient does something that makes no sense on the surface.",
  teach:[
    "Dynamic psychopathology explains symptoms in terms of unconscious conflict, defence and meaning, in contrast to descriptive psychopathology, which observes and classifies without inference.",
    "Freud's structural model: id, driven by instinct and the pleasure principle; ego, mediating with reality; superego, conscience and ideals. The topographical model divides mind into conscious, preconscious and unconscious.",
    "Defence mechanisms are unconscious processes protecting the ego from anxiety. Mature: sublimation, humour, altruism, suppression, anticipation. Neurotic: repression, displacement, reaction formation, intellectualisation, rationalisation, isolation of affect, undoing. Immature: projection, splitting, denial, acting out, projective identification, regression, somatisation.",
    "Splitting is the inability to hold good and bad qualities of the same person together, producing alternating idealisation and denigration. It is characteristic of borderline personality organisation and is a common source of team conflict.",
    "Projective identification is projection of an unwanted feeling into another person who then actually experiences it and acts on it. It is the reason teams sometimes find themselves behaving unlike themselves around a particular patient.",
    "Transference: redirection onto the clinician of feelings and patterns from earlier significant relationships. Countertransference: the clinician's emotional response, which may be a reaction to the patient's material and is therefore information rather than a failure.",
    "Klein: paranoid-schizoid position, with splitting and projection, and depressive position, in which ambivalence can be tolerated. Winnicott: good-enough mother, transitional object, holding, true and false self. Bion: containment.",
    "The clinical value in general psychiatry is not interpretation but understanding: recognising splitting in a team, using countertransference as data, and formulating why this person responds this way to being helped.",
    "Mentalisation-based treatment descends from this tradition and has trial evidence in borderline personality disorder, which is the strongest empirical claim the tradition has."
  ],
  cards:[
    ["Define transference and countertransference.","Transference is the patient's redirection onto the clinician of feelings, expectations and relational patterns derived from earlier significant relationships. Countertransference is the clinician's emotional response, which may be a reaction to the patient's material and can be used as clinical information."],
    ["What is projective identification and why does it matter in a ward team?","Projection of an unwanted feeling into another person, who then actually experiences it and acts upon it. It explains why staff sometimes find themselves feeling and behaving uncharacteristically around a particular patient, and recognising it prevents that being acted out."],
    ["Name five mature and five immature defence mechanisms.","Mature: sublimation, humour, altruism, suppression, anticipation. Immature: projection, splitting, denial, acting out, projective identification, regression and somatisation."]
  ],
  note:[
    "Splitting in a clinical team is best managed by communication between staff rather than by confronting the patient.",
    "Countertransference is information, not a professional failure, provided it is recognised rather than enacted.",
    "Klein's paranoid-schizoid and depressive positions, and Winnicott's good-enough mother and transitional object, are the examinable concepts.",
    "Mentalisation-based treatment is the tradition's strongest empirical descendant.",
    "Descriptive and dynamic psychopathology answer different questions and are not in competition."
  ],
  refs:["gabbard","oyebode","noptp"] };

TEACH["5.2.4"] = { free:true,
  simple:"Every psychiatric presentation deserves the question, could this be physical? Not because it usually is, but because when it is and you missed it, the consequences are severe, and because the people most likely to be missed are the ones already carrying a psychiatric diagnosis.",
  teach:[
    "Baseline investigations in a new presentation: FBC, U&Es, LFTs, TFTs, calcium, glucose or HbA1c, B12 and folate. ESR or CRP where inflammation is suspected. Urine drug screen where relevant.",
    "Additional by indication: ECG before QT-prolonging drugs and in eating disorders; lipids and glucose before and during antipsychotics; syphilis and HIV serology where indicated; autoantibodies and CSF where autoimmune encephalitis is suspected; imaging where there are red flags.",
    "Red flags for organic cause: first presentation after 40 or before puberty; focal neurological signs; seizures; rapid or fluctuating course; visual hallucinations; new headache or visual change; personality change out of keeping; cognitive impairment out of proportion to mood; and atypical or treatment-resistant presentation.",
    "Delirium is the commonest organic presentation and is defined by impaired attention with acute onset and fluctuating course. Screen with the 4AT or Confusion Assessment Method.",
    "Specific conditions that present psychiatrically: hypothyroidism and hyperthyroidism; Cushing's and Addison's disease; hypercalcaemia; B12 deficiency; neurosyphilis; HIV; systemic lupus erythematosus; Wilson's disease; acute intermittent porphyria; temporal lobe epilepsy; and autoimmune encephalitis.",
    "Anti-NMDA receptor encephalitis is the one that must not be missed: a young patient, often female, with rapid-onset psychosis, then seizures, orofacial dyskinesias, autonomic instability and reduced consciousness, sometimes with an ovarian teratoma. It is treatable.",
    "Physical examination is not optional. Weight, blood pressure, pulse, temperature, and a neurological examination where indicated. Physical examination in psychiatric admission is frequently omitted and this is a recognised patient safety failure.",
    "Diagnostic overshadowing is the mechanism by which physical illness is missed in psychiatric patients: symptoms are attributed to the psychiatric diagnosis and not investigated.",
    "People with severe mental illness die 15 to 20 years early, predominantly from physical disease. Investigation is not defensive medicine; it is the main modifiable contributor to that gap."
  ],
  cards:[
    ["Name six red flags suggesting an organic cause for a psychiatric presentation.","First presentation after 40 or before puberty; focal neurological signs; seizures; rapid or fluctuating course; visual hallucinations; new headache or visual disturbance; personality change out of keeping; and cognitive impairment out of proportion to mood."],
    ["Which treatable encephalitis must not be missed in first-episode psychosis?","Anti-NMDA receptor encephalitis, typically in a young patient, often female, with rapid-onset psychosis followed by seizures, orofacial dyskinesias, autonomic instability and reduced consciousness, sometimes associated with an ovarian teratoma."],
    ["What baseline investigations are appropriate in a new psychiatric presentation?","FBC, U&Es, LFTs, thyroid function, calcium, glucose or HbA1c, B12 and folate, with urine drug screen, ECG, inflammatory markers, syphilis and HIV serology, and imaging added according to indication."]
  ],
  note:[
    "Diagnostic overshadowing is the commonest mechanism by which physical illness is missed in psychiatric patients.",
    "Physical examination on psychiatric admission is frequently omitted and is a recognised safety failure.",
    "Delirium is defined by impaired attention with acute onset and fluctuating course; screen with the 4AT.",
    "The 15 to 20 year life expectancy gap in severe mental illness is predominantly physical disease.",
    "Wilson's disease, acute intermittent porphyria and neurosyphilis are the classic treatable rarities to keep in mind."
  ],
  refs:["maudphys","lishman","semliaison"] };

TEACH["5.2.5"] = { free:false,
  simple:"There is no scan that diagnoses a psychiatric illness. Imaging in psychiatry has one job: to find the thing that is not psychiatric. Ordering it without that question in mind produces incidental findings, anxiety and no answers.",
  teach:[
    "The clinical purpose of imaging in psychiatry is exclusion of structural, vascular, inflammatory, infective or neoplastic pathology, not confirmation of a psychiatric diagnosis.",
    "CT: fast, widely available, superior for acute haemorrhage and bone, uses ionising radiation. Use in the acute setting and where MRI is contraindicated.",
    "MRI: superior spatial resolution, grey-white differentiation, posterior fossa and temporal lobe imaging, and no ionising radiation. First line for most psychiatric indications where imaging is warranted.",
    "Indications for imaging in psychiatry: focal neurological signs; seizures; first presentation of psychosis with atypical features, very early or late onset; cognitive impairment or suspected dementia; head injury; suspected space-occupying lesion; unexplained rapid deterioration; and before neurosurgical or neurostimulation treatment.",
    "In dementia, structural imaging is recommended to exclude reversible causes and to help subtype: medial temporal atrophy in Alzheimer's disease; vascular lesions and white matter change in vascular dementia; frontal and anterior temporal atrophy in frontotemporal dementia.",
    "Functional imaging in clinical practice: FDG-PET showing temporoparietal hypometabolism in Alzheimer's disease and frontal hypometabolism in frontotemporal dementia; DaTSCAN showing reduced dopamine transporter uptake in Lewy body disease and Parkinson's disease.",
    "Amyloid PET demonstrates amyloid deposition, which is present in a substantial minority of cognitively normal older people. A positive scan does not by itself diagnose Alzheimer's disease.",
    "MRI contraindications: ferromagnetic implants, some pacemakers, cochlear implants, and intraocular metallic foreign bodies. Claustrophobia and inability to remain still are practical limitations, and a patient with severe agitation may need sedation or may simply not be able to have the scan.",
    "Incidental findings occur in a meaningful proportion of scans and create their own problems. Order imaging with a question, not as a screening ritual."
  ],
  cards:[
    ["What is the clinical purpose of neuroimaging in psychiatry?","Exclusion of structural, vascular, inflammatory, infective or neoplastic pathology. There is no imaging test that establishes a psychiatric diagnosis in an individual."],
    ["When should imaging be performed in a first episode of psychosis?","Where there are atypical features, focal neurological signs, seizures, very early or late age of onset, rapid deterioration, or clinical suspicion of an organic cause. Routine imaging in typical first-episode psychosis is not established practice."],
    ["What does DaTSCAN show and when is it used?","Reduced presynaptic dopamine transporter uptake in the striatum. It is used to distinguish dementia with Lewy bodies and Parkinson's disease from other causes of dementia and parkinsonism, and is an indicative biomarker in the diagnostic criteria for dementia with Lewy bodies."]
  ],
  note:[
    "MRI is generally preferred to CT for psychiatric indications; CT is used acutely and where MRI is contraindicated.",
    "Amyloid PET positivity does not diagnose Alzheimer's disease in a cognitively normal person.",
    "Incidental findings are common and generate anxiety and further investigation; image with a question in mind.",
    "MRI is contraindicated with ferromagnetic implants, some pacemakers, cochlear implants and intraocular metal.",
    "Item 3.1.1.3 covers the physics and research applications of these techniques."
  ],
  refs:["lishman","oxneuropsy","nice"] };

TEACH["5.2.6"] = { free:true,
  simple:"A psychiatrist is a doctor first. The patient with severe mental illness who dies fifteen years early does not die of psychiatry, they die of heart disease and lung disease, in a system that saw them constantly and examined them rarely.",
  teach:[
    "The scale of the problem: people with severe mental illness die 15 to 20 years earlier than the general population, predominantly from cardiovascular and respiratory disease and cancer, not from suicide.",
    "Contributors: smoking at two to three times the general population rate; obesity and metabolic effects of medication; physical inactivity; poor diet; and unequal access to and quality of physical health care.",
    "Diagnostic overshadowing is the mechanism: symptoms are attributed to the psychiatric diagnosis and not investigated. It is the single most important concept in this item.",
    "Core competencies expected: physical examination including cardiovascular, respiratory, abdominal and neurological systems; interpretation of basic investigations including ECG; recognition and initial management of medical emergencies; and knowing when to refer.",
    "Conditions a psychiatrist must be able to recognise and initiate management for: delirium, sepsis, hypoglycaemia, acute coronary syndrome, stroke, seizures and status epilepticus, alcohol withdrawal and Wernicke's encephalopathy, opioid overdose, and refeeding syndrome.",
    "Drug-specific emergencies: lithium toxicity, neuroleptic malignant syndrome, serotonin syndrome, clozapine-induced agranulocytosis, myocarditis and ileus, and hyponatraemia.",
    "ECG interpretation is a core skill: rate, rhythm, axis, intervals with particular attention to QTc, and ischaemic change. A QTc above 500 ms or an increase of more than 60 ms from baseline requires action.",
    "Physical health monitoring: the schedules for antipsychotics, lithium, clozapine and valproate covered in item 4.4.3. These are not administrative tasks; they are the intervention that closes the mortality gap.",
    "The professional point: physical health care of people with severe mental illness is a psychiatric responsibility, not somebody else's. Where the psychiatrist does not take it on, in practice nobody does."
  ],
  cards:[
    ["What is the life expectancy gap in severe mental illness and what causes it?","Fifteen to twenty years, driven predominantly by cardiovascular, respiratory and malignant disease rather than suicide, through smoking, obesity, medication effects, physical inactivity and unequal access to physical health care."],
    ["What is diagnostic overshadowing?","Attributing physical symptoms to a person's psychiatric diagnosis or intellectual disability rather than investigating them as one would in any other patient, resulting in delayed or missed diagnosis of physical illness."],
    ["Name five medical emergencies a psychiatrist must recognise and initiate management for.","Delirium, sepsis, hypoglycaemia, alcohol withdrawal with Wernicke's encephalopathy, opioid overdose, refeeding syndrome, status epilepticus, neuroleptic malignant syndrome, serotonin syndrome and lithium toxicity."]
  ],
  note:[
    "Smoking rates in severe mental illness are two to three times those of the general population and account for a large share of the mortality gap.",
    "QTc above 500 ms, or an increase of more than 60 ms from baseline, requires action.",
    "Physical health checks in severe mental illness are a national quality indicator and audit performance is consistently poor.",
    "The Maudsley Practice Guidelines for Physical Health Conditions in Psychiatry is the College-listed reference.",
    "Where the psychiatrist does not take responsibility for physical health, in practice no one does."
  ],
  refs:["maudphys","semliaison","nice"] };

TEACH["5.2.7"] = { free:false,
  simple:"A scale exists to make change visible. It does not make a diagnosis, and a number without an interview is a number about nothing. But knowing which scale is filled in by the patient and which by the clinician, and roughly how many items each has, is straightforward marks.",
  teach:[
    "Depression, observer-rated: Hamilton Rating Scale for Depression, HAM-D, 17 or 21 items, weighted towards somatic symptoms; Montgomery-Asberg Depression Rating Scale, MADRS, 10 items, less somatic and therefore better in physical illness.",
    "Depression, self-rated: Beck Depression Inventory, 21 items; PHQ-9, 9 items, mapping onto DSM criteria and widely used in primary care; Hospital Anxiety and Depression Scale, HADS, 14 items, deliberately excluding somatic items for use in the medically ill.",
    "Older adults: Geriatric Depression Scale, self-rated, omitting somatic items because they are confounded by physical illness. Cornell Scale for Depression in Dementia uses both patient and informant.",
    "Perinatal: Edinburgh Postnatal Depression Scale, 10 items, self-rated, omitting somatic items confounded by normal postnatal physiology.",
    "Psychosis: Positive and Negative Syndrome Scale, PANSS, 30 items; Brief Psychiatric Rating Scale, BPRS, 18 or 24 items. Both observer-rated.",
    "Mania: Young Mania Rating Scale, 11 items, observer-rated.",
    "Anxiety: GAD-7 self-rated; Hamilton Anxiety Rating Scale observer-rated. OCD: Yale-Brown Obsessive Compulsive Scale, Y-BOCS, observer-rated.",
    "Side effects: AIMS for tardive dyskinesia; Barnes Akathisia Rating Scale; Simpson-Angus Scale for parkinsonism; Glasgow Antipsychotic Side-effect Scale.",
    "Cognition: MMSE, 30 points, insensitive to executive dysfunction and biased by education; MoCA, 30 points, more sensitive to mild impairment; ACE-III, 100 points; clock drawing test.",
    "Alcohol: AUDIT, 10 items; AUDIT-C, 3 items; CAGE, 4 items; CIWA-Ar for withdrawal. Global: Clinical Global Impression, Health of the Nation Outcome Scales, HoNOS."
  ],
  cards:[
    ["Which depression scales are observer-rated and which self-rated?","Observer-rated: Hamilton Rating Scale for Depression and Montgomery-Asberg Depression Rating Scale. Self-rated: Beck Depression Inventory, PHQ-9 and the Hospital Anxiety and Depression Scale."],
    ["Why are the Geriatric Depression Scale, HADS and Edinburgh Postnatal Depression Scale constructed as they are?","All three omit or minimise somatic items, because in older people, the physically ill and the postnatal period, somatic symptoms are confounded by physical condition and would otherwise inflate scores."],
    ["Name the standard scales for tardive dyskinesia, akathisia and drug-induced parkinsonism.","AIMS, the Abnormal Involuntary Movement Scale, for tardive dyskinesia; the Barnes Akathisia Rating Scale; and the Simpson-Angus Scale for parkinsonism."]
  ],
  note:[
    "Scales measure change and severity; they do not make diagnoses.",
    "Sensitivity is the proportion of true cases detected; specificity the proportion of non-cases correctly excluded. Screening instruments favour sensitivity.",
    "Positive predictive value falls as prevalence falls, however good the instrument.",
    "Cohen's kappa measures inter-rater agreement beyond chance; Cronbach's alpha measures internal consistency, with 0.7 to 0.9 acceptable.",
    "Record a baseline score, or subsequent scores cannot be interpreted."
  ],
  refs:["oxhandbk","maudsley","lawrie"] };

TEACH["5.2.8.1"] = { free:true,
  simple:"You will be asked whether somebody is safe. Nobody can answer that, and the honest version of the job is different: you are deciding what happens next and reducing what can be reduced. A note that claims certainty is a note that will not survive contact with the inquiry.",
  teach:[
    "Risk assessment is not prediction. Suicide is a rare event, and even an instrument with excellent sensitivity and specificity produces overwhelmingly more false positives than true positives when applied to a rare outcome. This is arithmetic, not pessimism.",
    "NICE guidance is explicit: risk assessment tools and scales must not be used to predict future suicide or repetition of self-harm, and must not be used to determine who is offered treatment or who is discharged.",
    "What risk assessment is for: structuring the clinical encounter, identifying modifiable factors, and generating a management plan. The plan is the output, not the score.",
    "Static factors, which cannot be changed: previous self-harm or attempt, which is the strongest single predictor; male sex for completed suicide; older age; history of psychiatric illness; childhood adversity; and family history.",
    "Dynamic factors, which can be changed and are therefore the clinically useful ones: current suicidal intent and planning, hopelessness, active symptoms, substance use, access to means, social isolation, recent loss, physical pain and illness, and lack of engagement with services.",
    "High-risk periods: the first weeks after discharge from psychiatric inpatient care; after a change in treatment; following a life event, particularly loss, humiliation or entrapment; and in the early days of antidepressant treatment in young people.",
    "Protective factors are real but must not be over-weighted: children at home, religious belief, future orientation, and a therapeutic relationship. They can disappear quickly.",
    "Means restriction is one of the few interventions with population-level evidence. Ask specifically about medication stockpiles, ligature points and access to firearms, and act on the answer.",
    "The formulation, not the category: high, medium and low risk labels have no predictive value and give false reassurance. Describe the risk, what drives it, what would increase or reduce it, and what the plan is."
  ],
  cards:[
    ["Why do risk assessment tools fail to predict suicide at the individual level?","Suicide is a rare outcome, so even an instrument with high sensitivity and specificity generates overwhelmingly more false positives than true positives. Positive predictive value falls as prevalence falls, regardless of the quality of the instrument."],
    ["What does NICE guidance say about risk assessment tools?","That they must not be used to predict future suicide or repetition of self-harm, and must not be used to determine who is offered treatment or who is discharged. They may be used to structure assessment, not to make the decision."],
    ["Distinguish static from dynamic risk factors and say which matter clinically.","Static factors, such as previous attempts, sex, age and history, cannot be changed and identify a population at elevated risk. Dynamic factors, such as intent, hopelessness, active symptoms, substance use, access to means and social isolation, can be modified and are what the management plan acts upon."]
  ],
  note:[
    "Previous self-harm is the strongest single predictor of subsequent suicide.",
    "The weeks immediately after discharge from psychiatric inpatient care carry markedly elevated risk.",
    "Asking about suicide does not increase risk; this is well established and worth telling frightened relatives.",
    "Means restriction has population-level evidence, including analgesic pack size limits and barriers at known sites.",
    "High, medium and low risk categories have no predictive validity and should not be used as though they did."
  ],
  refs:["nice","semgen","noptp"] };

TEACH["5.2.8.2"] = { free:false,
  simple:"You are expected to know one structured tool properly. Not because the tool decides anything, but because using one forces you to consider the things you would otherwise skip when you are tired and the clinic is running late.",
  teach:[
    "Three approaches: unstructured clinical judgement, which is flexible and unreliable; actuarial instruments, which apply fixed statistical predictors to produce a probability; and structured professional judgement, which uses defined items to guide but not replace clinical formulation.",
    "Structured professional judgement is the approach recommended in UK practice. It combines the consistency of a defined item set with the flexibility of clinical reasoning, and it produces a formulation and management plan rather than a score.",
    "HCR-20, now version 3, is the standard structured professional judgement tool for violence risk. Twenty items across three domains: ten Historical, five Clinical and five Risk management. The clinical and risk management items are dynamic and are where intervention happens.",
    "Other violence tools: VRAG, an actuarial instrument; and the PCL-R, Hare's Psychopathy Checklist Revised, a 20-item structured interview and file review measuring psychopathy, which is a robust predictor of violent recidivism.",
    "Sexual offending: Static-99 is actuarial and uses unchangeable factors; SVR-20 and RSVP are structured professional judgement instruments.",
    "Self-harm and suicide: SAD PERSONS, the Beck Hopelessness Scale and similar instruments are widely known and have poor predictive value for individual outcome. NICE specifically advises against using them to determine management.",
    "The Sainsbury Centre and START tools include protective as well as risk factors, which is closer to how risk actually operates.",
    "Whichever tool is used, the requirements are the same: appropriate training, use of collateral information and records rather than interview alone, explicit consideration of dynamic factors, and a documented management plan.",
    "The point to hold onto: the value of a structured tool is that it forces consideration of items you would otherwise omit. It does not transfer responsibility for the decision, and no tool has ever been found in an inquiry to have been the problem."
  ],
  cards:[
    ["What is the HCR-20 and how is it structured?","The standard structured professional judgement instrument for violence risk assessment, comprising twenty items across three domains: ten Historical, five Clinical and five Risk management. The Clinical and Risk management items are dynamic and provide the targets for intervention."],
    ["Distinguish actuarial from structured professional judgement approaches.","Actuarial instruments apply fixed statistical predictors to generate a probability of an outcome and do not permit clinical override. Structured professional judgement uses a defined set of empirically derived items to guide assessment, but the final formulation and management plan rest on clinical reasoning."],
    ["What is the PCL-R and what does it predict?","Hare's Psychopathy Checklist Revised, a twenty-item instrument scored from a semi-structured interview and file review. It is a robust predictor of violent recidivism and is widely used in forensic settings, requiring specific training to administer."]
  ],
  note:[
    "Structured professional judgement is the approach recommended in UK practice.",
    "Tools require training, collateral information and file review; interview alone is insufficient.",
    "SAD PERSONS and similar suicide risk scales have poor predictive value and NICE advises against using them to determine management.",
    "The output of any risk assessment should be a formulation and a management plan, not a category.",
    "Section 12.3.4 covers risk management planning in forensic practice."
  ],
  refs:["puriforen","nice","semgen"] };
