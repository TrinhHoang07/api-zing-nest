import { Controller, Get, Header, Response, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/test/file')
    getFile(@Response({ passthrough: true }) res): StreamableFile {
        res.set({
            'Content-Type': 'image/webp,image/apng',
        });

        console.log('J', join(process.cwd(), 'ok_test.jpg'));

        const file = createReadStream(join(process.cwd(), 'ok_test.jpg'));

        return new StreamableFile(file);
    }
}
