/* =====================================================================
   TEACHING, SECTION 3 — Neuroscience
   76 items, 3.1.1.1 to 3.10.7
   ===================================================================== */

var TEACH = (typeof TEACH === "undefined") ? {} : TEACH;

/* ---------------- 3.1 BASIC TECHNIQUES ---------------- */

TEACH["3.1.1.1"] = { free:false,
  simple:"Push a wire thinner than a hair next to one brain cell and you can hear that single cell talk. It is the most precise recording anyone can make, and it is why almost everything we know about how single neurones code information came from animals rather than people.",
  teach:[
    "A microelectrode records the action potentials of a single neurone, giving millisecond resolution and single-cell precision.",
    "It is invasive, so human data come only from patients already undergoing electrode implantation, chiefly epilepsy surgery and deep brain stimulation.",
    "Hubel and Wiesel used it to discover orientation-selective cells in visual cortex and to define ocular dominance columns.",
    "Place cells in the hippocampus (O'Keefe) and grid cells in entorhinal cortex (the Mosers) were found this way, and won the 2014 Nobel Prize.",
    "The trade-off that runs through this whole section: single unit recording gives the best spatial and temporal resolution of any technique and covers almost none of the brain. Every other method trades precision for coverage."
  ],
  cards:[
    ["What are the strengths and the limitation of single unit recording?","Millisecond temporal and single-cell spatial resolution. It is invasive, so human recordings are confined to patients undergoing implantation for clinical reasons, and it samples only a tiny fraction of the brain."],
    ["Which cell types discovered by single unit recording won the 2014 Nobel Prize?","Place cells in the hippocampus and grid cells in the entorhinal cortex, awarded to O'Keefe and to May-Britt and Edvard Moser."]
  ],
  note:[
    "Local field potentials record summed activity from a population near the electrode and sit between single-unit and EEG.",
    "Human single-unit work has demonstrated highly selective concept cells in medial temporal lobe.",
    "Optogenetics allows causal manipulation of identified cells, which recording alone cannot provide.",
    "Deep brain stimulation implantation provides the main modern human recording opportunity in movement disorder and refractory OCD."
  ],
  refs:["agrawal","lynall"] };

TEACH["3.1.1.2"] = { free:false,
  simple:"The EEG is a stadium heard from the car park. You cannot pick out one voice, only whether the crowd is roaring together or muttering separately. That makes it useless for locating a small lump and superb for catching a seizure, because a seizure is the whole crowd shouting the same word at once.",
  teach:[
    "The EEG records summed postsynaptic potentials of cortical pyramidal cells, oriented perpendicular to the surface. It has millisecond temporal resolution and poor spatial resolution.",
    "Frequency bands: delta under 4 Hz, theta 4 to under 8 Hz, alpha 8 to 13 Hz, beta above 13 Hz. Gamma above about 30 Hz.",
    "The posterior dominant alpha rhythm appears on eye closure in a relaxed awake adult and attenuates on eye opening. Its absence or asymmetry is abnormal.",
    "Sleep staging: N2 shows K complexes and sleep spindles; N3 is slow wave; REM shows low-voltage mixed frequency with sawtooth waves and muscle atonia.",
    "Epilepsy: generalised 3 Hz spike and wave in absence seizures; focal spikes and sharp waves in focal epilepsy, best seen in temporal lobe recordings, sometimes needing sleep deprivation or prolonged monitoring.",
    "Diffuse slowing indicates encephalopathy or delirium from any cause. Delirium tremens is the exception, showing fast activity.",
    "Periodic complexes: sharp waves at about 1 per second in sporadic Creutzfeldt-Jakob disease; periodic lateralised epileptiform discharges in herpes simplex encephalitis, usually temporal.",
    "Drug effects: benzodiazepines and barbiturates increase beta. Lithium and clozapine slow the record; clozapine lowers seizure threshold in a dose-dependent way. Tricyclics and antipsychotics generally lower threshold; SSRIs are relatively safer.",
    "Evoked potentials average the response to repeated stimuli. P300 latency is prolonged and amplitude reduced in schizophrenia and in dementia. P50 suppression indexes sensory gating.",
    "The EEG is normal in most psychiatric illness. Its clinical role is to exclude, not to confirm."
  ],
  cards:[
    ["Give the EEG frequency bands with their ranges.","Delta under 4 Hz, theta 4 to under 8 Hz, alpha 8 to 13 Hz, beta above 13 Hz."],
    ["What EEG pattern accompanies absence seizures, and what accompanies sporadic CJD?","Absence: generalised 3 per second spike and wave. Sporadic CJD: periodic sharp wave complexes at roughly 1 per second."],
    ["How do delirium and delirium tremens differ on EEG?","Delirium from most causes shows diffuse slowing. Delirium tremens is the exception, showing fast activity."]
  ],
  note:[
    "Hyperventilation and photic stimulation are standard activation procedures; sleep deprivation increases yield in suspected epilepsy.",
    "A normal interictal EEG does not exclude epilepsy. A single routine recording has a sensitivity of only around 30 to 50 per cent.",
    "P300 amplitude reduction is found in unaffected relatives of people with schizophrenia and is treated as a candidate endophenotype.",
    "Mismatch negativity is reduced in schizophrenia and indexes automatic auditory change detection.",
    "ECT produces marked slowing that resolves over weeks and correlates loosely with cognitive effects."
  ],
  refs:["agrawal","lynall","lishman"] };

TEACH["3.1.1.3"] = { free:true,
  simple:"Every scan is a bargain between seeing where and seeing when. Structural MRI gives you an exquisite photograph and tells you nothing about time. EEG gives you the timing to the millisecond and cannot tell you where. Nothing yet does both well, and almost every imaging question is really asking which half the technique gave up.",
  teach:[
    "Structural MRI: best spatial resolution, around 1 mm, no ionising radiation, superior grey-white differentiation and posterior fossa imaging. First line for structural questions in psychiatry.",
    "CT: faster, cheaper, better for acute haemorrhage and bone. Uses ionising radiation. Use it in the emergency, MRI for the question.",
    "Diffusion tensor imaging measures the directionality of water diffusion, expressed as fractional anisotropy, and maps white matter tracts. Reduced fractional anisotropy is reported in schizophrenia, particularly in frontotemporal connections.",
    "Functional MRI measures the blood oxygen level dependent signal, the ratio of oxygenated to deoxygenated haemoglobin. It is an indirect haemodynamic proxy lagging neural activity by four to six seconds. Good spatial, poor temporal resolution.",
    "PET requires a cyclotron-produced positron-emitting tracer and gives quantitative measures, including receptor occupancy. It is how we know antipsychotics need roughly 60 to 70 per cent D2 occupancy for efficacy.",
    "SPECT uses longer-lived isotopes, is cheaper and more available, and has lower resolution. DaTSCAN is a SPECT ligand for the dopamine transporter, used to separate Lewy body dementia and Parkinson's disease from other causes of parkinsonism and dementia.",
    "MR spectroscopy measures metabolite concentrations without a tracer: N-acetylaspartate as a neuronal marker, choline, creatine as an internal reference, myo-inositol, glutamate and glutamine, and GABA.",
    "Clinical use in psychiatry is to exclude structural, vascular, inflammatory or neoplastic pathology. There is no imaging test that makes a psychiatric diagnosis in an individual."
  ],
  cards:[
    ["What does the BOLD signal actually measure?","The ratio of oxygenated to deoxygenated haemoglobin, an indirect haemodynamic correlate of neural activity, lagging it by four to six seconds."],
    ["Which technique has the best spatial resolution, and which the best temporal?","Structural MRI has the best spatial resolution, around one millimetre. EEG and MEG have the best temporal resolution, of the order of milliseconds."],
    ["What is DaTSCAN and when is it used?","A SPECT ligand for the presynaptic dopamine transporter. It is used to distinguish dementia with Lewy bodies and Parkinson's disease from other causes of dementia and parkinsonism, and is a supportive diagnostic feature in DLB."]
  ],
  note:[
    "MRI contraindications: ferromagnetic implants, some pacemakers, cochlear implants, intraocular metallic foreign bodies.",
    "FDG-PET in Alzheimer's disease shows temporoparietal hypometabolism; in frontotemporal dementia, frontal and anterior temporal hypometabolism.",
    "Amyloid PET is now available and shows amyloid deposition, which is present in a substantial minority of cognitively normal older people, so a positive scan does not diagnose Alzheimer's disease.",
    "Reverse inference, concluding a mental process occurred because a region lit up, is the standard logical error in reading fMRI papers.",
    "MEG detects magnetic fields from neuronal currents, with EEG-like temporal and better spatial resolution, but is expensive and scarce."
  ],
  refs:["agrawal","lynall","oxneuropsy"] };

TEACH["3.1.1.4"] = { free:false,
  simple:"If you want to know what chemicals are actually floating around in a living brain, you have to go and take a sample. Microdialysis threads a fine tube with a semi-permeable membrane into the tissue, washes fluid past it, and collects what crosses over.",
  teach:[
    "A probe with a semi-permeable membrane is implanted and perfused with a physiological solution. Molecules diffuse down their concentration gradient into the perfusate and are collected for assay.",
    "It measures extracellular concentrations of neurotransmitters and metabolites in the awake behaving animal, with temporal resolution of minutes.",
    "Almost entirely an animal technique because of its invasiveness. Human use is confined to neurointensive care, where it monitors glucose, lactate, pyruvate and glutamate after brain injury.",
    "It is the source of much of what we know about drug effects on dopamine release, including that drugs of abuse raise nucleus accumbens dopamine.",
    "Limitations: probe insertion damages tissue, temporal resolution is poor compared with electrophysiology, and recovery across the membrane must be calibrated."
  ],
  cards:[
    ["What does microdialysis measure and with what temporal resolution?","Extracellular concentrations of neurotransmitters and metabolites in awake behaving animals, with resolution of the order of minutes."],
    ["What is the clinical human application of microdialysis?","Neurointensive care monitoring after traumatic brain injury or subarachnoid haemorrhage, measuring glucose, lactate, pyruvate and glutamate as markers of metabolic crisis."]
  ],
  note:[
    "Fast-scan cyclic voltammetry gives sub-second resolution of dopamine release and complements microdialysis.",
    "Microdialysis demonstrated that essentially all drugs of abuse increase dopamine in the nucleus accumbens shell.",
    "PET with displaceable radioligands is the non-invasive human equivalent for measuring dopamine release."
  ],
  refs:["agrawal","stahl"] };

TEACH["3.1.2"] = { free:false,
  simple:"Watching the brain tells you what happens alongside a thought. Changing the brain tells you what the thought needs. That is why all the interesting causal evidence comes from methods that interfere: lesion it, stimulate it, switch it off with light, and see what breaks.",
  teach:[
    "Lesion studies are the oldest causal method. Broca, Wernicke, Phineas Gage and HM are all lesion evidence. The limitation is that natural lesions do not respect functional boundaries and reorganisation follows.",
    "Transcranial magnetic stimulation: a magnetic pulse induces a current in cortex. Single-pulse produces a transient virtual lesion; repetitive TMS at high frequency is excitatory and at low frequency inhibitory. rTMS to left dorsolateral prefrontal cortex is licensed and NICE-approved for treatment-resistant depression.",
    "Transcranial direct current stimulation applies a weak constant current, anodal being excitatory and cathodal inhibitory. It is cheap and portable, and the evidence base is weaker than for rTMS.",
    "Deep brain stimulation implants electrodes delivering high-frequency stimulation. Established in Parkinson's disease and dystonia; investigational in refractory OCD and depression, with subcallosal cingulate, ventral capsule and nucleus accumbens among the targets.",
    "Vagus nerve stimulation: an implanted left cervical vagal stimulator, licensed in epilepsy and in treatment-resistant depression, with a slow onset of benefit over months.",
    "Optogenetics: light-sensitive opsins such as channelrhodopsin are expressed in genetically defined neurones, allowing millisecond activation or silencing of an identified cell type. It is the strongest causal tool in neuroscience and is an animal method.",
    "Chemogenetics (DREADDs) uses engineered receptors activated by an otherwise inert ligand, giving cell-type specificity over minutes rather than milliseconds.",
    "The hierarchy of evidence here matters: correlation from imaging, causation from perturbation."
  ],
  cards:[
    ["How do high- and low-frequency rTMS differ in effect?","High-frequency, above about 5 Hz, is excitatory and increases cortical excitability. Low-frequency, around 1 Hz, is inhibitory. The licensed depression protocol uses high-frequency stimulation to the left dorsolateral prefrontal cortex."],
    ["What is optogenetics and why is it powerful?","Expression of light-sensitive ion channels such as channelrhodopsin in genetically defined neurones, permitting activation or silencing of an identified cell type on a millisecond timescale. It establishes causation rather than correlation."],
    ["Name two psychiatric applications of deep brain stimulation and the targets used.","Refractory obsessive-compulsive disorder and treatment-resistant depression. Targets include the ventral capsule and ventral striatum, nucleus accumbens, subthalamic nucleus and subcallosal cingulate."]
  ],
  note:[
    "TMS main risk is seizure, which is rare; it is contraindicated with intracranial metal and with implanted stimulators.",
    "In the UK, psychosurgery and DBS for mental disorder fall under section 57 of the Mental Health Act 1983 and require consent plus a second opinion.",
    "Section 6.3.3 of this syllabus covers the indications, benefits, risks and outcomes of DBS, rTMS and psychosurgery from the clinical side.",
    "ECT remains the most effective of all brain stimulation treatments for severe depression; the newer methods have not displaced it.",
    "Sham stimulation is essential in trials of all these techniques, and blinding is genuinely difficult, which weakens much of the literature."
  ],
  refs:["agrawal","lynall","ecthandbk"] };

TEACH["3.1.3"] = { free:false,
  simple:"You cannot give a mouse schizophrenia. What you can do is produce one measurable piece of it, such as too much startle or too little interest in sugar water, and study that piece. The danger is forgetting which piece you are looking at and claiming you have modelled the illness.",
  teach:[
    "Three validity criteria: face validity, resembling the human phenotype; construct validity, sharing the underlying mechanism; predictive validity, responding to treatments that work in humans, and not to those that do not. Predictive validity is the most useful and the hardest.",
    "Depression models: forced swim test and tail suspension test measure behavioural despair and have good predictive validity for antidepressants and poor construct validity. Chronic mild stress produces anhedonia, measured by reduced sucrose preference. Learned helplessness, Seligman.",
    "Anxiety models: elevated plus maze, open field, light-dark box, fear conditioning and extinction.",
    "Schizophrenia models: pharmacological, using amphetamine or NMDA antagonists such as phencyclidine and ketamine; neurodevelopmental, using maternal immune activation or neonatal ventral hippocampal lesion; genetic, using 22q11.2 deletion mice. Readouts include prepulse inhibition and latent inhibition.",
    "Addiction models: conditioned place preference, self-administration, reinstatement after extinction as a model of relapse.",
    "Alzheimer's models: transgenic mice carrying human APP, PSEN1 and tau mutations. They produce plaques and tangles and have repeatedly failed to predict clinical efficacy in humans.",
    "The central limitation is that subjective experience cannot be modelled. Hallucination, delusion, guilt and hopelessness have no animal readout, and the disorders we model best are those defined by behaviour rather than by report."
  ],
  cards:[
    ["Name the three validity criteria for an animal model and say which is most useful.","Face, construct and predictive validity. Predictive validity, that the model responds to treatments effective in humans and not to ineffective ones, is the most useful for drug development."],
    ["Which behavioural readouts are used as schizophrenia-relevant measures in rodents?","Prepulse inhibition of startle, latent inhibition, social interaction, and cognitive tasks of attention and working memory."],
    ["Why has animal modelling of Alzheimer's disease been criticised?","Transgenic models reliably produce amyloid pathology and have repeatedly predicted efficacy for compounds that then failed in human trials, indicating poor predictive validity."]
  ],
  note:[
    "The forced swim test has high predictive validity for monoamine antidepressants and does not model depression, only acute behavioural response.",
    "Maternal immune activation models link prenatal infection to later behavioural abnormality and support the neurodevelopmental hypothesis.",
    "3Rs, replacement, reduction and refinement, govern animal research in the UK under the Animals (Scientific Procedures) Act 1986.",
    "Reverse translation, taking a human finding back into an animal to establish mechanism, is now the preferred logic rather than modelling a whole disorder."
  ],
  refs:["agrawal","lynall"] };

TEACH["3.1.4"] = { free:false,
  simple:"Instead of describing what the brain does, you write a set of equations that would produce the same behaviour, then check whether real brains follow them. When they do, you have learned something that no amount of watching could tell you: not what happened, but what rule it was following.",
  teach:[
    "Computational psychiatry builds formal models of learning and decision-making and fits their parameters to individual behaviour, aiming to convert a symptom into a mechanism.",
    "Reinforcement learning models rest on prediction error, the difference between expected and received reward. Dopamine neurone firing encodes reward prediction error, which is one of the best-established findings in systems neuroscience (Schultz).",
    "Model-free learning is habitual, cached and inflexible. Model-based learning uses an internal model of the world and is goal-directed. A shift towards model-free control is described in addiction and in OCD.",
    "Predictive coding: the brain is a hypothesis generator, and perception is the reconciliation of prediction with sensory input, weighted by precision. Overweighting priors relative to sensory evidence is a leading formal account of hallucination; aberrant precision is invoked for delusion.",
    "Drift diffusion models decompose a decision into rate of evidence accumulation and decision threshold, separating slowness from caution.",
    "Bayesian accounts of anxiety and of autism, framed as altered prior precision, are influential and contested.",
    "Machine learning is used for prediction from imaging and clinical data. Overfitting, absent external validation and class imbalance are the standard failings, and reported accuracies rarely survive independent replication."
  ],
  cards:[
    ["What does phasic dopamine neurone firing encode in reinforcement learning models?","Reward prediction error, the difference between the reward received and the reward expected. It is positive for better than expected, absent for as expected, and shows a dip for worse than expected."],
    ["Distinguish model-free from model-based control.","Model-free learning caches action values from experience and is habitual and inflexible. Model-based learning uses an internal model to simulate outcomes and is goal-directed. Addiction and OCD are associated with a shift towards model-free control."],
    ["How does predictive coding explain hallucination?","Perception is inference combining prior expectation with sensory evidence, each weighted by its precision. Overweighting of priors relative to sensory input produces percepts driven by expectation rather than by the world."]
  ],
  note:[
    "Kapur's aberrant salience hypothesis is the clinical ancestor of the computational account of delusion.",
    "Computational phenotyping aims to replace symptom counts with mechanism-level parameters, which is the field's long-term claim to change classification.",
    "Any predictive model requires external validation in an independent sample before it means anything.",
    "Free energy and active inference, Friston, are the most influential and least accessible framework here; know the term and the basic claim."
  ],
  refs:["lynall","agrawal"] };

/* ---------------- 3.2 CELLS ---------------- */

TEACH["3.2.1"] = { free:true,
  simple:"The brain has two kinds of resident. Neurones do the talking. Glia were dismissed for a century as the packing material that stops the neurones rattling. They are nothing of the sort: they build the insulation, mop up the chemicals, feed the neurones and control what gets in from the blood.",
  teach:[
    "Neurones: cell body, dendrites receiving input, one axon carrying output. Types include pyramidal projection neurones, using glutamate, and interneurones, mostly using GABA.",
    "Astrocytes: the commonest glial cell. They induce and maintain the blood-brain barrier, buffer extracellular potassium, take up glutamate via excitatory amino acid transporters, store glycogen, and form the third element of the tripartite synapse.",
    "Oligodendrocytes myelinate in the central nervous system, each supplying several axons. Schwann cells myelinate in the peripheral nervous system, one internode each.",
    "Microglia are the resident macrophages, of mesodermal rather than neuroectodermal origin. They prune synapses in development and mediate neuroinflammation.",
    "Ependymal cells line the ventricles. The choroid plexus produces around 500 ml of CSF a day against a total volume of roughly 150 ml, so it turns over three to four times daily.",
    "Cortical layers, six in neocortex: layer I molecular; layer IV granular, the main thalamic input, thickest in sensory cortex; layer V internal pyramidal, the main subcortical output including corticospinal fibres; layer VI projects back to thalamus.",
    "Sensory cortex is granular with a thick layer IV; motor cortex is agranular with a thin layer IV and a prominent layer V. Hippocampal allocortex has three layers.",
    "Betz cells are the giant pyramidal cells of layer V of primary motor cortex."
  ],
  cards:[
    ["Which cell myelinates in the CNS and which in the PNS, and how do they differ?","Oligodendrocytes in the CNS, each myelinating segments of several axons. Schwann cells in the PNS, one cell per internode of one axon."],
    ["Name four functions of astrocytes.","Induction and maintenance of the blood-brain barrier; potassium buffering; glutamate uptake and recycling; glycogen storage and metabolic support. They also participate in synaptic transmission as part of the tripartite synapse."],
    ["Which cortical layer receives thalamic input and which provides the main subcortical output?","Layer IV, the internal granular layer, receives thalamic input and is thickest in primary sensory cortex. Layer V, the internal pyramidal layer, provides the main subcortical and corticospinal output."]
  ],
  note:[
    "Microglia are derived from yolk sac macrophages, not from neuroectoderm. This is a favourite examination detail.",
    "CSF is produced at about 500 ml per day; total volume around 150 ml; normal pressure 10 to 15 cmH2O.",
    "Glutamate taken up by astrocytes is converted to glutamine and returned to neurones: the glutamate-glutamine cycle.",
    "Neuroinflammation and microglial activation are proposed contributors to depression and schizophrenia; the evidence is associative, not established as causal.",
    "The blood-brain barrier is formed by tight junctions between capillary endothelial cells, induced and maintained by astrocyte end-feet. Circumventricular organs lack it."
  ],
  refs:["agrawal","lynall"] };

TEACH["3.2.2"] = { free:true,
  simple:"A neurone holds a charge across its skin like a tiny battery, about minus seventy millivolts, kept there by a pump that throws three sodium ions out for every two potassium ions it lets in. Let enough sodium rush back and the whole membrane flips over in a wave that runs to the end of the cell. That wave is a thought's smallest unit.",
  teach:[
    "Resting membrane potential is about minus 70 mV, set by high resting potassium permeability and maintained by the sodium-potassium ATPase, which moves 3 Na+ out for 2 K+ in and is therefore electrogenic.",
    "The action potential is all-or-none. Depolarisation to threshold opens voltage-gated sodium channels; sodium influx depolarises further, a positive feedback; sodium channels then inactivate and delayed rectifier potassium channels open, repolarising the membrane, with a brief afterhyperpolarisation.",
    "Absolute refractory period, during sodium channel inactivation, prevents a second action potential at any stimulus strength and enforces unidirectional propagation. Relative refractory period follows and requires a larger stimulus.",
    "Saltatory conduction: myelin insulates the internodes and the action potential regenerates at nodes of Ranvier, greatly increasing velocity and reducing metabolic cost. Conduction velocity rises with axon diameter and with myelination.",
    "Synaptic transmission: depolarisation opens voltage-gated calcium channels, calcium entry triggers SNARE-mediated vesicle fusion, and transmitter is released into the cleft.",
    "Excitatory postsynaptic potentials and inhibitory postsynaptic potentials are graded, not all-or-none, and summate temporally and spatially. The axon hillock has the lowest threshold and is where the decision is made.",
    "G-protein coupled receptors are seven-transmembrane metabotropic receptors: Gs raises cAMP, Gi lowers it, Gq activates phospholipase C producing IP3 and diacylglycerol.",
    "Allosteric modulation acts at a site distinct from the orthosteric site. Benzodiazepines are positive allosteric modulators at GABA-A: they cannot open the channel alone, which is why they are far safer in overdose than barbiturates, which can.",
    "Synaptic plasticity: long-term potentiation and depression. Pruning removes excess synapses through childhood and adolescence and is the structural basis of the adolescent grey matter trajectory."
  ],
  cards:[
    ["What maintains the resting membrane potential?","High resting permeability to potassium, with the sodium-potassium ATPase moving three sodium ions out for every two potassium ions in, which is electrogenic and maintains the gradients."],
    ["Why does the action potential travel in only one direction?","Because sodium channels behind the wavefront are in the absolute refractory period through inactivation, and cannot be reopened by any stimulus strength."],
    ["Why are benzodiazepines safer than barbiturates in overdose?","Benzodiazepines are positive allosteric modulators that increase the frequency of GABA-A channel opening only in the presence of GABA. Barbiturates increase channel open duration and at high dose can open the channel directly without GABA."]
  ],
  note:[
    "Benzodiazepines increase frequency of channel opening; barbiturates increase duration. This distinction is examined repeatedly.",
    "Local anaesthetics and phenytoin act on voltage-gated sodium channels; carbamazepine and lamotrigine stabilise them in the inactivated state.",
    "Tetrodotoxin blocks voltage-gated sodium channels; botulinum toxin cleaves SNARE proteins and prevents vesicle fusion.",
    "Demyelination slows or blocks conduction, which is the basis of symptoms in multiple sclerosis and Guillain-Barre syndrome.",
    "Second messengers: cAMP acting through protein kinase A, IP3 releasing intracellular calcium, DAG activating protein kinase C. Lithium inhibits inositol monophosphatase, the inositol depletion hypothesis."
  ],
  refs:["agrawal","stahl","lynall"] };

TEACH["3.2.3"] = { free:false,
  simple:"If you can write down what one neurone does as a set of equations, you can wire a thousand of them together in a computer and watch what the network does. Very often the network does something that no single neurone was doing, and that is the point: the behaviour belongs to the circuit, not the cell.",
  teach:[
    "The Hodgkin-Huxley model describes the action potential in terms of voltage- and time-dependent sodium and potassium conductances. It won the 1963 Nobel Prize and remains the reference biophysical model.",
    "Simplified models trade realism for tractability: the integrate-and-fire neurone sums input and fires at threshold; the Izhikevich model reproduces many firing patterns cheaply.",
    "Compartmental models divide the dendritic tree into segments, allowing dendritic computation to be simulated rather than assumed away.",
    "Networks built from these units produce emergent properties absent from single cells: oscillations, attractor states, and persistent activity underlying working memory.",
    "Excitation-inhibition balance is the central network concept in psychiatry. Fast-spiking parvalbumin GABA interneurones generate gamma oscillations, and their dysfunction is a leading account of the cognitive and gamma abnormalities in schizophrenia.",
    "Attractor network models of working memory show how persistent prefrontal activity is sustained by recurrent excitation, and how it degrades when the balance shifts.",
    "Graph theory describes the brain as a network of nodes and edges. Healthy brains show small-world organisation with hubs; reduced small-worldness and hub disruption are reported in schizophrenia."
  ],
  cards:[
    ["What did the Hodgkin-Huxley model describe and what did it earn?","The ionic basis of the action potential in terms of voltage- and time-dependent sodium and potassium conductances, in the squid giant axon. It won the Nobel Prize in Physiology or Medicine in 1963."],
    ["Which interneurones generate gamma oscillations and why does this matter in psychiatry?","Fast-spiking parvalbumin-positive GABAergic interneurones. Their dysfunction is a leading account of impaired gamma synchrony and cognitive impairment in schizophrenia."],
    ["What is meant by small-world organisation of brain networks?","High local clustering combined with short average path length, giving efficient local and global information transfer. It is reduced in schizophrenia and other disorders."]
  ],
  note:[
    "Excitation-inhibition imbalance is also invoked in autism, in the opposite direction to schizophrenia in some formulations.",
    "NMDA receptor hypofunction on parvalbumin interneurones is the mechanistic link proposed between the glutamate hypothesis and gamma abnormalities.",
    "Persistent delay-period firing in dorsolateral prefrontal cortex is the physiological substrate of working memory.",
    "Rich club organisation describes densely interconnected hub regions, disproportionately affected in psychiatric disorder."
  ],
  refs:["lynall","agrawal"] };

/* ---------------- 3.3 NEUROTRANSMITTERS AND RECEPTORS ---------------- */

