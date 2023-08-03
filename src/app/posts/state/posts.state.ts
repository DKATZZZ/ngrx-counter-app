import { Posts } from "src/app/models/posts";

export interface PostsState{
    posts:Posts[];
}

export const initialstate:PostsState = {
    posts:[
        {id:'001',title:"Sample Title1",description:"sample description1"},
        {id:'002',title:"Sample Title2",description:"sample description2"}
    ],

}