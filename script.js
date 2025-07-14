const ramosData = [
  // (igual que antes, omitido aquí para brevedad, usar el mismo arreglo que te di)
];

// Estructura igual que antes (omitida aquí, usar la misma)

let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

function estaDesbloqueado(ramo) {
  if (ramo.prereq.length === 0) return true;
  if (ramo.prereq.includes("A.C.")) return true;
  return ramo.prereq.every((pre) => aprobados.has(pre));
}

function actualizarEstados() {
  ramosData.forEach((ramo) => {
    const btn = document.getElementById(ramo.code);
    if (!btn) return;

    if (aprobados.has(ramo.code)) {
      btn.classList.add("approved");
      btn.classList.remove("locked", "unlocked");
      btn.disabled = false; // permitir click para deseleccionar
      btn.setAttribute("aria-pressed", "true");
    } else if (estaDesbloqueado(ramo)) {
      btn.classList.add("unlocked");
      btn.classList.remove("locked", "approved");
      btn.disabled = false;
      btn.setAttribute("aria-pressed", "false");
    } else {
      btn.classList.add("locked");
      btn.classList.remove("unlocked", "approved");
      btn.disabled = true;
      btn.setAttribute("aria-pressed", "false");
    }
  });
}

// Ahora toggle permite deseleccionar
function toggleAprobado(code) {
  if (aprobados.has(code)) {
    // Deseleccionar ramo
    aprobados.delete(code);
  } else {
    // Solo aprobar si está desbloqueado
    const ramo = ramosData.find((r) => r.code === code);
    if (estaDesbloqueado(ramo)) {
      aprobados.add(code);
    }
  }
  localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
  actualizarEstados();
}

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = ""; // limpiar antes de renderizar

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

document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
});
