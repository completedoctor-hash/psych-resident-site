/* =====================================================================
   TEACHING, SECTION 1
   Behavioural Science and Socio-cultural Psychiatry
   =====================================================================
   One entry per College syllabus code. Attach teaching to an item by
   its code and it appears on the curriculum page automatically.

     simple  the everyday version. Written so a bright 12-year-old
             follows it. No jargon at all.
     teach   short numbered points. Never a paragraph.
     cards   flashcards, question then answer
     note    exact examinable facts
     refs    keys from content/references.js
     free    true opens everything, false gates cards and notes
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------------- 1.1 BASIC PSYCHOLOGY ---------------- */

TEACH["1.1.1"] = { free:true,
  simple:"Two different ways of learning, and your dog shows you both. Ring a bell before dinner every night and eventually the bell alone makes your dog dribble. Nobody taught the dog anything, the bell just borrowed the food's job. That is classical conditioning. Now give your dog a biscuit every time it sits. It sits more. That is operant conditioning: the dog does something, something good follows, so it does it again. One is about what comes BEFORE. The other is about what comes AFTER.",
  teach:[
    "Classical conditioning, Pavlov. Food is the unconditioned stimulus because it works without training. The bell becomes the conditioned stimulus. Get these the wrong way round and you lose a mark you already knew.",
    "Operant conditioning, Skinner. Reinforcement increases behaviour, punishment decreases it. Positive means something is added, negative means something is removed.",
    "Negative reinforcement is relief, not punishment. The tablet stops the pain so you take it again. It INCREASES the behaviour.",
    "Observational learning, Bandura. Four requirements: attention, retention, reproduction, motivation.",
    "Incubation: brief exposure to the feared thing alone can make the fear stronger, not weaker. This is why avoidance keeps a phobia alive.",
    "Preparedness, Seligman. We learn to fear snakes and heights far more easily than we learn to fear plug sockets. Evolution loaded the dice.",
    "Two-factor theory, Mowrer. Fear is learned classically, avoidance is maintained operantly by the relief. This one sentence explains phobia treatment."
  ],
  cards:[
    ["In Pavlov's experiment, which is the unconditioned stimulus?","The food. It causes salivation with no learning. The bell is the conditioned stimulus."],
    ["Which reinforcement schedule is most resistant to extinction?","Variable ratio. Reward after an unpredictable number of responses. The fruit machine."],
    ["What is reciprocal inhibition and who described it?","Wolpe. You cannot be relaxed and anxious at once, so pairing relaxation with graded exposure inhibits the anxiety. The basis of systematic desensitisation."],
    ["Distinguish shaping from chaining.","Shaping reinforces successive approximations to a target behaviour. Chaining links a sequence of behaviours, each cueing the next, built forwards or backwards."]
  ],
  note:[
    "Delayed (forward) conditioning, CS starting before and overlapping the UCS, gives the strongest learning. Backward conditioning, UCS first, is weakest.",
    "Fixed interval gives a scalloped response curve. Fixed ratio gives a post-reinforcement pause. Continuous reinforcement gives fastest acquisition and fastest extinction.",
    "Extinction is presenting the CS without the UCS. Spontaneous recovery is its return after a rest.",
    "Premack principle: a high-frequency behaviour can reinforce a low-frequency one.",
    "Punishment suppresses rather than unlearns behaviour, works only when immediate and consistent, and models aggression. It is the weakest tool in the set.",
    "Watson and Rayner, 1920, Little Albert. Fear conditioned to a white rat generalised to a rabbit and a fur coat. He was never deconditioned."
  ],
  refs:["gross","atkinson"] };

TEACH["1.1.2"] = { free:true,
  simple:"Your eyes send up a mess and your brain sends down a guess. Look at a coin from the side: on your retina it is a squashed oval, but you see a round coin, because your brain has decided coins are round and is not going to be argued with. Perception is not a camera. It is a very fast, very confident bet about what is out there, and almost all of it is right, which is why the times it is wrong are so interesting.",
  teach:[
    "Figure-ground: the brain splits every scene into an object and a background. It cannot hold both as figure at once, which is what the vase-and-faces picture shows.",
    "Object constancy: size, shape, colour and brightness are held stable even though the retinal image changes constantly.",
    "Set: expectation changes what you see. The same shape reads as B or 13 depending on what is beside it.",
    "Perception is active. Bottom-up is driven by the data. Top-down is driven by expectation. Both run at once.",
    "The clinical payoff. An illusion is a wrong reading of something real. A hallucination is a reading of nothing at all. Turn the sensory input down, as in deafness or blindness, and the top-down guess takes over. That is Charles Bonnet syndrome, and it is why very-late-onset psychosis is associated with deafness.",
    "Development: Hubel and Wiesel showed a critical period. Deprive one eye of input early and the cortical territory is permanently lost. Nature builds the machinery, environment tunes it."
  ],
  cards:[
    ["Name four Gestalt principles of perceptual organisation.","Proximity, similarity, closure, continuity. Also common fate and figure-ground."],
    ["Distinguish an illusion from a hallucination.","An illusion is a misperception of a real stimulus. A hallucination is a percept without any stimulus, in external space, with the full force of a real perception, and not under voluntary control."],
    ["What is Charles Bonnet syndrome?","Complex visual hallucinations in a person with visual impairment, with insight preserved and no psychiatric illness."],
    ["What did Hubel and Wiesel's monocular deprivation work demonstrate?","A critical period in visual cortical development. Input is required at the right time or the capacity is permanently lost."]
  ],
  note:[
    "Perceptual constancies: size, shape, colour, brightness, location.",
    "Visual illusions used in teaching: Muller-Lyer, Ponzo, Necker cube, Kanizsa triangle.",
    "Auditory: the cocktail party effect shows selective attention with breakthrough for salient items such as your own name.",
    "Functional hallucination: hallucination and a real stimulus in the same modality together. Reflex hallucination: stimulus in one modality triggers hallucination in another. Extracampine: outside the sensory field.",
    "Pseudohallucination is experienced in inner subjective space and recognised as not real."
  ],
  refs:["gross","atkinson","oyebode"] };

TEACH["1.1.3"] = { free:false,
  simple:"Imagine standing in a train station where every announcement, every conversation and every advert is shouting at once. You cannot listen to all of it, so you have a doorman who lets one thing through at a time. Attention is that doorman. In schizophrenia the doorman seems to let too much through, so ordinary things arrive with the volume up and the meaning turned strange.",
  teach:[
    "Broadbent: an early filter, selecting by physical characteristics before meaning is processed.",
    "Treisman: the filter attenuates rather than blocks. Unattended channels are turned down, not off, which is why your own name gets through.",
    "Deutsch and Deutsch: selection is late, after meaning has been analysed.",
    "Controlled processing is slow, effortful, serial and flexible. Automatic processing is fast, effortless, parallel and hard to stop. The Stroop effect is automatic reading interfering with controlled colour naming.",
    "Applied to schizophrenia: impaired sensory gating, tested by P50 suppression and prepulse inhibition, and reduced latent inhibition, meaning irrelevant stimuli are not learned to be ignored. This is the experimental version of aberrant salience.",
    "Aberrant salience, Kapur: dysregulated dopamine assigns significance to things that do not merit it, and the delusion is the explanation the person constructs for that experience."
  ],
  cards:[
    ["What is latent inhibition and how does it change in schizophrenia?","Prior exposure to a stimulus without consequence slows later learning about it. It is reduced in acute schizophrenia, so irrelevant stimuli are not filtered out."],
    ["What does P50 suppression measure?","Sensory gating. Normally the evoked response to a second identical click is suppressed. Reduced suppression is found in schizophrenia and in unaffected relatives, making it a candidate endophenotype."],
    ["What does the Stroop test assess?","Selective attention and response inhibition, by pitting automatic word reading against controlled colour naming."]
  ],
  note:[
    "Dichotic listening is the classic experimental paradigm for selective attention.",
    "Prepulse inhibition of the startle response is reduced in schizophrenia and is used in animal models.",
    "Divided attention and the psychological refractory period: two decisions close together cannot be made in parallel.",
    "Kapur, aberrant salience, American Journal of Psychiatry, 2003.",
    "Continuous Performance Test measures sustained attention and is impaired in both schizophrenia and ADHD."
  ],
  refs:["gross","atkinson","noptp"] };

