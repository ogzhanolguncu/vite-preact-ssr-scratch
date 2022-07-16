import render from "preact-render-to-string";
import { h } from "preact";
import { App } from "@/app";

export function AppSSR() {
  return render(<App />);
}
