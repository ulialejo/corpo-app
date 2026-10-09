window.CORPO_DATA = window.CORPO_DATA || { categories: [], glossary: [] };

// Glosario técnico de minería, logística, campamentos y seguridad. Los números de los ejemplos son ilustrativos, no datos reales.
window.CORPO_DATA.glossary.push(
  {
    term: "Ciclo minero", area: "mineria", aka: ["etapas de un proyecto minero"],
    meaning: "Secuencia de etapas de un proyecto minero: prospección y exploración, evaluación, construcción y desarrollo, explotación, procesamiento, y cierre y post-cierre.",
    application: "Cada etapa tiene permisos, equipos y personal distintos. La logística y los campamentos cambian mucho entre la construcción (picos de personal y materiales) y la operación estable.",
    example: "En la construcción llegan muchos contratistas y materiales en poco tiempo; en la operación, el abastecimiento pasa a ser continuo y planificado.",
    related: ["Plan de cierre de mina", "Recurso y reserva"]
  },
  {
    term: "Cielo abierto y subterránea", area: "mineria", aka: ["open pit", "mina a cielo abierto", "underground"],
    meaning: "Dos métodos de explotación. A cielo abierto se remueve material desde la superficie en bancos escalonados; subterránea se accede por túneles, rampas o piques.",
    application: "El método condiciona el equipamiento, la ventilación, el tipo de riesgos y la logística de materiales y personas.",
    example: "Un yacimiento superficial y extenso suele explotarse a cielo abierto; uno profundo y angosto, bajo tierra.",
    related: ["Banco", "Rampa", "Strip ratio"]
  },
  {
    term: "Banco", area: "mineria", aka: ["bench"],
    meaning: "Escalón horizontal de una mina a cielo abierto desde el cual se perfora, vuela y carga el material.",
    application: "La altura y el ancho del banco se diseñan según el equipo y la estabilidad del terreno. Se numeran por cota para planificar la extracción.",
    example: "El plan de corto plazo define qué bancos se excavan esta semana y en qué orden.",
    related: ["Cielo abierto y subterránea", "Rampa"]
  },
  {
    term: "Rampa", area: "mineria", aka: ["ramp", "camino de acarreo", "haul road"],
    meaning: "Camino inclinado que conecta niveles o bancos de una mina para el tránsito de equipos y camiones.",
    application: "Su pendiente, ancho y estado afectan la seguridad y el tiempo de ciclo de los camiones. Se mantiene con motoniveladoras y control de polvo.",
    example: "Una rampa en mal estado alarga el ciclo de acarreo y aumenta el desgaste de neumáticos.",
    related: ["Ciclo de acarreo", "Banco"]
  },
  {
    term: "Strip ratio", area: "mineria", aka: ["ratio de descapote", "relación estéril/mineral"],
    meaning: "Relación entre las toneladas (o volumen) de material estéril que hay que remover y las toneladas de mineral extraído.",
    application: "Un ratio alto significa más costo por tonelada de mineral. Se usa para evaluar la viabilidad económica de un pit y planificar el movimiento de material.",
    example: "Ejemplo ilustrativo: se remueven 3 toneladas de estéril por cada tonelada de mineral → strip ratio 3:1.",
    related: ["Ley de corte", "Cielo abierto y subterránea"]
  },
  {
    term: "Ley", area: "mineria", aka: ["grade", "ley de mineral", "head grade", "ley de cabeza"],
    meaning: "Concentración del metal de interés en el mineral, expresada por ejemplo en gramos por tonelada (oro) o en porcentaje (cobre). La ley de cabeza es la del mineral que ingresa a la planta.",
    application: "Determina cuánto metal se puede recuperar de cada tonelada. Se controla con muestreo y análisis de laboratorio.",
    example: "Ejemplo ilustrativo: 1 g/t de oro significa un gramo de oro por cada tonelada de roca.",
    related: ["Ley de corte", "Recuperación"]
  },
  {
    term: "Ley de corte", area: "mineria", aka: ["cut-off grade"],
    meaning: "Ley mínima a partir de la cual el material se considera mineral que se procesa; por debajo, se trata como estéril o se acopia.",
    application: "Se define con costos, precio del metal y recuperación. Si cambia el precio o los costos, cambia la ley de corte y, con ella, qué material es económicamente mineral.",
    example: "Si sube el costo de procesamiento, la ley de corte aumenta y parte del material que antes se procesaba pasa a ser estéril.",
    related: ["Ley", "Strip ratio", "Recurso y reserva"]
  },
  {
    term: "Recuperación", area: "mineria", aka: ["recuperación metalúrgica", "recovery"],
    meaning: "Porcentaje del metal contenido en el mineral que se obtiene como producto después del procesamiento.",
    application: "Es un indicador clave del desempeño de la planta. Una variación suele apuntar a cambios en la mineralogía, en la molienda o en los reactivos.",
    example: "Ejemplo ilustrativo: si ingresan 100 unidades de metal y se obtienen 85 en el producto, la recuperación es 85%.",
    related: ["Ley", "Balance de metales"]
  },
  {
    term: "ROM", area: "mineria", aka: ["run of mine", "mineral tal cual sale de la mina"],
    meaning: "Mineral tal como sale de la mina, sin haber sido procesado ni triturado.",
    application: "Es el punto de partida del flujo hacia la planta. Se acopia en el stockpile y se mezcla para uniformar la alimentación.",
    example: "El ROM descargado en la tolva de la trituradora primaria es el que se mide para el balance diario.",
    related: ["Stockpile", "Chancado"]
  },
  {
    term: "Stockpile", area: "mineria", aka: ["acopio", "pila de mineral"],
    meaning: "Acumulación de mineral en superficie, a la espera de ser procesado o mezclado.",
    application: "Amortigua diferencias entre el ritmo de extracción y el de procesamiento, y permite mezclar leyes para alimentar la planta de forma estable.",
    example: "Se combinan materiales de alta y baja ley en el acopio para entregar una ley promedio estable a la planta.",
    related: ["ROM", "Dilución"]
  },
  {
    term: "Dilución", area: "mineria", aka: ["mine dilution", "dilución de mineral"],
    meaning: "Mezcla del mineral con material estéril durante la extracción, que reduce la ley del material enviado a la planta.",
    application: "Se controla con buena planificación de voladura, carga selectiva y supervisión. Mayor dilución significa procesar más roca para obtener el mismo metal.",
    example: "Si el límite entre mineral y estéril no está bien marcado, las palas cargan estéril junto con el mineral.",
    related: ["Ley", "Stockpile"]
  },
  {
    term: "Recurso y reserva", area: "mineria", aka: ["recurso mineral", "reserva mineral", "mineral resource", "ore reserve"],
    meaning: "Un recurso mineral es una concentración de material con perspectivas razonables de extracción eventual. Una reserva es la parte del recurso que se demostró económicamente explotable con estudios técnicos y económicos, considerando factores modificantes.",
    application: "Los códigos de reporte (como el JORC en Australasia y el NI 43-101 en Canadá) establecen cómo se clasifican y publican. Los recursos y las reservas se informan por categoría de confianza.",
    example: "Un recurso puede no convertirse en reserva si, tras los estudios, el costo de extraerlo supera lo que se obtendría por venderlo.",
    related: ["Ley de corte", "Ciclo minero"],
    refs: [
      { name: "JORC Code, edición 2012 (en proceso de actualización; confirmar edición vigente en jorc.org)", verify: true },
      { name: "NI 43-101 — Standards of Disclosure for Mineral Projects (Canadá)", verify: true }
    ]
  },
  {
    term: "Chancado", area: "mineria", aka: ["trituración", "crushing"],
    meaning: "Reducción de tamaño del mineral en trituradoras (primaria, secundaria y terciaria) antes de la molienda o la lixiviación.",
    application: "Prepara el material para las etapas siguientes. Su disponibilidad condiciona la producción de toda la planta.",
    example: "La trituradora primaria recibe el ROM de los camiones y lo reduce a un tamaño que puede transportarse por cinta.",
    related: ["ROM", "Molienda", "Lixiviación en pilas"]
  },
  {
    term: "Molienda", area: "mineria", aka: ["grinding", "molino SAG", "molino de bolas"],
    meaning: "Reducción del mineral chancado a tamaño fino en molinos. El molino SAG (semi-autógeno) usa el propio mineral y bolas de acero; el de bolas afina la molienda.",
    application: "Es una de las etapas de mayor consumo de energía. El tamaño obtenido define qué tan bien se liberan las partículas de interés para la etapa siguiente.",
    example: "El producto del molino SAG pasa por hidrociclones y los gruesos vuelven al molino de bolas.",
    related: ["Chancado", "Flotación"]
  },
  {
    term: "Flotación", area: "mineria", aka: ["flotation"],
    meaning: "Proceso que separa minerales usando burbujas de aire y reactivos: las partículas de interés se adhieren a las burbujas y flotan, mientras el resto se hunde.",
    application: "Produce un concentrado más rico en metal y un relave. Se controla el pH, los reactivos y el tiempo de residencia.",
    example: "En una planta de cobre, el concentrado de flotación se espesa, se filtra y se despacha.",
    related: ["Concentrado", "Relave", "Molienda"]
  },
  {
    term: "Lixiviación en pilas", area: "mineria", aka: ["heap leach", "lixiviación", "cianuración"],
    meaning: "Método en el que el mineral chancado se apila sobre una base impermeable y se riega con una solución que disuelve el metal. En el oro, la solución es de cianuro diluido.",
    application: "La solución cargada se recoge y se procesa para obtener el metal. Exige control de pH, caudales, impermeabilización y manejo seguro del cianuro.",
    example: "El oro disuelto se recupera de la solución cargada y se funde para obtener una aleación (doré).",
    related: ["Código Internacional del Cianuro", "Chancado", "Doré"]
  },
  {
    term: "Doré", area: "mineria", aka: ["barra doré", "dore bar"],
    meaning: "Aleación de oro y plata (con impurezas) producida en la mina, que luego se refina en otra planta.",
    application: "Es el producto final de muchas minas de oro. Su manejo exige controles de seguridad y registros de custodia estrictos.",
    example: "Las barras doré se pesan, se registran y se despachan bajo custodia a la refinería.",
    related: ["Lixiviación en pilas", "Cadena de custodia"]
  },
  {
    term: "Concentrado", area: "mineria", aka: ["concentrate"],
    meaning: "Producto de la flotación con mayor concentración de metal que el mineral original. Se vende a fundiciones o se procesa más adelante.",
    application: "Se comercializa según su contenido de metal y sus impurezas. Su transporte y almacenamiento requieren control de humedad y de contaminación.",
    example: "El concentrado de cobre se despacha en camiones cubiertos hacia el puerto.",
    related: ["Flotación", "Balance de metales"]
  },
  {
    term: "Relave", area: "mineria", aka: ["tailings", "dique de colas", "presa de relaves"],
    meaning: "Material fino que queda después de extraer los minerales de interés, generalmente en forma de pulpa. Se dispone en depósitos diseñados para tal fin.",
    application: "Su gestión es un asunto central de seguridad y ambiente: diseño geotécnico, control del agua, inspecciones y monitoreo continuo.",
    example: "La pulpa de relave se bombea al depósito, donde el agua se recircula a la planta.",
    related: ["Flotación", "Plan de cierre de mina", "Estudio de impacto ambiental"]
  },
  {
    term: "Balance de metales", area: "mineria", aka: ["metallurgical balance"],
    meaning: "Cálculo de cuánto metal entra a la planta, cuánto sale en el producto y cuánto se pierde en el relave.",
    application: "Es la base para medir recuperación y detectar pérdidas o errores de muestreo.",
    example: "Si el metal que sale no coincide con el que ingresó, se revisa el muestreo y las mediciones.",
    related: ["Recuperación", "Concentrado"]
  },
  {
    term: "Toneladas por día", area: "mineria", aka: ["tpd", "tph", "capacidad de procesamiento"],
    meaning: "Unidad de producción o procesamiento: toneladas movidas o tratadas por día (tpd) o por hora (tph).",
    application: "Define el ritmo de la operación y el dimensionamiento de flota, planta y abastecimiento. Una variación afecta consumos de insumos y de energía.",
    example: "Si la planta aumenta su tratamiento, crece el consumo de reactivos y repuestos, y debe ajustarse el stock.",
    related: ["Disponibilidad mecánica", "Ciclo de acarreo"]
  },
  {
    term: "Ciclo de acarreo", area: "mineria", aka: ["haul cycle", "tiempo de ciclo"],
    meaning: "Tiempo que le toma a un camión completar una vuelta: posicionarse, cargar, transportar, descargar y volver.",
    application: "Se optimiza para aumentar toneladas por hora. Influyen la distancia, el estado de los caminos, la cantidad de camiones por pala y las esperas.",
    example: "Agregar camiones a una pala que ya está saturada aumenta las colas sin aumentar la producción.",
    related: ["Rampa", "Despacho de flota", "Utilización"]
  },
  {
    term: "Despacho de flota", area: "mineria", aka: ["dispatch", "gestión de flota"],
    meaning: "Sistema y equipo que asigna camiones a palas y rutas en tiempo real para sostener la producción planificada.",
    application: "Usa datos de posición y estado de los equipos. Reasigna ante paradas, demoras o cambios de plan.",
    example: "Si una pala se detiene, el despacho redirige los camiones a otra pala disponible.",
    related: ["Ciclo de acarreo", "Utilización"]
  },
  {
    term: "Disponibilidad mecánica", area: "mineria", aka: ["availability", "disponibilidad"],
    meaning: "Porcentaje del tiempo programado en que un equipo está en condiciones mecánicas de operar: (horas programadas − horas de mantenimiento y falla) ÷ horas programadas.",
    application: "Mide el desempeño del mantenimiento. Un equipo disponible no necesariamente produce: eso lo mide la utilización.",
    example: "Ejemplo ilustrativo: de 100 horas programadas, 10 en mantenimiento → disponibilidad 90%.",
    related: ["Utilización", "OEE", "Mantenimiento preventivo"]
  },
  {
    term: "Utilización", area: "mineria", aka: ["utilization", "uso de equipos"],
    meaning: "Porcentaje del tiempo disponible en que el equipo estuvo realmente operando.",
    application: "Mide qué tan bien se aprovecha el equipo. Una utilización baja con alta disponibilidad apunta a esperas, falta de operadores, demoras operativas o de coordinación.",
    example: "Ejemplo ilustrativo: de 90 horas disponibles el equipo trabajó 72 → utilización 80%.",
    related: ["Disponibilidad mecánica", "Despacho de flota"]
  },
  {
    term: "Mantenimiento predictivo", area: "mineria", aka: ["mantenimiento basado en condición", "predictive maintenance"],
    meaning: "Mantenimiento que se decide a partir de la condición real del equipo, medida con inspecciones, vibraciones, análisis de aceite o temperatura.",
    application: "Permite intervenir antes de la falla y evitar tanto paradas imprevistas como cambios innecesarios. Complementa el mantenimiento preventivo por calendario o por horómetro.",
    example: "El análisis de aceite detecta desgaste anormal y se programa la intervención en la próxima parada.",
    related: ["Mantenimiento preventivo", "Disponibilidad mecánica"]
  },
  {
    term: "Régimen de turnos", area: "mineria", aka: ["14x14", "7x7", "turnos rotativos", "roster"],
    meaning: "Esquema de trabajo en días corridos en el sitio seguidos de días de descanso fuera. En un 14x14, son 14 días de trabajo y 14 de descanso.",
    application: "Determina cuántos grupos de personas se necesitan, la rotación de camas del campamento y la logística de traslado. El pase de turno y el descanso se planifican para controlar la fatiga.",
    example: "Con un régimen 14x14 se necesitan dos grupos para cubrir un puesto de manera continua.",
    related: ["Fly-in fly-out (FIFO)", "Hot-bedding", "Pase de turno"]
  },
  {
    term: "Fly-in fly-out (FIFO)", area: "mineria", aka: ["DIDO", "drive-in drive-out", "personal en rotación"],
    meaning: "Sistema de transporte de personal en el que viajan al sitio por avión (fly-in fly-out) o por camino (drive-in drive-out) y vuelven al terminar su turno, sin residir en la zona.",
    application: "Obliga a planificar los traslados, los alojamientos y los servicios del campamento alrededor del calendario de rotación.",
    example: "Un grupo llega el día uno del ciclo y el grupo saliente se retira en el mismo vehículo de regreso.",
    related: ["Régimen de turnos", "Campamento minero", "Hot-bedding"]
  },
  {
    term: "Hot-bedding", area: "mineria", aka: ["camas calientes", "cama compartida por turnos"],
    meaning: "Sistema en el que una misma cama se utiliza por personas de turnos diferentes en distintos momentos del día.",
    application: "Optimiza la capacidad del campamento. Exige un buen plan de limpieza y de cambio de ropa de cama entre ocupantes y tiene impacto en el descanso, por lo que se evalúa con criterio.",
    example: "Mientras el turno día trabaja, el turno noche duerme en las mismas camas, con una limpieza programada entre cambios.",
    related: ["Campamento minero", "Régimen de turnos"]
  },
  {
    term: "Campamento minero", area: "mineria", aka: ["campamento", "camp", "alojamiento en sitio"],
    meaning: "Instalaciones donde el personal vive durante su turno: alojamiento, comedor, lavandería, recreación, enfermería, servicios y mantenimiento.",
    application: "Su administración coordina limpieza, comida, abastecimiento, mantenimiento, residuos, agua, ingresos y egresos, seguridad y la relación con contratistas de servicios.",
    example: "El administrador revisa cada mañana el informe de ocupación, la lista de ingresos del día y los pedidos pendientes de abastecimiento.",
    related: ["Hot-bedding", "Fly-in fly-out (FIFO)", "SLA"]
  },
  {
    term: "Inducción de ingreso", area: "mineria", aka: ["inducción", "charla de ingreso"],
    meaning: "Capacitación obligatoria que recibe una persona antes de ingresar al sitio: reglas, riesgos, zonas, emergencias, EPP y comportamiento esperado.",
    application: "Se registra y se verifica antes de habilitar el acceso. Cada empresa define su contenido, vigencia y requisitos adicionales para actividades especiales.",
    example: "Sin inducción registrada y vigente, la persona no recibe la credencial de ingreso.",
    related: ["EPP", "Charla de seguridad de inicio de turno"]
  },
  {
    term: "Pase de turno", area: "mineria", aka: ["hand-over", "cambio de turno"],
    meaning: "Momento y procedimiento en que el turno saliente informa al entrante el estado de la operación: pendientes, incidentes, equipos fuera de servicio, condiciones de seguridad.",
    application: "Un buen pase se hace de forma presencial con un registro escrito. Evita que se pierda información crítica entre turnos.",
    example: "El turno saliente deja registrado que un equipo está bloqueado por mantenimiento y que no debe operarse.",
    related: ["Régimen de turnos", "Bloqueo y etiquetado (LOTO)"]
  },
  {
    term: "Kardex", area: "mineria", aka: ["tarjeta de existencia", "registro de movimientos de stock"],
    meaning: "Registro por artículo de todas las entradas, salidas y saldo de existencias.",
    application: "Permite rastrear cada movimiento y conciliar el stock físico con el del sistema. Hoy lo lleva un sistema ERP, pero el concepto es el mismo.",
    example: "Entrada de 20 unidades por remito, salida de 5 para una orden de trabajo → saldo 15, con fecha y responsable de cada movimiento.",
    related: ["Inventario cíclico", "Exactitud de inventario", "ERP"]
  },
  {
    term: "ERP", area: "mineria", aka: ["Odoo", "sistema de gestión empresarial", "WMS"],
    meaning: "Sistema que integra compras, inventarios, ventas, contabilidad y otras áreas en una misma base de datos. Un WMS gestiona específicamente las operaciones del almacén (ubicaciones, picking, recepción).",
    application: "En depósito, cada recepción, entrega, transferencia o ajuste se registra en el sistema; la calidad de los datos depende de que se registre en el momento y sin atajos.",
    example: "Una entrega a mantenimiento se carga contra una orden de trabajo, de modo que el consumo queda asociado al equipo.",
    related: ["Kardex", "Exactitud de inventario"]
  },
  {
    term: "SKU", area: "mineria", aka: ["código de artículo", "stock keeping unit"],
    meaning: "Código único que identifica cada artículo distinto del inventario.",
    application: "Un maestro de artículos ordenado, sin duplicados y con descripciones normalizadas es la base de un inventario confiable.",
    example: "Evitar dos códigos para el mismo guante con descripciones distintas, que partiría el stock en dos registros.",
    related: ["Kardex", "ERP"]
  },
  {
    term: "Recepción de mercadería", area: "mineria", aka: ["receiving", "ingreso de materiales"],
    meaning: "Proceso de recibir lo que llega al depósito: verificar contra la orden de compra y el remito, contar, inspeccionar el estado, registrar el ingreso y ubicar el material.",
    application: "Es el punto de control entre el proveedor y el stock. Las diferencias o daños se documentan en el momento y se reclaman al proveedor.",
    example: "Se detecta una caja dañada: se fotografía, se anota en el remito y se informa a compras antes de firmar la conformidad.",
    related: ["Three-way match", "Putaway y picking"]
  },
  {
    term: "Putaway y picking", area: "mineria", aka: ["ubicación de materiales", "preparación de pedidos"],
    meaning: "Putaway: llevar el material recibido a su ubicación de almacenamiento. Picking: retirar de las ubicaciones lo necesario para cada pedido.",
    application: "Una ubicación identificada y ordenada por rotación y tamaño reduce tiempos y errores. Los ítems de mayor salida van en las zonas más accesibles.",
    example: "Los consumibles de uso diario se ubican cerca de la zona de despacho; los repuestos de baja rotación en estantes altos.",
    related: ["Recepción de mercadería", "Clasificación ABC"]
  },
  {
    term: "Stock de seguridad", area: "mineria", aka: ["safety stock", "stock de reserva"],
    meaning: "Existencia adicional que se mantiene para cubrir variaciones imprevistas de la demanda o del plazo de entrega del proveedor.",
    application: "Se define según la variabilidad de la demanda, el plazo de reposición y la criticidad del ítem. Demasiado stock inmoviliza dinero; demasiado poco arriesga paradas.",
    example: "Un repuesto cuya falta detiene un equipo crítico y con proveedor lejano justifica mantener un stock de seguridad.",
    related: ["Punto de pedido", "Criticidad de repuestos"]
  },
  {
    term: "Punto de pedido", area: "mineria", aka: ["reorder point", "punto de reposición"],
    meaning: "Nivel de stock en el que se genera un nuevo pedido: consumo diario × plazo de entrega + stock de seguridad.",
    application: "Cuando el saldo llega a ese nivel, se emite la orden de compra para que la mercadería llegue antes de agotarse el stock.",
    example: "Ejemplo ilustrativo: consumo de 10 unidades por día, plazo de entrega de 7 días y stock de seguridad de 20 → punto de pedido 90.",
    related: ["Stock de seguridad", "Lote económico (EOQ)"]
  },
  {
    term: "Lote económico (EOQ)", area: "mineria", aka: ["EOQ", "economic order quantity", "cantidad económica de pedido"],
    meaning: "Cantidad de pedido que minimiza el costo total de pedir y mantener inventario. Fórmula clásica: raíz cuadrada de (2 × demanda anual × costo por pedido ÷ costo anual de mantener una unidad).",
    application: "Es un modelo de referencia con supuestos simples (demanda estable, costos constantes). En la práctica se ajusta con descuentos por volumen, vencimientos y espacio disponible.",
    example: "Ejemplo ilustrativo: demanda anual 1.200, costo por pedido 50, costo de mantener 6 por unidad al año → EOQ = raíz de (2 × 1.200 × 50 ÷ 6) ≈ 141 unidades.",
    related: ["Punto de pedido", "Stock de seguridad"]
  },
  {
    term: "Inventario cíclico", area: "mineria", aka: ["conteo cíclico", "cycle count"],
    meaning: "Conteo físico periódico de una parte del inventario, en lugar de uno general anual. Los ítems de mayor importancia (clase A) se cuentan con más frecuencia.",
    application: "Detecta diferencias a tiempo, mejora la exactitud del registro y no obliga a detener el depósito. Se investiga la causa de cada diferencia importante.",
    example: "Cada semana se cuentan los ítems de una zona y los de clase A cada mes, comparando contra el sistema.",
    related: ["Exactitud de inventario", "Clasificación ABC", "Kardex"]
  },
  {
    term: "Exactitud de inventario", area: "mineria", aka: ["IRA", "inventory record accuracy"],
    meaning: "Porcentaje de ítems cuyo saldo en el sistema coincide con lo que realmente hay en el depósito (dentro de la tolerancia definida).",
    application: "Es un indicador de calidad de datos. Con baja exactitud el sistema genera compras innecesarias o faltantes. Se mide en los conteos cíclicos.",
    example: "Ejemplo ilustrativo: de 200 ítems contados, 188 coinciden → exactitud 94%.",
    related: ["Inventario cíclico", "Kardex"]
  },
  {
    term: "Rotación de inventario", area: "mineria", aka: ["inventory turnover", "cobertura"],
    meaning: "Cuántas veces se consume el inventario en un período: costo o consumo anual ÷ inventario promedio. La cobertura expresa cuántos días de consumo alcanza el stock.",
    application: "Una rotación muy baja indica stock inmovilizado o repuestos obsoletos; una muy alta, riesgo de faltantes. Se analiza por categoría.",
    example: "Ejemplo ilustrativo: consumo anual 600 e inventario promedio 200 → rotación 3, cobertura de unos 120 días.",
    related: ["Stock de seguridad", "Clasificación ABC"]
  },
  {
    term: "Criticidad de repuestos", area: "mineria", aka: ["repuesto crítico", "MRO"],
    meaning: "Clasificación de repuestos según el efecto que tiene su falta: los críticos detienen un equipo o proceso importante. MRO agrupa mantenimiento, reparación y operaciones.",
    application: "Los críticos justifican un stock mínimo aunque roten poco. Se define junto con mantenimiento y se revisa cuando cambian los equipos.",
    example: "Una bomba principal sin repuesto detiene la planta; una luminaria de repuesto puede esperar.",
    related: ["Stock de seguridad", "Mantenimiento preventivo"]
  },
  {
    term: "Remito", area: "mineria", aka: ["guía de remisión", "documento de entrega"],
    meaning: "Documento que acompaña la entrega de mercadería: detalla qué se entrega, cantidades, origen, destino y responsables.",
    application: "Es el respaldo de la recepción y de la conciliación con la factura. La conformidad se firma después de contar y verificar, no antes.",
    example: "Si el remito dice 50 unidades y llegan 48, se anota la diferencia y se firma lo realmente recibido.",
    related: ["Three-way match", "Recepción de mercadería"]
  },
  {
    term: "Cadena de custodia", area: "mineria", aka: ["chain of custody", "trazabilidad"],
    meaning: "Registro documentado de quién tuvo bajo su control un material desde su origen hasta su destino, con fechas, condiciones y firmas.",
    application: "Se usa para productos de alto valor (como el doré), muestras de laboratorio y residuos peligrosos. Permite saber dónde ocurrió cualquier diferencia.",
    example: "Cada traspaso de una muestra de laboratorio se firma y se registra con hora y precinto.",
    related: ["Doré", "Remito"]
  },
  {
    term: "HDS / SDS y GHS-SGA", area: "mineria", aka: ["hoja de datos de seguridad", "SDS", "SGA", "GHS", "sistema globalmente armonizado"],
    meaning: "La HDS (SDS en inglés) es la ficha que describe los peligros de un producto químico y cómo manipularlo, almacenarlo y actuar ante una emergencia. El SGA (GHS) es el sistema internacional que armoniza la clasificación y el etiquetado de los químicos.",
    application: "En el depósito, cada químico debe tener su ficha y etiqueta, y el almacenamiento debe respetar la compatibilidad (no guardar juntos productos incompatibles). Argentina implementó el SGA en el ámbito laboral mediante la Resolución SRT 801/2015.",
    example: "Un ácido y una base no se almacenan en el mismo estante: la HDS de cada uno indica los materiales incompatibles.",
    related: ["Jerarquía de controles", "EPP"],
    refs: [{ name: "Resolución SRT 801/2015 — implementación del Sistema Globalmente Armonizado (SGA) en el ámbito laboral (confirmar texto vigente y actualizaciones)", verify: true }]
  },
  {
    term: "Jerarquía de controles", area: "mineria", aka: ["hierarchy of controls", "eliminación sustitución controles de ingeniería"],
    meaning: "Orden de preferencia para controlar un riesgo, de lo más a lo menos efectivo: eliminar el peligro, sustituirlo, aplicar controles de ingeniería, controles administrativos (procedimientos, capacitación) y, por último, equipos de protección personal.",
    application: "Se aplica al planificar cualquier tarea: primero se intenta eliminar o reducir el riesgo en el origen y solo se confía en el EPP como última barrera. La norma ISO 45001 lo establece en su cláusula 8.1.2.",
    example: "Para evitar caídas desde altura: eliminar la tarea de altura (prefabricar abajo), plataformas con barandas, procedimientos, y por último arnés.",
    related: ["EPP", "Análisis de trabajo seguro (ATS)"],
    refs: [{ name: "ISO 45001:2018, cláusula 8.1.2 (eliminar peligros y reducir riesgos para la SST)", verify: false }]
  },
  {
    term: "Análisis de trabajo seguro (ATS)", area: "mineria", aka: ["ATS", "JSA", "job safety analysis", "AST"],
    meaning: "Análisis previo de una tarea, paso por paso, para identificar los peligros de cada paso y definir los controles antes de empezar.",
    application: "Se realiza antes de tareas no rutinarias o de riesgo, por quienes la van a ejecutar. Cuando cambian las condiciones, se detiene el trabajo y se revisa el ATS.",
    example: "Tarea: cambiar un cartel en altura. Pasos: acceso, armado de andamio, trabajo en altura, descenso. Para cada paso: peligro y control.",
    related: ["Jerarquía de controles", "Permiso de trabajo", "Charla de seguridad de inicio de turno"]
  },
  {
    term: "Permiso de trabajo", area: "mineria", aka: ["permit to work", "PTW", "permiso de trabajo en caliente", "espacio confinado", "trabajo en altura"],
    meaning: "Autorización escrita para realizar tareas de mayor riesgo (trabajo en caliente, en altura, en espacios confinados, con energías peligrosas) tras verificar que los controles están implementados.",
    application: "Define quién autoriza, quién ejecuta, qué controles se verificaron, la duración y el cierre. Los requisitos específicos los fija la normativa y el procedimiento de cada empresa.",
    example: "Antes de soldar cerca de materiales combustibles, se emite el permiso con control de área, extintor, vigía y verificación de la atmósfera.",
    related: ["Análisis de trabajo seguro (ATS)", "Bloqueo y etiquetado (LOTO)"]
  },
  {
    term: "Bloqueo y etiquetado (LOTO)", area: "mineria", aka: ["LOTO", "lockout tagout", "bloqueo de energías"],
    meaning: "Procedimiento para asegurar que un equipo esté desenergizado e imposible de arrancar mientras se interviene: se aísla, se bloquea con candado personal, se etiqueta, se descargan las energías residuales y se verifica el estado sin energía.",
    application: "Cada persona que trabaja en el equipo coloca su propio candado, y solo ella lo retira. Se aplica a energía eléctrica, hidráulica, neumática, mecánica, térmica y almacenada.",
    example: "Antes de reparar una cinta transportadora se corta y bloquea su alimentación, se prueba que no arranca y recién entonces se comienza.",
    related: ["Permiso de trabajo", "Pase de turno"]
  },
  {
    term: "EPP", area: "mineria", aka: ["equipo de protección personal", "PPE"],
    meaning: "Equipos y prendas que protegen a la persona de riesgos que no se pudieron eliminar: casco, anteojos, guantes, calzado, protección auditiva y respiratoria, arnés, ropa de alta visibilidad.",
    application: "Se selecciona según la tarea y el riesgo, se entrega con registro, se capacita su uso y se inspecciona y reemplaza según corresponda. Es la última barrera, no la primera.",
    example: "Tarea con ruido alto: además de reducir el ruido en la fuente, se usan protectores auditivos adecuados.",
    related: ["Jerarquía de controles", "HDS / SDS y GHS-SGA"]
  },
  {
    term: "Charla de seguridad de inicio de turno", area: "mineria", aka: ["charla de 5 minutos", "toolbox talk", "reunión previa al trabajo"],
    meaning: "Reunión breve al comenzar el turno para repasar las tareas del día, los peligros, los controles y los cambios respecto de ayer.",
    application: "Se registra la asistencia y los temas tratados. Es efectiva si es corta, específica de las tareas del día y con participación del equipo.",
    example: "El supervisor repasa las tareas, el estado del clima, las zonas restringidas y recoge preguntas del equipo.",
    related: ["Análisis de trabajo seguro (ATS)", "Inducción de ingreso"]
  },
  {
    term: "Inspección pre-uso", area: "mineria", aka: ["checklist de inspección", "pre-operacional", "inspección diaria de equipo"],
    meaning: "Revisión que hace el operador antes de usar un equipo (autoelevador, camioneta, grúa) con una lista de verificación: frenos, luces, neumáticos, fluidos, alarma de retroceso, etc.",
    application: "Si hay una falla que afecta la seguridad, el equipo no se usa y se reporta. Los registros permiten ver fallas repetidas.",
    example: "El operador detecta una pérdida hidráulica en el autoelevador y lo deja fuera de servicio con aviso a mantenimiento.",
    related: ["Mantenimiento predictivo", "Bloqueo y etiquetado (LOTO)"]
  },
  {
    term: "Incidente y cuasi accidente", area: "mineria", aka: ["near miss", "incidente", "accidente"],
    meaning: "Un incidente es un evento relacionado con el trabajo que causó o pudo causar daño. Un cuasi accidente (near miss) es el evento que no causó daño por poco.",
    application: "Reportar los cuasi accidentes permite corregir condiciones antes de que alguien se lastime. Una cultura que sanciona al que reporta pierde esa información.",
    example: "Una caja cae de un estante sin golpear a nadie: se reporta, se investiga la causa y se corrige el almacenamiento.",
    related: ["Árbol de causas", "LTIFR y TRIFR"]
  },
  {
    term: "Árbol de causas", area: "mineria", aka: ["investigación de incidentes", "5 porqués", "análisis de causa raíz"],
    meaning: "Método de investigación que reconstruye los hechos que llevaron a un incidente y busca las causas inmediatas y las de fondo (condiciones, procedimientos, gestión), no solo al culpable.",
    application: "Termina en acciones correctivas con responsable y fecha, cuya eficacia se verifica. Se complementa con el análisis de los cinco porqués.",
    example: "Un golpe con una carga no se explica solo por la distracción: se revisa la señalización, la iluminación, la carga de trabajo y el procedimiento.",
    related: ["Incidente y cuasi accidente", "Análisis de causa raíz"]
  },
  {
    term: "LTIFR y TRIFR", area: "mineria", aka: ["índice de frecuencia", "LTI", "lost time injury frequency rate", "total recordable injury frequency rate"],
    meaning: "Indicadores de frecuencia de lesiones por cada millón de horas trabajadas. LTIFR = lesiones con tiempo perdido × 1.000.000 ÷ horas trabajadas. TRIFR incluye además lesiones con tratamiento médico y con trabajo restringido; la definición exacta de las categorías varía según la empresa.",
    application: "Permiten comparar el desempeño de seguridad entre períodos y sitios. Se acompañan de indicadores preventivos (inspecciones, reportes de cuasi accidentes) porque miden consecuencias, no el control del riesgo.",
    example: "Ejemplo ilustrativo: 2 lesiones con tiempo perdido en 1.000.000 de horas → LTIFR 2,0.",
    related: ["Incidente y cuasi accidente", "Árbol de causas"],
    refs: [{ name: "Definiciones de LTI/TRI según el estándar de reporte de cada empresa (confirmar categorías y base de horas)", verify: true }]
  },
  {
    term: "ISO 45001", area: "mineria", aka: ["gestión de seguridad y salud en el trabajo", "SST"],
    meaning: "Norma internacional de requisitos para sistemas de gestión de seguridad y salud en el trabajo. Se basa en el ciclo PDCA, la participación de los trabajadores y la identificación de peligros y evaluación de riesgos.",
    application: "Es certificable. Se complementa con la normativa legal local, que siempre rige. La edición vigente es la de 2018, y su revisión está en proceso.",
    example: "Para certificar, la empresa documenta cómo identifica peligros, define controles, consulta a los trabajadores y audita su sistema.",
    related: ["Jerarquía de controles", "Auditoría interna", "ISO 14001"],
    refs: [{ name: "ISO 45001:2018 Sistemas de gestión de la SST (revisión en curso; confirmar edición vigente)", verify: false }]
  },
  {
    term: "ISO 14001", area: "mineria", aka: ["gestión ambiental", "SGA ambiental"],
    meaning: "Norma internacional de requisitos para sistemas de gestión ambiental: identificar aspectos e impactos ambientales, cumplir requisitos legales, fijar objetivos y mejorar de forma continua.",
    application: "Es certificable. La edición vigente a octubre de 2026 es ISO 14001:2026, que reemplazó a la de 2015 con un período de transición.",
    example: "Una mina identifica sus aspectos ambientales (agua, residuos, emisiones), fija controles y los audita.",
    related: ["Estudio de impacto ambiental", "ISO 45001", "Plan de cierre de mina"],
    refs: [{ name: "ISO 14001:2026 (reemplaza a ISO 14001:2015; confirmar plazos de transición con el organismo de certificación)", verify: true }]
  },
  {
    term: "Estudio de impacto ambiental", area: "mineria", aka: ["EIA", "informe de impacto ambiental", "IIA"],
    meaning: "Estudio que describe un proyecto y evalúa sus posibles efectos ambientales y sociales, con medidas para prevenirlos, mitigarlos o compensarlos.",
    application: "En Argentina, la Ley 24.585 incorporó al Código de Minería el régimen de protección ambiental para la actividad minera, que establece el informe de impacto ambiental como instrumento de gestión. Cada provincia tiene su autoridad y procedimiento.",
    example: "Antes de iniciar la explotación, el titular presenta el informe a la autoridad ambiental, que lo evalúa y emite una declaración de impacto ambiental.",
    related: ["Plan de cierre de mina", "ISO 14001"],
    refs: [{ name: "Ley 24.585 — Protección ambiental para la actividad minera (modificación del Código de Minería)", verify: false }]
  },
  {
    term: "Plan de cierre de mina", area: "mineria", aka: ["cierre de minas", "mine closure"],
    meaning: "Plan que define cómo se cerrará y rehabilitará una operación al terminar su vida útil, con medidas técnicas, ambientales y sociales y su financiamiento.",
    application: "Se prevé desde la etapa de proyecto y se actualiza durante la operación. Busca dejar el sitio físicamente estable, químicamente seguro y con un uso posterior definido.",
    example: "El plan incluye el desmantelamiento de instalaciones, la cobertura de depósitos de relaves y el monitoreo posterior.",
    related: ["Relave", "Estudio de impacto ambiental", "Ciclo minero"]
  },
  {
    term: "Licencia social", area: "mineria", aka: ["relaciones comunitarias", "social license to operate"],
    meaning: "Aceptación de una operación por parte de las comunidades locales, construida con diálogo, transparencia, cumplimiento de compromisos y beneficios locales.",
    application: "No es un documento legal sino una condición de la relación. Se gestiona con comunicación temprana, canales de reclamos y contratación local.",
    example: "Reuniones periódicas con la comunidad y un canal para recibir inquietudes sobre ruido, tránsito o agua.",
    related: ["Estudio de impacto ambiental", "ICMM"]
  },
  {
    term: "ICMM", area: "mineria", aka: ["International Council on Mining and Metals", "principios del ICMM"],
    meaning: "Consejo internacional de empresas mineras y metalúrgicas que promueve el desarrollo sostenible. Sus miembros se comprometen a implementar los Principios de la Minería del ICMM, que son diez.",
    application: "Es una referencia de buenas prácticas para empresas globales: ética, derechos humanos, gestión de riesgos, salud y seguridad, ambiente y comunidades. Las operaciones de sus miembros se evalúan mediante validación.",
    example: "Una empresa miembro informa su desempeño siguiendo los estándares del ICMM y lo somete a validación externa.",
    related: ["Licencia social", "Código Internacional del Cianuro"],
    refs: [{ name: "ICMM — Mining Principles (los diez principios; confirmar versión vigente en icmm.com)", verify: true }]
  },
  {
    term: "Código Internacional del Cianuro", area: "mineria", aka: ["Cyanide Code", "ICMI", "International Cyanide Management Code"],
    meaning: "Programa voluntario de certificación para la gestión segura del cianuro en la minería de oro y plata, que abarca la producción, el transporte, el manejo y almacenamiento, las operaciones, el cierre, la seguridad de los trabajadores, la respuesta a emergencias, la capacitación y la comunicación.",
    application: "Lo administra el International Cyanide Management Institute. Las operaciones certificadas son auditadas por terceros independientes y los resultados son públicos.",
    example: "Una mina de lixiviación certificada demuestra control de inventarios de cianuro, plan de emergencia y capacitación documentada.",
    related: ["Lixiviación en pilas", "ICMM"],
    refs: [{ name: "International Cyanide Management Code (ICMI) — Cyanide Code", verify: false }]
  },
  {
    term: "Marco legal minero argentino", area: "mineria", aka: ["Código de Minería", "Ley 24.196", "inversiones mineras", "Ley 24.585"],
    meaning: "Conjunto de normas que regulan la actividad: el Código de Minería (derechos mineros), la Ley 24.196 de Inversiones Mineras (régimen de promoción) y la Ley 24.585 (protección ambiental para la actividad minera).",
    application: "A nivel orientativo: las provincias, por su dominio originario de los recursos, tienen autoridad y procedimientos propios. Las reglamentaciones y modificaciones pueden cambiar, por lo que debe consultarse el texto vigente.",
    example: "Un proyecto en San Juan atiende normativa nacional y provincial, con su autoridad minera y ambiental provincial.",
    related: ["Estudio de impacto ambiental", "Normativa de higiene y seguridad (Argentina)"],
    refs: [
      { name: "Ley 24.196 — Inversiones Mineras (1993)", verify: false },
      { name: "Ley 24.585 — Protección ambiental para la actividad minera (1995)", verify: false },
      { name: "Código de Minería de la Nación (texto ordenado vigente)", verify: true }
    ]
  },
  {
    term: "Normativa de higiene y seguridad (Argentina)", area: "mineria", aka: ["Ley 19.587", "Decreto 351/79", "Decreto 249/2007", "Ley 24.557", "ART", "SRT"],
    meaning: "La Ley 19.587 de Higiene y Seguridad en el Trabajo y su decreto reglamentario 351/79 son el marco general. El Decreto 249/2007 aprobó el Reglamento de Higiene y Seguridad para la actividad minera. La Ley 24.557 regula el sistema de riesgos del trabajo, con las ART (aseguradoras) y la Superintendencia de Riesgos del Trabajo (SRT).",
    application: "A nivel orientativo: define obligaciones del empleador y del trabajador, y las condiciones mínimas de seguridad. Los requisitos concretos y sus actualizaciones deben consultarse en el texto vigente y con el responsable de seguridad.",
    example: "Un contratista que ingresa a una mina debe cumplir tanto el reglamento minero como los procedimientos del cliente.",
    related: ["Jerarquía de controles", "Marco legal minero argentino", "ISO 45001"],
    refs: [
      { name: "Decreto 249/2007 — Reglamento de Higiene y Seguridad para la actividad minera", verify: false },
      { name: "Ley 19.587 y Decreto 351/79 — Higiene y Seguridad en el Trabajo", verify: false },
      { name: "Ley 24.557 — Riesgos del Trabajo (modificaciones posteriores a verificar)", verify: true }
    ]
  },
  {
    term: "Parte diario", area: "mineria", aka: ["reporte diario", "informe de turno"],
    meaning: "Registro de lo ocurrido en el día o turno: producción, personal presente, novedades, incidentes, pendientes.",
    application: "Alimenta el control de gestión y el pase de turno. Un parte útil es corto, comparable día a día y se envía siempre a la misma hora.",
    example: "El parte del campamento incluye ocupación, ingresos y egresos, incidencias de servicio y pedidos pendientes.",
    related: ["Pase de turno", "Campamento minero"]
  },
  {
    term: "Contratista", area: "mineria", aka: ["empresa contratista", "contratista de servicios", "proveedor de servicios"],
    meaning: "Empresa externa que presta servicios en el sitio (catering, transporte, mantenimiento, construcción) bajo contrato con el operador.",
    application: "Se gestiona con requisitos de ingreso (seguros, capacitación, documentación), indicadores y auditorías. El operador conserva responsabilidades de coordinación y seguridad.",
    example: "Antes de iniciar, el contratista presenta nómina, seguros y capacitaciones al área de seguridad para obtener autorización de ingreso.",
    related: ["SLA", "Inducción de ingreso", "Campamento minero"]
  }
);
