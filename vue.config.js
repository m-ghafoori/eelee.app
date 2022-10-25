module.exports = {
    pages: {
      index: {
        entry: "./src/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: "EELee App Design",
        chunks: ["chunk-vendors", "chunk-common", "index"],
      },
      portfolio: {
        entry: "./src/pages/portfolio/main.js",
        template: "public/index.html",
        filename: "portfolio.html",
        title: "EELee - Portfolio",
        chunks: ["chunk-vendors", "chunk-common", "portfolio"],
      },
      applications: {
        entry: "./src/pages/applications/main.js",
        template: "public/index.html",
        filename: "applications.html",
        title: "EELee - MineSweeper",
        chunks: ["chunk-vendors", "chunk-common", "applications"],
      },
      donate: {
        entry: "./src/pages/donate/main.js",
        template: "public/index.html",
        filename: "donate.html",
        title: "EELee - Donate Us",
        chunks: ["chunk-vendors", "chunk-common", "donate"],
      },
      order: {
        entry: "./src/pages/order/main.js",
        template: "public/index.html",
        filename: "order.html",
        title: "EELee - Order Now!",
        chunks: ["chunk-vendors", "chunk-common", "order"],
      },
      contact: {
        entry: "./src/pages/contact/main.js",
        template: "public/index.html",
        filename: "contact.html",
        title: "EELee - Contact Us",
        chunks: ["chunk-vendors", "chunk-common", "contact"],
      },
    }
  }
  