window.CORPO_DATA = window.CORPO_DATA || { categories: [], glossary: [] };

// Contenido formativo. Los importes, metas y plazos de los ejemplos son ilustrativos.
// Las referencias identifican marcos; no sustituyen sus textos ni asesoramiento profesional.
window.CORPO_DATA.categories.push({
  id: 'negocios',
  title: 'Negocios y gestión',
  desc: 'Finanzas operativas, calidad, procesos, riesgos y compras tal como se usan en empresas.',
  topics: [
    {
      id: 'negocios-finanzas', title: 'Finanzas operativas y decisiones de inversión',
      lessons: [
        {
          title: 'Del EBITDA a la caja: cierre operativo y capital de trabajo', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El EBITDA aproxima el resultado antes de intereses, impuestos, depreciaciones y amortizaciones. No representa caja disponible: omite inversiones, servicio de deuda y fondos inmovilizados en clientes e inventarios. Un cierre útil conecta resultado, saldos operativos y movimientos bancarios.' },
            { h: 'Cómo se aplica', list: [
              'Conciliá ventas, costos y devengamientos con el mayor; documentá el cálculo del EBITDA y cada ajuste excepcional.',
              'Definí capital de trabajo operativo neto: cuentas por cobrar comerciales + inventarios − cuentas por pagar comerciales. Excluí caja y deuda financiera de esta convención.',
              'Armá un puente gerencial: EBITDA − aumento del capital de trabajo operativo − impuestos operativos pagados ± otros ajustes de caja. No lo presentes como estado contable completo.',
              'Separá CAPEX, financiación e intereses según el marco contable aplicable; contrastá el puente con bancos y el estado de flujos.',
              'Calculá DSO = clientes promedio / ventas a crédito × días; DIO = inventario promedio / costo de ventas × días; DPO = proveedores promedio / compras a crédito × días.',
              'Usá bases comparables de impuestos y períodos. Ciclo de conversión de efectivo = DSO + DIO − DPO; revisá vencimientos y estacionalidad además del promedio.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: EBITDA de 120 unidades monetarias (u.m.), clientes que aumentan 50, inventarios 20 y proveedores 30. El capital operativo aumenta 40. Con impuestos pagados de 10 y sin otros ajustes, el puente da 70 de caja operativa. Un CAPEX de 90 deja −20 antes de financiación.' },
            { h: 'Errores comunes', list: ['Confundir crecimiento de ventas con capacidad de pagar sueldos.', 'Mejorar DPO dejando vencer obligaciones sin acuerdo con proveedores.', 'Comparar EBITDA ajustados que excluyen gastos distintos o recurrentes.'] },
            { h: 'Cómo se mide', p: 'Seguimiento semanal: caja proyectada por fecha de cobro y pago, vencidos por cliente y necesidades de financiación. Cierre mensual: conciliación del puente y explicación de cada diferencia; revisar promedios diarios cuando los saldos de cierre distorsionan el ciclo.' }
          ], refs: [{ name: 'IAS 7 — Statement of Cash Flows (clasificación y versión aplicable)', verify: true }]
        },
        {
          title: 'Presupuesto flexible, contribución y desvíos accionables', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El presupuesto flexible recalcula costos esperados para el volumen realmente producido. Permite separar el efecto de actividad de los cambios de precio y consumo. El margen de contribución muestra cuánto deja cada venta para cubrir costos fijos y generar resultado.' },
            { h: 'Paso a paso', list: [
              'Clasificá costos según su comportamiento dentro de un rango de actividad; separá componentes fijos, variables y escalonados.',
              'Calculá contribución unitaria = precio neto − costo variable unitario; equilibrio en unidades = costos fijos / contribución unitaria positiva.',
              'Para varios productos, usá una mezcla explícita y estable; recalculá el equilibrio si cambia el mix.',
              'Flexible = costo fijo presupuestado + tasa variable estándar × volumen real. No reescribas el presupuesto original: conservá ambas bases.',
              'Para materiales: desvío de precio = cantidad real consumida × (precio real − estándar); desvío de consumo = precio estándar × (cantidad real − cantidad estándar permitida para producción real).',
              'En costos, positivo significa desfavorable bajo esta convención. Asigná causa, responsable, acción y fecha; actualizá el pronóstico sin ocultar el desvío.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: precio 100, variable 60 y fijo mensual 20.000 u.m.; contribución 40 y equilibrio 500 unidades. Para 600 unidades, variable esperado 36.000. Se consumen 660 kg a 62 frente a 600 kg a 60: desvío precio 1.320 y consumo 3.600; total desfavorable 4.920.' },
            { h: 'Errores comunes', list: ['Atribuir a compras un exceso causado por reprocesos.', 'Asignar todo costo fijo al pedido incremental aunque exista capacidad ociosa.', 'Bajar precios usando contribución sin revisar capacidad limitada, canibalización ni costos evitables.'] },
            { h: 'Cómo se mide', p: 'Reportá contribución por producto y por recurso restringido; desvíos en u.m. y porcentaje contra una base informada. Si la base es cero, explicá el importe sin dividir. Validá que precio + consumo reconcilien con el desvío total.' }
          ]
        },
        {
          title: 'CAPEX vs OPEX: evaluar inversiones con flujos incrementales', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'La evaluación compara caja futura con y sin proyecto. CAPEX describe inversiones en activos y OPEX gastos de operación; la clasificación contable no decide por sí sola la conveniencia económica. El VAN mide valor a una tasa exigida; la TIR puede ser ambigua con flujos no convencionales.' },
            { h: 'Paso a paso', list: [
              'Documentá alternativa base, horizonte, moneda, capacidad, demanda y restricciones. Excluí costos hundidos; incorporá costos de oportunidad.',
              'Modelá inversión, instalación, caja operativa incremental, impuestos, capital de trabajo y valor terminal neto. La depreciación no es pago, pero puede afectar impuestos.',
              'VAN = −I₀ + suma de FCₜ / (1 + r)^t. Usá flujos y tasa coherentes en moneda, inflación, riesgo y período.',
              'TIR: tasa que hace VAN = 0. Si existen varios cambios de signo puede haber múltiples TIR; para alternativas excluyentes priorizá VAN con supuestos comparables.',
              'Payback simple: momento en que los cobros netos acumulados recuperan I₀; no descuenta ni considera caja posterior. ROI = beneficio neto definido / inversión; declar á horizonte y base.'.replace('declar á', 'declará'),
              'Simulá menor demanda, sobrecostos y demora; asigná un dueño de beneficios. Validá capitalización y tributos según la normativa y el procedimiento vigente de cada empresa/jurisdicción.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: desembolso inicial 100 u.m. y flujos netos de 60 al cierre de cada uno de dos años, sin residual. A 10% anual, VAN = −100 + 60/1,10 + 60/1,10² = 4,13. TIR ≈ 13,07%. Con cobros uniformes durante el año, payback simple ≈ 1,67 años.' },
            { h: 'Errores comunes', list: ['Contar intereses en flujos del proyecto y volver a cargarlos en la tasa.', 'Comparar alquiler y compra sin mantenimiento, disponibilidad ni valor residual.', 'Aprobar por ROI alto sin mirar escala, duración y sensibilidad del VAN.'] },
            { h: 'Cómo se mide', p: 'En la revisión posterior, compará inversión efectiva, fecha de puesta en servicio y caja incremental contra el caso aprobado. Separá errores de estimación de cambios externos; conservá el caso original para aprender.' }
          ], refs: [{ name: 'IAS 16 — Property, Plant and Equipment (criterios de reconocimiento aplicables)', verify: true }]
        }
      ]
    },
    {
      id: 'negocios-estrategia', title: 'Estrategia, indicadores y ejecución',
      lessons: [
        {
          title: 'De SWOT y fuerzas competitivas a decisiones verificables', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'SWOT o FODA organiza capacidades internas y condiciones externas. Las cinco fuerzas de Porter examinan rivalidad, entrantes, sustitutos y poder de clientes y proveedores. Sirven para elegir dónde competir y qué abandonar, siempre que cada hipótesis tenga evidencia y una decisión asociada.' },
            { h: 'Cómo se aplica', list: [
              'Delimitá cliente, servicio, geografía y sustitutos reales; no analices una industria tan amplia que borre las diferencias.',
              'Sustentá fortalezas y debilidades con costos, capacidad y evidencia del cliente; oportunidades y amenazas con hechos externos.',
              'Para cada fuerza, registrá concentración, costos de cambio, barreras y alternativas. Diferenciá hechos, supuestos y datos faltantes.',
              'Cruzá capacidades con necesidades: definí una propuesta, una renuncia explícita y la inversión requerida.',
              'Convertí el diagnóstico en hipótesis comercial, experimento, criterio de continuidad y responsable.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: una distribuidora observa que sus clientes pueden cambiar de proveedor fácilmente, pero pierden producción cuando falta un repuesto. Prueba un servicio de reposición con stock dedicado y compromiso de respuesta, en lugar de competir solamente por descuento; valida disposición a pagar y costo de mantener existencias.' },
            { h: 'Errores comunes', list: ['Llamar oportunidad a una intención interna como vender más.', 'Asignar puntajes sin evidencia y convertirlos en falsa precisión.', 'Considerar competidor sólo a quien vende el mismo producto e ignorar sustitutos.'] },
            { h: 'Cómo se mide', p: 'Medí conversión del piloto, contribución después del costo del servicio, retención y caja inmovilizada. Definí de antemano cuándo escalar, modificar o cerrar la prueba.' }
          ], refs: [{ name: 'Michael E. Porter — The Five Competitive Forces That Shape Strategy', verify: false }]
        },
        {
          title: 'OKR y Balanced Scorecard con indicadores auditables', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El Balanced Scorecard conecta resultados financieros, cliente, procesos y aprendizaje mediante hipótesis causales. Los OKR enfocan cambios prioritarios: objetivo cualitativo y resultados clave medibles. Una ficha de indicador evita que áreas distintas calculen resultados incompatibles.' },
            { h: 'Paso a paso', list: [
              'Trazá la cadena de hipótesis: entrenamiento → menos errores → entregas confiables → retención rentable; verificá esa relación con datos.',
              'Elegí pocos objetivos de cambio. Separá resultados clave de iniciativas: instalar un sistema es actividad; reducir fallas es resultado.',
              'Escribí la ficha: propósito, fórmula, unidad, alcance, exclusiones, fuente, fecha de corte, frecuencia y dueño del dato.',
              'Agregá línea base, meta, sentido favorable, responsable de actuar y controles contra manipulación.',
              'Combiná resultados con indicadores adelantados y salvaguardas: rapidez con calidad, ventas con contribución y cobranza.',
              'Revisá avances con evidencia y decisiones; no equipares automáticamente el puntaje de un OKR con remuneración individual.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: objetivo, hacer confiable la entrega. Resultado clave: pasar de 82% a 94% de pedidos completos y puntuales en un trimestre. Fórmula: pedidos que cumplen ambas condiciones / pedidos comprometidos para el período × 100. Fuente: promesa original y recepción del cliente; exclusiones aprobadas y visibles.' },
            { h: 'Errores comunes', list: ['Modificar la fecha prometida para mejorar el indicador.', 'Promediar porcentajes de sucursales sin ponderar denominadores.', 'Usar una meta sin dueño ni acción prevista frente al desvío.'] },
            { h: 'Cómo se mide', p: 'Controlá integridad del denominador, trazabilidad de registros y estabilidad de definiciones. Ante cambios de fórmula, versioná la ficha y explicá si la serie histórica sigue siendo comparable.' }
          ], refs: [{ name: 'Balanced Scorecard — marco de Kaplan y Norton', verify: false }, { name: 'Objectives and Key Results (OKR)', verify: false }]
        },
        {
          title: 'PDCA en la reunión de gestión: del desvío al estándar', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'PDCA organiza una mejora como prueba: planificar, hacer, verificar y actuar. La reunión de gestión utiliza ese ciclo para decidir con evidencia, remover bloqueos y sostener cambios. Una minuta vale por sus decisiones y compromisos verificables.' },
            { h: 'Cómo se aplica', list: [
              'Planificar: describí brecha, línea base, causa probable, prueba acotada y criterio de éxito.',
              'Hacer: ejecutá el piloto con responsable y registro de condiciones; preservá una comparación útil.',
              'Verificar: contrastá resultado con la predicción y revisá efectos sobre calidad, carga de trabajo y caja.',
              'Actuar: estandarizá lo que funcionó o reformulá la hipótesis; asigná seguimiento para evitar retrocesos.',
              'Antes de la reunión, distribuí datos y excepciones. Durante ella, registrá decisión, acción, dueño, fecha y evidencia requerida.',
              'Al abrir la próxima reunión, revisá compromisos vencidos y bloqueos; cerrar una acción exige evidencia, no sólo marcar una casilla.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: facturas rechazadas por datos faltantes pasan de 12 sobre 100 a 4 sobre 100 en un piloto con validación previa. El equipo verifica que la mezcla de clientes sea comparable, revisa si aumentó la demora de emisión y decide ajustar el procedimiento antes de ampliarlo.' },
            { h: 'Errores comunes', list: ['Confundir una oscilación casual con una mejora sostenida.', 'Terminar la reunión con acciones sin responsable.', 'Escalar el piloto sin actualizar instrucciones y capacitación.'] },
            { h: 'Cómo se mide', p: 'Usá tasa de rechazo, tiempo de ciclo y recurrencia tras estandarizar. Para la disciplina de gestión: acciones cerradas con evidencia / acciones que vencían en el período; conservá pendientes reprogramados en el registro.' }
          ], refs: [{ name: 'Ciclo Plan-Do-Check-Act (PDCA)', verify: false }]
        }
      ]
    },
    {
      id: 'negocios-procesos-calidad', title: 'Procesos, calidad y mejora continua',
      lessons: [
        {
          title: 'SOP y control documental en un sistema ISO 9001:2026', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'Un procedimiento operativo estándar (SOP) convierte un proceso repetible en instrucciones ejecutables y evidencia verificable. ISO 9001:2026 es la edición vigente del sistema de gestión de calidad. El SOP debe reflejar el trabajo real, sus puntos de control y las decisiones ante desvíos; acumular documentos no demuestra eficacia.' },
            { h: 'Paso a paso', list: [
              'Delimitá disparador, entradas, salida aceptable, cliente interno y dueño del proceso; recorré el trabajo con quienes lo ejecutan.',
              'Escribí secuencia, roles, recursos, criterios de aceptación y registros. Separá la instrucción de trabajo detallada del procedimiento general cuando facilite su uso.',
              'Definí puntos de detención y escalamiento: quién puede liberar una excepción y qué evidencia debe conservar.',
              'Probá el SOP con una persona entrenada que no lo haya redactado; registrá ambigüedades y corregilas antes de aprobar.',
              'Asigná versión, aprobador, fecha de vigencia y ubicación controlada; retirá copias obsoletas y verificá competencia mediante ejecución observada.',
              'Para la transición a ISO 9001:2026, contrastá procesos y evidencias con el texto autorizado; confirmá calendario y condiciones con el organismo de certificación.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: un SOP de alta de clientes exige validar datos fiscales, aprobar crédito y registrar la autorización antes de habilitar ventas a plazo. Si falta la aprobación, el sistema bloquea esa modalidad; el responsable registra la excepción y su resolución. El historial permite reconstruir quién decidió y con qué información.' },
            { h: 'Errores comunes', list: ['Publicar una versión nueva sin retirar instrucciones anteriores.', 'Usar asistencia a capacitación como única prueba de competencia.', 'Copiar requisitos normativos sin traducirlos a responsables, controles y registros.'] },
            { h: 'Cómo se mide', p: 'Medí operaciones conformes al primer intento / operaciones revisadas, excepciones sin autorización y recurrencia de fallas por versión. Revisá si el procedimiento permite obtener la salida requerida, además de comprobar que se completaron los formularios.' }
          ], refs: [{ name: 'ISO 9001:2026 — Quality management systems — Requirements', verify: false }, { name: 'Transición de certificación a ISO 9001:2026 (publicada el 16/9/2026; los certificadores citan hasta el 30/9/2029): confirmar con IAF y el organismo de certificación', verify: true }]
        },
        {
          title: '5S y Lean dentro de un proyecto DMAIC', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'DMAIC estructura la mejora de un proceso existente: definir, medir, analizar, mejorar y controlar. Lean ayuda a reconocer esperas, movimientos, inventario y reprocesos que no agregan valor. Las 5S organizan el puesto y hacen visibles las anomalías; su utilidad se demuestra en el flujo, no en una foto prolija.' },
            { h: 'Paso a paso', list: [
              'Definir: acordá problema, alcance, cliente, salida crítica y responsable. No incluyas una solución como si fuera la causa.',
              'Medir: definí inicio y fin del ciclo, unidad de análisis y defectos; comprobá que dos observadores clasifiquen los mismos casos de manera consistente.',
              'Analizar: observá el flujo y estratificá por producto, turno y tipo de pedido. Contrastá causas con registros y pruebas, no sólo con opiniones.',
              'Mejorar: probá cambios acotados. Aplicá 5S: clasificar, ordenar, limpiar e inspeccionar, estandarizar y sostener; asigná ubicación, señal visual y dueño.',
              'Controlar: actualizá estándar, capacitación y plan de reacción. Usá una serie temporal para distinguir mejora sostenida de variación casual.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: preparar un pedido lleva 40 minutos, de los cuales 12 son búsqueda. Un piloto de ubicaciones visuales reduce la búsqueda a 4 y el ciclo a 32, con pedidos comparables. La reducción del ciclo es (40 − 32) / 40 = 20%; se comprueba que no aumenten errores ni reposiciones urgentes.' },
            { h: 'Errores comunes', list: ['Hacer 5S como limpieza anual sin estándar ni seguimiento.', 'Mejorar un puesto y trasladar la cola al siguiente.', 'Calcular capacidad estadística de un proceso inestable o con medición poco confiable.'] },
            { h: 'Cómo se mide', p: 'Seguí mediana y percentiles del tiempo de ciclo, trabajo en proceso y rendimiento a la primera: unidades sin retrabajo / unidades procesadas × 100. Mostrá tamaño de muestra y mezcla de trabajo; no compares solamente promedios antes y después.' }
          ], refs: [{ name: 'Lean — metodología 5S', verify: false }, { name: 'Six Sigma — metodología DMAIC', verify: false }]
        },
        {
          title: 'OEE y TPM: convertir pérdidas en tareas de mantenimiento', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'La eficacia global del equipo (OEE) separa disponibilidad, rendimiento y calidad dentro del tiempo de producción planificado. El mantenimiento productivo total (TPM) coordina producción y mantenimiento para reducir pérdidas. El OEE orienta prioridades; no mide por sí solo rentabilidad, utilización de calendario ni seguridad.' },
            { h: 'Cómo se aplica', list: [
              'Fijá calendario y exclusiones antes del período. Disponibilidad = tiempo en marcha / tiempo de producción planificado; registrá paradas con causa y duración.',
              'Rendimiento = tiempo de ciclo ideal × unidades totales / tiempo en marcha. Usá un ciclo ideal validado por producto; investigá valores superiores a 100%.',
              'Calidad = unidades buenas a la primera / unidades totales. OEE = disponibilidad × rendimiento × calidad, usando fracciones antes de convertir a porcentaje.',
              'Priorizá pérdidas por tiempo e impacto en el recurso restringido; vinculá cada causa con una orden, un responsable y una verificación posterior.',
              'En TPM, definí inspecciones y cuidados autorizados del operador y trabajos de especialistas. Las intervenciones requieren aislamiento de energías según la normativa y el procedimiento vigente de cada empresa/jurisdicción.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: 480 minutos planificados, 60 de parada, ciclo ideal de 0,5 minutos y 700 unidades, de las cuales 665 salen buenas. Disponibilidad = 420/480 = 87,5%; rendimiento = 350/420 = 83,33%; calidad = 95%. OEE = 69,27%. El equipo separa paradas, pérdida de velocidad y rechazo antes de elegir una acción.' },
            { h: 'Errores comunes', list: ['Excluir paradas del denominador después de conocer el resultado.', 'Contar unidades retrabajadas como buenas a la primera.', 'Aumentar inventario para mejorar OEE de un equipo que no limita el flujo.'] },
            { h: 'Cómo se mide', p: 'Además de OEE, seguí recurrencia de averías, cumplimiento de mantenimiento y flujo del sistema. Para equipos reparables, declará MTBF = horas de operación / fallas y MTTR = tiempo de reparación / reparaciones; aclará si los tiempos incluyen esperas logísticas.' }
          ], refs: [{ name: 'Total Productive Maintenance (TPM) y Overall Equipment Effectiveness (OEE)', verify: false }]
        }
      ]
    },
    {
      id: 'negocios-personas-proyectos', title: 'Personas y proyectos',
      lessons: [
        {
          title: 'RACI y feedback basados en entregables y evidencia', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'RACI aclara quién ejecuta (Responsible), quién responde por el resultado (Accountable), quién es consultado y quién es informado. Aplicada a entregables y decisiones, reduce vacíos de responsabilidad. La evaluación de desempeño contrasta resultados y conductas observables con acuerdos explícitos, considerando recursos y dependencias.' },
            { h: 'Cómo se aplica', list: [
              'Armá filas por entregable o decisión, con criterio de aceptación. Como convención operativa, asigná un único Accountable por fila y al menos un ejecutor.',
              'Confirmá que quien responde tenga autoridad y capacidad; acordá consultas obligatorias, plazos internos y reemplazos.',
              'Traducí responsabilidades en acuerdos de desempeño: resultado, calidad, fecha, recursos y dependencias fuera del control individual.',
              'En el feedback, describí situación, conducta observada e impacto; pedí la perspectiva de la persona antes de inferir intención.',
              'Acordá una conducta o entrega verificable, apoyo necesario y fecha de seguimiento. Registrá sólo información pertinente y tratala según la normativa y el procedimiento vigente de cada empresa/jurisdicción.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: en un cierre, el analista prepara conciliaciones y la jefatura contable responde por su aceptación; tesorería es consultada. El feedback describe conciliaciones entregadas sin respaldos y el retrabajo causado. Acuerdan una lista de evidencia y revisión de los próximos cierres, además de resolver el acceso faltante al banco.' },
            { h: 'Errores comunes', list: ['Asignar responsabilidad sin autoridad ni disponibilidad.', 'Evaluar personalidad en vez de conductas observables.', 'Hacer responsable a una persona de una demora causada por accesos o insumos que otra área debe proveer.'] },
            { h: 'Cómo se mide', p: 'Revisá entregables aceptados a tiempo, devoluciones por falta de evidencia y decisiones demoradas por ambigüedad de roles. En desempeño, contrastá compromisos con resultados y contexto; evitá convertir una única métrica en toda la evaluación.' }
          ], refs: [{ name: 'Matriz de asignación de responsabilidades RACI', verify: false }, { name: 'Feedback Situation–Behavior–Impact (SBI)', verify: false }]
        },
        {
          title: 'Gestión del cambio: de la capacitación a la adopción', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'Gestionar el cambio significa conseguir que una forma nueva de trabajar se use correctamente y se sostenga. ADKAR distingue conciencia, deseo, conocimiento, capacidad y refuerzo. La resistencia puede revelar obstáculos reales: incentivos contradictorios, accesos faltantes, sobrecarga o pérdida de autonomía.' },
            { h: 'Paso a paso', list: [
              'Mapeá grupos afectados y diferencias entre trabajo actual y futuro: tareas, decisiones, habilidades y carga. Nombrá patrocinador y responsables locales.',
              'Explicá el problema y las decisiones abiertas; escuchá objeciones y asigná respuesta. No confundas comunicar con lograr acuerdo.',
              'Probá con un grupo representativo, incluidos casos difíciles; entregá accesos, tiempo de práctica y soporte en el puesto.',
              'Definí salida del piloto: ejecución correcta, excepciones resueltas, soporte disponible y criterios de reversión si el servicio se deteriora.',
              'Retirá circuitos anteriores sólo cuando exista continuidad operativa; ajustá incentivos y revisá adopción por grupo para sostener el cambio.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: una empresa digitaliza solicitudes de compra. De 100 solicitudes elegibles, 80 ingresan al nuevo circuito y 60 lo completan correctamente sin planillas paralelas: uso inicial 80%, adopción efectiva 60%. El análisis revela aprobadores sin acceso; repetir la capacitación no resolvería ese bloqueo.' },
            { h: 'Errores comunes', list: ['Medir éxito por asistentes al lanzamiento.', 'Castigar desvíos antes de comprobar acceso y capacidad.', 'Desactivar el circuito anterior sin atención de excepciones ni plan de continuidad.'] },
            { h: 'Cómo se mide', p: 'Medí casos elegibles completados correctamente en el nuevo proceso / casos elegibles, solicitudes de ayuda, retrabajo y tiempo hasta desempeño autónomo. Definí la ventana de observación y verificá que los buenos resultados persistan después de retirar el soporte intensivo.' }
          ], refs: [{ name: 'Prosci ADKAR Model', verify: false }]
        },
        {
          title: 'Alcance, cronograma y ruta crítica sin fechas ficticias', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'La estructura de desglose del trabajo (WBS) divide el alcance en entregables aceptables. El cronograma conecta actividades y dependencias. El método de ruta crítica (CPM) identifica la secuencia que determina la duración calculada; restricciones de recursos, calendarios y cambios pueden modificarla.' },
            { h: 'Paso a paso', list: [
              'Definí entregables, exclusiones, aceptación y responsable de aprobar. Desglosá paquetes de trabajo antes de estimar actividades.',
              'Estimá duraciones con responsables y calendarios reales; identificá dependencias, permisos internos y recursos compartidos.',
              'Para dependencias fin a inicio sin desfases: inicio temprano = máximo fin temprano de predecesoras; fin temprano = inicio temprano + duración.',
              'Recorré hacia atrás desde el fin del proyecto: fin tardío = mínimo inicio tardío de sucesoras; inicio tardío = fin tardío − duración. Holgura total = inicio tardío − inicio temprano.',
              'Revisá actividades con holgura cero y caminos casi críticos; nivelá recursos y recalculá antes de comprometer fechas.',
              'Fijá línea base. Para cada cambio, documentá impacto en alcance, costo, fecha y riesgo; aprobá antes de modificar el compromiso y conservá el historial.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: A dura 2 días; después se ejecutan B de 4 y C de 3 en paralelo; D dura 2 y requiere ambas. Con recursos independientes, A–B–D dura 8 días y es crítica; C tiene 1 día de holgura. Si B y C requieren a la misma persona, hay que recalcular el cronograma.' },
            { h: 'Errores comunes', list: ['Confundir porcentaje de horas gastadas con avance aceptado.', 'Fijar todas las fechas manualmente y perder la lógica de dependencias.', 'Reducir una actividad no crítica esperando acortar automáticamente el proyecto.'] },
            { h: 'Cómo se mide', p: 'Actualizá duración restante con evidencia y pronóstico de finalización; compará hitos aceptados con línea base. Mostrá cambios aprobados, consumo de holgura y decisiones pendientes, además del porcentaje de avance.' }
          ], refs: [{ name: 'Work Breakdown Structure (WBS) y Critical Path Method (CPM)', verify: false }]
        }
      ]
    },
    {
      id: 'negocios-riesgo-control', title: 'Riesgo, control y cumplimiento',
      lessons: [
        {
          title: 'ISO 31000:2018 y matrices de riesgo que llevan a decisiones', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'ISO 31000:2018 ofrece directrices para gestionar el efecto de la incertidumbre sobre los objetivos; no es una norma de certificación de sistemas. Una matriz permite priorizar escenarios, pero sus escalas ordinales no representan probabilidades exactas ni pérdidas esperadas.' },
            { h: 'Paso a paso', list: [
              'Definí objetivo, alcance, horizonte y criterios de decisión; acordá escalas con descripciones observables de probabilidad y consecuencia.',
              'Describí causa → evento → consecuencia. Separá escenarios diferentes aunque compartan una causa y nombrá al dueño del riesgo.',
              'Evaluá riesgo inherente bajo una convención explícita sobre ausencia de controles; registrá controles existentes y evidencia de su funcionamiento.',
              'Estimá riesgo residual considerando controles comprobados. Si usás probabilidad ordinal × impacto ordinal, tratá el producto como prioridad convencional, no como dinero ni frecuencia.',
              'Compará con criterios aprobados; elegí tratamiento, recursos, responsable y fecha. La aceptación residual debe tener autoridad definida.',
              'Revisá señales tempranas, cambios de contexto y eficacia del tratamiento. Transferir pérdidas por contrato o seguro no elimina todo el riesgo.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: un proveedor único puede detener una línea. En una escala interna, probabilidad 4 e impacto 5 dan prioridad 20. Tras homologar una alternativa y probar su capacidad, la probabilidad se evalúa en 2: prioridad residual 10. Eso no demuestra que la pérdida monetaria se haya reducido a la mitad.' },
            { h: 'Errores comunes', list: ['Bajar el riesgo residual por un control escrito que nadie ejecuta.', 'Sumar puntajes ordinales como si fueran pérdidas económicas.', 'Aceptar un riesgo sólo porque el color de la matriz cambió.'] },
            { h: 'Cómo se mide', p: 'Seguí tratamientos vencidos, controles probados y exposición fuera del criterio de aceptación. Si existe información confiable, pérdida esperada = probabilidad del escenario en el período × impacto monetario condicionado al evento; explicitá incertidumbre, supuestos y escenarios de baja frecuencia con daño grave.' }
          ], refs: [{ name: 'ISO 31000:2018 — Risk management — Guidelines', verify: false }]
        },
        {
          title: 'COSO: diseñar controles y probarlos en auditoría interna', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'COSO Internal Control—Integrated Framework (2013) conecta ambiente de control, evaluación de riesgos, actividades de control, información y comunicación, y monitoreo. Un control necesita dueño, ejecución y evidencia. Auditoría interna evalúa diseño y funcionamiento con independencia respecto de la actividad examinada; no reemplaza la responsabilidad de la gerencia.' },
            { h: 'Paso a paso', list: [
              'Vinculá cada riesgo relevante con un objetivo de control; definí ejecutor, frecuencia, población cubierta, evidencia y tratamiento de excepciones.',
              'Separá autorización, custodia, registro y conciliación cuando corresponda. Si el equipo es pequeño, documentá revisión compensatoria independiente y sus límites.',
              'Hacé un recorrido de una operación para entender diseño y puntos de falla; un caso conforme no prueba funcionamiento durante todo el período.',
              'Para auditar, acordá alcance y criterios, verificá integridad de la población y documentá cómo seleccionás la muestra según riesgo. No inventes un tamaño universal.',
              'Inspeccioná y, cuando sea posible, reejecutá el control; distinguí falta de diseño, omisión de ejecución y ausencia de evidencia.',
              'Reportá condición, criterio, causa sustentada y efecto; acordá acción con la gerencia y comprobá cierre y eficacia. Las obligaciones se identifican según la normativa y el procedimiento vigente de cada empresa/jurisdicción.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: quien carga cuentas bancarias de proveedores también puede liberar pagos. Se exige aprobación independiente del cambio y confirmación mediante un contacto previamente validado. Auditoría revisa modificaciones del período y evidencia de aprobación anterior al pago; no considera suficiente una firma agregada después.' },
            { h: 'Errores comunes', list: ['Confundir tener una política con tener un control eficaz.', 'Permitir que auditoría opere el control que después debe evaluar.', 'Extrapolar una muestra dirigida como si fuera una estimación estadística de toda la población.'] },
            { h: 'Cómo se mide', p: 'Reportá excepciones / casos examinados con método y alcance de muestra, hallazgos repetidos y acciones vencidas según gravedad. Cerrá hallazgos con prueba del control corregido; la carga de un documento no acredita por sí sola eficacia.' }
          ], refs: [{ name: 'COSO — Internal Control—Integrated Framework (2013)', verify: false }]
        },
        {
          title: 'Causa raíz y acciones correctivas que evitan recurrencia', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El análisis de causa raíz reconstruye condiciones que hicieron posible una falla. Contención limita el daño inmediato; corrección resuelve el caso; acción correctiva modifica las causas para evitar repetición. Los cinco porqués y el diagrama de Ishikawa ordenan hipótesis, pero no sustituyen evidencia.' },
            { h: 'Paso a paso', list: [
              'Protegé a las personas y contené el efecto según la normativa y el procedimiento vigente de cada empresa/jurisdicción; preservá registros y trazabilidad.',
              'Definí qué ocurrió, dónde, cuándo, alcance y comportamiento esperado; reconstruí una línea temporal con fuentes comprobables.',
              'Explorá método, equipo, materiales, medición, entorno y organización. Contrastá hipótesis con casos donde la falla ocurrió y donde no ocurrió.',
              'Preguntá por qué fallaron prevención y detección. No cierres la investigación en error humano ni fuerces exactamente cinco preguntas.',
              'Elegí acciones que cambien condiciones: validación automática, diseño, recursos o controles. Asigná dueño, fecha y prueba de implementación.',
              'Definí antes del cierre una ventana y volumen de exposición para verificar eficacia; revisá efectos secundarios y procesos con la misma vulnerabilidad.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: una factura se paga dos veces porque el mismo comprobante llega por correo y portal con formatos distintos de numeración. Recuperar el pago corrige el caso. Normalizar identificadores y bloquear duplicados por proveedor corrige la causa; una prueba incluye variantes legítimas para evitar bloquear facturas válidas.' },
            { h: 'Errores comunes', list: ['Elegir capacitación para cualquier causa, aunque el sistema permita el error.', 'Cambiar registros originales y perder evidencia.', 'Declarar eficacia sin que haya existido oportunidad de repetición.'] },
            { h: 'Cómo se mide', p: 'Medí recurrencias / operaciones expuestas, tiempo hasta detección y fallas del control nuevo. Si no se repite el evento, informá también cuántas operaciones y condiciones se observaron; ausencia de casos sin exposición no prueba eficacia.' }
          ], refs: [{ name: 'Análisis de causa raíz — cinco porqués y diagrama de Ishikawa', verify: false }]
        }
      ]
    },
    {
      id: 'negocios-compras-proveedores', title: 'Compras, contratos y proveedores',
      lessons: [
        {
          title: 'Del requerimiento al pago: ciclo de compras y three-way match', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El ciclo procure-to-pay conecta necesidad, selección, orden de compra, recepción, factura y pago. El cotejo de tres documentos (three-way match) compara orden, recepción y factura antes de liberar el pago. Controla cantidades y condiciones; no demuestra por sí solo que la compra era necesaria ni que el proveedor sea legítimo.' },
            { h: 'Paso a paso', list: [
              'Documentá especificación, cantidad, fecha requerida, presupuesto y aprobador; separá solicitante, comprador, receptor y liberador de pagos según el riesgo.',
              'Compará ofertas sobre una base común: precio, calidad, transporte, plazo, garantías y costo de operación. Registrá criterios y excepciones a la competencia.',
              'Emití una orden autorizada antes del compromiso; controlá cambios de precio y cantidad mediante versiones y aprobaciones.',
              'Registrá recepción real e inspección; para servicios, usá conformidad del entregable o hito, con evidencia de aceptación.',
              'Cotejá proveedor, moneda, precio, cantidad recibida y facturada, impuestos y cargos acordados; las tolerancias deben ser internas, explícitas y aprobadas.',
              'Bloqueá discrepancias y asigná resolución; no alteres la recepción para hacer coincidir una factura. Verificá duplicados, vencimiento y beneficiario antes del pago.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: orden de 100 unidades a 20 u.m., recepción de 90 y factura por 100. Sin anticipo ni condición especial acordada, quedan 10 unidades por resolver. Si la factura se corrige a 90, el importe es 1.800 antes de impuestos; cualquier pago parcial requiere autorización y tratamiento documental correspondiente.' },
            { h: 'Errores comunes', list: ['Crear la orden después de recibir la factura para simular aprobación previa.', 'Aceptar un servicio sin evidencia del entregable.', 'Dar por válido un cambio de cuenta bancaria usando únicamente el correo que lo solicita.'] },
            { h: 'Cómo se mide', p: 'Medí facturas que concilian al primer intento / facturas sujetas a cotejo, antigüedad de bloqueos y compras sin orden previa. Separá causas de precio, recepción y datos maestros; validá documentación fiscal según la normativa y el procedimiento vigente de cada empresa/jurisdicción.' }
          ], refs: [{ name: 'Procure-to-pay (P2P) y three-way match', verify: false }]
        },
        {
          title: 'Evaluación de proveedores y SLA con consecuencias operativas', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'Homologar verifica si un proveedor puede cumplir; evaluar desempeño comprueba cómo cumple en operaciones reales. Un acuerdo de nivel de servicio (SLA) define prestación, medición y respuesta ante incumplimientos. El contrato también necesita alcance, aceptación, cambios, responsabilidades y salida ordenada.' },
            { h: 'Cómo se aplica', list: [
              'Segmentá por criticidad, sustituibilidad y exposición; exigí evidencia proporcional de capacidad, calidad y continuidad antes de habilitar.',
              'Definí requisitos excluyentes y luego criterios ponderados. Puntaje = suma de peso × nota comparable; los pesos suman 100% y no compensan una condición excluyente incumplida.',
              'En el SLA, precisá horario de cobertura, severidades, reloj de inicio y fin, fuente del dato, exclusiones y responsabilidades del cliente.',
              'Distinguí respuesta, restauración y solución definitiva; acordá escalamiento, revisión y remedios contractuales con responsables identificados.',
              'Revisá desempeño con evidencia y derecho a explicar discrepancias; exigí acciones sobre recurrencias y probá alternativas para proveedores críticos.',
              'Documentá aceptación, control de cambios, devolución de información y transición de salida; validá cláusulas según la normativa y el procedimiento vigente de cada empresa/jurisdicción.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: calidad pesa 50%, entrega 30% y soporte 20%. Notas sobre 100 de 90, 80 y 70 dan 83 puntos. Sin embargo, una prueba obligatoria de continuidad fallida impide aprobar al proveedor crítico. Para soporte, el contrato separa confirmar recepción del incidente de restaurar efectivamente el servicio.' },
            { h: 'Errores comunes', list: ['Promediar incumplimientos críticos con buen precio y declarar aceptable al proveedor.', 'Medir sólo tiempo de primera respuesta automática.', 'Aceptar exclusiones tan amplias que el SLA deje de representar el servicio recibido.'] },
            { h: 'Cómo se mide', p: 'OTIF = entregas completas y puntuales / entregas comprometidas × 100, con unidad y fecha prometida definidas. Para servicios, disponibilidad = (tiempo acordado − indisponibilidad computable) / tiempo acordado × 100. Publicá exclusiones, incidentes repetidos y tiempos de restauración por severidad.' }
          ], refs: [{ name: 'Service Level Agreement (SLA) y evaluación ponderada de proveedores', verify: false }]
        },
        {
          title: 'Incoterms 2020: separar entrega, riesgo y costo logístico', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'Las once reglas Incoterms 2020 de ICC distribuyen obligaciones, costos y transferencia del riesgo entre vendedor y comprador. No determinan por sí solas propiedad, forma de pago ni todos los remedios por incumplimiento. El lugar nombrado y la regla elegida deben coincidir con la operación física y el contrato de transporte.' },
            { h: 'Paso a paso', list: [
              'Identificá modo de transporte, punto físico de entrega, capacidad de cada parte para contratar transporte y gestionar aduana, y documentos requeridos.',
              'Elegí la familia adecuada: FAS, FOB, CFR y CIF son para transporte marítimo o por vías navegables interiores; las otras siete reglas admiten cualquier modo.',
              'Escribí regla + lugar o puerto preciso + Incoterms 2020; indicá terminal o dirección cuando corresponda y verificá carga y descarga.',
              'Dibujá por separado dónde se transfiere el riesgo y hasta dónde paga transporte el vendedor. En las reglas C esos puntos no coinciden.',
              'Para contenedores entregados al transportista antes de estar a bordo, evaluá FCA en vez de usar FOB automáticamente; verificá necesidades documentales del pago.',
              'Acordá seguro, avisos y documentación; revisá capacidad para importación y tributos según la normativa y el procedimiento vigente de cada empresa/jurisdicción. No aceptes DDP sin comprobar que el vendedor pueda cumplir sus obligaciones.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: en CPT depósito del comprador, el vendedor paga transporte hasta ese destino, pero el riesgo se transfiere al entregar al transportista en el punto de entrega acordado. Si hay varios transportistas, precisá ese punto. Una avería posterior exige revisar seguro y reclamación; pagar el flete no equivale a retener el riesgo hasta destino.' },
            { h: 'Errores comunes', list: ['Escribir sólo FOB o CIF sin puerto ni edición.', 'Suponer que toda regla obliga al vendedor a contratar seguro.', 'Comparar precios de reglas distintas sin reconstruir costos a cargo del comprador.'] },
            { h: 'Cómo se mide', p: 'Armá costo puesto en destino: precio de compra + cargos a cargo del comprador + tributos no recuperables + costos internos atribuibles, evitando duplicar fletes ya incluidos. Compará desvíos de costos, demoras por documentos y reclamos sin cobertura; separá el efecto de caja de impuestos recuperables.' }
          ], refs: [{ name: 'ICC — Incoterms® 2020', verify: false }]
        }
      ]
    },
  ]
});