TEACH["1.1.4"] = { free:true,
  simple:"Memory is not one box, it is three. There is a box that holds what you just saw for about half a second. There is a small workbench that holds a phone number while you dial it and drops it the moment you are distracted. And there is a warehouse that keeps your first day at school. A man called HM had the door to the warehouse taken out surgically. He could learn to draw in a mirror, getting better every day, while swearing he had never done it before. His hands remembered. He did not.",
  teach:[
    "Sensory memory: iconic about half a second, echoic about two to four seconds.",
    "Short-term memory: seven items plus or minus two, Miller, for fifteen to thirty seconds without rehearsal. Chunking is how you beat the limit.",
    "Working memory, Baddeley and Hitch: central executive, phonological loop, visuospatial sketchpad, and the episodic buffer added later.",
    "Long-term memory splits into declarative and procedural. Declarative splits again into episodic, which is events and is hippocampal, and semantic, which is facts and lives in temporal neocortex.",
    "Forgetting is not one process: decay, interference (proactive and retroactive), retrieval failure, and motivated forgetting.",
    "Encoding specificity, Tulving: you remember best in the state and place you learned. This is why revising in the pub is a bad plan.",
    "Memory is reconstructive, not a recording. Schemata fill the gaps, which is how Loftus produced confident false memories with nothing but a leading question."
  ],
  cards:[
    ["Name the components of Baddeley and Hitch's working memory model.","Central executive, phonological loop, visuospatial sketchpad, and the episodic buffer added in 2000."],
    ["Which memory system is spared in the classic amnesic syndrome?","Procedural or implicit memory, and short-term or digit span. Episodic memory is lost."],
    ["What are primacy and recency effects, and how do they dissociate?","In free recall, first and last items are best remembered. A filled delay abolishes recency but not primacy, which is evidence for separate short-term and long-term stores."],
    ["Which structures are damaged in Korsakoff syndrome?","Mammillary bodies and the dorsomedial nucleus of the thalamus, with anterograde amnesia and confabulation."]
  ],
  note:[
    "HM, bilateral medial temporal lobectomy 1953: dense anterograde amnesia with intact procedural learning and intact digit span.",
    "Levels of processing, Craik and Lockhart: deeper semantic processing gives better retention than shallow structural processing.",
    "State-dependent and mood-congruent recall. Depressed patients preferentially retrieve negative memories, which is a maintaining factor.",
    "Overgeneral autobiographical memory is characteristic of depression and PTSD.",
    "Confabulation is not lying. It requires no intent to deceive and is associated with frontal and basal forebrain damage."
  ],
  refs:["gross","atkinson","lishman"] };

TEACH["1.1.5"] = { free:false,
  simple:"Your brain is lazy on purpose. Working everything out properly would take all day, so instead it uses shortcuts that are right often enough to be worth the speed. Ask people whether more words start with K or have K third, and most say the first, because starting-with-K words are easier to think of. They are wrong. The shortcut is not random, it fails in a predictable direction, and that is exactly why examiners like it.",
  teach:[
    "Concepts are stored as prototypes, a best example, rather than as strict definitions. A robin is a better bird than a penguin.",
    "Deductive reasoning goes from general rule to specific case and can be logically certain. Inductive goes from cases to a rule and never can.",
    "An algorithm guarantees a solution but is slow. A heuristic is fast and sometimes wrong.",
    "Availability heuristic: probability judged by how easily examples come to mind. Vivid rare events are overestimated.",
    "Representativeness heuristic: judged by resemblance to a stereotype. Produces base-rate neglect and the conjunction fallacy.",
    "Anchoring: an initial number drags the final estimate, even when the anchor is arbitrary.",
    "Clinical relevance. These are not curiosities. Availability is why you over-diagnose the condition you saw last week, and anchoring is why the referral letter's diagnosis is so hard to shake off."
  ],
  cards:[
    ["What is the conjunction fallacy?","Judging a conjunction of two events more probable than one of them alone, because the conjunction fits a stereotype better. It follows from the representativeness heuristic."],
    ["What is confirmation bias?","Preferentially seeking and weighting evidence that supports the hypothesis already held."],
    ["What is functional fixedness?","Failure to solve a problem because an object is seen only in its usual role. A mental set that blocks the solution."]
    ],
  note:[
    "Kahneman and Tversky are the source for the heuristics. System 1 is fast and automatic, System 2 slow and effortful.",
    "Wason selection task demonstrates poor performance on abstract conditional reasoning that improves markedly with concrete social content.",
    "Sapir-Whorf hypothesis, linguistic relativity: language shapes thought. The strong version is not supported.",
    "Concrete thinking, tested by proverb interpretation, is a frontal and psychotic sign, not a measure of intelligence.",
    "Premature closure and diagnostic momentum are the clinical names for these errors and are examinable in patient safety."
  ],
  refs:["gross","atkinson"] };

TEACH["1.1.6"] = { free:false,
  simple:"Personality is what you do when nothing much is happening. There are two ways to study it. You can measure the same few dials in everybody and compare, which tells you where a person sits relative to others. Or you can sit with one person and ask what the world looks like from inside their head, which tells you something no comparison can. The first is nomothetic. The second is idiographic. Both are needed and neither is enough.",
  teach:[
    "Nomothetic: general laws, dimensions, comparison across people. Traits and factor analysis.",
    "Idiographic: the individual case in its own terms. Personal construct theory and the repertory grid.",
    "Type theories sort people into categories. Trait theories place them on continua. Traits have far better empirical support.",
    "Eysenck: extraversion-introversion and neuroticism-stability, later adding psychoticism. Grounded in arousal theory.",
    "Cattell: 16 personality factors derived by factor analysis of trait words.",
    "Five Factor Model: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism. The best replicated model across cultures.",
    "Kelly's personal construct theory: people are scientists building and testing constructs about their world. Measured with the repertory grid.",
    "Interactionism resolves the person-situation debate. Behaviour is a product of trait and situation, not either alone."
  ],
  cards:[
    ["Name the Five Factor Model dimensions.","Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism."],
    ["Distinguish a projective from an objective test, with examples.","Projective: ambiguous stimulus interpreted by the subject, assuming inner material is projected. Rorschach, Thematic Apperception Test. Objective: standardised self-report with fixed scoring. MMPI, EPQ, 16PF."],
    ["What is a Q-sort?","An idiographic method in which the subject sorts statements into a forced normal distribution from most to least characteristic, allowing within-person comparison over time."]
  ],
  note:[
    "MMPI is an objective inventory with validity scales, not a projective test. This is a common trap.",
    "Projective tests have poor reliability and validity and are not used diagnostically in UK practice.",
    "Mischel's 1968 critique launched the person-situation debate by showing weak cross-situational consistency.",
    "Neuroticism predicts onset of depression and anxiety. Conscientiousness predicts longevity and treatment adherence.",
    "ICD-11 personality disorder is dimensional: severity plus five trait domains, which are recognisably the Five Factor Model in clinical dress."
  ],
  refs:["gross","atkinson","noptp"] };

