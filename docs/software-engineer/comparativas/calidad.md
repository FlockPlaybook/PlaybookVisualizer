---
title: Calidad de los entregables — Comparativa
sidebar_label: Calidad de los entregables
sidebar_position: 2
---

# 📊 Calidad de los entregables — Evolución por instancia

> Cómo crece esta responsabilidad a lo largo de las instancias.

---

## Instancia 1

Replica lo aprendido en el training, a través del uso del framework, herramientas y estándares aprendidos, en el proyecto donde se desempeña.

**Ejemplos:**
- Escribir código siguiendo las guías de estilo y convenciones de la empresa.
- Utilizar linters y herramientas de análisis estático de código.
- Ejecutar pruebas automatizadas y revisar resultados bajo supervisión.
- Implementar pruebas unitarias con frameworks estándar con acompañamiento.
- Participar en revisiones de código (code reviews), proporcionando y recibiendo feedback.
- Documentar el código y las funcionalidades desarrolladas.
- Seguir prácticas de gestión de versiones (commit messages claros, uso de ramas).

---

## Instancia 2

Mantiene la calidad de sus entregables respetando los procesos del ciclo de desarrollo del proyecto. Realiza los cambios que se le requieren en las instancias de Code Review y hace las pruebas mínimas (casos comunes) necesarias para detectar posibles errores.

**Métricas:**
- PRs con no más de **14/17** pedidos de cambio en promedio.
- Rebotes de QA no mayores al **50%**.

**Ejemplos:**
- Front: Implementa correctamente el diseño a partir de los entregables de diseño.
- Backend: Implementa correctamente las interfaces acordadas con Frontend.
- Garantiza el mínimo de cobertura de testing necesario para sus pull requests.
- Consulta y busca entender las correcciones recibidas en code review.

---

## Instancia 3

Mantiene la calidad de sus entregables, velando por los estándares y buenas prácticas de su tecnología. Hace las pruebas mínimas necesarias (casos comunes y casos borde dentro del scope).

**Métricas:**
- PRs con no más de **6/8** pedidos de cambio en promedio.
- Rebotes de QA no mayores al **35%**.

**Ejemplos:**
- Toma los comentarios de sus PRs y los aplica en los siguientes (no repite el mismo error).
- Backend: documenta de manera completa los endpoints que desarrolla.
- Participa en code review interno aportando correcciones alineadas a funcionamiento y estándares.
- Realiza pruebas manuales y automáticas previo a generar un PR y previo al envío a QA.

---

## Instancia 4

Mantiene la calidad de sus entregables y hace las pruebas necesarias. Garantiza una correcta cobertura del código. Realiza desarrollos mantenibles velando por los atributos de calidad (adecuación funcional, eficiencia, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad, portabilidad, escalabilidad).

**Métricas:**
- PRs con no más de **5** pedidos de cambio en promedio.
- Rebotes de QA no mayores al **20%**.

**Ejemplos:**
- Front: Propone mejoras y da feedback constructivo al área de diseño.
- Backend: Propone mejoras y da feedback sobre interfaces con Frontend.
- Las pruebas cubren la mayoría de los casos borde y efectos secundarios posibles.
- Es code owner del proyecto en su tecnología y participa activamente del Code Review.

---

## Instancia 5

Mantiene la calidad de sus entregables y garantiza una correcta cobertura del código del equipo directo. Realiza CR interno y externo sobre mejoras en atributos de calidad. Está al tanto del estado técnico del proyecto y sus métricas. Propone y ejecuta iniciativas para la mejora continua.

**Ejemplos:**
- Front: Da feedback sobre la viabilidad de implementar diseños considerando tiempos y contexto.
- Garantiza que los endpoints del proyecto tengan correcta documentación.
- Vela por métricas de code review acordes a los valores del departamento.
- Da soporte para que los criterios de aceptación del equipo existan y sean precisos.
- Participa de instancias de Software Testing Plan, toma acciones concretas y cumple las mejoras.

---

## Instancia 6

Mantiene la calidad de sus entregables y se asegura de que el equipo trabaje bajo los mismos estándares. Garantiza una correcta cobertura del código del equipo directo. Hace CR interno y externo. Está al tanto del estado técnico y sus métricas. Propone y ejecuta iniciativas de mejora continua.

**Ejemplos:**
- Se asegura que el equipo tenga correctamente configuradas las herramientas de calidad (Linter, hooks, etc.).
- Se asegura que el proyecto tenga configurado un CI que valide calidad, compilación y testing.
- Está al tanto de las métricas de Jira y guía al equipo en las acciones a tomar.
- Front: Garantiza un mínimo de **90 puntos** en Web Vitals.
- Define y capacita los code reviewers del proyecto.
- Vela por métricas de code review y toma acciones para asegurar su cumplimiento.

---

## Instancia 7

Es un actor clave en la definición de los estándares de calidad y el estado de la tecnología. Es responsable por la calidad técnica de los proyectos donde participa a través del acompañamiento a los responsables y referentes directos. Coordina y tracciona las acciones detectadas y se asegura que proyectos en curso y futuros tengan una adecuada configuración de equipo, herramientas y tiempos.

**Ejemplos:**
- Lidera la definición de estándares de calidad del proyecto, justificándolos ante el cliente y considerando los estándares de su SubÁrea.
- Puede capacitar y delegar correctamente tareas de calidad, logrando que el equipo lleve adelante una visión unificada.
- Front: Capacidad de discernir una óptima estructura de proyecto y la necesidad de aplicar microfrontends.