TEACH["3.3.1"] = { free:true,
  simple:"Every transmitter in your head is made out of something you ate, in a fixed order, by a queue of enzymes. Tyrosine becomes dopamine becomes noradrenaline becomes adrenaline. Tryptophan becomes serotonin. Learn the order and the enzyme at each arrow and a surprising number of exam questions answer themselves.",
  teach:[
    "Catecholamine pathway: tyrosine, then tyrosine hydroxylase to L-DOPA, then DOPA decarboxylase to dopamine, then dopamine beta-hydroxylase to noradrenaline, then PNMT to adrenaline. Tyrosine hydroxylase is the rate-limiting step.",
    "Serotonin pathway: tryptophan, then tryptophan hydroxylase to 5-hydroxytryptophan, then decarboxylase to serotonin. Tryptophan hydroxylase is rate-limiting and is not saturated at normal substrate levels, which is why dietary tryptophan depletion lowers brain serotonin and can transiently reverse antidepressant response.",
    "Acetylcholine: choline acetyltransferase combines choline and acetyl-CoA. Choline uptake is rate-limiting. Acetylcholinesterase degrades it in the cleft.",
    "GABA: glutamic acid decarboxylase converts glutamate to GABA and requires pyridoxine, vitamin B6, as a cofactor. GABA transaminase degrades it, and is inhibited by vigabatrin.",
    "Storage: transmitters are packaged into vesicles by vesicular monoamine transporter 2. Reserpine depletes monoamines by blocking VMAT2, and historically caused depression, which is a foundation of the monoamine hypothesis.",
    "Release: depolarisation opens voltage-gated calcium channels, calcium triggers SNARE-mediated fusion, transmitter is released. Calcium influx is the essential coupling step.",
    "Reuptake by transporters terminates the signal for monoamines: SERT, NET and DAT. These are the targets of the SSRIs, SNRIs, tricyclics, cocaine and methylphenidate.",
    "Degradation: monoamine oxidase A prefers serotonin and noradrenaline, MAO-B prefers phenylethylamine, and dopamine is a substrate for both. COMT methylates catecholamines."
  ],
  cards:[
    ["What is the rate-limiting enzyme of catecholamine synthesis, and of serotonin synthesis?","Tyrosine hydroxylase for catecholamines, converting tyrosine to L-DOPA. Tryptophan hydroxylase for serotonin, converting tryptophan to 5-hydroxytryptophan."],
    ["Which cofactor does glutamic acid decarboxylase require, and what is the clinical consequence?","Pyridoxine, vitamin B6. Deficiency, including that caused by isoniazid, reduces GABA synthesis and causes seizures, treated with pyridoxine."],
    ["Name the main metabolites of dopamine, noradrenaline and serotonin.","Dopamine: homovanillic acid via COMT and MAO, and DOPAC via MAO. Noradrenaline: MHPG and VMA. Serotonin: 5-HIAA via MAO-A."]
  ],
  note:[
    "PNMT, converting noradrenaline to adrenaline, is found in the adrenal medulla and a small number of brainstem neurones. It requires cortisol, which is why it is concentrated in the adrenal.",
    "Reserpine blocks VMAT2 and depletes monoamines. Its association with depression underpinned the monoamine hypothesis.",
    "Low CSF 5-HIAA is associated with impulsivity, violence and suicide, a finding replicated across several populations.",
    "Amphetamine reverses the direction of the dopamine transporter and displaces dopamine from vesicles; cocaine simply blocks reuptake.",
    "Autoreceptors provide negative feedback: 5-HT1A somatodendritic and 5-HT1B terminal for serotonin, D2 for dopamine, alpha-2 for noradrenaline."
  ],
  refs:["stahl","agrawal","maudsley"] };

TEACH["3.3.2"] = { free:false,
  simple:"There are only two ways a chemical message can reach a cell. It can punch a hole in the wall, which is fast and over in milliseconds. Or it can ring a doorbell inside, which is slower and lasts far longer. Holes are ionotropic receptors. Doorbells are metabotropic, and almost all of them work through G proteins.",
  teach:[
    "Ionotropic receptors are ligand-gated ion channels: fast, milliseconds, direct. Metabotropic receptors are G-protein coupled: slower, seconds to minutes, and act through second messengers.",
    "Glutamate: AMPA, NMDA and kainate are ionotropic; mGluR1 to 8 are metabotropic. AMPA mediates fast excitatory transmission.",
    "NMDA is the exception that gets examined. It requires glutamate plus a co-agonist, glycine or D-serine, and membrane depolarisation to relieve the voltage-dependent magnesium block. It is permeable to calcium, which makes it the coincidence detector underlying long-term potentiation.",
    "GABA-A is ionotropic, a chloride channel, a pentamer usually of two alpha, two beta and one gamma subunit. GABA-B is metabotropic, Gi-coupled, opening potassium channels; baclofen is its agonist.",
    "Benzodiazepines bind at the alpha-gamma interface of GABA-A. Alpha-1 mediates sedation, amnesia and anticonvulsant effect; alpha-2 and alpha-3 mediate anxiolysis and muscle relaxation.",
    "Serotonin: 5-HT3 is the only ionotropic serotonin receptor, a cation channel, the target of ondansetron and of mirtazapine's antinausea effect. All other 5-HT receptors are G-protein coupled.",
    "Acetylcholine: nicotinic receptors are ionotropic cation channels; muscarinic receptors M1 to M5 are metabotropic.",
    "Presynaptic autoreceptors sense the cell's own transmitter and inhibit further release. Heteroreceptors sense another transmitter. Alpha-2 autoreceptors and heteroreceptors are both blocked by mirtazapine, raising noradrenaline and serotonin release.",
    "Postsynaptic receptors mediate the signal; presynaptic receptors regulate it. Nearly every delayed antidepressant effect is explained by autoreceptor desensitisation."
  ],
  cards:[
    ["What three conditions must be met for the NMDA receptor to open?","Glutamate binding, binding of the co-agonist glycine or D-serine, and membrane depolarisation sufficient to expel the magnesium block."],
    ["Which serotonin receptor is ionotropic, and name a drug acting at it.","5-HT3, a ligand-gated cation channel. Ondansetron is an antagonist; 5-HT3 blockade also contributes to mirtazapine's antinausea effect."],
    ["Which GABA-A subunit mediates sedation and which mediates anxiolysis?","Alpha-1 mediates sedation, amnesia and anticonvulsant action. Alpha-2 and alpha-3 mediate anxiolysis and muscle relaxation."]
  ],
  note:[
    "Ketamine and phencyclidine are non-competitive NMDA antagonists acting within the channel pore. Memantine is an uncompetitive, moderate-affinity, fast off-rate blocker, which is why it is tolerated.",
    "The magnesium block makes NMDA a coincidence detector: it requires presynaptic release and postsynaptic depolarisation together. This is the molecular form of Hebb's rule.",
    "Flumazenil is a benzodiazepine receptor antagonist and reverses benzodiazepine but not barbiturate or alcohol effects.",
    "Nicotinic receptors at the neuromuscular junction differ in subunit composition from neuronal nicotinic receptors, which is why muscle relaxants act peripherally.",
    "Muscarinic M1 blockade causes cognitive impairment and confusion; peripheral muscarinic blockade causes dry mouth, blurred vision, constipation and urinary retention."
  ],
  refs:["stahl","agrawal","maudsley"] };

TEACH["3.3.3"] = { free:false,
  simple:"When a metabotropic receptor is switched on, nothing happens at the wall. A message runs into the cell instead, gets amplified enormously, and can end up changing which genes the cell is reading. That is how a drug taken today changes a brain over the following weeks, which is exactly the delay you see with antidepressants.",
  teach:[
    "G proteins are heterotrimeric, alpha beta gamma. Ligand binding causes GDP-GTP exchange on the alpha subunit and dissociation, and both alpha and beta-gamma act on effectors.",
    "Gs stimulates adenylyl cyclase, raising cAMP. Gi inhibits it, lowering cAMP. Gq activates phospholipase C, generating IP3 and diacylglycerol.",
    "cAMP activates protein kinase A. IP3 releases calcium from intracellular stores. Diacylglycerol activates protein kinase C. Calcium acts through calmodulin and CaMKII.",
    "Receptor coupling worth memorising: D1-like (D1, D5) are Gs; D2-like (D2, D3, D4) are Gi. 5-HT1 is Gi; 5-HT2 is Gq; 5-HT4, 5-HT6 and 5-HT7 are Gs. Alpha-1 is Gq; alpha-2 is Gi; beta-adrenoceptors are Gs. M1, M3, M5 are Gq; M2 and M4 are Gi. GABA-B is Gi.",
    "Downstream, protein kinase A phosphorylates CREB, which drives transcription of genes including BDNF. This is the standard molecular account of the delayed action of antidepressants and of neuroplastic change.",
    "Lithium inhibits inositol monophosphatase, depleting inositol and dampening the phosphatidylinositol cycle, and also inhibits GSK-3 beta. Both are candidate mechanisms of mood stabilisation.",
    "Signal amplification means one receptor activates many G proteins, each producing many second messenger molecules. Small ligand concentrations produce large intracellular effects.",
    "Desensitisation occurs through receptor phosphorylation by G-protein receptor kinases, arrestin binding and internalisation. This is receptor downregulation, and it is the mechanism of pharmacodynamic tolerance."
  ],
  cards:[
    ["Which G proteins couple to D1-like and D2-like dopamine receptors, and with what effect on cAMP?","D1-like (D1, D5) couple to Gs and raise cAMP. D2-like (D2, D3, D4) couple to Gi and lower cAMP."],
    ["Trace the pathway from a Gs-coupled receptor to gene transcription.","Receptor activates Gs, which stimulates adenylyl cyclase, raising cAMP, which activates protein kinase A, which phosphorylates CREB, which acts as a transcription factor driving expression of genes including BDNF."],
    ["Name two proposed second-messenger mechanisms for lithium.","Inhibition of inositol monophosphatase, producing inositol depletion and dampening of the phosphatidylinositol signalling cycle; and inhibition of glycogen synthase kinase 3 beta."]
  ],
  note:[
    "Gq activation: phospholipase C cleaves PIP2 into IP3 and DAG. IP3 mobilises calcium, DAG activates protein kinase C.",
    "BDNF and the neurotrophic hypothesis: BDNF falls with stress and rises with antidepressant treatment, exercise and ECT.",
    "Ketamine's rapid antidepressant action is attributed to AMPA throughput and mTOR-dependent synaptogenesis, bypassing the slow monoamine pathway.",
    "Beta-arrestin biased signalling is an active area: a ligand can favour G-protein or arrestin pathways at the same receptor.",
    "Tachyphylaxis and tolerance are receptor-level phenomena distinct from pharmacokinetic tolerance through enzyme induction."
  ],
  refs:["stahl","agrawal"] };

TEACH["3.3.4"] = { free:true,
  simple:"Six chemicals do most of the work. Dopamine handles reward and movement. Serotonin handles mood, sleep and appetite. Noradrenaline handles alertness. Acetylcholine handles memory. GABA is the brake and glutamate is the accelerator. Almost every psychiatric drug you will ever prescribe is nudging one of those six.",
  teach:[
    "Dopamine. Four pathways: mesolimbic for positive symptoms, mesocortical for negative and cognitive symptoms, nigrostriatal for movement, tuberoinfundibular for prolactin inhibition. Cell bodies in substantia nigra pars compacta (A9) and ventral tegmental area (A10). Receptors D1 to D5. Antipsychotics need roughly 60 to 70 per cent D2 occupancy; extrapyramidal effects above about 80 per cent; hyperprolactinaemia from around 72 per cent.",
    "Serotonin. Cell bodies in the raphe nuclei; rostral raphe project to forebrain, caudal to spinal cord. Fourteen receptor subtypes across seven families. 5-HT1A somatodendritic autoreceptor desensitisation explains the antidepressant delay. 5-HT2A blockade contributes to atypicality; 5-HT2C blockade to appetite and weight gain.",
    "Noradrenaline. Locus coeruleus in the dorsal pons supplies most cortical noradrenaline. Alpha-1 postsynaptic, alpha-2 inhibitory autoreceptor, beta-1 and beta-2. Governs arousal, vigilance and the stress response.",
    "Acetylcholine. Nucleus basalis of Meynert projects to cortex; medial septal nucleus to hippocampus. Loss of nucleus basalis neurones is the cholinergic deficit of Alzheimer's disease and the rationale for cholinesterase inhibitors. Muscarinic blockade impairs memory, which is why anticholinergic burden matters.",
    "GABA. The principal inhibitory transmitter, made from glutamate by glutamic acid decarboxylase. GABA-A ionotropic chloride channel; GABA-B metabotropic. Target of benzodiazepines, barbiturates, alcohol, Z-drugs and many anticonvulsants.",
    "Glutamate. The principal excitatory transmitter. AMPA for fast transmission, NMDA for plasticity, kainate, and metabotropic mGluR. Excitotoxicity through excessive calcium entry contributes to damage in stroke, hypoxia and neurodegeneration.",
    "The glutamate hypothesis of schizophrenia rests on NMDA antagonists such as ketamine and phencyclidine producing positive, negative and cognitive symptoms in healthy volunteers, which dopamine agonists do not."
  ],
  cards:[
    ["Name the four dopamine pathways and the clinical consequence of blocking each.","Mesolimbic: antipsychotic effect on positive symptoms. Mesocortical: worsening of negative and cognitive symptoms. Nigrostriatal: extrapyramidal side effects. Tuberoinfundibular: hyperprolactinaemia."],
    ["Where are the cell bodies of the serotonergic, noradrenergic and cortical cholinergic systems?","Serotonin: raphe nuclei of the brainstem. Noradrenaline: locus coeruleus in the dorsal pons. Cortical acetylcholine: nucleus basalis of Meynert in the basal forebrain."],
    ["Why does NMDA antagonism support a glutamate hypothesis of schizophrenia?","Ketamine and phencyclidine reproduce positive, negative and cognitive symptoms in healthy volunteers and worsen symptoms in patients, whereas dopamine agonists reproduce only positive symptoms."]
  ],
  note:[
    "Around 80 per cent of nigrostriatal neurones must be lost before parkinsonism becomes apparent.",
    "Aripiprazole is a D2 partial agonist, which is why it can lower prolactin rather than raise it.",
    "Clozapine and quetiapine have low and transient D2 occupancy, the usual explanation for their low extrapyramidal burden.",
    "Alpha-2 blockade by mirtazapine increases both noradrenaline and serotonin release, since alpha-2 heteroreceptors sit on serotonergic terminals.",
    "Excitotoxicity is the rationale for memantine in moderate to severe Alzheimer's disease."
  ],
  refs:["stahl","agrawal","maudsley"] };

TEACH["3.3.5"] = { free:false,
  simple:"Alongside the fast chemical messages there is a slower conversation carried by short protein fragments. These are the molecules that tell you that you are hungry, full, stressed or in pain, and they are the reason a drug developed for diabetes turned out to change what people want to eat.",
  teach:[
    "Corticotrophin releasing hormone: from the paraventricular nucleus, drives ACTH release and the stress response, and has direct anxiogenic effects. Elevated CSF CRH is reported in depression.",
    "Cholecystokinin: a gut and brain peptide. CCK-4 infusion reliably induces panic attacks in susceptible individuals and is a standard experimental panic challenge.",
    "Ghrelin: from the stomach, orexigenic, rises before meals. Leptin: from adipose tissue, anorexigenic, signals fat mass. Leptin falls in anorexia nervosa and rises with weight restoration.",
    "GLP-1: an incretin, anorexigenic, slows gastric emptying and acts on hypothalamic and reward circuitry. GLP-1 receptor agonists are being studied for antipsychotic-associated weight gain and for addictive behaviours.",
    "Enkephalins, endorphins and dynorphins: the endogenous opioids, acting at mu, delta and kappa receptors. Mu mediates analgesia, euphoria and respiratory depression. Kappa activation produces dysphoria, which is why kappa antagonism is an antidepressant target.",
    "The endocannabinoid system: anandamide and 2-AG acting at CB1, which is presynaptic and mediates retrograde signalling, and CB2, mainly immune. CB1 is the target of THC. Rimonabant, a CB1 inverse agonist, was withdrawn because of depression and suicidality, which is strong evidence for the system's role in mood.",
    "Orexins, also called hypocretins: from the lateral hypothalamus, promoting wakefulness and appetite. Loss of orexin neurones causes narcolepsy with cataplexy. Orexin receptor antagonists such as suvorexant and daridorexant are licensed hypnotics.",
    "Substance P and neurokinin-1: implicated in pain and emotion. NK-1 antagonists failed as antidepressants but succeeded as antiemetics."
  ],
  cards:[
    ["Which peptide is lost in narcolepsy with cataplexy, and what drug class targets its receptor?","Orexin, also called hypocretin, from the lateral hypothalamus. Orexin receptor antagonists such as suvorexant and daridorexant are licensed as hypnotics."],
    ["Contrast ghrelin and leptin.","Ghrelin is secreted by the stomach, is orexigenic and rises before meals. Leptin is secreted by adipose tissue, is anorexigenic and reflects fat mass; it is low in anorexia nervosa and rises with weight restoration."],
    ["What does the withdrawal of rimonabant tell us about the endocannabinoid system?","Rimonabant, a CB1 inverse agonist licensed for obesity, was withdrawn because of depression, anxiety and suicidality, indicating that endocannabinoid signalling has an important role in mood regulation."]
  ],
  note:[
    "CCK-4 challenge is one of the few reliable experimental models of panic in humans.",
    "Kappa opioid receptor activation by dynorphin produces dysphoria and is a target for novel antidepressants.",
    "Narcolepsy shows a very strong association with HLA-DQB1*06:02 and is thought to be autoimmune.",
    "Neuropeptide Y is orexigenic and stress-buffering, and low levels are associated with poorer resilience.",
    "Oxytocin and vasopressin from the paraventricular and supraoptic nuclei are released by the posterior pituitary and are studied in social cognition; clinical evidence remains weak."
  ],
  refs:["agrawal","stahl","lynall"] };

TEACH["3.3.6"] = { free:false,
  simple:"For thirty years people looked for the schizophrenia gene by picking a chemical they already suspected and testing its gene. Almost nothing replicated. Then researchers stopped guessing, scanned the whole genome without a hypothesis, and the answers that came back were not the ones anybody had picked.",
  teach:[
    "Candidate gene studies selected genes from an existing hypothesis, typically COMT, DRD2, SLC6A4 and BDNF. Almost none replicated in large samples. This is one of the clearest cautionary tales in psychiatric research.",
    "Genome-wide association studies test millions of variants without prior hypothesis, requiring genome-wide significance at 5 x 10 to the minus 8 and very large samples.",
    "Schizophrenia GWAS: over 280 loci identified. The strongest signal is in the major histocompatibility complex region on chromosome 6, driven substantially by structural variation in complement component 4, which is expressed in synaptic pruning. That finding links genetics to a developmental mechanism.",
    "DRD2, the target of every antipsychotic, does appear as a genome-wide significant locus, which is a genuine convergence between genetics and pharmacology.",
    "Glutamatergic genes are over-represented: GRIN2A, GRIA3, and genes encoding postsynaptic density and voltage-gated calcium channel proteins, notably CACNA1C, which is shared across schizophrenia, bipolar disorder, depression, ADHD and autism.",
    "Serotonin: the 5-HTTLPR polymorphism in SLC6A4 and its interaction with life events is widely taught and has failed to replicate in large collaborative analyses. Teach it as a historical example, not as established.",
    "COMT Val158Met affects prefrontal dopamine catabolism and cognition. The effect size is small and the psychiatric association has not held up.",
    "The honest summary. Individual variants have tiny effects, the architecture is highly polygenic, there is substantial genetic overlap across diagnostic categories, and no genetic test is clinically useful for common psychiatric disorders."
  ],
  cards:[
    ["What is the strongest genome-wide association signal in schizophrenia, and what mechanism does it implicate?","The major histocompatibility complex region on chromosome 6, driven substantially by structural variation in complement component 4, which is involved in synaptic pruning."],
    ["Why did candidate gene studies in psychiatry largely fail?","They were underpowered, tested pre-selected genes based on weak prior hypotheses, and were subject to publication bias. Almost none replicated in adequately powered genome-wide analyses."],
    ["Which gene shows cross-disorder association across schizophrenia, bipolar disorder, depression, ADHD and autism?","CACNA1C, encoding a subunit of an L-type voltage-gated calcium channel."]
  ],
  note:[
    "Genome-wide significance threshold is p less than 5 x 10 to the minus 8, correcting for approximately one million independent tests.",
    "Rare copy number variants with large effect include 22q11.2 deletion, 1q21.1, 15q13.3 and 16p11.2.",
    "Polygenic risk scores explain a meaningful proportion of variance at population level and are not useful for individual prediction.",
    "The Psychiatric Genomics Consortium is the collaborative structure that made adequately powered studies possible.",
    "Most genome-wide significant variants are non-coding and act through regulation of gene expression, which is why functional follow-up is slow."
  ],
  refs:["agrawal","lynall","noptp"] };

TEACH["3.3.7"] = { free:true,
  simple:"Every drug that people take for pleasure ends up doing the same thing in the same place: raising dopamine in a small structure behind the front of the brain. They arrive by completely different routes, but they all end at the same door, and that is why very different substances produce the same trap.",
  teach:[
    "The common final pathway is increased dopamine in the nucleus accumbens, part of the mesolimbic projection from the ventral tegmental area.",
    "Cocaine blocks the dopamine, noradrenaline and serotonin transporters, preventing reuptake. Amphetamine additionally reverses the dopamine transporter and displaces dopamine from vesicles, producing much larger release.",
    "Opioids act at mu receptors. They disinhibit ventral tegmental dopamine neurones by inhibiting GABA interneurones. Mu agonism gives analgesia, euphoria, miosis, constipation and respiratory depression.",
    "Alcohol is dirty pharmacology: it potentiates GABA-A, inhibits NMDA, and releases dopamine and endogenous opioids. NMDA inhibition acutely with compensatory upregulation explains withdrawal seizures and delirium tremens.",
    "Cannabis: THC is a partial agonist at CB1, which is presynaptic and inhibits transmitter release. Cannabidiol is not intoxicating and has different, possibly antipsychotic, properties. Dose-related increase in psychosis risk, greatest with high-potency preparations and adolescent onset.",
    "Nicotine acts at nicotinic acetylcholine receptors on ventral tegmental dopamine neurones. Its very rapid delivery by inhalation is central to its addictive potential.",
    "Hallucinogens: LSD, psilocybin and mescaline are 5-HT2A agonists. Ketamine and phencyclidine are NMDA antagonists. MDMA is principally a serotonin releaser with risk of hyperthermia, hyponatraemia and serotonin syndrome.",
    "The mental health consequences follow the pharmacology: stimulant psychosis, cannabis-associated psychosis, opioid-associated depression and cognitive dulling, alcohol-related depression and cognitive impairment, and withdrawal states that mimic anxiety and depression.",
    "Loss of tolerance after a period of abstinence, following prison release or inpatient detoxification, is the commonest setting for fatal opioid overdose. This single fact belongs in every discharge plan."
  ],
  cards:[
    ["What is the common final pathway for drugs of abuse?","Increased dopamine release in the nucleus accumbens, via the mesolimbic projection from the ventral tegmental area."],
    ["How do cocaine and amphetamine differ pharmacologically?","Cocaine blocks monoamine reuptake transporters. Amphetamine additionally reverses the dopamine transporter and displaces dopamine from vesicles via VMAT2, producing much greater release."],
    ["Explain the pharmacology of alcohol withdrawal seizures.","Chronic alcohol inhibits NMDA receptors and potentiates GABA-A, producing compensatory NMDA upregulation and GABA-A downregulation. On withdrawal, unopposed glutamatergic excitation lowers seizure threshold."]
  ],
  note:[
    "Incentive sensitisation, Robinson and Berridge: wanting and liking dissociate with repeated use. Wanting sensitises while liking does not, which is why craving persists after pleasure has gone.",
    "Cannabis and psychosis: dose-response relationship, greatest risk with daily high-potency use and adolescent onset. Causation is supported but not proven.",
    "Naloxone reverses opioid overdose and has a shorter half-life than most opioids, so repeated dosing or infusion may be needed.",
    "Synthetic cannabinoid receptor agonists are full agonists at CB1, unlike THC, and carry a high risk of severe agitation, psychosis and seizures.",
    "GHB, solvents and nitrous oxide are further examinable substances; nitrous oxide inactivates vitamin B12 and can cause subacute combined degeneration of the cord."
  ],
  refs:["stahl","semaddict","maudsley"] };

/* ---------------- 3.4 NEUROANATOMY ---------------- */

TEACH["3.4.1"] = { free:true,
  simple:"In 1848 an iron bar went through the front of Phineas Gage's skull and he stood up and spoke within minutes. He did not lose speech, movement or memory. He lost judgement, restraint and the person his friends recognised. That accident is the whole argument for functional localisation in one sentence: the brain is not a general-purpose soup.",
  teach:[
    "Frontal lobe: motor cortex (area 4), premotor and supplementary motor, Broca's area (44, 45) in the dominant hemisphere, frontal eye fields, and prefrontal cortex.",
    "Three prefrontal syndromes: dorsolateral, dysexecutive with poor planning, set-shifting and working memory; orbitofrontal, disinhibition, impulsivity and social misconduct; anterior cingulate or medial, apathy, abulia and akinetic mutism.",
    "Parietal lobe: primary somatosensory cortex (3, 1, 2). Dominant parietal lesion gives Gerstmann syndrome, dysgraphia, dyscalculia, finger agnosia and left-right disorientation. Non-dominant gives hemineglect, dressing and constructional apraxia, and anosognosia.",
    "Temporal lobe: primary auditory cortex, Wernicke's area (22) in the dominant hemisphere, hippocampus and amygdala. Bilateral damage gives Kluver-Bucy syndrome with hyperorality, hypersexuality, placidity, hyperphagia and visual agnosia.",
    "Occipital lobe: primary visual cortex (17). Bilateral lesions give cortical blindness, and Anton syndrome when the patient denies it. Balint syndrome from bilateral parieto-occipital damage gives optic ataxia, ocular apraxia and simultanagnosia.",
    "Cingulate gyrus: anterior for conflict monitoring, effort and emotion; posterior part of the default mode network.",
    "Limbic system: hippocampus, amygdala, cingulate, parahippocampal gyrus, mammillary bodies, fornix, septal nuclei.",
    "Cranial nerves: the classical mnemonic order, with I and II being CNS tracts rather than true peripheral nerves. Olfaction is the only sensory modality that does not relay through the thalamus.",
    "Spinal cord: dorsal columns for fine touch, vibration and proprioception, decussating in the medulla; spinothalamic for pain and temperature, decussating within a segment or two of entry; corticospinal for motor, decussating in the medullary pyramids."
  ],
  cards:[
    ["Name the three prefrontal syndromes and their features.","Dorsolateral: dysexecutive, impaired planning, set-shifting and working memory. Orbitofrontal: disinhibition, impulsivity, social misconduct, emotional lability. Anterior cingulate or medial: apathy, abulia, akinetic mutism."],
    ["What is Gerstmann syndrome and where is the lesion?","Dysgraphia, dyscalculia, finger agnosia and left-right disorientation, from a lesion of the dominant parietal lobe at the angular gyrus."],
    ["Name the features of Kluver-Bucy syndrome.","Hyperorality, hypersexuality, placidity or loss of fear, hyperphagia, visual agnosia and hypermetamorphosis, from bilateral temporal lobe damage including the amygdala."]
  ],
  note:[
    "Gage's accident was on 13 September 1848, not 1835. His doctor was John Martyn Harlow.",
    "Broca's aphasia: non-fluent, effortful, comprehension relatively preserved, repetition impaired, and the patient is aware and frustrated. Wernicke's: fluent, empty, comprehension impaired, repetition impaired, and insight lost.",
    "Conduction aphasia: fluent speech, preserved comprehension, disproportionately impaired repetition, attributed to arcuate fasciculus damage.",
    "Anosognosia and hemineglect follow non-dominant, typically right, parietal lesions.",
    "Utilisation behaviour and imitation behaviour follow frontal lesions and are examples of environmental dependency."
  ],
  refs:["agrawal","lishman","oxneuropsy"] };

TEACH["3.4.2"] = { free:false,
  simple:"The basal ganglia are the brain's committee for movement, and they work by veto. The default position is do nothing. One route through the committee says yes, another says no, and the balance between them decides whether your hand moves. Damage one route and you get too little movement. Damage the other and you get too much.",
  teach:[
    "Components: caudate, putamen and globus pallidus, with the subthalamic nucleus and substantia nigra functionally included. Caudate plus putamen is the striatum. Putamen plus globus pallidus is the lentiform nucleus.",
    "The direct pathway facilitates movement, via D1 receptors, and inhibits the internal globus pallidus, releasing the thalamus.",
    "The indirect pathway inhibits movement, via D2 receptors, running through the external globus pallidus and the subthalamic nucleus to the internal globus pallidus.",
    "Dopamine from the substantia nigra pars compacta excites the direct pathway through D1 and inhibits the indirect through D2. Both actions promote movement.",
    "Parkinson's disease: loss of nigrostriatal dopamine, so the indirect pathway dominates and movement is reduced. Around 80 per cent of neurones must be lost before parkinsonism appears.",
    "Huntington's disease: loss of GABAergic medium spiny neurones of the indirect pathway in the caudate, so movement is disinhibited, producing chorea. Caudate atrophy gives the box-car ventricles on imaging.",
    "Hemiballismus follows a lesion of the contralateral subthalamic nucleus, typically a lacunar infarct.",
    "Ventral striatum, including the nucleus accumbens, is the reward component and is the target of the mesolimbic dopamine projection. Ventral pallidum is its output.",
    "The clinical bottom line. Every extrapyramidal side effect you will ever see is D2 blockade shifting this balance towards the indirect pathway."
  ],
  cards:[
    ["Which structures make up the striatum and the lentiform nucleus?","Striatum: caudate plus putamen. Lentiform nucleus: putamen plus globus pallidus."],
    ["Which receptor mediates the direct pathway and which the indirect?","D1 receptors mediate the direct, movement-facilitating pathway. D2 receptors mediate the indirect, movement-inhibiting pathway."],
    ["What lesion causes hemiballismus?","A lesion of the contralateral subthalamic nucleus, most often a lacunar infarct, producing violent flinging movements of the opposite limbs."]
  ],
  note:[
    "Around 80 per cent of nigrostriatal dopaminergic neurones are lost before parkinsonian signs appear.",
    "Huntington's disease: autosomal dominant, CAG trinucleotide repeat expansion in HTT on chromosome 4p, showing anticipation, with paternal transmission producing the largest expansions.",
    "Wilson's disease deposits copper in the basal ganglia, giving the Kayser-Fleischer ring, low caeruloplasmin, and psychiatric presentation in around a third.",
    "Deep brain stimulation of the subthalamic nucleus or internal globus pallidus is established in Parkinson's disease.",
    "Caudate hyperactivity within the cortico-striato-thalamo-cortical loop is the standard circuit account of OCD."
  ],
  refs:["agrawal","lishman","oxneuropsy"] };

