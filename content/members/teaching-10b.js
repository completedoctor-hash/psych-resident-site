/* =====================================================================
   TEACHING, SECTION 10B — Child and Adolescent, five-aspect grid, part one
   Attachment disorders, conduct disorder, ADHD, anxiety including OCD,
   affective disorders
   25 items, 10.8.1.1 to 10.8.5.5
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------- 10.8.1 ATTACHMENT DISORDERS ---------- */

TEACH["10.8.1.1"] = { free:true,
  simple:"Attachment disorder is rare, and insecure attachment is common. Confusing the two is the single most frequent error in child mental health, and it leads to children being labelled when nothing is wrong with them.",
  teach:[
    "Insecure attachment is a normal variation affecting around 35 to 40 per cent of children in the general population. It is not a disorder.",
    "Attachment disorder is rare and requires pathogenic care: persistent disregard of the child's emotional or physical needs, or repeated changes of primary caregiver preventing the formation of stable attachments.",
    "The distinction is fundamental: insecure attachment is a pattern of relating; attachment disorder is a psychiatric disorder arising from grossly inadequate care.",
    "Prevalence in the general population is well under 1 per cent, and probably closer to 0.1 per cent for reactive attachment disorder.",
    "Prevalence rises sharply in maltreated and institutionalised populations: around 20 to 40 per cent in institutionally reared children, and around 10 to 20 per cent in maltreated children in care.",
    "Looked-after children are the group in whom these diagnoses are genuinely relevant, and even there most do not have an attachment disorder.",
    "Disinhibited social engagement disorder is commoner than reactive attachment disorder in previously institutionalised children.",
    "Attachment disorder is substantially over-diagnosed in UK practice, particularly in looked-after and adopted children, where behavioural difficulty is attributed to attachment without meeting criteria.",
    "Over-diagnosis has consequences: it directs attention away from treatable comorbidity such as ADHD, language disorder or PTSD, and it can be used to explain away a placement failure."
  ],
  cards:[
    ["Distinguish insecure attachment from attachment disorder.","Insecure attachment is a normal variation in the pattern of relating, affecting around 35 to 40 per cent of children in the general population, and is not a disorder. Attachment disorder is a rare psychiatric disorder, well under 1 per cent in the general population, requiring a history of pathogenic care through persistent neglect or repeated caregiver change."],
    ["In which populations is attachment disorder genuinely prevalent?","Institutionally reared children, at around 20 to 40 per cent, and maltreated children in care, at around 10 to 20 per cent. Even in these groups, most children do not have an attachment disorder, and the diagnosis is substantially over-applied in UK practice."],
    ["What harm follows over-diagnosis of attachment disorder?","It directs attention away from treatable comorbid conditions such as ADHD, developmental language disorder and PTSD, and can be used to explain away a placement failure rather than examine it."]
  ],
  note:[
    "Pathogenic care is a diagnostic requirement, not an inference from the child's behaviour.",
    "Disinhibited social engagement disorder is commoner than reactive attachment disorder after institutional care.",
    "Looked-after children are the population in whom these diagnoses are genuinely relevant.",
    "Insecure attachment describes a pattern of relating, not a disorder."
  ],
  refs:["rutter","icd11","nice"] };

TEACH["10.8.1.2"] = { free:false,
  simple:"Attachment is a survival system, not an emotional luxury. A frightened baby who cannot get comfort from the person they need is in an impossible situation, and the disorder is what results.",
  teach:[
    "Bowlby grounded attachment in ethology rather than in drive theory: the child's tie to the caregiver is a primary biological system that promotes proximity and therefore survival.",
    "The attachment behavioural system is activated by threat, illness, fatigue and separation, and deactivated by proximity and comfort. It exists to keep the immature organism near protection.",
    "Internal working models are the child's representations of self, others and relationships, built from repeated experience and carried forward into later relationships.",
    "Ainsworth's Strange Situation classified attachment into secure, insecure-avoidant and insecure-ambivalent or resistant, based on the child's behaviour on reunion rather than on separation.",
    "Reunion behaviour is the informative part of the Strange Situation, which is frequently misremembered.",
    "Main and Solomon added disorganised attachment for children showing contradictory, freezing, or apprehensive behaviour with no coherent strategy.",
    "Disorganised attachment arises where the caregiver is simultaneously the source of comfort and of fear, producing an unresolvable approach-avoidance conflict. It is the pattern most associated with maltreatment.",
    "Disorganised attachment is a risk factor for later psychopathology; it is not itself a disorder and is not the same as attachment disorder.",
    "Attachment disorder requires pathogenic care as a diagnostic criterion. This is a rare instance of a psychiatric diagnosis specifying an aetiology.",
    "Reactive attachment disorder arises where the child has had opportunity to form a selective attachment but the caregiving was grossly inadequate, producing inhibited, emotionally withdrawn behaviour.",
    "Disinhibited social engagement disorder arises from repeated changes of caregiver preventing the formation of any selective attachment, producing indiscriminate approach to unfamiliar adults.",
    "The two disorders have different aetiological pathways and different responses to treatment, which is the strongest argument for separating them.",
    "The English and Romanian Adoptees study showed that disinhibited social engagement persisted after adoption into good families, whereas reactive attachment features largely resolved.",
    "That difference in reversibility is one of the clearest findings in developmental psychopathology and is the basis for treating them as separate conditions.",
    "Neurobiology: early adversity affects HPA axis regulation, amygdala reactivity and prefrontal development, and institutional deprivation is associated with reduced total brain volume in the Romanian adoptee imaging studies."
  ],
  cards:[
    ["What is disorganised attachment and how does it arise?","A pattern in which the child shows contradictory, freezing or apprehensive behaviour with no coherent strategy on reunion, described by Main and Solomon. It arises where the caregiver is simultaneously the source of comfort and of fear, creating an unresolvable approach-avoidance conflict. It is a risk factor for later psychopathology but is not itself a disorder."],
    ["What distinguishes the aetiology of the two attachment disorders?","Reactive attachment disorder arises where the child had opportunity to form a selective attachment but caregiving was grossly inadequate. Disinhibited social engagement disorder arises from repeated changes of primary caregiver preventing formation of any selective attachment."],
    ["What did the Romanian adoptee study show about reversibility?","That reactive attachment features largely resolved after adoption into good families, whereas disinhibited social engagement persisted into adolescence and adulthood. This difference in reversibility is the strongest argument for treating them as separate conditions."],
    ["What are internal working models?","Bowlby's concept of the child's mental representations of self, of others and of relationships, constructed from repeated experience with caregivers and carried forward to shape expectations in later relationships."]
  ],
  note:[
    "Bowlby grounded attachment in ethology rather than in drive theory.",
    "Reunion behaviour, not separation behaviour, is the informative part of the Strange Situation.",
    "Pathogenic care is a diagnostic criterion, making this a rare instance of specified aetiology.",
    "Institutional deprivation is associated with reduced total brain volume in imaging studies.",
    "Early adversity affects HPA regulation, amygdala reactivity and prefrontal development."
  ],
  refs:["rutter","gross","icd11"] };

TEACH["10.8.1.3"] = { free:false,
  simple:"One child never seeks comfort from anyone, even when hurt. The other will go off with any stranger without looking back. Both come from the same failure of early care and they look nothing alike.",
  teach:[
    "Reactive attachment disorder: a consistent pattern of inhibited, emotionally withdrawn behaviour towards caregivers, with the child rarely seeking or responding to comfort when distressed.",
    "Additional features of reactive attachment disorder: minimal social and emotional responsiveness, limited positive affect, and unexplained episodes of irritability, sadness or fearfulness during non-threatening interactions with caregivers.",
    "Disinhibited social engagement disorder: a pattern of actively approaching and interacting with unfamiliar adults with reduced or absent reticence, willingness to go off with a stranger with minimal hesitation, and overly familiar verbal or physical behaviour.",
    "The failure to check back with the caregiver, even in an unfamiliar setting, is characteristic of disinhibited social engagement disorder.",
    "Both require evidence of pathogenic care: social neglect or deprivation, repeated changes of primary caregiver, or rearing in settings limiting opportunity for selective attachment.",
    "Both require developmental age of at least nine months, since selective attachment is not expected before then, and onset before age five.",
    "DSM-5 and ICD-11 both separate the two conditions, having previously treated them as subtypes of a single disorder.",
    "Reactive attachment disorder is not diagnosed where criteria for autism spectrum disorder are met, and distinguishing the two is a common clinical difficulty.",
    "The distinction from autism rests on the history of pathogenic care, on response to improved care, and on the presence in autism of restricted repetitive behaviours and sensory features which are not part of attachment disorder.",
    "Quasi-autistic features were described in the Romanian adoptees: autistic-like presentations arising from deprivation, some of which improved with time and good care, unlike idiopathic autism.",
    "Disinhibited social engagement disorder must be distinguished from ADHD, with which it shares impulsivity and social intrusiveness, and the two frequently coexist.",
    "Comorbidity is the rule rather than the exception: ADHD, developmental language disorder, PTSD, intellectual disability and conduct problems are all over-represented.",
    "Assessment requires developmental history including care history, observation of the child with the caregiver, collateral from school and social care, and information about placement history.",
    "Care history is not optional. Without documented evidence of pathogenic care, the diagnosis cannot properly be made, however suggestive the behaviour.",
    "Attachment cannot be measured clinically by observing a single interaction. The Strange Situation is a research procedure requiring training, and clinical assessment relies on history and repeated observation."
  ],
  cards:[
    ["Describe the two attachment disorders.","Reactive attachment disorder: consistently inhibited, emotionally withdrawn behaviour, rarely seeking or responding to comfort when distressed, with limited positive affect and unexplained irritability or fearfulness during non-threatening interaction. Disinhibited social engagement disorder: active approach to unfamiliar adults with absent reticence, willingness to go off with a stranger, overly familiar behaviour and failure to check back with the caregiver."],
    ["What are the shared diagnostic requirements?","Evidence of pathogenic care through social neglect, repeated changes of primary caregiver, or rearing in settings limiting opportunity for selective attachment; a developmental age of at least nine months; and onset before age five."],
    ["How is reactive attachment disorder distinguished from autism?","By the history of pathogenic care, by response to improved caregiving, and by the presence in autism of restricted repetitive behaviours and sensory features that are not part of attachment disorder. Quasi-autistic features arising from deprivation were described in the Romanian adoptees and, unlike idiopathic autism, some improved with time and good care."],
    ["Why can the Strange Situation not be used clinically?","Because it is a research procedure requiring specific training and standardisation, and attachment cannot be validly assessed from a single observed interaction. Clinical assessment relies on developmental and care history with repeated observation over time."]
  ],
  note:[
    "Both conditions are separated in DSM-5 and ICD-11, having previously been subtypes of one disorder.",
    "Disinhibited social engagement disorder shares impulsivity and social intrusiveness with ADHD and frequently coexists with it.",
    "Comorbidity with ADHD, language disorder, PTSD and intellectual disability is the rule.",
    "Without documented pathogenic care the diagnosis cannot properly be made."
  ],
  refs:["icd11","dsm5","rutter"] };

