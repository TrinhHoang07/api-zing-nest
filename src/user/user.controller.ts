import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Delete } from '@nestjs/common';
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

    @Get('/all')
    async getAllUsers() {
        return await this.userService.getAllUser();
    }

    @Delete('/delete')
    async deletById(@Body() data) {
        return await this.userService.deleteById(data.id);
    }
}
