const fs = require("fs")
const path = require("path")

// 读取字典文件
const enDict = require("../app/dictionaries/en.json")
const zhDict = require("../app/dictionaries/zh.json")

// 创建public目录（如果不存在）
const publicDir = path.join(__dirname, "../public/dictionaries")
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// 写入静态JSON文件
fs.writeFileSync(path.join(publicDir, "en.json"), JSON.stringify(enDict, null, 2))
fs.writeFileSync(path.join(publicDir, "zh.json"), JSON.stringify(zhDict, null, 2))

console.log("Static dictionary files generated successfully!")

