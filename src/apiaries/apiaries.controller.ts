import { Controller, Delete, Get, Post, Param, Body, Render, Res } from '@nestjs/common';
import { ApiariesService } from './apiaries.service';
import { CreateApiaryDto, UpdateApiaryDto } from './dto/create-apiary.dto';
import { Apiary } from './apiaries.entity';
import { Response } from 'express';
  
@Controller('apiaries')
export class ApiariesController {
  constructor(private readonly apiariesService: ApiariesService) {}

  @Get()
  @Render('my_apiaries')
  async getApiaryListPage() {
    const my_apiaries = await this.apiariesService.getAllApiaries();
    return { my_apiaries };
  }

  @Get('/create_apiary')
  @Render('create_apiary') 
  async getApiaryCreatePage() {
    return {}; 
  }

  @Post('/create_apiary')
  async createApiary(
    @Body() createApiaryDto: CreateApiaryDto,
    @Res() res: Response,
  ) {
    await this.apiariesService.createApiary(createApiaryDto);
    return res.redirect('/apiaries');
  }

  @Get('/:id/update_apiary')
  @Render('update_apiary') 
  async getApiaryUpdatePage(@Param('id') id: string) {
    const apiary = await this.apiariesService.getApiaryById(id);
    return { apiary };
  }

  @Post('/:id/update_apiary')
  async updateApiary(
    @Param('id') id: string,
    @Body() updateApiaryDto: UpdateApiaryDto,
    @Res() res: Response,
  ) {
    await this.apiariesService.updateApiary(id, updateApiaryDto);
    return res.redirect('/apiaries');
  }

  @Get(':id/delete_apiary')
  async removeApiary(
      @Param('id') id: string, 
      @Res() res: Response,
  ) {
    await this.apiariesService.removeApiary(id);
    return res.redirect('/apiaries');
  }

  @Get(':id')
  getApiaryById(@Param('id') id: string): Promise<Apiary> {
    return this.apiariesService.getApiaryById(id);
  }
}
