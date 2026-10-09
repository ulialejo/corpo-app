window.CORPO_DATA = window.CORPO_DATA || { categories: [], glossary: [] };

// Glosario técnico de negocios y gestión. Los números de los ejemplos son ilustrativos, no datos reales.
window.CORPO_DATA.glossary.push(
  {
    term: "EBITDA", area: "negocios", aka: ["resultado operativo antes de D&A", "earnings before interest, taxes, depreciation and amortization"],
    meaning: "Resultado operativo antes de intereses, impuestos, depreciaciones y amortizaciones. Se calcula, en forma simple, como ventas menos costos y gastos operativos sin contar depreciaciones.",
    application: "Sirve para comparar el desempeño operativo entre períodos o empresas sin el efecto de cómo se financian o cuánto amortizan. No es caja: ignora inversiones (CAPEX), capital de trabajo e impuestos.",
    example: "Ejemplo ilustrativo: ventas 1.000, costos operativos 700 → EBITDA 300. Si ese año se compraron equipos por 250, la caja disponible es mucho menor que 300.",
    related: ["Flujo de caja operativo", "CAPEX", "Capital de trabajo"]
  },
  {
    term: "Flujo de caja operativo", area: "negocios", aka: ["operating cash flow", "OCF", "cash flow"],
    meaning: "Dinero que efectivamente entra y sale por la actividad habitual del negocio en un período, independientemente de cuándo se registra la venta o el gasto.",
    application: "Se usa para saber si la operación genera caja suficiente para pagar sueldos, proveedores e inversiones. Una empresa puede mostrar ganancias contables y aun así quedarse sin caja si cobra tarde.",
    example: "Un proveedor vende por 500 en marzo con cobro a 60 días y paga sueldos por 300 en marzo: tiene ganancia contable de 200 pero caja negativa de 300 hasta cobrar en mayo.",
    related: ["Capital de trabajo", "DSO / DPO / DIO", "Ciclo de conversión de efectivo"]
  },
  {
    term: "Capital de trabajo", area: "negocios", aka: ["working capital", "capital de trabajo operativo"],
    meaning: "Recursos que la operación mantiene inmovilizados para funcionar. En su versión operativa: cuentas por cobrar + inventarios − cuentas por pagar. En la versión contable: activo corriente − pasivo corriente.",
    application: "Si crece el negocio, normalmente crece el capital de trabajo y consume caja. Se gestiona negociando plazos de cobro y pago y reduciendo inventarios innecesarios.",
    example: "Ejemplo ilustrativo: cuentas por cobrar 200 + inventario 150 − cuentas por pagar 120 → capital de trabajo operativo 230.",
    related: ["DSO / DPO / DIO", "Ciclo de conversión de efectivo", "Flujo de caja operativo"]
  },
  {
    term: "DSO / DPO / DIO", area: "negocios", aka: ["días de cobro", "días de pago", "días de inventario"],
    meaning: "Tres indicadores en días. DSO = cuentas por cobrar ÷ ventas × días del período. DPO = cuentas por pagar ÷ costo de ventas × días. DIO = inventario ÷ costo de ventas × días.",
    application: "Miden cuánto tarda la empresa en cobrar, en pagar y en rotar su inventario. Se monitorean por mes y se comparan contra la política comercial y las condiciones de los contratos.",
    example: "Ejemplo ilustrativo: cuentas por cobrar 300, ventas anuales 3.650 → DSO = 300 ÷ 3.650 × 365 = 30 días.",
    related: ["Ciclo de conversión de efectivo", "Capital de trabajo"]
  },
  {
    term: "Ciclo de conversión de efectivo", area: "negocios", aka: ["cash conversion cycle", "CCC"],
    meaning: "Cantidad de días que pasan entre que se paga por los insumos y se cobra la venta. Se calcula como DIO + DSO − DPO.",
    application: "Un ciclo más corto libera caja. Se acorta cobrando antes, rotando más rápido el inventario o negociando plazos de pago más largos con proveedores.",
    example: "Ejemplo ilustrativo: DIO 40 + DSO 30 − DPO 45 = 25 días de caja financiados por la propia empresa.",
    related: ["DSO / DPO / DIO", "Capital de trabajo"]
  },
  {
    term: "CAPEX", area: "negocios", aka: ["capital expenditure", "gasto de capital", "inversión en activos"],
    meaning: "Inversión destinada a adquirir, ampliar o mejorar activos que se usarán por varios períodos (equipos, edificios, sistemas). Se activa en el balance y se amortiza.",
    application: "Define qué decisiones requieren aprobación de inversión: se evalúan con VAN, TIR o payback antes de comprometer fondos. Se distingue del mantenimiento ordinario, que es OPEX.",
    example: "Comprar un autoelevador nuevo es CAPEX; pagar el service anual del mismo equipo es OPEX.",
    related: ["OPEX", "VAN", "Payback"]
  },
  {
    term: "OPEX", area: "negocios", aka: ["operating expenditure", "gasto operativo"],
    meaning: "Gastos recurrentes necesarios para operar el negocio día a día: sueldos, alquileres, servicios, mantenimiento ordinario, insumos.",
    application: "Se controla mensualmente contra presupuesto. Un error frecuente es clasificar como OPEX lo que en realidad es una inversión, o al revés, lo que distorsiona resultados y decisiones.",
    example: "El alquiler mensual de un depósito es OPEX; construir el propio depósito es CAPEX.",
    related: ["CAPEX", "Análisis de desvíos"]
  },
  {
    term: "Margen de contribución", area: "negocios", aka: ["contribution margin"],
    meaning: "Lo que queda de cada venta después de cubrir los costos variables: precio menos costo variable unitario.",
    application: "Indica cuánto aporta cada unidad vendida para cubrir los costos fijos y generar ganancia. Se usa para decidir precios, descuentos y qué productos o servicios priorizar.",
    example: "Ejemplo ilustrativo: una habitación se vende a 100 y su costo variable (limpieza, amenities, lavandería) es 20 → margen de contribución 80.",
    related: ["Punto de equilibrio"]
  },
  {
    term: "Punto de equilibrio", area: "negocios", aka: ["break-even", "umbral de rentabilidad"],
    meaning: "Nivel de ventas en el que el negocio no gana ni pierde. En unidades: costos fijos ÷ margen de contribución unitario.",
    application: "Permite saber cuánto hay que vender para cubrir la estructura y evaluar qué pasa si suben los costos fijos o baja el precio.",
    example: "Ejemplo ilustrativo: costos fijos mensuales 8.000 y margen de contribución 80 por unidad → equilibrio en 100 unidades por mes.",
    related: ["Margen de contribución", "Análisis de desvíos"]
  },
  {
    term: "Análisis de desvíos", area: "negocios", aka: ["variance analysis", "desvío presupuestario"],
    meaning: "Comparación entre lo real y lo presupuestado, separando el desvío en causas (precio, volumen, mezcla, eficiencia) y marcándolo como favorable o desfavorable.",
    application: "Se hace en el cierre mensual: cada desvío relevante necesita una explicación, un responsable y una acción. Sin explicar la causa, el presupuesto no sirve para controlar.",
    example: "Ejemplo ilustrativo: el costo de lavandería fue 12% mayor al presupuesto. Se separa: ¿se lavó más porque hubo más ocupación (volumen) o porque subió la tarifa del proveedor (precio)?",
    related: ["OPEX", "Presupuesto base cero"]
  },
  {
    term: "Presupuesto base cero", area: "negocios", aka: ["zero-based budgeting", "ZBB"],
    meaning: "Método en el que cada gasto debe justificarse desde cero en cada ciclo, en lugar de partir del presupuesto del año anterior y ajustarlo.",
    application: "Se usa para revisar costos acumulados con los años. Exige más trabajo, por lo que suele aplicarse por áreas o cuando hay una reducción de costos planificada.",
    example: "Cada área presenta sus servicios contratados y justifica uno por uno; los que no tienen justificación no entran en el presupuesto del año.",
    related: ["Análisis de desvíos"]
  },
  {
    term: "VAN", area: "negocios", aka: ["valor actual neto", "NPV", "net present value"],
    meaning: "Suma de los flujos de caja futuros de un proyecto descontados a hoy con una tasa de descuento, menos la inversión inicial.",
    application: "Regla básica: si el VAN es positivo, el proyecto crea valor a esa tasa. Es la base para decidir un CAPEX y comparar alternativas de distinto plazo.",
    example: "Ejemplo ilustrativo: inversión 1.000, flujos de 600 y 600 en dos años, tasa 10% → VAN ≈ 600/1,1 + 600/1,21 − 1.000 ≈ 41 (positivo).",
    related: ["TIR", "Payback", "CAPEX", "Costo de capital"]
  },
  {
    term: "TIR", area: "negocios", aka: ["tasa interna de retorno", "IRR"],
    meaning: "Tasa de descuento que hace que el VAN de un proyecto sea cero. Es la rentabilidad anualizada implícita de sus flujos.",
    application: "Se compara con el costo de capital o la rentabilidad mínima exigida. Con flujos que cambian de signo más de una vez puede dar resultados múltiples o engañosos, por lo que conviene acompañarla del VAN.",
    example: "Si la TIR de un proyecto es mayor que la tasa mínima que exige la empresa, el proyecto es candidato a aprobarse.",
    related: ["VAN", "Costo de capital"]
  },
  {
    term: "Payback", area: "negocios", aka: ["período de recuperación", "plazo de repago"],
    meaning: "Tiempo que tarda una inversión en recuperarse con los flujos que genera.",
    application: "Es simple y útil como filtro de riesgo, pero ignora el valor del dinero en el tiempo y lo que ocurre después de recuperar la inversión. Se usa junto con el VAN, no en lugar de él.",
    example: "Ejemplo ilustrativo: inversión 600 y ahorro de 200 por año → payback de 3 años.",
    related: ["VAN", "TIR", "ROI"]
  },
  {
    term: "ROI", area: "negocios", aka: ["return on investment", "retorno sobre la inversión"],
    meaning: "Relación entre el beneficio neto de una inversión y su costo: (beneficio − inversión) ÷ inversión.",
    application: "Permite comparar rápidamente alternativas. Su límite: no considera el plazo ni el riesgo, y depende de qué costos se incluyan en el cálculo.",
    example: "Ejemplo ilustrativo: se invierten 500 y se obtienen 650 de beneficio total → ROI = (650 − 500) ÷ 500 = 30%.",
    related: ["Payback", "VAN"]
  },
  {
    term: "Costo de capital", area: "negocios", aka: ["WACC", "costo promedio ponderado de capital"],
    meaning: "Rentabilidad mínima que debe generar un proyecto para compensar a quienes financian la empresa (deuda y capital propio), ponderada por su peso en la financiación.",
    application: "Se usa como tasa de descuento para calcular el VAN y como vara para exigir a los proyectos nuevos.",
    example: "Un proyecto que rinde menos que el costo de capital destruye valor aunque muestre ganancia contable.",
    related: ["VAN", "TIR"]
  },
  {
    term: "KPI y ficha de indicador", area: "negocios", aka: ["key performance indicator", "indicador clave"],
    meaning: "Indicador que mide el avance hacia un objetivo. Un KPI bien definido tiene ficha: qué mide, fórmula, fuente de datos, frecuencia, responsable y meta.",
    application: "Sin ficha, dos personas calculan el mismo indicador de forma distinta. La ficha evita discusiones sobre el número y permite que el KPI dispare decisiones.",
    example: "Ficha: «Rotación de inventario» — fórmula: costo de ventas del período ÷ inventario promedio; fuente: sistema de stock; frecuencia: mensual; responsable: jefe de depósito.",
    related: ["OKR", "Balanced Scorecard"]
  },
  {
    term: "OKR", area: "negocios", aka: ["objectives and key results", "objetivos y resultados clave"],
    meaning: "Método de gestión por objetivos: un objetivo cualitativo y ambicioso (qué queremos lograr) acompañado de 2 a 5 resultados clave medibles (cómo sabremos que lo logramos).",
    application: "Se fijan por trimestre y se revisan con frecuencia. Los resultados clave son medidas de resultado, no tareas.",
    example: "Objetivo: «Que el depósito entregue sin errores». Resultado clave: «Subir la exactitud de inventario a la meta acordada en el trimestre».",
    related: ["KPI y ficha de indicador", "Balanced Scorecard"]
  },
  {
    term: "Balanced Scorecard", area: "negocios", aka: ["cuadro de mando integral", "BSC"],
    meaning: "Marco de Kaplan y Norton que traduce la estrategia en indicadores de cuatro perspectivas: financiera, clientes, procesos internos y aprendizaje y crecimiento.",
    application: "Evita gestionar solo con números financieros: obliga a vincular indicadores de proceso y de personas con el resultado final.",
    example: "Perspectiva de procesos internos: tiempo de preparación de pedidos. Perspectiva de aprendizaje: horas de capacitación por persona.",
    related: ["KPI y ficha de indicador", "OKR"]
  },
  {
    term: "PDCA", area: "negocios", aka: ["ciclo de Deming", "plan-do-check-act", "planificar-hacer-verificar-actuar"],
    meaning: "Ciclo de mejora continua en cuatro pasos: planificar (Plan), ejecutar (Do), verificar resultados (Check) y actuar para estandarizar o corregir (Act).",
    application: "Es la base lógica de las normas de gestión ISO y de Kaizen. Se aplica en pequeño: probar un cambio en un sector, medirlo y recién entonces generalizarlo.",
    example: "Plan: cambiar el orden de picking. Do: probarlo una semana en un pasillo. Check: comparar tiempos. Act: adoptar el cambio o ajustarlo.",
    related: ["Kaizen", "SOP", "ISO 9001"]
  },
  {
    term: "FODA / SWOT", area: "negocios", aka: ["SWOT", "fortalezas oportunidades debilidades amenazas"],
    meaning: "Herramienta que separa factores internos (fortalezas y debilidades) de externos (oportunidades y amenazas) para analizar la situación de una organización o proyecto.",
    application: "Es útil si termina en decisiones: cruzar fortalezas con oportunidades, y definir qué hacer con cada debilidad y amenaza relevante. Como lista suelta sirve poco.",
    example: "Fortaleza interna: equipo con experiencia en operación. Amenaza externa: aumento de costos de insumos. Acción: renegociar contratos con proveedores.",
    related: ["Cinco fuerzas de Porter", "Mapa de stakeholders"]
  },
  {
    term: "Cinco fuerzas de Porter", area: "negocios", aka: ["Porter", "análisis de industria"],
    meaning: "Modelo que analiza la competitividad de una industria con cinco fuerzas: rivalidad entre competidores, amenaza de nuevos entrantes, amenaza de sustitutos, poder de negociación de clientes y de proveedores.",
    application: "Ayuda a entender de dónde viene la presión sobre los márgenes y dónde conviene posicionarse o negociar.",
    example: "En un destino con muchos hoteles similares, la rivalidad y el poder de los canales de venta online presionan las tarifas.",
    related: ["FODA / SWOT"]
  },
  {
    term: "SIPOC", area: "negocios", aka: ["suppliers inputs process outputs customers"],
    meaning: "Diagrama de alto nivel que describe un proceso con cinco columnas: proveedores (Suppliers), entradas (Inputs), proceso (Process), salidas (Outputs) y clientes (Customers).",
    application: "Es el primer paso antes de mejorar un proceso: ordena quién entrega qué a quién y fija dónde empieza y dónde termina el proceso.",
    example: "Proceso «recepción de mercadería»: proveedor → remito y mercadería → verificar y registrar → ingreso al stock → almacén y compras.",
    related: ["SOP", "DMAIC"]
  },
  {
    term: "SOP", area: "negocios", aka: ["procedimiento operativo estándar", "standard operating procedure"],
    meaning: "Documento que describe paso a paso cómo se realiza una tarea de manera estándar: objetivo, alcance, responsables, pasos, controles y registros.",
    application: "Reduce variabilidad y acelera la capacitación. Un buen SOP es corto, usa verbos, se prueba con alguien que no conoce la tarea y se revisa cuando el proceso cambia.",
    example: "SOP de apertura de caja: 1) contar el fondo fijo, 2) registrar el monto, 3) firmar la planilla, 4) informar diferencias al supervisor.",
    related: ["SIPOC", "ISO 9001", "PDCA"]
  },
  {
    term: "5S", area: "negocios", aka: ["cinco eses", "seiri seiton seiso seiketsu shitsuke"],
    meaning: "Método japonés de orden y limpieza en cinco pasos: clasificar (Seiri), ordenar (Seiton), limpiar (Seiso), estandarizar (Seiketsu) y sostener (Shitsuke).",
    application: "Se aplica en depósitos, talleres y oficinas. La clave está en los dos últimos pasos: sin estándares visibles y auditorías periódicas, el orden se pierde en semanas.",
    example: "En un depósito: retirar lo que no se usa, marcar cada ubicación, limpiar a diario, definir cómo debe verse un pasillo ordenado y auditarlo cada semana.",
    related: ["Kaizen", "Muda", "SOP"]
  },
  {
    term: "Kaizen", area: "negocios", aka: ["mejora continua"],
    meaning: "Filosofía de mejora continua con pequeños cambios frecuentes que involucran a todas las personas, en lugar de grandes reformas ocasionales.",
    application: "Se implementa con reuniones cortas, tableros visuales y un sistema simple para proponer y probar mejoras (por ejemplo, con el ciclo PDCA).",
    example: "Un almacenero propone acercar los ítems de mayor salida a la zona de despacho; se prueba un mes y se estandariza si reduce el tiempo de picking.",
    related: ["PDCA", "5S", "Muda"]
  },
  {
    term: "Muda", area: "negocios", aka: ["desperdicio", "los 8 desperdicios", "lean waste", "DOWNTIME"],
    meaning: "Desperdicio: toda actividad que consume recursos sin agregar valor para el cliente. Los ocho clásicos: defectos, sobreproducción, esperas, talento no utilizado, transporte, inventario, movimiento y sobreprocesamiento.",
    application: "Se usa para recorrer un proceso y marcar qué pasos son valor agregado y cuáles desperdicio, para eliminarlo o reducirlo.",
    example: "Buscar durante 10 minutos una herramienta que no tiene lugar fijo es desperdicio de movimiento y de espera.",
    related: ["5S", "Kaizen", "Lean"]
  },
  {
    term: "Lean", area: "negocios", aka: ["lean management", "manufactura esbelta"],
    meaning: "Enfoque de gestión nacido en el sistema de producción de Toyota, centrado en entregar valor al cliente eliminando desperdicios y mejorando el flujo.",
    application: "Se aplica también en servicios y logística, con herramientas como mapeo del flujo de valor, 5S, tableros visuales y estandarización.",
    example: "Rediseñar el circuito de limpieza de habitaciones para eliminar recorridos y esperas es una aplicación de Lean en hotelería.",
    related: ["Muda", "5S", "Kaizen"]
  },
  {
    term: "DMAIC", area: "negocios", aka: ["Six Sigma", "definir medir analizar mejorar controlar"],
    meaning: "Método de resolución de problemas de Six Sigma en cinco fases: Definir, Medir, Analizar, Mejorar (Improve) y Controlar.",
    application: "Se usa cuando un problema es recurrente y la causa no es obvia: primero se mide con datos, luego se prueba la causa y recién después se implementa la solución, con un control que la sostenga.",
    example: "Problema: demoras en la entrega de pedidos del depósito. Medir tiempos reales, analizar dónde se acumula la espera, mejorar ese tramo y controlar con un indicador semanal.",
    related: ["PDCA", "Análisis de causa raíz", "SIPOC"]
  },
  {
    term: "OEE", area: "negocios", aka: ["overall equipment effectiveness", "eficiencia global del equipo"],
    meaning: "Indicador de productividad de un equipo: disponibilidad × rendimiento × calidad, con cada factor expresado como proporción.",
    application: "Muestra cuánto del tiempo planificado se convierte realmente en producción buena. Sirve para ubicar la pérdida principal: paradas, velocidad reducida o defectos.",
    example: "Ejemplo ilustrativo: disponibilidad 90% × rendimiento 85% × calidad 95% → OEE ≈ 72,7%.",
    related: ["TPM", "Disponibilidad mecánica"]
  },
  {
    term: "TPM", area: "negocios", aka: ["mantenimiento productivo total", "total productive maintenance"],
    meaning: "Sistema que involucra a operadores y mantenimiento en el cuidado de los equipos para eliminar averías, microparadas y defectos.",
    application: "Incluye mantenimiento autónomo (el operador limpia, inspecciona y lubrica), mantenimiento planificado y mejoras para atacar las pérdidas que muestra el OEE.",
    example: "El operador de un autoelevador hace la inspección diaria con checklist y reporta anomalías antes de que se conviertan en una falla.",
    related: ["OEE", "Mantenimiento preventivo"]
  },
  {
    term: "RACI", area: "negocios", aka: ["matriz de responsabilidades", "responsible accountable consulted informed"],
    meaning: "Matriz que asigna a cada tarea quién la ejecuta (Responsible), quién responde por el resultado final (Accountable), a quién se consulta (Consulted) y a quién se informa (Informed).",
    application: "Regla clave: una sola persona es Accountable por tarea. Evita que todo el mundo opine y nadie decida, o que una tarea quede sin dueño.",
    example: "Tarea «aprobar una orden de compra»: R = comprador, A = jefe de compras, C = área solicitante, I = almacén.",
    related: ["Ruta crítica", "Mapa de stakeholders"]
  },
  {
    term: "Ruta crítica", area: "negocios", aka: ["critical path", "CPM"],
    meaning: "Secuencia más larga de tareas dependientes de un proyecto; define la duración mínima total. Cualquier atraso en esas tareas atrasa todo el proyecto.",
    application: "Se identifica en el cronograma (Gantt o red de actividades) para concentrar el seguimiento en las tareas que no admiten demora y saber dónde hay holgura.",
    example: "Si la compra de un equipo demora 6 semanas y es previa a su instalación, forma parte de la ruta crítica de la puesta en marcha.",
    related: ["Gantt", "RACI"]
  },
  {
    term: "Gantt", area: "negocios", aka: ["diagrama de Gantt", "cronograma"],
    meaning: "Gráfico de barras en el tiempo que muestra tareas, duraciones, dependencias y avance de un proyecto.",
    application: "Sirve para planificar secuencia y recursos, y para comunicar el estado. Debe actualizarse con el avance real, de lo contrario deja de ser útil.",
    example: "Cronograma de apertura de un campamento: obras, equipamiento, contratación, inducción, habilitación, con las dependencias entre ellas.",
    related: ["Ruta crítica"]
  },
  {
    term: "Gestión del cambio", area: "negocios", aka: ["change management", "ADKAR"],
    meaning: "Enfoque para que las personas adopten un cambio (sistema nuevo, procedimiento, estructura). El modelo ADKAR lo descompone en: conciencia, deseo, conocimiento, habilidad y refuerzo.",
    application: "Un cambio técnico sin gestión del cambio suele fracasar por resistencia o falta de capacitación. Se planifica comunicación, entrenamiento y seguimiento posterior a la puesta en marcha.",
    example: "Al implementar un sistema de gestión de stock nuevo, además de configurarlo se capacita al personal y se acompaña las primeras semanas.",
    related: ["Mapa de stakeholders", "SOP"]
  },
  {
    term: "Mapa de stakeholders", area: "negocios", aka: ["matriz poder-interés", "partes interesadas"],
    meaning: "Clasificación de las partes interesadas de un proyecto según su poder o influencia y su interés, para definir cómo relacionarse con cada una.",
    application: "Quienes tienen mucho poder y mucho interés requieren gestión cercana; los de poco interés y poco poder, solo seguimiento. Se actualiza durante el proyecto.",
    example: "En una obra: la autoridad habilitante (alto poder), el contratista (alto interés), los vecinos (interés alto, poder variable).",
    related: ["RACI", "Gestión del cambio"]
  },
  {
    term: "Matriz de riesgos", area: "negocios", aka: ["probabilidad por impacto", "risk matrix"],
    meaning: "Herramienta que clasifica cada riesgo según su probabilidad y su impacto para priorizar cuáles tratar primero.",
    application: "Cada celda define una respuesta (aceptar, controlar, evitar, transferir). Los criterios de probabilidad e impacto deben estar definidos por escrito para que dos evaluadores lleguen a resultados parecidos.",
    example: "Riesgo: falta de repuestos críticos. Probabilidad media, impacto alto → prioridad alta; acción: definir stock mínimo y proveedor alternativo.",
    related: ["Riesgo inherente y residual", "ISO 31000"]
  },
  {
    term: "Riesgo inherente y residual", area: "negocios", aka: ["riesgo residual", "riesgo antes y después de controles"],
    meaning: "El riesgo inherente es el que existe sin ningún control; el residual es el que queda después de aplicar los controles.",
    application: "Si el residual sigue siendo mayor que el nivel aceptable, hay que reforzar controles o cambiar el enfoque. Se revisa si los controles realmente funcionan.",
    example: "Riesgo de faltantes de caja: inherente alto; con arqueos diarios y doble firma, el residual baja.",
    related: ["Matriz de riesgos", "COSO"]
  },
  {
    term: "ISO 31000", area: "negocios", aka: ["gestión de riesgos", "ISO 31000:2018"],
    meaning: "Norma internacional con directrices para gestionar riesgos de cualquier tipo de organización. Se organiza en principios, marco de trabajo y proceso (comunicar, establecer el contexto, identificar, analizar, evaluar y tratar los riesgos, con seguimiento y revisión).",
    application: "No se certifica: es una guía. Se usa como estructura para armar el proceso de riesgos de la empresa y hablar un mismo idioma entre áreas.",
    example: "Un registro de riesgos con dueño, causa, consecuencia, controles y fecha de revisión sigue el proceso de ISO 31000.",
    related: ["Matriz de riesgos", "COSO"],
    refs: [{ name: "ISO 31000:2018 Gestión del riesgo — Directrices", verify: false }]
  },
  {
    term: "COSO", area: "negocios", aka: ["control interno", "marco COSO"],
    meaning: "Marco de control interno del Committee of Sponsoring Organizations of the Treadway Commission. Define cinco componentes: ambiente de control, evaluación de riesgos, actividades de control, información y comunicación, y supervisión.",
    application: "Se usa para diseñar y auditar controles en procesos como compras, caja y nómina, vinculándolos con los riesgos que cubren.",
    example: "Un control de la actividad de compras: la orden de compra la aprueba alguien distinto de quien la solicita.",
    related: ["Segregación de funciones", "Auditoría interna", "Riesgo inherente y residual"],
    refs: [{ name: "COSO Internal Control — Integrated Framework (2013)", verify: false }]
  },
  {
    term: "Segregación de funciones", area: "negocios", aka: ["separación de funciones", "segregation of duties"],
    meaning: "Principio de control: nadie debe poder iniciar, aprobar, registrar y custodiar una misma operación de principio a fin.",
    application: "Se aplica en compras, tesorería, caja e inventarios para reducir errores y fraude. Cuando el tamaño del equipo no lo permite, se compensa con revisiones y controles adicionales.",
    example: "Quien recibe la mercadería en el depósito no es quien registra la factura del proveedor.",
    related: ["COSO", "Three-way match"]
  },
  {
    term: "Auditoría interna", area: "negocios", aka: ["internal audit", "auditoría de procesos"],
    meaning: "Revisión independiente y sistemática, realizada dentro de la organización, para comprobar si los procesos cumplen lo planificado y los requisitos aplicables.",
    application: "Sigue un ciclo: plan de auditoría, evidencias (documentos, registros, entrevistas, observación), hallazgos clasificados, informe y seguimiento de acciones correctivas hasta su cierre.",
    example: "Auditar el proceso de recepción: tomar una muestra de remitos y verificar que cada uno tenga conteo, firma y registro en stock.",
    related: ["No conformidad", "ISO 9001", "COSO"]
  },
  {
    term: "No conformidad", area: "negocios", aka: ["acción correctiva", "acción preventiva", "NC"],
    meaning: "Incumplimiento de un requisito (de una norma, procedimiento, contrato o ley). La acción correctiva elimina la causa de una no conformidad ocurrida; la preventiva actúa sobre causas potenciales.",
    application: "Se registra, se corrige el efecto inmediato, se investiga la causa raíz, se define una acción para evitar su repetición y se verifica su eficacia.",
    example: "Hallazgo: remitos sin firma. Corrección: completar los faltantes. Acción correctiva: modificar el procedimiento para que no se pueda ingresar mercadería sin firma.",
    related: ["Auditoría interna", "Análisis de causa raíz"]
  },
  {
    term: "Análisis de causa raíz", area: "negocios", aka: ["5 porqués", "root cause analysis", "RCA"],
    meaning: "Método para llegar a la causa de fondo de un problema preguntando sucesivamente «¿por qué?» hasta encontrar algo sobre lo que se pueda actuar.",
    application: "Evita corregir solo el síntoma. Se complementa con el diagrama de Ishikawa cuando hay varias causas posibles.",
    example: "Pedido incorrecto → ¿por qué? etiqueta equivocada → ¿por qué? ubicación mal identificada → ¿por qué? no hay revisión de cartelería. Acción: auditoría periódica de ubicaciones.",
    related: ["Diagrama de Ishikawa", "No conformidad", "DMAIC"]
  },
  {
    term: "Diagrama de Ishikawa", area: "negocios", aka: ["espina de pescado", "causa-efecto", "6M"],
    meaning: "Diagrama que agrupa las causas posibles de un problema en categorías, típicamente las 6M: mano de obra, método, máquina, material, medición y medio ambiente.",
    application: "Se usa en grupo para ordenar la lluvia de ideas antes de verificar con datos cuáles causas realmente pesan.",
    example: "Problema: demoras en el check-out. Causas por categoría: personal sin capacitar, proceso sin pasos definidos, sistema lento, etc.",
    related: ["Análisis de causa raíz", "Diagrama de Pareto"]
  },
  {
    term: "Diagrama de Pareto", area: "negocios", aka: ["regla 80/20", "análisis ABC de problemas"],
    meaning: "Gráfico de barras ordenadas de mayor a menor frecuencia o impacto, con una línea acumulada. Muestra que pocas causas suelen explicar la mayor parte de los problemas.",
    application: "Sirve para priorizar: se ataca primero lo que más pesa. El 80/20 es una tendencia, no una ley exacta.",
    example: "Si tres tipos de errores explican la mayoría de los reclamos de clientes, se empieza por ellos.",
    related: ["Diagrama de Ishikawa", "Clasificación ABC"]
  },
  {
    term: "ISO 9001", area: "negocios", aka: ["sistema de gestión de la calidad", "SGC"],
    meaning: "Norma internacional de requisitos para sistemas de gestión de la calidad, basada en enfoque a procesos, ciclo PDCA y pensamiento basado en riesgos. Es certificable por organismos acreditados.",
    application: "Exige definir procesos, objetivos de calidad, control de documentos y registros, auditorías internas, tratamiento de no conformidades y revisión por la dirección. A octubre de 2026 la edición vigente es ISO 9001:2026, que reemplaza a la de 2015 con un período de transición.",
    example: "Para certificar, una empresa define sus procesos clave, los audita internamente y presenta evidencias a un organismo de certificación.",
    related: ["PDCA", "Auditoría interna", "No conformidad", "SOP"],
    refs: [{ name: "ISO 9001:2026 (reemplaza a ISO 9001:2015; confirmar plazos de transición con el organismo de certificación)", verify: true }]
  },
  {
    term: "RFQ y RFP", area: "negocios", aka: ["solicitud de cotización", "solicitud de propuesta", "request for quotation", "request for proposal"],
    meaning: "RFQ: pedido de precio para algo bien definido (producto o servicio estándar). RFP: pedido de propuestas cuando hay que evaluar solución, metodología y precio.",
    application: "Se envían a varios proveedores con las mismas especificaciones y plazo, y se comparan en un cuadro comparativo con criterios definidos antes de recibir ofertas.",
    example: "RFQ para 500 pares de guantes con especificación técnica. RFP para elegir un proveedor de servicio de catering de un campamento.",
    related: ["Three-way match", "SLA"]
  },
  {
    term: "Three-way match", area: "negocios", aka: ["conciliación de tres vías", "cotejo triple"],
    meaning: "Control previo al pago: se concilian la orden de compra, la recepción de mercadería (remito) y la factura del proveedor. Los tres deben coincidir en producto, cantidad y precio.",
    application: "Si hay diferencias, no se paga hasta resolverlas. Evita pagar lo que no se recibió o pagar a un precio no acordado.",
    example: "Orden: 100 unidades a 10. Remito: 90 unidades. Factura: 100 unidades a 10 → no coincide; se reclama la diferencia antes de pagar.",
    related: ["Segregación de funciones", "RFQ y RFP"]
  },
  {
    term: "SLA", area: "negocios", aka: ["acuerdo de nivel de servicio", "service level agreement"],
    meaning: "Parte del contrato que fija niveles de servicio medibles (tiempos de respuesta, disponibilidad, calidad) y qué ocurre si no se cumplen.",
    application: "Se redacta con indicadores, forma de medición, frecuencia de reporte y penalidades o bonificaciones. Un SLA que no se mide no controla nada.",
    example: "Contrato de lavandería: entrega en 24 horas, tolerancia de rechazo por prenda defectuosa definida, informe mensual de cumplimiento.",
    related: ["RFQ y RFP", "KPI y ficha de indicador"]
  },
  {
    term: "Incoterms 2020", area: "negocios", aka: ["términos de comercio internacional", "FOB", "CIF", "EXW", "DAP", "DDP"],
    meaning: "Reglas de la Cámara de Comercio Internacional que definen quién (vendedor o comprador) asume costos, riesgos y trámites del transporte. Son once reglas; siete valen para cualquier modo de transporte (EXW, FCA, CPT, CIP, DAP, DPU, DDP) y cuatro solo para transporte marítimo y fluvial (FAS, FOB, CFR, CIF).",
    application: "Se indica en el contrato la regla y la edición. Determina dónde se transfiere el riesgo: por ejemplo, en FOB el comprador asume el riesgo desde que la mercadería está a bordo del buque.",
    example: "EXW: el comprador retira la mercadería en las instalaciones del vendedor y asume casi todo el transporte. DDP: el vendedor entrega ya despachada en destino.",
    related: ["SLA"],
    refs: [{ name: "Incoterms® 2020 — Cámara de Comercio Internacional (ICC)", verify: false }]
  },
  {
    term: "Due diligence", area: "negocios", aka: ["debida diligencia", "revisión previa"],
    meaning: "Revisión sistemática de una empresa, contrato, proveedor o activo antes de tomar una decisión importante, para detectar riesgos legales, financieros, operativos o de cumplimiento.",
    application: "Se usa al contratar proveedores críticos, comprar activos o asociarse. Combina revisión de documentos, referencias, inspección y verificación de habilitaciones.",
    example: "Antes de contratar un transportista, revisar sus habilitaciones, seguros, antecedentes de seguridad y estado de flota.",
    related: ["Matriz de riesgos", "SLA"]
  },
  {
    term: "Clasificación ABC", area: "negocios", aka: ["análisis ABC", "ABC de inventarios", "ABC de clientes"],
    meaning: "Clasificación de ítems según su aporte al valor total: A (pocos ítems, mucho valor), B (intermedios) y C (muchos ítems, poco valor). Se arma ordenando por valor anual de consumo y acumulando.",
    application: "Define el nivel de control: los A se revisan con más frecuencia y precisión; los C con reglas simples. Los cortes entre clases son decisión de cada empresa.",
    example: "En un depósito, los pocos repuestos de mayor valor anual van a la clase A y se cuentan con más frecuencia.",
    related: ["Diagrama de Pareto", "Inventario cíclico"]
  }
);
