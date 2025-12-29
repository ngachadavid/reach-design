export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "firstSlide",
      title: "First Slide",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string", validation: Rule => Rule.required() },
        { name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: Rule => Rule.required() },
      ],
    },
    {
      name: "secondSlide",
      title: "Second Slide",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string", validation: Rule => Rule.required() },
        { name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: Rule => Rule.required() },
      ],
    },
    {
      name: "thirdSlide",
      title: "Third Slide",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string", validation: Rule => Rule.required() },
        { name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: Rule => Rule.required() },
      ],
    },
  ],
};
