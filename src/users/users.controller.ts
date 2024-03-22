import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { CreateUserProfileDTO } from 'src/dto/create-userProfile.dto';
import { createUserPostDTO } from 'src/dto/create-userPost.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }

    @Post()
    createUser(@Body() createUserDTO: CreateUserDTO){
        return this.usersService.createUser(createUserDTO)
    }

    @Patch(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDTO: UpdateUserDTO){
        await this.usersService.updateUser(id, updateUserDTO)
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.usersService.deleteUser(id)
    }

    @Post(':id/profiles')
    createUserProfile(@Param('id', ParseIntPipe) id: number, @Body() createUserProfileDTO: CreateUserProfileDTO){
        return this.usersService.createUserProfile(id, createUserProfileDTO)
    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createUserPostDTO: createUserPostDTO){
        return this.usersService.createUserPost(id, createUserPostDTO)
    }
}
