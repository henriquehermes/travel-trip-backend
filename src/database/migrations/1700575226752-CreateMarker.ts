import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMarker1700575226752 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "markers",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
					},
					{
						name: "type",
						type: "varchar",
					},
					{
						name: "amenities",
						type: "varchar",
						isArray: true,
					},
					{
						name: "pin_color",
						type: "varchar",
					},
					{
						name: "description",
						type: "text",
					},
					{
						name: "favorite",
						type: "boolean",
					},
					{
						name: "latitude",
						type: "numeric",
					},
					{
						name: "longitude",
						type: "numeric",
					},
					{
						name: "user_id",
						type: "uuid",
					},
				],
				foreignKeys: [
					{
						name: "fk_user_id",
						columnNames: ["user_id"],
						referencedTableName: "users",
						referencedColumnNames: ["id"],
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("markers")
	}
}
