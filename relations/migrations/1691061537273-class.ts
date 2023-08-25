import { MigrationInterface, QueryRunner } from 'typeorm';

export class Class1691061537273 implements MigrationInterface {
  name = 'Class1691061537273';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "class" RENAME COLUMN "sessions" TO "shift"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "class" RENAME COLUMN "shift" TO "sessions"`,
    );
  }
}