TEACH["3.4.3"] = { free:false,
  simple:"Deep in the temporal lobe sit two structures the size of your thumb joint. One turns experience into memory. The other decides whether you should be frightened. Take the first out on both sides and you get a man who can no longer make a new memory. Take the second out and you get a person who cannot learn to be afraid of anything.",
  teach:[
    "Hippocampal formation: dentate gyrus, cornu ammonis fields CA1 to CA4, and subiculum. The trisynaptic circuit runs entorhinal cortex to dentate gyrus via the perforant path, dentate to CA3 via mossy fibres, CA3 to CA1 via Schaffer collaterals.",
    "CA1 is the most vulnerable to hypoxia and ischaemia, sometimes called Sommer's sector. Hippocampal sclerosis in temporal lobe epilepsy involves CA1 and CA3 loss with dentate preservation.",
    "The hippocampus is required for the formation of new declarative memories, not for their permanent storage. This is why HM had dense anterograde amnesia with intact remote memory and intact procedural learning.",
    "Place cells in the hippocampus and grid cells in entorhinal cortex encode spatial position. O'Keefe and the Mosers, Nobel Prize 2014.",
    "Adult neurogenesis is described in the subgranular zone of the dentate gyrus. It is increased by exercise, environmental enrichment and antidepressants, and reduced by stress and glucocorticoids. Its extent in adult humans remains genuinely contested.",
    "The amygdala assigns emotional significance, particularly threat. It is required for fear conditioning and for recognition of fearful faces. Bilateral lesion, as in Urbach-Wiethe disease, abolishes learned fear.",
    "The low road and the high road, LeDoux: a fast direct thalamo-amygdala route and a slower cortical route. The fast route explains reacting before you know what you reacted to.",
    "Temporal lobe epilepsy: aura with epigastric rising sensation, deja vu or jamais vu, olfactory or gustatory hallucination, fear; then automatisms and postictal confusion. Interictal Geschwind syndrome describes hypergraphia, hyperreligiosity, viscosity and altered sexuality.",
    "Postictal psychosis characteristically follows a lucid interval of hours to days after a cluster of seizures and remits within days to weeks."
  ],
  cards:[
    ["Trace the hippocampal trisynaptic circuit.","Entorhinal cortex to dentate gyrus via the perforant path; dentate gyrus to CA3 via mossy fibres; CA3 to CA1 via Schaffer collaterals; CA1 to subiculum and back to entorhinal cortex."],
    ["Which hippocampal field is most vulnerable to hypoxia?","CA1, Sommer's sector."],
    ["What is the clinical picture of temporal lobe epilepsy?","Aura with epigastric rising sensation, deja vu, olfactory or gustatory hallucination or fear; automatisms such as lip-smacking or fumbling; impaired awareness; and postictal confusion with amnesia for the event."]
  ],
  note:[
    "HM underwent bilateral medial temporal lobectomy in 1953. He had dense anterograde amnesia, intact digit span and intact procedural learning.",
    "Hippocampal volume is reduced in depression, PTSD and schizophrenia. Whether this is cause or consequence is unresolved.",
    "Urbach-Wiethe disease produces bilateral amygdala calcification and is the classic human amygdala lesion case.",
    "Kindling in the amygdala is the experimental model behind the kindling hypothesis of recurrent affective illness.",
    "Postictal psychosis has a characteristic lucid interval, distinguishing it from ictal or interictal psychosis."
  ],
  refs:["agrawal","lishman","oxneuropsy"] };

TEACH["3.4.4"] = { free:false,
  simple:"The front of the brain is where you decide not to do something. It is the last part to finish growing, finishing in your mid-twenties, and the first part to go in several diseases. When it fails, the person's intelligence, memory and speech can all be intact, and the person is still unrecognisable.",
  teach:[
    "Prefrontal cortex divides into dorsolateral, ventromedial and orbitofrontal, plus anterior cingulate medially.",
    "Dorsolateral prefrontal cortex (areas 9, 46) supports working memory, planning, set-shifting and abstraction. Hypofrontality on functional imaging during cognitive tasks is a replicated finding in schizophrenia.",
    "Orbitofrontal cortex (areas 11, 47) supports value representation, reversal learning and inhibition of socially inappropriate behaviour. Damage produces disinhibition and impaired decision-making with intact IQ, demonstrated by the Iowa Gambling Task.",
    "Ventromedial prefrontal cortex is central to Damasio's somatic marker hypothesis: bodily feeling states guide decisions, and their loss produces poor real-world choices despite normal reasoning.",
    "Anterior cingulate cortex: dorsal region for conflict monitoring, error detection and effort; ventral or subgenual region for emotion, and the target of deep brain stimulation in refractory depression.",
    "Frontal release signs, indicating loss of cortical inhibition: grasp, pout, snout, palmomental and glabellar tap.",
    "Bedside frontal testing: verbal fluency, Luria three-step, alternating sequences, go/no-go, cognitive estimates, proverb interpretation, and primitive reflexes. The Frontal Assessment Battery packages several of these.",
    "Frontal lobe function is poorly captured by the Mini-Mental State Examination, which is why a person with behavioural variant frontotemporal dementia can score 30 out of 30 and be profoundly impaired."
  ],
  cards:[
    ["What does orbitofrontal damage produce, and what test demonstrates it?","Disinhibition, impulsivity, social misconduct and impaired decision-making with intact IQ and memory. The Iowa Gambling Task demonstrates it."],
    ["Name five frontal release signs.","Grasp reflex, pout reflex, snout reflex, palmomental reflex, and a persistent glabellar tap response."],
    ["Why can the MMSE be normal in frontotemporal dementia?","It contains no test of executive function, judgement, inhibition or social cognition, so a person with predominantly frontal pathology may score full marks while being severely impaired."]
  ],
  note:[
    "Verbal fluency: normal is around 15 or more words beginning with F in one minute. Category fluency, animals, is typically higher than letter fluency in health and disproportionately impaired in Alzheimer's disease.",
    "Perseveration, utilisation behaviour and environmental dependency are frontal signs.",
    "The Wisconsin Card Sorting Test measures set-shifting and is sensitive to dorsolateral prefrontal dysfunction.",
    "Subgenual cingulate, Brodmann area 25, is the Mayberg target for deep brain stimulation in treatment-resistant depression.",
    "The cingulum bundle connects cingulate to entorhinal cortex and forms part of the Papez circuit."
  ],
  refs:["agrawal","lishman","oxneuropsy"] };

TEACH["3.4.5"] = { free:false,
  simple:"Grey matter does the thinking and white matter does the talking between the thinkers. Cut the cables and the parts still work but they stop cooperating, which is why some of the strangest neurology comes not from damaged regions but from disconnected ones.",
  teach:[
    "Corpus callosum: the largest commissure, connecting the hemispheres. Genu, body, splenium, and the rostrum. Section produces disconnection syndromes, including alien hand and inability to name objects felt in the left hand.",
    "Fornix: the main hippocampal output, running to the mammillary bodies. Part of the Papez circuit; damage causes amnesia.",
    "Papez circuit: hippocampus, fornix, mammillary bodies, mammillothalamic tract, anterior thalamic nucleus, cingulate gyrus, cingulum, parahippocampal gyrus, back to hippocampus. Proposed for emotion in 1937 and largely wrong about emotion, but anatomically enduring and central to memory.",
    "Arcuate fasciculus connects Wernicke's to Broca's area. Damage gives conduction aphasia, with fluent speech, preserved comprehension and disproportionately impaired repetition.",
    "Uncinate fasciculus connects orbitofrontal cortex to anterior temporal lobe. Implicated in social and emotional processing, and abnormal in psychopathy and in frontotemporal dementia.",
    "Cingulum bundle runs within the cingulate gyrus and links frontal, parietal and temporal regions.",
    "Superior and inferior longitudinal fasciculi provide long anteroposterior association connections.",
    "Internal capsule: anterior limb, genu and posterior limb. Corticospinal fibres run in the posterior limb, which is why small lacunar lesions there cause dense hemiparesis.",
    "White matter disease is clinically important in psychiatry: periventricular hyperintensities are associated with late-onset depression, executive dysfunction and poorer antidepressant response, the vascular depression hypothesis."
  ],
  cards:[
    ["Name the components of the Papez circuit in order.","Hippocampus, fornix, mammillary bodies, mammillothalamic tract, anterior nucleus of the thalamus, cingulate gyrus, cingulum, parahippocampal gyrus, returning to hippocampus."],
    ["Which tract is damaged in conduction aphasia and what is the clinical picture?","The arcuate fasciculus. Fluent speech and preserved comprehension with disproportionately impaired repetition, and awareness of the errors."],
    ["Where do corticospinal fibres run within the internal capsule?","The posterior limb, which is why small lacunar infarcts there produce dense contralateral hemiparesis."]
  ],
  note:[
    "Reduced fractional anisotropy on diffusion tensor imaging is reported in schizophrenia, most consistently in frontotemporal and interhemispheric connections.",
    "Marchiafava-Bignami disease is demyelination of the corpus callosum associated with chronic alcohol use.",
    "The vascular depression hypothesis links deep white matter hyperintensities to late-onset depression with executive dysfunction and poor treatment response.",
    "Alien hand syndrome follows callosal or medial frontal damage.",
    "Anterior cingulotomy and subcaudate tractotomy were the historical psychosurgical lesions, now governed in England and Wales by section 57 of the Mental Health Act 1983."
  ],
  refs:["agrawal","lishman","oxneuropsy"] };

TEACH["3.4.6"] = { free:true,
  simple:"Four small clusters of cells, none bigger than a grain of rice, send fibres to almost the entire brain. That is why a drug acting on one of them changes mood, sleep, appetite, attention and movement all at once. The side effect list of an antidepressant is not a list of accidents. It is a map of where those fibres go.",
  teach:[
    "Nigrostriatal: substantia nigra pars compacta (A9) to dorsal striatum. Movement. Blockade gives extrapyramidal side effects; degeneration gives Parkinson's disease.",
    "Mesolimbic: ventral tegmental area (A10) to nucleus accumbens, amygdala and hippocampus. Reward and salience. Overactivity is the standard account of positive psychotic symptoms.",
    "Mesocortical: ventral tegmental area to prefrontal cortex. Cognition and motivation. Underactivity is the standard account of negative and cognitive symptoms, and is why D2 blockade can worsen them.",
    "Tuberoinfundibular: arcuate nucleus of the hypothalamus to the median eminence, tonically inhibiting prolactin. Blockade raises prolactin.",
    "Noradrenergic: locus coeruleus in the dorsal pons, supplying most of the cortical, hippocampal and cerebellar noradrenaline. Arousal, vigilance, and the stress response.",
    "Serotonergic: raphe nuclei in the brainstem midline. Rostral raphe, chiefly dorsal and median, project to the whole forebrain; caudal raphe project to the spinal cord and modulate pain.",
    "Basal forebrain cholinergic: nucleus basalis of Meynert to neocortex, medial septal nucleus and diagonal band to hippocampus. Attention and memory encoding. Degeneration underlies the cholinergic deficit in Alzheimer's disease.",
    "Brainstem cholinergic: pedunculopontine and laterodorsal tegmental nuclei, projecting to thalamus. Arousal and REM sleep generation.",
    "Corticofugal glutamate: descending projections from cortex to striatum, thalamus, brainstem and spinal cord. The main excitatory output of the cortex, and the anatomy behind the glutamate hypothesis of schizophrenia."
  ],
  cards:[
    ["Name the four dopamine pathways with their origins and destinations.","Nigrostriatal: substantia nigra pars compacta to dorsal striatum. Mesolimbic: ventral tegmental area to nucleus accumbens and limbic structures. Mesocortical: ventral tegmental area to prefrontal cortex. Tuberoinfundibular: arcuate nucleus to median eminence."],
    ["Where does most cortical noradrenaline originate?","The locus coeruleus, in the dorsal pons, a small nucleus of a few thousand neurones projecting diffusely to almost the entire cortex, hippocampus and cerebellum."],
    ["Which two nuclei provide the basal forebrain cholinergic projections and to where?","Nucleus basalis of Meynert to the neocortex, and the medial septal nucleus with the diagonal band of Broca to the hippocampus."]
  ],
  note:[
    "Antipsychotics cannot select between dopamine pathways, which is why efficacy and extrapyramidal effects and hyperprolactinaemia travel together.",
    "The locus coeruleus contains only around 15,000 neurones per side in humans, yet supplies the whole cortex.",
    "Locus coeruleus and raphe are among the earliest sites of Lewy and tau pathology, which is why depression and sleep disturbance can precede motor or cognitive signs by years.",
    "Serotonergic projections from the caudal raphe to the dorsal horn are the anatomy behind the analgesic effects of SNRIs and tricyclics.",
    "Histaminergic projections arise from the tuberomammillary nucleus; H1 blockade explains sedation and weight gain."
  ],
  refs:["stahl","agrawal","lynall"] };

/* ---------------- 3.5 NEURAL CIRCUITS ---------------- */

TEACH["3.5.1.1"] = { free:false,
  simple:"Two small parts of the hypothalamus argue about whether you are hungry. One says eat, the other says stop. Damage the stop signal in an animal and it eats until it is enormous. That circuit is also where several psychiatric drugs land, which is why weight gain is not a lifestyle failure but a pharmacological effect.",
  teach:[
    "Lateral hypothalamus drives feeding; lesion causes aphagia. Ventromedial hypothalamus signals satiety; lesion causes hyperphagia and obesity. The arcuate nucleus is the main integrator.",
    "Arcuate nucleus contains two opposing populations: NPY/AgRP neurones which are orexigenic, and POMC/CART neurones which are anorexigenic.",
    "Peripheral signals: ghrelin from the stomach is orexigenic and rises before meals; leptin from adipose tissue and insulin are anorexigenic; GLP-1, PYY and CCK are satiety signals from the gut.",
    "Eating disorders: leptin falls in anorexia nervosa and rises with weight restoration. Ghrelin is elevated in anorexia. These are consequences of the weight state, not causes of the illness.",
    "Depression: appetite may fall or rise. Atypical depression features hyperphagia and hypersomnia; melancholic depression features anorexia and weight loss.",
    "Medication effects: H1 and 5-HT2C antagonism drives weight gain, which is why olanzapine and clozapine are worst, mirtazapine causes appetite increase, and aripiprazole, lurasidone and ziprasidone are least implicated.",
    "Thirst and osmoregulation: osmoreceptors in the organum vasculosum drive vasopressin release. Psychogenic polydipsia and SSRI-induced SIADH both present as hyponatraemia, and both must be recognised."
  ],
  cards:[
    ["What are the effects of lateral and ventromedial hypothalamic lesions on feeding?","Lateral hypothalamic lesion causes aphagia and weight loss. Ventromedial hypothalamic lesion causes hyperphagia and obesity."],
    ["Which receptor actions drive antipsychotic weight gain?","Histamine H1 antagonism and 5-HT2C antagonism, with muscarinic M3 blockade contributing to metabolic effects. Olanzapine and clozapine have the greatest burden."],
    ["What happens to leptin and ghrelin in anorexia nervosa?","Leptin is low, reflecting reduced fat mass, and rises with weight restoration. Ghrelin is elevated. Both are consequences of the nutritional state rather than causes of the disorder."]
  ],
  note:[
    "Prader-Willi syndrome features hyperphagia with elevated ghrelin and is the classic genetic disorder of appetite regulation.",
    "Hyponatraemia in a psychiatric inpatient: consider SSRI-induced SIADH, psychogenic polydipsia, carbamazepine, and rapid correction risk of osmotic demyelination.",
    "GLP-1 receptor agonists are under active study for antipsychotic-associated weight gain.",
    "Metformin has the best evidence for mitigating antipsychotic-induced weight gain.",
    "Refeeding syndrome is the acute risk in restoring nutrition; hypophosphataemia is the hallmark."
  ],
  refs:["agrawal","stahl","maudsley"] };

TEACH["3.5.1.2"] = { free:true,
  simple:"Sleep runs a fixed programme in ninety-minute cycles, with the deep repairing part loaded into the first half of the night and the dreaming into the second. That is why sleepwalking happens before midnight and nightmares happen at five, and why a person acting out their dreams is telling you something serious about the next twenty years.",
  teach:[
    "Architecture: N1, N2 with K complexes and sleep spindles, N3 slow wave, and REM with low-voltage mixed frequency EEG, sawtooth waves, rapid eye movements and muscle atonia.",
    "A cycle lasts about 90 minutes. REM is 20 to 25 per cent of adult sleep and REM periods lengthen across the night. Slow wave sleep is front-loaded into the first third.",
    "Regulation: the two-process model. Process S is homeostatic sleep pressure building with wakefulness; process C is the circadian drive from the suprachiasmatic nucleus, entrained by light through the retinohypothalamic tract.",
    "Melatonin is synthesised in the pineal gland from serotonin and released in darkness under suprachiasmatic control.",
    "Sleep-wake switching: the ventrolateral preoptic nucleus promotes sleep; the ascending reticular activating system, orexin neurones, and histaminergic tuberomammillary neurones promote wakefulness. Orexin stabilises the switch, and its loss causes narcolepsy.",
    "Sleep deprivation: impaired vigilance and sustained attention, microsleeps, irritability, and at extremes perceptual disturbance. Selective REM deprivation produces REM rebound. Total sleep deprivation has a rapid but transient antidepressant effect.",
    "Depression: reduced REM latency, increased REM density, reduced slow wave sleep, early morning wakening, reduced total sleep time.",
    "Primary sleep disorders: narcolepsy, obstructive sleep apnoea, restless legs syndrome, circadian rhythm disorders, and the parasomnias.",
    "REM sleep behaviour disorder is loss of REM atonia with dream enactment, and is a strong prodromal marker of the synucleinopathies, particularly Lewy body dementia and Parkinson's disease."
  ],
  cards:[
    ["In which stage do sleepwalking and night terrors occur, and in which do nightmares?","Sleepwalking and night terrors occur in slow wave sleep, N3, in the first third of the night, with little dream recall. Nightmares occur in REM, later in the night, and are recalled."],
    ["Describe the two-process model of sleep regulation.","Process S is homeostatic sleep pressure accumulating with time awake. Process C is the circadian drive from the suprachiasmatic nucleus. Sleep occurs when S is high and C is low."],
    ["What is lost in narcolepsy with cataplexy and what is the HLA association?","Hypothalamic orexin (hypocretin) neurones, with low CSF orexin. Strong association with HLA-DQB1*06:02."]
  ],
  note:[
    "Narcolepsy tetrad: excessive daytime sleepiness, cataplexy, sleep paralysis, hypnagogic hallucinations. Only sleepiness is universal.",
    "Most antidepressants suppress REM. Trazodone, mirtazapine and agomelatine are relative exceptions.",
    "Obstructive sleep apnoea causes daytime somnolence, cognitive impairment and depression, and is regularly misdiagnosed as depression in psychiatric clinics.",
    "Total sleep time and slow wave sleep fall with age; sleep fragments and phase-advances.",
    "CBT for insomnia, not hypnotics, is first-line for chronic insomnia in NICE guidance."
  ],
  refs:["agrawal","oxoldage","nice"] };

TEACH["3.5.1.3"] = { free:false,
  simple:"Sexual function needs three things to work: wanting, physical arousal, and the ability to finish. Different drugs break different ones, which is why the question is never just are you having side effects but which part has stopped, because the answer tells you what to change.",
  teach:[
    "The sexual response cycle: desire, arousal, orgasm, resolution, with Basson's circular model recognising that desire often follows rather than precedes arousal, particularly in women.",
    "Neurochemistry: dopamine promotes desire and arousal; serotonin, particularly 5-HT2, inhibits it; prolactin inhibits desire; nitric oxide mediates erection; noradrenaline mediates ejaculation.",
    "SSRIs impair sexual function in 30 to 70 per cent of patients, affecting desire, arousal and orgasm, with delayed orgasm the most characteristic. Mechanism is 5-HT2 stimulation.",
    "Lower-risk alternatives: mirtazapine, bupropion, agomelatine, moclobemide, vortioxetine. Management options include waiting, dose reduction, switching, or adding a phosphodiesterase-5 inhibitor.",
    "Antipsychotics: prolactin-raising drugs cause reduced desire, erectile dysfunction and amenorrhoea. Amisulpride, risperidone, paliperidone and first-generation drugs are worst; aripiprazole, quetiapine and clozapine least.",
    "Hormonal influence: testosterone drives desire in both sexes. Hypogonadism, hyperprolactinaemia and thyroid disease all present as sexual dysfunction.",
    "Gender identity is not determined by circulating hormones in adulthood. Prenatal hormonal exposure influences brain development, with congenital adrenal hyperplasia the standard natural experiment.",
    "Psychiatric illness itself reduces sexual function: depression reduces desire, and this precedes treatment. Establishing a baseline before prescribing prevents misattribution."
  ],
  cards:[
    ["What proportion of patients on SSRIs experience sexual dysfunction, and what is the mechanism?","Between 30 and 70 per cent. The mechanism is stimulation of 5-HT2 receptors, with secondary reduction of dopaminergic tone and nitric oxide signalling."],
    ["Which antidepressants have the lowest burden of sexual dysfunction?","Mirtazapine, bupropion, agomelatine, moclobemide and vortioxetine."],
    ["How does hyperprolactinaemia affect sexual function?","It reduces desire, impairs erectile function, and causes amenorrhoea, galactorrhoea and, long term, reduced bone mineral density."]
  ],
  note:[
    "Always establish sexual function before starting an antidepressant, because depression itself impairs it and later attribution is otherwise impossible.",
    "Persistent post-SSRI sexual dysfunction after discontinuation is recognised by the MHRA and EMA; its frequency is not established.",
    "Priapism is a rare but urgent adverse effect of trazodone, mediated by alpha-1 blockade.",
    "Medroxyprogesterone and GnRH analogues are used in forensic settings for problematic sexual behaviour, with strict consent and ethical safeguards.",
    "ICD-11 classifies sexual dysfunctions and gender incongruence in the chapter on conditions related to sexual health, not among mental disorders."
  ],
  refs:["maudsley","noptp","icd11"] };

TEACH["3.5.1.4"] = { free:false,
  simple:"Aggression comes in two flavours and they are not the same illness. One is hot: a threat arrives, the alarm goes off, and the person lashes out before thinking. The other is cold: planned, purposeful, unemotional. They have different brain signatures, different prognoses and different treatments, and confusing them is a serious clinical error.",
  teach:[
    "Reactive or affective aggression: impulsive, emotional, provoked, with high autonomic arousal. Associated with amygdala hyperreactivity and reduced prefrontal, particularly ventromedial and orbitofrontal, regulation.",
    "Instrumental or proactive aggression: planned, goal-directed, low autonomic arousal. Associated with callous-unemotional traits and reduced amygdala responsiveness to distress cues, which is the opposite pattern.",
    "The circuit: amygdala generates the threat response; ventromedial and orbitofrontal cortex inhibit it; the hypothalamus and periaqueductal grey provide the output.",
    "Serotonin: low CSF 5-HIAA is associated with impulsive aggression, violence and suicide across several populations. This is one of the most replicated findings in biological psychiatry.",
    "Testosterone is associated with dominance behaviour rather than violence per se; the relationship is weaker and more contested than popularly assumed.",
    "Alcohol is the single most important pharmacological contributor, through disinhibition and impaired threat appraisal.",
    "Clinical translation: reactive aggression may respond to SSRIs, mood stabilisers, and treatment of the underlying disorder. Instrumental aggression with callous-unemotional traits responds poorly to medication and requires structured psychological and forensic management.",
    "Severe mental illness confers a modest increase in violence risk, substantially attenuated by accounting for substance misuse. Past violence remains the strongest single predictor."
  ],
  cards:[
    ["Distinguish reactive from instrumental aggression, including their neural correlates.","Reactive is impulsive, provoked and emotional, with amygdala hyperreactivity and reduced prefrontal control. Instrumental is planned, goal-directed and unemotional, associated with callous-unemotional traits and reduced amygdala response to distress cues."],
    ["Which neurochemical finding is most consistently associated with impulsive aggression?","Low cerebrospinal fluid 5-HIAA, the serotonin metabolite, associated with impulsive aggression, violence and suicide."],
    ["What is the strongest single predictor of future violence?","Past violence. Substance misuse is a stronger predictor than psychotic illness alone."]
  ],
  note:[
    "Intermittent explosive disorder in DSM-5 and ICD-11 describes recurrent failure to resist aggressive impulses out of proportion to provocation.",
    "The Kluver-Bucy syndrome and hypothalamic lesions demonstrate the anatomy in humans and animals.",
    "Command hallucinations increase risk chiefly when congruent with a delusional system and when the voice is believed powerful.",
    "Prone restraint is a medical event with medical consequences including positional asphyxia; the David Bennett and Seni Lewis inquiries followed restraint deaths.",
    "Section 12.1 of this syllabus covers the forensic dimension of the same material."
  ],
  refs:["agrawal","puriforen","noptp"] };

TEACH["3.5.1.5"] = { free:false,
  simple:"Pain is not a signal that arrives from an injury. It is a decision the brain makes about how much danger you are in, using the signal as one input among several. That is why the same injury hurts more when you are frightened, and why chronic pain can be entirely real with no ongoing damage anywhere.",
  teach:[
    "The ascending pathway: nociceptors, A-delta fibres for fast sharp pain and C fibres for slow burning pain, into the dorsal horn, decussating within one or two segments, ascending in the spinothalamic tract to thalamus and then to somatosensory cortex, insula and anterior cingulate.",
    "Lateral pain system, thalamus to somatosensory cortex, encodes location and intensity. Medial pain system, to anterior cingulate and insula, encodes the unpleasantness. This split explains why opioids and cingulotomy can leave pain present but no longer distressing.",
    "Gate control theory, Melzack and Wall 1965: large-fibre input in the dorsal horn inhibits transmission of nociceptive signals, and descending influences modulate the gate. This is why rubbing an injury helps and why psychological state changes pain.",
    "Descending modulation: periaqueductal grey to rostral ventromedial medulla to dorsal horn, using endogenous opioids, serotonin and noradrenaline. This is the anatomy behind the analgesic action of tricyclics and SNRIs at doses below their antidepressant range.",
    "Chronic pain involves central sensitisation, with NMDA-dependent wind-up in the dorsal horn, and reorganisation of cortical representation. Peripheral pathology may be absent.",
    "Comorbidity: depression is present in a large proportion of chronic pain patients, each worsening the other. Chronic pain is a significant suicide risk factor.",
    "Management: duloxetine and amitriptyline for neuropathic pain, gabapentin and pregabalin, and CBT or acceptance and commitment therapy for chronic pain. Long-term opioids for chronic non-cancer pain have poor evidence of benefit and clear evidence of harm.",
    "Opioid-induced hyperalgesia: prolonged opioid exposure can increase pain sensitivity, so escalating the dose makes matters worse."
  ],
  cards:[
    ["State gate control theory and name its authors.","Melzack and Wall, 1965: large-diameter afferent input in the dorsal horn inhibits transmission of nociceptive signals from small fibres, and descending supraspinal influences modulate this gate, so pain is not a simple function of tissue damage."],
    ["Which pathway underlies the analgesic effect of tricyclics and SNRIs?","The descending inhibitory pathway from periaqueductal grey through the rostral ventromedial medulla to the dorsal horn, using serotonin and noradrenaline. This is why analgesia occurs at doses below the antidepressant range."],
    ["What is opioid-induced hyperalgesia?","A paradoxical increase in pain sensitivity with prolonged opioid exposure, so that dose escalation worsens rather than relieves pain."]
  ],
  note:[
    "Anterior cingulate lesions reduce the unpleasantness of pain while leaving its detection intact, which was the rationale for cingulotomy.",
    "Placebo analgesia is opioid-mediated and is reversed by naloxone, which demonstrates a physiological mechanism rather than mere reporting bias.",
    "Phantom limb pain reflects cortical reorganisation; mirror therapy exploits the same plasticity.",
    "Chronic pain and depression share serotonergic and noradrenergic substrates, which is why duloxetine treats both.",
    "Syllabus item 7.3.4 covers the clinical and theoretical psychiatric aspects of pain in Paper B."
  ],
  refs:["agrawal","semliaison","nice"] };

