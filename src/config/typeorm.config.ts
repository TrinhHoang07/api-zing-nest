import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Playlist } from 'src/playlist/playlist.entity';
import { Song } from 'src/song/song.entity';
import { User } from 'src/user/user.entity';

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        console.log('db: ', configService.get<string>('DB_USERNAME', { infer: true }));
        console.log('port: ', configService.get('DB_PORT'));
        console.log('name: ', configService.get('DB_NAME'));
        console.log('host: ', configService.get('DB_HOST'));
        console.log('pass: ', configService.get('DB_PASSWORD'));

        return {
            type: 'mysql',
            host: configService.get<string>('DB_HOST'),
            port: parseInt(configService.get('DB_PORT')),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
            entities: [Song, User, Playlist],
            synchronize: true,
        };
    }
}

export const TypeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> =>
        TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService],
};
