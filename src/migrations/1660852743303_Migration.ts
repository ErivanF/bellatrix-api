import { Db } from "mongodb"
import { MigrationInterface } from "mongo-migrate-ts"

export class Migration1660852743303 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection("users")
    await db.createCollection("reviews")
  }

  public async down(db: Db): Promise<any> {}
}
