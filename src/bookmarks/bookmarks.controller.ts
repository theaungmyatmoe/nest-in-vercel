import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { JwtAuthGuard } from '../auth/guard';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { GethUser } from '../auth/decorator';

@UseGuards(JwtAuthGuard)
@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Get()
  async getAllBookmarks(@GethUser('id') userId: number) {
    return this.bookmarksService.getAllBookmarks(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(
    @GethUser('id') userId: number,
    @Body() bookmarkDto: CreateBookmarkDto,
  ) {
    return this.bookmarksService.create(userId, bookmarkDto);
  }

  @Get(':id')
  async getBookmarkById(
    @GethUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookmarksService.getBookmarkById(userId, id);
  }

  @Patch(':id')
  async editBookmarkById(
    @GethUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() bookmarkDto: EditBookmarkDto,
  ) {
    return this.bookmarksService.editBookmarkById(userId, id, bookmarkDto);
  }

  @Delete(':id')
  async deleteBookmarkById(
    @GethUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookmarksService.deleteBookmarkById(userId, id);
  }
}
