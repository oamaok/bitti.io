const os = require('os');
const path = require('path');

const ShipitDeploy = require('shipit-deploy');

module.exports = (shipit) => {
  ShipitDeploy(shipit);

  const workspace = path.resolve(os.tmpdir(), 'shipit');

  shipit.initConfig({
    default: {
      workspace,
      repositoryUrl: 'git@github.com:oamaok/bitti.io',
      key: `${process.env.HOME}/.ssh/id_rsa`,
      keepReleases: 2,
      shallowClone: true,
      ignores: [
        '/client',
        '/node_modules',
        '/*.js',
        '/.*',
      ],
    },

    production: {
      deployTo: '/var/www/bitti.io',
      servers: 'teemu@bitti.io:20408',
      branch: 'master',
    },
  });

  shipit.blTask('install-modules', () =>
    shipit.local(
      'npm install --prod',
      { cwd: shipit.config.workspace }
    )
  );

  shipit.blTask('build-package', () =>
    shipit.local(
      'npm run build',
      { cwd: shipit.config.workspace }
    )
  );

  shipit.on('fetched', () => shipit.start([
    'install-modules',
    'build-package',
  ]));
};
