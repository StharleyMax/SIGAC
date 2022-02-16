import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableAnswers1645027358286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'answers',
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
            name: 'id_alarm',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'id_solicitation',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'boolean',
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
            name: 'fk_alarm_answer',
            columnNames: ['id_alarm'],
            referencedTableName: 'alarms',
            referencedColumnNames: ['id'],
          },
          {
            name: 'fk_solicitation_answer',
            columnNames: ['id_solicitation'],
            referencedTableName: 'solicitations',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('answer', 'fk_solicitation_answer');
    await queryRunner.dropForeignKey('answer', 'fk_alarm_answer');

    await queryRunner.dropTable('answer');
  }
}