TEACH["10.8.1.4"] = { free:false,
  simple:"The treatment is a stable, sensitive, available caregiver, sustained over years. There is no therapy that substitutes for that, and there are several that actively harm.",
  teach:[
    "The primary intervention is the provision of stable, sensitive, responsive caregiving. Everything else is secondary to securing and supporting that.",
    "For a child in care this means placement stability above all. Repeated placement moves are the ongoing continuation of the aetiology.",
    "Carer support is the intervention, not an adjunct: training, supervision, respite, and access to advice when the behaviour is difficult, because carer breakdown is what produces the next move.",
    "Video Interaction Guidance and video-feedback interventions such as VIPP-SD improve caregiver sensitivity, with good evidence, and are the best-supported approach to improving attachment security.",
    "Attachment and Biobehavioral Catch-up is a manualised intervention for foster and adoptive carers of young children with randomised evidence for improved attachment and improved cortisol regulation.",
    "NICE guidance on attachment difficulties in children in care recommends parenting and carer interventions, not child-directed therapies, as the core of treatment.",
    "Dyadic Developmental Psychotherapy is widely used in UK practice for adopted and looked-after children but its evidence base is weak, consisting largely of uncontrolled studies, and this should be stated honestly.",
    "Attachment therapies involving coercion, enforced holding, rebirthing or deliberate provocation of rage are harmful and have caused deaths. They are contraindicated absolutely.",
    "The death of Candace Newmaker in a rebirthing procedure in 2000 is the case that led to legislative prohibition in several US states and should be known.",
    "Treat the comorbidity. ADHD, language disorder, PTSD and intellectual disability are common, treatable, and frequently overlooked once an attachment label is applied.",
    "Medication has no role in attachment disorder itself, but comorbid conditions should be treated on their own merits rather than withheld because the child is in care.",
    "There is evidence that looked-after children are both over-medicated for behaviour and under-treated for diagnosable disorder, which are two failures rather than one.",
    "School is a major intervention. A stable school placement with an informed and consistent approach provides much of what the child needs and is often more achievable than placement stability.",
    "Therapeutic parenting approaches, emphasising predictability, low arousal, containment and repair after rupture, are widely used and are consistent with the evidence even where specific programmes are not well evaluated.",
    "Recovery takes years and is measured in relationships rather than in symptom scores. Carers should be told this at the outset so that slow progress is not read as failure."
  ],
  cards:[
    ["What is the primary treatment for attachment disorder?","The provision of stable, sensitive, responsive caregiving sustained over years, with placement stability as the overriding priority for a child in care. Everything else is secondary to securing and supporting that."],
    ["Which interventions have the best evidence?","Video-feedback interventions improving caregiver sensitivity, such as Video Interaction Guidance and VIPP-SD, and Attachment and Biobehavioral Catch-up, which has randomised evidence for improved attachment and improved cortisol regulation in foster and adoptive placements."],
    ["Which attachment interventions are contraindicated?","Any involving coercion, enforced holding, rebirthing or deliberate provocation of rage. These are harmful and have caused deaths, including that of Candace Newmaker in a rebirthing procedure in 2000, which led to legislative prohibition in several US states."],
    ["What is the evidence status of Dyadic Developmental Psychotherapy?","Weak. It is widely used in UK practice with adopted and looked-after children, but the evidence base consists largely of uncontrolled studies. NICE recommends carer and parenting interventions rather than child-directed therapies as the core of treatment."]
  ],
  note:[
    "Carer support prevents the placement breakdown that produces the next move.",
    "Comorbid ADHD, language disorder and PTSD are treatable and frequently overlooked once an attachment label is applied.",
    "Looked-after children are simultaneously over-medicated for behaviour and under-treated for diagnosable disorder.",
    "A stable school placement provides much of what the child needs and is often more achievable than placement stability.",
    "Recovery is measured in years and in relationships rather than in symptom scores."
  ],
  refs:["nice","rutter","gabbard"] };

TEACH["10.8.1.5"] = { free:false,
  simple:"Good enough care afterwards repairs a great deal, and the earlier it arrives the more it repairs. But some things, particularly the indiscriminate friendliness, tend to stay.",
  teach:[
    "Outcome depends principally on the duration and severity of the adverse care and on the quality and stability of what follows.",
    "Reactive attachment disorder features improve substantially with adequate caregiving, and in the Romanian adoptee cohort largely resolved after placement in good adoptive homes.",
    "Disinhibited social engagement features are far more persistent, remaining identifiable into adolescence and adulthood in a substantial proportion despite good subsequent care.",
    "That asymmetry between the two conditions is the central prognostic fact and should be given to carers, who otherwise interpret persisting indiscriminate friendliness as their own failure.",
    "The English and Romanian Adoptees follow-up into adulthood found a deprivation-specific pattern in those deprived beyond six months: disinhibited social engagement, quasi-autism, inattention and overactivity, and cognitive impairment.",
    "Rates of any mental health problem in young adulthood were substantially raised in the late-adopted group, at around 40 per cent against around 15 per cent in the early-adopted comparison group.",
    "Educational and employment outcomes were poorer in the late-adopted group, and this persisted after cognitive recovery in many.",
    "Placement stability is the strongest modifiable predictor. Each additional placement move is associated with worse outcome, and stability predicts outcome more strongly than the type of placement.",
    "Adoption produces better outcomes than long-term fostering for young children, largely through stability and permanence rather than through any other difference.",
    "Age at placement is the other key predictor, with earlier placement predicting better outcome across all domains and the six-month threshold particularly evident in the Romanian data.",
    "Comorbidity worsens outcome, and unrecognised ADHD or language disorder in a child labelled with attachment difficulty predicts educational failure and placement breakdown.",
    "Later relationship difficulties are common: forming and maintaining intimate relationships and, in due course, parenting are the domains where difficulty persists longest.",
    "Intergenerational transmission is real but not inevitable. The strongest protective factor is a coherent understanding of one's own history, which is what the Adult Attachment Interview measures as earned security.",
    "Earned security, where a person with adverse early experience achieves a coherent account of it, predicts secure attachment in their own children, and is the most hopeful finding in this literature."
  ],
  cards:[
    ["Which attachment disorder features persist and which resolve?","Reactive attachment disorder features improve substantially with adequate subsequent caregiving and largely resolved in the Romanian adoptee cohort. Disinhibited social engagement features are far more persistent, remaining identifiable into adolescence and adulthood in a substantial proportion despite good care."],
    ["What did the Romanian adoptee follow-up into adulthood find?","A deprivation-specific pattern in those deprived beyond six months, comprising disinhibited social engagement, quasi-autism, inattention and overactivity, and cognitive impairment, with any mental health problem in around 40 per cent against around 15 per cent in the early-adopted comparison group."],
    ["What is the strongest modifiable predictor of outcome?","Placement stability. Each additional placement move is associated with worse outcome, and stability predicts outcome more strongly than the type of placement. Age at placement is the other key predictor."],
    ["What is earned security?","The achievement, by a person with adverse early experience, of a coherent and reflective account of that history, as measured by the Adult Attachment Interview. It predicts secure attachment in their own children and is the strongest evidence that intergenerational transmission is not inevitable."]
  ],
  note:[
    "Outcome depends on duration and severity of adverse care and on the quality and stability of what follows.",
    "Adoption produces better outcomes than long-term fostering for young children, largely through permanence.",
    "Unrecognised ADHD or language disorder predicts educational failure and placement breakdown.",
    "Intimate relationships and parenting are the domains where difficulty persists longest."
  ],
  refs:["rutter","nice","companion"] };

/* ---------- 10.8.2 CONDUCT DISORDER ---------- */

TEACH["10.8.2.1"] = { free:true,
  simple:"Conduct disorder is the commonest reason a child is referred to mental health services, and it is far commoner in poor families, which tells you a good deal about where it comes from.",
  teach:[
    "Conduct disorder is the commonest psychiatric disorder of childhood and the commonest reason for referral to child mental health services.",
    "Prevalence is around 5 per cent of children aged 5 to 16 in UK surveys, with oppositional defiant disorder adding further cases in younger children.",
    "Male to female ratio is around three or four to one in childhood, narrowing substantially in adolescence as female rates rise.",
    "The narrowing sex ratio in adolescence reflects both later onset in girls and different expression, with girls showing more relational and covert antisocial behaviour.",
    "There is a very strong socioeconomic gradient. Prevalence in the lowest income quintile is several times that in the highest, the steepest social gradient of any childhood psychiatric disorder.",
    "Rates are raised in looked-after children, in children excluded from school, in those with intellectual disability, and in the youth justice population where prevalence is very high.",
    "Onset is bimodal: childhood-onset before age ten, which is more often male, more neurodevelopmentally loaded and more persistent; and adolescent-onset, which is more equal by sex and more often desists.",
    "The lifetime economic cost is very high, with the costs of childhood conduct disorder to public services by adulthood estimated at around ten times those of children without it.",
    "Only a minority of children with conduct disorder reach specialist services, and treatment is available and effective, which makes this the largest untreated burden in child psychiatry."
  ],
  cards:[
    ["Give the prevalence, sex ratio and social gradient of conduct disorder.","Around 5 per cent of children aged 5 to 16 in UK surveys, with a male to female ratio of around three or four to one in childhood narrowing in adolescence. It has the steepest socioeconomic gradient of any childhood psychiatric disorder, with prevalence in the lowest income quintile several times that in the highest."],
    ["Describe the bimodal onset of conduct disorder.","Childhood-onset before age ten, more often male, more neurodevelopmentally loaded and considerably more persistent; and adolescent-onset, with a more equal sex ratio, more peer-driven and more likely to desist in early adulthood."]
  ],
  note:[
    "Conduct disorder is the commonest childhood psychiatric disorder and the commonest reason for referral.",
    "Girls show more relational and covert antisocial behaviour, contributing to under-recognition.",
    "Prevalence is very high in the youth justice population and raised in looked-after and excluded children.",
    "Lifetime public service costs are around ten times those of unaffected children.",
    "Only a minority reach specialist services despite effective treatment being available."
  ],
  refs:["rutter","nice"] };

TEACH["10.8.2.2"] = { free:false,
  simple:"Conduct disorder is what happens when a difficult child meets a family and a neighbourhood that cannot manage difficulty. Neither half alone reliably produces it.",
  teach:[
    "Heritability is moderate, around 40 to 50 per cent, and is higher for childhood-onset and for the callous-unemotional subgroup, where estimates approach 70 to 80 per cent.",
    "Callous-unemotional traits, comprising lack of remorse, lack of empathy, shallow affect and unconcern about performance, mark a highly heritable and distinct subgroup with a different aetiological pathway.",
    "The callous-unemotional group shows reduced amygdala responsiveness to distress cues in others, impaired fear conditioning, and reduced autonomic arousal, and responds less well to standard parenting interventions.",
    "The non-callous group shows heightened rather than reduced threat reactivity, with hostile attribution bias and emotional dysregulation, and responds well to parenting intervention.",
    "That distinction between two aetiological pathways is the most important recent development in this area and predicts treatment response.",
    "Neurobiology: reduced amygdala and prefrontal grey matter, impaired executive function, low resting heart rate which is one of the best-replicated biological correlates of antisocial behaviour, and reduced cortisol reactivity.",
    "Low resting heart rate in childhood predicts later antisocial behaviour independently of social factors, and is thought to reflect either fearlessness or chronic underarousal driving sensation seeking.",
    "Neurodevelopmental comorbidity: ADHD is present in a large proportion and is a strong predictor of persistence; language disorder is very common and under-recognised; and intellectual disability raises risk.",
    "The combination of ADHD with conduct disorder predicts substantially worse outcome than either alone and is sometimes called hyperkinetic conduct disorder in ICD.",
    "Prenatal factors: maternal smoking in pregnancy, alcohol exposure, and obstetric complications, each with modest independent effects.",
    "Family factors: harsh, inconsistent or coercive parenting; low warmth; poor supervision; parental criminality, substance misuse and mental illness; and marital discord.",
    "Patterson's coercive family process is the central mechanism: the child's aversive behaviour terminates parental demands, reinforcing both parties into escalating cycles.",
    "Social learning: modelling of aggression, and the reinforcement of antisocial behaviour by deviant peers, which is why group treatment of antisocial adolescents can be harmful.",
    "Deviant peer contagion is a real iatrogenic risk, and group interventions bringing antisocial adolescents together have produced worse outcomes in several trials.",
    "Cognitive factors: hostile attribution bias, in which ambiguous social cues are read as hostile; deficient social problem-solving; and biased evaluation of aggressive responses as effective.",
    "Social factors: poverty, poor housing, neighbourhood disadvantage, school exclusion, and community violence exposure.",
    "Gene-environment interaction: the MAOA genotype by maltreatment interaction reported by Caspi in 2002 has replicated better than most such findings, showing that maltreatment predicts antisocial behaviour more strongly in those with the low-activity variant."
  ],
  cards:[
    ["What are callous-unemotional traits and why do they matter?","Lack of remorse or guilt, lack of empathy, shallow or deficient affect, and unconcern about performance. They mark a highly heritable subgroup with reduced amygdala responsiveness to distress cues, impaired fear conditioning and reduced autonomic arousal, which responds less well to standard parenting interventions and requires reward-based approaches."],
    ["Contrast the two aetiological pathways to conduct problems.","The callous-unemotional pathway shows reduced threat reactivity, impaired fear conditioning and high heritability, responding poorly to punishment-based approaches. The non-callous pathway shows heightened threat reactivity, hostile attribution bias and emotional dysregulation, arising more from adverse parenting and responding well to parent training."],
    ["What is the significance of low resting heart rate?","It is one of the best-replicated biological correlates of antisocial behaviour, predicting later antisocial outcomes independently of social factors, and is interpreted as reflecting either fearlessness or chronic underarousal driving sensation seeking."],
    ["What is deviant peer contagion?","The reinforcement of antisocial attitudes and behaviour when antisocial adolescents are treated together in groups. It is a genuine iatrogenic risk, with several trials of group interventions for antisocial youth producing worse outcomes than no treatment."],
    ["What is hostile attribution bias?","The tendency to interpret ambiguous social cues as indicating hostile intent, which predisposes to aggressive responding. It is a core cognitive feature of the non-callous pathway and a target of cognitive problem-solving interventions."]
  ],
  note:[
    "Heritability approaches 70 to 80 per cent in the callous-unemotional subgroup.",
    "ADHD with conduct disorder predicts substantially worse outcome than either alone.",
    "Language disorder is very common in this group and under-recognised.",
    "Maternal smoking and alcohol exposure in pregnancy have modest independent effects.",
    "The MAOA by maltreatment interaction has replicated better than most gene-environment findings."
  ],
  refs:["rutter","semgen","companion"] };

