import { MigrationInterface, QueryRunner } from 'typeorm';

export class Disclosure1691412566043 implements MigrationInterface {
  name = 'Disclosure1691412566043';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "application_requirements" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "values" json NOT NULL, "description" character varying NOT NULL, "company_id" integer NOT NULL, "status" integer NOT NULL, "parent_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "REL_2e40c071e0bfe379efc284bd0f" UNIQUE ("parent_id"), CONSTRAINT "PK_df4ab2d2ffd7db68c740061714e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "disclosures" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "values" json NOT NULL, "description" character varying NOT NULL, "company_id" integer NOT NULL, "status" integer NOT NULL, "parent_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "application_requirements_id, " integer, CONSTRAINT "REL_f146e7423898f74e318c977b52" UNIQUE ("parent_id"), CONSTRAINT "REL_7213ef55bc02ba8c278bc696b2" UNIQUE ("application_requirements_id, "), CONSTRAINT "PK_891a486784239e16ba51491fd1c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "application_requirements" ADD CONSTRAINT "FK_2e40c071e0bfe379efc284bd0f7" FOREIGN KEY ("parent_id") REFERENCES "application_requirements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "disclosures" ADD CONSTRAINT "FK_f146e7423898f74e318c977b524" FOREIGN KEY ("parent_id") REFERENCES "disclosures"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "disclosures" ADD CONSTRAINT "FK_7213ef55bc02ba8c278bc696b2e" FOREIGN KEY ("application_requirements_id, ") REFERENCES "application_requirements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "disclosures" DROP CONSTRAINT "FK_7213ef55bc02ba8c278bc696b2e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "disclosures" DROP CONSTRAINT "FK_f146e7423898f74e318c977b524"`,
    );
    await queryRunner.query(
      `ALTER TABLE "application_requirements" DROP CONSTRAINT "FK_2e40c071e0bfe379efc284bd0f7"`,
    );
    await queryRunner.query(`DROP TABLE "disclosures"`);
    await queryRunner.query(`DROP TABLE "application_requirements"`);
  }
}
