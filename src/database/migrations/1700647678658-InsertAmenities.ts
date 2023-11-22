import { MigrationInterface, QueryRunner } from "typeorm"
import { v4 as uuid } from "uuid"

export class InsertAmenities1700647678658 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
            INSERT INTO amenities (id, name)
            VALUES ('${uuid()}', 'Parking'),
                   ('${uuid()}', 'Shower'),
                   ('${uuid()}', 'Drinking Water'),
                   ('${uuid()}', 'Place Fee'),
                   ('${uuid()}', 'Toilets'),
                   ('${uuid()}', 'Electricity'),
                   ('${uuid()}', 'Free Camping'),
                   ('${uuid()}', 'Hiking Trails');
        `)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE * FROM amenities`)
	}
}
