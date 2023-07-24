import { IsNotEmpty } from 'class-validator';

export class UserCreateDto {
    @IsNotEmpty({
        message: 'Name is required',
    })
    name: string;

    @IsNotEmpty({
        message: 'Password is required',
    })
    password: string;

    avatar: string;
}
