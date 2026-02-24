import { defineType, defineField } from "sanity";

export default defineType({
  title: "Materia",
  name: "materia",
  type: "document",
  preview: {
    select: {
      title: "nombre",
      carrera: "carrera.nombre",
      electiva: "esElectiva",
    },
    prepare({ title, carrera, electiva }) {
      return {
        title,
        subtitle: `${carrera || "?"} · ${
          electiva ? "Electiva" : "Obligatoria"
        }`,
      };
    },
  },
  fields: [
    defineField({
      title: "Nombre",
      name: "nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Carrera",
      name: "carrera",
      type: "reference",
      to: [{ type: "carrera" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Es electiva",
      name: "esElectiva",
      type: "boolean",
      description:
        "Indica si la materia es electiva u obligatoria de la currícula",
      initialValue: true,
    }),
    defineField({
      title: "Cuatrimestre",
      name: "cuatrimestre",
      type: "string",
      options: {
        list: [
          { title: "1er Cuatrimestre", value: "1er Cuatrimestre" },
          { title: "2do Cuatrimestre", value: "2do Cuatrimestre" },
          { title: "Anual", value: "Anual" },
        ],
      },
    }),
    defineField({
      title: "Nivel",
      name: "nivel",
      type: "number",
      description: "Año o nivel de la materia en el plan de estudios",
    }),
    defineField({
      title: "Créditos",
      name: "creditos",
      type: "number",
    }),
    defineField({
      title: "Horarios",
      name: "horarios",
      type: "text",
      description: "Días y horarios de cursado",
    }),
    defineField({
      title: "Tipo de aprobación",
      name: "tipoDeAprobacion",
      type: "string",
      options: {
        list: [
          { title: "Promoción Directa", value: "promocionDirecta" },
          {
            title: "Regular o Promoción Directa",
            value: "regularOPromocion",
          },
          { title: "Sólo Promoción Directa", value: "soloPromocion" },
        ],
      },
    }),
    defineField({
      title: "Instancias de evaluación",
      name: "instanciasDeEvaluacion",
      type: "text",
      description: "Descripción de las formas de evaluación",
    }),
    defineField({
      title: "Cursadas para cursar",
      name: "cursadasParaCursar",
      type: "array",
      of: [{ type: "reference", to: [{ type: "materia" }] }],
      description:
        "Materias que deben estar cursadas para poder cursar esta materia",
    }),
    defineField({
      title: "Aprobadas para cursar",
      name: "aprobadasParaCursar",
      type: "array",
      of: [{ type: "reference", to: [{ type: "materia" }] }],
      description:
        "Materias que deben estar aprobadas para poder cursar esta materia",
    }),
    defineField({
      title: "Aprobadas para rendir",
      name: "aprobadasParaRendir",
      type: "array",
      of: [{ type: "reference", to: [{ type: "materia" }] }],
      description:
        "Materias que deben estar aprobadas para poder rendir el final",
    }),
    defineField({
      title: "Área",
      name: "area",
      type: "reference",
      to: [{ type: "area" }],
      description: "Área académica a la que pertenece",
    }),
    defineField({
      title: "Docentes",
      name: "docentes",
      type: "string",
      description: "Nombres de los docentes separados por coma",
    }),
    defineField({
      title: "Comentarios",
      name: "comentarios",
      type: "text",
      description: "Comentarios y experiencias de estudiantes",
    }),
    defineField({
      title: "Planificación",
      name: "planificacion",
      type: "url",
      description: "Enlace al documento de planificación",
    }),
  ],
});
