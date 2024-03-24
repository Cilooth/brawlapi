import { AxiosResponse, AxiosResponseHeaders } from "axios";

export default class APIError extends Error {
  res: AxiosResponse;
  url: string | undefined;
  code: number;
  headers: any;
  reason: string;

  constructor(res: AxiosResponse, body: string) {
    super();
    this.res = res;
    this.url = res.config.url;
    this.code = res.status;
    this.headers = res.headers;

    this.reason = body.startsWith("{") && body.endsWith("}") ? JSON.parse(body).reason || body : body;

    this.message = `BrawlStars API Rejection\n\n${this.url}\n${body}`;
  }
}
