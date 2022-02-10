import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class dropFkTableClient1644500792896 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('clients', 'User');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        name: 'User',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['id_user'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
