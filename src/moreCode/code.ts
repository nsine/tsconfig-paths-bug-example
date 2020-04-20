import { AppError } from "~/errors/classes";

export function runCode() {
  throw new AppError("FATAL", "Error message");
}
