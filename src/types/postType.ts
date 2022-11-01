import { userType } from './userType';
import { commentType } from './commentType';

export interface postType {
  userId: number,
  id: number,
  title: string,
  body: string,
  userOfPost: userType | undefined,
  commentsOfPost: commentType[] | undefined,
}
