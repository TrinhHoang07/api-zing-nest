import { IsNotEmpty } from 'class-validator';

export class PlaylistCreateDto {
    @IsNotEmpty()
    name: string;

    description: string;
}
