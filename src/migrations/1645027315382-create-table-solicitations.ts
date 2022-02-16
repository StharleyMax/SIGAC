import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableSolicitations1645027315382
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solicitations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isUnique: true,
            default: `uuid_generate_v4()`,
          },
          {
            name: 'id_user',
            type: 'uuid',
          },
          {
            name: 'id_client',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'complaint',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_solicitation',
            columnNames: ['id_user'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
          },
          {
            name: 'fk_client_solicitation',
            columnNames: ['id_client'],
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('solicitations', 'fk_client_solicitation');
    await queryRunner.dropForeignKey('solicitations', 'fk_user_solicitation');

    await queryRunner.dropTable('solicitations');
  }
}