TEACH["3.5.1.6"] = { free:false,
  simple:"Give somebody a drug that blocks dopamine and you will quiet the psychosis, but the same block reaches the circuit that steadies movement. Within hours a young man's neck may twist and his eyes roll upwards while he is fully awake inside it. That is not a tantrum and not a seizure, and it is fixed in minutes if you know what it is.",
  teach:[
    "Motor control has three components: the corticospinal system for execution, the basal ganglia for selection and scaling, and the cerebellum for coordination and error correction.",
    "Basal ganglia balance: D1 direct pathway facilitates movement, D2 indirect pathway inhibits it. D2 blockade shifts the balance towards inhibition, producing parkinsonism.",
    "Acute dystonia: hours to days. Sustained muscle contraction, torticollis, oculogyric crisis, laryngeal dystonia. Risk factors are young, male, high potency and rapid escalation. Treat with procyclidine 5 to 10 mg intramuscularly or intravenously, effective within minutes.",
    "Akathisia: days to weeks. Subjective inner restlessness with inability to keep still, worst in the legs, relieved by moving. Dose-related, and associated with suicidal ideation. Reduce dose or switch; propranolol has the best evidence; low-dose clonazepam is an alternative. Anticholinergics do not help.",
    "Parkinsonism: weeks to months. Bradykinesia, rigidity, and a coarse rest tremor. Reduce dose, switch, or add an anticholinergic.",
    "Tardive dyskinesia: months to years. Choreoathetoid movements, classically orofacial. Risk rises with age, female sex, duration, first-generation drugs and diabetes. Anticholinergics worsen it. Reduce or switch, ideally to clozapine; tetrabenazine and VMAT2 inhibitors are options.",
    "Neuroleptic malignant syndrome: hyperthermia, lead-pipe rigidity, autonomic instability, altered consciousness, very high creatine kinase. Onset over days, following dopamine blockade or abrupt dopamine withdrawal. Stop the drug, cool, rehydrate, monitor for rhabdomyolysis and renal failure; consider dantrolene, bromocriptine or lorazepam.",
    "Serotonin syndrome is the key differential: onset within hours, hyperreflexia and clonus rather than rigidity, particularly ocular and lower limb clonus, with diarrhoea and agitation."
  ],
  cards:[
    ["Give the four extrapyramidal syndromes with their time courses.","Acute dystonia within hours to days; akathisia within days to weeks; parkinsonism within weeks to months; tardive dyskinesia after months to years."],
    ["How is akathisia managed, and what does not work?","Reduce the dose or switch antipsychotic. Propranolol has the best evidence; low-dose clonazepam is an alternative. Anticholinergics are ineffective for akathisia, unlike for dystonia and parkinsonism."],
    ["Distinguish neuroleptic malignant syndrome from serotonin syndrome at the bedside.","NMS: onset over days, lead-pipe rigidity, hyporeflexia, bradykinesia, very high CK, following dopamine blockade or dopamine withdrawal. Serotonin syndrome: onset within hours, hyperreflexia and clonus especially ocular and lower limb, tremor, diarrhoea, following a serotonergic drug or dose increase."]
  ],
  note:[
    "Rating scales: AIMS for tardive dyskinesia, Barnes Akathisia Rating Scale, Simpson-Angus for parkinsonism.",
    "Around 80 per cent D2 occupancy is the usual threshold above which extrapyramidal effects appear; efficacy requires roughly 60 to 70 per cent.",
    "NMS mortality is around 10 per cent. Rechallenge is possible after at least two weeks, with a structurally different, lower-potency drug, at low dose with close monitoring.",
    "Severe neuroleptic sensitivity in dementia with Lewy bodies can be fatal and is a supportive diagnostic feature.",
    "Akathisia is frequently misread as agitation or as worsening psychosis, and the dose is then increased, which makes it worse. This is a recurring clinical trap."
  ],
  refs:["maudsley","stahl","agrawal"] };

TEACH["3.5.1.7"] = { free:false,
  simple:"Neurones that fire together wire together. Donald Hebb wrote that in 1949 without knowing the mechanism, and when the mechanism was found forty years later it turned out to be almost exactly what he described: a receptor that only opens when both sides are active at the same moment.",
  teach:[
    "Hebb's rule, 1949: when cell A repeatedly takes part in firing cell B, the efficiency of A in firing B increases.",
    "Long-term potentiation is the cellular form. High-frequency stimulation produces a lasting increase in synaptic strength. Calcium entry through the NMDA receptor initiates it; AMPA receptor insertion into the postsynaptic membrane maintains it.",
    "The NMDA receptor is a coincidence detector because it needs glutamate release from the presynaptic cell and depolarisation of the postsynaptic cell to expel the magnesium block. That is Hebb's rule in molecular form.",
    "Properties of LTP: cooperativity, requiring sufficient simultaneous input; associativity, a weak input potentiated when paired with a strong one; and input specificity.",
    "Late-phase LTP requires gene transcription and protein synthesis via CREB, which is why memory consolidation can be blocked by protein synthesis inhibitors.",
    "Long-term depression is the mirror process, weakening synapses with low-frequency stimulation. Both are needed; a system that only strengthens saturates.",
    "Learning taxonomy: associative learning by Hebbian adaptation; supervised learning with an external teaching signal; unsupervised learning extracting structure without feedback; reinforcement learning driven by reward prediction error, encoded by phasic dopamine.",
    "Clinical relevance: extinction in exposure therapy is new learning that inhibits the original memory rather than erasure, which is why fear returns with reinstatement, renewal in a new context, and spontaneous recovery."
  ],
  cards:[
    ["What initiates and what maintains long-term potentiation?","Calcium influx through the NMDA receptor initiates it. Insertion of AMPA receptors into the postsynaptic membrane maintains early LTP; late LTP requires gene transcription and protein synthesis."],
    ["Name the three properties of LTP.","Cooperativity, associativity and input specificity."],
    ["Why does fear return after successful exposure therapy?","Extinction is new inhibitory learning rather than erasure of the original association, so the original memory can re-emerge through reinstatement, renewal in a different context, or spontaneous recovery over time."]
  ],
  note:[
    "Hebb, The Organization of Behavior, 1949. LTP first described by Bliss and Lomo in 1973 in the rabbit dentate gyrus.",
    "Reconsolidation: retrieving a memory returns it to a labile state, offering a window in which it may be modified. Propranolol during reconsolidation has been studied in PTSD with mixed results.",
    "D-cycloserine, a partial NMDA agonist, has been trialled as an augmentation of exposure therapy on the basis of enhancing extinction learning.",
    "Ketamine's rapid antidepressant effect is attributed to AMPA throughput and mTOR-dependent synaptogenesis.",
    "Reinforcement learning and prediction error are covered from the computational side in syllabus item 3.1.4."
  ],
  refs:["agrawal","lynall","stahl"] };

TEACH["3.5.1.8"] = { free:false,
  simple:"A habit is a behaviour that has stopped asking why. At first you do something because of what it gets you. Repeat it enough and the situation itself pulls the behaviour out of you, regardless of the outcome. That shift, from goal to habit, is what makes both compulsions and addictions so hard to argue with.",
  teach:[
    "Goal-directed behaviour is sensitive to the value of the outcome. Habitual behaviour is stimulus-driven and persists even when the outcome is devalued. Outcome devaluation is the experimental test.",
    "Anatomically, the transition runs from ventral striatum and associative dorsomedial striatum, which support goal-directed action, to dorsolateral striatum, which supports habit.",
    "OCD circuit: the cortico-striato-thalamo-cortical loop, with orbitofrontal cortex, anterior cingulate, caudate and thalamus. Hyperactivity in this loop is one of the most replicated functional imaging findings in psychiatry, and it normalises with both SSRI treatment and CBT.",
    "The clinical distinction: an obsession is an intrusive thought recognised as one's own, resisted, and regarded as senseless. A compulsion is the behaviour performed to reduce the resulting anxiety. Compulsions are negatively reinforced by relief.",
    "OCD is increasingly conceptualised as excessive habit formation with impaired goal-directed control, which explains why patients often say they know it is pointless and do it anyway.",
    "Addiction follows the same logic: initial drug use is goal-directed and pleasurable, and becomes habitual and compulsive as control shifts dorsally. Wanting and liking dissociate.",
    "Treatment implication: exposure and response prevention works precisely by preventing the relief that reinforces the compulsion. Reassurance functions as a compulsion and maintains the disorder.",
    "Tourette syndrome and trichotillomania share circuit involvement, and habit reversal training is the behavioural treatment across this group."
  ],
  cards:[
    ["How is habitual behaviour distinguished experimentally from goal-directed behaviour?","By outcome devaluation. Goal-directed behaviour reduces when the outcome is devalued; habitual behaviour persists regardless."],
    ["Describe the circuit implicated in OCD.","The cortico-striato-thalamo-cortical loop involving orbitofrontal cortex, anterior cingulate, caudate and thalamus, showing hyperactivity that normalises with successful SSRI or CBT treatment."],
    ["Why is reassurance a maintaining factor in OCD?","It functions as a compulsion: it reduces anxiety in the short term through negative reinforcement, prevents disconfirmation of the feared belief, and strengthens the cycle overall."]
  ],
  note:[
    "Deep brain stimulation of the ventral capsule and ventral striatum is used in severely refractory OCD.",
    "OCD requires higher SSRI doses and longer trials, at least twelve weeks, than depression.",
    "Clomipramine remains effective and is used where SSRIs fail; augmentation with low-dose antipsychotic helps a subgroup, particularly with tics.",
    "PANDAS, paediatric autoimmune neuropsychiatric disorders associated with streptococcal infection, is a proposed and contested aetiology in some children.",
    "ICD-11 groups body dysmorphic disorder, hoarding, trichotillomania and excoriation disorder with OCD as obsessive-compulsive and related disorders."
  ],
  refs:["agrawal","nice","noptp"] };

TEACH["3.5.1.9"] = { free:true,
  simple:"There is a difference between wanting something and enjoying it, and the brain keeps them in different places. In addiction the wanting grows enormous while the enjoying fades, which is why people describe chasing a feeling they no longer get. Nobody is choosing that.",
  teach:[
    "The reward circuit: ventral tegmental area to nucleus accumbens, with amygdala, hippocampus, orbitofrontal and anterior cingulate cortex, and ventral pallidum as output.",
    "Dopamine encodes reward prediction error, not pleasure. It fires to unexpected reward, falls silent when reward is fully predicted, and dips when expected reward is omitted. It transfers to the cue that predicts reward, which is why cues drive craving.",
    "Wanting and liking are dissociable, Berridge and Robinson. Dopamine mediates incentive salience, the wanting. Hedonic pleasure, the liking, is mediated by opioid and endocannabinoid hedonic hotspots. In addiction, wanting sensitises while liking does not.",
    "Anhedonia in depression maps onto reduced reward anticipation more than reduced consummatory pleasure, and is associated with blunted ventral striatal response to reward.",
    "Psychosis: aberrant salience, Kapur. Dysregulated dopamine assigns significance to irrelevant stimuli, and the delusion is the explanation the person constructs for that experience. This unites the pharmacology with the phenomenology.",
    "Emotional instability in borderline personality disorder involves altered reward and threat processing with reduced prefrontal regulation of amygdala responses.",
    "Clinical translation: negative symptoms and depressive anhedonia are motivational deficits with a circuit basis, not laziness, and they respond poorly to D2 blockade because D2 blockade is part of the problem in mesocortical projections.",
    "Behavioural addictions, gambling and gaming, engage the same circuit, which is why ICD-11 recognises gambling and gaming disorder as disorders due to addictive behaviours."
  ],
  cards:[
    ["What does phasic dopamine firing actually encode?","Reward prediction error: the difference between reward received and reward expected. It transfers over learning from the reward itself to the cue that predicts it."],
    ["Distinguish wanting from liking and say what happens in addiction.","Wanting is incentive salience, mediated by mesolimbic dopamine. Liking is hedonic pleasure, mediated by opioid and endocannabinoid hotspots. In addiction wanting sensitises while liking does not, producing intense craving without corresponding pleasure."],
    ["State the aberrant salience hypothesis of psychosis.","Kapur: dysregulated dopamine release assigns motivational significance to stimuli that do not merit it. The delusion is a cognitive explanation the person constructs for this abnormal experience of significance."]
  ],
  note:[
    "Kapur, Psychosis as a state of aberrant salience, American Journal of Psychiatry, 2003.",
    "Dopamine agonists in Parkinson's disease cause impulse control disorders, gambling, hypersexuality and compulsive shopping, in a substantial minority. This is a direct human demonstration of the circuit.",
    "Ventral striatal reward anticipation is blunted in depression and in schizophrenia with prominent negative symptoms.",
    "Contingency management, which pays for verified abstinence, has the strongest evidence in stimulant dependence and works directly on this circuit.",
    "Anhedonia is a transdiagnostic construct and is a Research Domain Criteria target."
  ],
  refs:["stahl","agrawal","semaddict"] };

TEACH["3.5.1.10"] = { free:false,
  simple:"Feeling something and managing what you feel are two different jobs done by two different parts of the brain, and they are connected by a cable. When the cable is weak, the feeling wins. That is the shape of most emotional dysregulation you will meet, whatever diagnosis is written above the bed.",
  teach:[
    "Generation: the amygdala evaluates salience and threat, with input from a fast subcortical thalamic route and a slower cortical route. Insula supports interoception, the sense of the body's internal state.",
    "Regulation: ventromedial and dorsolateral prefrontal cortex and anterior cingulate exert top-down control over the amygdala. The strength of this connectivity predicts regulatory capacity.",
    "Gross's process model of emotion regulation: situation selection, situation modification, attentional deployment, cognitive change or reappraisal, and response modulation. Reappraisal is more effective and less costly than suppression.",
    "Suppression reduces expression without reducing the internal experience, increases physiological arousal, and impairs memory for the event. It is the strategy patients most often use and the least effective one.",
    "Depression: reduced prefrontal regulation with amygdala hyperreactivity to negative stimuli, and reduced ventral striatal response to reward. Mood-congruent processing bias maintains the state.",
    "PTSD: amygdala hyperreactivity, reduced ventromedial prefrontal regulation, and impaired extinction of conditioned fear, with hippocampal volume reduction.",
    "Borderline personality disorder: heightened emotional reactivity, slower return to baseline, and reduced prefrontal-amygdala connectivity. This is exactly what dialectical behaviour therapy targets with distress tolerance and emotion regulation skills.",
    "Psychosis: incongruity and blunting of affect, and difficulty in recognising emotional expression in others, which contributes to social impairment."
  ],
  cards:[
    ["Name Gross's five families of emotion regulation strategy.","Situation selection, situation modification, attentional deployment, cognitive change (reappraisal), and response modulation (including suppression)."],
    ["Why is suppression a poor regulation strategy?","It reduces outward expression without reducing subjective experience, increases sympathetic arousal, impairs memory for the event, and is associated with worse social and mental health outcomes than reappraisal."],
    ["Describe the neural pattern in borderline personality disorder emotional instability.","Heightened amygdala reactivity with delayed return to baseline, and reduced ventromedial prefrontal regulation and prefrontal-amygdala connectivity."]
  ],
  note:[
    "Reappraisal recruits dorsolateral and ventrolateral prefrontal cortex and reduces amygdala activity; this is the neural signature of a core CBT technique.",
    "Interoceptive accuracy relates to insula function and is altered in anxiety, eating disorders and somatic symptom disorders.",
    "Alexithymia is associated with somatisation and with reduced anterior cingulate and insula response.",
    "Emotion regulation is a transdiagnostic target and appears in the Research Domain Criteria negative valence and cognitive systems domains.",
    "Item 2.10 covers the developmental acquisition of emotion regulation."
  ],
  refs:["agrawal","gabbard","noptp"] };

TEACH["3.5.1.11"] = { free:false,
  simple:"Perception is a guess your brain makes and then checks. Most of the time the check passes and you never notice the guessing. Turn the sensory input down, as deafness or blindness does, and the guessing carries on unchecked. That is why a person who is going deaf may start hearing things, and it is not the same as going mad.",
  teach:[
    "Visual pathway: retina, optic nerve, chiasm, optic tract, lateral geniculate nucleus, optic radiation, primary visual cortex. Then the dorsal where stream to parietal cortex and the ventral what stream to temporal cortex.",
    "Auditory pathway: cochlea, cochlear nuclei, superior olive, lateral lemniscus, inferior colliculus, medial geniculate nucleus, primary auditory cortex in Heschl's gyrus.",
    "Predictive processing: perception combines prior expectation with sensory evidence, each weighted by precision. Overweighting priors relative to sensory input produces percepts driven by expectation.",
    "This gives a unified account of deafferentation hallucinations: Charles Bonnet syndrome with visual loss, musical hallucinosis with deafness, and phantom limb with amputation. Reduce the evidence and the prior dominates.",
    "Auditory verbal hallucinations in schizophrenia: activation of auditory cortex during hallucination, and impaired source monitoring, so inner speech is misattributed to an external source. Reduced corollary discharge is the mechanistic account.",
    "Visual hallucinations should raise the question of an organic cause: delirium, Lewy body disease, occipital lesion, epilepsy, or substance intoxication or withdrawal. They are less typical of schizophrenia.",
    "Agnosias localise: prosopagnosia to fusiform gyrus, visual object agnosia to ventral stream, simultanagnosia to bilateral parieto-occipital regions in Balint syndrome.",
    "Descriptive psychopathology to keep straight: illusion, misperception of a real stimulus; hallucination, percept without stimulus, in external space, with the force of a real perception; pseudohallucination, in inner subjective space with insight."
  ],
  cards:[
    ["Explain deafferentation hallucinations using predictive processing.","When sensory input is degraded, its precision falls and top-down prior expectation dominates the inference, producing percepts generated by expectation rather than by the world. This underlies Charles Bonnet syndrome, musical hallucinosis with deafness and phantom limb."],
    ["What is the source monitoring account of auditory verbal hallucinations?","Inner speech is misattributed to an external source because of failure of corollary discharge, the internal signal that normally tags self-generated activity as one's own."],
    ["Which hallucination modality should prompt a search for organic cause?","Visual hallucinations, which suggest delirium, Lewy body disease, occipital pathology, epilepsy or substance intoxication or withdrawal, rather than schizophrenia."]
  ],
  note:[
    "Charles Bonnet syndrome: complex visual hallucinations with visual impairment and preserved insight, and no psychiatric illness.",
    "Musical hallucinosis is associated with acquired deafness, particularly in older women.",
    "Peduncular hallucinosis follows midbrain or thalamic lesions and produces vivid visual hallucinations, often with insight.",
    "Functional, reflex and extracampine hallucinations are the examinable rarer forms.",
    "Item 5.2.2.4, disorders of perception, covers the descriptive psychopathology in detail."
  ],
  refs:["agrawal","oyebode","lishman"] };

TEACH["3.5.1.12"] = { free:true,
  simple:"Attention is a doorman, and in ADHD the doorman is not asleep. He is being pulled in six directions at once and cannot decide who to let in. That is why the same child can be unable to sit through five minutes of maths and lose four hours to something absorbing. It is not a shortage of attention, it is a failure to regulate where it goes.",
  teach:[
    "Attention networks, Posner: alerting, orienting, and executive control. ADHD affects the executive control network most consistently.",
    "The circuit: prefrontal cortex, particularly dorsolateral and inferior frontal, with striatum, and the fronto-striato-cerebellar loops. Reduced volume and activity are reported in these regions.",
    "Neurochemistry: dopamine and noradrenaline. Catecholamine signalling in prefrontal cortex follows an inverted U, so both too little and too much impair function. This is why stimulants improve attention at optimal doses and impair it at high ones.",
    "Stimulants: methylphenidate blocks the dopamine and noradrenaline transporters. Amphetamines additionally reverse the transporters and release stored transmitter.",
    "Non-stimulants: atomoxetine is a selective noradrenaline reuptake inhibitor; guanfacine is an alpha-2A adrenoceptor agonist strengthening prefrontal network connectivity.",
    "Neurodevelopment: Shaw's work showed delayed rather than deviant cortical maturation, with peak cortical thickness reached around three years later than in controls, most marked in prefrontal regions.",
    "Executive deficits are not universal in ADHD, and no cognitive test diagnoses it. Diagnosis is clinical, requiring symptoms before age 12, in two or more settings, with functional impairment.",
    "The Continuous Performance Test measures sustained attention and is impaired in both ADHD and schizophrenia, which limits its diagnostic specificity."
  ],
  cards:[
    ["Name Posner's three attention networks and say which is most affected in ADHD.","Alerting, orienting and executive control. The executive control network is most consistently affected."],
    ["Explain the inverted U relationship for catecholamines in prefrontal cortex.","Prefrontal function is optimal at moderate dopamine and noradrenaline levels and impaired by both too little and too much, which is why stimulants improve attention at therapeutic doses and impair it at excessive ones."],
    ["What did Shaw's neuroimaging work show in ADHD?","Delayed rather than deviant cortical maturation, with peak cortical thickness attained around three years later than in controls, most marked in prefrontal cortex."]
  ],
  note:[
    "ADHD prevalence around 5 per cent in children and 2.5 per cent in adults; around two thirds have persisting symptoms into adulthood. Heritability is around 70 to 80 per cent.",
    "Stimulant monitoring: height, weight, pulse and blood pressure. Growth suppression, appetite loss and insomnia are the common adverse effects.",
    "Untreated ADHD is associated with increased risk of substance misuse; treatment does not increase and may reduce it.",
    "NICE: parent training first in children under five and alongside medication thereafter; methylphenidate first-line medication in children, methylphenidate or lisdexamfetamine in adults.",
    "Item 3.9.2 covers the integrated neurobiology of ADHD."
  ],
  refs:["agrawal","rutter","nice"] };

TEACH["3.5.1.13"] = { free:false,
  simple:"In dementia the problem is putting memories in. In post-traumatic stress disorder the problem is that one memory will not stay in. Both are memory disorders and they are almost opposite, and treating one as though it were the other is how people get hurt.",
  teach:[
    "Systems: hippocampus and medial temporal lobe for encoding and consolidation of episodic memory; temporal neocortex for semantic memory; striatum and cerebellum for procedural memory; prefrontal cortex for working memory and retrieval strategy.",
    "Consolidation transfers memory from hippocampal dependence to distributed neocortical storage over time, which is why remote memory survives hippocampal damage and recent memory does not. This is Ribot's law, the temporal gradient of retrograde amnesia.",
    "Alzheimer's disease: earliest pathology in entorhinal cortex and hippocampus, producing an encoding deficit. Cueing does not help and recognition is impaired, which distinguishes it from the retrieval deficit of normal ageing and of depression.",
    "Korsakoff syndrome: mammillary bodies and dorsomedial thalamus, with anterograde amnesia and confabulation. Confabulation is not lying and requires no intent to deceive.",
    "PTSD: an over-consolidated, sensory, involuntarily retrieved trauma memory that is poorly integrated into autobiographical context, alongside impaired extinction. Hippocampal volume is reduced, and the direction of causation is contested.",
    "Ehlers and Clark's model: the trauma memory is poorly elaborated and contextualised, so retrieval is cue-driven and experienced with a sense of current threat. This is the model behind trauma-focused CBT.",
    "Reconsolidation: retrieving a memory returns it briefly to a modifiable state. This is the theoretical basis of reconsolidation-blockade research in PTSD.",
    "Overgeneral autobiographical memory is characteristic of depression and PTSD and predicts poorer outcome.",
    "Dissociative amnesia is loss of autobiographical memory for stressful material, out of proportion to any organic cause, with intact new learning, which is the reverse of the organic pattern."
  ],
  cards:[
    ["How does the memory deficit in Alzheimer's disease differ from that of normal ageing or depression?","Alzheimer's disease produces an encoding and storage deficit, so cueing does not help and recognition is impaired. Normal ageing and depressive pseudodementia produce a retrieval deficit, in which cueing helps and recognition is preserved."],
    ["What is Ribot's law?","Retrograde amnesia shows a temporal gradient in which recent memories are lost preferentially and remote memories are relatively preserved, reflecting progressive consolidation away from hippocampal dependence."],
    ["Summarise the Ehlers and Clark model of PTSD.","The trauma memory is poorly elaborated and inadequately contextualised in autobiographical memory, producing cue-driven involuntary retrieval experienced with a sense of current threat, maintained by negative appraisals and by avoidance and other unhelpful coping strategies."]
  ],
  note:[
    "Transient global amnesia: abrupt isolated anterograde amnesia lasting under 24 hours with repetitive questioning, preserved personal identity, and full recovery.",
    "ECT causes retrograde and anterograde memory disturbance; bitemporal placement is more effective and more cognitively costly than right unilateral.",
    "Benzodiazepines cause anterograde amnesia through alpha-1 GABA-A subunits.",
    "Trauma-focused CBT and EMDR are the recommended psychological treatments for PTSD; single-session debriefing is not recommended and may be harmful.",
    "Item 3.9.5 covers the integrated neurobiology of PTSD."
  ],
  refs:["agrawal","lishman","nice"] };

TEACH["3.5.1.14"] = { free:false,
  simple:"Executive function is the part of you that says not yet. It plans, holds a goal steady while you get distracted, changes tack when the rules change, and stops you saying the thing. When the front of the brain underperforms, none of those work, and the person looks careless rather than ill.",
  teach:[
    "Components: working memory, inhibition, set-shifting, planning, fluency, and monitoring. Miyake's model reduces these to updating, inhibition and shifting.",
    "Anatomy: dorsolateral prefrontal cortex for working memory and set-shifting; inferior frontal gyrus and pre-supplementary motor area for response inhibition; anterior cingulate for conflict monitoring and error detection; orbitofrontal for value-based and reversal learning.",
    "Hypofrontality: reduced dorsolateral prefrontal activation during executive tasks in schizophrenia. The finding is better described as inefficiency, since patients may show greater activation for equivalent performance at low load and less at high load.",
    "Impulsivity is not one thing. Motor impulsivity is failure to stop a prepotent response, tested by go/no-go and stop-signal tasks. Choice impulsivity is preference for smaller sooner rewards, tested by delay discounting. Reflection impulsivity is deciding on insufficient evidence, tested by the beads task and associated with jumping to conclusions in delusions.",
    "Steeper delay discounting is found in addiction, ADHD and antisocial personality disorder.",
    "Jumping to conclusions, requiring less evidence before deciding, is one of the most replicated reasoning biases in delusional disorder and is a target in CBT for psychosis.",
    "Bedside testing: verbal fluency, Luria three-step, alternating sequences, go/no-go, cognitive estimates, proverb interpretation. The Frontal Assessment Battery packages these.",
    "Clinical importance: executive impairment predicts functional outcome in schizophrenia better than positive symptoms do, and executive impairment in dementia predicts loss of independence better than memory scores."
  ],
  cards:[
    ["Name three forms of impulsivity and the task that measures each.","Motor impulsivity, measured by go/no-go and stop-signal tasks. Choice impulsivity, measured by delay discounting. Reflection impulsivity, measured by the beads task."],
    ["What is the jumping to conclusions bias and where does it matter?","A tendency to reach a decision on less evidence than controls, demonstrated on the beads task. It is one of the most replicated reasoning biases in delusional thinking and is a target of CBT for psychosis."],
    ["Which predicts functional outcome in schizophrenia better, positive symptoms or cognitive impairment?","Cognitive impairment, particularly executive function and processing speed, predicts functional outcome considerably better than positive symptoms."]
  ],
  note:[
    "Hypofrontality is best described as prefrontal inefficiency rather than simple underactivity.",
    "The Wisconsin Card Sorting Test measures set-shifting; the Stroop measures response inhibition; Trail Making B measures shifting and processing speed.",
    "Cognitive impairment in schizophrenia is present before onset, persists in remission, and is found to a lesser degree in unaffected relatives.",
    "No available drug reliably improves cognition in schizophrenia; cognitive remediation therapy has modest evidence with better durability when combined with rehabilitation.",
    "Executive dysfunction in vascular depression predicts poorer antidepressant response."
  ],
  refs:["agrawal","lynall","semgen"] };

TEACH["3.5.1.15"] = { free:false,
  simple:"There are two ways to know what somebody else is feeling. You can work it out, which is cold and deliberate, or you can feel a version of it yourself, which is automatic. Autism affects the first more than the second. Psychopathy affects the second more than the first, which is why a person can read you perfectly and not care at all.",
  teach:[
    "Cognitive empathy, or theory of mind, is inferring another's mental states. Affective empathy is sharing another's emotional state. They are dissociable, anatomically and clinically.",
    "Theory of mind network: temporoparietal junction, medial prefrontal cortex, superior temporal sulcus, and temporal poles.",
    "Affective empathy network: anterior insula and anterior cingulate, overlapping with the regions active during one's own experience of the emotion.",
    "Development: false belief tasks such as Sally-Anne are passed around four. Second-order theory of mind, thinking about what one person thinks another thinks, develops around six to seven.",
    "Autism: cognitive empathy is impaired while affective empathy is relatively preserved. People with autism often care a great deal and misread the signal. The double empathy problem points out that the misreading is mutual rather than one-sided.",
    "Psychopathy and dissocial personality: affective empathy is reduced while cognitive empathy is intact or superior, which is what permits manipulation. Reduced amygdala response to distress cues, particularly fearful faces, is the replicated finding.",
    "Callous-unemotional traits in children mark this subgroup, predict persistent antisocial behaviour, and respond poorly to standard parenting interventions.",
    "Schizophrenia shows theory of mind impairment that correlates with negative symptoms and with functional outcome.",
    "Mentalisation, Fonagy and Bateman, is the clinical extension of these ideas, and mentalisation-based treatment has trial evidence in borderline personality disorder."
  ],
  cards:[
    ["Distinguish cognitive from affective empathy and give a disorder characterised by impairment of each.","Cognitive empathy is inferring others' mental states, impaired in autism. Affective empathy is sharing others' emotional states, reduced in psychopathy while cognitive empathy remains intact."],
    ["Name the regions of the theory of mind network.","Temporoparietal junction, medial prefrontal cortex, superior temporal sulcus and temporal poles."],
    ["What is the double empathy problem?","Milton's proposal that the difficulty in mutual understanding between autistic and non-autistic people is bidirectional rather than a one-sided deficit in the autistic person."]
  ],
  note:[
    "Sally-Anne task passed around four years; the Smarties or unexpected contents task tests the same capacity.",
    "The Reading the Mind in the Eyes test is a widely used measure of advanced theory of mind.",
    "Reduced amygdala response to fearful faces is the most replicated finding in psychopathy, and it is the reverse of the pattern in reactive aggression.",
    "Alexithymia frequently co-occurs with autism and may account for part of the empathy findings attributed to autism itself.",
    "Item 3.9.1 covers the integrated neurobiology of autism."
  ],
  refs:["agrawal","rutter","puriforen"] };