TEACH["1.1.7"] = { free:false,
  simple:"Why does anybody get out of bed? One answer is that something is missing and you move to fix it: you are thirsty, so you drink. That is a drive being reduced. But it does not explain why a well-fed child takes a clock apart, or why people climb mountains that offer nothing at the top. Some of what we do is done because doing it is the point.",
  teach:[
    "Drive reduction, Hull: a need creates a drive, behaviour reduces the drive, the reduction reinforces the behaviour. Homeostasis is the model.",
    "Primary drives are biological. Secondary drives are learned by association with primary ones. Money is the classic secondary reinforcer.",
    "Drive reduction fails to explain curiosity, exploration and play, which occur with no deficit to correct.",
    "Optimal arousal theory: organisms seek a preferred level of arousal, not the minimum. Yerkes-Dodson: performance rises with arousal to an optimum then falls, and the optimum is lower for complex tasks.",
    "Hypothalamic control: the lateral hypothalamus drives eating, the ventromedial nucleus signals satiety. Lesion the lateral and the animal stops eating; lesion the ventromedial and it overeats.",
    "Cognitive consistency, Festinger: inconsistent cognitions create discomfort and the easier cognition shifts. This is why people who suffer to join a group value it more.",
    "McClelland's need for achievement, and Maslow's hierarchy: physiological, safety, love and belonging, esteem, self-actualisation.",
    "Overjustification effect: reward an intrinsically enjoyable activity and intrinsic motivation falls."
  ],
  cards:[
    ["State the Yerkes-Dodson law.","Performance improves with arousal up to an optimum then declines. The optimum is lower for more complex or novel tasks."],
    ["What happens after a ventromedial hypothalamic lesion?","Hyperphagia and obesity, because the satiety signal is lost. A lateral hypothalamic lesion causes aphagia."],
    ["Name Maslow's five levels in order.","Physiological, safety, love and belonging, esteem, self-actualisation."]
  ],
  note:[
    "Cognitive dissonance, Festinger 1957. Effort justification, induced compliance, and free choice are the three classic paradigms.",
    "Ghrelin is orexigenic and rises before meals; leptin is anorexigenic and reflects fat mass. Both are named in syllabus item 3.3.5.",
    "Self-determination theory, Deci and Ryan: autonomy, competence and relatedness underpin intrinsic motivation.",
    "Learned helplessness, Seligman: uncontrollable aversive events produce passivity and is used as a model of depression.",
    "Maslow's hierarchy is widely taught and poorly evidenced. Know it because it is asked, not because it is proven."
  ],
  refs:["gross","atkinson"] };

TEACH["1.1.8"] = { free:false,
  simple:"You see a bear. Your heart pounds and you run. Here is the argument that has run for a century: does your heart pound because you are afraid, or are you afraid because your heart is pounding? James said the body goes first and the feeling is your reading of the body. Cannon said that cannot be right, because your heart does the same thing in fear, rage and love, and you can tell those apart perfectly well.",
  teach:[
    "James-Lange: stimulus, then bodily response, then emotion as the perception of that response. You are afraid because you run.",
    "Cannon-Bard: the thalamus sends signals to cortex and body simultaneously, so emotion and arousal happen together, not in sequence.",
    "Cannon's objections: visceral responses are too slow, too similar across emotions, and artificially induced arousal does not produce emotion.",
    "Schachter and Singer two-factor theory: emotion equals physiological arousal plus a cognitive label. The same adrenaline is felt as euphoria or anger depending on what the person nearby is doing.",
    "Lazarus: cognitive appraisal comes first. Primary appraisal asks whether this matters to me, secondary asks what I can do about it.",
    "Basic emotions, Ekman: happiness, sadness, anger, fear, disgust, surprise, with cross-cultural recognition of facial expression.",
    "Emotion and performance: the Yerkes-Dodson relationship again, and mood-congruent processing in depression."
  ],
  cards:[
    ["What does the James-Lange theory claim?","The physiological response comes first and the emotion is the perception of it."],
    ["What does Schachter and Singer's two-factor theory add?","A cognitive label applied to undifferentiated arousal. Same arousal, different attribution, different emotion."],
    ["Name Ekman's basic emotions.","Happiness, sadness, anger, fear, disgust, surprise. Contempt was later proposed as a seventh."]
  ],
  note:[
    "Papez circuit, 1937, and MacLean's limbic system are the anatomical inheritance of this debate.",
    "The amygdala is required for fear conditioning and for recognising fearful faces. Bilateral lesions impair both.",
    "Alexithymia: difficulty identifying and describing feelings, associated with somatisation.",
    "Affect is observed and momentary; mood is reported and sustained. Blunting, incongruity and lability are the examinable abnormalities.",
    "The Capilano bridge study is the standard demonstration of misattribution of arousal."
  ],
  refs:["gross","atkinson","oyebode"] };

TEACH["1.1.9"] = { free:true,
  simple:"Stress is not what happens to you. It is the gap between what is being demanded and what you think you can manage, and that is why two people in the same job can have completely different weeks. The same ward round is a threat to one doctor and a challenge to another. Change what somebody believes they can handle, or give them control over something, and you have changed the stress without touching the workload.",
  teach:[
    "Selye's general adaptation syndrome: alarm, resistance, exhaustion. A physiological model.",
    "Lazarus's transactional model: stress is the relationship between demand and appraised coping resources. Primary appraisal is is this a threat, secondary is can I cope.",
    "Holmes and Rahe Social Readjustment Rating Scale, 1967, scored in life change units. Criticised for ignoring desirability, context and personal meaning.",
    "Brown and Harris, Camberwell 1978: the contextual threat method. Severe life events with long-term threat precede depression. Vulnerability factors: loss of mother before 11, three or more children under 14 at home, no confiding relationship, no employment outside the home.",
    "Daily hassles predict distress at least as well as major life events.",
    "Locus of control, Rotter: internal versus external. Learned helplessness, Seligman, is what happens when the link between action and outcome is broken.",
    "Type A behaviour, Friedman and Rosenman: hostility is the component that actually predicts cardiac risk; time urgency and competitiveness do not.",
    "Resilience is not the absence of adversity. Rutter's steeling effect: manageable stress, successfully overcome, increases later resistance."
  ],
  cards:[
    ["Name Brown and Harris's four vulnerability factors for depression.","Loss of mother before age 11; three or more children under 14 at home; lack of a confiding relationship; lack of employment outside the home."],
    ["What is the key methodological advance of the contextual threat method?","It rates the threat a life event would carry for anyone in that person's circumstances, judged by independent raters, removing the bias of the depressed person's own account."],
    ["Which component of Type A behaviour predicts coronary risk?","Hostility. Time urgency and achievement striving do not independently predict it."]
  ],
  note:[
    "Life events cluster in the months before onset of depression, and to a lesser degree before psychosis and mania.",
    "Loss events precede depression; danger events precede anxiety. Humiliation and entrapment are the most depressogenic.",
    "The HPA axis is the physiological substrate: CRH, ACTH, cortisol, with negative feedback. See syllabus item 3.6.2.",
    "Kindling: successive episodes require progressively smaller triggers, described in both depression and bipolar disorder.",
    "Coping is classified as problem-focused, emotion-focused and avoidant. Avoidant coping predicts worse outcomes."
  ],
  refs:["gross","morgan","noptp"] };

