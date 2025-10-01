export interface Users {
    _id: string;
    fullName: string;
    userName: string;
    email: string;
    age?:number;
    password: string;
    role: string;
    date?: Date;
}
