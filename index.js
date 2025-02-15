const { execSync } = require('child_process')
const os = require('os')
const tree = require('tree-cli')

;(async function () {
  console.log(`
当前用户： ${os.userInfo().username}

用户目录： ${os.homedir()}

当前目录： ${__dirname}

执行 "npm config get cache" 的结果是：
${execSync('npm config get cache')}

执行 "yarn cache dir" 的结果是：
${execSync('yarn cache dir')}

执行 "pnpm config get store-dir" 的结果是（我猜是 undefined）：
${execSync('pnpm config get store-dir')}

当前目录结构：
${await tree({ base: '.', l: 3, d: true, a: true }).then(res => res.report)}

用户目录结构：
${await tree({ base: os.homedir(), l: 3, d: true, a: true }).then(res => res.report)}

目录 "/usr/local/share" 的结构：
${await tree({ base: '/usr/local/share', l: 5, a: true }).then(res => res.report)}
`)
})()
