import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarksService {
  constructor(private prismaService: PrismaService) {}

  async create(userId: number, bookmarkDto: CreateBookmarkDto) {
    return await this.prismaService.bookmark.create({
      data: {
        ...bookmarkDto,
        user: { connect: { id: userId } },
      },
    });
  }

  async getAllBookmarks(userId: number) {
    return await this.prismaService.bookmark.findMany({
      where: { userId },
    });
  }

  async getBookmarkById(userId: number, id: number) {
    return await this.prismaService.bookmark.findFirst({
      where: { id, userId },
    });
  }

  async deleteBookmarkById(userId: number, id: number) {
    const bookmark = await this.prismaService.bookmark.findFirst({
      where: { id, userId },
    });
    if (!bookmark) {
      throw new ForbiddenException('Bookmark not found');
    }
    return await this.prismaService.bookmark.delete({
      where: { id },
    });
  }

  async editBookmarkById(
    userId: number,
    id: number,
    bookmarkDto: EditBookmarkDto,
  ) {
    return await this.prismaService.bookmark.update({
      where: { id },
      data: bookmarkDto,
    });
  }
}
