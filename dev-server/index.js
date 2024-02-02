import express from "express";
import { renderPage } from "vike/server";
import { createServer } from "vite";
import { saveTranslationsFile } from "./saveTranslations.js";

startServer();

async function startServer() {
  const app = express();

  const viteDevMiddleware = (
    await createServer({
      server: { middlewareMode: true },
    })
  ).middlewares;
  app.use(viteDevMiddleware);

  app.post("/__translate", express.json(), async (req, res) => {
    const data = req.body;

    saveTranslationsFile(data.content);

    res.sendStatus(200);
  });

  app.get("*", async (req, res, next) => {
    const userAgent = req.headers["user-agent"];
    const acceptLanguage = req.headers["accept-language"];

    const pageContextInit = {
      urlOriginal: req.originalUrl,
      userAgent,
      acceptLanguage,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
      return next();
    } else {
      const { statusCode, headers } = httpResponse;
      headers.forEach(([name, value]) => res.setHeader(name, value));
      res.status(statusCode);
      httpResponse.pipe(res);
    }
  });

  const port = 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
