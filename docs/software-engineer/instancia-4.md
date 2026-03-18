---
id: se-instancia-4
title: Instancia 4
sidebar_label: Instancia 4
sidebar_position: 4
---

# SE - Instancia 4

## Descriptor

| Dimensión | Descripción |
|---|---|
| **Complejidad** | Requiere análisis y resolución de problemas de complejidad creciente. Busca apoyo/valida soluciones con pares de mayor seniority antes de presentar la solución a su referente. Probablemente tiene algunas interacciones con clientes y/o el management de Flock. |
| **Autonomía** | Requiere mínima instrucción para tareas rutinarias e instrucción moderada para tareas nuevas. |
| **Impacto de las decisiones** | Las decisiones impactan en su propio trabajo y puede impactar en el trabajo de otros. |
| **Alcance** | Contribución individual y/o supervisión de procesos/equipo delimitado. |

## Responsabilidades

### Diseño e implementación de soluciones

Realiza un análisis de requerimientos de media/alta complejidad enfocándose en la implementación y en el diseño. Diseña e implementa funcionalidades completas de alta criticidad con seguimiento de un referente. Cuestiona y debate los diseños con los referentes del proyecto con el fin de entender las decisiones tomadas, argumentando su opinión y justificando con datos. Comprende las funcionalidades del equipo dentro de su tecnología, aportando su visión y comunicando los errores que pueda identificar.

> **Uso de herramientas de IA:** Utiliza herramientas de IA de forma consciente para mejorar su productividad, calidad de entregables y capacidad de análisis, evaluando críticamente sus resultados y validándolos antes de aplicarlos.

**Ejemplos:**
- Implementa efectivamente soluciones de complejidad media/alta, como por ejemplo:
  - Funcionalidades y componentes parte del core de negocio de la aplicación
  - Bug Fixing urgente y no trivial en producción
  - Implementaciones que requieren de investigación previa
  - Front/Mobile: Interacción con CMSs u otros servicios externos, OCRs, animaciones de dificultad intermedia
  - Backend: Endpoints complejos (websockets, polling, requests anidadas), Lambdas
- Además de implementar componentes específicos, implementa y diseña módulos como:
  - Flujos completos de ABMs
  - ABM complejos (ej: AMB de Presupuestos, Facturas o Clientes)
  - Flujos completos de Autenticación y Autorización
  - Integraciones complejas con servicios externos, como SAP, Salesforce, etc.
- Busca comprender las decisiones técnicas y de arquitectura tomadas por el referente y da feedback concreto al respecto de posibles mejoras.
- Para casos de mayor complejidad y criticidad altas, valida sus soluciones con un referente.
- Es consciente de las tareas del resto del equipo de su tecnología, haciendo propuestas y recomendaciones cuando lo ve necesario.
- Contempla correctamente todos los fail states, incluyendo errores críticos (500, excepciones en runtime, etc.) en el flujo de la aplicación.
- Utiliza el framework en que se especializa considerando la mejor herramienta del mismo para cada caso de uso.
- Identifica criterios de aceptación en los issues y cards del sprint en su tecnología de expertise y los estima.

### Calidad de los entregables

Mantiene la calidad de sus entregables y hace las pruebas necesarias para detectar posibles errores. Garantiza una correcta cobertura del código que desarrolla, a través de herramientas de testing, según el contexto del proyecto. Realiza desarrollos mantenibles orientándose y velando por los atributos de calidad.

> Se entiende por atributos de calidad: adecuación funcional, eficiencia de desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad, portabilidad, y escalabilidad, etc.

**Ejemplos:**
- Sus PRs significativos en promedio no cuentan con más de 5 pedidos de cambio en promedio.
- Su promedio de rebotes de QA no es mayor al 20%.
- Front: Propone mejoras y da feedback constructivo para el diseño recibido del área de diseño.
- Backend: Propone mejoras y da feedback constructivo sobre las interfaces acordadas con Frontend.
- Las pruebas que realiza cubren la mayor parte de los casos borde y efectos secundarios posibles que resulten de la implementación.
- Es code owner del proyecto en su tecnología y participa activamente del Code Review interno dando feedback constructivo.

### Metodología y mejora continua

Participa activamente de las ceremonias de la metodología del proyecto, comunicándose proactivamente. Se asegura que los procesos de desarrollo se cumplan acorde a lo estipulado dentro de su proyecto. Realiza CR de forma interna buscando dar una devolución sobre posibles mejoras en atributos de calidad o eventuales fallas o errores en el código. Da feedback a sus compañeros de trabajo en pos de ayudarlos con su crecimiento profesional.

**Ejemplos:**
- Define sus propias stories correctamente (criterios de aceptación, casos de prueba, etc.).
- Participa activamente en las ceremonias de SCRUM:
  - En la planning participa en la estimación y puede estimar cards de complejidad alta.
  - En las retrospectivas brinda su opinión y propone mejoras.
  - En los refinamientos aporta a la definición y el entendimiento de las tareas del equipo.
- Ocasionalmente puede liderar reuniones de estimación, planning o retrospectiva.
- Vela por el estado actualizado de las tareas de su equipo en Jira.
- Capacita a otros contribuidores sobre las tecnologías o frameworks que conoce a través de instancias formales (capacitaciones, trainings) e informales (pair programming).
- Da feedback constructivo tanto formal como informalmente, que ayuda a crecer en experiencia y dando puntos a trabajar.
- Comparte aprendizajes informal y formalmente: reuniones y calls para impartir conocimiento, capacitaciones, charlas técnicas, trainings.
- Consigue por sus propios medios los requerimientos faltantes en los issues que le corresponden.
- Da feedback reactivamente sobre el estado técnico del proyecto.

### Brinda un servicio de excelencia

Actúa ante las necesidades y pedidos de un cliente externo, interactuando si fuera necesario, para responder dudas o consultas.

**Ejemplos:**
- Participa en los deploys con los pedidos de su referente y es consciente del proceso de salida a producción.
- Interactúa con el cliente apoyándose con el cliente interno, contestando dudas e inquietudes de manera efectiva y profesional.
- Realiza el onboarding técnico de los nuevos miembros del equipo del proyecto donde trabaja.
