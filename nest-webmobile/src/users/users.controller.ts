import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users') // blablabla.com/users
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get() // blabla.com/user -> retornar todos os users
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id') // blabla.com/user/1 -> retornar o user com id = 1
    async findOne(@Param('id') id): Promise<User> {
        return this.usersService.findOne(id);
    }
    
    @Post()
    async create(@Body() userData: User): Promise<any> {
        return this.usersService.create(userData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        return this.usersService.update(userData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.usersService.delete(id);
    }
}
