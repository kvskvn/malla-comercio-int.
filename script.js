// ==== Datos de la malla ====
const malla = [
  // Primer Año
  {
    nombre: 'Primer Año - Trimestre 1',
    ramos: [
      { codigo: 'FC-1221', nombre: 'Inglés I', abre: ['FC-1224'] },
      { codigo: 'FC-1502', nombre: 'Matemática I', abre: ['FC-1512', 'FC-2713'] },
      { codigo: 'FC-1505', nombre: 'Lenguaje I', abre: ['FC-1515'] },
      { codigo: 'FCA-151', nombre: 'Hombre: Cultura y Sociedad I', abre: ['FCA-161'] },
      { codigo: 'TS-1113', nombre: 'Fundamentos de Administración I', abre: ['TS-1724'] }
    ]
  },
  {
    nombre: 'Primer Año - Trimestre 2',
    ramos: [
      { codigo: 'FC-1224', nombre: 'Inglés II', requisitos: ['FC-1221'], abre: ['FC-1701'] },
      { codigo: 'FC-1512', nombre: 'Matemática II', requisitos: ['FC-1502'], abre: ['FC-3701'] },
      { codigo: 'FC-1513', nombre: 'Física I', requisitos: ['FC-1502'] },
      { codigo: 'FC-1515', nombre: 'Lenguaje II', requisitos: ['FC-1505'], abre: ['FC-1525'] },
      { codigo: 'FCA-161', nombre: 'Hombre: Cultura y Sociedad II', requisitos: ['FCA-151'], abre: ['FCA-171'] }
    ]
  },
  {
    nombre: 'Primer Año - Trimestre 3',
    ramos: [
      { codigo: 'FC-1525', nombre: 'Lenguaje III', requisitos: ['FC-1515'] },
      { codigo: 'FC-1701', nombre: 'Inglés III', requisitos: ['FC-1224'], abre: ['FC-2702'] },
      { codigo: 'FC-3701', nombre: 'Matemática Financiera', requisitos: ['FC-1512'], abre: ['FC-2810'] },
      { codigo: 'FCA-171', nombre: 'Hombre: Cultura y Sociedad III', requisitos: ['FCA-161'] },
      { codigo: 'TS-1724', nombre: 'Contabilidad', requisitos: ['TS-1113'], abre: ['TS-1830'] }
    ]
  },

  // Segundo Año
  {
    nombre: 'Segundo Año - Trimestre 4',
    ramos: [
      { codigo: 'FC-2702', nombre: 'Inglés IV', requisitos: ['FC-1701'], abre: ['FC-2801'] },
      { codigo: 'FC-2713', nombre: 'Introducción a las Tecnologías de la Información', requisitos: ['FC-1502'] },
      { codigo: 'TS-1830', nombre: 'Contabilidad II', requisitos: ['TS-1724'], abre: ['TS-2801'] },
      { codigo: 'TS-1831', nombre: 'Fundamentos de Derecho', abre: ['TS-2802'] },
      { codigo: 'TS-1832', nombre: 'Fundamentos de Economía', abre: ['TS-2803'] }
    ]
  },
  {
    nombre: 'Segundo Año - Trimestre 5',
    ramos: [
      { codigo: 'FC-2801', nombre: 'Inglés V', requisitos: ['FC-2702'], abre: ['FC-2811'] },
      { codigo: 'FC-2802', nombre: 'Técnicas de Investigación Documental' },
      { codigo: 'TS-2801', nombre: 'Contabilidad de Costos', requisitos: ['TS-1830'], abre: ['TS-3811'] },
      { codigo: 'TS-2802', nombre: 'Legislación Fiscal y Financiera I', requisitos: ['TS-1831'], abre: ['TS-2812'] },
      { codigo: 'TS-2803', nombre: 'Microeconomía', requisitos: ['TS-1832'], abre: ['TS-2814'] }
    ]
  },
  {
    nombre: 'Segundo Año - Trimestre 6',
    ramos: [
      { codigo: 'FC-0001', nombre: 'Estudios Generales I' },
      { codigo: 'FC-2810', nombre: 'Estadística I', requisitos: ['FC-3701'], abre: ['FC-3802'] },
      { codigo: 'FC-2811', nombre: 'Inglés VI', requisitos: ['FC-2801'], abre: ['FC-3801'] },
      { codigo: 'TS-2812', nombre: 'Legislación Fiscal y Financiera II', requisitos: ['TS-2802'], abre: ['TS-3814'] },
      { codigo: 'TS-2814', nombre: 'Macroeconomía', requisitos: ['TS-2803'], abre: ['TS-2526'] }
    ]
  },

  // Tercer Año
  {
    nombre: 'Tercer Año - Trimestre 7',
    ramos: [
      { codigo: 'FC-0002', nombre: 'Estudios Generales II', requisitos: ['FC-0001'], abre: ['FC-0003'] },
      { codigo: 'FC-3801', nombre: 'Inglés VII', requisitos: ['FC-2811'] },
      { codigo: 'FC-3802', nombre: 'Estadística II', requisitos: ['FC-2810'] },
      { codigo: 'TS-2526', nombre: 'Teoría del Comercio Internacional', requisitos: ['TS-2814'], abre: ['TS-3810', 'TS-4804'] },
      { codigo: 'TS-3803', nombre: 'Formulación y Evaluación de Proyectos', requisitos: ['TS-1830'], abre: ['TS-4804'] }
    ]
  },
  {
    nombre: 'Tercer Año - Trimestre 8',
    ramos: [
      { codigo: 'TS-3810', nombre: 'GeoEconomía Internacional', requisitos: ['TS-2526'] },
      { codigo: 'TS-3811', nombre: 'Gestión Empresarial', requisitos: ['TS-2801'] },
      { codigo: 'TS-3812', nombre: 'Análisis de Estados Financieros', requisitos: ['TS-2801'], abre: ['TS-4801'] },
      { codigo: 'TS-3813', nombre: 'Tecnología de la Información y Comercio Electrónico', requisitos: ['FC-2713'] },
      { codigo: 'TS-3814', nombre: 'Derecho Aduanero I', requisitos: ['TS-2812'], abre: ['TS-3821'] }
    ]
  },
  {
    nombre: 'Tercer Año - Trimestre 9',
    ramos: [
      { codigo: 'FC-0003', nombre: 'Estudios Generales III', requisitos: ['FC-0002'], abre: ['FC-0004'] },
      { codigo: 'FC-3820', nombre: 'Formulación de Proyectos de Investigación', requisitos: ['FC-2802'] },
      { codigo: 'TS-2634', nombre: 'Nomenclatura Aduanera', requisitos: ['TS-2812'], abre: ['TS-4802'] },
      { codigo: 'TS-3821', nombre: 'Derecho Aduanero II', requisitos: ['TS-3814'], abre: ['TS-4810'] },
      { codigo: 'TS-3823', nombre: 'Política Comercial', requisitos: ['TS-2526'], abre: ['TS-4812'] }
    ]
  },

  // Cuarto Año
  {
    nombre: 'Cuarto Año - Trimestre 10',
    ramos: [
      { codigo: 'TS-4801', nombre: 'Finanzas Internacionales', requisitos: ['TS-3812'] },
      { codigo: 'TS-4802', nombre: 'Nomenclatura Aduanera II', requisitos: ['TS-2634'], abre: ['TS-4820', 'TS-4811'] },
      { codigo: 'TS-4803', nombre: 'Medios de Pago', requisitos: ['TS-1724', 'TS-3823'] },
      { codigo: 'TS-4804', nombre: 'Mercadeo Internacional I', requisitos: ['TS-2526', 'TS-3811'], abre: ['TS-4821'] }
    ]
  },
  {
    nombre: 'Cuarto Año - Trimestre 11',
    ramos: [
      { codigo: 'FC-0004', nombre: 'Estudios Generales IV', requisitos: ['FC-0003'], abre: ['FC-0005'] },
      { codigo: 'TS-0001', nombre: 'Electiva Profesional I' },
      { codigo: 'TS-4810', nombre: 'Derecho Económico Internacional', requisitos: ['TS-3821'] },
      { codigo: 'TS-4811', nombre: 'Clasificación Arancelaria I', requisitos: ['TS-4802'], abre: ['TS-4820'] },
      { codigo: 'TS-4812', nombre: 'Integración Económica I', requisitos: ['TS-3823'], abre: ['TS-4822'] }
    ]
  },
  {
    nombre: 'Cuarto Año - Trimestre 12',
    ramos: [
      { codigo: 'TS-0002', nombre: 'Electiva Profesional II', requisitos: ['TS-0001'] },
      { codigo: 'TS-4820', nombre: 'Clasificación Arancelaria II', requisitos: ['TS-4811'] },
      { codigo: 'TS-4821', nombre: 'Comercialización y Logística Internacional', requisitos: ['TS-4804'] },
      { codigo: 'TS-4822', nombre: 'Integración Económica II', requisitos: ['TS-4812'], abre: ['TS-5801'] }
    ]
  },

  // Quinto Año
  {
    nombre: 'Quinto Año - Trimestre 13',
    ramos: [
      { codigo: 'EP-2830', nombre: 'Proyecto de Grado I (Requiere A.C.)' },
      { codigo: 'EP-3420', nombre: 'Pasantía Larga (Requiere A.C.)' },
      { codigo: 'FC-0005', nombre: 'Estudios Generales V', requisitos: ['FC-0004'], abre: ['FC-0006'] },
      { codigo: 'TS-5801', nombre: 'Técnicas de Negociación (Requiere A.C.)', abre: ['EP-2840'] }
    ]
  },
  {
    nombre: 'Quinto Año - Trimestre 14',
    ramos: [
      { codigo: 'EP-2840', nombre: 'Proyecto de Grado II', requisitos: ['EP-2830'] },
      { codigo: 'FC-0006', nombre: 'Estudios Generales VI', requisitos: ['FC-0005'] },
      { codigo: 'TS-0003', nombre: 'Electiva Profesional III', requisitos: ['TS-0002'] },
      { codigo: 'TS-5821', nombre: 'Legislación y Servicio de Transporte', requisitos: ['TS-3821'], abre: ['TS-5831'] }
    ]
  },
  {
    nombre: 'Quinto Año - Trimestre 15',
    ramos: [
      { codigo: 'EP-2850', nombre: 'Proyecto de Grado III (Requiere A.C.)' },
      { codigo: 'TS-0004', nombre: 'Electiva Profesional IV', requisitos: ['TS-0003'] },
      { codigo: 'TS-5831', nombre: 'Seguro de Transporte', requisitos: ['TS-5821'] }
    ]
  }
];

