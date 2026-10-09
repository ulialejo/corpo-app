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
  ]
});
