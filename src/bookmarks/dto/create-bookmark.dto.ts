import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateBookmarkDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsUrl()
  readonly url: string;

  @IsString()
  @IsOptional()
  readonly desc: string;
}
