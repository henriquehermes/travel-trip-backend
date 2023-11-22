import {
	Entity,
	Column,
	PrimaryColumn,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./User"

@Entity("markers")
export class Marker {
	@PrimaryColumn({ type: "varchar" })
	id: string

	@Column({ type: "varchar" })
	type: string

	@Column({
		type: "varchar", // or you can use 'varchar' depending on your needs
		array: true, // this specifies that the column should accept an array of strings
	})
	amenities: string[]

	@Column({ type: "varchar" })
	pin_color: string

	@Column({ type: "text" })
	description: string

	@Column({ type: "boolean" })
	favorite: boolean

	@Column({ type: "numeric" })
	latitude: number

	@Column({ type: "numeric" })
	longitude: number

	@Column({ type: "varchar" })
	user_id: string

	@CreateDateColumn()
	created_at: Date

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}
