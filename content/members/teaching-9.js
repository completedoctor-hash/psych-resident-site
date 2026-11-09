/* =====================================================================
   TEACHING, SECTION 9 — Psychotherapy
   8 items, 9.1.1 to 9.6.1
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

TEACH["9.1.1"] = { free:true,
  simple:"Freud's central claim was that most of what drives us is hidden from us, and that it leaks out sideways: in slips of the tongue, in dreams, and above all in how we treat the person sitting opposite. Psychodynamic therapy is the deliberate use of that last leak.",
  teach:[
    "Freud's topographical model: conscious, preconscious and unconscious. His later structural model: id, driven by instinct and the pleasure principle; ego, negotiating with reality; superego, carrying conscience and the ego ideal.",
    "Defence mechanisms are the ego's ways of keeping unbearable material out of awareness. Anna Freud catalogued them; her father discovered them.",
    "Mature defences: sublimation, humour, altruism, anticipation, suppression. Neurotic: repression, displacement, reaction formation, intellectualisation, isolation of affect, undoing. Immature: projection, denial, splitting, acting out, projective identification, regression, somatisation.",
    "Vaillant's hierarchy from the Grant Study showed that mature defences predict better long-term adjustment, one of the few empirical findings in this territory.",
    "Melanie Klein: object relations from the first months of life. The paranoid-schizoid position, where the world is split into good and bad, gives way to the depressive position, where the child recognises that the loved and hated object are one person, bringing guilt and the wish to repair.",
    "Klein's projective identification is not simply projecting: unwanted feeling is put into the other person, who then actually begins to feel it. This is the mechanism behind much of what happens to teams around personality disorder.",
    "Jung split from Freud over the sexual theory of the libido. His terms: the collective unconscious, archetypes, the persona, the shadow, anima and animus, and individuation as the goal of the second half of life.",
    "Winnicott: the good-enough mother, who fails the infant gradually and tolerably; the holding environment; transitional objects and transitional phenomena; the true and false self.",
    "Bowlby broke with classical theory by grounding attachment in ethology rather than drive. The child's tie to the mother is a primary biological system, not a by-product of feeding.",
    "Transference is the displacement onto the therapist of feelings originally belonging to a significant figure in the patient's past. Countertransference is the therapist's emotional response to the patient.",
    "Countertransference was originally regarded as a contaminant to be eliminated. It is now treated as data: what the patient makes you feel is information about what they do to people.",
    "Therapeutic alliance is the collaborative bond and shared purpose. It is the single most robust predictor of outcome across every therapeutic modality, and it predicts outcome more strongly than the choice of therapy.",
    "Resistance is anything in the patient that opposes the work. Negative therapeutic reaction is the paradoxical worsening that follows a good interpretation, classically explained by unconscious guilt.",
    "Acting out is the enactment of unconscious material in behaviour rather than its expression in words. Working through is the repeated re-encounter with the same conflict in different forms until it loses its force.",
    "Interpretation makes the unconscious conscious; insight is the patient's own grasp of it. Insight without emotional experience changes little, which is Alexander's corrective emotional experience.",
    "Brief dynamic therapy uses a strict time limit and a single agreed focus. Malan's triangles are the tools: the triangle of conflict, being defence, anxiety and hidden feeling; and the triangle of person, linking current relationships, the transference and past figures.",
    "Supportive psychotherapy does not interpret. It strengthens existing defences, restores function and holds the person, and is the right choice where insight-oriented work would be destabilising: acute crisis, psychosis, severe ego fragility.",
    "Indications for exploratory work: psychological mindedness, a capacity to tolerate distress without acting on it, a circumscribed focus, and a genuine wish to understand rather than only to be relieved."
  ],
  cards:[
    ["Distinguish transference from countertransference, and state the modern view of the latter.","Transference is the displacement onto the therapist of feelings belonging to significant figures in the patient's past. Countertransference is the therapist's emotional reaction to the patient. Originally regarded as a contaminant to be eliminated, it is now used as clinical data about the patient's impact on others."],
    ["Describe Klein's two positions.","The paranoid-schizoid position, in which the object is split into wholly good and wholly bad and the dominant anxiety is persecutory; and the depressive position, in which the loved and hated object are recognised as one person, bringing guilt, concern and the wish to make reparation."],
    ["What are Malan's two triangles?","The triangle of conflict: defence, anxiety and hidden feeling. The triangle of person: current relationships, the transference relationship and past figures, usually parental. Interpretation moves around both."],
    ["Which factor most robustly predicts outcome across therapies?","The therapeutic alliance, the collaborative bond and shared sense of purpose between patient and therapist. It predicts outcome more strongly than the choice of therapeutic modality."],
    ["Name Winnicott's principal contributions.","The good-enough mother who fails the infant gradually and tolerably; the holding environment; transitional objects and transitional phenomena; and the distinction between the true self and the false self."]
  ],
  note:[
    "Structural model: id, ego, superego. Topographical model: conscious, preconscious, unconscious.",
    "Anna Freud catalogued the defence mechanisms; Vaillant ranked them and showed mature defences predict better long-term adjustment.",
    "Projective identification places unwanted feeling in the other person, who then experiences it.",
    "Jung: collective unconscious, archetypes, persona, shadow, anima and animus, individuation.",
    "Negative therapeutic reaction is worsening after an accurate interpretation, classically attributed to unconscious guilt.",
    "Supportive therapy strengthens defences rather than interpreting them, and is indicated where insight would destabilise."
  ],
  refs:["gabbard","companion","tyrer11"] };

TEACH["9.2"] = { free:false,
  simple:"Family therapy starts from a different assumption: the problem is not inside the child who was referred. The problem is in the pattern between people, and the child is simply the one showing it. Change the pattern and the symptom often has nothing left to do.",
  teach:[
    "General Systems Theory, from von Bertalanffy, supplies the frame. A family is a system: it has boundaries, subsystems, feedback loops, and it seeks homeostasis.",
    "Circular rather than linear causality. A does not cause B; A and B maintain each other. Asking who started it is the wrong question.",
    "The identified patient is the family member carrying the symptom. The symptom often stabilises the system, which is why improvement can destabilise a family and provoke resistance.",
    "Structural family therapy, Minuchin: attends to boundaries and hierarchy. Enmeshed families have diffuse boundaries; disengaged families have rigid ones. Techniques include joining, enactment, and boundary making.",
    "Minuchin's psychosomatic family: enmeshment, overprotectiveness, rigidity and conflict avoidance, described in families of children with brittle diabetes and anorexia nervosa.",
    "Strategic family therapy, Haley and the Milan school: the therapist designs interventions to interrupt the problem-maintaining sequence. Techniques include paradoxical injunction, prescribing the symptom, positive connotation, and circular questioning.",
    "Circular questioning asks one member to comment on the relationship between two others, which surfaces the pattern rather than the complaint.",
    "Psychoeducational family therapy grew out of the expressed emotion research and is the model with the strongest evidence base in psychiatry.",
    "Expressed emotion, from Brown and Rutter and developed by Vaughn and Leff, comprises critical comments, hostility and emotional over-involvement, measured by the Camberwell Family Interview.",
    "High expressed emotion predicts relapse in schizophrenia robustly, and the effect is dose-related to face-to-face contact time. It also predicts relapse in depression and in eating disorders.",
    "Family intervention in schizophrenia reduces relapse substantially and is recommended by NICE for all families in close contact with the person. The effect size rivals that of maintenance medication.",
    "Behavioural family therapy applies learning principles: communication training, problem-solving training, and contingency management.",
    "Systemic family therapy in the later Milan and post-Milan tradition moved towards neutrality, hypothesising and curiosity, and away from strategic manoeuvre.",
    "Goals across models: change the pattern of interaction, clarify boundaries and hierarchy, improve communication, reduce criticism and over-involvement, and give the family a shared understanding of the illness."
  ],
  cards:[
    ["What is expressed emotion, how is it measured, and what does it predict?","Critical comments, hostility and emotional over-involvement in a relative, measured by the Camberwell Family Interview. High expressed emotion robustly predicts relapse in schizophrenia, with a dose-response relationship to face-to-face contact time, and also predicts relapse in depression and eating disorders."],
    ["Contrast structural and strategic family therapy.","Structural therapy, from Minuchin, targets boundaries and hierarchy using joining, enactment and boundary making. Strategic therapy, from Haley and the Milan school, designs interventions to interrupt the problem-maintaining sequence, using paradoxical injunction, prescribing the symptom, positive connotation and circular questioning."],
    ["Explain circular causality and the identified patient.","Circular causality holds that family members' behaviours maintain each other reciprocally rather than one causing another. The identified patient is the member carrying the symptom, which frequently serves to stabilise the wider system."],
    ["Describe Minuchin's psychosomatic family.","Enmeshment, overprotectiveness, rigidity and conflict avoidance, described in families of children with brittle diabetes and anorexia nervosa."]
  ],
  note:[
    "General Systems Theory, von Bertalanffy, supplies the conceptual frame.",
    "Enmeshed families have diffuse boundaries; disengaged families have rigid ones.",
    "Family intervention in schizophrenia is NICE-recommended for all families in close contact.",
    "Circular questioning asks one member about the relationship between two others.",
    "Post-Milan practice emphasises neutrality, hypothesising and curiosity."
  ],
  refs:["nice","gabbard","rutter"] };

TEACH["9.3.1"] = { free:true,
  simple:"Behaviour therapy does not ask why you are frightened. It arranges for you to meet the thing you fear, in a controlled way, for long enough that your body gives up being frightened on its own. That giving-up is habituation and it is the engine of every exposure treatment.",
  teach:[
    "The theoretical basis is learning theory: classical conditioning from Pavlov, operant conditioning from Skinner, and Mowrer's two-factor theory of how phobias are acquired and maintained.",
    "Two-factor theory: the fear is acquired by classical conditioning and maintained by operant conditioning, because avoidance is negatively reinforced by the relief it brings.",
    "Habituation is the decline in response to a repeated stimulus. It requires the stimulus to be maintained; escape aborts habituation and strengthens the avoidance.",
    "Systematic desensitisation, Wolpe: construct a hierarchy, train in relaxation, then pair graded imaginal or in vivo exposure with relaxation. Based on reciprocal inhibition, the idea that relaxation and anxiety cannot coexist.",
    "Modern exposure therapy has largely abandoned relaxation pairing. Graded exposure without relaxation works, and prolonged exposure works better than brief.",
    "Exposure must be graded, prolonged, repeated and without safety behaviours. Safety behaviours prevent disconfirmation of the feared belief and are the commonest reason exposure fails.",
    "Flooding is exposure at maximum intensity from the outset rather than by gradation. Effective but poorly tolerated.",
    "Cue exposure is exposure to the conditioned stimuli associated with substance use, allowing craving to extinguish; used in addictions.",
    "Exposure and response prevention is the specific behavioural treatment of OCD: exposure to the trigger with prevention of the compulsion, so the anxiety habituates without the ritual.",
    "Operant techniques: positive and negative reinforcement, positive and negative punishment, shaping by successive approximation, chaining, token economy, time out, and response cost.",
    "Extinction is withdrawal of the reinforcer. Expect an extinction burst, a temporary worsening, before the behaviour declines, and warn families about it or they abandon the plan.",
    "Intermittent reinforcement produces behaviour most resistant to extinction, which is why inconsistent responding to a behaviour entrenches it.",
    "Functional analysis is the ABC of behaviour: Antecedents, Behaviour, Consequences. It asks what the behaviour achieves for this person rather than what it means.",
    "Common functions of behaviour: escape or avoidance, attention, tangible gain, and sensory or automatic reinforcement. The function, not the topography, determines the intervention.",
    "Social skills training uses instruction, modelling, rehearsal, feedback and homework, with attention to generalisation outside the session, which is where it usually fails.",
    "Measurement is not optional in behavioural work. Baseline recording, an agreed target, repeated measurement using scales or frequency counts, and single-case designs such as the ABAB reversal."
  ],
  cards:[
    ["State Mowrer's two-factor theory.","A phobia is acquired by classical conditioning, in which a neutral stimulus becomes associated with fear, and maintained by operant conditioning, because avoidance is negatively reinforced by the relief that follows it."],
    ["What are the requirements for effective exposure?","Exposure must be graded, prolonged enough for habituation, repeated, and free of safety behaviours. Escape before habituation aborts the process and strengthens avoidance."],
    ["Describe functional analysis.","Analysis of Antecedents, Behaviour and Consequences to determine what the behaviour achieves for the person. Common functions are escape or avoidance, attention, tangible gain, and sensory or automatic reinforcement. The function, not the appearance of the behaviour, determines the intervention."],
    ["What is an extinction burst?","A temporary increase in the frequency or intensity of a behaviour immediately after its reinforcer is withdrawn, before the behaviour declines. Families must be warned of it or they conclude the plan has failed."],
    ["Distinguish systematic desensitisation from modern graded exposure.","Systematic desensitisation, from Wolpe, pairs graded exposure with trained relaxation on the principle of reciprocal inhibition. Modern graded exposure omits the relaxation pairing, which adds little, and emphasises prolonged exposure without safety behaviours."]
  ],
  note:[
    "Intermittent reinforcement produces the greatest resistance to extinction.",
    "Flooding is maximum-intensity exposure from the outset; effective but poorly tolerated.",
    "Exposure and response prevention is the behavioural treatment of OCD.",
    "Cue exposure allows conditioned craving to extinguish in addictions.",
    "Social skills training most often fails at generalisation outside the session.",
    "Single-case designs such as ABAB reversal are used to demonstrate behavioural change."
  ],
  refs:["companion","gross","tyrer11"] };

TEACH["9.3.2"] = { free:true,
  simple:"Cognitive therapy says the event is not what upsets you. Your reading of the event is what upsets you, and that reading arrives so fast it feels like the truth rather than an opinion. The work is to slow it down enough to be looked at.",
  teach:[
    "Beck's cognitive model has three levels. Core beliefs, or schemas, are absolute statements about self, world and future. Dysfunctional assumptions are the conditional rules built on them. Negative automatic thoughts are the moment-to-moment output.",
    "Beck's cognitive triad in depression: negative view of the self, of the world, and of the future.",
    "Negative automatic thoughts are involuntary, plausible to the person, and consistent with the underlying schema. They are the accessible surface of the system and therefore where therapy starts.",
    "Cognitive distortions: arbitrary inference, selective abstraction, overgeneralisation, magnification and minimisation, personalisation, dichotomous thinking, catastrophising, mind reading, emotional reasoning, and should statements.",
    "Schemas are laid down early, remain latent, and are activated by events matching their content. This is the diathesis-stress element of the model.",
    "Structure is intrinsic, not incidental: agenda setting, mood check, review of homework, agreed focus, summarising, feedback, and new homework. Cognitive therapy without structure is not cognitive therapy.",
    "Collaborative empiricism is the stance. Therapist and patient treat the thought as a hypothesis and design a test.",
    "Socratic questioning does not tell the patient they are wrong. It asks for the evidence, the alternative explanation, and the consequence of holding the belief.",
    "Core techniques: thought records, behavioural experiments, activity scheduling, graded task assignment, mastery and pleasure ratings, and the downward arrow to reach the core belief.",
    "Behavioural activation is the behavioural component of cognitive therapy for depression, and trials suggest it is effective on its own, without the cognitive component, in moderate to severe depression.",
    "Model-specific formulations: Clark's model of panic, in which catastrophic misinterpretation of benign bodily sensations creates a vicious circle; Clark and Wells on social anxiety, with self-focused attention and post-event processing; Salkovskis on OCD, in which inflated responsibility drives neutralising.",
    "Ehlers and Clark on PTSD: an excessively negative appraisal of the trauma and its sequelae, combined with a fragmented, poorly elaborated trauma memory.",
    "Culture matters at the level of the assumption. What counts as a dysfunctional belief about family obligation, or about the appropriate expression of distress, is not culturally neutral, and imposing the therapist's norms is a real failure mode.",
    "The evidence base is strongest in depression and the anxiety disorders. In psychosis, CBTp has a smaller effect on positive symptoms than was once claimed, and the trial literature is contested."
  ],
  cards:[
    ["Describe the three levels of Beck's cognitive model.","Core beliefs or schemas, absolute statements about self, world and future; dysfunctional assumptions, the conditional rules built on them; and negative automatic thoughts, the involuntary moment-to-moment output that is accessible in session."],
    ["State Beck's cognitive triad.","A negative view of the self, a negative view of the world and current experience, and a negative view of the future."],
    ["Summarise Clark's cognitive model of panic.","Benign bodily sensations are catastrophically misinterpreted as evidence of imminent physical or mental disaster, which increases anxiety, which intensifies the sensations, producing a vicious circle. Safety behaviours prevent disconfirmation."],
    ["What is collaborative empiricism?","The stance in which therapist and patient jointly treat a belief as a hypothesis rather than a fact, and design behavioural experiments and evidence reviews to test it."],
    ["Name six cognitive distortions.","Arbitrary inference, selective abstraction, overgeneralisation, magnification and minimisation, personalisation, and dichotomous thinking. Catastrophising, mind reading, emotional reasoning and should statements are also standard."]
  ],
  note:[
    "Session structure is intrinsic: agenda, mood check, homework review, focus, summary, feedback, new homework.",
    "The downward arrow technique moves from an automatic thought to the underlying core belief.",
    "Behavioural activation is effective as a standalone treatment in moderate to severe depression.",
    "Clark and Wells on social anxiety: self-focused attention, safety behaviours and post-event processing.",
    "Salkovskis on OCD: inflated responsibility drives neutralising behaviour.",
    "Ehlers and Clark on PTSD: negative appraisal plus a fragmented trauma memory."
  ],
  refs:["companion","nice","gabbard"] };

TEACH["9.4"] = { free:false,
  simple:"Beyond the two big families there is a shelf of named therapies, each built around one idea. Knowing which idea belongs to which name is most of what is asked.",
  teach:[
    "Interpersonal Therapy, Klerman and Weissman. Time-limited, typically sixteen sessions, for depression. It does not interpret the past; it works on the present interpersonal context.",
    "IPT has four problem areas and you choose one or two: grief, interpersonal role disputes, role transitions, and interpersonal deficits. NICE recommends it for depression and it has good evidence in bulimia nervosa.",
    "Cognitive Analytic Therapy, Ryle. Sixteen sessions, integrating cognitive and object relations ideas. It maps reciprocal roles and the procedures that maintain them.",
    "CAT's three procedural patterns: traps, in which a belief produces behaviour confirming the belief; dilemmas, false either-or choices; and snags, in which legitimate goals are abandoned because of anticipated consequences or guilt.",
    "CAT uses two written products: the reformulation letter early, and the goodbye letter at the end, with a diagram, the sequential diagrammatic reformulation.",
    "Dialectical Behaviour Therapy, Linehan, developed for chronically suicidal women with borderline personality disorder. The dialectic is between acceptance and change.",
    "DBT has four components: individual therapy, group skills training, telephone coaching between sessions, and a therapist consultation team, which exists for the therapists rather than the patients.",
    "The four DBT skills modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.",
    "DBT's biosocial theory: an emotionally vulnerable individual meets an invalidating environment, producing pervasive emotion dysregulation.",
    "DBT has the strongest evidence in personality disorder, particularly for reducing self-harm, and is NICE-recognised.",
    "Mentalisation-Based Treatment, Bateman and Fonagy. Mentalising is the capacity to understand behaviour, one's own and others', in terms of underlying mental states.",
    "In borderline personality disorder mentalising collapses under attachment-related arousal. MBT works to restore it rather than to interpret content, and explicitly avoids deep transference interpretation early on.",
    "Pre-mentalistic modes: psychic equivalence, where thought equals reality; teleological mode, where only physical action counts as proof; and pretend mode, where talk is detached from feeling.",
    "Gestalt Therapy, Perls. Here and now, awareness, contact, unfinished business, and the empty chair technique.",
    "Client-Centred Therapy, Rogers. The three core conditions are genuineness or congruence, unconditional positive regard, and accurate empathy. Rogers held these to be necessary and sufficient.",
    "Transactional Analysis, Berne. Three ego states: Parent, Adult and Child. Transactions may be complementary, crossed or ulterior. Games People Play describes recurrent ulterior transaction patterns; life scripts are the unconscious life plan."
  ],
  cards:[
    ["What are the four problem areas of Interpersonal Therapy?","Grief, interpersonal role disputes, role transitions, and interpersonal deficits. One or two are selected as the focus of a time-limited course, typically sixteen sessions."],
    ["Name the four components of DBT and the four skills modules.","Components: individual therapy, group skills training, between-session telephone coaching, and a therapist consultation team. Skills modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness."],
    ["Define mentalising and name the pre-mentalistic modes.","Mentalising is the capacity to understand one's own and others' behaviour in terms of underlying mental states. The pre-mentalistic modes are psychic equivalence, in which thought is equated with reality; teleological mode, in which only physical action counts as evidence; and pretend mode, in which talk is detached from felt experience."],
    ["What are Ryle's three procedural patterns in CAT?","Traps, where a belief generates behaviour that confirms the belief; dilemmas, false either-or choices between two poor options; and snags, where legitimate goals are abandoned because of anticipated consequences or guilt."],
    ["State Rogers' three core conditions.","Genuineness or congruence, unconditional positive regard, and accurate empathy, which Rogers held to be necessary and sufficient for therapeutic change."]
  ],
  note:[
    "IPT is NICE-recommended for depression and has good evidence in bulimia nervosa.",
    "CAT uses a reformulation letter, a sequential diagrammatic reformulation, and a goodbye letter.",
    "DBT's biosocial theory pairs emotional vulnerability with an invalidating environment.",
    "MBT avoids deep transference interpretation early, unlike classical dynamic work.",
    "Gestalt: here and now, awareness, contact, unfinished business, the empty chair.",
    "Transactional Analysis: Parent, Adult and Child ego states; complementary, crossed and ulterior transactions."
  ],
  refs:["gabbard","nice","companion"] };

TEACH["9.5"] = { free:false,
  simple:"Does therapy work? Yes, and by roughly the same amount whichever one you pick, which is either the most interesting finding in the field or an artefact of how badly it is measured. Both positions have serious people behind them.",
  teach:[
    "Eysenck, 1952, claimed that psychotherapy produced no better outcome than spontaneous remission. The claim was methodologically weak but it forced the field into outcome research.",
    "Smith and Glass, 1977, produced the first large meta-analysis of psychotherapy and reported an overall effect size of about 0.85, meaning the average treated person did better than about eighty per cent of untreated controls.",
    "Effect size, Cohen's d, is the difference between means divided by the pooled standard deviation. Conventionally 0.2 is small, 0.5 medium and 0.8 large.",
    "The Dodo bird verdict, from Rosenzweig by way of Alice in Wonderland, is that all therapies have won and all must have prizes: differences between bona fide therapies are small or absent.",
    "The counter-argument is that the Dodo verdict reflects insufficient power, poorly differentiated treatments and outcome measures too crude to detect real differences, and that specific effects do exist in specific disorders, exposure in OCD being the clearest.",
    "Common factors, from Frank and later Wampold: the therapeutic relationship, a plausible rationale, an agreed ritual or procedure, expectancy of improvement, and therapist allegiance. These account for a substantial share of variance.",
    "Therapist allegiance, the therapist's belief in the treatment they are delivering, predicts outcome and confounds a great many comparative trials.",
    "Specific factors are the ingredients unique to a model, such as exposure, cognitive restructuring or transference interpretation. The debate is over how much they contribute beyond common factors.",
    "Defining outcome is genuinely difficult: symptom change, functioning, quality of life, and the patient's own goals frequently disagree, and the choice of measure can determine the result.",
    "Measurement problems in psychotherapy trials: blinding is impossible for patient and therapist; allocation concealment is often inadequate; researcher allegiance is pervasive; and waiting-list controls inflate effect sizes relative to active controls.",
    "Publication bias affects this literature heavily. Trial registries and funnel plot asymmetry analyses suggest that published effect sizes in psychotherapy are inflated.",
    "Deterioration occurs. Around five to ten per cent of patients are worse after therapy than before, a fact routinely omitted from consent discussions.",
    "Dose-response: most improvement occurs early, with roughly half of patients improved by around eight sessions, and diminishing returns thereafter.",
    "NICE guidance is disorder-specific: CBT and IPT in depression; CBT with exposure and response prevention in OCD; trauma-focused CBT and EMDR in PTSD; DBT and MBT in borderline personality disorder; family intervention and CBTp in schizophrenia."
  ],
  cards:[
    ["What is the Dodo bird verdict and what is the case against it?","The finding that all bona fide psychotherapies produce broadly equivalent outcomes. The case against it is that comparative trials are underpowered, treatments are poorly differentiated, outcome measures are too crude to detect specific effects, and that specific effects demonstrably exist, exposure and response prevention in OCD being the clearest example."],
    ["Define effect size and state Cohen's conventional benchmarks.","The difference between two means divided by the pooled standard deviation. Conventionally 0.2 is a small effect, 0.5 medium and 0.8 large. Smith and Glass reported an overall psychotherapy effect size of approximately 0.85."],
    ["Name the common factors in psychotherapy.","The therapeutic relationship, a plausible rationale for the problem, an agreed therapeutic ritual or procedure, the patient's expectancy of improvement, and therapist allegiance to the treatment being delivered."],
    ["What proportion of patients deteriorate during psychotherapy?","Approximately five to ten per cent are worse at the end of therapy than at the start, a finding routinely omitted from consent discussions."]
  ],
  note:[
    "Eysenck, 1952, claimed psychotherapy was no better than spontaneous remission.",
    "Smith and Glass, 1977, first large meta-analysis, overall effect size approximately 0.85.",
    "Therapist allegiance predicts outcome and confounds comparative trials.",
    "Waiting-list controls inflate effect sizes relative to active comparators.",
    "Roughly half of patients improve by around eight sessions, with diminishing returns thereafter.",
    "Funnel plot asymmetry suggests published psychotherapy effect sizes are inflated by publication bias."
  ],
  refs:["lawrie","nice","gabbard"] };

TEACH["9.6"] = { free:false,
  simple:"A group does something no individual therapy can. It shows a person, in real time and in front of witnesses, exactly what they do to other people. That is uncomfortable, which is why it works and why people leave.",
  teach:[
    "Historical roots: Joseph Pratt's tuberculosis classes in Boston, 1905, are usually credited as the first therapeutic groups. The Second World War forced the pace.",
    "The Northfield Experiments at Northfield Military Hospital, involving Bion, Foulkes, Main and Rickman, produced both group analysis and the therapeutic community.",
    "Maxwell Jones developed the therapeutic community at Belmont, later the Henderson Hospital: flattened hierarchy, communal decision-making, and the community itself as the treatment.",
    "Bion's basic assumptions describe how groups avoid work. Dependency, in which the group looks to a leader to solve everything; fight-flight, in which it unites against a perceived enemy or runs; and pairing, in which it invests hope in a pair who will produce a saviour.",
    "The work group is Bion's term for a group actually engaged with its task. Basic assumption functioning is the defence against the anxiety of the work.",
    "Foulkes founded group analysis. The group is the therapeutic agent, not the conductor. Key concepts: the matrix, the shared communicational network; resonance; mirroring; and the conductor rather than leader.",
    "Foulkes distinguished four levels of communication: the current level, the transference level, the projective level, and the primordial level.",
    "Yalom named eleven therapeutic factors, and this is the list most often examined: instillation of hope, universality, imparting information, altruism, corrective recapitulation of the primary family group, development of socialising techniques, imitative behaviour, interpersonal learning, group cohesiveness, catharsis, and existential factors.",
    "Yalom regarded group cohesiveness as the group analogue of the therapeutic alliance and the precondition for everything else.",
    "Universality, the discovery that one is not uniquely afflicted, is typically the earliest active factor and is what keeps new members in the room.",
    "The here-and-now focus is Yalom's central technique: work with what is happening between members in the room rather than with reported outside events.",
    "Group composition: homogeneous groups cohere quickly and are suited to a shared problem; heterogeneous groups generate more interpersonal learning but take longer to form.",
    "Practical parameters: seven to nine members is the usual analytic group size, slow-open or closed membership, ninety-minute sessions, and a clear contract on attendance, confidentiality and out-of-group contact.",
    "Selection matters. Poor candidates for analytic groups include acute psychosis, severe paranoid presentations, acute crisis, and inability to tolerate the exposure of a group."
  ],
  cards:[
    ["Name Bion's three basic assumptions.","Dependency, in which the group looks to a leader to provide everything; fight-flight, in which it unites against a perceived enemy or attempts to escape; and pairing, in which hope is invested in a pair expected to produce a saviour. All three are defences against the anxiety of the work group's task."],
    ["List Yalom's therapeutic factors.","Instillation of hope, universality, imparting information, altruism, corrective recapitulation of the primary family group, development of socialising techniques, imitative behaviour, interpersonal learning, group cohesiveness, catharsis, and existential factors."],
    ["What are Foulkes' key concepts?","The matrix, the shared communicational network of the group; resonance; mirroring; the group rather than the conductor as therapeutic agent; and four levels of communication, current, transference, projective and primordial."],
    ["What were the Northfield Experiments?","Wartime group work at Northfield Military Hospital involving Bion, Foulkes, Main and Rickman, from which both group analysis and the therapeutic community movement emerged."],
    ["Which factor did Yalom regard as the precondition for the others?","Group cohesiveness, which he considered the group analogue of the individual therapeutic alliance."]
  ],
  note:[
    "Pratt's tuberculosis classes, Boston 1905, are credited as the first therapeutic groups.",
    "Maxwell Jones developed the therapeutic community at Belmont, later the Henderson.",
    "Universality is usually the earliest active factor and retains new members.",
    "Seven to nine members is the standard analytic group size.",
    "Homogeneous groups cohere faster; heterogeneous groups produce more interpersonal learning.",
    "Acute psychosis, severe paranoia and acute crisis are poor indications for analytic group work."
  ],
  refs:["gabbard","companion"] };

TEACH["9.6.1"] = { free:false,
  simple:"Not every group is a psychodynamic group. Most groups in an NHS service are doing something narrower and more practical, and the College expects you to know which is which.",
  teach:[
    "Cognitive behavioural groups deliver a structured protocol to several people at once. Agenda, psychoeducation, homework and a manual, with the group used for efficiency, normalisation and vicarious learning rather than for its own dynamics.",
    "CBT groups have good evidence in depression, social anxiety, panic and health anxiety, with effect sizes generally somewhat smaller than individual CBT but far better cost-effectiveness.",
    "Psychoeducational groups transmit information about a condition and its management to patients or to carers. The outcome sought is understanding, adherence and reduced expressed emotion, not insight.",
    "Carer psychoeducation in schizophrenia reduces relapse in the patient, which is one of the better-evidenced indirect interventions in psychiatry.",
    "Skills groups teach a defined set of competencies: DBT skills modules, social skills training, anxiety management, anger management, and problem-solving training.",
    "The DBT skills group is the largest single example in current practice and runs alongside individual therapy rather than instead of it.",
    "Support groups are usually peer-led and non-directive. The active ingredients are universality, altruism and hope rather than technique. Alcoholics Anonymous and similar mutual aid fellowships are the largest examples.",
    "Mutual aid attendance is associated with better substance use outcomes, and randomised evidence for facilitated twelve-step referral is stronger than is often assumed.",
    "Expressive therapies work through a non-verbal medium: art therapy, music therapy, drama therapy and dance movement therapy.",
    "Art therapy is specifically recommended by NICE as an option for the negative symptoms of schizophrenia, which is the one place it appears in guidance.",
    "Psychodrama, Moreno: role play, role reversal, doubling, mirroring, and the sequence of warm-up, enactment and sharing.",
    "Therapeutic communities: the community meeting, the flattened hierarchy, and peer challenge. Used in personality disorder and in some addiction services, with the whole social environment as the treatment.",
    "Selection differs sharply by group type. Dynamic groups require capacity for reflection and tolerance of exposure. Skills and psychoeducational groups require only the ability to attend and take part.",
    "A common failure is running a psychoeducational or skills group as though it were a dynamic one, or allowing a structured group to drift into unstructured disclosure without the containment to hold it."
  ],
  cards:[
    ["Which group intervention does NICE recommend for the negative symptoms of schizophrenia?","Arts therapies, recommended as an option for negative symptoms. This is the one place expressive therapies appear in NICE guidance for psychosis."],
    ["How does a CBT group differ from an analytic group in its use of the group?","A CBT group uses the group for efficiency, normalisation and vicarious learning while delivering a structured individual protocol. An analytic group treats the interaction between members as the therapeutic agent itself."],
    ["What does carer psychoeducation in schizophrenia achieve?","Improved understanding and adherence and reduced expressed emotion in the family, which reduces relapse in the patient. It is one of the best-evidenced indirect interventions in psychiatry."],
    ["Name the techniques of psychodrama.","Role play, role reversal, doubling and mirroring, structured through a sequence of warm-up, enactment and sharing. Developed by Moreno."]
  ],
  note:[
    "Group CBT has smaller effect sizes than individual CBT but substantially better cost-effectiveness.",
    "DBT skills groups run alongside individual DBT, not instead of it.",
    "Support groups work through universality, altruism and hope rather than technique.",
    "Expressive therapies: art, music, drama and dance movement therapy.",
    "Therapeutic communities use the whole social environment as the treatment.",
    "Running a structured group as though it were a dynamic one is a recognised failure mode."
  ],
  refs:["nice","gabbard","semaddict"] };