TEACH["1.1.10"] = { free:false,
  simple:"Sleep is not the brain switched off. It is the brain running a different programme, in a fixed order, about ninety minutes at a time. The deep repairing part is loaded into the first half of the night and the dreaming into the second. That is why the person who sleepwalks does it before midnight and the person with nightmares wakes at five.",
  teach:[
    "Stages: N1, N2 with K complexes and sleep spindles, N3 slow wave, and REM with low-voltage mixed-frequency EEG, sawtooth waves and muscle atonia.",
    "A cycle is about 90 minutes. REM is 20 to 25 per cent of adult sleep and the REM periods lengthen across the night.",
    "Slow wave sleep is concentrated in the first third of the night. This is where sleepwalking and night terrors occur, and why the person has no memory of them.",
    "Nightmares occur in REM, later in the night, and are recalled.",
    "Circadian control: the suprachiasmatic nucleus is the pacemaker, entrained by light. Melatonin is made in the pineal from serotonin and released in darkness.",
    "Sleep deprivation causes irritability, impaired attention and vigilance, microsleeps, and in extremis perceptual disturbance. Selective REM deprivation produces REM rebound.",
    "Depression changes the architecture: reduced REM latency, increased REM density, reduced slow wave sleep, early morning wakening.",
    "Consciousness and the unconscious: implicit processing is demonstrable experimentally through priming, blindsight and implicit memory, without invoking psychoanalytic theory.",
    "Hypnosis is best understood as focused attention with heightened suggestibility. Its forensic use is unsafe because it increases confidence without increasing accuracy."
  ],
  cards:[
    ["In which sleep stage do night terrors and sleepwalking occur, and when in the night?","Slow wave sleep, N3, in the first third of the night. There is little or no dream recall."],
    ["How does depression change sleep architecture?","Reduced REM latency, increased REM density, reduced slow wave sleep, early morning wakening and reduced total sleep time."],
    ["What is REM sleep behaviour disorder and why does it matter?","Loss of REM atonia with acting out of dreams. It is a strong prodromal marker for the synucleinopathies, particularly Lewy body dementia and Parkinson's disease."]
  ],
  note:[
    "Narcolepsy: excessive daytime sleepiness, cataplexy, sleep paralysis, hypnagogic hallucinations. Loss of hypothalamic orexin neurones; strong association with HLA-DQB1*06:02.",
    "Hypnagogic hallucinations occur on falling asleep, hypnopompic on waking. Both occur in health.",
    "Most antidepressants suppress REM. Trazodone, mirtazapine and agomelatine are relative exceptions.",
    "Total sleep time and slow wave sleep fall with age; sleep fragments and phase-advances.",
    "Parasomnias are classified as NREM (arousal disorders) and REM (nightmare disorder, REM sleep behaviour disorder)."
  ],
  refs:["gross","agrawal","noptp"] };

/* ---------------- 1.2 SOCIAL PSYCHOLOGY ---------------- */

TEACH["1.2.1"] = { free:false,
  simple:"An attitude has three parts: what you think, what you feel, and what you do. They often disagree. Almost everybody thinks exercise is good and feels positive about it, and most people do not do it. That gap is the whole of health promotion.",
  teach:[
    "Three components: cognitive (belief), affective (feeling), behavioural (action tendency).",
    "Measurement. Thurstone: judges scale statements, respondents endorse. Likert: agreement on a five or seven point scale, summed. Osgood's semantic differential: bipolar adjective pairs.",
    "Attitudes predict behaviour weakly in general and much better when the attitude is specific, strongly held, personally relevant and formed by direct experience.",
    "Theory of planned behaviour, Ajzen: attitude, subjective norm and perceived behavioural control predict intention, and intention predicts behaviour.",
    "Persuasion depends on the source (credibility, attractiveness), the message (two-sided arguments work better with informed audiences; fear appeals work only with an achievable action attached) and the audience.",
    "Elaboration likelihood model: a central route through argument quality when motivation and ability are high, a peripheral route through cues when they are not.",
    "Cognitive dissonance, Festinger. Where behaviour cannot be undone, the attitude moves to fit it."
  ],
  cards:[
    ["Name the three components of an attitude.","Cognitive, affective, behavioural."],
    ["Which three scaling methods are named in the syllabus?","Thurstone, Likert, and Osgood's semantic differential."],
    ["When do fear appeals change behaviour?","When the fear is moderate and paired with a specific, achievable action the person believes they can carry out. High fear without an efficacy message produces avoidance."]
  ],
  note:[
    "Sleeper effect: a message from a low-credibility source gains persuasiveness over time as source and content dissociate.",
    "Inoculation theory: pre-exposure to a weak counter-argument builds resistance to persuasion.",
    "Foot-in-the-door and door-in-the-face are the two classic compliance techniques.",
    "Cognitive dissonance is reduced by changing the attitude, adding consonant cognitions, or trivialising the inconsistency.",
    "Health Belief Model: perceived susceptibility, severity, benefits, barriers, cues to action, self-efficacy."
  ],
  refs:["gross","atkinson","morgan"] };

TEACH["1.2.2"] = { free:false,
  simple:"There is the person you are, the person you think you are, and the person you wish you were. Rogers argued that unhappiness comes from the distance between the second and the third, and that therapy works by closing it, mostly by making the person feel accepted enough to look.",
  teach:[
    "Self-concept is the descriptive picture. Self-esteem is the evaluation of it. Self-image is how you believe you appear.",
    "Rogers: the gap between the actual self and the ideal self drives distress. Unconditional positive regard permits it to narrow.",
    "The looking-glass self, Cooley: we form self-concept from our reading of how others see us.",
    "Self-recognition develops around 18 to 24 months, tested by the rouge or mark test, and is a marker of objective self-awareness.",
    "Self-efficacy, Bandura, is task-specific belief in one's own capability, built from mastery experience, vicarious experience, verbal persuasion and physiological state. It is the strongest single predictor of behaviour change.",
    "Self-serving bias: success is attributed internally, failure externally. It is reversed in depression, which shows a depressive attributional style: internal, stable and global attributions for failure."
  ],
  cards:[
    ["At what age does self-recognition emerge and how is it tested?","Around 18 to 24 months, by the rouge or mark test, in which a mark is placed on the child's face and the child is shown a mirror."],
    ["What are the four sources of self-efficacy?","Mastery experience, vicarious experience, verbal persuasion, and physiological and emotional state."],
    ["Describe the depressive attributional style.","Internal, stable and global attributions for negative events, with the reverse for positive events. Abramson, Seligman and Teasdale's reformulated learned helplessness model."]
  ],
  note:[
    "Objective self-awareness is required for embarrassment, shame and pride, which are therefore called self-conscious emotions.",
    "Disorders of the self are examinable separately in syllabus item 5.2.2.1: thought alienation, passivity, loss of ego boundaries.",
    "Self-esteem is a mediator between adversity and depression, not simply an outcome.",
    "Identity development is covered in syllabus item 2.15 and by Marcia's four identity statuses."
  ],
  refs:["gross","atkinson"] };

TEACH["1.2.3"] = { free:true,
  simple:"When somebody cuts you up in traffic they are a selfish idiot. When you do it, you were late for something important. Same act, two completely different explanations, and the difference is only whose behaviour is being explained. This is the single most reliable finding in social psychology and it happens in ward rounds every day.",
  teach:[
    "Attribution is the process of explaining behaviour, internally by disposition or externally by situation.",
    "Kelley's covariation model: we use consensus, distinctiveness and consistency. Low consensus, low distinctiveness and high consistency point to an internal cause.",
    "Fundamental attribution error: overweighting disposition and underweighting situation when explaining other people. Weaker in collectivist cultures.",
    "Actor-observer bias: our own behaviour is explained situationally, other people's dispositionally.",
    "Person perception: primacy effects, the halo effect, and implicit personality theory. The first impression sets the frame the rest is read through.",
    "Affiliation and friendship: proximity, similarity, reciprocity, and mere exposure. Physical attractiveness has a large and uncomfortable effect on initial judgements.",
    "Theory of mind: understanding that others hold beliefs that may be false. Passed on the Sally-Anne task around four. Impaired in autism, and the mentalising deficit model is central to mentalisation-based treatment in borderline personality disorder."
  ],
  cards:[
    ["What is the fundamental attribution error?","Overweighting dispositional and underweighting situational causes when explaining another person's behaviour."],
    ["Name Kelley's three covariation dimensions.","Consensus, distinctiveness and consistency."],
    ["When is theory of mind typically acquired and how is it tested?","Around four years, by a false belief task such as Sally-Anne or Smarties."]
  ],
  note:[
    "Mere exposure effect, Zajonc: repeated exposure to a neutral stimulus increases liking.",
    "The halo effect: one positive attribute biases judgement of unrelated attributes.",
    "Attributional style is a vulnerability factor in depression and a target in CBT.",
    "Mentalisation-based treatment, Bateman and Fonagy, grew directly from theory of mind research and has trial evidence in borderline personality disorder.",
    "Paranoia is associated with an externalising personal attribution bias: negative events are blamed on other people rather than on circumstances."
  ],
  refs:["gross","atkinson","noptp"] };

