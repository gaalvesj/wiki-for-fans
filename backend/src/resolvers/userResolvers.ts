import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Character } from "./models/character";
import crypto from "crypto"

@Resolver()
export class UserResolver {
    private data : Character[] = [];
    
    @Query(() => [Character])
    async Character(){
        return this.data
}

    @Mutation(() => Character)
    async CreateCharacter(
        @Arg("name") name: string,
        @Arg("age") age: number,
        @Arg("anime") anime: string,
        @Arg("characteristics") characteristics: string,
    ){
        const character = { id: crypto.randomUUID() ,name ,age ,anime, characteristics }
         this.data.push(character)

         return character;

    }

}