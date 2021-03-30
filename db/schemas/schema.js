// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Add your own types here
    {
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
        {
          title: "Name",
          name: "name",
          type: "string",
          description:
            "Nombre interno de la tarjeta - No se muestra en la página, sólo en este editor.",
        },
        {
          title: "Title",
          name: "title",
          type: "string",
          description: "Título de la tarjeta en vista de la página",
        },
        {
          title: "ID",
          name: "id",
          type: "number",
          description:
            "Número identificador de la tarjeta. No se puede repetir",
        },
        {
          title: "Enabled",
          name: "enabled",
          type: "boolean",
          layout: "checkbox",
          description:
            "Determina si la tarjeta actual se muestra o no en la vista",
        },
        {
          title: "Modifiable",
          name: "modifiable",
          type: "boolean",
          readOnly: "true",
          description: "Determina si la tarjeta actual es o no modificable",
        },
        {
          title: "Link",
          name: "link",
          type: "object",
          description:
            "Si lo posee, determina el enlace al que se redirecciona cuando se clickea en una tarjeta",
          fields: [
            {
              title: "Type",
              name: "type",
              type: "string",
              options: {
                list: [
                  { title: "Interno", value: "internal" },
                  { title: "Externo", value: "external" },
                ],
              },
            },
            { title: "URL", name: "url", type: "string" },
          ],
        },
        {
          title: "Icon",
          name: "icon",
          type: "string",
          description:
            "Enlace web a una imagen que corresponde al ícono que se mostrará en la tarjeta",
        },
        {
          title: "CSS Classes",
          name: "class",
          type: "object",
          description: "Clases CSS para aplicar a la tarjeta",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Card",
              name: "card",
              type: "string",
            },
            {
              title: "Content",
              name: "content",
              type: "string",
            },
            {
              title: "Image",
              name: "image",
              type: "string",
            },
          ],
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          description: "Contenido de la tarjeta",
          of: [
            {
              type: "object",
              fields: [
                {
                  title: "Title",
                  name: "title",
                  type: "string",
                  description: "Descripción de la fila de contenido",
                },
                {
                  title: "Description",
                  name: "description",
                  type: "string",
                },
                {
                  title: "Link",
                  name: "link",
                  type: "object",
                  description:
                    "Si lo posee, determina el enlace al que se redirecciona cuando se clickea en un link del contenido de la tarjeta",
                  fields: [
                    {
                      title: "Type",
                      name: "type",
                      type: "string",
                      options: {
                        list: [
                          { title: "Interno", value: "internal" },
                          { title: "Externo", value: "external" },
                        ],
                      },
                    },
                    { title: "URL", name: "url", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Footer",
          name: "footer",
          type: "object",
          description: "Campos relativos al pie de página de las tarjetas",
          fields: [
            { title: "Separator", name: "separator", type: "boolean" },
            { title: "Class", name: "class", type: "string" },
            { title: "Content", name: "content", type: "string" },
          ],
        },
      ],
    },
    {
      title: "Tarjetas fijas en parte superior",
      name: "fixedCards",
      type: "document",
      preview: {
        prepare(selection) {
          return {
            title: "IDs de tarjetas fijadas en parte superior de landing page",
          };
        },
      },
      fields: [
        {
          title: "Tarjetas fijadas",
          name: "cards",
          type: "array",
          of: [{ title: "ID", name: "id", type: "number" }],
          validation: (Rule) => [
            Rule.max(3).error("Máximo de hasta 3 tarjetas fijadas"),
          ],
        },
      ],
    },
  ]),
});
