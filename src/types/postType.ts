import { UserType } from './UserType';
import { CommentType } from './CommentType';

export interface PostType {
  userId: number,
  id: number,
  title: string,
  body: string,
  userOfPost: UserType | undefined,
  commentsOfPost: CommentType[] | undefined,
}
