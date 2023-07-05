import { Module } from '@nestjs/common';
import { PingPongService } from './ping-pong.service';
import { PingPongController } from './ping-pong.controller';

@Module({
  controllers: [PingPongController],
  providers: [PingPongService]
})
export class PingPongModule {}
