import { Field, InputType } from "type-graphql";

@InputType()
export class UserPasswordInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
