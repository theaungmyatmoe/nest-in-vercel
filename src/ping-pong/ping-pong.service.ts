import { Injectable } from '@nestjs/common';
import { CreatePingPongDto } from './dto/create-ping-pong.dto';
import { UpdatePingPongDto } from './dto/update-ping-pong.dto';

@Injectable()
export class PingPongService {
  create(createPingPongDto: CreatePingPongDto) {
    return 'This action adds a new pingPong';
  }

  findAll() {
    return `This action returns all pingPong`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pingPong`;
  }

  update(id: number, updatePingPongDto: UpdatePingPongDto) {
    return `This action updates a #${id} pingPong`;
  }

  remove(id: number) {
    return `This action removes a #${id} pingPong`;
  }
}
