import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAmenity1700554817235 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "amenities",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
					},
					{
						name: "name",
						type: "varchar",
						isUnique: true,
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("amenities")
	}
}
