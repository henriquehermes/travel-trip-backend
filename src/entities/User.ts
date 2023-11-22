import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users")
export class User {
	@PrimaryColumn({ type: "varchar" })
	id: string

	@Column({ type: "varchar" })
	first_name: string

	@Column({ type: "varchar" })
	last_name: string

	@Column({ type: "varchar" })
	email: string

	@Column({ type: "varchar" })
	password: string

	@CreateDateColumn()
	created_at: Date

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}
