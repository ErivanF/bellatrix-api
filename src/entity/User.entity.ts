import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID
    @Column()
    name: String
    @Column()
    email: String
    @Column()
    passwordHash: String
}