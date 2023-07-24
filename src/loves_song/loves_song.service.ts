import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoveSong } from './loves_song.entity';

@Injectable()
export class LoveSongService {
    constructor(@InjectRepository(LoveSong) private loveSong: Repository<LoveSong>) {}
}
