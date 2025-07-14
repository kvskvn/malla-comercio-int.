// Datos de ramos con pre-requisitos y abre (desbloquea)
const ramosData = [
  // Primer Año
  { code: "FC-1221", name: "Inglés I", abre: ["FC-1224"], prereq: [] },
  { code: "FC-1502", name: "Matemática I", abre: ["FC-1512"], prereq: [] },
  { code: "FC-1505", name: "Lenguaje I", abre: ["FC-1515"], prereq: [] },
  { code: "FCA-151", name: "Hombre: Cultura y Sociedad I", abre: ["FCA-161"], prereq: [] },
  { code: "TS-1113", name: "Fundamentos de Administración I", abre: ["TS-1724"], prereq: [] },

  { code: "FC-1224", name: "Inglés II", abre: ["FC-1701"], prereq: ["FC-1221"] },
  { code: "FC-1512", name: "Matemática II", abre: ["FC-3701"], prereq: ["FC-1502"] },
  { code: "FC-1513", name: "Física I", abre: [], prereq: ["FC-1502"] },
  { code: "FC-1515", name: "Lenguaje II", abre: ["FC-1525"], prereq: ["FC-1505"] },
  { code: "FCA-161", name: "Hombre: Cultura y Sociedad II", abre: ["FCA-171"], prereq: ["FCA-151"] },

  { code: "FC-1525", name: "Lenguaje III", abre: [], prereq: ["FC-1515"] },
  { code: "FC-1701", name: "Inglés III", abre: ["FC-2702"], prereq: ["FC-1224"] },
  { code: "FC-3701", name: "Matemática Financiera", abre: ["FC-2810"], prereq: ["FC-1512"] },
  { code: "FCA-171", name: "Hombre: Cultura y Sociedad III", abre: [], prereq: ["FCA-161"] },
  { code: "TS-1724", name: "Contabilidad", abre: ["TS-1830"], prereq: ["TS-1113"] },

  // Segundo Año
  { code: "FC-2702", name: "Inglés IV", abre: ["FC-2801"], prereq: ["FC-1701"] },
  { code: "FC-2713", name: "Introducción a las Tecnologías de la Información", abre: [], prereq: ["FC-1502"] },
  { code: "TS-1830", name: "Contabilidad II", abre: ["TS-2801"], prereq: ["TS-1724"] },
  { code: "TS-1831", name: "Fundamentos de Derecho", abre: ["TS-2802"], prereq: [] },
  { code: "TS-1832", name: "Fundamentos de Economía", abre: ["TS-2803"], prereq: [] },

  { code: "FC-2801", name: "Inglés V", abre: ["FC-2811"], prereq: ["FC-2702"] },
  { code: "FC-2802", name: "Técnicas de Investigación Documental", abre: [], prereq: [] },
  { code: "TS-2801", name: "Contabilidad de Costos", abre: ["TS-3811"], prereq: ["TS-1830"] },
  { code: "TS-2802", name: "Legislación Fiscal y Financiera I", abre: ["TS-2812"], prereq: ["TS-1831"] },
  { code: "TS-2803", name: "Microeconomía", abre: ["TS-2814"], prereq: ["TS-1832"] },

  { code: "FC-0001", name: "Estudios Generales I", abre: [], prereq: [] },
  { code: "FC-2810", name: "Estadística I", abre: ["FC-3802"], prereq: ["FC-3701"] },
  { code: "FC-2811", name: "Inglés VI", abre: ["FC-3801"], prereq: ["FC-2801"] },
  { code: "TS-2812", name: "Legislación Fiscal y Financiera II", abre: ["TS-3814"], prereq: ["TS-2802"] },
  { code: "TS-2814", name: "Macroeconomía", abre: ["TS-2526"], prereq: ["TS-2803"] },

  // Tercer Año
  { code: "FC-0002", name: "Estudios Generales II", abre: ["FC-0003"], prereq: ["FC-0001"] },
  { code: "FC-3801", name: "Inglés VII", abre: [], prereq: ["FC-2811"] },
  { code: "FC-3802", name: "Estadística II", abre: [], prereq: ["FC-2810"] },
  { code: "TS-2526", name: "Teoría del Comercio Internacional", abre: ["TS-3810"], prereq: ["TS-2814"] },
  { code: "TS-3803", name: "Formulación y Evaluación de Proyectos", abre: ["TS-4804"], prereq: ["TS-1830"] },

  { code: "TS-3810", name: "GeoEconomía Internacional", abre: [], prereq: ["TS-2526"] },
  { code: "TS-3811", name: "Gestión Empresarial", abre: [], prereq: ["TS-2801"] },
  { code: "TS-3812", name: "Análisis de Estados Financieros", abre: ["TS-4801"], prereq: ["TS-2801"] },
  { code: "TS-3813", name: "Tecnología de la Información y Comercio Electrónico", abre: [], prereq: ["FC-2713"] },
  { code: "TS-3814", name: "Derecho Aduanero I", abre: ["TS-3821"], prereq: ["TS-2812"] },

  { code: "FC-0003", name: "Estudios Generales III", abre: ["FC-0004"], prereq: ["FC-0002"] },
  { code: "FC-3820", name: "Formulación de Proyectos de Investigación", abre: [], prereq: ["FC-2802"] },
  { code: "TS-2634", name: "Nomenclatura Aduanera", abre: ["TS-4802"], prereq: ["TS-2812"] },
  { code: "TS-3821", name: "Derecho Aduanero II", abre: ["TS-4810"], prereq: ["TS-3814"] },
  { code: "TS-3823", name: "Política Comercial", abre: ["TS-4812"], prereq: ["TS-2526"] },

  // Cuarto Año
  { code: "TS-4801", name: "Finanzas Internacionales", abre: [], prereq: ["TS-3812"] },
  { code: "TS-4802", name: "Nomenclatura Aduanera II", abre: ["TS-4820"], prereq: ["TS-2634"] },
  { code: "TS-4803", name: "Medios de Pago", abre: [], prereq: ["TS-1724", "TS-3823"] },
  { code: "TS-4804", name: "Mercadeo Internacional I", abre: ["TS-4821"], prereq: ["TS-2526", "TS-3811"] },

  { code: "FC-0004", name: "Estudios Generales IV", abre: ["FC-0005"], prereq: ["FC-0003"] },
  { code: "TS-0001", name: "Electiva Profesional I", abre: [], prereq: [] },
  { code: "TS-4810", name: "Derecho Económico Internacional", abre: [], prereq: ["TS-3821"] },
  { code: "TS-4811", name: "Clasificación Arancelaria I", abre: ["TS-4820"], prereq: ["TS-4802"] },
  { code: "TS-4812", name: "Integración Económica I", abre: ["TS-4822"], prereq: ["TS-3823"] },

  { code: "TS-0002", name: "Electiva Profesional II", abre: [], prereq: ["TS-0001"] },
  { code: "TS-4820", name: "Clasificación Arancelaria II", abre: [], prereq: ["TS-4811"] },
  { code: "TS-4821", name: "Comercialización y Logística Internacional", abre: [], prereq: ["TS-4804"] },
  { code: "TS-4822", name: "Integración Económica II", abre: ["TS-5801"], prereq: ["TS-4812"] },

  // Quinto Año
  { code: "EP-2830", name: "Proyecto de Grado I", abre: [], prereq: ["A.C."] },
  { code: "EP-3420", name: "Pasantía Larga", abre: [], prereq: ["A.C."] },
  { code: "FC-0005", name: "Estudios Generales V", abre: ["FC-0006"], prereq: ["FC-0004"] },
  { code: "TS-5801", name: "Técnicas de Negociación", abre: ["EP-2840"], prereq: ["A.C."] },

  { code: "EP-2840", name: "Proyecto de Grado II", abre: [], prereq: ["EP-2830", "A.C."] },
  { code: "FC-0006", name: "Estudios Generales VI", abre: [], prereq: ["FC-0005"] },
  { code: "TS-0003", name: "Electiva Profesional III", abre: [], prereq: ["TS-0002"] },
  { code: "TS-5821", name: "Legislación y Servicio de Transporte", abre: ["TS-5831"], prereq: ["TS-3821"] },

  { code: "EP-2850", name: "Proyecto de Grado III", abre: [], prereq: ["A.C."] },
  { code: "TS-0004", name: "Electiva Profesional IV", abre: [], prereq: ["TS-0003"] },
  { code: "TS-5831", name: "Seguro de Transporte", abre: [], prereq: ["TS-5821"] },
];

