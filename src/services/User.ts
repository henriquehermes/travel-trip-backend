import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

type UserRequestProps = {
	email: string
}

export class CreateUserService {
	async execute({ email }: UserRequestProps): Promise<User | Error> {
		if (await UserRepository.findOneBy({ email })) {
			return new Error("User already exists")
		}

		if (!email) {
			throw new Error("Email is required")
		}

		const User = UserRepository.create({
			email,
		})

		await UserRepository.save(User)

		return User
	}
}
