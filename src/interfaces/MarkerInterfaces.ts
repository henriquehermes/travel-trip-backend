export interface IMarker {
	id: string
	type: string
	amenities: string[]
	pin_color: string
	description: string
	favorite: boolean
	latitude: number
	longitude: number
	user_id: string
	created_at: Date
}
