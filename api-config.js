/**
 * shenbing110 运行时 API 配置（部署后可直接修改本文件，无需重新构建）
 *
 * apiBase —— 后端接口前缀，二选一：
 *
 * ① 同域反代模式（默认，推荐）：保持 '/api'
 *    由部署侧 Nginx 将 /api 反代到后端（README「部署」节有现成配置）。
 *
 * ② 直连模式：改为后端完整地址
 *    'https://a.aws.wattley.top/home/api/v1'
 *    前提：后端已开启 CORS（a 项目 main.ts 已加入 enableCors，重新部署后生效）。
 */
window.SB_CONFIG = {
  apiBase: '/api',
}
