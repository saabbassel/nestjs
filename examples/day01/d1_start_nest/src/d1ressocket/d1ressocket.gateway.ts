import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { D1ressocketService } from './d1ressocket.service';
import { CreateD1ressocketDto } from './dto/create-d1ressocket.dto';
import { UpdateD1ressocketDto } from './dto/update-d1ressocket.dto';

@WebSocketGateway()
export class D1ressocketGateway {
  constructor(private readonly d1ressocketService: D1ressocketService) {}

  @SubscribeMessage('createD1ressocket')
  create(@MessageBody() createD1ressocketDto: CreateD1ressocketDto) {
    return this.d1ressocketService.create(createD1ressocketDto);
  }

  @SubscribeMessage('findAllD1ressocket')
  findAll() {
    return this.d1ressocketService.findAll();
  }

  @SubscribeMessage('findOneD1ressocket')
  findOne(@MessageBody() id: number) {
    return this.d1ressocketService.findOne(id);
  }

  @SubscribeMessage('updateD1ressocket')
  update(@MessageBody() updateD1ressocketDto: UpdateD1ressocketDto) {
    return this.d1ressocketService.update(updateD1ressocketDto.id, updateD1ressocketDto);
  }

  @SubscribeMessage('removeD1ressocket')
  remove(@MessageBody() id: number) {
    return this.d1ressocketService.remove(id);
  }
}
