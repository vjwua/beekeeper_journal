import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaInit1733850630156 implements MigrationInterface {
    name = 'SchemaInit1733850630156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`inspections\` (\`id\` varchar(36) NOT NULL, \`date\` datetime NOT NULL, \`notes\` varchar(255) NULL, \`actions\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`apiaries\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`location\` varchar(255) NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hives\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`type\` varchar(255) NULL, \`status\` varchar(255) NULL, \`apiaryId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`hives\` ADD CONSTRAINT \`FK_c2a54bf5b11739093590b4cbfca\` FOREIGN KEY (\`apiaryId\`) REFERENCES \`apiaries\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hives\` DROP FOREIGN KEY \`FK_c2a54bf5b11739093590b4cbfca\``);
        await queryRunner.query(`DROP TABLE \`hives\``);
        await queryRunner.query(`DROP TABLE \`apiaries\``);
        await queryRunner.query(`DROP TABLE \`inspections\``);
    }

}
