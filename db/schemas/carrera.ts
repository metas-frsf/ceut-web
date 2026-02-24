import { defineType, defineField } from "sanity";

export default defineType({
  title: "Carrera",
  name: "carrera",
  type: "document",
  preview: {
    select: { title: "nombre" },
  },
  fields: [
    defineField({
      title: "Nombre",
      name: "nombre",
      type: "string",
      description: "Nombre de la carrera (ej: Civil, Sistemas)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Identificador URL-friendly generado a partir del nombre",
      options: { source: "nombre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
