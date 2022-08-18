

export async function up(db, client) {
  await db.createCollection('users');
  await db.createCollection('reviews');
}
export async function down(db, client) {
}