TEACH["10.8.2.3"] = { free:true,
  simple:"Conduct disorder means a repeated pattern of behaviour that violates other people's rights or major social rules. Not one incident, not being difficult, but a pattern over at least a year.",
  teach:[
    "ICD-11 conduct-dissocial disorder requires a repetitive and persistent pattern of behaviour violating the basic rights of others or major age-appropriate societal norms, rules or laws, over at least twelve months.",
    "DSM-5 groups the criteria into four categories: aggression to people and animals; destruction of property; deceitfulness or theft; and serious violation of rules.",
    "Three or more criteria in twelve months with at least one in the past six months is required in DSM-5.",
    "Oppositional defiant disorder is the milder and typically earlier condition: angry or irritable mood, argumentative and defiant behaviour, and vindictiveness, directed particularly at authority figures, without the serious rights violations of conduct disorder.",
    "ICD-11 restructured oppositional defiant disorder with a specifier for chronic irritability and anger, which corresponds broadly to DSM-5's disruptive mood dysregulation disorder.",
    "Disruptive mood dysregulation disorder was introduced in DSM-5 for children with severe recurrent temper outbursts and persistently irritable mood between them, explicitly to reduce the over-diagnosis of paediatric bipolar disorder in the United States.",
    "That origin should be known: the diagnosis was created to solve a diagnostic inflation problem rather than because a new disorder had been discovered.",
    "The limited prosocial emotions specifier in DSM-5 identifies the callous-unemotional subgroup, requiring two of four features persistently over twelve months in multiple settings.",
    "Age of onset specifiers: childhood-onset before age ten and adolescent-onset, with the childhood-onset group having more aggression, more neurodevelopmental comorbidity and worse prognosis.",
    "Severity in ICD-11 and DSM-5 is graded, and the setting matters: behaviour confined to the home has different implications from behaviour across home, school and community.",
    "Comorbidity is the rule: ADHD in a large proportion, developmental language disorder, specific learning difficulties, depression, anxiety, PTSD, and substance misuse in adolescence.",
    "Depression and anxiety in conduct disorder are frequently overlooked because the behaviour dominates the presentation, and irritability may be depressive rather than oppositional.",
    "Always assess for language and learning difficulty. A child who cannot understand instructions or express themselves will appear defiant, and this is a common misattribution.",
    "Always assess for maltreatment, domestic abuse and neglect. Conduct problems are a common presentation of an unsafe home, and the child is often protecting the family from disclosure.",
    "Assessment requires information from home and school, since behaviour confined to one setting suggests something about that setting rather than about the child.",
    "Instruments: the Strengths and Difficulties Questionnaire is the standard screening measure with parent, teacher and self-report versions; the Child Behaviour Checklist and Conners rating scales are also used."
  ],
  cards:[
    ["Give the DSM-5 categories of conduct disorder criteria.","Aggression to people and animals; destruction of property; deceitfulness or theft; and serious violation of rules. Three or more criteria within twelve months with at least one in the past six months are required."],
    ["What is disruptive mood dysregulation disorder and why was it introduced?","A DSM-5 diagnosis for children with severe recurrent temper outbursts out of proportion to provocation, with persistently irritable or angry mood between outbursts. It was introduced explicitly to reduce the over-diagnosis of paediatric bipolar disorder in the United States rather than because a new disorder had been identified."],
    ["Distinguish oppositional defiant disorder from conduct disorder.","Oppositional defiant disorder involves angry or irritable mood, argumentative and defiant behaviour and vindictiveness, typically directed at authority figures, without the serious violations of others' basic rights, aggression, destruction, deceit and rule-breaking that define conduct disorder."],
    ["What must always be assessed in a child presenting with conduct problems?","Developmental language and learning difficulty, since a child who cannot follow or express language appears defiant; and maltreatment, domestic abuse and neglect, since conduct problems are a common presentation of an unsafe home. Information from both home and school is required, as behaviour confined to one setting indicates something about that setting."]
  ],
  note:[
    "ICD-11 conduct-dissocial disorder requires a pattern over at least twelve months.",
    "The limited prosocial emotions specifier identifies the callous-unemotional subgroup.",
    "Childhood-onset before age ten carries more aggression, more comorbidity and worse prognosis.",
    "Depression and anxiety are frequently overlooked because behaviour dominates the presentation.",
    "The Strengths and Difficulties Questionnaire is the standard screening measure."
  ],
  refs:["icd11","dsm5","rutter"] };

TEACH["10.8.2.4"] = { free:false,
  simple:"The treatment is delivered to the parents, not to the child, and it works. Sitting a nine-year-old down for individual therapy about their behaviour is one of the least effective things available.",
  teach:[
    "NICE CG158 recommends group-based parent training programmes as first-line for children aged 3 to 11 with conduct problems, with individual parent training where group is unsuitable.",
    "Parent training has strong evidence with effect sizes around 0.5 or above, and effects are maintained at follow-up where programmes are delivered with fidelity.",
    "Core components: child-directed play to rebuild the relationship, labelled praise, clear and specific commands, consistent predictable consequences, planned ignoring of minor misbehaviour, and time out used sparingly and correctly.",
    "The relationship-building phase comes first and is frequently skipped by parents impatient for the discipline components. Skipping it substantially reduces effectiveness.",
    "Named programmes: Incredible Years, Triple P, Parent-Child Interaction Therapy and Strengthening Families Strengthening Communities. All share the same core components.",
    "For young people aged 11 to 17, NICE recommends child-focused social and cognitive problem-solving programmes alongside or instead of parent training.",
    "Cognitive problem-solving skills training addresses hostile attribution bias, generation of alternative responses, and evaluation of consequences, and works best combined with parent training.",
    "Multisystemic therapy and functional family therapy are intensive whole-system interventions for serious antisocial behaviour in adolescents, with evidence for reduced offending and reduced out-of-home placement.",
    "Foster carer training programmes, including Multidimensional Treatment Foster Care, improve outcomes for looked-after young people with conduct problems.",
    "Avoid group interventions that bring antisocial adolescents together without strong structure, because of deviant peer contagion.",
    "Boot camps, scared straight programmes and punitive residential interventions are ineffective and several have increased offending. This is a well-established negative finding worth stating.",
    "Medication has no role in conduct disorder itself. NICE is explicit that medication should not be offered routinely for behavioural problems.",
    "Where ADHD coexists, treating the ADHD reduces conduct symptoms substantially, and this is the single most useful pharmacological intervention in this group.",
    "Risperidone is used short-term for severe aggression where psychological interventions have failed and there is significant risk, at the lowest dose with a defined review, and with metabolic and prolactin monitoring.",
    "The risperidone evidence is modest, the adverse effect burden in children is real, particularly weight gain and prolactin elevation, and use should be time-limited.",
    "Treat comorbidity: ADHD, depression, anxiety, PTSD, substance misuse and language disorder all worsen conduct problems and all are treatable.",
    "Education is an intervention. School exclusion sharply worsens outcome, and maintaining education is among the most protective things achievable.",
    "Callous-unemotional traits predict poorer response to standard parenting approaches, and reward-based rather than punishment-based strategies work better in this group.",
    "Engagement is the practical obstacle. Attendance and completion rates in parent training are the main limit on effectiveness, and practical support with transport, childcare and timing changes outcomes."
  ],
  cards:[
    ["What is first-line treatment for conduct disorder and what are its components?","Group-based parent training programmes for children aged 3 to 11. Components are child-directed play to rebuild the relationship, labelled praise, clear specific commands, consistent predictable consequences, planned ignoring of minor misbehaviour, and correctly used time out. The relationship-building phase must come first."],
    ["What is the role of medication in conduct disorder?","None for the disorder itself; NICE is explicit that medication should not be offered routinely. Where ADHD coexists, treating it substantially reduces conduct symptoms and is the most useful pharmacological intervention. Risperidone may be used short-term for severe aggression that has not responded to psychological intervention, at the lowest dose with defined review and metabolic and prolactin monitoring."],
    ["Which interventions are ineffective or harmful?","Boot camps, scared straight programmes and punitive residential interventions, several of which have increased offending. Unstructured group interventions bringing antisocial adolescents together are harmful through deviant peer contagion."],
    ["How does treatment differ for children with callous-unemotional traits?","They respond poorly to punishment-based approaches, since impaired fear conditioning and reduced sensitivity to distress cues limit the effect of aversive consequences. Reward-based strategies emphasising positive reinforcement work better."],
    ["What limits the effectiveness of parent training in practice?","Attendance and completion rates. Practical support with transport, childcare and appointment timing changes outcomes more than refinements to programme content."]
  ],
  note:[
    "Effect sizes for parent training are around 0.5 or above and are maintained where fidelity is high.",
    "Cognitive problem-solving skills training works best combined with parent training.",
    "Multisystemic therapy and functional family therapy target serious adolescent antisocial behaviour.",
    "School exclusion sharply worsens outcome; maintaining education is highly protective.",
    "Multidimensional Treatment Foster Care improves outcomes for looked-after young people."
  ],
  refs:["nice","rutter","maudsley"] };

TEACH["10.8.2.5"] = { free:false,
  simple:"About half grow out of it and about half do not, and the ones who do not have almost always started young. Where it persists it shapes the whole of adult life, not just the criminal part.",
  teach:[
    "Around 40 to 50 per cent of children with conduct disorder develop antisocial personality disorder in adulthood, and almost all adults with antisocial personality disorder had childhood conduct disorder.",
    "Age of onset is the strongest predictor. Childhood-onset conduct disorder persists in the majority; adolescent-onset largely desists in early adulthood.",
    "Moffitt's taxonomy captures this: life-course-persistent antisocial behaviour has early onset, neurodevelopmental deficit and adverse family environment; adolescence-limited behaviour is driven by peer influence and the maturity gap and desists.",
    "Callous-unemotional traits predict persistence, more severe and instrumental aggression, and adult psychopathy, and predict poorer treatment response.",
    "Outcomes extend far beyond offending. Conduct disorder predicts poor educational attainment, unemployment, low income, relationship instability, early parenthood, substance misuse, depression, anxiety, and premature mortality.",
    "Physical health outcomes are worse: higher rates of injury, sexually transmitted infection, smoking, obesity and cardiovascular disease, with reduced life expectancy.",
    "The breadth of adverse outcome is the point most often missed. This is not simply a predictor of criminality but of adverse outcome across every measurable life domain.",
    "Intergenerational transmission is substantial, through genetics, parenting, assortative mating and social circumstance, and children of parents with childhood conduct disorder are themselves at raised risk.",
    "Poor prognostic factors: early onset, callous-unemotional traits, comorbid ADHD, low intelligence, language impairment, family criminality and substance misuse, school exclusion, and placement in a deviant peer environment.",
    "Good prognostic factors: later onset, higher intelligence, absence of callous-unemotional traits, one supportive relationship, maintained education, and successful parent training.",
    "Turning points in adulthood matter: stable employment and a stable partner relationship are associated with desistance in longitudinal studies, and are the mechanisms behind adult desistance.",
    "Desistance research is optimistic and is often omitted from teaching. Most offending careers end, and they end through ordinary life changes rather than through interventions.",
    "Early intervention alters trajectory, and economic modelling shows parent training in early childhood is highly cost-effective, with savings across health, education, social care and criminal justice.",
    "The cost-effectiveness case is one of the strongest in child mental health and is the argument used for expanding early years provision."
  ],
  cards:[
    ["What proportion of children with conduct disorder develop antisocial personality disorder?","Around 40 to 50 per cent, and almost all adults with antisocial personality disorder had childhood conduct disorder. Age of onset is the strongest predictor: childhood-onset persists in the majority while adolescent-onset largely desists."],
    ["What is the range of adverse adult outcomes?","Far beyond offending: poor educational attainment, unemployment, low income, relationship instability, early parenthood, substance misuse, depression, anxiety, worse physical health including cardiovascular disease, and premature mortality."],
    ["What is associated with desistance in adulthood?","Stable employment and a stable partner relationship, identified as turning points in longitudinal desistance research. Most offending careers end, and they end through ordinary life changes rather than through interventions, which is an optimistic finding frequently omitted from teaching."],
    ["What is the economic argument for early intervention?","Parent training in early childhood is highly cost-effective, with modelled savings across health, education, social care and criminal justice, since the lifetime public service costs of childhood conduct disorder are around ten times those of unaffected children."]
  ],
  note:[
    "Callous-unemotional traits predict persistence, instrumental aggression and adult psychopathy.",
    "Intergenerational transmission occurs through genetics, parenting, assortative mating and circumstance.",
    "School exclusion and deviant peer placement are strong poor prognostic factors.",
    "One supportive relationship and maintained education are among the strongest protective factors."
  ],
  refs:["rutter","nice","companion"] };

