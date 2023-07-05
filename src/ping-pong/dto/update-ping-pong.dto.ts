import { PartialType } from '@nestjs/mapped-types';
import { CreatePingPongDto } from './create-ping-pong.dto';

export class UpdatePingPongDto extends PartialType(CreatePingPongDto) {}
