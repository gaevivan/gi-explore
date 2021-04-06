import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { GameRoute } from '@shared/enums/game-route.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

type StateType = KeyValueObject<GameRoute>;

@State<StateType[]>({
  name: 'GameListState',
  defaults: [
    {
      key: GameRoute.hotcold,
      value: 'Горячо-холодно'
    }
  ],
})
@Injectable()
export class GameListState {}