TEACH["3.5.2"] = { free:false,
  simple:"When you stop doing anything in particular, your brain does not switch off. A specific network comes on: the one that daydreams, remembers, imagines the future and thinks about yourself. Another network watches for anything important enough to interrupt it. In several illnesses, the switching between the two goes wrong.",
  teach:[
    "The default mode network comprises medial prefrontal cortex, posterior cingulate and precuneus, angular gyrus, and medial temporal lobe. It is active at rest and deactivates during externally focused tasks.",
    "Its functions are self-referential thought, autobiographical memory, prospection, and mentalising.",
    "The salience network comprises anterior insula and dorsal anterior cingulate. It detects behaviourally significant stimuli and switches between the default mode network and the central executive network.",
    "The central executive or frontoparietal network comprises dorsolateral prefrontal and posterior parietal cortex and supports externally directed goal-based cognition.",
    "The triple network model, Menon: psychopathology arises from aberrant switching between these three, driven by salience network dysfunction.",
    "Schizophrenia: failure to deactivate the default mode network during tasks, and aberrant salience attribution, linking the network account to Kapur's model and to the dopamine hypothesis.",
    "Depression: default mode network hyperconnectivity, particularly involving subgenual cingulate, correlating with rumination. This is a neural correlate of a core symptom.",
    "The default mode network consolidates across childhood and adolescence and is altered in autism and ADHD.",
    "Psychedelics and ketamine acutely reduce default mode network integrity, which is a leading account of ego dissolution and is under study as a therapeutic mechanism."
  ],
  cards:[
    ["Name the regions of the default mode network and its functions.","Medial prefrontal cortex, posterior cingulate and precuneus, angular gyrus and medial temporal lobe. It supports self-referential thought, autobiographical memory, prospection and mentalising, and deactivates during externally focused tasks."],
    ["What does the salience network do, and which regions comprise it?","Anterior insula and dorsal anterior cingulate. It detects behaviourally salient stimuli and switches between the default mode and central executive networks."],
    ["What is the default mode network abnormality associated with rumination in depression?","Hyperconnectivity within the default mode network, particularly involving the subgenual anterior cingulate, correlating with the severity of rumination."]
  ],
  note:[
    "Raichle described the default mode network in 2001 from the consistent task-related deactivations seen across PET and fMRI studies.",
    "Subgenual cingulate, Brodmann area 25, is the deep brain stimulation target in treatment-resistant depression.",
    "Resting-state fMRI requires no task, which makes it usable in patients unable to comply with cognitive paradigms.",
    "Menon's triple network model is the most examinable framework here.",
    "Network findings are group-level statistical differences and have no individual diagnostic value."
  ],
  refs:["lynall","agrawal"] };

/* ---------------- 3.6 MODULATORS ---------------- */

TEACH["3.6.1"] = { free:true,
  simple:"The hypothalamus is the brain's control panel for the body's hormones. It sends short chemical orders down a private blood supply to the pituitary just below it, and the pituitary passes the message on to the thyroid, the adrenals, the gonads and the breast. Break any link in that chain and psychiatric symptoms are often the first thing anybody notices.",
  teach:[
    "The hypothalamus releases hormones into the hypophyseal portal system, a private capillary network to the anterior pituitary. This is a vascular link, not a neural one.",
    "The releasing factors: CRH drives ACTH; TRH drives TSH and prolactin; GnRH drives LH and FSH; GHRH drives growth hormone, opposed by somatostatin; dopamine tonically inhibits prolactin.",
    "Prolactin is the exception in being under tonic inhibition rather than stimulation. Block dopamine and prolactin rises. This one fact explains antipsychotic hyperprolactinaemia entirely.",
    "The posterior pituitary is neural, not vascular. Oxytocin and vasopressin are synthesised in the paraventricular and supraoptic nuclei and transported down axons for release.",
    "Feedback: long loop from the target gland hormone back to hypothalamus and pituitary; short loop from the pituitary hormone back to hypothalamus.",
    "Clinical translation: hypothyroidism presents as depression with fatigue and cognitive slowing; hyperthyroidism as anxiety, and in older people as apathetic depression. Check thyroid function in every new mood presentation.",
    "Cushing's syndrome produces depression in a majority and sometimes psychosis or mania, particularly with exogenous steroids. Addison's disease produces depression, apathy and fatigue.",
    "Vasopressin and SIADH: hyponatraemia from SSRIs, carbamazepine or antipsychotics presents as confusion, drowsiness and seizures, and is commonest in older women in the first month of treatment."
  ],
  cards:[
    ["Which anterior pituitary hormone is under tonic inhibition, and by what?","Prolactin, tonically inhibited by dopamine from the tuberoinfundibular pathway. Dopamine blockade therefore raises prolactin."],
    ["How does the hypothalamus communicate with the anterior and posterior pituitary?","With the anterior pituitary through the hypophyseal portal blood system, a vascular link carrying releasing factors. With the posterior pituitary through direct neuronal projections from the paraventricular and supraoptic nuclei."],
    ["Which endocrine disorders most commonly present psychiatrically?","Hypothyroidism as depression with fatigue and cognitive slowing; hyperthyroidism as anxiety or, in older people, apathetic depression; Cushing's syndrome as depression, sometimes psychosis or mania; Addison's disease as depression and fatigue."]
  ],
  note:[
    "Lithium causes hypothyroidism in up to 20 per cent, and hyperparathyroidism with hypercalcaemia. Check thyroid, calcium and renal function every six months.",
    "Antipsychotics most likely to raise prolactin: amisulpride, risperidone, paliperidone and first-generation drugs. Least: aripiprazole, quetiapine, clozapine.",
    "Sustained hyperprolactinaemia causes galactorrhoea, amenorrhoea, sexual dysfunction and reduced bone mineral density.",
    "A prolactin above 2000 mIU/L, or above roughly 5000, warrants pituitary imaging to exclude a prolactinoma rather than assuming a drug cause.",
    "Growth hormone response to clonidine is a research probe of noradrenergic function."
  ],
  refs:["agrawal","maudsley","maudphys"] };

TEACH["3.6.2"] = { free:true,
  simple:"Stress is a cascade with a brake on it. The hypothalamus shouts, the pituitary passes it on, the adrenal releases cortisol, and the cortisol goes back and tells the first two to stop. In long-term depression the brake works badly, which is what the old dexamethasone test was trying to demonstrate.",
  teach:[
    "The HPA axis: CRH from the paraventricular nucleus, ACTH from the anterior pituitary, cortisol from the adrenal cortex, with negative feedback at pituitary, hypothalamus and hippocampus.",
    "Cortisol has a diurnal rhythm, peaking shortly after waking, the cortisol awakening response, and reaching its trough around midnight.",
    "Two receptor types: mineralocorticoid receptors, high affinity, occupied at basal levels and mediating tonic feedback; glucocorticoid receptors, lower affinity, occupied at stress levels and mediating the shutdown.",
    "In melancholic depression there is hypercortisolaemia, blunted diurnal variation and impaired feedback. Around half of patients with melancholic depression fail to suppress on the dexamethasone suppression test. Sensitivity is too low for diagnostic use.",
    "Glucocorticoid receptor resistance is the leading mechanism, with reduced sensitivity to feedback rather than absent feedback.",
    "Effects of glucocorticoids: catabolic, immunosuppressive, hyperglycaemic. In the brain, prolonged elevation is associated with hippocampal dendritic atrophy and reduced neurogenesis, and impairs declarative memory.",
    "Steroid psychiatry: exogenous corticosteroids commonly cause euphoria, insomnia and irritability, and at higher doses mania or psychosis. Depression is commoner with chronic use.",
    "PTSD is the exception to the pattern: cortisol is typically low or normal with enhanced negative feedback, the opposite of melancholic depression.",
    "Early life adversity produces long-lasting HPA changes, a leading mechanism linking childhood maltreatment to adult psychiatric disorder."
  ],
  cards:[
    ["Describe the HPA axis and the site of negative feedback.","CRH from the hypothalamic paraventricular nucleus stimulates ACTH from the anterior pituitary, which stimulates cortisol from the adrenal cortex. Cortisol feeds back negatively at the pituitary, hypothalamus and hippocampus."],
    ["What is dexamethasone non-suppression and how useful is it?","Failure of dexamethasone to suppress cortisol, found in around half of patients with melancholic depression. Sensitivity and specificity are too low for diagnostic use."],
    ["How does the HPA axis differ in PTSD compared with melancholic depression?","In PTSD cortisol is typically low or normal with enhanced glucocorticoid negative feedback. In melancholic depression cortisol is elevated with impaired feedback."]
  ],
  note:[
    "The cortisol awakening response is the rise of 50 to 75 per cent in the 30 to 45 minutes after waking.",
    "Prolonged hypercortisolaemia is associated with hippocampal volume reduction, contributing to memory impairment in depression and Cushing's syndrome.",
    "Steroid-induced psychiatric effects are dose-related; risk rises markedly above about 40 mg prednisolone daily.",
    "Mifepristone and other glucocorticoid receptor antagonists have been trialled in psychotic depression with inconsistent results.",
    "Allostatic load describes the cumulative physiological cost of chronic stress across systems."
  ],
  refs:["agrawal","noptp","semliaison"] };

TEACH["3.6.3"] = { free:false,
  simple:"Hormones do not simply respond to mood, they help produce it. That is why a thyroid blood test belongs in the first set of investigations for depression, and why missing it means treating an endocrine disease with an antidepressant for months.",
  teach:[
    "Depression: hypercortisolaemia with impaired feedback in melancholic subtypes; blunted TSH response to TRH in around a quarter; reduced growth hormone response to clonidine; and reduced nocturnal melatonin.",
    "Bipolar disorder: hypothyroidism is associated with rapid cycling and is commoner on lithium. Check thyroid function before and during lithium treatment.",
    "Schizophrenia: hyperprolactinaemia is chiefly iatrogenic, though modest elevation is reported in drug-naive patients. Metabolic syndrome is partly drug-induced and partly intrinsic to the illness, with impaired glucose tolerance described before antipsychotic exposure.",
    "Anorexia nervosa: a coherent endocrine picture of starvation. Low LH, FSH and oestrogen with amenorrhoea; raised cortisol; raised growth hormone with low IGF-1; low leptin; and a sick euthyroid picture with low T3. All reverse with weight restoration.",
    "Premenstrual dysphoric disorder, perimenopausal depression and postpartum illness reflect sensitivity to hormonal change rather than abnormal absolute levels.",
    "Testosterone falls with age and with opioid use, producing fatigue, low mood and reduced libido; opioid-induced hypogonadism is under-recognised.",
    "Practical rule: investigate thyroid function in every new mood presentation, and consider cortisol, calcium, glucose and, where indicated, prolactin and sex hormones."
  ],
  cards:[
    ["Describe the endocrine profile of anorexia nervosa.","Low LH, FSH and oestrogen with amenorrhoea; elevated cortisol; elevated growth hormone with low IGF-1; low leptin; sick euthyroid picture with low T3. All normalise with weight restoration."],
    ["Which endocrine abnormality is associated with rapid-cycling bipolar disorder?","Hypothyroidism, which is also commoner in patients treated with lithium."],
    ["Is hyperprolactinaemia in schizophrenia primary or iatrogenic?","Predominantly iatrogenic, from D2 blockade. Modest elevations have been reported in antipsychotic-naive patients, but drug effect accounts for the great majority."]
  ],
  note:[
    "Sick euthyroid syndrome, low T3 with normal or low TSH, occurs in any severe systemic illness and should not be treated as hypothyroidism.",
    "Impaired glucose tolerance has been described in antipsychotic-naive first-episode psychosis, suggesting a contribution intrinsic to the illness.",
    "Thyroid augmentation with liothyronine is an option in treatment-resistant depression.",
    "Opioid-induced hypogonadism affects a substantial proportion of long-term opioid users and is frequently missed.",
    "Osteoporosis risk rises with prolonged hyperprolactinaemia and with prolonged amenorrhoea in anorexia nervosa."
  ],
  refs:["maudphys","noptp","oxoldage"] };

TEACH["3.6.4"] = { free:false,
  simple:"When you have flu you do not just feel ill in your body. You withdraw, lose interest, sleep badly and cannot concentrate, which is a fair description of depression. That overlap is not a coincidence: the immune system talks directly to the brain, and it uses some of the same language.",
  teach:[
    "Sickness behaviour, produced by inflammatory cytokines, comprises social withdrawal, anhedonia, fatigue, anorexia, reduced concentration and altered sleep. It is adaptive in acute illness and overlaps substantially with depression.",
    "Cytokines reach the brain through circumventricular organs lacking a blood-brain barrier, by active transport, via vagal afferents, and by acting on cerebral endothelium.",
    "Depression is associated with modest elevation of IL-6, TNF-alpha and CRP in a subgroup of patients, roughly a quarter to a third, rather than in everyone.",
    "Causal evidence: interferon-alpha treatment for hepatitis C causes depression in a substantial minority, and the antidepressant prophylaxis literature followed from this. Experimental endotoxin administration produces low mood and social withdrawal in healthy volunteers.",
    "Mechanisms: the kynurenine pathway diverts tryptophan away from serotonin synthesis and towards quinolinic acid, an NMDA agonist and neurotoxin. Inflammation also reduces BDNF and impairs neurogenesis.",
    "Microglia are the resident immune cells and prune synapses in development. Complement component 4, the strongest genetic signal in schizophrenia, is involved in this pruning, linking immune genes to a developmental mechanism.",
    "Maternal immune activation during pregnancy is associated with increased offspring risk of schizophrenia and autism, and is a well-established animal model.",
    "Autoimmune encephalitis, particularly anti-NMDA receptor encephalitis, presents psychiatrically and is treatable. Young person, rapid onset psychosis, then seizures, movement disorder and autonomic instability, sometimes with an ovarian teratoma. It must not be missed.",
    "Anti-inflammatory treatment: meta-analyses suggest a small benefit in depression, possibly confined to patients with elevated inflammatory markers. This is not established practice."
  ],
  cards:[
    ["What is sickness behaviour and why does it matter in psychiatry?","A cytokine-driven syndrome of withdrawal, anhedonia, fatigue, anorexia, poor concentration and altered sleep. It overlaps substantially with depression and provides direct evidence that immune signalling can produce depressive phenomenology."],
    ["Describe the kynurenine pathway and its relevance.","Inflammation activates indoleamine 2,3-dioxygenase, diverting tryptophan from serotonin synthesis into the kynurenine pathway, producing quinolinic acid, an NMDA agonist and neurotoxin, and reducing neuroprotective kynurenic acid."],
    ["What features should raise suspicion of anti-NMDA receptor encephalitis?","A young patient, often female, with rapid-onset psychosis or behavioural change, followed by seizures, orofacial dyskinesias and other movement disorder, autonomic instability and reduced consciousness. An ovarian teratoma may be present. It is treatable and must not be missed."]
  ],
  note:[
    "Interferon-alpha induced depression is the strongest human causal evidence linking inflammation to depression.",
    "Elevated CRP is associated with poorer response to SSRIs and, in some studies, better response to noradrenergic agents.",
    "Complement C4 is the major driver of the MHC association in schizophrenia and functions in synaptic pruning.",
    "Antibody testing for autoimmune encephalitis should include serum and CSF; CSF is more sensitive for NMDA receptor antibodies.",
    "Clozapine causes neutropenia and agranulocytosis, and myocarditis in the first eight weeks, both immune-mediated adverse effects."
  ],
  refs:["agrawal","lynall","oxneuropsy"] };

/* ---------------- 3.7 GENETICS ---------------- */

TEACH["3.7.1"] = { free:true,
  simple:"Heritability is the most misunderstood number in psychiatry. It does not say how much of your illness came from your genes. It says how much of the variation between people in a particular population, living in particular conditions, tracks with genetic variation. Change the conditions and the number changes.",
  teach:[
    "Basic concepts: 23 pairs of chromosomes, 22 autosomal plus the sex pair. Mitosis produces identical daughter cells; meiosis produces gametes with recombination and independent assortment. Transcription makes mRNA, translation makes protein.",
    "Family studies establish that a disorder aggregates in families but cannot separate genes from shared environment.",
    "Twin studies compare monozygotic and dizygotic concordance. Heritability approximates twice the difference in correlation. The equal environments assumption is the standard criticism.",
    "Adoption studies separate genetic from rearing environment and are the strongest natural design. The Danish adoption studies of schizophrenia are the classic.",
    "Linkage analysis tracks co-segregation of a marker with disease within families, scored as a lod score, with 3 conventionally taken as significant. It works well for single-gene disorders and failed for common psychiatric illness.",
    "Association studies compare allele frequencies between cases and controls. Genome-wide association studies do this across millions of variants, requiring p less than 5 x 10 to the minus 8 and very large samples.",
    "Direct gene analysis sequences the gene itself. Gene tracking follows a linked marker when the gene is unknown.",
    "Gene-environment interaction and correlation, covered in item 2.1, mean that heritability and environmental effects are not cleanly separable.",
    "Key figures: schizophrenia heritability around 80 per cent, monozygotic concordance 40 to 50 per cent and dizygotic 10 to 15 per cent. The gap between 100 per cent shared genes and 50 per cent concordance is the space environment occupies."
  ],
  cards:[
    ["Give monozygotic and dizygotic concordance for schizophrenia and the implication.","Around 40 to 50 per cent monozygotic and 10 to 15 per cent dizygotic. Since identical twins share all their genes but agree less than half the time, non-genetic factors must be substantial."],
    ["What is a lod score and what value is conventionally significant?","The logarithm of the odds that a marker and a disease locus are linked rather than segregating independently. A lod score of 3, odds of 1000 to 1, is conventionally taken as significant linkage."],
    ["State the equal environments assumption and why it matters.","Twin studies assume that monozygotic and dizygotic twin pairs share environments to a comparable extent. If monozygotic twins are treated more similarly, heritability is overestimated."]
  ],
  note:[
    "Lifetime risk of schizophrenia: general population about 1 per cent; one affected parent about 13 per cent; sibling about 9 per cent; both parents about 40 per cent; monozygotic co-twin about 48 per cent.",
    "Heritability estimates: bipolar disorder 60 to 85 per cent, autism above 80 per cent, ADHD 70 to 80 per cent, major depression 35 to 40 per cent, anxiety disorders 30 to 40 per cent.",
    "Genome-wide significance is 5 x 10 to the minus 8, correcting for approximately one million independent tests.",
    "Missing heritability describes the gap between twin-based heritability and variance explained by identified variants.",
    "Genetic counselling in psychiatry uses empirical recurrence risks, not genotyping, for common disorders."
  ],
  refs:["agrawal","noptp","rutter"] };

TEACH["3.7.2"] = { free:false,
  simple:"Some psychiatric conditions come with a genetic address you can look up. A child with a particular deletion on chromosome 22 has about a one in four chance of developing schizophrenia, which is twenty-five times the population risk. Those conditions are rare, but recognising one changes everything you do next.",
  teach:[
    "Chromosomal abnormalities: Down syndrome, trisomy 21, with virtually universal Alzheimer neuropathology by the fifth decade because APP is on chromosome 21. Klinefelter, 47,XXY. Turner, 45,X.",
    "22q11.2 deletion, velocardiofacial or DiGeorge syndrome: cardiac anomalies, palatal abnormality, hypocalcaemia, learning difficulties, and a lifetime schizophrenia risk of roughly 25 per cent. It is the strongest known single genetic risk factor for schizophrenia.",
    "Fragile X: CGG trinucleotide expansion in FMR1 on the X chromosome. The commonest inherited cause of intellectual disability. Long face, large ears, macro-orchidism, and a high rate of autism and ADHD.",
    "Prader-Willi and Angelman syndromes: the same 15q11-13 deletion, producing Prader-Willi when paternal and Angelman when maternal. This is the clearest clinical demonstration of imprinting.",
    "Huntington's disease: autosomal dominant, CAG expansion in HTT on chromosome 4, complete penetrance above about 40 repeats, showing anticipation with the largest expansions in paternal transmission.",
    "Alzheimer's disease: early-onset autosomal dominant forms involve APP, PSEN1 and PSEN2. Late-onset is polygenic, with APOE e4 raising risk in a dose-dependent way and e2 protective.",
    "Prenatal identification and genetic counselling: counselling in psychiatry is non-directive and uses empirical recurrence risks. Predictive testing for Huntington's disease follows a formal protocol with pre- and post-test counselling because of its psychological consequences.",
    "Clinical genetics services are organised regionally, and DNA banking allows later testing when technology or the family situation changes."
  ],
  cards:[
    ["What is the lifetime risk of schizophrenia in 22q11.2 deletion syndrome?","Roughly 25 per cent, about 25 times the general population risk, making it the strongest known single genetic risk factor for schizophrenia."],
    ["Explain imprinting using 15q11-13.","The same deletion produces Prader-Willi syndrome when inherited on the paternal chromosome and Angelman syndrome when maternal, because the expression of the genes in that region depends on parent of origin."],
    ["Why does Down syndrome carry near-universal Alzheimer pathology?","The amyloid precursor protein gene is on chromosome 21, so trisomy produces a gene dosage effect with lifelong amyloid overproduction. Neuropathology is present in almost all by the fifth decade."]
  ],
  note:[
    "Anticipation, earlier onset and greater severity in successive generations, is caused by trinucleotide repeat expansion. Huntington's disease and fragile X are the examples.",
    "Fragile X premutation carriers may develop fragile X-associated tremor ataxia syndrome and primary ovarian insufficiency.",
    "Behavioural phenotypes: hyperphagia in Prader-Willi, self-hugging and skin picking in Smith-Magenis, laughter and ataxia in Angelman, self-mutilation in Lesch-Nyhan, hypersociability in Williams syndrome.",
    "SSBP syndrome sheets are the College-listed resource for behavioural phenotypes.",
    "Predictive testing for Huntington's disease is not offered to asymptomatic minors."
  ],
  refs:["agrawal","oxid","ssbp"] };

TEACH["3.7.3"] = { free:false,
  simple:"To study a gene you first have to cut it out, copy it enough times to see, and then find it in a mixture. Every technique in this section is one of those three jobs, and they were invented in that order.",
  teach:[
    "Restriction enzymes are bacterial endonucleases cutting DNA at specific palindromic recognition sequences, producing reproducible fragments.",
    "Molecular cloning inserts a DNA fragment into a vector, plasmid, phage or artificial chromosome, propagated in a host cell to generate many copies.",
    "Gene probes are labelled single-stranded nucleic acid sequences that hybridise to a complementary target, allowing detection.",
    "Southern blotting detects DNA: electrophoresis, transfer to a membrane, hybridisation with a labelled probe. Northern blotting detects RNA and Western blotting detects protein. The mnemonic is that Southern is the surname and the others were named as a joke.",
    "Restriction fragment length polymorphisms: sequence variation altering a restriction site changes fragment lengths, providing genetic markers before sequencing was cheap.",
    "Recombination during meiosis is what makes linkage analysis possible. The closer two loci lie, the less often recombination separates them; recombination fraction is the measure, and 1 centimorgan corresponds to a 1 per cent chance of recombination.",
    "Polymerase chain reaction amplifies a target sequence exponentially and underpins nearly all modern genetic testing.",
    "Modern methods: microarrays for genotyping and expression, next-generation sequencing for whole exome and whole genome, and chromosomal microarray, which has replaced karyotyping as first-line testing in intellectual disability and developmental delay."
  ],
  cards:[
    ["Distinguish Southern, Northern and Western blotting.","Southern detects DNA, Northern detects RNA, and Western detects protein. All involve electrophoretic separation, transfer to a membrane, and detection with a labelled probe or antibody."],
    ["What is a restriction fragment length polymorphism?","Sequence variation that creates or destroys a restriction enzyme recognition site, altering the length of the resulting fragments and providing a detectable genetic marker."],
    ["What is the first-line genetic test in unexplained intellectual disability or developmental delay?","Chromosomal microarray, which detects copy number variants at much higher resolution than karyotyping and has replaced it as first-line investigation."]
  ],
  note:[
    "One centimorgan corresponds to approximately one million base pairs and a 1 per cent recombination frequency.",
    "Fragile X requires specific testing for CGG repeat expansion; it is not reliably detected on chromosomal microarray.",
    "CRISPR-Cas9 is covered separately in item 3.7.6.",
    "Whole exome sequencing covers the roughly 1 to 2 per cent of the genome that is protein-coding and detects most known pathogenic variants in developmental disorders."
  ],
  refs:["agrawal","oxid"] };

TEACH["3.7.4"] = { free:false,
  simple:"Two people with the same diagnosis may have completely different genetics, and two people with the same genetic change may look completely different. That double mismatch is the central problem of psychiatric genetics and the reason the search for a gene for anything mostly failed.",
  teach:[
    "Genetic heterogeneity: locus heterogeneity means mutations at different loci produce the same phenotype; allelic heterogeneity means different mutations at the same locus do so.",
    "Phenotypic heterogeneity is the reverse: variable expressivity means the same genotype produces different severity or features; incomplete penetrance means some carriers show nothing at all.",
    "22q11.2 deletion illustrates both: the same deletion can produce cardiac disease, palatal abnormality, intellectual disability, schizophrenia, or a relatively unremarkable adult, in different individuals.",
    "Pleiotropy is one gene affecting several apparently unrelated traits. CACNA1C is associated with schizophrenia, bipolar disorder, depression, ADHD and autism, which challenges the boundaries of the diagnostic categories themselves.",
    "Endophenotype, Gottesman and Gould: a heritable, state-independent trait, co-segregating with illness in families and found in unaffected relatives, and lying closer to gene action than the diagnosis. Candidates include P50 sensory gating, prepulse inhibition, antisaccade eye movements, working memory and P300 amplitude.",
    "The endophenotype strategy assumed simpler genetic architecture than the diagnosis. In practice endophenotypes have proved to be about as polygenic as the disorders, which has tempered enthusiasm.",
    "Biotypes attempt to define patient subgroups from biological rather than symptom data, using clustering of imaging and electrophysiological measures. It remains a research programme.",
    "Research Domain Criteria, RDoC, is the framework proposing dimensional constructs cutting across diagnoses. It is a research tool and not a clinical classification."
  ],
  cards:[
    ["Define incomplete penetrance and variable expressivity.","Incomplete penetrance: not all individuals carrying a pathogenic genotype manifest the phenotype. Variable expressivity: those who do manifest it vary in severity and in which features are present."],
    ["State the criteria for an endophenotype.","It is associated with the illness in the population, is heritable, is state-independent rather than present only during episodes, co-segregates with illness within families, and is found in unaffected relatives at higher rates than in the general population."],
    ["Give an example of pleiotropy in psychiatric genetics.","CACNA1C, associated at genome-wide significance with schizophrenia, bipolar disorder, major depression, ADHD and autism spectrum disorder."]
  ],
  note:[
    "Gottesman and Gould, American Journal of Psychiatry, 2003, is the source for the endophenotype concept.",
    "Cross-disorder genetic correlation is high between schizophrenia and bipolar disorder, and substantial between depression and anxiety.",
    "The failure of endophenotypes to be genetically simpler than diagnoses is an important negative finding.",
    "Copy number variants show markedly variable expressivity, which complicates genetic counselling after a microarray finding."
  ],
  refs:["agrawal","lynall","noptp"] };

TEACH["3.7.5"] = { free:true,
  simple:"Identical twins have identical genes and do not always get the same illness. Something must be switching genes on and off differently in the two of them. Epigenetics is that switching, and the surprising part is that experience can operate the switches.",
  teach:[
    "Epigenetics is heritable-through-cell-division change in gene expression without alteration of the DNA sequence.",
    "Three mechanisms: DNA methylation, typically at CpG islands and generally silencing; histone modification, with acetylation generally opening chromatin and activating and deacetylation closing it; and non-coding RNAs, particularly microRNAs, regulating translation.",
    "Meaney and Szyf's rat work is the foundational study: high maternal licking and grooming altered methylation of the glucocorticoid receptor promoter in offspring hippocampus, producing a lifelong difference in stress reactivity. Cross-fostering showed it was the care, not the genes.",
    "Human parallel: altered glucocorticoid receptor promoter methylation has been reported in the brains of suicide victims with a history of childhood abuse.",
    "Drugs modify epigenetics. Valproate is a histone deacetylase inhibitor. Antidepressants alter methylation of BDNF. Psychological therapy has been associated with methylation change, though this literature is small.",
    "Transgenerational transmission: the Dutch Hunger Winter cohort shows altered methylation and metabolic outcomes decades after prenatal famine exposure. True transgenerational epigenetic inheritance across the germline in humans is not established.",
    "Imprinting is a normal epigenetic phenomenon: parent-of-origin-specific expression, as in Prader-Willi and Angelman syndromes.",
    "Read this literature carefully. Peripheral blood methylation is a poor proxy for brain, cell type composition confounds many studies, and the field has a replication problem."
  ],
  cards:[
    ["Name the three principal epigenetic mechanisms.","DNA methylation, histone modification such as acetylation and deacetylation, and regulation by non-coding RNAs including microRNAs."],
    ["Describe Meaney and Szyf's maternal care experiment and its significance.","High levels of maternal licking and grooming in rats reduced methylation of the glucocorticoid receptor promoter in offspring hippocampus, increasing receptor expression and reducing lifelong stress reactivity. Cross-fostering demonstrated that the effect was caused by maternal behaviour rather than by inherited genotype."],
    ["Which mood stabiliser is a histone deacetylase inhibitor?","Sodium valproate."]
  ],
  note:[
    "Methylation of CpG islands in promoter regions generally silences transcription; histone acetylation generally activates it.",
    "The Dutch Hunger Winter cohort is the standard human example of prenatal exposure with lasting epigenetic and metabolic effects.",
    "Peripheral blood methylation correlates poorly with brain methylation, which limits most human psychiatric epigenetic studies.",
    "Monozygotic twin discordance for schizophrenia is a major motivation for epigenetic research.",
    "Epigenetic clocks estimate biological age from methylation and show accelerated ageing in some psychiatric populations."
  ],
  refs:["agrawal","lynall","rutter"] };

