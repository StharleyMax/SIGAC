import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableClients1631302495258 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'gpon',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'voip',
            type: 'varchar',
          },
          {
            name: 'tellphone1',
            type: 'varchar',
          },
          {
            name: 'tellphone2',
            type: 'varchar',
          },
          {
            name: 'id_user',
            type: 'uuid',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'User',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['id_user'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('clients', 'User');

    await queryRunner.dropTable('clients');
  }
}
