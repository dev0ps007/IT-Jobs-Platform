import { IsString, IsNotEmpty } from 'class-validator';
import { Trim } from 'class-sanitizer';
import { IsUniqueName } from '../../utils/validators/IsUniqueNameEmploymentType.validate';

export class CreateEmploymentTypeDto {
    @IsString()
    @Trim()
    @IsNotEmpty()
    @IsUniqueName()
    name: string;
}