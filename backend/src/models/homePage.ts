import Client from '../database'

export class dashboardQuery {
  async index(): Promise<Array<string>> {
    try {
      let allResults: Array<string>
      const connection = await Client.connect()
      const sqlOrderCount = 'SELECT COUNT(id) as order_count FROM orders'
      const orderCountResult = await connection.query(sqlOrderCount)

      const sqlProductCount = 'SELECT COUNT(id) as product_count FROM products'
      const productCountResult = await connection.query(sqlProductCount)

      const sqlUserCount = 'SELECT COUNT(id) as user_count FROM users'
      const userCountResult = await connection.query(sqlUserCount)

      connection.release()
      // eslint-disable-next-line prefer-const
      allResults = [
        ...orderCountResult.rows,
        ...productCountResult.rows,
        ...userCountResult.rows,
      ]
      console.log(allResults)
      return allResults
    } catch (error) {
      throw new Error(`could not get dashboard query: ${error}`)
    }
  }
}