// ==== Procesamiento para dependencias rápidas ====
const ramosByCodigo = {};
malla.forEach(tri => {
  tri.ramos.forEach(r => {
    ramosByCodigo[r.codigo] = r;
    r.estado = 'bloqueado'; // bloqueado, disponible, aprobado
  });
});
// Primeros ramos sin requisitos: disponibles
Object.values(ramosByCodigo).forEach(r => {
  if (!r.requisitos) r.estado = 'disponible';
});

// ==== Renderizado de la malla ====
function renderMalla() {
  const grid = document.getElementById('mallagrid');
  grid.innerHTML = '';
  malla.forEach((trimestre, idx) => {
    const triDiv = document.createElement('div');
    triDiv.className = 'trimestre';
    triDiv.innerHTML = `<h3>${trimestre.nombre}</h3>`;
    const ul = document.createElement('div');
    ul.className = 'ramo-list';
    trimestre.ramos.forEach(ramo => {
      const ramoDiv = document.createElement('div');
      ramoDiv.className = 'ramo';
      // Botón
      const btn = document.createElement('button');
      btn.className = 'ramo-btn';
      btn.textContent = ramo.estado === 'aprobado' ? '✓' : (ramo.estado === 'bloqueado' ? '🔒' : '☐');
      btn.disabled = ramo.estado !== 'disponible';
      if (ramo.estado === 'aprobado') btn.classList.add('aprobado');
      btn.onclick = () => aprobarRamo(ramo.codigo);
      ramoDiv.appendChild(btn);

      // Info
      const infoDiv = document.createElement('div');
      infoDiv.className = 'ramo-info';
      infoDiv.innerHTML = `
        <span class="ramo-codigo">${ramo.codigo}</span>
        <span class="ramo-nombre">${ramo.nombre}</span>
        ${ramo.requisitos ? `<div class="ramo-requisitos">Pre: ${ramo.requisitos.join(', ')}</div>` : ''}
        ${ramo.abre ? `<div class="ramo-abre">Abre: ${ramo.abre.join(', ')}</div>` : ''}
      `;
      ramoDiv.appendChild(infoDiv);

      ul.appendChild(ramoDiv);
    });
    triDiv.appendChild(ul);
    grid.appendChild(triDiv);
  });
}

