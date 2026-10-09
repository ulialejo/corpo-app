window.CORPO_DATA = window.CORPO_DATA || { categories: [], glossary: [] };

// Contenido operativo: ejemplos hipotéticos en MXN, salvo indicación contraria.
// Fuentes de consulta: CoStar/STR, https://www.costar.com/products/str-benchmark/resources/glossary
// Codex, https://www.fao.org/good-hygiene-practices-haccp-toolbox/haccp/introduction-to-haccp/
// USALI, https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging
// México, https://dof.gob.mx/normasOficiales/3980/salud/salud.htm
// Distintivo H, https://www.sectur.gob.mx/tramites-y-servicios/certificacion-turistica/distintivo-h/
// PMS, https://docs.oracle.com/en/industries/hospitality/opera-cloud/23.5/ocsuh/t_housekeeping_out_of_order.htm
// Químicos, https://www.osha.gov/sites/default/files/publications/OSHA3512.pdf

window.CORPO_DATA.categories.push({
  id: 'hoteleria',
  title: 'Hotelería',
  desc: 'Revenue, front office, housekeeping, alimentos y bebidas y estándares de operación hotelera.',
  topics: [
    {
      id: 'hoteleria-revenue', title: 'Revenue: pronóstico, contribución y riesgo',
      lessons: [
        {
          title: 'Tablero comparable: de ocupación a GOPPAR', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'Un puente entre demanda, precio y resultado operativo. Para comparar hoteles, cerrá primero la base: período, moneda, impuestos, cortesías y habitaciones-noche disponibles. Mostrá por separado ocupación comercial y ocupación física si las cortesías cambian la lectura.' },
            { h: 'Cómo se aplica', list: [
              'Ocupación comercial = habitaciones-noche vendidas / habitaciones-noche disponibles × 100. ADR = ingreso de habitaciones / habitaciones-noche vendidas.',
              'RevPAR = ingreso de habitaciones / habitaciones-noche disponibles = ADR × ocupación expresada como decimal.',
              'TRevPAR = ingresos operativos totales / habitaciones-noche disponibles. GOPPAR = GOP / habitaciones-noche disponibles.',
              'Usá ingresos sin impuestos indirectos; separá componentes de paquetes según la política contable. No deduzcas comisiones del ADR y luego lo compares con un ADR bruto.',
              'Documentá cómo tratás cierres y OOO. Reconciliá inventario físico, inventario del PMS y base del benchmark; no reduzcas el denominador para mejorar artificialmente el indicador.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: 20 habitaciones durante 30 noches generan 600 disponibles; 420 vendidas y MXN 630.000 de ingreso de habitaciones. Ocupación: 70%; ADR: MXN 1.500; RevPAR: MXN 1.050. Con ingresos totales de MXN 750.000 y GOP de MXN 180.000, TRevPAR = MXN 1.250 y GOPPAR = MXN 300.' },
            { h: 'Errores comunes', list: ['Sumar ingresos de restaurantes al numerador del ADR.', 'Promediar los ADR de varios hoteles sin ponderar por noches vendidas.', 'Comparar GOPPAR con caja disponible: deuda, inversiones y otros conceptos quedan fuera del GOP.'] },
            { h: 'Cómo se mide', p: 'Consolidá el grupo sumando numeradores y denominadores. Revisá semanalmente precio y demanda; analizá GOPPAR con el cierre contable del mismo período, evitando mezclar un GOP mensual con inventario diario.' }
          ], refs: [{ name: 'CoStar / STR Benchmark — Glossary', verify: false }]
        },
        {
          title: 'Pickup, pace y restricciones por fecha de estadía', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El forecast convierte reservas en libros y demanda pendiente en una expectativa por fecha, segmento y tipo de habitación. Pickup es el cambio entre cortes; pace compara la curva de reservas a igual anticipación. Una reserva nueva y una cancelación no deben confundirse con demanda neta adicional.' },
            { h: 'Paso a paso', list: [
              'Guardá cortes diarios de habitaciones-noche e ingreso on the books por fecha de estadía, canal, segmento y tarifa.',
              'Calculá pickup neto = reservas en libros hoy − reservas en libros en el corte anterior. Separá altas, cancelaciones y cambios de fecha.',
              'Compará pace a igual lead time y ajustá por día de semana, eventos, cierres y cambios de capacidad; no compares sólo la misma fecha calendario.',
              'Forecast de noches realizadas = noches en libros + altas futuras esperadas − cancelaciones y no-shows esperados. Tratá grupos tentativos por separado.',
              'Definí BAR y escalones por demanda y contribución. Usá minimum length of stay (MLOS) o closed to arrival (CTA) sólo tras simular el efecto sobre todas las noches.',
              'Separá FIT, corporativo y grupos del canal de compra: una OTA puede vender a distintos segmentos. Evaluá grupos por aporte neto y negocio desplazado.',
              'Registrá decisión, responsable y fecha de revisión. Un RMS recomienda; el equipo valida eventos, datos y excepciones.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: para una fecha había 12 habitaciones reservadas y ahora hay 15: pickup neto +3. Con 4 altas futuras y 2 bajas esperadas, forecast = 17. Un MLOS de 3 noches podría bloquear una reserva rentable de 2 noches; probá ambos escenarios antes de publicarlo.' },
            { h: 'Errores comunes', list: ['Tratar pickup negativo como falla del canal sin revisar modificaciones.', 'Aplicar CTA como si cerrara toda estadía: normalmente bloquea llegadas, no huéspedes que continúan.', 'Copiar la tarifa del competidor sin comparar producto, condiciones ni costos de adquisición.'] },
            { h: 'Cómo se mide', p: 'Medí error absoluto medio = suma de |forecast − noches realizadas| / fechas evaluadas. Separalo por horizonte y hotel. Para benchmarking, RGI = RevPAR propio / RevPAR del comp set × 100, con bases compatibles y un conjunto competitivo pertinente.' }
          ], refs: [{ name: 'CoStar / STR Benchmark — Glossary', verify: false }]
        },
        {
          title: 'Overbooking controlado y protocolo de walk', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El overbooking acepta reservas por encima de la capacidad vendible para compensar bajas probables. La media histórica de no-shows no es un cupo seguro: importa la probabilidad de que lleguen más huéspedes que habitaciones utilizables y el costo completo de reubicarlos.' },
            { h: 'Cómo se aplica', list: [
              'Reconciliá inventario por tipo, mantenimiento, extensiones de estadía y confirmaciones pendientes antes de autorizar sobreventa.',
              'Modelá escenarios de cancelación y llegada por segmento, garantía y anticipación. Simulá también cero bajas y cancelaciones correlacionadas de grupos.',
              'Compará contribución incremental esperada con costo esperado de walk: diferencia de tarifa, transporte, compensación, personal y deterioro de confianza.',
              'Definí límite por fecha y tipo, autoridad para cambiarlo y alertas. Si no hay alojamiento alternativo adecuado, el límite puede ser cero.',
              'Acordá contingencia con otro hotel; verificá accesibilidad, capacidad familiar, ubicación y servicios comprometidos. La pertenencia al mismo grupo no autoriza un traslado unilateral.',
              'Ante un walk, explicá y disculpate, confirmá la alternativa con el huésped, coordiná traslado y liquidación, y asigná seguimiento hasta resolver.',
              'Aplicá contratos, criterios no discriminatorios y compensaciones según la normativa y el procedimiento vigente de cada empresa/jurisdicción.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo simplificado: una venta adicional aporta MXN 1.200 antes del riesgo. Si la probabilidad de un walk fuera 20% y su costo total MXN 5.000, el costo esperado sería MXN 1.000. Los MXN 200 restantes no justifican automáticamente aceptar: falta valorar incertidumbre, servicio y capacidad real de reubicación.' },
            { h: 'Cómo se mide', p: 'Revisá walks por llegadas confirmadas, costo total por walk y errores del modelo. Registrá también sobreventa causada por fallas de sincronización; corregir esa falla es distinto de optimizar una política comercial.' }
          ], refs: [{ name: 'Condiciones contractuales y normativa local de alojamiento y protección al consumidor', verify: true }]
        }
      ]
    },
    {
      id: 'hoteleria-distribucion', title: 'Distribución, integraciones y reputación',
      lessons: [
        {
          title: 'Mapa de sistemas y conciliación de reservas', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'La distribución es una cadena de mensajes entre venta y operación. El PMS administra estadías y folios; el CRS centraliza reservas; el channel manager publica inventario, tarifas y restricciones; el motor vende en la web. El RMS calcula recomendaciones con datos que deben conciliarse.' },
            { h: 'Paso a paso', list: [
              'Definí la fuente autorizada de disponibilidad, tarifas y restricciones; documentá quién escribe cada dato para evitar actualizaciones que se pisan.',
              'Mapeá código de hotel, tipo de habitación, plan tarifario, ocupación, moneda, impuestos, paquetes y políticas en cada interfaz.',
              'Probá alta, modificación y cancelación de una reserva de prueba autorizada. Verificá identificadores y acuses en origen y destino.',
              'Conciliá diariamente reservas por ID externo, fechas, importe, moneda, huéspedes y estado; contrastá totales por fecha con detalle por reserva.',
              'Ante un mensaje pendiente, verificá si ya se procesó antes de reenviarlo. Evitá duplicados usando el identificador original.',
              'Si se cae una interfaz, congelá decisiones afectadas, controlá inventario con un registro único y confirmá el restablecimiento con una conciliación completa.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: una cancelación aparece en la OTA pero el PMS conserva la estadía. El recepcionista encuentra el mismo ID externo, registra la incidencia y sincroniza el estado tras validar el origen. No crea una segunda reserva ni libera inventario sin comprobar qué sistemas ya recibieron la baja.' },
            { h: 'Cómo se mide', p: 'Seguimiento por interfaz: mensajes fallidos, reservas sin correspondencia, tiempo hasta confirmación y diferencias de inventario. En hoteles pequeños, una planilla de excepciones con dueño y hora de resolución puede acompañar al PMS, pero no reemplazar su registro.' }
          ]
        },
        {
          title: 'Contribución por canal y paridad verificable', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'Una tarifa pública alta puede dejar menos contribución que una venta directa. Compará cada canal después de comisiones, promociones financiadas por el hotel, cobro y costo variable de servicio. La paridad depende del contrato y de la jurisdicción; no supongas una obligación universal.' },
            { h: 'Cómo se aplica', list: [
              'Construí un puente: ingreso de habitación sin impuestos − descuentos del hotel − comisión − costo de cobro − adquisición atribuible − costo variable de estadía.',
              'Separá modelo agencia, donde normalmente cobra el hotel, del modelo merchant, donde normalmente cobra el intermediario. Confirmá liquidación y base contractual de comisión.',
              'Auditá misma fecha, ocupación, habitación, moneda, impuestos, cancelación y beneficios; identificá tarifas móviles, de socios y paquetes.',
              'Revisá vigencia contractual y restricciones de paridad según la normativa y el procedimiento vigente de cada empresa/jurisdicción.',
              'Evaluá el desplazamiento: cerrar una OTA sólo conviene si la demanda alternativa recupera la contribución perdida. La venta directa también tiene costos.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: tarifa sin impuestos MXN 2.000; comisión hipotética 18% = MXN 360; cobro MXN 40; servicio variable MXN 300. Contribución: MXN 1.300. Una reserva directa de MXN 1.900 con adquisición MXN 100, cobro MXN 38 y el mismo servicio deja MXN 1.462.' },
            { h: 'Cómo se mide', p: 'Calculá contribución por noche y costo de adquisición / ingreso del canal. Conciliá factura de comisión contra estadías efectivas, cancelaciones cobradas, no-shows y condiciones del contrato; una tasa de comisión nominal no describe el costo total.' }
          ], refs: [{ name: 'Contratos de distribución y normativa aplicable a paridad tarifaria', verify: true }]
        },
        {
          title: 'Reseñas como circuito de recuperación y mejora', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'La reputación se gestiona conectando el relato del huésped con un caso operativo verificable. Responder públicamente sin resolver la causa deja activo el problema. El grupo necesita una taxonomía común y responsables locales para detectar fallas repetidas entre hoteles.' },
            { h: 'Paso a paso', list: [
              'Clasificá reseñas por hotel, fecha, área, severidad y causa; vinculá al caso interno sin publicar datos personales.',
              'Priorizá indicios de seguridad o inocuidad y escalalos por el protocolo vigente. No investigues situaciones sensibles en comentarios públicos.',
              'Respondé con reconocimiento concreto, disculpa cuando corresponda y canal privado. Evitá prometer hechos que no comprobaste.',
              'Asigná acción, responsable y fecha objetivo; confirmá con operación que la falla se corrigió.',
              'Solicitá opiniones de forma consistente, sin condicionar compensaciones a borrar críticas ni seleccionar sólo huéspedes satisfechos.',
              'Revisá semanalmente recurrencias; una queja de ruido puede necesitar mantenimiento, cambio de asignación o información previa a la venta.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: varias reseñas mencionan aire acondicionado ruidoso. Recepción identifica habitaciones afectadas y mantenimiento abre órdenes vinculadas. La respuesta reconoce la molestia; el cierre interno exige prueba del equipo y seguimiento del próximo huésped, no sólo marcar la reseña como contestada.' },
            { h: 'Cómo se mide', p: 'Medí tiempo de primera respuesta, tiempo de resolución y recurrencia por noches ocupadas. Compará puntajes dentro de la misma plataforma y escala; un promedio agregado sin volumen puede ocultar que un hotel tiene muy pocas opiniones.' }
          ]
        }
      ]
    },
    {
      id: 'hoteleria-front-office', title: 'Front office: estadía, cobro y control nocturno',
      lessons: [
        {
          title: 'Check-in y check-out con garantías y folios conciliados', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'El circuito de recepción conecta reserva, habitación, garantía y cuenta del huésped (folio). Una garantía de reserva no equivale a un pago: la preautorización retiene capacidad de compra; la captura realiza el cargo. Separá cargos personales, empresa y paquetes mediante reglas de ruteo documentadas.' },
            { h: 'Paso a paso', list: [
              'Antes de la llegada, revisá fechas, tarifa, inclusiones, depósitos, instrucciones de facturación y quién paga cada concepto. Confirmá crédito corporativo aprobado antes de rutear a cuentas por cobrar.',
              'En check-in, validá identidad y condiciones aceptadas según la normativa y el procedimiento vigente de cada empresa/jurisdicción. Explicá tarifa, extras y alcance de la garantía.',
              'Calculá cobertura pendiente = alojamiento y extras previstos − anticipos aplicables − cobertura vigente. Evitá sumar dos veces el mismo depósito o preautorización.',
              'Procesá la garantía en el medio autorizado; registrá referencia y estado en el PMS, sin copiar datos sensibles de tarjeta en notas. Entregá acceso sólo a una habitación liberada por housekeeping.',
              'Durante la estadía, revisá límites de crédito, extensiones y consumos sin ruteo. Toda corrección conserva motivo, usuario y autorización.',
              'Antes del check-out, incorporá consumos pendientes, contrastá comprobantes y presentá el folio. Separá errores de cargo de desacuerdos comerciales.',
              'Liquidá cada ventana del folio con su pagador, emití el comprobante correspondiente y gestioná la liberación de garantías residuales; no prometas un plazo bancario no confirmado.',
              'Cerrá la estadía, actualizá el estado de habitación y entregá pendientes al siguiente turno. Una deuda aprobada pasa al circuito de cobro; no desaparece al cerrar la reserva.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: alojamiento previsto MXN 6.000 y extras MXN 1.000; anticipo aplicable MXN 2.000 y preautorización vigente MXN 3.000. Faltan MXN 2.000 de cobertura prevista. Al salir, liquidá los consumos reales descontando el anticipo; una preautorización pendiente no se registra como dinero cobrado.' },
            { h: 'Cómo se mide', p: 'Medí folios corregidos después del check-out / folios cerrados, saldos sin garantía y diferencias entre PMS y adquirente. Segmentá el tiempo de atención por llegada individual, grupo y excepción para detectar el paso que genera espera.' }
          ], refs: [{ name: 'Políticas de garantías, protección de datos, facturación y medios de pago aplicables al alojamiento', verify: true }]
        },
        {
          title: 'Night audit: cierre de fecha operativa sin esconder diferencias', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'La auditoría nocturna (night audit) valida transacciones y estadías antes de avanzar la fecha operativa del PMS. Esa fecha puede diferir del día calendario. El cierre consolida ingresos, saldos y estadísticas; no convierte automáticamente ventas en efectivo ni reemplaza el cierre contable.' },
            { h: 'Paso a paso', list: [
              'Confirmá el corte de interfaces y registrá transacciones pendientes de POS, spa y otros puntos de venta. Coordiná qué operaciones pueden continuar durante el cierre.',
              'Resolvé llegadas pendientes, no-shows, salidas vencidas, cambios de habitación y discrepancias de ocupación con evidencia y permisos definidos.',
              'Revisá tarifas, cargos de habitación, paquetes, cortesías, descuentos, impuestos configurados y ruteos. No fuerces una tarifa para cuadrar el total.',
              'Conciliá por medio de pago: PMS contra caja, terminal/adquirente y depósitos identificados. Separá ventas, cobros, devoluciones y partidas en tránsito.',
              'Comprobá saldo final de folios = saldo inicial + cargos − créditos − pagos; documentá por separado transferencias entre cuentas y su efecto neto.',
              'Clasificá diferencias con importe, origen, responsable y vencimiento interno. Aplicá el procedimiento de excepción aprobado si alguna impide el cierre.',
              'Ejecutá el cierre autorizado una sola vez, verificá la nueva fecha y conservá reportes y trazabilidad. Tras una interrupción, comprobá qué etapas ya se procesaron antes de reintentar.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: folios iniciales MXN 40.000 + cargos MXN 25.000 − créditos MXN 1.000 − pagos MXN 30.000 = saldo final MXN 34.000. Un consumo POS de MXN 500 sin transmitir explica una diferencia, pero requiere recuperar el cargo con su ID original para evitar duplicarlo.' },
            { h: 'Errores comunes', list: ['Registrar un ajuste sin respaldo para que la diferencia llegue a cero.', 'Contabilizar la liquidación del adquirente como una segunda venta.', 'Confundir fecha de estadía, fecha operativa y fecha de acreditación bancaria.'] }
          ]
        },
        {
          title: 'Quejas en recepción: recuperación, autoridad y seguimiento', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'La recuperación del servicio convierte una queja en un caso con solución acordada, responsable y evidencia de cierre. Una compensación resuelve parte del impacto comercial; la falla operativa necesita una acción propia y seguimiento entre turnos.' },
            { h: 'Paso a paso', list: [
              'Escuchá, reconocé el impacto y registrá hechos, momento, habitación y resultado solicitado con acceso restringido a los datos necesarios.',
              'Evaluá urgencia: ante riesgos de seguridad o salud, activá el protocolo correspondiente según la normativa y el procedimiento vigente de cada empresa/jurisdicción.',
              'Proponé opciones realizables: reparación, cambio de habitación o alternativa de servicio. Confirmá disponibilidad antes de prometer.',
              'Aplicá la matriz interna de autoridad para descuentos y compensaciones; registrá aprobación y motivo en el folio cuando corresponda.',
              'Acordá cuándo volverás a contactar, asigná dueño del caso y comunicá el pendiente al siguiente turno.',
              'Verificá la solución con operación y con el huésped; registrá si acepta el resultado. Revisá recurrencias por causa, no sólo por empleado.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: un huésped reporta ruido del equipo de climatización. Recepción ofrece una habitación inspeccionada, coordina el traslado y abre una orden para el equipo. El siguiente turno confirma descanso y resultado; el descuento autorizado se registra aparte de la reparación.' },
            { h: 'Cómo se mide', p: 'Seguimiento por severidad: tiempo hasta primera acción, casos reabiertos / casos cerrados y compensaciones por causa. No cierres casos para cumplir un indicador cuando el huésped todavía espera una solución comprometida.' }
          ]
        }
      ]
    },
    {
      id: 'hoteleria-housekeeping', title: 'Housekeeping: liberación, lencería y capacidad',
      lessons: [
        {
          title: 'Del checkout a habitación inspeccionada y vendible', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'El ciclo de limpieza transforma una habitación usada en inventario listo para asignar. El estado de ocupación y el de limpieza son dimensiones distintas: vacante no significa limpia y limpia no significa inspeccionada. Los códigos y bloqueos deben mapearse a la configuración real del PMS.' },
            { h: 'Paso a paso', list: [
              'Conciliá salidas y ocupación con recepción. Investigá discrepancias sin asumir que una habitación aparentemente vacía está desocupada.',
              'Priorizá por hora prometida de llegada, tipo requerido y necesidades confirmadas. Aplicá el protocolo de acceso y no molestar antes de entrar.',
              'Retirá residuos y ropa usada, separá circuitos limpios y sucios y registrá objetos encontrados mediante el procedimiento de custodia.',
              'Limpiá y desinfectá con productos, diluciones, compatibilidades y tiempos de contacto autorizados. No mezcles químicos; aplicá seguridad según la normativa y el procedimiento vigente de cada empresa/jurisdicción.',
              'Reponé lencería y amenities, verificá funcionamiento visible y reportá defectos. Una falla crítica mantiene el bloqueo hasta liberación autorizada.',
              'Marcá limpieza terminada; inspección verifica baño, cama, superficies de contacto, inventario y defectos. Registrá retrabajo antes de liberar.',
              'Actualizá el PMS y confirmá recepción. Definí quién puede declarar fuera de orden o fuera de servicio y qué efecto tiene cada estado sobre el inventario vendible.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: una habitación está vacante y limpia, pero la inspección detecta una fuga. Se abre una orden y se mantiene bloqueada. Recepción asigna otra habitación liberada; terminar la limpieza no autoriza vender una unidad con una falla pendiente que compromete el uso.' },
            { h: 'Cómo se mide', p: 'Medí tiempo entre salida confirmada y liberación, aprobación en primera inspección = habitaciones aprobadas sin retrabajo / inspeccionadas × 100 y habitaciones prometidas no listas. Separá espera por mantenimiento del tiempo efectivo de limpieza.' }
          ], refs: [{ name: 'Fichas de datos de seguridad y procedimientos vigentes de limpieza y desinfección', verify: true }]
        },
        {
          title: 'Par levels y productividad ajustada por carga real', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El par de lencería expresa juegos completos necesarios para equipar una base definida de habitaciones. El par level objetivo cubre piezas en uso, lavado, traslado y reserva. No hay un número universal: depende del ciclo de lavandería, frecuencia de cambio, ocupación y pérdidas.' },
            { h: 'Cómo se aplica', list: [
              'Definí piezas por juego y por tipo de habitación. Stock objetivo por pieza = unidades instaladas + demanda durante reposición + reserva operativa calculada.',
              'Contá existencias utilizables por ubicación: pisos, habitaciones, lavandería y tránsito. Separá bajas, manchas y reparaciones para no inflar disponibilidad.',
              'Calculá necesidad de compra = máximo entre cero y stock objetivo − stock utilizable − entregas confirmadas a tiempo. Revisá plazos y estacionalidad.',
              'Planificá carga en minutos: salidas × tiempo estándar de salida + estadías × tiempo estándar de repaso + tareas especiales. Ajustá por tipo, estado y distancias.',
              'Horas requeridas = minutos de carga / 60. Contrastá con horas productivas disponibles, descontando pausas, capacitación y tareas indirectas sin duplicarlas.',
              'Calibrá tiempos con observación de trabajo seguro y calidad aprobada. No uses habitaciones por turno sin distinguir salidas, suites, repasos y retrabajos.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: 40 camas requieren 40 juegos instalados; reposición y reserva justifican otros 80: objetivo 120 juegos, equivalente a 3 par para esa base. Para 12 salidas de 35 minutos y 18 repasos de 20, la carga es 780 minutos, o 13 horas productivas, antes de tareas adicionales.' },
            { h: 'Cómo se mide', p: 'Medí minutos por habitación aprobada según tipo de tarea, faltantes de lencería y bajas por causa. Una productividad aparente mayor con más retrabajo o incidentes no demuestra mejora. Revisá también puntualidad de lavandería y cumplimiento de habitaciones listas.' }
          ]
        }
      ]
    },
    {
      id: 'hoteleria-alimentos-bebidas', title: 'Alimentos y bebidas: inocuidad y rentabilidad',
      lessons: [
        {
          title: 'HACCP: del diagrama de proceso al control verificable', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'HACCP analiza peligros significativos y controla los puntos críticos del proceso alimentario. Se apoya en buenas prácticas de higiene efectivas. Antes de aplicar sus siete principios, formá el equipo, describí producto y uso previsto, diagramá el proceso y confirmalo en la operación.' },
            { h: 'Cómo se aplica', list: [
              'Principio 1: analizá peligros biológicos, químicos y físicos por etapa; identificá los significativos y sus medidas de control.',
              'Principio 2: determiná los puntos críticos de control (PCC) mediante una evaluación fundamentada; no toda comprobación de cocina es un PCC.',
              'Principio 3: establecé límites críticos validados para cada PCC, adecuados al producto y al proceso.',
              'Principio 4: definí vigilancia: qué medir, cómo, con qué frecuencia y quién registra y actúa.',
              'Principio 5: definí acciones correctivas ante desviaciones, incluyendo control del proceso y disposición del producto afectado.',
              'Principio 6: validá el plan y establecé verificación de su funcionamiento: revisión de registros, observaciones y controles de instrumentos.',
              'Principio 7: mantené documentación y registros que permitan demostrar controles, desvíos y decisiones sobre lotes.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: el análisis identifica una cocción como PCC. Una medición incumple el límite validado: se retiene el lote, se identifica producto afectado y se ejecuta la acción aprobada. El supervisor verifica evidencia antes de liberar; completar el registro después del servicio no controla el peligro.' },
            { h: 'Errores comunes', list: ['Copiar límites de otro alimento sin validar producto, equipo y proceso.', 'Confundir vigilancia del turno con verificación independiente del sistema.', 'Liberar producto sin evidencia o suponer que recalentar siempre elimina el riesgo.'] },
            { h: 'Cómo se mide', p: 'Seguimiento por PCC: registros completos a tiempo, desviaciones, producto retenido y repetición de causas. Aplicá límites, disposición y escalamiento según la normativa y el procedimiento vigente de cada empresa/jurisdicción; esta lección no fija valores de inocuidad.' }
          ], refs: [{ name: 'Codex Alimentarius CXC 1-1969 — Principios generales de higiene de los alimentos, revisión 2022', verify: false }]
        },
        {
          title: 'Recepción, FEFO y evidencia para NOM-251 y Distintivo H', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'Las buenas prácticas sostienen la inocuidad desde la recepción hasta el servicio. FEFO (first expired, first out) prioriza el vencimiento más próximo entre lotes aptos. En México, la NOM-251-SSA1-2009 aborda prácticas de higiene; Distintivo H es un reconocimiento de SECTUR con aval de Salud, basado en NMX-F-605.' },
            { h: 'Paso a paso', list: [
              'Aprobá proveedores y especificaciones de compra. Al recibir, controlá integridad, identificación, lote, fechas y condiciones de transporte y temperatura según el producto.',
              'Rechazá o segregá lo no conforme; registrá motivo y decisión. Un descuento del proveedor no convierte un producto inseguro en aceptable.',
              'Ubicá lotes con FEFO, separá crudos y listos para consumo y protegé de contaminación cruzada. Etiquetá apertura y preparación conforme al procedimiento validado.',
              'Controlá higiene de manos, agua apta, superficies, utensilios, plagas y residuos. Definí responsables, registros y respuesta ante desvíos.',
              'Gestioná alérgenos desde receta y proveedor hasta comanda y servicio: verificá ingredientes, cambios y contacto cruzado; no prometas ausencia sin respaldo.',
              'Para NOM-251, contrastá instalaciones y prácticas con el texto aplicable. Para Distintivo H, la base es la NMX-F-605-NORMEX-2018; confirmá con SECTUR la lista de verificación y el proceso de evaluación vigentes.',
              'Cerrá hallazgos con evidencia de corrección y comprobá eficacia. Operá según la normativa y el procedimiento vigente de cada empresa/jurisdicción; el reconocimiento no sustituye obligaciones sanitarias.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: llega un lote cuyo vencimiento es anterior al de otro recibido ayer. Si cumple las condiciones de aceptación, se coloca primero en la secuencia FEFO. Un envase dañado del mismo despacho queda segregado con su lote identificado; rotar stock no reemplaza comprobar aptitud.' },
            { h: 'Cómo se mide', p: 'Medí rechazos por proveedor, mermas por vencimiento, registros omitidos y hallazgos reincidentes. Verificá trazabilidad seleccionando un lote y reconstruyendo recepción, almacenamiento y preparaciones de destino con los registros disponibles.' }
          ], refs: [
            { name: 'NOM-251-SSA1-2009 — Prácticas de higiene para el proceso de alimentos, bebidas o suplementos alimenticios (DOF 1/3/2010)', verify: false },
            { name: 'NMX-F-605-NORMEX-2018 — Manejo higiénico en el servicio de alimentos preparados para la obtención del Distintivo H (DOF 13/8/2019)', verify: false },
            { name: 'SECTUR / Secretaría de Salud — Distintivo H: requisitos y proceso de evaluación vigentes del programa', verify: true }
          ]
        },
        {
          title: 'Escandallo, food cost e ingeniería de menú', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'El escandallo convierte una receta estandarizada en costo por porción considerando rendimiento y merma. El food cost real muestra consumo del período; el teórico calcula lo esperado por ventas y recetas. La ingeniería de menú cruza popularidad y contribución para decidir sobre precio, receta y oferta.' },
            { h: 'Cómo se aplica', list: [
              'Documentá gramajes, unidad de compra, rendimiento, porciones y versión. Rendimiento = cantidad utilizable / cantidad comprada; costo por kg utilizable = precio por kg comprado / rendimiento decimal.',
              'Costo de receta = suma de cantidades utilizables × costos unitarios utilizables. Costo por porción = costo de receta / porciones vendibles; incluí guarniciones y componentes servidos.',
              'Consumo real = inventario inicial + compras netas + transferencias recibidas − transferencias enviadas − inventario final. Mantené igual perímetro, corte y criterio de valuación.',
              'Food cost % = costo de alimentos atribuible a ventas / ventas netas de alimentos × 100. Separá comidas de personal, cortesías y desperdicios con un puente desde consumo total; no ocultes pérdidas al reclasificar.',
              'Consumo teórico = suma de porciones vendidas × costo estándar de receta. Compará con consumo real comparable y explicá precio, mezcla, rendimiento, desperdicio y diferencias de inventario.',
              'Contribución unitaria del plato = precio neto − costo estándar de alimentos. Compará popularidad y contribución dentro de categorías comparables, con umbrales explícitos y período suficiente.',
              'Clasificá estrellas (alta/alta), caballos de batalla (alta popularidad/baja contribución), enigmas (baja/alta) y perros (baja/baja). Probá acciones considerando tiempo de cocina, capacidad, identidad y demanda.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: proteína a MXN 200/kg con rendimiento 80% cuesta MXN 250/kg utilizable. Una porción de 0,18 kg cuesta MXN 45; guarnición y salsa agregan MXN 15. Con precio neto MXN 200, food cost teórico = 30% y contribución = MXN 140, antes de personal y otros gastos.' },
            { h: 'Errores comunes', list: ['Dividir costo sin impuestos recuperables por precio con impuestos y comparar con otra base.', 'Llamar utilidad neta a la contribución del plato.', 'Retirar un plato sólo por porcentaje de costo sin evaluar aporte monetario, popularidad y cuello de botella de cocina.'] },
            { h: 'Cómo se mide', p: 'Revisá brecha real-teórico en dinero y puntos porcentuales, margen total por categoría y minutos del recurso limitante por plato. Actualizá escandallos ante cambios de proveedor, gramaje o precio; conservá la versión usada en cada comparación.' }
          ]
        }
      ]
    },
    {
      id: 'hoteleria-finanzas-estandares', title: 'Finanzas: USALI, resultado y presupuesto',
      lessons: [
        {
          title: 'USALI 12: estados departamentales y puente al GOP', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'USALI, Uniform System of Accounts for the Lodging Industry, organiza información financiera y operativa hotelera comparable. Su 12.ª edición revisada tiene fecha de adopción 1/1/2026. Es un marco de reporte sectorial: la contabilidad estatutaria y fiscal requiere su propia conciliación según jurisdicción.' },
            { h: 'Cómo se aplica', list: [
              'Mapeá cada cuenta contable a departamento, naturaleza y línea de reporte de la edición adoptada. Documentá reglas y responsables para evitar clasificaciones distintas entre hoteles.',
              'Prepará estados de departamentos operados: ingresos, costos de ventas cuando correspondan, personal y otros gastos atribuibles. Mostrá resultados de habitaciones y alimentos y bebidas por separado.',
              'Resultado departamental = ingresos del departamento − gastos departamentales. No distribuyas gastos comunes arbitrariamente dentro de este subtotal para alterar la comparación.',
              'GOP = resultado departamental total − gastos operativos no distribuidos. Confirmá el mapeo de cada rubro contra USALI 12 antes de publicar el reporte.',
              'Presentá los conceptos posteriores al GOP en las líneas que correspondan. No lo equipares a EBITDA, utilidad neta ni efectivo disponible.',
              'Conciliá ingresos con PMS y POS, personal con nómina, consumos con inventarios y gastos con provisiones del período. Devengar un gasto no implica haberlo pagado.',
              'Al migrar de edición, conservá un puente de reclasificaciones para comparativos. Validá el detalle de cuentas y schedules con el manual autorizado y el responsable contable.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo simplificado: habitaciones aporta MXN 700.000 y alimentos y bebidas MXN 200.000 de resultado departamental; no hay otros departamentos. Con gastos no distribuidos de MXN 350.000, GOP = MXN 550.000. Si el ingreso operativo total es MXN 1.500.000, margen GOP = 36,7%.' },
            { h: 'Errores comunes', list: ['Mover gastos entre departamentos para mejorar un margen sin cambiar la operación.', 'Comparar meses con provisiones incompletas o distinta clasificación.', 'Usar GOP para afirmar que alcanza la caja para deuda o inversiones.'] },
            { h: 'Cómo se mide', p: 'Mostrá margen departamental, margen GOP = GOP / ingresos operativos totales × 100 y diferencias de conciliación pendientes. Para comparar hoteles, explicitá período, moneda, alcance de operación y consistencia del mapeo contable.' }
          ], refs: [{ name: 'HFTP / AHLA — Uniform System of Accounts for the Lodging Industry (USALI), 12.ª edición revisada; adopción 1/1/2026', verify: false }]
        },
        {
          title: 'Presupuesto por drivers y análisis de flow-through', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'Un presupuesto por drivers conecta actividad prevista con ingresos, dotación y consumo. El forecast actualiza expectativas conservando el presupuesto aprobado como referencia. El flow-through mide cuánto del cambio de ingreso se convierte en cambio de GOP entre dos escenarios comparables.' },
            { h: 'Paso a paso', list: [
              'Proyectá habitaciones disponibles y vendidas por fecha y segmento. Ingreso de habitaciones = noches vendidas × ADR; identificá restricciones de capacidad y cierres.',
              'Modelá alimentos y bebidas por cubiertos × ticket neto, diferenciando huéspedes, clientes externos y banquetes. Evitá duplicar ingresos incluidos en paquetes.',
              'Separá costos variables, fijos y escalonados. Ligá amenities a noches ocupadas, alimentos a recetas y mezcla, y personal a carga y cobertura de turnos.',
              'Armá escenarios con supuestos explícitos de demanda, tarifa, insumos y capacidad. Presupuestá inversiones y caja en circuitos separados del resultado operativo.',
              'Compará real, presupuesto y forecast; usá presupuesto flexible al volumen real para separar desvíos de actividad de cambios de precio, consumo y eficiencia.',
              'Flow-through = (GOP actual − GOP base) / (ingresos actuales − ingresos base) × 100. Usá igual perímetro y política contable; con variación de ingreso cero no está definido.',
              'Si caen ingresos, mostrá por separado pérdida de ingreso y pérdida de GOP con una convención de signos explícita. Investigá mezcla, costos escalonados y eventos no recurrentes antes de fijar acciones.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: ingresos pasan de MXN 1.000.000 a MXN 1.200.000 y GOP de MXN 300.000 a MXN 380.000. Flow-through = 80.000 / 200.000 = 40%. El presupuesto esperaba GOP de MXN 400.000: hay una brecha de MXN 20.000 que requiere explicar mezcla, precios y gastos.' },
            { h: 'Errores comunes', list: ['Interpretar cualquier flow-through alto como eficiencia: puede haber gastos no provisionados.', 'Usar una meta universal sin considerar departamento, estacionalidad y capacidad.', 'Concluir sobre un cociente cuyo denominador es mínimo: mostrá también los cambios absolutos.'] }
          ]
        }
      ]
    },
    {
      id: 'hoteleria-mantenimiento-personal', title: 'Mantenimiento y personal: confiabilidad y ejecución',
      lessons: [
        {
          title: 'Preventivo, correctivo y órdenes de trabajo cerradas con evidencia', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'El mantenimiento preventivo programa tareas antes de la falla; el correctivo restaura una función perdida. Una orden de trabajo (OT) conecta activo, síntoma, prioridad, recursos y evidencia de restitución. Su cierre administrativo debe reflejar la condición real del equipo y del servicio.' },
            { h: 'Paso a paso', list: [
              'Inventariá activos con ubicación, responsable, criticidad y documentación. Priorizá por seguridad, impacto en huéspedes, continuidad y redundancia; no sólo por costo de reparación.',
              'Definí preventivos según fabricante, condición y experiencia registrada, además de obligaciones aplicables. Coordiná ventanas de intervención con recepción y operación.',
              'Al recibir una falla, abrí OT con activo, síntoma, hora, impacto y evidencia. Separá prioridad, plazo interno y estado: asignada, en trabajo, esperando repuesto o lista para verificar.',
              'Antes de intervenir, personal autorizado identifica energías peligrosas y aplica aislamiento, bloqueo y etiquetado (LOTO), control de energía almacenada y verificación de aislamiento según el procedimiento específico.',
              'Ejecutá con personal competente, repuestos adecuados y permisos cuando correspondan, según la normativa y el procedimiento vigente de cada empresa/jurisdicción. Apagar desde un mando no asegura aislamiento.',
              'Registrá causa, tarea, tiempos, repuestos y pruebas funcionales. La restitución de energía y entrega del equipo sigue el procedimiento autorizado; no improvises retiros de bloqueos.',
              'Obtené aceptación operativa y comunicá liberación de habitación o servicio. Si la falla se repite, vinculá las OT y analizá causa antes de repetir el mismo arreglo.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: una bomba presenta una fuga y existe otra unidad disponible. Operación confirma capacidad de respaldo; mantenimiento coordina aislamiento y reparación mediante OT. El cierre incluye prueba sin fuga y aceptación del servicio. Si falta un repuesto, la OT permanece pendiente con contingencia registrada.' },
            { h: 'Cómo se mide', p: 'Medí preventivos completados a tiempo / preventivos programados, horas de indisponibilidad y fallas repetidas por activo. MTTR = tiempo total de reparación / reparaciones; definí si incluye esperas y reportalas por separado para distinguir falta de repuestos de trabajo técnico.' }
          ], refs: [{ name: 'Control de energías peligrosas: bloqueo y etiquetado (LOTO), procedimiento por equipo y normativa local aplicable', verify: true }]
        },
        {
          title: 'Dotación por carga, cobertura y competencias', level: 'avanzado',
          sections: [
            { h: 'Qué es', p: 'La dotación combina volumen de trabajo, cobertura del servicio y habilidades necesarias por franja horaria. El promedio diario oculta picos de llegadas, desayunos y salidas. Una cantidad suficiente de horas no garantiza capacidad si están asignadas al turno o al perfil equivocado.' },
            { h: 'Cómo se aplica', list: [
              'Estimá demanda por intervalo: llegadas, salidas, habitaciones a limpiar, cubiertos y eventos. Incluí preparación, cierre y tareas no visibles al huésped.',
              'Convertí demanda en carga con tiempos observados y validados: horas de tarea = suma de unidades × minutos por unidad / 60.',
              'Calculá horas productivas por turno después de pausas y tareas indirectas. Evitá descontar una actividad que ya incluiste en la carga.',
              'Dotación por carga = redondeo hacia arriba de horas de tarea / horas productivas por persona. Contrastá con cobertura mínima y competencias; aplicá la restricción más exigente.',
              'Distribuí turnos según picos y superposiciones necesarias. Agregá cobertura de descansos, ausencias y formación usando datos propios, sin imponer un porcentaje universal.',
              'Validá descansos, jornadas y tareas autorizadas según la normativa y el procedimiento vigente de cada empresa/jurisdicción. La polivalencia requiere capacitación comprobada.',
              'Revisá diariamente demanda real y reasigná dentro de competencias. Si la capacidad no alcanza, escalá prioridades y compromisos de servicio en lugar de ocultar la cola de trabajo.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: 90 trámites de recepción requieren 8 minutos cada uno: 12 horas de carga. Con 6 horas productivas por persona, el cálculo da 2 personas. Si 45 trámites llegan en una misma hora, esa dotación diaria no alcanza para el pico: se necesita redistribuir cobertura o rediseñar el proceso.' },
            { h: 'Cómo se mide', p: 'Medí horas trabajadas por unidad atendida, esperas por franja, horas extra, tareas pendientes y calidad. Contrastá ahorro de horas con reclamos y retrabajo; reducir dotación sin revisar demanda puede trasladar el costo a otros departamentos.' }
          ], refs: [{ name: 'Normativa laboral y acuerdos aplicables a jornadas, descansos y funciones del personal hotelero', verify: true }]
        },
        {
          title: 'SOP y capacitación con demostración de competencia', level: 'intermedio',
          sections: [
            { h: 'Qué es', p: 'Un procedimiento operativo estándar (SOP) describe cómo ejecutar una tarea con controles y criterios de aceptación. Capacitar no es entregar el documento: la persona debe demostrar que puede trabajar y resolver excepciones dentro de su autoridad. El procedimiento cambia cuando cambia la operación.' },
            { h: 'Paso a paso', list: [
              'Elegí una tarea crítica o repetitiva. Definí disparador, alcance, responsable, recursos, pasos, controles y criterio de cierre.',
              'Incluí excepciones, condiciones para detener la tarea y a quién escalar. Adjuntá un checklist breve cuando ayude a evitar omisiones.',
              'Validá el SOP observando la tarea real con quien la ejecuta. Asigná dueño, versión, aprobación y fecha de revisión; retirá copias obsoletas.',
              'Enseñá con explicación, demostración y práctica supervisada. Usá escenarios de error, no sólo el recorrido ideal.',
              'Evaluá con observación y evidencia: ejecución correcta, registro y respuesta ante excepción. Si no cumple, reforzá y reevaluá antes de habilitar trabajo autónomo.',
              'Mantené una matriz persona-tarea con nivel de habilitación y refuerzos pendientes. Programá formación cuando cambien equipos, sistemas o procedimientos.',
              'Aplicá PDCA: planificá una mejora, probala, verificá resultados y estandarizá si funciona. Conservá trazabilidad del cambio y comunicá al siguiente turno.'
            ] },
            { h: 'Ejemplo práctico', p: 'Ejemplo ilustrativo: el SOP de check-out incluye una discrepancia de minibar. Durante la práctica, la recepcionista verifica el soporte, explica el cargo y solicita autorización si corresponde corregirlo. La evaluación exige dejar trazabilidad; memorizar la secuencia de pantallas no alcanza para aprobar.' },
            { h: 'Cómo se mide', p: 'Medí habilitaciones demostradas / personas asignadas a la tarea, errores posteriores y cumplimiento observado. Un registro de asistencia mide participación; la evidencia en operación permite evaluar competencia y eficacia de la capacitación.' }
          ], refs: [{ name: 'Ciclo PDCA — Planificar, Hacer, Verificar y Actuar', verify: false }]
        }
      ]
    },
  ]
});
