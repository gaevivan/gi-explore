import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { ProjectRoute } from '@shared/enums/project-route.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

type StateType = KeyValueObject<ProjectRoute>;

@State<StateType[]>({
  name: 'ProjectListState',
  defaults: [
    {
      key: ProjectRoute.randompass,
      value: 'Генератор паролей'
    },
    {
      key: ProjectRoute.randomvalue,
      value: 'Случайное значение'
    }
  ],
})
@Injectable()
export class ProjectListState {}
