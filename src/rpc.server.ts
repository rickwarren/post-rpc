import { createServer } from "http";
import { createTwirpServer } from "twirpscript";
import { commentProtoHandler } from "./services/comment.service.ts";
import { postProtoHandler } from "./services/post.service.ts";
import { savedPostProtoHandler } from "./services/saved-post.service.ts";
import { notificationProtoHandler } from "./services/notification.service.ts";

const PORT = 8081;

const app = createTwirpServer([commentProtoHandler, postProtoHandler, savedPostProtoHandler, notificationProtoHandler]);

app.use(async (req, _ctx, next) => {
  if (req.method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "access-control-allow-origin": "*",
        "access-control-request-method": "*",
        "access-control-allow-methods": "*",
        "access-control-allow-headers": "*",
        "content-type": "application/json",
      },
      body: "",
    };
  }

  const { statusCode, headers, body } = await next();
  return {
    statusCode,
    body,
    headers: {
      "access-control-allow-origin": "*",
      ...headers,
    },
  };
});

createServer(app).listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`),
);