import {AssertiveStates} from '../enums/assertive-states';

export interface IAnnouncementEvent {
  text: string;
  assertiveState?: AssertiveStates;
}
