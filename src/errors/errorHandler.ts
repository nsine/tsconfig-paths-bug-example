import { AppError } from './classes';

export function withErrorHanlder(func: Function) {
    try {
        func();
    } catch (e) {
        console.log('error thrown', e);

        if (e instanceof AppError) {
            console.log('instanceof works');
        } else {
            console.log('error is not instance of AppError!!');
        }

        const manualError = new AppError('FATAL2', 'Message');
        if (manualError instanceof AppError) {
            console.log('however this one works');
        }
    }
}