export class AppError extends Error {
    public code: string;
  
    constructor(code: string, message?: string) {
      super(message);
      this.code = code;
  
      // Typescript workaround for proper extending error class
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }