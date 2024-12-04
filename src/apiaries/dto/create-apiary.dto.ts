import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateApiaryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    location?: string;

    @IsString()
    @IsOptional()
    description?: string;
}

export class UpdateApiaryDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    location?: string;

    @IsString()
    @IsOptional()
    description?: string;
}
