export default {
  name: "project",
  title: "project",
  type: "document",
  fields: [
    {
      name: "proName",
      title: "proName",
      type: "string",
    },
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "backgroundImg",
      title: "backgroundImg",
      type: "string",
    },
    {
      name: "tech",
      title: "tech",
      type: "string",
    },
    {
      name: "addTech",
      title: "addTech",
      type: "string",
    },
    {
      name: "addTechList",
      title: "addTechList",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "proDescription",
      title: "proDescription",
      type: "string",
    },
    {
      name: "proHref",
      title: "proHref",
      type: "string",
    },
    {
      name: "liveDemo",
      title: "liveDemo",
      type: "string",
    },
  ],
};
