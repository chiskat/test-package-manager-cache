const { execSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')
const tree = require('tree-cli')

;(async function () {
  console.log(`
当前用户： ${os.userInfo().username}

用户目录： ${os.homedir()}

当前目录： ${__dirname}

执行 "pnpm store path" 的结果是：
${execSync('pnpm store path')}

当前目录结构：
${await tree({ base: '.', l: 7, a: true, ignore: '.git' }).then(res => res.report)}

用户目录结构：
${await tree({ base: os.homedir(), l: 7, a: true }).then(res => res.report)}

目录 "/usr/local/share" 的结构：
${await tree({ base: '/usr/local/share', l: 7, a: true }).then(res => res.report)}

目录 "~/.local/share" 是否存在：
${fs.existsSync(path.join(os.homedir(), '.local', 'share'))}
`)
})()
