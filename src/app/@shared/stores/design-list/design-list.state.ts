import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { Design } from '@shared/enums/design.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

type StateType = KeyValueObject<Design>;

@State<StateType[]>({
  name: 'DesignListState',
  defaults: [
    {
      key: Design.palette,
      value: 'Палитра'
    },
    {
      key: Design.colormode,
      value: 'Тёмный режим'
    }
  ],
})
@Injectable()
export class DesignListState {}
