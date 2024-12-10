import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateInspectionDto {
    @IsString()
    @IsNotEmpty()
    hiveId: string;

    @IsDateString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsString()
    @IsOptional()
    actions?: string;
}

export class UpdateInspectionDto {
    @IsDateString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsString()
    @IsOptional()
    actions?: string;
}