// Años y trimestres para organizar la visualización
const estructura = [
  {
    year: "Primer Año",
    trimesters: [
      { number: 1, codes: ["FC-1221", "FC-1502", "FC-1505", "FCA-151", "TS-1113"] },
      { number: 2, codes: ["FC-1224", "FC-1512", "FC-1513", "FC-1515", "FCA-161"] },
      { number: 3, codes: ["FC-1525", "FC-1701", "FC-3701", "FCA-171", "TS-1724"] },
    ],
  },
  {
    year: "Segundo Año",
    trimesters: [
      { number: 4, codes: ["FC-2702", "FC-2713", "TS-1830", "TS-1831", "TS-1832"] },
      { number: 5, codes: ["FC-2801", "FC-2802", "TS-2801", "TS-2802", "TS-2803"] },
      { number: 6, codes: ["FC-0001", "FC-2810", "FC-2811", "TS-2812", "TS-2814"] },
    ],
  },
  {
    year: "Tercer Año",
    trimesters: [
      { number: 7, codes: ["FC-0002", "FC-3801", "FC-3802", "TS-2526", "TS-3803"] },
      { number: 8, codes: ["TS-3810", "TS-3811", "TS-3812", "TS-3813", "TS-3814"] },
      { number: 9, codes: ["FC-0003", "FC-3820", "TS-2634", "TS-3821", "TS-3823"] },
    ],
  },
  {
    year: "Cuarto Año",
    trimesters: [
      { number: 10, codes: ["TS-4801", "TS-4802", "TS-4803", "TS-4804"] },
      { number: 11, codes: ["FC-0004", "TS-0001", "TS-4810", "TS-4811", "TS-4812"] },
      { number: 12, codes: ["TS-0002", "TS-4820", "TS-4821", "TS-4822"] },
    ],
  },
  {
    year: "Quinto Año",
    trimesters: [
      { number: 13, codes: ["EP-2830", "EP-3420", "FC-0005", "TS-5801"] },
      { number: 14, codes: ["EP-2840", "FC-0006", "TS-0003", "TS-5821"] },
      { number: 15, codes: ["EP-2850", "TS-0004", "TS-5831"] },
    ],
  },
];

