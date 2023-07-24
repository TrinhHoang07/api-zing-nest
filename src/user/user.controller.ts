import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './user-create.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createUser(@Body() data: UserCreateDto) {
        return await this.userService.createUser(data);
    }
}
