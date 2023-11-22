import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("amenities")
export class Amenity {
	@PrimaryColumn({ type: "varchar" })
	id: string

	@Column({ type: "varchar" })
	name: string

	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}
}
