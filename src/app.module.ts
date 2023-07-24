import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfigAsync } from './config/typeorm.config';
import { SongModule } from './song/song.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
        SongModule,
        AuthModule,
        UserModule,
        PlaylistModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
