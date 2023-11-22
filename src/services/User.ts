import { User } from "../entities/User"
import { IUser } from "../interfaces/UserInterfaces"
import { UserRepository } from "../repositories/UserRepository"

export class CreateUserService {
	async execute({
		email,
		first_name,
		last_name,
		password,
	}: Pick<IUser, "email" | "first_name" | "last_name" | "password">): Promise<
		User | Error
	> {
		if (await UserRepository.findOneBy({ email })) {
			return new Error("User already exists")
		}

		if (!email) {
			throw new Error("Email is required")
		}

		const User = UserRepository.create({
			email,
			first_name,
			last_name,
			password,
		})

		await UserRepository.save(User)

		return User
	}
}

export class UpdateUserService {
	async execute({
		id,
		email,
		first_name,
		last_name,
	}: Pick<IUser, "id" | "email" | "first_name" | "last_name">): Promise<
		User | Error
	> {
		const user = await UserRepository.findOneBy({ id })

		if (!user) {
			return new Error("User not found")
		}
		user.email = email ?? user.email
		user.first_name = first_name ?? user.first_name
		user.last_name = last_name ?? user.last_name

		await UserRepository.save(user)

		return user
	}
}