TEACH["1.2.4"] = { free:true,
  simple:"Put one honest person in a room with seven people who all say a short line is long, and about a third of the time the honest person agrees with them. Then put an ordinary person in front of a dial and tell them to shock a stranger, and about two thirds go all the way to the end. Neither study is about bad people. Both are about how much of what we call character is actually the room you are standing in.",
  teach:[
    "Asch, conformity. Around 75 per cent conformed at least once; conformity occurred on about a third of critical trials. One dissenting ally reduced it dramatically.",
    "Normative influence is to be accepted. Informational influence is to be right.",
    "Milgram, obedience. 65 per cent, 26 of 40, went to 450 volts in the baseline condition. Obedience fell with proximity to the victim, distance from the authority, and loss of institutional prestige.",
    "French and Raven's bases of social power: reward, coercive, legitimate, referent, expert. Informational was added later.",
    "Group polarisation: discussion pushes a group towards a more extreme version of its initial leaning.",
    "Groupthink, Janis: cohesion plus directive leadership plus insulation from outside view produces bad decisions and suppressed dissent.",
    "Deindividuation: anonymity and diffused responsibility in crowds reduce self-monitoring.",
    "The clinical translation. Every serious incident inquiry that finds a team where nobody spoke up is describing these findings. Speaking up is a skill that has to be trained because the default is not to."
  ],
  cards:[
    ["What proportion of Milgram's participants delivered the maximum shock?","65 per cent, 26 of 40, in the baseline voice-feedback condition."],
    ["What most powerfully reduces conformity in the Asch paradigm?","A single dissenting ally. Unanimity of the majority is the critical variable."],
    ["Name French and Raven's five bases of social power.","Reward, coercive, legitimate, referent, expert."]
  ],
  note:[
    "Milgram conducted the studies at Yale, August 1961 to May 1962, explicitly framed around the Eichmann trial.",
    "Diana Baumrind's 1964 critique in American Psychologist is the canonical ethical objection.",
    "Zimbardo's Stanford prison study, 1971, is heavily criticised: archival work by Le Texier in 2019 showed the guards were coached.",
    "Bystander effect, Latane and Darley: helping falls as the number of bystanders rises, through diffusion of responsibility and pluralistic ignorance.",
    "Minority influence requires consistency, confidence and flexibility, and works through conversion rather than compliance."
  ],
  refs:["gross","atkinson","morgan"] };

TEACH["1.2.5"] = { free:false,
  simple:"Split a group of boys at summer camp into two teams and within days they are stealing each other's flags. Nothing was different about the boys. The only thing that changed was the line drawn between them. Then make them push a broken-down bus together and the hostility falls apart, because now there is only one group.",
  teach:[
    "Sherif's Robbers Cave: competition for scarce resources produced intergroup hostility, and superordinate goals requiring cooperation reduced it.",
    "Realistic conflict theory: hostility comes from competition over real resources.",
    "Social identity theory, Tajfel and Turner: the minimal group paradigm showed that arbitrary categorisation alone produces in-group favouritism, with no competition at all.",
    "Categorisation, identification, comparison. Self-esteem is served by favourable comparison of the in-group.",
    "Out-group homogeneity effect: they are all the same, we are individuals.",
    "Authoritarian personality, Adorno, and the F-scale. Methodologically weak but historically important.",
    "Contact hypothesis, Allport: contact reduces prejudice under four conditions, equal status, common goals, cooperation, and institutional support. This is why direct contact with people with lived experience beats education alone in anti-stigma work."
  ],
  cards:[
    ["What did the minimal group paradigm show?","Categorisation into arbitrary groups, with no competition, history or contact, is sufficient to produce in-group favouritism."],
    ["State Allport's four conditions for contact to reduce prejudice.","Equal status, common goals, intergroup cooperation, and support of authorities or institutions."],
    ["What is a superordinate goal?","A goal that both groups want and neither can achieve alone. Sherif showed it reduces intergroup hostility."]
  ],
  note:[
    "Stereotype threat, Steele and Aronson: awareness of a negative stereotype about one's group impairs performance on the stereotyped task.",
    "Illusory correlation contributes to stereotype formation: rare behaviours in minority groups are over-associated.",
    "Ethnic density effect: the incidence of psychosis in a minority group is higher where that group is a smaller proportion of the local population.",
    "The contact hypothesis is the evidence base behind anti-stigma programmes such as Time to Change."
  ],
  refs:["gross","morgan","bhugra"] };

TEACH["1.2.6"] = { free:false,
  simple:"Bandura's children watched an adult punch an inflatable clown, and then they punched it too. Nobody rewarded them and nobody told them to. They had simply seen it done, and seeing it done was enough to make it a thing you could do.",
  teach:[
    "Social learning theory, Bandura: aggression is acquired by observation and imitation, without direct reinforcement. Bobo doll studies, 1961 and 1963.",
    "Same-sex models are imitated more readily; seeing the model rewarded increases imitation, which is vicarious reinforcement.",
    "Operant account: aggression persists when it works. It is reinforced by getting what the person wanted, or by ending something unpleasant.",
    "Ethological account, Lorenz: aggression as instinctive with hydraulic build-up. Largely discarded but examinable.",
    "Frustration-aggression hypothesis, Dollard: frustration produces aggression. Berkowitz's revision adds that frustration produces readiness, and aggression follows only if cues are present.",
    "Excitation transfer, Zillmann: arousal from one source is carried over and intensifies aggression to a later provocation.",
    "Media: meta-analyses show a small but consistent association between media violence and aggression. The effect on real-world violent crime is contested and the direction of causation is not settled.",
    "Family and social background: harsh and inconsistent discipline, parental conflict, poor supervision, and modelling of aggression at home."
  ],
  cards:[
    ["What did the Bobo doll studies demonstrate?","Aggression can be acquired by imitation of a model without any direct reinforcement of the observer."],
    ["State Berkowitz's revision of the frustration-aggression hypothesis.","Frustration produces a readiness for aggression. Aggression itself occurs only when aggressive cues are present in the situation."],
    ["What is excitation transfer?","Residual physiological arousal from an unrelated source is misattributed to a later provocation and intensifies the aggressive response."]
  ],
  note:[
    "Instrumental (proactive, planned) aggression is distinguished from hostile (reactive, affective) aggression. The distinction predicts different treatment approaches and is important in forensic work.",
    "Reciprocal determinism: person, behaviour and environment each influence the other two.",
    "Callous-unemotional traits mark a subgroup of conduct disorder with worse prognosis and poorer response to standard parenting interventions.",
    "Neurobiology of aggression is examined separately in syllabus item 3.5.1.4.",
    "The strongest single predictor of future violence remains past violence."
  ],
  refs:["gross","atkinson","rutter"] };

