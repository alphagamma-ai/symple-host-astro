// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "category",
        label: "Categories",
        path: "src/content/categories",
        format: "yaml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji Icon",
            description: "Single emoji for the category card (e.g. \u{1F680})"
          },
          {
            type: "number",
            name: "order",
            label: "Sort Order"
          }
        ]
      },
      {
        name: "article",
        label: "Articles",
        path: "src/content/articles",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            description: "Must match a category slug (e.g. platform-guides)",
            required: true,
            options: [
              { value: "getting-started", label: "Getting Started" },
              { value: "platform-guides", label: "Platform Guides" },
              { value: "faqs", label: "FAQs" },
              { value: "messaging", label: "Messaging" }
            ]
          },
          {
            type: "string",
            name: "section",
            label: "Section (sub-group within category)",
            description: 'Optional sub-heading to group articles under on the category page (e.g. "Start here", "Set up your account")'
          },
          {
            type: "number",
            name: "sectionOrder",
            label: "Order within section",
            description: "Lower numbers appear first within the same section"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Last Updated"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