TEACH["3.7.6"] = { free:false,
  simple:"For the first time we can go into a living genome and edit a specific letter. The tool came from a bacterial defence system that cuts up invading viruses, and it works because you can hand it a short piece of RNA telling it exactly where to cut.",
  teach:[
    "CRISPR, clustered regularly interspaced short palindromic repeats, with CRISPR-associated Cas proteins, is a bacterial adaptive immune system repurposed for genome engineering.",
    "Mechanism: a guide RNA directs the Cas9 nuclease to a complementary genomic sequence adjacent to a protospacer adjacent motif, where it produces a double-strand break.",
    "Repair determines the outcome. Non-homologous end joining is error-prone and typically knocks the gene out. Homology-directed repair with a supplied template allows precise correction.",
    "Newer variants: base editing changes a single nucleotide without a double-strand break; prime editing offers greater versatility; CRISPR interference and activation modulate expression without cutting.",
    "Psychiatric research uses: generating isogenic cell lines from induced pluripotent stem cells differing only at a risk variant, and creating animal models carrying human variants.",
    "Clinical reality check. There is no CRISPR treatment for any psychiatric disorder and none is near. Psychiatric disorders are highly polygenic with tiny individual variant effects, which makes them exceptionally poor targets for gene editing.",
    "Ethics: somatic editing alters only the treated individual. Germline editing is heritable, is prohibited in the UK and most jurisdictions, and the 2018 He Jiankui case produced international condemnation and a prison sentence.",
    "Off-target effects, mosaicism and the difficulty of long-term follow-up remain unresolved safety issues."
  ],
  cards:[
    ["How does CRISPR-Cas9 achieve targeted editing?","A guide RNA directs the Cas9 nuclease to a complementary genomic sequence next to a protospacer adjacent motif, where Cas9 creates a double-strand break. The cell's repair pathway then determines whether the gene is disrupted or precisely edited."],
    ["Distinguish somatic from germline editing and state the legal position.","Somatic editing alters non-reproductive cells and affects only the treated individual. Germline editing alters embryos or gametes and is heritable; it is prohibited for reproductive purposes in the UK and most jurisdictions."],
    ["Why is gene editing a poor prospect for common psychiatric disorders?","They are highly polygenic, with hundreds of variants each of very small effect, so there is no single target whose correction would meaningfully alter risk."]
  ],
  note:[
    "Doudna and Charpentier received the 2020 Nobel Prize in Chemistry for CRISPR-Cas9 genome editing.",
    "The Human Fertilisation and Embryology Authority regulates embryo research in the UK, with the 14-day limit established by the Warnock Report, 1984.",
    "Induced pluripotent stem cell models allow patient-derived neurones to be studied, and CRISPR makes isogenic controls possible.",
    "Gene therapy successes to date are in monogenic disorders such as sickle cell disease, not in polygenic conditions."
  ],
  refs:["agrawal","lynall"] };

/* ---------------- 3.8 NEURODEVELOPMENT AND NEUROPLASTICITY ---------------- */

TEACH["3.8.1"] = { free:false,
  simple:"A brain is built in a strict order, and the order matters more than the speed. Cells are made, they crawl to where they belong, they wire up, and then most of the wiring is deliberately destroyed. Interrupt any of those steps at the wrong week and the consequences show up decades later.",
  teach:[
    "Sequence: neural tube formation by week four, then proliferation, migration, differentiation, synaptogenesis, myelination, and pruning.",
    "Neuronal migration is largely complete by the sixth month of gestation, guided by radial glia, building the cortex inside-out so that later-born neurones pass earlier ones to occupy more superficial layers.",
    "Migration disorders produce lissencephaly, heterotopia and polymicrogyria, and are associated with epilepsy and intellectual disability.",
    "Synaptogenesis peaks in the first years of life, producing far more synapses than are retained. Pruning then removes the excess, continuing through adolescence.",
    "Myelination begins prenatally and continues into the third decade, proceeding caudal to rostral and from primary sensory and motor areas towards association cortex, with prefrontal cortex last.",
    "Grey matter volume peaks in late childhood and declines through adolescence with pruning; white matter volume rises steadily with myelination.",
    "Cerebral lateralisation is present from early development. Language localises to the left hemisphere in around 95 per cent of right-handed and 70 per cent of left-handed people.",
    "The neurodevelopmental hypothesis of schizophrenia rests on this timeline: a disturbance of early brain development interacting with adolescent pruning, producing illness in early adulthood. Minor physical anomalies, obstetric complications, delayed milestones and premorbid cognitive difficulty support it.",
    "Ageing continues the trajectory: brain volume falls by roughly 0.2 to 0.5 per cent per year from middle age, greatest in prefrontal cortex and hippocampus."
  ],
  cards:[
    ["When is neuronal migration complete and what disorders follow its disruption?","Largely complete by the sixth month of gestation. Disruption produces lissencephaly, grey matter heterotopia and polymicrogyria, associated with epilepsy and intellectual disability."],
    ["In what direction does myelination proceed and when is it complete?","Caudal to rostral and from primary sensory and motor areas towards association cortex. It continues into the third decade, with prefrontal cortex myelinating last."],
    ["What evidence supports the neurodevelopmental hypothesis of schizophrenia?","Excess obstetric complications, minor physical anomalies, delayed developmental milestones, premorbid cognitive and social difficulty, absence of gliosis on post-mortem examination, and associations with prenatal famine and maternal infection."]
  ],
  note:[
    "The cortex is built inside-out: later-born neurones migrate past earlier ones to occupy more superficial layers.",
    "Absence of gliosis in schizophrenia post-mortem studies argues for a developmental rather than degenerative process.",
    "Prenatal famine exposure, the Dutch Hunger Winter, is associated with roughly doubled schizophrenia risk in offspring.",
    "Winter and spring birth is a small but replicated risk factor for schizophrenia, attributed to seasonal infection.",
    "Handedness and language lateralisation: left hemisphere dominance in around 95 per cent of right-handers and 70 per cent of left-handers."
  ],
  refs:["agrawal","lynall","rutter"] };

TEACH["3.8.2"] = { free:false,
  simple:"Some illnesses are not things that happen to a finished brain. They are things that happen while the brain is still being built, and then wait. The symptoms may not arrive for twenty years, but the trouble started before the person could walk.",
  teach:[
    "The neurodevelopmental hypothesis of schizophrenia, Murray and Lewis, and Weinberger, 1987: an early disturbance of brain development interacts with normal maturational processes, particularly adolescent synaptic pruning, producing symptoms in early adulthood.",
    "Supporting evidence: excess obstetric complications; minor physical anomalies; delayed motor and language milestones; premorbid cognitive and social difficulty documented in birth cohorts; absence of gliosis at post-mortem; and enlarged ventricles present at first episode before treatment.",
    "The two-hit model: an early developmental insult creates vulnerability, and a later event such as adolescent cannabis use, migration or trauma precipitates illness.",
    "Excessive synaptic pruning in adolescence is the leading current account, supported genetically by complement component 4, which functions in synaptic pruning and drives the strongest schizophrenia GWAS signal.",
    "The neurodevelopmental continuum: autism, intellectual disability, ADHD and schizophrenia share genetic risk variants, obstetric risk factors and cognitive features, arguing for a spectrum rather than discrete entities.",
    "Autism: early brain overgrowth in the first years followed by an atypical trajectory, with altered connectivity rather than a focal lesion.",
    "ADHD: delayed rather than deviant cortical maturation, peak cortical thickness reached around three years later than controls.",
    "Clinical implication: taking a developmental history in an adult psychosis assessment is not optional. Milestones, schooling, and childhood social function carry diagnostic weight."
  ],
  cards:[
    ["State the two-hit model of schizophrenia.","An early neurodevelopmental insult produces latent vulnerability, which is then unmasked by a second later exposure such as adolescent cannabis use, migration, urban upbringing or psychosocial trauma."],
    ["Which genetic finding supports excessive synaptic pruning in schizophrenia?","Structural variation in complement component 4 within the MHC region on chromosome 6, the strongest genome-wide signal, where C4 is functionally involved in synaptic pruning."],
    ["Why does absence of gliosis at post-mortem support a neurodevelopmental account?","Gliosis is the brain's scarring response to injury in mature tissue. Its absence argues against a degenerative or destructive process and is consistent with an abnormality of development."]
  ],
  note:[
    "Weinberger 1987 and Murray and Lewis 1987 are the source papers, published independently in the same year.",
    "Ventricular enlargement is present at first episode, before antipsychotic exposure, and is therefore not simply a treatment effect.",
    "Premorbid IQ is on average lower in those who later develop schizophrenia, documented in the 1946 British birth cohort and in conscript studies.",
    "Cannabis, urbanicity, migration, childhood adversity and older paternal age are the replicated environmental risk factors.",
    "The neurodevelopmental continuum challenges the categorical separation of autism, ADHD, intellectual disability and schizophrenia."
  ],
  refs:["agrawal","rutter","semgen"] };

TEACH["3.8.3"] = { free:false,
  simple:"Attachment is not sentiment, it is biology. A baby held by somebody who reads it accurately grows a stress system with a working brake. A baby left to manage alone grows one without. That difference is measurable in hormones decades later.",
  teach:[
    "Attachment behaviour is regulated by a circuit including amygdala, hypothalamus, ventral striatum, anterior cingulate and orbitofrontal cortex, modulated by oxytocin, vasopressin and endogenous opioids.",
    "Oxytocin, from the paraventricular and supraoptic nuclei, is released during birth, breastfeeding and affiliative contact, and reduces amygdala reactivity to social threat.",
    "The endogenous opioid system mediates the comfort of proximity and the distress of separation. Separation distress calls in animals are reduced by low-dose opioids and increased by naloxone.",
    "Meaney's rat work: maternal licking and grooming alters methylation of the hippocampal glucocorticoid receptor promoter, producing lifelong differences in HPA reactivity. Cross-fostering proves it is the care, not the genes.",
    "Early adversity in humans is associated with altered HPA reactivity, reduced hippocampal volume, and heightened amygdala reactivity, though findings vary with timing and type of adversity.",
    "Harlow's rhesus monkeys demonstrated the primacy of contact comfort over feeding, and that total isolation produced lasting social and reproductive abnormality.",
    "The Romanian adoptee studies are the human parallel: deprivation beyond about six months predicted persistent deficits including quasi-autistic features, disinhibited attachment and inattention, with substantial recovery where adoption occurred earlier.",
    "Oxytocin as a treatment: intranasal oxytocin trials in autism and in social anxiety have produced inconsistent results and it is not an established treatment. Be careful with the popular framing of oxytocin as a love hormone."
  ],
  cards:[
    ["Which neuropeptides and neurotransmitter systems modulate attachment behaviour?","Oxytocin and vasopressin, together with the endogenous opioid system and mesolimbic dopamine."],
    ["Summarise Meaney's finding on maternal care and the glucocorticoid receptor.","High maternal licking and grooming reduced methylation of the glucocorticoid receptor promoter in offspring hippocampus, increasing receptor expression, improving HPA negative feedback and reducing lifelong stress reactivity. Cross-fostering confirmed the effect was environmental."],
    ["What did the English and Romanian Adoptees study find?","Institutional deprivation lasting beyond about six months predicted persistent deficits including quasi-autistic features, disinhibited social engagement, inattention and cognitive impairment, with substantial recovery when adoption occurred earlier."]
  ],
  note:[
    "Intranasal oxytocin trials have produced inconsistent findings and it is not an established treatment for any psychiatric disorder.",
    "Reactive attachment disorder and disinhibited social engagement disorder are the ICD-11 diagnoses following grossly insufficient care.",
    "Disorganised attachment is associated with frightening or frightened caregiver behaviour and predicts later psychopathology more strongly than organised insecure patterns.",
    "Item 2.3 covers the behavioural and clinical side of attachment theory."
  ],
  refs:["agrawal","rutter","lynall"] };

TEACH["3.8.4.1"] = { free:false,
  simple:"Stress does not just feel bad, it rebuilds tissue. Sustained high cortisol shrinks the branches of neurones in the hippocampus and grows them in the amygdala. The part that remembers gets smaller and the part that fears gets bigger, which is a fair physical description of what chronic stress does to a person.",
  teach:[
    "Glucocorticoids act on mineralocorticoid receptors at basal levels and glucocorticoid receptors at stress levels. Sustained elevation produces structural change.",
    "The classic pattern: hippocampal dendritic atrophy and reduced neurogenesis; amygdala dendritic hypertrophy; and prefrontal dendritic retraction with impaired top-down regulation. Opposite directions in different structures.",
    "Prenatal stress: raised maternal cortisol crosses the placenta, with 11-beta-hydroxysteroid dehydrogenase type 2 normally providing a barrier. Prenatal stress is associated with altered offspring HPA reactivity, low birth weight and increased risk of ADHD, anxiety and schizophrenia.",
    "Perinatal: hypoxic-ischaemic injury and obstetric complications are replicated risk factors for later schizophrenia.",
    "Postnatal and childhood: early adversity produces lasting HPA changes, altered amygdala and prefrontal development, and epigenetic modification at the glucocorticoid receptor promoter.",
    "Adult stress: chronic stress impairs hippocampal-dependent memory and prefrontal executive function while enhancing amygdala-dependent fear learning, and much of this is reversible.",
    "Timing matters more than dose. The same exposure has different consequences depending on which structure is in a sensitive period.",
    "The reversibility point matters clinically. Antidepressants, exercise and enrichment increase BDNF and hippocampal neurogenesis in animals, and the neurotrophic hypothesis proposes that this underlies antidepressant action."
  ],
  cards:[
    ["Describe the differential structural effects of chronic stress on hippocampus, amygdala and prefrontal cortex.","Hippocampus: dendritic atrophy and reduced neurogenesis. Amygdala: dendritic hypertrophy and increased reactivity. Prefrontal cortex: dendritic retraction with impaired regulatory control."],
    ["What protects the fetus from maternal cortisol, and what happens when it is overwhelmed?","Placental 11-beta-hydroxysteroid dehydrogenase type 2 inactivates maternal cortisol. When it is downregulated or overwhelmed, fetal exposure rises, altering offspring HPA reactivity and increasing risk of later psychiatric disorder."],
    ["State the neurotrophic hypothesis of depression.","Stress reduces BDNF and hippocampal neurogenesis, contributing to depression, and antidepressant treatment, exercise and ECT increase BDNF and neurogenesis, which is proposed to underlie their therapeutic effect and their delayed onset."]
  ],
  note:[
    "Adult hippocampal neurogenesis occurs in the subgranular zone of the dentate gyrus; its extent in adult humans remains genuinely contested.",
    "Blocking neurogenesis in rodents abolishes some behavioural effects of antidepressants, which is the strongest evidence for the neurogenesis account.",
    "Hippocampal volume reduction in depression and PTSD may partly precede illness, as twin studies suggest, so it is not purely a consequence.",
    "Allostatic load describes cumulative multisystem physiological cost of chronic stress.",
    "Early adversity shows a dose-response relationship with adult psychiatric and physical illness."
  ],
  refs:["agrawal","lynall","noptp"] };

TEACH["3.8.4.2"] = { free:false,
  simple:"Talking therapy changes the brain, and this is not a figure of speech. Scan somebody before and after a course of CBT for OCD and the overactive circuit has quietened, by roughly the same amount as it does with medication. Learning is a physical process, and psychotherapy is a form of learning.",
  teach:[
    "Learning produces measurable structural change. London taxi drivers show increased posterior hippocampal grey matter proportional to years of experience, and juggling training produces measurable cortical change within weeks.",
    "OCD: Baxter's studies showed caudate hypermetabolism normalising after successful treatment with either behaviour therapy or fluoxetine, to a comparable degree. This is the foundational demonstration that psychotherapy changes the brain.",
    "Depression: CBT and antidepressants both alter prefrontal and limbic activity, though with somewhat different patterns. CBT is associated with increased prefrontal engagement and top-down regulation; medication with more direct limbic effects.",
    "Phobia and PTSD: successful exposure therapy reduces amygdala reactivity and increases ventromedial prefrontal regulation, which is the neural signature of extinction learning.",
    "Cognitive reappraisal, a core CBT technique, recruits dorsolateral and ventrolateral prefrontal cortex and reduces amygdala activity. The therapy is training a regulatory circuit.",
    "Mechanism: all of this is synaptic plasticity, LTP and LTD, dependent on NMDA receptors, AMPA trafficking, CREB-mediated transcription and BDNF.",
    "D-cycloserine, a partial NMDA agonist, has been given before exposure sessions to enhance extinction learning, with mixed results but a sound rationale.",
    "The point for practice. Psychotherapy is a biological treatment. The distinction between biological and psychological treatments is a historical artefact, not a mechanistic one."
  ],
  cards:[
    ["What did Baxter's OCD imaging studies demonstrate?","Caudate hypermetabolism normalised after successful treatment with either behaviour therapy or fluoxetine, to a comparable degree, showing that psychological treatment produces measurable functional brain change."],
    ["What neural change accompanies successful exposure therapy?","Reduced amygdala reactivity with increased ventromedial prefrontal regulation, the signature of extinction learning."],
    ["What is the rationale for D-cycloserine augmentation of exposure therapy?","As a partial NMDA receptor agonist it should facilitate the NMDA-dependent plasticity underlying extinction learning, potentially accelerating or strengthening the effect of exposure."]
  ],
  note:[
    "Maguire's London taxi driver studies are the standard demonstration of experience-dependent structural plasticity in adult humans.",
    "Both psychotherapy and pharmacotherapy converge on synaptic plasticity mechanisms; they differ in route, not in kind.",
    "The dodo bird verdict, that bona fide psychotherapies produce broadly similar outcomes, is qualified by clear specific superiority in OCD and PTSD.",
    "Psychotherapy has adverse effects, including deterioration and harm from poorly conducted trauma work, and these are under-reported.",
    "Section 9 of this syllabus covers psychotherapy clinically."
  ],
  refs:["agrawal","gabbard","lynall"] };

TEACH["3.8.5"] = { free:false,
  simple:"Intelligence is one of the most heritable things about a person and one of the most modifiable, which sounds contradictory until you remember that heritability depends on the environment. In a country where everybody gets good schooling, differences that remain are more genetic. Where schooling varies, they are less so.",
  teach:[
    "IQ is defined with a mean of 100 and a standard deviation of 15, and is normally distributed by construction. Two standard deviations below the mean, an IQ under 70, is the psychometric threshold for intellectual disability.",
    "Intellectual disability requires three things: significantly impaired intellectual functioning, significantly impaired adaptive functioning, and onset during the developmental period. IQ alone is never sufficient.",
    "Severity bands: mild 50 to 69, moderate 35 to 49, severe 20 to 34, profound below 20. ICD-11 emphasises adaptive functioning rather than IQ alone.",
    "Prevalence around 2 per cent, of which roughly 85 per cent is mild. Mild intellectual disability is associated with social disadvantage and often has no identified single cause; severe disability more often has an identifiable biological cause.",
    "Heritability of IQ rises with age from around 0.4 in childhood to 0.6 to 0.8 in adulthood, through active gene-environment correlation.",
    "The Flynn effect: population IQ scores rose by roughly three points per decade through the twentieth century, requiring periodic renorming. This demonstrates the power of environment and has apparently stalled or reversed in some countries.",
    "Biological causes: chromosomal, including Down syndrome and fragile X; metabolic, including phenylketonuria, which is screened for and treatable; prenatal, including fetal alcohol spectrum disorder, congenital infection and hypothyroidism; perinatal hypoxia; postnatal infection and injury.",
    "Cattell's distinction: crystallised intelligence, accumulated knowledge, and fluid intelligence, novel problem solving. They diverge in ageing.",
    "Diagnostic overshadowing is the commonest and most damaging error: attributing symptoms to the disability rather than to a treatable co-occurring condition."
  ],
  cards:[
    ["State the three criteria for intellectual disability and the IQ severity bands.","Significantly impaired intellectual functioning, significantly impaired adaptive functioning, and onset during the developmental period. Mild 50 to 69, moderate 35 to 49, severe 20 to 34, profound below 20."],
    ["What is the Flynn effect and what does it demonstrate?","A rise in population IQ scores of roughly three points per decade through the twentieth century, requiring periodic renorming. It demonstrates substantial environmental influence on measured intelligence."],
    ["Why does IQ heritability increase with age?","Through active gene-environment correlation: as people gain autonomy they select and shape environments consistent with their genotype, so genetic variance accounts for an increasing proportion of phenotypic variance."]
  ],
  note:[
    "Prevalence of intellectual disability around 2 per cent, roughly 85 per cent mild.",
    "Psychiatric disorder is two to three times commoner than in the general population; epilepsy affects 20 to 30 per cent, rising with severity.",
    "Phenylketonuria is the classic treatable metabolic cause and is detected on newborn screening.",
    "Chromosomal microarray is first-line genetic testing in unexplained intellectual disability; fragile X requires separate specific testing.",
    "Section 13 of this syllabus covers the psychiatry of intellectual disability clinically."
  ],
  refs:["oxid","agrawal","rutter"] };

TEACH["3.8.6"] = { free:false,
  simple:"The same injury at two different ages does two different things. A blow to the front of the head in a child may leave school reports unchanged for years and then show up as an adult who cannot hold a job. Damage to a developing brain waits for the function it destroyed to be needed.",
  teach:[
    "Kennard principle: earlier injury allows greater functional reorganisation. It is only partly true. Early diffuse injury can produce worse outcomes than the same injury later, because it disrupts the developing system rather than a completed one.",
    "Growing into deficit: a frontal injury in early childhood may appear silent until the executive demands of adolescence and adulthood arrive and reveal it.",
    "Traumatic brain injury: psychiatric sequelae are common and include depression in around a third in the first year, anxiety, PTSD, apathy, irritability, disinhibition and aggression. Post-traumatic epilepsy and, rarely, psychosis also occur.",
    "Severity is graded by Glasgow Coma Scale, duration of loss of consciousness, and duration of post-traumatic amnesia, which is the best single predictor of outcome.",
    "Site matters: orbitofrontal and anterior temporal regions are most vulnerable in closed head injury through contact with the skull base, producing disinhibition and emotional change.",
    "Multiple sclerosis: depression in around half at some point, with suicide risk raised; euphoria and emotional lability in more advanced disease; cognitive impairment in around half, chiefly processing speed and memory. Interferon-beta treatment has been associated with depression.",
    "Brain tumours: frontal tumours produce personality change, apathy or disinhibition; temporal tumours produce psychotic and affective symptoms with seizures. Slow-growing tumours can present purely psychiatrically.",
    "Red flags for organic cause: first psychiatric presentation after 40 or before puberty, atypical features, focal neurological signs, seizures, rapid progression, headache, visual change, and a personality change out of keeping.",
    "Chronic traumatic encephalopathy following repetitive head impact is a tauopathy diagnosed only at post-mortem; its clinical characterisation in life remains contested."
  ],
  cards:[
    ["What is the best single predictor of outcome after traumatic brain injury?","The duration of post-traumatic amnesia."],
    ["Why does closed head injury preferentially damage particular regions?","The orbitofrontal cortex and anterior temporal lobes are damaged by contact with the irregular bony floor of the anterior and middle cranial fossae, producing disinhibition, impaired social judgement and emotional change."],
    ["Name five red flags suggesting an organic cause for a psychiatric presentation.","First presentation after 40 or before puberty; focal neurological signs; seizures; rapid or fluctuating progression; new headache or visual change; personality change out of keeping with the person; and cognitive impairment out of proportion to mood."]
  ],
  note:[
    "Post-traumatic epilepsy risk rises with penetrating injury, depressed skull fracture, intracranial haematoma and early seizures.",
    "Depression after traumatic brain injury is common, treatable and under-recognised; SSRIs are first line, with sertraline commonly preferred.",
    "Psychosis after head injury is uncommon and typically has a latency of years.",
    "Lishman's Organic Psychiatry is the College-listed reference text for this material.",
    "Emotional lability, pathological laughing and crying, may respond to SSRIs at low dose."
  ],
  refs:["lishman","oxneuropsy","agrawal"] };

/* ---------------- 3.9 INTEGRATED NEUROBIOLOGY OF SYNDROMES ---------------- */

TEACH["3.9.1"] = { free:true,
  simple:"Autism is not a broken social module. It is a brain that processes detail superbly and context poorly, wired with too many local connections and too few long-distance ones. That single idea explains the strengths as well as the difficulties, which is why describing it only as a deficit gets it wrong.",
  teach:[
    "Genetics: heritability above 80 per cent. Highly polygenic, with rare de novo copy number variants and single-gene syndromes such as fragile X, tuberous sclerosis and Rett syndrome accounting for a minority.",
    "Connectivity: the leading account is local over-connectivity with long-range under-connectivity, giving strong detail processing and weak integration.",
    "Early brain overgrowth in the first two to three years, with increased head circumference, followed by an atypical trajectory rather than continued excess.",
    "Excitation-inhibition imbalance, with reduced GABAergic inhibition, is proposed and is consistent with the high rate of epilepsy.",
    "Cognitive theories: theory of mind deficit, Baron-Cohen; weak central coherence, Frith, meaning a bias to detail over gestalt; and executive dysfunction. None alone accounts for the whole picture.",
    "Cognitive empathy is impaired while affective empathy is relatively preserved. The double empathy problem notes the misunderstanding is mutual.",
    "Environmental risk: advanced paternal age, prematurity, maternal infection and valproate exposure in pregnancy. There is no link with MMR vaccination; the 1998 paper was retracted and its author struck off.",
    "Epidemiology: prevalence around 1 to 2 per cent, male to female ratio about 3 to 1 with substantial underdiagnosis in girls, who more often camouflage."
  ],
  cards:[
    ["What is the leading connectivity account of autism?","Local over-connectivity with long-range under-connectivity, producing enhanced detail processing and impaired integration of information across regions."],
    ["Name three cognitive theories of autism.","Theory of mind deficit (Baron-Cohen), weak central coherence (Frith), and executive dysfunction. Each explains part of the presentation and none explains all of it."],
    ["Name the established environmental risk factors for autism.","Advanced paternal age, prematurity and low birth weight, maternal infection in pregnancy, and sodium valproate exposure in utero. MMR vaccination is not a risk factor."]
  ],
  note:[
    "Heritability above 80 per cent; sibling recurrence risk around 10 to 20 per cent.",
    "Single-gene and syndromic causes account for roughly 10 to 20 per cent: fragile X, tuberous sclerosis, Rett syndrome, 22q11.2 and 16p11.2.",
    "Epilepsy affects around 20 to 30 per cent, with a bimodal onset in early childhood and adolescence.",
    "No medication treats core autism. Risperidone and aripiprazole are licensed for associated irritability and aggression only.",
    "Intranasal oxytocin has produced inconsistent trial results and is not an established treatment."
  ],
  refs:["rutter","agrawal","nice"] };

