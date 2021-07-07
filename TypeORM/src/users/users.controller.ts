import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {
    this.userService = userService;
  }

  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll();
    return Object.assign({
      data: userList,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const foundUser = await this.userService.findOne(+id);
    return Object.assign({
      data: foundUser,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }

  @Post()
  async saveUser(@Body() user: User): Promise<string> {
    await this.userService.saveUser(user);
    return Object.assign({
      data: { ...user },
      statusCode: 200,
      statusMsg: `saved successfully`,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    await this.userService.deleteUser(+id);
    return Object.assign({
      data: { userId: id },
      statusCode: 200,
      statusMsg: `deleted successfully`,
    });
  }
  
}