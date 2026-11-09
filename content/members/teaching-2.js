/* =====================================================================
   TEACHING, SECTION 2 — Human Development
   18 items, 2.1 to 2.18
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["2.1"] = { free:true,
  simple:"Is a person built by their genes or by what happens to them? The honest answer is that the question is wrong. Genes do not make a person, they make a person who reacts to things in a particular way, and then things happen. A shy child and a bold child raised in the same house are not raised in the same house, because they pull different reactions out of the same parents.",
  teach:[
    "Stage theories say development moves through a fixed order of qualitatively different steps. Continuity theories say it is gradual and quantitative. Piaget and Freud are stage theorists; learning theory is continuous.",
    "Critical period: a window during which input is required or the capacity is lost permanently. Sensitive period: a window in which learning is easiest but not the only chance. Most human development uses sensitive rather than critical periods.",
    "Gene-environment interaction: the same genotype produces different outcomes in different environments. Gene-environment correlation: genes influence which environments you end up in. Passive, evocative and active are the three types.",
    "Heritability of IQ rises with age, from around 0.4 in childhood to 0.6 to 0.8 in adulthood. That is counter-intuitive and examinable: as people gain autonomy they select environments that match their genotype.",
    "Early versus later adversity. Early adversity has larger effects, but the Romanian adoptee studies show that recovery is substantial if the environment changes early enough, and that persistent deficits follow deprivation beyond about six months.",
    "Freud's psychosexual stages: oral, anal, phallic, latency, genital. Historically essential, empirically unsupported. Know them because they are asked.",
    "The developmental framework matters clinically because the same trauma has different consequences at different ages, and the presentation of any disorder is shaped by the developmental stage it lands in."
  ],
  cards:[
    ["Distinguish a critical from a sensitive period.","A critical period is a window in which input is essential; the capacity is permanently lost if it is missed. A sensitive period is a window of maximal responsiveness, after which learning is harder but still possible."],
    ["Name the three types of gene-environment correlation.","Passive (parents provide both genes and environment), evocative (the child's genotype evokes responses from others), active (the child selects environments matching their genotype, also called niche-picking)."],
    ["Why does the heritability of IQ increase with age?","As individuals gain autonomy they increasingly select and shape environments consistent with their genotype, so genetic variance accounts for a larger proportion of phenotypic variance."]
  ],
  note:[
    "Heritability is a population statistic, not a personal probability, and it changes when the environment changes.",
    "Freud's psychosexual stages: oral 0 to 1, anal 1 to 3, phallic 3 to 6, latency 6 to puberty, genital from puberty.",
    "Equifinality: different starting points lead to the same outcome. Multifinality: the same starting point leads to different outcomes. Both are core developmental psychopathology concepts.",
    "The English and Romanian Adoptees study, Rutter: deprivation beyond six months predicted persistent deficits including quasi-autistic features, disinhibited attachment and inattention.",
    "Maturational tasks: each stage presents a task whose resolution shapes the next. Erikson formalised this across the whole lifespan."
  ],
  refs:["gross","rutter","noptp"] };

TEACH["2.2"] = { free:false,
  simple:"To find out how people change over a lifetime you have two choices. Test lots of people of different ages today, which is quick but compares people born in different decades. Or follow the same people for forty years, which is slow, expensive, and the only way to answer the question properly.",
  teach:[
    "Cross-sectional: different age groups measured at one time. Fast and cheap. Confounded by cohort effects, because a 70-year-old today had a different education from a 20-year-old.",
    "Longitudinal: the same individuals followed over time. Separates true change from cohort effect. Costly, slow, and vulnerable to attrition and practice effects.",
    "Cohort-sequential (accelerated longitudinal) designs combine both, following several age cohorts for a shorter period, and disentangle age, cohort and period effects.",
    "Cross-sectional studies exaggerate cognitive decline with age compared with longitudinal studies. That single fact is examinable and clinically important in old age psychiatry.",
    "Case studies and individual designs give depth and hypothesis generation but no generalisability. Twin, adoption and family designs separate genetic from shared and non-shared environmental variance.",
    "The major UK birth cohorts are the backbone of British developmental epidemiology: 1946 (National Survey of Health and Development), 1958 (National Child Development Study), 1970 (BCS70), and the Millennium Cohort Study."
  ],
  cards:[
    ["What is a cohort effect and which design is vulnerable to it?","Differences arising from being born in a particular era rather than from age itself. Cross-sectional designs confound age with cohort."],
    ["Name the three sources of variance separated by twin and adoption studies.","Additive genetic, shared (common) environment, and non-shared (unique) environment."],
    ["What is attrition bias in a longitudinal study?","Systematic loss to follow-up. Those lost differ from those retained, typically being more unwell or more disadvantaged, biasing the result towards better outcomes."]
  ],
  note:[
    "Non-shared environment accounts for more variance in most behavioural traits than shared environment, which is counter-intuitive and repeatedly examined.",
    "Practice effects inflate apparent stability or improvement on repeated cognitive testing.",
    "Period effects affect all ages at one time, such as a pandemic or a recession.",
    "The Dunedin Multidisciplinary Health and Development Study, from 1972, is the most cited developmental cohort in psychiatry."
  ],
  refs:["gross","rutter","kirkwood"] };

TEACH["2.3"] = { free:true,
  simple:"Bowlby noticed that a child taken from its mother does not simply become sad. It protests loudly, then gives up, then goes quiet and easy to manage, and the quiet stage is the worst sign of the three. Ainsworth then built a room with a door and found that the useful moment is not the leaving. It is what the child does when the mother comes back.",
  teach:[
    "Attachment is a biologically driven system whose function is protection through proximity to a caregiver under threat. It is not the same as love, and not the same as dependency.",
    "Robertson and Bowlby's phases of separation: protest, despair, detachment.",
    "The Strange Situation, Ainsworth, twelve to eighteen months, eight episodes over about twenty minutes. Classification comes from the reunion, not the separation.",
    "Secure (B), around 60 to 65 per cent of low-risk samples. Insecure-avoidant (A). Insecure-ambivalent or resistant (C). Disorganised (D), added by Main and Solomon.",
    "The condition for security is sensitive responsiveness: reading the signal, reading it correctly, and responding promptly and appropriately. Quantity of contact matters far less than accuracy of reading.",
    "Disorganised attachment shows contradictory approach and avoidance, freezing or apprehension towards the caregiver. It is associated with frightening or frightened caregiver behaviour, and with maltreatment, and it predicts later psychopathology more strongly than the organised insecure patterns.",
    "The internal working model is the expectation of self and other carried forward, which is how early attachment reaches into adult relationships and into the therapeutic alliance.",
    "Failure to form any selective attachment, as in institutional deprivation, produces reactive attachment disorder or disinhibited social engagement disorder."
  ],
  cards:[
    ["Name the four Strange Situation classifications and the approximate proportion secure.","Secure (B), insecure-avoidant (A), insecure-ambivalent or resistant (C), disorganised (D). Around 60 to 65 per cent are secure in low-risk samples."],
    ["What did Harlow's rhesus monkey work demonstrate?","Infant monkeys preferred a cloth surrogate providing contact comfort over a wire surrogate that fed them. Attachment is not driven by feeding."],
    ["Name the Adult Attachment Interview classifications.","Autonomous or secure, dismissing, preoccupied, and unresolved or disorganised. Coding depends on the coherence of the narrative, not the content of the childhood described."]
  ],
  note:[
    "Bowlby's maternal deprivation hypothesis, and his 44 juvenile thieves study, are historically central and methodologically weak. Rutter's Maternal Deprivation Reassessed separated privation from deprivation.",
    "Monotropy, Bowlby's claim of one privileged attachment figure, is not supported. Children form a hierarchy of attachments.",
    "Cross-cultural variation: more avoidant classifications in Germany, more resistant in Japan and Israel. The instrument is not culture-free.",
    "Attachment classification in infancy predicts later outcomes modestly, not deterministically. Continuity is around 70 per cent in stable circumstances and falls sharply where circumstances change.",
    "Mentalisation-based treatment and much of the borderline personality disorder literature descend directly from this work."
  ],
  refs:["gross","rutter","noptp"] };

TEACH["2.4"] = { free:false,
  simple:"Families are systems, not collections of individuals. Push on one part and something moves somewhere else. A child who starts refusing school may be doing the family's arguing for it, and treating only the child will not work, because the child is not where the problem lives.",
  teach:[
    "Baumrind's parenting styles cross two dimensions, demandingness and responsiveness: authoritative (high both, best outcomes), authoritarian (high demand, low warmth), permissive (low demand, high warmth), neglectful (low both, worst outcomes).",
    "Parenting practices, what parents actually do, predict outcomes better than parental attitudes, what parents say they believe.",
    "General systems theory applied to families: wholeness, circular causality rather than linear, homeostasis, boundaries, subsystems and hierarchy.",
    "Distorted family function: discord, overprotection, rejection, enmeshment, and disengagement. Minuchin's structural model uses the language of boundaries, rigid or diffuse.",
    "Parental divorce: the effect is mediated largely by conflict, not by separation itself. Ongoing high conflict after separation is worse for the child than separation with low conflict.",
    "Bereavement in childhood: the child's understanding of death develops with cognitive stage, irreversibility and universality being grasped around five to seven. The strongest predictor of the child's outcome is the surviving parent's functioning.",
    "Intra-familial abuse shows a dose-response relationship with adult psychiatric disorder, including psychosis. It affects attachment, affect regulation, and the HPA axis.",
    "Family structure per se, including single-parent and same-sex parent families, is a weak predictor. Conflict, poverty and parental mental health are strong ones."
  ],
  cards:[
    ["Name Baumrind's parenting styles and the one with the best outcomes.","Authoritative, authoritarian, permissive and neglectful. Authoritative, high in both warmth and demands, has the best outcomes."],
    ["What mediates the effect of parental divorce on children?","Inter-parental conflict, alongside loss of resources and disruption of routines, rather than separation itself. High post-separation conflict is worse than low-conflict separation."],
    ["Define enmeshment and its counterpart in Minuchin's model.","Enmeshment is a diffuse boundary with excessive involvement and poorly differentiated roles. Disengagement is a rigid boundary with insufficient involvement and support."]
  ],
  note:[
    "Adverse childhood experiences show a dose-response relationship with adult physical and mental illness (Felitti).",
    "Circular causality means there is no single cause and no single culprit. This is why systemic work refuses the question of whose fault it is.",
    "Emotional abuse and neglect are the commonest categories and the most frequently missed. Neglect is the commonest reason for a child protection plan in England.",
    "The family life cycle stages: leaving home, joining families through marriage, families with young children, with adolescents, launching children, families in later life.",
    "Resilience factors: at least one stable supportive adult relationship, cognitive ability, self-regulation, and a sense of agency."
  ],
  refs:["rutter","gross","noptp"] };

TEACH["2.5"] = { free:false,
  simple:"Some babies are easy from the first week and some are not, and no parent chose either. What matters is not the baby's temperament on its own but whether it fits what the family can offer. A very active child in a family that loves quiet is a poor fit, and it is the fit that predicts trouble, not the child.",
  teach:[
    "Thomas and Chess, New York Longitudinal Study from 1956, nine temperament dimensions: activity level, rhythmicity, approach or withdrawal, adaptability, intensity of reaction, threshold of responsiveness, quality of mood, distractibility, attention span and persistence.",
    "Three categories: easy (about 40 per cent), difficult (about 10 per cent), slow to warm up (about 15 per cent). The remainder do not fit a category.",
    "Goodness of fit is the central concept. It is the match between the child's temperament and the environment's demands and expectations. Poor fit, not difficult temperament alone, predicts later problems.",
    "Kagan's behavioural inhibition: about 15 to 20 per cent of infants show high reactivity to novelty. It is moderately stable and predicts later social anxiety disorder.",
    "Temperament is the biologically based, early-appearing substrate. Character is what experience builds on it. Personality is the two together.",
    "Cloninger's model separates temperament (novelty seeking, harm avoidance, reward dependence, persistence) from character (self-directedness, cooperativeness, self-transcendence).",
    "Stability is moderate, not absolute. Temperament is a starting position rather than a destination."
  ],
  cards:[
    ["Name Thomas and Chess's three temperament categories with approximate proportions.","Easy, about 40 per cent; difficult, about 10 per cent; slow to warm up, about 15 per cent. The rest are unclassified."],
    ["What is goodness of fit and why does it matter?","The match between a child's temperament and environmental demands and expectations. Poor fit, rather than difficult temperament alone, predicts adverse outcomes, which makes it a modifiable target."],
    ["What is behavioural inhibition and what does it predict?","Kagan's construct: high reactivity and withdrawal in response to novelty, present in around 15 to 20 per cent of infants, moderately stable, and predictive of later social anxiety disorder."]
  ],
  note:[
    "Difficult temperament is associated with later behavioural problems mainly where parenting is harsh or inconsistent. This is a gene-environment interaction, not a fixed trait effect.",
    "Differential susceptibility, Belsky: some children are more reactive to environment in both directions, doing worse in poor environments and better in good ones than their peers.",
    "Cloninger's temperament dimensions map onto neurotransmitter systems in his original theory: novelty seeking to dopamine, harm avoidance to serotonin, reward dependence to noradrenaline. The mapping is not well supported.",
    "Childhood resilience factors overlap with those in item 2.4: a stable supportive relationship, self-regulation, and cognitive ability."
  ],
  refs:["rutter","gross","noptp"] };

TEACH["2.6"] = { free:true,
  simple:"Pour the same juice into a taller thinner glass and a four-year-old will tell you there is now more of it. She is not being silly. She can only hold one dimension in her head at once, so she sees taller and stops. Two years later the same child will look at you as though the question is beneath her. Nothing was taught in between. The machinery arrived.",
  teach:[
    "Piaget's four stages: sensorimotor 0 to 2, preoperational 2 to 7, concrete operational 7 to 11, formal operational 11 and over.",
    "Sensorimotor: the world is known through action. Object permanence around eight to nine months. Ends with symbolic thought and deferred imitation.",
    "Preoperational: egocentrism, animism, centration, irreversibility, and failure of conservation. The three mountains task demonstrates egocentrism.",
    "Concrete operational: conservation, reversibility, seriation, classification, and transitive inference, but tied to concrete material.",
    "Formal operational: abstract and hypothetico-deductive reasoning. Not universally attained.",
    "Assimilation fits new information into an existing schema. Accommodation changes the schema to fit the information. Equilibration drives the alternation between them.",
    "Vygotsky's alternative: development is social. The zone of proximal development is the gap between what a child can do alone and with help, and scaffolding is how it is crossed. For Vygotsky language drives thought; for Piaget thought drives language.",
    "The clinical payoff. A seven-year-old cannot reason hypothetically about a treatment they have not experienced, so consent conversations must be concrete. And preoperational egocentrism is why children blame themselves for parental illness, divorce and death."
  ],
  cards:[
    ["Name Piaget's four stages with ages.","Sensorimotor 0 to 2, preoperational 2 to 7, concrete operational 7 to 11, formal operational 11 and over."],
    ["Define assimilation and accommodation.","Assimilation incorporates new information into an existing schema. Accommodation modifies the schema to fit new information that will not assimilate."],
    ["What is the zone of proximal development?","Vygotsky: the distance between what a child can achieve independently and what they can achieve with guidance from a more capable other. Scaffolding is the support that closes it."]
  ],
  note:[
    "Piaget underestimated infants. Baillargeon's violation-of-expectation studies show rudimentary object permanence well before eight months.",
    "Conservation of number is acquired before mass, then weight, then volume. This ordering is called horizontal decalage and is a problem for a strict stage theory.",
    "Egocentrism is not selfishness. It is inability to take another's perspective, and it is distinct from theory of mind, which arrives around four.",
    "The bio-psychosocial model, Engel 1977, is the framework the syllabus names alongside Piaget: biological, psychological and social factors interacting at every level.",
    "Information-processing accounts explain cognitive development as gradual increases in processing speed, working memory capacity and strategy use, without stages."
  ],
  refs:["gross","rutter","noptp"] };

TEACH["2.7"] = { free:false,
  simple:"Nobody teaches a child grammar, and yet by four they use it better than most adults can explain it. Children say things they have never heard, like sheeps and goed, which proves they are not copying. They have worked out a rule and are applying it too well.",
  teach:[
    "The sequence: cooing from about six weeks; babbling from about six months, initially universal then narrowing to the ambient language; first words around twelve months; two-word telegraphic speech at eighteen to twenty-four months.",
    "Vocabulary: around 50 words at 18 months, around 200 at two years, with a vocabulary spurt between. By five, several thousand words.",
    "Overregularisation, saying goed and sheeps, is evidence of rule extraction rather than imitation, because the child has never heard those forms.",
    "Chomsky: an innate language acquisition device and a universal grammar. His 1959 review of Skinner's Verbal Behavior dismantled the pure operant account.",
    "Social interactionism, Bruner: child-directed speech (motherese), joint attention, turn-taking and the language acquisition support system. Input matters, but it is structured input, not reinforcement.",
    "Critical or sensitive period: full native acquisition becomes progressively harder after early childhood. Genie and other cases of extreme deprivation support a sensitive period, though the evidence is confounded.",
    "Communicative competence goes beyond grammar to pragmatics: turn-taking, repair, register, and reading intention. Pragmatic language difficulty is a core feature of autism.",
    "Red flags: no babble by twelve months, no single words by eighteen months, no two-word phrases by two years, any loss of language at any age. Always check hearing first."
  ],
  cards:[
    ["When do first words and two-word phrases typically appear?","First words around twelve months. Two-word telegraphic phrases around eighteen to twenty-four months."],
    ["What does overregularisation demonstrate?","That children extract and apply grammatical rules rather than imitating heard forms, since errors such as goed and sheeps are never modelled by adults."],
    ["Name three language red flags requiring assessment.","No babbling by twelve months; no single words by eighteen months; no two-word phrases by two years. Any regression in language at any age. Hearing must be tested first."]
  ],
  note:[
    "Receptive language normally precedes expressive language. A child who understands but does not speak is a different problem from one who does neither.",
    "Bilingualism does not cause language delay. Total vocabulary across both languages is comparable to monolingual peers.",
    "Developmental language disorder affects around 7 per cent of children and is strongly associated with later literacy difficulty and psychiatric disorder.",
    "Selective mutism is an anxiety disorder, not a language disorder: the child speaks normally in some settings.",
    "Sapir-Whorf linguistic relativity: the strong version, that language determines thought, is not supported. Weak influences on categorisation are demonstrable."
  ],
  refs:["gross","rutter"] };

TEACH["2.8"] = { free:false,
  simple:"Watch children in a nursery and you can put an age on them without asking. At two they play beside each other, not with each other. At three they start swapping toys. At four they build something together with roles and rules. A child stuck two steps behind that sequence is telling you something.",
  teach:[
    "Parten's stages of play: unoccupied, solitary, onlooker, parallel, associative, cooperative. Parallel play around two, associative around three, cooperative from about three to four.",
    "Play develops in parallel with cognition: sensorimotor play, then symbolic or pretend play from about eighteen months, then games with rules from about six.",
    "Peer relationships are not interchangeable with parent relationships. Peers provide horizontal, equal-status relationships in which negotiation and conflict resolution are learned. Parents cannot substitute for this.",
    "Sociometric status: popular, rejected, neglected, controversial, average. Rejected status is the strongest predictor of later difficulty, and rejected-aggressive children have worse outcomes than rejected-withdrawn.",
    "Components of popularity: prosocial behaviour, social competence, ability to enter a group without disrupting it, and accurate reading of social cues.",
    "Friendship changes with age: shared activity in early childhood, then mutual trust and loyalty in middle childhood, then intimacy and self-disclosure in adolescence.",
    "Bullying: being bullied predicts later depression, anxiety, self-harm and psychotic experiences, with effects persisting into adulthood. Bully-victims, who are both, have the worst outcomes of any group.",
    "Isolation and rejection are risk factors, not just consequences. This is why school interventions matter clinically."
  ],
  cards:[
    ["Name Parten's stages of play in order.","Unoccupied, solitary, onlooker, parallel, associative, cooperative."],
    ["Which sociometric status carries the worst prognosis, and why?","Rejected, particularly rejected-aggressive. It predicts later externalising disorder, school dropout and delinquency, and unlike neglected status it is stable over time."],
    ["What is the outcome evidence on being bullied?","It predicts depression, anxiety, self-harm and psychotic experiences, with a dose-response relationship and effects persisting into adulthood. Bully-victims fare worst."]
  ],
  note:[
    "Symbolic and pretend play from around eighteen months. Reduced pretend play is an early marker in autism.",
    "Social smile at six weeks; stranger anxiety from six to eight months; separation anxiety peaking around ten to eighteen months.",
    "Harlow's isolated monkeys showed that peer contact could partially compensate for absent mothering, and vice versa.",
    "Rejected children misread ambiguous social cues as hostile: the hostile attribution bias, which is a target in treatment of conduct problems.",
    "Deliberate self-harm and school refusal frequently have peer relationships at their centre. Ask about them directly."
  ],
  refs:["rutter","gross"] };

TEACH["2.9"] = { free:false,
  simple:"Ask a six-year-old why stealing is wrong and she will say because you get told off. Ask a sixteen-year-old and she will say because it is somebody else's. Both said stealing is wrong. They did not say the same thing, and Kohlberg's point was that the reasoning matters far more than the verdict.",
  teach:[
    "Kohlberg used moral dilemmas, most famously Heinz and the drug, and scored the reasoning rather than the answer.",
    "Preconventional level: stage 1 punishment and obedience; stage 2 instrumental exchange, what is in it for me.",
    "Conventional level: stage 3 good boy or good girl, seeking approval; stage 4 law and order, maintaining the social system.",
    "Postconventional level: stage 5 social contract and individual rights; stage 6 universal ethical principles. Most adults do not reach stage 6, and Kohlberg later doubted it existed.",
    "Stages are held to be invariant in sequence and universal. Cross-cultural evidence supports the sequence but not the claim that the higher stages are universal endpoints.",
    "Gilligan's critique: Kohlberg's sample was male and his scale privileges an ethic of justice over an ethic of care. Empirical support for a sex difference is weak, but the conceptual point stands.",
    "Social perspective taking, Selman, runs in parallel: from egocentric, through differentiated, self-reflective and third-person, to societal perspective taking. Moral reasoning cannot outrun perspective taking.",
    "Moral reasoning predicts moral behaviour only weakly. Situation, as Milgram showed, does much of the work."
  ],
  cards:[
    ["Name Kohlberg's three levels and their stages.","Preconventional: punishment and obedience, instrumental exchange. Conventional: interpersonal approval, law and order. Postconventional: social contract, universal ethical principles."],
    ["State Gilligan's criticism of Kohlberg.","That his all-male sample and justice-oriented scale undervalue an ethic of care and responsibility, systematically scoring female reasoning lower."],
    ["How well does moral reasoning predict moral behaviour?","Weakly. Situational factors, obedience to authority and diffusion of responsibility exert larger effects, as Milgram and the bystander literature show."]
  ],
  note:[
    "Piaget's earlier account: heteronomous morality, where rules are fixed and consequences determine wrongness, giving way to autonomous morality around ten, where intention matters.",
    "Moral emotions, guilt and shame, develop with objective self-awareness after about eighteen months.",
    "Callous-unemotional traits mark impaired moral emotion, not impaired moral reasoning. Children with these traits usually know the rules perfectly well.",
    "Selman's perspective-taking stages are the developmental substrate of theory of mind beyond the false belief task."
  ],
  refs:["gross","rutter"] };

TEACH["2.10"] = { free:false,
  simple:"Small children are afraid of things you can see. Bigger children are afraid of things they can imagine. That shift, from the dark and dogs to being laughed at and failing, tracks the arrival of the ability to think about the future, and it explains why the same reassurance stops working around eight.",
  teach:[
    "Normative fears by age: loud noises and loss of support in infancy; strangers from six to eight months; separation peaking at ten to eighteen months; animals, the dark and imaginary creatures in the preschool years; injury, illness and death in middle childhood; social evaluation and performance in adolescence.",
    "A fear becomes a disorder when it is out of proportion, persistent, and impairing. Developmental appropriateness is the first question, not the last.",
    "Emotional literacy develops in a sequence: recognising emotions in others, labelling one's own, understanding that two emotions can coexist, and understanding that displayed and felt emotion can differ, which arrives around six to eight.",
    "Emotion regulation shifts from external to internal. The infant is regulated by the caregiver, the toddler by distraction and comfort objects, the older child by cognitive strategies including reappraisal.",
    "Aetiological mechanisms: temperamental behavioural inhibition; modelling of anxious behaviour by parents; information transmission; direct conditioning; and preparedness for evolutionarily relevant fears.",
    "Maintenance mechanisms: avoidance prevents disconfirmation, parental accommodation removes the need to cope, and safety behaviours attribute non-catastrophe to the behaviour rather than to the harmlessness of the situation.",
    "Clinical translation. This is why treatment of childhood anxiety works on the parents as well as the child, and why reassurance is a maintaining factor rather than a treatment."
  ],
  cards:[
    ["Give the normative fear for a preschool child and for an adolescent.","Preschool: the dark, animals, imaginary creatures, separation. Adolescence: social evaluation, humiliation, performance and appearance."],
    ["What is parental accommodation and why does it matter?","Parents modifying routines to prevent the child's distress, such as answering for them or avoiding feared situations. It relieves anxiety short term, prevents learning, and is a specific treatment target."],
    ["At what age do children understand that felt and displayed emotion can differ?","Around six to eight years. Understanding of mixed or simultaneous emotions arrives at a similar stage."]
  ],
  note:[
    "Separation anxiety disorder is the commonest anxiety disorder of childhood; specific phobias are the commonest anxiety diagnosis overall.",
    "Anxiety disorders have the earliest median age of onset of any group of psychiatric disorders.",
    "Alexithymia, difficulty identifying and describing emotion, is associated with somatisation and with adverse childhood experience.",
    "Safety behaviours are the reason exposure must be done without them. Otherwise non-catastrophe is attributed to the safety behaviour.",
    "Reassurance seeking functions like a compulsion: it reduces anxiety briefly and strengthens it overall."
  ],
  refs:["rutter","gross","nice"] };

TEACH["2.11"] = { free:false,
  simple:"Sex, gender and orientation are three different things and get muddled constantly. Sex is biological. Gender identity is the sense of who you are. Sexual orientation is who you are drawn to. A person can vary on any one of the three independently of the other two.",
  teach:[
    "Biological sex is determined by chromosomes, gonads, hormones and anatomy. Gender identity is the internal sense of one's gender. Gender role is the socially expected behaviour. Sexual orientation is the pattern of attraction. These are independent dimensions.",
    "Gender identity is generally established by around two to three years, gender stability by four, and gender constancy, understanding that gender does not change with appearance, by around six to seven.",
    "Kohlberg's cognitive-developmental account and gender schema theory both hold that once children categorise themselves they actively seek gender-consistent information.",
    "Prenatal hormones influence brain development. Congenital adrenal hyperplasia in girls, with prenatal androgen exposure, is the standard natural experiment and is associated with more male-typical play preference.",
    "Puberty: adrenarche from about six to eight, gonadarche later. Menarche typically between eleven and fourteen, with a secular trend to earlier onset. In boys the first change is testicular enlargement, around eleven to twelve.",
    "Early puberty in girls is associated with more psychological difficulty, earlier sexual activity and higher rates of depression. Late puberty in boys carries a smaller and less consistent disadvantage.",
    "Homosexuality is not a disorder. It was removed from DSM-II in 1973 and from the WHO classification when the World Health Assembly approved ICD-10 in May 1990.",
    "ICD-11 moved gender incongruence out of the mental disorders chapter into conditions related to sexual health, on the explicit basis that it is not a mental illness."
  ],
  cards:[
    ["Distinguish gender identity, gender role and sexual orientation.","Gender identity is the internal sense of one's own gender. Gender role is the socially expected pattern of behaviour. Sexual orientation is the pattern of sexual and romantic attraction. All three are independent of one another and of biological sex."],
    ["When are gender identity, stability and constancy achieved?","Identity around two to three years, stability by four, constancy by around six to seven."],
    ["Where does ICD-11 place gender incongruence and why?","In the chapter on conditions related to sexual health, not among mental and behavioural disorders, on the basis that it is not in itself a mental disorder."]
  ],
  note:[
    "APA removed homosexuality from DSM-II in December 1973. Ego-dystonic homosexuality survived in DSM-III and was removed in DSM-III-R, 1987.",
    "WHO: ICD-10 was approved by the World Health Assembly on 17 May 1990, the date now marked internationally.",
    "Aversion therapy for homosexuality was used in the NHS into the 1970s. It is now recognised as harmful and conversion practices are opposed by every UK medical body.",
    "Turner syndrome (45,X) and Klinefelter syndrome (47,XXY) are the chromosomal conditions most often examined alongside this item.",
    "Tanner staging describes pubertal development in five stages for breast, genital and pubic hair development."
  ],
  refs:["rutter","noptp","icd11"] };

TEACH["2.12"] = { free:true,
  simple:"An adolescent brain is a car whose accelerator is fitted years before the brakes. The reward system matures early and the part that says wait a moment matures late, into the mid-twenties. Most of what parents complain about lives in that gap, and it is developmental, not moral.",
  teach:[
    "Neurodevelopment: limbic and reward systems mature early, prefrontal control late. Synaptic pruning and continuing myelination proceed through adolescence into the mid-twenties, caudal to rostral.",
    "The consequence is heightened reward sensitivity, greater risk-taking in the presence of peers specifically, and immature response inhibition. Adolescents are not poor at assessing risk in the abstract; they discount it in the moment and among peers.",
    "Erikson's task is identity versus role confusion. Marcia operationalised it into four identity statuses, from crossing exploration with commitment: diffusion, foreclosure, moratorium, achievement.",
    "Conflict with parents is normative but usually mild and about everyday matters. Coleman's focal theory: adolescents deal with one issue at a time, and difficulty arises when several converge.",
    "Storm and stress, Hall's original claim, is not supported as a universal. Most adolescents negotiate the period without significant turmoil, which matters because normalising real disorder as teenage moodiness is a common and dangerous error.",
    "Puberty timing interacts with psychological outcome. Early maturation in girls carries the clearest risk.",
    "Epidemiology: median age of onset for any mental disorder is in the mid-teens, and around three quarters of adult disorders begin before twenty-four. Adolescence is when psychiatry's caseload is created.",
    "Distinguishing normal from abnormal: look for functional impairment, persistence, pervasiveness across settings, and departure from the young person's own baseline."
  ],
  cards:[
    ["What neurodevelopmental asymmetry explains adolescent risk-taking?","Early maturation of limbic and reward circuitry ahead of prefrontal regulatory maturation, which continues into the mid-twenties, together with synaptic pruning and continuing myelination."],
    ["Name Marcia's four identity statuses.","Identity diffusion, foreclosure, moratorium, and identity achievement, derived from crossing exploration with commitment."],
    ["When do most adult psychiatric disorders begin?","Median onset in the mid-teens, with around 75 per cent of lifetime disorders beginning before age 24."]
  ],
  note:[
    "Risk-taking in adolescence rises specifically in the presence of peers; this is demonstrable experimentally and does not occur to the same degree in adults.",
    "Sleep phase delays physiologically in adolescence, which is why early school start times are a genuine health question.",
    "Hall coined storm and stress in 1904. Offer's work showed most adolescents report stable self-image.",
    "Self-harm peaks in adolescence, more commonly in girls; completed suicide is more common in boys.",
    "Transition from CAMHS to adult services at 18 is a recognised point of disengagement and risk."
  ],
  refs:["rutter","gross","noptp"] };

TEACH["2.13"] = { free:false,
  simple:"Adult life is a series of jobs nobody trains you for: choosing a partner, keeping one, raising a child, being ill, and losing people. Each one demands a different version of you, and psychiatric illness in adulthood very often arrives at the seam between two of them.",
  teach:[
    "Erikson's adult stages: intimacy versus isolation in young adulthood, generativity versus stagnation in middle adulthood, ego integrity versus despair in later life.",
    "Pairing: assortative mating is strong for education, values and psychiatric disorder. Marriage is associated with better mental health outcomes for men more than for women, and the direction of causation is contested.",
    "Parenting: the transition to parenthood reduces relationship satisfaction on average, and increases psychiatric risk in the perinatal period for both parents. Postnatal depression affects around 10 to 15 per cent of mothers and a smaller but substantial proportion of fathers.",
    "Illness as an adult developmental event: adjustment involves loss of role, of function and of assumed future. Denial, anger, bargaining, depression and acceptance were described by Kubler-Ross for dying patients and are not a validated sequence for illness or bereavement.",
    "Bereavement: grief is not depression with a reason. It comes in waves rather than a flat low, the person can still be lifted by company, and the yearning is for one person rather than for everything. Worthlessness, not sadness, is what suggests depressive illness.",
    "Worden's four tasks of mourning: accept the reality of the loss, process the pain, adjust to a world without the person, and find an enduring connection while moving forward.",
    "Prolonged grief disorder is now a diagnosis in both ICD-11 and DSM-5-TR: persistent and pervasive longing or preoccupation with intense emotional pain, persisting at least six months and clearly exceeding cultural norms.",
    "Hallucinations of the deceased and a sense of presence occur in normal grief and are not psychotic."
  ],
  cards:[
    ["What features suggest depressive illness rather than normal grief?","Pervasive worthlessness and guilt extending beyond the death, marked psychomotor retardation, suicidal ideation not confined to wishing to join the deceased, and persistent functional impairment."],
    ["Name Worden's four tasks of mourning.","Accept the reality of the loss; process the pain of grief; adjust to a world without the deceased; find an enduring connection with the deceased while embarking on a new life."],
    ["State the ICD-11 criteria for prolonged grief disorder.","Persistent and pervasive longing for or preoccupation with the deceased, with intense emotional pain, persisting at least six months after the loss and far exceeding expected social, cultural or religious norms."]
  ],
  note:[
    "Risk factors for complicated grief: sudden or violent death, death of a child, dependent or ambivalent relationship, poor social support, and prior psychiatric history.",
    "Mortality and cardiovascular risk are raised in the first six months after spousal bereavement.",
    "Routine bereavement counselling for uncomplicated grief has no evidence of benefit and may do harm. Target it at those with complicated grief.",
    "Erikson's generativity is the developmental basis for supervision, teaching and mentoring, which is worth naming when trainees ask why supervision matters to the supervisor.",
    "The midlife crisis as a universal phenomenon is not supported empirically."
  ],
  refs:["gross","noptp","icd11"] };

TEACH["2.14"] = { free:true,
  simple:"Pregnancy and the year after are the highest-risk period in a woman's psychiatric life, and the most likely to be missed, because everybody assumes exhaustion and tearfulness are just what having a baby is like. The illness that must never be missed comes on fast, in the first two weeks, and looks like confusion as much as like mania.",
  teach:[
    "Physiological: large shifts in oestrogen and progesterone, an abrupt fall after delivery, thyroid change, sleep disruption and pain.",
    "Baby blues: 50 to 80 per cent of mothers, days three to ten, tearfulness and lability, self-limiting. Not an illness and not treated.",
    "Postnatal depression: around 10 to 15 per cent, usually within the first three months. Screened with the Edinburgh Postnatal Depression Scale, ten items, self-rated. It is a screening tool, not a diagnosis.",
    "Postpartum psychosis: one to two per thousand deliveries, onset usually within the first two weeks, often abrupt. Confusion, perplexity, mood lability, delusions frequently concerning the infant. It is a psychiatric emergency requiring admission, ideally to a mother and baby unit.",
    "The single strongest risk factor for postpartum psychosis is bipolar disorder, raising risk more than twentyfold, and a previous episode of postpartum psychosis carries a recurrence risk of roughly one in two.",
    "Suicide is a leading cause of maternal death in the UK, and the deaths characteristically occur by violent means in women who were not thought to be at high risk.",
    "Prescribing: every decision is a comparison, never a choice between risk and no risk. Untreated severe illness harms mother and infant. Sodium valproate is contraindicated in women of childbearing potential outside the Pregnancy Prevention Programme. Lithium carries cardiac malformation risk and requires specialist counselling and level monitoring across pregnancy.",
    "Maternal depression affects infant development through reduced responsiveness and disrupted interaction. Treating the mother is an intervention for the child."
  ],
  cards:[
    ["Give the frequency and onset of baby blues, postnatal depression and postpartum psychosis.","Baby blues: 50 to 80 per cent, days three to ten, self-limiting. Postnatal depression: 10 to 15 per cent, usually within three months. Postpartum psychosis: 1 to 2 per 1000, usually within two weeks."],
    ["What is the single strongest risk factor for postpartum psychosis?","Bipolar disorder, raising risk more than twentyfold. A previous postpartum psychosis carries a recurrence risk of roughly 50 per cent."],
    ["Which antidepressant is generally preferred in breastfeeding?","Sertraline, which has low milk transfer. Paroxetine is also low. Fluoxetine has a long half-life and accumulates in the infant."]
  ],
  note:[
    "The Edinburgh Postnatal Depression Scale omits somatic items because they are confounded by normal postnatal physiology.",
    "Mother and baby units exist so that admission does not separate mother and infant. Separation is itself a harm.",
    "Neonatal adaptation syndrome after third-trimester SSRI exposure: jitteriness, respiratory distress, feeding difficulty, usually resolving within two weeks.",
    "MBRRACE-UK is the source for UK maternal mortality data, including psychiatric causes.",
    "Perinatal mental illness is a NICE guideline topic (CG192) and a recurring exam theme."
  ],
  refs:["nice","maudsley","semgen"] };

TEACH["2.15"] = { free:false,
  simple:"Identity is the answer to who am I, and it is not answered once. You settle it in your twenties, and then a job ends or a child leaves or a diagnosis arrives and the question reopens. That reopening is normal. It is only a crisis if nothing else in the person's life is holding steady.",
  teach:[
    "Erikson: identity versus role confusion in adolescence, then intimacy versus isolation, generativity versus stagnation, and ego integrity versus despair.",
    "Marcia's four identity statuses: diffusion, no exploration and no commitment; foreclosure, commitment without exploration, usually inherited from parents; moratorium, active exploration without commitment; achievement, commitment following exploration.",
    "Identity is multiple and domain-specific. A person can be achieved occupationally and diffuse religiously. Work, ethnic, gender, religious and political identities develop on different timetables.",
    "Ethnic identity development in minority groups follows a described sequence from unexamined, through exploration often triggered by an encounter with discrimination, to achieved identity. Achieved ethnic identity is associated with better mental health outcomes.",
    "Acculturation, Berry: integration, assimilation, separation, marginalisation. Integration has the best adaptation outcome, marginalisation the worst.",
    "The midlife crisis as a universal developmental stage is not supported. What is supported is that midlife brings a cluster of role transitions, and that role loss, not age, is the risk factor.",
    "Identity disturbance is a diagnostic feature of borderline personality disorder: a persistently unstable self-image, distinct from the normative exploration of moratorium."
  ],
  cards:[
    ["Name Marcia's four identity statuses with their defining features.","Diffusion: no exploration, no commitment. Foreclosure: commitment without exploration. Moratorium: exploration in progress without commitment. Achievement: commitment following exploration."],
    ["Name Erikson's eight stages in order.","Trust versus mistrust; autonomy versus shame and doubt; initiative versus guilt; industry versus inferiority; identity versus role confusion; intimacy versus isolation; generativity versus stagnation; ego integrity versus despair."],
    ["Is the midlife crisis empirically supported?","No. Longitudinal data do not support a universal midlife crisis. Midlife does cluster role transitions, and role loss rather than age is the risk factor."]
  ],
  note:[
    "Foreclosure is associated with authoritarian parenting and with rigidity; it looks stable and is brittle under challenge.",
    "Identity achievement correlates with higher self-esteem, moral reasoning and intimacy capacity.",
    "The distinction between normative identity exploration and identity disturbance in personality disorder is a genuine clinical difficulty in adolescents, and is why personality disorder diagnosis under 18 requires caution.",
    "Retirement, migration and the onset of chronic illness are the three adult events most reliably associated with identity disruption."
  ],
  refs:["gross","bhugra","noptp"] };

TEACH["2.16"] = { free:true,
  simple:"Ageing does not take the mind away evenly. What you know keeps growing. Your vocabulary at seventy is better than it was at thirty. What slows is how fast you can work something out that you have never seen before, and how quickly you can find a word you definitely know. Mistaking the second for dementia is one of the commonest errors in old age psychiatry.",
  teach:[
    "Crystallised intelligence, accumulated knowledge and vocabulary, is preserved or improves into the seventies. Fluid intelligence, novel problem solving and processing speed, declines from early adulthood.",
    "Normal ageing: slower processing, mild retrieval difficulty with intact recognition, preserved semantic memory, mild reduction in divided attention. Free recall falls more than cued recall, and cueing helps. In dementia, cueing does not help.",
    "Brain volume falls by roughly 0.2 to 0.5 per cent per year from middle age, greatest in prefrontal cortex and hippocampus, with ventricular enlargement and white matter change.",
    "Cross-sectional studies exaggerate decline compared with longitudinal studies because of cohort effects in education and nutrition. This is a repeat examinable point.",
    "Personality is broadly stable in later life. Small mean shifts are described: slight increases in agreeableness and conscientiousness, slight decrease in openness. Marked personality change in old age is a symptom, most often of frontotemporal dementia, and must not be attributed to ageing.",
    "Socioemotional selectivity theory, Carstensen: as time horizons shorten, emotionally meaningful goals are prioritised, social networks are pruned deliberately, and emotional wellbeing is often preserved or improved. This is the positivity effect.",
    "Disengagement theory, that withdrawal is natural and adaptive, is largely discredited. Activity theory and continuity theory have better support.",
    "Social and economic context: retirement, reduced income, loss of role and status, poor housing, sensory impairment, and ageism. Loneliness is an independent predictor of mortality and cognitive decline."
  ],
  cards:[
    ["How do crystallised and fluid intelligence differ in ageing?","Crystallised intelligence, knowledge and vocabulary, is preserved or rises into the seventies. Fluid intelligence, novel problem solving and processing speed, declines from early adulthood."],
    ["How does normal age-related memory change differ from dementia?","In normal ageing, free recall declines but recognition and cued recall are preserved, so cueing helps. In dementia the deficit is in encoding and storage, so cueing does not help and recognition is impaired."],
    ["What is socioemotional selectivity theory?","Carstensen: as perceived time remaining shortens, people prioritise emotionally meaningful goals and close relationships over information seeking, which contributes to preserved or improved emotional wellbeing in later life."]
  ],
  note:[
    "Marked personality change in later life is not normal ageing and should prompt consideration of frontotemporal dementia, frontal lesion or depression.",
    "Sensory impairment is a major and correctable contributor to apparent cognitive decline and to late-onset psychosis. Check hearing and vision before diagnosing anything.",
    "Loneliness and social isolation are independently associated with dementia risk, depression and mortality.",
    "The Lancet Commission modifiable dementia risk factors span the life course, including education, hearing loss, hypertension, obesity, smoking, depression, physical inactivity, diabetes, social isolation, alcohol, head injury and air pollution.",
    "Ageism affects clinical decisions: undertreatment of depression and under-investigation of physical symptoms in older people are both documented."
  ],
  refs:["oxoldage","gross","noptp"] };

TEACH["2.17"] = { free:false,
  simple:"Genes are not a blueprint that gets built regardless. They are more like a recipe that behaves differently depending on the kitchen. The same gene variant can be an advantage in one environment and a liability in another, which is why asking whether something is genetic or environmental is asking the wrong question.",
  teach:[
    "Heritability is the proportion of variance in a trait, in a given population under given conditions, attributable to genetic variance. Change the population or the environment and the number changes. It is not a personal probability.",
    "Behavioural genetics separates additive genetic, shared environmental and non-shared environmental variance. For most psychiatric and personality traits, non-shared environment exceeds shared environment, which surprises people every time.",
    "Gene-environment interaction: genotype moderates sensitivity to environment. The most-taught example, the Caspi 5-HTTLPR by life events finding, has failed to replicate in large samples. Say so honestly rather than teaching it as established.",
    "Gene-environment correlation: passive, evocative and active. Genes influence the environments people encounter, which inflates apparent environmental effects in non-genetically-informative designs.",
    "Epigenetics: heritable-in-cell-division changes in gene expression without change in sequence. DNA methylation, histone modification and non-coding RNA. Early adversity, drugs and psychological therapy can all alter methylation patterns.",
    "Most psychiatric disorders are highly polygenic. Polygenic risk scores explain a meaningful proportion of variance at population level and have no useful predictive value for an individual patient. That distinction is examinable and clinically important.",
    "Copy number variants such as the 22q11.2 deletion have large individual effects and are rare. Common variants have tiny individual effects and are numerous. Both matter, differently."
  ],
  cards:[
    ["Define heritability and state one common misinterpretation.","The proportion of phenotypic variance in a population attributable to genetic variance under the conditions studied. It is commonly misread as the probability that an individual's trait is genetically caused, which it is not."],
    ["Name three mechanisms of epigenetic modification.","DNA methylation, histone modification, and non-coding RNA regulation."],
    ["What is the clinical utility of a polygenic risk score in an individual patient?","Essentially none at present. Polygenic scores explain variance at population level but have insufficient predictive value for individual diagnosis or prognosis."]
  ],
  note:[
    "Heritability estimates: schizophrenia around 80 per cent, bipolar disorder around 60 to 85 per cent, autism above 80 per cent, ADHD around 70 to 80 per cent, major depression around 35 to 40 per cent.",
    "Twin studies assume the equal environments assumption, which is the standard methodological criticism.",
    "Adoption studies separate genetic from rearing environment and are the strongest natural design.",
    "Imprinting: deletion at 15q11-13 gives Prader-Willi if paternal and Angelman if maternal. The same deletion, different parent of origin, different syndrome.",
    "Genetic counselling in psychiatry deals with recurrence risk, not with prediction. Empirical risk figures rather than genotyping are the basis."
  ],
  refs:["agrawal","noptp","rutter"] };

TEACH["2.18"] = { free:false,
  simple:"For most of history the only way to see a developing brain was after it had stopped. Now we can watch a child's brain change year by year without touching it, and the first surprise was that the brain does not simply grow. It builds far too many connections and then deliberately destroys most of them, and that destruction is what makes it work.",
  teach:[
    "Structural MRI shows grey matter volume peaking in childhood and declining through adolescence, reflecting synaptic pruning, while white matter volume rises steadily through myelination into the twenties.",
    "Maturation proceeds posterior to anterior, with primary sensory and motor cortex maturing first and prefrontal cortex last. This is the anatomical basis of the adolescent accelerator-and-brakes problem.",
    "Diffusion tensor imaging measures fractional anisotropy and maps the maturation of white matter tracts across development.",
    "Functional MRI measures the BOLD signal, an indirect haemodynamic proxy lagging neural activity by several seconds. Developmental fMRI shows a shift from diffuse to focal activation with age, and increasing long-range connectivity.",
    "Resting-state work describes the default mode network consolidating through childhood and adolescence.",
    "Findings in disorders: reduced total brain volume and altered cortical thickness trajectories in ADHD, with delayed cortical maturation; early brain overgrowth followed by atypical trajectory in autism; progressive grey matter change around first-episode psychosis.",
    "The essential caveat. Group differences on imaging are statistical, of modest effect size, and overlap heavily between groups. There is no imaging test that diagnoses a psychiatric disorder in an individual. Imaging in clinical psychiatry is for excluding structural pathology, not for making the psychiatric diagnosis."
  ],
  cards:[
    ["Describe the trajectory of grey and white matter volume across childhood and adolescence.","Grey matter volume peaks in late childhood and declines through adolescence with synaptic pruning. White matter volume increases steadily into the twenties with continuing myelination."],
    ["In what direction does cortical maturation proceed?","Posterior to anterior. Primary sensory and motor areas mature first; prefrontal cortex last, continuing into the mid-twenties."],
    ["Can neuroimaging diagnose a psychiatric disorder in an individual?","No. Group differences are statistical with substantial overlap and modest effect sizes. Clinical imaging is used to exclude structural, vascular or inflammatory pathology."]
  ],
  note:[
    "Shaw et al. described delayed rather than deviant cortical maturation in ADHD, with peak cortical thickness reached around three years later than in controls.",
    "fMRI has good spatial and poor temporal resolution; EEG and MEG are the reverse.",
    "Motion artefact is a serious confound in paediatric imaging and has produced spurious developmental findings.",
    "Structural MRI is preferred over CT for developmental questions, and avoids ionising radiation, which matters in children.",
    "Imaging in a first psychotic episode is indicated where there are atypical features, neurological signs, or late or very early onset."
  ],
  refs:["agrawal","lynall","rutter"] };
