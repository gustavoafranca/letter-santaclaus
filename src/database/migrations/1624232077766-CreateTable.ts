import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1624232077766 implements MigrationInterface {
    name = 'CreateTable1624232077766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "letter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "city" character varying NOT NULL, "uf" character varying(2) NOT NULL, "behavior" character varying NOT NULL, "do" text NOT NULL, "gift" text NOT NULL, "createAT" TIMESTAMP NOT NULL DEFAULT now(), "updatedAT" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7a85cf0e444dff7c656a31b32bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_06456e6277736e3553f4a37ff6" ON "letter" ("name") `);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "createAT" TIMESTAMP NOT NULL DEFAULT now(), "updatedAT" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_78a916df40e02a9deb1c4b75ed"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "IDX_06456e6277736e3553f4a37ff6"`);
        await queryRunner.query(`DROP TABLE "letter"`);
    }

}
