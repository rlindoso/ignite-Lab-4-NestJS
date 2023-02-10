import { Module } from '@nestjs/common';
import { PrismaService } from './pisma.service';

@Module({
  providers: [PrismaService],
})
export class DatabaseModule {}
