import { Controller } from '@nestjs/common';
import { LoveSongService } from './loves_song.service';

@Controller('loves_song')
export class LoveSongController {
    constructor(private loveSongService: LoveSongService) {}
}