// ==== Lógica de aprobar/desbloquear ====
function aprobarRamo(codigo) {
  const ramo = ramosByCodigo[codigo];
  if (ramo.estado !== 'disponible') return;
  ramo.estado = 'aprobado';
  // Desbloquear los que tienen este como requisito
  Object.values(ramosByCodigo).forEach(r => {
    if (r.estado === 'bloqueado' && r.requisitos && r.requisitos.every(pr => ramosByCodigo[pr]?.estado === 'aprobado')) {
      r.estado = 'disponible';
    }
  });
  renderMalla();
  guardarProgreso();
}

// ==== Guardar/Cargar progreso en localStorage ====
function guardarProgreso() {
  const estado = {};
  Object.keys(ramosByCodigo).forEach(cod => {
    estado[cod] = ramosByCodigo[cod].estado;
  });
  localStorage.setItem('mallaComercioEstado', JSON.stringify(estado));
}
function cargarProgreso() {
  const estado = JSON.parse(localStorage.getItem('mallaComercioEstado') || '{}');
  Object.keys(estado).forEach(cod => {
    if (ramosByCodigo[cod]) ramosByCodigo[cod].estado = estado[cod];
  });
  // Asegurar el desbloqueo de los iniciales sin requisitos si el LS está vacío
  Object.values(ramosByCodigo).forEach(r => {
    if (!r.requisitos && !estado[r.codigo]) r.estado = 'disponible';
  });
}

// ==== Inicialización ====
cargarProgreso();
renderMalla();
