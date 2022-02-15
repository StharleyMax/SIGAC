import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableAlarms1644925902535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alarms',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            isUnique: true,
            default: `uuid_generate_v4()`,
          },
          {
            name: 'id_client',
            type: 'uuid',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'slot',
            type: 'int',
          },
          {
            name: 'port',
            type: 'int',
          },
          {
            name: 'galc',
            type: 'varchar',
          },
          {
            name: 'onu',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_alarm_client',
            columnNames: ['id_client'],
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('alarms', 'FK_alarm_client');

    await queryRunner.dropTable('alarms');
  }
}
