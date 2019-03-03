import { State } from '@ngxs/store';
import { DictionaryState } from './states/dictionary/dictionary.state';
import { UserState } from './states/user/user.state';
import { ProgramState } from './states/program/program.state';
import { ActivityState } from './states/activity/activity.state';

export const EntityStates = [DictionaryState, UserState, ProgramState, ActivityState];

@State({
    name: 'entityStateModule',
    children: EntityStates,
})

export class EntityStateModule {}