TEACH["3.9.2"] = { free:false,
  simple:"ADHD is a problem of regulation rather than of attention itself, and the chemistry has a strange shape: too little prefrontal dopamine impairs function and so does too much. That inverted U is why the right dose helps and a bigger dose makes things worse.",
  teach:[
    "Circuit: fronto-striatal and fronto-cerebellar loops, with reduced volume and activation in dorsolateral and inferior frontal cortex, caudate, and cerebellar vermis.",
    "Neurochemistry: dopamine and noradrenaline. Prefrontal catecholamine signalling follows an inverted U, so both deficiency and excess impair function.",
    "Delayed cortical maturation, Shaw: peak cortical thickness reached around three years later than in controls, most marked in prefrontal cortex. The trajectory is delayed rather than deviant.",
    "Default mode network: failure to suppress it during tasks correlates with lapses of attention.",
    "Two-pathway model, Sonuga-Barke: an executive dysfunction pathway and a motivational pathway with steeper delay discounting. They are partly independent, which explains the heterogeneity.",
    "Genetics: heritability 70 to 80 per cent, highly polygenic. Candidate gene findings for DRD4 and DAT1 have largely not held up in genome-wide studies.",
    "Environmental: prematurity and low birth weight, prenatal alcohol and smoking exposure, and severe early deprivation.",
    "Treatment maps onto the pharmacology: methylphenidate blocks dopamine and noradrenaline transporters; amphetamines additionally release stored transmitter; atomoxetine is a noradrenaline reuptake inhibitor; guanfacine is an alpha-2A agonist strengthening prefrontal network signalling."
  ],
  cards:[
    ["Explain the inverted U for prefrontal catecholamines in ADHD.","Prefrontal function is optimal at moderate dopamine and noradrenaline levels and is impaired both by deficiency and by excess, which is why stimulants improve attention at therapeutic doses and impair it at higher ones."],
    ["Describe the two-pathway model of ADHD.","Sonuga-Barke: a dorsal executive pathway producing inattention and poor inhibition, and a ventral motivational pathway producing steeper delay discounting and aversion to delay. The two are partly independent."],
    ["What is the cortical maturation finding in ADHD?","Delayed rather than deviant maturation, with peak cortical thickness attained around three years later than in typically developing children, most marked in prefrontal regions."]
  ],
  note:[
    "Prevalence around 5 per cent in children, 2.5 per cent in adults; around two thirds have persisting impairment into adulthood.",
    "ADHD is associated with increased risk of substance misuse; treatment does not increase and may reduce that risk.",
    "Stimulant monitoring: height, weight, pulse and blood pressure at baseline and every six months.",
    "Untreated ADHD carries increased risk of accidents, exclusion from school, unemployment and criminal justice contact.",
    "Item 3.5.1.12 covers attention and its impairment in ADHD in more detail."
  ],
  refs:["rutter","agrawal","nice"] };

TEACH["3.9.3"] = { free:true,
  simple:"Addiction moves through three stages and each has its own chemistry. First the drug feels good. Then the brain adapts so that not having it feels bad. Finally the front of the brain, the part that would have said no, stops working properly. By the third stage the person is not chasing pleasure. They are avoiding a hole.",
  teach:[
    "Koob and Volkow's three-stage cycle: binge and intoxication, driven by mesolimbic dopamine and the ventral striatum; withdrawal and negative affect, driven by recruitment of the extended amygdala with CRF and dynorphin; and preoccupation and anticipation, driven by prefrontal dysfunction and craving.",
    "Common final pathway: increased dopamine in the nucleus accumbens, reached by different routes for different drugs.",
    "Incentive sensitisation, Robinson and Berridge: wanting sensitises with repeated use while liking does not, which is why craving persists long after pleasure has gone.",
    "Tolerance is both pharmacokinetic, through enzyme induction, and pharmacodynamic, through receptor downregulation. Withdrawal is the unmasking of those adaptations.",
    "Habit formation: control shifts from ventral to dorsolateral striatum, from goal-directed to habitual, so the behaviour continues despite devalued outcome.",
    "Relapse has three triggers with distinct substrates: drug cues acting through amygdala and prefrontal glutamate; stress acting through CRF in the extended amygdala; and drug priming, a small dose reinstating the whole pattern.",
    "Alcohol pharmacology: GABA-A potentiation and NMDA inhibition, with compensatory NMDA upregulation explaining withdrawal seizures and delirium tremens.",
    "Loss of tolerance after abstinence, following prison release or inpatient detoxification, is the commonest setting for fatal opioid overdose. Naloxone provision at discharge is the response."
  ],
  cards:[
    ["Name Koob and Volkow's three stages of addiction with their neural substrates.","Binge and intoxication: mesolimbic dopamine and ventral striatum. Withdrawal and negative affect: extended amygdala, with CRF and dynorphin. Preoccupation and anticipation: prefrontal dysfunction and glutamatergic craving circuits."],
    ["Distinguish wanting from liking in addiction.","Wanting is incentive salience mediated by mesolimbic dopamine and sensitises with repeated use. Liking is hedonic pleasure mediated by opioid and endocannabinoid systems and does not sensitise, so craving increases while enjoyment declines."],
    ["Name the three principal triggers of relapse and their substrates.","Drug-associated cues, through amygdala and prefrontal glutamatergic projections; stress, through CRF in the extended amygdala; and drug priming, a small re-exposure reinstating drug-seeking."]
  ],
  note:[
    "Delta FosB accumulates with repeated drug exposure and is proposed as a molecular switch for the persistence of addiction.",
    "Naltrexone, an opioid antagonist, reduces alcohol reward; acamprosate modulates glutamate; disulfiram inhibits aldehyde dehydrogenase.",
    "Contingency management has the best evidence in stimulant dependence, where no substitution therapy is licensed.",
    "Gambling and gaming disorder are classified in ICD-11 as disorders due to addictive behaviours, on the basis of shared circuitry.",
    "Section 11 of this syllabus covers substance misuse clinically."
  ],
  refs:["semaddict","stahl","agrawal"] };

TEACH["3.9.4"] = { free:false,
  simple:"Fear is the alarm going off when there is a burglar. Anxiety is the alarm going off when there might be a burglar, one day, possibly. The same circuit produces both, and the difference is whether the threat is present or imagined.",
  teach:[
    "Core circuit: amygdala detects threat; bed nucleus of the stria terminalis mediates sustained anxiety to uncertain threat; hypothalamus and periaqueductal grey generate the response; ventromedial prefrontal cortex and anterior cingulate regulate it.",
    "The distinction that matters: amygdala mediates phasic fear to imminent specific threat; the bed nucleus of the stria terminalis mediates sustained anxiety to uncertain or distant threat. This maps onto phobia versus generalised anxiety.",
    "Neurochemistry: reduced GABAergic inhibition; serotonergic modulation, with 5-HT1A and 5-HT2 involvement; noradrenergic overactivity from the locus coeruleus; and CRF.",
    "Panic: locus coeruleus overactivity, and the false suffocation alarm hypothesis, Klein, supported by the reliable induction of panic by carbon dioxide inhalation and by sodium lactate infusion in susceptible people. CCK-4 is another reliable challenge.",
    "Cognitive model, Clark: catastrophic misinterpretation of benign bodily sensations, maintained by safety behaviours and avoidance which prevent disconfirmation.",
    "Fear conditioning and extinction is the laboratory model. Extinction is new inhibitory learning requiring ventromedial prefrontal cortex, not erasure, which is why fear returns with reinstatement and renewal.",
    "Genetics: heritability around 30 to 40 per cent, lower than for psychosis, with substantial shared genetic variance between anxiety and depression.",
    "Treatment mechanisms: SSRIs act over weeks through 5-HT1A autoreceptor desensitisation; benzodiazepines act immediately at GABA-A; and exposure works by extinction learning."
  ],
  cards:[
    ["Distinguish the roles of the amygdala and the bed nucleus of the stria terminalis.","The amygdala mediates phasic fear responses to imminent, specific and identifiable threat. The bed nucleus of the stria terminalis mediates sustained anxiety in response to uncertain, unpredictable or distant threat."],
    ["What is the false suffocation alarm hypothesis?","Klein's proposal that panic disorder involves a hypersensitive brainstem suffocation monitor, supported by the reliable induction of panic in susceptible individuals by carbon dioxide inhalation and sodium lactate infusion."],
    ["Why does exposure therapy require the ventromedial prefrontal cortex?","Because extinction is new inhibitory learning that suppresses the original fear association, and this inhibitory control is mediated by ventromedial prefrontal projections to the amygdala."]
  ],
  note:[
    "CO2 inhalation, sodium lactate infusion and CCK-4 are the three standard experimental panic challenges.",
    "Anxiety disorders have the earliest median age of onset of any group of psychiatric disorders.",
    "Behavioural inhibition in infancy, Kagan, predicts later social anxiety disorder.",
    "Safety behaviours prevent disconfirmation and must be dropped for exposure to work.",
    "Benzodiazepines impair extinction learning and can undermine the effect of concurrent exposure therapy."
  ],
  refs:["agrawal","stahl","nice"] };

TEACH["3.9.5"] = { free:true,
  simple:"In PTSD the memory has not faded because it was never properly filed. It sits in raw sensory form with no time stamp, so when something triggers it the person does not remember the event, they re-live it in the present tense. That is why the treatment is not talking about it but putting it away properly.",
  teach:[
    "Circuit: amygdala hyperreactivity, reduced ventromedial prefrontal regulation, and hippocampal dysfunction with reduced volume. The prefrontal brake fails while the alarm is over-sensitive.",
    "Hippocampal volume reduction: twin studies suggest it may partly precede trauma and act as a vulnerability factor rather than being purely a consequence.",
    "HPA axis: cortisol is typically low or normal with enhanced negative feedback and increased glucocorticoid receptor sensitivity. This is the opposite of melancholic depression, and it is examined.",
    "Noradrenergic overactivity underlies hyperarousal, and is the rationale for prazosin in trauma nightmares.",
    "Impaired extinction of conditioned fear, with reduced ventromedial prefrontal recruitment, is the best-replicated laboratory finding.",
    "Ehlers and Clark's cognitive model: a poorly elaborated and inadequately contextualised trauma memory, retrieved involuntarily by cues and experienced with a sense of current threat, maintained by negative appraisals and by avoidance and rumination.",
    "Reconsolidation: retrieval briefly returns a memory to a labile state, which is the rationale for propranolol reconsolidation-blockade research. Results are mixed.",
    "ICD-11 complex PTSD adds disturbances in self-organisation to the three core clusters: affect dysregulation, negative self-concept, and difficulties in relationships.",
    "Treatment: trauma-focused CBT and EMDR are recommended. Single-session psychological debriefing is not recommended and may be harmful."
  ],
  cards:[
    ["How does the HPA axis in PTSD differ from that in melancholic depression?","In PTSD cortisol is typically low or normal with enhanced negative feedback and increased glucocorticoid receptor sensitivity. In melancholic depression cortisol is elevated with impaired feedback."],
    ["What distinguishes complex PTSD from PTSD in ICD-11?","Complex PTSD includes the three PTSD clusters, re-experiencing, avoidance and sense of current threat, plus disturbances in self-organisation: affect dysregulation, negative self-concept, and difficulties in sustaining relationships."],
    ["Summarise the Ehlers and Clark model of PTSD.","The trauma memory is poorly elaborated and inadequately integrated into autobiographical context, so it is retrieved involuntarily by cues and experienced with a sense of current threat. Negative appraisals of the trauma and its sequelae, and maintaining strategies such as avoidance, rumination and safety behaviours, prevent resolution."]
  ],
  note:[
    "Prazosin, an alpha-1 antagonist, is used for trauma nightmares; trial evidence is mixed but it remains widely used.",
    "Psychological debriefing after trauma is not recommended by NICE and may increase later symptoms.",
    "Dissociation at the time of trauma, peritraumatic dissociation, predicts later PTSD.",
    "PTSD is one of the few psychiatric diagnoses that requires a specified external event as a criterion.",
    "Item 3.5.1.13 covers memory in PTSD in more detail."
  ],
  refs:["agrawal","nice","semgen"] };

TEACH["3.9.6"] = { free:false,
  simple:"OCD is a brain stuck in a loop that says something is wrong, do something about it. The action brings relief for a moment, and the relief is precisely what teaches the loop to run again. That is why the treatment is not doing the action and waiting.",
  teach:[
    "Circuit: the cortico-striato-thalamo-cortical loop, involving orbitofrontal cortex, anterior cingulate, caudate and thalamus. Hyperactivity here is one of the most replicated functional imaging findings in psychiatry.",
    "Baxter's studies: caudate hypermetabolism normalises after successful treatment with either behaviour therapy or fluoxetine, to a comparable degree.",
    "Direct and indirect pathway imbalance is the proposed mechanism, favouring the direct pathway and producing a self-sustaining loop that generates the sense that something remains undone.",
    "Neurochemistry: serotonergic, evidenced by the specific efficacy of SSRIs and clomipramine at higher doses than in depression, and by symptom exacerbation on serotonergic challenge. Dopamine and glutamate are also implicated.",
    "Excessive habit formation with impaired goal-directed control is the current cognitive-neuroscientific account, and it explains why patients say they know it is pointless and do it anyway.",
    "Behavioural mechanism: the compulsion is negatively reinforced by anxiety reduction. Reassurance functions identically and maintains the disorder.",
    "Genetics: heritability around 40 to 50 per cent, higher in early-onset cases. Association with tic disorders is strong in the early-onset group.",
    "PANDAS, paediatric autoimmune neuropsychiatric disorders associated with streptococcal infection, is a proposed and contested autoimmune mechanism in a small subgroup.",
    "Treatment: exposure and response prevention, with an SSRI at higher dose and for at least twelve weeks, or clomipramine. Antipsychotic augmentation helps a subgroup, particularly with tics. Deep brain stimulation is used in severely refractory illness."
  ],
  cards:[
    ["Describe the circuit implicated in OCD and the key imaging finding.","The cortico-striato-thalamo-cortical loop involving orbitofrontal cortex, anterior cingulate, caudate and thalamus, showing hypermetabolism that normalises after successful treatment with either SSRIs or behaviour therapy."],
    ["Why are higher SSRI doses and longer trials needed in OCD than in depression?","Response in OCD requires higher doses and at least twelve weeks, and continues to improve beyond that. Judging non-response at six weeks on a depression-range dose is a common clinical error."],
    ["Why does reassurance maintain OCD?","It functions as a compulsion, producing short-term anxiety reduction that negatively reinforces the cycle and preventing the disconfirmation that would occur if the person tolerated the uncertainty."]
  ],
  note:[
    "Lifetime prevalence around 1 to 2 per cent. Common themes: contamination, harm, symmetry and ordering, and taboo intrusive thoughts.",
    "Insight is usually retained, and ICD-11 includes a poor-insight specifier.",
    "ICD-11 groups body dysmorphic disorder, hoarding, trichotillomania and excoriation disorder with OCD as obsessive-compulsive and related disorders.",
    "Obsessive-compulsive personality disorder is distinct: ego-syntonic traits without true obsessions or compulsions.",
    "Item 3.5.1.8 covers habit formation and its relation to OCD."
  ],
  refs:["agrawal","nice","semgen"] };

TEACH["3.9.7"] = { free:true,
  simple:"For fifty years the story was that depression is a shortage of serotonin. That story is too simple to be true: the drugs raise serotonin within hours and people get better in weeks. What happens in those weeks is the actual answer, and it is about the brain rebuilding connections rather than topping up a chemical.",
  teach:[
    "The monoamine hypothesis: depression as deficiency of serotonin, noradrenaline and dopamine. Its evidence was reserpine-induced depression, the action of MAOIs and tricyclics, and tryptophan depletion reversing SSRI response.",
    "Its fatal problem is the time lag. Monoamine levels rise within hours; clinical improvement takes weeks. Something downstream must be doing the work.",
    "The receptor and neuroplasticity account: 5-HT1A somatodendritic autoreceptor desensitisation over two to four weeks permits increased forebrain serotonin, and downstream CREB activation increases BDNF and hippocampal neurogenesis.",
    "The neurotrophic hypothesis: stress lowers BDNF and neurogenesis; antidepressants, exercise and ECT raise them. Blocking neurogenesis in rodents abolishes some behavioural antidepressant effects.",
    "HPA axis: hypercortisolaemia with impaired feedback in melancholic depression; dexamethasone non-suppression in around half of such patients.",
    "Inflammation: elevated IL-6, TNF-alpha and CRP in a subgroup, roughly a quarter to a third. Interferon-alpha reliably induces depression, which is the strongest causal human evidence.",
    "Circuits: reduced dorsolateral prefrontal activity, increased subgenual cingulate activity, amygdala hyperreactivity to negative stimuli, blunted ventral striatal reward response, and default mode network hyperconnectivity correlating with rumination.",
    "Glutamate: ketamine produces antidepressant effect within hours through AMPA throughput and mTOR-dependent synaptogenesis, bypassing the monoamine route entirely. This is the strongest evidence that plasticity rather than monoamine level is the mechanism.",
    "Sleep: reduced REM latency, increased REM density, reduced slow wave sleep, early morning wakening.",
    "Genetics: heritability around 35 to 40 per cent, highly polygenic. The 5-HTTLPR by life events interaction has not replicated in large samples."
  ],
  cards:[
    ["What is the principal objection to the simple monoamine hypothesis?","Monoamine levels rise within hours of starting an antidepressant while clinical improvement takes two to four weeks, so the therapeutic mechanism must lie in downstream adaptive changes rather than in the acute rise itself."],
    ["Explain the delay in SSRI response.","Transporter blockade raises synaptic serotonin immediately, but somatodendritic 5-HT1A autoreceptors initially suppress raphe firing. Their desensitisation over two to four weeks permits increased forebrain serotonergic transmission and downstream neuroplastic change."],
    ["Why is ketamine's rapid effect theoretically important?","It produces antidepressant effect within hours through glutamatergic mechanisms, AMPA throughput and mTOR-dependent synaptogenesis, without acting on monoamine transporters, indicating that synaptic plasticity rather than monoamine availability is the critical mechanism."]
  ],
  note:[
    "Subgenual cingulate, Brodmann area 25, is the Mayberg deep brain stimulation target in treatment-resistant depression.",
    "Esketamine was licensed in 2019 for treatment-resistant depression and must be given under supervision because of dissociation and blood pressure rise.",
    "Elevated CRP predicts poorer SSRI response and, in some studies, better response to noradrenergic agents.",
    "STAR*D: about a third remitted at step one and around two thirds cumulatively across four steps, with declining rates at each step.",
    "ECT remains the most effective acute treatment for severe depression, particularly with psychotic features or food refusal."
  ],
  refs:["stahl","agrawal","nice"] };

TEACH["3.9.8"] = { free:false,
  simple:"Bipolar disorder is not depression with occasional high days. It is an illness of an unstable set point, in which the same brain swings past normal in both directions, and the drug that treats one pole can push the person into the other.",
  teach:[
    "Genetics: heritability 60 to 85 per cent, among the highest in psychiatry. Highly polygenic with substantial genetic overlap with schizophrenia. CACNA1C and ANK3 are the best-known loci.",
    "Circuits: reduced ventral prefrontal regulation of amygdala, with amygdala hyperreactivity to emotional stimuli. The regulatory failure is bidirectional, permitting swings in both directions.",
    "White matter abnormality is one of the more consistent structural findings, with hyperintensities more common than in controls.",
    "Neurochemistry: dopaminergic overactivity in mania, supported by stimulants and dopamine agonists precipitating mania and by the efficacy of D2 blockade. Depleted or downregulated dopamine signalling is proposed in the depressive phase.",
    "Intracellular signalling is where the mood stabilisers converge. Lithium inhibits inositol monophosphatase, producing inositol depletion, and inhibits GSK-3 beta. Valproate is a histone deacetylase inhibitor. All are downstream of receptors, not at them.",
    "Circadian and sleep disruption: sleep loss can precipitate mania, and social rhythm disruption is a recognised trigger. This is the rationale for interpersonal and social rhythm therapy.",
    "Kindling, Post: successive episodes are triggered by progressively smaller stressors and eventually occur autonomously, which is the argument for early and sustained prophylaxis.",
    "Mitochondrial dysfunction and altered calcium signalling are active hypotheses consistent with the CACNA1C finding.",
    "Clinical translation: antidepressant monotherapy risks switching to mania; lithium remains the best evidence for long-term prophylaxis and is the only mood stabiliser with good evidence for reducing suicide."
  ],
  cards:[
    ["Name two intracellular mechanisms proposed for lithium.","Inhibition of inositol monophosphatase, producing inositol depletion and dampening phosphatidylinositol signalling; and inhibition of glycogen synthase kinase 3 beta."],
    ["What is the kindling hypothesis and what follows clinically?","Post's proposal that successive affective episodes require progressively smaller precipitants and may eventually occur autonomously, which argues for early and sustained prophylaxis rather than treating episodes as they arise."],
    ["Which gene is most associated with bipolar disorder across cross-disorder studies?","CACNA1C, encoding an L-type voltage-gated calcium channel subunit, also associated with schizophrenia, depression, ADHD and autism."]
  ],
  note:[
    "Lifetime prevalence around 1 per cent for bipolar I, with equal sex distribution unlike unipolar depression.",
    "Sleep deprivation can precipitate mania and has a transient antidepressant effect in depression.",
    "Rapid cycling, four or more episodes in twelve months, is commoner in women and associated with antidepressant exposure and hypothyroidism.",
    "Postpartum psychosis risk is raised more than twentyfold in bipolar disorder.",
    "Valproate must not be used in women and girls of childbearing potential outside the Pregnancy Prevention Programme."
  ],
  refs:["stahl","agrawal","maudsley"] };

TEACH["3.9.9"] = { free:true,
  simple:"The dopamine hypothesis has been rewritten three times and the current version is the most useful. It is not that there is too much dopamine everywhere. It is that dopamine is released in the wrong place at the wrong time, so ordinary things arrive feeling enormously significant, and the delusion is the explanation the person builds for that experience.",
  teach:[
    "Version I: too much dopamine, from the fact that all antipsychotics block D2 and that amphetamine causes psychosis.",
    "Version II: regional specificity. Mesolimbic hyperdopaminergia produces positive symptoms; mesocortical hypodopaminergia produces negative and cognitive symptoms. This explains why D2 blockade can worsen negative symptoms.",
    "Version III, Howes and Kapur: the final common pathway is presynaptic striatal dopamine dysregulation. Imaging shows increased dopamine synthesis and release capacity, present in the prodrome, and greatest in dorsal rather than ventral striatum.",
    "Aberrant salience, Kapur: dysregulated dopamine assigns motivational significance to irrelevant stimuli. The delusion is a cognitive explanation for that abnormal experience, which is why antipsychotics dampen conviction rather than argue the belief away.",
    "The glutamate hypothesis: NMDA antagonists such as ketamine and phencyclidine reproduce positive, negative and cognitive symptoms in healthy volunteers, which dopamine agonists do not. NMDA hypofunction on parvalbumin interneurones disinhibits downstream circuits.",
    "GABA: reduced parvalbumin interneurone markers, reduced GAD67 expression, and impaired gamma oscillations.",
    "Structural: enlarged ventricles and reduced grey matter present at first episode before treatment, progressive change over the early years, and reduced dendritic spine density with absence of gliosis.",
    "Neurodevelopmental origin: obstetric complications, delayed milestones, premorbid cognitive difficulty, minor physical anomalies, and complement C4 in synaptic pruning.",
    "Environmental: cannabis, urbanicity, migration and minority status, childhood adversity, older paternal age."
  ],
  cards:[
    ["State version III of the dopamine hypothesis.","Howes and Kapur: the final common pathway is presynaptic striatal dopamine dysregulation, with increased dopamine synthesis and release capacity, present before onset in the prodrome and most marked in the dorsal striatum."],
    ["State the aberrant salience hypothesis.","Kapur: dysregulated dopamine release assigns motivational significance to stimuli that do not warrant it. Delusions are the cognitive explanations the person constructs for this abnormal experience of significance, which is why antipsychotics reduce conviction rather than correct the belief directly."],
    ["What evidence supports a glutamatergic contribution to schizophrenia?","NMDA receptor antagonists such as ketamine and phencyclidine reproduce positive, negative and cognitive symptoms in healthy volunteers and exacerbate them in patients, whereas dopamine agonists reproduce only positive symptoms."]
  ],
  note:[
    "Antipsychotic efficacy requires roughly 60 to 70 per cent D2 occupancy; extrapyramidal effects appear above about 80 per cent.",
    "Ventricular enlargement is present at first episode before treatment and is therefore not simply a drug effect.",
    "Absence of gliosis argues for a neurodevelopmental rather than degenerative process.",
    "Complement C4 drives the strongest GWAS signal and functions in synaptic pruning, linking genetics to the excessive pruning hypothesis.",
    "Clozapine works in treatment resistance despite low D2 occupancy, which no current hypothesis fully explains."
  ],
  refs:["agrawal","stahl","semgen"] };

TEACH["3.9.10"] = { free:false,
  simple:"The symptoms people notice in schizophrenia are the voices and the beliefs. The symptom that decides whether somebody works, lives independently and has friends is the cognitive impairment, and it is the one nobody asks about and no drug treats.",
  teach:[
    "Domains affected: processing speed, attention and vigilance, working memory, verbal and visual learning and memory, reasoning and problem solving, and social cognition. Processing speed shows the largest effect.",
    "Effect size is around one standard deviation below controls, present across the illness.",
    "Timing: impairment is present before onset, documented in birth cohorts and conscript studies; persists in symptomatic remission; and is found to a lesser degree in unaffected relatives, which makes it a candidate endophenotype rather than a consequence of illness or treatment.",
    "Functional consequence: cognitive impairment predicts occupational and social outcome considerably better than positive symptoms do.",
    "Neural correlates: prefrontal inefficiency rather than simple hypofrontality, impaired gamma synchrony from parvalbumin interneurone dysfunction, and altered default mode network suppression during tasks.",
    "Confounders that must be excluded before attributing impairment to the illness: anticholinergic burden, sedation, negative symptoms, depression, substance use, and poor effort.",
    "Treatment: no available drug reliably improves cognition. Anticholinergic and sedative burden should be minimised, since these actively worsen it.",
    "Cognitive remediation therapy produces modest gains with better durability and functional transfer when combined with vocational rehabilitation.",
    "MATRICS is the consensus cognitive battery used in schizophrenia trials."
  ],
  cards:[
    ["Which cognitive domain shows the largest impairment in schizophrenia, and what is the overall effect size?","Processing speed shows the largest effect. Overall impairment is around one standard deviation below healthy controls across domains."],
    ["What evidence indicates cognitive impairment is not merely a consequence of illness or medication?","It is present before onset in birth cohort and conscript data, persists in symptomatic remission, and is found to a lesser degree in unaffected first-degree relatives."],
    ["What predicts functional outcome better in schizophrenia, positive symptoms or cognition?","Cognitive impairment, particularly processing speed and executive function, predicts occupational and social functioning considerably better than positive symptoms."]
  ],
  note:[
    "Anticholinergic burden from antipsychotics, antiparkinsonian drugs and other medication directly worsens cognition and is modifiable.",
    "Cognitive remediation has modest effects that transfer to function best when paired with supported employment.",
    "MATRICS Consensus Cognitive Battery is the standard research instrument.",
    "Cognitive impairment is also present in bipolar disorder, of smaller magnitude and with a similar profile.",
    "The distinction between negative symptoms and cognitive impairment is clinically difficult and they are separable constructs."
  ],
  refs:["semgen","agrawal","lynall"] };

TEACH["3.9.11"] = { free:true,
  simple:"There is a biological signature associated with acting on impulse in a way that harms you, and it has been found in different countries and different populations: low serotonin turnover. It does not predict who will die, and nothing does. But it tells us that impulsivity, not just sadness, is part of the mechanism.",
  teach:[
    "The most replicated biological finding: low CSF 5-HIAA, the serotonin metabolite, associated with impulsive aggression, violent suicide attempts and completed suicide.",
    "Postmortem findings: altered serotonin receptor binding in ventral prefrontal cortex, particularly increased 5-HT1A and altered 5-HT2A binding, and fewer serotonin transporter sites.",
    "Ventral prefrontal cortex dysfunction impairs behavioural inhibition and decision-making, which is the neural substrate of the impulsive component.",
    "HPA axis: dysregulation is reported, with both hyper- and hypocortisolaemia described in different populations.",
    "Stress-diathesis model, Mann: suicidal behaviour requires a stressor, typically an acute psychiatric episode or life event, acting on a pre-existing diathesis comprising impulsive-aggressive traits, pessimism and altered serotonergic function.",
    "Genetics: family, twin and adoption studies show heritability of suicidal behaviour independent of the heritability of the psychiatric disorder itself.",
    "Cognitive factors: hopelessness predicts suicide better than depression severity; overgeneral autobiographical memory and impaired problem solving contribute; entrapment and defeat are central to the integrated motivational-volitional model.",
    "Clinical translation: risk assessment tools have poor individual predictive value and must not determine who is treated or discharged. This is explicit NICE guidance. Means restriction is one of very few interventions with population-level evidence.",
    "Lithium reduces suicide in mood disorders, and clozapine reduces suicidality in schizophrenia. These are the two pharmacological findings worth knowing."
  ],
  cards:[
    ["What is the most replicated biological finding in suicidal behaviour?","Low cerebrospinal fluid 5-HIAA, the serotonin metabolite, associated with impulsive aggression, violent suicide attempts and completed suicide."],
    ["State Mann's stress-diathesis model of suicidal behaviour.","Suicidal behaviour results from a stressor, typically an acute psychiatric episode or life event, acting on a pre-existing diathesis of impulsive-aggressive traits, pessimism and altered serotonergic function, which is partly independent of the psychiatric disorder itself."],
    ["Which two drugs have specific evidence for reducing suicide?","Lithium in mood disorders, and clozapine for suicidality in schizophrenia."]
  ],
  note:[
    "Hopelessness predicts eventual suicide better than depression severity; Beck Hopelessness Scale.",
    "Risk assessment instruments have poor predictive value at the individual level; NICE is explicit that they must not be used to determine treatment or discharge.",
    "The period immediately after discharge from psychiatric inpatient care carries markedly elevated risk.",
    "Means restriction has population-level evidence, including analgesic pack size limits and barriers at known sites.",
    "A safety plan made with the person, naming warning signs, coping steps, contacts and means restriction, is more useful than an assessment alone."
  ],
  refs:["semgen","nice","noptp"] };

