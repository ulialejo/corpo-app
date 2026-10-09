window.CORPO_DATA = window.CORPO_DATA || { categories: [], glossary: [] };
window.CORPO_DATA.categories.push({
  "id": "mineria-operacion",
  "title": "Minería: operación y proceso",
  "desc": "Lectura del plan minero, balance de materiales y coordinación de flota para quienes abastecen y administran la operación.",
  "topics": [
    {
      "id": "min-ciclo",
      "title": "Del proyecto al mineral entregado",
      "lessons": [
        {
          "title": "Traducir la etapa minera en necesidades de abastecimiento",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "El ciclo minero cambia la demanda y el riesgo de inventario. Exploración busca información; desarrollo habilita accesos e infraestructura; explotación extrae; procesamiento recupera productos; cierre gestiona obligaciones y riesgos posteriores."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Identificá etapa, frente, responsable y horizonte del pedido: campaña, construcción, operación o cierre.",
                "En cielo abierto ubicá banco, rampa y destino del material; en subterránea confirmá accesos, restricciones y coordinación con ventilación y servicios.",
                "Separá demanda recurrente de compras de proyecto; asigná centro de costo y equipo antes de emitir la solicitud.",
                "No equipares recurso con reserva: la conversión requiere evaluación técnica y factores modificadores, no solo una ley alta.",
                "Planificá devolución, preservación o disposición de sobrantes al terminar la campaña."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Una campaña termina y deja filtros sin consumir. El almacenero verifica compatibilidad con la flota permanente antes de transferirlos; conserva trazabilidad del proyecto original."
            },
            {
              "h": "Errores comunes",
              "p": "Comprar como consumo permanente una necesidad temporal; inferir reservas desde toneladas exploradas."
            },
            {
              "h": "Cómo se mide",
              "p": "Pedidos con etapa y centro de costo completos / pedidos totales × 100; valor inmovilizado al cierre de campaña."
            }
          ],
          "refs": [
            {
              "name": "JORC Code",
              "verify": true
            },
            {
              "name": "National Instrument 43-101 — Standards of Disclosure for Mineral Projects",
              "verify": true
            }
          ]
        },
        {
          "title": "Controlar ROM, ley y mezcla sin perder trazabilidad",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "ROM es mineral extraído previo al procesamiento. El despacho a stockpiles conserva origen, masa y calidad para formar mezclas. Ley de corte es un criterio técnico-económico de clasificación; no es una constante universal."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Registrá origen, destino, pesaje, fecha, humedad y versión del dato de ley validado por geología.",
                "Separá toneladas húmedas y secas: t secas = t húmedas × (1 − fracción de humedad).",
                "Calculá ley de mezcla = Σ(t secas × ley) / Σ(t secas), usando la misma unidad de ley.",
                "Calculá strip ratio = toneladas de estéril / toneladas de mineral; declaralo si el sitio usa otra base.",
                "Conciliá stock inicial + entradas − salidas = stock final; explicá diferencias de topografía, balanza y corte horario."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Una mezcla de 600 t secas a 1,5 g/t y 400 t secas a 0,5 g/t tiene 1,1 g/t. Si se agregan 100 t de material sin metal, queda 1,0 g/t: la dilución reduce la ley."
            },
            {
              "h": "Errores comunes",
              "p": "Promediar leyes sin ponderar masa; mezclar humedad con ley seca; cambiar destinos sin aprobación de planificación."
            },
            {
              "h": "Cómo se mide",
              "p": "Cumplimiento de mezcla; diferencia entre masa despachada y recibida; dilución según la convención documentada del sitio."
            }
          ]
        }
      ]
    },
    {
      "id": "min-proceso",
      "title": "Proceso y contabilidad metalúrgica",
      "lessons": [
        {
          "title": "Leer el circuito para abastecer consumibles y repuestos",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "Chancado reduce tamaño; molienda libera especies minerales. Un SAG combina roca y bolas como medios de molienda; un molino de bolas usa bolas. Flotación separa por propiedades superficiales y produce concentrado y relaves; el circuito depende de la mineralogía."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Pedí diagrama de flujo aprobado y asociá cada equipo con su código y lista de materiales.",
                "Separá desgaste programado —revestimientos, mallas— de repuestos de falla y reactivos.",
                "Para un circuito de flotación, seguí alimentación, concentrado y relaves; no supongas que toda planta usa el mismo proceso.",
                "Calculá metal contenido = masa seca × fracción de ley; para g/t, masa en t × ley da gramos.",
                "Recuperación (%) = metal en producto / metal en alimentación × 100; compará períodos con inventarios conciliados."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Con 1.000 t secas al 1% de metal ingresan 10 t de metal. Un concentrado de 40 t al 20% contiene 8 t: recuperación de 80%, sin variación de inventario."
            },
            {
              "h": "Errores comunes",
              "p": "Confundir ley del concentrado con recuperación; atribuir diferencias a pérdida antes de revisar muestreo e inventario en proceso."
            },
            {
              "h": "Cómo se mide",
              "p": "Cierre de balance = entradas − salidas − variación de inventario; consumo específico de bolas o reactivo por t procesada."
            }
          ],
          "refs": [
            {
              "name": "Metso — Basics in Minerals Processing",
              "verify": false
            }
          ]
        },
        {
          "title": "Lixiviación, cianuro y relaves: interfaces del administrativo",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "La lixiviación en pilas disuelve componentes de mineral apilado mediante soluciones controladas. La cianuración es una ruta para recuperar oro o plata en ciertos minerales. Relaves son residuos del procesamiento; no deben confundirse con estéril ni con todo residuo de lixiviación."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Identificá producto, lote, integridad de envase y HDS vigente antes de coordinar recepción de reactivos.",
                "Reservá descarga y almacenamiento para personal habilitado, con compatibilidad y contingencias definidas por especialistas.",
                "Ante envase dañado o fuga, detené la recepción, restringí acceso y activá respuesta del sitio; no improvises neutralización ni rescate.",
                "Conservá consumo, devoluciones y residuos por lote; reportá discrepancias sin ajustar para cerrar el saldo.",
                "Canalizá observaciones sobre soluciones o instalaciones de relaves al responsable técnico, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Llega un reactivo con etiqueta ilegible. Recepción no lo libera al stock utilizable; documenta el desvío y espera identificación y disposición del responsable autorizado."
            },
            {
              "h": "Errores comunes",
              "p": "Dar instrucciones químicas sin competencia; tratar la certificación de un código como reemplazo de permisos o procedimientos."
            },
            {
              "h": "Cómo se mide",
              "p": "Recepciones conformes; diferencias de balance de reactivos; desvíos con cierre verificado."
            }
          ],
          "refs": [
            {
              "name": "Código Internacional para el Manejo del Cianuro",
              "verify": true
            },
            {
              "name": "Global Industry Standard on Tailings Management (GISTM)",
              "verify": true
            }
          ]
        }
      ]
    },
    {
      "id": "min-flota",
      "title": "Flota, mantenimiento y producción",
      "lessons": [
        {
          "title": "Descomponer el ciclo de acarreo y las pérdidas",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "El ciclo incluye carga, viaje cargado, descarga, retorno y esperas definidas. El sistema de despacho asigna equipos a frentes y destinos según restricciones del plan, rutas y capacidad de recepción."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Acordá estados excluyentes: operando, espera operativa, disponible sin uso y mantenimiento; conservá marcas de tiempo.",
                "Ciclo total = suma de tiempos de sus fases; segmentá por ruta, equipo y turno.",
                "Producción teórica por hora = carga útil por viaje × 60 / minutos de ciclo; no es una meta si viola límites operativos.",
                "Compará tiempos reales con plan; verificá colas, caminos y disponibilidad de destino antes de pedir más camiones.",
                "Coordiná cambios de ruta y prioridad con despacho, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Con carga ilustrativa de 90 t y ciclo de 30 minutos se estiman 180 t/h sin pérdidas adicionales. Si el ciclo incluye cola, no vuelvas a descontar esa misma espera."
            },
            {
              "h": "Errores comunes",
              "p": "Mezclar rutas; premiar velocidad por encima de seguridad; sumar estados superpuestos."
            },
            {
              "h": "Cómo se mide",
              "p": "t por hora operativa; minutos de cola por ciclo; cumplimiento de destino y toneladas diarias (tpd)."
            }
          ]
        },
        {
          "title": "Disponibilidad, utilización y mantenimiento con una base común",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "Disponibilidad mecánica y utilización responden preguntas distintas. La primera mide tiempo apto frente al programado; la segunda, cuánto del tiempo apto se usa. Estas definiciones deben acordarse antes de comparar equipos o contratistas."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Con base local explícita: disponibilidad = (horas programadas − horas de mantenimiento) / horas programadas.",
                "Utilización sobre disponible = horas operativas / horas disponibles; publicá ambas bases y multiplicá por 100 para porcentajes.",
                "OEE = disponibilidad × rendimiento × calidad, con factores decimales. Definí producción ideal y producto conforme; si no existe calidad comparable, no inventes un OEE minero.",
                "Vinculá preventivo por calendario/horómetro, predictivo por condición y correctivo por falla a órdenes de trabajo.",
                "Prepará kits contra orden y equipo; identificá reparables, devolución de núcleos y repuestos pendientes antes de la parada."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: En 100 h programadas, 10 h de mantenimiento dejan 90 h disponibles; 72 h operativas dan 90% de disponibilidad y 80% de utilización sobre disponible. Con rendimiento 90% y calidad 95%, OEE sería 61,56%."
            },
            {
              "h": "Errores comunes",
              "p": "Cambiar denominadores entre informes; computar espera de repuesto como operación; usar OEE sin definir calidad."
            },
            {
              "h": "Cómo se mide",
              "p": "Cumplimiento de mantenimiento; horas detenidas por falta de material; MTTR = horas de reparación / reparaciones, con alcance constante."
            }
          ]
        }
      ]
    }
  ]
});
window.CORPO_DATA.categories.push({
  "id": "mineria-logistica-sso",
  "title": "Logística, campamentos y seguridad",
  "desc": "Procedimientos de depósito, servicios, transporte, seguridad y documentación para trabajar en sitios mineros de San Juan.",
  "topics": [
    {
      "id": "min-deposito",
      "title": "Depósito: movimiento físico y registro ERP",
      "lessons": [
        {
          "title": "Recepción, cuarentena y ubicación con trazabilidad",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "La recepción confirma identidad, cantidad y estado contra orden de compra y remito. Registrar llegada no equivale a liberar uso ni aprobar pago: esos estados deben distinguirse en el ERP/WMS."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Prepará turno de descarga, espacio, equipo habilitado y documentación antes de la llegada.",
                "Cotejá proveedor, OC, SKU, unidad, lote/serie, vencimiento y cantidad; registrá entregas parciales sin cerrar el saldo pendiente.",
                "Documentá faltantes o daños con evidencia; segregá material observado física y lógicamente.",
                "Liberá solamente con aceptación del responsable designado; el putaway asigna una ubicación compatible con peso, riesgo y condiciones de conservación.",
                "En Odoo o un ERP equivalente registrá origen, destino, cantidad, unidad, lote/serie, fecha, documento, usuario y estado; el flujo depende de la configuración.",
                "Conciliá OC, recepción aceptada y factura antes de autorizar el circuito de pago."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: La OC pide 12 filtros; llegan 10 y uno está dañado. Se documentan 10 recibidos, 9 aceptados y 1 en cuarentena; quedan 2 por entregar. Los 10 físicos no equivalen a 10 disponibles."
            },
            {
              "h": "Errores comunes",
              "p": "Validar toda la OC por recibir una parte; convertir cajas a unidades sin factor aprobado; ubicar cuarentena en stock libre."
            },
            {
              "h": "Cómo se mide",
              "p": "Recepciones sin desvíos / recepciones totales × 100; tiempo desde arribo hasta liberación y ubicación."
            }
          ]
        },
        {
          "title": "Picking, despacho y devolución contra orden de trabajo",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "El retiro de materiales debe asociar la salida física a un destino y una necesidad autorizada. Un kardex reconstruye entradas, salidas y saldo; un WMS además controla ubicaciones y tareas del almacén."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Reservá por orden de trabajo, equipo y centro de costo; verificá autorización y disponibilidad real.",
                "Aplicá FIFO por ingreso o FEFO por vencimiento según producto; excluí stock bloqueado y lotes incompatibles.",
                "Confirmá SKU, unidad, cantidad, lote/serie y ubicación durante picking; una sustitución requiere validación técnica.",
                "Entregá con identificación del receptor y registrá el movimiento en el corte correcto, evitando salidas informales.",
                "Recibí devoluciones con referencia al despacho; inspeccioná condición antes de reintegrar, reparar o segregar.",
                "Usá 5S para identificar ubicaciones, separar innecesarios y mantener recorridos; no cambies códigos sin actualizar el sistema."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Mantenimiento retira 4 rodamientos y devuelve uno sin abrir. El depósito vincula devolución y salida original, inspecciona y reintegra una unidad; el consumo neto es 3."
            },
            {
              "h": "Errores comunes",
              "p": "Cargar todo al centro de costo genérico; devolver usados como nuevos; confundir reserva con consumo."
            },
            {
              "h": "Cómo se mide",
              "p": "Exactitud de picking; salidas con trazabilidad completa; tiempo de preparación; devoluciones pendientes de inspección."
            }
          ],
          "refs": [
            {
              "name": "5S — organización y disciplina del puesto de trabajo",
              "verify": false
            }
          ]
        },
        {
          "title": "Inventario cíclico, IRA y ajustes con evidencia",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "El conteo cíclico verifica grupos durante la operación; el general cubre el alcance completo en un corte. La conciliación explica diferencias entre físico y sistema antes de autorizar ajustes."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Definí unidad de conteo: SKU–ubicación–lote/serie; fijá tolerancia documentada y alcance de IRA.",
                "Congelá movimientos del sector o controlalos con un corte trazable; hacé conteo ciego sin mostrar saldo teórico.",
                "Recontá diferencias con otra persona; revisá tránsito, unidades, devoluciones, ubicaciones y movimientos atrasados.",
                "IRA (%) = registros dentro de tolerancia / registros contados × 100; informá además diferencias absolutas en cantidad y valor.",
                "Clasificá causa, obtené aprobación independiente y registrá ajuste con evidencia; medí reincidencia.",
                "Contá con mayor frecuencia críticos, alto valor y ubicaciones con historial de errores."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: De 100 registros contados, 96 coinciden sin tolerancia: IRA de 96%. Un sobrante de 5 y un faltante de 5 no se cancelan como indicador de exactitud."
            },
            {
              "h": "Errores comunes",
              "p": "Ajustar para igualar sin investigar; permitir movimientos sin corte; confundir exactitud de registros con diferencia neta de unidades."
            },
            {
              "h": "Cómo se mide",
              "p": "IRA; valor absoluto ajustado; recurrencia por causa y ubicación; porcentaje de ajustes aprobados con soporte."
            }
          ]
        }
      ]
    },
    {
      "id": "min-plan-stock",
      "title": "Planificación de inventario y repuestos críticos",
      "lessons": [
        {
          "title": "Combinar ABC/XYZ, criticidad y obsolescencia",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "ABC prioriza valor anual consumido; XYZ clasifica variabilidad según reglas locales. Criticidad evalúa consecuencias de no disponer de un repuesto, redundancia y tiempo de reposición: un repuesto barato y casi inmóvil puede detener una planta."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Calculá valor anual consumido = unidades consumidas × costo unitario comparable; ordená y definí cortes ABC propios.",
                "Para demanda regular, coeficiente de variación = desvío estándar / media; definí bandas XYZ, sin umbrales universales.",
                "Para demanda intermitente analizá intervalos sin consumo y tamaño de retiros; no fuerces un modelo normal.",
                "Cruzá clasificación con consecuencia de falla, redundancia, proveedor y plazo total hasta sitio.",
                "Revisá intercambiabilidad técnica, preservación y vida remanente; segregá obsoletos con decisión documentada."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Un sello de bajo valor no se consume hace meses, pero es único para una bomba sin respaldo. Su criticidad justifica evaluar una unidad de seguro aunque sea clase C por consumo."
            },
            {
              "h": "Errores comunes",
              "p": "Eliminar lentos solo por rotación; fijar ABC por precio unitario; usar variabilidad con media cero."
            },
            {
              "h": "Cómo se mide",
              "p": "Faltantes críticos; valor sin movimiento; repuestos con preservación vigente; rotación = consumo valorizado del período / inventario promedio valorizado."
            }
          ]
        },
        {
          "title": "Punto de pedido y stock de seguridad para sitio remoto",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "El punto de pedido cubre consumo durante reposición más protección frente a incertidumbre. La decisión usa posición de inventario, no solo saldo físico. El plazo incluye compra, preparación, tránsito y recepción hasta disponibilidad."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Posición = stock utilizable + pedidos confirmados pendientes − demanda comprometida; evitá descontar dos veces reservas ya neteadas.",
                "Punto de pedido = demanda media por día × plazo medio en días + stock de seguridad.",
                "Con demanda diaria independiente, plazo fijo y aproximación normal: SS = z × σ diaria × √plazo. El z corresponde a un nivel de servicio de ciclo elegido.",
                "Si el plazo varía o hay cierres de ruta correlacionados, simulá escenarios con datos históricos y coordiná alternativas autorizadas.",
                "En revisión periódica, el máximo cubre plazo + intervalo de revisión; pedido = máximo − posición, ajustado a lotes y mínimos.",
                "Cobertura = stock utilizable / demanda media diaria; informá compromisos, vencimientos y riesgo de interrupción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Con demanda de 8 filtros/día, plazo de 10 días y seguridad de 24, el punto es 104. Si hay 70 utilizables, 40 pendientes confirmados y 20 comprometidos, la posición es 90: corresponde revisar reposición."
            },
            {
              "h": "Errores comunes",
              "p": "Usar días hábiles para demanda calendario; contar un pedido atrasado como seguro; prometer disponibilidad solo por cobertura promedio."
            },
            {
              "h": "Cómo se mide",
              "p": "Quiebres de stock; nivel de servicio definido como ciclos sin faltante o unidades atendidas, sin confundir ambas métricas; error de plazo."
            }
          ]
        },
        {
          "title": "EOQ y preparación de paradas sin sobrecomprar",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "EOQ estima un lote que equilibra costo de emitir pedidos y costo de mantener inventario. Supone demanda estable, reposición conocida y ausencia de restricciones que dominen la decisión; no determina por sí solo compras de repuestos críticos."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Usá EOQ = √(2DS/H): D es demanda anual en unidades; S, costo por pedido; H, costo anual de mantener una unidad.",
                "Incluí capital, almacenamiento y riesgo de deterioro en H; no confundas H con precio de compra.",
                "Compará resultado con envases, mínimos, transporte, vida útil y capacidad; documentá el lote viable.",
                "Para paradas, armá kits desde listas técnicas y órdenes aprobadas; separá reservado, faltante y disponible.",
                "Confirmá fechas de entrega antes de liberar la ventana de mantenimiento y conciliá sobrantes al cierre."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Con D = 1.200 unidades/año, S = 30 unidades monetarias/pedido y H = 2 unidades monetarias/unidad-año, EOQ ≈ 190 unidades. Si el envase es de 50, compará alternativas cercanas y restricciones."
            },
            {
              "h": "Errores comunes",
              "p": "Aplicar EOQ a demanda excepcional; omitir flete remoto; comprar el kit completo sin revisar reservas existentes."
            },
            {
              "h": "Cómo se mide",
              "p": "Kits completos antes de la parada; compras urgentes; costo total de reposición y posesión bajo supuestos explícitos."
            }
          ]
        }
      ]
    },
    {
      "id": "min-campamento",
      "title": "Campamentos, turnos y servicios",
      "lessons": [
        {
          "title": "Coordinar roster, transporte y camas liberadas",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "El roster vincula personas, turnos, traslados y alojamiento. FIFO/DIDO describe traslado aéreo o terrestre; un régimen como 14x14 describe días de trabajo y descanso, sujeto a acuerdos y reglas aplicables. Ninguno garantiza por sí solo control de fatiga."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Conciliá nómina autorizada, habilitaciones, inducción, manifiesto de traslado y alojamiento; restringí acceso a datos personales.",
                "Separá cama ocupada, reservada, sucia, en mantenimiento y liberada; no vendas capacidad que todavía no está habilitada.",
                "En hot-bedding, asigná uso sucesivo solo si está permitido, con separación de horarios, limpieza, ropa y condiciones de descanso verificadas.",
                "Coordiná contratistas, arribos tardíos y contingencia de ruta; registrá excepciones con responsable.",
                "Gestioná fatiga y adaptación a altura con salud ocupacional; no asignes tareas ante una restricción no resuelta, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Hay 80 camas, 8 en mantenimiento y 6 sucias: solo 66 están listas antes de descontar ocupadas y reservas. Un transporte adicional requiere liberación real o alojamiento alternativo aprobado."
            },
            {
              "h": "Errores comunes",
              "p": "Igualar camas físicas con disponibles; guardar diagnósticos en planillas de acceso; resolver fatiga únicamente con café."
            },
            {
              "h": "Cómo se mide",
              "p": "Ocupación = noches-cama ocupadas / noches-cama habilitadas × 100; también informá camas fuera de servicio y discrepancias de roster."
            }
          ],
          "refs": [
            {
              "name": "Gestión de fatiga, habitabilidad y trabajo en altura geográfica: requisitos aplicables al sitio",
              "verify": true
            }
          ]
        },
        {
          "title": "Controlar SLA de catering, limpieza, agua y mantenimiento",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "Un SLA convierte el contrato de servicios en compromisos verificables con alcance, plazo, método y responsable. Inocuidad necesita buenas prácticas y un plan HACCP validado; los límites operativos salen del plan del servicio, no de una cifra genérica."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Definí unidades: ración aceptada, habitación liberada, kg de ropa o ticket cerrado; evitá pagar duplicados.",
                "En catering verificá proveedor, lote, vencimiento y registros de cadena de frío según límites validados; segregá desvíos.",
                "En limpieza y lavandería controlá separación de circuitos, insumos, registros y aceptación por inspección.",
                "En agua, residuos y mantenimiento asigná responsables técnicos, registros, escalamiento y contingencias según la normativa y el procedimiento vigente de cada empresa/jurisdicción.",
                "Cruzá ocupación y raciones previstas con consumos; registrá desperdicio y reclamos sin exponer datos personales.",
                "Cerrá el mes con evidencia de aceptación, desvíos, acciones y validación del administrador del contrato."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Se solicitaron 500 raciones y se aceptaron 480 según el contrato: cumplimiento de 96%. El descuento o pago surge de lo pactado; no se deduce una penalidad automática de ese porcentaje."
            },
            {
              "h": "Errores comunes",
              "p": "Llamar punto crítico a cualquier control; aceptar temperaturas sin criterio validado; cerrar tickets sin verificar solución."
            },
            {
              "h": "Cómo se mide",
              "p": "Servicios aceptados en plazo / servicios exigibles × 100; costo por noche-cama ocupada; desperdicio por ración; reincidencia de reclamos."
            }
          ],
          "refs": [
            {
              "name": "Codex Alimentarius — CXC 1-1969, Principios generales de higiene de los alimentos (2022)",
              "verify": false
            }
          ]
        }
      ]
    }
  ]
});
