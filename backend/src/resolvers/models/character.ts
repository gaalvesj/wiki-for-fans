
import { __Type } from "graphql";
import { Field, ID, ObjectType } from "type-graphql";


@ObjectType()
export class  Character{
    @Field(__Type => ID)
    id: String;

    @Field()
    name: string;

    @Field()
    characteristics: String;
    
    @Field()
    age: Number;
    
    @Field()
    anime: String;

    // @Field()
    // imageUrl: String;

}