export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (CEO = 1). Leave empty for normal ordering.",
      initialValue: 100,
      validation: (Rule) => Rule.required().integer().min(1),
    },
  ],
};
