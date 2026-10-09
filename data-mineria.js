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
              "name": "JORC Code, edición 2012 (vigente; el JORC Code 2026 está en proceso de finalización: confirmar edición en jorc.org)",
              "verify": true
            },
            {
              "name": "National Instrument 43-101 — Standards of Disclosure for Mineral Projects (vigente; las CSA propusieron en 2025 reemplazarlo: confirmar estado)",
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
              "name": "Código Internacional para el Manejo del Cianuro (International Cyanide Management Code), administrado por el ICMI",
              "verify": false
            },
            {
              "name": "Global Industry Standard on Tailings Management (GISTM, ICMM/PNUMA/PRI, 2020); se espera una versión consolidada: confirmar edición vigente",
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
window.CORPO_DATA.categories.push({
  "id": "mineria-procedimientos-sitio",
  "title": "Minería: controles, ambiente y trabajo en sitio",
  "desc": "Procedimientos operativos, responsabilidades y evidencia para coordinar trabajos mineros en Argentina y San Juan.",
  "topics": [
    {
      "id": "min-seguridad-procedimientos",
      "title": "Seguridad y salud: controles antes, durante y después",
      "lessons": [
        {
          "title": "Convertir el ATS y el permiso en controles de campo",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "El análisis de trabajo seguro (ATS/JSA) descompone una tarea en pasos, peligros y controles verificables. El permiso de trabajo autoriza un alcance bajo condiciones definidas; ambos deben reflejar el frente real, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Definí equipo, ubicación, alcance, cuadrilla e interferencias; recorré el frente con quienes ejecutarán la tarea.",
                "Aplicá la jerarquía de ISO 45001:2018, cláusula 8.1.2: eliminar; sustituir; controles de ingeniería y reorganización del trabajo; administrativos; EPP.",
                "Para cada paso del ATS registrá peligro, consecuencia, control, responsable y evidencia de que funciona; evaluá el riesgo residual con el método del sitio.",
                "Confirmá permisos específicos exigibles, aislamientos y coordinación de trabajos simultáneos; el emisor y el ejecutor verifican sus responsabilidades antes de autorizar.",
                "En la charla de inicio de turno revisá cambios, condiciones ambientales, fatiga, señales de detención y respuesta de emergencia; pedí que la cuadrilla explique los controles.",
                "Si cambia el alcance o falla un control, detené la tarea, dejá el sector seguro y revalidá ATS y permiso; al cerrar, documentá estado y entrega del área."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Se planifica mantenimiento bajo un sector con tránsito. La cuadrilla propone desviar físicamente la circulación y aislar el área; un cartel y un chaleco por sí solos no resuelven la exposición."
            },
            {
              "h": "Errores comunes",
              "p": "Copiar el ATS de ayer; confundir firma con comprensión; autorizar tareas simultáneas cuyos controles se anulan."
            },
            {
              "h": "Cómo se mide",
              "p": "Controles críticos verificados y conformes / controles críticos previstos × 100; tareas detenidas por cambios; reincidencias por control fallido."
            }
          ],
          "refs": [
            {
              "name": "ISO 45001:2018 — Sistemas de gestión de la seguridad y salud en el trabajo, cláusula 8.1.2",
              "verify": false
            }
          ]
        },
        {
          "title": "LOTO e inspección pre-uso: comprobar antes de liberar",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "El bloqueo y etiquetado (LOTO) controla energías peligrosas durante intervenciones. La inspección pre-uso decide si un equipo puede operar. Son barreras diferentes y requieren personal competente, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Antes del uso, verificá identificación del equipo y elementos del checklist aprobado: protecciones, mandos, frenos cuando correspondan, fugas, alarmas y estado de mantenimiento.",
                "Ante un defecto que compromete seguridad, retiralo de servicio, identificá la restricción y generá una orden; la liberación requiere aceptación técnica documentada.",
                "Para intervenir, el personal autorizado identifica todas las fuentes y energías acumuladas, incluidas gravedad, presión y alimentaciones alternativas; comunica la parada y aplica el procedimiento específico.",
                "Detené y aislá con dispositivos adecuados; aplicá bloqueo personal o esquema grupal aprobado y controlá energías residuales antes de verificar el aislamiento.",
                "La persona competente verifica el estado seguro mediante el método aprobado para cada energía; un pulsador de parada o una pantalla apagada no prueban aislamiento.",
                "Mantené protección continua en relevos y cambios de cuadrilla. Para restituir, comprobá integridad, retiro de personas y herramientas, gestión autorizada de bloqueos y aviso previo a energizar."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Una bomba detenida conserva presión en una línea. El permiso queda pendiente hasta que personal autorizado controle esa energía y verifique el aislamiento; depósito no entrega el equipo como disponible por verlo apagado."
            },
            {
              "h": "Errores comunes",
              "p": "Usar una etiqueta como sustituto automático del bloqueo; omitir energía acumulada; retirar un candado ajeno sin el procedimiento excepcional autorizado."
            },
            {
              "h": "Cómo se mide",
              "p": "Inspecciones realizadas antes del uso / usos sujetos a inspección × 100; defectos pendientes por criticidad; aislamientos auditados conformes."
            }
          ],
          "refs": [
            {
              "name": "Control de energías peligrosas (LOTO): procedimiento específico de aislamiento y restitución del sitio",
              "verify": true
            }
          ]
        },
        {
          "title": "Investigar incidentes y medir la eficacia de las barreras",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "La investigación reconstruye qué ocurrió, qué barreras fallaron y qué condiciones organizativas lo permitieron. Incluye incidentes sin lesión con potencial grave; combina aprendizaje y seguimiento, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Activá la respuesta, atendé a las personas y asegurá el área mediante personal competente; preservá evidencia sin interferir con el rescate ni exponerte.",
                "Registrá cronología, condiciones, versiones de procedimientos y testimonios por separado; distinguí hechos, inferencias e información pendiente.",
                "Analizá barreras ausentes o ineficaces, diseño, supervisión, mantenimiento y planificación; no cierres la causa en “error humano”.",
                "Asigná acciones según jerarquía de controles, con responsable, fecha interna y evidencia de cierre; comprobá eficacia en campo después de implementarlas.",
                "LTIFR = lesiones con tiempo perdido × 1.000.000 / horas trabajadas; fijá período, población y definición de lesión antes de comparar.",
                "TRIFR = lesiones registrables × 1.000.000 / horas trabajadas bajo la convención adoptada; incluye tratamiento médico y trabajo restringido. Documentá categorías y evitá contar el mismo caso varias veces.",
                "Combiná tasas con controles críticos conformes, exposición y acciones eficaces; publicá horas de contratistas junto con sus casos si integran el alcance."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Con 1 lesión con tiempo perdido y 200.000 horas, LTIFR = 5. Un trimestre sin lesiones puede conservar fallas en bloqueos: la tasa baja no demuestra que las barreras funcionen."
            },
            {
              "h": "Errores comunes",
              "p": "Premiar ausencia de reportes; sumar categorías superpuestas; cerrar acciones por compra de un dispositivo sin verificar su instalación y uso."
            },
            {
              "h": "Cómo se mide",
              "p": "Acciones con eficacia comprobada / acciones sometidas a revisión × 100; recurrencia; controles fallidos; LTIFR y TRIFR con denominador y convención visibles."
            }
          ],
          "refs": [
            {
              "name": "ISO 45001:2018 — Sistemas de gestión de la seguridad y salud en el trabajo",
              "verify": false
            },
            {
              "name": "LTIFR y TRIFR: criterios de clasificación y alcance de reporte de la empresa",
              "verify": true
            }
          ]
        }
      ]
    },
    {
      "id": "min-ambiente-comunidad",
      "title": "Ambiente y comunidad: del compromiso a la evidencia",
      "lessons": [
        {
          "title": "Traducir la evaluación ambiental en controles y residuos trazables",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "La evaluación de impacto ambiental (EIA) conecta línea de base, alternativas, impactos y medidas. El sistema de gestión ambiental mantiene esos compromisos en la operación. ISO 14001:2026 reemplaza la edición 2015; su certificación no reemplaza autorizaciones ambientales."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Convertí cada compromiso aplicable en una matriz con fuente, actividad, responsable, control, evidencia y frecuencia definida por la autoridad o el plan aprobado.",
                "Antes de modificar un camino, depósito o proceso, evaluá aspectos e impactos y consultá si requiere gestión ambiental adicional, según la normativa y el procedimiento vigente de cada empresa/jurisdicción.",
                "Usá ISO 14001:2026 para organizar aspectos ambientales, obligaciones de cumplimiento, objetivos, seguimiento y acciones correctivas; incorporá las condiciones climáticas relevantes al sitio.",
                "Para residuos, identificá origen y caracterización, segregá por compatibilidad y mantené rotulado, contención e inventario; evitá mezclar corrientes para simplificar retiros.",
                "Verificá habilitación y alcance del transportista y destinatario cuando corresponda; conciliá cantidad retirada, documento de traslado y constancia de recepción o tratamiento.",
                "Ante un desvío, contené mediante el procedimiento aprobado, notificá al responsable y conservá evidencia; revisá la causa antes de cerrar la acción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Un taller genera absorbentes contaminados. Ambiente define su clasificación y circuito; depósito registra recipientes, peso y destino. El remito del transportista queda abierto hasta recibir la evidencia de recepción correspondiente."
            },
            {
              "h": "Errores comunes",
              "p": "Tratar todos los residuos como domiciliarios; confundir retiro con disposición acreditada; ejecutar una ampliación porque ya existe una certificación ISO."
            },
            {
              "h": "Cómo se mide",
              "p": "Compromisos con evidencia vigente / compromisos exigibles × 100; masa de residuos por unidad de actividad; retiros sin cierre documental."
            }
          ],
          "refs": [
            {
              "name": "ISO 14001:2026 — Sistemas de gestión ambiental — Requisitos con orientación para su uso",
              "verify": false
            },
            {
              "name": "Ley 24.585 — Protección ambiental para la actividad minera (1995, modifica el Código de Minería)",
              "verify": false
            },
            {
              "name": "Requisitos de gestión y transporte de residuos aplicables en San Juan",
              "verify": true
            }
          ]
        },
        {
          "title": "Agua y relaves: balance, alertas y responsabilidades técnicas",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "El balance hídrico explica entradas, salidas y almacenamiento dentro de un límite definido. La gestión de relaves combina diseño, operación, vigilancia y respuesta durante todo el ciclo de vida; el GISTM es una referencia de gestión cuya aplicabilidad debe verificarse."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Definí límite del balance, período y unidades; distinguí captación externa, precipitación, descargas, evaporación, agua en productos y cambios de almacenamiento.",
                "Calculá residual = entradas − salidas − variación de almacenamiento; identificá mediciones y estimaciones, su incertidumbre y datos faltantes.",
                "Registrá recirculación por separado: un flujo interno no es nueva captación externa. Usá captación externa / toneladas procesadas como intensidad con base declarada.",
                "En relaves, vinculá registros de operación y vigilancia con responsables técnicos, instrumentos, inspecciones y umbrales del plan aprobado; no fijes límites genéricos.",
                "Ante una lectura o condición anómala, aplicá el plan de respuesta por niveles de alerta, preservá datos y escalá al responsable; no ajustes valores para cerrar el balance.",
                "Coordiná contingencias, comunicaciones aguas abajo y cierre con especialistas, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: En un circuito ilustrativo ingresan 1.000 m³, salen 850 m³ y el almacenamiento aumenta 120 m³: quedan 30 m³ sin explicar. El equipo revisa medidores y estimaciones antes de atribuir el residual a una fuga."
            },
            {
              "h": "Errores comunes",
              "p": "Duplicar agua recirculada; interpretar ausencia de alarma como prueba de estabilidad; modificar parámetros de una instalación de relaves sin autoridad técnica."
            },
            {
              "h": "Cómo se mide",
              "p": "Residual y su incertidumbre; captación externa por tonelada; disponibilidad de instrumentos; alertas atendidas según el plan; inspecciones con seguimiento cerrado."
            }
          ],
          "refs": [
            {
              "name": "Global Industry Standard on Tailings Management (GISTM, ICMM/PNUMA/PRI, 2020); se espera una versión consolidada: confirmar edición vigente",
              "verify": true
            }
          ]
        },
        {
          "title": "Cierre, licencia social y compromisos con la comunidad",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "El cierre se planifica durante la operación: define usos futuros, estabilidad, rehabilitación y seguimiento. La licencia social expresa aceptación y confianza cambiantes; no es un permiso administrativo. Los principios del ICMM y el Código del Cianuro aportan referencias voluntarias con alcances específicos."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Mantené un registro de compromisos con comunidades: origen, alcance, responsable, evidencia y estado; diferenciá propuestas de compromisos autorizados.",
                "Usá un mecanismo accesible de reclamos: recepción, evaluación, respuesta, seguimiento y revisión con la persona afectada; protegé datos y evitá represalias.",
                "Incorporá participación temprana sobre agua, tránsito y cierre; documentá desacuerdos y derivá obligaciones de consulta a especialistas según su aplicabilidad.",
                "Actualizá escenarios de cierre, inventario de instalaciones, costos estimados y criterios verificables de rehabilitación; coordiná cierre progresivo y seguimiento posterior.",
                "Para cianuro, verificá alcance y estado de certificación de operación, productor o transportista cuando sea pertinente; conservá evidencia contractual y de auditoría sin equipararla con cumplimiento legal total.",
                "Asigná obligaciones y decisiones a responsables competentes, según la normativa y el procedimiento vigente de cada empresa/jurisdicción; una donación no cancela un impacto pendiente."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Una comunidad reclama polvo del transporte. Relaciones comunitarias registra el caso, Operaciones revisa rutas y controles, y Ambiente verifica resultados. La respuesta vuelve al reclamante; la compra de insumos por sí sola no cierra el compromiso."
            },
            {
              "h": "Errores comunes",
              "p": "Medir confianza solo con gasto social; prometer empleo sin autorización; postergar el cierre hasta terminar la extracción; asumir que todo proveedor está cubierto por una certificación corporativa."
            },
            {
              "h": "Cómo se mide",
              "p": "Compromisos cumplidos con evidencia / compromisos exigibles × 100; recurrencia de reclamos; resultados de rehabilitación contra criterios aprobados; actualización de supuestos de costo de cierre."
            }
          ],
          "refs": [
            {
              "name": "ICMM — Mining Principles (10 principios y 39 expectativas de desempeño); confirmar edición vigente",
              "verify": true
            },
            {
              "name": "Código Internacional para el Manejo del Cianuro (International Cyanide Management Code), administrado por el ICMI",
              "verify": false
            },
            {
              "name": "Requisitos de cierre minero y participación comunitaria aplicables en San Juan",
              "verify": true
            }
          ]
        }
      ]
    },
    {
      "id": "min-marco-legal-argentino",
      "title": "Marco legal argentino: orientación y matriz de cumplimiento",
      "lessons": [
        {
          "title": "Separar derecho minero, inversión y autorización ambiental",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "La matriz legal organiza normas aplicables, responsables y evidencias sin convertir un resumen en asesoramiento jurídico. El Código de Minería, el régimen de inversiones y la protección ambiental responden a objetos distintos; la aplicabilidad se valida para el proyecto y su jurisdicción."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Identificá titular, actividad, etapa, ubicación y autoridad competente; registrá fuente oficial y fecha de revisión de cada referencia.",
                "Usá el Código de Minería como marco para revisar derechos y obligaciones mineras con el área legal; no deduzcas autorización operativa de la sola tenencia de un derecho.",
                "Tratá la Ley 24.196 de Inversiones Mineras como un régimen a evaluar con Legal y Tributario; no asumas beneficios por pertenecer al sector.",
                "Vinculá la Ley 24.585 de protección ambiental para la actividad minera con la documentación y decisiones ambientales aplicables al proyecto.",
                "Para San Juan, verificá procedimientos y autoridades provinciales; asociá cada obligación confirmada a un responsable, evidencia y condición que dispara su revisión.",
                "Antes de cambiar actividad o alcance contractual, pedí evaluación de aplicabilidad, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Una contratista recibe un pedido para abrir un acceso fuera del alcance previsto. Compras deriva el cambio a Operaciones, Ambiente y Legal; una orden de compra aprobada no demuestra que ese acceso esté autorizado."
            },
            {
              "h": "Errores comunes",
              "p": "Confundir régimen promocional con habilitación; usar una norma nacional como lista completa; copiar la matriz de otro proyecto sin revisar ubicación y actividad."
            },
            {
              "h": "Cómo se mide",
              "p": "Obligaciones evaluadas con evidencia / obligaciones identificadas × 100; cambios pendientes de revisión; registros sin fuente o responsable."
            }
          ],
          "refs": [
            {
              "name": "Código de Minería de la República Argentina",
              "verify": false
            },
            {
              "name": "Ley 24.196 — Inversiones Mineras (1993)",
              "verify": false
            },
            {
              "name": "Ley 24.585 — Protección ambiental para la actividad minera (1995, modifica el Código de Minería)",
              "verify": false
            },
            {
              "name": "Normativa minera y ambiental provincial de San Juan: aplicabilidad al proyecto",
              "verify": true
            }
          ]
        },
        {
          "title": "Organizar la evidencia de higiene, seguridad y riesgos del trabajo",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "La gestión de cumplimiento conecta prevención, condiciones de trabajo y cobertura de riesgos con evidencia verificable. La Ley 19.587 y el Decreto 249/2007 forman parte del marco preventivo minero; la Ley 24.557 organiza el sistema de riesgos del trabajo."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "En la matriz incluí Ley 19.587 y Decreto 249/2007. El Decreto 249/2007 es el reglamento específico de la minería; según su artículo 3, el Decreto 351/79 no se aplica a la actividad minera salvo las remisiones expresas de su Anexo I. El especialista confirma el alcance aplicable a cada actividad.",
                "El Decreto 249/2007 aprueba el Reglamento de Higiene y Seguridad para la actividad minera; traducí las obligaciones confirmadas en controles con responsables y registros.",
                "Revisá con especialistas la Ley 24.557, la cobertura correspondiente y las disposiciones aplicables de la SRT; diferenciá evidencia de cobertura de evidencia preventiva.",
                "Para ingreso y contratación, verificá documentación, competencias e inducción exigibles; la aceptación administrativa no habilita una tarea peligrosa por sí sola.",
                "Asigná circuitos de reporte e investigación de incidentes y derivación a responsables de salud y seguridad; restringí acceso a información médica.",
                "Mantené versiones y pendientes, según la normativa y el procedimiento vigente de cada empresa/jurisdicción; consultá modificaciones antes de afirmar vigencia o cumplimiento."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: La carpeta de un contratista contiene documentación de cobertura, pero no acredita la competencia requerida para la intervención. El administrador deja pendiente la habilitación de la tarea hasta la validación del responsable técnico."
            },
            {
              "h": "Errores comunes",
              "p": "Confundir documentación completa con trabajo seguro; divulgar diagnósticos; aplicar automáticamente reglas generales sin revisar el reglamento minero y normas complementarias."
            },
            {
              "h": "Cómo se mide",
              "p": "Requisitos aplicables con evidencia válida / requisitos evaluados × 100; brechas por criticidad; tareas habilitadas sin validación completa; acciones verificadas."
            }
          ],
          "refs": [
            {
              "name": "Ley 19.587 — Higiene y Seguridad en el Trabajo",
              "verify": false
            },
            {
              "name": "Decreto 351/79 — Reglamentación de la Ley 19.587 (en minería rige solo por las remisiones expresas del Anexo I del Decreto 249/2007)",
              "verify": false
            },
            {
              "name": "Decreto 249/2007 — Reglamento de Higiene y Seguridad para la actividad minera",
              "verify": false
            },
            {
              "name": "Ley 24.557 — Riesgos del Trabajo",
              "verify": false
            },
            {
              "name": "Superintendencia de Riesgos del Trabajo (SRT) — disposiciones aplicables a la actividad y al sitio",
              "verify": true
            }
          ]
        }
      ]
    },
    {
      "id": "min-transporte-peligrosos",
      "title": "Transporte y materiales peligrosos: liberación y custodia",
      "lessons": [
        {
          "title": "Preparar el viaje y sostener la cadena de custodia",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "La liberación del transporte reúne aceptación documental, condición de la carga y condiciones de viaje. La cadena de custodia identifica quién entregó, recibió y mantuvo control del material en cada transferencia, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Antes de contratar, confirmá producto, cantidad, envases y clasificación para transporte con personal competente; identificá ruta, jurisdicciones y restricciones aplicables.",
                "Armá una matriz documental según la carga: remito, identificación de lotes, información de seguridad y emergencia, habilitaciones, documentación del vehículo y del conductor y permisos cuando correspondan.",
                "Cotejá datos entre carga y documentos; verificá integridad de bultos, sujeción y compatibilidad con personal habilitado. Una diferencia no resuelta impide liberar el despacho.",
                "En cada transferencia registrá fecha, lugar, responsables, cantidades, condición y sellos si se utilizan; preservá el vínculo con el envío original.",
                "Confirmá recepción disponible, comunicaciones y contingencias de ruta. Los cambios de vehículo, ruta o punto de transferencia requieren evaluación y registro.",
                "Ante pérdida de custodia, daño o discrepancia, suspendé la aceptación o el movimiento afectado y escalá; no reemplaces documentos para ocultar el desvío."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Un envío llega con un sello distinto al registrado. Recepción documenta la diferencia y consulta los registros de transferencia; la coincidencia de peso no basta para demostrar integridad de la custodia."
            },
            {
              "h": "Errores comunes",
              "p": "Usar el remito como prueba de aptitud del transporte; aceptar un cambio de vehículo sin revisión; completar firmas de terceros retrospectivamente."
            },
            {
              "h": "Cómo se mide",
              "p": "Transferencias con trazabilidad completa / transferencias revisadas × 100; despachos retenidos por documentación; discrepancias de custodia sin resolución."
            }
          ],
          "refs": [
            {
              "name": "Normativa argentina de transporte de mercancías peligrosas: requisitos vigentes según carga, modo y jurisdicción",
              "verify": true
            }
          ]
        },
        {
          "title": "Usar HDS y SGA para decidir recepción y almacenamiento",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "La hoja de datos de seguridad (HDS) comunica peligros y medidas de manejo. El SGA/GHS organiza clasificación y comunicación mediante etiquetas y fichas; la Resolución SRT 801/2015 es una referencia argentina cuya aplicación vigente y modificaciones deben verificarse."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Verificá que la HDS corresponda al producto y formulación recibidos, sea legible y esté disponible para quienes manipulan la carga; cotejá etiqueta y proveedor.",
                "Revisá identificación de peligros, primeros auxilios, incendio, derrames, manejo, almacenamiento, exposición, estabilidad e información de transporte.",
                "Usá la Res. SRT 801/2015 como referencia de implementación laboral del SGA basada en su quinta edición revisada; validá modificaciones y requisitos actuales con Higiene y Seguridad.",
                "No deduzcas clasificación de transporte únicamente del pictograma laboral: pedí validación técnica de la información de transporte y del régimen aplicable.",
                "Ante etiqueta ilegible, HDS faltante o datos incompatibles, mantené el producto identificado como no liberado y consultá al responsable; evitá manipulación innecesaria.",
                "Capacitá sobre los controles del producto y acceso a información, según la normativa y el procedimiento vigente de cada empresa/jurisdicción; la HDS no sustituye evaluación de exposición ni procedimientos."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Llegan recipientes con un nombre comercial parecido al habitual, pero diferente concentración. El encargado solicita la HDS correspondiente y evaluación de almacenamiento antes de asignarles la ubicación anterior."
            },
            {
              "h": "Errores comunes",
              "p": "Archivar fichas sin vincularlas al SKU; usar una HDS de otra formulación; interpretar pictogramas como autorización de manipulación."
            },
            {
              "h": "Cómo se mide",
              "p": "Productos con HDS correspondiente y accesible / productos sujetos al control × 100; discrepancias etiqueta–HDS; recepciones bloqueadas correctamente."
            }
          ],
          "refs": [
            {
              "name": "Resolución SRT 801/2015 — Sistema Globalmente Armonizado (SGA/GHS); su cronograma fue modificado por las Res. SRT 3359/2015 y 155/2016: confirmar estado vigente",
              "verify": true
            }
          ]
        },
        {
          "title": "Diseñar compatibilidad de almacenamiento y respuesta a desvíos",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "La compatibilidad evita que una fuga, mezcla accidental o incendio combine sustancias que reaccionan peligrosamente. La ubicación se define por propiedades y condiciones del producto, no por orden alfabético ni por disponibilidad de espacio."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Construí con especialistas una matriz de compatibilidad desde HDS, cantidades y condiciones reales; asigná sectores y restricciones por producto.",
                "Evaluá segregación de ácidos y cianuros, oxidantes y combustibles, además de sustancias sensibles al agua; confirmá controles específicos, sin usar esta lista como diseño completo.",
                "Verificá que la contención secundaria no conecte productos incompatibles; validá materiales, capacidad, ventilación y protección contra incendio con los responsables técnicos.",
                "Controlá integridad, rótulo, accesos, contención y condiciones de conservación durante inspecciones; bloqueá ubicaciones que dejaron de cumplir su función.",
                "Frente a fuga o envase dañado, restringí acceso desde una posición segura, notificá y activá el plan. Solo personal entrenado y equipado interviene; no improvises neutralización.",
                "Liberá área y existencias después de evaluación autorizada y registro de disposición, según la normativa y el procedimiento vigente de cada empresa/jurisdicción."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Dos productos incompatibles ocupan estantes separados pero comparten un drenaje. La revisión detecta que una fuga podría reunirlos; el responsable rediseña la segregación y mantiene suspendida esa ubicación hasta validarla."
            },
            {
              "h": "Errores comunes",
              "p": "Asumir que envases cerrados eliminan incompatibilidad; compartir bandejas de contención; mover un recipiente con fuga sin evaluación y medios adecuados."
            },
            {
              "h": "Cómo se mide",
              "p": "Ubicaciones conformes con la matriz / ubicaciones inspeccionadas × 100; desvíos críticos abiertos; tiempo de restitución segura; reincidencias."
            }
          ],
          "refs": [
            {
              "name": "Hojas de datos de seguridad y matriz de compatibilidad aprobada para los productos del sitio",
              "verify": true
            },
            {
              "name": "Código Internacional para el Manejo del Cianuro (International Cyanide Management Code), administrado por el ICMI",
              "verify": false
            }
          ]
        }
      ]
    },
    {
      "id": "min-roles-trabajo-sitio",
      "title": "Roles y trabajo en sitio: relevo, decisiones y contratistas",
      "lessons": [
        {
          "title": "Entregar el turno y emitir un parte diario conciliado",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "El pase de turno transfiere el estado operativo y las restricciones a quien toma responsabilidad. El parte diario consolida producción, equipos, eventos y pendientes con un corte común; debe permitir reconstruir decisiones y diferencias."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Usá una estructura de relevo: personas y roles, equipos disponibles o restringidos, trabajos abiertos, permisos, aislamientos, condiciones de ruta y compromisos pendientes.",
                "El saliente informa ubicación, estado, riesgo y siguiente acción; el entrante confirma comprensión y acepta pendientes con responsable. Los bloqueos siguen su procedimiento específico de transferencia.",
                "Definí corte horario, unidades y fuente de producción, horas de equipos, combustible y movimientos; separá dato medido, estimado y pendiente.",
                "Conciliá balance: inicial + entradas − salidas = final. Identificá transferencias que cruzan el corte y conservá los documentos de origen.",
                "Registrá cada corrección con motivo, autor y versión; escalá restricciones según la normativa y el procedimiento vigente de cada empresa/jurisdicción antes de reiniciar tareas."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Un camión despacha antes del corte y arriba después. El parte lo deja en tránsito con identificación del viaje; el turno entrante confirma recepción. Así se evita registrar la misma tonelada dos veces o perderla entre turnos."
            },
            {
              "h": "Errores comunes",
              "p": "Entregar solo toneladas; informar un equipo aislado como disponible; corregir el cierre sin conservar la versión anterior."
            },
            {
              "h": "Cómo se mide",
              "p": "Pendientes aceptados con responsable / pendientes transferidos × 100; diferencias de balance sin explicar; correcciones posteriores al cierre; eventos omitidos en relevo."
            }
          ],
          "refs": [
            {
              "name": "Procedimientos del sitio para pase de turno, parte diario y transferencia de aislamientos",
              "verify": true
            }
          ]
        },
        {
          "title": "Resolver restricciones en reunión y confirmar mensajes por radio",
          "level": "intermedio",
          "sections": [
            {
              "h": "Qué es",
              "p": "La reunión operativa asigna decisiones sobre restricciones del plan. La comunicación por radio ejecuta coordinaciones breves mediante identificación y confirmación; un mensaje ambiguo debe aclararse antes de mover equipos o cambiar condiciones de trabajo."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Prepará la reunión con plan versus real, restricciones y estado de controles; convocá a Operaciones, Mantenimiento, Logística y especialistas según la decisión.",
                "Para cada restricción definí decisión, responsable, plazo interno y condición de liberación; registrá quién tiene autoridad para cambiar el plan.",
                "Antes de transmitir, usá el canal autorizado e identificá destinatario, emisor y ubicación; comunicá una instrucción concreta con equipo y destino inequívocos.",
                "Aplicá comunicación cerrada (closed-loop): el receptor repite lo crítico y el emisor confirma o corrige. Si no hay confirmación clara, no supongas autorización.",
                "Respetá prioridad y protocolo de emergencias, zonas sin cobertura y restricciones del sitio; comunicá solo cuando hacerlo sea seguro, según la normativa y el procedimiento vigente de cada empresa/jurisdicción.",
                "Pasá decisiones y novedades relevantes al registro del turno; una conversación por radio no reemplaza el permiso ni la liberación técnica."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Despacho indica a un camión esperar en un punto habilitado por cierre de acceso. El conductor repite equipo, punto y condición de espera; despacho confirma. La reunión asigna a Caminos la inspección y a Operaciones la decisión de reapertura."
            },
            {
              "h": "Errores comunes",
              "p": "Decir “avanzá” sin destinatario ni ubicación; confundir silencio con conformidad; cerrar una reunión sin responsables; divulgar información médica por radio."
            },
            {
              "h": "Cómo se mide",
              "p": "Acciones liberadas con evidencia / acciones comprometidas × 100; restricciones reiteradas; calidad de confirmación observada en comunicaciones críticas."
            }
          ],
          "refs": [
            {
              "name": "Procedimientos del sitio para comunicaciones por radio, emergencias y gestión de tránsito",
              "verify": true
            }
          ]
        },
        {
          "title": "Gestionar contratistas desde la movilización hasta la aceptación",
          "level": "avanzado",
          "sections": [
            {
              "h": "Qué es",
              "p": "La gestión de contratistas conecta alcance contractual, competencias, interfaces y aceptación del servicio. Compras administra condiciones; el dueño del trabajo valida la ejecución; especialistas definen controles dentro de sus atribuciones. La coordinación debe quedar explícita."
            },
            {
              "h": "Cómo se aplica",
              "list": [
                "Antes de movilizar, definí alcance, entregables, exclusiones, riesgos, equipos y personal; asigná quién autoriza, ejecuta, verifica y acepta.",
                "Validá documentación, competencias, inducción y medios para la tarea; acordá procedimientos de interfaz entre empresa y contratista, incluidos permisos, aislamiento y emergencias.",
                "En la reunión previa, revisá actividades simultáneas, accesos y dependencias; fijá puntos donde el trabajo requiere inspección o liberación antes de continuar.",
                "Controlá en campo resultados y barreras; documentá desvíos y suspendé actividades cuando los controles no estén disponibles, según la normativa y el procedimiento vigente de cada empresa/jurisdicción.",
                "Procesá cambios de alcance con evaluación técnica, de riesgos, costo y programación antes de ejecutarlos; no regularices informalmente trabajos adicionales.",
                "Aceptá el servicio contra evidencia: mediciones, inspecciones, entregables y pendientes acordados. Al desmovilizar, conciliá materiales, residuos, accesos y documentación final."
              ]
            },
            {
              "h": "Ejemplo práctico",
              "p": "Ejemplo ilustrativo: Un contratista pide reemplazar un equipo de izaje por otro disponible. El administrador registra el cambio y deriva su evaluación a responsables competentes; la urgencia contractual no constituye liberación técnica."
            },
            {
              "h": "Errores comunes",
              "p": "Confundir factura con aceptación; delegar coordinación por haber contratado especialistas; permitir sustituciones sin evaluar interfaces; cerrar contrato con residuos o pendientes sin responsable."
            },
            {
              "h": "Cómo se mide",
              "p": "Entregables aceptados a la primera / entregables presentados × 100; cambios ejecutados sin autorización; brechas de movilización; cierre de pendientes con evidencia."
            }
          ],
          "refs": [
            {
              "name": "ISO 45001:2018 — Sistemas de gestión de la seguridad y salud en el trabajo",
              "verify": false
            },
            {
              "name": "Requisitos legales y procedimientos del sitio para gestión de contratistas",
              "verify": true
            }
          ]
        }
      ]
    }
  ]
});