/* ---------- 10.8.3 ADHD ---------- */

TEACH["10.8.3.1"] = { free:true,
  simple:"ADHD affects around one child in twenty. Diagnosis rates have risen sharply, which people take as proof of over-diagnosis, when the evidence points mostly the other way for girls and adults.",
  teach:[
    "Prevalence in children is around 5 per cent worldwide on meta-analysis, with remarkable consistency across countries once the same criteria are applied.",
    "That international consistency is important: it argues against ADHD being a culturally constructed diagnosis, since prevalence estimates converge when diagnostic method is held constant.",
    "UK diagnosed prevalence is considerably lower than 5 per cent, indicating under-diagnosis rather than over-diagnosis at population level.",
    "Male to female ratio in clinical samples is around three or four to one, but in community samples is closer to two to one, indicating substantial under-recognition in girls.",
    "Girls present more often with predominantly inattentive presentation, which is less disruptive and therefore less often referred, and are diagnosed later.",
    "Adult prevalence is around 2.5 per cent, with around two-thirds of childhood cases having persisting symptoms and around 15 per cent continuing to meet full criteria.",
    "Referral rates for adult ADHD assessment have risen very sharply since around 2020, producing waiting lists of several years in many areas.",
    "Prevalence is markedly raised in specific populations: prison populations at several times the community rate, looked-after children, children with intellectual disability, and children with epilepsy.",
    "Socioeconomic gradient exists but is less steep than for conduct disorder.",
    "Comorbidity is the rule rather than the exception, with around two-thirds having at least one comorbid disorder."
  ],
  cards:[
    ["What is the prevalence of ADHD and what does its international consistency show?","Around 5 per cent in children worldwide on meta-analysis, with prevalence estimates converging across countries when the same diagnostic criteria are applied. This consistency argues against ADHD being a culturally constructed diagnosis."],
    ["Why is ADHD under-recognised in girls?","Because girls more often show the predominantly inattentive presentation, which is less disruptive in the classroom and therefore less often referred. The clinical sex ratio of three or four to one falls to around two to one in community samples, indicating substantial under-diagnosis."],
    ["Is ADHD over-diagnosed in the UK?","Diagnosed prevalence in the UK is considerably lower than the 5 per cent found in epidemiological studies, indicating under-diagnosis at population level, though individual over-diagnosis can occur where assessment is inadequate."]
  ],
  note:[
    "Adult prevalence is around 2.5 per cent, with two-thirds of childhood cases having persisting symptoms.",
    "Prison prevalence is several times the community rate.",
    "Adult assessment referrals have risen sharply since around 2020, producing multi-year waiting lists.",
    "Around two-thirds of children with ADHD have at least one comorbid disorder."
  ],
  refs:["nice","rutter","companion"] };

TEACH["10.8.3.2"] = { free:false,
  simple:"ADHD is one of the most heritable conditions in psychiatry, more so than most physical diseases people accept as genetic. Parenting does not cause it, though parenting affects how much damage it does.",
  teach:[
    "Heritability is around 75 to 80 per cent in twin studies, among the highest of any psychiatric disorder and higher than for most conditions accepted as biological.",
    "Genetic architecture is polygenic, with common variants of small effect and a contribution from rare copy number variants. Genome-wide association studies have identified multiple loci.",
    "Genetic correlation exists with autism, conduct problems, depression and educational attainment, consistent with shared neurodevelopmental vulnerability.",
    "Candidate gene work focused on dopaminergic genes including DRD4 and DAT1, with modest and inconsistently replicated effects, and this literature should be treated cautiously.",
    "Neurobiology: catecholaminergic dysfunction involving dopamine and noradrenaline in frontostriatal and frontocerebellar circuits, which is where all effective medications act.",
    "The dopamine transporter is the target of methylphenidate, which blocks reuptake; amfetamines additionally reverse the transporter and release vesicular stores.",
    "Structural imaging: modest reductions in total brain volume and in prefrontal cortex, basal ganglia, corpus callosum and cerebellum, with a delay in cortical maturation of around two to three years.",
    "The maturational delay hypothesis, from Shaw's longitudinal imaging work, proposes that cortical development follows a normal sequence but on a delayed timetable, with peak cortical thickness reached later.",
    "Functional imaging: reduced activation in frontostriatal networks during inhibitory control tasks, and altered default mode network suppression during task performance.",
    "The default mode interference hypothesis proposes that failure to suppress default mode activity during tasks produces attentional lapses, which fits the fluctuating rather than constant nature of the deficit.",
    "Cognitive models: executive dysfunction with deficits in inhibition, working memory and set-shifting; delay aversion, in which the child chooses immediate small rewards to escape delay; and temporal processing deficits.",
    "The dual pathway model, from Sonuga-Barke, proposes two independent routes, executive dysfunction and delay aversion or reward dysregulation, which explains why not all children show executive deficits.",
    "Barkley's model places behavioural inhibition as primary, with impairments in working memory, self-regulation of affect, internalisation of speech and reconstitution following from it.",
    "Environmental factors: prenatal exposure to alcohol, tobacco and valproate; extreme prematurity and low birth weight; lead exposure; and severe early deprivation as shown by the Romanian adoptee studies.",
    "The Romanian adoptee finding is important: severe institutional deprivation produced an ADHD-like presentation, showing that extreme environments can produce the phenotype.",
    "Dietary factors: the evidence for artificial food colourings is limited and applies to a small subgroup; elimination diets are not recommended routinely; and sugar does not cause ADHD despite persistent belief.",
    "Parenting does not cause ADHD. Parenting affects the development of comorbid conduct problems and the degree of impairment, which is a different claim and one worth making explicitly to families who blame themselves."
  ],
  cards:[
    ["What is the heritability of ADHD?","Around 75 to 80 per cent in twin studies, among the highest of any psychiatric disorder. The architecture is polygenic with common variants of small effect plus a contribution from rare copy number variants."],
    ["Describe the dual pathway model.","Sonuga-Barke's proposal of two independent aetiological routes to ADHD: executive dysfunction, with deficits in inhibition and working memory; and delay aversion or reward dysregulation, in which the child chooses immediate small rewards to escape the aversiveness of delay. It explains why not all children with ADHD show executive deficits."],
    ["What is the maturational delay hypothesis?","Shaw's finding from longitudinal imaging that cortical development in ADHD follows a normal sequence but on a delayed timetable, with peak cortical thickness reached around two to three years later than in typically developing children."],
    ["What is the default mode interference hypothesis?","That failure to adequately suppress default mode network activity during task performance produces intrusive attentional lapses, which accounts for the fluctuating rather than constant nature of attentional failure in ADHD."],
    ["Does parenting cause ADHD?","No. ADHD is highly heritable and parenting does not cause it. Parenting does affect the development of comorbid conduct problems and the overall degree of impairment, which is a different claim and one worth making explicitly to families who blame themselves."]
  ],
  note:[
    "Methylphenidate blocks dopamine reuptake; amfetamines additionally reverse the transporter.",
    "Prenatal alcohol, tobacco and valproate exposure, prematurity and lead exposure contribute.",
    "Severe institutional deprivation produced an ADHD-like phenotype in the Romanian adoptees.",
    "Sugar does not cause ADHD; food colouring evidence applies to a small subgroup only.",
    "Barkley's model places behavioural inhibition as the primary deficit."
  ],
  refs:["semgen","stahl","rutter"] };

TEACH["10.8.3.3"] = { free:true,
  simple:"Three things define it: cannot sustain attention, cannot sit still, cannot wait. All children do these things; in ADHD they happen more, everywhere, and they cost the child something real.",
  teach:[
    "Two symptom domains: inattention and hyperactivity-impulsivity. Six or more symptoms in either domain in children, or five or more in those aged 17 and over.",
    "Inattention symptoms: failure to attend to detail, difficulty sustaining attention, not seeming to listen, not following through, difficulty organising, avoidance of sustained mental effort, losing things, distractibility and forgetfulness.",
    "Hyperactivity-impulsivity symptoms: fidgeting, leaving seat, running or climbing inappropriately, inability to play quietly, being on the go, talking excessively, blurting answers, difficulty waiting turn and interrupting.",
    "Three presentations: predominantly inattentive, predominantly hyperactive-impulsive, and combined. Presentation can change over development in the same individual.",
    "DSM-5 requires several symptoms before age 12, raised from age 7 in DSM-IV to reflect that inattentive presentations are often identified later.",
    "Symptoms must be present in two or more settings, must interfere with functioning, and must not be better explained by another disorder.",
    "The two-settings requirement is essential and is the commonest point at which inadequate assessment fails. School information is mandatory.",
    "Impairment, not symptom count, is what makes it a disorder. A child with symptoms who is functioning well does not have ADHD.",
    "ICD-11 uses attention deficit hyperactivity disorder with the same broad structure, having abandoned the narrower ICD-10 hyperkinetic disorder which required all three of inattention, hyperactivity and impulsivity.",
    "That change matters historically: ICD-10 hyperkinetic disorder was much more restrictive, which is why older UK prevalence figures are lower than American ones.",
    "Presentation changes with development: hyperactivity is most evident in early childhood, declines through adolescence, and in adults appears as inner restlessness rather than overt overactivity.",
    "Inattention persists and becomes the dominant impairment in adolescence and adulthood, affecting academic work, employment and organisation.",
    "Emotional dysregulation is not in the diagnostic criteria but is present in a large proportion and is a major source of impairment, with low frustration tolerance and rapid intense emotional responses.",
    "Many clinicians regard emotional dysregulation as a core feature that the criteria omit, and it predicts impairment independently of the core symptoms.",
    "Comorbidity: oppositional defiant disorder and conduct disorder in a large proportion, specific learning difficulties, developmental coordination disorder, autism, tics, anxiety, depression, and sleep disorder.",
    "Autism and ADHD may now be diagnosed together, which DSM-IV prohibited, and co-occurrence is common.",
    "Assessment: developmental history, information from school using rating scales, observation, physical examination including cardiovascular assessment, height and weight, and consideration of differential diagnoses.",
    "Rating scales support but never establish the diagnosis: Conners, SNAP-IV, the Strengths and Difficulties Questionnaire, and in adults the DIVA structured interview.",
    "Differential diagnosis: hearing impairment, developmental language disorder, absence seizures, sleep disorder including sleep apnoea, anxiety, trauma, attachment difficulty, intellectual disability, and hyperthyroidism.",
    "Sleep disorder deserves specific mention. Obstructive sleep apnoea in a child produces inattention and hyperactivity, and adenotonsillectomy resolves it."
  ],
  cards:[
    ["State the diagnostic requirements for ADHD.","Six or more symptoms of inattention or of hyperactivity-impulsivity, or five or more in those aged 17 and over, present for at least six months, with several symptoms before age 12, present in two or more settings, causing clear functional impairment, and not better explained by another disorder."],
    ["How does the presentation change across development?","Hyperactivity is most evident in early childhood, declines through adolescence, and in adults appears as inner restlessness rather than overt overactivity. Inattention persists and becomes the dominant source of impairment in adolescence and adulthood."],
    ["What is emotional dysregulation in ADHD?","Low frustration tolerance with rapid, intense emotional responses, present in a large proportion of those with ADHD. It is not in the diagnostic criteria but predicts impairment independently of the core symptoms, and many clinicians regard it as a core feature the criteria omit."],
    ["Which differential diagnoses must be excluded?","Hearing impairment, developmental language disorder, absence seizures, sleep disorder including obstructive sleep apnoea, anxiety, trauma, attachment difficulty, intellectual disability and hyperthyroidism. Obstructive sleep apnoea deserves specific attention, since it produces inattention and hyperactivity resolved by adenotonsillectomy."],
    ["Why is school information mandatory?","Because symptoms must be present in two or more settings to meet criteria, and reliance on parental report alone is the commonest point at which inadequate assessment fails."]
  ],
  note:[
    "DSM-5 raised the age of onset threshold from 7 to 12 years.",
    "ICD-11 abandoned the narrower ICD-10 hyperkinetic disorder, which required all three symptom clusters.",
    "Autism and ADHD may now be diagnosed together, which DSM-IV prohibited.",
    "Rating scales such as Conners, SNAP-IV and DIVA support but never establish the diagnosis.",
    "Impairment rather than symptom count is what makes it a disorder."
  ],
  refs:["icd11","dsm5","nice"] };

