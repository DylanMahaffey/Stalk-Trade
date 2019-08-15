export namespace Messages {
    export class Messanger {
        id: number;
        name: string;
        type: string;
        members: object;
        messages: Message[] = [];
        room: string;


        constructor(
            id: number,
            name: string, 
            type: string,
            members: object[]
        ){
            this.id = id;
            this.name = name;
            this.type = type;
            this.members = members;
        }
    }
    
    export class Message {
        id: number;
        author: string;
        authorId: number;
        body: string;

        constructor(
            id: number,
            author: string,
            authorId: number,
            body: string
        ){
            this.id = id
            this.author = author;
            this.authorId = authorId;
            this.body = body;
        }
    }
}
