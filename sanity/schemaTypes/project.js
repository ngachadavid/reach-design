export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text", // or "blockContent" if you want rich text
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Additional Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "video",
      title: "Video",
      type: "url",
      description: "Link to a video (YouTube, Vimeo, etc.)",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "noOfStories",
      title: "Number of Stories",
      type: "number",
    },
    {
      name: "siteArea",
      title: "Site Area (sqm)",
      type: "number",
    },
  ],
};