TEACH["3.9.12"] = { free:false,
  simple:"Unexplained does not mean imaginary. The symptom is real, the distress is real, and the mechanism is real too: the brain is generating a prediction about the body that overrides what the body is actually reporting. Telling somebody there is nothing wrong is both untrue and the fastest way to lose them.",
  teach:[
    "Terminology: ICD-11 uses bodily distress disorder, defined by excessive attention to distressing bodily symptoms and repeated contact with services, whether or not a medical condition is present. DSM-5 uses somatic symptom disorder. Both moved away from requiring symptoms to be medically unexplained.",
    "Functional neurological disorder is diagnosed on positive signs, not by exclusion: Hoover's sign, tremor entrainment, and inconsistency between formal testing and observed function.",
    "Predictive processing account: symptoms arise from abnormally precise prior expectations about the body overriding actual sensory input. This gives a mechanism, which matters because it makes the symptom explicable rather than dismissible.",
    "Neuroimaging: altered activity in insula, anterior cingulate and temporoparietal junction, with abnormal connectivity between limbic and motor regions in functional motor disorder.",
    "Attention and interoception: increased attention to bodily sensation amplifies it, and altered interoceptive accuracy is described.",
    "Risk factors: childhood adversity and illness experience, current life stress, alexithymia, and iatrogenic factors including repeated investigation and inconsistent explanation.",
    "Perpetuating factors: avoidance and deconditioning, repeated investigation reinforcing the search for pathology, and unhelpful illness beliefs.",
    "Management: a clear positive explanation of the diagnosis and its mechanism, avoidance of repeated investigation, physiotherapy for functional motor symptoms, and CBT. Explanation itself is therapeutic and is the single most important intervention.",
    "Practice point: never say there is nothing wrong. Say what is wrong, in mechanistic terms the person can use."
  ],
  cards:[
    ["How is functional neurological disorder diagnosed?","On positive clinical signs demonstrating internal inconsistency, such as Hoover's sign, tremor entrainment and variability with distraction. It is not a diagnosis of exclusion."],
    ["What does ICD-11 call this group and how does it differ from previous approaches?","Bodily distress disorder, defined by excessive attention to distressing bodily symptoms with repeated healthcare contact, and applicable whether or not a medical condition is present. It abandons the requirement that symptoms be medically unexplained."],
    ["Give the predictive processing account of functional symptoms.","Abnormally precise prior expectations about bodily state dominate the inference and override actual sensory input, generating a genuine symptom experience without peripheral pathology."]
  ],
  note:[
    "Hoover's sign: weakness of hip extension that normalises on contralateral hip flexion against resistance.",
    "Repeated investigation is iatrogenic and reinforces illness behaviour; the number of investigations correlates with poorer outcome.",
    "Comorbid depression and anxiety are common but are neither necessary nor sufficient for the diagnosis.",
    "Prognosis is better with early diagnosis, clear explanation and shorter symptom duration.",
    "Item 7.1.7 covers somatisation disorder in Paper B; item 7.3 covers general hospital psychiatry."
  ],
  refs:["semliaison","icd11","lishman"] };

TEACH["3.9.13"] = { free:true,
  simple:"Delirium is acute brain failure. The attention system fails first, which is why the person cannot hold a thread, and why the diagnosis is made by asking somebody to count backwards rather than by asking how they feel. It is common, it is dangerous, and the quiet version is the one that gets missed.",
  teach:[
    "Definition: an acute disturbance of attention and awareness, developing over hours to days, fluctuating, with additional cognitive disturbance, and caused by an underlying medical condition, substance or withdrawal.",
    "The cardinal feature is inattention. Test it: serial sevens, months of the year backwards, digit span.",
    "Neurochemistry: cholinergic deficiency and dopaminergic excess is the core hypothesis, supported by anticholinergic drugs precipitating delirium and by dopaminergic drugs doing the same. Serotonin, GABA, glutamate and melatonin are also implicated.",
    "Neuroinflammation: systemic inflammation activates microglia and disrupts the blood-brain barrier, which is why sepsis and surgery are such potent precipitants.",
    "EEG shows diffuse slowing with increased theta and delta. Delirium tremens is the exception, showing fast activity.",
    "Subtypes: hyperactive, hypoactive and mixed. Hypoactive is commoner, is routinely missed, and carries a worse prognosis.",
    "Distinguish from dementia: acute onset, fluctuating course, prominent inattention, clouded consciousness, altered sleep-wake cycle, and perceptual disturbance, in a person with an identifiable medical cause. Dementia is chronic and progressive with clear consciousness until late. Both can co-exist, and dementia is the strongest risk factor for delirium.",
    "Delirium is not benign. It is associated with prolonged admission, functional decline, institutionalisation, subsequent dementia and increased mortality.",
    "Management: identify and treat the cause. Environmental measures, orientation, sensory aids, mobilisation, hydration, sleep hygiene. Antipsychotics only for severe distress or risk, at low dose, briefly, and avoided in Lewy body disease and Parkinson's disease."
  ],
  cards:[
    ["What is the cardinal diagnostic feature of delirium and how is it tested?","Impaired attention. Test with serial sevens, reciting months of the year backwards, or digit span."],
    ["State the core neurochemical hypothesis of delirium.","Cholinergic deficiency with dopaminergic excess, supported by anticholinergic drugs precipitating delirium and by improvement when anticholinergic burden is reduced."],
    ["Which subtype of delirium is commonest and why does it matter?","Hypoactive delirium. It is frequently missed because the patient is quiet and compliant, and it carries a worse prognosis than the hyperactive form."]
  ],
  note:[
    "The 4AT and the Confusion Assessment Method are the standard screening instruments; NICE recommends routine screening in at-risk inpatients.",
    "Dementia is the single strongest risk factor for delirium; others are age, sensory impairment, polypharmacy, surgery, infection and dehydration.",
    "Multicomponent non-pharmacological prevention reduces incidence by around a third.",
    "Delirium is independently associated with subsequent dementia, and the relationship may be causal.",
    "In Lewy body disease and Parkinson's disease dementia, antipsychotics can cause severe deterioration and death."
  ],
  refs:["oxoldage","nice","semliaison"] };

/* ---------------- 3.10 NEURODEGENERATION ---------------- */

TEACH["3.10.1"] = { free:false,
  simple:"Twenty-five years and tens of billions of pounds went into removing amyloid from the brains of people with Alzheimer's disease. It worked: the amyloid came out. The patients mostly did not get better. That gap between clearing the protein and helping the person is the central controversy of the whole field.",
  teach:[
    "The amyloid cascade hypothesis: amyloid-beta accumulation is the initiating event, leading to tau pathology, inflammation, synaptic loss and dementia. Genetics support it, since APP, PSEN1 and PSEN2 mutations and Down syndrome all increase amyloid production and cause disease.",
    "The problems: amyloid burden correlates poorly with cognitive severity; a substantial minority of cognitively normal older people are amyloid positive; and repeated amyloid-lowering trials failed to produce clinically meaningful benefit.",
    "Tau correlates far better with cognitive decline and with Braak staging than amyloid does, which supports tau-centred accounts.",
    "The anti-amyloid antibodies have partially rescued the hypothesis. Lecanemab and donanemab both clear amyloid and slow decline. Both received MHRA licences, donanemab in October 2024. NICE final draft guidance in June 2025 did not recommend either for NHS use, on cost-effectiveness grounds and the modest size of benefit.",
    "ARIA, amyloid-related imaging abnormalities with oedema or haemorrhage, is the key adverse effect and is commoner in APOE e4 homozygotes, requiring MRI monitoring.",
    "Alternative and complementary hypotheses: neuroinflammation and microglial activation; vascular contribution, with mixed pathology being the norm at post-mortem; and the infection hypothesis, including herpes simplex and periodontal organisms, which is not established.",
    "Prion-like propagation: misfolded tau and alpha-synuclein appear to template misfolding in neighbouring cells and spread along connected networks, which explains the anatomical staging of several diseases.",
    "The honest position for teaching: amyloid is necessary but not sufficient, mixed pathology is the rule rather than the exception, and prevention through modifiable risk factors currently offers more than disease modification."
  ],
  cards:[
    ["State the amyloid cascade hypothesis and its principal difficulties.","Amyloid-beta accumulation is the initiating event leading to tau pathology, inflammation, synaptic loss and dementia. Difficulties: amyloid burden correlates poorly with cognitive severity, many cognitively normal older people are amyloid positive, and amyloid-lowering trials largely failed to produce meaningful clinical benefit."],
    ["What is the current UK position on lecanemab and donanemab?","Both received MHRA licences, donanemab in October 2024. NICE final draft guidance in June 2025 did not recommend either for NHS use, so neither is available on the NHS."],
    ["What is ARIA and who is at greatest risk?","Amyloid-related imaging abnormalities with oedema or haemorrhage, the key adverse effect of anti-amyloid monoclonal antibodies, commonest in APOE e4 homozygotes and requiring MRI monitoring."]
  ],
  note:[
    "Tau pathology follows Braak staging and correlates with cognitive decline far better than amyloid burden.",
    "Mixed pathology, Alzheimer plus vascular plus Lewy body, is the commonest finding at post-mortem in older people.",
    "The Lancet Commission identifies modifiable risk factors across the life course accounting for a substantial fraction of dementia cases.",
    "Prion-like templated propagation applies to tau, alpha-synuclein and TDP-43 as well as to PrP.",
    "Amyloid PET positivity does not diagnose Alzheimer's disease in a cognitively normal person."
  ],
  refs:["oxoldage","agrawal","nice"] };

TEACH["3.10.2"] = { free:true,
  simple:"Auguste Deter was admitted in Frankfurt in November 1901. Asked to write her name, she said, I have lost myself. Alzheimer presented her case in 1906 and the room asked no questions. What he had described turned out not to be a rare disease of the middle-aged but the commonest cause of dependency in old age.",
  teach:[
    "Pathology: extracellular beta-amyloid plaques and intracellular neurofibrillary tangles of hyperphosphorylated tau, with synaptic and neuronal loss and cortical atrophy.",
    "Distribution: earliest changes in entorhinal cortex and hippocampus, spreading to limbic then neocortical regions. This is Braak staging, and it predicts the clinical sequence.",
    "Macroscopic: generalised cortical atrophy, widened sulci, narrowed gyri, ventricular enlargement, with medial temporal atrophy prominent on coronal MRI.",
    "Neurochemistry: cholinergic deficit from loss of nucleus basalis of Meynert neurones, which is the rationale for cholinesterase inhibitors. Glutamatergic excitotoxicity is the rationale for memantine.",
    "Genetics: early-onset autosomal dominant forms involve APP on chromosome 21, PSEN1 on 14 and PSEN2 on 1, accounting for under 1 per cent of cases. Late-onset is polygenic, with APOE e4 raising risk in a dose-dependent way and e2 protective.",
    "Down syndrome: virtually universal Alzheimer neuropathology by the fifth decade through APP gene dosage on chromosome 21.",
    "Clinical course: insidious amnestic onset with impaired encoding, so cueing does not help; then dysphasia, dyspraxia and agnosia; then behavioural and psychological symptoms; then physical dependency.",
    "Investigation: MRI showing medial temporal atrophy; FDG-PET showing temporoparietal hypometabolism; CSF showing low amyloid-beta 42 with raised total and phosphorylated tau.",
    "Treatment: cholinesterase inhibitors for mild to moderate disease, memantine for moderate to severe or where cholinesterase inhibitors are not tolerated. Neither modifies the underlying disease."
  ],
  cards:[
    ["Name the pathological hallmarks of Alzheimer's disease and where they appear first.","Extracellular beta-amyloid plaques and intracellular neurofibrillary tangles of hyperphosphorylated tau, appearing first in the entorhinal cortex and hippocampus and spreading to limbic then neocortical regions."],
    ["How does APOE genotype affect risk?","APOE e4 increases risk of late-onset Alzheimer's disease in a dose-dependent manner, with homozygotes at greatest risk and earlier onset. APOE e2 is protective. Genotyping is not used diagnostically or predictively in practice."],
    ["Which genes cause early-onset autosomal dominant Alzheimer's disease?","APP on chromosome 21, presenilin 1 on chromosome 14, and presenilin 2 on chromosome 1. Together these account for under 1 per cent of all cases."]
  ],
  note:[
    "Auguste Deter was admitted 25 November 1901; Alzheimer presented the case on 3 November 1906; she died on 8 April 1906. The frequently cited date of 1897 is wrong.",
    "Prevalence roughly doubles every five years after 65, reaching around 20 per cent over 85.",
    "CSF biomarker profile: reduced amyloid-beta 42, raised total tau and raised phosphorylated tau.",
    "Cholinesterase inhibitor adverse effects: nausea, vomiting, diarrhoea, bradycardia, syncope and vivid dreams. Caution with cardiac conduction disease.",
    "Antipsychotics in dementia raise stroke risk roughly threefold and increase mortality; use only for severe distress or risk, at the lowest dose, time-limited."
  ],
  refs:["oxoldage","nice","lishman"] };

TEACH["3.10.3"] = { free:false,
  simple:"Vascular dementia is the one you can prevent. Every stroke, every year of untreated blood pressure and every unmanaged diabetes takes a small piece, and unlike the protein diseases, the causes are all things medicine already knows how to treat.",
  teach:[
    "Subtypes: multi-infarct dementia from multiple cortical infarcts; subcortical small vessel disease with lacunes and white matter change, which is the commonest; strategic infarct dementia from a single lesion in a critical site such as thalamus or angular gyrus; and mixed dementia with concurrent Alzheimer pathology.",
    "Classical presentation: stepwise deterioration with abrupt onset, patchy deficits, preserved insight and personality until late, focal neurological signs, and emotional lability. The subcortical form is often gradual rather than stepwise, which is why the classical description misleads.",
    "Cognitive profile is subcortical and frontal: slowed processing, executive dysfunction, attentional impairment, with relatively preserved recognition memory. Cueing helps, unlike in Alzheimer's disease.",
    "Risk factors are the vascular ones: hypertension, diabetes, smoking, atrial fibrillation, hyperlipidaemia, previous stroke, and physical inactivity. Midlife hypertension is the strongest modifiable factor.",
    "Imaging: multiple infarcts, lacunes, or confluent periventricular and deep white matter hyperintensities.",
    "CADASIL: cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy, caused by NOTCH3 mutation. Presents with migraine with aura, recurrent subcortical strokes, mood disorder and early dementia.",
    "Binswanger disease is the term for subcortical arteriosclerotic encephalopathy with extensive white matter change.",
    "Treatment: there is no licensed cognitive treatment. Management is aggressive vascular risk factor control. Cholinesterase inhibitors are not recommended in pure vascular dementia but are used where Alzheimer pathology co-exists.",
    "Vascular depression hypothesis: white matter disease is associated with late-onset depression, executive dysfunction and poorer antidepressant response."
  ],
  cards:[
    ["How does the cognitive profile of vascular dementia differ from Alzheimer's disease?","Vascular dementia produces a subcortical and frontal pattern with slowed processing, executive dysfunction and attentional impairment, with relatively preserved recognition memory so cueing helps. Alzheimer's disease produces an amnestic encoding deficit in which cueing does not help."],
    ["What is CADASIL and what causes it?","Cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy, caused by NOTCH3 mutation on chromosome 19, presenting with migraine with aura, recurrent subcortical strokes, mood disturbance and early dementia."],
    ["What is the treatment of vascular dementia?","There is no licensed cognitive treatment. Management is control of vascular risk factors: blood pressure, diabetes, lipids, smoking cessation, atrial fibrillation and physical activity."]
  ],
  note:[
    "Midlife hypertension is the strongest modifiable vascular risk factor for later dementia.",
    "The Hachinski Ischaemic Score was historically used to distinguish vascular from Alzheimer dementia and is insensitive to small vessel disease.",
    "Mixed dementia is more common than pure vascular dementia at post-mortem in older people.",
    "Post-stroke depression is common, independently worsens rehabilitation outcome, and is treatable.",
    "Cholinesterase inhibitors are not recommended for pure vascular dementia by NICE."
  ],
  refs:["oxoldage","nice","lishman"] };

TEACH["3.10.4"] = { free:true,
  simple:"A man in his fifties stops caring. He eats sweets by the packet, says something appalling at a funeral, and his memory is perfect. He is not depressed and he is not being difficult. Frontotemporal dementia takes the personality first and leaves the memory, which is exactly backwards from what everybody expects, and it is why these patients are so often sent to general psychiatry first.",
  teach:[
    "Three clinical syndromes: behavioural variant, semantic dementia, and progressive non-fluent aphasia.",
    "Behavioural variant: early personality change, disinhibition, apathy, loss of empathy, perseverative and stereotyped behaviour, hyperorality and dietary change, with relatively preserved memory and visuospatial function.",
    "Semantic dementia: fluent speech empty of content, loss of word meaning, impaired naming and single-word comprehension, with associative agnosia. Left anterior temporal atrophy.",
    "Progressive non-fluent aphasia: effortful agrammatic speech with apraxia of speech, comprehension of single words preserved. Left perisylvian atrophy.",
    "Pathology: TDP-43 inclusions in around half; tau in most of the remainder, including Pick bodies in classical Pick's disease; a small proportion FUS. The clinical syndrome does not reliably predict the protein.",
    "Genetics: a substantial minority, up to a third, have a family history. C9orf72 hexanucleotide repeat expansion is the commonest, and is also the commonest genetic cause of motor neurone disease. MAPT and progranulin are the others.",
    "The overlap with motor neurone disease is important: around 15 per cent of frontotemporal dementia patients develop motor neurone disease, and the combination carries a much shorter survival.",
    "Onset is typically before 65, making it one of the commonest causes of young-onset dementia alongside Alzheimer's disease.",
    "Investigation: MRI showing frontal and anterior temporal atrophy, often asymmetrical; FDG-PET showing frontal and anterior temporal hypometabolism. MMSE may be entirely normal.",
    "Treatment: no disease-modifying or symptomatic cognitive treatment. Cholinesterase inhibitors are not indicated and may worsen behaviour. SSRIs may help behavioural symptoms. Management is largely non-pharmacological and carer-focused."
  ],
  cards:[
    ["Name the three clinical syndromes of frontotemporal lobar degeneration.","Behavioural variant frontotemporal dementia, semantic dementia, and progressive non-fluent aphasia."],
    ["Which proteins accumulate in frontotemporal lobar degeneration?","TDP-43 in around half of cases, tau in most of the remainder including Pick bodies, and FUS in a small proportion. The clinical syndrome does not reliably predict the underlying protein."],
    ["Which genetic mutation is commonest in familial frontotemporal dementia and what else does it cause?","C9orf72 hexanucleotide repeat expansion, which is also the commonest genetic cause of amyotrophic lateral sclerosis. MAPT and progranulin mutations account for most of the remainder."]
  ],
  note:[
    "Onset is typically before 65; it is a leading cause of young-onset dementia.",
    "Around 15 per cent develop motor neurone disease, which markedly shortens survival.",
    "The MMSE is frequently normal in behavioural variant frontotemporal dementia; use frontal and social cognition testing.",
    "Cholinesterase inhibitors are not indicated and may worsen behavioural symptoms.",
    "Behavioural variant FTD is regularly misdiagnosed as depression, mania, personality disorder or midlife crisis before the diagnosis is made."
  ],
  refs:["oxoldage","lishman","oxneuropsy"] };

TEACH["3.10.5"] = { free:true,
  simple:"Robin Williams was told he had early Parkinson's disease. After he died the autopsy found something else: Lewy bodies through the whole cortex, among the worst the neuropathologist had seen. He had hallucinations, delusions, insomnia and a collapse in his ability to remember lines. The diagnosis was missed, and it is missed constantly.",
  teach:[
    "Alpha-synuclein is the protein. Lewy bodies are intracytoplasmic inclusions, brainstem in Parkinson's disease and cortical as well in dementia with Lewy bodies.",
    "Core clinical features of dementia with Lewy bodies: fluctuating cognition with pronounced variation in attention and alertness; recurrent well-formed visual hallucinations; REM sleep behaviour disorder, which may precede everything by years; and one or more spontaneous parkinsonian features.",
    "Supportive features: severe neuroleptic sensitivity, postural instability, repeated falls, syncope, autonomic dysfunction, hypersomnia, hyposmia, delusions and apathy.",
    "Indicative biomarkers: reduced dopamine transporter uptake on DaTSCAN, abnormal MIBG cardiac scintigraphy, and confirmation of REM sleep without atonia on polysomnography.",
    "The one-year rule separates dementia with Lewy bodies from Parkinson's disease dementia: dementia beginning before, with, or within a year of parkinsonism is DLB; more than a year after motor onset is Parkinson's disease dementia. The pathology is the same.",
    "Cognitive profile is attentional, executive and visuospatial rather than primarily amnestic, which is another reason it is mistaken for delirium or depression.",
    "Severe neuroleptic sensitivity occurs in a substantial proportion and can cause irreversible deterioration and death. Antipsychotics must be avoided; if unavoidable, quetiapine or clozapine at very low dose.",
    "Cholinesterase inhibitors work better here than in Alzheimer's disease, particularly for hallucinations and fluctuation. Rivastigmine is licensed for Parkinson's disease dementia.",
    "REM sleep behaviour disorder is the strongest prodromal marker of the synucleinopathies, and most people with it eventually develop one."
  ],
  cards:[
    ["Name the four core clinical features of dementia with Lewy bodies.","Fluctuating cognition with pronounced variation in attention and alertness; recurrent well-formed visual hallucinations; REM sleep behaviour disorder; and one or more spontaneous cardinal features of parkinsonism."],
    ["State the one-year rule.","If dementia begins before, concurrently with, or within one year of the onset of parkinsonism, the diagnosis is dementia with Lewy bodies. If it begins more than a year after established Parkinson's disease, it is Parkinson's disease dementia. The underlying pathology is the same."],
    ["Why must antipsychotics be avoided in Lewy body disease?","Severe neuroleptic sensitivity occurs in a substantial proportion, producing marked worsening of parkinsonism, sedation, confusion, autonomic instability and irreversible deterioration, with an associated increase in mortality."]
  ],
  note:[
    "Dementia with Lewy bodies is the second or third commonest degenerative dementia and is substantially underdiagnosed.",
    "Multiple system atrophy and pure autonomic failure are the other synucleinopathies; progressive supranuclear palsy and corticobasal degeneration are tauopathies.",
    "Robin Williams was diagnosed with early Parkinson's disease in May 2014 and died in August 2014; autopsy showed diffuse Lewy body disease. His widow published the account in Neurology in 2016.",
    "Cholinesterase inhibitors are more effective for hallucinations and fluctuation in Lewy body disease than in Alzheimer's disease.",
    "REM sleep behaviour disorder confers a high long-term risk of conversion to a synucleinopathy and should be asked about directly."
  ],
  refs:["oxoldage","lishman","nice"] };

TEACH["3.10.6"] = { free:false,
  simple:"A prion is a protein that has folded the wrong way and can persuade its neighbours to fold the same way. It is an infection with no genetic material at all, which is why the idea took so long to be accepted, and why the usual sterilisation does not destroy it.",
  teach:[
    "The prion protein PrP-C is a normal cellular protein. The disease form PrP-Sc is a misfolded isoform, rich in beta-sheet, which templates the misfolding of normal protein. Prusiner received the 1997 Nobel Prize for the concept.",
    "Pathology: spongiform change, neuronal loss and astrocytosis, with no inflammatory infiltrate, which is unusual for an infection.",
    "Sporadic Creutzfeldt-Jakob disease is the commonest form, around 85 per cent. Onset typically in the sixth or seventh decade, with rapidly progressive dementia, myoclonus and cerebellar ataxia. Median survival is around four to six months.",
    "Investigation in sporadic CJD: EEG showing periodic sharp wave complexes at roughly 1 per second; MRI showing cortical ribboning and basal ganglia hyperintensity on DWI and FLAIR; CSF 14-3-3 protein and RT-QuIC, which is now the most specific test.",
    "Variant CJD, from bovine spongiform encephalopathy exposure: much younger patients, median around 26 years, presenting with psychiatric symptoms first, dysphoria, anxiety and withdrawal, then painful sensory disturbance, then ataxia and dementia. Duration is longer, around 14 months. MRI shows the pulvinar sign, and pathology shows florid plaques.",
    "The psychiatric presentation of variant CJD matters: these patients came to psychiatrists first, and many were treated for depression for months.",
    "Genetic forms, around 10 to 15 per cent: familial CJD, Gerstmann-Straussler-Scheinker syndrome, and fatal familial insomnia, all from PRNP mutations.",
    "Acquired forms: kuru, from ritual cannibalism in Papua New Guinea; iatrogenic CJD from human pituitary growth hormone, dura mater grafts and contaminated neurosurgical instruments.",
    "Codon 129 polymorphism of PRNP modifies susceptibility; all definite variant CJD cases tested have been methionine homozygous.",
    "Prions resist standard autoclaving and formalin, which is why instrument decontamination protocols are specific and why single-use instruments are used in high-risk procedures."
  ],
  cards:[
    ["Contrast sporadic and variant CJD.","Sporadic CJD: around 85 per cent of cases, onset in the sixth or seventh decade, rapidly progressive dementia with myoclonus and ataxia, median survival four to six months, periodic sharp waves on EEG. Variant CJD: much younger, median around 26, psychiatric presentation first, then painful sensory symptoms, ataxia and dementia, duration around 14 months, pulvinar sign on MRI and florid plaques."],
    ["What is the most specific CSF test for prion disease?","RT-QuIC, real-time quaking-induced conversion, which detects the seeding activity of misfolded prion protein and has largely superseded 14-3-3 protein."],
    ["Name the acquired forms of human prion disease.","Kuru, from ritual cannibalism; iatrogenic CJD from cadaveric pituitary growth hormone, dura mater grafts and contaminated neurosurgical instruments; and variant CJD from dietary exposure to bovine spongiform encephalopathy."]
  ],
  note:[
    "Prusiner, Nobel Prize in Physiology or Medicine, 1997, for the prion concept.",
    "Spongiform change with no inflammatory infiltrate is the pathological signature.",
    "Codon 129 methionine homozygosity has been found in all tested definite variant CJD cases.",
    "Fatal familial insomnia presents with progressive insomnia, dysautonomia and dementia, with thalamic degeneration.",
    "Prion-like templated propagation is now proposed for tau, alpha-synuclein and TDP-43, which is why this section informs the rest of neurodegeneration."
  ],
  refs:["lishman","oxneuropsy","agrawal"] };

TEACH["3.10.7"] = { free:false,
  simple:"Before effective treatment, HIV commonly reached the brain and produced a dementia in people in their thirties. Modern therapy changed that almost completely. What is left is milder, commoner, and easy to attribute to depression or to the drugs instead.",
  teach:[
    "HIV enters the CNS early, within days to weeks of infection, carried across the blood-brain barrier in infected monocytes, the Trojan horse mechanism. It infects microglia and macrophages, not neurones directly.",
    "Damage is indirect, through inflammatory cytokines, viral proteins including gp120 and Tat, and excitotoxicity.",
    "Pathology: HIV encephalitis with multinucleated giant cells, microglial nodules, and predominantly subcortical white matter and basal ganglia involvement.",
    "HIV-associated neurocognitive disorder has three levels: asymptomatic neurocognitive impairment, mild neurocognitive disorder, and HIV-associated dementia.",
    "The profile is subcortical: psychomotor slowing, apathy, impaired attention and executive function, with relatively preserved naming and recognition. Motor slowing and gait disturbance are common.",
    "Antiretroviral therapy has made HIV-associated dementia uncommon, but milder impairment persists in a substantial minority even with viral suppression.",
    "Differential diagnosis is essential and time-critical: opportunistic infection including cryptococcal meningitis, toxoplasmosis and progressive multifocal leukoencephalopathy; CNS lymphoma; neurosyphilis; and drug effects. Efavirenz in particular causes vivid dreams, mood change and, uncommonly, psychosis.",
    "Depression is very common in people living with HIV and is under-treated. It is not the same as neurocognitive disorder and must be distinguished.",
    "Psychiatric considerations: adherence is the determinant of outcome, and psychiatric illness is the leading modifiable barrier to it. Drug interactions with antiretrovirals, particularly protease inhibitors and CYP inhibition, must be checked before prescribing."
  ],
  cards:[
    ["What cognitive profile does HIV-associated neurocognitive disorder produce?","A subcortical profile: psychomotor slowing, apathy, impaired attention and executive function, with relatively preserved naming and recognition memory, often with motor slowing and gait disturbance."],
    ["How does HIV damage the brain?","It enters the CNS early within infected monocytes, the Trojan horse mechanism, and infects microglia and macrophages rather than neurones. Damage is indirect, through inflammatory cytokines, viral proteins such as gp120 and Tat, and excitotoxicity."],
    ["Which antiretroviral is most associated with neuropsychiatric adverse effects?","Efavirenz, causing vivid dreams, insomnia, mood disturbance and, uncommonly, psychosis, typically in the first weeks of treatment."]
  ],
  note:[
    "Antiretroviral therapy has greatly reduced the incidence of HIV-associated dementia; milder impairment remains common.",
    "Always exclude opportunistic infection, CNS lymphoma and neurosyphilis before attributing cognitive decline to HIV itself.",
    "Check drug interactions before prescribing any psychotropic in a patient on antiretrovirals; protease inhibitors are potent CYP inhibitors.",
    "Depression is common, under-treated, and the leading modifiable barrier to adherence.",
    "Neurosyphilis remains a treatable cause of dementia and psychosis and should be considered in any atypical presentation."
  ],
  refs:["lishman","oxneuropsy","semliaison"] };
