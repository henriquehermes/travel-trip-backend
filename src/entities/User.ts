import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users")
export class User {
	@PrimaryColumn()
	id: string

	@Column()
	first_name: string

	@Column()
	last_name: string

	@Column()
	email: string

	@Column()
	password: string

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}
