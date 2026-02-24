import { defineType, defineField } from "sanity";

export default defineType({
  title: "Tarjetas fijas en parte superior",
  name: "fixedCards",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "IDs de tarjetas fijadas en parte superior de landing page",
      };
    },
  },
  fields: [
    defineField({
      title: "Tarjetas fijadas",
      name: "cards",
      type: "array",
      of: [{ type: "number" }],
      validation: (Rule) =>
        Rule.max(3).error("Máximo de hasta 3 tarjetas fijadas"),
    }),
  ],
});
