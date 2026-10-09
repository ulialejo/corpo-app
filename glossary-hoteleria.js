window.CORPO_DATA = window.CORPO_DATA || { categories: [], glossary: [] };

// Glosario técnico de hotelería. Los números de los ejemplos son ilustrativos, no datos reales.
window.CORPO_DATA.glossary.push(
  {
    term: "Ocupación", area: "hoteleria", aka: ["occupancy", "tasa de ocupación"],
    meaning: "Porcentaje de habitaciones disponibles que se vendieron en un período: habitaciones ocupadas ÷ habitaciones disponibles × 100.",
    application: "Es el indicador de volumen. Por sí solo engaña: una ocupación alta con tarifas bajas puede generar menos ingreso que una ocupación media con tarifa mejor. Se analiza junto al ADR.",
    example: "Ejemplo ilustrativo: hotel de 40 habitaciones con 28 vendidas en una noche → ocupación 70%.",
    related: ["ADR", "RevPAR", "Habitaciones disponibles"]
  },
  {
    term: "Habitaciones disponibles", area: "hoteleria", aka: ["available rooms", "inventario de habitaciones"],
    meaning: "Cantidad de habitaciones que el hotel puede vender en una noche. Es el denominador de la ocupación y del RevPAR.",
    application: "Su definición importa: las habitaciones fuera de servicio por largo plazo se tratan de forma distinta (Fuera de orden vs. Fuera de servicio) y modifican los indicadores.",
    example: "Un hotel de 40 habitaciones con 2 retiradas del inventario por una obra tiene 38 disponibles esa noche, si la política así lo define.",
    related: ["Ocupación", "Estados de habitación", "RevPAR"]
  },
  {
    term: "ADR", area: "hoteleria", aka: ["average daily rate", "tarifa promedio diaria"],
    meaning: "Ingreso por habitaciones dividido por la cantidad de habitaciones vendidas: ingreso de alojamiento ÷ habitaciones ocupadas.",
    application: "Mide el precio medio efectivamente cobrado. Se segmenta por canal y por tipo de habitación para detectar dónde se vende barato.",
    example: "Ejemplo ilustrativo: ingreso de alojamiento 2.800 con 28 habitaciones vendidas → ADR 100.",
    related: ["Ocupación", "RevPAR"]
  },
  {
    term: "RevPAR", area: "hoteleria", aka: ["revenue per available room", "ingreso por habitación disponible"],
    meaning: "Ingreso de alojamiento ÷ habitaciones disponibles. Equivale a ADR × ocupación.",
    application: "Combina precio y volumen en un solo número, por eso es el indicador estándar para comparar desempeño de hoteles y períodos. No dice nada sobre costos ni rentabilidad.",
    example: "Ejemplo ilustrativo: ADR 100 × ocupación 70% = RevPAR 70.",
    related: ["ADR", "Ocupación", "TRevPAR", "GOPPAR"]
  },
  {
    term: "TRevPAR", area: "hoteleria", aka: ["total revenue per available room"],
    meaning: "Ingreso total del hotel (alojamiento, alimentos y bebidas, spa y otros) ÷ habitaciones disponibles.",
    application: "Sirve para evaluar hoteles donde el ingreso fuera de habitaciones pesa mucho. Un hotel puede bajar su RevPAR y subir su TRevPAR si vende más servicios.",
    example: "Ejemplo ilustrativo: ingreso total diario 6.000 con 40 habitaciones disponibles → TRevPAR 150.",
    related: ["RevPAR", "GOPPAR"]
  },
  {
    term: "GOP", area: "hoteleria", aka: ["gross operating profit", "resultado operativo bruto"],
    meaning: "Ingresos de todos los departamentos menos los costos departamentales y los gastos operativos no distribuidos (administración, ventas y marketing, mantenimiento, energía), antes de cargos fijos como alquileres, intereses, impuestos y depreciación. La definición exacta depende del sistema contable que use el hotel.",
    application: "Es la medida central de la rentabilidad de la operación hotelera. Se compara contra presupuesto y contra el año anterior.",
    example: "Ejemplo ilustrativo: ingresos totales 100, costos departamentales 40, gastos no distribuidos 30 → GOP 30.",
    related: ["USALI", "GOPPAR", "Flow-through"]
  },
  {
    term: "GOPPAR", area: "hoteleria", aka: ["gross operating profit per available room"],
    meaning: "GOP dividido por las habitaciones disponibles.",
    application: "Es el indicador de rentabilidad por habitación. Un RevPAR en alza puede venir con un GOPPAR a la baja si los costos crecen más rápido que los ingresos.",
    example: "Ejemplo ilustrativo: GOP anual de 1.460.000 con 40 habitaciones × 365 noches = 14.600 disponibles → GOPPAR 100.",
    related: ["GOP", "RevPAR", "TRevPAR"]
  },
  {
    term: "Flow-through", area: "hoteleria", aka: ["conversión a resultado"],
    meaning: "Proporción de un aumento de ingresos que termina como aumento de resultado: variación del GOP ÷ variación de los ingresos.",
    application: "Controla si el crecimiento de ventas realmente se refleja en rentabilidad. Un flow-through bajo indica que los costos crecieron casi tanto como los ingresos.",
    example: "Ejemplo ilustrativo: los ingresos suben 100 y el GOP sube 40 → flow-through 40%.",
    related: ["GOP", "GOPPAR"]
  },
  {
    term: "USALI", area: "hoteleria", aka: ["Uniform System of Accounts for the Lodging Industry", "sistema uniforme de cuentas"],
    meaning: "Estándar de contabilidad de la industria hotelera que define cómo clasificar ingresos y gastos por departamento (habitaciones, alimentos y bebidas, otros departamentos) y cómo calcular el GOP. La 12.ª edición revisada rige desde el 1 de enero de 2026.",
    application: "Permite comparar hoteles entre sí y reportar a propietarios y operadores con el mismo criterio. Los hoteles pequeños pueden aplicarlo de forma simplificada para ordenar su estado de resultados.",
    example: "El costo de lavandería de habitaciones se imputa al departamento de habitaciones y no a gastos generales.",
    related: ["GOP", "Estado de resultados departamental"],
    refs: [{ name: "USALI, 12.ª edición revisada (HFTP/AHLA), vigente desde el 1/1/2026", verify: false }]
  },
  {
    term: "Estado de resultados departamental", area: "hoteleria", aka: ["departmental statement", "P&L departamental"],
    meaning: "Resultado de cada departamento (habitaciones, alimentos y bebidas, spa, etc.) que muestra sus ingresos menos sus costos directos, antes de los gastos generales.",
    application: "Permite ver qué departamentos aportan más y dónde se pierde margen. Es la base de la revisión mensual de resultados.",
    example: "Habitaciones suele dejar un margen departamental más alto que alimentos y bebidas, por su menor costo directo relativo.",
    related: ["USALI", "GOP"]
  },
  {
    term: "Pickup", area: "hoteleria", aka: ["reservas nuevas", "pick-up"],
    meaning: "Cantidad de reservas (noches) que ingresaron en un período para una fecha de estadía futura.",
    application: "Se compara con el pickup del año anterior a la misma distancia de la fecha. Si va por debajo, se evalúa promoción; si va por encima, se suben tarifas o se restringe la venta.",
    example: "Ejemplo ilustrativo: a 30 días de la fecha hay 20 noches reservadas contra 30 el año anterior → el pickup va atrasado.",
    related: ["Pace", "Forecast", "Revenue management"]
  },
  {
    term: "Pace", area: "hoteleria", aka: ["ritmo de reservas"],
    meaning: "Comparación del avance de reservas de una fecha futura contra el mismo momento del año anterior (o contra el presupuesto).",
    application: "Es una herramienta visual para detectar fechas con demanda fuerte o débil con anticipación y ajustar tarifas.",
    example: "Un reporte de pace muestra que las reservas para un feriado van 15 noches por encima del año pasado; se justifica cerrar tarifas más bajas.",
    related: ["Pickup", "Forecast", "BAR"]
  },
  {
    term: "Forecast", area: "hoteleria", aka: ["pronóstico de demanda"],
    meaning: "Proyección de ocupación, tarifa e ingresos para fechas futuras, basada en reservas actuales, historial y eventos.",
    application: "Se actualiza semanalmente y alimenta decisiones de tarifa, dotación de personal y compras. Su exactitud se mide comparando pronóstico y resultado real.",
    example: "El forecast de una semana indica baja ocupación: se reduce la dotación de camareras programadas y se lanza una promoción.",
    related: ["Pickup", "Pace", "Revenue management"]
  },
  {
    term: "Revenue management", area: "hoteleria", aka: ["gestión de ingresos", "yield management"],
    meaning: "Disciplina que busca vender la habitación correcta, al cliente correcto, en el momento y precio correctos, y por el canal correcto, para maximizar el ingreso total.",
    application: "Combina forecast, segmentación, control de tarifas y de canales, y análisis de competidores (comp set). Las decisiones se registran para poder aprender de ellas.",
    example: "Subir la tarifa y exigir mínimo de dos noches en un fin de semana de alta demanda, y bajar el mínimo cuando el pace muestra atraso.",
    related: ["BAR", "Restricciones de venta", "Comp set"]
  },
  {
    term: "BAR", area: "hoteleria", aka: ["best available rate", "mejor tarifa disponible"],
    meaning: "Tarifa pública más baja disponible para una fecha, sin restricciones especiales. Es la tarifa de referencia a partir de la cual se derivan otras.",
    application: "Se ajusta según la demanda y el pace. Las tarifas de empresas, grupos o promociones suelen definirse como descuento o recargo sobre el BAR.",
    example: "Tarifa corporativa pactada: BAR menos un porcentaje fijo de descuento.",
    related: ["Revenue management", "Paridad de tarifas"]
  },
  {
    term: "Restricciones de venta", area: "hoteleria", aka: ["mínimo de estadía", "MLOS", "cierre a la llegada", "CTA"],
    meaning: "Condiciones que limitan la venta de una fecha: estadía mínima (MLOS), cerrado a la llegada (CTA), cerrado a la salida (CTD), anticipación mínima.",
    application: "Se usan en fechas de alta demanda para evitar que una reserva corta bloquee noches que se podrían vender mejor, y para armar estadías completas.",
    example: "En un fin de semana largo se exige mínimo 3 noches y se cierra la llegada el día previo al feriado.",
    related: ["Revenue management", "BAR"]
  },
  {
    term: "Overbooking", area: "hoteleria", aka: ["sobreventa", "sobrerreserva"],
    meaning: "Venta consciente de más habitaciones que las disponibles, basada en la estimación de cancelaciones y no-shows.",
    application: "Se calcula con datos históricos. Si llegan más huéspedes que habitaciones, se aplica el procedimiento de reubicación (walk): conseguir alojamiento equivalente en otro hotel y compensar al huésped según la política.",
    example: "Si históricamente el 5% no se presenta, se puede vender un margen acotado sobre el inventario, con protocolo de reubicación definido.",
    related: ["Walk", "No-show", "Revenue management"]
  },
  {
    term: "Walk", area: "hoteleria", aka: ["reubicar al huésped", "walking a guest"],
    meaning: "Reubicar a un huésped con reserva confirmada en otro hotel porque no hay habitación disponible.",
    application: "Procedimiento típico: informar con claridad, ofrecer una alternativa equivalente o mejor, cubrir el traslado y la primera noche según la política, y recuperar al huésped para la noche siguiente si es posible.",
    example: "Por una avería en una habitación, el hotel reubica al huésped en un hotel cercano, paga el traslado y lo recibe en una habitación superior al día siguiente.",
    related: ["Overbooking", "Manejo de quejas"]
  },
  {
    term: "No-show", area: "hoteleria", aka: ["huésped que no se presenta"],
    meaning: "Reserva garantizada cuyo huésped no llega ni cancela.",
    application: "La política de cancelación define el cargo (por ejemplo, la primera noche). Se registra para el cálculo del overbooking y se liberan las noches siguientes según las condiciones.",
    example: "Reserva con garantía de tarjeta y llegada a las 15:00; pasada la hora de corte se procesa el cargo de no-show según la política.",
    related: ["Overbooking", "Pre-autorización", "Política de cancelación"]
  },
  {
    term: "Política de cancelación", area: "hoteleria", aka: ["cancellation policy", "tarifa no reembolsable"],
    meaning: "Condiciones que fijan hasta cuándo puede cancelarse una reserva sin cargo y qué se cobra después.",
    application: "Varía según la tarifa (flexible o no reembolsable) y la temporada. Debe comunicarse antes de confirmar la reserva y aplicarse de forma consistente.",
    example: "Tarifa flexible: cancelación sin cargo hasta 48 horas antes. Tarifa no reembolsable: se cobra el total.",
    related: ["No-show", "Pre-autorización"]
  },
  {
    term: "Paridad de tarifas", area: "hoteleria", aka: ["rate parity"],
    meaning: "Mantener el mismo precio para el mismo producto en todos los canales de venta (sitio propio, agencias online, telefónico).",
    application: "Evita que el cliente compre en el canal más caro para el hotel. Las condiciones contractuales con los canales pueden exigirla; conviene revisarlas por jurisdicción.",
    example: "Si el sitio propio muestra una tarifa menor que la de una agencia online, hay disparidad y se corrige.",
    related: ["OTA", "Channel manager", "BAR"]
  },
  {
    term: "OTA", area: "hoteleria", aka: ["online travel agency", "agencia de viajes online"],
    meaning: "Plataforma de venta online que intermedia reservas a cambio de una comisión.",
    application: "Aporta visibilidad y volumen, pero con costo de comisión. Se mide el costo de adquisición por canal para decidir cuánto inventario asignar.",
    example: "Una reserva de 100 por una OTA con comisión de 15% deja al hotel un ingreso neto de 85 antes de otros costos.",
    related: ["Channel manager", "Paridad de tarifas", "Comisión"]
  },
  {
    term: "Comisión", area: "hoteleria", aka: ["costo de distribución", "comisión de canal"],
    meaning: "Porcentaje del valor de la reserva que el hotel paga al canal que la generó.",
    application: "Se incluye en el costo de distribución; sumado a otros costos de adquisición, define cuánto conviene incentivar la venta directa.",
    example: "Si el canal directo reduce la comisión promedio, el mismo ingreso bruto deja mayor ingreso neto.",
    related: ["OTA", "Revenue management"]
  },
  {
    term: "Channel manager", area: "hoteleria", aka: ["gestor de canales"],
    meaning: "Sistema que sincroniza disponibilidad y tarifas del hotel entre todos los canales de venta desde un único lugar.",
    application: "Evita el overbooking por desactualización y ahorra carga manual. Se conecta con el PMS para recibir las reservas.",
    example: "Se vende la última habitación en un canal y el channel manager cierra la disponibilidad en los demás en pocos segundos.",
    related: ["PMS", "OTA", "Paridad de tarifas"]
  },
  {
    term: "PMS", area: "hoteleria", aka: ["property management system", "sistema de gestión hotelera"],
    meaning: "Sistema central del hotel: reservas, check-in y check-out, asignación de habitaciones, folios, facturación y reportes.",
    application: "Es la fuente de datos de ocupación, ADR y RevPAR, y se integra con channel manager, motor de reservas, caja y housekeeping.",
    example: "El PMS cambia una habitación de «sucia» a «limpia» cuando housekeeping registra su limpieza, y recepción la puede asignar.",
    related: ["Channel manager", "Folio", "Estados de habitación"]
  },
  {
    term: "Comp set", area: "hoteleria", aka: ["competitive set", "conjunto competitivo"],
    meaning: "Grupo de hoteles competidores directos con los que un hotel se compara.",
    application: "Se arma por ubicación, categoría y público. Con los datos del comp set se calculan índices que miden cuánto del mercado captura el hotel.",
    example: "Un hotel con RevPAR igual al promedio de su comp set tiene participación justa; por encima, gana mercado.",
    related: ["RevPAR", "Revenue management"]
  },
  {
    term: "Segmentación de mercado", area: "hoteleria", aka: ["FIT", "grupos", "contractual", "transient"],
    meaning: "Clasificación de la demanda en segmentos con comportamiento distinto: individuales (FIT), grupos, corporativo/contractual, etc.",
    application: "Cada segmento tiene tarifa, anticipación y estacionalidad distintas. Se define cuánto inventario asignar a cada uno según la demanda esperada.",
    example: "En temporada baja se asigna más inventario a grupos y contratos; en alta, se reserva para individuales de mayor tarifa.",
    related: ["Revenue management", "Grupos (cut-off y attrition)"]
  },
  {
    term: "Grupos (cut-off y attrition)", area: "hoteleria", aka: ["bloqueo de grupo", "cut-off date", "attrition"],
    meaning: "En un bloqueo de habitaciones para un grupo, el cut-off es la fecha límite hasta la cual el grupo confirma nombres y habitaciones, y el attrition es la tolerancia acordada de habitaciones no utilizadas antes de aplicar penalidad.",
    application: "Al llegar el cut-off, las habitaciones no confirmadas vuelven a la venta general. El contrato deja claros ambos conceptos y las penalidades.",
    example: "El hotel bloquea 20 habitaciones; al cut-off se confirman 15 y las 5 restantes se liberan o se cobran según el contrato.",
    related: ["Segmentación de mercado", "Revenue management"]
  },
  {
    term: "Folio", area: "hoteleria", aka: ["cuenta del huésped", "guest folio"],
    meaning: "Registro de todos los cargos y pagos de la estadía de un huésped o reserva.",
    application: "Recepción verifica cargos antes del check-out. Puede dividirse (por ejemplo, alojamiento a la empresa y extras al huésped).",
    example: "Folio dividido: alojamiento a nombre de la empresa y minibar y restaurante pagados por el huésped.",
    related: ["Cuenta corriente (city ledger)", "Auditoría nocturna", "PMS"]
  },
  {
    term: "Cuenta corriente (city ledger)", area: "hoteleria", aka: ["city ledger", "cuentas a cobrar"],
    meaning: "Cuentas de clientes (empresas, agencias) a las que se factura posteriormente en lugar de cobrar en el momento.",
    application: "Se controla el crédito otorgado, la facturación y el cobro dentro del plazo. Es parte del DSO del hotel.",
    example: "Una empresa aloja personal con crédito aprobado: se carga el alojamiento a su cuenta y se factura a fin de mes.",
    related: ["Folio", "DSO / DPO / DIO"]
  },
  {
    term: "Auditoría nocturna", area: "hoteleria", aka: ["night audit", "cierre del día"],
    meaning: "Proceso diario, generalmente nocturno, que concilia los movimientos del día en el PMS, aplica los cargos de habitación, genera reportes y cierra la fecha operativa.",
    application: "Pasos típicos: verificar llegadas y salidas pendientes, conciliar caja y medios de pago, revisar discrepancias, cargar alojamiento, cerrar el día y emitir reportes de ocupación e ingresos.",
    example: "El auditor detecta un no-show sin procesar y una diferencia de caja; los resuelve antes de cerrar el día.",
    related: ["PMS", "Folio", "No-show"]
  },
  {
    term: "Pre-autorización", area: "hoteleria", aka: ["garantía de tarjeta", "hold", "depósito de garantía"],
    meaning: "Bloqueo de un monto en la tarjeta del huésped para cubrir cargos de la estadía, sin cobrarlo hasta el check-out.",
    application: "Se informa al huésped el monto y el motivo. Se libera o se convierte en cobro al cerrar la cuenta. Los plazos de liberación dependen del emisor de la tarjeta.",
    example: "Al check-in se bloquea el valor de la estadía más un monto por extras, y se libera al salir si no hay consumos adicionales.",
    related: ["Folio", "No-show"]
  },
  {
    term: "Estados de habitación", area: "hoteleria", aka: ["VC", "VD", "OC", "OD", "OOO", "OOS", "room status"],
    meaning: "Códigos del estado de una habitación: VC (vacante limpia), VD (vacante sucia), OC (ocupada limpia), OD (ocupada sucia), OOO (fuera de orden) y OOS (fuera de servicio). OOO suele sacar la habitación del inventario disponible; OOS la mantiene en el inventario por ser un problema breve.",
    application: "Recepción y housekeeping los usan para coordinar qué habitaciones se pueden asignar. Los criterios exactos de OOO/OOS varían según el hotel y su política de reporte.",
    example: "Una habitación con filtración prolongada se marca OOO; una con una lámpara a reemplazar durante el día, OOS.",
    related: ["Habitaciones disponibles", "Housekeeping", "PMS"],
    refs: [{ name: "Criterio de OOO/OOS según la política de cada hotel y el sistema de reporte (USALI)", verify: true }]
  },
  {
    term: "Housekeeping", area: "hoteleria", aka: ["ama de llaves", "gobernanza", "pisos"],
    meaning: "Departamento responsable de la limpieza, orden y preparación de habitaciones y áreas comunes, y del control de lencería y amenities.",
    application: "Planifica la jornada según salidas y estadías, asigna habitaciones al personal, inspecciona y comunica el estado a recepción en tiempo real.",
    example: "Cada mañana se arma el reparto de habitaciones por camarera priorizando salidas con llegadas el mismo día.",
    related: ["Estados de habitación", "Productividad de limpieza", "Par level"]
  },
  {
    term: "Productividad de limpieza", area: "hoteleria", aka: ["habitaciones por camarera", "tiempo estándar de limpieza"],
    meaning: "Medida de cuántas habitaciones limpia una persona en un turno, o cuántos minutos lleva cada tipo de limpieza (salida, estadía, profunda).",
    application: "Se calcula tomando tiempos reales por tipo de habitación y se usa para armar la dotación y los repartos. Un estándar irreal produce limpieza deficiente o rotación de personal.",
    example: "Ejemplo ilustrativo: si una limpieza de salida lleva 30 minutos y la de estadía 15, el reparto debe sumar los minutos, no solo contar habitaciones.",
    related: ["Housekeeping", "Inspección de habitación"]
  },
  {
    term: "Inspección de habitación", area: "hoteleria", aka: ["checklist de inspección", "room inspection"],
    meaning: "Revisión de una habitación limpiada, con una lista de verificación (limpieza, orden, funcionamiento, amenities) antes de liberarla para la venta.",
    application: "Se inspecciona el total de habitaciones críticas (VIP, llegada inmediata) y una muestra del resto. Las no conformidades vuelven a limpiar y se registran para capacitación.",
    example: "El supervisor detecta falta de reposición de amenities y un desperfecto en la cerradura; la habitación queda retenida hasta resolverlo.",
    related: ["Housekeeping", "Mantenimiento preventivo"]
  },
  {
    term: "Par level", area: "hoteleria", aka: ["nivel de par", "stock estándar de lencería"],
    meaning: "Cantidad de un artículo (sábanas, toallas, amenities) que debe existir por cada unidad de uso, para cubrir uso, lavado y reposición. Se expresa como «pares»: un par = lo que está en uso, otro en lavandería, otro en stock.",
    application: "Define cuánto stock de lencería mantener. Un par bajo provoca faltantes; uno alto inmoviliza dinero.",
    example: "Un par de 3 para sábanas implica tres juegos completos por habitación: uno en la cama, uno en lavandería, otro en el armario.",
    related: ["Housekeeping", "Punto de pedido"]
  },
  {
    term: "Turndown", area: "hoteleria", aka: ["servicio de cobertura nocturna"],
    meaning: "Servicio vespertino en el que se prepara la habitación para la noche: se abre la cama, se reponen toallas y se ordena.",
    application: "Es un diferencial de servicio en hoteles de mayor categoría; requiere personal y tiempos adicionales que deben contemplarse en la dotación.",
    example: "Entre las 18:00 y las 21:00 el personal pasa por las habitaciones ocupadas que solicitaron el servicio.",
    related: ["Housekeeping", "Productividad de limpieza"]
  },
  {
    term: "Limpieza profunda", area: "hoteleria", aka: ["deep cleaning"],
    meaning: "Limpieza programada de elementos que no se tratan a diario: colchones, cortinas, alfombras, techos, detrás de muebles.",
    application: "Se planifica por ciclo (por ejemplo, un grupo de habitaciones por semana) en baja ocupación, y se registra en una planilla de control.",
    example: "Durante una semana de baja ocupación se lleva a cabo la limpieza profunda de un piso completo.",
    related: ["Housekeeping", "Mantenimiento preventivo"]
  },
  {
    term: "Objetos olvidados", area: "hoteleria", aka: ["lost & found"],
    meaning: "Procedimiento para registrar, guardar y devolver las pertenencias que dejan los huéspedes.",
    application: "Se registran con fecha, lugar y descripción, se guardan en un lugar controlado y se informa al huésped. Se define cuánto tiempo se conservan antes de disponer de ellos.",
    example: "Un cargador hallado en una habitación se anota en el libro, se guarda con etiqueta y se avisa al huésped por mensaje.",
    related: ["Housekeeping"]
  },
  {
    term: "Mantenimiento preventivo", area: "hoteleria", aka: ["PM", "mantenimiento programado"],
    meaning: "Tareas planificadas por calendario o uso para evitar fallas: revisar, limpiar, lubricar, reemplazar.",
    application: "Se gestiona con un plan, órdenes de trabajo y registros. Reduce emergencias, costos y habitaciones fuera de servicio.",
    example: "Revisión trimestral de aires acondicionados y calendario de mantenimiento de bombas de agua.",
    related: ["Orden de trabajo", "Estados de habitación"]
  },
  {
    term: "Orden de trabajo", area: "hoteleria", aka: ["work order", "OT"],
    meaning: "Documento o registro que formaliza una tarea de mantenimiento o servicio: qué se hace, dónde, quién, prioridad, materiales y tiempo.",
    application: "Permite priorizar, asignar y medir el cumplimiento. Una orden cerrada incluye lo realizado, los materiales y el tiempo empleado.",
    example: "Housekeeping reporta una pérdida en el baño; la OT queda asignada con prioridad alta y se informa a recepción hasta que se cierre.",
    related: ["Mantenimiento preventivo"]
  },
  {
    term: "Manejo de quejas", area: "hoteleria", aka: ["recuperación del servicio", "service recovery"],
    meaning: "Proceso para atender un reclamo: escuchar, reconocer el problema, resolver o compensar, hacer seguimiento y registrar para evitar repeticiones.",
    application: "Un buen manejo puede mejorar la fidelidad del huésped. Se define qué puede resolver cada nivel del personal sin pedir autorización.",
    example: "El huésped reporta ruido en la habitación; se escucha, se ofrece cambio de habitación y se llama luego para confirmar que quedó conforme.",
    related: ["Walk", "Reputación online"]
  },
  {
    term: "Reputación online", area: "hoteleria", aka: ["reseñas", "puntaje de opiniones"],
    meaning: "Percepción pública del hotel construida por reseñas y puntajes en sitios de opinión y plataformas de venta.",
    application: "Influye en la demanda y en la capacidad de sostener tarifas. Se monitorea, se responde con un criterio definido y se analizan los temas repetidos para corregir causas.",
    example: "Si varias reseñas mencionan demoras en el check-in, se revisa el proceso de recepción antes que la respuesta puntual.",
    related: ["Manejo de quejas"]
  },
  {
    term: "Upselling", area: "hoteleria", aka: ["venta sugestiva", "upgrade", "venta adicional"],
    meaning: "Ofrecer al huésped una categoría superior (upgrade pago) o servicios adicionales antes o durante la estadía.",
    application: "Se entrena al personal para ofrecer con criterio y se mide el ingreso adicional por reserva. Debe ser un valor real para el huésped.",
    example: "En el check-in se ofrece una habitación con vista por una diferencia de tarifa, o desayuno incluido.",
    related: ["ADR", "Revenue management"]
  },
  {
    term: "Cortesía", area: "hoteleria", aka: ["comp", "complimentary"],
    meaning: "Servicio o habitación otorgada sin cargo al huésped o a terceros.",
    application: "Requiere política y autorización, porque afecta el ingreso. Se registra para el análisis de resultados y control interno.",
    example: "Una habitación entregada como compensación por un problema se carga a una cuenta de cortesía con aprobación del gerente.",
    related: ["Manejo de quejas"]
  },
  {
    term: "BEO", area: "hoteleria", aka: ["banquet event order", "orden de evento"],
    meaning: "Documento que detalla un evento: fecha, cantidad de personas, menú, montaje, horarios, equipamiento y condiciones de pago.",
    application: "Es la referencia para todos los departamentos involucrados; se emite y se revisa antes del evento, con cambios registrados y confirmados.",
    example: "Un BEO de una cena de empresa indica menú, mesas, audiovisual y horario de servicio de cada fase.",
    related: ["Grupos (cut-off y attrition)"]
  },
  {
    term: "APPCC / HACCP", area: "hoteleria", aka: ["HACCP", "análisis de peligros y puntos críticos de control"],
    meaning: "Sistema preventivo de inocuidad alimentaria basado en siete principios del Codex Alimentarius: análisis de peligros, determinación de puntos críticos de control, límites críticos, monitoreo, acciones correctivas, verificación y registros.",
    application: "Se aplica en cocinas y depósitos de alimentos: por ejemplo, definir el punto de cocción de un alimento, su límite de temperatura, quién lo mide, cómo se registra y qué se hace si no se cumple.",
    example: "Control de cocción de pollo: se mide la temperatura interna con termómetro calibrado, se registra, y si no alcanza el límite, se continúa la cocción.",
    related: ["PEPS / FEFO", "Buenas prácticas de higiene"],
    refs: [{ name: "Codex Alimentarius — Principios generales de higiene de los alimentos (CXC 1-1969)", verify: false }]
  },
  {
    term: "Buenas prácticas de higiene", area: "hoteleria", aka: ["BPM", "BPH", "NOM-251", "Distintivo H"],
    meaning: "Requisitos básicos de higiene en la manipulación de alimentos: instalaciones, higiene del personal, control de plagas, limpieza y desinfección, manejo de residuos. Son la base sobre la que se apoya el HACCP.",
    application: "En México, la NOM-251-SSA1-2009 establece las prácticas de higiene para el proceso de alimentos, bebidas y suplementos alimenticios. El Distintivo H es un reconocimiento de la Secretaría de Turismo, avalado por la Secretaría de Salud, para establecimientos de alimentos y bebidas.",
    example: "Lavado de manos documentado, cuchillos y tablas diferenciados por color según el alimento, y registro de limpieza por área.",
    related: ["APPCC / HACCP", "PEPS / FEFO"],
    refs: [
      { name: "NOM-251-SSA1-2009 Prácticas de higiene para el proceso de alimentos, bebidas o suplementos alimenticios (DOF, 1 de marzo de 2010)", verify: false },
      { name: "Distintivo H — Secretaría de Turismo (requisitos y vigencia actuales a confirmar en la fuente oficial)", verify: true }
    ]
  },
  {
    term: "Food cost", area: "hoteleria", aka: ["costo de alimentos", "costo de mercadería vendida"],
    meaning: "Porcentaje de las ventas de alimentos que representa el costo de la mercadería: costo de los alimentos consumidos ÷ ventas de alimentos × 100.",
    application: "Se calcula por período con inventarios inicial y final. Un food cost mayor al estándar apunta a mermas, porciones excesivas, desperdicio, robo o recetas mal costeadas.",
    example: "Ejemplo ilustrativo: costo de alimentos del mes 3.000 y ventas de 10.000 → food cost 30%.",
    related: ["Escandallo", "Ingeniería de menú"]
  },
  {
    term: "Escandallo", area: "hoteleria", aka: ["receta estándar", "ficha técnica de receta"],
    meaning: "Ficha de un plato con ingredientes, cantidades, rendimiento, merma, costo por porción y método de preparación.",
    application: "Es la base del costeo y del control de porciones. Se actualiza cuando cambian los precios o los proveedores.",
    example: "El escandallo de una milanesa incluye gramos de carne limpios, merma de limpieza, pan, aceite y costo por porción.",
    related: ["Food cost", "Ingeniería de menú"]
  },
  {
    term: "Ingeniería de menú", area: "hoteleria", aka: ["menu engineering", "matriz estrellas caballos puzzles perros"],
    meaning: "Análisis que cruza popularidad y rentabilidad de cada plato y los clasifica en estrellas (populares y rentables), caballos de batalla (populares pero poco rentables), puzzles (rentables pero poco vendidos) y perros (ni populares ni rentables).",
    application: "Guía qué platos destacar, reformular, reposicionar o retirar de la carta.",
    example: "Un plato rentable pero poco pedido (puzzle) se mejora en su descripción o posición en la carta.",
    related: ["Food cost", "Escandallo"]
  },
  {
    term: "PEPS / FEFO", area: "hoteleria", aka: ["FIFO", "primero en entrar primero en salir", "primero que vence primero en salir"],
    meaning: "Reglas de rotación de stock. PEPS (FIFO): sale primero lo que entró primero. FEFO: sale primero lo que vence primero, aunque haya entrado después.",
    application: "FEFO es la regla para productos con vencimiento (alimentos, químicos). Se aplica ubicando y etiquetando con fecha para que el uso sea natural.",
    example: "En cámara fría, la leche con vencimiento más cercano se coloca adelante y se usa antes que el lote más reciente.",
    related: ["APPCC / HACCP", "Food cost"]
  },
  {
    term: "Dotación de personal", area: "hoteleria", aka: ["rostering", "ratio personal por habitación", "planilla de turnos"],
    meaning: "Cantidad y distribución de personal por turno y departamento, según la demanda esperada.",
    application: "Se arma con el forecast de ocupación y estándares de productividad. Debe cumplir la normativa laboral del lugar y respetar descansos.",
    example: "Con ocupación baja prevista, se reduce el refuerzo de camareras y se reorganiza la capacitación en esos días.",
    related: ["Forecast", "Productividad de limpieza"]
  }
);
