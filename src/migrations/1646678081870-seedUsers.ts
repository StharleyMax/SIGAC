import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedUsers1646678081870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "insert into users (registration, password, tellphone) values ('tr010101', '$2b$08$Fhe7FjS0wR1qEgIfXQLnUeRsmLVT4oAw0bcz1yxJh5w82.3sR4JS.', '61991110101')",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "delete from users where registration like 'tr010101'",
    );
  }
}
