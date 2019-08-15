export interface UserInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userRating: object;
    friends: Array<object>;
    groups: Array<number>;
    watchList: Array<object>;
    openConversations: Array<object>
}
