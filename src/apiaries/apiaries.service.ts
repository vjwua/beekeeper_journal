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

  async findAll(): Promise<Apiary[]> {
    return this.apiariesRepository.find({ relations: ['hive'] });
  }

  async findOne(id: string): Promise<Apiary> {
    const apiary = await this.apiariesRepository.findOne({ where: { id }, relations: ['hive'] });
    if (!apiary) throw new NotFoundException(`Apiary with ID "${id}" not found`);
    return apiary;
  }

  async create(createApiaryDto: CreateApiaryDto): Promise<Apiary> {
    const { name, ...rest } = createApiaryDto;

    const hive = await this.hiveRepository.findOne({ where: { id: name } });
    if (!hive) throw new NotFoundException(`Apiary "${name}" not found`);

    const apiary = this.apiariesRepository.create({ ...rest, name });
    return this.apiariesRepository.save(apiary);
  }

  async update(id: string, updateApiaryDto: UpdateApiaryDto): Promise<Apiary> {
    const apiary = await this.findOne(id);
    Object.assign(apiary, updateApiaryDto);
    return this.apiariesRepository.save(apiary);
  }

  async remove(id: string): Promise<void> {
    const apiary = await this.findOne(id);
    await this.apiariesRepository.remove(apiary);
  }
}