TEACH["1.2.7"] = { free:false,
  simple:"Thirty-eight people were said to have watched a woman be attacked in New York and none of them called the police. The story turned out to be largely wrong, but the question it provoked was right: why does having more people around make help less likely, not more? Because if everybody could act, nobody in particular has to.",
  teach:[
    "Bystander effect, Latane and Darley: the more bystanders, the lower the probability that any one of them helps.",
    "Two mechanisms: diffusion of responsibility, and pluralistic ignorance, in which each person reads everyone else's inaction as evidence that nothing is wrong.",
    "The decision model: notice the event, interpret it as an emergency, assume responsibility, know what to do, then act. Failure at any step stops help.",
    "Social exchange theory: relationships are maintained when perceived rewards exceed costs, judged against a comparison level.",
    "Reciprocity norm: help given creates an obligation to return it. Social responsibility norm: help those who depend on us.",
    "Empathy-altruism hypothesis, Batson: empathic concern produces genuinely altruistic helping, not merely relief of one's own distress.",
    "Kin selection and reciprocal altruism give the evolutionary account.",
    "Clinical use. In a cardiac arrest you name a person and give them a task, because the bystander effect is defeated by assigning responsibility to one identified individual."
  ],
  cards:[
    ["Name the two mechanisms of the bystander effect.","Diffusion of responsibility and pluralistic ignorance."],
    ["What is the empathy-altruism hypothesis?","Batson: empathic concern for another produces helping motivated by their welfare rather than by reduction of one's own distress."],
    ["How is the bystander effect overcome in an emergency?","By assigning responsibility explicitly to a named individual with a specific task."]
  ],
  note:[
    "The Kitty Genovese case, 1964, prompted the research. The reported detail of 38 unresponsive witnesses has since been shown to be substantially inaccurate.",
    "Latane and Darley's five-step decision model is the examinable structure.",
    "Social exchange theory also underpins equity theory in relationships.",
    "Prosocial behaviour rises with mood, similarity to the victim, and rural rather than urban setting."
  ],
  refs:["gross","atkinson"] };

/* ---------------- 1.3 SOCIAL SCIENCE AND SOCIO-CULTURAL ---------------- */

TEACH["1.3.1"] = { free:false,
  simple:"Where you are born changes how likely you are to become mentally unwell, how quickly anyone notices, and what happens to you afterwards. That is not a small effect at the edges. In severe mental illness it is one of the largest effects there is.",
  teach:[
    "Social class in the UK is now measured by the National Statistics Socio-economic Classification, based on employment relations, replacing the older Registrar General's scale.",
    "The inverse care law, Tudor Hart: availability of good medical care varies inversely with need in the population served.",
    "Social causation versus social drift. Causation says deprivation increases risk. Drift says illness pushes people down the social scale. Both operate; for schizophrenia the evidence supports drift substantially but not entirely, and there is genuine causation too.",
    "Faris and Dunham, Chicago 1939: highest rates of schizophrenia in the inner city. The founding observation of this debate.",
    "Goldberg and Huxley's five levels and four filters model of pathways to psychiatric care: the community, primary care, recognition by the GP, referral, and admission.",
    "Common mental disorder shows a clear social gradient. Depression and anxiety are commoner with lower income, unemployment, debt and poor housing.",
    "Urbanicity is a replicated risk factor for psychosis with a dose-response relationship."
  ],
  cards:[
    ["Distinguish social causation from social drift.","Causation: social disadvantage increases the risk of developing illness. Drift: the illness causes downward social mobility. Both contribute to the observed association in schizophrenia."],
    ["State the inverse care law.","Tudor Hart, 1971: the availability of good medical care tends to vary inversely with the need of the population served."],
    ["Name the levels of Goldberg and Huxley's model.","Five levels from the community to psychiatric inpatient care, separated by four filters: illness behaviour, GP recognition, referral to secondary care, and admission."]
  ],
  note:[
    "The Black Report, 1980, and the Marmot Review, 2010, are the standard UK sources on health inequality.",
    "Absolute versus relative deprivation. Wilkinson's hypothesis links income inequality itself to poorer health.",
    "Social capital: the resources available through social networks. Both bonding and bridging forms are described.",
    "Around a quarter to a third of people with common mental disorder in the community reach specialist services.",
    "Life expectancy in severe mental illness is reduced by some 15 to 20 years, driven largely by physical disease and unequal access to care."
  ],
  refs:["morgan","bhugra","noptp"] };

TEACH["1.3.2"] = { free:true,
  simple:"Being ill and being a patient are two different things, and the second one needs permission. Parsons said society offers a deal: you are let off work and nobody blames you, and in exchange you have to want to get better and you have to go and see somebody qualified. Psychiatric illness fits that deal badly, which is a large part of why it gets treated differently.",
  teach:[
    "Parsons' sick role has four elements: exemption from normal social roles; not held responsible for the condition; an obligation to want to get well; an obligation to seek competent help and cooperate.",
    "Why psychiatry fits badly. Responsibility is contested, wanting to get well may be absent when insight is impaired, and cooperation may be compelled rather than given.",
    "Illness behaviour, Mechanic: how a person perceives, evaluates and acts on symptoms. It varies with culture, personality, and social context far more than with disease severity.",
    "Abnormal illness behaviour, Pilowsky: illness behaviour disproportionate to the demonstrable pathology, in either direction. It includes both denial and amplification.",
    "The doctor's role: Parsons described it as universalistic, functionally specific, affectively neutral and collectivity-oriented.",
    "Freidson's critique: professional dominance. The profession, not the patient, defines what counts as illness.",
    "Consultation styles run from paternalistic through informed to shared decision making. Shared decision making is the current standard and is explicit in NICE guidance."
  ],
  cards:[
    ["Name the four elements of Parsons' sick role.","Exemption from normal roles; not held responsible; obligation to want to get well; obligation to seek and cooperate with competent help."],
    ["Distinguish illness behaviour from abnormal illness behaviour, naming the authors.","Illness behaviour (Mechanic): how symptoms are perceived, evaluated and acted upon. Abnormal illness behaviour (Pilowsky): a response disproportionate to the demonstrable pathology."],
    ["Why does psychiatric illness fit the sick role poorly?","Responsibility is often attributed to the patient, insight may be absent so the person may not wish to recover, and treatment may be compulsory rather than sought."]
  ],
  note:[
    "Disease is the pathology, illness is the experience, sickness is the social role. Learn the three-word distinction.",
    "Zola's five triggers to consultation: interpersonal crisis, perceived interference with social relations, sanctioning by others, perceived interference with work, and setting an external time limit.",
    "The Health Belief Model and the theory of planned behaviour are the two predictive models of help-seeking.",
    "Around a third of GP consultations involve a significant psychological component.",
    "Illich's concept of iatrogenesis and the medicalisation critique belong here."
  ],
  refs:["morgan","noptp","kaplanc"] };

TEACH["1.3.3"] = { free:true,
  simple:"Two people leave hospital equally well, on the same medication, and one relapses within nine months and the other does not. The difference is often not in the patient at all. It is in the tone of voice used at home. Not whether the family cares, but how much criticism and how much anxious over-involvement the person is living inside.",
  teach:[
    "Expressed emotion is measured by the Camberwell Family Interview and has three key components: critical comments, hostility, and emotional over-involvement.",
    "Warmth and positive remarks are also rated but do not define high EE.",
    "High EE predicts relapse in schizophrenia, and the finding replicates in depression, eating disorders and bipolar disorder.",
    "Face-to-face contact matters: relapse risk is reduced when contact is under about 35 hours per week in a high-EE household.",
    "It is not blame. High EE is frequently a response to living with severe illness, not a cause that precedes it, and families need support rather than accusation.",
    "Family intervention, delivered over at least ten sessions, reduces relapse and readmission. It is recommended by NICE for schizophrenia where the person is in close contact with family.",
    "Cultural caveat: EE thresholds derived in the UK do not transfer directly, and rates of high EE differ substantially between cultures."
  ],
  cards:[
    ["Name the components of expressed emotion and the instrument used to measure it.","Critical comments, hostility and emotional over-involvement, measured by the Camberwell Family Interview. Warmth and positive remarks are also rated."],
    ["What level of face-to-face contact reduces relapse risk in a high-EE household?","Fewer than about 35 hours per week."],
    ["What is the evidence for family intervention in schizophrenia?","It reduces relapse and readmission and improves adherence. NICE recommends it where the person is in close contact with family, delivered over at least ten planned sessions."]
  ],
  note:[
    "Brown, Birley and Wing established the association; Vaughn and Leff, 1976, produced the replication and the contact threshold.",
    "Relapse rates in high-EE households are roughly double those in low-EE households at nine months.",
    "Expressed emotion is a state, not a trait, and can be modified by intervention.",
    "Double bind theory (Bateson) and schizophrenogenic mother theory are historically important, discredited, and harmful. Do not confuse them with EE, which is an empirical measure.",
    "High EE also predicts outcome in anorexia nervosa, where emotional over-involvement predominates over criticism."
  ],
  refs:["morgan","semgen","nice"] };

