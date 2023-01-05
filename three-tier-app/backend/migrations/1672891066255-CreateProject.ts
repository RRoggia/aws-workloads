import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateProject1672891066255 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE PROJECT (
        id SERIAL PRIMARY KEY,
        team VARCHAR(100),
        client VARCHAR(100),
        project VARCHAR(100),
        core VARCHAR(100),
        goLiveDate TIMESTAMP
     );`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE PROJECT;`)
  }

}
