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
  ]
});
