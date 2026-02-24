import { defineType, defineField } from "sanity";

export default defineType({
  title: "Tarjetas móviles",
  name: "cards",
  type: "document",
  preview: {
    select: { title: "name", enabled: "enabled", id: "id" },
    prepare(selection) {
      const { title, enabled, id } = selection;
      return {
        title: title,
        subtitle: `ID: ${id} | ${enabled ? "Habilitada" : "Deshabilitada"}`,
      };
    },
  },
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      description:
        "Nombre interno de la tarjeta - No se muestra en la página, sólo en este editor.",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description:
        "Título de la tarjeta en vista de la página. No se muestra el título si se deja en blanco.",
    }),
    defineField({
      title: "ID",
      name: "id",
      type: "number",
      description: "Número identificador de la tarjeta. No se puede repetir.",
    }),
    defineField({
      title: "Enabled",
      name: "enabled",
      type: "boolean",
      description:
        "Determina si la tarjeta actual se muestra o no en la vista.",
    }),
    defineField({
      title: "Modifiable",
      name: "modifiable",
      type: "boolean",
      readOnly: true,
      description: "Determina si la tarjeta actual es o no modificable.",
    }),
    defineField({
      title: "Link",
      name: "link",
      type: "object",
      description:
        "Si lo posee, determina el enlace al que se redirecciona cuando se clickea en una tarjeta. Afecta a la tarjeta por completo, lo que implica que un link único puede asignarse en este nivel. Pueden asignarse varios links en texto en la sección 'Contenido'.",
      fields: [
        defineField({
          title: "Type",
          name: "type",
          type: "string",
          options: {
            list: [
              { title: "Interno", value: "internal" },
              { title: "Externo", value: "external" },
            ],
          },
        }),
        defineField({ title: "URL", name: "url", type: "string" }),
      ],
    }),
    defineField({
      title: "Icon",
      name: "icon",
      type: "string",
      description:
        "Enlace web a una imagen que corresponde al ícono que se mostrará en la tarjeta.",
    }),
    defineField({
      title: "CSS Classes",
      name: "class",
      type: "object",
      description: "Clases CSS para aplicar a la tarjeta",
      fields: [
        defineField({ title: "Title", name: "title", type: "string" }),
        defineField({ title: "Card", name: "card", type: "string" }),
        defineField({ title: "Content", name: "content", type: "string" }),
        defineField({ title: "Image", name: "image", type: "string" }),
      ],
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      description:
        "Contenido de la tarjeta. Cada parte del contenido se divide en una línea con Título y Descripción. Puede asignarse a la descripción un link, en caso de que sea necesario. Sino, se muestra como texto plano.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
              description: "Descripción de la fila de contenido",
            }),
            defineField({
              title: "Description",
              name: "description",
              type: "string",
            }),
            defineField({
              title: "Link",
              name: "link",
              type: "object",
              description:
                "Si lo posee, determina el enlace al que se redirecciona cuando se clickea en un link del contenido de la tarjeta",
              fields: [
                defineField({
                  title: "Type",
                  name: "type",
                  type: "string",
                  options: {
                    list: [
                      { title: "Interno", value: "internal" },
                      { title: "Externo", value: "external" },
                    ],
                  },
                }),
                defineField({ title: "URL", name: "url", type: "string" }),
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      title: "Footer",
      name: "footer",
      type: "object",
      description: "Campos relativos al pie de página de las tarjetas",
      fields: [
        defineField({
          title: "Separator",
          name: "separator",
          type: "boolean",
        }),
        defineField({ title: "Class", name: "class", type: "string" }),
        defineField({ title: "Content", name: "content", type: "string" }),
      ],
    }),
  ],
});