TEACH["10.8.3.4"] = { free:false,
  simple:"Stimulants work better than almost anything else in psychiatry. The effect size is large, the response is fast, and the main risks are appetite, sleep and growth, all of which are monitorable.",
  teach:[
    "NICE NG87: for children under 5, parent training first-line, and medication only after specialist advice. For children aged 5 and over, offer medication where symptoms cause persistent significant impairment after environmental modification.",
    "Environmental modification comes first at every age: seating, task structure, movement breaks, chunked instructions, and reduced distraction.",
    "Methylphenidate is first-line in children and young people. Lisdexamfetamine is offered where methylphenidate has been tried for six weeks without adequate benefit.",
    "In adults, methylphenidate or lisdexamfetamine are both first-line options.",
    "Effect sizes for stimulants are large, of the order of 0.8 to 1.0, which exceeds most psychiatric treatments and most of medicine.",
    "Response is rapid, usually within days, so a failure to respond after adequate dosing over a few weeks means the drug is not working rather than needing more time.",
    "Around 70 per cent respond to the first stimulant tried, and around 90 per cent respond to one of the two stimulant classes, so failure of one does not predict failure of the other.",
    "Adverse effects: reduced appetite, insomnia, headache, abdominal pain, irritability especially as the dose wears off, and increased heart rate and blood pressure.",
    "Rebound irritability as the dose wears off is common and is frequently mistaken for worsening ADHD or for a mood disorder.",
    "Growth: stimulants produce a modest reduction in growth velocity, of the order of one to two centimetres in eventual height in most studies, largely attributable to appetite suppression, and it should be monitored and discussed.",
    "Monitor height and weight at least six-monthly in children, plot on a growth chart, and consider a treatment break if growth is faltering.",
    "Cardiovascular monitoring: measure pulse and blood pressure before treatment and at every dose change and at least every six months. ECG only where there is cardiac history, family history of sudden death, or abnormal examination.",
    "Stimulants do not cause psychosis in most people, but can precipitate it in the vulnerable, and psychotic symptoms require review of treatment.",
    "Tics: stimulants may worsen tics in some children, though meta-analysis does not support a general effect, and tics are not an absolute contraindication.",
    "Non-stimulants: atomoxetine, a noradrenaline reuptake inhibitor, takes weeks to work, carries warnings for suicidal ideation and hepatotoxicity, and is used where stimulants are unsuitable or misuse is a concern.",
    "Guanfacine, an alpha-2A agonist, is useful particularly where tics or aggression coexist, and causes sedation and hypotension.",
    "Misuse and diversion: stimulants are controlled drugs and diversion occurs, particularly in adolescents and students. Lisdexamfetamine is a prodrug requiring enzymatic conversion, which limits misuse by injection or insufflation.",
    "The MTA study is the key trial: at 14 months carefully managed medication was superior to behavioural treatment alone, with combined treatment offering modest additional benefit, but by 36 months and at 8-year follow-up group differences had disappeared.",
    "The MTA long-term result should be reported honestly: medication produces large short-term benefit, and its long-term advantage in naturalistic follow-up is not demonstrated, which reflects treatment changes over time rather than proving medication does not work.",
    "Non-pharmacological: parent training, classroom interventions, and support for organisational skills. Cognitive training and neurofeedback have weak evidence and are not recommended.",
    "Elimination diets and supplements are not recommended routinely. Omega-3 has small and inconsistent effects."
  ],
  cards:[
    ["What does NICE recommend for ADHD by age?","Under 5: parent training first-line with medication only after specialist advice. Aged 5 and over: environmental modification first, then medication where symptoms cause persistent significant impairment, with methylphenidate first-line and lisdexamfetamine offered after an inadequate six-week trial of methylphenidate."],
    ["What monitoring is required on stimulant treatment?","Height and weight at least six-monthly plotted on a growth chart, with consideration of a treatment break if growth falters; pulse and blood pressure before treatment, at every dose change and at least six-monthly; and ECG only where there is cardiac history, family history of sudden death, or abnormal examination."],
    ["What did the MTA study show?","At 14 months, carefully managed medication was superior to behavioural treatment alone, with combined treatment offering modest additional benefit. By 36 months and at 8-year follow-up the group differences had disappeared, reflecting changes in treatment over time rather than demonstrating that medication is ineffective."],
    ["What are the response rates to stimulants?","Around 70 per cent respond to the first stimulant tried, and around 90 per cent respond to one of the two stimulant classes, so failure of methylphenidate does not predict failure of lisdexamfetamine. Effect sizes are large, of the order of 0.8 to 1.0."],
    ["When are non-stimulants used, and what are their features?","Where stimulants are unsuitable, not tolerated or where diversion is a concern. Atomoxetine is a noradrenaline reuptake inhibitor taking weeks to work, with warnings for suicidal ideation and hepatotoxicity. Guanfacine is an alpha-2A agonist useful where tics or aggression coexist, causing sedation and hypotension."]
  ],
  note:[
    "Rebound irritability as the dose wears off is frequently mistaken for worsening ADHD.",
    "Stimulants reduce growth velocity by around one to two centimetres in eventual height.",
    "Lisdexamfetamine is a prodrug requiring enzymatic conversion, which limits misuse.",
    "Tics are not an absolute contraindication to stimulants.",
    "Cognitive training, neurofeedback and elimination diets are not recommended."
  ],
  refs:["nice","maudsley","stahl"] };

TEACH["10.8.3.5"] = { free:false,
  simple:"ADHD does not go away for most people, and untreated it costs them accidents, jobs, relationships and, in a substantial number, prison. Treated, most of those risks come down measurably.",
  teach:[
    "Around two-thirds have persisting symptoms into adulthood and around 15 per cent continue to meet full diagnostic criteria, with hyperactivity declining more than inattention.",
    "Persistence is predicted by symptom severity, comorbidity particularly conduct disorder, and family history.",
    "Educational outcomes are substantially worse: lower attainment, higher rates of exclusion, higher rates of leaving education early, and lower rates of higher education entry.",
    "Occupational outcomes: lower employment rates, lower earnings, more job changes and more dismissals, independent of educational attainment.",
    "Accidents and injury: substantially raised rates of accidental injury, road traffic accidents, and emergency department attendance. Medication reduces road traffic accident risk in registry studies.",
    "That registry finding is important and is under-taught: treated ADHD is associated with reduced accidents, reduced injury and reduced substance misuse compared with the same individuals untreated.",
    "Substance misuse: raised risk of substance use disorder, particularly where conduct disorder coexists. Stimulant treatment in childhood does not increase, and in several studies reduces, later substance misuse.",
    "The concern that treating ADHD with stimulants causes later addiction is not supported by the evidence, and should be addressed directly with families since it is a common reason for refusing treatment.",
    "Criminality: markedly raised rates of offending and imprisonment, and Swedish registry studies show reduced offending during periods of medication treatment within the same individuals.",
    "Within-individual designs are the strongest evidence available here, since they control for all stable confounders, and they consistently favour treatment.",
    "Mental health: raised rates of depression, anxiety, personality disorder, self-harm and suicide.",
    "Mortality is raised, with a Danish cohort study finding roughly twice the mortality rate, driven largely by accidents.",
    "Poor prognostic factors: comorbid conduct disorder, low intelligence, family adversity, and untreated status.",
    "Comorbid conduct disorder is the strongest single predictor of poor adult outcome, more so than ADHD severity itself.",
    "Good prognostic factors: absence of conduct disorder, higher intelligence, family support, and effective treatment maintained through adolescence.",
    "Treatment discontinuation in adolescence is very common, often at the point of greatest need, and is a major service failure alongside failed transition to adult services.",
    "Adult outcomes are heterogeneous and many people with ADHD do well, particularly where they find occupational niches matching their strengths, and this should be said to families alongside the risk figures."
  ],
  cards:[
    ["What does registry evidence show about ADHD treatment and adverse outcomes?","Within-individual analyses comparing treated and untreated periods in the same people show reduced road traffic accidents, reduced injury, reduced substance misuse and reduced offending during medication treatment. These designs control for all stable confounders and consistently favour treatment."],
    ["Does stimulant treatment in childhood cause later addiction?","No. The evidence does not support it, and several studies show reduced rates of later substance misuse in treated compared with untreated individuals. This should be addressed directly with families, since it is a common reason for refusing treatment."],
    ["Which comorbidity most strongly predicts poor adult outcome in ADHD?","Comorbid conduct disorder, which predicts poor adult outcome more strongly than ADHD severity itself."],
    ["What is the mortality picture in ADHD?","Raised, with a Danish cohort study finding roughly twice the mortality rate of unaffected individuals, driven largely by accidents rather than by any direct effect of the disorder."]
  ],
  note:[
    "Around two-thirds have persisting symptoms; around 15 per cent meet full criteria in adulthood.",
    "Educational and occupational outcomes are worse independent of intelligence.",
    "Treatment discontinuation in adolescence is common and often occurs at the point of greatest need.",
    "Adult outcomes are heterogeneous and many people do well in occupational niches matching their strengths."
  ],
  refs:["nice","rutter","companion"] };

/* ---------- 10.8.4 ANXIETY DISORDERS INCLUDING OCD ---------- */

TEACH["10.8.4.1"] = { free:true,
  simple:"Anxiety disorders are the commonest mental health problem in childhood, and the most likely to be missed, because an anxious child is quiet and a quiet child is not a problem in a classroom of thirty.",
  teach:[
    "Anxiety disorders are the commonest group of psychiatric disorders in children and adolescents, with prevalence estimates around 6 to 8 per cent at any one time.",
    "Lifetime prevalence by adolescence is considerably higher, of the order of 15 to 30 per cent depending on definition.",
    "Female predominance emerges in adolescence, as with depression, having been more equal in early childhood.",
    "Age of onset varies systematically by disorder: separation anxiety and specific phobia in early childhood; social anxiety disorder in early adolescence with a median around 13; panic disorder in mid to late adolescence; generalised anxiety disorder across childhood and adolescence.",
    "Separation anxiety disorder is the commonest anxiety disorder in younger children, affecting around 3 to 4 per cent.",
    "Specific phobia is very common, with mild fears near-universal in childhood and clinically significant phobia affecting around 5 per cent.",
    "Selective mutism is rare, affecting under 1 per cent, and is classified as an anxiety disorder in both current systems.",
    "OCD affects around 1 to 2 per cent of children and adolescents, with a bimodal onset and an early peak around age 10 that is male-predominant and more often tic-associated.",
    "Around half of adult OCD begins in childhood or adolescence, which makes childhood OCD a substantial contributor to lifetime burden.",
    "Under-detection is the dominant epidemiological problem. Internalising disorders do not disrupt classrooms, so they are not referred, and average delay to treatment is measured in years.",
    "Comorbidity is high: multiple anxiety disorders together, depression, ADHD, autism and, in OCD, tic disorders."
  ],
  cards:[
    ["Which is the commonest group of childhood psychiatric disorders?","Anxiety disorders, with point prevalence around 6 to 8 per cent and lifetime prevalence by adolescence of the order of 15 to 30 per cent depending on definition."],
    ["Give the typical ages of onset across the childhood anxiety disorders.","Separation anxiety disorder and specific phobia in early childhood; social anxiety disorder in early adolescence with a median around age 13; panic disorder in mid to late adolescence; and generalised anxiety disorder across childhood and adolescence."],
    ["Why are childhood anxiety disorders under-detected?","Because internalising disorders do not disrupt the classroom, so anxious children are not referred while disruptive children are. Average delay to treatment is measured in years."]
  ],
  note:[
    "Separation anxiety disorder is the commonest anxiety disorder in younger children at 3 to 4 per cent.",
    "OCD affects around 1 to 2 per cent, with an early male-predominant tic-associated peak around age 10.",
    "Around half of adult OCD begins in childhood or adolescence.",
    "Selective mutism affects under 1 per cent and is classified as an anxiety disorder.",
    "Female predominance emerges in adolescence, having been more equal in early childhood."
  ],
  refs:["nice","rutter","icd11"] };

