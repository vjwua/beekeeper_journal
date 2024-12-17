import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApiaryDto, UpdateApiaryDto } from './dto/create-apiary.dto';
import { Apiary } from './apiaries.entity';
import { Hive } from '../hives/hives.entity';

@Injectable()
export class ApiariesService {
  constructor(
    @InjectRepository(Apiary)
    private readonly apiariesRepository: Repository<Apiary>,
    @InjectRepository(Hive)
    private readonly hiveRepository: Repository<Hive>,
  ) {}

  async getAllApiaries(): Promise<Apiary[]> {
    return this.apiariesRepository.find({ relations: ['hive'] });
  }

  async getApiaryById(id: string): Promise<Apiary> {
    const apiary = await this.apiariesRepository.findOne({
      where: { id },
      relations: ['hive'],
    });
    if (!apiary) {
      throw new NotFoundException(`Apiary with ID "${id}" not found`);
    }
    return apiary;
  }

  async createApiary(createApiaryDto: CreateApiaryDto): Promise<Apiary> {
    const apiary = this.apiariesRepository.create(createApiaryDto);
    return this.apiariesRepository.save(apiary);
  }
  
  async updateApiary(id: string, updateApiaryDto: UpdateApiaryDto): Promise<Apiary> {
    const apiary = await this.getApiaryById(id);
    Object.assign(apiary, updateApiaryDto);
    return this.apiariesRepository.save(apiary);
  }
  
  async removeApiary(id: string): Promise<void> {
    const apiary = await this.getApiaryById(id);
    await this.apiariesRepository.remove(apiary);
  }  
}
