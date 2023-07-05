import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PingPongService } from './ping-pong.service';
import { CreatePingPongDto } from './dto/create-ping-pong.dto';
import { UpdatePingPongDto } from './dto/update-ping-pong.dto';

@Controller('ping-pong')
export class PingPongController {
  constructor(private readonly pingPongService: PingPongService) {}

  @Post()
  create(@Body() createPingPongDto: CreatePingPongDto) {
    return this.pingPongService.create(createPingPongDto);
  }

  @Get()
  findAll() {
    return this.pingPongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pingPongService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePingPongDto: UpdatePingPongDto) {
    return this.pingPongService.update(+id, updatePingPongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pingPongService.remove(+id);
  }
}
