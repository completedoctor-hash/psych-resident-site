/* =====================================================================
   TEACHING, SECTION 10A — Child and Adolescent Psychiatry, named topics
   9 items: 10.1 to 10.7, 10.9 and 10.10
   The 55 five-aspect disorder rows are in teaching-10b.js and 10c.js
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["10.1"] = { free:true,
  simple:"When a parent is mentally unwell, the child is affected, and not mainly through genes. It is through what happens between them: whether the parent notices the child, responds to them, and is predictable from one day to the next.",
  teach:[
    "Around a quarter to a third of adult mental health service users are parents of dependent children, and this is very often not recorded.",
    "Children of parents with mental illness have a substantially increased risk of psychiatric disorder themselves, of the order of two to three times, through genetic, prenatal, parenting and social pathways.",
    "The pathway matters clinically because parenting and social pathways are modifiable while genes are not.",
    "Maternal depression is the best-studied exemplar. It affects parenting through reduced responsiveness, flattened affect, reduced verbal interaction, inconsistency, and either withdrawal or intrusiveness.",
    "The still-face paradigm demonstrates the mechanism directly: an infant whose mother becomes unresponsive for two minutes shows distress, protest, then withdrawal. Chronic unresponsiveness produces the same pattern chronically.",
    "Effects vary by developmental stage. In infancy the impact is on attachment security and emotional regulation; in the preschool years on language and behaviour; in middle childhood on academic and social functioning; in adolescence on mood and risk behaviour.",
    "Antenatal maternal depression and anxiety affect the child independently of postnatal depression, through fetal programming mechanisms involving cortisol, which is why treating antenatal illness matters in its own right.",
    "Postnatal depression is associated with insecure attachment, poorer cognitive and language development, and increased behavioural problems, mediated substantially through the quality of interaction rather than the diagnosis itself.",
    "The mediating role of interaction is the crucial point: where interaction is preserved, the effect on the child is much reduced, which makes interaction the treatment target.",
    "Treating maternal depression does not automatically improve child outcomes. Interventions must address the interaction directly, and this is a well-replicated and frequently ignored finding.",
    "Parental psychosis affects children through disrupted care, frightening experiences, and sometimes direct inclusion in delusional systems, which is a specific safeguarding concern.",
    "Parental personality disorder, particularly with emotional instability, is associated with inconsistent care and with role reversal in which the child becomes the carer.",
    "Young carers are a specific and largely invisible group. Around 800,000 young carers are estimated in the UK, many caring for a parent with mental illness, with effects on education, peer relationships and their own mental health.",
    "Protective factors: another consistent adult, a good relationship outside the household, the child's own understanding of the illness, and continuity of school.",
    "Explaining the illness to the child is protective. Children fill silence with self-blame, and age-appropriate explanation reduces that reliably.",
    "Cultural variation affects both aetiology and management: what is regarded as illness, who provides care, whether extended family compensates, and whether services are trusted.",
    "In many cultures extended family absorbs the caring role, which is protective but may conceal the problem from services entirely, and its absence in migrant families removes a protection that was present in the country of origin.",
    "Think family is the practical injunction: every adult mental health assessment should establish whether there are dependent children and what their situation is."
  ],
  cards:[
    ["Through what pathways does parental mental illness affect children?","Genetic transmission, prenatal effects including fetal programming through cortisol, disrupted parenting and interaction, and associated social adversity. Parenting and social pathways are modifiable, which is where clinical effort belongs."],
    ["What does the still-face paradigm demonstrate?","That an infant whose caregiver becomes unresponsive for two minutes shows escalating distress, protest and then withdrawal. It demonstrates directly the mechanism by which chronic parental unresponsiveness affects infant emotional regulation."],
    ["Why does treating maternal depression not automatically improve child outcomes?","Because the effect on the child is mediated substantially by the quality of interaction rather than by the diagnosis itself. Interventions must target the parent-infant interaction directly, a well-replicated finding that is frequently ignored in practice."],
    ["What protects children of parents with mental illness?","The presence of another consistent adult, a good relationship outside the household, the child's own age-appropriate understanding of the illness, and continuity of schooling. Explaining the illness is specifically protective because children otherwise fill the silence with self-blame."]
  ],
  note:[
    "Around a quarter to a third of adult mental health service users are parents of dependent children.",
    "Children of parents with mental illness have two to three times the risk of psychiatric disorder.",
    "Antenatal depression and anxiety affect the child independently of postnatal illness.",
    "Around 800,000 young carers are estimated in the UK.",
    "Extended family caring is protective but may conceal the problem from services entirely."
  ],
  refs:["rutter","nice","bhugra"] };

TEACH["10.2"] = { free:true,
  simple:"Bad things happening to a child do not damage them in a simple dose-response way. What matters is how bad, how long, how early, whether it happened within a relationship, and whether anyone was there afterwards.",
  teach:[
    "The Adverse Childhood Experiences studies, Felitti and Anda from 1998, demonstrated a strong graded dose-response relationship between the number of adverse experiences and adult physical and mental health outcomes.",
    "The original ten ACEs: physical, sexual and emotional abuse; physical and emotional neglect; parental separation; domestic violence; household mental illness; household substance misuse; and household member imprisonment.",
    "Four or more ACEs is the conventional threshold, associated with substantially increased risk of depression, suicide attempt, substance misuse, ischaemic heart disease, chronic obstructive pulmonary disease, cancer and early death.",
    "The ACE framework has been criticised: it is retrospective, the categories are crude, it takes no account of severity, timing or protective factors, and it should not be used to screen or predict at individual level.",
    "That criticism matters practically. ACE scores describe populations well and individuals badly, and using them as a risk score is a misuse.",
    "Maternal deprivation: Bowlby's original claim that separation from the mother caused delinquency was overstated. Rutter's Maternal Deprivation Reassessed distinguished privation, the failure ever to form an attachment, from deprivation, the loss of one already formed.",
    "Rutter showed that the damaging factor was disruption and discord rather than separation itself, and that many effects were reversible with subsequent good care.",
    "The English and Romanian Adoptees study followed children adopted from Romanian institutions and is the key evidence: duration of deprivation before adoption predicted outcome, with a threshold around six months.",
    "Children adopted before six months largely caught up. Those deprived beyond six months showed persisting deficits into adulthood, including quasi-autistic features, disinhibited social engagement, inattention and cognitive impairment.",
    "That finding supports a sensitive period rather than a critical period: recovery is possible but becomes progressively less complete with longer deprivation.",
    "Child abuse effects: sexual abuse is associated with depression, PTSD, self-harm, substance misuse, eating disorders, personality disorder, revictimisation and psychosis.",
    "The association between childhood adversity and psychosis is now robust and dose-dependent, and has changed how psychosis aetiology is taught.",
    "Emotional abuse and neglect are as damaging as physical abuse in most outcome studies, and are far less often identified or acted upon.",
    "Neglect is the commonest form of maltreatment and the one with the strongest effects on brain development, and it is under-represented in safeguarding activity relative to its frequency.",
    "Chronic and life-threatening illness in childhood affects development through school absence, restricted peer contact, dependency, altered body image, and parental anxiety and overprotection.",
    "Effects on siblings of a chronically ill child are real and rarely addressed.",
    "Resilience is not a trait the child either has or lacks. It arises from the child, the family and the wider environment together, and the single most consistent protective factor is at least one stable, supportive relationship with a responsive adult.",
    "Steeling effects: manageable adversity with support can increase later resilience, whereas overwhelming adversity does not. The distinction is the presence of support and the dose."
  ],
  cards:[
    ["What did the ACE studies show, and what are their limitations?","A strong graded dose-response relationship between the number of adverse childhood experiences and adult physical and mental health outcomes, with four or more the conventional threshold. Limitations: retrospective recall, crude categories, no account of severity, timing or protective factors, and poor individual-level prediction, so ACE scores should not be used to screen or predict for individuals."],
    ["Distinguish privation from deprivation.","Rutter's distinction: privation is the failure ever to form an attachment; deprivation is the loss or disruption of an attachment already formed. Rutter showed that the damaging factor was disruption and discord rather than separation itself, and that many effects were reversible with subsequent good care."],
    ["What did the English and Romanian Adoptees study demonstrate?","That the duration of institutional deprivation before adoption predicted outcome, with a threshold around six months. Children adopted before six months largely caught up, whereas those deprived beyond six months showed persisting deficits into adulthood including quasi-autistic features, disinhibited social engagement, inattention and cognitive impairment. This supports a sensitive rather than a critical period."],
    ["Which form of maltreatment is commonest and most damaging to brain development?","Neglect, which is the commonest form of maltreatment, has the strongest effects on brain development, and is under-represented in safeguarding activity relative to its frequency. Emotional abuse and neglect are as damaging as physical abuse in most outcome studies."],
    ["What is the most consistent protective factor in childhood adversity?","At least one stable, supportive relationship with a responsive adult. Resilience arises from the child, family and wider environment together rather than being a fixed trait the child either possesses or lacks."]
  ],
  note:[
    "The original ten ACEs cover abuse, neglect and five categories of household dysfunction.",
    "The association between childhood adversity and psychosis is robust and dose-dependent.",
    "Chronic childhood illness affects development through absence, dependency, body image and parental overprotection.",
    "Effects on siblings of a chronically ill child are real and rarely addressed.",
    "Steeling effects require manageable adversity with support; overwhelming adversity does not produce them."
  ],
  refs:["rutter","nice","companion"] };

TEACH["10.3"] = { free:false,
  simple:"Child mental health services are organised in tiers, from a teacher noticing something to an inpatient unit, and most of the country's problems are in the gaps between tiers rather than within them.",
  teach:[
    "The historical four-tier CAMHS model: Tier 1, universal services including schools, general practice and health visitors; Tier 2, targeted individual specialists; Tier 3, specialist multidisciplinary community teams; Tier 4, highly specialist inpatient and day services.",
    "The tier model has been formally superseded by the THRIVE framework, which groups children by need rather than by service level: Thriving, Getting Advice, Getting Help, Getting More Help, and Getting Risk Support.",
    "THRIVE was adopted because the tier model produced waiting lists at each boundary and encouraged services to define themselves by what they excluded.",
    "Getting Risk Support is the important addition: it names a group who need containment and safety planning rather than treatment, and who were previously discharged as unsuitable.",
    "Mental Health Support Teams in schools, introduced from 2018, provide early intervention within educational settings and are the main structural expansion of recent years.",
    "The multidisciplinary team: child and adolescent psychiatry, clinical psychology, nursing, family therapy, social work, occupational therapy, speech and language therapy, and primary mental health workers.",
    "The psychiatrist's specific role: diagnostic formulation in complex presentations, prescribing, physical health, risk assessment, statutory work under the Mental Health Act and Children Act, and consultation to the team and to other agencies.",
    "Prescribing in children carries specific responsibilities: much use is off-label, growth and cardiovascular monitoring is required, and consent involves both the young person and those with parental responsibility.",
    "Agencies involved: education including SENCOs and educational psychology; children's social care; the youth justice system; paediatrics; voluntary sector; and the family courts.",
    "The Local Authority Designated Officer handles allegations against people working with children; the SENCO coordinates special educational needs; the Virtual School Head oversees the education of looked-after children.",
    "Education, Health and Care Plans replaced statements of special educational needs, are statutory, cover up to age 25, and require health input where health needs are identified.",
    "Looked-after children have markedly raised rates of mental disorder, around 45 per cent in surveys, and require initial and annual health assessments with a designated doctor and nurse.",
    "Transition to adult services is the single most criticised feature of the system. Around a quarter to a half of those needing continued care fall out at the boundary.",
    "Transition fails because thresholds differ: adult services often do not accept ADHD, autism, or emerging personality difficulty at the level CAMHS treated them.",
    "Waiting times are the dominant operational problem, with substantial numbers waiting more than a year for treatment in some areas, and referral rates having risen sharply since 2020.",
    "Neurodevelopmental assessment waiting lists in particular have grown to several years in many areas, which is a distinct system failure from the mental health waiting lists."
  ],
  cards:[
    ["What replaced the four-tier CAMHS model and why?","The THRIVE framework, grouping children by need rather than service level into Thriving, Getting Advice, Getting Help, Getting More Help and Getting Risk Support. The tier model was superseded because it produced waiting lists at each boundary and encouraged services to define themselves by what they excluded."],
    ["What is Getting Risk Support?","The THRIVE category naming children who need containment, safety planning and multi-agency risk management rather than a treatment intervention, a group previously discharged from services as unsuitable for treatment."],
    ["What is an Education, Health and Care Plan?","The statutory plan that replaced statements of special educational needs, covering children and young people up to age 25, setting out education, health and social care provision, and requiring health service input where health needs are identified."],
    ["Why does transition to adult services fail?","Because thresholds differ between services. Adult services frequently do not accept ADHD, autism spectrum conditions or emerging personality difficulty at the level at which CAMHS was treating them, so a quarter to a half of those needing continued care fall out at the boundary."]
  ],
  note:[
    "Mental Health Support Teams in schools were introduced from 2018.",
    "Looked-after children have around 45 per cent prevalence of mental disorder in surveys.",
    "The Local Authority Designated Officer handles allegations against people working with children.",
    "Much prescribing in children is off-label and requires growth and cardiovascular monitoring.",
    "Neurodevelopmental assessment waiting lists have grown to several years in many areas."
  ],
  refs:["nice","rutter","companion"] };

TEACH["10.4"] = { free:true,
  simple:"Every doctor who sees children has a duty here, and it is not to investigate. It is to notice, to record exactly what you saw and heard, and to tell the right people the same day.",
  teach:[
    "Four categories of abuse in UK statutory guidance: physical abuse, emotional abuse, sexual abuse and neglect. Working Together to Safeguard Children is the statutory guidance in England.",
    "Neglect is the commonest category, accounting for the largest share of child protection plans, and includes failure to provide food, clothing, shelter, supervision, medical care and emotional responsiveness.",
    "Emotional abuse is the hardest to evidence and the most frequently present alongside the others. It rarely occurs alone but rarely occurs in isolation from the rest either.",
    "Fabricated or induced illness, formerly Munchausen syndrome by proxy, is a form of abuse in which a carer fabricates or induces illness in a child. It is managed as child abuse through safeguarding, not as a parental diagnosis.",
    "Child sexual exploitation and county lines criminal exploitation are recognised forms of abuse, and the young person frequently does not perceive themselves as a victim, which is part of the grooming.",
    "Female genital mutilation carries a mandatory reporting duty in England and Wales: regulated professionals must report known cases in under-18s to the police.",
    "Physical indicators: injuries inconsistent with the explanation or with the child's developmental stage; injuries in unusual sites such as the ears, neck, buttocks and inner thighs; bruising in a non-mobile infant; and delayed presentation.",
    "Bruising in a child who is not independently mobile is the single most important physical sign and warrants immediate child protection referral.",
    "Torn frenulum, retinal haemorrhage, metaphyseal fractures, posterior rib fractures and multiple fractures of different ages are strongly associated with inflicted injury.",
    "Behavioural indicators: developmental delay, failure to thrive, frozen watchfulness, indiscriminate friendliness, sexualised behaviour inappropriate for age, self-harm, and abrupt behavioural change.",
    "Sexualised behaviour outside the normal developmental range is a specific indicator warranting referral rather than observation.",
    "Risk factors: parental mental illness, substance misuse, domestic abuse, parental learning disability, social isolation, and disability in the child. The toxic trio of domestic abuse, parental substance misuse and parental mental illness is the recurring combination in serious case reviews.",
    "Disabled children are abused at substantially higher rates than non-disabled children and are less likely to be believed and less likely to secure a prosecution.",
    "What to do: recognise, record, refer, and do not delay. Refer to children's social care the same day where there is a concern, and to the police where a crime may have been committed.",
    "Do not investigate. Do not repeatedly question the child, do not attempt to establish whether abuse occurred, and do not conduct an intimate examination unless competent to do so.",
    "Record verbatim what the child said, in their words, with the question you asked, the date, the time and who was present. Use body maps for injuries.",
    "Consent and confidentiality: safeguarding overrides confidentiality. Inform parents unless doing so would place the child at increased risk, would impede an investigation, or the concern relates to sexual abuse or fabricated illness.",
    "The child's welfare is paramount under the Children Act 1989, section 1.",
    "Section 47 requires the local authority to investigate where there is reasonable cause to suspect significant harm. Section 17 covers children in need who are not suffering significant harm.",
    "Emergency protection orders, police protection powers lasting 72 hours, and care and supervision orders are the legal mechanisms available.",
    "The recurring lesson of every serious case review is the same: information was held in separate agencies and was never assembled into one picture."
  ],
  cards:[
    ["Name the four categories of abuse and identify the commonest.","Physical abuse, emotional abuse, sexual abuse and neglect. Neglect is the commonest and accounts for the largest share of child protection plans. Working Together to Safeguard Children is the statutory guidance in England."],
    ["What is the single most important physical sign of possible abuse?","Bruising in a child who is not independently mobile, which warrants immediate child protection referral. Torn frenulum, retinal haemorrhage, metaphyseal fractures, posterior rib fractures and multiple fractures of different ages are also strongly associated with inflicted injury."],
    ["What should a clinician do, and not do, when abuse is suspected?","Recognise, record and refer the same day to children's social care, and to police where a crime may have been committed. Do not investigate, do not question the child repeatedly, and do not attempt to establish whether abuse occurred. Record verbatim what the child said in their own words, with the question asked, date, time and who was present."],
    ["What is the toxic trio?","Domestic abuse, parental substance misuse and parental mental illness, the combination that recurs most frequently in serious case reviews of child deaths and serious harm."],
    ["When should parents not be informed of a safeguarding referral?","Where informing them would place the child at increased risk, would impede a police or social care investigation, or where the concern relates to sexual abuse or to fabricated or induced illness."]
  ],
  note:[
    "The child's welfare is paramount under section 1 of the Children Act 1989.",
    "Section 47 triggers investigation where there is reasonable cause to suspect significant harm; section 17 covers children in need.",
    "Female genital mutilation carries a mandatory reporting duty for known cases in under-18s.",
    "Disabled children are abused at substantially higher rates and are less likely to be believed.",
    "Every serious case review finds information held separately and never assembled into one picture."
  ],
  refs:["rutter","eastman","nice"] };

TEACH["10.5"] = { free:false,
  simple:"Children express distress through their bodies more than adults do, because the body is the vocabulary available before the emotional one develops. A stomach ache before school is not a lie.",
  teach:[
    "Somatic presentation of psychological distress is the norm in childhood, not the exception, and becomes less prominent as emotional vocabulary develops.",
    "Recurrent abdominal pain affects a large minority of school-age children, and organic pathology is found in a small minority. It is frequently associated with anxiety in the child and in the parent.",
    "Headache, abdominal pain, limb pain and fatigue are the commonest functional presentations, and they cluster in the same children.",
    "School refusal is not truancy. School refusal involves anxiety, the parents know where the child is, the child stays at home, and there is often somatic complaint. Truancy involves concealment, the parents do not know, and it is associated with conduct problems.",
    "That distinction determines management entirely: school refusal is treated as anxiety with graded return; truancy is addressed through the conduct and social context.",
    "Functional neurological symptoms occur in children, including non-epileptic attacks, gait disturbance and weakness, and are diagnosed on positive signs as in adults.",
    "Chronic fatigue syndrome in adolescents is associated with school absence and social withdrawal, and the 2021 NICE guideline substantially revised earlier recommendations on activity management.",
    "Psychiatric presentation of physical disorder: hyperthyroidism as anxiety, hypothyroidism as depression and cognitive slowing, Wilson's disease as psychiatric or behavioural change in an adolescent, and temporal lobe epilepsy as fear or behavioural disturbance.",
    "Wilson's disease should be considered in any adolescent with new psychiatric symptoms accompanied by movement abnormality or deranged liver function, since it is treatable and is missed.",
    "Autoimmune encephalitis, particularly anti-NMDA receptor encephalitis, presents in children and adolescents with psychiatric symptoms preceding seizures and movement disorder, and is treatable.",
    "Brain tumours may present with personality change, headache and vomiting, and any child with new psychiatric symptoms plus neurological signs requires imaging.",
    "Medication effects: corticosteroids, antiepileptics particularly levetiracetam, montelukast which carries a specific warning for neuropsychiatric effects, and stimulants.",
    "Montelukast is worth knowing specifically: it is widely prescribed in childhood asthma and carries an MHRA warning for neuropsychiatric reactions including nightmares, anxiety, depression and suicidal thinking.",
    "Chronic physical illness raises the risk of psychiatric disorder in children roughly twofold, with the effect greatest where the illness involves the brain.",
    "Epilepsy carries the highest psychiatric comorbidity of any childhood physical condition, with rates several times those of other chronic illnesses, reflecting the brain involvement.",
    "Adherence in adolescence is a major clinical problem across chronic illness, particularly diabetes, where insulin omission for weight control is specifically dangerous.",
    "Paediatric liaison services address this overlap, and joint working with paediatrics is more effective than referral between services.",
    "Assessment principles: take the physical symptoms seriously, examine properly, avoid repeated investigation, give a positive explanation, and work on function rather than on symptom elimination."
  ],
  cards:[
    ["Distinguish school refusal from truancy.","School refusal involves anxiety, the child remains at home with the parents' knowledge, and somatic complaints are common. Truancy involves concealment, the parents do not know where the child is, and it is associated with conduct problems. The distinction determines management entirely."],
    ["Which physical conditions present psychiatrically in adolescence?","Hyperthyroidism as anxiety, hypothyroidism as depression and cognitive slowing, Wilson's disease as psychiatric or behavioural change with movement abnormality, temporal lobe epilepsy as fear or behavioural disturbance, anti-NMDA receptor encephalitis as psychosis preceding seizures, and brain tumour as personality change with headache."],
    ["Which commonly prescribed paediatric drug carries a neuropsychiatric warning?","Montelukast, widely used in childhood asthma, which carries an MHRA warning for neuropsychiatric reactions including nightmares, anxiety, depression and suicidal thinking."],
    ["Which chronic physical illness carries the highest psychiatric comorbidity in children?","Epilepsy, with rates several times those of other chronic childhood illnesses, reflecting direct brain involvement. Chronic physical illness overall roughly doubles the risk of psychiatric disorder."]
  ],
  note:[
    "Somatic presentation of distress is the norm in childhood, not the exception.",
    "Recurrent abdominal pain affects a large minority of school-age children with organic pathology in few.",
    "Wilson's disease is treatable and is missed; consider it with movement or liver abnormality.",
    "Insulin omission for weight control in adolescent diabetes is specifically dangerous.",
    "The 2021 NICE guideline substantially revised recommendations on chronic fatigue syndrome."
  ],
  refs:["rutter","nice","lishman"] };

TEACH["10.6"] = { free:false,
  simple:"Nothing in child psychiatry has one cause. What matters is how the child's own make-up meets what happens around them, and the same event does very different things to different children.",
  teach:[
    "Aetiology in child psychiatry is multifactorial and probabilistic. Single-cause explanations are always wrong, and the useful question is how factors combine.",
    "Individual factors: genetic vulnerability, temperament, intelligence, physical health, neurodevelopmental status, and language ability.",
    "Temperament, from Thomas and Chess: the easy child, the difficult child, and the slow to warm up child. Goodness of fit between temperament and parenting environment predicts outcome better than temperament alone.",
    "Goodness of fit is the key concept: a difficult temperament with a tolerant, structured parent may do well, while the same temperament with an inconsistent or overwhelmed parent does not.",
    "Language impairment is a major and under-recognised individual factor, associated with behavioural difficulty, peer problems, school failure and later offending.",
    "Familial factors: parental mental illness, parenting style, discord and hostility, attachment quality, family structure, and sibling relationships.",
    "Parental discord rather than separation itself predicts child outcome. Children in high-conflict intact families do worse than those in low-conflict separated families, which is a well-replicated finding.",
    "Parenting style, from Baumrind: authoritative combining warmth with structure predicts the best outcomes; authoritarian, permissive and neglectful styles all predict worse.",
    "Coercive family process, from Patterson, describes escalating cycles in which the child's aversive behaviour terminates parental demands, negatively reinforcing both parties into escalation. It is the model behind parent training.",
    "Social and environmental factors: poverty, housing, neighbourhood, school quality, peer group, discrimination, and access to services.",
    "Poverty is the single largest social determinant of child mental health, operating through parental stress, housing, nutrition, exposure to adversity and reduced access to help.",
    "School factors matter independently. Rutter's Fifteen Thousand Hours showed that school ethos, expectations and organisation predicted pupil outcomes independently of intake.",
    "Peer relationships: bullying victimisation is causally associated with later depression, anxiety, self-harm and psychosis, with a dose-response relationship, established in longitudinal and twin studies.",
    "Interaction is the central principle. Gene-environment interaction means genetic vulnerability is expressed only under certain environmental conditions; gene-environment correlation means genes influence which environments a child experiences.",
    "Three types of gene-environment correlation: passive, where parents provide both genes and environment; evocative, where the child's characteristics elicit responses; and active, where the child selects environments.",
    "Differential susceptibility, from Belsky, proposes that the same children who do worst in adverse environments do best in supportive ones, so vulnerability genes are better described as plasticity genes.",
    "That reframing matters clinically because it predicts that the most difficult children benefit most from good intervention, not least.",
    "Equifinality means different pathways lead to the same outcome; multifinality means the same starting point leads to different outcomes. Both are fundamental to developmental psychopathology.",
    "Timing matters: the same experience has different effects at different developmental stages, and sensitive periods exist for attachment, language and social development."
  ],
  cards:[
    ["What is goodness of fit?","Thomas and Chess's concept that outcome depends on the match between the child's temperament and the demands and style of the caregiving environment, rather than on temperament alone. A difficult temperament with a tolerant, structured parent may do well, while the same temperament with an overwhelmed parent does not."],
    ["Describe coercive family process.","Patterson's model in which a child's aversive behaviour successfully terminates a parental demand, negatively reinforcing the child, while the parent's eventual capitulation is reinforced by the cessation of the child's behaviour. Both parties escalate over successive cycles. It provides the rationale for parent training programmes."],
    ["Distinguish the three types of gene-environment correlation.","Passive, where parents provide both the genes and the environment; evocative, where the child's genetically influenced characteristics elicit particular responses from others; and active, where the child actively selects environments consistent with their genetic predispositions."],
    ["What is differential susceptibility?","Belsky's proposal that the children who fare worst in adverse environments are the same children who fare best in supportive ones, so that so-called vulnerability genes are better described as plasticity genes. It predicts that the most difficult children benefit most from good intervention."],
    ["Define equifinality and multifinality.","Equifinality is the principle that different developmental pathways can lead to the same outcome. Multifinality is the principle that the same starting point can lead to different outcomes. Both are fundamental to developmental psychopathology."],
    ["What does parental separation research show?","That parental discord rather than separation itself predicts child outcome. Children in high-conflict intact families do worse than children in low-conflict separated families, a well-replicated finding."]
  ],
  note:[
    "Baumrind: authoritative parenting combining warmth with structure predicts best outcomes.",
    "Poverty is the single largest social determinant of child mental health.",
    "Rutter's Fifteen Thousand Hours showed school ethos predicts outcomes independently of intake.",
    "Bullying victimisation is causally associated with later depression, self-harm and psychosis.",
    "Language impairment is a major under-recognised factor in behavioural difficulty and later offending."
  ],
  refs:["rutter","gross","companion"] };

TEACH["10.7"] = { free:false,
  simple:"For most childhood problems the treatment is not given to the child. It is given to the parents, or the school, or the family, because that is where the child lives.",
  teach:[
    "The general principle in younger children is to intervene through the environment: parents, school and family. Direct individual therapy becomes progressively more appropriate with age.",
    "Parent training programmes are the first-line intervention for conduct problems in children under about eleven. NICE recommends group-based parent training as first-line.",
    "Named programmes with evidence: Incredible Years, Triple P and Parent-Child Interaction Therapy. They share components of play, praise, clear commands, consistent consequences and ignoring minor misbehaviour.",
    "Parent training works by interrupting coercive family process, replacing escalation with consistency and increasing positive attention.",
    "For ADHD, NICE recommends parent training for pre-school children as first-line without medication, and medication as first-line for school-age children with persistent significant impairment after environmental modification.",
    "For anxiety disorders in children, CBT is first-line, delivered individually or in groups, and parent-delivered CBT is effective in younger children.",
    "For depression in children and young people, NICE recommends digital or group CBT, group non-directive supportive therapy or group IPT first for mild depression, and individual CBT, IPT, family therapy or psychodynamic therapy for moderate to severe.",
    "Fluoxetine is the only antidepressant recommended as first-line in under-18s, and only in combination with psychological therapy, because it is the only one with a favourable risk-benefit profile in this age group.",
    "The antidepressant suicidality warning applies: SSRIs in under-18s are associated with a small increase in suicidal thinking and behaviour, which requires close monitoring at initiation and dose change but does not preclude use.",
    "For OCD in children, CBT with exposure and response prevention is first-line, with sertraline or fluoxetine added for moderate to severe disorder.",
    "For PTSD in children, trauma-focused CBT adapted for the developmental stage is first-line, with EMDR considered where trauma-focused CBT is unsuitable.",
    "For anorexia nervosa in children and young people, anorexia-nervosa-focused family therapy is first-line, and it has the strongest evidence of any treatment in this age group.",
    "For autism, there is no medication for the core features. Interventions target communication, social understanding, sensory needs, education and parental understanding.",
    "For challenging behaviour in autism or intellectual disability, functional assessment and positive behaviour support come first, with medication reserved and reviewed under the STOMP and STAMP programmes.",
    "Systemic family therapy has evidence across conduct problems, eating disorders and self-harm, and works on interaction rather than on the identified patient.",
    "Multisystemic therapy for serious antisocial behaviour in adolescents works intensively across family, school and peer systems, with evidence for reduced offending and out-of-home placement, though effects vary by implementation quality.",
    "School-based intervention is under-used and reaches children who never reach services, and Mental Health Support Teams were established for exactly this reason.",
    "Care pathways: access is through primary care, schools, paediatrics, social care and self-referral in some areas. Single points of access have improved navigation but not waiting.",
    "The commonest reason evidence-based intervention is not received is not that it does not exist but that the child never reaches the service that provides it."
  ],
  cards:[
    ["What is first-line for conduct problems in children?","Group-based parent training programmes, recommended by NICE for children under about eleven. Named programmes include Incredible Years, Triple P and Parent-Child Interaction Therapy, sharing components of child-led play, praise, clear commands, consistent consequences and planned ignoring of minor misbehaviour."],
    ["Which antidepressant is recommended first-line in under-18s and why?","Fluoxetine, and only in combination with psychological therapy, because it is the only antidepressant with a favourable risk-benefit profile demonstrated in this age group. SSRIs in under-18s carry a small increase in suicidal thinking and behaviour requiring close monitoring at initiation and dose change."],
    ["What does NICE recommend first-line for ADHD by age?","Parent training for pre-school children, without medication. For school-age children with persistent significant impairment after environmental modification, medication is first-line, with methylphenidate the usual initial choice."],
    ["Which treatment has the strongest evidence in adolescent anorexia nervosa?","Anorexia-nervosa-focused family therapy, which has the strongest evidence of any treatment for this disorder in children and young people and is NICE first-line."],
    ["What is multisystemic therapy?","An intensive intervention for serious antisocial behaviour in adolescents, working simultaneously across family, school and peer systems in the young person's own environment, with evidence for reduced offending and reduced out-of-home placement, though effects depend heavily on implementation quality."]
  ],
  note:[
    "Intervene through the environment in younger children; direct therapy becomes more appropriate with age.",
    "CBT is first-line for childhood anxiety, with parent-delivered CBT effective in younger children.",
    "Trauma-focused CBT adapted for developmental stage is first-line in childhood PTSD.",
    "There is no medication for the core features of autism.",
    "The commonest reason evidence-based treatment is not received is failure to reach the service."
  ],
  refs:["nice","rutter","maudsley"] };

TEACH["10.9"] = { free:false,
  simple:"Some childhood disorders end in childhood and some become adult disorders under a different name. Knowing which is which decides whether a fifteen-year-old needs a service at eighteen.",
  teach:[
    "Homotypic continuity means the same disorder persists into adulthood. Heterotypic continuity means a childhood disorder predicts a different adult disorder.",
    "ADHD shows strong homotypic continuity. Around two-thirds have persisting symptoms into adulthood, and around 15 per cent continue to meet full criteria, with hyperactivity declining more than inattention.",
    "The decline of hyperactivity with age while inattention persists is why adult ADHD is often missed: the observable behaviour has gone and the disabling deficit has not.",
    "Autism is lifelong by definition. Presentation changes, with compensation and masking common in more able individuals, particularly women, which contributes to late diagnosis.",
    "Conduct disorder shows both homotypic and heterotypic continuity: it predicts antisocial personality disorder, substance misuse, depression, anxiety, and adverse outcomes across employment, relationships and health.",
    "Around 40 to 50 per cent of children with conduct disorder develop antisocial personality disorder, and almost all adults with antisocial personality disorder had conduct disorder, which is why DSM requires it.",
    "Early-onset conduct disorder, before age ten, has a far worse prognosis than adolescence-limited antisocial behaviour, which typically desists in early adulthood.",
    "Moffitt's developmental taxonomy distinguishes life-course-persistent from adolescence-limited antisocial behaviour, with the former characterised by neurodevelopmental deficit and adverse family environment, and the latter by peer influence and the maturity gap.",
    "Anxiety disorders in childhood predict adult anxiety and adult depression, with heterotypic continuity to depression being particularly well established.",
    "Childhood anxiety is the strongest childhood predictor of adult depression, which is an argument for treating it in its own right.",
    "Depression in adolescence predicts adult depression strongly, with around two-thirds having a further episode in adulthood, and predicts poorer educational and occupational outcomes.",
    "Self-harm in adolescence predicts adult self-harm, suicide, and psychiatric disorder, and is not a phase to be waited out.",
    "Childhood OCD predicts adult OCD in around 40 to 60 per cent, and childhood tics generally improve with a majority showing substantial reduction by adulthood.",
    "Tics are the clearest example of a childhood disorder that usually improves, with peak severity around age ten to twelve and substantial reduction by the early twenties in most.",
    "Attachment disorders and the effects of early deprivation persist, as shown by the Romanian adoptee follow-up, with quasi-autistic features and disinhibited social engagement identifiable into adulthood.",
    "Eating disorders show continuity, with crossover between diagnoses common, and adolescent onset predicting a more protracted adult course where treatment is delayed.",
    "Early intervention alters trajectories, which is the practical justification for the whole specialty: the same disorder treated at fourteen has a different course from the same disorder treated at twenty-four.",
    "Service transition should be planned from around age sixteen, with joint working, and should not depend on the young person meeting adult service thresholds designed for different presentations."
  ],
  cards:[
    ["Distinguish homotypic from heterotypic continuity, with examples.","Homotypic continuity is persistence of the same disorder into adulthood, as in ADHD and autism. Heterotypic continuity is where a childhood disorder predicts a different adult disorder, as in childhood anxiety predicting adult depression, or conduct disorder predicting antisocial personality disorder and substance misuse."],
    ["What is the continuity of ADHD into adulthood?","Around two-thirds have persisting symptoms and around 15 per cent continue to meet full diagnostic criteria. Hyperactivity declines more than inattention, which is why adult ADHD is frequently missed: the observable behaviour has diminished while the disabling attentional deficit has not."],
    ["Describe Moffitt's developmental taxonomy.","The distinction between life-course-persistent antisocial behaviour, characterised by early onset, neurodevelopmental deficit and adverse family environment, with a poor prognosis; and adolescence-limited antisocial behaviour, driven by peer influence and the maturity gap, which typically desists in early adulthood."],
    ["What is the relationship between conduct disorder and antisocial personality disorder?","Around 40 to 50 per cent of children with conduct disorder develop antisocial personality disorder, and almost all adults with antisocial personality disorder had conduct disorder in childhood, which is why DSM-5 requires evidence of conduct disorder before age fifteen."],
    ["Which childhood disorder usually improves by adulthood?","Tic disorders, which reach peak severity around age ten to twelve and show substantial reduction by the early twenties in the majority."]
  ],
  note:[
    "Childhood anxiety is the strongest childhood predictor of adult depression.",
    "Around two-thirds of adolescents with depression have a further episode in adulthood.",
    "Self-harm in adolescence predicts adult self-harm, suicide and psychiatric disorder.",
    "Autism presentation changes through compensation and masking, particularly in women.",
    "Transition planning should begin around age sixteen with joint working."
  ],
  refs:["rutter","nice","companion"] };

TEACH["10.10"] = { free:false,
  simple:"Admitting a child to a psychiatric unit is a serious intervention with real costs, and the bar should be high. Most of the time the answer is to change what is happening around them rather than to remove them from it.",
  teach:[
    "General principle: use the least restrictive effective intervention, delivered as close to home as possible, with the child remaining in education and family life wherever it is safe.",
    "Indications for medication generally: significant impairment, persistence despite environmental and psychological intervention, and a disorder for which medication has established evidence in this age group.",
    "Contraindications to medication as a first step: mild or situational difficulty, absence of adequate psychosocial assessment, an untreated environmental cause, and where the presenting problem is the environment rather than the child.",
    "Medication should never be the response to a child's distress about a situation that could be changed, and prescribing to a child in an unsafe or chaotic environment without addressing that is a recognised failure.",
    "Psychological therapy contraindications are practical rather than absolute: acute crisis preventing engagement, active starvation preventing cognitive work, and absence of any stable environment in which to do the work.",
    "Family therapy is contraindicated where a family member poses an ongoing risk to the child, and safeguarding must be addressed before systemic work.",
    "Indications for inpatient admission: risk to self or others that cannot be managed at home; severe illness requiring intensive assessment or treatment; medical instability in eating disorders; and failure of intensive community treatment.",
    "Medical instability in anorexia nervosa is the clearest and least contested indication, assessed on MEED criteria rather than on weight alone.",
    "Admission should be avoided where the problem is social rather than psychiatric, where the family or placement has broken down but the young person is not acutely unwell, or where admission is being sought because no community resource exists.",
    "Admission for want of a placement is a recognised misuse of psychiatric beds and produces harm through institutionalisation, loss of education and exposure to more unwell peers.",
    "Risks of admission: separation from family and school, learning of new behaviours from peers, institutionalisation, loss of independence, and difficulty in discharge once a placement has been lost.",
    "Contagion of self-harm on adolescent units is a real phenomenon and is a specific argument against admitting young people who self-harm unless there is a clear treatment aim.",
    "Alternatives: intensive home treatment, day services, crisis teams, respite, and increased community support. These should be exhausted before admission where safe.",
    "Legal framework: children under 16 may consent if Gillick competent, and those aged 16 and 17 are presumed to have capacity under the Mental Capacity Act.",
    "Parental consent can no longer be used to authorise the admission and treatment of a competent young person who refuses, following developments in case law and the Code of Practice. The Mental Health Act should be used instead.",
    "That change matters: relying on parental consent, known as the zone of parental control, is no longer regarded as appropriate where the young person objects, and the statutory framework provides the safeguards.",
    "Section 131A requires that patients under 18 admitted for mental disorder be accommodated in an environment suitable for their age, subject to their needs.",
    "Admission to an adult ward is a reportable event and should be avoided, though it continues to occur through bed shortage.",
    "Tier 4 beds are commissioned nationally, and out-of-area admission is common, separating the young person from family and school at the point they most need both."
  ],
  cards:[
    ["What are the indications for inpatient admission of a young person?","Risk to self or others that cannot be managed at home; severe illness requiring intensive assessment or treatment; medical instability in eating disorders assessed on MEED criteria; and failure of intensive community treatment. Admission should be avoided where the problem is social rather than psychiatric or where no community resource exists."],
    ["What are the risks of admitting an adolescent?","Separation from family and education, institutionalisation, loss of independence, acquisition of new behaviours from peers including contagion of self-harm, and difficulty achieving discharge once a home or school placement has been lost."],
    ["What is the current position on parental consent for a young person's admission?","Parental consent can no longer be used to authorise admission and treatment of a competent young person who refuses. The Mental Health Act should be used instead, since it provides the statutory safeguards. Reliance on the zone of parental control in the face of the young person's objection is no longer regarded as appropriate."],
    ["What does section 131A require?","That patients under 18 admitted to hospital for mental disorder are accommodated in an environment suitable for their age, subject to their needs. Admission to an adult ward is a reportable event and should be avoided."],
    ["When should medication not be a first step in a child?","In mild or situational difficulty, where psychosocial assessment is incomplete, where an environmental cause is untreated, and where the presenting problem is the environment rather than the child. Prescribing to a child in an unsafe or chaotic environment without addressing that environment is a recognised clinical failure."]
  ],
  note:[
    "Least restrictive intervention, delivered close to home, with education and family life maintained.",
    "Family therapy is contraindicated where a family member poses ongoing risk until safeguarding is addressed.",
    "Admission for want of a placement is a recognised misuse of psychiatric beds.",
    "Under-16s may consent if Gillick competent; 16 and 17 year olds are presumed to have capacity.",
    "Tier 4 beds are nationally commissioned and out-of-area admission is common."
  ],
  refs:["nice","eastman","rutter"] };
