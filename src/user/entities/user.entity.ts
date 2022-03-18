import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column({ name: 'age' })
    age: number;

    @Column({ name: 'email', unique: true })
    email: string;

    @Column({ name: 'password' })
    password: string;
}