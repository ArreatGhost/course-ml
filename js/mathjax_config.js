module.exports = {
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  messageStyle: "none",
  tex2jax: {
    processEnvironments: false,
    processEscapes: true,
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    skipTags: ["script", "noscript", "style", "textarea", "pre", "code"],
  },
  displayAlign: "left",
  TeX: {
    equationNumbers: { autoNumber: "none", useLabelIds: true },
    extensions: [
      "AMSmath.js",
      "AMSsymbols.js",
      "noErrors.js",
      "noUndefined.js",
      "action.js",
      "cancel.js",
      "enclose.js",
      "mhchem.js",
      "extpfeil.js",
    ],
    Macros: {
      zerov: "{\\boldsymbol 0}",
      onev: "{\\boldsymbol 1}",
      av: "{\\boldsymbol a}",
      bv: "{\\boldsymbol b}",
      cv: "{\\boldsymbol c}",
      dv: "{\\boldsymbol d}",
      ev: "{\\boldsymbol e}",
      fv: "{\\boldsymbol f}",
      gv: "{\\boldsymbol g}",
      hv: "{\\boldsymbol h}",
      iv: "{\\boldsymbol i}",
      jv: "{\\boldsymbol j}",
      kv: "{\\boldsymbol k}",
      lv: "{\\boldsymbol l}",
      mv: "{\\boldsymbol m}",
      nv: "{\\boldsymbol n}",
      ov: "{\\boldsymbol o}",
      pv: "{\\boldsymbol p}",
      qv: "{\\boldsymbol q}",
      rv: "{\\boldsymbol r}",
      sv: "{\\boldsymbol s}",
      tv: "{\\boldsymbol t}",
      uv: "{\\boldsymbol u}",
      vv: "{\\boldsymbol v}",
      wv: "{\\boldsymbol w}",
      xv: "{\\boldsymbol x}",
      yv: "{\\boldsymbol y}",
      zv: "{\\boldsymbol z}",
      Av: "{\\mathbf A}",
      Bv: "{\\mathbf B}",
      Cv: "{\\mathbf C}",
      Dv: "{\\mathbf D}",
      Ev: "{\\mathbf E}",
      Fv: "{\\mathbf F}",
      Gv: "{\\mathbf G}",
      Hv: "{\\mathbf H}",
      Iv: "{\\mathbf I}",
      Jv: "{\\mathbf J}",
      Kv: "{\\mathbf K}",
      Lv: "{\\mathbf L}",
      Mv: "{\\mathbf M}",
      Nv: "{\\mathbf N}",
      Ov: "{\\mathbf O}",
      Pv: "{\\mathbf P}",
      Qv: "{\\mathbf Q}",
      Rv: "{\\mathbf R}",
      Sv: "{\\mathbf S}",
      Tv: "{\\mathbf T}",
      Uv: "{\\mathbf U}",
      Vv: "{\\mathbf V}",
      Wv: "{\\mathbf W}",
      Xv: "{\\mathbf X}",
      Yv: "{\\mathbf Y}",
      Zv: "{\\mathbf Z}",
      alphav: "{\\boldsymbol {\\alpha}}",
      betav: "{\\boldsymbol {\\beta}}",
      lambdav: "{\\boldsymbol {\\lambda}}",
      muv: "{\\boldsymbol {\\mu}}",
      thetav: "{\\boldsymbol {\\theta}}",
      phiv: "{\\boldsymbol {\\phi}}",
      zetav: "{\\boldsymbol {\\zeta}}",
      deltav: "{\\boldsymbol {\\delta}}",
      Sigmav: "{\\boldsymbol {\\Sigma}}",
      Phiv: "{\\boldsymbol {\\Phi}}",
      Lambdav: "{\\boldsymbol {\\Lambda}}",
      Omegav: "{\\boldsymbol {\\Omega}}",
      Cbb: "{\\mathbb C}",
      Ebb: "{\\mathbb E}",
      Hbb: "{\\mathbb H}",
      Ibb: "{\\mathbb I}",
      Nbb: "{\\mathbb N}",
      Pbb: "{\\mathbb P}",
      Qbb: "{\\mathbb Q}",
      Rbb: "{\\mathbb R}",
      Zbb: "{\\mathbb Z}",
      Acal: "{\\mathcal A}",
      Bcal: "{\\mathcal B}",
      Ccal: "{\\mathcal C}",
      Dcal: "{\\mathcal D}",
      Ecal: "{\\mathcal E}",
      Fcal: "{\\mathcal F}",
      Gcal: "{\\mathcal G}",
      Hcal: "{\\mathcal H}",
      Ical: "{\\mathcal I}",
      Lcal: "{\\mathcal L}",
      Mcal: "{\\mathcal M}",
      Ncal: "{\\mathcal N}",
      Pcal: "{\\mathcal P}",
      Rcal: "{\\mathcal R}",
      Scal: "{\\mathcal S}",
      Ucal: "{\\mathcal U}",
      Vcal: "{\\mathcal V}",
      Wcal: "{\\mathcal W}",
      Xcal: "{\\mathcal X}",
      Ycal: "{\\mathcal Y}",
      fhat: "{\\hat f}",
      yhat: "{\\hat y}",
      yvhat: "{\\hat {\\yv}}",
      Xvhat: "{\\hat {\\Xv}}",
      wvt: "{\\tilde {\\wv}}",
      xvt: "{\\tilde {\\xv}}",
      yvt: "{\\tilde {\\yv}}",
      Kvt: "{\\tilde {\\Kv}}",
      xbar: "{\\bar {x}}",
      ybar: "{\\bar {y}}",
      yvbar: "{\\bar {\\yv}}",
      Ffrak: "{\\mathfrak F}",
      sup: ["{{(#1)}}", 1],
      acc: "{\\mathrm {acc}}",
      bias: "{\\mathrm {bias}}",
      variance: "{\\mathrm {variance}}",
      noise: "{\\mathrm {noise}}",
      diff: "{\\mathrm {d}}",
      diag: "{\\mathrm {diag}}",
      span: "{\\mathrm {span}}",
      sign: "{\\mathrm {sign}}",
      sgn: "{\\mathrm {sgn}}",
      st: "{\\mathrm {s.t.}}",
      VC: "{\\mathrm {VC}}",
      Pr: "{\\mathrm {Pr}}",
      tanh: "{\\mathrm {tanh}}",
      logistic: "{\\mathrm {logistic}}",
      relu: "{\\mathrm {ReLU}}",
      lrelu: "{\\mathrm {LeakyReLU}}",
      prelu: "{\\mathrm {PReLU}}",
      elu: "{\\mathrm {ELU}}",
      softplus: "{\\mathrm {Softplus}}",
      swish: "{\\mathrm {Swish}}",
      maxout: "{\\mathrm {Maxout}}",
      const: "{\\mathrm {const}}",
      cov: "{\\mathrm {cov}}",
      grad: "{\\mathrm {grad}}",
      div: "{\\mathrm {div}}",
      var: "{\\mathrm {var}}",
      softmax: "{\\mathrm {Softmax}}",
      att: "{\\mathrm {att}}",
      cut: "{\\mathrm {cut}}",
      rcut: "{\\mathrm {RatioCut}}",
      ncut: "{\\mathrm {NCut}}",
      tr: "{\\mathrm {tr}}",
      vol: "{\\mathrm {vol}}",
      mlp: "{\\mathrm {MLP}}",
      update: "{\\mathrm {Update}}",
      aggregate: "{\\mathrm {Aggregate}}",
      self: "{\\mathrm {self}}",
      set: "{\\mathrm {set}}",
      neigh: "{\\mathrm {neigh}}",
      base: "{\\mathrm {base}}",
      NULL: "{\\mathrm {NULL}}",
      new: "{\\mathrm {new}}",
      gru: "{\\mathrm {GRU}}",
      lstm: "{\\mathrm {LSTM}}",
      edge: "{\\mathrm {edge}}",
      node: "{\\mathrm {node}}",
      graph: "{\\mathrm {graph}}",
      train: "{\\mathrm {train}}",
      dec: "{\\mathrm {Dec}}",
      sym: "{\\mathrm {sym}}",
      modd: "{\\mathrm {mod} ~ }",
      hp: "{\\mathrm {hp}}",
      gen: "{\\mathrm {gen}}",
      ow: "{\\mathrm {o.w.}}",
      rot: "{\\mathbf {rot180}}",
      up: "{\\mathbf {up}}",
      cen: "{\\mathrm {cen}}",
      con: "{\\mathrm {con}}",
      TG: "{\\mathrm {TreeGenerate}}",
      TP: "{\\mathrm {TP}}",
      FP: "{\\mathrm {FP}}",
      TN: "{\\mathrm {TN}}",
      FN: "{\\mathrm {FN}}",
      SSE: "{\\mathrm {SSE}}",
      SSB: "{\\mathrm {SSB}}",
      gain: "{\\mathrm {Gain}}",
      gini: "{\\mathrm {Gini}}",
      argmin: "{\\mathop{\\mathrm{argmin}}}",
      argmax: "{\\mathop{\\mathrm{argmax}}}",
    },
  },
  "HTML-CSS": {
    linebreaks: { automatic: false },
    scale: 100,
    styles: {
      ".MathJax_Display": {
        "margin-top": "0.6rem !important",
        "margin-bottom": "1rem !important",
        "border-radius": "0px !important",
        "font-size": "1.8rem !important",
        color: "#d33682",
        "text-align": "left !important",
      },
      ".MathJax": {
        "margin-left": "0.2rem !important",
        "margin-right": "0.2rem !important",
        border: "0px solid #ccc !important",
        color: "#d33682",
      },
    },
    availableFonts: ["TeX"],
  },
};