// Estado de ramos aprobados, cargado de localStorage o vacío
let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

// Función para verificar si un ramo está desbloqueado (todos sus prereq aprobados)
function estaDesbloqueado(ramo) {
  if (ramo.prereq.length === 0) return true;
  // Si prereq incluye "A.C." lo consideramos desbloqueado (requisito administrativo)
  if (ramo.prereq.includes("A.C.")) return true;
  return ramo.prereq.every((pre) => aprobados.has(pre));
}

// Función para actualizar el estado de desbloqueo y clases visuales
function actualizarEstados() {
  ramosData.forEach((ramo) => {
    const btn = document.getElementById(ramo.code);
    if (!btn) return;

    if (aprobados.has(ramo.code)) {
      btn.classList.add("approved");
      btn.classList.remove("locked", "unlocked");
      btn.disabled = true;
    } else if (estaDesbloqueado(ramo)) {
      btn.classList.add("unlocked");
      btn.classList.remove("locked", "approved");
      btn.disabled = false;
    } else {
      btn.classList.add("locked");
      btn.classList.remove("unlocked", "approved");
      btn.disabled = true;
    }
  });
}

// Función para manejar click en ramo
function toggleAprobado(code) {
  if (aprobados.has(code)) {
    aprobados.delete(code);
  } else {
    // Solo permitir aprobar si está desbloqueado
    const ramo = ramosData.find((r) => r.code === code);
    if (estaDesbloqueado(ramo)) {
      aprobados.add(code);
    }
  }
  localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
  actualizarEstados();
}

// Renderizar la malla en el DOM
function renderMalla() {
  const container = document.getElementById("malla-container");
  estructura.forEach((year) => {
    const yearDiv = document.createElement("section");
    yearDiv.className = "year-section";

    const yearTitle = document.createElement("h2");
    yearTitle.className = "year-title";
    yearTitle.textContent = year.year;
    yearDiv.appendChild(yearTitle);

    year.trimesters.forEach((trim) => {
      const trimesterDiv = document.createElement("div");
      trimesterDiv.className = "trimester-section";

      const trimesterTitle = document.createElement("h3");
      trimesterTitle.className = "trimester-title";
      trimesterTitle.textContent = `Trimestre ${trim.number}`;
      trimesterDiv.appendChild(trimesterTitle);

      const ramosGrid = document.createElement("div");
      ramosGrid.className = "ramos-grid";

      trim.codes.forEach((code) => {
        const ramo = ramosData.find((r) => r.code === code);
        if (!ramo) return;

        const ramoBtn = document.createElement("button");
        ramoBtn.className = "ramo";
        ramoBtn.id = ramo.code;
        ramoBtn.type = "button";
        ramoBtn.setAttribute("aria-pressed", "false");

        // Tooltip con prereq y abre
        let tooltipText = "";
        if (ramo.prereq.length > 0) {
          tooltipText += "Pre: " + ramo.prereq.join(", ");
        }
        if (ramo.abre.length > 0) {
          if (tooltipText.length > 0) tooltipText += " | ";
          tooltipText += "Abre: " + ramo.abre.join(", ");
        }
        if (tooltipText.length > 0) {
          ramoBtn.setAttribute("data-prereq", tooltipText);
          ramoBtn.title = tooltipText;
        }

        const codeSpan = document.createElement("span");
        codeSpan.className = "ramo-code";
        codeSpan.textContent = ramo.code;

        const nameSpan = document.createElement("span");
        nameSpan.className = "ramo-name";
        nameSpan.textContent = ramo.name;

        ramoBtn.appendChild(codeSpan);
        ramoBtn.appendChild(nameSpan);

        ramoBtn.addEventListener("click", () => {
          toggleAprobado(ramo.code);
        });

        ramosGrid.appendChild(ramoBtn);
      });

      trimesterDiv.appendChild(ramosGrid);
      yearDiv.appendChild(trimesterDiv);
    });

    container.appendChild(yearDiv);
  });

  actualizarEstados();
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
});
