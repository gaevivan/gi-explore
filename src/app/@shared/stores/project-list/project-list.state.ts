import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { Project } from '@shared/enums/project.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

type StateType = KeyValueObject<Project>;

@State<StateType[]>({
  name: 'ProjectListState',
  defaults: [
    {
      key: Project.randompass,
      value: 'Генератор паролей'
    },
    {
      key: Project.randomvalue,
      value: 'Случайное значение'
    }
  ],
})
@Injectable()
export class ProjectListState {}
