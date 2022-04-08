const { login_cellphone, user_cloud } = require('NeteaseCloudMusicApi');
const { createOpenAPI, createWebsocket } = require('qq-guild-bot');

async function main() {
  try {
    const result = await login_cellphone({
      phone: '15950033957',
      password: 'zxc159asd753',
    })
    console.log(result)
    const result2 = await user_cloud({
      cookie: result.body.cookie, // 凭证
    })
    console.log(result2.body)
  } catch (error) {
    console.log(error)
  }
}



main()