TEACH["10.8.4.2"] = { free:false,
  simple:"Anxious children usually have an anxious parent, and the transmission is not mainly genetic. It is watching what the adult treats as dangerous, and being helped to avoid it.",
  teach:[
    "Heritability of childhood anxiety is moderate, around 30 to 40 per cent, lower than for ADHD or autism, leaving substantial room for environmental transmission.",
    "What is inherited is largely a general vulnerability, best described as behavioural inhibition or trait neuroticism, rather than a specific disorder.",
    "Behavioural inhibition, from Kagan, is a temperamental style of withdrawal and physiological reactivity to novelty, identifiable in infancy, moderately stable, and specifically predictive of later social anxiety disorder.",
    "Around 40 per cent of behaviourally inhibited toddlers develop an anxiety disorder, which means it is a risk factor and not a destiny.",
    "Parental anxiety raises child anxiety risk substantially, and the transmission operates through modelling, information transfer and accommodation as much as through genes.",
    "Modelling: children learn what is dangerous by watching adult reactions, demonstrated experimentally in studies where infants' responses to novel stimuli follow maternal facial expression.",
    "Verbal information transfer: telling children that things are dangerous produces fear and avoidance, shown experimentally with novel animals.",
    "Parental accommodation is the central maintaining mechanism: doing things for the child to prevent distress, answering the reassurance, avoiding the trigger. It relieves the child immediately and maintains the anxiety.",
    "Family accommodation predicts severity and poorer treatment response, and reducing it is a specific treatment target with its own evidence base.",
    "Overprotective and overcontrolling parenting is associated with child anxiety, though the direction of effect is bidirectional: anxious children elicit protective parenting.",
    "Conditioning pathways: direct aversive experience, modelling, and information transmission, being Rachman's three pathways, all operate in childhood.",
    "Cognitive factors: attentional bias to threat, interpretation bias in which ambiguous situations are read as dangerous, and reduced expectation of coping.",
    "Threat interpretation bias is demonstrable in anxious children and in their parents, and parental interpretation predicts child interpretation, which is the cognitive mechanism of transmission.",
    "Life events and adversity: bullying, parental separation, illness, bereavement and trauma all raise risk, with bullying victimisation having particularly robust evidence.",
    "OCD aetiology in children: heritability is higher for early-onset OCD, at around 45 to 65 per cent, with the same cortico-striato-thalamo-cortical circuit involvement as in adults.",
    "PANDAS and the broader PANS category propose abrupt-onset OCD and tics following streptococcal or other infection through autoimmune mechanisms. The concept remains contested and should be presented as such.",
    "Sensitive periods: anxiety in early childhood shapes the developing threat appraisal system, which is the argument for early intervention rather than waiting for the child to grow out of it."
  ],
  cards:[
    ["What is behavioural inhibition and how predictive is it?","Kagan's temperamental style of withdrawal from and physiological reactivity to novelty, identifiable in infancy and moderately stable. Around 40 per cent of behaviourally inhibited toddlers develop an anxiety disorder, and it is specifically predictive of later social anxiety disorder, making it a risk factor rather than a destiny."],
    ["How does parental anxiety transmit to children?","Through modelling, in which children learn what is dangerous from adult reactions; verbal information transfer, in which adults tell children that things are dangerous; and accommodation, in which the parent prevents the child's distress by avoiding triggers, providing reassurance or completing tasks for them. Genetic transmission accounts for only part of the association."],
    ["What is family accommodation and why does it matter?","Parental behaviour that relieves the child's anxiety in the moment, including reassurance, avoidance of triggers and completing tasks for the child. It maintains the disorder by preventing disconfirmation, predicts greater severity and poorer treatment response, and reducing it is a specific treatment target with its own evidence base."],
    ["What is the cognitive mechanism of anxiety transmission?","Threat interpretation bias, in which ambiguous situations are read as dangerous. It is demonstrable in anxious children and in their parents, and parental interpretation predicts child interpretation."]
  ],
  note:[
    "Heritability is around 30 to 40 per cent, lower than for ADHD or autism.",
    "Overprotective parenting is bidirectionally related to child anxiety.",
    "Rachman's three pathways are direct conditioning, modelling and information transmission.",
    "Early-onset OCD has higher heritability, around 45 to 65 per cent.",
    "PANDAS and PANS remain contested and should be presented as such."
  ],
  refs:["rutter","gross","nice"] };

TEACH["10.8.4.3"] = { free:true,
  simple:"Anxious children rarely say they are anxious. They say their tummy hurts, they will not go to school, they cannot sleep, and they will not leave their mother, and each of those gets treated as a separate problem.",
  teach:[
    "Presentation is developmentally shaped: younger children present with somatic complaints, clinging, tantrums, crying and refusal; older children can report worry and physical symptoms.",
    "Somatic presentation is the norm in younger children, with abdominal pain and headache the commonest complaints, and repeated medical presentation is common before anxiety is recognised.",
    "Separation anxiety disorder: developmentally excessive fear of separation from attachment figures, with distress on separation, worry about harm befalling them, refusal to go to school or sleep alone, nightmares about separation, and somatic complaints on separation.",
    "Separation anxiety is developmentally normal between about 8 months and 3 years. It becomes a disorder when it is excessive for the developmental stage, persistent and impairing.",
    "School refusal is frequently the presenting problem and may arise from separation anxiety, social anxiety, generalised anxiety, bullying, or depression, and the underlying reason determines treatment.",
    "Generalised anxiety disorder in children: excessive worry across multiple domains, frequently about performance, safety, health and catastrophe, with reassurance seeking, perfectionism and physical symptoms.",
    "Children with generalised anxiety often present as unusually well behaved and conscientious, which delays recognition further.",
    "Social anxiety disorder: fear of scrutiny and negative evaluation, with avoidance of speaking in class, eating in front of others, using public toilets, and joining groups. It must be distinguished from autism, where the difficulty is in understanding rather than in fear of evaluation.",
    "Selective mutism: consistent failure to speak in specific social situations where speech is expected, despite speaking normally elsewhere, for at least a month beyond the first month of school.",
    "Selective mutism is an anxiety disorder, not oppositionality or a language disorder, and treating it as refusal makes it worse.",
    "Specific phobia in children: fear may be expressed as crying, tantrums, freezing or clinging, and the child need not recognise the fear as excessive, unlike adults.",
    "Panic disorder is uncommon before adolescence, and panic attacks in younger children are more often situationally bound to a phobic stimulus.",
    "OCD in children: obsessions of contamination, harm, symmetry and forbidden thoughts; compulsions of washing, checking, ordering, repeating and reassurance seeking.",
    "Children may not report obsessions, either through embarrassment or because they lack the vocabulary, and the compulsions may be all that is visible.",
    "Family involvement in rituals is very common in paediatric OCD, with parents required to answer questions, participate in washing routines or provide reassurance, and this must be asked about directly.",
    "Insight is more variable in children and the requirement that the person recognise the thoughts as excessive is relaxed in children.",
    "Assessment: developmental history, information from school, direct interview with the child alone as well as with parents, and specific enquiry about bullying and about family accommodation.",
    "Instruments: the Spence Children's Anxiety Scale, the Screen for Child Anxiety Related Emotional Disorders, and for OCD the Children's Yale-Brown Obsessive Compulsive Scale.",
    "Always see the young person alone. Anxiety about disclosure in front of parents is common, and bullying and abuse are rarely disclosed with a parent present."
  ],
  cards:[
    ["How does anxiety present in younger children?","Somatically and behaviourally rather than through reported worry: abdominal pain, headache, clinging, tantrums, crying, sleep difficulty and refusal. Repeated medical presentation is common before anxiety is recognised."],
    ["What is selective mutism and how must it be understood?","Consistent failure to speak in specific social situations where speech is expected, despite normal speech elsewhere, lasting at least a month beyond the first month of school. It is an anxiety disorder, not oppositionality or a language disorder, and treating it as deliberate refusal makes it worse."],
    ["Distinguish social anxiety disorder from autism in a child.","In social anxiety the child understands social expectations and fears negative evaluation, and is typically socially competent in comfortable settings. In autism the difficulty is in understanding and processing social interaction itself, is present across all settings including with close family, and is accompanied by restricted repetitive behaviours and sensory features."],
    ["What is distinctive about OCD presentation in children?","Children may not report obsessions, through embarrassment or lack of vocabulary, so only the compulsions may be visible. Family involvement in rituals is very common, with parents required to answer questions, participate in washing or provide reassurance, and must be asked about directly. Insight requirements are relaxed in children."],
    ["Why must a young person be seen alone?","Because anxiety about disclosing in front of parents is common, and bullying, abuse and the true content of obsessions are rarely disclosed with a parent present."]
  ],
  note:[
    "Separation anxiety is developmentally normal between about 8 months and 3 years.",
    "School refusal may arise from separation anxiety, social anxiety, bullying or depression, and the cause determines treatment.",
    "Children with generalised anxiety often present as unusually conscientious, delaying recognition.",
    "Panic disorder is uncommon before adolescence.",
    "SCAS, SCARED and CY-BOCS are the standard instruments."
  ],
  refs:["icd11","nice","rutter"] };

TEACH["10.8.4.4"] = { free:false,
  simple:"CBT works for anxious children and it works better when the parent is taught to stop protecting the child from the thing they are frightened of. That is uncomfortable advice to give and it is the effective part.",
  teach:[
    "CBT is first-line for childhood anxiety disorders, with strong evidence, delivered individually, in groups, or through parents.",
    "Around 60 per cent of children are free of their primary anxiety disorder after CBT, and around half are free of all anxiety disorders.",
    "Components: psychoeducation, identification of anxious thoughts, cognitive restructuring adapted for developmental level, graded exposure, and relapse prevention.",
    "Exposure is the active ingredient, as in adults. Cognitive work supports it but does not replace it, and a course without exposure is not treatment.",
    "Developmental adaptation: more behavioural and less cognitive with younger children, more use of play, drawing and stories, shorter sessions, and reward systems for completing exposure tasks.",
    "Parent-delivered CBT, in which the therapist works through the parent rather than directly with the child, is effective in younger children and is more efficient in service terms.",
    "Reducing family accommodation is a specific and effective intervention. SPACE, Supportive Parenting for Anxious Childhood Emotions, works entirely through parents by reducing accommodation while increasing supportive responses, with randomised evidence of non-inferiority to child CBT.",
    "That finding matters practically: an anxious child who will not attend therapy can still be treated by working with the parents.",
    "Low-intensity and guided self-help interventions delivered by trained practitioners have good evidence in mild to moderate childhood anxiety and are the entry point in stepped care.",
    "Digital and school-based interventions reach children who never reach services, and Mental Health Support Teams exist for this.",
    "Medication: SSRIs are effective in childhood anxiety disorders, with sertraline and fluoxetine having the best evidence, and are second-line after psychological treatment or used in combination in moderate to severe disorder.",
    "The CAMS trial in childhood anxiety found combination of CBT with sertraline superior to either alone, with response rates around 80 per cent for combination against around 60 per cent for each treatment separately.",
    "Warn about initial increase in anxiety and monitor for suicidal thinking at initiation and dose change, as required for all SSRIs in under-18s.",
    "Benzodiazepines have no role in childhood anxiety disorders.",
    "OCD in children: NICE recommends CBT with exposure and response prevention as first-line, involving the family, with an SSRI added for moderate to severe disorder or where CBT has not produced sufficient benefit.",
    "Sertraline and fluoxetine are the SSRIs used in paediatric OCD, at higher doses and for longer than in depression, as in adults.",
    "The POTS trial in paediatric OCD found combined CBT and sertraline superior to either alone, consistent with the anxiety literature.",
    "School refusal: graded return to school as early as possible, with a plan agreed between family, school and clinician, since prolonged absence makes return progressively harder.",
    "Time out of school is the strongest predictor of failure to return, so speed matters more than perfection of the plan.",
    "Selective mutism: behavioural approaches using stimulus fading and shaping, delivered in the school setting, with speech and language therapy involvement, and SSRIs in severe persistent cases."
  ],
  cards:[
    ["What is first-line treatment for childhood anxiety disorders and what proportion respond?","Cognitive behavioural therapy, with around 60 per cent free of their primary anxiety disorder afterwards and around half free of all anxiety disorders. Exposure is the active ingredient; cognitive work supports but does not replace it."],
    ["What is SPACE and why is it important?","Supportive Parenting for Anxious Childhood Emotions, a treatment delivered entirely through parents that reduces family accommodation while increasing supportive responses. Randomised evidence shows non-inferiority to child CBT, which means an anxious child who will not attend therapy can still be treated by working with the parents."],
    ["What did the CAMS and POTS trials show?","CAMS, in childhood anxiety, found combination of CBT with sertraline superior to either alone, with response around 80 per cent for combination against 60 per cent for each separately. POTS, in paediatric OCD, similarly found combined CBT and sertraline superior to either alone."],
    ["How should school refusal be managed?","Graded return to school as early as possible, with a plan agreed jointly between family, school and clinician. Time out of school is the strongest predictor of failure to return, so speed of return matters more than perfection of the plan."],
    ["How is selective mutism treated?","Behavioural approaches using stimulus fading and shaping delivered in the school setting, with speech and language therapy involvement, and SSRIs in severe or persistent cases. It must not be treated as deliberate refusal."]
  ],
  note:[
    "Treatment is more behavioural and less cognitive with younger children.",
    "Sertraline and fluoxetine have the best SSRI evidence in childhood anxiety and OCD.",
    "Benzodiazepines have no role in childhood anxiety disorders.",
    "OCD requires higher SSRI doses and longer duration than depression, as in adults.",
    "Low-intensity guided self-help is the entry point in stepped care."
  ],
  refs:["nice","maudsley","rutter"] };

