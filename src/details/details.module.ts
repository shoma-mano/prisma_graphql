import { Module } from '@nestjs/common';
import { DetailService } from './detail.service';
import { DetailsResolver } from './details.resolver';

@Module({
  providers: [DetailsResolver, DetailService]
})
export class DetailsModule {}
