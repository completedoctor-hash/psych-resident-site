/* Critical Appraisal: formula boxes and simple diagrams, added under
   "In plain English". Matched to each topic by its title. */
(function () {
  var N = "#1A2E4A", T = "#1E9E92", G = "#C9A227", R = "#7A1F2B", L = "#d9d4c7";
  function svg(w, h, s) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" style="width:100%;max-width:560px;height:auto;display:block;margin:6px auto" font-family="Helvetica Neue,Arial,sans-serif" font-size="13">' + s + '</svg>'; }
  function tx(x, y, s, o) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle"' + (o || '') + '>' + s + '</text>'; }
  function bx(x, y, w, h, f, s, c) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '" stroke="' + N + '"/>' + tx(x + w / 2, y + h / 2 + 5, s, ' fill="' + (c || N) + '" font-weight="700"'); }
  var ar = '<defs><marker id="ca-a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="' + N + '"/></marker></defs>';
  function ln(x1, y1, x2, y2, a, c) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || N) + '" stroke-width="2"' + (a ? ' marker-end="url(#ca-a)"' : '') + '/>'; }

  var D = {
    twobytwo: svg(420, 230,
      tx(250, 18, 'Disease / Outcome', ' font-weight="700"') + tx(190, 40, 'Present') + tx(310, 40, 'Absent') +
      '<text x="20" y="95" font-weight="700">Test +</text><text x="20" y="165" font-weight="700">Test −</text>' +
      bx(130, 50, 120, 70, '#e6f4f2', 'a  (TP)') + bx(250, 50, 120, 70, '#f8e9eb', 'b  (FP)') +
      bx(130, 120, 120, 70, '#f8e9eb', 'c  (FN)') + bx(250, 120, 120, 70, '#e6f4f2', 'd  (TN)') +
      tx(210, 215, 'Down: sens & spec · Across: PPV & NPV', ' font-size="12" fill="' + R + '"')),
    normal: svg(460, 210,
      '<path d="M30,180 C150,180 170,20 230,20 C290,20 310,180 430,180" fill="#e6f4f2" stroke="' + T + '" stroke-width="2"/>' +
      ln(30, 180, 430, 180) + ln(230, 20, 230, 180, 0, G) +
      [[-3, 50], [-2, 80], [-1, 130], [1, 330], [2, 380], [3, 410]].map(function (p) { return ln(p[1], 175, p[1], 185) + tx(p[1], 200, (p[0] > 0 ? '+' : '') + p[0] + 'SD', ' font-size="11"'); }).join('') +
      tx(230, 200, 'mean', ' font-size="11"') + tx(230, 120, '68%', ' font-weight="700"') + tx(230, 145, '±1 SD', ' font-size="11"') +
      tx(100, 60, '95% within ±2 SD', ' font-size="12" fill="' + N + '"') + tx(360, 60, '99.7% within ±3 SD', ' font-size="12" fill="' + N + '"')),
    ci: svg(460, 170,
      ln(230, 15, 230, 150, 0, R) + tx(230, 165, 'Line of no effect (0 for differences, 1 for ratios)', ' font-size="11" fill="' + R + '"') +
      ln(260, 45, 380, 45) + '<circle cx="320" cy="45" r="6" fill="' + T + '"/>' + '<text x="390" y="50" font-size="12">Significant</text>' +
      ln(150, 95, 300, 95) + '<circle cx="225" cy="95" r="6" fill="' + G + '"/>' + '<text x="310" y="100" font-size="12">Not significant</text>' +
      tx(110, 50, 'CI misses the line →', ' font-size="11"') + tx(85, 100, 'CI crosses the line →', ' font-size="11"')),
    pyramid: svg(420, 250,
      [['Systematic reviews / meta-analyses', T], ['Randomised controlled trials', T], ['Cohort studies', N], ['Case-control studies', N], ['Cross-sectional / case series', G], ['Expert opinion', R]].map(function (r, i) {
        var y = 15 + i * 37, w = 120 + i * 50, x = 210 - w / 2; return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="33" fill="' + r[1] + '" opacity=".88"/>' + tx(210, y + 21, r[0], ' fill="#fff" font-size="12" font-weight="700"');
      }).join('') + tx(210, 247, 'Higher = less bias', ' font-size="11"')),
    design: svg(500, 230, ar +
      bx(170, 5, 160, 34, '#fff', 'Did investigator assign?') +
      ln(210, 39, 110, 75, 1) + ln(290, 39, 390, 75, 1) + tx(140, 58, 'Yes', ' font-size="11"') + tx(360, 58, 'No', ' font-size="11"') +
      bx(40, 78, 140, 34, '#e6f4f2', 'Experimental') + bx(320, 78, 140, 34, '#fbf5e3', 'Observational') +
      ln(110, 112, 110, 150, 1) + bx(40, 152, 140, 34, T, 'Random? → RCT', '#fff') +
      ln(350, 112, 270, 150, 1) + ln(390, 112, 390, 150, 1) + ln(430, 112, 470, 150, 1) +
      bx(205, 152, 110, 34, '#fff', 'Cohort') + bx(325, 152, 95, 34, '#fff', 'Case-control') + bx(425, 152, 70, 34, '#fff', 'Cross-sec') +
      tx(260, 205, 'exposure → outcome', ' font-size="11"') + tx(372, 205, 'outcome → back to exposure', ' font-size="11"') + tx(460, 220, 'one moment', ' font-size="11"')),
    confound: svg(420, 190, ar +
      bx(150, 10, 120, 36, '#fbf5e3', 'Confounder') + bx(20, 135, 120, 36, '#e6f4f2', 'Exposure') + bx(280, 135, 120, 36, '#e6f4f2', 'Outcome') +
      ln(175, 46, 95, 132, 1) + ln(245, 46, 325, 132, 1) + ln(140, 153, 276, 153, 1, R) + tx(210, 145, '?', ' font-size="16" fill="' + R + '" font-weight="700"') +
      tx(210, 186, 'Linked to BOTH, not on the causal path. e.g. smoking: coffee → lung cancer', ' font-size="11"')),
    forest: svg(460, 220,
      ln(230, 10, 230, 185, 0, R) + tx(230, 205, 'No effect (RR/OR = 1)', ' font-size="11" fill="' + R + '"') + tx(110, 205, '← favours treatment', ' font-size="11"') + tx(350, 205, 'favours control →', ' font-size="11"') +
      [[30, 140, 260, 'Study A', 8], [60, 120, 210, 'Study B', 12], [90, 170, 240, 'Study C', 6], [120, 100, 200, 'Study D', 14]].map(function (s) {
        return '<text x="15" y="' + (s[0] + 5) + '" font-size="12">' + s[3] + '</text>' + ln(s[1], s[0], s[2], s[0]) + '<rect x="' + ((s[1] + s[2]) / 2 - s[4] / 2) + '" y="' + (s[0] - s[4] / 2) + '" width="' + s[4] + '" height="' + s[4] + '" fill="' + N + '"/>';
      }).join('') + '<polygon points="140,160 170,152 200,160 170,168" fill="' + T + '"/>' + '<text x="15" y="165" font-size="12" font-weight="700">Pooled</text>' +
      '<text x="290" y="85" font-size="11">Box size = study weight</text><text x="290" y="160" font-size="11">Diamond = overall result</text>'),
    km: svg(460, 210,
      ln(50, 20, 50, 170) + ln(50, 170, 430, 170) + tx(25, 95, 'Survival', ' font-size="11" transform="rotate(-90 25 95)"') + tx(240, 195, 'Time', ' font-size="11"') +
      '<text x="30" y="25" font-size="11">1.0</text><text x="30" y="173" font-size="11">0</text>' +
      '<path d="M50,30 H120 V50 H200 V70 H280 V85 H360 V95 H420" fill="none" stroke="' + T + '" stroke-width="2.5"/>' +
      '<path d="M50,30 H100 V65 H170 V100 H240 V125 H320 V140 H420" fill="none" stroke="' + R + '" stroke-width="2.5"/>' +
      '<text x="330" y="78" font-size="12" fill="' + T + '">Treatment</text><text x="330" y="135" font-size="12" fill="' + R + '">Control</text>' +
      tx(240, 15, 'Each step down = an event. Gap between curves → hazard ratio', ' font-size="11"')),
    funnel: svg(420, 210,
      ln(50, 20, 50, 180) + ln(50, 180, 400, 180) + tx(225, 200, 'Effect size', ' font-size="11"') + tx(25, 100, 'Precision', ' font-size="11" transform="rotate(-90 25 100)"') +
      '<polygon points="225,25 90,175 360,175" fill="#e6f4f2" stroke="' + T + '" stroke-dasharray="4 3"/>' + ln(225, 25, 225, 175, 0, G) +
      [[220, 40], [230, 60], [210, 80], [240, 90], [195, 110], [255, 120], [180, 140], [270, 150], [160, 165]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + N + '"/>'; }).join('') +
      '<text x="290" y="60" font-size="11">Symmetric = no bias</text><text x="290" y="78" font-size="11">Gap at bottom-left =</text><text x="290" y="94" font-size="11" fill="' + R + '">publication bias</text>'),
    roc: svg(380, 230,
      ln(50, 20, 50, 190) + ln(50, 190, 340, 190) + '<line x1="50" y1="190" x2="340" y2="20" stroke="' + L + '" stroke-dasharray="5 4" stroke-width="2"/>' +
      '<path d="M50,190 C60,60 120,30 340,20" fill="none" stroke="' + T + '" stroke-width="2.5"/>' +
      tx(195, 215, '1 − specificity (false positive rate)', ' font-size="11"') + tx(22, 105, 'Sensitivity', ' font-size="11" transform="rotate(-90 22 105)"') +
      '<text x="200" y="130" font-size="11" fill="#888">AUC 0.5 = coin toss</text><text x="90" y="45" font-size="11" fill="' + T + '">Closer to top-left = better</text>'),
    cutoff: svg(460, 190,
      '<path d="M30,160 C90,160 100,40 150,40 C200,40 210,160 270,160" fill="#e6f4f2" stroke="' + T + '" stroke-width="2"/>' +
      '<path d="M190,160 C250,160 260,40 310,40 C360,40 370,160 430,160" fill="#f8e9eb" stroke="' + R + '" stroke-width="2"/>' +
      ln(230, 20, 230, 170, 0, N) + tx(230, 15, 'cut-off', ' font-size="11" font-weight="700"') + ln(20, 160, 440, 160) +
      tx(150, 180, 'Healthy', ' font-size="12" fill="' + T + '"') + tx(310, 180, 'Disease', ' font-size="12" fill="' + R + '"') +
      tx(230, 105, 'Move left → ↑sens ↓spec · Move right → ↑spec ↓sens', ' font-size="11"')),
    chain: svg(500, 120, ar +
      bx(10, 40, 110, 40, '#fff', 'Pre-test prob') + bx(140, 40, 100, 40, '#fbf5e3', 'Pre-test odds') + bx(270, 40, 100, 40, '#fbf5e3', 'Post-test odds') + bx(390, 40, 105, 40, T, 'Post-test prob', '#fff') +
      ln(120, 60, 138, 60, 1) + ln(240, 60, 268, 60, 1) + ln(370, 60, 388, 60, 1) +
      tx(129, 30, 'p/(1−p)', ' font-size="11"') + tx(255, 30, '× LR', ' font-size="12" font-weight="700" fill="' + R + '"') + tx(380, 30, 'o/(1+o)', ' font-size="11"') +
      tx(250, 108, 'Probability ⇄ Odds is the only conversion you ever need', ' font-size="11"')),
    bars: svg(440, 170,
      ln(40, 150, 420, 150) + '<rect x="90" y="40" width="90" height="110" fill="' + R + '" opacity=".85"/><rect x="250" y="80" width="90" height="70" fill="' + T + '"/>' +
      tx(135, 32, 'CER 30%', ' font-weight="700"') + tx(295, 72, 'EER 20%', ' font-weight="700"') + tx(135, 168, 'Control', ' font-size="12"') + tx(295, 168, 'Treatment', ' font-size="12"') +
      '<line x1="200" y1="40" x2="200" y2="80" stroke="' + G + '" stroke-width="3"/>' + '<text x="208" y="65" font-size="12" font-weight="700">ARR = 10%  →  NNT = 10</text>')
  };

  var F = [
    [/odds to probability/i, ['Probability = Odds ÷ (1 + Odds)', 'Odds 4 → 4 ÷ 5 = 0.80'], 'chain'],
    [/probability to odds|^odds$|odds\b(?!.*ratio)/i, ['Odds = p ÷ (1 − p)', 'p = 0.2 → 0.2 ÷ 0.8 = 0.25'], 'chain'],
    [/lr\s*\+|lr\+|positive likelihood/i, ['LR+ = Sensitivity ÷ (1 − Specificity)', 'Sens 0.9, Spec 0.8 → 0.9 ÷ 0.2 = 4.5', '> 10 rules IN'], 'chain'],
    [/lr\s*−|lr-|lr−|negative likelihood/i, ['LR− = (1 − Sensitivity) ÷ Specificity', 'Sens 0.9, Spec 0.8 → 0.1 ÷ 0.8 = 0.125', '< 0.1 rules OUT'], 'chain'],
    [/likelihood|post-test|pre-test|core calculation|positive tests|negative tests|nomogram|bayes/i, ['Pre-test odds = p ÷ (1 − p)', 'Post-test odds = Pre-test odds × LR', 'Post-test probability = Post-test odds ÷ (1 + Post-test odds)'], 'chain'],
    [/sensitivity|specificity|2\s*[×x]\s*2|diagnostic|ppv|npv|predictive|accuracy/i, ['Sensitivity = a ÷ (a + c)   (SnNOut)', 'Specificity = d ÷ (b + d)   (SpPIn)', 'PPV = a ÷ (a + b)    NPV = d ÷ (c + d)', 'Accuracy = (a + d) ÷ (a + b + c + d)', 'Prevalence = (a + c) ÷ total — PPV rises as prevalence rises'], 'twobytwo'],
    [/cut-off|cutoff|screening/i, ['Lower the cut-off → sensitivity ↑, specificity ↓', 'Raise the cut-off → specificity ↑, sensitivity ↓'], 'cutoff'],
    [/roc|receiver/i, ['x-axis = 1 − Specificity, y-axis = Sensitivity', 'AUC 0.5 useless · 0.7–0.8 fair · > 0.9 excellent'], 'roc'],
    [/arr|nnt|nnh|absolute risk|number needed/i, ['CER = c ÷ (c + d)    EER = a ÷ (a + b)', 'ARR = CER − EER', 'NNT = 1 ÷ ARR (always round UP)', 'NNH = 1 ÷ ARI'], 'bars'],
    [/rrr|relative risk reduction/i, ['RRR = (CER − EER) ÷ CER = ARR ÷ CER', 'or RRR = 1 − RR'], 'bars'],
    [/relative risk|\brr\b|risk ratio|treatment effect|cohort/i, ['RR = EER ÷ CER = [a ÷ (a + b)] ÷ [c ÷ (c + d)]', 'RR 1 = no effect · < 1 protective · > 1 harmful'], 'bars'],
    [/odds ratio|\bor\b|case-control/i, ['OR = (a × d) ÷ (b × c)', 'OR ≈ RR when the outcome is rare (< 10%)'], 'twobytwo'],
    [/standard error|\bsem?\b/i, ['SE = SD ÷ √n', 'Quadruple n → SE halves'], 'normal'],
    [/confidence interval|\bci\b/i, ['95% CI = mean ± 1.96 × SE', '99% CI = mean ± 2.58 × SE', 'CI crosses 0 (difference) or 1 (ratio) → not significant'], 'ci'],
    [/68|normal distribution|z-score|z score|standard deviation|distribution/i, ['z = (x − mean) ÷ SD', '±1 SD = 68% · ±2 SD (1.96) = 95% · ±3 SD = 99.7%'], 'normal'],
    [/power|sample size|type i|type ii|error/i, ['Power = 1 − β (usually 0.8)', 'α = Type I error (false positive, usually 0.05)', 'β = Type II error (false negative)', 'Power ↑ with larger n, larger effect, less variance'], 'normal'],
    [/standardi[sz]ed difference|effect size|cohen/i, ['Effect size (d) = (mean₁ − mean₂) ÷ pooled SD', '0.2 small · 0.5 medium · 0.8 large'], 'normal'],
    [/kaplan|survival|hazard/i, ['HR = hazard in treatment ÷ hazard in control', 'HR 0.7 → 30% lower rate of the event at any moment', 'Median survival = time where curve crosses 0.5'], 'km'],
    [/heterogeneity|i²|i2|cochran/i, ['I² = (Q − df) ÷ Q × 100%', '25% low · 50% moderate · 75% high'], 'forest'],
    [/forest|meta-analysis|systematic review|pooled/i, ['Line of no effect: 1 for ratios, 0 for differences', 'Diamond not touching the line → significant overall'], 'forest'],
    [/funnel|publication bias/i, ['Asymmetry → small negative studies missing'], 'funnel'],
    [/hierarchy|levels of evidence/i, null, 'pyramid'],
    [/study design|rct|randomi[sz]ed|cross-sectional|observational/i, null, 'design'],
    [/confound|bias|validity/i, ['Confounder: linked to exposure AND outcome, not on the causal path', 'Fix at design: randomise, restrict, match · at analysis: stratify, adjust'], 'confound'],
    [/mean|median|mode|descriptive|central tendency/i, ['Mean = Σx ÷ n', 'Skew: positive → mean > median > mode', 'Negative skew → mean < median < mode'], 'normal'],
    [/qaly|cost|economic/i, ['ICER = (Cost A − Cost B) ÷ (QALY A − QALY B)', 'QALY = years of life × quality (0–1)', 'NICE threshold ≈ £25,000–£35,000 per QALY'], null],
    [/kappa|reliability|agreement/i, ['κ = (Observed − Expected agreement) ÷ (1 − Expected)', '< 0.2 poor · 0.4–0.6 moderate · > 0.8 very good'], null],
    [/incidence|prevalence/i, ['Prevalence = existing cases ÷ population at a point', 'Incidence = new cases ÷ population at risk over time', 'Prevalence ≈ Incidence × Duration'], null],
    [/attributable|\bpar\b|ari\b/i, ['Attributable risk = Risk exposed − Risk unexposed', 'PAR = Risk in population − Risk unexposed'], 'bars']
  ];


  /* ---- more diagrams ---- */
  D.skew = svg(460, 200,
    ln(20, 170, 440, 170) + '<path d="M30,170 C60,170 80,30 120,30 C170,30 230,150 430,165" fill="#e6f4f2" stroke="' + T + '" stroke-width="2"/>' +
    ln(120, 30, 120, 170, 0, N) + ln(165, 52, 165, 170, 0, G) + ln(215, 100, 215, 170, 0, R) +
    tx(115, 188, 'Mode', ' font-size="11"') + tx(165, 188, 'Median', ' font-size="11"') + tx(215, 188, 'Mean', ' font-size="11" fill="' + R + '"') +
    tx(330, 70, 'Positive (right) skew:', ' font-size="12" font-weight="700"') + tx(330, 90, 'tail points right', ' font-size="12"') + tx(330, 110, 'Mode < Median < Mean', ' font-size="12" fill="' + R + '"') + tx(330, 135, 'Negative skew = the reverse', ' font-size="11"'));
  D.box = svg(460, 150,
    ln(40, 70, 130, 70) + ln(40, 55, 40, 85) + '<rect x="130" y="45" width="180" height="50" fill="#e6f4f2" stroke="' + N + '" stroke-width="2"/>' + ln(210, 45, 210, 95, 0, R) + ln(310, 70, 420, 70) + ln(420, 55, 420, 85) +
    tx(40, 110, 'Min', ' font-size="11"') + tx(130, 110, 'Q1 (25%)', ' font-size="11"') + tx(210, 110, 'Median', ' font-size="11" fill="' + R + '"') + tx(310, 110, 'Q3 (75%)', ' font-size="11"') + tx(420, 110, 'Max', ' font-size="11"') +
    tx(220, 30, 'IQR = Q3 − Q1 (the box = middle 50%)', ' font-size="12" font-weight="700"') + tx(230, 138, 'Use median + IQR for skewed data', ' font-size="11"'));
  D.scatter = svg(460, 180,
    [[0, 'r ≈ +0.9', 1], [1, 'r ≈ 0', 0], [2, 'r ≈ −0.9', -1]].map(function (g) {
      var ox = 20 + g[0] * 150, pts = [[10, 0], [25, 12], [40, 6], [55, 22], [70, 18], [85, 34], [100, 30], [115, 44], [125, 50]];
      return '<rect x="' + ox + '" y="15" width="135" height="125" fill="#fff" stroke="' + L + '"/>' + pts.map(function (q, i) {
        var y = g[2] === 0 ? 30 + ((i * 37) % 90) : (g[2] > 0 ? 125 - q[1] * 2 : 25 + q[1] * 2);
        return '<circle cx="' + (ox + q[0]) + '" cy="' + y + '" r="3.5" fill="' + N + '"/>';
      }).join('') + tx(ox + 67, 158, g[1], ' font-size="12" font-weight="700"');
    }).join('') + tx(230, 176, 'r² = share of variance explained (r 0.38 → r² 0.14 = 14%)', ' font-size="11"'));
  D.errors = svg(460, 210,
    tx(290, 18, 'The truth', ' font-weight="700"') + tx(220, 40, 'H₀ true (no effect)') + tx(360, 40, 'H₀ false (real effect)') +
    '<text x="10" y="90" font-weight="700" font-size="12">Reject H₀</text><text x="10" y="155" font-weight="700" font-size="12">Accept H₀</text>' +
    bx(150, 50, 140, 65, '#f8e9eb', 'Type I error (α)', R) + bx(290, 50, 140, 65, '#e6f4f2', 'Power (1 − β)', T) +
    bx(150, 115, 140, 65, '#e6f4f2', 'Correct (1 − α)', T) + bx(290, 115, 140, 65, '#f8e9eb', 'Type II error (β)', R) +
    tx(230, 200, 'Type I = false positive · Type II = false negative', ' font-size="11"'));
  D.ceplane = svg(420, 260,
    ln(30, 130, 390, 130) + ln(210, 20, 210, 240) + tx(210, 14, 'More costly ↑', ' font-size="11"') + tx(210, 256, 'Cheaper ↓', ' font-size="11"') +
    '<text x="330" y="125" font-size="11">More effective →</text><text x="30" y="125" font-size="11">← Less effective</text>' +
    tx(305, 70, 'Costs more, works better', ' font-size="11" font-weight="700"') + tx(305, 88, '→ check ICER vs threshold', ' font-size="11"') +
    tx(305, 185, 'DOMINANT', ' font-size="13" font-weight="700" fill="' + T + '"') + tx(305, 203, 'cheaper & better: adopt', ' font-size="11"') +
    tx(115, 70, 'DOMINATED', ' font-size="13" font-weight="700" fill="' + R + '"') + tx(115, 88, 'dearer & worse: reject', ' font-size="11"') +
    tx(115, 185, 'Cheaper but worse', ' font-size="11" font-weight="700"') + tx(115, 203, '→ judgement call', ' font-size="11"'));
  D.consort = svg(460, 250, ar +
    bx(150, 5, 160, 32, '#fff', 'Assessed for eligibility') + ln(230, 37, 230, 55, 1) +
    bx(150, 57, 160, 32, '#fbf5e3', 'Randomised') + ln(200, 89, 120, 110, 1) + ln(260, 89, 340, 110, 1) +
    bx(40, 112, 160, 32, '#e6f4f2', 'Treatment arm') + bx(260, 112, 160, 32, '#e6f4f2', 'Control arm') +
    ln(120, 144, 120, 165, 1) + ln(340, 144, 340, 165, 1) +
    bx(40, 167, 160, 32, '#fff', 'Follow-up (drop-outs)') + bx(260, 167, 160, 32, '#fff', 'Follow-up (drop-outs)') +
    tx(230, 228, 'Intention to treat: analyse everyone in the arm they were randomised to', ' font-size="11" fill="' + R + '"'));
  F.unshift(
    [/skew/i, ['Positive skew: Mode < Median < Mean', 'Negative skew: Mean < Median < Mode'], 'skew'],
    [/box plot|iqr|interquartile/i, ['IQR = Q3 − Q1', 'Range = Maximum − Minimum'], 'box'],
    [/correlation|regression|scatter/i, ['r runs from −1 to +1', 'r² = r × r = proportion of variance explained'], 'scatter'],
    [/hypothesis|type i|type ii|p.value|significance/i, ['α = P(Type I error) = false positive', 'β = P(Type II error) = false negative', 'Power = 1 − β'], 'errors'],
    [/cost|qaly|economic|icer/i, ['ICER = (Cost A − Cost B) ÷ (QALY A − QALY B)', 'QALY = years of life × utility (0 = dead, 1 = perfect health)'], 'ceplane'],
    [/rct|randomi[sz]ed|intention|consort|allocation|blinding/i, null, 'consort']);

  /* ---- formula box for any question that uses a formula ---- */
  var Q = [
    [/\bNNT\b|number needed to treat/i, 'NNT = 1 ÷ ARR', 'how many people you treat for ONE extra person to benefit. Round up.'],
    [/\bNNH\b|number needed to harm/i, 'NNH = 1 ÷ ARI   (ARI = EER − CER for the harm)', 'how many you treat before ONE extra person is harmed.'],
    [/\bARR\b|absolute risk reduction/i, 'ARR = CER − EER', 'the plain difference in event rates between control and treatment.'],
    [/\bRRR\b|relative risk reduction/i, 'RRR = (CER − EER) ÷ CER = 1 − RR', 'the ARR as a fraction of the control risk.'],
    [/relative risk|risk ratio|\bRR\b/, 'RR = EER ÷ CER  (risk exposed ÷ risk unexposed)', '1 = no difference, below 1 = lower risk, above 1 = higher risk.'],
    [/odds ratio|\bOR\b/, 'OR = (a × d) ÷ (b × c)', 'odds of exposure in cases ÷ odds in controls. Close to RR when the outcome is rare.'],
    [/LR\s*\+|LR\+|positive likelihood/i, 'LR+ = Sensitivity ÷ (1 − Specificity)', 'how much a positive result raises the odds. Above 10 = strong.'],
    [/LR\s*[−-]|negative likelihood/i, 'LR− = (1 − Sensitivity) ÷ Specificity', 'how much a negative result lowers the odds. Below 0.1 = strong.'],
    [/post-?test|pre-?test|nomogram|fagan/i, 'Pre-test odds = p ÷ (1 − p) → × LR = post-test odds → post-test p = odds ÷ (1 + odds)', 'turn probability into odds, multiply by the LR, turn it back.'],
    [/sensitivity/i, 'Sensitivity = TP ÷ (TP + FN)', 'of everyone WITH the illness, how many test positive.'],
    [/specificity/i, 'Specificity = TN ÷ (TN + FP)', 'of everyone WITHOUT the illness, how many test negative.'],
    [/\bPPV\b|positive predictive/i, 'PPV = TP ÷ (TP + FP)', 'if the test is positive, the chance the person really has it. Rises with prevalence.'],
    [/\bNPV\b|negative predictive/i, 'NPV = TN ÷ (TN + FN)', 'if the test is negative, the chance the person really is well.'],
    [/standard error|\bSEM?\b/, 'SEM = SD ÷ √n', 'how precise the sample mean is. Bigger sample, smaller SEM.'],
    [/confidence interval|\b95% CI\b|\bCI\b/, '95% CI = mean ± 1.96 × SEM   (99%: ± 2.58 × SEM)', 'the range the true value probably lies in. Crossing 0 (difference) or 1 (ratio) = not significant.'],
    [/variance/i, 'SD = √Variance   ·   Variance = SD²', 'variance is just SD squared.'],
    [/z-?score/i, 'z = (x − mean) ÷ SD', 'how many SDs a value sits from the mean.'],
    [/\bpower\b/i, 'Power = 1 − β', 'the chance of finding a real effect. Usually set at 80%.'],
    [/bonferroni|multiple (testing|comparisons)/i, 'Adjusted α = α ÷ number of comparisons', 'stricter p-value cut-off when you run many tests.'],
    [/cohen|effect size/i, "Cohen's d = (Mean₁ − Mean₂) ÷ pooled SD", 'difference in SD units. 0.2 small, 0.5 medium, 0.8 large.'],
    [/\br\s*²|r-squared|coefficient of determination|correlation/i, 'r² = r × r', 'share of the variation explained. r 0.38 → r² 0.14 (14%).'],
    [/\bICER\b|incremental cost/i, 'ICER = (Cost A − Cost B) ÷ (QALY A − QALY B)', 'the extra cost for each extra QALY gained.'],
    [/\bQALY/i, 'QALY = years of life × utility (0–1)', 'one year in perfect health = 1 QALY.'],
    [/\bDALY/i, 'DALY = YLL + YLD', 'years lost to early death + years lived with disability.'],
    [/kappa|κ/i, 'κ = (Observed − Expected agreement) ÷ (1 − Expected)', 'agreement beyond chance. 1 = perfect, 0 = chance only.'],
    [/incidence/i, 'Incidence = new cases ÷ population at risk ÷ time', 'how fast NEW cases appear.'],
    [/prevalence/i, 'Prevalence = all current cases ÷ total population', 'how many have it NOW. Prevalence ≈ incidence × duration.'],
    [/population attributable fraction|\bPAF\b/i, 'PAF = (Incidence total − Incidence unexposed) ÷ Incidence total', 'share of ALL cases in the population caused by the exposure.'],
    [/population attributable risk|\bPAR\b/i, 'PAR = Risk total population − Risk unexposed  (= AR × prevalence of exposure)', 'extra risk in the whole population due to the exposure.'],
    [/attributable risk/i, 'AR = Risk exposed − Risk unexposed', 'the extra risk caused by the exposure.'],
    [/\bSMR\b|standardi[sz]ed mortality/i, 'SMR = Observed deaths ÷ Expected deaths', 'above 1 = more deaths than expected.'],
    [/hazard ratio|\bHR\b/, 'HR = hazard in treatment ÷ hazard in control', 'risk of the event at any moment. HR 0.7 = 30% lower.'],
    [/\bI\s*²|I2\b|heterogeneity/i, 'I² = (Q − df) ÷ Q × 100%', 'how much the studies disagree. 25% low, 50% moderate, 75% high.'],
    [/number to screen|need to screen/i, 'Number with the illness to test = target to detect ÷ sensitivity', 'e.g. 250 ÷ 0.59 = 424.'],
    [/\bodds\b(?! ratio)/i, 'Odds = p ÷ (1 − p)   ·   p = Odds ÷ (1 + Odds)', 'odds compare "happens" with "does not happen".']
  ];
  window.caFormulaFor = function (text) {
    var out = [], seen = {};
    for (var i = 0; i < Q.length && out.length < 3; i++) if (Q[i][0].test(text || '') && !seen[Q[i][1]]) { seen[Q[i][1]] = 1; out.push(Q[i]); }
    if (!out.length) return '';
    return '<div class="cax"><div class="fx"><b>The formula</b>' + out.map(function (q) {
      return '<div>' + q[1] + '</div><p style="margin:2px 0 8px;font:14px/1.5 Georgia,serif;color:#3d4452">In simple words: ' + q[2] + '</p>';
    }).join('') + '</div></div>';
  };
  window.CA_DIAGRAMS = D;
  window.CA_FORMULAS = Q;
  var css = '.cax{margin:14px 0 18px;border:1px solid ' + L + ';background:#fbfaf7}' +
    '.cax .fx{padding:10px 14px;border-left:4px solid ' + T + ';background:#fff}' +
    '.cax .fx b{display:block;font:700 9px "Helvetica Neue",Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:' + T + ';margin-bottom:6px}' +
    '.cax .fx div{font:600 15px/1.6 Menlo,Consolas,monospace;color:' + N + '}' +
    '.cax .dg{padding:8px 10px;border-top:1px solid ' + L + '}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  window.caExtra = function (title, theme) {
    var s = (title || '') + ' ' + (theme || ''), f = null, d = null;
    for (var i = 0; i < F.length; i++) {
      if (F[i][0].test(title || '')) { f = F[i][1]; d = F[i][2]; break; }
    }
    if (!f && !d) for (i = 0; i < F.length; i++) { if (F[i][0].test(s)) { f = F[i][1]; d = F[i][2]; break; } }
    if (!f && !d) return '';
    var h = '<div class="cax">';
    if (f) h += '<div class="fx"><b>The formula</b>' + f.map(function (x) { return '<div>' + x + '</div>'; }).join('') + '</div>';
    if (d && D[d]) h += '<div class="dg">' + D[d] + '</div>';
    return h + '</div>';
  };
})();