TEACH["10.8.4.5"] = { free:false,
  simple:"Childhood anxiety does not usually resolve on its own, and untreated it is the strongest single predictor of adult depression. Treated, most children get substantially better and stay better.",
  teach:[
    "Untreated childhood anxiety disorders show substantial persistence, with a majority still meeting criteria for an anxiety disorder or having developed another disorder at follow-up.",
    "Homotypic continuity: childhood anxiety predicts adult anxiety, with the same or a different anxiety disorder.",
    "Heterotypic continuity: childhood anxiety is the strongest single childhood predictor of adult depression, and the sequence anxiety-then-depression is one of the best-established developmental pathways in psychiatry.",
    "That finding is the strongest argument for treating childhood anxiety in its own right rather than waiting to see whether it settles.",
    "Treated outcome is good. Gains from CBT are maintained at long-term follow-up in the majority, with several studies showing maintenance at five years and beyond.",
    "A substantial minority do not respond and remain symptomatic, and non-response predicts continuing difficulty into adulthood.",
    "Predictors of poorer outcome: greater severity, comorbid depression, comorbid ADHD or autism, parental anxiety and parental psychopathology, family accommodation, and social anxiety disorder specifically.",
    "Social anxiety disorder has the poorest outcome of the childhood anxiety disorders, with the greatest persistence and the poorest response to treatment.",
    "Predictors of better outcome: younger age at treatment, absence of comorbidity, absence of parental anxiety, engagement with exposure tasks, and reduction in family accommodation.",
    "Treating parental anxiety improves child outcome, which is a specific and under-used intervention.",
    "Educational consequences: school refusal is associated with reduced attainment, and prolonged absence predicts failure to return, exclusion from qualifications, and NEET status in adolescence.",
    "Paediatric OCD: around 40 to 60 per cent persist into adulthood, though many improve substantially, and early treatment improves outcome.",
    "Poor prognostic factors in paediatric OCD: earlier onset, longer duration before treatment, comorbid tic disorder, hoarding symptoms, poor insight, and high family accommodation.",
    "Selective mutism generally improves with treatment, though social anxiety frequently persists after speech has been re-established, and follow-up should reflect that.",
    "Long-term functional outcomes: untreated childhood anxiety predicts lower educational attainment, lower income, reduced likelihood of forming stable relationships, and increased health service use in adulthood.",
    "Early intervention alters trajectory and is the practical argument for detecting internalising disorders that do not disrupt classrooms and therefore do not get referred."
  ],
  cards:[
    ["What is the most important continuity from childhood anxiety?","Childhood anxiety is the strongest single childhood predictor of adult depression, and the anxiety-then-depression sequence is one of the best-established developmental pathways in psychiatry. It is the strongest argument for treating childhood anxiety in its own right."],
    ["Which childhood anxiety disorder has the poorest outcome?","Social anxiety disorder, with the greatest persistence into adulthood and the poorest response to treatment among the childhood anxiety disorders."],
    ["What is the outcome of paediatric OCD?","Around 40 to 60 per cent persist into adulthood, though many improve substantially. Poorer outcome is predicted by earlier onset, longer duration before treatment, comorbid tic disorder, hoarding symptoms, poor insight and high family accommodation."],
    ["Which parental factor is a modifiable predictor of child outcome?","Parental anxiety. Treating the parent's own anxiety improves the child's outcome, which is a specific and under-used intervention, as is reducing family accommodation."]
  ],
  note:[
    "Gains from CBT are maintained at five-year follow-up in the majority.",
    "Prolonged school absence predicts failure to return and NEET status in adolescence.",
    "Selective mutism improves with treatment but underlying social anxiety often persists.",
    "Untreated childhood anxiety predicts lower attainment, lower income and higher adult health service use."
  ],
  refs:["nice","rutter","companion"] };

/* ---------- 10.8.5 AFFECTIVE DISORDERS ---------- */

TEACH["10.8.5.1"] = { free:true,
  simple:"Depression is rare before puberty and common after it, and the sex difference appears at exactly the same point. Something about adolescence changes the picture completely.",
  teach:[
    "Prepubertal depression is uncommon, with prevalence around 1 to 2 per cent, and the sex ratio is approximately equal or slightly male-predominant.",
    "Adolescent depression is common, with point prevalence around 4 to 5 per cent and cumulative prevalence by age 18 of the order of 15 to 20 per cent.",
    "The female predominance of two to one emerges during adolescence, between roughly ages 12 and 15, and this timing is one of the most consistent findings in developmental epidemiology.",
    "Explanations for the emerging sex difference include hormonal change, differential response to interpersonal stress, rumination style, body image and pubertal timing, and none is established alone.",
    "Early pubertal timing in girls is associated with raised depression risk, and the association is mediated substantially by social factors rather than by hormones directly.",
    "Rates of adolescent depression and anxiety have risen in UK and international surveys since around 2010, with the rise concentrated in girls.",
    "Explanations for the rise are contested: social media and smartphone use, academic pressure, reduced unstructured time, economic conditions, and increased help-seeking and recognition have all been proposed.",
    "The social media explanation is popular and the evidence is genuinely mixed, with small average associations that may be causal in a subgroup, and honest teaching states that rather than asserting a cause.",
    "Bipolar disorder in children is rare. Prepubertal mania is very rare in UK practice, and the substantially higher US diagnostic rates in the 1990s and 2000s reflected diagnostic practice rather than epidemiology.",
    "That diagnostic divergence led to the creation of disruptive mood dysregulation disorder in DSM-5 specifically to capture the children being labelled bipolar.",
    "Adolescent-onset bipolar disorder does occur, with onset typically in late adolescence, and around a fifth to a quarter of bipolar disorder begins before age 18.",
    "Self-harm in adolescents is common, with around 10 per cent reporting self-harm in community surveys and higher rates in girls, and hospital presentation rates have risen sharply."
  ],
  cards:[
    ["When does the female predominance in depression emerge?","During adolescence, between roughly ages 12 and 15. Prepubertal depression has an approximately equal sex ratio, and the two to one female predominance emerges with puberty, which is one of the most consistent findings in developmental epidemiology."],
    ["What is the status of prepubertal bipolar disorder?","Very rare in UK practice. The substantially higher United States diagnostic rates in the 1990s and 2000s reflected diagnostic practice rather than true epidemiology, and disruptive mood dysregulation disorder was created in DSM-5 specifically to capture the children who were being labelled bipolar."],
    ["What is the evidence on rising adolescent depression rates?","Rates have risen in UK and international surveys since around 2010, concentrated in girls. Proposed explanations include social media and smartphone use, academic pressure, reduced unstructured time, economic conditions and increased recognition. The social media evidence is genuinely mixed, with small average associations that may be causal in a subgroup."]
  ],
  note:[
    "Prepubertal depression prevalence is around 1 to 2 per cent; adolescent point prevalence around 4 to 5 per cent.",
    "Cumulative prevalence by age 18 is of the order of 15 to 20 per cent.",
    "Early pubertal timing in girls raises depression risk, mediated largely by social factors.",
    "Around a fifth to a quarter of bipolar disorder begins before age 18.",
    "Around 10 per cent of adolescents report self-harm in community surveys."
  ],
  refs:["nice","rutter","companion"] };

TEACH["10.8.5.2"] = { free:false,
  simple:"Adolescent depression usually has a reason, and the reason is usually about other people. Loss, rejection, bullying and family conflict do most of the work, on top of a temperament that was already vulnerable.",
  teach:[
    "Heritability of adolescent depression is around 40 per cent, similar to adult depression, and rises through adolescence into adulthood.",
    "Genetic effects increase with age across adolescence while shared environmental effects decline, which is a general pattern in developmental behaviour genetics.",
    "Family history of depression raises risk around threefold, through genetic and environmental pathways operating together.",
    "Temperament: high negative emotionality and low positive emotionality predict later depression, with low positive emotionality specifically predicting depression rather than anxiety.",
    "Cognitive vulnerability: negative attributional style, rumination and hopelessness develop across childhood and become predictive of depression from around age 10 to 12, when cognitive capacity for abstract self-evaluation matures.",
    "That developmental timing explains why cognitive vulnerability models predict adolescent but not childhood depression.",
    "Rumination is more common in girls and mediates a substantial part of the emerging sex difference, according to Nolen-Hoeksema's response styles theory.",
    "Interpersonal factors dominate: peer rejection, bullying victimisation, friendship difficulties, romantic relationship breakdown, and family conflict.",
    "Bullying victimisation has robust longitudinal and genetically informed evidence for a causal contribution to depression, self-harm and psychosis, with a dose-response relationship.",
    "Family factors: parental depression, family discord, harsh or rejecting parenting, low warmth, and maltreatment.",
    "Parental depression is a strong predictor, and treating maternal depression improves child outcomes where remission is achieved, as shown in the STAR*D-Child study.",
    "Adversity: childhood maltreatment, particularly emotional abuse and neglect, has a strong and dose-dependent association with adolescent depression.",
    "Biological changes in puberty: HPA axis reactivity, changes in sleep architecture and circadian phase delay, and reward system reorganisation with heightened reward sensitivity and immature control systems.",
    "Circadian phase delay in adolescence is biological, not laziness. Adolescents' natural sleep timing shifts later, and early school start times produce chronic sleep restriction which independently worsens mood.",
    "The adolescent brain shows a developmental mismatch: limbic and reward systems mature earlier than prefrontal control systems, which accounts for heightened risk-taking and emotional reactivity in this period.",
    "Bipolar disorder in adolescence has the same high heritability as adult bipolar disorder, around 70 to 80 per cent, and earlier onset is associated with greater family loading.",
    "Antidepressant-induced switching is a specific concern in young people with bipolar vulnerability, and a family history of bipolar disorder should be sought before starting an antidepressant."
  ],
  cards:[
    ["Why does cognitive vulnerability predict adolescent but not childhood depression?","Because negative attributional style, rumination and hopelessness require the capacity for abstract self-evaluation, which matures from around age 10 to 12. Before that, these cognitive vulnerabilities are not yet formed and do not predict depression."],
    ["What evidence links bullying to depression?","Robust longitudinal and genetically informed studies, including discordant twin designs, show a dose-response relationship between bullying victimisation and later depression, self-harm and psychosis, supporting a causal contribution rather than confounding."],
    ["What is the developmental mismatch in the adolescent brain?","Limbic and reward systems mature earlier than prefrontal control systems, producing a period of heightened reward sensitivity and emotional reactivity with immature regulatory capacity, which accounts for increased risk-taking and emotional volatility in adolescence."],
    ["Why does circadian phase delay matter in adolescent depression?","Because adolescents' natural sleep timing shifts biologically later, so early school start times produce chronic sleep restriction, which independently worsens mood, concentration and emotional regulation. It is a biological change rather than a behavioural choice."]
  ],
  note:[
    "Genetic effects increase and shared environmental effects decline across adolescence.",
    "Low positive emotionality specifically predicts depression rather than anxiety.",
    "Rumination is commoner in girls and mediates part of the emerging sex difference.",
    "Treating maternal depression improves child outcomes where remission is achieved.",
    "A family history of bipolar disorder should be sought before starting an antidepressant."
  ],
  refs:["rutter","gross","nice"] };

