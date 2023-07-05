import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsUrl()
  @IsOptional()
  readonly url?: string;

  @IsString()
  @IsOptional()
  readonly desc: string;
}
