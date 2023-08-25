import { MigrationInterface, QueryRunner } from 'typeorm';

export class Subject1691061671928 implements MigrationInterface {
  name = 'Subject1691061671928';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subject" ADD "wing" character varying(100) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "wing"`);
  }
}
