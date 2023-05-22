/*Aquivo configuração do SQLite
abaixo temos instanciação do bando, segundo a documentação do SQlite,
disponivem em: https://www.npmjs.com/package/sqlite
*/

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb () {
  return open({
    filename: './database.db',
    driver: sqlite3.Database
  })
}