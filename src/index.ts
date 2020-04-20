import { withErrorHanlder } from './errors/errorHandler';
import { runCode } from './moreCode/code';

withErrorHanlder(runCode);