TEACH["1.3.4"] = { free:false,
  simple:"A bereavement, a redundancy and a house move all count as life events, but they do not weigh the same, and the same event does not weigh the same for two different people. Losing a job matters more if it was the only thing keeping you afloat. That is why counting events on a checklist misses the point, and why the researchers who got this right stopped counting and started asking what the event actually meant.",
  teach:[
    "Depression: severe life events with long-term threat cluster in the months before onset. Loss, humiliation and entrapment are the most depressogenic categories.",
    "The contextual threat method rates what an event would mean for anyone in those circumstances, judged independently, which removes the bias of a depressed person's own recall.",
    "Schizophrenia: an excess of life events in the three weeks before onset or relapse, first shown by Brown and Birley in 1968. The effect is real but far smaller than in depression.",
    "Addictions: life events and social context influence initiation, escalation and relapse. Availability, price, peer norms and social exclusion are all operative.",
    "Vulnerability-stress model, Zubin and Spring: a threshold that varies between individuals, crossed when stress exceeds it.",
    "Independent versus dependent events. Dependent events may be a consequence of the developing illness, and only independent events can support causation.",
    "Anticipation and reverse causality are the standard methodological objections to any life events study."
  ],
  cards:[
    ["Which categories of life event are most strongly associated with depression?","Loss, humiliation and entrapment, particularly severe events carrying long-term threat."],
    ["What did Brown and Birley, 1968, find in schizophrenia?","An excess of independent life events in the three weeks preceding onset or relapse."],
    ["Why must independent and dependent life events be distinguished?","Dependent events may be caused by the emerging illness. Only independent events can support a causal inference from event to illness."]
  ],
  note:[
    "Brown and Harris, Social Origins of Depression, 1978, is the definitive source.",
    "Holmes and Rahe's scale is criticised for treating desirable and undesirable events alike and ignoring context.",
    "Gene-environment interaction: the Caspi 5-HTTLPR finding is widely taught, and large replication attempts have failed to support it. State that honestly.",
    "Childhood adversity shows a dose-response relationship with adult psychiatric disorder, including psychosis.",
    "Social defeat has been proposed as a common pathway linking migration, urbanicity and minority status to psychosis risk."
  ],
  refs:["morgan","noptp","semgen"] };

TEACH["1.3.5"] = { free:true,
  simple:"Goffman went to work in a mental hospital as an assistant athletics director and watched what the building did to the people in it. He found that the wards were producing behaviour of their own: flatness, dependence, loss of ordinary skills. Not symptoms of the illness. Symptoms of the institution.",
  teach:[
    "Goffman's total institution: all aspects of life conducted in the same place under one authority, in the company of a large batch of others treated alike, on a tight schedule imposed from above, serving an official aim.",
    "Mortification of the self: admission procedures strip identity, possessions, name, clothing and privacy.",
    "Binary management and the privilege system. Secondary adjustments are the small ways inmates work the system to recover a sense of self.",
    "Barton's institutional neurosis, 1959: apathy, loss of initiative, submissiveness, loss of interest in the outside world, deterioration in habits. Caused by the environment, and reversible.",
    "Wing and Brown, Three Hospitals Study, 1970: clinical poverty syndrome correlated with the poverty of the social environment, and improved when the environment improved. This is the key empirical demonstration.",
    "Deinstitutionalisation: chlorpromazine from 1952, the Mental Health Act 1959, Powell's 1961 Hospital Plan, Goffman's Asylums in 1961, and the economics.",
    "The new institutions. Transinstitutionalisation into prisons, private hospitals and care homes is the recognised risk, and Winterbourne View and Whorlton Hall are what it looks like when it happens."
  ],
  cards:[
    ["Define a total institution and name its author.","Goffman, 1961. A place of residence and work where a large number of similarly situated people, cut off from wider society, lead an enclosed formally administered life under a single authority."],
    ["Name the features of institutional neurosis and its author.","Barton, 1959: apathy, loss of initiative, submissiveness, loss of interest in the outside world, deterioration of personal habits, and a characteristic posture and gait."],
    ["What did Wing and Brown's Three Hospitals Study show?","Negative symptoms and clinical poverty correlated with the poverty of the social environment across three hospitals, and improved when the social environment was enriched."]
  ],
  note:[
    "Goffman, Asylums, 1961. Barton, Institutional Neurosis, 1959. Wing and Brown, Institutionalism and Schizophrenia, 1970.",
    "Enoch Powell's water tower speech, 1961, announced the intended closure of the asylums.",
    "Ely Hospital inquiry, 1969, chaired by Geoffrey Howe, led to the Hospital Advisory Service.",
    "Penrose's law proposes an inverse relationship between psychiatric beds and prison populations. It is much cited and contested.",
    "The recovery model and the balanced care model are the contemporary answers to what replaced the asylum."
  ],
  refs:["morgan","noptp","semgen"] };

TEACH["1.3.6"] = { free:false,
  simple:"Two questions that look like one. Why do people commit crimes, and what should be done to them afterwards? Criminology answers the first and penology the second, and psychiatry gets pulled into both because the court wants to know whether this particular person could have chosen otherwise.",
  teach:[
    "Anomie and strain, Merton: deviance arises from the gap between culturally endorsed goals and the legitimate means available. Adaptations: conformity, innovation, ritualism, retreatism, rebellion.",
    "Differential association, Sutherland: criminal behaviour is learned in intimate personal groups, including techniques and the motives that justify them.",
    "Control theory, Hirschi: the question is not why people offend but why they do not. Bonds are attachment, commitment, involvement and belief. Offending occurs when bonds are weak.",
    "Labelling theory, Becker: deviance is created by the rules and by the application of the label. Primary deviance is the act; secondary deviance is behaviour that follows from having been labelled.",
    "Left realism: takes seriously the real impact of crime on victims, usually the poor, and identifies relative deprivation as a driver.",
    "The age-crime curve: offending peaks in late adolescence and falls through the twenties. Moffitt distinguishes adolescence-limited from life-course-persistent offenders.",
    "Aims of sentencing: retribution, deterrence (general and specific), incapacitation, rehabilitation, reparation.",
    "The evidence on deterrence: certainty of detection deters far more than severity of punishment. Longer sentences do not reliably reduce reoffending."
  ],
  cards:[
    ["What does Merton's anomie theory propose?","Strain between culturally endorsed goals and the legitimate means available to achieve them produces deviance, with five modes of adaptation."],
    ["Name Hirschi's four social bonds.","Attachment, commitment, involvement, belief."],
    ["What is secondary deviance?","Behaviour that arises as a consequence of being labelled deviant, as the person takes on the identity conferred by the label."]
  ],
  note:[
    "Moffitt's developmental taxonomy is the most examinable modern criminological model.",
    "Prison populations show markedly raised rates of personality disorder, substance misuse, psychosis and suicide.",
    "The relationship between severe mental illness and violence is real but modest, and substantially attenuated by accounting for substance misuse.",
    "Restorative justice has moderate evidence for victim satisfaction and some evidence for reduced reoffending.",
    "This item connects directly to syllabus section 12, Forensic Psychiatry."
  ],
  refs:["morgan","puriforen","noptp"] };

