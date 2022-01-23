import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionResolver } from './option.resolver';
import { DetailService } from '../details/detail.service';

@Module({
  providers: [OptionResolver, OptionService, DetailService],
})
export class OptionModule {}
