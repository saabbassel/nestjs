import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { D1resService } from './d1res.service';
import { CreateD1reDto } from './dto/create-d1re.dto';
import { UpdateD1reDto } from './dto/update-d1re.dto';

@Controller('d1res')
export class D1resController {
  constructor(private readonly d1resService: D1resService) {}

  @Post()
  create(@Body() createD1reDto: CreateD1reDto) {
    return this.d1resService.create(createD1reDto);
  }

  @Get()
  findAll() {
    return this.d1resService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.d1resService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateD1reDto: UpdateD1reDto) {
    return this.d1resService.update(+id, updateD1reDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.d1resService.remove(+id);
  }
}
