import FtpDeploy from 'ftp-deploy';
import dotenv from 'dotenv';

dotenv.config();

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST || 'server85.viwefix.cz',
  port: 21,
  localRoot: './dist',
  remoteRoot: '/www_root/',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true,
};

try {
  console.log('🚀 Починаємо деплой...');
  const result = await ftpDeploy.deploy(config);
  console.log('✅ Деплой успішно завершено:', result);
} catch (error) {
  console.error('❌ Помилка деплою:', error);
  process.exit(1);
}
