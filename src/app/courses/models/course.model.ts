export interface Course {
    id?:string;
    title: string;
    instructor: string;
    isAvailable: boolean;
    price: number;
    isfree: boolean;
}