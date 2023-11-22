import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./User"

@Entity("markers")
export class Marker {
	@PrimaryColumn()
	id: string

	@Column()
	type: string

	@Column()
	amenities: string

	@Column()
	pin_color: string

	@Column()
	description: string

	@Column()
	favorite: boolean

	@Column()
	latitude: number

	@Column()
	longitude: number

	@Column()
	user_id: string

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}
