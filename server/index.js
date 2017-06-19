const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const json = require('koa-json');
const Router = require('koa-router');
const MP3 = require('mp3-duration');

const extname = path.extname;
const config = require(`./config.${process.env.NODE_ENV}.json`);

const app = new Koa();

app.use(json());

const router = new Router({
  prefix: '/api',
});

router
.get('/audio', async (ctx) => {
  const files = fs.readdirSync(config.audioDir)
    .filter(file => file.endsWith('.mp3'))
    .map(file => [file, fs.statSync(path.resolve(config.audioDir, file))])
    .map(([name, { filesize, mtime }]) => ({
      name,
      filesize,
      time: mtime,
      current: 0,
    }));

  const lengths = await Promise.all(files
    .map(file =>
      new Promise((resolve, reject) => {
        MP3(path.resolve(config.audioDir, file.name), (err, duration) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(duration);
        });
      })
    )
  );

  ctx.body = files.map((file, idx) => Object.assign({}, file, { length: lengths[idx] }));
})
.get('/audio/:file', (ctx) => {
  const file = ctx.params.file.split('/').pop();
  const fpath = path.join(config.audioDir, file);
  if (!fs.existsSync(fpath)) {
    return;
  }
  const fstat = fs.statSync(fpath);

  if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream(fpath);
  }
});

app.use(router.routes());

app.listen(3000);