TEACH["1.3.7"] = { free:true,
  simple:"Stigma is three things wearing one coat. What other people believe about you. What you come to believe about yourself. And the door that quietly does not open, whatever anybody believes. Fix the first and the third can stay exactly where it was.",
  teach:[
    "Goffman, 1963: stigma as a spoiled identity. Discredited attributes are visible; discreditable attributes are concealable, which creates the work of passing.",
    "Three levels. Public stigma is the attitudes of others. Self-stigma is internalised, producing shame, secrecy and the why-try effect. Structural stigma is embedded in policy and institutions and operates regardless of anyone's attitude.",
    "Thornicroft's three components: ignorance (a knowledge problem), prejudice (an attitude problem), and discrimination (a behaviour problem). Interventions must be matched to the right component.",
    "Courtesy stigma extends to family, carers and staff by association.",
    "Diagnostic overshadowing: physical symptoms attributed to the psychiatric diagnosis. It is a direct contributor to the excess physical morbidity and mortality in severe mental illness.",
    "What works: direct social contact with a person with lived experience is more effective than education alone, and far more effective than protest.",
    "The biogenetic paradox. Explaining mental illness as a brain disease reduces blame but tends to increase perceived dangerousness and pessimism about recovery. A more effective message is one of recovery and ordinariness."
  ],
  cards:[
    ["Name Thornicroft's three components of stigma and the intervention for each.","Ignorance, addressed by knowledge; prejudice, addressed by attitude change, best through contact; discrimination, addressed by behaviour and legislation."],
    ["Distinguish public, self and structural stigma.","Public: the attitudes of others. Self: internalised stigma producing shame and withdrawal. Structural: institutional policies and practices that disadvantage, independent of individual attitudes."],
    ["What is diagnostic overshadowing?","Attributing physical symptoms to a person's psychiatric diagnosis or intellectual disability rather than investigating them, resulting in missed physical illness."]
  ],
  note:[
    "Goffman, Stigma: Notes on the Management of Spoiled Identity, 1963.",
    "Contact is the single most effective anti-stigma intervention and the evidence base behind Time to Change in England.",
    "Self-stigma predicts reduced help-seeking, poorer adherence, lower self-esteem and poorer functional outcome.",
    "Schizophrenia carries the greatest stigma of any psychiatric diagnosis in most surveyed populations; depression and anxiety carry substantially less.",
    "Mental health professionals are not exempt: measured stigmatising attitudes among clinicians are comparable to those of the general public."
  ],
  refs:["morgan","bhugra","noptp"] };

TEACH["1.3.8"] = { free:true,
  simple:"Distress has a grammar, and the grammar is local. In one country a person says their heart is heavy, in another they say their chest is burning, in another they say nothing at all and simply stop eating. The illness underneath may be identical. The task is to hear the local language and still find the illness, without deciding the person is wrong for not using yours.",
  teach:[
    "Emic is the view from within a culture. Etic is comparison across cultures. Most cross-cultural error is applying an etic instrument as though it were emic.",
    "Idioms of distress: culturally shared ways of expressing suffering. Somatic presentation where emotional language is not customary is the commonest example.",
    "Acculturation, Berry: four strategies from crossing maintenance of heritage culture with participation in the host culture. Integration, assimilation, separation, marginalisation. Integration gives the best adaptation outcome and marginalisation the worst.",
    "Migration and psychosis: incidence is raised in migrant and minority ethnic groups, particularly in the second generation, and the effect is largest where the person forms a smaller proportion of their local area. That is the ethnic density effect, and it points to social rather than genetic explanation.",
    "In the UK, black Caribbean and black African groups have markedly raised rates of detention under the Mental Health Act, of police involvement in the pathway to care, and of admission to secure services.",
    "Culture-bound syndromes: koro, dhat, ataque de nervios, amok, latah, taijin kyofusho, brain fag. ICD-11 and DSM-5 have moved towards cultural concepts of distress rather than fixed syndromes.",
    "The Cultural Formulation Interview covers cultural identity, cultural explanation of the illness, cultural factors in psychosocial environment and functioning, cultural elements of the clinician-patient relationship, and overall cultural assessment."
  ],
  cards:[
    ["Name Berry's four acculturation strategies and the best outcome.","Integration, assimilation, separation, marginalisation. Integration, maintaining heritage culture while participating in the host culture, has the best adaptation outcome."],
    ["What is the ethnic density effect?","The incidence of psychosis in a minority group rises as that group forms a smaller proportion of the local population, independent of overall area deprivation."],
    ["Name the domains of the Cultural Formulation Interview.","Cultural identity; cultural conceptualisation of distress; psychosocial stressors and supports including cultural features of vulnerability and resilience; cultural features of the relationship between individual and clinician; overall cultural assessment."]
  ],
  note:[
    "The AESOP study is the key UK source on raised psychosis incidence in black Caribbean and black African populations.",
    "Explanations favoured by the evidence are social: discrimination, social defeat, disadvantage and urbanicity. Higher rates are not found in the countries of origin, which argues against a genetic explanation.",
    "David Bennett inquiry, published 2004, chaired by Sir John Blofeld, found institutional racism in NHS mental health services.",
    "The 2018 independent review of the Mental Health Act identified racial disparity in detention as a principal concern.",
    "Interpreters should be professional, not family members, and never children."
  ],
  refs:["bhugra","morgan","noptp"] };

TEACH["1.3.9"] = { free:false,
  simple:"Medicine's four rules sound obvious until two of them disagree, which is most of the time in psychiatry. Respect the person's choices. Do good. Do no harm. Be fair. Now apply all four at once to a man who is refusing food because he believes it is poisoned, and you will see why this subject exists.",
  teach:[
    "The four principles, Beauchamp and Childress: autonomy, beneficence, non-maleficence, justice. They are a common language, not an algorithm, and they give no rule for what to do when they conflict.",
    "Consequentialism judges the act by its outcomes. Deontology judges it by duties and rules. Virtue ethics asks what a good doctor would do. Each gives a different answer to compulsory treatment.",
    "Capacity, Mental Capacity Act 2005: understand, retain, use or weigh, communicate. Plus the diagnostic threshold. Decision-specific and time-specific.",
    "The five statutory principles: presumption of capacity; all practicable steps to support the decision; an unwise decision does not equal incapacity; best interests; least restrictive option.",
    "The central tension of psychiatry is that the Mental Health Act permits treatment of mental disorder without consent in a person who may retain capacity. No other branch of medicine does this, and it requires a justification you should be able to state.",
    "Confidentiality is not absolute. Disclosure in the public interest is permitted under the GMC framework where there is a risk of serious harm.",
    "Philosophy of psychiatry: Jaspers' distinction between explaining and understanding; Szasz's argument that mental illness is a myth, and why the profession rejects it; the debate over whether psychiatric categories are natural kinds."
  ],
  cards:[
    ["Name the four principles of biomedical ethics.","Respect for autonomy, beneficence, non-maleficence, justice. Beauchamp and Childress."],
    ["State the four elements of the capacity test and the five statutory principles.","Test: understand, retain, use or weigh, communicate. Principles: presumption of capacity; all practicable steps to support decision-making; unwise decisions do not indicate incapacity; best interests; least restrictive option."],
    ["What is Jaspers' distinction between explaining and understanding?","Explaining (Erklaren) gives a causal account from outside, as in neuroscience. Understanding (Verstehen) grasps meaningful connections from within the person's experience. Primary delusions are defined by being un-understandable in this sense."]
  ],
  note:[
    "The Mental Capacity Act 2005 and the Mental Health Act 1983 as amended operate in parallel, and knowing which applies is a recurrent exam and clinical question.",
    "Deprivation of Liberty Safeguards; the Cheshire West acid test is continuous supervision and control plus not being free to leave.",
    "Gillick competence and the Fraser guidelines apply to under-16s.",
    "Advance decisions to refuse treatment are binding for physical treatment but do not override treatment for mental disorder under the Mental Health Act.",
    "The 2018 independent review proposed advance choice documents and a nominated person replacing the nearest relative."
  ],
  refs:["noptp","oxhandbk","nice"] };
