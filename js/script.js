(function () {
  "use strict";
  var C = SITE_CONFIG;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function get(o, p) { return p.split(".").reduce(function (a, k) { return a && a[k]; }, o); }
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  }

  // ---- WhatsApp ----
  var numero = String(C.whatsapp.numero).replace(/\D/g, "");
  if (numero.length < 10) console.warn("[config.js] Número do WhatsApp ainda não configurado.");
  var waUrl = "https://wa.me/" + numero + "?text=" + encodeURIComponent(C.whatsapp.mensagem);
  $$("[data-wa]").forEach(function (a) { a.href = waUrl; a.target = "_blank"; a.rel = "noopener"; });

  // ---- Textos e imagens ----
  $$("[data-text]").forEach(function (e) { e.textContent = get(C, e.dataset.text) || ""; });
  $$("[data-img]").forEach(function (i) { var d = get(C, i.dataset.img); i.src = d.src; i.alt = d.alt; });
  document.title = C.empresa.nome + " | Mudanças e transportes";
  $('meta[name="description"]').content = C.empresa.descricaoSite;

  // ---- Logo (com reserva em texto) ----
  var logo = new Image();
  logo.alt = C.empresa.nome; logo.className = "brand-logo";
  logo.onload = function () { var b = $(".brand"); b.textContent = ""; b.appendChild(logo); };
  logo.src = C.logo;

  // ---- Listas ----
  var sv = $("#lista-servicos");
  C.servicos.lista.forEach(function (s) {
    var li = el("li", "servico reveal");
    li.appendChild(el("h3", "", s.nome));
    li.appendChild(el("p", "", s.texto));
    sv.appendChild(li);
  });

  var sb = $("#texto-sobre");
  C.sobre.paragrafos.forEach(function (p) { sb.appendChild(el("p", "", p)); });
  if (C.sobre.anosDeAtuacao) sb.appendChild(el("p", "destaque-anos", C.sobre.anosDeAtuacao));

  var rg = $("#lista-regioes");
  C.atendimento.regioes.forEach(function (r) {
    var d = el("div", "regiao reveal");
    d.appendChild(el("h3", "", r.nome));
    if (C.atendimento.mostrarEstados) {
      var ul = el("ul", "estados");
      r.estados.forEach(function (e) { ul.appendChild(el("li", "", e)); });
      d.appendChild(ul);
    }
    rg.appendChild(d);
  });
  if (!C.atendimento.aviso) $("#aviso-cobertura").hidden = true;

  var df = $("#lista-diferenciais");
  C.diferenciais.lista.forEach(function (x) {
    var li = el("li", "diferencial reveal");
    li.appendChild(el("h3", "", x.nome));
    li.appendChild(el("p", "", x.texto));
    df.appendChild(li);
  });

  // ---- Telefone ----
  var tel = $("#link-telefone");
  var telNum = String(C.telefone.numero).replace(/\D/g, "");
  if (C.telefone.exibir) { tel.textContent = "Ligar: " + C.telefone.exibir; if (telNum) tel.href = "tel:+" + telNum; }
  else tel.hidden = true;

  $("#ano").textContent = new Date().getFullYear();

  // ---- Menu mobile ----
  var btn = $(".menu-btn"), nav = $("#menu");
  function fechar() { nav.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", function () {
    btn.setAttribute("aria-expanded", String(nav.classList.toggle("aberto")));
  });
  $$("#menu a").forEach(function (a) { a.addEventListener("click", fechar); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });

  // ---- Cabeçalho ao rolar ----
  var header = $(".site-header");
  function onScroll() { header.classList.toggle("rolou", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // ---- Entrada suave dos blocos ----
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("anima");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visivel"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    $$(".reveal").forEach(function (i) { io.observe(i); });
  }
})();
