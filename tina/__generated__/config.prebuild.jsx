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
      },
      {
        name: "event",
        label: "Webinars & Events",
        path: "src/content/events",
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
            name: "eventType",
            label: "Event Type",
            required: true,
            options: [
              { value: "webinar", label: "Webinar" },
              { value: "customer-success-hour", label: "Customer Success Hour" },
              { value: "meet-up", label: "Meet-up" }
            ]
          },
          {
            type: "datetime",
            name: "eventDate",
            label: "Event Date & Time",
            required: true
          },
          {
            type: "number",
            name: "duration",
            label: "Duration (minutes)"
          },
          {
            type: "string",
            name: "youtubeId",
            label: "YouTube Video ID",
            description: "The part after v= in a YouTube URL. Leave empty for upcoming events with no recording yet."
          },
          {
            type: "string",
            name: "registerUrl",
            label: "Registration URL",
            description: "Zoom registration link for upcoming events. Zoom auto-generates this per webinar."
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Custom Thumbnail",
            description: "Optional. If empty, the YouTube video thumbnail is used."
          },
          {
            type: "object",
            name: "speakers",
            label: "Speakers",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "Speaker" })
            },
            fields: [
              { type: "string", name: "name", label: "Name", required: true },
              { type: "string", name: "role", label: "Role / Title" },
              { type: "image", name: "avatar", label: "Avatar" }
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
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
