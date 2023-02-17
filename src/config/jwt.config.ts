import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleAsyncOptions = {
    useFactory: () => {
        return {
            secret: '12345@@@@#2',
            signOptions: {
                expiresIn: '1d',
            },
        };
    },
};