TEACH["10.8.5.3"] = { free:true,
  simple:"A depressed adolescent is often irritable rather than sad, and everyone reads it as attitude. Ask about whether anything is still enjoyable, and about sleep, and the picture usually becomes clear quickly.",
  teach:[
    "The criteria are the same as in adults, with two developmental modifications: irritable mood may substitute for depressed mood in children and adolescents, and failure to make expected weight gain may substitute for weight loss.",
    "Irritability rather than sadness is the commonest mood presentation in adolescents, and it is routinely misread as ordinary teenage behaviour or as oppositionality.",
    "Anhedonia is the most useful discriminating symptom. Ask what the young person used to enjoy and whether they still enjoy it, and the answer separates depression from ordinary adolescent moodiness.",
    "Presentation varies with age: younger children show somatic complaints, separation anxiety, irritability and behavioural change; adolescents show more classical presentations with hopelessness, guilt and suicidal thinking.",
    "Somatic complaints, school refusal, deteriorating academic performance, social withdrawal and substance misuse are all common presenting features.",
    "Comorbidity is very high: anxiety disorders, conduct disorder, ADHD, substance misuse and eating disorders.",
    "Self-harm is common in depressed adolescents and is not the same as suicidal intent, though it substantially raises suicide risk and both must be assessed separately.",
    "Assess self-harm and suicidal ideation directly, alone, in every case. Asking does not increase risk, and adolescents frequently disclose to a clinician what they have told nobody else.",
    "Psychotic depression occurs in adolescents and is under-recognised. Hallucinations should be asked about specifically, since young people rarely volunteer them.",
    "Distinguish normal adolescent moodiness: normal mood change is reactive, brief and does not impair functioning, whereas depression is persistent, pervasive and impairing.",
    "Bipolar disorder in adolescence: mania presents with elation or irritability, reduced sleep need, grandiosity, increased goal-directed activity and risk-taking, and must be distinguished from ADHD.",
    "The key discriminators from ADHD are episodicity, elevated mood, reduced need for sleep as opposed to difficulty sleeping, and grandiosity. ADHD is chronic and non-episodic.",
    "Reduced need for sleep, meaning the young person sleeps less and feels fine, is the single most useful discriminator from ADHD, where the child is tired.",
    "Disruptive mood dysregulation disorder in DSM-5: severe recurrent temper outbursts inconsistent with developmental level, occurring three or more times weekly, with persistently irritable or angry mood between outbursts, onset before age 10 and diagnosis between 6 and 18.",
    "ICD-11 handles the same presentation through an oppositional defiant disorder specifier with chronic irritability and anger, rather than as a separate diagnosis.",
    "Assessment: interview the young person alone and with parents, obtain school information, assess self-harm and suicide, screen for substance misuse, and enquire about bullying and abuse.",
    "Instruments: the Mood and Feelings Questionnaire is the standard measure in this age group; the Children's Depression Rating Scale Revised is clinician-administered.",
    "Physical assessment: exclude hypothyroidism, anaemia, glandular fever, vitamin D deficiency and substance use, and consider chronic illness and its treatment."
  ],
  cards:[
    ["How do the diagnostic criteria for depression differ in children and adolescents?","Irritable mood may substitute for depressed mood, and failure to make expected weight gain may substitute for weight loss. Otherwise the criteria are the same as in adults."],
    ["What is the most useful discriminating symptom in adolescent depression?","Anhedonia. Asking what the young person used to enjoy and whether they still enjoy it separates depression from ordinary adolescent moodiness more reliably than asking about sadness, since irritability rather than sadness is the commonest mood presentation."],
    ["How is adolescent mania distinguished from ADHD?","By episodicity, since ADHD is chronic and non-episodic; by elevated or expansive mood; by grandiosity; and above all by reduced need for sleep, in which the young person sleeps less and feels well, as opposed to the difficulty sleeping and consequent tiredness seen in ADHD."],
    ["What is disruptive mood dysregulation disorder in DSM-5?","Severe recurrent temper outbursts inconsistent with developmental level occurring three or more times weekly, with persistently irritable or angry mood between outbursts, onset before age 10 and diagnosis made between ages 6 and 18. ICD-11 handles the same presentation through an oppositional defiant disorder specifier with chronic irritability and anger."],
    ["What must always be assessed in a depressed adolescent?","Self-harm and suicidal ideation, asked directly and with the young person seen alone, since asking does not increase risk and adolescents frequently disclose to a clinician what they have told nobody else. Psychotic symptoms should also be asked about specifically."]
  ],
  note:[
    "Irritability is routinely misread as ordinary teenage behaviour or oppositionality.",
    "Self-harm is common in adolescent depression and is distinct from suicidal intent but raises suicide risk.",
    "The Mood and Feelings Questionnaire is the standard measure in this age group.",
    "Exclude hypothyroidism, anaemia, glandular fever, vitamin D deficiency and substance use.",
    "Normal adolescent mood change is reactive, brief and non-impairing."
  ],
  refs:["nice","icd11","rutter"] };

TEACH["10.8.5.4"] = { free:false,
  simple:"Talking therapy first, fluoxetine second, and only fluoxetine, because it is the one antidepressant that has been shown to do more good than harm in this age group.",
  teach:[
    "NICE NG134 for depression in children and young people: for mild depression, digital CBT, group CBT, group IPT or group non-directive supportive therapy, with watchful waiting for two weeks first.",
    "Antidepressants should not be offered for mild depression in children and young people.",
    "For moderate to severe depression: individual CBT first-line, with family therapy, psychodynamic psychotherapy or IPT as alternatives, over at least three months.",
    "Combined fluoxetine and psychological therapy is offered where psychological therapy alone has not produced sufficient benefit, or from the outset in severe depression.",
    "Fluoxetine is the only antidepressant recommended first-line in under-18s, because it is the only one with a demonstrated favourable risk-benefit balance in this age group.",
    "Sertraline and citalopram are second-line where fluoxetine is ineffective or not tolerated, and are used off-label.",
    "Paroxetine and venlafaxine should not be used in under-18s: paroxetine because of increased suicidality signals and discontinuation problems, and venlafaxine because of the risk-benefit profile in this group.",
    "The 2003 MHRA advice restricting SSRIs other than fluoxetine in under-18s followed pooled analyses showing increased suicidal thinking and behaviour with several agents.",
    "The suicidality signal is real: pooled paediatric trials show a small absolute increase in suicidal thinking and behaviour, around 2 per cent against 1 per cent, with no completed suicides in the trials.",
    "The signal requires monitoring, particularly weekly for the first four weeks and at dose change, but does not preclude treatment where depression is moderate or severe, since untreated depression itself carries suicide risk.",
    "The TADS trial is the key evidence: fluoxetine plus CBT produced the highest response rate, fluoxetine alone was superior to CBT alone at 12 weeks, and CBT alone was not superior to placebo at that point. Suicidal events were commoner in the fluoxetine-alone arm and reduced by adding CBT.",
    "The TADS finding that adding CBT reduced suicidal events is the clinical basis for combining rather than using fluoxetine alone.",
    "Duration: continue for at least six months after remission, and consider longer in recurrent depression.",
    "Treatment-resistant adolescent depression: the TORDIA trial showed that switching to another SSRI plus CBT was effective, and that switching to venlafaxine offered no advantage with more adverse effects.",
    "Bipolar disorder in adolescents: antipsychotics are used for acute mania, with aripiprazole, risperidone, quetiapine and olanzapine having evidence, and lithium is used for maintenance with monitoring as in adults.",
    "Valproate must not be used in girls or women of childbearing potential.",
    "ECT in under-18s is very rarely used, requires specific safeguards, and is reserved for life-threatening depression, catatonia or severe mania unresponsive to treatment.",
    "Address the context: bullying, family conflict, academic pressure, sleep, substance use and social media use are all modifiable and frequently more important than the choice of drug.",
    "Sleep is a specific target. Regularising sleep and addressing circadian delay improves mood independently and is achievable.",
    "Safety planning with the young person and the family, including means restriction and removal of stockpiled medication, is required in every case with suicidal ideation."
  ],
  cards:[
    ["Which antidepressant is first-line in under-18s and why?","Fluoxetine, because it is the only antidepressant with a demonstrated favourable risk-benefit balance in this age group. Sertraline and citalopram are second-line and off-label. Paroxetine and venlafaxine should not be used in under-18s."],
    ["What did the TADS trial show?","That fluoxetine plus CBT produced the highest response rate; fluoxetine alone was superior to CBT alone at 12 weeks; CBT alone was not superior to placebo at that point; and suicidal events were commoner in the fluoxetine-alone arm and reduced by the addition of CBT. This is the clinical basis for combining rather than using fluoxetine alone."],
    ["What is the size of the SSRI suicidality signal in young people?","Pooled paediatric trials show a small absolute increase in suicidal thinking and behaviour, of the order of 2 per cent against 1 per cent on placebo, with no completed suicides in the trials. It requires weekly monitoring for the first four weeks and at dose changes but does not preclude treatment in moderate to severe depression."],
    ["What did TORDIA show in treatment-resistant adolescent depression?","That switching to a different SSRI combined with CBT was effective, and that switching to venlafaxine offered no advantage over another SSRI while producing more adverse effects."],
    ["What does NICE recommend for mild depression in young people?","Watchful waiting for two weeks, then digital CBT, group CBT, group interpersonal therapy or group non-directive supportive therapy. Antidepressants should not be offered for mild depression in this age group."]
  ],
  note:[
    "MHRA advice from 2003 restricted SSRIs other than fluoxetine in under-18s.",
    "Continue treatment for at least six months after remission.",
    "Valproate must not be used in girls or women of childbearing potential.",
    "ECT in under-18s is very rarely used and requires specific safeguards.",
    "Bullying, family conflict, sleep and substance use are frequently more important than drug choice."
  ],
  refs:["nice","maudsley","rutter"] };

TEACH["10.8.5.5"] = { free:false,
  simple:"Most adolescent depressive episodes end within a year, and most of those young people have another one. The illness that starts in adolescence is usually the illness they will have as an adult.",
  teach:[
    "Median episode duration in adolescent depression is around seven to nine months, with the great majority remitting within two years.",
    "Recurrence is high: around 40 to 60 per cent have a further episode within two to five years, and around two-thirds have a further episode in adulthood.",
    "Adolescent-onset depression predicts adult depression strongly, and the depression that begins in adolescence is usually the illness the person will carry forward.",
    "Around 20 to 40 per cent develop bipolar disorder over long follow-up in some cohorts, particularly where there is psychotic depression, family history of bipolar disorder, or antidepressant-induced switch.",
    "That bipolar conversion rate is higher than in adult-onset depression and justifies asking about family history and monitoring for switch.",
    "Functional consequences are substantial: reduced educational attainment, higher rates of leaving education early, poorer employment outcomes, and difficulties in relationships.",
    "The educational effect is important because adolescence is when qualifications are obtained, so an episode at 16 has consequences that an equivalent episode at 30 does not.",
    "Suicide: adolescent depression substantially raises suicide risk, and suicide is a leading cause of death in this age group in the UK.",
    "Self-harm in adolescence predicts later suicide, with risk raised many times over, and repeated self-harm carries the highest risk.",
    "Poor prognostic factors: greater severity, psychotic features, comorbid anxiety, conduct disorder or substance misuse, family history of depression, ongoing family conflict, abuse, and residual symptoms after treatment.",
    "Residual symptoms are the strongest predictor of relapse, as in adults, which makes remission rather than response the appropriate treatment target.",
    "Good prognostic factors: shorter episode duration, absence of comorbidity, good family functioning, early treatment response and continued treatment after remission.",
    "Adolescent bipolar disorder has a worse prognosis than adult-onset bipolar disorder, with more mixed episodes, more rapid cycling, more comorbidity and greater functional impairment.",
    "Early-onset bipolar disorder is associated with longer delay to diagnosis, and the delay is itself associated with worse outcome.",
    "Early intervention alters trajectory, and this is the general argument for child and adolescent services: the same illness treated at fifteen has a different course from the same illness treated at twenty-five.",
    "Around half of all adult mental disorder has its onset by age 14 and three-quarters by age 24, which is the single most cited statistic in the case for investing in young people's mental health."
  ],
  cards:[
    ["What is the course and recurrence of adolescent depression?","Median episode duration is around seven to nine months with most remitting within two years, but around 40 to 60 per cent have a further episode within two to five years and around two-thirds have a further episode in adulthood. Adolescent-onset depression strongly predicts adult depression."],
    ["What proportion of adolescent depression converts to bipolar disorder?","Around 20 to 40 per cent over long follow-up in some cohorts, particularly where there is psychotic depression, a family history of bipolar disorder, or antidepressant-induced switch. This is higher than in adult-onset depression."],
    ["Why does an episode of depression at 16 have greater functional consequence than at 30?","Because adolescence is the period during which educational qualifications are obtained, so an episode at that point has lasting effects on attainment, subsequent education and employment that an equivalent episode later in life does not."],
    ["What statistic underpins the case for investing in young people's mental health?","That around half of all adult mental disorder has its onset by age 14 and three-quarters by age 24."]
  ],
  note:[
    "Residual symptoms are the strongest predictor of relapse, so remission is the appropriate target.",
    "Self-harm in adolescence raises later suicide risk many times over, highest with repetition.",
    "Adolescent-onset bipolar disorder has a worse prognosis than adult-onset disease.",
    "Delay to diagnosis in early-onset bipolar disorder is itself associated with worse outcome.",
    "Suicide is a leading cause of death in this age group in the UK."
  ],
  refs:["nice","rutter","companion"] };
