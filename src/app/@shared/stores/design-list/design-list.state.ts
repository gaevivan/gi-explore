import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { DesignRoute } from '@shared/enums/design-route.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

type StateType = KeyValueObject<DesignRoute>;

@State<StateType[]>({
  name: 'DesignListState',
  defaults: [
    {
      key: DesignRoute.palette,
      value: 'Палитра'
    },
    {
      key: DesignRoute.colormode,
      value: 'Тёмный режим'
    },
    {
      key: DesignRoute.components,
      value: 'Компоненты'
    }
  ],
})
@Injectable()
export class DesignListState {}
