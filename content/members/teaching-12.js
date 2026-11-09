/* =====================================================================
   TEACHING, SECTION 12 — Forensic Psychiatry
   16 items, 12.1.1 to 12.4
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["12.1.1"] = { free:true,
  simple:"Most people with mental illness never commit a crime, and most crime is committed by people who are perfectly well. The overlap is small. It is also the part everybody reads about, so you have to know it accurately.",
  teach:[
    "The baseline first: the population attributable risk of violence from mental illness is small, of the order of five per cent or less. Substance misuse contributes far more, and being young and male contributes more still.",
    "People with severe mental illness are considerably more likely to be victims of violence than perpetrators of it, and this is consistently found and rarely reported.",
    "Homicide: the National Confidential Inquiry into Suicide and Safety in Mental Health reports that around one in ten homicide perpetrators in the UK have been in contact with mental health services in the preceding year, and a smaller proportion have symptoms of mental illness at the time.",
    "Homicide followed by suicide is a distinct group, more often involving depression, more often within families, and more often involving a male perpetrator killing a partner or children.",
    "Infanticide, under the Infanticide Act 1938 in England and Wales, applies where a mother kills her own child under twelve months while the balance of her mind is disturbed by not having recovered from childbirth or from lactation. It reduces murder to a manslaughter-equivalent offence.",
    "Filicide classification, Resnick: altruistic, acutely psychotic, unwanted child, accidental or fatal maltreatment, and spouse revenge. Altruistic filicide, killing to spare the child suffering, is the commonest in psychiatric populations.",
    "Neonaticide, killing within the first day, differs from other filicide: typically a young mother, concealed pregnancy, unassisted delivery, and a low rate of major mental illness.",
    "Sexual offences: the great majority are committed by people without major mental illness. Paraphilic disorders, intellectual disability and, less commonly, disinhibition from organic disorder are the psychiatric associations.",
    "Arson: strong association with intellectual disability, alcohol misuse, and personality disorder. Pyromania as a diagnosis is rare and should not be assumed. Motives include revenge, excitement, concealment of another crime, cry for help, and financial gain.",
    "Fire-setting has one of the highest recidivism concerns of any offence category, and repeat fire-setting with no clear instrumental motive is a specific forensic concern.",
    "Criminal damage frequently accompanies psychotic illness, intoxication and intellectual disability, and is often the offence that first brings a person into forensic services.",
    "Shoplifting has psychiatric associations with depression in older adults, with eating disorders, with dementia and with intellectual disability. Kleptomania is a genuine but rare diagnosis requiring the absence of any use or monetary motive for the stolen items.",
    "The offence type shapes the assessment. Sexual and violent offences require structured risk assessment; acquisitive offending rarely does."
  ],
  cards:[
    ["What is the population attributable risk of violence from mental illness?","Small, of the order of five per cent or less. Substance misuse contributes far more, and demographic factors such as being young and male contribute more still. People with severe mental illness are more often victims of violence than perpetrators."],
    ["State the Infanticide Act 1938 provision.","Where a mother kills her own child aged under twelve months while the balance of her mind is disturbed by reason of not having fully recovered from childbirth or from the effect of lactation, the offence is reduced from murder to an infanticide offence carrying the sentencing flexibility of manslaughter."],
    ["Give Resnick's classification of filicide.","Altruistic, in which the parent kills to spare the child suffering; acutely psychotic; unwanted child; accidental or fatal maltreatment; and spouse revenge. Altruistic filicide is the commonest in psychiatric populations."],
    ["What are the psychiatric associations of arson?","Intellectual disability, alcohol misuse and personality disorder. Motives include revenge, excitement, concealment of another offence, a cry for help, and financial gain. Pyromania is a rare diagnosis and should not be assumed."]
  ],
  note:[
    "Around one in ten UK homicide perpetrators have had mental health service contact in the preceding year.",
    "Homicide-suicide more often involves depression and occurs within families.",
    "Neonaticide typically involves a young mother, concealed pregnancy and low rates of major mental illness.",
    "Most sexual offending is committed by people without major mental illness.",
    "Kleptomania requires the absence of any use or monetary motive for the stolen items.",
    "The National Confidential Inquiry is the principal UK data source in this area."
  ],
  refs:["puriforen","eastman","forrester"] };

TEACH["12.1.2"] = { free:false,
  simple:"Different illnesses carry different risks, and the differences are specific rather than general. Schizophrenia raises the risk of violence a little; schizophrenia with untreated stimulant use raises it a lot. The detail is where the exam lives.",
  teach:[
    "Substance misuse is the single largest psychiatric contributor to offending, larger than any illness category, and it multiplies the risk attached to every other diagnosis.",
    "Alcohol is involved in a very large proportion of violent offences, acting through disinhibition, impaired judgement and myopic attention to immediate provocation.",
    "Comorbid substance misuse in schizophrenia raises violence risk substantially above schizophrenia alone. Schizophrenia without substance misuse carries a modestly raised risk relative to the general population.",
    "Epilepsy: violence during a seizure is extremely rare. Postictal confusional states can produce resistive aggression, usually undirected and unplanned. Interictal aggression relates to comorbid factors rather than to seizures themselves.",
    "Automatism in epilepsy is a genuine but very restricted defence. Directed, goal-oriented violence is not consistent with ictal automatism and this point is frequently tested.",
    "Schizophrenia: the risk is concentrated in the untreated, in the first episode before treatment, in those with persecutory delusions accompanied by threat and control-override symptoms, and in those with comorbid substance use and antisocial traits.",
    "Command hallucinations are less predictive of violence than is generally assumed, and are acted upon more often when congruent with the person's own beliefs or associated with a delusion.",
    "The commonest single mistake is to attribute violence in schizophrenia to psychosis when the person also has a long-standing antisocial personality and a stimulant habit. Premorbid conduct disorder predicts offending in schizophrenia much as it does in anyone else.",
    "Bipolar disorder: offending is concentrated in the manic phase, involves disinhibition, irritability and grandiosity, and includes public order offences, criminal damage, sexual disinhibition and fraud alongside violence.",
    "Neurodevelopmental disorders: ADHD is over-represented in prison populations by a wide margin, with prevalence estimates several times the community rate, and is a strongly treatable factor.",
    "Autism spectrum disorder is not associated with increased general offending. Where offending occurs it may relate to circumscribed interests, social misunderstanding, rigid adherence to rules or reaction to change, and this requires a specific formulation rather than a generic one.",
    "Intellectual disability: offending relates to suggestibility, exploitation by others, poor impulse control and lack of understanding rather than to intent. Arson and sexual offending are over-represented.",
    "Personality disorder: antisocial personality disorder is defined partly by offending, so the association is partly tautological. Psychopathy, measured by the PCL-R, is a stronger predictor of violent recidivism than any diagnosis.",
    "Borderline personality disorder is associated with self-directed harm far more than with harm to others, and this distinction is often lost in risk discussions.",
    "The MacArthur Violence Risk Assessment Study found that discharged psychiatric patients without substance misuse had violence rates no higher than their neighbours in the same community, which is the single most useful finding to hold in mind."
  ],
  cards:[
    ["Which single factor contributes most to offending across psychiatric diagnoses?","Substance misuse, which exceeds the contribution of any diagnostic category and multiplies risk attached to every other disorder. Comorbid substance misuse raises violence risk in schizophrenia substantially above schizophrenia alone."],
    ["What did the MacArthur Violence Risk Assessment Study find?","That discharged psychiatric patients without comorbid substance misuse had rates of violence no higher than those of other residents in the same neighbourhoods."],
    ["Describe the relationship between epilepsy and violence.","Violence during a seizure is extremely rare. Postictal confusional states may produce undirected resistive aggression. Directed, goal-oriented violence is inconsistent with ictal automatism, which is a genuine but very restricted defence."],
    ["How does autism relate to offending?","Autism is not associated with increased general offending. Where offending occurs it may relate to circumscribed interests, social misunderstanding, rigid rule adherence or reaction to change, and requires a specific individual formulation."],
    ["Which measure best predicts violent recidivism?","The PCL-R score for psychopathy, which predicts violent recidivism more strongly than any psychiatric diagnosis."]
  ],
  note:[
    "ADHD prevalence in prison populations is several times the community rate and is treatable.",
    "Command hallucinations are less predictive of violence than assumed; congruence with the person's beliefs matters.",
    "Premorbid conduct disorder predicts offending in schizophrenia as in the general population.",
    "Offending in bipolar disorder is concentrated in the manic phase.",
    "Intellectual disability offending relates to suggestibility and exploitation rather than intent.",
    "Borderline personality disorder is associated with self-directed rather than other-directed harm."
  ],
  refs:["puriforen","forrester","lishman"] };

TEACH["12.1.3"] = { free:false,
  simple:"A few named syndromes come up in forensic psychiatry far more often than their rarity would suggest, because each has a specific and dangerous relationship to violence. Learn the names, the definition, and the risk attached to each.",
  teach:[
    "Morbid jealousy, also called delusional jealousy or the Othello syndrome, is the delusional belief that a partner is unfaithful. It is a symptom, not a diagnosis, and can arise in delusional disorder, schizophrenia, affective disorder, alcohol dependence and organic states.",
    "Morbid jealousy carries a genuinely high risk of serious violence and homicide directed at the partner, and it is among the most dangerous presentations in general psychiatry.",
    "Features: persistent unfounded conviction of infidelity, checking behaviours, searching clothing and belongings, interrogation, following, and demands for confession. Evidence is interpreted rather than sought.",
    "Alcohol dependence is the commonest single association with morbid jealousy, and the jealousy may improve substantially with abstinence.",
    "Management of morbid jealousy: treat the underlying disorder, address alcohol, assess risk to the partner explicitly, warn where appropriate, and consider geographical separation. Separation is sometimes the only safe intervention.",
    "Erotomania, or de Clérambault's syndrome, is the delusional belief that another person, usually of higher status, is in love with the patient. Described by de Clérambault in 1921.",
    "Erotomania is more common in women in clinical samples but more common in men in forensic samples, and the forensic group carries the higher risk of stalking and violence.",
    "The violence in erotomania is more often directed at a perceived rival or at people obstructing access than at the object of the delusion, though the object may also be attacked.",
    "Mullen's stalker typology: the rejected, the intimacy seeker, the incompetent suitor, the resentful, and the predatory. The rejected stalker, a former intimate partner, carries the highest risk of violence.",
    "Erotomanic stalkers fall within the intimacy seeker group, which is persistent and hard to deter but somewhat less violent than the rejected group.",
    "Factitious disorder, formerly Munchausen syndrome, is the intentional production or feigning of symptoms in order to assume the sick role, with no external incentive. Pseudologia fantastica and peregrination are the classical associated features.",
    "Malingering is distinguished by external incentive: benefit, compensation, avoidance of prosecution or of military service. It is not a psychiatric diagnosis but a description of behaviour.",
    "Fabricated or induced illness, formerly Munchausen syndrome by proxy, is the fabrication or induction of illness in a child by a carer. It is a form of child abuse and is managed through safeguarding procedures, not as a parental diagnosis.",
    "Meadow's law, the proposition that one cot death is a tragedy, two suspicious and three murder, was used in evidence and was subsequently discredited. The Sally Clark case led to the quashing of convictions and to major reform of expert evidence, and stands as the standing warning about statistical reasoning in court."
  ],
  cards:[
    ["Define morbid jealousy and state its principal risk.","The delusional belief that a partner is being unfaithful, arising as a symptom in several disorders including delusional disorder, schizophrenia, affective disorder, alcohol dependence and organic states. It carries a high risk of serious violence and homicide directed at the partner, and alcohol dependence is its commonest association."],
    ["What is erotomania and who is at risk of violence?","De Clérambault's syndrome, the delusional belief that another person, usually of higher status, is in love with the patient. It is commoner in women in clinical samples and in men in forensic samples. Violence is often directed at a perceived rival or at those obstructing access rather than at the object."],
    ["Give Mullen's stalker typology and identify the most dangerous group.","The rejected, the intimacy seeker, the incompetent suitor, the resentful and the predatory. The rejected stalker, typically a former intimate partner, carries the highest risk of violence."],
    ["Distinguish factitious disorder from malingering.","Factitious disorder involves intentional production or feigning of symptoms to assume the sick role, with no external incentive. Malingering involves the same behaviour for an identifiable external incentive such as compensation, benefit or avoidance of prosecution, and is a description of behaviour rather than a psychiatric diagnosis."],
    ["What was Meadow's law and why does it matter?","The proposition that one cot death is a tragedy, two suspicious and three murder, used in expert evidence and subsequently discredited. The Sally Clark case led to convictions being quashed and to reform of expert evidence, and stands as the warning about statistical reasoning presented in court."]
  ],
  note:[
    "Morbid jealousy may improve substantially with alcohol abstinence.",
    "Geographical separation is sometimes the only safe intervention in morbid jealousy.",
    "De Clérambault described erotomania in 1921.",
    "Pseudologia fantastica and peregrination are classical features of factitious disorder.",
    "Fabricated or induced illness is managed as child abuse through safeguarding, not as a parental diagnosis."
  ],
  refs:["puriforen","forrester","oyebode"] };

TEACH["12.1.4"] = { free:false,
  simple:"The same offence, committed by two people with the same illness, produces very different journeys depending on who they are. That is not a claim about fairness in the abstract. It is a measurable feature of the system, and you are expected to know where the differences fall.",
  teach:[
    "Young offenders: the age of criminal responsibility in England, Wales and Northern Ireland is ten, among the lowest in Europe. It is twelve in Scotland, raised from eight in 2021.",
    "Doli incapax, the rebuttable presumption that a child aged ten to thirteen was incapable of crime, was abolished in England and Wales by the Crime and Disorder Act 1998.",
    "The neurodevelopmental case against low ages of criminal responsibility rests on prefrontal maturation continuing into the mid-twenties, with adolescent decision-making disproportionately affected under emotional arousal and peer presence.",
    "Rates of mental disorder, neurodevelopmental disorder, communication difficulty and head injury are very high in young offender populations, and speech and language impairment in particular is greatly over-represented and rarely identified.",
    "Female offenders: women are a small minority of the prison population but have far higher rates of mental disorder, self-harm and prior trauma than male prisoners.",
    "Self-harm in women's prisons occurs at several times the rate seen in men's prisons, and a small number of women account for a large share of incidents.",
    "The Corston Report, 2007, argued that women's imprisonment in England and Wales caused disproportionate harm, that most women were imprisoned for non-violent offences, and that community alternatives should be the norm.",
    "Most imprisoned women are mothers, and the separation of children is a distinct harm not present to the same degree in the male estate.",
    "Ethnic minority offenders: Black people are over-represented at every stage of the criminal justice system in England and Wales, from stop and search through to imprisonment.",
    "The Lammy Review, 2017, examined this and concluded that disproportionality could not be explained by offending patterns alone, recommending greater transparency and diversion.",
    "In psychiatric terms, Black patients are more likely to enter services through police contact and the criminal justice route and less likely to enter through a general practitioner, and are more likely to be detained and to be placed in medium security.",
    "Deaf offenders: profound prelingual deafness carries specific difficulties in assessment, in fitness to plead, and in accessing treatment. Interpreters must be registered and qualified for legal settings; family members must never interpret.",
    "Deaf people are substantially over-represented in secure services relative to their population share, partly because of delayed access to appropriate community care.",
    "Language and communication needs are the common thread across all these groups. A person who cannot follow proceedings cannot participate in them, whether the barrier is deafness, learning disability, developmental language disorder or first language."
  ],
  cards:[
    ["State the ages of criminal responsibility in the UK and the status of doli incapax.","Ten in England, Wales and Northern Ireland; twelve in Scotland, raised from eight in 2021. The rebuttable presumption of doli incapax for children aged ten to thirteen was abolished in England and Wales by the Crime and Disorder Act 1998."],
    ["What did the Corston Report conclude?","That the imprisonment of women in England and Wales caused disproportionate harm, that most women were imprisoned for non-violent offences, and that community alternatives should become the norm. Published in 2007."],
    ["What did the Lammy Review find?","That Black, Asian and minority ethnic people are over-represented at every stage of the criminal justice system in England and Wales, and that this disproportionality could not be explained by offending patterns alone. Published in 2017."],
    ["Which communication issue is most over-represented and least identified in young offenders?","Speech, language and communication needs, particularly developmental language disorder, which is greatly over-represented in young offender populations and very frequently unidentified."]
  ],
  note:[
    "Prefrontal maturation continues into the mid-twenties and is the neurodevelopmental argument against low ages of criminal responsibility.",
    "Self-harm rates in women's prisons are several times those in men's prisons.",
    "Most imprisoned women are mothers.",
    "Black patients more often enter mental health services through police and criminal justice routes.",
    "Interpreters in legal settings must be registered and qualified; family members must never interpret.",
    "Deaf people are over-represented in secure services."
  ],
  refs:["forrester","eastman","bhugra"] };

TEACH["12.1.5"] = { free:false,
  simple:"Forensic psychiatry is not only about the person in the dock. The person who was harmed also has a psychiatry, and when money is attached to their symptoms the assessment becomes considerably harder.",
  teach:[
    "Victimisation is a major risk factor for psychiatric disorder, and people with severe mental illness are victimised at much higher rates than the general population, particularly people with psychosis and intellectual disability.",
    "PTSD requires exposure to actual or threatened death, serious injury or sexual violence, with re-experiencing, avoidance, negative alterations in cognition and mood, and hyperarousal, in DSM-5.",
    "ICD-11 narrowed PTSD to three core clusters: re-experiencing in the here and now, deliberate avoidance, and a persistent sense of current threat, all lasting several weeks.",
    "ICD-11 added Complex PTSD, requiring the PTSD core plus disturbances in self-organisation: affect dysregulation, negative self-concept, and disturbed relationships. It follows prolonged or repeated trauma from which escape was difficult.",
    "Most people exposed to trauma do not develop PTSD. The strongest predictors are peritraumatic dissociation, perceived life threat, lack of social support afterwards, and prior psychiatric history.",
    "Suggestibility matters because false confessions are real. The Gudjonsson Suggestibility Scale measures yield, the tendency to accept leading questions, and shift, the tendency to change answers under interpersonal pressure.",
    "The Birmingham Six, the Guildford Four and the case of Engin Raghip established the admissibility of psychological evidence on suggestibility and led to the safeguards in the Police and Criminal Evidence Act 1984.",
    "PACE 1984 provides for the appropriate adult, who must be present during police interview of a juvenile or of a person who is mentally vulnerable, and whose role is to safeguard rather than merely to observe.",
    "Anger is a normal emotion and not itself a disorder. Novaco's model treats anger as a function of cognitive appraisal, physiological arousal and behavioural response, and his anger management programme addresses all three.",
    "Compensation and the assessment of symptoms: the presence of a claim does not mean symptoms are feigned, and most claimants are not malingering. It does mean the assessment must be structured and corroborated.",
    "Compensation neurosis, the old idea that symptoms resolve on settlement, is not supported. Symptoms frequently persist after settlement, which undermines the simple secondary-gain account.",
    "Assessment in medico-legal work should use collateral records, consistency across accounts, symptom validity testing where appropriate, and explicit consideration of exaggeration, which is far commoner than outright fabrication.",
    "Exaggeration of genuine symptoms sits on a spectrum and is not the same as malingering. Saying so plainly in a report is more defensible than either accusation or omission."
  ],
  cards:[
    ["How does ICD-11 define PTSD and Complex PTSD?","ICD-11 PTSD requires three core clusters: re-experiencing in the here and now, deliberate avoidance of reminders, and a persistent sense of current threat. Complex PTSD requires those plus disturbances in self-organisation, namely affect dysregulation, negative self-concept and disturbed relationships, following prolonged or repeated trauma from which escape was difficult."],
    ["What does the Gudjonsson Suggestibility Scale measure?","Yield, the tendency to accept leading questions, and shift, the tendency to change answers in response to interpersonal pressure. It provides the psychological evidence on vulnerability to false confession."],
    ["What is an appropriate adult and when is one required?","Under the Police and Criminal Evidence Act 1984, a person who must be present during police interview of a juvenile or of a mentally vulnerable suspect, with an active safeguarding role rather than a passive observing one."],
    ["Is compensation neurosis supported by evidence?","No. Symptoms frequently persist after settlement of a claim, which undermines the simple secondary-gain account. The presence of a claim does not indicate feigning, though it does require structured and corroborated assessment."]
  ],
  note:[
    "People with psychosis and intellectual disability are victimised at much higher rates than the general population.",
    "Peritraumatic dissociation, perceived life threat and poor subsequent social support predict PTSD.",
    "The Birmingham Six and Guildford Four cases established the admissibility of suggestibility evidence.",
    "Novaco's model treats anger as appraisal, arousal and behaviour.",
    "Exaggeration of genuine symptoms is far commoner than outright fabrication."
  ],
  refs:["forrester","puriforen","icd11"] };

TEACH["12.2.1"] = { free:false,
  simple:"A psychiatrist meets the criminal justice system at three moments, and the question is different each time. At arrest: is this person well enough to be interviewed. Before trial: are they well enough to be tried. After conviction: what should happen to them now.",
  teach:[
    "At the police station the questions are fitness to be detained, fitness to be interviewed, and whether an appropriate adult is required.",
    "Fitness to be interviewed asks whether the person's condition would make their responses unreliable, or whether interviewing would cause significant harm to their health. It is not the same as capacity.",
    "Liaison and diversion services operate in police stations and courts in England, identifying mental illness, neurodevelopmental disorder, substance misuse and learning disability at the earliest point and directing people into treatment.",
    "Section 136 of the Mental Health Act allows police to remove a person from a public place to a place of safety for assessment. Following the Policing and Crime Act 2017 the maximum period is 24 hours, extendable to 36, and a police station may no longer be used for anyone under 18 and only exceptionally for adults.",
    "Section 135 requires a magistrate's warrant and permits entry to private premises to remove a person to a place of safety.",
    "Prior to conviction the psychiatrist may be asked about fitness to plead, about mental condition at the time of the offence, and about the need for transfer to hospital.",
    "Section 35 of the Mental Health Act allows remand to hospital for a report; section 36 for treatment. Section 48 permits transfer of an unsentenced prisoner to hospital, and section 48 with a section 49 restriction is the usual route.",
    "Before sentencing the court asks for a psychiatric report to inform disposal. The report should address diagnosis, the relationship between disorder and offence, treatability, risk, and the recommended disposal with reasons.",
    "The psychiatrist advises; the court decides. A report that recommends a disposal the court cannot make, or that trespasses on the ultimate issue of guilt, is of no use.",
    "Assessment should be based on interview plus records, depositions, witness statements, previous convictions and collateral history. An opinion on mental state at the time of an offence without the depositions is not defensible.",
    "The duty of the expert is to the court, not to the instructing party. This is stated in the Criminal Procedure Rules and must be recited in the report.",
    "Consent and confidentiality differ in this work. The person must be told at the outset that the assessment is not confidential, that a report will go to the court, and that they may decline to answer. Record that this was said."
  ],
  cards:[
    ["What does fitness to be interviewed assess?","Whether the person's condition would render their responses unreliable, or whether being interviewed would cause significant harm to their physical or mental health. It is distinct from capacity and from fitness to plead."],
    ["Describe section 136 and its current time limits.","Police power to remove a person from a public place to a place of safety for assessment. Following the Policing and Crime Act 2017 the maximum period is 24 hours, extendable by 12 to 36 hours, a police station may not be used for anyone under 18, and only exceptionally for adults."],
    ["Which sections allow remand or transfer to hospital before sentence?","Section 35 for remand to hospital for preparation of a report; section 36 for remand for treatment; and section 48, usually with a section 49 restriction, for transfer of an unsentenced prisoner to hospital."],
    ["To whom does the expert witness owe a duty?","To the court, not to the instructing party, as required by the Criminal Procedure Rules. The report must state this duty explicitly."]
  ],
  note:[
    "Section 135 requires a magistrate's warrant for entry to private premises.",
    "Liaison and diversion services identify disorder at the earliest criminal justice contact.",
    "An opinion on mental state at the time of the offence requires the depositions and witness statements.",
    "The person must be told at the outset that a court assessment is not confidential.",
    "The psychiatrist advises on disposal; the court decides."
  ],
  refs:["eastman","forrester","puriforen"] };

TEACH["12.2.2"] = { free:true,
  simple:"There are two completely different questions the law asks about a defendant's mind, and mixing them up is the classic error. One is about now: can they follow their trial. The other is about then: what was in their mind when they did it.",
  teach:[
    "Fitness to plead concerns the defendant's state at the time of trial. Criminal responsibility concerns the state at the time of the offence. They are independent: a person may be fit to plead and not responsible, or unfit and fully responsible.",
    "Fitness to plead in England and Wales rests on R v Pritchard, 1836, as developed in later cases. The defendant must be able to plead, understand the course of proceedings, instruct a lawyer, challenge a juror, and understand the evidence.",
    "The Pritchard criteria are widely criticised as setting the threshold too low and taking no account of decision-making capacity. The Law Commission recommended replacement in 2016 with a capacity-based test; the recommendation has not been enacted.",
    "Procedure: unfitness is determined by a judge on the evidence of two registered medical practitioners, at least one approved under section 12. If found unfit, a trial of the facts follows to determine whether the defendant did the act.",
    "Disposal after a finding of unfitness and a trial of the facts: a hospital order, with or without restriction, a supervision order, or an absolute discharge, under the Criminal Procedure (Insanity) Act 1964 as amended in 1991 and 2004.",
    "Mutism and deafness: the court must first determine whether the defendant is mute of malice or mute by visitation of God. Deafness alone does not make a person unfit provided communication can be enabled with an intermediary and registered interpreter.",
    "Criminal responsibility requires actus reus, the guilty act, and mens rea, the guilty mind. Psychiatric evidence in defences generally bears on mens rea.",
    "The insanity defence rests on the M'Naghten Rules, 1843: at the time of the act the defendant was labouring under such a defect of reason, from disease of the mind, as not to know the nature and quality of the act, or, if he did know it, not to know that what he was doing was wrong.",
    "M'Naghten is narrow and rarely used. Knowing an act is wrong means knowing it is legally wrong, so a person who knows the law forbids the act but believes it morally justified by a delusion still fails the test.",
    "Disease of the mind is a legal, not a medical, concept. It has been held to include epilepsy, hyperglycaemia in diabetes, arteriosclerosis and sleepwalking, which is why the case law appears strange to clinicians.",
    "The special verdict is not guilty by reason of insanity. Since 1991 the court has had a range of disposals rather than mandatory hospitalisation, other than for murder.",
    "Diminished responsibility is a partial defence to murder only, reducing it to manslaughter. Section 2 of the Homicide Act 1957 as substituted by section 52 of the Coroners and Justice Act 2009.",
    "The current diminished responsibility test has four limbs: an abnormality of mental functioning; arising from a recognised medical condition; which substantially impaired the ability to understand the nature of the conduct, to form a rational judgement, or to exercise self-control; and which provides an explanation for the killing.",
    "The 2009 reformulation deliberately tied the defence to a recognised medical condition and introduced the causal requirement, replacing the older and vaguer abnormality of mind formula.",
    "Automatism is action without conscious volition. Insane automatism arises from an internal cause, a disease of the mind, and yields the special verdict. Non-insane automatism arises from an external cause and yields a complete acquittal.",
    "The internal-external distinction produces the notorious result that a hypoglycaemic diabetic who has taken insulin, an external cause, may receive a full acquittal, while a hyperglycaemic diabetic who has not, an internal cause, may be found insane.",
    "Amnesia for the offence does not by itself make a person unfit to plead, and it is not a defence. It is common, frequently associated with intoxication or with high emotional arousal, and is often exaggerated.",
    "Intoxication: voluntary intoxication is not a defence to crimes of basic intent. It may negate the specific intent required for offences such as murder, reducing the offence rather than excusing it."
  ],
  cards:[
    ["State the Pritchard criteria for fitness to plead.","The defendant must be able to enter a plea, understand the course of proceedings, instruct a legal representative, challenge a juror, and understand the evidence. Criticised for setting the threshold too low and for ignoring decision-making capacity; the Law Commission recommended a capacity-based replacement in 2016, not enacted."],
    ["State the M'Naghten Rules.","That at the time of committing the act the accused was labouring under such a defect of reason, from disease of the mind, as not to know the nature and quality of the act he was doing, or, if he did know it, that he did not know that what he was doing was wrong. Wrong means legally wrong."],
    ["Give the four limbs of the current diminished responsibility test.","An abnormality of mental functioning; arising from a recognised medical condition; which substantially impaired the ability to understand the nature of the conduct, to form a rational judgement, or to exercise self-control; and which provides an explanation for the killing. Homicide Act 1957 section 2 as substituted by the Coroners and Justice Act 2009."],
    ["Distinguish insane from non-insane automatism.","Insane automatism arises from an internal cause amounting in law to a disease of the mind and results in the special verdict of not guilty by reason of insanity. Non-insane automatism arises from an external cause and results in a complete acquittal."],
    ["Is amnesia for the offence a defence, or a bar to trial?","Neither. Amnesia does not by itself render a defendant unfit to plead and is not a defence. It is common, frequently associated with intoxication or high emotional arousal, and is often exaggerated."]
  ],
  note:[
    "Fitness to plead concerns the time of trial; criminal responsibility concerns the time of the offence.",
    "Unfitness is determined by a judge on the evidence of two doctors, one section 12 approved.",
    "A finding of unfitness is followed by a trial of the facts.",
    "Disease of the mind is a legal concept and has included epilepsy, hyperglycaemia and sleepwalking.",
    "Diminished responsibility is a partial defence to murder only.",
    "Voluntary intoxication is no defence to crimes of basic intent but may negate specific intent."
  ],
  refs:["eastman","puriforen","forrester"] };

TEACH["12.2.3"] = { free:false,
  simple:"Once someone is convicted the court has a menu, and the psychiatric options on it are specific sections with specific criteria. Knowing which section does what is straightforward marks.",
  teach:[
    "Section 37, the hospital order, is the principal psychiatric disposal. The court must be satisfied on the evidence of two doctors that the person has a mental disorder of a nature or degree making hospital treatment appropriate, and that appropriate treatment is available.",
    "A section 37 hospital order lasts six months initially, is renewable, and carries no requirement that the person serve any part of a sentence. It is a disposal instead of punishment, not alongside it.",
    "Section 41 is the restriction order, added by the Crown Court to a section 37 where necessary to protect the public from serious harm. Only the Crown Court can impose it and only where at least one doctor gave oral evidence.",
    "Under a restriction order, leave, transfer and discharge all require the consent of the Secretary of State for Justice, and discharge by a tribunal may be conditional with recall.",
    "A restricted patient conditionally discharged remains liable to recall to hospital without fresh assessment, which is the principal practical difference from an unrestricted patient.",
    "Section 38 is the interim hospital order, used to test whether a hospital order is appropriate before committing to one.",
    "Section 45A, the hybrid order, allows the Crown Court to impose a prison sentence together with a hospital direction and limitation direction. If the person recovers or treatment ceases to benefit them, they are returned to prison to serve the remainder of the sentence.",
    "Section 45A was introduced by the Crime (Sentences) Act 1997 and its use has increased following appellate encouragement, particularly in personality disorder cases.",
    "Section 47 permits transfer of a sentenced prisoner to hospital; section 49 adds restrictions. A section 47 with section 49 is the commonest route by which sentenced prisoners reach secure hospital.",
    "Community disposals: the mental health treatment requirement can form part of a community order or a suspended sentence order, requiring the offender to submit to treatment. It is substantially underused.",
    "A guardianship order under section 37 may be made in favour of a local authority, and is used rarely, mainly in intellectual disability.",
    "Sentencing terminology: a life sentence has a minimum term or tariff after which release is possible on licence. Imprisonment for public protection was abolished in 2012 but people sentenced under it remain in custody.",
    "The court cannot make a hospital order unless a bed is identified and available within 28 days. That practical requirement, not the legal test, is what most often obstructs the disposal."
  ],
  cards:[
    ["What is required for a section 37 hospital order?","Evidence from two registered medical practitioners that the offender has a mental disorder of a nature or degree making detention for treatment in hospital appropriate, that appropriate treatment is available, and that a bed will be available within 28 days. It is a disposal instead of punishment."],
    ["What does a section 41 restriction order change?","It requires the consent of the Secretary of State for Justice for leave, transfer and discharge, allows conditional discharge with liability to recall without fresh assessment, and may only be imposed by the Crown Court where at least one doctor has given oral evidence."],
    ["Describe the section 45A hybrid order.","A Crown Court disposal combining a prison sentence with a hospital direction and limitation direction. The person is treated in hospital but, if they recover or cease to benefit from treatment, is returned to prison to serve the remainder of the sentence. Introduced by the Crime (Sentences) Act 1997."],
    ["Which sections transfer a sentenced prisoner to hospital?","Section 47 transfers a sentenced prisoner to hospital; section 49 adds restrictions. Section 47 with section 49 is the commonest route by which sentenced prisoners reach secure hospital care."]
  ],
  note:[
    "Section 38 is the interim hospital order used to test the appropriateness of a hospital order.",
    "Section 35 is remand for a report; section 36 remand for treatment; section 48 transfer of an unsentenced prisoner.",
    "The mental health treatment requirement is available in community and suspended sentence orders and is underused.",
    "Imprisonment for public protection was abolished in 2012 but existing prisoners remain affected.",
    "Bed availability, not the legal test, most often obstructs a hospital order."
  ],
  refs:["eastman","forrester"] };

TEACH["12.2.4"] = { free:false,
  simple:"A court report is not a clinical letter with the addressee changed. It answers a question a lawyer asked, in an order a judge can follow, with the reasoning visible so that it can be attacked. If your reasoning cannot be attacked, you have not shown it.",
  teach:[
    "Establish the instruction first. Who instructs you, what question they are asking, and by when. Write to the question asked, and if the question is wrong say so and answer the right one as well.",
    "The duty of the expert is to the court and overrides any obligation to the instructing party. State this in the report, as the Criminal Procedure Rules require.",
    "Structure: instructions and question; sources of information listed individually; the interview, with date, place, duration and who was present; background history; account of the offence; mental state examination; opinion; and answers to the specific questions.",
    "List every source separately: interview, medical records with dates, depositions, witness statements, previous convictions, and any collateral interview. An assertion without a source is worthless in cross-examination.",
    "Distinguish rigorously between what you observed, what you were told and by whom, and what you concluded. The commonest failing in trainee reports is presenting hearsay as finding.",
    "State the consent and confidentiality warning given at the outset, in the report, in the words used.",
    "The opinion must give reasons. A conclusion without the reasoning that produced it cannot be tested, and an untestable opinion is properly given no weight.",
    "Address the range of opinion. Where competent psychiatrists could reasonably disagree, say so, give the alternative, and say why you prefer your own view.",
    "Do not trespass on the ultimate issue. Whether the defendant is guilty, or whether they are fit to plead, is for the court. You provide the clinical findings that inform it.",
    "Avoid technical language, or define it on first use. A report a jury cannot follow has failed regardless of its accuracy.",
    "Give a diagnosis using a recognised classification and state which. For diminished responsibility, the recognised medical condition requirement makes the classification explicit and necessary.",
    "Address the specific statutory limbs where a defence is in issue, in the statutory language, one by one. Do not paraphrase the test.",
    "Risk should be formulated, not scored. Give the scenarios, the factors that raise and lower risk in each, and what would manage it, rather than a category.",
    "Include a declaration of truth and a statement of compliance with the Criminal Procedure Rules, and sign and date it.",
    "Write knowing it will be read aloud. Every sentence should survive being quoted back to you slowly by a barrister."
  ],
  cards:[
    ["What must a court report state about the expert's duty?","That the expert's duty is to the court and overrides any obligation to the party instructing or paying them, as required by the Criminal Procedure Rules, together with a declaration of truth and a statement of compliance."],
    ["How should sources of information be handled in a court report?","Every source listed individually: interview with date, place, duration and those present; medical records with dates; depositions; witness statements; previous convictions; and collateral interviews. Observation, hearsay and conclusion must be rigorously distinguished throughout."],
    ["What is meant by trespassing on the ultimate issue?","Expressing an opinion on the matter reserved to the court, such as guilt or the finding of unfitness. The expert provides the clinical findings and reasoning that inform the decision; the court makes it."],
    ["How should risk be presented in a court report?","As a formulation rather than a score or category: the plausible scenarios, the factors raising and lowering risk in each, and the measures that would manage it."]
  ],
  note:[
    "Write to the question asked; if the question is wrong, say so and answer the correct one too.",
    "Record the consent and confidentiality warning in the words used.",
    "Address the range of reasonable opinion and explain the preference.",
    "Address statutory limbs individually and in statutory language.",
    "Define or avoid technical terms; the report must be followable by a jury."
  ],
  refs:["eastman","puriforen","forrester"] };

TEACH["12.2.5"] = { free:false,
  simple:"In the witness box you are not defending your patient and you are not defending yourself. You are answering a question, accurately, in front of someone paid to make you look wrong. The composure comes from having prepared, not from being clever.",
  teach:[
    "Two roles. A professional witness gives evidence of fact from their own clinical involvement. An expert witness gives an opinion and may comment on matters they were not involved in.",
    "Only an expert may give opinion evidence. A treating clinician called as a professional witness who begins offering opinions on matters beyond their involvement is exceeding their role.",
    "Being the treating clinician and the expert in the same case is generally to be avoided. The duties conflict: the therapeutic relationship and the duty to the court pull in different directions.",
    "Preparation: know your report, know the records, know the dates, and know the parts of your own opinion that are weakest, because those are the parts that will be examined.",
    "Examination in chief is by the party calling you and generally follows the report. Cross-examination is by the other side and is designed to undermine either your conclusion or your credibility. Re-examination allows your side to repair damage.",
    "Answer the question that was asked and then stop. The most common error is continuing to talk, which either supplies material for the next question or damages your own case.",
    "Address the judge or the bench, not the barrister asking the question. Speak slowly enough for the note to be taken.",
    "If you do not know, say so. If you were wrong, say so. Conceding a fair point strengthens rather than weakens the rest of your evidence, and refusing to concede an obvious one destroys it.",
    "Do not become an advocate. The moment you appear to be arguing for a side rather than giving evidence, your evidence loses its weight.",
    "Do not go beyond your expertise. A general adult psychiatrist should decline to give expert opinion on, for example, a specialist neuropsychological question.",
    "Hypothetical questions are legitimate and common. Answer them as hypotheticals, stating the assumption on which the answer depends.",
    "Avoid jargon, and if a term is necessary, define it once in plain words. Nothing loses a court faster than unexplained technical language.",
    "Remain courteous under pressure. Irritation reads as defensiveness, and defensiveness reads as doubt.",
    "The oath or affirmation covers the whole of your evidence, and you remain under it during any adjournment, so do not discuss the case during a break."
  ],
  cards:[
    ["Distinguish a professional witness from an expert witness.","A professional witness gives evidence of fact arising from their own clinical involvement. An expert witness gives opinion evidence and may comment on matters in which they were not personally involved. Only an expert may give opinion evidence."],
    ["Why should the treating clinician usually not act as the expert?","Because the duties conflict. The therapeutic relationship with the patient and the overriding duty to the court pull in different directions, and the independence required of an expert is compromised."],
    ["What are the three stages of oral evidence?","Examination in chief by the party calling the witness, cross-examination by the opposing party, and re-examination by the calling party to repair matters raised in cross-examination."],
    ["What should a witness do when they do not know the answer, or were wrong?","Say so plainly. Conceding a fair point strengthens the remainder of the evidence, whereas refusing to concede an obvious point destroys the witness's credibility."]
  ],
  note:[
    "Answer the question asked and then stop.",
    "Address the judge or bench, not the barrister.",
    "Do not give opinion beyond your own field of expertise.",
    "Hypothetical questions should be answered as hypotheticals with the assumption stated.",
    "The oath continues during adjournments; do not discuss the case in a break."
  ],
  refs:["eastman","forrester"] };

TEACH["12.3.1"] = { free:false,
  simple:"Security in a forensic hospital is not just locks. It is three things working together, and if you get the balance wrong you either have an unsafe ward or a ward so controlled that nobody can recover on it.",
  teach:[
    "The three elements of security are physical, procedural and relational, and they must be balanced. Over-reliance on any one produces failure.",
    "Physical security is the built environment: perimeter fences, locked doors, airlocks, unbreakable glass, alarm systems, closed circuit television, and controlled access to items.",
    "Procedural security is the systems and rules: searching, observation levels, escorting, restricted items, communication monitoring, leave procedures, and incident reporting.",
    "Relational security is the knowledge staff have of the patients and the therapeutic relationship they hold with them. It is the most important and least visible of the three.",
    "See Think Act is the Department of Health guidance framework for relational security, describing the therapeutic team relationship, boundaries, personal world knowledge, and consistency.",
    "The therapeutic paradox is intrinsic: security enables treatment by containing risk, and undermines it by restricting autonomy. The balance must be reviewed continually, not set once.",
    "Levels of security in England: high security, being Broadmoor, Rampton and Ashworth; medium secure units; low secure units; and locked rehabilitation.",
    "High security is for those who present a grave and immediate danger to the public. Around 700 to 800 beds nationally, a very small number.",
    "Medium secure care is the largest part of the estate, with typical admissions measured in years rather than months.",
    "The least restrictive principle applies within forensic care as elsewhere. A person should be held at the lowest level of security consistent with safety, and unnecessary detention at a higher level is itself a harm.",
    "Blanket restrictions, rules applied to everyone regardless of individual risk, are criticised in the Mental Health Act Code of Practice and are a persistent feature of secure services.",
    "Institutionalisation is a real risk of long detention: loss of skills, loss of decision-making, dependence on structure, and loss of relationships outside. It must be actively counteracted.",
    "Relational security fails first when staffing is unstable, because agency and temporary staff cannot hold the knowledge of patients that relational security depends on. Physical and procedural security then have to carry the load, and restriction rises."
  ],
  cards:[
    ["Name the three elements of security and identify the most important.","Physical security, the built environment; procedural security, the systems and rules; and relational security, the staff's knowledge of and therapeutic relationship with patients. Relational security is the most important and the least visible."],
    ["What is See Think Act?","The Department of Health guidance framework for relational security, covering the therapeutic team relationship, boundaries, knowledge of the patient's personal world, and consistency of approach."],
    ["Name the levels of secure care in England.","High security, provided at Broadmoor, Rampton and Ashworth; medium secure units; low secure units; and locked rehabilitation. High security holds a very small number of beds nationally for those posing a grave and immediate danger to the public."],
    ["What is a blanket restriction and why is it criticised?","A rule applied to every patient regardless of individual risk assessment. The Mental Health Act Code of Practice criticises blanket restrictions because they impose restriction without individual justification and undermine the least restrictive principle."]
  ],
  note:[
    "The therapeutic paradox: security enables treatment by containing risk and undermines it by restricting autonomy.",
    "Medium secure admissions are typically measured in years.",
    "Institutionalisation must be actively counteracted during long detention.",
    "Relational security fails first when staffing is unstable, and restriction rises to compensate.",
    "The least restrictive principle applies within forensic services as elsewhere."
  ],
  refs:["forrester","puriforen","nice"] };

TEACH["12.3.2"] = { free:false,
  simple:"A forensic service exists to do two things at once that pull against each other: treat an illness and manage a risk. Everything about how it is built follows from having to do both.",
  teach:[
    "The core components: assessment including court and prison work, inpatient care at graded levels of security, forensic community teams, and a pathway between them in both directions.",
    "The multidisciplinary team is larger than in general psychiatry and includes forensic psychology, occupational therapy, social work, substance misuse expertise, and often a dedicated speech and language therapist.",
    "Speech and language therapy matters more here than elsewhere because of the very high rate of unidentified communication impairment in offender populations, which obstructs every psychological intervention offered.",
    "Care Programme Approach principles apply, with additional statutory processes for restricted patients, Ministry of Justice liaison, and multi-agency arrangements.",
    "MAPPA, Multi-Agency Public Protection Arrangements, coordinate police, probation and prison with health for the management of sexual and violent offenders in the community, at three levels of oversight.",
    "Specific patient needs: treatment of the primary mental illness, substance misuse treatment, offence-focused psychological work, physical health, education and vocational skills, and eventual resettlement.",
    "Offence-focused work is the distinctive intervention. Examples include sexual offending treatment programmes, violence reduction programmes, fire-setting interventions, and enhanced thinking skills.",
    "The evidence for offence-focused programmes is mixed and honesty is required about it. The evaluation of the England and Wales prison sex offender treatment programme in 2017 found no reduction, and in some analyses a small increase, in reoffending, and the programme was discontinued.",
    "That finding matters for how you talk about treatment in reports: a programme completed is not evidence of reduced risk unless the programme itself has been shown to reduce risk.",
    "Length of stay is long. Medium secure admissions commonly run to several years, and the pathway out is frequently obstructed by lack of low secure and community placements rather than by clinical need.",
    "Forensic community services provide intensive follow-up of conditionally discharged patients, with recall available and with much lower caseloads than general community teams.",
    "Women's secure services differ substantially: higher rates of trauma history, personality disorder, self-harm and prior sexual victimisation, and a much smaller estate, which frequently means placement far from home.",
    "Learning disability and autism forensic services are separately commissioned, and following Winterbourne View and Transforming Care the policy direction is towards reducing inpatient beds for this group.",
    "Trauma-informed practice has become central in forensic care, since the great majority of patients in secure settings have significant histories of childhood adversity."
  ],
  cards:[
    ["What is MAPPA?","Multi-Agency Public Protection Arrangements, coordinating police, probation and prison services with health agencies to manage registered sexual and violent offenders in the community, operating at three levels of oversight according to the complexity of the case."],
    ["What did the 2017 evaluation of the prison sex offender treatment programme find?","No reduction, and on some analyses a small increase, in reoffending among participants in England and Wales. The programme was subsequently discontinued, and the finding means that programme completion is not by itself evidence of reduced risk."],
    ["Why is speech and language therapy prominent in forensic services?","Because unidentified speech, language and communication impairment is very highly prevalent in offender populations and obstructs participation in every psychological and offence-focused intervention offered."],
    ["How do women's secure services differ?","Higher rates of trauma history, personality disorder, self-harm and prior sexual victimisation, and a much smaller national estate, which frequently results in placement far from the woman's home area."]
  ],
  note:[
    "Medium secure admissions commonly last several years.",
    "The pathway out is more often blocked by placement availability than by clinical need.",
    "Forensic community teams hold much lower caseloads and retain the power of recall.",
    "Transforming Care directs reduction of inpatient beds for learning disability and autism.",
    "Trauma-informed practice is central given the prevalence of childhood adversity in secure populations."
  ],
  refs:["forrester","puriforen","oxid"] };

TEACH["12.3.3"] = { free:false,
  simple:"Prison holds a greater concentration of mental illness than any hospital in the country, and treats it with a fraction of the resource. That sentence is the whole of prison psychiatry.",
  teach:[
    "Prevalence in prisons is far above the community rate across almost every category. The landmark UK survey by Singleton and colleagues in 1998 remains the reference point.",
    "Personality disorder is present in the majority of prisoners on structured assessment, with antisocial personality disorder predominating in men.",
    "Psychosis affects a small percentage of prisoners, which is around ten times the general population rate. Depression and anxiety disorders are present in a large minority.",
    "Substance dependence is present in a very high proportion on reception, and the reception period is correspondingly dangerous because of withdrawal.",
    "ADHD and autism are substantially over-represented and substantially under-identified. Traumatic brain injury is also markedly over-represented.",
    "Suicide in prisons runs at several times the community rate after adjustment for age and sex. The first days after reception carry the highest risk of any period in custody.",
    "Risk factors for prison suicide: remand rather than sentenced status, the early period after reception, single-cell occupancy, recent bad news from court or family, life sentence, and index offence of violence or sexual offence.",
    "ACCT, Assessment Care in Custody and Teamwork, is the multidisciplinary case management process for prisoners identified as at risk of suicide or self-harm in England and Wales.",
    "Deaths in custody are subject to a mandatory independent investigation by the Prisons and Probation Ombudsman and to an inquest with a jury, and Article 2 of the European Convention may be engaged.",
    "Treatment in prison is constrained. There is no lawful authority to treat mental disorder without consent in prison: the Mental Health Act does not apply to prison healthcare.",
    "That single fact governs prison psychiatry. A prisoner who lacks capacity and refuses treatment for a psychotic illness must be transferred to hospital under section 47 or 48 in order to be treated.",
    "Transfer delays are a persistent problem. Guidance sets an expectation of transfer within 28 days of the decision, and it is frequently exceeded.",
    "Prison mental health in-reach teams provide secondary care within prisons, modelled on community mental health teams and generally under-resourced relative to need.",
    "Continuity at release is the weakest link. The first weeks after release carry very high risk of drug-related death, of self-harm and of relapse, and planned handover to community services frequently fails.",
    "Novel psychoactive substances, particularly synthetic cannabinoids, have transformed prison psychiatry over the last decade, producing acute psychosis, agitation, collapse and death, and are poorly detected by standard drug screens."
  ],
  cards:[
    ["Why can a prisoner not be treated for mental disorder against their will in prison?","Because the Mental Health Act does not apply to prison healthcare, so there is no lawful authority to treat mental disorder without consent in a prison. A prisoner requiring such treatment must be transferred to hospital under section 47 or section 48."],
    ["What is ACCT?","Assessment Care in Custody and Teamwork, the multidisciplinary case management process used in prisons in England and Wales for prisoners identified as at risk of suicide or self-harm."],
    ["When is the risk of suicide in custody highest, and what are the risk factors?","In the first days after reception. Risk factors include remand rather than sentenced status, single-cell occupancy, recent adverse news from court or family, a life sentence, and an index offence of violence or a sexual offence."],
    ["What is the epidemiological picture of mental disorder in prisons?","Rates far above community levels across almost every category: personality disorder in the majority on structured assessment, psychosis at around ten times the community rate, high rates of depression and anxiety, very high rates of substance dependence on reception, and marked over-representation of ADHD, autism and traumatic brain injury."]
  ],
  note:[
    "Singleton et al, 1998, remains the reference UK prison psychiatric morbidity survey.",
    "Transfer to hospital is expected within 28 days of the decision and this is frequently exceeded.",
    "Deaths in custody require independent investigation by the Prisons and Probation Ombudsman and a jury inquest.",
    "The weeks after release carry very high risk of drug-related death and self-harm.",
    "Synthetic cannabinoids are poorly detected by standard drug screening."
  ],
  refs:["forrester","puriforen","semaddict"] };

TEACH["12.3.4"] = { free:false,
  simple:"Risk assessment is not fortune telling and it is not a number. It is a description of the circumstances in which this particular person becomes dangerous, so that those circumstances can be watched for and interrupted.",
  teach:[
    "Three approaches. Unstructured clinical judgement, which performs barely better than chance. Actuarial prediction, which uses fixed statistical predictors and forbids clinical override. Structured professional judgement, which uses empirically derived items to guide, but not to determine, a clinical formulation.",
    "Structured professional judgement is the recommended approach in UK practice, combining the reliability of a defined item set with the flexibility to formulate.",
    "HCR-20, now in version 3, is the standard violence instrument: twenty items across ten Historical, five Clinical and five Risk management domains. The Clinical and Risk management items are dynamic and are therefore the targets of intervention.",
    "The static Historical items cannot change and set the baseline. Concentrating a management plan on static factors is a common error, since nothing can be done about them.",
    "PCL-R, the Hare Psychopathy Checklist Revised, has twenty items scored from semi-structured interview and file review, requires specific training, and is a robust predictor of violent recidivism.",
    "SVR-20 and Static-99R are the standard sexual offending instruments. SVR-20 is a structured professional judgement tool; Static-99R is actuarial and based on static factors alone.",
    "SARA, the Spousal Assault Risk Assessment, is used for intimate partner violence; START, the Short-Term Assessment of Risk and Treatability, is designed for short-term dynamic risk across multiple domains including risk to self.",
    "Instruments perform well at the group level and poorly at the individual level. A high-risk classification identifies a group with an elevated rate; it does not tell you what this person will do.",
    "The base rate problem: where the outcome is rare, even a good instrument generates a very large number of false positives. This is why serious violence cannot be predicted and why prediction is the wrong ambition.",
    "Sensitivity and specificity trade against each other. A threshold set to miss nobody detains a great many people who would never have offended.",
    "Formulation, not classification, is the output. Scenario planning asks what would this person's violence look like, in what circumstances, towards whom, with what warning signs, and what would interrupt it.",
    "Distinguish static factors, which do not change, from dynamic factors, which can be stable-dynamic, changing slowly, or acute-dynamic, changing rapidly. Acute-dynamic factors are what warrant urgent action.",
    "Protective factors are assessed as well as risk factors, using instruments such as the SAPROF. Risk work that lists only deficits produces plans that only restrict.",
    "The risk management plan must be specific and owned: who does what, by when, what triggers escalation, and how the plan is communicated to those who need it, including the patient wherever possible.",
    "Document the reasoning, not only the conclusion. In an inquiry, what is examined is whether the decision was defensible on the information available at the time, not whether the outcome was bad."
  ],
  cards:[
    ["Compare the three approaches to risk assessment.","Unstructured clinical judgement, which performs barely above chance; actuarial prediction, which applies fixed statistical predictors without clinical override; and structured professional judgement, which uses empirically derived items to guide a clinical formulation and is the recommended UK approach."],
    ["Describe the structure of the HCR-20.","Twenty items in three domains: ten Historical, static factors setting the baseline; five Clinical, current and dynamic; and five Risk management, future and dynamic. The Clinical and Risk management items are the modifiable targets of intervention."],
    ["Explain the base rate problem in violence risk assessment.","Where the outcome of interest is rare, even an instrument with good sensitivity and specificity produces a very large number of false positives. This is why serious violence cannot be reliably predicted at the individual level and why formulation rather than prediction is the appropriate aim."],
    ["Distinguish static, stable-dynamic and acute-dynamic risk factors.","Static factors cannot change, such as age at first offence. Stable-dynamic factors change slowly, such as attitudes or personality traits. Acute-dynamic factors change rapidly, such as intoxication, treatment cessation or relationship breakdown, and are the factors warranting urgent action."],
    ["Name the standard instruments for violence, sexual offending and intimate partner violence.","HCR-20 version 3 and PCL-R for violence; SVR-20 as a structured professional judgement tool and Static-99R as an actuarial tool for sexual offending; SARA for intimate partner violence; and START for short-term dynamic risk including risk to self."]
  ],
  note:[
    "SAPROF assesses protective factors alongside risk factors.",
    "Instruments perform at group level, not individual level.",
    "Scenario planning asks what the violence would look like, towards whom, with what warning signs.",
    "The risk management plan must name who does what, by when, and what triggers escalation.",
    "Inquiries examine whether the decision was defensible on the information available at the time."
  ],
  refs:["puriforen","forrester","nice"] };

TEACH["12.3.5"] = { free:false,
  simple:"The most dangerous moment in a forensic pathway is the day someone leaves. Everything that held the risk in place, the structure, the supervision, the routine, the absence of drugs, disappears at once, and the person has to manage without it.",
  teach:[
    "Conditional discharge under section 42 or by a tribunal applies to restricted patients. Conditions typically cover residence, supervision by a responsible clinician and a social supervisor, treatment compliance, abstinence from substances, and exclusion zones.",
    "Recall to hospital may be ordered by the Secretary of State for Justice at any time and requires no fresh Mental Health Act assessment. This is the defining feature of conditional discharge.",
    "Absolute discharge ends restrictions entirely and may follow a period of successful conditional discharge.",
    "The Supreme Court in the MM case, 2018, held that a conditional discharge cannot lawfully impose conditions amounting to a deprivation of liberty, even with the patient's consent, which constrained a previously common practice.",
    "Community forensic teams provide the follow-up: small caseloads, frequent contact, joint working with probation, and rapid response to deterioration.",
    "MAPPA level determines the multi-agency oversight. Level 1 is ordinary agency management, level 2 is active multi-agency management, and level 3 is reserved for the small number of critical cases requiring senior oversight.",
    "Information sharing across agencies is lawful under MAPPA and is a specific exception to ordinary confidentiality, but it should still be proportionate and recorded.",
    "The known high-risk transitions are release from prison, discharge from hospital, and the ending of statutory supervision. Each requires an explicit plan made in advance.",
    "Substance relapse is the commonest precipitant of both clinical relapse and reoffending after discharge, and abstinence conditions without treatment support achieve very little.",
    "Accommodation is the most frequent practical obstacle. A discharge plan without stable accommodation is not a discharge plan, and delayed discharge for want of housing is common.",
    "Stigma affects resettlement directly: employment, housing and social relationships are all harder to obtain with a forensic history, and the consequent isolation is itself a risk factor.",
    "Victim issues must be addressed. The Victim Contact Scheme allows victims of certain offences to make representations about conditions such as exclusion zones and to be informed of discharge.",
    "Long-term outcome is more favourable than public perception suggests. Serious reoffending by conditionally discharged restricted patients is uncommon, and rates compare favourably with released prisoners.",
    "Recall is used considerably more often than reoffending occurs, which reflects the system's low tolerance of risk rather than a high rate of harm."
  ],
  cards:[
    ["What is the defining feature of conditional discharge?","Liability to recall to hospital by order of the Secretary of State for Justice at any time, without the need for a fresh Mental Health Act assessment."],
    ["What did the MM Supreme Court decision establish?","That a conditional discharge cannot lawfully impose conditions amounting to a deprivation of liberty, even where the patient consents. Decided in 2018, it constrained a previously common practice of discharging patients to closely supervised placements on restrictive conditions."],
    ["Describe the three MAPPA levels.","Level 1, ordinary agency management by a single lead agency; level 2, active multi-agency management requiring regular multi-agency meetings; and level 3, reserved for the small number of critical cases requiring senior management oversight and resource commitment."],
    ["What is the long-term reoffending picture for conditionally discharged restricted patients?","Serious reoffending is uncommon and rates compare favourably with those of released prisoners. Recall occurs considerably more often than reoffending, reflecting a low system tolerance of risk rather than a high rate of harm."]
  ],
  note:[
    "Absolute discharge ends restrictions entirely and may follow successful conditional discharge.",
    "Substance relapse is the commonest precipitant of both clinical relapse and reoffending after discharge.",
    "Accommodation is the most frequent practical obstacle to discharge.",
    "The Victim Contact Scheme allows representations on conditions such as exclusion zones.",
    "Information sharing under MAPPA is a lawful exception to ordinary confidentiality but must remain proportionate."
  ],
  refs:["eastman","forrester","puriforen"] };

TEACH["12.4"] = { free:false,
  simple:"Human rights law is not a background principle in psychiatry. It is the reason particular things are done in particular ways: why detention must be reviewable, why seclusion has time limits, and why a person must be told why they are being held.",
  teach:[
    "The Human Rights Act 1998 brought the European Convention on Human Rights into UK law, making Convention rights enforceable in domestic courts and requiring public authorities, including NHS trusts, to act compatibly with them.",
    "Article 2, the right to life, imposes both a negative duty not to take life and a positive operational duty to protect life where the authority knew or ought to have known of a real and immediate risk.",
    "Rabone v Pennine Care NHS Trust, 2012, extended the Article 2 operational duty to a voluntary psychiatric inpatient, having previously been established for detained patients. This is a key case.",
    "Article 2 also imposes a procedural duty to investigate deaths, which is why deaths of detained patients and deaths in custody require enhanced inquests.",
    "Article 3 prohibits torture and inhuman or degrading treatment, absolutely, with no permitted derogation or balancing. Prolonged seclusion, inadequate care, and restraint that is excessive or degrading may engage it.",
    "Article 5, the right to liberty and security, permits detention of persons of unsound mind but only lawfully and with specified safeguards.",
    "Winterwerp v Netherlands, 1979, sets the conditions for lawful psychiatric detention under Article 5: a true mental disorder, established by objective medical expertise, of a kind or degree warranting compulsory confinement, and persisting for the duration of the detention.",
    "Article 5(4) guarantees the right to have the lawfulness of detention decided speedily by a court. This is the basis of the Mental Health Tribunal and of automatic referral provisions.",
    "HL v United Kingdom, 2004, the Bournewood case, found that the informal detention of a compliant incapacitated patient breached Article 5 because it lacked procedural safeguards. This produced the Deprivation of Liberty Safeguards.",
    "Article 8, the right to respect for private and family life, is qualified rather than absolute. It underpins confidentiality, correspondence, family contact, and the requirement that restrictions be necessary and proportionate.",
    "Article 8 is the article most often engaged in everyday psychiatric practice, through decisions about contact, searching, correspondence, and information sharing.",
    "Article 6 guarantees a fair trial and underlies fitness to plead and the requirement for effective participation in proceedings.",
    "Article 14 prohibits discrimination in the enjoyment of Convention rights, and is relevant to the racial disparities in detention.",
    "The UN Convention on the Rights of Persons with Disabilities, 2006, goes considerably further. Its Committee's General Comment No 1 argues that Article 12 requires the abolition of substitute decision-making and that detention on the basis of disability is never permissible.",
    "That position conflicts directly with UK mental health law, and the tension is unresolved. It is worth knowing that the most serious current critique of compulsory psychiatry comes from disability rights law rather than from clinical evidence.",
    "The Independent Review of the Mental Health Act, 2018, proposed four principles: choice and autonomy, least restriction, therapeutic benefit, and the person as an individual. The Mental Health Bill taking forward that reform has been before Parliament in subsequent sessions."
  ],
  cards:[
    ["What are the Winterwerp criteria?","The conditions for lawful psychiatric detention under Article 5: a true mental disorder, established by objective medical expertise, of a kind or degree warranting compulsory confinement, and persisting throughout the period of detention."],
    ["What did Rabone v Pennine Care establish?","That the Article 2 operational duty to protect life extends to voluntary psychiatric inpatients, not only to detained patients, where the trust knew or ought to have known of a real and immediate risk to life. Decided in 2012."],
    ["What was the Bournewood case and what did it produce?","HL v United Kingdom, 2004, in which the informal detention of a compliant, incapacitated patient was found to breach Article 5 for want of procedural safeguards. It led to the creation of the Deprivation of Liberty Safeguards."],
    ["Which Convention article is most often engaged in everyday psychiatric practice?","Article 8, the qualified right to respect for private and family life, which underpins confidentiality, correspondence, family contact and searching, and requires that any restriction be necessary and proportionate."],
    ["How does the UN CRPD conflict with UK mental health law?","The CRPD Committee's General Comment No 1 interprets Article 12 as requiring the abolition of substitute decision-making and as prohibiting detention on the basis of disability. This conflicts directly with the framework of the Mental Health Act, and the tension remains unresolved."]
  ],
  note:[
    "Article 3 is absolute and permits no balancing or derogation.",
    "Article 5(4) requires speedy judicial review of detention and underpins the tribunal system.",
    "Article 6 underlies fitness to plead and effective participation in proceedings.",
    "Article 14 is relevant to racial disparity in detention rates.",
    "The Independent Review of the Mental Health Act, 2018, proposed choice and autonomy, least restriction, therapeutic benefit, and the person as an individual."
  ],
  refs:["eastman","forrester","puriforen"] };
