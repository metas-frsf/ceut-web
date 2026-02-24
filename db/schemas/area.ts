import { defineType, defineField } from "sanity";

export default defineType({
  title: "Área",
  name: "area",
  type: "document",
  preview: {
    select: { title: "nombre", carrera: "carrera.nombre" },
    prepare({ title, carrera }) {
      return { title, subtitle: carrera || "Sin carrera" };
    },
  },
  fields: [
    defineField({
      title: "Nombre",
      name: "nombre",
      type: "string",
      description: "Nombre del área (ej: Estructuras, Ciencias Sociales)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Carrera",
      name: "carrera",
      type: "reference",
      to: [{ type: "carrera" }],
      description: "Carrera a la que pertenece esta área",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
